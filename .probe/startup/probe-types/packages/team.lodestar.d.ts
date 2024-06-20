declare module "packages/team/lodestar/lodestone/systems/multiblock/$MultiBlockStructure$StructurePiece" {
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $MultiBlockStructure$StructurePiece {
readonly "offset": $Vec3i
readonly "state": $BlockState

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: $BlockState$Type)

public "place"(arg0: $BlockPos$Type, arg1: $Level$Type, arg2: $BlockState$Type): void
public "place"(arg0: $BlockPos$Type, arg1: $Level$Type): void
public "canPlace"(arg0: $BlockPlaceContext$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiBlockStructure$StructurePiece$Type = ($MultiBlockStructure$StructurePiece);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiBlockStructure$StructurePiece_ = $MultiBlockStructure$StructurePiece$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/particle/world/$LodestoneWorldParticle" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$GenericParticleData, $GenericParticleData$Type} from "packages/team/lodestar/lodestone/systems/particle/data/$GenericParticleData"
import {$LodestoneBehaviorComponent, $LodestoneBehaviorComponent$Type} from "packages/team/lodestar/lodestone/systems/particle/world/behaviors/components/$LodestoneBehaviorComponent"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$TextureSheetParticle, $TextureSheetParticle$Type} from "packages/net/minecraft/client/particle/$TextureSheetParticle"
import {$WorldParticleOptions, $WorldParticleOptions$Type} from "packages/team/lodestar/lodestone/systems/particle/world/options/$WorldParticleOptions"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$SimpleParticleOptions$ParticleSpritePicker, $SimpleParticleOptions$ParticleSpritePicker$Type} from "packages/team/lodestar/lodestone/systems/particle/$SimpleParticleOptions$ParticleSpritePicker"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$ParticleRenderType, $ParticleRenderType$Type} from "packages/net/minecraft/client/particle/$ParticleRenderType"
import {$ParticleEngine$MutableSpriteSet, $ParticleEngine$MutableSpriteSet$Type} from "packages/net/minecraft/client/particle/$ParticleEngine$MutableSpriteSet"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$SpinParticleData, $SpinParticleData$Type} from "packages/team/lodestar/lodestone/systems/particle/data/spin/$SpinParticleData"
import {$LodestoneParticleBehavior, $LodestoneParticleBehavior$Type} from "packages/team/lodestar/lodestone/systems/particle/world/behaviors/$LodestoneParticleBehavior"
import {$RenderHandler$LodestoneRenderLayer, $RenderHandler$LodestoneRenderLayer$Type} from "packages/team/lodestar/lodestone/handlers/$RenderHandler$LodestoneRenderLayer"
import {$SimpleParticleOptions$ParticleDiscardFunctionType, $SimpleParticleOptions$ParticleDiscardFunctionType$Type} from "packages/team/lodestar/lodestone/systems/particle/$SimpleParticleOptions$ParticleDiscardFunctionType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ColorParticleData, $ColorParticleData$Type} from "packages/team/lodestar/lodestone/systems/particle/data/color/$ColorParticleData"

export class $LodestoneWorldParticle extends $TextureSheetParticle {
readonly "renderType": $ParticleRenderType
readonly "behavior": $LodestoneParticleBehavior
readonly "behaviorComponent": $LodestoneBehaviorComponent
readonly "renderLayer": $RenderHandler$LodestoneRenderLayer
readonly "shouldCull": boolean
readonly "spriteSet": $ParticleEngine$MutableSpriteSet
readonly "spritePicker": $SimpleParticleOptions$ParticleSpritePicker
readonly "discardFunctionType": $SimpleParticleOptions$ParticleDiscardFunctionType
readonly "colorData": $ColorParticleData
readonly "transparencyData": $GenericParticleData
readonly "scaleData": $GenericParticleData
readonly "spinData": $SpinParticleData
readonly "tickActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
readonly "renderActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
 "lifeDelay": integer
 "x": double
 "y": double
 "z": double
 "xd": double
 "yd": double
 "zd": double
 "stoppedByCollision": boolean
 "age": integer
 "rCol": float
 "gCol": float
 "bCol": float

constructor(arg0: $ClientLevel$Type, arg1: $WorldParticleOptions$Type, arg2: $ParticleEngine$MutableSpriteSet$Type, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double)

public "getY"(): double
public "getAlpha"(): float
public "tick"(): void
public "tick"(arg0: integer): void
public "getAge"(): integer
public "shouldCull"(): boolean
public "render"(arg0: $VertexConsumer$Type, arg1: $Camera$Type, arg2: float): void
public "setParticleSpeed"(arg0: $Vec3$Type): void
public "getParticleSpeed"(): $Vec3
public "getRoll"(): float
public "m_5952_"(): float
public "m_5970_"(): float
public "m_5951_"(): float
public "m_5950_"(): float
public "m_6355_"(arg0: float): integer
public "getQuadSize"(arg0: float): float
public "getZ"(): double
public "pickColor"(arg0: float): void
public "getLifetime"(): integer
public "getRed"(): float
public "getGreen"(): float
public "getBlue"(): float
public "getRenderType"(): $ParticleRenderType
public "getX"(): double
public "getRandom"(): $RandomSource
public "setParticlePosition"(arg0: $Vec3$Type): void
public "getORoll"(): float
public "getSpritePicker"(): $SimpleParticleOptions$ParticleSpritePicker
public "pickSprite"(arg0: integer): void
public "getXMotion"(): double
public "getXOld"(): double
public "getZOld"(): double
public "getYOld"(): double
public "getYMotion"(): double
public "getZMotion"(): double
public "getParticlePosition"(): $Vec3
public "getVertexConsumer"(arg0: $VertexConsumer$Type): $VertexConsumer
get "y"(): double
get "alpha"(): float
get "age"(): integer
set "particleSpeed"(value: $Vec3$Type)
get "particleSpeed"(): $Vec3
get "roll"(): float
get "z"(): double
get "lifetime"(): integer
get "red"(): float
get "green"(): float
get "blue"(): float
get "renderType"(): $ParticleRenderType
get "x"(): double
get "random"(): $RandomSource
set "particlePosition"(value: $Vec3$Type)
get "oRoll"(): float
get "spritePicker"(): $SimpleParticleOptions$ParticleSpritePicker
get "xMotion"(): double
get "xOld"(): double
get "zOld"(): double
get "yOld"(): double
get "yMotion"(): double
get "zMotion"(): double
get "particlePosition"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneWorldParticle$Type = ($LodestoneWorldParticle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneWorldParticle_ = $LodestoneWorldParticle$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/item/tools/$LodestoneSwordItem" {
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$Type} from "packages/com/google/common/collect/$ImmutableMultimap$Builder"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LodestoneSwordItem extends $SwordItem {
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

public "getDefaultAttributeModifiers"(arg0: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "createExtraAttributes"(): $ImmutableMultimap$Builder<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneSwordItem$Type = ($LodestoneSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneSwordItem_ = $LodestoneSwordItem$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/particle/data/$GenericParticleDataBuilder" {
import {$Easing, $Easing$Type} from "packages/team/lodestar/lodestone/systems/easing/$Easing"
import {$GenericParticleData, $GenericParticleData$Type} from "packages/team/lodestar/lodestone/systems/particle/data/$GenericParticleData"

export class $GenericParticleDataBuilder {


public "build"(): $GenericParticleData
public "setEasing"(arg0: $Easing$Type, arg1: $Easing$Type): $GenericParticleDataBuilder
public "setEasing"(arg0: $Easing$Type): $GenericParticleDataBuilder
public "setCoefficient"(arg0: float): $GenericParticleDataBuilder
set "easing"(value: $Easing$Type)
set "coefficient"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericParticleDataBuilder$Type = ($GenericParticleDataBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericParticleDataBuilder_ = $GenericParticleDataBuilder$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/container/$ItemInventory" {
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemInventory extends $SimpleContainer {

constructor(arg0: $ItemStack$Type, arg1: integer)

public "setChanged"(): void
public "stillValid"(arg0: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInventory$Type = ($ItemInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemInventory_ = $ItemInventory$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/particle/world/behaviors/components/$LodestoneBehaviorComponent" {
import {$DirectionalBehaviorComponent, $DirectionalBehaviorComponent$Type} from "packages/team/lodestar/lodestone/systems/particle/world/behaviors/components/$DirectionalBehaviorComponent"
import {$SparkBehaviorComponent, $SparkBehaviorComponent$Type} from "packages/team/lodestar/lodestone/systems/particle/world/behaviors/components/$SparkBehaviorComponent"
import {$LodestoneParticleBehavior, $LodestoneParticleBehavior$Type} from "packages/team/lodestar/lodestone/systems/particle/world/behaviors/$LodestoneParticleBehavior"
import {$LodestoneWorldParticle, $LodestoneWorldParticle$Type} from "packages/team/lodestar/lodestone/systems/particle/world/$LodestoneWorldParticle"

export interface $LodestoneBehaviorComponent {

 "tick"(arg0: $LodestoneWorldParticle$Type): void
 "getBehaviorType"(): $LodestoneParticleBehavior

(arg0: $LodestoneWorldParticle$Type): void
}

export namespace $LodestoneBehaviorComponent {
const DIRECTIONAL: $DirectionalBehaviorComponent
const SPARK: $SparkBehaviorComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBehaviorComponent$Type = ($LodestoneBehaviorComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneBehaviorComponent_ = $LodestoneBehaviorComponent$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/particle/world/type/$AbstractLodestoneParticleType" {
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$WorldParticleOptions, $WorldParticleOptions$Type} from "packages/team/lodestar/lodestone/systems/particle/world/options/$WorldParticleOptions"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $AbstractLodestoneParticleType<T extends $WorldParticleOptions> extends $ParticleType<(T)> {

constructor()

public "codec"(): $Codec<(T)>
public static "genericCodec"<K extends $WorldParticleOptions>(arg0: $ParticleType$Type<(K)>): $Codec<(K)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractLodestoneParticleType$Type<T> = ($AbstractLodestoneParticleType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractLodestoneParticleType_<T> = $AbstractLodestoneParticleType$Type<(T)>;
}}
declare module "packages/team/lodestar/lodestone/systems/particle/$SimpleParticleOptions$ParticleDiscardFunctionType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $SimpleParticleOptions$ParticleDiscardFunctionType extends $Enum<($SimpleParticleOptions$ParticleDiscardFunctionType)> {
static readonly "NONE": $SimpleParticleOptions$ParticleDiscardFunctionType
static readonly "INVISIBLE": $SimpleParticleOptions$ParticleDiscardFunctionType
static readonly "ENDING_CURVE_INVISIBLE": $SimpleParticleOptions$ParticleDiscardFunctionType


public static "values"(): ($SimpleParticleOptions$ParticleDiscardFunctionType)[]
public static "valueOf"(arg0: string): $SimpleParticleOptions$ParticleDiscardFunctionType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleParticleOptions$ParticleDiscardFunctionType$Type = (("ending_curve_invisible") | ("invisible") | ("none")) | ($SimpleParticleOptions$ParticleDiscardFunctionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleParticleOptions$ParticleDiscardFunctionType_ = $SimpleParticleOptions$ParticleDiscardFunctionType$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/particle/world/behaviors/$LodestoneParticleBehavior" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$LodestoneBehaviorComponent, $LodestoneBehaviorComponent$Type} from "packages/team/lodestar/lodestone/systems/particle/world/behaviors/components/$LodestoneBehaviorComponent"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$LodestoneWorldParticle, $LodestoneWorldParticle$Type} from "packages/team/lodestar/lodestone/systems/particle/world/$LodestoneWorldParticle"

export interface $LodestoneParticleBehavior {

 "render"(arg0: $LodestoneWorldParticle$Type, arg1: $VertexConsumer$Type, arg2: $Camera$Type, arg3: float): void
 "getComponent"(arg0: $LodestoneBehaviorComponent$Type): $LodestoneBehaviorComponent
}

export namespace $LodestoneParticleBehavior {
const BILLBOARD: $LodestoneParticleBehavior
const SPARK: $LodestoneParticleBehavior
const DIRECTIONAL: $LodestoneParticleBehavior
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneParticleBehavior$Type = ($LodestoneParticleBehavior);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneParticleBehavior_ = $LodestoneParticleBehavior$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/item/$LodestoneFuelItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LodestoneFuelItem extends $Item {
readonly "fuel": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: integer)

public "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneFuelItem$Type = ($LodestoneFuelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneFuelItem_ = $LodestoneFuelItem$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/item/tools/magic/$MagicSwordItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$Type} from "packages/com/google/common/collect/$ImmutableMultimap$Builder"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$LodestoneSwordItem, $LodestoneSwordItem$Type} from "packages/team/lodestar/lodestone/systems/item/tools/$LodestoneSwordItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MagicSwordItem extends $LodestoneSwordItem {
readonly "magicDamage": float
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

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: float, arg4: $Item$Properties$Type)

public "createExtraAttributes"(): $ImmutableMultimap$Builder<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicSwordItem$Type = ($MagicSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicSwordItem_ = $MagicSwordItem$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/particle/world/type/$LodestoneTerrainParticleType" {
import {$LodestoneTerrainParticleOptions, $LodestoneTerrainParticleOptions$Type} from "packages/team/lodestar/lodestone/systems/particle/world/options/$LodestoneTerrainParticleOptions"
import {$AbstractLodestoneParticleType, $AbstractLodestoneParticleType$Type} from "packages/team/lodestar/lodestone/systems/particle/world/type/$AbstractLodestoneParticleType"

export class $LodestoneTerrainParticleType extends $AbstractLodestoneParticleType<($LodestoneTerrainParticleOptions)> {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneTerrainParticleType$Type = ($LodestoneTerrainParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneTerrainParticleType_ = $LodestoneTerrainParticleType$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/particle/world/type/$LodestoneWorldParticleType" {
import {$WorldParticleOptions, $WorldParticleOptions$Type} from "packages/team/lodestar/lodestone/systems/particle/world/options/$WorldParticleOptions"
import {$AbstractLodestoneParticleType, $AbstractLodestoneParticleType$Type} from "packages/team/lodestar/lodestone/systems/particle/world/type/$AbstractLodestoneParticleType"

export class $LodestoneWorldParticleType extends $AbstractLodestoneParticleType<($WorldParticleOptions)> {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneWorldParticleType$Type = ($LodestoneWorldParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneWorldParticleType_ = $LodestoneWorldParticleType$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/particle/world/behaviors/components/$DirectionalBehaviorComponent" {
import {$LodestoneParticleBehavior, $LodestoneParticleBehavior$Type} from "packages/team/lodestar/lodestone/systems/particle/world/behaviors/$LodestoneParticleBehavior"
import {$LodestoneBehaviorComponent, $LodestoneBehaviorComponent$Type} from "packages/team/lodestar/lodestone/systems/particle/world/behaviors/components/$LodestoneBehaviorComponent"
import {$LodestoneWorldParticle, $LodestoneWorldParticle$Type} from "packages/team/lodestar/lodestone/systems/particle/world/$LodestoneWorldParticle"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export class $DirectionalBehaviorComponent implements $LodestoneBehaviorComponent {

constructor()
constructor(arg0: $Vec3$Type)

public "getDirection"(arg0: $LodestoneWorldParticle$Type): $Vec3
public "getBehaviorType"(): $LodestoneParticleBehavior
public "tick"(arg0: $LodestoneWorldParticle$Type): void
get "behaviorType"(): $LodestoneParticleBehavior
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectionalBehaviorComponent$Type = ($DirectionalBehaviorComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DirectionalBehaviorComponent_ = $DirectionalBehaviorComponent$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/particle/data/spin/$SpinParticleData" {
import {$Easing, $Easing$Type} from "packages/team/lodestar/lodestone/systems/easing/$Easing"
import {$GenericParticleData, $GenericParticleData$Type} from "packages/team/lodestar/lodestone/systems/particle/data/$GenericParticleData"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$SpinParticleDataBuilder, $SpinParticleDataBuilder$Type} from "packages/team/lodestar/lodestone/systems/particle/data/spin/$SpinParticleDataBuilder"

export class $SpinParticleData extends $GenericParticleData {
readonly "spinOffset": float
readonly "startingValue": float
readonly "middleValue": float
readonly "endingValue": float
readonly "coefficient": float
readonly "startToMiddleEasing": $Easing
readonly "middleToEndEasing": $Easing
 "valueMultiplier": float
 "coefficientMultiplier": float


public static "create"(arg0: float, arg1: float, arg2: float): $SpinParticleDataBuilder
public static "create"(arg0: float, arg1: float): $SpinParticleDataBuilder
public static "create"(arg0: float): $SpinParticleDataBuilder
public static "createRandomDirection"(arg0: $RandomSource$Type, arg1: float, arg2: float, arg3: float): $SpinParticleDataBuilder
public static "createRandomDirection"(arg0: $RandomSource$Type, arg1: float, arg2: float): $SpinParticleDataBuilder
public static "createRandomDirection"(arg0: $RandomSource$Type, arg1: float): $SpinParticleDataBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpinParticleData$Type = ($SpinParticleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpinParticleData_ = $SpinParticleData$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/particle/$SimpleParticleOptions" {
import {$GenericParticleData, $GenericParticleData$Type} from "packages/team/lodestar/lodestone/systems/particle/data/$GenericParticleData"
import {$SpinParticleData, $SpinParticleData$Type} from "packages/team/lodestar/lodestone/systems/particle/data/spin/$SpinParticleData"
import {$SimpleParticleOptions$ParticleDiscardFunctionType, $SimpleParticleOptions$ParticleDiscardFunctionType$Type} from "packages/team/lodestar/lodestone/systems/particle/$SimpleParticleOptions$ParticleDiscardFunctionType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$SimpleParticleOptions$ParticleSpritePicker, $SimpleParticleOptions$ParticleSpritePicker$Type} from "packages/team/lodestar/lodestone/systems/particle/$SimpleParticleOptions$ParticleSpritePicker"
import {$ColorParticleData, $ColorParticleData$Type} from "packages/team/lodestar/lodestone/systems/particle/data/color/$ColorParticleData"

export class $SimpleParticleOptions {
static readonly "DEFAULT_COLOR": $ColorParticleData
static readonly "DEFAULT_SPIN": $SpinParticleData
static readonly "DEFAULT_GENERIC": $GenericParticleData
 "spritePicker": $SimpleParticleOptions$ParticleSpritePicker
 "discardFunctionType": $SimpleParticleOptions$ParticleDiscardFunctionType
 "colorData": $ColorParticleData
 "transparencyData": $GenericParticleData
 "scaleData": $GenericParticleData
 "lengthData": $GenericParticleData
 "spinData": $SpinParticleData
 "lifetimeSupplier": $Supplier<(integer)>
 "lifeDelaySupplier": $Supplier<(integer)>
 "gravityStrengthSupplier": $Supplier<(float)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleParticleOptions$Type = ($SimpleParticleOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleParticleOptions_ = $SimpleParticleOptions$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/rendering/trail/$TrailPointBuilder" {
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$TrailPoint, $TrailPoint$Type} from "packages/team/lodestar/lodestone/systems/rendering/trail/$TrailPoint"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export class $TrailPointBuilder {
readonly "trailLength": $Supplier<(integer)>

constructor(arg0: $Supplier$Type<(integer)>)

public "build"(): $List<($Vector4f)>
public static "create"(arg0: $Supplier$Type<(integer)>): $TrailPointBuilder
public static "create"(arg0: integer): $TrailPointBuilder
public "addTrailPoint"(arg0: $Vec3$Type): $TrailPointBuilder
public "addTrailPoint"(arg0: $TrailPoint$Type): $TrailPointBuilder
public "tickTrailPoints"(): $TrailPointBuilder
public "getTrailPoints"(arg0: float): $List<($TrailPoint)>
public "getTrailPoints"(): $List<($TrailPoint)>
get "trailPoints"(): $List<($TrailPoint)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrailPointBuilder$Type = ($TrailPointBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrailPointBuilder_ = $TrailPointBuilder$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/particle/world/options/$LodestoneTerrainParticleOptions" {
import {$GenericParticleData, $GenericParticleData$Type} from "packages/team/lodestar/lodestone/systems/particle/data/$GenericParticleData"
import {$LodestoneBehaviorComponent, $LodestoneBehaviorComponent$Type} from "packages/team/lodestar/lodestone/systems/particle/world/behaviors/components/$LodestoneBehaviorComponent"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$WorldParticleOptions, $WorldParticleOptions$Type} from "packages/team/lodestar/lodestone/systems/particle/world/options/$WorldParticleOptions"
import {$SimpleParticleOptions$ParticleSpritePicker, $SimpleParticleOptions$ParticleSpritePicker$Type} from "packages/team/lodestar/lodestone/systems/particle/$SimpleParticleOptions$ParticleSpritePicker"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$ParticleRenderType, $ParticleRenderType$Type} from "packages/net/minecraft/client/particle/$ParticleRenderType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$SpinParticleData, $SpinParticleData$Type} from "packages/team/lodestar/lodestone/systems/particle/data/spin/$SpinParticleData"
import {$LodestoneParticleBehavior, $LodestoneParticleBehavior$Type} from "packages/team/lodestar/lodestone/systems/particle/world/behaviors/$LodestoneParticleBehavior"
import {$RenderHandler$LodestoneRenderLayer, $RenderHandler$LodestoneRenderLayer$Type} from "packages/team/lodestar/lodestone/handlers/$RenderHandler$LodestoneRenderLayer"
import {$SimpleParticleOptions$ParticleDiscardFunctionType, $SimpleParticleOptions$ParticleDiscardFunctionType$Type} from "packages/team/lodestar/lodestone/systems/particle/$SimpleParticleOptions$ParticleDiscardFunctionType"
import {$LodestoneWorldParticle, $LodestoneWorldParticle$Type} from "packages/team/lodestar/lodestone/systems/particle/world/$LodestoneWorldParticle"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ColorParticleData, $ColorParticleData$Type} from "packages/team/lodestar/lodestone/systems/particle/data/color/$ColorParticleData"

export class $LodestoneTerrainParticleOptions extends $WorldParticleOptions {
readonly "blockState": $BlockState
readonly "blockPos": $BlockPos
readonly "type": $ParticleType<(any)>
 "behavior": $LodestoneParticleBehavior
 "behaviorComponent": $LodestoneBehaviorComponent
 "renderType": $ParticleRenderType
 "renderLayer": $RenderHandler$LodestoneRenderLayer
 "shouldCull": boolean
readonly "tickActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
readonly "spawnActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
readonly "renderActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
 "noClip": boolean
static readonly "DEFAULT_COLOR": $ColorParticleData
static readonly "DEFAULT_SPIN": $SpinParticleData
static readonly "DEFAULT_GENERIC": $GenericParticleData
 "spritePicker": $SimpleParticleOptions$ParticleSpritePicker
 "discardFunctionType": $SimpleParticleOptions$ParticleDiscardFunctionType
 "colorData": $ColorParticleData
 "transparencyData": $GenericParticleData
 "scaleData": $GenericParticleData
 "lengthData": $GenericParticleData
 "spinData": $SpinParticleData
 "lifetimeSupplier": $Supplier<(integer)>
 "lifeDelaySupplier": $Supplier<(integer)>
 "gravityStrengthSupplier": $Supplier<(float)>

constructor(arg0: $RegistryObject$Type<(any)>, arg1: $BlockState$Type)
constructor(arg0: $ParticleType$Type<($LodestoneTerrainParticleOptions$Type)>, arg1: $BlockState$Type)
constructor(arg0: $RegistryObject$Type<(any)>, arg1: $BlockState$Type, arg2: $BlockPos$Type)
constructor(arg0: $ParticleType$Type<($LodestoneTerrainParticleOptions$Type)>, arg1: $BlockState$Type, arg2: $BlockPos$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneTerrainParticleOptions$Type = ($LodestoneTerrainParticleOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneTerrainParticleOptions_ = $LodestoneTerrainParticleOptions$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/multiblock/$MultiBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MultiBlockItem extends $BlockItem {
readonly "structure": $Supplier<(any)>
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type, arg2: $Supplier$Type<(any)>)

public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiBlockItem$Type = ($MultiBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiBlockItem_ = $MultiBlockItem$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/block/$LodestoneDirectionalBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$DirectionalBlock, $DirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$DirectionalBlock"

export class $LodestoneDirectionalBlock extends $DirectionalBlock {
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
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneDirectionalBlock$Type = ($LodestoneDirectionalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneDirectionalBlock_ = $LodestoneDirectionalBlock$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/worldgen/$LodestoneBlockFiller$EntryPlacementPredicate" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $LodestoneBlockFiller$EntryPlacementPredicate {

 "canPlace"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean

(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
}

export namespace $LodestoneBlockFiller$EntryPlacementPredicate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBlockFiller$EntryPlacementPredicate$Type = ($LodestoneBlockFiller$EntryPlacementPredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneBlockFiller$EntryPlacementPredicate_ = $LodestoneBlockFiller$EntryPlacementPredicate$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/entity/$LodestoneBoatEntity" {
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Stack, $Stack$Type} from "packages/java/util/$Stack"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Boat$Status, $Boat$Status$Type} from "packages/net/minecraft/world/entity/vehicle/$Boat$Status"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$Boat, $Boat$Type} from "packages/net/minecraft/world/entity/vehicle/$Boat"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LodestoneBoatEntity extends $Boat {
static readonly "DATA_ID_TYPE": $EntityDataAccessor<(integer)>
static readonly "PADDLE_LEFT": integer
static readonly "PADDLE_RIGHT": integer
static readonly "PADDLE_SOUND_TIME": double
static readonly "BUBBLE_TIME": integer
 "status": $Boat$Status
 "lastYd": double
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

/**
 * 
 * @deprecated
 */
constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type, arg2: $RegistryObject$Type<($Item$Type)>, arg3: $RegistryObject$Type<($Item$Type)>)
constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type, arg2: $RegistryObject$Type<($Item$Type)>)

public "getDropItem"(): $Item
public "getAddEntityPacket"(): $Packet<($ClientGamePacketListener)>
get "dropItem"(): $Item
get "addEntityPacket"(): $Packet<($ClientGamePacketListener)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBoatEntity$Type = ($LodestoneBoatEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneBoatEntity_ = $LodestoneBoatEntity$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/blockentity/$LodestoneBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $LodestoneBlockEntity extends $BlockEntity {
 "needsSync": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "init"(): void
public "onBreak"(arg0: $Player$Type): void
public "tick"(): void
public "onUse"(arg0: $Player$Type, arg1: $InteractionHand$Type): $InteractionResult
public "onPlace"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "handleUpdateTag"(arg0: $CompoundTag$Type): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "onClone"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "onEntityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "onNeighborUpdate"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
get "updateTag"(): $CompoundTag
get "updatePacket"(): $ClientboundBlockEntityDataPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBlockEntity$Type = ($LodestoneBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneBlockEntity_ = $LodestoneBlockEntity$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/worldgen/$LodestoneBlockFiller$BlockStateEntryBuilder" {
import {$LodestoneBlockFiller$BlockStateEntry, $LodestoneBlockFiller$BlockStateEntry$Type} from "packages/team/lodestar/lodestone/systems/worldgen/$LodestoneBlockFiller$BlockStateEntry"
import {$LodestoneBlockFiller$EntryDiscardPredicate, $LodestoneBlockFiller$EntryDiscardPredicate$Type} from "packages/team/lodestar/lodestone/systems/worldgen/$LodestoneBlockFiller$EntryDiscardPredicate"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$LodestoneBlockFiller$EntryPlacementPredicate, $LodestoneBlockFiller$EntryPlacementPredicate$Type} from "packages/team/lodestar/lodestone/systems/worldgen/$LodestoneBlockFiller$EntryPlacementPredicate"

export class $LodestoneBlockFiller$BlockStateEntryBuilder {

constructor(arg0: $BlockState$Type)

public "build"(): $LodestoneBlockFiller$BlockStateEntry
public "setDiscardPredicate"(arg0: $LodestoneBlockFiller$EntryDiscardPredicate$Type): $LodestoneBlockFiller$BlockStateEntryBuilder
public "setForcePlace"(): $LodestoneBlockFiller$BlockStateEntryBuilder
public "setForcePlace"(arg0: boolean): $LodestoneBlockFiller$BlockStateEntryBuilder
public "setPlacementPredicate"(arg0: $LodestoneBlockFiller$EntryPlacementPredicate$Type): $LodestoneBlockFiller$BlockStateEntryBuilder
set "discardPredicate"(value: $LodestoneBlockFiller$EntryDiscardPredicate$Type)
set "forcePlace"(value: boolean)
set "placementPredicate"(value: $LodestoneBlockFiller$EntryPlacementPredicate$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBlockFiller$BlockStateEntryBuilder$Type = ($LodestoneBlockFiller$BlockStateEntryBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneBlockFiller$BlockStateEntryBuilder_ = $LodestoneBlockFiller$BlockStateEntryBuilder$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/item/$LodestoneArmorItem" {
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
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $LodestoneArmorItem extends $ArmorItem {
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

public "getTexture"(): string
public "getDefaultAttributeModifiers"(arg0: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public "getTextureLocation"(): string
public "createExtraAttributes"(arg0: $ArmorItem$Type$Type): $Multimap<($Attribute), ($AttributeModifier)>
public static "get"(arg0: $ItemStack$Type): $Equipable
get "texture"(): string
get "textureLocation"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneArmorItem$Type = ($LodestoneArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneArmorItem_ = $LodestoneArmorItem$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/worldgen/$LodestoneBlockFiller$EntryDiscardPredicate" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $LodestoneBlockFiller$EntryDiscardPredicate {

 "shouldDiscard"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean

(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
}

export namespace $LodestoneBlockFiller$EntryDiscardPredicate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBlockFiller$EntryDiscardPredicate$Type = ($LodestoneBlockFiller$EntryDiscardPredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneBlockFiller$EntryDiscardPredicate_ = $LodestoneBlockFiller$EntryDiscardPredicate$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/blockentity/$LodestoneBlockEntityInventory" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LodestoneBlockEntityInventory extends $ItemStackHandler {
readonly "slotCount": integer
readonly "allowedItemSize": integer
 "inputPredicate": $Predicate<($ItemStack)>
 "outputPredicate": $Predicate<($ItemStack)>
readonly "inventoryOptional": $LazyOptional<($IItemHandler)>
 "nonEmptyItemStacks": $ArrayList<($ItemStack)>
 "emptyItemAmount": integer
 "nonEmptyItemAmount": integer
 "firstEmptyItemIndex": integer

constructor(arg0: integer, arg1: integer)
constructor(arg0: integer, arg1: integer, arg2: $Predicate$Type<($ItemStack$Type)>)
constructor(arg0: integer, arg1: integer, arg2: $Predicate$Type<($ItemStack$Type)>, arg3: $Predicate$Type<($ItemStack$Type)>)

public "load"(arg0: $CompoundTag$Type, arg1: string): void
public "load"(arg0: $CompoundTag$Type): void
public "clear"(): void
public "isEmpty"(): boolean
public "save"(arg0: $CompoundTag$Type): void
public "save"(arg0: $CompoundTag$Type, arg1: string): void
public "updateData"(): void
public "getSlots"(): integer
public "getStacks"(): $NonNullList<($ItemStack)>
public "onContentsChanged"(arg0: integer): void
public "interact"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $ItemStack
public "dumpItems"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "dumpItems"(arg0: $Level$Type, arg1: $Vec3$Type): void
public "getSlotLimit"(arg0: integer): integer
public "insertItem"(arg0: $Player$Type, arg1: $ItemStack$Type): $ItemStack
public "insertItem"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
public "insertItem"(arg0: $ItemStack$Type): $ItemStack
public "extractItem"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $Player$Type): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "extractItem"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: integer): void
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
get "empty"(): boolean
get "slots"(): integer
get "stacks"(): $NonNullList<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBlockEntityInventory$Type = ($LodestoneBlockEntityInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneBlockEntityInventory_ = $LodestoneBlockEntityInventory$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/particle/world/options/$LodestoneItemCrumbsParticleOptions" {
import {$GenericParticleData, $GenericParticleData$Type} from "packages/team/lodestar/lodestone/systems/particle/data/$GenericParticleData"
import {$LodestoneBehaviorComponent, $LodestoneBehaviorComponent$Type} from "packages/team/lodestar/lodestone/systems/particle/world/behaviors/components/$LodestoneBehaviorComponent"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$WorldParticleOptions, $WorldParticleOptions$Type} from "packages/team/lodestar/lodestone/systems/particle/world/options/$WorldParticleOptions"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SimpleParticleOptions$ParticleSpritePicker, $SimpleParticleOptions$ParticleSpritePicker$Type} from "packages/team/lodestar/lodestone/systems/particle/$SimpleParticleOptions$ParticleSpritePicker"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$ParticleRenderType, $ParticleRenderType$Type} from "packages/net/minecraft/client/particle/$ParticleRenderType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$SpinParticleData, $SpinParticleData$Type} from "packages/team/lodestar/lodestone/systems/particle/data/spin/$SpinParticleData"
import {$LodestoneParticleBehavior, $LodestoneParticleBehavior$Type} from "packages/team/lodestar/lodestone/systems/particle/world/behaviors/$LodestoneParticleBehavior"
import {$RenderHandler$LodestoneRenderLayer, $RenderHandler$LodestoneRenderLayer$Type} from "packages/team/lodestar/lodestone/handlers/$RenderHandler$LodestoneRenderLayer"
import {$SimpleParticleOptions$ParticleDiscardFunctionType, $SimpleParticleOptions$ParticleDiscardFunctionType$Type} from "packages/team/lodestar/lodestone/systems/particle/$SimpleParticleOptions$ParticleDiscardFunctionType"
import {$LodestoneWorldParticle, $LodestoneWorldParticle$Type} from "packages/team/lodestar/lodestone/systems/particle/world/$LodestoneWorldParticle"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ColorParticleData, $ColorParticleData$Type} from "packages/team/lodestar/lodestone/systems/particle/data/color/$ColorParticleData"

export class $LodestoneItemCrumbsParticleOptions extends $WorldParticleOptions {
readonly "stack": $ItemStack
readonly "type": $ParticleType<(any)>
 "behavior": $LodestoneParticleBehavior
 "behaviorComponent": $LodestoneBehaviorComponent
 "renderType": $ParticleRenderType
 "renderLayer": $RenderHandler$LodestoneRenderLayer
 "shouldCull": boolean
readonly "tickActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
readonly "spawnActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
readonly "renderActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
 "noClip": boolean
static readonly "DEFAULT_COLOR": $ColorParticleData
static readonly "DEFAULT_SPIN": $SpinParticleData
static readonly "DEFAULT_GENERIC": $GenericParticleData
 "spritePicker": $SimpleParticleOptions$ParticleSpritePicker
 "discardFunctionType": $SimpleParticleOptions$ParticleDiscardFunctionType
 "colorData": $ColorParticleData
 "transparencyData": $GenericParticleData
 "scaleData": $GenericParticleData
 "lengthData": $GenericParticleData
 "spinData": $SpinParticleData
 "lifetimeSupplier": $Supplier<(integer)>
 "lifeDelaySupplier": $Supplier<(integer)>
 "gravityStrengthSupplier": $Supplier<(float)>

constructor(arg0: $ParticleType$Type<($LodestoneItemCrumbsParticleOptions$Type)>, arg1: $ItemStack$Type)
constructor(arg0: $RegistryObject$Type<(any)>, arg1: $ItemStack$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneItemCrumbsParticleOptions$Type = ($LodestoneItemCrumbsParticleOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneItemCrumbsParticleOptions_ = $LodestoneItemCrumbsParticleOptions$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/multiblock/$MultiblockComponentBlock" {
import {$ILodestoneMultiblockComponent, $ILodestoneMultiblockComponent$Type} from "packages/team/lodestar/lodestone/systems/multiblock/$ILodestoneMultiblockComponent"
import {$LodestoneEntityBlock, $LodestoneEntityBlock$Type} from "packages/team/lodestar/lodestone/systems/block/$LodestoneEntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$MultiBlockComponentEntity, $MultiBlockComponentEntity$Type} from "packages/team/lodestar/lodestone/systems/multiblock/$MultiBlockComponentEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $MultiblockComponentBlock extends $LodestoneEntityBlock<($MultiBlockComponentEntity)> implements $ILodestoneMultiblockComponent {
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
export type $MultiblockComponentBlock$Type = ($MultiblockComponentBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockComponentBlock_ = $MultiblockComponentBlock$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/easing/$Easing$Back" {
import {$Easing, $Easing$Type} from "packages/team/lodestar/lodestone/systems/easing/$Easing"
import {$Easing$Elastic, $Easing$Elastic$Type} from "packages/team/lodestar/lodestone/systems/easing/$Easing$Elastic"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"

export class $Easing$Back extends $Easing {
static readonly "DEFAULT_OVERSHOOT": float
static readonly "EASINGS": $HashMap<(string), ($Easing)>
readonly "name": string
static readonly "LINEAR": $Easing
static readonly "QUAD_IN": $Easing
static readonly "QUAD_OUT": $Easing
static readonly "QUAD_IN_OUT": $Easing
static readonly "CUBIC_IN": $Easing
static readonly "CUBIC_OUT": $Easing
static readonly "CUBIC_IN_OUT": $Easing
static readonly "QUARTIC_IN": $Easing
static readonly "QUARTIC_OUT": $Easing
static readonly "QUARTIC_IN_OUT": $Easing
static readonly "QUINTIC_IN": $Easing
static readonly "QUINTIC_OUT": $Easing
static readonly "QUINTIC_IN_OUT": $Easing
static readonly "SINE_IN": $Easing
static readonly "SINE_OUT": $Easing
static readonly "SINE_IN_OUT": $Easing
static readonly "EXPO_IN": $Easing
static readonly "EXPO_OUT": $Easing
static readonly "EXPO_IN_OUT": $Easing
static readonly "CIRC_IN": $Easing
static readonly "CIRC_OUT": $Easing
static readonly "CIRC_IN_OUT": $Easing
static readonly "ELASTIC_IN": $Easing$Elastic
static readonly "ELASTIC_OUT": $Easing$Elastic
static readonly "ELASTIC_IN_OUT": $Easing$Elastic
static readonly "BACK_IN": $Easing$Back
static readonly "BACK_OUT": $Easing$Back
static readonly "BACK_IN_OUT": $Easing$Back
static readonly "BOUNCE_IN": $Easing
static readonly "BOUNCE_OUT": $Easing
static readonly "BOUNCE_IN_OUT": $Easing

constructor(arg0: string)
constructor(arg0: string, arg1: float)

public "setOvershoot"(arg0: float): void
public "getOvershoot"(): float
set "overshoot"(value: float)
get "overshoot"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Easing$Back$Type = ($Easing$Back);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Easing$Back_ = $Easing$Back$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/multiblock/$MultiBlockComponentEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$LodestoneBlockEntity, $LodestoneBlockEntity$Type} from "packages/team/lodestar/lodestone/systems/blockentity/$LodestoneBlockEntity"

export class $MultiBlockComponentEntity extends $LodestoneBlockEntity {
 "corePos": $BlockPos
 "needsSync": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "onBreak"(arg0: $Player$Type): void
public "onUse"(arg0: $Player$Type, arg1: $InteractionHand$Type): $InteractionResult
public "load"(arg0: $CompoundTag$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiBlockComponentEntity$Type = ($MultiBlockComponentEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiBlockComponentEntity_ = $MultiBlockComponentEntity$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/block/sign/$LodestoneWallSignBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$WoodType, $WoodType$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$WallSignBlock, $WallSignBlock$Type} from "packages/net/minecraft/world/level/block/$WallSignBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $LodestoneWallSignBlock extends $WallSignBlock implements $EntityBlock {
static readonly "FACING": $DirectionProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $WoodType$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneWallSignBlock$Type = ($LodestoneWallSignBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneWallSignBlock_ = $LodestoneWallSignBlock$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/particle/data/color/$ColorParticleDataBuilder" {
import {$Easing, $Easing$Type} from "packages/team/lodestar/lodestone/systems/easing/$Easing"
import {$ColorParticleData, $ColorParticleData$Type} from "packages/team/lodestar/lodestone/systems/particle/data/color/$ColorParticleData"

export class $ColorParticleDataBuilder {


public "build"(): $ColorParticleData
public "setEasing"(arg0: $Easing$Type): $ColorParticleDataBuilder
public "setCoefficient"(arg0: float): $ColorParticleDataBuilder
set "easing"(value: $Easing$Type)
set "coefficient"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorParticleDataBuilder$Type = ($ColorParticleDataBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorParticleDataBuilder_ = $ColorParticleDataBuilder$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/easing/$Easing" {
import {$Easing$Back, $Easing$Back$Type} from "packages/team/lodestar/lodestone/systems/easing/$Easing$Back"
import {$Easing$Elastic, $Easing$Elastic$Type} from "packages/team/lodestar/lodestone/systems/easing/$Easing$Elastic"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"

export class $Easing {
static readonly "EASINGS": $HashMap<(string), ($Easing)>
readonly "name": string
static readonly "LINEAR": $Easing
static readonly "QUAD_IN": $Easing
static readonly "QUAD_OUT": $Easing
static readonly "QUAD_IN_OUT": $Easing
static readonly "CUBIC_IN": $Easing
static readonly "CUBIC_OUT": $Easing
static readonly "CUBIC_IN_OUT": $Easing
static readonly "QUARTIC_IN": $Easing
static readonly "QUARTIC_OUT": $Easing
static readonly "QUARTIC_IN_OUT": $Easing
static readonly "QUINTIC_IN": $Easing
static readonly "QUINTIC_OUT": $Easing
static readonly "QUINTIC_IN_OUT": $Easing
static readonly "SINE_IN": $Easing
static readonly "SINE_OUT": $Easing
static readonly "SINE_IN_OUT": $Easing
static readonly "EXPO_IN": $Easing
static readonly "EXPO_OUT": $Easing
static readonly "EXPO_IN_OUT": $Easing
static readonly "CIRC_IN": $Easing
static readonly "CIRC_OUT": $Easing
static readonly "CIRC_IN_OUT": $Easing
static readonly "ELASTIC_IN": $Easing$Elastic
static readonly "ELASTIC_OUT": $Easing$Elastic
static readonly "ELASTIC_IN_OUT": $Easing$Elastic
static readonly "BACK_IN": $Easing$Back
static readonly "BACK_OUT": $Easing$Back
static readonly "BACK_IN_OUT": $Easing$Back
static readonly "BOUNCE_IN": $Easing
static readonly "BOUNCE_OUT": $Easing
static readonly "BOUNCE_IN_OUT": $Easing

constructor(arg0: string)

public static "valueOf"(arg0: string): $Easing
public "ease"(arg0: float, arg1: float, arg2: float, arg3: float): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Easing$Type = ($Easing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Easing_ = $Easing$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/particle/world/options/$WorldParticleOptions" {
import {$GenericParticleData, $GenericParticleData$Type} from "packages/team/lodestar/lodestone/systems/particle/data/$GenericParticleData"
import {$LodestoneBehaviorComponent, $LodestoneBehaviorComponent$Type} from "packages/team/lodestar/lodestone/systems/particle/world/behaviors/components/$LodestoneBehaviorComponent"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$SimpleParticleOptions$ParticleSpritePicker, $SimpleParticleOptions$ParticleSpritePicker$Type} from "packages/team/lodestar/lodestone/systems/particle/$SimpleParticleOptions$ParticleSpritePicker"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$ParticleRenderType, $ParticleRenderType$Type} from "packages/net/minecraft/client/particle/$ParticleRenderType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$SpinParticleData, $SpinParticleData$Type} from "packages/team/lodestar/lodestone/systems/particle/data/spin/$SpinParticleData"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$LodestoneParticleBehavior, $LodestoneParticleBehavior$Type} from "packages/team/lodestar/lodestone/systems/particle/world/behaviors/$LodestoneParticleBehavior"
import {$RenderHandler$LodestoneRenderLayer, $RenderHandler$LodestoneRenderLayer$Type} from "packages/team/lodestar/lodestone/handlers/$RenderHandler$LodestoneRenderLayer"
import {$SimpleParticleOptions, $SimpleParticleOptions$Type} from "packages/team/lodestar/lodestone/systems/particle/$SimpleParticleOptions"
import {$SimpleParticleOptions$ParticleDiscardFunctionType, $SimpleParticleOptions$ParticleDiscardFunctionType$Type} from "packages/team/lodestar/lodestone/systems/particle/$SimpleParticleOptions$ParticleDiscardFunctionType"
import {$LodestoneWorldParticle, $LodestoneWorldParticle$Type} from "packages/team/lodestar/lodestone/systems/particle/world/$LodestoneWorldParticle"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$ColorParticleData, $ColorParticleData$Type} from "packages/team/lodestar/lodestone/systems/particle/data/color/$ColorParticleData"

export class $WorldParticleOptions extends $SimpleParticleOptions implements $ParticleOptions {
readonly "type": $ParticleType<(any)>
 "behavior": $LodestoneParticleBehavior
 "behaviorComponent": $LodestoneBehaviorComponent
 "renderType": $ParticleRenderType
 "renderLayer": $RenderHandler$LodestoneRenderLayer
 "shouldCull": boolean
readonly "tickActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
readonly "spawnActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
readonly "renderActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
 "noClip": boolean
static readonly "DEFAULT_COLOR": $ColorParticleData
static readonly "DEFAULT_SPIN": $SpinParticleData
static readonly "DEFAULT_GENERIC": $GenericParticleData
 "spritePicker": $SimpleParticleOptions$ParticleSpritePicker
 "discardFunctionType": $SimpleParticleOptions$ParticleDiscardFunctionType
 "colorData": $ColorParticleData
 "transparencyData": $GenericParticleData
 "scaleData": $GenericParticleData
 "lengthData": $GenericParticleData
 "spinData": $SpinParticleData
 "lifetimeSupplier": $Supplier<(integer)>
 "lifeDelaySupplier": $Supplier<(integer)>
 "gravityStrengthSupplier": $Supplier<(float)>

constructor(arg0: $ParticleType$Type<(any)>)
constructor(arg0: $RegistryObject$Type<(any)>)

public "writeToString"(): string
public "writeToNetwork"(arg0: $FriendlyByteBuf$Type): void
public "setBehavior"(arg0: $LodestoneBehaviorComponent$Type): $WorldParticleOptions
public "getType"(): $ParticleType<(any)>
public "setBehaviorIfDefault"(arg0: $LodestoneBehaviorComponent$Type): $WorldParticleOptions
set "behavior"(value: $LodestoneBehaviorComponent$Type)
get "type"(): $ParticleType<(any)>
set "behaviorIfDefault"(value: $LodestoneBehaviorComponent$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldParticleOptions$Type = ($WorldParticleOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldParticleOptions_ = $WorldParticleOptions$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/multiblock/$MultiBlockCoreEntity" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IMultiBlockCore, $IMultiBlockCore$Type} from "packages/team/lodestar/lodestone/systems/multiblock/$IMultiBlockCore"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LodestoneBlockEntity, $LodestoneBlockEntity$Type} from "packages/team/lodestar/lodestone/systems/blockentity/$LodestoneBlockEntity"
import {$MultiBlockStructure, $MultiBlockStructure$Type} from "packages/team/lodestar/lodestone/systems/multiblock/$MultiBlockStructure"

export class $MultiBlockCoreEntity extends $LodestoneBlockEntity implements $IMultiBlockCore {
readonly "structure": $MultiBlockStructure
 "needsSync": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $MultiBlockStructure$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "onBreak"(arg0: $Player$Type): void
public "getStructure"(): $MultiBlockStructure
public "getComponentPositions"(): $ArrayList<($BlockPos)>
public "isModular"(): boolean
public "setupMultiblock"(arg0: $BlockPos$Type): void
public "destroyMultiblock"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
get "structure"(): $MultiBlockStructure
get "componentPositions"(): $ArrayList<($BlockPos)>
get "modular"(): boolean
set "upMultiblock"(value: $BlockPos$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiBlockCoreEntity$Type = ($MultiBlockCoreEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiBlockCoreEntity_ = $MultiBlockCoreEntity$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/worldgen/$LodestoneBlockFiller" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LodestoneBlockFiller$BlockStateEntryBuilder, $LodestoneBlockFiller$BlockStateEntryBuilder$Type} from "packages/team/lodestar/lodestone/systems/worldgen/$LodestoneBlockFiller$BlockStateEntryBuilder"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$LodestoneBlockFiller$LodestoneLayerToken, $LodestoneBlockFiller$LodestoneLayerToken$Type} from "packages/team/lodestar/lodestone/systems/worldgen/$LodestoneBlockFiller$LodestoneLayerToken"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$LodestoneBlockFiller$LodestoneBlockFillerLayer, $LodestoneBlockFiller$LodestoneBlockFillerLayer$Type} from "packages/team/lodestar/lodestone/systems/worldgen/$LodestoneBlockFiller$LodestoneBlockFillerLayer"

export class $LodestoneBlockFiller extends $ArrayList<($LodestoneBlockFiller$LodestoneBlockFillerLayer)> {
static readonly "MAIN": $LodestoneBlockFiller$LodestoneLayerToken

constructor(arg0: $Collection$Type<($LodestoneBlockFiller$LodestoneBlockFillerLayer$Type)>)
constructor(...arg0: ($LodestoneBlockFiller$LodestoneBlockFillerLayer$Type)[])
constructor()

public "fill"(arg0: $LevelAccessor$Type): $LodestoneBlockFiller$LodestoneBlockFillerLayer
public "getLayer"(arg0: $LodestoneBlockFiller$LodestoneLayerToken$Type): $LodestoneBlockFiller$LodestoneBlockFillerLayer
public static "create"(arg0: $BlockState$Type): $LodestoneBlockFiller$BlockStateEntryBuilder
public "addLayers"(...arg0: ($LodestoneBlockFiller$LodestoneBlockFillerLayer$Type)[]): $LodestoneBlockFiller
public "addLayers"(...arg0: ($LodestoneBlockFiller$LodestoneLayerToken$Type)[]): $LodestoneBlockFiller
public "getMainLayer"(): $LodestoneBlockFiller$LodestoneBlockFillerLayer
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $List<(E)>
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
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
get "mainLayer"(): $LodestoneBlockFiller$LodestoneBlockFillerLayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBlockFiller$Type = ($LodestoneBlockFiller);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneBlockFiller_ = $LodestoneBlockFiller$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/particle/$SimpleParticleOptions$ParticleSpritePicker" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $SimpleParticleOptions$ParticleSpritePicker extends $Enum<($SimpleParticleOptions$ParticleSpritePicker)> {
static readonly "FIRST_INDEX": $SimpleParticleOptions$ParticleSpritePicker
static readonly "LAST_INDEX": $SimpleParticleOptions$ParticleSpritePicker
static readonly "WITH_AGE": $SimpleParticleOptions$ParticleSpritePicker
static readonly "RANDOM_SPRITE": $SimpleParticleOptions$ParticleSpritePicker


public static "values"(): ($SimpleParticleOptions$ParticleSpritePicker)[]
public static "valueOf"(arg0: string): $SimpleParticleOptions$ParticleSpritePicker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleParticleOptions$ParticleSpritePicker$Type = (("last_index") | ("with_age") | ("random_sprite") | ("first_index")) | ($SimpleParticleOptions$ParticleSpritePicker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleParticleOptions$ParticleSpritePicker_ = $SimpleParticleOptions$ParticleSpritePicker$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/screenshake/$ScreenshakeInstance" {
import {$Easing, $Easing$Type} from "packages/team/lodestar/lodestone/systems/easing/$Easing"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"

export class $ScreenshakeInstance {
 "progress": integer
readonly "duration": integer
 "intensity1": float
 "intensity2": float
 "intensity3": float
 "intensityCurveStartEasing": $Easing
 "intensityCurveEndEasing": $Easing

constructor(arg0: integer)

public "updateIntensity"(arg0: $Camera$Type, arg1: $RandomSource$Type): float
public "setIntensity"(arg0: float, arg1: float, arg2: float): $ScreenshakeInstance
public "setIntensity"(arg0: float): $ScreenshakeInstance
public "setIntensity"(arg0: float, arg1: float): $ScreenshakeInstance
public "setEasing"(arg0: $Easing$Type, arg1: $Easing$Type): $ScreenshakeInstance
public "setEasing"(arg0: $Easing$Type): $ScreenshakeInstance
set "intensity"(value: float)
set "easing"(value: $Easing$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenshakeInstance$Type = ($ScreenshakeInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenshakeInstance_ = $ScreenshakeInstance$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/block/$LodestoneLogBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$RotatedPillarBlock, $RotatedPillarBlock$Type} from "packages/net/minecraft/world/level/block/$RotatedPillarBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $LodestoneLogBlock extends $RotatedPillarBlock {
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
export type $LodestoneLogBlock$Type = ($LodestoneLogBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneLogBlock_ = $LodestoneLogBlock$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/particle/data/spin/$SpinParticleDataBuilder" {
import {$SpinParticleData, $SpinParticleData$Type} from "packages/team/lodestar/lodestone/systems/particle/data/spin/$SpinParticleData"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$GenericParticleDataBuilder, $GenericParticleDataBuilder$Type} from "packages/team/lodestar/lodestone/systems/particle/data/$GenericParticleDataBuilder"

export class $SpinParticleDataBuilder extends $GenericParticleDataBuilder {


public "build"(): $SpinParticleData
public "randomSpinOffset"(arg0: $RandomSource$Type): $SpinParticleDataBuilder
public "setSpinOffset"(arg0: float): $SpinParticleDataBuilder
set "spinOffset"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpinParticleDataBuilder$Type = ($SpinParticleDataBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpinParticleDataBuilder_ = $SpinParticleDataBuilder$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/particle/world/type/$LodestoneItemCrumbsParticleType" {
import {$LodestoneItemCrumbsParticleOptions, $LodestoneItemCrumbsParticleOptions$Type} from "packages/team/lodestar/lodestone/systems/particle/world/options/$LodestoneItemCrumbsParticleOptions"
import {$AbstractLodestoneParticleType, $AbstractLodestoneParticleType$Type} from "packages/team/lodestar/lodestone/systems/particle/world/type/$AbstractLodestoneParticleType"

export class $LodestoneItemCrumbsParticleType extends $AbstractLodestoneParticleType<($LodestoneItemCrumbsParticleOptions)> {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneItemCrumbsParticleType$Type = ($LodestoneItemCrumbsParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneItemCrumbsParticleType_ = $LodestoneItemCrumbsParticleType$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/particle/screen/base/$ScreenParticle" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$LodestoneScreenParticleRenderType, $LodestoneScreenParticleRenderType$Type} from "packages/team/lodestar/lodestone/systems/particle/render_types/$LodestoneScreenParticleRenderType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"

export class $ScreenParticle {
readonly "level": $ClientLevel
 "xOld": double
 "yOld": double
 "x": double
 "y": double
 "xMotion": double
 "yMotion": double
 "xMoved": double
 "yMoved": double
 "removed": boolean
readonly "random": $RandomSource
 "age": integer
 "lifetime": integer
 "gravity": float
 "size": float
 "rCol": float
 "gCol": float
 "bCol": float
 "alpha": float
 "roll": float
 "oRoll": float
 "friction": float

constructor(arg0: $ClientLevel$Type, arg1: double, arg2: double, arg3: double, arg4: double)

public "remove"(): void
public "isAlive"(): boolean
public "setSize"(arg0: float): $ScreenParticle
public "setColor"(arg0: float, arg1: float, arg2: float): void
public "render"(arg0: $BufferBuilder$Type): void
public "tick"(): void
public "setParticleSpeed"(arg0: double, arg1: double): void
public "getRenderType"(): $LodestoneScreenParticleRenderType
public "getLifetime"(): integer
public "setLifetime"(arg0: integer): void
get "alive"(): boolean
set "size"(value: float)
get "renderType"(): $LodestoneScreenParticleRenderType
get "lifetime"(): integer
set "lifetime"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenParticle$Type = ($ScreenParticle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenParticle_ = $ScreenParticle$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/particle/data/$GenericParticleData" {
import {$Easing, $Easing$Type} from "packages/team/lodestar/lodestone/systems/easing/$Easing"
import {$GenericParticleDataBuilder, $GenericParticleDataBuilder$Type} from "packages/team/lodestar/lodestone/systems/particle/data/$GenericParticleDataBuilder"

export class $GenericParticleData {
readonly "startingValue": float
readonly "middleValue": float
readonly "endingValue": float
readonly "coefficient": float
readonly "startToMiddleEasing": $Easing
readonly "middleToEndEasing": $Easing
 "valueMultiplier": float
 "coefficientMultiplier": float


public "getValue"(arg0: float, arg1: float): float
public static "create"(arg0: float): $GenericParticleDataBuilder
public static "create"(arg0: float, arg1: float): $GenericParticleDataBuilder
public static "create"(arg0: float, arg1: float, arg2: float): $GenericParticleDataBuilder
public "getProgress"(arg0: float, arg1: float): float
public "multiplyValue"(arg0: float): $GenericParticleData
public static "constrictTransparency"(arg0: $GenericParticleData$Type): $GenericParticleData
public "overrideCoefficientMultiplier"(arg0: float): $GenericParticleData
public "multiplyCoefficient"(arg0: float): $GenericParticleData
public "isTrinary"(): boolean
public "overrideValueMultiplier"(arg0: float): $GenericParticleData
get "trinary"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericParticleData$Type = ($GenericParticleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericParticleData_ = $GenericParticleData$Type;
}}
declare module "packages/team/lodestar/lodestone/recipe/$NBTCarryRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"

export class $NBTCarryRecipe extends $ShapedRecipe {
static readonly "NAME": string
readonly "nbtCarry": $Ingredient
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ShapedRecipe$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type)

public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NBTCarryRecipe$Type = ($NBTCarryRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NBTCarryRecipe_ = $NBTCarryRecipe$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/recipe/$IngredientWithCount" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$IRecipeComponent, $IRecipeComponent$Type} from "packages/team/lodestar/lodestone/systems/recipe/$IRecipeComponent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $IngredientWithCount implements $IRecipeComponent {
readonly "ingredient": $Ingredient
readonly "count": integer

constructor(arg0: $Ingredient$Type, arg1: integer)

public "matches"(arg0: $ItemStack$Type): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $IngredientWithCount
public "getStack"(): $ItemStack
public "getItem"(): $Item
public "getCount"(): integer
public static "deserialize"(arg0: $JsonObject$Type): $IngredientWithCount
public "serialize"(): $JsonObject
public "getStacks"(): $List<($ItemStack)>
public "isValid"(): boolean
get "stack"(): $ItemStack
get "item"(): $Item
get "count"(): integer
get "stacks"(): $List<($ItemStack)>
get "valid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientWithCount$Type = ($IngredientWithCount);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientWithCount_ = $IngredientWithCount$Type;
}}
declare module "packages/team/lodestar/lodestone/handlers/screenparticle/$ParticleEmitterHandler$ItemParticleSupplier" {
import {$ScreenParticleHolder, $ScreenParticleHolder$Type} from "packages/team/lodestar/lodestone/systems/particle/screen/$ScreenParticleHolder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ParticleEmitterHandler$ItemParticleSupplier {

 "spawnLateParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
 "spawnEarlyParticles"(arg0: $ScreenParticleHolder$Type, arg1: $Level$Type, arg2: float, arg3: $ItemStack$Type, arg4: float, arg5: float): void
}

export namespace $ParticleEmitterHandler$ItemParticleSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEmitterHandler$ItemParticleSupplier$Type = ($ParticleEmitterHandler$ItemParticleSupplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEmitterHandler$ItemParticleSupplier_ = $ParticleEmitterHandler$ItemParticleSupplier$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/item/tools/magic/$MagicHoeItem" {
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$Type} from "packages/com/google/common/collect/$ImmutableMultimap$Builder"
import {$LodestoneHoeItem, $LodestoneHoeItem$Type} from "packages/team/lodestar/lodestone/systems/item/tools/$LodestoneHoeItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MagicHoeItem extends $LodestoneHoeItem {
readonly "magicDamage": float
/**
 * 
 * @deprecated
 */
static "TILLABLES": $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
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

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: float, arg4: $Item$Properties$Type)

public "createExtraAttributes"(): $ImmutableMultimap$Builder<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicHoeItem$Type = ($MagicHoeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicHoeItem_ = $MagicHoeItem$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/item/$ModCombatItem" {
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$Type} from "packages/com/google/common/collect/$ImmutableMultimap$Builder"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$TieredItem, $TieredItem$Type} from "packages/net/minecraft/world/item/$TieredItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModCombatItem extends $TieredItem {
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

public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
public "getDamage"(): float
public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$Type): boolean
public "getDefaultAttributeModifiers"(arg0: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "createExtraAttributes"(): $ImmutableMultimap$Builder<($Attribute), ($AttributeModifier)>
get "damage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModCombatItem$Type = ($ModCombatItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModCombatItem_ = $ModCombatItem$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/recipe/$ILodestoneRecipe" {
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
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ILodestoneRecipe implements $Recipe<($Container)> {

constructor()

/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
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
public "isSpecial"(): boolean
public "getId"(): $ResourceLocation
public "getToastSymbol"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
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
get "special"(): boolean
get "id"(): $ResourceLocation
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
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
export type $ILodestoneRecipe$Type = ($ILodestoneRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILodestoneRecipe_ = $ILodestoneRecipe$Type;
}}
declare module "packages/team/lodestar/lodestone/handlers/$ScreenshakeHandler" {
import {$ScreenshakeInstance, $ScreenshakeInstance$Type} from "packages/team/lodestar/lodestone/systems/screenshake/$ScreenshakeInstance"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"

export class $ScreenshakeHandler {
static readonly "INSTANCES": $ArrayList<($ScreenshakeInstance)>
static "intensity": float
static "yawOffset": float
static "pitchOffset": float

constructor()

public static "addScreenshake"(arg0: $ScreenshakeInstance$Type): void
public static "randomizeOffset"(arg0: $RandomSource$Type): float
public static "clientTick"(arg0: $Camera$Type, arg1: $RandomSource$Type): void
public static "cameraTick"(arg0: $Camera$Type, arg1: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenshakeHandler$Type = ($ScreenshakeHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenshakeHandler_ = $ScreenshakeHandler$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/worldgen/$LodestoneBlockFiller$LodestoneBlockFillerLayer" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$LodestoneBlockFiller$BlockStateEntry, $LodestoneBlockFiller$BlockStateEntry$Type} from "packages/team/lodestar/lodestone/systems/worldgen/$LodestoneBlockFiller$BlockStateEntry"
import {$LodestoneBlockFiller$BlockStateEntryBuilder, $LodestoneBlockFiller$BlockStateEntryBuilder$Type} from "packages/team/lodestar/lodestone/systems/worldgen/$LodestoneBlockFiller$BlockStateEntryBuilder"
import {$LodestoneBlockFiller$LodestoneLayerToken, $LodestoneBlockFiller$LodestoneLayerToken$Type} from "packages/team/lodestar/lodestone/systems/worldgen/$LodestoneBlockFiller$LodestoneLayerToken"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $LodestoneBlockFiller$LodestoneBlockFillerLayer extends $HashMap<($BlockPos), ($LodestoneBlockFiller$BlockStateEntry)> {
readonly "layerToken": $LodestoneBlockFiller$LodestoneLayerToken

constructor(arg0: $LodestoneBlockFiller$LodestoneLayerToken$Type)

public "put"(arg0: $BlockPos$Type, arg1: $LodestoneBlockFiller$BlockStateEntryBuilder$Type): $LodestoneBlockFiller$BlockStateEntry
public "replace"(arg0: $BlockPos$Type, arg1: $Function$Type<($LodestoneBlockFiller$BlockStateEntry$Type), ($LodestoneBlockFiller$BlockStateEntry$Type)>): void
public "fill"(arg0: $LevelAccessor$Type): void
public "putIfAbsent"(arg0: $BlockPos$Type, arg1: $LodestoneBlockFiller$BlockStateEntryBuilder$Type): $LodestoneBlockFiller$BlockStateEntry
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBlockFiller$LodestoneBlockFillerLayer$Type = ($LodestoneBlockFiller$LodestoneBlockFillerLayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneBlockFiller$LodestoneBlockFillerLayer_ = $LodestoneBlockFiller$LodestoneBlockFillerLayer$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/particle/render_types/$LodestoneScreenParticleRenderType" {
import {$Tesselator, $Tesselator$Type} from "packages/com/mojang/blaze3d/vertex/$Tesselator"
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import {$TextureManager, $TextureManager$Type} from "packages/net/minecraft/client/renderer/texture/$TextureManager"

export interface $LodestoneScreenParticleRenderType {

 "end"(arg0: $Tesselator$Type): void
 "begin"(arg0: $BufferBuilder$Type, arg1: $TextureManager$Type): void
}

export namespace $LodestoneScreenParticleRenderType {
const ADDITIVE: $LodestoneScreenParticleRenderType
const TRANSPARENT: $LodestoneScreenParticleRenderType
const LUMITRANSPARENT: $LodestoneScreenParticleRenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneScreenParticleRenderType$Type = ($LodestoneScreenParticleRenderType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneScreenParticleRenderType_ = $LodestoneScreenParticleRenderType$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/blockentity/$ItemHolderBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LodestoneBlockEntityInventory, $LodestoneBlockEntityInventory$Type} from "packages/team/lodestar/lodestone/systems/blockentity/$LodestoneBlockEntityInventory"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$LodestoneBlockEntity, $LodestoneBlockEntity$Type} from "packages/team/lodestar/lodestone/systems/blockentity/$LodestoneBlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ItemHolderBlockEntity extends $LodestoneBlockEntity {
 "inventory": $LodestoneBlockEntityInventory
 "needsSync": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "onBreak"(arg0: $Player$Type): void
public "onUse"(arg0: $Player$Type, arg1: $InteractionHand$Type): $InteractionResult
public "load"(arg0: $CompoundTag$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemHolderBlockEntity$Type = ($ItemHolderBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemHolderBlockEntity_ = $ItemHolderBlockEntity$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/item/tools/magic/$MagicShovelItem" {
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$Type} from "packages/com/google/common/collect/$ImmutableMultimap$Builder"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LodestoneShovelItem, $LodestoneShovelItem$Type} from "packages/team/lodestar/lodestone/systems/item/tools/$LodestoneShovelItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MagicShovelItem extends $LodestoneShovelItem {
readonly "magicDamage": float
static "FLATTENABLES": $Map<($Block), ($BlockState)>
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

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: float, arg4: $Item$Properties$Type)

public "createExtraAttributes"(): $ImmutableMultimap$Builder<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicShovelItem$Type = ($MagicShovelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicShovelItem_ = $MagicShovelItem$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/item/tools/magic/$MagicPickaxeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$Type} from "packages/com/google/common/collect/$ImmutableMultimap$Builder"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LodestonePickaxeItem, $LodestonePickaxeItem$Type} from "packages/team/lodestar/lodestone/systems/item/tools/$LodestonePickaxeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MagicPickaxeItem extends $LodestonePickaxeItem {
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

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: float, arg4: $Item$Properties$Type)

public "createExtraAttributes"(): $ImmutableMultimap$Builder<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicPickaxeItem$Type = ($MagicPickaxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicPickaxeItem_ = $MagicPickaxeItem$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/easing/$Easing$Elastic" {
import {$Easing$Back, $Easing$Back$Type} from "packages/team/lodestar/lodestone/systems/easing/$Easing$Back"
import {$Easing, $Easing$Type} from "packages/team/lodestar/lodestone/systems/easing/$Easing"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"

export class $Easing$Elastic extends $Easing {
static readonly "EASINGS": $HashMap<(string), ($Easing)>
readonly "name": string
static readonly "LINEAR": $Easing
static readonly "QUAD_IN": $Easing
static readonly "QUAD_OUT": $Easing
static readonly "QUAD_IN_OUT": $Easing
static readonly "CUBIC_IN": $Easing
static readonly "CUBIC_OUT": $Easing
static readonly "CUBIC_IN_OUT": $Easing
static readonly "QUARTIC_IN": $Easing
static readonly "QUARTIC_OUT": $Easing
static readonly "QUARTIC_IN_OUT": $Easing
static readonly "QUINTIC_IN": $Easing
static readonly "QUINTIC_OUT": $Easing
static readonly "QUINTIC_IN_OUT": $Easing
static readonly "SINE_IN": $Easing
static readonly "SINE_OUT": $Easing
static readonly "SINE_IN_OUT": $Easing
static readonly "EXPO_IN": $Easing
static readonly "EXPO_OUT": $Easing
static readonly "EXPO_IN_OUT": $Easing
static readonly "CIRC_IN": $Easing
static readonly "CIRC_OUT": $Easing
static readonly "CIRC_IN_OUT": $Easing
static readonly "ELASTIC_IN": $Easing$Elastic
static readonly "ELASTIC_OUT": $Easing$Elastic
static readonly "ELASTIC_IN_OUT": $Easing$Elastic
static readonly "BACK_IN": $Easing$Back
static readonly "BACK_OUT": $Easing$Back
static readonly "BACK_IN_OUT": $Easing$Back
static readonly "BOUNCE_IN": $Easing
static readonly "BOUNCE_OUT": $Easing
static readonly "BOUNCE_IN_OUT": $Easing

constructor(arg0: string, arg1: float, arg2: float)
constructor(arg0: string)

public "getPeriod"(): float
public "setAmplitude"(arg0: float): void
public "setPeriod"(arg0: float): void
public "getAmplitude"(): float
get "period"(): float
set "amplitude"(value: float)
set "period"(value: float)
get "amplitude"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Easing$Elastic$Type = ($Easing$Elastic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Easing$Elastic_ = $Easing$Elastic$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/item/tools/$LodestonePickaxeItem" {
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$Type} from "packages/com/google/common/collect/$ImmutableMultimap$Builder"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$PickaxeItem, $PickaxeItem$Type} from "packages/net/minecraft/world/item/$PickaxeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LodestonePickaxeItem extends $PickaxeItem {
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

public "getDefaultAttributeModifiers"(arg0: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "createExtraAttributes"(): $ImmutableMultimap$Builder<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestonePickaxeItem$Type = ($LodestonePickaxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestonePickaxeItem_ = $LodestonePickaxeItem$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/item/tools/$LodestoneHoeItem" {
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$Type} from "packages/com/google/common/collect/$ImmutableMultimap$Builder"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$HoeItem, $HoeItem$Type} from "packages/net/minecraft/world/item/$HoeItem"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LodestoneHoeItem extends $HoeItem {
/**
 * 
 * @deprecated
 */
static "TILLABLES": $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
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

public "getDefaultAttributeModifiers"(arg0: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "createExtraAttributes"(): $ImmutableMultimap$Builder<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneHoeItem$Type = ($LodestoneHoeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneHoeItem_ = $LodestoneHoeItem$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/block/$LodestoneEntityBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LodestoneBlockEntity, $LodestoneBlockEntity$Type} from "packages/team/lodestar/lodestone/systems/blockentity/$LodestoneBlockEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $LodestoneEntityBlock<T extends $LodestoneBlockEntity> extends $Block implements $EntityBlock {
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

public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getTicker"<Y extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(Y)>): $BlockEntityTicker<(Y)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "onBlockBroken"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "onBlockExploded"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "hasTileEntity"(arg0: $BlockState$Type): boolean
public "setBlockEntity"(arg0: $Supplier$Type<($BlockEntityType$Type<(T)>)>): $LodestoneEntityBlock<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
set "blockEntity"(value: $Supplier$Type<($BlockEntityType$Type<(T)>)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneEntityBlock$Type<T> = ($LodestoneEntityBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneEntityBlock_<T> = $LodestoneEntityBlock$Type<(T)>;
}}
declare module "packages/team/lodestar/lodestone/handlers/$RenderHandler$LodestoneRenderLayer" {
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $RenderHandler$LodestoneRenderLayer {

constructor(arg0: $HashMap$Type<($RenderType$Type), ($BufferBuilder$Type)>, arg1: $HashMap$Type<($RenderType$Type), ($BufferBuilder$Type)>)
constructor(arg0: $HashMap$Type<($RenderType$Type), ($BufferBuilder$Type)>, arg1: $HashMap$Type<($RenderType$Type), ($BufferBuilder$Type)>, arg2: integer)

public "getTarget"(): $MultiBufferSource$BufferSource
public "getParticleTarget"(): $MultiBufferSource$BufferSource
public "getParticleBuffers"(): $HashMap<($RenderType), ($BufferBuilder)>
public "getBuffers"(): $HashMap<($RenderType), ($BufferBuilder)>
get "target"(): $MultiBufferSource$BufferSource
get "particleTarget"(): $MultiBufferSource$BufferSource
get "particleBuffers"(): $HashMap<($RenderType), ($BufferBuilder)>
get "buffers"(): $HashMap<($RenderType), ($BufferBuilder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderHandler$LodestoneRenderLayer$Type = ($RenderHandler$LodestoneRenderLayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderHandler$LodestoneRenderLayer_ = $RenderHandler$LodestoneRenderLayer$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/item/tools/magic/$MagicAxeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$Type} from "packages/com/google/common/collect/$ImmutableMultimap$Builder"
import {$LodestoneAxeItem, $LodestoneAxeItem$Type} from "packages/team/lodestar/lodestone/systems/item/tools/$LodestoneAxeItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MagicAxeItem extends $LodestoneAxeItem {
readonly "magicDamage": float
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

constructor(arg0: $Tier$Type, arg1: float, arg2: float, arg3: float, arg4: $Item$Properties$Type)

public "createExtraAttributes"(): $ImmutableMultimap$Builder<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicAxeItem$Type = ($MagicAxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicAxeItem_ = $MagicAxeItem$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/particle/world/behaviors/components/$SparkBehaviorComponent" {
import {$GenericParticleData, $GenericParticleData$Type} from "packages/team/lodestar/lodestone/systems/particle/data/$GenericParticleData"
import {$LodestoneParticleBehavior, $LodestoneParticleBehavior$Type} from "packages/team/lodestar/lodestone/systems/particle/world/behaviors/$LodestoneParticleBehavior"
import {$LodestoneBehaviorComponent, $LodestoneBehaviorComponent$Type} from "packages/team/lodestar/lodestone/systems/particle/world/behaviors/components/$LodestoneBehaviorComponent"
import {$LodestoneWorldParticle, $LodestoneWorldParticle$Type} from "packages/team/lodestar/lodestone/systems/particle/world/$LodestoneWorldParticle"

export class $SparkBehaviorComponent implements $LodestoneBehaviorComponent {

constructor(arg0: $GenericParticleData$Type)
constructor()

public "getBehaviorType"(): $LodestoneParticleBehavior
public "getLengthData"(): $GenericParticleData
public "getLengthData"(arg0: $LodestoneWorldParticle$Type): $GenericParticleData
public "tick"(arg0: $LodestoneWorldParticle$Type): void
get "behaviorType"(): $LodestoneParticleBehavior
get "lengthData"(): $GenericParticleData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SparkBehaviorComponent$Type = ($SparkBehaviorComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SparkBehaviorComponent_ = $SparkBehaviorComponent$Type;
}}
declare module "packages/team/lodestar/lodestone/recipe/$NBTCarryRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$NBTCarryRecipe, $NBTCarryRecipe$Type} from "packages/team/lodestar/lodestone/recipe/$NBTCarryRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $NBTCarryRecipe$Serializer implements $RecipeSerializer<($NBTCarryRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $NBTCarryRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $NBTCarryRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $NBTCarryRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $NBTCarryRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NBTCarryRecipe$Serializer$Type = ($NBTCarryRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NBTCarryRecipe$Serializer_ = $NBTCarryRecipe$Serializer$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/block/sign/$LodestoneStandingSignBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$WoodType, $WoodType$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StandingSignBlock, $StandingSignBlock$Type} from "packages/net/minecraft/world/level/block/$StandingSignBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LodestoneStandingSignBlock extends $StandingSignBlock implements $EntityBlock {
static readonly "ROTATION": $IntegerProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $WoodType$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneStandingSignBlock$Type = ($LodestoneStandingSignBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneStandingSignBlock_ = $LodestoneStandingSignBlock$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/item/$LodestoneBoatItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LodestoneBoatEntity, $LodestoneBoatEntity$Type} from "packages/team/lodestar/lodestone/systems/entity/$LodestoneBoatEntity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LodestoneBoatItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $RegistryObject$Type<($EntityType$Type<($LodestoneBoatEntity$Type)>)>)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBoatItem$Type = ($LodestoneBoatItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneBoatItem_ = $LodestoneBoatItem$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/multiblock/$ILodestoneMultiblockComponent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILodestoneMultiblockComponent {

}

export namespace $ILodestoneMultiblockComponent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILodestoneMultiblockComponent$Type = ($ILodestoneMultiblockComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILodestoneMultiblockComponent_ = $ILodestoneMultiblockComponent$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/multiblock/$IMultiBlockCore" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MultiBlockStructure, $MultiBlockStructure$Type} from "packages/team/lodestar/lodestone/systems/multiblock/$MultiBlockStructure"

export interface $IMultiBlockCore {

 "getStructure"(): $MultiBlockStructure
 "isModular"(): boolean
 "setupMultiblock"(arg0: $BlockPos$Type): void
 "destroyMultiblock"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
 "getComponentPositions"(): $ArrayList<($BlockPos)>
}

export namespace $IMultiBlockCore {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiBlockCore$Type = ($IMultiBlockCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiBlockCore_ = $IMultiBlockCore$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/particle/data/color/$ColorParticleData" {
import {$Easing, $Easing$Type} from "packages/team/lodestar/lodestone/systems/easing/$Easing"
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$ColorParticleDataBuilder, $ColorParticleDataBuilder$Type} from "packages/team/lodestar/lodestone/systems/particle/data/color/$ColorParticleDataBuilder"

export class $ColorParticleData {
readonly "r1": float
readonly "g1": float
readonly "b1": float
readonly "r2": float
readonly "g2": float
readonly "b2": float
readonly "colorCoefficient": float
readonly "colorCurveEasing": $Easing
 "coefficientMultiplier": float


public "copy"(): $ColorParticleDataBuilder
public static "create"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): $ColorParticleDataBuilder
public static "create"(arg0: $Color$Type, arg1: $Color$Type): $ColorParticleDataBuilder
public "getProgress"(arg0: float, arg1: float): float
public "overrideCoefficientMultiplier"(arg0: float): $ColorParticleData
public "multiplyCoefficient"(arg0: float): $ColorParticleData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorParticleData$Type = ($ColorParticleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorParticleData_ = $ColorParticleData$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/worldgen/$LodestoneBlockFiller$LodestoneLayerToken" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"

export class $LodestoneBlockFiller$LodestoneLayerToken {
readonly "index": $UUID

constructor(arg0: $UUID$Type)
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBlockFiller$LodestoneLayerToken$Type = ($LodestoneBlockFiller$LodestoneLayerToken);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneBlockFiller$LodestoneLayerToken_ = $LodestoneBlockFiller$LodestoneLayerToken$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/worldgen/$LodestoneBlockFiller$BlockStateEntry" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LodestoneBlockFiller$BlockStateEntry {


public "getState"(): $BlockState
public "place"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): void
public "canPlace"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): boolean
public "tryDiscard"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): boolean
get "state"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBlockFiller$BlockStateEntry$Type = ($LodestoneBlockFiller$BlockStateEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneBlockFiller$BlockStateEntry_ = $LodestoneBlockFiller$BlockStateEntry$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/multiblock/$MultiBlockStructure" {
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$MultiBlockStructure$StructurePiece, $MultiBlockStructure$StructurePiece$Type} from "packages/team/lodestar/lodestone/systems/multiblock/$MultiBlockStructure$StructurePiece"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $MultiBlockStructure {
readonly "structurePieces": $ArrayList<($MultiBlockStructure$StructurePiece)>

constructor(arg0: $ArrayList$Type<($MultiBlockStructure$StructurePiece$Type)>)

public static "of"(...arg0: ($MultiBlockStructure$StructurePiece$Type)[]): $MultiBlockStructure
public "place"(arg0: $BlockPlaceContext$Type): void
public "canPlace"(arg0: $BlockPlaceContext$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiBlockStructure$Type = ($MultiBlockStructure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiBlockStructure_ = $MultiBlockStructure$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/recipe/$IRecipeComponent" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IRecipeComponent {

 "matches"(arg0: $ItemStack$Type): boolean
 "getStack"(): $ItemStack
 "getItem"(): $Item
 "getCount"(): integer
 "isValid"(): boolean
 "getStacks"(): $List<($ItemStack)>
}

export namespace $IRecipeComponent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeComponent$Type = ($IRecipeComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeComponent_ = $IRecipeComponent$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/block/$WaterLoggedEntityBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LodestoneBlockEntity, $LodestoneBlockEntity$Type} from "packages/team/lodestar/lodestone/systems/blockentity/$LodestoneBlockEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LodestoneEntityBlock, $LodestoneEntityBlock$Type} from "packages/team/lodestar/lodestone/systems/block/$LodestoneEntityBlock"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $WaterLoggedEntityBlock<T extends $LodestoneBlockEntity> extends $LodestoneEntityBlock<(T)> implements $SimpleWaterloggedBlock {
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
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
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
export type $WaterLoggedEntityBlock$Type<T> = ($WaterLoggedEntityBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaterLoggedEntityBlock_<T> = $WaterLoggedEntityBlock$Type<(T)>;
}}
declare module "packages/team/lodestar/lodestone/systems/item/tools/$LodestoneShovelItem" {
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$Type} from "packages/com/google/common/collect/$ImmutableMultimap$Builder"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ShovelItem, $ShovelItem$Type} from "packages/net/minecraft/world/item/$ShovelItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LodestoneShovelItem extends $ShovelItem {
static "FLATTENABLES": $Map<($Block), ($BlockState)>
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
export type $LodestoneShovelItem$Type = ($LodestoneShovelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneShovelItem_ = $LodestoneShovelItem$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/item/$IEventResponderItem" {
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IEventResponderItem {

 "hurtEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
 "hurtEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
 "takeDamageEvent"(arg0: $LivingHurtEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
 "takeDamageEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
 "killEvent"(arg0: $LivingDeathEvent$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
 "killEvent"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): void
}

export namespace $IEventResponderItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEventResponderItem$Type = ($IEventResponderItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEventResponderItem_ = $IEventResponderItem$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/multiblock/$HorizontalDirectionStructure" {
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$MultiBlockStructure$StructurePiece, $MultiBlockStructure$StructurePiece$Type} from "packages/team/lodestar/lodestone/systems/multiblock/$MultiBlockStructure$StructurePiece"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$MultiBlockStructure, $MultiBlockStructure$Type} from "packages/team/lodestar/lodestone/systems/multiblock/$MultiBlockStructure"

export class $HorizontalDirectionStructure extends $MultiBlockStructure {
readonly "structurePieces": $ArrayList<($MultiBlockStructure$StructurePiece)>

constructor(arg0: $ArrayList$Type<($MultiBlockStructure$StructurePiece$Type)>)

public static "of"(...arg0: ($MultiBlockStructure$StructurePiece$Type)[]): $HorizontalDirectionStructure
public "place"(arg0: $BlockPlaceContext$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HorizontalDirectionStructure$Type = ($HorizontalDirectionStructure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HorizontalDirectionStructure_ = $HorizontalDirectionStructure$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/item/$LodestoneFuelBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LodestoneFuelBlockItem extends $BlockItem {
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type, arg2: integer)

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
export type $LodestoneFuelBlockItem$Type = ($LodestoneFuelBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneFuelBlockItem_ = $LodestoneFuelBlockItem$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/item/tools/$LodestoneAxeItem" {
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$Type} from "packages/com/google/common/collect/$ImmutableMultimap$Builder"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AxeItem, $AxeItem$Type} from "packages/net/minecraft/world/item/$AxeItem"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LodestoneAxeItem extends $AxeItem {
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

constructor(arg0: $Tier$Type, arg1: float, arg2: float, arg3: $Item$Properties$Type)

public "getDefaultAttributeModifiers"(arg0: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "createExtraAttributes"(): $ImmutableMultimap$Builder<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneAxeItem$Type = ($LodestoneAxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneAxeItem_ = $LodestoneAxeItem$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/rendering/trail/$TrailPoint" {
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export class $TrailPoint {

constructor(arg0: $Vec3$Type, arg1: integer)
constructor(arg0: $Vec3$Type)

public "getPosition"(): $Vec3
public "tick"(): void
public "getMatrixPosition"(): $Vector4f
public "getTimeActive"(): integer
public "lerp"(arg0: $TrailPoint$Type, arg1: float): $TrailPoint
get "position"(): $Vec3
get "matrixPosition"(): $Vector4f
get "timeActive"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrailPoint$Type = ($TrailPoint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrailPoint_ = $TrailPoint$Type;
}}
declare module "packages/team/lodestar/lodestone/systems/particle/screen/$ScreenParticleHolder" {
import {$ScreenParticle, $ScreenParticle$Type} from "packages/team/lodestar/lodestone/systems/particle/screen/base/$ScreenParticle"
import {$LodestoneScreenParticleRenderType, $LodestoneScreenParticleRenderType$Type} from "packages/team/lodestar/lodestone/systems/particle/render_types/$LodestoneScreenParticleRenderType"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ScreenParticleHolder {
readonly "particles": $Map<($LodestoneScreenParticleRenderType), ($ArrayList<($ScreenParticle)>)>

constructor()

public "isEmpty"(): boolean
public "tick"(): void
public "addFrom"(arg0: $ScreenParticleHolder$Type): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenParticleHolder$Type = ($ScreenParticleHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenParticleHolder_ = $ScreenParticleHolder$Type;
}}
