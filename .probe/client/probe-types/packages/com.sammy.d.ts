declare module "packages/com/sammy/malum/registry/common/block/$WoodTypeRegistry" {
import {$WoodType, $WoodType$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"

export class $WoodTypeRegistry {
static readonly "RUNEWOOD": $WoodType
static readonly "SOULWOOD": $WoodType

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodTypeRegistry$Type = ($WoodTypeRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WoodTypeRegistry_ = $WoodTypeRegistry$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleTuning" {
import {$CrucibleTuning$CrucibleAttributeType, $CrucibleTuning$CrucibleAttributeType$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleTuning$CrucibleAttributeType"
import {$ICatalyzerAccelerationTarget, $ICatalyzerAccelerationTarget$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$ICatalyzerAccelerationTarget"
import {$CrucibleTuning$TuningModifier, $CrucibleTuning$TuningModifier$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleTuning$TuningModifier"
import {$CrucibleTuning$InverseTuningModifier, $CrucibleTuning$InverseTuningModifier$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleTuning$InverseTuningModifier"

export class $CrucibleTuning {
readonly "target": $ICatalyzerAccelerationTarget
readonly "tuningStrength": float
readonly "focusingSpeedMultiplier": $CrucibleTuning$TuningModifier
readonly "fuelUsageRate": $CrucibleTuning$InverseTuningModifier
readonly "damageChanceMultiplier": $CrucibleTuning$InverseTuningModifier
readonly "bonusYieldChanceMultiplier": $CrucibleTuning$TuningModifier
readonly "chainFocusingChanceMultiplier": $CrucibleTuning$TuningModifier
readonly "damageAbsorptionChanceMultiplier": $CrucibleTuning$TuningModifier
readonly "restorationChanceMultiplier": $CrucibleTuning$TuningModifier

constructor(arg0: $ICatalyzerAccelerationTarget$Type, arg1: float)

public "getTuningType"(): $CrucibleTuning$CrucibleAttributeType
get "tuningType"(): $CrucibleTuning$CrucibleAttributeType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrucibleTuning$Type = ($CrucibleTuning);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrucibleTuning_ = $CrucibleTuning$Type;
}}
declare module "packages/com/sammy/malum/common/block/storage/jar/$SpiritJarBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$WaterLoggedEntityBlock, $WaterLoggedEntityBlock$Type} from "packages/team/lodestar/lodestone/systems/block/$WaterLoggedEntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$SpiritJarBlockEntity, $SpiritJarBlockEntity$Type} from "packages/com/sammy/malum/common/block/storage/jar/$SpiritJarBlockEntity"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SpiritJarBlock<T extends $SpiritJarBlockEntity> extends $WaterLoggedEntityBlock<(T)> {
static readonly "SHAPE": $VoxelShape
static readonly "WATERLOGGED": $BooleanProperty
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

public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "handleAttack"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public static "makeShape"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritJarBlock$Type<T> = ($SpiritJarBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritJarBlock_<T> = $SpiritJarBlock$Type<(T)>;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/sets/rotten/$CurioVoraciousRing" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$LivingEntityUseItemEvent$Start, $LivingEntityUseItemEvent$Start$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEntityUseItemEvent$Start"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingEntityUseItemEvent$Finish, $LivingEntityUseItemEvent$Finish$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEntityUseItemEvent$Finish"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioVoraciousRing extends $MalumCurioItem {
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public static "accelerateEating"(arg0: $LivingEntityUseItemEvent$Start$Type): void
public static "finishEating"(arg0: $LivingEntityUseItemEvent$Finish$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioVoraciousRing$Type = ($CurioVoraciousRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioVoraciousRing_ = $CurioVoraciousRing$Type;
}}
declare module "packages/com/sammy/malum/common/block/nature/$MalumLogBLock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SpiritShardItem, $SpiritShardItem$Type} from "packages/com/sammy/malum/common/item/spirit/$SpiritShardItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$LodestoneLogBlock, $LodestoneLogBlock$Type} from "packages/team/lodestar/lodestone/systems/block/$LodestoneLogBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MalumLogBLock extends $LodestoneLogBlock {
readonly "stripped": $Supplier<($Block)>
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Block$Type)>, arg2: boolean)

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "createTotemPole"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $InteractionHand$Type, arg4: $BlockHitResult$Type, arg5: $ItemStack$Type, arg6: $SpiritShardItem$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalumLogBLock$Type = ($MalumLogBLock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MalumLogBLock_ = $MalumLogBLock$Type;
}}
declare module "packages/com/sammy/malum/common/recipe/$SpiritInfusionRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$SpiritInfusionRecipe, $SpiritInfusionRecipe$Type} from "packages/com/sammy/malum/common/recipe/$SpiritInfusionRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SpiritInfusionRecipe$Serializer implements $RecipeSerializer<($SpiritInfusionRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $SpiritInfusionRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $SpiritInfusionRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $SpiritInfusionRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $SpiritInfusionRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritInfusionRecipe$Serializer$Type = ($SpiritInfusionRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritInfusionRecipe$Serializer_ = $SpiritInfusionRecipe$Serializer$Type;
}}
declare module "packages/com/sammy/malum/common/block/storage/jar/$SpiritJarBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$LodestoneBlockEntity, $LodestoneBlockEntity$Type} from "packages/team/lodestar/lodestone/systems/blockentity/$LodestoneBlockEntity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SpiritJarBlockEntity extends $LodestoneBlockEntity {
 "type": $MalumSpiritType
 "count": integer
 "needsSync": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "tick"(): void
public "onUse"(arg0: $Player$Type, arg1: $InteractionHand$Type): $InteractionResult
public "onPlace"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): void
public "getItemPos"(): $Vec3
public "load"(arg0: $CompoundTag$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "insertAllSpirits"(arg0: $Player$Type): integer
public "insertFromStack"(arg0: $ItemStack$Type): integer
public "spawnUseParticles"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $MalumSpiritType$Type): void
public "insertHeldItem"(arg0: $Player$Type): integer
get "itemPos"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritJarBlockEntity$Type = ($SpiritJarBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritJarBlockEntity_ = $SpiritJarBlockEntity$Type;
}}
declare module "packages/com/sammy/malum/common/block/mana_mote/$MoteOfManaBlockEntity" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LodestoneBlockEntity, $LodestoneBlockEntity$Type} from "packages/team/lodestar/lodestone/systems/blockentity/$LodestoneBlockEntity"

export class $MoteOfManaBlockEntity extends $LodestoneBlockEntity {
 "needsSync": boolean
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoteOfManaBlockEntity$Type = ($MoteOfManaBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoteOfManaBlockEntity_ = $MoteOfManaBlockEntity$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/runes/miracle/$RuneFervorItem" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractRuneCurioItem, $AbstractRuneCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/runes/$AbstractRuneCurioItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$PlayerEvent$BreakSpeed, $PlayerEvent$BreakSpeed$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerEvent$BreakSpeed"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RuneFervorItem extends $AbstractRuneCurioItem {
readonly "spiritType": $MalumSpiritType
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public static "increaseDigSpeed"(arg0: $PlayerEvent$BreakSpeed$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneFervorItem$Type = ($RuneFervorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuneFervorItem_ = $RuneFervorItem$Type;
}}
declare module "packages/com/sammy/malum/common/worldgen/tree/$RunewoodTreeFeature" {
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$LodestoneBlockFiller$BlockStateEntry, $LodestoneBlockFiller$BlockStateEntry$Type} from "packages/team/lodestar/lodestone/systems/worldgen/$LodestoneBlockFiller$BlockStateEntry"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$LodestoneBlockFiller$LodestoneLayerToken, $LodestoneBlockFiller$LodestoneLayerToken$Type} from "packages/team/lodestar/lodestone/systems/worldgen/$LodestoneBlockFiller$LodestoneLayerToken"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$LodestoneBlockFiller$LodestoneBlockFillerLayer, $LodestoneBlockFiller$LodestoneBlockFillerLayer$Type} from "packages/team/lodestar/lodestone/systems/worldgen/$LodestoneBlockFiller$LodestoneBlockFillerLayer"
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$RunewoodTreeConfiguration, $RunewoodTreeConfiguration$Type} from "packages/com/sammy/malum/common/worldgen/tree/$RunewoodTreeConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$LodestoneBlockFiller, $LodestoneBlockFiller$Type} from "packages/team/lodestar/lodestone/systems/worldgen/$LodestoneBlockFiller"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $RunewoodTreeFeature extends $Feature<($RunewoodTreeConfiguration)> {
static readonly "LOGS": $LodestoneBlockFiller$LodestoneLayerToken
static readonly "LEAVES": $LodestoneBlockFiller$LodestoneLayerToken
static readonly "HANGING_LEAVES": $LodestoneBlockFiller$LodestoneLayerToken
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

public "place"(arg0: $FeaturePlaceContext$Type<($RunewoodTreeConfiguration$Type)>): boolean
public static "canPlace"(arg0: $WorldGenLevel$Type, arg1: $BlockPos$Type): boolean
public "addDownwardsTrunkConnections"(arg0: $BlockState$Type, arg1: $WorldGenLevel$Type, arg2: $LodestoneBlockFiller$Type, arg3: $BlockPos$Type): void
public "makeLeafSlice"(arg0: $LodestoneBlockFiller$LodestoneBlockFillerLayer$Type, arg1: $BlockPos$Type, arg2: integer, arg3: $LodestoneBlockFiller$BlockStateEntry$Type): void
public "makeLeafSlice"(arg0: $LodestoneBlockFiller$LodestoneBlockFillerLayer$Type, arg1: $BlockPos$Type, arg2: integer, arg3: $Supplier$Type<($LodestoneBlockFiller$BlockStateEntry$Type)>): void
public "makeLeafBlob"(arg0: $RunewoodTreeConfiguration$Type, arg1: $LodestoneBlockFiller$Type, arg2: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunewoodTreeFeature$Type = ($RunewoodTreeFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RunewoodTreeFeature_ = $RunewoodTreeFeature$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleAccelerationData$TunedValue" {
import {$CrucibleAccelerationData, $CrucibleAccelerationData$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleAccelerationData"
import {$CrucibleTuning$TuningModifier, $CrucibleTuning$TuningModifier$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleTuning$TuningModifier"

export class $CrucibleAccelerationData$TunedValue {
readonly "tuning": $CrucibleTuning$TuningModifier

constructor(arg0: $CrucibleTuning$TuningModifier$Type, arg1: float)

public "getValue"(arg0: $CrucibleAccelerationData$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrucibleAccelerationData$TunedValue$Type = ($CrucibleAccelerationData$TunedValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrucibleAccelerationData$TunedValue_ = $CrucibleAccelerationData$TunedValue$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/runes/madness/$RuneSpellMasteryItem" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractRuneCurioItem, $AbstractRuneCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/runes/$AbstractRuneCurioItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RuneSpellMasteryItem extends $AbstractRuneCurioItem {
readonly "spiritType": $MalumSpiritType
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "addAttributeModifiers"(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg1: $SlotContext$Type, arg2: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneSpellMasteryItem$Type = ($RuneSpellMasteryItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuneSpellMasteryItem_ = $RuneSpellMasteryItem$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$ICrucibleAccelerator" {
import {$ICatalyzerAccelerationTarget, $ICatalyzerAccelerationTarget$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$ICatalyzerAccelerationTarget"
import {$ICrucibleAccelerator$CrucibleAcceleratorType, $ICrucibleAccelerator$CrucibleAcceleratorType$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$ICrucibleAccelerator$CrucibleAcceleratorType"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AbstractAugmentItem, $AbstractAugmentItem$Type} from "packages/com/sammy/malum/common/item/augment/$AbstractAugmentItem"

export interface $ICrucibleAccelerator {

 "getTarget"(): $ICatalyzerAccelerationTarget
 "setTarget"(arg0: $ICatalyzerAccelerationTarget$Type): void
 "getAcceleratorType"(): $ICrucibleAccelerator$CrucibleAcceleratorType
 "getAugment"(): $ItemStack
 "addParticles"(arg0: $ICatalyzerAccelerationTarget$Type, arg1: $MalumSpiritType$Type): void
 "canContinueAccelerating"(): boolean
 "canStartAccelerating"(): boolean
 "getAugmentType"(): $Optional<($AbstractAugmentItem)>
}

export namespace $ICrucibleAccelerator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICrucibleAccelerator$Type = ($ICrucibleAccelerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICrucibleAccelerator_ = $ICrucibleAccelerator$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/spirit_altar/$SpiritAltarBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IAltarAccelerator, $IAltarAccelerator$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_altar/$IAltarAccelerator"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$LodestoneBlockEntityInventory, $LodestoneBlockEntityInventory$Type} from "packages/team/lodestar/lodestone/systems/blockentity/$LodestoneBlockEntityInventory"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$LodestoneBlockEntity, $LodestoneBlockEntity$Type} from "packages/team/lodestar/lodestone/systems/blockentity/$LodestoneBlockEntity"
import {$Easing, $Easing$Type} from "packages/team/lodestar/lodestone/systems/easing/$Easing"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SpiritInfusionRecipe, $SpiritInfusionRecipe$Type} from "packages/com/sammy/malum/common/recipe/$SpiritInfusionRecipe"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SpiritAltarBlockEntity extends $LodestoneBlockEntity {
 "speed": float
 "progress": integer
 "spiritYLevel": float
 "acceleratorPositions": $List<($BlockPos)>
 "accelerators": $List<($IAltarAccelerator)>
 "spiritAmount": float
 "spiritSpin": float
 "isCrafting": boolean
 "inventory": $LodestoneBlockEntityInventory
 "extrasInventory": $LodestoneBlockEntityInventory
 "spiritInventory": $LodestoneBlockEntityInventory
 "possibleRecipes": $List<($SpiritInfusionRecipe)>
 "recipe": $SpiritInfusionRecipe
 "internalInventory": $LazyOptional<($IItemHandler)>
 "exposedInventory": $LazyOptional<($IItemHandler)>
 "needsSync": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "init"(): void
public "consume"(): boolean
public "onBreak"(arg0: $Player$Type): void
public "tick"(): void
public "onUse"(arg0: $Player$Type, arg1: $InteractionHand$Type): $InteractionResult
public "getItemPos"(): $Vec3
public "load"(arg0: $CompoundTag$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "craft"(): void
public "getSpinUp"(arg0: $Easing$Type): float
public "getSpiritItemOffset"(arg0: integer, arg1: float): $Vec3
public "getCentralItemOffset"(): $Vec3
public "recalibrateAccelerators"(): void
get "itemPos"(): $Vec3
get "centralItemOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritAltarBlockEntity$Type = ($SpiritAltarBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritAltarBlockEntity_ = $SpiritAltarBlockEntity$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/weavers_workbench/$WeaversWorkbenchBlock" {
import {$WeaversWorkbenchBlockEntity, $WeaversWorkbenchBlockEntity$Type} from "packages/com/sammy/malum/common/block/curiosities/weavers_workbench/$WeaversWorkbenchBlockEntity"
import {$LodestoneEntityBlock, $LodestoneEntityBlock$Type} from "packages/team/lodestar/lodestone/systems/block/$LodestoneEntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $WeaversWorkbenchBlock<T extends $WeaversWorkbenchBlockEntity> extends $LodestoneEntityBlock<(T)> {
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaversWorkbenchBlock$Type<T> = ($WeaversWorkbenchBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeaversWorkbenchBlock_<T> = $WeaversWorkbenchBlock$Type<(T)>;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/sets/soulward/$CurioMagebaneBelt" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$IMalumEventResponderItem, $IMalumEventResponderItem$Type} from "packages/com/sammy/malum/common/item/$IMalumEventResponderItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioMagebaneBelt extends $MalumCurioItem implements $IMalumEventResponderItem {
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "onSoulwardAbsorbDamage"(arg0: $LivingHurtEvent$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: float, arg4: float): void
public "addAttributeModifiers"(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg1: $SlotContext$Type, arg2: $ItemStack$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "onSoulwardAbsorbDamage"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: float, arg3: float): void
public "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: float): float
public "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: float): float
public "pickupSpirit"(arg0: $LivingEntity$Type, arg1: double): void
public "hurtEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "hurtEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "killEvent"(arg0: $LivingDeathEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "killEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioMagebaneBelt$Type = ($CurioMagebaneBelt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioMagebaneBelt_ = $CurioMagebaneBelt$Type;
}}
declare module "packages/com/sammy/malum/common/worldgen/ore/$LayeredOreFeature" {
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
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$List, $List$Type} from "packages/java/util/$List"
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
import {$OreFeature, $OreFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$OreFeature"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $LayeredOreFeature extends $OreFeature {
 "oreConfigurations": $List<($OreConfiguration)>
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

constructor(arg0: $Codec$Type<($OreConfiguration$Type)>)

public "place"(arg0: $FeaturePlaceContext$Type<($OreConfiguration$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayeredOreFeature$Type = ($LayeredOreFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LayeredOreFeature_ = $LayeredOreFeature$Type;
}}
declare module "packages/com/sammy/malum/common/spiritrite/$TotemicRiteType" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TotemicRiteEffect, $TotemicRiteEffect$Type} from "packages/com/sammy/malum/common/spiritrite/$TotemicRiteEffect"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TotemBaseBlockEntity, $TotemBaseBlockEntity$Type} from "packages/com/sammy/malum/common/block/curiosities/totem/$TotemBaseBlockEntity"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $TotemicRiteType {
readonly "spirits": $List<($MalumSpiritType)>
readonly "identifier": string
readonly "effect": $TotemicRiteEffect
readonly "corruptedEffect": $TotemicRiteEffect

constructor(arg0: string, ...arg1: ($MalumSpiritType$Type)[])

public "makeDetailedDescriptor"(arg0: boolean): $List<($Component)>
public "translationIdentifier"(arg0: boolean): string
public "getIdentifyingSpirit"(): $MalumSpiritType
public "makeDescriptorComponent"(arg0: string, arg1: string): $Component
public "getIcon"(): $ResourceLocation
public "getRiteEffect"(arg0: boolean): $TotemicRiteEffect
public "executeRite"(arg0: $TotemBaseBlockEntity$Type): void
get "identifyingSpirit"(): $MalumSpiritType
get "icon"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TotemicRiteType$Type = ($TotemicRiteType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TotemicRiteType_ = $TotemicRiteType$Type;
}}
declare module "packages/com/sammy/malum/common/item/cosmetic/curios/$CurioTopHat" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$IEventResponderItem, $IEventResponderItem$Type} from "packages/team/lodestar/lodestone/systems/item/$IEventResponderItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioTopHat extends $MalumCurioItem implements $IEventResponderItem {
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "hurtEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "hurtEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "killEvent"(arg0: $LivingDeathEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "killEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioTopHat$Type = ($CurioTopHat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioTopHat_ = $CurioTopHat$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/runes/miracle/$RuneCullingItem" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractRuneCurioItem, $AbstractRuneCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/runes/$AbstractRuneCurioItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RuneCullingItem extends $AbstractRuneCurioItem {
readonly "spiritType": $MalumSpiritType
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "addAttributeModifiers"(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg1: $SlotContext$Type, arg2: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneCullingItem$Type = ($RuneCullingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuneCullingItem_ = $RuneCullingItem$Type;
}}
declare module "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ColorParticleDataBuilder, $ColorParticleDataBuilder$Type} from "packages/team/lodestar/lodestone/systems/particle/data/color/$ColorParticleDataBuilder"
import {$SpiritMoteBlock, $SpiritMoteBlock$Type} from "packages/com/sammy/malum/common/block/mana_mote/$SpiritMoteBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SpiritShardItem, $SpiritShardItem$Type} from "packages/com/sammy/malum/common/item/spirit/$SpiritShardItem"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$SpiritTypeBuilder, $SpiritTypeBuilder$Type} from "packages/com/sammy/malum/core/systems/spirit/$SpiritTypeBuilder"
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$SpiritVisualMotif, $SpiritVisualMotif$Type} from "packages/com/sammy/malum/core/systems/spirit/$SpiritVisualMotif"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$TextColor, $TextColor$Type} from "packages/net/minecraft/network/chat/$TextColor"

export class $MalumSpiritType {
readonly "identifier": string
readonly "spiritShard": $Supplier<($SpiritShardItem)>
readonly "spiritMote": $Supplier<($SpiritMoteBlock)>

constructor(arg0: string, arg1: $SpiritVisualMotif$Type, arg2: $Supplier$Type<($SpiritShardItem$Type)>, arg3: $Supplier$Type<($SpiritMoteBlock$Type)>, arg4: $Color$Type)

public static "create"(arg0: string, arg1: $SpiritVisualMotif$Type, arg2: $Supplier$Type<($SpiritShardItem$Type)>, arg3: $Supplier$Type<($SpiritMoteBlock$Type)>): $SpiritTypeBuilder
public "getItemColor"(): $Color
public "getPrimaryColor"(): $Color
public "getSecondaryColor"(): $Color
public "getItemRarity"(): $Rarity
public "getTextColor"(arg0: boolean): $TextColor
public "getSpiritShardFlavourTextComponent"(): $Component
public "getSpiritJarCounterComponent"(arg0: integer): $Component
public "getColorCoefficient"(): float
public "getSpiritDescription"(): string
public "getTotemGlowTexture"(): $ResourceLocation
public "getSpiritFlavourText"(): string
public "getTotemPoleBlockState"(arg0: boolean, arg1: $BlockHitResult$Type): $BlockState
public "getAlphaMultiplier"(): float
public "createColorData"(arg0: float): $ColorParticleDataBuilder
public "createColorData"(): $ColorParticleDataBuilder
get "itemColor"(): $Color
get "primaryColor"(): $Color
get "secondaryColor"(): $Color
get "itemRarity"(): $Rarity
get "spiritShardFlavourTextComponent"(): $Component
get "colorCoefficient"(): float
get "spiritDescription"(): string
get "totemGlowTexture"(): $ResourceLocation
get "spiritFlavourText"(): string
get "alphaMultiplier"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalumSpiritType$Type = ($MalumSpiritType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MalumSpiritType_ = $MalumSpiritType$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/$SpiritPouchItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$ItemInventory, $ItemInventory$Type} from "packages/team/lodestar/lodestone/systems/container/$ItemInventory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpiritPouchItem extends $Item {
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

public static "getInventory"(arg0: $ItemStack$Type): $ItemInventory
public "onDestroyed"(arg0: $ItemEntity$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "overrideStackedOnOther"(arg0: $ItemStack$Type, arg1: $Slot$Type, arg2: $ClickAction$Type, arg3: $Player$Type): boolean
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritPouchItem$Type = ($SpiritPouchItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritPouchItem_ = $SpiritPouchItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/runes/madness/$RuneHereticItem" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractRuneCurioItem, $AbstractRuneCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/runes/$AbstractRuneCurioItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IEventResponderItem, $IEventResponderItem$Type} from "packages/team/lodestar/lodestone/systems/item/$IEventResponderItem"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RuneHereticItem extends $AbstractRuneCurioItem implements $IEventResponderItem {
readonly "spiritType": $MalumSpiritType
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "takeDamageEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "hurtEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "hurtEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "killEvent"(arg0: $LivingDeathEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "killEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneHereticItem$Type = ($RuneHereticItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuneHereticItem_ = $RuneHereticItem$Type;
}}
declare module "packages/com/sammy/malum/visual_effects/networked/data/$NBTEffectData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $NBTEffectData {
static readonly "ITEM": string
readonly "compoundTag": $CompoundTag

constructor(arg0: $CompoundTag$Type)
constructor(arg0: $ItemStack$Type)

public "getStack"(): $ItemStack
get "stack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NBTEffectData$Type = ($NBTEffectData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NBTEffectData_ = $NBTEffectData$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$SpiritCrucibleCoreBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$WaterLoggedEntityBlock, $WaterLoggedEntityBlock$Type} from "packages/team/lodestar/lodestone/systems/block/$WaterLoggedEntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$SpiritCrucibleCoreBlockEntity, $SpiritCrucibleCoreBlockEntity$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$SpiritCrucibleCoreBlockEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SpiritCrucibleCoreBlock<T extends $SpiritCrucibleCoreBlockEntity> extends $WaterLoggedEntityBlock<(T)> {
static readonly "SHAPE": $VoxelShape
static readonly "WATERLOGGED": $BooleanProperty
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

public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public static "makeShape"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritCrucibleCoreBlock$Type<T> = ($SpiritCrucibleCoreBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritCrucibleCoreBlock_<T> = $SpiritCrucibleCoreBlock$Type<(T)>;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/armor/$SoulStainedSteelArmorItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MalumArmorItem, $MalumArmorItem$Type} from "packages/com/sammy/malum/common/item/curiosities/armor/$MalumArmorItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SoulStainedSteelArmorItem extends $MalumArmorItem {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "getTexture"(): string
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "createExtraAttributes"(arg0: $ArmorItem$Type$Type): $Multimap<($Attribute), ($AttributeModifier)>
public static "get"(arg0: $ItemStack$Type): $Equipable
get "texture"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulStainedSteelArmorItem$Type = ($SoulStainedSteelArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulStainedSteelArmorItem_ = $SoulStainedSteelArmorItem$Type;
}}
declare module "packages/com/sammy/malum/common/recipe/$SpiritFocusingRecipe" {
import {$AbstractSpiritListMalumRecipe, $AbstractSpiritListMalumRecipe$Type} from "packages/com/sammy/malum/common/recipe/$AbstractSpiritListMalumRecipe"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SpiritWithCount, $SpiritWithCount$Type} from "packages/com/sammy/malum/core/systems/recipe/$SpiritWithCount"

export class $SpiritFocusingRecipe extends $AbstractSpiritListMalumRecipe {
static readonly "NAME": string
readonly "time": integer
readonly "durabilityCost": integer
readonly "input": $Ingredient
readonly "output": $ItemStack
readonly "spirits": $List<($SpiritWithCount)>

constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: $Ingredient$Type, arg4: $ItemStack$Type, arg5: $List$Type<($SpiritWithCount$Type)>)

public static "getRecipe"(arg0: $Level$Type, arg1: $Predicate$Type<($SpiritFocusingRecipe$Type)>): $SpiritFocusingRecipe
public static "getRecipe"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $List$Type<($ItemStack$Type)>): $SpiritFocusingRecipe
public static "getRecipes"(arg0: $Level$Type): $List<($SpiritFocusingRecipe)>
public "doesInputMatch"(arg0: $ItemStack$Type): boolean
public "doesOutputMatch"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritFocusingRecipe$Type = ($SpiritFocusingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritFocusingRecipe_ = $SpiritFocusingRecipe$Type;
}}
declare module "packages/com/sammy/malum/common/item/codex/$EncyclopediaArcanaItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EncyclopediaArcanaItem extends $Item {
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

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EncyclopediaArcanaItem$Type = ($EncyclopediaArcanaItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EncyclopediaArcanaItem_ = $EncyclopediaArcanaItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/brooches/$CurioElaborateBrooch" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioElaborateBrooch extends $MalumCurioItem {
static readonly "ELABORATE_BROOCH_NECKLACE": $UUID
static readonly "ELABORATE_BROOCH_BELT": $UUID
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "addAttributeModifiers"(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg1: $SlotContext$Type, arg2: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioElaborateBrooch$Type = ($CurioElaborateBrooch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioElaborateBrooch_ = $CurioElaborateBrooch$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleTuning$CrucibleAttributeType" {
import {$CrucibleAccelerationData$TunedValue, $CrucibleAccelerationData$TunedValue$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleAccelerationData$TunedValue"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$CrucibleAccelerationData, $CrucibleAccelerationData$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleAccelerationData"
import {$ICatalyzerAccelerationTarget, $ICatalyzerAccelerationTarget$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$ICatalyzerAccelerationTarget"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"

export class $CrucibleTuning$CrucibleAttributeType extends $Enum<($CrucibleTuning$CrucibleAttributeType)> {
static readonly "NONE": $CrucibleTuning$CrucibleAttributeType
static readonly "FOCUSING_SPEED": $CrucibleTuning$CrucibleAttributeType
static readonly "FUEL_USAGE_RATE": $CrucibleTuning$CrucibleAttributeType
static readonly "INSTABILITY": $CrucibleTuning$CrucibleAttributeType
static readonly "FORTUNE_CHANCE": $CrucibleTuning$CrucibleAttributeType
static readonly "CHAIN_FOCUSING_CHANCE": $CrucibleTuning$CrucibleAttributeType
static readonly "SHIELDING_CHANCE": $CrucibleTuning$CrucibleAttributeType
static readonly "RESTORATION_CHANCE": $CrucibleTuning$CrucibleAttributeType
readonly "valueGetter": $Function<($CrucibleAccelerationData), ($CrucibleAccelerationData$TunedValue)>
readonly "isValueValid": $Predicate<($CrucibleAccelerationData)>
readonly "statDisplayFunction": $Function<($CrucibleAccelerationData), (string)>


public static "values"(): ($CrucibleTuning$CrucibleAttributeType)[]
public static "valueOf"(arg0: string): $CrucibleTuning$CrucibleAttributeType
public "next"(arg0: $CrucibleTuning$CrucibleAttributeType$Type, arg1: $ICatalyzerAccelerationTarget$Type): $CrucibleTuning$CrucibleAttributeType
public "translation"(): string
public static "getValidValues"(arg0: $CrucibleAccelerationData$Type): $List<($CrucibleTuning$CrucibleAttributeType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrucibleTuning$CrucibleAttributeType$Type = (("fuel_usage_rate") | ("restoration_chance") | ("fortune_chance") | ("chain_focusing_chance") | ("instability") | ("none") | ("shielding_chance") | ("focusing_speed")) | ($CrucibleTuning$CrucibleAttributeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrucibleTuning$CrucibleAttributeType_ = $CrucibleTuning$CrucibleAttributeType$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/runes/miracle/$RuneReactiveShieldingItem" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractRuneCurioItem, $AbstractRuneCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/runes/$AbstractRuneCurioItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IEventResponderItem, $IEventResponderItem$Type} from "packages/team/lodestar/lodestone/systems/item/$IEventResponderItem"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RuneReactiveShieldingItem extends $AbstractRuneCurioItem implements $IEventResponderItem {
readonly "spiritType": $MalumSpiritType
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "takeDamageEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "hurtEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "hurtEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "killEvent"(arg0: $LivingDeathEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "killEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneReactiveShieldingItem$Type = ($RuneReactiveShieldingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuneReactiveShieldingItem_ = $RuneReactiveShieldingItem$Type;
}}
declare module "packages/com/sammy/malum/visual_effects/networked/data/$PositionEffectData" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PositionEffectData {
readonly "posX": double
readonly "posY": double
readonly "posZ": double

constructor(arg0: double, arg1: double, arg2: double)
constructor(arg0: $Vec3$Type)
constructor(arg0: $Entity$Type)
constructor(arg0: $BlockPos$Type)
constructor(arg0: $FriendlyByteBuf$Type)

public "encode"(arg0: $FriendlyByteBuf$Type): void
public "getAsBlockPos"(): $BlockPos
get "asBlockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PositionEffectData$Type = ($PositionEffectData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PositionEffectData_ = $PositionEffectData$Type;
}}
declare module "packages/com/sammy/malum/common/effect/aura/$InfernalAura" {
import {$PlayerEvent$BreakSpeed, $PlayerEvent$BreakSpeed$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerEvent$BreakSpeed"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $InfernalAura extends $MobEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public static "increaseDigSpeed"(arg0: $PlayerEvent$BreakSpeed$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfernalAura$Type = ($InfernalAura);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfernalAura_ = $InfernalAura$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/sets/rotten/$CurioStarvedBelt" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$IMalumEventResponderItem, $IMalumEventResponderItem$Type} from "packages/com/sammy/malum/common/item/$IMalumEventResponderItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioStarvedBelt extends $MalumCurioItem implements $IMalumEventResponderItem {
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "pickupSpirit"(arg0: $LivingEntity$Type, arg1: double): void
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "onSoulwardAbsorbDamage"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: float, arg3: float): void
public "onSoulwardAbsorbDamage"(arg0: $LivingHurtEvent$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: float, arg4: float): void
public "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: float): float
public "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: float): float
public "hurtEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "hurtEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "killEvent"(arg0: $LivingDeathEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "killEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioStarvedBelt$Type = ($CurioStarvedBelt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioStarvedBelt_ = $CurioStarvedBelt$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/weapons/staff/$ErosionScepterItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AbstractStaffItem, $AbstractStaffItem$Type} from "packages/com/sammy/malum/common/item/curiosities/weapons/staff/$AbstractStaffItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$ColorParticleData, $ColorParticleData$Type} from "packages/team/lodestar/lodestone/systems/particle/data/color/$ColorParticleData"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ErosionScepterItem extends $AbstractStaffItem {
static readonly "MALIGNANT_PURPLE": $Color
static readonly "MALIGNANT_BLACK": $Color
static readonly "MALIGNANT_COLOR_DATA": $ColorParticleData
readonly "chargeDuration": float
readonly "magicDamage": float
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: float, arg2: $Item$Properties$Type)

public "fireProjectile"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $InteractionHand$Type, arg4: float, arg5: integer): void
public "spawnChargeParticles"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $Vec3$Type, arg3: $ItemStack$Type, arg4: float): void
public "getCooldownDuration"(arg0: $Level$Type, arg1: $LivingEntity$Type): integer
public "hurtEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "getProjectileCount"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: float): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ErosionScepterItem$Type = ($ErosionScepterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ErosionScepterItem_ = $ErosionScepterItem$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/totem/$TotemPoleBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TotemPoleBlockEntity, $TotemPoleBlockEntity$Type} from "packages/com/sammy/malum/common/block/curiosities/totem/$TotemPoleBlockEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LodestoneEntityBlock, $LodestoneEntityBlock$Type} from "packages/team/lodestar/lodestone/systems/block/$LodestoneEntityBlock"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $TotemPoleBlock<T extends $TotemPoleBlockEntity> extends $LodestoneEntityBlock<(T)> {
readonly "logBlock": $Supplier<(any)>
readonly "isSoulwood": boolean
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<(any)>, arg2: boolean)

public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TotemPoleBlock$Type<T> = ($TotemPoleBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TotemPoleBlock_<T> = $TotemPoleBlock$Type<(T)>;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/totem/$TotemPoleBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$TotemBaseBlockEntity, $TotemBaseBlockEntity$Type} from "packages/com/sammy/malum/common/block/curiosities/totem/$TotemBaseBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LodestoneBlockEntity, $LodestoneBlockEntity$Type} from "packages/team/lodestar/lodestone/systems/blockentity/$LodestoneBlockEntity"
import {$TotemPoleBlockEntity$TotemPoleState, $TotemPoleBlockEntity$TotemPoleState$Type} from "packages/com/sammy/malum/common/block/curiosities/totem/$TotemPoleBlockEntity$TotemPoleState"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TotemPoleBlockEntity extends $LodestoneBlockEntity {
 "type": $MalumSpiritType
 "totemPoleState": $TotemPoleBlockEntity$TotemPoleState
 "totemBase": $TotemBaseBlockEntity
 "totemBaseYLevel": integer
 "chargeProgress": integer
readonly "isSoulwood": boolean
readonly "logBlock": $Block
readonly "direction": $Direction
 "needsSync": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "init"(): void
public "setState"(arg0: $TotemPoleBlockEntity$TotemPoleState$Type): void
public "onBreak"(arg0: $Player$Type): void
public "tick"(): void
public "onUse"(arg0: $Player$Type, arg1: $InteractionHand$Type): $InteractionResult
public "load"(arg0: $CompoundTag$Type): void
public "riteStarting"(arg0: $TotemBaseBlockEntity$Type, arg1: integer): void
public "setSpirit"(arg0: $MalumSpiritType$Type): void
set "state"(value: $TotemPoleBlockEntity$TotemPoleState$Type)
set "spirit"(value: $MalumSpiritType$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TotemPoleBlockEntity$Type = ($TotemPoleBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TotemPoleBlockEntity_ = $TotemPoleBlockEntity$Type;
}}
declare module "packages/com/sammy/malum/common/effect/$SilencedEffect" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $SilencedEffect extends $MobEffect {

constructor()

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SilencedEffect$Type = ($SilencedEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SilencedEffect_ = $SilencedEffect$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$SpiritCrucibleComponentBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$MultiblockComponentBlock, $MultiblockComponentBlock$Type} from "packages/team/lodestar/lodestone/systems/multiblock/$MultiblockComponentBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SpiritCrucibleComponentBlock extends $MultiblockComponentBlock {
static readonly "SHAPE": $VoxelShape
static readonly "RENDER_SHAPE": $VoxelShape
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

public static "makeRenderShape"(): $VoxelShape
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getInteractionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public static "makeShape"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritCrucibleComponentBlock$Type = ($SpiritCrucibleComponentBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritCrucibleComponentBlock_ = $SpiritCrucibleComponentBlock$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/sets/spirit/$CurioMirrorNecklace" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$IMalumEventResponderItem, $IMalumEventResponderItem$Type} from "packages/com/sammy/malum/common/item/$IMalumEventResponderItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioMirrorNecklace extends $MalumCurioItem implements $IMalumEventResponderItem {
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "addAttributeModifiers"(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg1: $SlotContext$Type, arg2: $ItemStack$Type): void
public "onSoulwardAbsorbDamage"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: float, arg3: float): void
public "onSoulwardAbsorbDamage"(arg0: $LivingHurtEvent$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: float, arg4: float): void
public "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: float): float
public "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: float): float
public "pickupSpirit"(arg0: $LivingEntity$Type, arg1: double): void
public "hurtEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "hurtEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "killEvent"(arg0: $LivingDeathEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "killEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioMirrorNecklace$Type = ($CurioMirrorNecklace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioMirrorNecklace_ = $CurioMirrorNecklace$Type;
}}
declare module "packages/com/sammy/malum/common/block/storage/$IMalumSpecialItemAccessPoint" {
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$LodestoneBlockEntityInventory, $LodestoneBlockEntityInventory$Type} from "packages/team/lodestar/lodestone/systems/blockentity/$LodestoneBlockEntityInventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IMalumSpecialItemAccessPoint {

 "getItemPos"(arg0: float): $Vec3
 "getItemPos"(): $Vec3
 "getSuppliedInventory"(): $LodestoneBlockEntityInventory
 "getAccessPointBlockPos"(): $BlockPos
}

export namespace $IMalumSpecialItemAccessPoint {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMalumSpecialItemAccessPoint$Type = ($IMalumSpecialItemAccessPoint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMalumSpecialItemAccessPoint_ = $IMalumSpecialItemAccessPoint$Type;
}}
declare module "packages/com/sammy/malum/common/block/nature/soulwood/$SoulwoodBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$LodestoneLogBlock, $LodestoneLogBlock$Type} from "packages/team/lodestar/lodestone/systems/block/$LodestoneLogBlock"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $SoulwoodBlock extends $LodestoneLogBlock {
readonly "stripped": $Supplier<($Block)>
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Block$Type)>)

public "getToolModifiedState"(arg0: $BlockState$Type, arg1: $UseOnContext$Type, arg2: $ToolAction$Type, arg3: boolean): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulwoodBlock$Type = ($SoulwoodBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulwoodBlock_ = $SoulwoodBlock$Type;
}}
declare module "packages/com/sammy/malum/common/item/$IMalumEventResponderItem" {
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$IEventResponderItem, $IEventResponderItem$Type} from "packages/team/lodestar/lodestone/systems/item/$IEventResponderItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IMalumEventResponderItem extends $IEventResponderItem {

 "onSoulwardAbsorbDamage"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: float, arg3: float): void
 "onSoulwardAbsorbDamage"(arg0: $LivingHurtEvent$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: float, arg4: float): void
 "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: float): float
 "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: float): float
 "pickupSpirit"(arg0: $LivingEntity$Type, arg1: double): void
 "hurtEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
 "hurtEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
 "takeDamageEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
 "takeDamageEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
 "killEvent"(arg0: $LivingDeathEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
 "killEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
}

export namespace $IMalumEventResponderItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMalumEventResponderItem$Type = ($IMalumEventResponderItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMalumEventResponderItem_ = $IMalumEventResponderItem$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/weavers_workbench/$WeaversWorkbenchBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$WeaversWorkbenchItemHandler, $WeaversWorkbenchItemHandler$Type} from "packages/com/sammy/malum/common/block/curiosities/weavers_workbench/$WeaversWorkbenchItemHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$LodestoneBlockEntity, $LodestoneBlockEntity$Type} from "packages/team/lodestar/lodestone/systems/blockentity/$LodestoneBlockEntity"

export class $WeaversWorkbenchBlockEntity extends $LodestoneBlockEntity {
readonly "itemHandler": $WeaversWorkbenchItemHandler
 "needsSync": boolean
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "itemOffset"(): $Vec3
public "getOutput"(): $ItemStack
public "onUse"(arg0: $Player$Type, arg1: $InteractionHand$Type): $InteractionResult
public "getItemPos"(): $Vec3
public "onCraft"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
public "tryCraft"(): $ItemStack
get "output"(): $ItemStack
get "itemPos"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaversWorkbenchBlockEntity$Type = ($WeaversWorkbenchBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeaversWorkbenchBlockEntity_ = $WeaversWorkbenchBlockEntity$Type;
}}
declare module "packages/com/sammy/malum/common/recipe/$RunicWorkbenchRecipe" {
import {$AbstractMalumRecipe, $AbstractMalumRecipe$Type} from "packages/com/sammy/malum/common/recipe/$AbstractMalumRecipe"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IngredientWithCount, $IngredientWithCount$Type} from "packages/team/lodestar/lodestone/systems/recipe/$IngredientWithCount"

export class $RunicWorkbenchRecipe extends $AbstractMalumRecipe {
static readonly "NAME": string
readonly "primaryInput": $IngredientWithCount
readonly "secondaryInput": $IngredientWithCount
readonly "output": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: $IngredientWithCount$Type, arg2: $IngredientWithCount$Type, arg3: $ItemStack$Type)

public static "getRecipe"(arg0: $Level$Type, arg1: $Predicate$Type<($RunicWorkbenchRecipe$Type)>): $RunicWorkbenchRecipe
public static "getRecipe"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): $RunicWorkbenchRecipe
public static "getRecipes"(arg0: $Level$Type): $List<($RunicWorkbenchRecipe)>
public "doesSecondaryInputMatch"(arg0: $ItemStack$Type): boolean
public "doesPrimaryInputMatch"(arg0: $ItemStack$Type): boolean
public "doesOutputMatch"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunicWorkbenchRecipe$Type = ($RunicWorkbenchRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RunicWorkbenchRecipe_ = $RunicWorkbenchRecipe$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/$CurioGildedRing" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioGildedRing extends $MalumCurioItem {
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "addAttributeModifiers"(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg1: $SlotContext$Type, arg2: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioGildedRing$Type = ($CurioGildedRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioGildedRing_ = $CurioGildedRing$Type;
}}
declare module "packages/com/sammy/malum/common/block/mana_mote/$SoulstoneBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SoulstoneBlock extends $Block {
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

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulstoneBlock$Type = ($SoulstoneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulstoneBlock_ = $SoulstoneBlock$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/totem/$TotemBaseBlock" {
import {$LodestoneEntityBlock, $LodestoneEntityBlock$Type} from "packages/team/lodestar/lodestone/systems/block/$LodestoneEntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$TotemBaseBlockEntity, $TotemBaseBlockEntity$Type} from "packages/com/sammy/malum/common/block/curiosities/totem/$TotemBaseBlockEntity"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $TotemBaseBlock<T extends $TotemBaseBlockEntity> extends $LodestoneEntityBlock<(T)> {
readonly "corrupted": boolean
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: boolean)

public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TotemBaseBlock$Type<T> = ($TotemBaseBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TotemBaseBlock_<T> = $TotemBaseBlock$Type<(T)>;
}}
declare module "packages/com/sammy/malum/common/block/nature/$SapFilledLogBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$RotatedPillarBlock, $RotatedPillarBlock$Type} from "packages/net/minecraft/world/level/block/$RotatedPillarBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SapFilledLogBlock extends $RotatedPillarBlock {
readonly "drained": $Supplier<($Block)>
readonly "sap": $Supplier<($Item)>
readonly "sapColor": $Color
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Block$Type)>, arg2: $Supplier$Type<($Item$Type)>, arg3: $Color$Type)

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "collectSap"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SapFilledLogBlock$Type = ($SapFilledLogBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SapFilledLogBlock_ = $SapFilledLogBlock$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/spirit_altar/$IAltarAccelerator$AltarAcceleratorType" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $IAltarAccelerator$AltarAcceleratorType extends $Record {

constructor(maximumEntries: integer, type: string)

public "type"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "maximumEntries"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAltarAccelerator$AltarAcceleratorType$Type = ($IAltarAccelerator$AltarAcceleratorType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAltarAccelerator$AltarAcceleratorType_ = $IAltarAccelerator$AltarAcceleratorType$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/repair_pylon/$RepairPylonComponentBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$MultiblockComponentBlock, $MultiblockComponentBlock$Type} from "packages/team/lodestar/lodestone/systems/multiblock/$MultiblockComponentBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $RepairPylonComponentBlock extends $MultiblockComponentBlock {
static readonly "TOP_SHAPE": $VoxelShape
static readonly "MIDDLE_SHAPE": $VoxelShape
static readonly "TOP": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Item$Type)>)

public static "makeMiddleShape"(): $VoxelShape
public static "makeTopShape"(): $VoxelShape
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepairPylonComponentBlock$Type = ($RepairPylonComponentBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RepairPylonComponentBlock_ = $RepairPylonComponentBlock$Type;
}}
declare module "packages/com/sammy/malum/mixin/client/$AccessorFont" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FontSet, $FontSet$Type} from "packages/net/minecraft/client/gui/font/$FontSet"

export interface $AccessorFont {

 "malum$getFontSet"(arg0: $ResourceLocation$Type): $FontSet

(arg0: $ResourceLocation$Type): $FontSet
}

export namespace $AccessorFont {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorFont$Type = ($AccessorFont);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorFont_ = $AccessorFont$Type;
}}
declare module "packages/com/sammy/malum/common/item/augment/$ShieldingApparatusItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractAugmentItem, $AbstractAugmentItem$Type} from "packages/com/sammy/malum/common/item/augment/$AbstractAugmentItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ShieldingApparatusItem extends $AbstractAugmentItem {
readonly "spiritType": $MalumSpiritType
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

public "getShieldingChance"(): float
public "getSpeedIncrease"(): float
public "getInstabilityIncrease"(): float
get "shieldingChance"(): float
get "speedIncrease"(): float
get "instabilityIncrease"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShieldingApparatusItem$Type = ($ShieldingApparatusItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShieldingApparatusItem_ = $ShieldingApparatusItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/weapons/$WeightOfWorldsItem" {
import {$LodestoneAxeItem, $LodestoneAxeItem$Type} from "packages/team/lodestar/lodestone/systems/item/tools/$LodestoneAxeItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IEventResponderItem, $IEventResponderItem$Type} from "packages/team/lodestar/lodestone/systems/item/$IEventResponderItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WeightOfWorldsItem extends $LodestoneAxeItem implements $IEventResponderItem {
static "STRIPPABLES": $Map<($Block), ($Block)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public "hurtEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "killEvent"(arg0: $LivingDeathEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "hurtEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "killEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightOfWorldsItem$Type = ($WeightOfWorldsItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightOfWorldsItem_ = $WeightOfWorldsItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/sets/prospector/$CurioProspectorBelt" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ExplosionEvent$Detonate, $ExplosionEvent$Detonate$Type} from "packages/net/minecraftforge/event/level/$ExplosionEvent$Detonate"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $CurioProspectorBelt extends $MalumCurioItem {
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public static "processExplosion"(arg0: $ExplosionEvent$Detonate$Type): void
public static "applyFortune"(arg0: $Entity$Type, arg1: $LootParams$Builder$Type): $LootParams$Builder
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioProspectorBelt$Type = ($CurioProspectorBelt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioProspectorBelt_ = $CurioProspectorBelt$Type;
}}
declare module "packages/com/sammy/malum/common/block/nature/soulwood/$SoulwoodLogBlock" {
import {$MalumLogBLock, $MalumLogBLock$Type} from "packages/com/sammy/malum/common/block/nature/$MalumLogBLock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SpiritShardItem, $SpiritShardItem$Type} from "packages/com/sammy/malum/common/item/spirit/$SpiritShardItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SoulwoodLogBlock extends $MalumLogBLock {
readonly "stripped": $Supplier<($Block)>
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Block$Type)>, arg2: boolean)

public "getToolModifiedState"(arg0: $BlockState$Type, arg1: $UseOnContext$Type, arg2: $ToolAction$Type, arg3: boolean): $BlockState
public "createTotemPole"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $InteractionHand$Type, arg4: $BlockHitResult$Type, arg5: $ItemStack$Type, arg6: $SpiritShardItem$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulwoodLogBlock$Type = ($SoulwoodLogBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulwoodLogBlock_ = $SoulwoodLogBlock$Type;
}}
declare module "packages/com/sammy/malum/common/block/storage/$MalumItemHolderBlockEntity" {
import {$ItemHolderBlockEntity, $ItemHolderBlockEntity$Type} from "packages/team/lodestar/lodestone/systems/blockentity/$ItemHolderBlockEntity"
import {$IMalumSpecialItemAccessPoint, $IMalumSpecialItemAccessPoint$Type} from "packages/com/sammy/malum/common/block/storage/$IMalumSpecialItemAccessPoint"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$LodestoneBlockEntityInventory, $LodestoneBlockEntityInventory$Type} from "packages/team/lodestar/lodestone/systems/blockentity/$LodestoneBlockEntityInventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MalumItemHolderBlockEntity extends $ItemHolderBlockEntity implements $IMalumSpecialItemAccessPoint {
 "inventory": $LodestoneBlockEntityInventory
 "needsSync": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "tick"(): void
public "getItemPos"(arg0: float): $Vec3
public "getItemOffset"(arg0: float): $Vec3
public "getSuppliedInventory"(): $LodestoneBlockEntityInventory
public "getAccessPointBlockPos"(): $BlockPos
public "getItemPos"(): $Vec3
get "suppliedInventory"(): $LodestoneBlockEntityInventory
get "accessPointBlockPos"(): $BlockPos
get "itemPos"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalumItemHolderBlockEntity$Type = ($MalumItemHolderBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MalumItemHolderBlockEntity_ = $MalumItemHolderBlockEntity$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/obelisk/$ObeliskCoreBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$WaterLoggedEntityBlock, $WaterLoggedEntityBlock$Type} from "packages/team/lodestar/lodestone/systems/block/$WaterLoggedEntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ObeliskCoreBlockEntity, $ObeliskCoreBlockEntity$Type} from "packages/com/sammy/malum/common/block/curiosities/obelisk/$ObeliskCoreBlockEntity"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ObeliskCoreBlock<T extends $ObeliskCoreBlockEntity> extends $WaterLoggedEntityBlock<(T)> {
static readonly "SHAPE": $VoxelShape
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($BlockEntityType$Type<(T)>)>)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "makeShape"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObeliskCoreBlock$Type<T> = ($ObeliskCoreBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObeliskCoreBlock_<T> = $ObeliskCoreBlock$Type<(T)>;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/weeping_well/$WeepingWellPillarBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$LodestoneDirectionalBlock, $LodestoneDirectionalBlock$Type} from "packages/team/lodestar/lodestone/systems/block/$LodestoneDirectionalBlock"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $WeepingWellPillarBlock extends $LodestoneDirectionalBlock {
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

public "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeepingWellPillarBlock$Type = ($WeepingWellPillarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeepingWellPillarBlock_ = $WeepingWellPillarBlock$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/spirit_altar/$SpiritAltarBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$WaterLoggedEntityBlock, $WaterLoggedEntityBlock$Type} from "packages/team/lodestar/lodestone/systems/block/$WaterLoggedEntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$SpiritAltarBlockEntity, $SpiritAltarBlockEntity$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_altar/$SpiritAltarBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SpiritAltarBlock<T extends $SpiritAltarBlockEntity> extends $WaterLoggedEntityBlock<(T)> {
static readonly "SHAPE": $VoxelShape
static readonly "RENDER_SHAPE": $VoxelShape
static readonly "WATERLOGGED": $BooleanProperty
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

public static "makeRenderShape"(): $VoxelShape
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getInteractionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public static "makeShape"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritAltarBlock$Type<T> = ($SpiritAltarBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritAltarBlock_<T> = $SpiritAltarBlock$Type<(T)>;
}}
declare module "packages/com/sammy/malum/common/block/storage/pedestal/$ItemPedestalBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$WaterLoggedEntityBlock, $WaterLoggedEntityBlock$Type} from "packages/team/lodestar/lodestone/systems/block/$WaterLoggedEntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemPedestalBlockEntity, $ItemPedestalBlockEntity$Type} from "packages/com/sammy/malum/common/block/storage/pedestal/$ItemPedestalBlockEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ItemPedestalBlock<T extends $ItemPedestalBlockEntity> extends $WaterLoggedEntityBlock<(T)> {
static readonly "SHAPE": $VoxelShape
static readonly "WATERLOGGED": $BooleanProperty
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

public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPedestalBlock$Type<T> = ($ItemPedestalBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPedestalBlock_<T> = $ItemPedestalBlock$Type<(T)>;
}}
declare module "packages/com/sammy/malum/common/spiritrite/$TotemicRiteEffect" {
import {$TotemicRiteEffect$MalumRiteEffectCategory, $TotemicRiteEffect$MalumRiteEffectCategory$Type} from "packages/com/sammy/malum/common/spiritrite/$TotemicRiteEffect$MalumRiteEffectCategory"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$TotemBaseBlockEntity, $TotemBaseBlockEntity$Type} from "packages/com/sammy/malum/common/block/curiosities/totem/$TotemBaseBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TotemicRiteEffect {
readonly "category": $TotemicRiteEffect$MalumRiteEffectCategory


public "getBlocksAhead"(arg0: $TotemBaseBlockEntity$Type): $Stream<($BlockPos)>
public "getNearbyBlocks"(arg0: $TotemBaseBlockEntity$Type, arg1: $Class$Type<(any)>): $Stream<($BlockPos)>
public "canAffectBlock"(arg0: $TotemBaseBlockEntity$Type, arg1: $Class$Type<(any)>, arg2: $BlockPos$Type): boolean
public "canAffectBlock"(arg0: $TotemBaseBlockEntity$Type, arg1: $BlockPos$Type): boolean
public "canAffectBlock"(arg0: $TotemBaseBlockEntity$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): boolean
public "getRiteCoverageDescriptor"(): string
public "doRiteEffect"(arg0: $TotemBaseBlockEntity$Type): void
public "getNearbyEntities"<T extends $Entity>(arg0: $TotemBaseBlockEntity$Type, arg1: $Class$Type<(T)>, arg2: $Predicate$Type<(T)>): $Stream<(T)>
public "getNearbyEntities"<T extends $Entity>(arg0: $TotemBaseBlockEntity$Type, arg1: $Class$Type<(T)>): $Stream<(T)>
public "getRiteEffectCenter"(arg0: $TotemBaseBlockEntity$Type): $BlockPos
public "getRiteEffectHorizontalRadius"(): integer
public "getRiteEffectTickRate"(): integer
public "getRiteEffectVerticalRadius"(): integer
get "riteCoverageDescriptor"(): string
get "riteEffectHorizontalRadius"(): integer
get "riteEffectTickRate"(): integer
get "riteEffectVerticalRadius"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TotemicRiteEffect$Type = ($TotemicRiteEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TotemicRiteEffect_ = $TotemicRiteEffect$Type;
}}
declare module "packages/com/sammy/malum/common/block/ether/$EtherBrazierBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$EtherBlock, $EtherBlock$Type} from "packages/com/sammy/malum/common/block/ether/$EtherBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EtherBlockEntity, $EtherBlockEntity$Type} from "packages/com/sammy/malum/common/block/ether/$EtherBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $EtherBrazierBlock<T extends $EtherBlockEntity> extends $EtherBlock<(T)> {
static readonly "SHAPE": $VoxelShape
static readonly "ROTATED": $BooleanProperty
static readonly "HANGING": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
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

public "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtherBrazierBlock$Type<T> = ($EtherBrazierBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EtherBrazierBlock_<T> = $EtherBrazierBlock$Type<(T)>;
}}
declare module "packages/com/sammy/malum/common/item/ether/$EtherBrazierItem" {
import {$AbstractEtherItem, $AbstractEtherItem$Type} from "packages/com/sammy/malum/common/item/ether/$AbstractEtherItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$ScreenParticleHolder, $ScreenParticleHolder$Type} from "packages/team/lodestar/lodestone/systems/particle/screen/$ScreenParticleHolder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EtherBrazierItem extends $AbstractEtherItem {
static readonly "FIRST_COLOR": string
static readonly "SECOND_COLOR": string
static readonly "DEFAULT_FIRST_COLOR": integer
static readonly "DEFAULT_SECOND_COLOR": integer
readonly "iridescent": boolean
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type, arg2: boolean)

public "spawnLateParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtherBrazierItem$Type = ($EtherBrazierItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EtherBrazierItem_ = $EtherBrazierItem$Type;
}}
declare module "packages/com/sammy/malum/common/block/the_device/$TheDevice" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TheDevice extends $Block {
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

public "playSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TheDevice$Type = ($TheDevice);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TheDevice_ = $TheDevice$Type;
}}
declare module "packages/com/sammy/malum/common/item/augment/$MendingDiffuserItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractAugmentItem, $AbstractAugmentItem$Type} from "packages/com/sammy/malum/common/item/augment/$AbstractAugmentItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MendingDiffuserItem extends $AbstractAugmentItem {
readonly "spiritType": $MalumSpiritType
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

public "getRestorationChance"(): float
get "restorationChance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MendingDiffuserItem$Type = ($MendingDiffuserItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MendingDiffuserItem_ = $MendingDiffuserItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/$MagicKnifeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$Type} from "packages/com/google/common/collect/$ImmutableMultimap$Builder"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$MalumKnifeItem, $MalumKnifeItem$Type} from "packages/com/sammy/malum/common/item/curiosities/$MalumKnifeItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MagicKnifeItem extends $MalumKnifeItem {
readonly "magicDamage": float
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: float, arg2: float, arg3: float, arg4: $Item$Properties$Type)

public "createExtraAttributes"(): $ImmutableMultimap$Builder<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicKnifeItem$Type = ($MagicKnifeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicKnifeItem_ = $MagicKnifeItem$Type;
}}
declare module "packages/com/sammy/malum/common/effect/aura/$AqueousAura" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $AqueousAura extends $MobEffect {

constructor()

public static "growBoundingBox"(arg0: $Player$Type, arg1: $AABB$Type): $AABB
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AqueousAura$Type = ($AqueousAura);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AqueousAura_ = $AqueousAura$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/sets/prospector/$CurioDemolitionistRing" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioDemolitionistRing extends $MalumCurioItem {
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public static "increaseExplosionRadius"(arg0: $LivingEntity$Type, arg1: float): float
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioDemolitionistRing$Type = ($CurioDemolitionistRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioDemolitionistRing_ = $CurioDemolitionistRing$Type;
}}
declare module "packages/com/sammy/malum/common/recipe/$SpiritInfusionRecipe" {
import {$AbstractSpiritListMalumRecipe, $AbstractSpiritListMalumRecipe$Type} from "packages/com/sammy/malum/common/recipe/$AbstractSpiritListMalumRecipe"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IngredientWithCount, $IngredientWithCount$Type} from "packages/team/lodestar/lodestone/systems/recipe/$IngredientWithCount"
import {$SpiritWithCount, $SpiritWithCount$Type} from "packages/com/sammy/malum/core/systems/recipe/$SpiritWithCount"

export class $SpiritInfusionRecipe extends $AbstractSpiritListMalumRecipe {
static readonly "NAME": string
readonly "input": $IngredientWithCount
readonly "useNbtFromInput": boolean
readonly "output": $ItemStack
readonly "extraItems": $List<($IngredientWithCount)>
readonly "spirits": $List<($SpiritWithCount)>

constructor(arg0: $ResourceLocation$Type, arg1: $IngredientWithCount$Type, arg2: boolean, arg3: $ItemStack$Type, arg4: $List$Type<($SpiritWithCount$Type)>, arg5: $List$Type<($IngredientWithCount$Type)>)

public static "getRecipe"(arg0: $Level$Type, arg1: $Predicate$Type<($SpiritInfusionRecipe$Type)>): $SpiritInfusionRecipe
public static "getRecipe"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $List$Type<($ItemStack$Type)>): $SpiritInfusionRecipe
public static "getRecipes"(arg0: $Level$Type): $List<($SpiritInfusionRecipe)>
public "doesInputMatch"(arg0: $ItemStack$Type): boolean
public "doesOutputMatch"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritInfusionRecipe$Type = ($SpiritInfusionRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritInfusionRecipe_ = $SpiritInfusionRecipe$Type;
}}
declare module "packages/com/sammy/malum/common/enchantment/$SpiritPlunderEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $SpiritPlunderEnchantment extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritPlunderEnchantment$Type = ($SpiritPlunderEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritPlunderEnchantment_ = $SpiritPlunderEnchantment$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/sets/weeping/$CurioLimitlessBelt" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IVoidItem, $IVoidItem$Type} from "packages/com/sammy/malum/common/item/$IVoidItem"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$IMalumEventResponderItem, $IMalumEventResponderItem$Type} from "packages/com/sammy/malum/common/item/$IMalumEventResponderItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$ScreenParticleHolder, $ScreenParticleHolder$Type} from "packages/team/lodestar/lodestone/systems/particle/screen/$ScreenParticleHolder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioLimitlessBelt extends $MalumCurioItem implements $IMalumEventResponderItem, $IVoidItem {
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: float): float
public "addAttributeModifiers"(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg1: $SlotContext$Type, arg2: $ItemStack$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "onSoulwardAbsorbDamage"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: float, arg3: float): void
public "onSoulwardAbsorbDamage"(arg0: $LivingHurtEvent$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: float, arg4: float): void
public "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: float): float
public "pickupSpirit"(arg0: $LivingEntity$Type, arg1: double): void
public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public "getVoidParticleIntensity"(): float
public "hurtEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "hurtEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "killEvent"(arg0: $LivingDeathEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "killEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "spawnLateParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
get "voidParticleIntensity"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioLimitlessBelt$Type = ($CurioLimitlessBelt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioLimitlessBelt_ = $CurioLimitlessBelt$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/ritual_plinth/$RitualPlinthBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MalumRitualRecipeData, $MalumRitualRecipeData$Type} from "packages/com/sammy/malum/core/systems/ritual/$MalumRitualRecipeData"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$LodestoneBlockEntityInventory, $LodestoneBlockEntityInventory$Type} from "packages/team/lodestar/lodestone/systems/blockentity/$LodestoneBlockEntityInventory"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$LodestoneBlockEntity, $LodestoneBlockEntity$Type} from "packages/team/lodestar/lodestone/systems/blockentity/$LodestoneBlockEntity"
import {$MalumRitualTier, $MalumRitualTier$Type} from "packages/com/sammy/malum/core/systems/ritual/$MalumRitualTier"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MalumRitualType, $MalumRitualType$Type} from "packages/com/sammy/malum/core/systems/ritual/$MalumRitualType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RitualPlinthBlockEntity extends $LodestoneBlockEntity {
 "ritualType": $MalumRitualType
 "ritualTier": $MalumRitualTier
 "spiritAmount": integer
 "progress": integer
 "activeDuration": float
 "setupComplete": boolean
 "absorptionProgress": $Map<(any), (integer)>
 "ritualRecipe": $MalumRitualRecipeData
 "inventory": $LodestoneBlockEntityInventory
 "extrasInventory": $LodestoneBlockEntityInventory
 "internalInventory": $LazyOptional<($IItemHandler)>
 "exposedInventory": $LazyOptional<($IItemHandler)>
 "needsSync": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "init"(): void
public "consume"(): boolean
public "onBreak"(arg0: $Player$Type): void
public "getRitualIconOffset"(arg0: float): $Vec3
public "getParticlePositionPosition"(arg0: $Direction$Type): $Vec3
public "tick"(): void
public "onUse"(arg0: $Player$Type, arg1: $InteractionHand$Type): $InteractionResult
public "getItemPos"(): $Vec3
public "load"(arg0: $CompoundTag$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "completeCharging"(): void
public "beginCharging"(): void
public "getRitualIconPos"(): $Vec3
public "eatSpirits"(): void
public "getCentralItemOffset"(): $Vec3
get "itemPos"(): $Vec3
get "ritualIconPos"(): $Vec3
get "centralItemOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualPlinthBlockEntity$Type = ($RitualPlinthBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RitualPlinthBlockEntity_ = $RitualPlinthBlockEntity$Type;
}}
declare module "packages/com/sammy/malum/common/block/nature/$MalumHangingLeavesBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$MalumLeavesBlock, $MalumLeavesBlock$Type} from "packages/com/sammy/malum/common/block/nature/$MalumLeavesBlock"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MalumHangingLeavesBlock extends $MalumLeavesBlock {
static readonly "COLOR": $IntegerProperty
readonly "maxColor": $Color
readonly "minColor": $Color
static readonly "DECAY_DISTANCE": integer
static readonly "DISTANCE": $IntegerProperty
static readonly "PERSISTENT": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Color$Type, arg2: $Color$Type)

public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalumHangingLeavesBlock$Type = ($MalumHangingLeavesBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MalumHangingLeavesBlock_ = $MalumHangingLeavesBlock$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/nitrate/$VividNitrateItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractNitrateEntity, $AbstractNitrateEntity$Type} from "packages/com/sammy/malum/common/entity/nitrate/$AbstractNitrateEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AbstractNitrateItem, $AbstractNitrateItem$Type} from "packages/com/sammy/malum/common/item/curiosities/nitrate/$AbstractNitrateItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VividNitrateItem extends $AbstractNitrateItem {
readonly "entitySupplier": $Function<($Player), ($AbstractNitrateEntity)>
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
export type $VividNitrateItem$Type = ($VividNitrateItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VividNitrateItem_ = $VividNitrateItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/cosmetic/weaves/$GenericWeaveItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractWeaveItem, $AbstractWeaveItem$Type} from "packages/com/sammy/malum/common/item/cosmetic/weaves/$AbstractWeaveItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GenericWeaveItem extends $AbstractWeaveItem {
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericWeaveItem$Type = ($GenericWeaveItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericWeaveItem_ = $GenericWeaveItem$Type;
}}
declare module "packages/com/sammy/malum/visual_effects/networked/data/$ColorEffectData" {
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$ColorEffectData$ColorRecord, $ColorEffectData$ColorRecord$Type} from "packages/com/sammy/malum/visual_effects/networked/data/$ColorEffectData$ColorRecord"
import {$SpiritWithCount, $SpiritWithCount$Type} from "packages/com/sammy/malum/core/systems/recipe/$SpiritWithCount"

export class $ColorEffectData {
readonly "colorRecordList": $ArrayList<($ColorEffectData$ColorRecord)>
 "recordCycleCounter": integer

constructor(arg0: $Collection$Type<($ColorEffectData$ColorRecord$Type)>)
constructor(arg0: $Color$Type)
constructor(arg0: $MalumSpiritType$Type)
constructor(arg0: $Color$Type, arg1: $Color$Type)
constructor(arg0: $Color$Type, arg1: $Color$Type, arg2: $MalumSpiritType$Type)
constructor(arg0: $FriendlyByteBuf$Type)
constructor(arg0: $ColorEffectData$ColorRecord$Type)

public "encode"(arg0: $FriendlyByteBuf$Type): void
public static "fromRecipe"(arg0: $Collection$Type<($SpiritWithCount$Type)>): $ColorEffectData
public "getSpiritType"(): $MalumSpiritType
public "getSpiritType"(arg0: $ColorEffectData$ColorRecord$Type): $MalumSpiritType
public "getPrimaryColor"(arg0: $ColorEffectData$ColorRecord$Type): $Color
public "getSecondaryColor"(arg0: $ColorEffectData$ColorRecord$Type): $Color
public static "fromSpirits"(arg0: $Collection$Type<($MalumSpiritType$Type)>, arg1: $Function$Type<($MalumSpiritType$Type), ($ColorEffectData$ColorRecord$Type)>): $ColorEffectData
public static "fromSpirits"(arg0: $Collection$Type<($MalumSpiritType$Type)>): $ColorEffectData
public "getCyclingColorRecord"(): $ColorEffectData$ColorRecord
public "getDefaultColorRecord"(): $ColorEffectData$ColorRecord
public "getRandomColorRecord"(): $ColorEffectData$ColorRecord
get "spiritType"(): $MalumSpiritType
get "cyclingColorRecord"(): $ColorEffectData$ColorRecord
get "defaultColorRecord"(): $ColorEffectData$ColorRecord
get "randomColorRecord"(): $ColorEffectData$ColorRecord
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorEffectData$Type = ($ColorEffectData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorEffectData_ = $ColorEffectData$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$SpiritCrucibleCoreBlockEntity" {
import {$CrucibleTuning$CrucibleAttributeType, $CrucibleTuning$CrucibleAttributeType$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleTuning$CrucibleAttributeType"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MultiBlockStructure, $MultiBlockStructure$Type} from "packages/team/lodestar/lodestone/systems/multiblock/$MultiBlockStructure"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SpiritFocusingRecipe, $SpiritFocusingRecipe$Type} from "packages/com/sammy/malum/common/recipe/$SpiritFocusingRecipe"
import {$CrucibleAccelerationData, $CrucibleAccelerationData$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleAccelerationData"
import {$ICatalyzerAccelerationTarget, $ICatalyzerAccelerationTarget$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$ICatalyzerAccelerationTarget"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LodestoneBlockEntityInventory, $LodestoneBlockEntityInventory$Type} from "packages/team/lodestar/lodestone/systems/blockentity/$LodestoneBlockEntityInventory"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$MultiBlockCoreEntity, $MultiBlockCoreEntity$Type} from "packages/team/lodestar/lodestone/systems/multiblock/$MultiBlockCoreEntity"
import {$IMalumSpecialItemAccessPoint, $IMalumSpecialItemAccessPoint$Type} from "packages/com/sammy/malum/common/block/storage/$IMalumSpecialItemAccessPoint"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AbstractAugmentItem, $AbstractAugmentItem$Type} from "packages/com/sammy/malum/common/item/augment/$AbstractAugmentItem"

export class $SpiritCrucibleCoreBlockEntity extends $MultiBlockCoreEntity implements $ICatalyzerAccelerationTarget, $IMalumSpecialItemAccessPoint {
static readonly "STRUCTURE": $Supplier<($MultiBlockStructure)>
 "inventory": $LodestoneBlockEntityInventory
 "spiritInventory": $LodestoneBlockEntityInventory
 "augmentInventory": $LodestoneBlockEntityInventory
 "coreAugmentInventory": $LodestoneBlockEntityInventory
 "recipe": $SpiritFocusingRecipe
 "spiritAmount": float
 "spiritSpin": float
 "progress": float
 "queuedCracks": integer
 "crackTimer": integer
 "acceleratorData": $CrucibleAccelerationData
 "tuningType": $CrucibleTuning$CrucibleAttributeType
readonly "structure": $MultiBlockStructure
 "needsSync": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $MultiBlockStructure$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type)
constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "init"(): void
public "onBreak"(arg0: $Player$Type): void
public "tick"(): void
public "onUse"(arg0: $Player$Type, arg1: $InteractionHand$Type): $InteractionResult
public "getTuningType"(): $CrucibleTuning$CrucibleAttributeType
public "canBeAccelerated"(): boolean
public "getCoreAugment"(): $ItemStack
public "getItemPos"(arg0: float): $Vec3
public "load"(arg0: $CompoundTag$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "craft"(): void
public "getAugments"(): $List<($ItemStack)>
public "getAugmentItemOffset"(arg0: integer, arg1: float): $Vec3
public "getActiveSpiritType"(): $MalumSpiritType
public "getSuppliedInventory"(): $LodestoneBlockEntityInventory
public "getSpiritItemOffset"(arg0: integer, arg1: float): $Vec3
public "getAccelerationPoint"(): $Vec3
public "getCentralItemOffset"(): $Vec3
public "getAccessPointBlockPos"(): $BlockPos
public "getAccelerationData"(): $CrucibleAccelerationData
public "setAccelerationData"(arg0: $CrucibleAccelerationData$Type): void
public "getAugmentTypes"(): $List<($Optional<($AbstractAugmentItem)>)>
public "getLookupRange"(): integer
public "recalibrateAccelerators"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getItemPos"(): $Vec3
get "tuningType"(): $CrucibleTuning$CrucibleAttributeType
get "coreAugment"(): $ItemStack
get "augments"(): $List<($ItemStack)>
get "activeSpiritType"(): $MalumSpiritType
get "suppliedInventory"(): $LodestoneBlockEntityInventory
get "accelerationPoint"(): $Vec3
get "centralItemOffset"(): $Vec3
get "accessPointBlockPos"(): $BlockPos
get "accelerationData"(): $CrucibleAccelerationData
set "accelerationData"(value: $CrucibleAccelerationData$Type)
get "augmentTypes"(): $List<($Optional<($AbstractAugmentItem)>)>
get "lookupRange"(): integer
get "itemPos"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritCrucibleCoreBlockEntity$Type = ($SpiritCrucibleCoreBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritCrucibleCoreBlockEntity_ = $SpiritCrucibleCoreBlockEntity$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleTuning$TuningModifier" {
import {$CrucibleTuning$CrucibleAttributeType, $CrucibleTuning$CrucibleAttributeType$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleTuning$CrucibleAttributeType"
import {$CrucibleAccelerationData$TunedValue, $CrucibleAccelerationData$TunedValue$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleAccelerationData$TunedValue"
import {$CrucibleAccelerationData, $CrucibleAccelerationData$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleAccelerationData"
import {$CrucibleTuning$AppliedTuningType, $CrucibleTuning$AppliedTuningType$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleTuning$AppliedTuningType"
import {$CrucibleTuning, $CrucibleTuning$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleTuning"

export class $CrucibleTuning$TuningModifier {
static "DEFAULT": $CrucibleTuning$TuningModifier
readonly "attributeType": $CrucibleTuning$CrucibleAttributeType
readonly "appliedTuningType": $CrucibleTuning$AppliedTuningType
readonly "baseValue": float
readonly "tuningPotency": float

constructor(arg0: $CrucibleTuning$Type, arg1: $CrucibleTuning$CrucibleAttributeType$Type)
constructor(arg0: $CrucibleTuning$Type, arg1: $CrucibleTuning$CrucibleAttributeType$Type, arg2: float)

public "getRelativeValue"(arg0: $CrucibleAccelerationData$Type, arg1: $CrucibleAccelerationData$TunedValue$Type): float
public "getTuningMultiplier"(): float
public "createTunedValue"(arg0: float): $CrucibleAccelerationData$TunedValue
get "tuningMultiplier"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrucibleTuning$TuningModifier$Type = ($CrucibleTuning$TuningModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrucibleTuning$TuningModifier_ = $CrucibleTuning$TuningModifier$Type;
}}
declare module "packages/com/sammy/malum/core/systems/spirit/$SpiritTypeBuilder$SpiritTypeSupplier" {
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$SpiritVisualMotif, $SpiritVisualMotif$Type} from "packages/com/sammy/malum/core/systems/spirit/$SpiritVisualMotif"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$SpiritMoteBlock, $SpiritMoteBlock$Type} from "packages/com/sammy/malum/common/block/mana_mote/$SpiritMoteBlock"
import {$SpiritShardItem, $SpiritShardItem$Type} from "packages/com/sammy/malum/common/item/spirit/$SpiritShardItem"

export interface $SpiritTypeBuilder$SpiritTypeSupplier<T extends $MalumSpiritType> {

 "makeType"(arg0: string, arg1: $Supplier$Type<($SpiritShardItem$Type)>, arg2: $Supplier$Type<($SpiritMoteBlock$Type)>, arg3: $SpiritVisualMotif$Type, arg4: $Color$Type): T

(arg0: string, arg1: $Supplier$Type<($SpiritShardItem$Type)>, arg2: $Supplier$Type<($SpiritMoteBlock$Type)>, arg3: $SpiritVisualMotif$Type, arg4: $Color$Type): T
}

export namespace $SpiritTypeBuilder$SpiritTypeSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritTypeBuilder$SpiritTypeSupplier$Type<T> = ($SpiritTypeBuilder$SpiritTypeSupplier<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritTypeBuilder$SpiritTypeSupplier_<T> = $SpiritTypeBuilder$SpiritTypeSupplier$Type<(T)>;
}}
declare module "packages/com/sammy/malum/core/systems/spirit/$SpiritTypeBuilder" {
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$SpiritTypeBuilder$SpiritTypeSupplier, $SpiritTypeBuilder$SpiritTypeSupplier$Type} from "packages/com/sammy/malum/core/systems/spirit/$SpiritTypeBuilder$SpiritTypeSupplier"
import {$SpiritVisualMotif, $SpiritVisualMotif$Type} from "packages/com/sammy/malum/core/systems/spirit/$SpiritVisualMotif"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$SpiritMoteBlock, $SpiritMoteBlock$Type} from "packages/com/sammy/malum/common/block/mana_mote/$SpiritMoteBlock"
import {$SpiritShardItem, $SpiritShardItem$Type} from "packages/com/sammy/malum/common/item/spirit/$SpiritShardItem"

export class $SpiritTypeBuilder {
readonly "identifier": string
readonly "spiritShard": $Supplier<($SpiritShardItem)>
readonly "spiritMote": $Supplier<($SpiritMoteBlock)>
readonly "spiritVisualMotif": $SpiritVisualMotif
 "itemColor": $Color

constructor(arg0: string, arg1: $SpiritVisualMotif$Type, arg2: $Supplier$Type<($SpiritShardItem$Type)>, arg3: $Supplier$Type<($SpiritMoteBlock$Type)>)

public "build"(): $MalumSpiritType
public "build"<T extends $MalumSpiritType>(arg0: $SpiritTypeBuilder$SpiritTypeSupplier$Type<(T)>): T
public "setItemColor"(arg0: $Function$Type<($SpiritVisualMotif$Type), ($Color$Type)>): $SpiritTypeBuilder
public "setItemColor"(arg0: $Color$Type): $SpiritTypeBuilder
set "itemColor"(value: $Function$Type<($SpiritVisualMotif$Type), ($Color$Type)>)
set "itemColor"(value: $Color$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritTypeBuilder$Type = ($SpiritTypeBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritTypeBuilder_ = $SpiritTypeBuilder$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/totem/$TotemPoleBlockEntity$TotemPoleState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TotemPoleBlockEntity$TotemPoleState extends $Enum<($TotemPoleBlockEntity$TotemPoleState)> {
static readonly "INACTIVE": $TotemPoleBlockEntity$TotemPoleState
static readonly "VISUAL_ONLY": $TotemPoleBlockEntity$TotemPoleState
static readonly "CHARGING": $TotemPoleBlockEntity$TotemPoleState
static readonly "ACTIVE": $TotemPoleBlockEntity$TotemPoleState


public static "values"(): ($TotemPoleBlockEntity$TotemPoleState)[]
public static "valueOf"(arg0: string): $TotemPoleBlockEntity$TotemPoleState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TotemPoleBlockEntity$TotemPoleState$Type = (("inactive") | ("charging") | ("active") | ("visual_only")) | ($TotemPoleBlockEntity$TotemPoleState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TotemPoleBlockEntity$TotemPoleState_ = $TotemPoleBlockEntity$TotemPoleState$Type;
}}
declare module "packages/com/sammy/malum/common/effect/$RejectedEffect" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $RejectedEffect extends $MobEffect {

constructor()

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RejectedEffect$Type = ($RejectedEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RejectedEffect_ = $RejectedEffect$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/weapons/scythe/$MalumScytheItem" {
import {$ModCombatItem, $ModCombatItem$Type} from "packages/team/lodestar/lodestone/systems/item/$ModCombatItem"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$SimpleParticleType, $SimpleParticleType$Type} from "packages/net/minecraft/core/particles/$SimpleParticleType"
import {$IMalumEventResponderItem, $IMalumEventResponderItem$Type} from "packages/com/sammy/malum/common/item/$IMalumEventResponderItem"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MalumScytheItem extends $ModCombatItem implements $IMalumEventResponderItem {
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: float, arg2: float, arg3: $Item$Properties$Type)

public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public static "spawnSweepParticles"(arg0: $Player$Type, arg1: $SimpleParticleType$Type): void
public static "getScytheItemStack"(arg0: $DamageSource$Type, arg1: $LivingEntity$Type): $ItemStack
public "hurtEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "onSoulwardAbsorbDamage"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: float, arg3: float): void
public "onSoulwardAbsorbDamage"(arg0: $LivingHurtEvent$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: float, arg4: float): void
public "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: float): float
public "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: float): float
public "pickupSpirit"(arg0: $LivingEntity$Type, arg1: double): void
public "hurtEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "killEvent"(arg0: $LivingDeathEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "killEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalumScytheItem$Type = ($MalumScytheItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MalumScytheItem_ = $MalumScytheItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/augment/$AbstractAugmentItem" {
import {$CrucibleTuning$CrucibleAttributeType, $CrucibleTuning$CrucibleAttributeType$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleTuning$CrucibleAttributeType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemTooltipEvent, $ItemTooltipEvent$Type} from "packages/net/minecraftforge/event/entity/player/$ItemTooltipEvent"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractAugmentItem extends $Item {
readonly "spiritType": $MalumSpiritType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $MalumSpiritType$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getShieldingChance"(): float
public "getFortuneChance"(): float
public "getSpeedIncrease"(): float
public static "getAugmentType"(arg0: $ItemStack$Type): $Optional<($AbstractAugmentItem)>
public static "makeAugmentStatComponent"(arg0: string, arg1: float, arg2: boolean): $Optional<($Component)>
public static "makeAugmentStatComponent"(arg0: $CrucibleTuning$CrucibleAttributeType$Type, arg1: float, arg2: boolean): $Optional<($Component)>
public "getFuelUsageRateIncrease"(): float
public "getInstabilityIncrease"(): float
public "getChainFocusingChance"(): float
public "getRestorationChance"(): float
public "getWeakestAttributeMultiplier"(): float
public "getTuningStrengthIncrease"(): float
public "getAugmentTypeTranslator"(): string
public static "addAugmentAttributeTooltip"(arg0: $ItemTooltipEvent$Type): void
public static "addAugmentStatComponent"(arg0: $List$Type<($Component$Type)>, arg1: string, arg2: float): void
public static "addAugmentStatComponent"(arg0: $List$Type<($Component$Type)>, arg1: $CrucibleTuning$CrucibleAttributeType$Type, arg2: float): void
get "shieldingChance"(): float
get "fortuneChance"(): float
get "speedIncrease"(): float
get "fuelUsageRateIncrease"(): float
get "instabilityIncrease"(): float
get "chainFocusingChance"(): float
get "restorationChance"(): float
get "weakestAttributeMultiplier"(): float
get "tuningStrengthIncrease"(): float
get "augmentTypeTranslator"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAugmentItem$Type = ($AbstractAugmentItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractAugmentItem_ = $AbstractAugmentItem$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/obelisk/$ObeliskCoreBlockEntity" {
import {$MultiBlockCoreEntity, $MultiBlockCoreEntity$Type} from "packages/team/lodestar/lodestone/systems/multiblock/$MultiBlockCoreEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MultiBlockStructure, $MultiBlockStructure$Type} from "packages/team/lodestar/lodestone/systems/multiblock/$MultiBlockStructure"

export class $ObeliskCoreBlockEntity extends $MultiBlockCoreEntity {
readonly "structure": $MultiBlockStructure
 "needsSync": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $MultiBlockStructure$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObeliskCoreBlockEntity$Type = ($ObeliskCoreBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObeliskCoreBlockEntity_ = $ObeliskCoreBlockEntity$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/catalyzer/$SpiritCatalyzerCoreBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$WaterLoggedEntityBlock, $WaterLoggedEntityBlock$Type} from "packages/team/lodestar/lodestone/systems/block/$WaterLoggedEntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$SpiritCatalyzerCoreBlockEntity, $SpiritCatalyzerCoreBlockEntity$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/catalyzer/$SpiritCatalyzerCoreBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $SpiritCatalyzerCoreBlock<T extends $SpiritCatalyzerCoreBlockEntity> extends $WaterLoggedEntityBlock<(T)> {
static readonly "NORTH_SOUTH_SHAPE": $VoxelShape
static readonly "WEST_EAST_SHAPE": $VoxelShape
static readonly "WATERLOGGED": $BooleanProperty
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

public static "makeWestEastShape"(): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public static "makeNorthSouthShape"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritCatalyzerCoreBlock$Type<T> = ($SpiritCatalyzerCoreBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritCatalyzerCoreBlock_<T> = $SpiritCatalyzerCoreBlock$Type<(T)>;
}}
declare module "packages/com/sammy/malum/common/block/storage/stand/$ItemStandBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$WaterLoggedEntityBlock, $WaterLoggedEntityBlock$Type} from "packages/team/lodestar/lodestone/systems/block/$WaterLoggedEntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$ItemStandBlockEntity, $ItemStandBlockEntity$Type} from "packages/com/sammy/malum/common/block/storage/stand/$ItemStandBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $ItemStandBlock<T extends $ItemStandBlockEntity> extends $WaterLoggedEntityBlock<(T)> {
static readonly "UP": $VoxelShape
static readonly "DOWN": $VoxelShape
static readonly "SOUTH": $VoxelShape
static readonly "NORTH": $VoxelShape
static readonly "WEST": $VoxelShape
static readonly "EAST": $VoxelShape
static readonly "WATERLOGGED": $BooleanProperty
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
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStandBlock$Type<T> = ($ItemStandBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStandBlock_<T> = $ItemStandBlock$Type<(T)>;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/weeping_well/$VoidConduitBlock" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$VoidConduitBlockEntity, $VoidConduitBlockEntity$Type} from "packages/com/sammy/malum/common/block/curiosities/weeping_well/$VoidConduitBlockEntity"
import {$LodestoneEntityBlock, $LodestoneEntityBlock$Type} from "packages/team/lodestar/lodestone/systems/block/$LodestoneEntityBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $VoidConduitBlock<T extends $VoidConduitBlockEntity> extends $LodestoneEntityBlock<(T)> {
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

public "skipRendering"(arg0: $BlockState$Type, arg1: $BlockState$Type, arg2: $Direction$Type): boolean
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $Fluid$Type): boolean
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidConduitBlock$Type<T> = ($VoidConduitBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidConduitBlock_<T> = $VoidConduitBlock$Type<(T)>;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/runes/madness/$RuneToughnessItem" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractRuneCurioItem, $AbstractRuneCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/runes/$AbstractRuneCurioItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RuneToughnessItem extends $AbstractRuneCurioItem {
readonly "spiritType": $MalumSpiritType
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "addAttributeModifiers"(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg1: $SlotContext$Type, arg2: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneToughnessItem$Type = ($RuneToughnessItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuneToughnessItem_ = $RuneToughnessItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/misc/$BrillianceChunkItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BrillianceChunkItem extends $Item {
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

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getUseDuration"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrillianceChunkItem$Type = ($BrillianceChunkItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrillianceChunkItem_ = $BrillianceChunkItem$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/obelisk/runewood/$RunewoodObeliskBlockEntity" {
import {$IAltarAccelerator$AltarAcceleratorType, $IAltarAccelerator$AltarAcceleratorType$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_altar/$IAltarAccelerator$AltarAcceleratorType"
import {$SpiritAltarBlockEntity, $SpiritAltarBlockEntity$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_altar/$SpiritAltarBlockEntity"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$IAltarAccelerator, $IAltarAccelerator$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_altar/$IAltarAccelerator"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ObeliskCoreBlockEntity, $ObeliskCoreBlockEntity$Type} from "packages/com/sammy/malum/common/block/curiosities/obelisk/$ObeliskCoreBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MultiBlockStructure, $MultiBlockStructure$Type} from "packages/team/lodestar/lodestone/systems/multiblock/$MultiBlockStructure"

export class $RunewoodObeliskBlockEntity extends $ObeliskCoreBlockEntity implements $IAltarAccelerator {
static readonly "OBELISK": $IAltarAccelerator$AltarAcceleratorType
static readonly "STRUCTURE": $Supplier<($MultiBlockStructure)>
readonly "structure": $MultiBlockStructure
 "needsSync": boolean
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getParticleOffset"(): $Vec3
public "getAcceleratorType"(): $IAltarAccelerator$AltarAcceleratorType
public "addParticles"(arg0: $SpiritAltarBlockEntity$Type, arg1: $MalumSpiritType$Type): void
public "getAcceleration"(): float
public "canAccelerate"(): boolean
get "particleOffset"(): $Vec3
get "acceleratorType"(): $IAltarAccelerator$AltarAcceleratorType
get "acceleration"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunewoodObeliskBlockEntity$Type = ($RunewoodObeliskBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RunewoodObeliskBlockEntity_ = $RunewoodObeliskBlockEntity$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/runes/madness/$RuneBolsteringItem" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractRuneCurioItem, $AbstractRuneCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/runes/$AbstractRuneCurioItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RuneBolsteringItem extends $AbstractRuneCurioItem {
readonly "spiritType": $MalumSpiritType
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "addAttributeModifiers"(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg1: $SlotContext$Type, arg2: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneBolsteringItem$Type = ($RuneBolsteringItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuneBolsteringItem_ = $RuneBolsteringItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/misc/$FusedConsciousnessItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ScreenParticleHolder, $ScreenParticleHolder$Type} from "packages/team/lodestar/lodestone/systems/particle/screen/$ScreenParticleHolder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IVoidItem, $IVoidItem$Type} from "packages/com/sammy/malum/common/item/$IVoidItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SimpleFoiledItem, $SimpleFoiledItem$Type} from "packages/net/minecraft/world/item/$SimpleFoiledItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FusedConsciousnessItem extends $SimpleFoiledItem implements $IVoidItem {
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

public "getVoidParticleIntensity"(): float
public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public "spawnLateParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
get "voidParticleIntensity"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FusedConsciousnessItem$Type = ($FusedConsciousnessItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FusedConsciousnessItem_ = $FusedConsciousnessItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/runes/madness/$RuneIgneousSolaceItem" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractRuneCurioItem, $AbstractRuneCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/runes/$AbstractRuneCurioItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IEventResponderItem, $IEventResponderItem$Type} from "packages/team/lodestar/lodestone/systems/item/$IEventResponderItem"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RuneIgneousSolaceItem extends $AbstractRuneCurioItem implements $IEventResponderItem {
readonly "spiritType": $MalumSpiritType
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "takeDamageEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "hurtEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "hurtEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "killEvent"(arg0: $LivingDeathEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "killEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneIgneousSolaceItem$Type = ($RuneIgneousSolaceItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuneIgneousSolaceItem_ = $RuneIgneousSolaceItem$Type;
}}
declare module "packages/com/sammy/malum/client/particles/spiritflame/$SpiritFlameParticleType" {
import {$LodestoneWorldParticleType, $LodestoneWorldParticleType$Type} from "packages/team/lodestar/lodestone/systems/particle/world/type/$LodestoneWorldParticleType"

export class $SpiritFlameParticleType extends $LodestoneWorldParticleType {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritFlameParticleType$Type = ($SpiritFlameParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritFlameParticleType_ = $SpiritFlameParticleType$Type;
}}
declare module "packages/com/sammy/malum/common/block/nature/$MalumLeavesBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LeavesBlock, $LeavesBlock$Type} from "packages/net/minecraft/world/level/block/$LeavesBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IForgeBlock, $IForgeBlock$Type} from "packages/net/minecraftforge/common/extensions/$IForgeBlock"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $MalumLeavesBlock extends $LeavesBlock implements $IForgeBlock {
static readonly "COLOR": $IntegerProperty
readonly "maxColor": $Color
readonly "minColor": $Color
static readonly "DECAY_DISTANCE": integer
static readonly "DISTANCE": $IntegerProperty
static readonly "PERSISTENT": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Color$Type, arg2: $Color$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalumLeavesBlock$Type = ($MalumLeavesBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MalumLeavesBlock_ = $MalumLeavesBlock$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/weapons/staff/$AbstractStaffItem" {
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$Type} from "packages/com/google/common/collect/$ImmutableMultimap$Builder"
import {$ModCombatItem, $ModCombatItem$Type} from "packages/team/lodestar/lodestone/systems/item/$ModCombatItem"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$IMalumEventResponderItem, $IMalumEventResponderItem$Type} from "packages/com/sammy/malum/common/item/$IMalumEventResponderItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractStaffItem extends $ModCombatItem implements $IMalumEventResponderItem {
readonly "chargeDuration": float
readonly "magicDamage": float
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: float, arg2: integer, arg3: float, arg4: $Item$Properties$Type)
constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public "fireProjectile"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $InteractionHand$Type, arg4: float, arg5: integer): void
public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "createExtraAttributes"(): $ImmutableMultimap$Builder<($Attribute), ($AttributeModifier)>
public "getProjectileSpawnPos"(arg0: $LivingEntity$Type, arg1: $InteractionHand$Type, arg2: float, arg3: float): $Vec3
public "spawnChargeParticles"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $Vec3$Type, arg3: $ItemStack$Type, arg4: float): void
public "getCooldownDuration"(arg0: $Level$Type, arg1: $LivingEntity$Type): integer
public "hurtEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "getProjectileCount"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: float): integer
public "onSoulwardAbsorbDamage"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: float, arg3: float): void
public "onSoulwardAbsorbDamage"(arg0: $LivingHurtEvent$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: float, arg4: float): void
public "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: float): float
public "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: float): float
public "pickupSpirit"(arg0: $LivingEntity$Type, arg1: double): void
public "hurtEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "killEvent"(arg0: $LivingDeathEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "killEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractStaffItem$Type = ($AbstractStaffItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractStaffItem_ = $AbstractStaffItem$Type;
}}
declare module "packages/com/sammy/malum/common/block/storage/pedestal/$ItemPedestalBlockEntity" {
import {$MalumItemHolderBlockEntity, $MalumItemHolderBlockEntity$Type} from "packages/com/sammy/malum/common/block/storage/$MalumItemHolderBlockEntity"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LodestoneBlockEntityInventory, $LodestoneBlockEntityInventory$Type} from "packages/team/lodestar/lodestone/systems/blockentity/$LodestoneBlockEntityInventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ItemPedestalBlockEntity extends $MalumItemHolderBlockEntity {
static readonly "PEDESTAL_ITEM_OFFSET": $Vec3
 "inventory": $LodestoneBlockEntityInventory
 "needsSync": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getItemOffset"(arg0: float): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPedestalBlockEntity$Type = ($ItemPedestalBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPedestalBlockEntity_ = $ItemPedestalBlockEntity$Type;
}}
declare module "packages/com/sammy/malum/common/item/spirit/$SpiritShardItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ParticleEmitterHandler$ItemParticleSupplier, $ParticleEmitterHandler$ItemParticleSupplier$Type} from "packages/team/lodestar/lodestone/handlers/screenparticle/$ParticleEmitterHandler$ItemParticleSupplier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ScreenParticleHolder, $ScreenParticleHolder$Type} from "packages/team/lodestar/lodestone/systems/particle/screen/$ScreenParticleHolder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpiritShardItem extends $Item implements $ParticleEmitterHandler$ItemParticleSupplier {
readonly "type": $MalumSpiritType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $MalumSpiritType$Type)

public "spawnLateParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritShardItem$Type = ($SpiritShardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritShardItem_ = $SpiritShardItem$Type;
}}
declare module "packages/com/sammy/malum/common/effect/$SacrificialEmpowermentEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $SacrificialEmpowermentEffect extends $MobEffect {

constructor()

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SacrificialEmpowermentEffect$Type = ($SacrificialEmpowermentEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SacrificialEmpowermentEffect_ = $SacrificialEmpowermentEffect$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/sets/alchemical/$CurioAlchemicalRing" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$IMalumEventResponderItem, $IMalumEventResponderItem$Type} from "packages/com/sammy/malum/common/item/$IMalumEventResponderItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioAlchemicalRing extends $MalumCurioItem implements $IMalumEventResponderItem {
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "pickupSpirit"(arg0: $LivingEntity$Type, arg1: double): void
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "onSoulwardAbsorbDamage"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: float, arg3: float): void
public "onSoulwardAbsorbDamage"(arg0: $LivingHurtEvent$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: float, arg4: float): void
public "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: float): float
public "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: float): float
public "hurtEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "hurtEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "killEvent"(arg0: $LivingDeathEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "killEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioAlchemicalRing$Type = ($CurioAlchemicalRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioAlchemicalRing_ = $CurioAlchemicalRing$Type;
}}
declare module "packages/com/sammy/malum/common/item/misc/$BlightedGunkItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemNameBlockItem, $ItemNameBlockItem$Type} from "packages/net/minecraft/world/item/$ItemNameBlockItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlightedGunkItem extends $ItemNameBlockItem {
readonly "wallPlacement": $Block
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

constructor(arg0: $Item$Properties$Type)
constructor(arg0: $Block$Type, arg1: $Block$Type, arg2: $Item$Properties$Type)

public "removeFromBlockToItemMap"(arg0: $Map$Type<($Block$Type), ($Item$Type)>, arg1: $Item$Type): void
public "registerBlocks"(arg0: $Map$Type<($Block$Type), ($Item$Type)>, arg1: $Item$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlightedGunkItem$Type = ($BlightedGunkItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlightedGunkItem_ = $BlightedGunkItem$Type;
}}
declare module "packages/com/sammy/malum/core/systems/ritual/$MalumRitualTier" {
import {$RitualPlinthBlockEntity, $RitualPlinthBlockEntity$Type} from "packages/com/sammy/malum/common/block/curiosities/ritual_plinth/$RitualPlinthBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $MalumRitualTier {
static readonly "TIERS": $List<($MalumRitualTier)>
static readonly "FADED": $MalumRitualTier
static readonly "DIM": $MalumRitualTier
static readonly "VAGUE": $MalumRitualTier
static readonly "BRIGHT": $MalumRitualTier
static readonly "VIVID": $MalumRitualTier
static readonly "RADIANT": $MalumRitualTier
readonly "identifier": $ResourceLocation
readonly "spiritThreshold": integer
readonly "potency": integer

constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer)

public static "create"(arg0: $MalumRitualTier$Type): $MalumRitualTier
public "translationIdentifier"(): string
public "getDecorTexture"(): $ResourceLocation
public "isGreaterThan"(arg0: $MalumRitualTier$Type): boolean
public static "figureOutTier"(arg0: $RitualPlinthBlockEntity$Type): $MalumRitualTier
public static "figureOutTier"(arg0: integer): $MalumRitualTier
get "decorTexture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalumRitualTier$Type = ($MalumRitualTier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MalumRitualTier_ = $MalumRitualTier$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/runic_workbench/$RunicWorkbenchBlock" {
import {$RunicWorkbenchBlockEntity, $RunicWorkbenchBlockEntity$Type} from "packages/com/sammy/malum/common/block/curiosities/runic_workbench/$RunicWorkbenchBlockEntity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LodestoneEntityBlock, $LodestoneEntityBlock$Type} from "packages/team/lodestar/lodestone/systems/block/$LodestoneEntityBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $RunicWorkbenchBlock<T extends $RunicWorkbenchBlockEntity> extends $LodestoneEntityBlock<(T)> {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "makeShape"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunicWorkbenchBlock$Type<T> = ($RunicWorkbenchBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RunicWorkbenchBlock_<T> = $RunicWorkbenchBlock$Type<(T)>;
}}
declare module "packages/com/sammy/malum/common/block/blight/$BlightedGrowthBlock" {
import {$IForgeShearable, $IForgeShearable$Type} from "packages/net/minecraftforge/common/$IForgeShearable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BonemealableBlock, $BonemealableBlock$Type} from "packages/net/minecraft/world/level/block/$BonemealableBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BushBlock, $BushBlock$Type} from "packages/net/minecraft/world/level/block/$BushBlock"

export class $BlightedGrowthBlock extends $BushBlock implements $BonemealableBlock, $IForgeShearable {
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

public "isValidBonemealTarget"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): boolean
public "isBonemealSuccess"(arg0: $Level$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "onSheared"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: integer): $List<($ItemStack)>
public "isShearable"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlightedGrowthBlock$Type = ($BlightedGrowthBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlightedGrowthBlock_ = $BlightedGrowthBlock$Type;
}}
declare module "packages/com/sammy/malum/common/block/blight/$ClingingBlightBlock$BlightType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ClingingBlightBlock$BlightType extends $Enum<($ClingingBlightBlock$BlightType)> implements $StringRepresentable {
static readonly "GROUNDED_ROOTS": $ClingingBlightBlock$BlightType
static readonly "ROOTED_BLIGHT": $ClingingBlightBlock$BlightType
static readonly "SOULWOOD_SPIKE": $ClingingBlightBlock$BlightType
static readonly "HANGING_BLIGHT_CONNECTION": $ClingingBlightBlock$BlightType
static readonly "HANGING_BLIGHT": $ClingingBlightBlock$BlightType
static readonly "HANGING_ROOTS": $ClingingBlightBlock$BlightType


public static "values"(): ($ClingingBlightBlock$BlightType)[]
public static "valueOf"(arg0: string): $ClingingBlightBlock$BlightType
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClingingBlightBlock$BlightType$Type = (("grounded_roots") | ("rooted_blight") | ("soulwood_spike") | ("hanging_blight") | ("hanging_roots") | ("hanging_blight_connection")) | ($ClingingBlightBlock$BlightType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClingingBlightBlock$BlightType_ = $ClingingBlightBlock$BlightType$Type;
}}
declare module "packages/com/sammy/malum/common/recipe/$RunicWorkbenchRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$RunicWorkbenchRecipe, $RunicWorkbenchRecipe$Type} from "packages/com/sammy/malum/common/recipe/$RunicWorkbenchRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $RunicWorkbenchRecipe$Serializer implements $RecipeSerializer<($RunicWorkbenchRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $RunicWorkbenchRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $RunicWorkbenchRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $RunicWorkbenchRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $RunicWorkbenchRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunicWorkbenchRecipe$Serializer$Type = ($RunicWorkbenchRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RunicWorkbenchRecipe$Serializer_ = $RunicWorkbenchRecipe$Serializer$Type;
}}
declare module "packages/com/sammy/malum/common/item/ether/$EtherItem" {
import {$AbstractEtherItem, $AbstractEtherItem$Type} from "packages/com/sammy/malum/common/item/ether/$AbstractEtherItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$ScreenParticleHolder, $ScreenParticleHolder$Type} from "packages/team/lodestar/lodestone/systems/particle/screen/$ScreenParticleHolder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EtherItem extends $AbstractEtherItem {
static readonly "FIRST_COLOR": string
static readonly "SECOND_COLOR": string
static readonly "DEFAULT_FIRST_COLOR": integer
static readonly "DEFAULT_SECOND_COLOR": integer
readonly "iridescent": boolean
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type, arg2: boolean)

public "spawnLateParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtherItem$Type = ($EtherItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EtherItem_ = $EtherItem$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/repair_pylon/$RepairPylonCoreBlockEntity" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$SpiritRepairRecipe, $SpiritRepairRecipe$Type} from "packages/com/sammy/malum/common/recipe/$SpiritRepairRecipe"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$LodestoneBlockEntityInventory, $LodestoneBlockEntityInventory$Type} from "packages/team/lodestar/lodestone/systems/blockentity/$LodestoneBlockEntityInventory"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$MultiBlockStructure, $MultiBlockStructure$Type} from "packages/team/lodestar/lodestone/systems/multiblock/$MultiBlockStructure"
import {$MultiBlockCoreEntity, $MultiBlockCoreEntity$Type} from "packages/team/lodestar/lodestone/systems/multiblock/$MultiBlockCoreEntity"
import {$Easing, $Easing$Type} from "packages/team/lodestar/lodestone/systems/easing/$Easing"
import {$IMalumSpecialItemAccessPoint, $IMalumSpecialItemAccessPoint$Type} from "packages/com/sammy/malum/common/block/storage/$IMalumSpecialItemAccessPoint"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$RepairPylonCoreBlockEntity$RepairPylonState, $RepairPylonCoreBlockEntity$RepairPylonState$Type} from "packages/com/sammy/malum/common/block/curiosities/repair_pylon/$RepairPylonCoreBlockEntity$RepairPylonState"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $RepairPylonCoreBlockEntity extends $MultiBlockCoreEntity {
static readonly "STRUCTURE": $Supplier<($MultiBlockStructure)>
static readonly "CODEC": $StringRepresentable$EnumCodec<($RepairPylonCoreBlockEntity$RepairPylonState)>
 "inventory": $LodestoneBlockEntityInventory
 "spiritInventory": $LodestoneBlockEntityInventory
 "recipe": $SpiritRepairRecipe
 "state": $RepairPylonCoreBlockEntity$RepairPylonState
 "repairablePosition": $BlockPos
 "timer": integer
 "spiritAmount": float
 "spiritSpin": float
readonly "structure": $MultiBlockStructure
 "needsSync": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $MultiBlockStructure$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type)
constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "init"(): void
public "setState"(arg0: $RepairPylonCoreBlockEntity$RepairPylonState$Type): void
public "repairItem"(arg0: $IMalumSpecialItemAccessPoint$Type): void
public "onBreak"(arg0: $Player$Type): void
public "tick"(): void
public "onUse"(arg0: $Player$Type, arg1: $InteractionHand$Type): $InteractionResult
public "getItemPos"(): $Vec3
public "tryRepair"(arg0: $IMalumSpecialItemAccessPoint$Type): boolean
public "tryRepair"(): boolean
public "prepareRepair"(arg0: $IMalumSpecialItemAccessPoint$Type): void
public "getCooldownOffset"(arg0: integer, arg1: $Easing$Type): float
public "load"(arg0: $CompoundTag$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getSpiritItemOffset"(arg0: integer, arg1: float): $Vec3
public "getCentralItemOffset"(): $Vec3
set "state"(value: $RepairPylonCoreBlockEntity$RepairPylonState$Type)
get "itemPos"(): $Vec3
get "centralItemOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepairPylonCoreBlockEntity$Type = ($RepairPylonCoreBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RepairPylonCoreBlockEntity_ = $RepairPylonCoreBlockEntity$Type;
}}
declare module "packages/com/sammy/malum/common/effect/aura/$AerialAura" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $AerialAura extends $MobEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AerialAura$Type = ($AerialAura);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AerialAura_ = $AerialAura$Type;
}}
declare module "packages/com/sammy/malum/common/recipe/vanilla/$NodeCookingSerializer" {
import {$NodeCookingSerializer$NodeBaker, $NodeCookingSerializer$NodeBaker$Type} from "packages/com/sammy/malum/common/recipe/vanilla/$NodeCookingSerializer$NodeBaker"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $NodeCookingSerializer<T extends $AbstractCookingRecipe> implements $RecipeSerializer<(T)> {
readonly "defaultCookingTime": integer
readonly "factory": $NodeCookingSerializer$NodeBaker<(T)>

constructor(arg0: $NodeCookingSerializer$NodeBaker$Type<(T)>, arg1: integer)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NodeCookingSerializer$Type<T> = ($NodeCookingSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NodeCookingSerializer_<T> = $NodeCookingSerializer$Type<(T)>;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/runes/madness/$RuneSacrificialEmpowermentItem" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractRuneCurioItem, $AbstractRuneCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/runes/$AbstractRuneCurioItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IEventResponderItem, $IEventResponderItem$Type} from "packages/team/lodestar/lodestone/systems/item/$IEventResponderItem"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RuneSacrificialEmpowermentItem extends $AbstractRuneCurioItem implements $IEventResponderItem {
readonly "spiritType": $MalumSpiritType
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "killEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "hurtEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "hurtEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "killEvent"(arg0: $LivingDeathEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneSacrificialEmpowermentItem$Type = ($RuneSacrificialEmpowermentItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuneSacrificialEmpowermentItem_ = $RuneSacrificialEmpowermentItem$Type;
}}
declare module "packages/com/sammy/malum/common/recipe/$SpiritRepairRecipe" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AbstractSpiritListMalumRecipe, $AbstractSpiritListMalumRecipe$Type} from "packages/com/sammy/malum/common/recipe/$AbstractSpiritListMalumRecipe"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IngredientWithCount, $IngredientWithCount$Type} from "packages/team/lodestar/lodestone/systems/recipe/$IngredientWithCount"
import {$SpiritWithCount, $SpiritWithCount$Type} from "packages/com/sammy/malum/core/systems/recipe/$SpiritWithCount"

export class $SpiritRepairRecipe extends $AbstractSpiritListMalumRecipe {
static readonly "NAME": string
readonly "durabilityPercentage": float
readonly "inputs": $List<($Item)>
readonly "repairMaterial": $IngredientWithCount
readonly "spirits": $List<($SpiritWithCount)>

constructor(arg0: $ResourceLocation$Type, arg1: float, arg2: $List$Type<($Item$Type)>, arg3: $IngredientWithCount$Type, arg4: $List$Type<($SpiritWithCount$Type)>)

public static "getRecipe"(arg0: $Level$Type, arg1: $Predicate$Type<($SpiritRepairRecipe$Type)>): $SpiritRepairRecipe
public static "getRecipe"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $List$Type<($ItemStack$Type)>): $SpiritRepairRecipe
public static "getRecipes"(arg0: $Level$Type): $List<($SpiritRepairRecipe)>
public static "getRepairRecipeOutput"(arg0: $ItemStack$Type): $ItemStack
public "doesInputMatch"(arg0: $ItemStack$Type): boolean
public "doesRepairMatch"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritRepairRecipe$Type = ($SpiritRepairRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritRepairRecipe_ = $SpiritRepairRecipe$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/sets/misc/$CurioWaterNecklace" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$IMalumEventResponderItem, $IMalumEventResponderItem$Type} from "packages/com/sammy/malum/common/item/$IMalumEventResponderItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioWaterNecklace extends $MalumCurioItem implements $IMalumEventResponderItem {
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "addAttributeModifiers"(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg1: $SlotContext$Type, arg2: $ItemStack$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "onSoulwardAbsorbDamage"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: float, arg3: float): void
public "onSoulwardAbsorbDamage"(arg0: $LivingHurtEvent$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: float, arg4: float): void
public "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: float): float
public "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: float): float
public "pickupSpirit"(arg0: $LivingEntity$Type, arg1: double): void
public "hurtEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "hurtEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "killEvent"(arg0: $LivingDeathEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "killEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioWaterNecklace$Type = ($CurioWaterNecklace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioWaterNecklace_ = $CurioWaterNecklace$Type;
}}
declare module "packages/com/sammy/malum/common/effect/$GluttonyEffect" {
import {$MobEffectEvent$Applicable, $MobEffectEvent$Applicable$Type} from "packages/net/minecraftforge/event/entity/living/$MobEffectEvent$Applicable"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $GluttonyEffect extends $MobEffect {

constructor()

public static "canApplyPotion"(arg0: $MobEffectEvent$Applicable$Type): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GluttonyEffect$Type = ($GluttonyEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GluttonyEffect_ = $GluttonyEffect$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/armor/$SoulHunterArmorItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MalumArmorItem, $MalumArmorItem$Type} from "packages/com/sammy/malum/common/item/curiosities/armor/$MalumArmorItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SoulHunterArmorItem extends $MalumArmorItem {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "getTexture"(): string
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "createExtraAttributes"(arg0: $ArmorItem$Type$Type): $Multimap<($Attribute), ($AttributeModifier)>
public static "get"(arg0: $ItemStack$Type): $Equipable
get "texture"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulHunterArmorItem$Type = ($SoulHunterArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulHunterArmorItem_ = $SoulHunterArmorItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/ether/$AbstractEtherItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$DyeableLeatherItem, $DyeableLeatherItem$Type} from "packages/net/minecraft/world/item/$DyeableLeatherItem"
import {$ParticleEmitterHandler$ItemParticleSupplier, $ParticleEmitterHandler$ItemParticleSupplier$Type} from "packages/team/lodestar/lodestone/handlers/screenparticle/$ParticleEmitterHandler$ItemParticleSupplier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$ScreenParticleHolder, $ScreenParticleHolder$Type} from "packages/team/lodestar/lodestone/systems/particle/screen/$ScreenParticleHolder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractEtherItem extends $BlockItem implements $DyeableLeatherItem, $ParticleEmitterHandler$ItemParticleSupplier {
static readonly "FIRST_COLOR": string
static readonly "SECOND_COLOR": string
static readonly "DEFAULT_FIRST_COLOR": integer
static readonly "DEFAULT_SECOND_COLOR": integer
readonly "iridescent": boolean
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type, arg2: boolean)

public "getColor"(arg0: $ItemStack$Type): integer
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public "hasCustomColor"(arg0: $ItemStack$Type): boolean
public "clearColor"(arg0: $ItemStack$Type): void
public "colorLookup"(): string
public "getSecondColor"(arg0: $ItemStack$Type): integer
public "getFirstColor"(arg0: $ItemStack$Type): integer
public "setSecondColor"(arg0: $ItemStack$Type, arg1: integer): void
public "setFirstColor"(arg0: $ItemStack$Type, arg1: integer): void
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "spawnLateParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractEtherItem$Type = ($AbstractEtherItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractEtherItem_ = $AbstractEtherItem$Type;
}}
declare module "packages/com/sammy/malum/common/block/ether/$EtherTorchBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$EtherBlock, $EtherBlock$Type} from "packages/com/sammy/malum/common/block/ether/$EtherBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EtherBlockEntity, $EtherBlockEntity$Type} from "packages/com/sammy/malum/common/block/ether/$EtherBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EtherTorchBlock<T extends $EtherBlockEntity> extends $EtherBlock<(T)> {
static readonly "SHAPE": $VoxelShape
static readonly "WATERLOGGED": $BooleanProperty
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

public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtherTorchBlock$Type<T> = ($EtherTorchBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EtherTorchBlock_<T> = $EtherTorchBlock$Type<(T)>;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ICurioItem, $ICurioItem$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurioItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$AbstractMalumCurioItem, $AbstractMalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MalumCurioItem extends $AbstractMalumCurioItem implements $ICurioItem {
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $AbstractMalumCurioItem$MalumTrinketType$Type)

public static "positiveEffect"(arg0: string, ...arg1: (any)[]): $Component
public static "negativeEffect"(arg0: string, ...arg1: (any)[]): $Component
public "getAttributesTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalumCurioItem$Type = ($MalumCurioItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MalumCurioItem_ = $MalumCurioItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/impetus/$ImpetusItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CrackedImpetusItem, $CrackedImpetusItem$Type} from "packages/com/sammy/malum/common/item/impetus/$CrackedImpetusItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$SpiritRepairRecipe$IRepairOutputOverride, $SpiritRepairRecipe$IRepairOutputOverride$Type} from "packages/com/sammy/malum/common/recipe/$SpiritRepairRecipe$IRepairOutputOverride"

export class $ImpetusItem extends $Item implements $SpiritRepairRecipe$IRepairOutputOverride {
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

public "setCrackedVariant"(arg0: $Supplier$Type<($CrackedImpetusItem$Type)>): $ImpetusItem
public "getCrackedVariant"(): $CrackedImpetusItem
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "ignoreDuringLookup"(): boolean
public "overrideRepairResult"(): $Item
set "crackedVariant"(value: $Supplier$Type<($CrackedImpetusItem$Type)>)
get "crackedVariant"(): $CrackedImpetusItem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImpetusItem$Type = ($ImpetusItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImpetusItem_ = $ImpetusItem$Type;
}}
declare module "packages/com/sammy/malum/common/block/ether/$EtherWallTorchBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$EtherBlock, $EtherBlock$Type} from "packages/com/sammy/malum/common/block/ether/$EtherBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EtherBlockEntity, $EtherBlockEntity$Type} from "packages/com/sammy/malum/common/block/ether/$EtherBlockEntity"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $EtherWallTorchBlock<T extends $EtherBlockEntity> extends $EtherBlock<(T)> {
static readonly "HORIZONTAL_FACING": $DirectionProperty
static readonly "SHAPE": $VoxelShape
static readonly "WATERLOGGED": $BooleanProperty
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

public static "getShapeForState"(arg0: $BlockState$Type): $VoxelShape
public "getDescriptionId"(): string
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtherWallTorchBlock$Type<T> = ($EtherWallTorchBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EtherWallTorchBlock_<T> = $EtherWallTorchBlock$Type<(T)>;
}}
declare module "packages/com/sammy/malum/common/effect/aura/$CorruptedAqueousAura" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $CorruptedAqueousAura extends $MobEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CorruptedAqueousAura$Type = ($CorruptedAqueousAura);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CorruptedAqueousAura_ = $CorruptedAqueousAura$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/sets/weeping/$CurioWatcherNecklace" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IVoidItem, $IVoidItem$Type} from "packages/com/sammy/malum/common/item/$IVoidItem"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$IMalumEventResponderItem, $IMalumEventResponderItem$Type} from "packages/com/sammy/malum/common/item/$IMalumEventResponderItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$ScreenParticleHolder, $ScreenParticleHolder$Type} from "packages/team/lodestar/lodestone/systems/particle/screen/$ScreenParticleHolder"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$LivingEvent$LivingTickEvent, $LivingEvent$LivingTickEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent$LivingTickEvent"

export class $CurioWatcherNecklace extends $MalumCurioItem implements $IMalumEventResponderItem, $IVoidItem {
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public static "entityTick"(arg0: $LivingEvent$LivingTickEvent$Type): void
public "hurtEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "onSoulwardAbsorbDamage"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: float, arg3: float): void
public "onSoulwardAbsorbDamage"(arg0: $LivingHurtEvent$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: float, arg4: float): void
public "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: float): float
public "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: float): float
public "pickupSpirit"(arg0: $LivingEntity$Type, arg1: double): void
public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public "getVoidParticleIntensity"(): float
public "hurtEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "killEvent"(arg0: $LivingDeathEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "killEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "spawnLateParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
get "voidParticleIntensity"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioWatcherNecklace$Type = ($CurioWatcherNecklace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioWatcherNecklace_ = $CurioWatcherNecklace$Type;
}}
declare module "packages/com/sammy/malum/common/block/storage/pedestal/$WoodItemPedestalBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ItemPedestalBlock, $ItemPedestalBlock$Type} from "packages/com/sammy/malum/common/block/storage/pedestal/$ItemPedestalBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemPedestalBlockEntity, $ItemPedestalBlockEntity$Type} from "packages/com/sammy/malum/common/block/storage/pedestal/$ItemPedestalBlockEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $WoodItemPedestalBlock<T extends $ItemPedestalBlockEntity> extends $ItemPedestalBlock<(T)> {
static readonly "SHAPE": $VoxelShape
static readonly "WATERLOGGED": $BooleanProperty
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodItemPedestalBlock$Type<T> = ($WoodItemPedestalBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WoodItemPedestalBlock_<T> = $WoodItemPedestalBlock$Type<(T)>;
}}
declare module "packages/com/sammy/malum/common/item/augment/core/$AbstractCoreAugmentItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractAugmentItem, $AbstractAugmentItem$Type} from "packages/com/sammy/malum/common/item/augment/$AbstractAugmentItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractCoreAugmentItem extends $AbstractAugmentItem {
readonly "spiritType": $MalumSpiritType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $MalumSpiritType$Type)

public "getAugmentTypeTranslator"(): string
get "augmentTypeTranslator"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCoreAugmentItem$Type = ($AbstractCoreAugmentItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCoreAugmentItem_ = $AbstractCoreAugmentItem$Type;
}}
declare module "packages/com/sammy/malum/mixin/client/$AccessorBakedGlyph" {
import {$GlyphRenderTypes, $GlyphRenderTypes$Type} from "packages/net/minecraft/client/gui/font/$GlyphRenderTypes"

export interface $AccessorBakedGlyph {

 "malum$getRenderTypes"(): $GlyphRenderTypes

(): $GlyphRenderTypes
}

export namespace $AccessorBakedGlyph {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorBakedGlyph$Type = ($AccessorBakedGlyph);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorBakedGlyph_ = $AccessorBakedGlyph$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/repair_pylon/$RepairPylonCoreBlockEntity$RepairPylonState" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $RepairPylonCoreBlockEntity$RepairPylonState extends $Enum<($RepairPylonCoreBlockEntity$RepairPylonState)> implements $StringRepresentable {
static readonly "IDLE": $RepairPylonCoreBlockEntity$RepairPylonState
static readonly "SEARCHING": $RepairPylonCoreBlockEntity$RepairPylonState
static readonly "CHARGING": $RepairPylonCoreBlockEntity$RepairPylonState
static readonly "REPAIRING": $RepairPylonCoreBlockEntity$RepairPylonState
static readonly "COOLDOWN": $RepairPylonCoreBlockEntity$RepairPylonState


public static "values"(): ($RepairPylonCoreBlockEntity$RepairPylonState)[]
public static "valueOf"(arg0: string): $RepairPylonCoreBlockEntity$RepairPylonState
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepairPylonCoreBlockEntity$RepairPylonState$Type = (("idle") | ("searching") | ("charging") | ("repairing") | ("cooldown")) | ($RepairPylonCoreBlockEntity$RepairPylonState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RepairPylonCoreBlockEntity$RepairPylonState_ = $RepairPylonCoreBlockEntity$RepairPylonState$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleTuning$AppliedTuningType" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$CrucibleTuning$TuningModifier, $CrucibleTuning$TuningModifier$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleTuning$TuningModifier"

export class $CrucibleTuning$AppliedTuningType extends $Enum<($CrucibleTuning$AppliedTuningType)> {
static readonly "BUFF": $CrucibleTuning$AppliedTuningType
static readonly "DEBUFF": $CrucibleTuning$AppliedTuningType
static readonly "NONE": $CrucibleTuning$AppliedTuningType
readonly "multiplierGetter": $Function<($CrucibleTuning$TuningModifier), (float)>


public static "values"(): ($CrucibleTuning$AppliedTuningType)[]
public static "valueOf"(arg0: string): $CrucibleTuning$AppliedTuningType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrucibleTuning$AppliedTuningType$Type = (("debuff") | ("none") | ("buff")) | ($CrucibleTuning$AppliedTuningType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrucibleTuning$AppliedTuningType_ = $CrucibleTuning$AppliedTuningType$Type;
}}
declare module "packages/com/sammy/malum/common/enchantment/$HauntedEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$ItemAttributeModifierEvent, $ItemAttributeModifierEvent$Type} from "packages/net/minecraftforge/event/$ItemAttributeModifierEvent"

export class $HauntedEnchantment extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public static "addMagicDamage"(arg0: $ItemAttributeModifierEvent$Type): void
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HauntedEnchantment$Type = ($HauntedEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HauntedEnchantment_ = $HauntedEnchantment$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/$MalumKnifeItem" {
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$Type} from "packages/com/google/common/collect/$ImmutableMultimap$Builder"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$KnifeItem, $KnifeItem$Type} from "packages/vectorwing/farmersdelight/common/item/$KnifeItem"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MalumKnifeItem extends $KnifeItem {
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: float, arg2: float, arg3: $Item$Properties$Type)

public "getDefaultAttributeModifiers"(arg0: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "createExtraAttributes"(): $ImmutableMultimap$Builder<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalumKnifeItem$Type = ($MalumKnifeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MalumKnifeItem_ = $MalumKnifeItem$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/obelisk/brilliant/$BrilliantObeliskBlockEntity" {
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ObeliskCoreBlockEntity, $ObeliskCoreBlockEntity$Type} from "packages/com/sammy/malum/common/block/curiosities/obelisk/$ObeliskCoreBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MultiBlockStructure, $MultiBlockStructure$Type} from "packages/team/lodestar/lodestone/systems/multiblock/$MultiBlockStructure"

export class $BrilliantObeliskBlockEntity extends $ObeliskCoreBlockEntity {
static readonly "STRUCTURE": $Supplier<($MultiBlockStructure)>
readonly "structure": $MultiBlockStructure
 "needsSync": boolean
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrilliantObeliskBlockEntity$Type = ($BrilliantObeliskBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrilliantObeliskBlockEntity_ = $BrilliantObeliskBlockEntity$Type;
}}
declare module "packages/com/sammy/malum/common/recipe/$FavorOfTheVoidRecipe" {
import {$AbstractMalumRecipe, $AbstractMalumRecipe$Type} from "packages/com/sammy/malum/common/recipe/$AbstractMalumRecipe"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $FavorOfTheVoidRecipe extends $AbstractMalumRecipe {
static readonly "NAME": string
readonly "input": $Ingredient
readonly "output": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type)

public static "getRecipe"(arg0: $Level$Type, arg1: $Predicate$Type<($FavorOfTheVoidRecipe$Type)>): $FavorOfTheVoidRecipe
public static "getRecipe"(arg0: $Level$Type, arg1: $ItemStack$Type): $FavorOfTheVoidRecipe
public static "getRecipes"(arg0: $Level$Type): $List<($FavorOfTheVoidRecipe)>
public "doesInputMatch"(arg0: $ItemStack$Type): boolean
public "doesOutputMatch"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FavorOfTheVoidRecipe$Type = ($FavorOfTheVoidRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FavorOfTheVoidRecipe_ = $FavorOfTheVoidRecipe$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/runic_workbench/$RunicWorkbenchBlockEntity" {
import {$MalumItemHolderBlockEntity, $MalumItemHolderBlockEntity$Type} from "packages/com/sammy/malum/common/block/storage/$MalumItemHolderBlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LodestoneBlockEntityInventory, $LodestoneBlockEntityInventory$Type} from "packages/team/lodestar/lodestone/systems/blockentity/$LodestoneBlockEntityInventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $RunicWorkbenchBlockEntity extends $MalumItemHolderBlockEntity {
static readonly "RUNIC_WORKBENCH_ITEM_OFFSET": $Vec3
 "inventory": $LodestoneBlockEntityInventory
 "needsSync": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "onUse"(arg0: $Player$Type, arg1: $InteractionHand$Type): $InteractionResult
public "getItemOffset"(arg0: float): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunicWorkbenchBlockEntity$Type = ($RunicWorkbenchBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RunicWorkbenchBlockEntity_ = $RunicWorkbenchBlockEntity$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/void_depot/$VoidDepotBlockEntity" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType, $VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType$Type} from "packages/com/sammy/malum/common/block/curiosities/void_depot/$VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$LodestoneBlockEntity, $LodestoneBlockEntity$Type} from "packages/team/lodestar/lodestone/systems/blockentity/$LodestoneBlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$VoidDepotBlockEntity$VoidDepotGoal, $VoidDepotBlockEntity$VoidDepotGoal$Type} from "packages/com/sammy/malum/common/block/curiosities/void_depot/$VoidDepotBlockEntity$VoidDepotGoal"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $VoidDepotBlockEntity extends $LodestoneBlockEntity {
readonly "goals": $List<($VoidDepotBlockEntity$VoidDepotGoal)>
readonly "textToDisplay": $List<(string)>
 "repeatable": boolean
 "oncePerPlayer": boolean
 "playersWhoCompleted": $List<($UUID)>
 "nearTimer": integer
 "textVisibility": float
static readonly "CODEC": $StringRepresentable$EnumCodec<($VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType)>
 "needsSync": boolean
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "tick"(): void
public "onUse"(arg0: $Player$Type, arg1: $InteractionHand$Type): $InteractionResult
public "load"(arg0: $CompoundTag$Type): void
public "onCompletion"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidDepotBlockEntity$Type = ($VoidDepotBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidDepotBlockEntity_ = $VoidDepotBlockEntity$Type;
}}
declare module "packages/com/sammy/malum/common/entity/nitrate/$AbstractNitrateEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ColorEffectData, $ColorEffectData$Type} from "packages/com/sammy/malum/visual_effects/networked/data/$ColorEffectData"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ThrowableProjectile, $ThrowableProjectile$Type} from "packages/net/minecraft/world/entity/projectile/$ThrowableProjectile"
import {$ParticleEffectType, $ParticleEffectType$Type} from "packages/com/sammy/malum/visual_effects/networked/$ParticleEffectType"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$Stack, $Stack$Type} from "packages/java/util/$Stack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$TrailPointBuilder, $TrailPointBuilder$Type} from "packages/team/lodestar/lodestone/systems/rendering/trail/$TrailPointBuilder"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AbstractNitrateEntity extends $ThrowableProjectile {
static readonly "MAX_AGE": integer
static readonly "SECOND_SMOKE_COLOR": $Color
static readonly "MAIN_TRAIL_LENGTH": float
readonly "trailPointBuilder": $TrailPointBuilder
readonly "spinningTrailPointBuilder": $TrailPointBuilder
 "spinOffset": float
 "age": integer
 "timesExploded": integer
 "fadingAway": boolean
 "ownerUUID": $UUID
 "cachedOwner": $Entity
 "hasBeenShot": boolean
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

constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)
constructor(arg0: $EntityType$Type<(any)>, arg1: $LivingEntity$Type, arg2: $Level$Type)

public "m_7378_"(arg0: $CompoundTag$Type): void
public "m_7380_"(arg0: $CompoundTag$Type): void
public "getPickRadius"(): float
public "isInWater"(): boolean
public "ignoreExplosion"(): boolean
public "fireImmune"(): boolean
public "isNoGravity"(): boolean
public "spawnParticles"(): void
public "tick"(): void
public "getImpactParticleEffectColor"(): $ColorEffectData
public "getImpactParticleEffect"(): $ParticleEffectType
public "getVisualEffectScalar"(): float
public "onSyncedDataUpdated"(arg0: $EntityDataAccessor$Type<(any)>): void
public "onExplode"(): void
public "getMaxPierce"(): integer
public "getExplosionRadius"(): float
get "pickRadius"(): float
get "inWater"(): boolean
get "noGravity"(): boolean
get "impactParticleEffectColor"(): $ColorEffectData
get "impactParticleEffect"(): $ParticleEffectType
get "visualEffectScalar"(): float
get "maxPierce"(): integer
get "explosionRadius"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractNitrateEntity$Type = ($AbstractNitrateEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractNitrateEntity_ = $AbstractNitrateEntity$Type;
}}
declare module "packages/com/sammy/malum/mixin/$AccessorFeatureFlagSet" {
import {$FeatureFlagUniverse, $FeatureFlagUniverse$Type} from "packages/net/minecraft/world/flag/$FeatureFlagUniverse"

export interface $AccessorFeatureFlagSet {

 "malum$getUniverse"(): $FeatureFlagUniverse

(): $FeatureFlagUniverse
}

export namespace $AccessorFeatureFlagSet {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorFeatureFlagSet$Type = ($AccessorFeatureFlagSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorFeatureFlagSet_ = $AccessorFeatureFlagSet$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/runes/madness/$RuneTwinnedDurationItem" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractRuneCurioItem, $AbstractRuneCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/runes/$AbstractRuneCurioItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectEvent$Added, $MobEffectEvent$Added$Type} from "packages/net/minecraftforge/event/entity/living/$MobEffectEvent$Added"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RuneTwinnedDurationItem extends $AbstractRuneCurioItem {
readonly "spiritType": $MalumSpiritType
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public static "onPotionApplied"(arg0: $MobEffectEvent$Added$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneTwinnedDurationItem$Type = ($RuneTwinnedDurationItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuneTwinnedDurationItem_ = $RuneTwinnedDurationItem$Type;
}}
declare module "packages/com/sammy/malum/common/recipe/$FavorOfTheVoidRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$FavorOfTheVoidRecipe, $FavorOfTheVoidRecipe$Type} from "packages/com/sammy/malum/common/recipe/$FavorOfTheVoidRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $FavorOfTheVoidRecipe$Serializer implements $RecipeSerializer<($FavorOfTheVoidRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $FavorOfTheVoidRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $FavorOfTheVoidRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $FavorOfTheVoidRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $FavorOfTheVoidRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FavorOfTheVoidRecipe$Serializer$Type = ($FavorOfTheVoidRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FavorOfTheVoidRecipe$Serializer_ = $FavorOfTheVoidRecipe$Serializer$Type;
}}
declare module "packages/com/sammy/malum/common/block/ether/$EtherBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$WaterLoggedEntityBlock, $WaterLoggedEntityBlock$Type} from "packages/team/lodestar/lodestone/systems/block/$WaterLoggedEntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EtherBlockEntity, $EtherBlockEntity$Type} from "packages/com/sammy/malum/common/block/ether/$EtherBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EtherBlock<T extends $EtherBlockEntity> extends $WaterLoggedEntityBlock<(T)> {
static readonly "SHAPE": $VoxelShape
static readonly "WATERLOGGED": $BooleanProperty
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtherBlock$Type<T> = ($EtherBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EtherBlock_<T> = $EtherBlock$Type<(T)>;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/runes/$AbstractRuneCurioItem" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ParticleEmitterHandler$ItemParticleSupplier, $ParticleEmitterHandler$ItemParticleSupplier$Type} from "packages/team/lodestar/lodestone/handlers/screenparticle/$ParticleEmitterHandler$ItemParticleSupplier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ScreenParticleHolder, $ScreenParticleHolder$Type} from "packages/team/lodestar/lodestone/systems/particle/screen/$ScreenParticleHolder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractRuneCurioItem extends $MalumCurioItem implements $ParticleEmitterHandler$ItemParticleSupplier {
readonly "spiritType": $MalumSpiritType
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $MalumSpiritType$Type)

public "spawnLateParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractRuneCurioItem$Type = ($AbstractRuneCurioItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractRuneCurioItem_ = $AbstractRuneCurioItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/spirit/$UmbralSpiritShardItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ScreenParticleHolder, $ScreenParticleHolder$Type} from "packages/team/lodestar/lodestone/systems/particle/screen/$ScreenParticleHolder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IVoidItem, $IVoidItem$Type} from "packages/com/sammy/malum/common/item/$IVoidItem"
import {$SpiritShardItem, $SpiritShardItem$Type} from "packages/com/sammy/malum/common/item/spirit/$SpiritShardItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UmbralSpiritShardItem extends $SpiritShardItem implements $IVoidItem {
readonly "type": $MalumSpiritType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $MalumSpiritType$Type)

public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public "getVoidParticleIntensity"(): float
get "voidParticleIntensity"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UmbralSpiritShardItem$Type = ($UmbralSpiritShardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UmbralSpiritShardItem_ = $UmbralSpiritShardItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/augment/$AcceleratingInlayItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractAugmentItem, $AbstractAugmentItem$Type} from "packages/com/sammy/malum/common/item/augment/$AbstractAugmentItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AcceleratingInlayItem extends $AbstractAugmentItem {
readonly "spiritType": $MalumSpiritType
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

public "getSpeedIncrease"(): float
get "speedIncrease"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AcceleratingInlayItem$Type = ($AcceleratingInlayItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AcceleratingInlayItem_ = $AcceleratingInlayItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/codex/$EncyclopediaEsotericaItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EncyclopediaArcanaItem, $EncyclopediaArcanaItem$Type} from "packages/com/sammy/malum/common/item/codex/$EncyclopediaArcanaItem"
import {$ParticleEmitterHandler$ItemParticleSupplier, $ParticleEmitterHandler$ItemParticleSupplier$Type} from "packages/team/lodestar/lodestone/handlers/screenparticle/$ParticleEmitterHandler$ItemParticleSupplier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ScreenParticleHolder, $ScreenParticleHolder$Type} from "packages/team/lodestar/lodestone/systems/particle/screen/$ScreenParticleHolder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EncyclopediaEsotericaItem extends $EncyclopediaArcanaItem implements $ParticleEmitterHandler$ItemParticleSupplier {
static "shouldOpenVoidCodex": boolean
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

public "spawnLateParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EncyclopediaEsotericaItem$Type = ($EncyclopediaEsotericaItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EncyclopediaEsotericaItem_ = $EncyclopediaEsotericaItem$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/obelisk/runewood/$RunewoodObeliskCoreBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ObeliskCoreBlock, $ObeliskCoreBlock$Type} from "packages/com/sammy/malum/common/block/curiosities/obelisk/$ObeliskCoreBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$RunewoodObeliskBlockEntity, $RunewoodObeliskBlockEntity$Type} from "packages/com/sammy/malum/common/block/curiosities/obelisk/runewood/$RunewoodObeliskBlockEntity"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $RunewoodObeliskCoreBlock extends $ObeliskCoreBlock<($RunewoodObeliskBlockEntity)> {
static readonly "SHAPE": $VoxelShape
static readonly "WATERLOGGED": $BooleanProperty
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunewoodObeliskCoreBlock$Type = ($RunewoodObeliskCoreBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RunewoodObeliskCoreBlock_ = $RunewoodObeliskCoreBlock$Type;
}}
declare module "packages/com/sammy/malum/core/handlers/hiding/flags/$UncappedFeatureFlagSet" {
import {$FeatureFlagUniverse, $FeatureFlagUniverse$Type} from "packages/net/minecraft/world/flag/$FeatureFlagUniverse"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$UncappedFeatureFlag, $UncappedFeatureFlag$Type} from "packages/com/sammy/malum/core/handlers/hiding/flags/$UncappedFeatureFlag"

export class $UncappedFeatureFlagSet {


public "isSubsetOf"(arg0: $UncappedFeatureFlagSet$Type): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "join"(arg0: $UncappedFeatureFlagSet$Type): $UncappedFeatureFlagSet
public static "of"(arg0: $UncappedFeatureFlag$Type, ...arg1: ($UncappedFeatureFlag$Type)[]): $UncappedFeatureFlagSet
public static "of"(arg0: $UncappedFeatureFlag$Type): $UncappedFeatureFlagSet
public static "of"(): $UncappedFeatureFlagSet
public "contains"(arg0: $UncappedFeatureFlag$Type): boolean
public static "create"(arg0: $FeatureFlagUniverse$Type, arg1: $Collection$Type<($UncappedFeatureFlag$Type)>): $UncappedFeatureFlagSet
public "getUniverse"(): $FeatureFlagUniverse
get "universe"(): $FeatureFlagUniverse
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UncappedFeatureFlagSet$Type = ($UncappedFeatureFlagSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UncappedFeatureFlagSet_ = $UncappedFeatureFlagSet$Type;
}}
declare module "packages/com/sammy/malum/common/item/augment/core/$StellarMechanismItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractCoreAugmentItem, $AbstractCoreAugmentItem$Type} from "packages/com/sammy/malum/common/item/augment/core/$AbstractCoreAugmentItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StellarMechanismItem extends $AbstractCoreAugmentItem {
readonly "spiritType": $MalumSpiritType
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

public "getTuningStrengthIncrease"(): float
get "tuningStrengthIncrease"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StellarMechanismItem$Type = ($StellarMechanismItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StellarMechanismItem_ = $StellarMechanismItem$Type;
}}
declare module "packages/com/sammy/malum/common/recipe/$SpiritRepairRecipe$Serializer" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$SpiritRepairRecipe, $SpiritRepairRecipe$Type} from "packages/com/sammy/malum/common/recipe/$SpiritRepairRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SpiritRepairRecipe$Serializer implements $RecipeSerializer<($SpiritRepairRecipe)> {
static "REPAIRABLE": $List<($Item)>

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $SpiritRepairRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $SpiritRepairRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $SpiritRepairRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $SpiritRepairRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritRepairRecipe$Serializer$Type = ($SpiritRepairRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritRepairRecipe$Serializer_ = $SpiritRepairRecipe$Serializer$Type;
}}
declare module "packages/com/sammy/malum/common/recipe/$SpiritTransmutationRecipe" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AbstractMalumRecipe, $AbstractMalumRecipe$Type} from "packages/com/sammy/malum/common/recipe/$AbstractMalumRecipe"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SpiritTransmutationRecipe extends $AbstractMalumRecipe {
static readonly "NAME": string
readonly "ingredient": $Ingredient
readonly "output": $ItemStack
readonly "group": string

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type, arg3: string)

public static "getRecipe"(arg0: $Level$Type, arg1: $Item$Type): $SpiritTransmutationRecipe
public static "getRecipe"(arg0: $Level$Type, arg1: $ItemStack$Type): $SpiritTransmutationRecipe
public static "getRecipe"(arg0: $Level$Type, arg1: $Predicate$Type<($SpiritTransmutationRecipe$Type)>): $SpiritTransmutationRecipe
public static "getRecipes"(arg0: $Level$Type): $List<($SpiritTransmutationRecipe)>
public "doesInputMatch"(arg0: $ItemStack$Type): boolean
public "doesOutputMatch"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritTransmutationRecipe$Type = ($SpiritTransmutationRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritTransmutationRecipe_ = $SpiritTransmutationRecipe$Type;
}}
declare module "packages/com/sammy/malum/core/systems/recipe/$SpiritWithCount" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRecipeComponent, $IRecipeComponent$Type} from "packages/team/lodestar/lodestone/systems/recipe/$IRecipeComponent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $SpiritWithCount implements $IRecipeComponent {
readonly "type": $MalumSpiritType
readonly "count": integer

constructor(arg0: $ItemStack$Type)
constructor(arg0: $MalumSpiritType$Type, arg1: integer)

public static "load"(arg0: $CompoundTag$Type): $SpiritWithCount
public "matches"(arg0: $ItemStack$Type): boolean
public "save"(arg0: $CompoundTag$Type): $CompoundTag
public "getStack"(): $ItemStack
public "getItem"(): $Item
public "getCount"(): integer
public "getComponent"(): $Component
public static "deserialize"(arg0: $JsonObject$Type): $SpiritWithCount
public "serialize"(): $JsonObject
public "getStacks"(): $List<($ItemStack)>
public "isValid"(): boolean
get "stack"(): $ItemStack
get "item"(): $Item
get "count"(): integer
get "component"(): $Component
get "stacks"(): $List<($ItemStack)>
get "valid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritWithCount$Type = ($SpiritWithCount);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritWithCount_ = $SpiritWithCount$Type;
}}
declare module "packages/com/sammy/malum/common/block/the_device/$TheVessel" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TheDevice, $TheDevice$Type} from "packages/com/sammy/malum/common/block/the_device/$TheDevice"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $TheVessel extends $TheDevice {
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

public "playSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TheVessel$Type = ($TheVessel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TheVessel_ = $TheVessel$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/$CurioOrnateNecklace" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioOrnateNecklace extends $MalumCurioItem {
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "addAttributeModifiers"(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg1: $SlotContext$Type, arg2: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioOrnateNecklace$Type = ($CurioOrnateNecklace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioOrnateNecklace_ = $CurioOrnateNecklace$Type;
}}
declare module "packages/com/sammy/malum/common/block/blight/$BlightedSoilBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BonemealableBlock, $BonemealableBlock$Type} from "packages/net/minecraft/world/level/block/$BonemealableBlock"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlightedSoilBlock extends $Block implements $BonemealableBlock {
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

public "isValidBonemealTarget"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): boolean
public "isBonemealSuccess"(arg0: $Level$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getBlockSupportShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getVisualShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlightedSoilBlock$Type = ($BlightedSoilBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlightedSoilBlock_ = $BlightedSoilBlock$Type;
}}
declare module "packages/com/sammy/malum/visual_effects/networked/data/$ColorEffectData$ColorRecord" {
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"

export class $ColorEffectData$ColorRecord extends $Record {

constructor(primaryColor: $Color$Type, secondaryColor: $Color$Type, spiritType: $MalumSpiritType$Type)
constructor(arg0: $Color$Type, arg1: $Color$Type)
constructor(arg0: $MalumSpiritType$Type)
constructor(arg0: $Color$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "secondaryColor"(): $Color
public "primaryColor"(): $Color
public "spiritType"(): $MalumSpiritType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorEffectData$ColorRecord$Type = ($ColorEffectData$ColorRecord);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorEffectData$ColorRecord_ = $ColorEffectData$ColorRecord$Type;
}}
declare module "packages/com/sammy/malum/common/effect/$GrimCertaintyEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $GrimCertaintyEffect extends $MobEffect {

constructor()

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrimCertaintyEffect$Type = ($GrimCertaintyEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GrimCertaintyEffect_ = $GrimCertaintyEffect$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/totem/$TotemBaseBlockEntity$TotemRiteState" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $TotemBaseBlockEntity$TotemRiteState extends $Enum<($TotemBaseBlockEntity$TotemRiteState)> implements $StringRepresentable {
static readonly "IDLE": $TotemBaseBlockEntity$TotemRiteState
static readonly "ASSEMBLING": $TotemBaseBlockEntity$TotemRiteState
static readonly "ACTIVE": $TotemBaseBlockEntity$TotemRiteState


public static "values"(): ($TotemBaseBlockEntity$TotemRiteState)[]
public static "valueOf"(arg0: string): $TotemBaseBlockEntity$TotemRiteState
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TotemBaseBlockEntity$TotemRiteState$Type = (("idle") | ("assembling") | ("active")) | ($TotemBaseBlockEntity$TotemRiteState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TotemBaseBlockEntity$TotemRiteState_ = $TotemBaseBlockEntity$TotemRiteState$Type;
}}
declare module "packages/com/sammy/malum/visual_effects/networked/$ParticleEffectType" {
import {$ColorEffectData, $ColorEffectData$Type} from "packages/com/sammy/malum/visual_effects/networked/data/$ColorEffectData"
import {$PositionEffectData, $PositionEffectData$Type} from "packages/com/sammy/malum/visual_effects/networked/data/$PositionEffectData"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$NBTEffectData, $NBTEffectData$Type} from "packages/com/sammy/malum/visual_effects/networked/data/$NBTEffectData"
import {$ParticleEffectType$ParticleEffectActor, $ParticleEffectType$ParticleEffectActor$Type} from "packages/com/sammy/malum/visual_effects/networked/$ParticleEffectType$ParticleEffectActor"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ParticleEffectType {
readonly "id": string

constructor(arg0: string)

public "get"(): $Supplier<($ParticleEffectType$ParticleEffectActor)>
public "createEntityEffect"(arg0: $Entity$Type, arg1: $ColorEffectData$Type): void
public "createEntityEffect"(arg0: $Entity$Type, arg1: $ColorEffectData$Type, arg2: $NBTEffectData$Type): void
public "createEntityEffect"(arg0: $Entity$Type): void
public "createPositionedEffect"(arg0: $Level$Type, arg1: $PositionEffectData$Type, arg2: $ColorEffectData$Type, arg3: $NBTEffectData$Type): void
public "createPositionedEffect"(arg0: $Level$Type, arg1: $PositionEffectData$Type, arg2: $ColorEffectData$Type): void
public "createPositionedEffect"(arg0: $Level$Type, arg1: $PositionEffectData$Type): void
public "createEffect"(arg0: $PacketDistributor$PacketTarget$Type, arg1: $PositionEffectData$Type, arg2: $ColorEffectData$Type, arg3: $NBTEffectData$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectType$Type = ($ParticleEffectType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectType_ = $ParticleEffectType$Type;
}}
declare module "packages/com/sammy/malum/common/item/spirit/$RitualShardItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ParticleEmitterHandler$ItemParticleSupplier, $ParticleEmitterHandler$ItemParticleSupplier$Type} from "packages/team/lodestar/lodestone/handlers/screenparticle/$ParticleEmitterHandler$ItemParticleSupplier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$MalumRitualTier, $MalumRitualTier$Type} from "packages/com/sammy/malum/core/systems/ritual/$MalumRitualTier"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MalumRitualType, $MalumRitualType$Type} from "packages/com/sammy/malum/core/systems/ritual/$MalumRitualType"
import {$ScreenParticleHolder, $ScreenParticleHolder$Type} from "packages/team/lodestar/lodestone/systems/particle/screen/$ScreenParticleHolder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RitualShardItem extends $Item implements $ParticleEmitterHandler$ItemParticleSupplier {
static readonly "RITUAL_TYPE": string
static readonly "STORED_SPIRITS": string
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

public "spawnLateParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public static "getRitualTier"(arg0: $ItemStack$Type): $MalumRitualTier
public static "getRitualType"(arg0: $ItemStack$Type): $MalumRitualType
public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualShardItem$Type = ($RitualShardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RitualShardItem_ = $RitualShardItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/impetus/$CrackedImpetusItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ImpetusItem, $ImpetusItem$Type} from "packages/com/sammy/malum/common/item/impetus/$ImpetusItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$SpiritRepairRecipe$IRepairOutputOverride, $SpiritRepairRecipe$IRepairOutputOverride$Type} from "packages/com/sammy/malum/common/recipe/$SpiritRepairRecipe$IRepairOutputOverride"

export class $CrackedImpetusItem extends $Item implements $SpiritRepairRecipe$IRepairOutputOverride {
 "impetus": $ImpetusItem
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

public "overrideRepairResult"(): $Item
public "setRepairedVariant"(arg0: $ImpetusItem$Type): $CrackedImpetusItem
public "ignoreDuringLookup"(): boolean
set "repairedVariant"(value: $ImpetusItem$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrackedImpetusItem$Type = ($CrackedImpetusItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrackedImpetusItem_ = $CrackedImpetusItem$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/catalyzer/$SpiritCatalyzerComponentBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$MultiblockComponentBlock, $MultiblockComponentBlock$Type} from "packages/team/lodestar/lodestone/systems/multiblock/$MultiblockComponentBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SpiritCatalyzerComponentBlock extends $MultiblockComponentBlock {
static readonly "NORTH_SOUTH_SHAPE": $VoxelShape
static readonly "WEST_EAST_SHAPE": $VoxelShape
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Item$Type)>)

public static "makeWestEastShape"(): $VoxelShape
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public static "makeNorthSouthShape"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritCatalyzerComponentBlock$Type = ($SpiritCatalyzerComponentBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritCatalyzerComponentBlock_ = $SpiritCatalyzerComponentBlock$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleAccelerationData" {
import {$CrucibleAccelerationData$TunedValue, $CrucibleAccelerationData$TunedValue$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleAccelerationData$TunedValue"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ICatalyzerAccelerationTarget, $ICatalyzerAccelerationTarget$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$ICatalyzerAccelerationTarget"
import {$ICrucibleAccelerator, $ICrucibleAccelerator$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$ICrucibleAccelerator"
import {$ICrucibleAccelerator$CrucibleAcceleratorType, $ICrucibleAccelerator$CrucibleAcceleratorType$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$ICrucibleAccelerator$CrucibleAcceleratorType"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CrucibleAccelerationData {
static readonly "DEFAULT": $CrucibleAccelerationData
readonly "positions": $List<($BlockPos)>
readonly "accelerators": $List<($ICrucibleAccelerator)>
readonly "focusingSpeed": $CrucibleAccelerationData$TunedValue
readonly "damageChance": $CrucibleAccelerationData$TunedValue
readonly "bonusYieldChance": $CrucibleAccelerationData$TunedValue
readonly "fuelUsageRate": $CrucibleAccelerationData$TunedValue
readonly "chainFocusingChance": $CrucibleAccelerationData$TunedValue
readonly "damageAbsorptionChance": $CrucibleAccelerationData$TunedValue
readonly "restorationChance": $CrucibleAccelerationData$TunedValue
 "globalAttributeModifier": float

constructor()
constructor(arg0: $ICatalyzerAccelerationTarget$Type, arg1: $Map$Type<($ICrucibleAccelerator$CrucibleAcceleratorType$Type), (integer)>, arg2: $Collection$Type<($ICrucibleAccelerator$Type)>)

public static "load"(arg0: $Level$Type, arg1: $ICatalyzerAccelerationTarget$Type, arg2: $CompoundTag$Type): $CrucibleAccelerationData
public "save"(arg0: $CompoundTag$Type): void
public static "createData"(arg0: $ICatalyzerAccelerationTarget$Type, arg1: integer, arg2: $Level$Type, arg3: $BlockPos$Type): $CrucibleAccelerationData
public static "figureOutWeakestValue"(arg0: $CrucibleAccelerationData$Type, arg1: $List$Type<($CrucibleAccelerationData$TunedValue$Type)>): $CrucibleAccelerationData$TunedValue
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrucibleAccelerationData$Type = ($CrucibleAccelerationData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrucibleAccelerationData_ = $CrucibleAccelerationData$Type;
}}
declare module "packages/com/sammy/malum/common/effect/$WickedIntentEffect" {
import {$LivingDamageEvent, $LivingDamageEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDamageEvent"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $WickedIntentEffect extends $MobEffect {

constructor()

public static "removeWickedIntent"(arg0: $LivingDamageEvent$Type): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WickedIntentEffect$Type = ($WickedIntentEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WickedIntentEffect_ = $WickedIntentEffect$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/runes/miracle/$RuneIdleRestorationItem" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractRuneCurioItem, $AbstractRuneCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/runes/$AbstractRuneCurioItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RuneIdleRestorationItem extends $AbstractRuneCurioItem {
readonly "spiritType": $MalumSpiritType
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneIdleRestorationItem$Type = ($RuneIdleRestorationItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuneIdleRestorationItem_ = $RuneIdleRestorationItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/ether/$EtherTorchItem" {
import {$AbstractEtherItem, $AbstractEtherItem$Type} from "packages/com/sammy/malum/common/item/ether/$AbstractEtherItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$ScreenParticleHolder, $ScreenParticleHolder$Type} from "packages/team/lodestar/lodestone/systems/particle/screen/$ScreenParticleHolder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EtherTorchItem extends $AbstractEtherItem {
static readonly "FIRST_COLOR": string
static readonly "SECOND_COLOR": string
static readonly "DEFAULT_FIRST_COLOR": integer
static readonly "DEFAULT_SECOND_COLOR": integer
readonly "iridescent": boolean
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

constructor(arg0: $Block$Type, arg1: $Block$Type, arg2: $Item$Properties$Type, arg3: boolean)

public "spawnLateParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public "removeFromBlockToItemMap"(arg0: $Map$Type<($Block$Type), ($Item$Type)>, arg1: $Item$Type): void
public "registerBlocks"(arg0: $Map$Type<($Block$Type), ($Item$Type)>, arg1: $Item$Type): void
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtherTorchItem$Type = ($EtherTorchItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EtherTorchItem_ = $EtherTorchItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/runes/miracle/$RuneDexterityItem" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractRuneCurioItem, $AbstractRuneCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/runes/$AbstractRuneCurioItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RuneDexterityItem extends $AbstractRuneCurioItem {
readonly "spiritType": $MalumSpiritType
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "addAttributeModifiers"(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg1: $SlotContext$Type, arg2: $ItemStack$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneDexterityItem$Type = ($RuneDexterityItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuneDexterityItem_ = $RuneDexterityItem$Type;
}}
declare module "packages/com/sammy/malum/common/block/blight/$TallCalcifiedBlightBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$DoublePlantBlock, $DoublePlantBlock$Type} from "packages/net/minecraft/world/level/block/$DoublePlantBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TallCalcifiedBlightBlock extends $DoublePlantBlock {
static readonly "STAGE": $IntegerProperty
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
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

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TallCalcifiedBlightBlock$Type = ($TallCalcifiedBlightBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TallCalcifiedBlightBlock_ = $TallCalcifiedBlightBlock$Type;
}}
declare module "packages/com/sammy/malum/common/enchantment/$ReplenishingEnchantment" {
import {$AbstractStaffItem, $AbstractStaffItem$Type} from "packages/com/sammy/malum/common/item/curiosities/weapons/staff/$AbstractStaffItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $ReplenishingEnchantment extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public static "replenishStaffCooldown"(arg0: $AbstractStaffItem$Type, arg1: $Player$Type, arg2: integer): void
public static "replenishStaffCooldown"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): void
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReplenishingEnchantment$Type = ($ReplenishingEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReplenishingEnchantment_ = $ReplenishingEnchantment$Type;
}}
declare module "packages/com/sammy/malum/visual_effects/networked/$ParticleEffectType$ParticleEffectActor" {
import {$PositionEffectData, $PositionEffectData$Type} from "packages/com/sammy/malum/visual_effects/networked/data/$PositionEffectData"
import {$ColorEffectData, $ColorEffectData$Type} from "packages/com/sammy/malum/visual_effects/networked/data/$ColorEffectData"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$NBTEffectData, $NBTEffectData$Type} from "packages/com/sammy/malum/visual_effects/networked/data/$NBTEffectData"

export interface $ParticleEffectType$ParticleEffectActor {

 "act"(arg0: $Level$Type, arg1: $RandomSource$Type, arg2: $PositionEffectData$Type, arg3: $ColorEffectData$Type, arg4: $NBTEffectData$Type): void

(arg0: $Level$Type, arg1: $RandomSource$Type, arg2: $PositionEffectData$Type, arg3: $ColorEffectData$Type, arg4: $NBTEffectData$Type): void
}

export namespace $ParticleEffectType$ParticleEffectActor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectType$ParticleEffectActor$Type = ($ParticleEffectType$ParticleEffectActor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectType$ParticleEffectActor_ = $ParticleEffectType$ParticleEffectActor$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/armor/$MalumArmorItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$LodestoneArmorItem, $LodestoneArmorItem$Type} from "packages/team/lodestar/lodestone/systems/item/$LodestoneArmorItem"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MalumArmorItem extends $LodestoneArmorItem {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $ArmorMaterial$Type, arg1: $ArmorItem$Type$Type, arg2: $Item$Properties$Type)

public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public "getTextureLocation"(): string
public static "get"(arg0: $ItemStack$Type): $Equipable
get "textureLocation"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalumArmorItem$Type = ($MalumArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MalumArmorItem_ = $MalumArmorItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/sets/spirit/$CurioArcaneSpoilRing" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioArcaneSpoilRing extends $MalumCurioItem {
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "addAttributeModifiers"(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg1: $SlotContext$Type, arg2: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioArcaneSpoilRing$Type = ($CurioArcaneSpoilRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioArcaneSpoilRing_ = $CurioArcaneSpoilRing$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/catalyzer/$SpiritCatalyzerCoreBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$ICrucibleAccelerator$CrucibleAcceleratorType, $ICrucibleAccelerator$CrucibleAcceleratorType$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$ICrucibleAccelerator$CrucibleAcceleratorType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MultiBlockStructure, $MultiBlockStructure$Type} from "packages/team/lodestar/lodestone/systems/multiblock/$MultiBlockStructure"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$ICrucibleAccelerator, $ICrucibleAccelerator$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$ICrucibleAccelerator"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$ICatalyzerAccelerationTarget, $ICatalyzerAccelerationTarget$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$ICatalyzerAccelerationTarget"
import {$HorizontalDirectionStructure, $HorizontalDirectionStructure$Type} from "packages/team/lodestar/lodestone/systems/multiblock/$HorizontalDirectionStructure"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$LodestoneBlockEntityInventory, $LodestoneBlockEntityInventory$Type} from "packages/team/lodestar/lodestone/systems/blockentity/$LodestoneBlockEntityInventory"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$MultiBlockCoreEntity, $MultiBlockCoreEntity$Type} from "packages/team/lodestar/lodestone/systems/multiblock/$MultiBlockCoreEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AbstractAugmentItem, $AbstractAugmentItem$Type} from "packages/com/sammy/malum/common/item/augment/$AbstractAugmentItem"

export class $SpiritCatalyzerCoreBlockEntity extends $MultiBlockCoreEntity implements $ICrucibleAccelerator {
static readonly "STRUCTURE": $Supplier<($HorizontalDirectionStructure)>
 "inventory": $LodestoneBlockEntityInventory
 "augmentInventory": $LodestoneBlockEntityInventory
 "burnTicks": float
 "intensity": $HashMap<($MalumSpiritType), (integer)>
readonly "structure": $MultiBlockStructure
 "needsSync": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $MultiBlockStructure$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type)
constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getTarget"(): $ICatalyzerAccelerationTarget
public "setTarget"(arg0: $ICatalyzerAccelerationTarget$Type): void
public "onBreak"(arg0: $Player$Type): void
public "tick"(): void
public "onUse"(arg0: $Player$Type, arg1: $InteractionHand$Type): $InteractionResult
public "getAcceleratorType"(): $ICrucibleAccelerator$CrucibleAcceleratorType
public "getItemOffset"(): $Vec3
public "getAugmentOffset"(): $Vec3
public "getAugment"(): $ItemStack
public "load"(arg0: $CompoundTag$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "addParticles"(arg0: $ICatalyzerAccelerationTarget$Type, arg1: $MalumSpiritType$Type): void
public "canContinueAccelerating"(): boolean
public "canStartAccelerating"(): boolean
public "getAugmentType"(): $Optional<($AbstractAugmentItem)>
get "target"(): $ICatalyzerAccelerationTarget
set "target"(value: $ICatalyzerAccelerationTarget$Type)
get "acceleratorType"(): $ICrucibleAccelerator$CrucibleAcceleratorType
get "itemOffset"(): $Vec3
get "augmentOffset"(): $Vec3
get "augment"(): $ItemStack
get "augmentType"(): $Optional<($AbstractAugmentItem)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritCatalyzerCoreBlockEntity$Type = ($SpiritCatalyzerCoreBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritCatalyzerCoreBlockEntity_ = $SpiritCatalyzerCoreBlockEntity$Type;
}}
declare module "packages/com/sammy/malum/core/systems/spirit/$SpiritVisualMotif" {
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$Easing, $Easing$Type} from "packages/team/lodestar/lodestone/systems/easing/$Easing"
import {$ColorParticleDataBuilder, $ColorParticleDataBuilder$Type} from "packages/team/lodestar/lodestone/systems/particle/data/color/$ColorParticleDataBuilder"

export class $SpiritVisualMotif {

constructor(arg0: $Color$Type, arg1: $Color$Type, arg2: float, arg3: $Easing$Type)
constructor(arg0: float, arg1: $Color$Type, arg2: $Color$Type, arg3: float, arg4: $Easing$Type)

public "getPrimaryColor"(): $Color
public "getSecondaryColor"(): $Color
public "getColorCoefficient"(): float
public "getColorEasing"(): $Easing
public "getAlphaMultiplier"(): float
public "createColorData"(): $ColorParticleDataBuilder
public "createColorData"(arg0: float): $ColorParticleDataBuilder
get "primaryColor"(): $Color
get "secondaryColor"(): $Color
get "colorCoefficient"(): float
get "colorEasing"(): $Easing
get "alphaMultiplier"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritVisualMotif$Type = ($SpiritVisualMotif);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritVisualMotif_ = $SpiritVisualMotif$Type;
}}
declare module "packages/com/sammy/malum/common/enchantment/$ReboundEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$PlayerInteractEvent$RightClickItem, $PlayerInteractEvent$RightClickItem$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$RightClickItem"

export class $ReboundEnchantment extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public static "onRightClickItem"(arg0: $PlayerInteractEvent$RightClickItem$Type): void
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReboundEnchantment$Type = ($ReboundEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReboundEnchantment_ = $ReboundEnchantment$Type;
}}
declare module "packages/com/sammy/malum/common/block/blight/$CalcifiedBlightBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$IForgeShearable, $IForgeShearable$Type} from "packages/net/minecraftforge/common/$IForgeShearable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
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
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BushBlock, $BushBlock$Type} from "packages/net/minecraft/world/level/block/$BushBlock"

export class $CalcifiedBlightBlock extends $BushBlock implements $IForgeShearable {
static readonly "STAGE": $IntegerProperty
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

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "onSheared"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: integer): $List<($ItemStack)>
public "isShearable"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CalcifiedBlightBlock$Type = ($CalcifiedBlightBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CalcifiedBlightBlock_ = $CalcifiedBlightBlock$Type;
}}
declare module "packages/com/sammy/malum/common/effect/aura/$CorruptedAerialAura" {
import {$LivingEvent$LivingJumpEvent, $LivingEvent$LivingJumpEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent$LivingJumpEvent"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingFallEvent, $LivingFallEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingFallEvent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $CorruptedAerialAura extends $MobEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "getAttributeModifierValue"(arg0: integer, arg1: $AttributeModifier$Type): double
public static "onEntityJump"(arg0: $LivingEvent$LivingJumpEvent$Type): void
public static "onEntityFall"(arg0: $LivingFallEvent$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CorruptedAerialAura$Type = ($CorruptedAerialAura);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CorruptedAerialAura_ = $CorruptedAerialAura$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/ritual_plinth/$RitualPlinthBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$WaterLoggedEntityBlock, $WaterLoggedEntityBlock$Type} from "packages/team/lodestar/lodestone/systems/block/$WaterLoggedEntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$RitualPlinthBlockEntity, $RitualPlinthBlockEntity$Type} from "packages/com/sammy/malum/common/block/curiosities/ritual_plinth/$RitualPlinthBlockEntity"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $RitualPlinthBlock<T extends $RitualPlinthBlockEntity> extends $WaterLoggedEntityBlock<(T)> {
static readonly "WATERLOGGED": $BooleanProperty
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

public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualPlinthBlock$Type<T> = ($RitualPlinthBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RitualPlinthBlock_<T> = $RitualPlinthBlock$Type<(T)>;
}}
declare module "packages/com/sammy/malum/common/item/cosmetic/curios/$CurioTokenOfGratitude" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$IEventResponderItem, $IEventResponderItem$Type} from "packages/team/lodestar/lodestone/systems/item/$IEventResponderItem"
import {$ICurio$DropRule, $ICurio$DropRule$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$DropRule"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$EntityJoinLevelEvent, $EntityJoinLevelEvent$Type} from "packages/net/minecraftforge/event/entity/$EntityJoinLevelEvent"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioTokenOfGratitude extends $MalumCurioItem implements $IEventResponderItem {
static readonly "GRADITUDE_CERTIFIED": $List<($UUID)>
static readonly "TRANS_SCARFS": $List<($UUID)>
static readonly "SAMMY": $UUID
static readonly "OWL_PERSON": $UUID
static readonly "SNAKE_SCARF_FELLA": $UUID
static readonly "BOBBU": $UUID
static readonly "DELLY": $UUID
static readonly "LOFI": $UUID
static readonly "CREECHURE": $UUID
static readonly "SALT": $UUID
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public static "addTransScarf"(arg0: $UUID$Type): void
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getDropRule"(arg0: $SlotContext$Type, arg1: $DamageSource$Type, arg2: integer, arg3: boolean, arg4: $ItemStack$Type): $ICurio$DropRule
public static "giveItem"(arg0: $EntityJoinLevelEvent$Type): void
public static "validateForGratitude"(arg0: string): $UUID
public "hurtEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "hurtEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "killEvent"(arg0: $LivingDeathEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "killEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioTokenOfGratitude$Type = ($CurioTokenOfGratitude);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioTokenOfGratitude_ = $CurioTokenOfGratitude$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/runes/madness/$RuneUnnaturalStaminaItem" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractRuneCurioItem, $AbstractRuneCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/runes/$AbstractRuneCurioItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RuneUnnaturalStaminaItem extends $AbstractRuneCurioItem {
readonly "spiritType": $MalumSpiritType
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public static "forceSprint"(arg0: $LivingEntity$Type): boolean
public "addAttributeModifiers"(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg1: $SlotContext$Type, arg2: $ItemStack$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneUnnaturalStaminaItem$Type = ($RuneUnnaturalStaminaItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuneUnnaturalStaminaItem_ = $RuneUnnaturalStaminaItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/runes/miracle/$RuneReinforcementItem" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractRuneCurioItem, $AbstractRuneCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/runes/$AbstractRuneCurioItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RuneReinforcementItem extends $AbstractRuneCurioItem {
readonly "spiritType": $MalumSpiritType
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "addAttributeModifiers"(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg1: $SlotContext$Type, arg2: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneReinforcementItem$Type = ($RuneReinforcementItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuneReinforcementItem_ = $RuneReinforcementItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ICurio$SoundInfo, $ICurio$SoundInfo$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$SoundInfo"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ICurio$DropRule, $ICurio$DropRule$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$DropRule"
import {$ICurioItem, $ICurioItem$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurioItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractMalumCurioItem extends $Item implements $ICurioItem {
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $AbstractMalumCurioItem$MalumTrinketType$Type)

public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "addAttributeModifier"(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg1: $Attribute$Type, arg2: $Function$Type<($UUID$Type), ($AttributeModifier$Type)>): void
public "addAttributeModifiers"(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg1: $SlotContext$Type, arg2: $ItemStack$Type): void
public "getLootingLevel"(arg0: $SlotContext$Type, arg1: $DamageSource$Type, arg2: $LivingEntity$Type, arg3: integer, arg4: $ItemStack$Type): integer
/**
 * 
 * @deprecated
 */
public "canEquip"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): boolean
public "canEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "isEnderMask"(arg0: $SlotContext$Type, arg1: $EnderMan$Type, arg2: $ItemStack$Type): boolean
public "getFortuneLevel"(arg0: $SlotContext$Type, arg1: $LootContext$Type, arg2: $ItemStack$Type): integer
/**
 * 
 * @deprecated
 */
public "onEquip"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "onEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "curioTick"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "canUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "canUnequip"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): boolean
public "getDropRule"(arg0: $SlotContext$Type, arg1: $DamageSource$Type, arg2: integer, arg3: boolean, arg4: $ItemStack$Type): $ICurio$DropRule
/**
 * 
 * @deprecated
 */
public "getDropRule"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): $ICurio$DropRule
/**
 * 
 * @deprecated
 */
public "onUnequip"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "onUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public "getSlotsTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
public "canSync"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "canSync"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "readSyncData"(arg0: $CompoundTag$Type, arg1: $ItemStack$Type): void
public "readSyncData"(arg0: $SlotContext$Type, arg1: $CompoundTag$Type, arg2: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "getFortuneBonus"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): integer
/**
 * 
 * @deprecated
 */
public "canRightClickEquip"(arg0: $ItemStack$Type): boolean
public "curioBreak"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "curioBreak"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): void
public "hasCurioCapability"(arg0: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "getTagsTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
public "getEquipSound"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): $ICurio$SoundInfo
/**
 * 
 * @deprecated
 */
public "writeSyncData"(arg0: $ItemStack$Type): $CompoundTag
public "writeSyncData"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): $CompoundTag
/**
 * 
 * @deprecated
 */
public "getLootingBonus"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): integer
/**
 * 
 * @deprecated
 */
public "curioAnimate"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "playRightClickEquipSound"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "showAttributesTooltip"(arg0: string, arg1: $ItemStack$Type): boolean
public "getAttributesTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
public "getAttributeModifiers"(arg0: string, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "makesPiglinsNeutral"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "canWalkOnPowderedSnow"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractMalumCurioItem$Type = ($AbstractMalumCurioItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractMalumCurioItem_ = $AbstractMalumCurioItem$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleTuning$InverseTuningModifier" {
import {$CrucibleTuning$CrucibleAttributeType, $CrucibleTuning$CrucibleAttributeType$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleTuning$CrucibleAttributeType"
import {$CrucibleAccelerationData$TunedValue, $CrucibleAccelerationData$TunedValue$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleAccelerationData$TunedValue"
import {$CrucibleAccelerationData, $CrucibleAccelerationData$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleAccelerationData"
import {$CrucibleTuning$AppliedTuningType, $CrucibleTuning$AppliedTuningType$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleTuning$AppliedTuningType"
import {$CrucibleTuning$TuningModifier, $CrucibleTuning$TuningModifier$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleTuning$TuningModifier"
import {$CrucibleTuning, $CrucibleTuning$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleTuning"

export class $CrucibleTuning$InverseTuningModifier extends $CrucibleTuning$TuningModifier {
static "DEFAULT": $CrucibleTuning$TuningModifier
readonly "attributeType": $CrucibleTuning$CrucibleAttributeType
readonly "appliedTuningType": $CrucibleTuning$AppliedTuningType
readonly "baseValue": float
readonly "tuningPotency": float

constructor(arg0: $CrucibleTuning$Type, arg1: $CrucibleTuning$CrucibleAttributeType$Type, arg2: float)
constructor(arg0: $CrucibleTuning$Type, arg1: $CrucibleTuning$CrucibleAttributeType$Type)

public "getRelativeValue"(arg0: $CrucibleAccelerationData$Type, arg1: $CrucibleAccelerationData$TunedValue$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrucibleTuning$InverseTuningModifier$Type = ($CrucibleTuning$InverseTuningModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrucibleTuning$InverseTuningModifier_ = $CrucibleTuning$InverseTuningModifier$Type;
}}
declare module "packages/com/sammy/malum/common/item/spirit/$SpiritJarItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpiritJarItem extends $BlockItem {
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

public "getDescriptionId"(arg0: $ItemStack$Type): string
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getRarity"(arg0: $ItemStack$Type): $Rarity
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
export type $SpiritJarItem$Type = ($SpiritJarItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritJarItem_ = $SpiritJarItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/armor/$MalignantStrongholdArmorItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MalumArmorItem, $MalumArmorItem$Type} from "packages/com/sammy/malum/common/item/curiosities/armor/$MalumArmorItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MalignantStrongholdArmorItem extends $MalumArmorItem {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "getTexture"(): string
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "createExtraAttributes"(arg0: $ArmorItem$Type$Type): $Multimap<($Attribute), ($AttributeModifier)>
public static "get"(arg0: $ItemStack$Type): $Equipable
get "texture"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalignantStrongholdArmorItem$Type = ($MalignantStrongholdArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MalignantStrongholdArmorItem_ = $MalignantStrongholdArmorItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/runes/miracle/$RuneVolatileDistortionItem" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractRuneCurioItem, $AbstractRuneCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/runes/$AbstractRuneCurioItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IEventResponderItem, $IEventResponderItem$Type} from "packages/team/lodestar/lodestone/systems/item/$IEventResponderItem"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RuneVolatileDistortionItem extends $AbstractRuneCurioItem implements $IEventResponderItem {
readonly "spiritType": $MalumSpiritType
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "hurtEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "hurtEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "killEvent"(arg0: $LivingDeathEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "killEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneVolatileDistortionItem$Type = ($RuneVolatileDistortionItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuneVolatileDistortionItem_ = $RuneVolatileDistortionItem$Type;
}}
declare module "packages/com/sammy/malum/common/recipe/vanilla/$NodeCookingSerializer$NodeBaker" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IngredientWithCount, $IngredientWithCount$Type} from "packages/team/lodestar/lodestone/systems/recipe/$IngredientWithCount"

export interface $NodeCookingSerializer$NodeBaker<T extends $AbstractCookingRecipe> {

 "create"(arg0: $ResourceLocation$Type, arg1: string, arg2: $Ingredient$Type, arg3: $IngredientWithCount$Type, arg4: float, arg5: integer): T

(arg0: $ResourceLocation$Type, arg1: string, arg2: $Ingredient$Type, arg3: $IngredientWithCount$Type, arg4: float, arg5: integer): T
}

export namespace $NodeCookingSerializer$NodeBaker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NodeCookingSerializer$NodeBaker$Type<T> = ($NodeCookingSerializer$NodeBaker<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NodeCookingSerializer$NodeBaker_<T> = $NodeCookingSerializer$NodeBaker$Type<(T)>;
}}
declare module "packages/com/sammy/malum/common/recipe/$SpiritRepairRecipe$IRepairOutputOverride" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"

export interface $SpiritRepairRecipe$IRepairOutputOverride {

 "overrideRepairResult"(): $Item
 "ignoreDuringLookup"(): boolean
}

export namespace $SpiritRepairRecipe$IRepairOutputOverride {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritRepairRecipe$IRepairOutputOverride$Type = ($SpiritRepairRecipe$IRepairOutputOverride);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritRepairRecipe$IRepairOutputOverride_ = $SpiritRepairRecipe$IRepairOutputOverride$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/weapons/$TyrvingItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LodestoneSwordItem, $LodestoneSwordItem$Type} from "packages/team/lodestar/lodestone/systems/item/tools/$LodestoneSwordItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$IMalumEventResponderItem, $IMalumEventResponderItem$Type} from "packages/com/sammy/malum/common/item/$IMalumEventResponderItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TyrvingItem extends $LodestoneSwordItem implements $IMalumEventResponderItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
public "hurtEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "onSoulwardAbsorbDamage"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: float, arg3: float): void
public "onSoulwardAbsorbDamage"(arg0: $LivingHurtEvent$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: float, arg4: float): void
public "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: float): float
public "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: float): float
public "pickupSpirit"(arg0: $LivingEntity$Type, arg1: double): void
public "hurtEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "killEvent"(arg0: $LivingDeathEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "killEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TyrvingItem$Type = ($TyrvingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TyrvingItem_ = $TyrvingItem$Type;
}}
declare module "packages/com/sammy/malum/common/recipe/$SpiritTransmutationRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$SpiritTransmutationRecipe, $SpiritTransmutationRecipe$Type} from "packages/com/sammy/malum/common/recipe/$SpiritTransmutationRecipe"

export class $SpiritTransmutationRecipe$Serializer implements $RecipeSerializer<($SpiritTransmutationRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $SpiritTransmutationRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $SpiritTransmutationRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $SpiritTransmutationRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $SpiritTransmutationRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritTransmutationRecipe$Serializer$Type = ($SpiritTransmutationRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritTransmutationRecipe$Serializer_ = $SpiritTransmutationRecipe$Serializer$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/runes/miracle/$RuneAlimentCleansingItem" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractRuneCurioItem, $AbstractRuneCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/runes/$AbstractRuneCurioItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectEvent$Added, $MobEffectEvent$Added$Type} from "packages/net/minecraftforge/event/entity/living/$MobEffectEvent$Added"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RuneAlimentCleansingItem extends $AbstractRuneCurioItem {
readonly "spiritType": $MalumSpiritType
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public static "onPotionApplied"(arg0: $MobEffectEvent$Added$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneAlimentCleansingItem$Type = ($RuneAlimentCleansingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuneAlimentCleansingItem_ = $RuneAlimentCleansingItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/$CurioOrnateRing" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioOrnateRing extends $MalumCurioItem {
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "addAttributeModifiers"(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg1: $SlotContext$Type, arg2: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioOrnateRing$Type = ($CurioOrnateRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioOrnateRing_ = $CurioOrnateRing$Type;
}}
declare module "packages/com/sammy/malum/common/block/mana_mote/$SpiritMoteBlock" {
import {$LodestoneEntityBlock, $LodestoneEntityBlock$Type} from "packages/team/lodestar/lodestone/systems/block/$LodestoneEntityBlock"
import {$MoteOfManaBlockEntity, $MoteOfManaBlockEntity$Type} from "packages/com/sammy/malum/common/block/mana_mote/$MoteOfManaBlockEntity"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $SpiritMoteBlock extends $LodestoneEntityBlock<($MoteOfManaBlockEntity)> {
readonly "spiritType": $MalumSpiritType
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $MalumSpiritType$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritMoteBlock$Type = ($SpiritMoteBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritMoteBlock_ = $SpiritMoteBlock$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/tools/$TotemicStaffItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TotemicStaffItem extends $Item {
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TotemicStaffItem$Type = ($TotemicStaffItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TotemicStaffItem_ = $TotemicStaffItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/augment/$ImpurityStabilizer" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractAugmentItem, $AbstractAugmentItem$Type} from "packages/com/sammy/malum/common/item/augment/$AbstractAugmentItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ImpurityStabilizer extends $AbstractAugmentItem {
readonly "spiritType": $MalumSpiritType
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

public "getFuelUsageRateIncrease"(): float
public "getInstabilityIncrease"(): float
public "getWeakestAttributeMultiplier"(): float
get "fuelUsageRateIncrease"(): float
get "instabilityIncrease"(): float
get "weakestAttributeMultiplier"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImpurityStabilizer$Type = ($ImpurityStabilizer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImpurityStabilizer_ = $ImpurityStabilizer$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/weeping_well/$WeepingWellBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $WeepingWellBlock extends $HorizontalDirectionalBlock {
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

public "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeepingWellBlock$Type = ($WeepingWellBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeepingWellBlock_ = $WeepingWellBlock$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/runes/$TotemicRuneCurioItem" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractRuneCurioItem, $AbstractRuneCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/runes/$AbstractRuneCurioItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$TotemicRiteType, $TotemicRiteType$Type} from "packages/com/sammy/malum/common/spiritrite/$TotemicRiteType"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TotemicRuneCurioItem extends $AbstractRuneCurioItem {
readonly "mobEffectSupplier": $Supplier<($MobEffect)>
readonly "entityPredicate": $Predicate<($LivingEntity)>
readonly "spiritType": $MalumSpiritType
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $TotemicRiteType$Type, arg2: boolean)
constructor(arg0: $Item$Properties$Type, arg1: $TotemicRiteType$Type, arg2: boolean, arg3: integer)

public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TotemicRuneCurioItem$Type = ($TotemicRuneCurioItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TotemicRuneCurioItem_ = $TotemicRuneCurioItem$Type;
}}
declare module "packages/com/sammy/malum/core/handlers/hiding/flags/$UncappedFeatureFlag" {
import {$FeatureFlagUniverse, $FeatureFlagUniverse$Type} from "packages/net/minecraft/world/flag/$FeatureFlagUniverse"

export class $UncappedFeatureFlag {
readonly "universe": $FeatureFlagUniverse
readonly "maskBit": integer

constructor(arg0: $FeatureFlagUniverse$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UncappedFeatureFlag$Type = ($UncappedFeatureFlag);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UncappedFeatureFlag_ = $UncappedFeatureFlag$Type;
}}
declare module "packages/com/sammy/malum/common/block/storage/stand/$ItemStandBlockEntity" {
import {$MalumItemHolderBlockEntity, $MalumItemHolderBlockEntity$Type} from "packages/com/sammy/malum/common/block/storage/$MalumItemHolderBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$LodestoneBlockEntityInventory, $LodestoneBlockEntityInventory$Type} from "packages/team/lodestar/lodestone/systems/blockentity/$LodestoneBlockEntityInventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ItemStandBlockEntity extends $MalumItemHolderBlockEntity {
 "inventory": $LodestoneBlockEntityInventory
 "needsSync": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getItemOffset"(arg0: float): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStandBlockEntity$Type = ($ItemStandBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStandBlockEntity_ = $ItemStandBlockEntity$Type;
}}
declare module "packages/com/sammy/malum/common/effect/$ReactiveShieldingEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $ReactiveShieldingEffect extends $MobEffect {

constructor()

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactiveShieldingEffect$Type = ($ReactiveShieldingEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactiveShieldingEffect_ = $ReactiveShieldingEffect$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/repair_pylon/$RepairPylonCoreBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$WaterLoggedEntityBlock, $WaterLoggedEntityBlock$Type} from "packages/team/lodestar/lodestone/systems/block/$WaterLoggedEntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$RepairPylonCoreBlockEntity, $RepairPylonCoreBlockEntity$Type} from "packages/com/sammy/malum/common/block/curiosities/repair_pylon/$RepairPylonCoreBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $RepairPylonCoreBlock<T extends $RepairPylonCoreBlockEntity> extends $WaterLoggedEntityBlock<(T)> {
static readonly "SHAPE": $VoxelShape
static readonly "WATERLOGGED": $BooleanProperty
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

public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public static "makeShape"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepairPylonCoreBlock$Type<T> = ($RepairPylonCoreBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RepairPylonCoreBlock_<T> = $RepairPylonCoreBlock$Type<(T)>;
}}
declare module "packages/com/sammy/malum/common/worldgen/tree/$SoulwoodTreeFeature" {
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$ServerLevelAccessor, $ServerLevelAccessor$Type} from "packages/net/minecraft/world/level/$ServerLevelAccessor"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$LodestoneBlockFiller$LodestoneLayerToken, $LodestoneBlockFiller$LodestoneLayerToken$Type} from "packages/team/lodestar/lodestone/systems/worldgen/$LodestoneBlockFiller$LodestoneLayerToken"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$Type} from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$LodestoneBlockFiller, $LodestoneBlockFiller$Type} from "packages/team/lodestar/lodestone/systems/worldgen/$LodestoneBlockFiller"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SoulwoodTreeFeature extends $Feature<($NoneFeatureConfiguration)> {
static readonly "LOGS": $LodestoneBlockFiller$LodestoneLayerToken
static readonly "LEAVES": $LodestoneBlockFiller$LodestoneLayerToken
static readonly "HANGING_LEAVES": $LodestoneBlockFiller$LodestoneLayerToken
static readonly "BLIGHT": $LodestoneBlockFiller$LodestoneLayerToken
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
public "addDownwardsTrunkConnections"(arg0: $BlockState$Type, arg1: $WorldGenLevel$Type, arg2: $LodestoneBlockFiller$Type, arg3: $BlockPos$Type): $BlockPos
public static "makeLeafSlice"(arg0: $LodestoneBlockFiller$Type, arg1: $RandomSource$Type, arg2: $BlockPos$MutableBlockPos$Type, arg3: integer, arg4: integer, arg5: boolean): void
public static "makeLeafBlob"(arg0: $LodestoneBlockFiller$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type): void
public static "pointDistancePlane"(arg0: double, arg1: double, arg2: double, arg3: double): float
public static "generateBlight"(arg0: $ServerLevelAccessor$Type, arg1: $LodestoneBlockFiller$Type, arg2: $Map$Type<(integer), (double)>, arg3: $BlockPos$Type, arg4: integer): void
public static "generateBlight"(arg0: $ServerLevelAccessor$Type, arg1: $LodestoneBlockFiller$Type, arg2: $BlockPos$Type, arg3: integer): $Map<(integer), (double)>
public static "generateBlight"(arg0: $ServerLevelAccessor$Type, arg1: $LodestoneBlockFiller$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer, arg5: $Map$Type<(integer), (double)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulwoodTreeFeature$Type = ($SoulwoodTreeFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulwoodTreeFeature_ = $SoulwoodTreeFeature$Type;
}}
declare module "packages/com/sammy/malum/common/item/augment/$WarpingEngineItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractAugmentItem, $AbstractAugmentItem$Type} from "packages/com/sammy/malum/common/item/augment/$AbstractAugmentItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WarpingEngineItem extends $AbstractAugmentItem {
readonly "spiritType": $MalumSpiritType
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

public "getFuelUsageRateIncrease"(): float
public "getInstabilityIncrease"(): float
public "getChainFocusingChance"(): float
get "fuelUsageRateIncrease"(): float
get "instabilityIncrease"(): float
get "chainFocusingChance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WarpingEngineItem$Type = ($WarpingEngineItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WarpingEngineItem_ = $WarpingEngineItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/impetus/$NodeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $NodeItem extends $Item {
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NodeItem$Type = ($NodeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NodeItem_ = $NodeItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/brooches/$CurioRunicBrooch" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioRunicBrooch extends $MalumCurioItem {
static readonly "RUNIC_BROOCH_RING": $UUID
static readonly "RUNIC_BROOCH_RUNE": $UUID
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "addAttributeModifiers"(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg1: $SlotContext$Type, arg2: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioRunicBrooch$Type = ($CurioRunicBrooch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioRunicBrooch_ = $CurioRunicBrooch$Type;
}}
declare module "packages/com/sammy/malum/common/item/augment/$BlazingDiodeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractAugmentItem, $AbstractAugmentItem$Type} from "packages/com/sammy/malum/common/item/augment/$AbstractAugmentItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlazingDiodeItem extends $AbstractAugmentItem {
readonly "spiritType": $MalumSpiritType
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

public "getSpeedIncrease"(): float
public "getFuelUsageRateIncrease"(): float
get "speedIncrease"(): float
get "fuelUsageRateIncrease"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazingDiodeItem$Type = ($BlazingDiodeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlazingDiodeItem_ = $BlazingDiodeItem$Type;
}}
declare module "packages/com/sammy/malum/common/block/nature/$MalumSaplingBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$SaplingBlock, $SaplingBlock$Type} from "packages/net/minecraft/world/level/block/$SaplingBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractTreeGrower, $AbstractTreeGrower$Type} from "packages/net/minecraft/world/level/block/grower/$AbstractTreeGrower"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $MalumSaplingBlock extends $SaplingBlock {
static readonly "STAGE": $IntegerProperty
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

constructor(arg0: $AbstractTreeGrower$Type, arg1: $BlockBehaviour$Properties$Type)

public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalumSaplingBlock$Type = ($MalumSaplingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MalumSaplingBlock_ = $MalumSaplingBlock$Type;
}}
declare module "packages/com/sammy/malum/common/item/$IVoidItem" {
import {$ScreenParticleHolder, $ScreenParticleHolder$Type} from "packages/team/lodestar/lodestone/systems/particle/screen/$ScreenParticleHolder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ParticleEmitterHandler$ItemParticleSupplier, $ParticleEmitterHandler$ItemParticleSupplier$Type} from "packages/team/lodestar/lodestone/handlers/screenparticle/$ParticleEmitterHandler$ItemParticleSupplier"

export interface $IVoidItem extends $ParticleEmitterHandler$ItemParticleSupplier {

 "spawnEarlyParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
 "getVoidParticleIntensity"(): float
 "spawnLateParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
}

export namespace $IVoidItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVoidItem$Type = ($IVoidItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVoidItem_ = $IVoidItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/misc/$BlazingQuartzItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemNameBlockItem, $ItemNameBlockItem$Type} from "packages/net/minecraft/world/item/$ItemNameBlockItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlazingQuartzItem extends $ItemNameBlockItem {
readonly "fuel": integer
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

constructor(arg0: $Block$Type, arg1: integer, arg2: $Item$Properties$Type)

public "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazingQuartzItem$Type = ($BlazingQuartzItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlazingQuartzItem_ = $BlazingQuartzItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/sets/alchemical/$CurioRingOfProwess" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$IMalumEventResponderItem, $IMalumEventResponderItem$Type} from "packages/com/sammy/malum/common/item/$IMalumEventResponderItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioRingOfProwess extends $MalumCurioItem implements $IMalumEventResponderItem {
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "pickupSpirit"(arg0: $LivingEntity$Type, arg1: double): void
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "onSoulwardAbsorbDamage"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: float, arg3: float): void
public "onSoulwardAbsorbDamage"(arg0: $LivingHurtEvent$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: float, arg4: float): void
public "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: float): float
public "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: float): float
public "hurtEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "hurtEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "killEvent"(arg0: $LivingDeathEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "killEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioRingOfProwess$Type = ($CurioRingOfProwess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioRingOfProwess_ = $CurioRingOfProwess$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/sets/prospector/$CurioHoarderRing" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioHoarderRing extends $MalumCurioItem {
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public static "hasHoarderRing"(arg0: $LivingEntity$Type): boolean
public static "getExplosionPos"(arg0: boolean, arg1: $BlockPos$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): $BlockPos
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioHoarderRing$Type = ($CurioHoarderRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioHoarderRing_ = $CurioHoarderRing$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/spirit_altar/$IAltarAccelerator" {
import {$IAltarAccelerator$AltarAcceleratorType, $IAltarAccelerator$AltarAcceleratorType$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_altar/$IAltarAccelerator$AltarAcceleratorType"
import {$SpiritAltarBlockEntity, $SpiritAltarBlockEntity$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_altar/$SpiritAltarBlockEntity"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"

export interface $IAltarAccelerator {

 "canAccelerate"(): boolean
 "getAcceleratorType"(): $IAltarAccelerator$AltarAcceleratorType
 "addParticles"(arg0: $SpiritAltarBlockEntity$Type, arg1: $MalumSpiritType$Type): void
 "getAcceleration"(): float
}

export namespace $IAltarAccelerator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAltarAccelerator$Type = ($IAltarAccelerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAltarAccelerator_ = $IAltarAccelerator$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/obelisk/$ObeliskComponentBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$MultiblockComponentBlock, $MultiblockComponentBlock$Type} from "packages/team/lodestar/lodestone/systems/multiblock/$MultiblockComponentBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ObeliskComponentBlock extends $MultiblockComponentBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Item$Type)>)

public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "makeShape"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObeliskComponentBlock$Type = ($ObeliskComponentBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObeliskComponentBlock_ = $ObeliskComponentBlock$Type;
}}
declare module "packages/com/sammy/malum/common/block/blight/$BlightedSoulwoodBlock" {
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $BlightedSoulwoodBlock extends $Block {
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

public "getToolModifiedState"(arg0: $BlockState$Type, arg1: $UseOnContext$Type, arg2: $ToolAction$Type, arg3: boolean): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlightedSoulwoodBlock$Type = ($BlightedSoulwoodBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlightedSoulwoodBlock_ = $BlightedSoulwoodBlock$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AbstractMalumCurioItem$MalumTrinketType extends $Enum<($AbstractMalumCurioItem$MalumTrinketType)> {
static readonly "CLOTH": $AbstractMalumCurioItem$MalumTrinketType
static readonly "ORNATE": $AbstractMalumCurioItem$MalumTrinketType
static readonly "GILDED": $AbstractMalumCurioItem$MalumTrinketType
static readonly "ALCHEMICAL": $AbstractMalumCurioItem$MalumTrinketType
static readonly "ROTTEN": $AbstractMalumCurioItem$MalumTrinketType
static readonly "METALLIC": $AbstractMalumCurioItem$MalumTrinketType
static readonly "RUNE": $AbstractMalumCurioItem$MalumTrinketType
static readonly "VOID": $AbstractMalumCurioItem$MalumTrinketType


public static "values"(): ($AbstractMalumCurioItem$MalumTrinketType)[]
public static "valueOf"(arg0: string): $AbstractMalumCurioItem$MalumTrinketType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractMalumCurioItem$MalumTrinketType$Type = (("void") | ("ornate") | ("gilded") | ("alchemical") | ("rotten") | ("metallic") | ("cloth") | ("rune")) | ($AbstractMalumCurioItem$MalumTrinketType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractMalumCurioItem$MalumTrinketType_ = $AbstractMalumCurioItem$MalumTrinketType$Type;
}}
declare module "packages/com/sammy/malum/common/item/cosmetic/weaves/$PrideweaveItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractWeaveItem, $AbstractWeaveItem$Type} from "packages/com/sammy/malum/common/item/cosmetic/weaves/$AbstractWeaveItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PrideweaveItem extends $AbstractWeaveItem {
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrideweaveItem$Type = ($PrideweaveItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrideweaveItem_ = $PrideweaveItem$Type;
}}
declare module "packages/com/sammy/malum/client/renderer/text/$SubtractiveTextGlyphRenderTypes" {
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $SubtractiveTextGlyphRenderTypes {

 "malum$getSubtractiveType"(): $RenderType

(): $RenderType
}

export namespace $SubtractiveTextGlyphRenderTypes {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SubtractiveTextGlyphRenderTypes$Type = ($SubtractiveTextGlyphRenderTypes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SubtractiveTextGlyphRenderTypes_ = $SubtractiveTextGlyphRenderTypes$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$ICrucibleAccelerator$CrucibleAcceleratorType" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ICrucibleAccelerator$CrucibleAcceleratorType {
readonly "maximumEntries": integer
readonly "type": $ResourceLocation

constructor(arg0: integer, arg1: $ResourceLocation$Type)

public "getExtraDamageRollChance"(arg0: integer): float
public "getAcceleration"(arg0: integer): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICrucibleAccelerator$CrucibleAcceleratorType$Type = ($ICrucibleAccelerator$CrucibleAcceleratorType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICrucibleAccelerator$CrucibleAcceleratorType_ = $ICrucibleAccelerator$CrucibleAcceleratorType$Type;
}}
declare module "packages/com/sammy/malum/common/item/food/$DrinkableSapItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DrinkableSapItem extends $Item {
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

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getEatingSound"(): $SoundEvent
public "getDrinkingSound"(): $SoundEvent
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
get "eatingSound"(): $SoundEvent
get "drinkingSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrinkableSapItem$Type = ($DrinkableSapItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrinkableSapItem_ = $DrinkableSapItem$Type;
}}
declare module "packages/com/sammy/malum/common/effect/aura/$CorruptedEarthenAura" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $CorruptedEarthenAura extends $MobEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CorruptedEarthenAura$Type = ($CorruptedEarthenAura);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CorruptedEarthenAura_ = $CorruptedEarthenAura$Type;
}}
declare module "packages/com/sammy/malum/common/item/cosmetic/weaves/$AbstractWeaveItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractWeaveItem extends $Item {
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractWeaveItem$Type = ($AbstractWeaveItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractWeaveItem_ = $AbstractWeaveItem$Type;
}}
declare module "packages/com/sammy/malum/common/recipe/$SpiritFocusingRecipe$Serializer" {
import {$SpiritFocusingRecipe, $SpiritFocusingRecipe$Type} from "packages/com/sammy/malum/common/recipe/$SpiritFocusingRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SpiritFocusingRecipe$Serializer implements $RecipeSerializer<($SpiritFocusingRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $SpiritFocusingRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $SpiritFocusingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $SpiritFocusingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $SpiritFocusingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritFocusingRecipe$Serializer$Type = ($SpiritFocusingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritFocusingRecipe$Serializer_ = $SpiritFocusingRecipe$Serializer$Type;
}}
declare module "packages/com/sammy/malum/common/recipe/$AbstractSpiritListMalumRecipe" {
import {$AbstractMalumRecipe, $AbstractMalumRecipe$Type} from "packages/com/sammy/malum/common/recipe/$AbstractMalumRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SpiritWithCount, $SpiritWithCount$Type} from "packages/com/sammy/malum/core/systems/recipe/$SpiritWithCount"

export class $AbstractSpiritListMalumRecipe extends $AbstractMalumRecipe {
readonly "spirits": $List<($SpiritWithCount)>


public "doSpiritsMatch"(arg0: $List$Type<($ItemStack$Type)>): boolean
public "getSortedSpirits"(arg0: $List$Type<($ItemStack$Type)>): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSpiritListMalumRecipe$Type = ($AbstractSpiritListMalumRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSpiritListMalumRecipe_ = $AbstractSpiritListMalumRecipe$Type;
}}
declare module "packages/com/sammy/malum/common/item/augment/$IntricateAssemblyItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractAugmentItem, $AbstractAugmentItem$Type} from "packages/com/sammy/malum/common/item/augment/$AbstractAugmentItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $IntricateAssemblyItem extends $AbstractAugmentItem {
readonly "spiritType": $MalumSpiritType
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

public "getFortuneChance"(): float
public "getSpeedIncrease"(): float
public "getFuelUsageRateIncrease"(): float
get "fortuneChance"(): float
get "speedIncrease"(): float
get "fuelUsageRateIncrease"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntricateAssemblyItem$Type = ($IntricateAssemblyItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntricateAssemblyItem_ = $IntricateAssemblyItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/sets/weeping/$CurioGruesomeConcentrationRing" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IVoidItem, $IVoidItem$Type} from "packages/com/sammy/malum/common/item/$IVoidItem"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ScreenParticleHolder, $ScreenParticleHolder$Type} from "packages/team/lodestar/lodestone/systems/particle/screen/$ScreenParticleHolder"
import {$LivingEntityUseItemEvent$Finish, $LivingEntityUseItemEvent$Finish$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEntityUseItemEvent$Finish"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioGruesomeConcentrationRing extends $MalumCurioItem implements $IVoidItem {
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public static "finishEating"(arg0: $LivingEntityUseItemEvent$Finish$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public "getVoidParticleIntensity"(): float
public "spawnLateParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
get "voidParticleIntensity"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioGruesomeConcentrationRing$Type = ($CurioGruesomeConcentrationRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioGruesomeConcentrationRing_ = $CurioGruesomeConcentrationRing$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/sets/weeping/$CurioGrowingFleshRing" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IVoidItem, $IVoidItem$Type} from "packages/com/sammy/malum/common/item/$IVoidItem"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$IMalumEventResponderItem, $IMalumEventResponderItem$Type} from "packages/com/sammy/malum/common/item/$IMalumEventResponderItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$ScreenParticleHolder, $ScreenParticleHolder$Type} from "packages/team/lodestar/lodestone/systems/particle/screen/$ScreenParticleHolder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioGrowingFleshRing extends $MalumCurioItem implements $IVoidItem, $IMalumEventResponderItem {
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "pickupSpirit"(arg0: $LivingEntity$Type, arg1: double): void
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public "getVoidParticleIntensity"(): float
public "onSoulwardAbsorbDamage"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: float, arg3: float): void
public "onSoulwardAbsorbDamage"(arg0: $LivingHurtEvent$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: float, arg4: float): void
public "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: float): float
public "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: float): float
public "spawnLateParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public "hurtEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "hurtEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "killEvent"(arg0: $LivingDeathEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "killEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
get "voidParticleIntensity"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioGrowingFleshRing$Type = ($CurioGrowingFleshRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioGrowingFleshRing_ = $CurioGrowingFleshRing$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/brooches/$CurioGluttonousBrooch" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioGluttonousBrooch extends $MalumCurioItem {
static readonly "GLUTTONOUS_BROOCH_BELT": $UUID
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "addAttributeModifiers"(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg1: $SlotContext$Type, arg2: $ItemStack$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioGluttonousBrooch$Type = ($CurioGluttonousBrooch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioGluttonousBrooch_ = $CurioGluttonousBrooch$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/nitrate/$EthericNitrateItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractNitrateEntity, $AbstractNitrateEntity$Type} from "packages/com/sammy/malum/common/entity/nitrate/$AbstractNitrateEntity"
import {$AbstractNitrateItem, $AbstractNitrateItem$Type} from "packages/com/sammy/malum/common/item/curiosities/nitrate/$AbstractNitrateItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EthericNitrateItem extends $AbstractNitrateItem {
readonly "entitySupplier": $Function<($Player), ($AbstractNitrateEntity)>
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EthericNitrateItem$Type = ($EthericNitrateItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EthericNitrateItem_ = $EthericNitrateItem$Type;
}}
declare module "packages/com/sammy/malum/common/worldgen/ore/$CthonicGoldOreFeature" {
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$LayeredOreFeature, $LayeredOreFeature$Type} from "packages/com/sammy/malum/common/worldgen/ore/$LayeredOreFeature"
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

export class $CthonicGoldOreFeature extends $LayeredOreFeature {
 "oreConfigurations": $List<($OreConfiguration)>
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

public "placeClusters"(arg0: $List$Type<($Runnable$Type)>, arg1: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CthonicGoldOreFeature$Type = ($CthonicGoldOreFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CthonicGoldOreFeature_ = $CthonicGoldOreFeature$Type;
}}
declare module "packages/com/sammy/malum/core/handlers/hiding/flags/$FeatureFlagCacher" {
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $FeatureFlagCacher {

 "malum$cachedFeatureFlags"(): $Iterable<($ResourceLocation)>

(): $Iterable<($ResourceLocation)>
}

export namespace $FeatureFlagCacher {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeatureFlagCacher$Type = ($FeatureFlagCacher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeatureFlagCacher_ = $FeatureFlagCacher$Type;
}}
declare module "packages/com/sammy/malum/common/worldgen/tree/$RunewoodTreeConfiguration" {
import {$ConfiguredFeature, $ConfiguredFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$FeatureConfiguration, $FeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$FeatureConfiguration"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $RunewoodTreeConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($RunewoodTreeConfiguration)>
readonly "sapling": $Block
readonly "log": $Block
readonly "sapFilledLog": $Block
readonly "leaves": $Block
readonly "hangingLeaves": $Block

constructor(arg0: $Block$Type, arg1: $Block$Type, arg2: $Block$Type, arg3: $Block$Type, arg4: $Block$Type)

public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunewoodTreeConfiguration$Type = ($RunewoodTreeConfiguration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RunewoodTreeConfiguration_ = $RunewoodTreeConfiguration$Type;
}}
declare module "packages/com/sammy/malum/common/effect/aura/$CorruptedInfernalAura" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $CorruptedInfernalAura extends $MobEffect {

constructor()

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CorruptedInfernalAura$Type = ($CorruptedInfernalAura);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CorruptedInfernalAura_ = $CorruptedInfernalAura$Type;
}}
declare module "packages/com/sammy/malum/common/item/misc/$AestheticaMusicDiscItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IVoidItem, $IVoidItem$Type} from "packages/com/sammy/malum/common/item/$IVoidItem"
import {$RecordItem, $RecordItem$Type} from "packages/net/minecraft/world/item/$RecordItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TrackData, $TrackData$Type} from "packages/gg/moonflower/etched/api/record/$TrackData"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ScreenParticleHolder, $ScreenParticleHolder$Type} from "packages/team/lodestar/lodestone/systems/particle/screen/$ScreenParticleHolder"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AestheticaMusicDiscItem extends $RecordItem implements $IVoidItem {
/**
 * 
 * @deprecated
 */
static readonly "BY_NAME": $Map<($SoundEvent), ($RecordItem)>
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

public "getVoidParticleIntensity"(): float
public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public "spawnLateParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public static "isPlayableRecord"(stack: $ItemStack$Type): boolean
public static "playEntityRecord"(entity: $Entity$Type, record: $ItemStack$Type, restart: boolean): void
public static "stopEntityRecord"(entity: $Entity$Type): void
public static "canShowMessage"(x: double, y: double, z: double): boolean
public static "getStackMusic"(stack: $ItemStack$Type): $Optional<(($TrackData)[])>
public static "getStackAlbum"(stack: $ItemStack$Type): $Optional<($TrackData)>
public static "getStackTrackCount"(stack: $ItemStack$Type): integer
get "voidParticleIntensity"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AestheticaMusicDiscItem$Type = ($AestheticaMusicDiscItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AestheticaMusicDiscItem_ = $AestheticaMusicDiscItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/sets/alchemical/$CurioCurativeRing" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$IMalumEventResponderItem, $IMalumEventResponderItem$Type} from "packages/com/sammy/malum/common/item/$IMalumEventResponderItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioCurativeRing extends $MalumCurioItem implements $IMalumEventResponderItem {
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "pickupSpirit"(arg0: $LivingEntity$Type, arg1: double): void
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "onSoulwardAbsorbDamage"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: float, arg3: float): void
public "onSoulwardAbsorbDamage"(arg0: $LivingHurtEvent$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: float, arg4: float): void
public "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: float): float
public "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: float): float
public "hurtEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "hurtEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "killEvent"(arg0: $LivingDeathEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "killEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioCurativeRing$Type = ($CurioCurativeRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioCurativeRing_ = $CurioCurativeRing$Type;
}}
declare module "packages/com/sammy/malum/core/systems/ritual/$MalumRitualType" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MalumRitualRecipeData, $MalumRitualRecipeData$Type} from "packages/com/sammy/malum/core/systems/ritual/$MalumRitualRecipeData"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RitualPlinthBlockEntity, $RitualPlinthBlockEntity$Type} from "packages/com/sammy/malum/common/block/curiosities/ritual_plinth/$RitualPlinthBlockEntity"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"
import {$MalumRitualTier, $MalumRitualTier$Type} from "packages/com/sammy/malum/core/systems/ritual/$MalumRitualTier"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$List, $List$Type} from "packages/java/util/$List"

export class $MalumRitualType {
readonly "spirit": $MalumSpiritType
readonly "identifier": $ResourceLocation

constructor(arg0: $ResourceLocation$Type, arg1: $MalumSpiritType$Type)

public "createShardNBT"(arg0: $MalumRitualTier$Type): $CompoundTag
public "triggerRitualEffect"(arg0: $RitualPlinthBlockEntity$Type): void
public "getRecipeData"(): $MalumRitualRecipeData
public "translationIdentifier"(): string
public "makeDescriptorComponent"(arg0: string, arg1: string, arg2: $UnaryOperator$Type<($Style$Type)>): $Component
public "makeDescriptorComponent"(arg0: string, arg1: string): $Component
public "getIcon"(): $ResourceLocation
public "makeCodexDetailedDescriptor"(): $List<($Component)>
public "onUsePlinth"(arg0: $RitualPlinthBlockEntity$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResult
public "isItemStackValid"(arg0: $RitualPlinthBlockEntity$Type, arg1: $ItemStack$Type): boolean
public "makeRitualShardDescriptor"(arg0: $MalumRitualTier$Type): $List<($Component)>
public "setRecipeData"(arg0: $MalumRitualRecipeData$Type): void
get "recipeData"(): $MalumRitualRecipeData
get "icon"(): $ResourceLocation
set "recipeData"(value: $MalumRitualRecipeData$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalumRitualType$Type = ($MalumRitualType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MalumRitualType_ = $MalumRitualType$Type;
}}
declare module "packages/com/sammy/malum/common/item/misc/$CalcifiedBlightItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemNameBlockItem, $ItemNameBlockItem$Type} from "packages/net/minecraft/world/item/$ItemNameBlockItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CalcifiedBlightItem extends $ItemNameBlockItem {
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

public "removeFromBlockToItemMap"(arg0: $Map$Type<($Block$Type), ($Item$Type)>, arg1: $Item$Type): void
public "registerBlocks"(arg0: $Map$Type<($Block$Type), ($Item$Type)>, arg1: $Item$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CalcifiedBlightItem$Type = ($CalcifiedBlightItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CalcifiedBlightItem_ = $CalcifiedBlightItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/sets/misc/$CurioHarmonyNecklace" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$LivingEvent$LivingVisibilityEvent, $LivingEvent$LivingVisibilityEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent$LivingVisibilityEvent"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioHarmonyNecklace extends $MalumCurioItem {
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public static "preventDetection"(arg0: $LivingEvent$LivingVisibilityEvent$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioHarmonyNecklace$Type = ($CurioHarmonyNecklace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioHarmonyNecklace_ = $CurioHarmonyNecklace$Type;
}}
declare module "packages/com/sammy/malum/common/block/nature/soulwood/$SapFilledSoulwoodLogBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$SapFilledLogBlock, $SapFilledLogBlock$Type} from "packages/com/sammy/malum/common/block/nature/$SapFilledLogBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SapFilledSoulwoodLogBlock extends $SapFilledLogBlock {
readonly "drained": $Supplier<($Block)>
readonly "sap": $Supplier<($Item)>
readonly "sapColor": $Color
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Block$Type)>, arg2: $Supplier$Type<($Item$Type)>, arg3: $Color$Type)

public "collectSap"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SapFilledSoulwoodLogBlock$Type = ($SapFilledSoulwoodLogBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SapFilledSoulwoodLogBlock_ = $SapFilledSoulwoodLogBlock$Type;
}}
declare module "packages/com/sammy/malum/common/spiritrite/$TotemicRiteEffect$MalumRiteEffectCategory" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TotemicRiteEffect$MalumRiteEffectCategory extends $Enum<($TotemicRiteEffect$MalumRiteEffectCategory)> {
static readonly "AURA": $TotemicRiteEffect$MalumRiteEffectCategory
static readonly "LIVING_ENTITY_EFFECT": $TotemicRiteEffect$MalumRiteEffectCategory
static readonly "DIRECTIONAL_BLOCK_EFFECT": $TotemicRiteEffect$MalumRiteEffectCategory
static readonly "RADIAL_BLOCK_EFFECT": $TotemicRiteEffect$MalumRiteEffectCategory
static readonly "ONE_TIME_EFFECT": $TotemicRiteEffect$MalumRiteEffectCategory


public static "values"(): ($TotemicRiteEffect$MalumRiteEffectCategory)[]
public static "valueOf"(arg0: string): $TotemicRiteEffect$MalumRiteEffectCategory
public "getTranslationKey"(): string
get "translationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TotemicRiteEffect$MalumRiteEffectCategory$Type = (("living_entity_effect") | ("one_time_effect") | ("directional_block_effect") | ("radial_block_effect") | ("aura")) | ($TotemicRiteEffect$MalumRiteEffectCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TotemicRiteEffect$MalumRiteEffectCategory_ = $TotemicRiteEffect$MalumRiteEffectCategory$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/obelisk/brilliant/$BrillianceObeliskCoreBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ObeliskCoreBlock, $ObeliskCoreBlock$Type} from "packages/com/sammy/malum/common/block/curiosities/obelisk/$ObeliskCoreBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BrilliantObeliskBlockEntity, $BrilliantObeliskBlockEntity$Type} from "packages/com/sammy/malum/common/block/curiosities/obelisk/brilliant/$BrilliantObeliskBlockEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BrillianceObeliskCoreBlock extends $ObeliskCoreBlock<($BrilliantObeliskBlockEntity)> {
static readonly "SHAPE": $VoxelShape
static readonly "WATERLOGGED": $BooleanProperty
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

public "getEnchantPowerBonus"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrillianceObeliskCoreBlock$Type = ($BrillianceObeliskCoreBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrillianceObeliskCoreBlock_ = $BrillianceObeliskCoreBlock$Type;
}}
declare module "packages/com/sammy/malum/common/effect/$GrowingFleshEffect" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $GrowingFleshEffect extends $MobEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrowingFleshEffect$Type = ($GrowingFleshEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GrowingFleshEffect_ = $GrowingFleshEffect$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/nitrate/$AbstractNitrateItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractNitrateEntity, $AbstractNitrateEntity$Type} from "packages/com/sammy/malum/common/entity/nitrate/$AbstractNitrateEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractNitrateItem extends $Item {
readonly "entitySupplier": $Function<($Player), ($AbstractNitrateEntity)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $Function$Type<($Player$Type), ($AbstractNitrateEntity$Type)>)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractNitrateItem$Type = ($AbstractNitrateItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractNitrateItem_ = $AbstractNitrateItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/$CurioGildedBelt" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioGildedBelt extends $MalumCurioItem {
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "addAttributeModifiers"(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg1: $SlotContext$Type, arg2: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioGildedBelt$Type = ($CurioGildedBelt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioGildedBelt_ = $CurioGildedBelt$Type;
}}
declare module "packages/com/sammy/malum/core/systems/ritual/$MalumRitualRecipeData" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$MalumRitualType, $MalumRitualType$Type} from "packages/com/sammy/malum/core/systems/ritual/$MalumRitualType"
import {$IngredientWithCount, $IngredientWithCount$Type} from "packages/team/lodestar/lodestone/systems/recipe/$IngredientWithCount"

export class $MalumRitualRecipeData {
readonly "ritualType": $MalumRitualType
readonly "input": $IngredientWithCount
readonly "extraItems": $List<($IngredientWithCount)>

constructor(arg0: $MalumRitualType$Type, arg1: $IngredientWithCount$Type, arg2: $List$Type<($IngredientWithCount$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalumRitualRecipeData$Type = ($MalumRitualRecipeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MalumRitualRecipeData_ = $MalumRitualRecipeData$Type;
}}
declare module "packages/com/sammy/malum/common/block/blight/$ClingingBlightBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ClingingBlightBlock$BlightType, $ClingingBlightBlock$BlightType$Type} from "packages/com/sammy/malum/common/block/blight/$ClingingBlightBlock$BlightType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $ClingingBlightBlock extends $Block {
static readonly "BLIGHT_TYPE": $EnumProperty<($ClingingBlightBlock$BlightType)>
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
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getBlockSupportShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClingingBlightBlock$Type = ($ClingingBlightBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClingingBlightBlock_ = $ClingingBlightBlock$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$ICatalyzerAccelerationTarget" {
import {$CrucibleTuning$CrucibleAttributeType, $CrucibleTuning$CrucibleAttributeType$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleTuning$CrucibleAttributeType"
import {$CrucibleAccelerationData, $CrucibleAccelerationData$Type} from "packages/com/sammy/malum/common/block/curiosities/spirit_crucible/$CrucibleAccelerationData"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AbstractAugmentItem, $AbstractAugmentItem$Type} from "packages/com/sammy/malum/common/item/augment/$AbstractAugmentItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ICatalyzerAccelerationTarget {

 "getTuningType"(): $CrucibleTuning$CrucibleAttributeType
 "canBeAccelerated"(): boolean
 "getAugmentTypes"(): $List<($Optional<($AbstractAugmentItem)>)>
 "getCoreAugment"(): $ItemStack
 "getLookupRange"(): integer
 "getAugments"(): $List<($ItemStack)>
 "getActiveSpiritType"(): $MalumSpiritType
 "getAccelerationPoint"(): $Vec3
 "recalibrateAccelerators"(arg0: $Level$Type, arg1: $BlockPos$Type): void
 "getAccelerationData"(): $CrucibleAccelerationData
 "setAccelerationData"(arg0: $CrucibleAccelerationData$Type): void
}

export namespace $ICatalyzerAccelerationTarget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICatalyzerAccelerationTarget$Type = ($ICatalyzerAccelerationTarget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICatalyzerAccelerationTarget_ = $ICatalyzerAccelerationTarget$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/weapons/staff/$AuricFlameStaffItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AbstractStaffItem, $AbstractStaffItem$Type} from "packages/com/sammy/malum/common/item/curiosities/weapons/staff/$AbstractStaffItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$ColorParticleData, $ColorParticleData$Type} from "packages/team/lodestar/lodestone/systems/particle/data/color/$ColorParticleData"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AuricFlameStaffItem extends $AbstractStaffItem {
static readonly "AURIC_COLOR_DATA": $ColorParticleData
readonly "chargeDuration": float
readonly "magicDamage": float
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: float, arg2: $Item$Properties$Type)

public "fireProjectile"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $InteractionHand$Type, arg4: float, arg5: integer): void
public "spawnChargeParticles"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $Vec3$Type, arg3: $ItemStack$Type, arg4: float): void
public "getCooldownDuration"(arg0: $Level$Type, arg1: $LivingEntity$Type): integer
public "hurtEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "getProjectileCount"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: float): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AuricFlameStaffItem$Type = ($AuricFlameStaffItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AuricFlameStaffItem_ = $AuricFlameStaffItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/weapons/staff/$HexStaffItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AbstractStaffItem, $AbstractStaffItem$Type} from "packages/com/sammy/malum/common/item/curiosities/weapons/staff/$AbstractStaffItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HexStaffItem extends $AbstractStaffItem {
readonly "chargeDuration": float
readonly "magicDamage": float
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: float, arg2: $Item$Properties$Type)

public "fireProjectile"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $InteractionHand$Type, arg4: float, arg5: integer): void
public "spawnChargeParticles"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $Vec3$Type, arg3: $ItemStack$Type, arg4: float): void
public "getCooldownDuration"(arg0: $Level$Type, arg1: $LivingEntity$Type): integer
public "getProjectileCount"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: float): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HexStaffItem$Type = ($HexStaffItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HexStaffItem_ = $HexStaffItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/augment/$PrismaticFocusLensItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractAugmentItem, $AbstractAugmentItem$Type} from "packages/com/sammy/malum/common/item/augment/$AbstractAugmentItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PrismaticFocusLensItem extends $AbstractAugmentItem {
readonly "spiritType": $MalumSpiritType
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

public "getInstabilityIncrease"(): float
get "instabilityIncrease"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrismaticFocusLensItem$Type = ($PrismaticFocusLensItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrismaticFocusLensItem_ = $PrismaticFocusLensItem$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/sets/weeping/$CurioEndlessRing" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IVoidItem, $IVoidItem$Type} from "packages/com/sammy/malum/common/item/$IVoidItem"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ScreenParticleHolder, $ScreenParticleHolder$Type} from "packages/team/lodestar/lodestone/systems/particle/screen/$ScreenParticleHolder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioEndlessRing extends $MalumCurioItem implements $IVoidItem {
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "addAttributeModifiers"(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg1: $SlotContext$Type, arg2: $ItemStack$Type): void
public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public "getVoidParticleIntensity"(): float
public "spawnLateParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
get "voidParticleIntensity"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioEndlessRing$Type = ($CurioEndlessRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioEndlessRing_ = $CurioEndlessRing$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/void_depot/$VoidDepotBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$VoidDepotBlockEntity, $VoidDepotBlockEntity$Type} from "packages/com/sammy/malum/common/block/curiosities/void_depot/$VoidDepotBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LodestoneEntityBlock, $LodestoneEntityBlock$Type} from "packages/team/lodestar/lodestone/systems/block/$LodestoneEntityBlock"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $VoidDepotBlock<T extends $VoidDepotBlockEntity> extends $LodestoneEntityBlock<(T)> {
static readonly "POWERED": $BooleanProperty
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

public "isSignalSource"(arg0: $BlockState$Type): boolean
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidDepotBlock$Type<T> = ($VoidDepotBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidDepotBlock_<T> = $VoidDepotBlock$Type<(T)>;
}}
declare module "packages/com/sammy/malum/common/effect/aura/$EarthenAura" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $EarthenAura extends $MobEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EarthenAura$Type = ($EarthenAura);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EarthenAura_ = $EarthenAura$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/weeping_well/$VoidConduitBlockEntity" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LodestoneBlockEntity, $LodestoneBlockEntity$Type} from "packages/team/lodestar/lodestone/systems/blockentity/$LodestoneBlockEntity"

export class $VoidConduitBlockEntity extends $LodestoneBlockEntity {
readonly "eatenItems": $List<($ItemStack)>
 "progress": integer
 "streak": integer
 "lingeringRadiance": integer
 "needsSync": boolean
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "tick"(): void
public "load"(arg0: $CompoundTag$Type): void
public "eatItems"(arg0: $ServerLevel$Type): void
public "spitOutItem"(arg0: $ItemStack$Type): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidConduitBlockEntity$Type = ($VoidConduitBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidConduitBlockEntity_ = $VoidConduitBlockEntity$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/sets/misc/$CurioNarrowNecklace" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioNarrowNecklace extends $MalumCurioItem {
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "addAttributeModifiers"(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg1: $SlotContext$Type, arg2: $ItemStack$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioNarrowNecklace$Type = ($CurioNarrowNecklace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioNarrowNecklace_ = $CurioNarrowNecklace$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/void_depot/$VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$VoidDepotBlockEntity$VoidDepotGoal, $VoidDepotBlockEntity$VoidDepotGoal$Type} from "packages/com/sammy/malum/common/block/curiosities/void_depot/$VoidDepotBlockEntity$VoidDepotGoal"

export class $VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType extends $Enum<($VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType)> implements $StringRepresentable {
static readonly "ITEM": $VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType
static readonly "EXPERIENCE": $VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType
readonly "name": string
readonly "deserializer": $Function<($CompoundTag), ($VoidDepotBlockEntity$VoidDepotGoal)>


public static "values"(): ($VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType)[]
public static "valueOf"(arg0: string): $VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType$Type = (("item") | ("experience")) | ($VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType_ = $VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/weavers_workbench/$WeaversWorkbenchItemHandler" {
import {$WeaversWorkbenchBlockEntity, $WeaversWorkbenchBlockEntity$Type} from "packages/com/sammy/malum/common/block/curiosities/weavers_workbench/$WeaversWorkbenchBlockEntity"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $WeaversWorkbenchItemHandler extends $ItemStackHandler {
readonly "entity": $WeaversWorkbenchBlockEntity
readonly "outputs": integer
 "isCrafting": boolean

constructor(arg0: integer, arg1: integer, arg2: $WeaversWorkbenchBlockEntity$Type)

public "onContentsChanged"(arg0: integer): void
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaversWorkbenchItemHandler$Type = ($WeaversWorkbenchItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeaversWorkbenchItemHandler_ = $WeaversWorkbenchItemHandler$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/weeping_well/$PrimordialSoupBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PrimordialSoupBlock extends $Block {
static readonly "TOP": $BooleanProperty
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

public "skipRendering"(arg0: $BlockState$Type, arg1: $BlockState$Type, arg2: $Direction$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $Fluid$Type): boolean
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrimordialSoupBlock$Type = ($PrimordialSoupBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrimordialSoupBlock_ = $PrimordialSoupBlock$Type;
}}
declare module "packages/com/sammy/malum/common/recipe/$AbstractMalumRecipe" {
import {$ILodestoneRecipe, $ILodestoneRecipe$Type} from "packages/team/lodestar/lodestone/systems/recipe/$ILodestoneRecipe"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AbstractMalumRecipe extends $ILodestoneRecipe {


public static "getRecipe"<T extends $AbstractMalumRecipe>(arg0: $Level$Type, arg1: $RecipeType$Type<(T)>, arg2: $Predicate$Type<(T)>): T
public static "getRecipes"<T extends $AbstractMalumRecipe>(arg0: $Level$Type, arg1: $RecipeType$Type<(T)>): $List<(T)>
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractMalumRecipe$Type = ($AbstractMalumRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractMalumRecipe_ = $AbstractMalumRecipe$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/sets/weeping/$CurioHiddenBladeNecklace" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IVoidItem, $IVoidItem$Type} from "packages/com/sammy/malum/common/item/$IVoidItem"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$IMalumEventResponderItem, $IMalumEventResponderItem$Type} from "packages/com/sammy/malum/common/item/$IMalumEventResponderItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$ScreenParticleHolder, $ScreenParticleHolder$Type} from "packages/team/lodestar/lodestone/systems/particle/screen/$ScreenParticleHolder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioHiddenBladeNecklace extends $MalumCurioItem implements $IMalumEventResponderItem, $IVoidItem {
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "takeDamageEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$Type<($Component$Type)>): void
public "onSoulwardAbsorbDamage"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: float, arg3: float): void
public "onSoulwardAbsorbDamage"(arg0: $LivingHurtEvent$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: float, arg4: float): void
public "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: float): float
public "overrideSoulwardDamageAbsorbPercentage"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: float): float
public "pickupSpirit"(arg0: $LivingEntity$Type, arg1: double): void
public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public "getVoidParticleIntensity"(): float
public "hurtEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "hurtEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "takeDamageEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "killEvent"(arg0: $LivingDeathEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "killEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
public "spawnLateParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
get "voidParticleIntensity"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioHiddenBladeNecklace$Type = ($CurioHiddenBladeNecklace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioHiddenBladeNecklace_ = $CurioHiddenBladeNecklace$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/curios/brooches/$CurioGlassBrooch" {
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$AbstractMalumCurioItem$MalumTrinketType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MalumCurioItem, $MalumCurioItem$Type} from "packages/com/sammy/malum/common/item/curiosities/curios/$MalumCurioItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioGlassBrooch extends $MalumCurioItem {
static readonly "GLASS_BROOCH_RUNE": $UUID
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
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

public "addAttributeModifiers"(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg1: $SlotContext$Type, arg2: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioGlassBrooch$Type = ($CurioGlassBrooch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioGlassBrooch_ = $CurioGlassBrooch$Type;
}}
declare module "packages/com/sammy/malum/core/handlers/hiding/flags/$FeatureFlagExpandedUniverseSet" {
import {$UncappedFeatureFlagSet, $UncappedFeatureFlagSet$Type} from "packages/com/sammy/malum/core/handlers/hiding/flags/$UncappedFeatureFlagSet"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $FeatureFlagExpandedUniverseSet {

 "malum$getAttachedFeatureSet"(arg0: $ResourceLocation$Type): $FeatureFlagSet
 "malum$attachFeatureSet"(arg0: $UncappedFeatureFlagSet$Type): void
 "malum$attachFeatureSet"(arg0: $FeatureFlagSet$Type): void
 "malum$copyWithoutExpansion"(): $FeatureFlagSet
 "malum$getAttachedUncappedFeatureSet"(arg0: $ResourceLocation$Type): $UncappedFeatureFlagSet
}

export namespace $FeatureFlagExpandedUniverseSet {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeatureFlagExpandedUniverseSet$Type = ($FeatureFlagExpandedUniverseSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeatureFlagExpandedUniverseSet_ = $FeatureFlagExpandedUniverseSet$Type;
}}
declare module "packages/com/sammy/malum/common/block/nature/soulwood/$SoulwoodGrowthBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$MalumSaplingBlock, $MalumSaplingBlock$Type} from "packages/com/sammy/malum/common/block/nature/$MalumSaplingBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractTreeGrower, $AbstractTreeGrower$Type} from "packages/net/minecraft/world/level/block/grower/$AbstractTreeGrower"

export class $SoulwoodGrowthBlock extends $MalumSaplingBlock {
static readonly "STAGE": $IntegerProperty
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

constructor(arg0: $AbstractTreeGrower$Type, arg1: $BlockBehaviour$Properties$Type)

public "performBonemeal"(arg0: $ServerLevel$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulwoodGrowthBlock$Type = ($SoulwoodGrowthBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulwoodGrowthBlock_ = $SoulwoodGrowthBlock$Type;
}}
declare module "packages/com/sammy/malum/common/block/ether/$EtherBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LodestoneBlockEntity, $LodestoneBlockEntity$Type} from "packages/team/lodestar/lodestone/systems/blockentity/$LodestoneBlockEntity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $EtherBlockEntity extends $LodestoneBlockEntity {
 "firstColor": $Color
 "secondColor": $Color
 "needsSync": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "init"(): void
public "tick"(): void
public "onPlace"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "onClone"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "setSecondColor"(arg0: integer): void
public "setFirstColor"(arg0: integer): void
set "secondColor"(value: integer)
set "firstColor"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtherBlockEntity$Type = ($EtherBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EtherBlockEntity_ = $EtherBlockEntity$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/void_depot/$VoidDepotBlockEntity$VoidDepotGoal" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType, $VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType$Type} from "packages/com/sammy/malum/common/block/curiosities/void_depot/$VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType"

export class $VoidDepotBlockEntity$VoidDepotGoal {
readonly "type": $VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType
readonly "index": string
readonly "amount": integer
 "deliveredAmount": integer
 "completed": boolean

constructor(arg0: $VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType$Type, arg1: string, arg2: integer, arg3: integer)

public "reset"(): void
public "setCompleted"(arg0: boolean): void
public "isCompleted"(): boolean
public "serialize"(): $CompoundTag
set "completed"(value: boolean)
get "completed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidDepotBlockEntity$VoidDepotGoal$Type = ($VoidDepotBlockEntity$VoidDepotGoal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidDepotBlockEntity$VoidDepotGoal_ = $VoidDepotBlockEntity$VoidDepotGoal$Type;
}}
declare module "packages/com/sammy/malum/common/item/curiosities/weapons/scythe/$MagicScytheItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$Type} from "packages/com/google/common/collect/$ImmutableMultimap$Builder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MalumScytheItem, $MalumScytheItem$Type} from "packages/com/sammy/malum/common/item/curiosities/weapons/scythe/$MalumScytheItem"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MagicScytheItem extends $MalumScytheItem {
readonly "magicDamage": float
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: float, arg2: float, arg3: float, arg4: $Item$Properties$Type)

public "createExtraAttributes"(): $ImmutableMultimap$Builder<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicScytheItem$Type = ($MagicScytheItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicScytheItem_ = $MagicScytheItem$Type;
}}
declare module "packages/com/sammy/malum/common/block/curiosities/totem/$TotemBaseBlockEntity" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TotemBaseBlockEntity$TotemRiteState, $TotemBaseBlockEntity$TotemRiteState$Type} from "packages/com/sammy/malum/common/block/curiosities/totem/$TotemBaseBlockEntity$TotemRiteState"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$TotemPoleBlockEntity, $TotemPoleBlockEntity$Type} from "packages/com/sammy/malum/common/block/curiosities/totem/$TotemPoleBlockEntity"
import {$LodestoneBlockEntity, $LodestoneBlockEntity$Type} from "packages/team/lodestar/lodestone/systems/blockentity/$LodestoneBlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TotemPoleBlockEntity$TotemPoleState, $TotemPoleBlockEntity$TotemPoleState$Type} from "packages/com/sammy/malum/common/block/curiosities/totem/$TotemPoleBlockEntity$TotemPoleState"
import {$TotemicRiteType, $TotemicRiteType$Type} from "packages/com/sammy/malum/common/spiritrite/$TotemicRiteType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MalumSpiritType, $MalumSpiritType$Type} from "packages/com/sammy/malum/core/systems/spirit/$MalumSpiritType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TotemBaseBlockEntity extends $LodestoneBlockEntity {
static readonly "CODEC": $StringRepresentable$EnumCodec<($TotemBaseBlockEntity$TotemRiteState)>
readonly "isSoulwood": boolean
 "state": $TotemBaseBlockEntity$TotemRiteState
 "activeRite": $TotemicRiteType
 "totemPolePositions": $List<($BlockPos)>
 "timer": integer
 "cachedRadiusRite": $TotemicRiteType
 "radiusVisibility": integer
 "needsSync": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "isActiveOrAssembling"(): boolean
public "setState"(arg0: $TotemBaseBlockEntity$TotemRiteState$Type): void
public "onBreak"(arg0: $Player$Type): void
public "deactivateOtherRites"(): void
public "tick"(): void
public "getDirection"(): $Direction
public "onUse"(arg0: $Player$Type, arg1: $InteractionHand$Type): $InteractionResult
public "load"(arg0: $CompoundTag$Type): void
public "modifyTotemPoles"(arg0: $TotemPoleBlockEntity$TotemPoleState$Type): void
public "addTotemPole"(arg0: $TotemPoleBlockEntity$Type): void
public "getSpirits"(): $List<($MalumSpiritType)>
public "getTotemPoles"(): $List<($TotemPoleBlockEntity)>
get "activeOrAssembling"(): boolean
set "state"(value: $TotemBaseBlockEntity$TotemRiteState$Type)
get "direction"(): $Direction
get "spirits"(): $List<($MalumSpiritType)>
get "totemPoles"(): $List<($TotemPoleBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TotemBaseBlockEntity$Type = ($TotemBaseBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TotemBaseBlockEntity_ = $TotemBaseBlockEntity$Type;
}}
