declare module "packages/com/hollingsworth/arsnouveau/common/block/$ThreePartBlock" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ThreePartBlock extends $Enum<($ThreePartBlock)> implements $StringRepresentable {
static readonly "HEAD": $ThreePartBlock
static readonly "FOOT": $ThreePartBlock
static readonly "OTHER": $ThreePartBlock


public "toString"(): string
public static "values"(): ($ThreePartBlock)[]
public static "valueOf"(arg0: string): $ThreePartBlock
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
export type $ThreePartBlock$Type = (("head") | ("other") | ("foot")) | ($ThreePartBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThreePartBlock_ = $ThreePartBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/tile/$SummoningTile" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ITickable, $ITickable$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$ITickable"
import {$RegistryWrapper, $RegistryWrapper$Type} from "packages/com/hollingsworth/arsnouveau/common/util/$RegistryWrapper"
import {$ModdedTile, $ModdedTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$ModdedTile"

export class $SummoningTile extends $ModdedTile implements $ITickable {
 "tickCounter": integer
 "converted": boolean
static readonly "CONVERTED": $BooleanProperty
 "isOff": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $RegistryWrapper$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "tick"(): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "convertedEffect"(): void
public "tick"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummoningTile$Type = ($SummoningTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SummoningTile_ = $SummoningTile$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/spell/$IContextAttachment" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IContextAttachment extends $Serializable {

 "id"(): $ResourceLocation

(): $ResourceLocation
}

export namespace $IContextAttachment {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContextAttachment$Type = ($IContextAttachment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IContextAttachment_ = $IContextAttachment$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$Glyph" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Glyph extends $ModItem {
 "spellPart": $AbstractSpellPart
 "tooltip": $List<($Component)>
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $AbstractSpellPart$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Glyph$Type = ($Glyph);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Glyph_ = $Glyph$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/potions/$FreezingEffect" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $FreezingEffect extends $MobEffect {

constructor()

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FreezingEffect$Type = ($FreezingEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FreezingEffect_ = $FreezingEffect$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/spell/$CastResolveType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CastResolveType {
static readonly "SUCCESS": $CastResolveType
static readonly "FAILURE": $CastResolveType
static readonly "SUCCESS_NO_EXPEND": $CastResolveType
 "id": string
 "wasSuccess": boolean

constructor(arg0: string, arg1: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CastResolveType$Type = ($CastResolveType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CastResolveType_ = $CastResolveType$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$MobJarItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MobJarItem extends $BlockItem implements $GeoItem {
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

public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public static "fromItem"(arg0: $ItemStack$Type, arg1: $Level$Type): $Entity
public static "getId"(arg0: $ItemStack$Type): long
public "getTick"(arg0: any): double
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "isPerspectiveAware"(): boolean
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "getBoneResetTime"(): double
public "shouldPlayAnimsWhileGamePaused"(): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobJarItem$Type = ($MobJarItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobJarItem_ = $MobJarItem$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/spell/$TurretSpellCaster" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SpellCaster, $SpellCaster$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellCaster"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $TurretSpellCaster extends $SpellCaster {
 "stack": $ItemStack
 "flavorText": string
 "isHidden": boolean
 "hiddenText": string

constructor(arg0: $ItemStack$Type)
constructor(arg0: $CompoundTag$Type)

public "getTagID"(): $ResourceLocation
get "tagID"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurretSpellCaster$Type = ($TurretSpellCaster);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurretSpellCaster_ = $TurretSpellCaster$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$RotatingSpellTurret" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RotatingTurretTile, $RotatingTurretTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$RotatingTurretTile"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Position, $Position$Type} from "packages/net/minecraft/core/$Position"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockSource, $BlockSource$Type} from "packages/net/minecraft/core/$BlockSource"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BasicSpellTurret, $BasicSpellTurret$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$BasicSpellTurret"
import {$AbstractCastMethod, $AbstractCastMethod$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractCastMethod"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$ITurretBehavior, $ITurretBehavior$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$ITurretBehavior"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $RotatingSpellTurret extends $BasicSpellTurret {
static "ROT_TURRET_BEHAVIOR_MAP": $HashMap<($AbstractCastMethod), ($ITurretBehavior)>
static readonly "TRIGGERED": $BooleanProperty
static readonly "FACING": $DirectionProperty
static "TURRET_BEHAVIOR_MAP": $HashMap<($AbstractCastMethod), ($ITurretBehavior)>
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public static "getDispensePosition"(arg0: $BlockSource$Type, arg1: $RotatingTurretTile$Type): $Position
public static "orderedByNearest"(arg0: $RotatingTurretTile$Type): ($Direction)[]
public "shootSpell"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type): void
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotatingSpellTurret$Type = ($RotatingSpellTurret);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotatingSpellTurret_ = $RotatingSpellTurret$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/sound/$ConfiguredSpellSound" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SpellSound, $SpellSound$Type} from "packages/com/hollingsworth/arsnouveau/api/sound/$SpellSound"

export class $ConfiguredSpellSound {
static "EMPTY": $ConfiguredSpellSound
static "DEFAULT": $ConfiguredSpellSound
 "sound": $SpellSound
 "volume": float
 "pitch": float

constructor(arg0: $SpellSound$Type)
constructor(arg0: $SpellSound$Type, arg1: float, arg2: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "serialize"(): $CompoundTag
public static "fromTag"(arg0: $CompoundTag$Type): $ConfiguredSpellSound
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredSpellSound$Type = ($ConfiguredSpellSound);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfiguredSpellSound_ = $ConfiguredSpellSound$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$StrippableLog" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$RegistryWrapper, $RegistryWrapper$Type} from "packages/com/hollingsworth/arsnouveau/common/util/$RegistryWrapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$RotatedPillarBlock, $RotatedPillarBlock$Type} from "packages/net/minecraft/world/level/block/$RotatedPillarBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $StrippableLog extends $RotatedPillarBlock {
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
constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $RegistryWrapper$Type<(any)>)

public "getToolModifiedState"(arg0: $BlockState$Type, arg1: $UseOnContext$Type, arg2: $ToolAction$Type, arg3: boolean): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StrippableLog$Type = ($StrippableLog);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StrippableLog_ = $StrippableLog$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/world/feature/$LightFeature" {
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$ChunkGenerator, $ChunkGenerator$Type} from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$SingleBlockFeature, $SingleBlockFeature$Type} from "packages/com/hollingsworth/arsnouveau/common/world/feature/$SingleBlockFeature"
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

export class $LightFeature extends $SingleBlockFeature {
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

constructor(arg0: $Codec$Type<($BlockStateConfiguration$Type)>)

public "place"(arg0: $FeaturePlaceContext$Type<($BlockStateConfiguration$Type)>): boolean
public "onStatePlace"(arg0: $WorldGenLevel$Type, arg1: $ChunkGenerator$Type, arg2: $RandomSource$Type, arg3: $BlockPos$Type, arg4: $BlockStateConfiguration$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightFeature$Type = ($LightFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightFeature_ = $LightFeature$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/spell/$ISpellCasterProvider" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ISpellCaster, $ISpellCaster$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$ISpellCaster"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ISpellCasterProvider {

 "getSpellCaster"(): $ISpellCaster
 "getSpellCaster"(arg0: $ItemStack$Type): $ISpellCaster
 "getSpellCaster"(arg0: $CompoundTag$Type): $ISpellCaster
}

export namespace $ISpellCasterProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpellCasterProvider$Type = ($ISpellCasterProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISpellCasterProvider_ = $ISpellCasterProvider$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/potions/$ShockedEffect" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $ShockedEffect extends $MobEffect {

constructor()

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShockedEffect$Type = ($ShockedEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShockedEffect_ = $ShockedEffect$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/crafting/recipes/$ImbuementRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$ImbuementTile, $ImbuementTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$ImbuementTile"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ImbuementRecipe implements $Recipe<($ImbuementTile)> {
readonly "input": $Ingredient
readonly "output": $ItemStack
readonly "source": integer
readonly "id": $ResourceLocation
 "pedestalItems": $List<($Ingredient)>

constructor(arg0: string, arg1: $Ingredient$Type, arg2: $ItemStack$Type, arg3: integer)
constructor(arg0: string, arg1: $Ingredient$Type, arg2: $ItemStack$Type, arg3: integer, arg4: $List$Type<($Ingredient$Type)>)
constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type, arg3: integer, arg4: $List$Type<($Ingredient$Type)>)

public "matches"(arg0: $ImbuementTile$Type, arg1: $Level$Type): boolean
public "isMatch"(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type, arg2: $ImbuementTile$Type, arg3: $Player$Type): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $ImbuementTile$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "asRecipe"(): $JsonElement
public "doesReagentMatch"(arg0: $ItemStack$Type): boolean
public "withPedestalItem"(arg0: $ItemLike$Type): $ImbuementRecipe
public "withPedestalItem"(arg0: $ItemStack$Type): $ImbuementRecipe
public "withPedestalItem"(arg0: $RegistryObject$Type<(any)>): $ImbuementRecipe
public "withPedestalItem"(arg0: $Ingredient$Type): $ImbuementRecipe
public "getToastSymbol"(): $ItemStack
public "getRemainingItems"(arg0: $ImbuementTile$Type): $NonNullList<($ItemStack)>
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
export type $ImbuementRecipe$Type = ($ImbuementRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImbuementRecipe_ = $ImbuementRecipe$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$MobJar" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TickableModBlock, $TickableModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$TickableModBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $MobJar extends $TickableModBlock implements $EntityBlock, $SimpleWaterloggedBlock {
static readonly "FACING": $DirectionProperty
static readonly "LIGHT_LEVEL": $Property<(integer)>
static readonly "POWERED": $Property<(boolean)>
static readonly "shape": $VoxelShape
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobJar$Type = ($MobJar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobJar_ = $MobJar$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/tile/$ImbuementTile" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ITooltipProvider, $ITooltipProvider$Type} from "packages/com/hollingsworth/arsnouveau/api/client/$ITooltipProvider"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GeoBlockEntity, $GeoBlockEntity$Type} from "packages/software/bernie/geckolib/animatable/$GeoBlockEntity"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$IPedestalMachine, $IPedestalMachine$Type} from "packages/com/hollingsworth/arsnouveau/api/block/$IPedestalMachine"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AbstractSourceMachine, $AbstractSourceMachine$Type} from "packages/com/hollingsworth/arsnouveau/api/source/$AbstractSourceMachine"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$ITickable, $ITickable$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$ITickable"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$ImbuementRecipe, $ImbuementRecipe$Type} from "packages/com/hollingsworth/arsnouveau/common/crafting/recipes/$ImbuementRecipe"

export class $ImbuementTile extends $AbstractSourceMachine implements $Container, $ITickable, $GeoBlockEntity, $ITooltipProvider, $IPedestalMachine {
 "stack": $ItemStack
 "entity": $ItemEntity
 "draining": boolean
 "frames": float
static "SOURCE_TAG": string
static "MAX_SOURCE_TAG": string
static "COLOR_TAG": string
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "tick"(): void
public "getMaxStackSize"(): integer
public "stillValid"(arg0: $Player$Type): boolean
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "getNearbyPedestals"(): $List<($BlockPos)>
public "lightPedestal"(arg0: $Level$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "m_183515_"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "getTooltip"(arg0: $List$Type<($Component$Type)>): void
public "clearContent"(): void
public "isEmpty"(): boolean
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "getRecipeNow"(): $ImbuementRecipe
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "invalidateCaps"(): void
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "getPedestalItems"(): $List<($ItemStack)>
public "getTransferRate"(): integer
public "getMaxSource"(): integer
public "setChanged"(): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
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
public "tick"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): void
public "setAnimData"<D>(arg0: $SerializableDataTicket$Type<(D)>, arg1: D): void
public "getAnimData"<D>(arg0: $SerializableDataTicket$Type<(D)>): D
public "getTick"(arg0: any): double
public "triggerAnim"(arg0: string, arg1: string): void
public "pedestalList"(arg0: $BlockPos$Type, arg1: integer, arg2: $Level$Type): $List<($BlockPos)>
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
public "getBoneResetTime"(): double
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "shouldPlayAnimsWhileGamePaused"(): boolean
get "containerSize"(): integer
get "maxStackSize"(): integer
get "nearbyPedestals"(): $List<($BlockPos)>
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "empty"(): boolean
get "recipeNow"(): $ImbuementRecipe
get "pedestalItems"(): $List<($ItemStack)>
get "transferRate"(): integer
get "maxSource"(): integer
get "slots"(): integer
get "height"(): integer
get "mutable"(): boolean
get "width"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImbuementTile$Type = ($ImbuementTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImbuementTile_ = $ImbuementTile$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/spell/rewind/$IRewindCallback" {
import {$RewindEvent, $RewindEvent$Type} from "packages/com/hollingsworth/arsnouveau/common/event/timed/$RewindEvent"

export interface $IRewindCallback {

 "onRewind"(arg0: $RewindEvent$Type): void

(arg0: $RewindEvent$Type): void
}

export namespace $IRewindCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRewindCallback$Type = ($IRewindCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRewindCallback_ = $IRewindCallback$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/recipe/$SummonRitualRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$SummonRitualRecipe, $SummonRitualRecipe$Type} from "packages/com/hollingsworth/arsnouveau/api/recipe/$SummonRitualRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SummonRitualRecipe$Serializer implements $RecipeSerializer<($SummonRitualRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $SummonRitualRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $SummonRitualRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $SummonRitualRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $SummonRitualRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonRitualRecipe$Serializer$Type = ($SummonRitualRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SummonRitualRecipe$Serializer_ = $SummonRitualRecipe$Serializer$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/item/inv/$SlotReference" {
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $SlotReference {

constructor(arg0: $IItemHandler$Type, arg1: integer)

public "isEmpty"(): boolean
public static "empty"(): $SlotReference
public "getSlot"(): integer
public "getHandler"(): $IItemHandler
get "slot"(): integer
get "handler"(): $IItemHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotReference$Type = ($SlotReference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotReference_ = $SlotReference$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/spell/$Spell" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ParticleColor, $ParticleColor$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$ParticleColor"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$ConfiguredSpellSound, $ConfiguredSpellSound$Type} from "packages/com/hollingsworth/arsnouveau/api/sound/$ConfiguredSpellSound"
import {$AbstractCastMethod, $AbstractCastMethod$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractCastMethod"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AbstractAugment, $AbstractAugment$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractAugment"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $Spell implements $Cloneable {
 "recipe": $List<($AbstractSpellPart)>
 "name": string
 "color": $ParticleColor
 "sound": $ConfiguredSpellSound

constructor(...arg0: ($AbstractSpellPart$Type)[])
constructor()
constructor(arg0: $List$Type<($AbstractSpellPart$Type)>)

public "add"(arg0: $AbstractSpellPart$Type, arg1: integer, arg2: integer): $Spell
public "add"(arg0: $AbstractSpellPart$Type, arg1: integer): $Spell
public "add"(...arg0: ($AbstractSpellPart$Type)[]): $Spell
public "add"(arg0: $AbstractSpellPart$Type): $Spell
public "isEmpty"(): boolean
public "getDisplayString"(): string
public "isValid"(): boolean
public "serialize"(): $CompoundTag
public "withColor"(arg0: $ParticleColor$Type): $Spell
public "setRecipe"(arg0: $List$Type<($AbstractSpellPart$Type)>): $Spell
public "getCastMethod"(): $AbstractCastMethod
public "getBuffsAtIndex"(arg0: integer, arg1: $LivingEntity$Type, arg2: $AbstractAugment$Type): integer
public "getCost"(): integer
public "serializeRecipe"(): $List<($ResourceLocation)>
public "withSound"(arg0: $ConfiguredSpellSound$Type): $Spell
public "getSpellSize"(): integer
public static "fromTag"(arg0: $CompoundTag$Type): $Spell
public "getInstanceCount"(arg0: $AbstractSpellPart$Type): integer
public "getAugments"(arg0: integer, arg1: $LivingEntity$Type): $List<($AbstractAugment)>
get "empty"(): boolean
get "displayString"(): string
get "valid"(): boolean
set "recipe"(value: $List$Type<($AbstractSpellPart$Type)>)
get "castMethod"(): $AbstractCastMethod
get "cost"(): integer
get "spellSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Spell$Type = ($Spell);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Spell_ = $Spell$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/armor/$AnimatedMagicArmor" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IDyeable, $IDyeable$Type} from "packages/com/hollingsworth/arsnouveau/common/crafting/recipes/$IDyeable"
import {$IVariantColorProvider, $IVariantColorProvider$Type} from "packages/com/hollingsworth/arsnouveau/api/client/$IVariantColorProvider"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Spell, $Spell$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$Spell"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$GeoModel, $GeoModel$Type} from "packages/software/bernie/geckolib/model/$GeoModel"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$IManaEquipment, $IManaEquipment$Type} from "packages/com/hollingsworth/arsnouveau/api/mana/$IManaEquipment"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnimatedMagicArmor extends $ArmorItem implements $IManaEquipment, $IDyeable, $GeoItem, $IVariantColorProvider<($ItemStack)> {
 "model": $GeoModel<($AnimatedMagicArmor)>
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

constructor(arg0: $ArmorMaterial$Type, arg1: $ArmorItem$Type$Type, arg2: $Item$Properties$Type, arg3: $GeoModel$Type<($AnimatedMagicArmor$Type)>)
constructor(arg0: $ArmorMaterial$Type, arg1: $ArmorItem$Type$Type, arg2: $GeoModel$Type<($AnimatedMagicArmor$Type)>)

public "setColor"(arg0: string, arg1: $ItemStack$Type): void
public static "heavy"(arg0: $ArmorItem$Type$Type): $AnimatedMagicArmor
public static "medium"(arg0: $ArmorItem$Type$Type): $AnimatedMagicArmor
public "getMinTier"(): integer
public "getArmorModel"(): $GeoModel<($AnimatedMagicArmor)>
public static "light"(arg0: $ArmorItem$Type$Type): $AnimatedMagicArmor
public "getColor"(arg0: $ItemStack$Type): string
public "onDye"(arg0: $ItemStack$Type, arg1: $DyeColor$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "makesPiglinsNeutral"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getManaRegenBonus"(arg0: $ItemStack$Type): integer
public "getMaxManaBoost"(arg0: $ItemStack$Type): integer
public "getDyeColor"(arg0: $ItemStack$Type): integer
public static "getId"(arg0: $ItemStack$Type): long
public "getTick"(arg0: any): double
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "isPerspectiveAware"(): boolean
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "getManaDiscount"(arg0: $ItemStack$Type): integer
public "getManaDiscount"(arg0: $ItemStack$Type, arg1: $Spell$Type): integer
public "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
/**
 * 
 * @deprecated
 */
public "getTexture"(arg0: $LivingEntity$Type): $ResourceLocation
public "getTexture"(arg0: $ItemStack$Type): $ResourceLocation
public static "get"(arg0: $ItemStack$Type): $Equipable
public "getBoneResetTime"(): double
public "shouldPlayAnimsWhileGamePaused"(): boolean
get "minTier"(): integer
get "armorModel"(): $GeoModel<($AnimatedMagicArmor)>
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatedMagicArmor$Type = ($AnimatedMagicArmor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatedMagicArmor_ = $AnimatedMagicArmor$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/potions/$BlastEffect" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $BlastEffect extends $MobEffect {

constructor()

public static "explode"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlastEffect$Type = ($BlastEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlastEffect_ = $BlastEffect$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/item/inv/$InteractResult" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ItemScroll$SortPref, $ItemScroll$SortPref$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ItemScroll$SortPref"

export class $InteractResult extends $Record {

constructor(sortPref: $ItemScroll$SortPref$Type, valid: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "valid"(): boolean
public "sortPref"(): $ItemScroll$SortPref
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InteractResult$Type = ($InteractResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InteractResult_ = $InteractResult$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$RedstoneRelay" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TickableModBlock, $TickableModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$TickableModBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $RedstoneRelay extends $TickableModBlock implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "POWER": $IntegerProperty
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
constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "updatePower"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneRelay$Type = ($RedstoneRelay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneRelay_ = $RedstoneRelay$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$ArcanePlatform" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$ArcanePedestal, $ArcanePedestal$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$ArcanePedestal"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $ArcanePlatform extends $ArcanePedestal {
static readonly "UP": $VoxelShape
static readonly "DOWN": $VoxelShape
static readonly "EAST": $VoxelShape
static readonly "WEST": $VoxelShape
static readonly "NORTH": $VoxelShape
static readonly "SOUTH": $VoxelShape
static readonly "shape": $VoxelShape
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArcanePlatform$Type = ($ArcanePlatform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArcanePlatform_ = $ArcanePlatform$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$EnchantersMirror" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$ICasterTool, $ICasterTool$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$ICasterTool"
import {$SpellStats$Builder, $SpellStats$Builder$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats$Builder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISpellModifierItem, $ISpellModifierItem$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$ISpellModifierItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Spell, $Spell$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$Spell"
import {$IManaDiscountEquipment, $IManaDiscountEquipment$Type} from "packages/com/hollingsworth/arsnouveau/api/mana/$IManaDiscountEquipment"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ISpellCaster, $ISpellCaster$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$ISpellCaster"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnchantersMirror extends $ModItem implements $ICasterTool, $GeoItem, $ISpellModifierItem, $IManaDiscountEquipment {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
constructor()

public "getManaDiscount"(arg0: $ItemStack$Type, arg1: $Spell$Type): integer
public "applyItemModifiers"(arg0: $ItemStack$Type, arg1: $SpellStats$Builder$Type, arg2: $AbstractSpellPart$Type, arg3: $HitResult$Type, arg4: $Level$Type, arg5: $LivingEntity$Type, arg6: $SpellContext$Type): $SpellStats$Builder
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isScribedSpellValid"(arg0: $ISpellCaster$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: $Spell$Type): boolean
public "setSpell"(arg0: $ISpellCaster$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: $Spell$Type): boolean
public "sendInvalidMessage"(arg0: $Player$Type): void
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "onScribe"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $InteractionHand$Type, arg4: $ItemStack$Type): boolean
public "sendSetMessage"(arg0: $Player$Type): void
public "shouldDisplay"(arg0: $ItemStack$Type): boolean
public "getInformation"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getSpellCaster"(arg0: $CompoundTag$Type): $ISpellCaster
public "getSpellCaster"(): $ISpellCaster
public "getSpellCaster"(arg0: $ItemStack$Type): $ISpellCaster
public static "getId"(arg0: $ItemStack$Type): long
public "getTick"(arg0: any): double
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "isPerspectiveAware"(): boolean
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "getManaDiscount"(arg0: $ItemStack$Type): integer
public "onPreviousKeyPressed"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): void
public "onOpenBookMenuKeyPressed"(arg0: $ItemStack$Type, arg1: $Player$Type): void
/**
 * 
 * @deprecated
 */
public "canQuickCast"(): boolean
public "onQuickCast"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type, arg2: $InteractionHand$Type, arg3: integer): void
public "onNextKeyPressed"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): void
public "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public "applyModifiers"(arg0: $SpellStats$Builder$Type, arg1: $AbstractSpellPart$Type, arg2: $HitResult$Type, arg3: $Level$Type, arg4: $LivingEntity$Type, arg5: $SpellContext$Type): $SpellStats$Builder
public "getBoneResetTime"(): double
public "shouldPlayAnimsWhileGamePaused"(): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "spellCaster"(): $ISpellCaster
get "perspectiveAware"(): boolean
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantersMirror$Type = ($EnchantersMirror);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantersMirror_ = $EnchantersMirror$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/mixin/$PufferfishAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PufferfishAccessor {

 "getDeflateTimer"(): integer
 "getInflateCounter"(): integer
 "setInflateCounter"(arg0: integer): void
 "setDeflateTimer"(arg0: integer): void
}

export namespace $PufferfishAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PufferfishAccessor$Type = ($PufferfishAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PufferfishAccessor_ = $PufferfishAccessor$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$ArchwoodChest$Item" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ArchwoodChest$Item extends $BlockItem {
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
export type $ArchwoodChest$Item$Type = ($ArchwoodChest$Item);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchwoodChest$Item_ = $ArchwoodChest$Item$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$TemporaryBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$ITickableBlock, $ITickableBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$ITickableBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$MirrorWeave, $MirrorWeave$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$MirrorWeave"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $TemporaryBlock extends $MirrorWeave implements $EntityBlock, $ITickableBlock {
static readonly "POWER": $IntegerProperty
static readonly "LIGHT_LEVEL": $Property<(integer)>
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
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporaryBlock$Type = ($TemporaryBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemporaryBlock_ = $TemporaryBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$DominionWand" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $DominionWand extends $ModItem {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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

public "clear"(arg0: $ItemStack$Type, arg1: $Player$Type): void
public static "getPosString"(arg0: $BlockPos$Type): string
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getDescriptionId"(arg0: $ItemStack$Type): string
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DominionWand$Type = ($DominionWand);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DominionWand_ = $DominionWand$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/tile/$EnchantingApparatusTile" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$IPedestalMachine, $IPedestalMachine$Type} from "packages/com/hollingsworth/arsnouveau/api/block/$IPedestalMachine"
import {$SingleItemTile, $SingleItemTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$SingleItemTile"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$ITickable, $ITickable$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$ITickable"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IEnchantingRecipe, $IEnchantingRecipe$Type} from "packages/com/hollingsworth/arsnouveau/api/enchanting_apparatus/$IEnchantingRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GeoBlockEntity, $GeoBlockEntity$Type} from "packages/software/bernie/geckolib/animatable/$GeoBlockEntity"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EnchantingApparatusTile extends $SingleItemTile implements $Container, $IPedestalMachine, $ITickable, $GeoBlockEntity {
 "isCrafting": boolean
static readonly "craftingLength": integer
 "renderEntity": $ItemEntity
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "tick"(): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getBoneResetTime"(): double
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "lightPedestal"(arg0: $Level$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "getRecipe"(arg0: $ItemStack$Type, arg1: $Player$Type): $IEnchantingRecipe
public "clearItems"(): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "getPedestalItems"(): $List<($ItemStack)>
public "attemptCraft"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
public "craftingPossible"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
public "pedestalList"(): $List<($BlockPos)>
public "getContainerSize"(): integer
public "setChanged"(): void
public "getMaxStackSize"(): integer
public "stillValid"(arg0: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "isEmpty"(): boolean
public "pedestalList"(arg0: $BlockPos$Type, arg1: integer, arg2: $Level$Type): $List<($BlockPos)>
public "tick"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): void
public "setAnimData"<D>(arg0: $SerializableDataTicket$Type<(D)>, arg1: D): void
public "getAnimData"<D>(arg0: $SerializableDataTicket$Type<(D)>): D
public "getTick"(arg0: any): double
public "triggerAnim"(arg0: string, arg1: string): void
public static "tryClear"(arg0: any): void
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "shouldPlayAnimsWhileGamePaused"(): boolean
get "boneResetTime"(): double
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "pedestalItems"(): $List<($ItemStack)>
get "containerSize"(): integer
get "maxStackSize"(): integer
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantingApparatusTile$Type = ($EnchantingApparatusTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantingApparatusTile_ = $EnchantingApparatusTile$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/curios/$SummoningFocus" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$SpellStats$Builder, $SpellStats$Builder$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats$Builder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AbstractCastMethod, $AbstractCastMethod$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractCastMethod"
import {$ISpellModifierItem, $ISpellModifierItem$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$ISpellModifierItem"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ArsNouveauCurio, $ArsNouveauCurio$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$ArsNouveauCurio"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$SummonEvent, $SummonEvent$Type} from "packages/com/hollingsworth/arsnouveau/api/event/$SummonEvent"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SummonEvent$Death, $SummonEvent$Death$Type} from "packages/com/hollingsworth/arsnouveau/api/event/$SummonEvent$Death"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SpellCastEvent, $SpellCastEvent$Type} from "packages/com/hollingsworth/arsnouveau/api/event/$SpellCastEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SummoningFocus extends $ArsNouveauCurio implements $ISpellModifierItem {
static "sympatheticMethods": $List<($AbstractCastMethod)>
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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

public static "summonedEvent"(arg0: $SummonEvent$Type): void
public "applyItemModifiers"(arg0: $ItemStack$Type, arg1: $SpellStats$Builder$Type, arg2: $AbstractSpellPart$Type, arg3: $HitResult$Type, arg4: $Level$Type, arg5: $LivingEntity$Type, arg6: $SpellContext$Type): $SpellStats$Builder
public static "summonDeathEvent"(arg0: $SummonEvent$Death$Type): void
public static "containsThis"(arg0: $Level$Type, arg1: $Entity$Type): boolean
public static "castSpell"(arg0: $SpellCastEvent$Type): void
public "applyModifiers"(arg0: $SpellStats$Builder$Type, arg1: $AbstractSpellPart$Type, arg2: $HitResult$Type, arg3: $Level$Type, arg4: $LivingEntity$Type, arg5: $SpellContext$Type): $SpellStats$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummoningFocus$Type = ($SummoningFocus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SummoningFocus_ = $SummoningFocus$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$AlterationTable" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$TableBlock, $TableBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$TableBlock"
import {$ThreePartBlock, $ThreePartBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$ThreePartBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $AlterationTable extends $TableBlock {
static "SOUTH_OTHER": $VoxelShape
static "NORTH_OTHER": $VoxelShape
static "EAST_OTHER": $VoxelShape
static "WEST_OTHER": $VoxelShape
static readonly "PART": $EnumProperty<($ThreePartBlock)>
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getConnectedDirections"(arg0: $BlockState$Type): $List<($Direction)>
public "tearDown"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlterationTable$Type = ($AlterationTable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlterationTable_ = $AlterationTable$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$ModBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModBlockItem extends $BlockItem {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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

public "withTooltip"(arg0: $Component$Type): $ModBlockItem
public "withRarity"(arg0: $Rarity$Type): $ModBlockItem
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModBlockItem$Type = ($ModBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModBlockItem_ = $ModBlockItem$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$TempLightBlock" {
import {$LightBlock, $LightBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$LightBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $TempLightBlock extends $LightBlock {
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TempLightBlock$Type = ($TempLightBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TempLightBlock_ = $TempLightBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$FamiliarScript" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AbstractFamiliarHolder, $AbstractFamiliarHolder$Type} from "packages/com/hollingsworth/arsnouveau/api/familiar/$AbstractFamiliarHolder"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FamiliarScript extends $ModItem {
 "familiar": $AbstractFamiliarHolder
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
constructor(arg0: $Item$Properties$Type)
constructor(arg0: $AbstractFamiliarHolder$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FamiliarScript$Type = ($FamiliarScript);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FamiliarScript_ = $FamiliarScript$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/itemscrolls/$AllowItemScroll" {
import {$ItemScroll, $ItemScroll$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ItemScroll"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemScroll$SortPref, $ItemScroll$SortPref$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ItemScroll$SortPref"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AllowItemScroll extends $ItemScroll {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
constructor(arg0: $Item$Properties$Type)

public "getSortPref"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $IItemHandler$Type): $ItemScroll$SortPref
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AllowItemScroll$Type = ($AllowItemScroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AllowItemScroll_ = $AllowItemScroll$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$SummonBlock" {
import {$TickableModBlock, $TickableModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$TickableModBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $SummonBlock extends $TickableModBlock {
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
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonBlock$Type = ($SummonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SummonBlock_ = $SummonBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/enchantment/$ManaRegenEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $ManaRegenEnchantment extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "getMinCost"(arg0: integer): integer
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManaRegenEnchantment$Type = ($ManaRegenEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ManaRegenEnchantment_ = $ManaRegenEnchantment$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/event/$DelayedSpellEvent" {
import {$Spell, $Spell$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$Spell"
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SpellResolver, $SpellResolver$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellResolver"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ITimedEvent, $ITimedEvent$Type} from "packages/com/hollingsworth/arsnouveau/api/event/$ITimedEvent"
import {$TickEvent, $TickEvent$Type} from "packages/net/minecraftforge/event/$TickEvent"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $DelayedSpellEvent implements $ITimedEvent {
 "duration": integer
readonly "resolver": $SpellResolver
readonly "result": $HitResult
readonly "world": $Level

constructor(arg0: integer, arg1: $HitResult$Type, arg2: $Level$Type, arg3: $SpellResolver$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: $Spell$Type, arg2: $HitResult$Type, arg3: $Level$Type, arg4: $LivingEntity$Type, arg5: $SpellContext$Type)

public "resolveSpell"(): void
public "isExpired"(): boolean
public "tick"(arg0: boolean): void
public "getID"(): string
public "serialize"(arg0: $CompoundTag$Type): $CompoundTag
public "tickEvent"(arg0: $TickEvent$Type): void
public "onPacketHandled"(): void
public "onServerStopping"(): void
get "expired"(): boolean
get "iD"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DelayedSpellEvent$Type = ($DelayedSpellEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DelayedSpellEvent_ = $DelayedSpellEvent$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$FlaskCannon$SplashLauncher" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FlaskCannon, $FlaskCannon$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$FlaskCannon"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FlaskCannon$SplashLauncher extends $FlaskCannon {
 "factory": $AnimatableInstanceCache
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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

public "getThrownStack"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type): $ItemStack
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlaskCannon$SplashLauncher$Type = ($FlaskCannon$SplashLauncher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlaskCannon$SplashLauncher_ = $FlaskCannon$SplashLauncher$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$MageBloomCrop" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$CropBlock, $CropBlock$Type} from "packages/net/minecraft/world/level/block/$CropBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MageBloomCrop extends $CropBlock {
static readonly "AGE_0_4": $IntegerProperty
static readonly "MAX_AGE": integer
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MageBloomCrop$Type = ($MageBloomCrop);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MageBloomCrop_ = $MageBloomCrop$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/source/$ISourceTile" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISourceTile {

 "getSource"(): integer
 "setSource"(arg0: integer): integer
 "removeSource"(arg0: integer): integer
 "addSource"(arg0: integer): integer
 "setMaxSource"(arg0: integer): void
 "canAcceptSource"(): boolean
 "getTransferRate"(): integer
 "getMaxSource"(): integer
}

export namespace $ISourceTile {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISourceTile$Type = ($ISourceTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISourceTile_ = $ISourceTile$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/entity/$EntitySpellArrow" {
import {$ParticleColor, $ParticleColor$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$ParticleColor"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$Arrow, $Arrow$Type} from "packages/net/minecraft/world/entity/projectile/$Arrow"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$Stack, $Stack$Type} from "packages/java/util/$Stack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$SpellResolver, $SpellResolver$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellResolver"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$IntOpenHashSet, $IntOpenHashSet$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntOpenHashSet"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractArrow$Pickup, $AbstractArrow$Pickup$Type} from "packages/net/minecraft/world/entity/projectile/$AbstractArrow$Pickup"
import {$PlayMessages$SpawnEntity, $PlayMessages$SpawnEntity$Type} from "packages/net/minecraftforge/network/$PlayMessages$SpawnEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntitySpellArrow extends $Arrow {
 "spellResolver": $SpellResolver
 "pierceLeft": integer
static readonly "RED": $EntityDataAccessor<(integer)>
static readonly "GREEN": $EntityDataAccessor<(integer)>
static readonly "BLUE": $EntityDataAccessor<(integer)>
 "pickup": $AbstractArrow$Pickup
 "shakeTime": integer
 "life": integer
 "knockback": integer
 "piercingIgnoreEntityIds": $IntOpenHashSet
 "piercedAndKilledEntities": $List<($Entity)>
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

constructor(arg0: $PlayMessages$SpawnEntity$Type, arg1: $Level$Type)
constructor(arg0: $Level$Type, arg1: $LivingEntity$Type)
constructor(arg0: $Level$Type, arg1: double, arg2: double, arg3: double)
constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public "getEntityType"(): $EntityType<(any)>
public "setDefaultColors"(): void
public "setColors"(arg0: $ParticleColor$Type): void
public "getAddEntityPacket"(): $Packet<($ClientGamePacketListener)>
public "getPierceLevel"(): byte
public "tick"(): void
get "entityType"(): $EntityType<(any)>
set "colors"(value: $ParticleColor$Type)
get "addEntityPacket"(): $Packet<($ClientGamePacketListener)>
get "pierceLevel"(): byte
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntitySpellArrow$Type = ($EntitySpellArrow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntitySpellArrow_ = $EntitySpellArrow$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$VoidJar" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IScribeable, $IScribeable$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$IScribeable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VoidJar extends $ModItem implements $IScribeable {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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

public "toggleStatus"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public static "tryVoiding"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
public "voidStack"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): boolean
public "preConsume"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: integer): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onScribe"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $InteractionHand$Type, arg4: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidJar$Type = ($VoidJar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidJar_ = $VoidJar$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/client/particle/$ParticleColor" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ParticleColor$IntWrapper, $ParticleColor$IntWrapper$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$ParticleColor$IntWrapper"
import {$IParticleColor, $IParticleColor$Type} from "packages/com/hollingsworth/arsnouveau/api/particle/$IParticleColor"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ParticleColor implements $IParticleColor, $Cloneable {
static readonly "ID": $ResourceLocation
static readonly "DEFAULT": $ParticleColor
static readonly "WHITE": $ParticleColor
static readonly "RED": $ParticleColor
static readonly "GREEN": $ParticleColor
static readonly "BLUE": $ParticleColor
static readonly "YELLOW": $ParticleColor
static readonly "PURPLE": $ParticleColor
static readonly "CYAN": $ParticleColor
static readonly "ORANGE": $ParticleColor
static readonly "MAGENTA": $ParticleColor
static readonly "LIGHT_BLUE": $ParticleColor
static readonly "LIME": $ParticleColor
static readonly "PINK": $ParticleColor
static readonly "GRAY": $ParticleColor
static readonly "LIGHT_GRAY": $ParticleColor
static readonly "BROWN": $ParticleColor
static readonly "BLACK": $ParticleColor
static readonly "TO_HIGHLIGHT": $ParticleColor
static readonly "FROM_HIGHLIGHT": $ParticleColor
static readonly "random": $Random

constructor(arg0: float, arg1: float, arg2: float)
constructor(arg0: $CompoundTag$Type)
constructor(arg0: double, arg1: double, arg2: double)
constructor(arg0: integer, arg1: integer, arg2: integer)

public "toString"(): string
public "clone"(): $ParticleColor
public "toWrapper"(): $ParticleColor$IntWrapper
public "transition"(arg0: integer): $ParticleColor
public static "fromString"(arg0: string): $ParticleColor
public "serialize"(): $CompoundTag
public "getColor"(): integer
public static "makeRandomColor"(arg0: integer, arg1: integer, arg2: integer, arg3: $RandomSource$Type): $ParticleColor
public "euclideanDistance"(arg0: $ParticleColor$Type): double
public static "defaultParticleColor"(): $ParticleColor
public static "fromInt"(arg0: integer): $ParticleColor
public "nextColor"(arg0: $RandomSource$Type): $ParticleColor
public "getRed"(): float
public "getGreen"(): float
public "getBlue"(): float
public "getRegistryName"(): $ResourceLocation
public "getRedInt"(): integer
public "getGreenInt"(): integer
public "getBlueInt"(): integer
get "color"(): integer
get "red"(): float
get "green"(): float
get "blue"(): float
get "registryName"(): $ResourceLocation
get "redInt"(): integer
get "greenInt"(): integer
get "blueInt"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleColor$Type = ($ParticleColor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleColor_ = $ParticleColor$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/crafting/recipes/$BookUpgradeRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"

export class $BookUpgradeRecipe extends $ShapelessRecipe {
readonly "group": string
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>


public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookUpgradeRecipe$Type = ($BookUpgradeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookUpgradeRecipe_ = $BookUpgradeRecipe$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/spell/rewind/$RewindEntityData" {
import {$RewindEvent, $RewindEvent$Type} from "packages/com/hollingsworth/arsnouveau/common/event/timed/$RewindEvent"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IRewindCallback, $IRewindCallback$Type} from "packages/com/hollingsworth/arsnouveau/common/spell/rewind/$IRewindCallback"

export class $RewindEntityData implements $IRewindCallback {
 "gameTime": long
 "deltaMovement": $Vec3
 "position": $Vec3
 "health": float

constructor(arg0: long, arg1: $Vec3$Type, arg2: $Vec3$Type, arg3: float)

public "onRewind"(arg0: $RewindEvent$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewindEntityData$Type = ($RewindEntityData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RewindEntityData_ = $RewindEntityData$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/mana/$IManaDiscountEquipment" {
import {$Spell, $Spell$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$Spell"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IManaDiscountEquipment {

 "getManaDiscount"(arg0: $ItemStack$Type): integer
 "getManaDiscount"(arg0: $ItemStack$Type, arg1: $Spell$Type): integer
}

export namespace $IManaDiscountEquipment {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IManaDiscountEquipment$Type = ($IManaDiscountEquipment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IManaDiscountEquipment_ = $IManaDiscountEquipment$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/client/particle/$HelixParticleType" {
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$HelixParticleTypeData, $HelixParticleTypeData$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$HelixParticleTypeData"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $HelixParticleType extends $ParticleType<($HelixParticleTypeData)> {

constructor()

public "codec"(): $Codec<($HelixParticleTypeData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HelixParticleType$Type = ($HelixParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HelixParticleType_ = $HelixParticleType$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/nbt/$ITagSerializable" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $ITagSerializable {

 "serialize"(): $CompoundTag

(): $CompoundTag
}

export namespace $ITagSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITagSerializable$Type = ($ITagSerializable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITagSerializable_ = $ITagSerializable$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/client/particle/$ParticleColor$IntWrapper" {
import {$ParticleColor, $ParticleColor$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$ParticleColor"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"

/**
 * 
 * @deprecated
 */
export class $ParticleColor$IntWrapper implements $Cloneable {
 "r": integer
 "g": integer
 "b": integer

constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: $ParticleColor$Type)

public "toParticleColor"(): $ParticleColor
public "clone"(): $ParticleColor$IntWrapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleColor$IntWrapper$Type = ($ParticleColor$IntWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleColor$IntWrapper_ = $ParticleColor$IntWrapper$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/tile/$RitualBrazierTile" {
import {$IDispellable, $IDispellable$Type} from "packages/com/hollingsworth/arsnouveau/api/entity/$IDispellable"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ITooltipProvider, $ITooltipProvider$Type} from "packages/com/hollingsworth/arsnouveau/api/client/$ITooltipProvider"
import {$IInvProvider, $IInvProvider$Type} from "packages/com/hollingsworth/arsnouveau/api/item/inv/$IInvProvider"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SpellStats, $SpellStats$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GeoBlockEntity, $GeoBlockEntity$Type} from "packages/software/bernie/geckolib/animatable/$GeoBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$InventoryManager, $InventoryManager$Type} from "packages/com/hollingsworth/arsnouveau/api/item/inv/$InventoryManager"
import {$ParticleColor, $ParticleColor$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$ParticleColor"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$ITickable, $ITickable$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$ITickable"
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ILightable, $ILightable$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$ILightable"
import {$ColorPos, $ColorPos$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$ColorPos"
import {$ModdedTile, $ModdedTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$ModdedTile"
import {$AbstractRitual, $AbstractRitual$Type} from "packages/com/hollingsworth/arsnouveau/api/ritual/$AbstractRitual"
import {$IWandable, $IWandable$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$IWandable"

export class $RitualBrazierTile extends $ModdedTile implements $ITooltipProvider, $GeoBlockEntity, $ILightable, $ITickable, $IInvProvider, $IDispellable, $IWandable {
 "ritual": $AbstractRitual
 "isDecorative": boolean
 "color": $ParticleColor
 "isOff": boolean
 "relayPos": $BlockPos
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "onLight"(arg0: $HitResult$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: $SpellStats$Type, arg4: $SpellContext$Type): void
public "onDispel"(arg0: $LivingEntity$Type): boolean
public "tick"(): void
public "takeSource"(): boolean
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "getInventoryManager"(): $InventoryManager
public "onFinishedConnectionFirst"(arg0: $BlockPos$Type, arg1: $LivingEntity$Type, arg2: $Player$Type): void
public "canTakeAnotherRitual"(): boolean
public "onWanded"(arg0: $Player$Type): void
public "getWandHighlight"(arg0: $List$Type<($ColorPos$Type)>): $List<($ColorPos)>
public "isRitualDone"(): boolean
public "tryBurnStack"(arg0: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "canRitualStart"(): boolean
public "startRitual"(arg0: $Player$Type): void
/**
 * 
 * @deprecated
 */
public "startRitual"(): void
public "setRitual"(arg0: $ResourceLocation$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "getTooltip"(arg0: $List$Type<($Component$Type)>): void
public "makeParticle"(arg0: $ParticleColor$Type, arg1: $ParticleColor$Type, arg2: integer): void
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "setAnimData"<D>(arg0: $SerializableDataTicket$Type<(D)>, arg1: D): void
public "getAnimData"<D>(arg0: $SerializableDataTicket$Type<(D)>): D
public "getTick"(arg0: any): double
public "triggerAnim"(arg0: string, arg1: string): void
public "tick"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): void
public "onFinishedConnectionFirst"(arg0: $BlockPos$Type, arg1: $Direction$Type, arg2: $LivingEntity$Type, arg3: $Player$Type): void
public "onFinishedConnectionLast"(arg0: $BlockPos$Type, arg1: $LivingEntity$Type, arg2: $Player$Type): void
public "onFinishedConnectionLast"(arg0: $BlockPos$Type, arg1: $Direction$Type, arg2: $LivingEntity$Type, arg3: $Player$Type): void
public "getBoneResetTime"(): double
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "shouldPlayAnimsWhileGamePaused"(): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "inventoryManager"(): $InventoryManager
get "ritualDone"(): boolean
set "ritual"(value: $ResourceLocation$Type)
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualBrazierTile$Type = ($RitualBrazierTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RitualBrazierTile_ = $RitualBrazierTile$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ParticleColor, $ParticleColor$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$ParticleColor"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Spell, $Spell$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$Spell"
import {$IWrappedCaster, $IWrappedCaster$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/wrapped_caster/$IWrappedCaster"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$CancelReason, $CancelReason$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$CancelReason"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$IContextAttachment, $IContextAttachment$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$IContextAttachment"
import {$DelayedSpellEvent, $DelayedSpellEvent$Type} from "packages/com/hollingsworth/arsnouveau/api/event/$DelayedSpellEvent"
import {$SpellContext$CasterType, $SpellContext$CasterType$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext$CasterType"

export class $SpellContext implements $Cloneable {
 "castingTile": $BlockEntity
 "tag": $CompoundTag
 "attachments": $Map<($ResourceLocation), ($IContextAttachment)>

constructor(arg0: $Level$Type, arg1: $Spell$Type, arg2: $LivingEntity$Type, arg3: $IWrappedCaster$Type)
constructor(arg0: $Level$Type, arg1: $Spell$Type, arg2: $LivingEntity$Type, arg3: $IWrappedCaster$Type, arg4: $ItemStack$Type)

public "stop"(): void
public "delay"(arg0: $DelayedSpellEvent$Type): void
/**
 * 
 * @deprecated
 */
public "getType"(): $SpellContext$CasterType
public "getDelayedSpellEvent"(): $DelayedSpellEvent
public "getCaster"(): $IWrappedCaster
public "makeChildContext"(): $SpellContext
public "withWrappedCaster"(arg0: $IWrappedCaster$Type): $SpellContext
public "getCurrentIndex"(): integer
public "getColors"(): $ParticleColor
public static "fromEntity"(arg0: $Spell$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): $SpellContext
public "withParent"(arg0: $SpellContext$Type): $SpellContext
public "setCaster"(arg0: $LivingEntity$Type): void
public "setCasterTool"(arg0: $ItemStack$Type): void
public "getPreviousContext"(): $SpellContext
public "setCanceled"(arg0: boolean, arg1: $CancelReason$Type): boolean
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
public "setColors"(arg0: $ParticleColor$Type): void
public "isDelayed"(): boolean
public "getRemainingSpell"(): $Spell
public "setCurrentIndex"(arg0: integer): void
public "withSpell"(arg0: $Spell$Type): $SpellContext
public "getCancelReason"(): $CancelReason
public "getUnwrappedCaster"(): $LivingEntity
public "getSpell"(): $Spell
public "withColors"(arg0: $ParticleColor$Type): $SpellContext
public "getAttachment"<T extends $IContextAttachment>(arg0: $ResourceLocation$Type): T
public "getOrCreateAttachment"<T extends $IContextAttachment>(arg0: $ResourceLocation$Type, arg1: T): T
public "hasNextPart"(): boolean
public "nextPart"(): $AbstractSpellPart
public "getCasterTool"(): $ItemStack
public "resetCastCounter"(): $SpellContext
get "type"(): $SpellContext$CasterType
get "delayedSpellEvent"(): $DelayedSpellEvent
get "caster"(): $IWrappedCaster
get "currentIndex"(): integer
get "colors"(): $ParticleColor
set "caster"(value: $LivingEntity$Type)
set "casterTool"(value: $ItemStack$Type)
get "previousContext"(): $SpellContext
set "canceled"(value: boolean)
get "canceled"(): boolean
set "colors"(value: $ParticleColor$Type)
get "delayed"(): boolean
get "remainingSpell"(): $Spell
set "currentIndex"(value: integer)
get "cancelReason"(): $CancelReason
get "unwrappedCaster"(): $LivingEntity
get "spell"(): $Spell
get "casterTool"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellContext$Type = ($SpellContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellContext_ = $SpellContext$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/enchanting_apparatus/$ReactiveEnchantmentRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ReactiveEnchantmentRecipe, $ReactiveEnchantmentRecipe$Type} from "packages/com/hollingsworth/arsnouveau/api/enchanting_apparatus/$ReactiveEnchantmentRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ReactiveEnchantmentRecipe$Serializer implements $RecipeSerializer<($ReactiveEnchantmentRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ReactiveEnchantmentRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ReactiveEnchantmentRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ReactiveEnchantmentRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ReactiveEnchantmentRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactiveEnchantmentRecipe$Serializer$Type = ($ReactiveEnchantmentRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactiveEnchantmentRecipe$Serializer_ = $ReactiveEnchantmentRecipe$Serializer$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$RepositoryBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$ModBlock, $ModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$ModBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $RepositoryBlock extends $ModBlock implements $EntityBlock {
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepositoryBlock$Type = ($RepositoryBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RepositoryBlock_ = $RepositoryBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$WixieHat" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AnimModItem, $AnimModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$AnimModItem"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ICosmeticItem, $ICosmeticItem$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$ICosmeticItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WixieHat extends $AnimModItem implements $ICosmeticItem {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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

public "getTransformType"(): $ItemDisplayContext
public "getScaling"(): $Vec3
public "getTranslations"(): $Vec3
public "canWear"(arg0: $LivingEntity$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getScaling"(arg0: $LivingEntity$Type): $Vec3
public "getTranslations"(arg0: $LivingEntity$Type): $Vec3
public "getBone"(): string
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
get "transformType"(): $ItemDisplayContext
get "scaling"(): $Vec3
get "translations"(): $Vec3
get "bone"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WixieHat$Type = ($WixieHat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WixieHat_ = $WixieHat$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$IntangibleAirBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$LiquidBlockContainer, $LiquidBlockContainer$Type} from "packages/net/minecraft/world/level/block/$LiquidBlockContainer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TickableModBlock, $TickableModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$TickableModBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $IntangibleAirBlock extends $TickableModBlock implements $LiquidBlockContainer {
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

public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntangibleAirBlock$Type = ($IntangibleAirBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntangibleAirBlock_ = $IntangibleAirBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/potions/$GravityEffect" {
import {$TickEvent$PlayerTickEvent, $TickEvent$PlayerTickEvent$Type} from "packages/net/minecraftforge/event/$TickEvent$PlayerTickEvent"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $GravityEffect extends $MobEffect {

constructor()

public static "entityTick"(arg0: $TickEvent$PlayerTickEvent$Type): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public static "entityHurt"(arg0: $LivingHurtEvent$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GravityEffect$Type = ($GravityEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GravityEffect_ = $GravityEffect$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/item/inv/$MultiInsertReference" {
import {$MultiSlotReference, $MultiSlotReference$Type} from "packages/com/hollingsworth/arsnouveau/api/item/inv/$MultiSlotReference"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SlotReference, $SlotReference$Type} from "packages/com/hollingsworth/arsnouveau/api/item/inv/$SlotReference"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $MultiInsertReference extends $MultiSlotReference<($SlotReference)> {

constructor(arg0: $ItemStack$Type, arg1: $List$Type<($SlotReference$Type)>)

public "getRemainder"(): $ItemStack
get "remainder"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiInsertReference$Type = ($MultiInsertReference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiInsertReference_ = $MultiInsertReference$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/spell/$SpellResolver" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AbstractCastMethod, $AbstractCastMethod$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractCastMethod"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Spell, $Spell$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$Spell"
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SpellResolver implements $Cloneable {
 "castType": $AbstractCastMethod
 "spell": $Spell
 "spellContext": $SpellContext
 "silent": boolean
 "hitResult": $HitResult
 "previousResolver": $SpellResolver

constructor(arg0: $SpellContext$Type)

public "clone"(): $SpellResolver
public "resume"(arg0: $Level$Type): void
public "onCast"(arg0: $ItemStack$Type, arg1: $Level$Type): boolean
public "onCastOnBlock"(arg0: $BlockHitResult$Type): boolean
public "onCastOnBlock"(arg0: $UseOnContext$Type): boolean
public "onCastOnEntity"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $InteractionHand$Type): boolean
public "onResolveEffect"(arg0: $Level$Type, arg1: $HitResult$Type): void
public "expendMana"(): void
public "withSilent"(arg0: boolean): $SpellResolver
public "canCast"(arg0: $LivingEntity$Type): boolean
public "postEvent"(): boolean
public "getNewResolver"(arg0: $SpellContext$Type): $SpellResolver
public "hasFocus"(arg0: $Item$Type): boolean
public "hasFocus"(arg0: $ItemStack$Type): boolean
public "getResolveCost"(): integer
get "resolveCost"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellResolver$Type = ($SpellResolver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellResolver_ = $SpellResolver$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/spell/$ITurretBehavior" {
import {$SpellResolver, $SpellResolver$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellResolver"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Position, $Position$Type} from "packages/net/minecraft/core/$Position"

export interface $ITurretBehavior {

 "onCast"(arg0: $SpellResolver$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $Position$Type, arg5: $Direction$Type): void
}

export namespace $ITurretBehavior {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITurretBehavior$Type = ($ITurretBehavior);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITurretBehavior_ = $ITurretBehavior$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$FlaskCannon$LingeringLauncher" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FlaskCannon, $FlaskCannon$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$FlaskCannon"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FlaskCannon$LingeringLauncher extends $FlaskCannon {
 "factory": $AnimatableInstanceCache
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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

public "getThrownStack"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type): $ItemStack
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlaskCannon$LingeringLauncher$Type = ($FlaskCannon$LingeringLauncher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlaskCannon$LingeringLauncher_ = $FlaskCannon$LingeringLauncher$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/summon_charms/$DrygmyCharm" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$SummoningTile, $SummoningTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$SummoningTile"
import {$AbstractSummonCharm, $AbstractSummonCharm$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$AbstractSummonCharm"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DrygmyCharm extends $AbstractSummonCharm {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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

public "useOnBlock"(arg0: $UseOnContext$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $InteractionResult
public "useOnSummonTile"(arg0: $UseOnContext$Type, arg1: $Level$Type, arg2: $SummoningTile$Type, arg3: $BlockPos$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrygmyCharm$Type = ($DrygmyCharm);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrygmyCharm_ = $DrygmyCharm$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/client/$IVariantColorProvider" {
import {$IVariantTextureProvider, $IVariantTextureProvider$Type} from "packages/com/hollingsworth/arsnouveau/api/client/$IVariantTextureProvider"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IVariantColorProvider<T> extends $IVariantTextureProvider<(T)> {

 "setColor"(arg0: string, arg1: T): void
 "getColor"(arg0: T): string
/**
 * 
 * @deprecated
 */
 "getTexture"(arg0: $LivingEntity$Type): $ResourceLocation
 "getTexture"(arg0: T): $ResourceLocation

(arg0: string, arg1: T): void
}

export namespace $IVariantColorProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariantColorProvider$Type<T> = ($IVariantColorProvider<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariantColorProvider_<T> = $IVariantColorProvider$Type<(T)>;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$AnimModItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AnimModItem extends $ModItem implements $GeoItem {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
constructor()

public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public static "getId"(arg0: $ItemStack$Type): long
public "getTick"(arg0: any): double
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "isPerspectiveAware"(): boolean
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public "getBoneResetTime"(): double
public "shouldPlayAnimsWhileGamePaused"(): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimModItem$Type = ($AnimModItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimModItem_ = $AnimModItem$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/crafting/recipes/$PotionFlaskRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$PotionFlaskRecipe, $PotionFlaskRecipe$Type} from "packages/com/hollingsworth/arsnouveau/common/crafting/recipes/$PotionFlaskRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $PotionFlaskRecipe$Serializer implements $RecipeSerializer<($PotionFlaskRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $PotionFlaskRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $PotionFlaskRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $PotionFlaskRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $PotionFlaskRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionFlaskRecipe$Serializer$Type = ($PotionFlaskRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionFlaskRecipe$Serializer_ = $PotionFlaskRecipe$Serializer$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$ItemScroll" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemScroll$SortPref, $ItemScroll$SortPref$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ItemScroll$SortPref"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IScribeable, $IScribeable$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$IScribeable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemScroll extends $ModItem implements $IScribeable {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
constructor(arg0: $Item$Properties$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getSortPref"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $IItemHandler$Type): $ItemScroll$SortPref
public "onScribe"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $InteractionHand$Type, arg4: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemScroll$Type = ($ItemScroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemScroll_ = $ItemScroll$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$ScryCaster" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ICasterTool, $ICasterTool$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$ICasterTool"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Spell, $Spell$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$Spell"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$ISpellCaster, $ISpellCaster$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$ISpellCaster"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ScryCaster extends $ModItem implements $ICasterTool, $GeoItem {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
constructor()

public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getSpellCaster"(arg0: $ItemStack$Type): $ISpellCaster
public "getSpellCaster"(arg0: $CompoundTag$Type): $ISpellCaster
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "isScribedSpellValid"(arg0: $ISpellCaster$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: $Spell$Type): boolean
public "onScribe"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $InteractionHand$Type, arg4: $ItemStack$Type): boolean
public "setSpell"(arg0: $ISpellCaster$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: $Spell$Type): boolean
public "sendSetMessage"(arg0: $Player$Type): void
public "shouldDisplay"(arg0: $ItemStack$Type): boolean
public "getInformation"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "sendInvalidMessage"(arg0: $Player$Type): void
public "getSpellCaster"(): $ISpellCaster
public static "getId"(arg0: $ItemStack$Type): long
public "getTick"(arg0: any): double
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "isPerspectiveAware"(): boolean
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "onPreviousKeyPressed"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): void
public "onOpenBookMenuKeyPressed"(arg0: $ItemStack$Type, arg1: $Player$Type): void
/**
 * 
 * @deprecated
 */
public "canQuickCast"(): boolean
public "onQuickCast"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type, arg2: $InteractionHand$Type, arg3: integer): void
public "onNextKeyPressed"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): void
public "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public "getBoneResetTime"(): double
public "shouldPlayAnimsWhileGamePaused"(): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "spellCaster"(): $ISpellCaster
get "perspectiveAware"(): boolean
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScryCaster$Type = ($ScryCaster);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScryCaster_ = $ScryCaster$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/event/$SummonEvent" {
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SpellStats, $SpellStats$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ISummon, $ISummon$Type} from "packages/com/hollingsworth/arsnouveau/api/entity/$ISummon"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $SummonEvent extends $Event {
 "rayTraceResult": $HitResult
 "world": $Level
 "shooter": $LivingEntity
 "context": $SpellContext
 "summon": $ISummon
 "stats": $SpellStats

constructor()
constructor(arg0: $HitResult$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: $SpellStats$Type, arg4: $SpellContext$Type, arg5: $ISummon$Type)

public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonEvent$Type = ($SummonEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SummonEvent_ = $SummonEvent$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/client/particle/$ColorParticleTypeData" {
import {$ParticleColor, $ParticleColor$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$ParticleColor"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $ColorParticleTypeData implements $ParticleOptions {
static readonly "CODEC": $Codec<($ColorParticleTypeData)>
 "color": $ParticleColor
 "disableDepthTest": boolean
 "size": float
 "alpha": float
 "age": integer

constructor(arg0: $ParticleType$Type<(any)>, arg1: $ParticleColor$Type, arg2: boolean, arg3: float, arg4: float, arg5: integer)
constructor(arg0: $ParticleType$Type<(any)>, arg1: $ParticleColor$Type, arg2: boolean)
constructor(arg0: $ParticleColor$Type, arg1: boolean, arg2: float, arg3: float, arg4: integer)
constructor(arg0: float, arg1: float, arg2: float, arg3: boolean, arg4: float, arg5: float, arg6: integer)

public "writeToString"(): string
public "writeToNetwork"(arg0: $FriendlyByteBuf$Type): void
public "getType"(): $ParticleType<(any)>
get "type"(): $ParticleType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorParticleTypeData$Type = ($ColorParticleTypeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorParticleTypeData_ = $ColorParticleTypeData$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$TickableModBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$ITickableBlock, $ITickableBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$ITickableBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$ModBlock, $ModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$ModBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $TickableModBlock extends $ModBlock implements $ITickableBlock {
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
constructor(arg0: $BlockBehaviour$Properties$Type)

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickableModBlock$Type = ($TickableModBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickableModBlock_ = $TickableModBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$WornNotebook" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WornNotebook extends $ModItem {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WornNotebook$Type = ($WornNotebook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WornNotebook_ = $WornNotebook$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/client/gui/radial_menu/$SecondaryIconPosition" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $SecondaryIconPosition extends $Enum<($SecondaryIconPosition)> {
static readonly "NORTH": $SecondaryIconPosition
static readonly "EAST": $SecondaryIconPosition
static readonly "SOUTH": $SecondaryIconPosition
static readonly "WEST": $SecondaryIconPosition


public static "values"(): ($SecondaryIconPosition)[]
public static "valueOf"(arg0: string): $SecondaryIconPosition
public static "getNextPositon"(arg0: $SecondaryIconPosition$Type): $SecondaryIconPosition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SecondaryIconPosition$Type = (("east") | ("south") | ("north") | ("west")) | ($SecondaryIconPosition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SecondaryIconPosition_ = $SecondaryIconPosition$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/entity/$IDispellable" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IDispellable {

 "onDispel"(arg0: $LivingEntity$Type): boolean

(arg0: $LivingEntity$Type): boolean
}

export namespace $IDispellable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDispellable$Type = ($IDispellable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDispellable_ = $IDispellable$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$TableBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ThreePartBlock, $ThreePartBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$ThreePartBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TickableModBlock, $TickableModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$TickableModBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $TableBlock extends $TickableModBlock {
static readonly "PART": $EnumProperty<($ThreePartBlock)>
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

public static "getConnectedDirection"(arg0: $BlockState$Type): $Direction
public static "getNeighbourDirection"(arg0: $ThreePartBlock$Type, arg1: $Direction$Type): $Direction
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tearDown"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TableBlock$Type = ($TableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TableBlock_ = $TableBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$SourceBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$ModBlock, $ModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$ModBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SourceBlock extends $ModBlock implements $EntityBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: string)

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SourceBlock$Type = ($SourceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SourceBlock_ = $SourceBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/mana/$IManaEquipment" {
import {$Spell, $Spell$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$Spell"
import {$IManaDiscountEquipment, $IManaDiscountEquipment$Type} from "packages/com/hollingsworth/arsnouveau/api/mana/$IManaDiscountEquipment"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IManaEquipment extends $IManaDiscountEquipment {

 "getManaRegenBonus"(arg0: $ItemStack$Type): integer
 "getMaxManaBoost"(arg0: $ItemStack$Type): integer
 "getManaDiscount"(arg0: $ItemStack$Type): integer
 "getManaDiscount"(arg0: $ItemStack$Type, arg1: $Spell$Type): integer
}

export namespace $IManaEquipment {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IManaEquipment$Type = ($IManaEquipment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IManaEquipment_ = $IManaEquipment$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$StarbuncleShades" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AnimModItem, $AnimModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$AnimModItem"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$ICosmeticItem, $ICosmeticItem$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$ICosmeticItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StarbuncleShades extends $AnimModItem implements $ICosmeticItem {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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

public "getScaling"(): $Vec3
public "getTranslations"(): $Vec3
public "canWear"(arg0: $LivingEntity$Type): boolean
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getTransformType"(): $ItemDisplayContext
public "getScaling"(arg0: $LivingEntity$Type): $Vec3
public "getTranslations"(arg0: $LivingEntity$Type): $Vec3
public "getBone"(): string
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
get "scaling"(): $Vec3
get "translations"(): $Vec3
get "transformType"(): $ItemDisplayContext
get "bone"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StarbuncleShades$Type = ($StarbuncleShades);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StarbuncleShades_ = $StarbuncleShades$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/client/gui/radial_menu/$DrawCallback" {
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $DrawCallback<T> {

 "accept"(arg0: T, arg1: $GuiGraphics$Type, arg2: integer, arg3: integer, arg4: integer, arg5: boolean): void

(arg0: T, arg1: $GuiGraphics$Type, arg2: integer, arg3: integer, arg4: integer, arg5: boolean): void
}

export namespace $DrawCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawCallback$Type<T> = ($DrawCallback<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawCallback_<T> = $DrawCallback$Type<(T)>;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$DirectionalModBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ModBlock, $ModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$ModBlock"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $DirectionalModBlock extends $ModBlock {
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
constructor()

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectionalModBlock$Type = ($DirectionalModBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DirectionalModBlock_ = $DirectionalModBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/item/inv/$MultiSlotReference" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$SlotReference, $SlotReference$Type} from "packages/com/hollingsworth/arsnouveau/api/item/inv/$SlotReference"

export class $MultiSlotReference<SReference extends $SlotReference> {

constructor(...arg0: (SReference)[])
constructor(arg0: $List$Type<(SReference)>)
constructor()

public "isEmpty"(): boolean
public "getSlots"(): $List<(SReference)>
get "empty"(): boolean
get "slots"(): $List<(SReference)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiSlotReference$Type<SReference> = ($MultiSlotReference<(SReference)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiSlotReference_<SReference> = $MultiSlotReference$Type<(SReference)>;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$BlankParchmentItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IScribeable, $IScribeable$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$IScribeable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlankParchmentItem extends $ModItem implements $IScribeable {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
constructor()

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "onScribe"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $InteractionHand$Type, arg4: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlankParchmentItem$Type = ($BlankParchmentItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlankParchmentItem_ = $BlankParchmentItem$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/enchanting_apparatus/$SpellWriteRecipe" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ITextOutput, $ITextOutput$Type} from "packages/com/hollingsworth/arsnouveau/api/enchanting_apparatus/$ITextOutput"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EnchantingApparatusTile, $EnchantingApparatusTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$EnchantingApparatusTile"
import {$EnchantingApparatusRecipe, $EnchantingApparatusRecipe$Type} from "packages/com/hollingsworth/arsnouveau/api/enchanting_apparatus/$EnchantingApparatusRecipe"

export class $SpellWriteRecipe extends $EnchantingApparatusRecipe implements $ITextOutput {
 "reagent": $Ingredient
 "result": $ItemStack
 "pedestalItems": $List<($Ingredient)>
 "id": $ResourceLocation
 "sourceCost": integer
 "keepNbtOfReagent": boolean

constructor(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: integer)
constructor(arg0: $List$Type<($Ingredient$Type)>)

public "getResult"(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type, arg2: $EnchantingApparatusTile$Type): $ItemStack
public "isMatch"(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type, arg2: $EnchantingApparatusTile$Type, arg3: $Player$Type): boolean
public "excludeJei"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "asRecipe"(): $JsonElement
public "doesReagentMatch"(arg0: $ItemStack$Type): boolean
public "getOutputComponent"(): $Component
get "serializer"(): $RecipeSerializer<(any)>
get "outputComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellWriteRecipe$Type = ($SpellWriteRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellWriteRecipe_ = $SpellWriteRecipe$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/mixin/$MobAccessor" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"

export interface $MobAccessor {

 "callMobInteract"(arg0: $Player$Type, arg1: $InteractionHand$Type): $InteractionResult

(arg0: $Player$Type, arg1: $InteractionHand$Type): $InteractionResult
}

export namespace $MobAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobAccessor$Type = ($MobAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobAccessor_ = $MobAccessor$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$LightBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$ITickableBlock, $ITickableBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$ITickableBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$ModBlock, $ModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$ModBlock"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $LightBlock extends $ModBlock implements $ITickableBlock, $SimpleWaterloggedBlock {
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "isRandomlyTicking"(arg0: $BlockState$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
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
export type $LightBlock$Type = ($LightBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightBlock_ = $LightBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$SkyWeave" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$ITickableBlock, $ITickableBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$ITickableBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$MirrorWeave, $MirrorWeave$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$MirrorWeave"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SkyWeave extends $MirrorWeave implements $ITickableBlock {
static readonly "LIGHT_LEVEL": $Property<(integer)>
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
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyWeave$Type = ($SkyWeave);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkyWeave_ = $SkyWeave$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/enchanting_apparatus/$SpellWriteRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$SpellWriteRecipe, $SpellWriteRecipe$Type} from "packages/com/hollingsworth/arsnouveau/api/enchanting_apparatus/$SpellWriteRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SpellWriteRecipe$Serializer implements $RecipeSerializer<($SpellWriteRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $SpellWriteRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $SpellWriteRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $SpellWriteRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $SpellWriteRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellWriteRecipe$Serializer$Type = ($SpellWriteRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellWriteRecipe$Serializer_ = $SpellWriteRecipe$Serializer$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/util/$RegistryWrapper" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"

export class $RegistryWrapper<T> implements $Supplier<(T)>, $ItemLike {
 "registryObject": $RegistryObject<(T)>

constructor(arg0: $RegistryObject$Type<(T)>)

public "get"(): T
public "defaultBlockState"(): $BlockState
public "asItem"(): $Item
public "getRegistryName"(): string
get "registryName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryWrapper$Type<T> = ($RegistryWrapper<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryWrapper_<T> = $RegistryWrapper$Type<(T)>;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/nbt/$AbstractData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export class $AbstractData {

constructor(arg0: $CompoundTag$Type)

public "writeToNBT"(arg0: $CompoundTag$Type): void
public "getInitTag"(): $CompoundTag
get "initTag"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractData$Type = ($AbstractData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractData_ = $AbstractData$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/summon_charms/$StarbuncleCharm" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$SummoningTile, $SummoningTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$SummoningTile"
import {$AbstractSummonCharm, $AbstractSummonCharm$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$AbstractSummonCharm"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StarbuncleCharm extends $AbstractSummonCharm {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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

public "useOnBlock"(arg0: $UseOnContext$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $InteractionResult
public "useOnSummonTile"(arg0: $UseOnContext$Type, arg1: $Level$Type, arg2: $SummoningTile$Type, arg3: $BlockPos$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StarbuncleCharm$Type = ($StarbuncleCharm);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StarbuncleCharm_ = $StarbuncleCharm$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/util/$IWololoable" {
import {$ParticleColor, $ParticleColor$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$ParticleColor"

export interface $IWololoable {

 "setColor"(arg0: $ParticleColor$Type): void
 "getColor"(): $ParticleColor
}

export namespace $IWololoable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWololoable$Type = ($IWololoable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWololoable_ = $IWololoable$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$SourcelinkBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$TickableModBlock, $TickableModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$TickableModBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SourcelinkBlock extends $TickableModBlock {
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

public "isRandomlyTicking"(arg0: $BlockState$Type): boolean
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SourcelinkBlock$Type = ($SourcelinkBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SourcelinkBlock_ = $SourcelinkBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$PotionMelder" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TickableModBlock, $TickableModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$TickableModBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $PotionMelder extends $TickableModBlock implements $SimpleWaterloggedBlock {
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
constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionMelder$Type = ($PotionMelder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionMelder_ = $PotionMelder$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$Relay" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TickableModBlock, $TickableModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$TickableModBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $Relay extends $TickableModBlock implements $SimpleWaterloggedBlock {
static readonly "shape": $VoxelShape
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
constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Relay$Type = ($Relay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Relay_ = $Relay$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/mixin/jar/$MobAccessorMixin" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"

export interface $MobAccessorMixin {

 "callGetAmbientSound"(): $SoundEvent

(): $SoundEvent
}

export namespace $MobAccessorMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobAccessorMixin$Type = ($MobAccessorMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobAccessorMixin_ = $MobAccessorMixin$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/client/$ITooltipProvider" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $ITooltipProvider {

 "getTooltip"(arg0: $List$Type<($Component$Type)>): void

(arg0: $List$Type<($Component$Type)>): void
}

export namespace $ITooltipProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITooltipProvider$Type = ($ITooltipProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITooltipProvider_ = $ITooltipProvider$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/item/$ISpellModifierItem" {
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$ISpellModifier, $ISpellModifier$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$ISpellModifier"
import {$SpellStats$Builder, $SpellStats$Builder$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats$Builder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ISpellModifierItem extends $ISpellModifier {

 "applyItemModifiers"(arg0: $ItemStack$Type, arg1: $SpellStats$Builder$Type, arg2: $AbstractSpellPart$Type, arg3: $HitResult$Type, arg4: $Level$Type, arg5: $LivingEntity$Type, arg6: $SpellContext$Type): $SpellStats$Builder
 "applyModifiers"(arg0: $SpellStats$Builder$Type, arg1: $AbstractSpellPart$Type, arg2: $HitResult$Type, arg3: $Level$Type, arg4: $LivingEntity$Type, arg5: $SpellContext$Type): $SpellStats$Builder
}

export namespace $ISpellModifierItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpellModifierItem$Type = ($ISpellModifierItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISpellModifierItem_ = $ISpellModifierItem$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$ScryerScroll" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ScryerScroll extends $ModItem {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScryerScroll$Type = ($ScryerScroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScryerScroll_ = $ScryerScroll$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/enchanting_apparatus/$EnchantingApparatusRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IEnchantingRecipe, $IEnchantingRecipe$Type} from "packages/com/hollingsworth/arsnouveau/api/enchanting_apparatus/$IEnchantingRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnchantingApparatusTile, $EnchantingApparatusTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$EnchantingApparatusTile"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $EnchantingApparatusRecipe implements $IEnchantingRecipe {
 "reagent": $Ingredient
 "result": $ItemStack
 "pedestalItems": $List<($Ingredient)>
 "id": $ResourceLocation
 "sourceCost": integer
 "keepNbtOfReagent": boolean

constructor()
constructor(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: $Ingredient$Type, arg3: $ItemStack$Type, arg4: integer, arg5: boolean)
constructor(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: $Ingredient$Type, arg3: $ItemStack$Type)
constructor(arg0: $ItemStack$Type, arg1: $Ingredient$Type, arg2: $List$Type<($Ingredient$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(arg0: $EnchantingApparatusTile$Type, arg1: $Level$Type, arg2: $Player$Type): boolean
public "matches"(arg0: $EnchantingApparatusTile$Type, arg1: $Level$Type): boolean
public "getResult"(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type, arg2: $EnchantingApparatusTile$Type): $ItemStack
public "isMatch"(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type, arg2: $EnchantingApparatusTile$Type, arg3: $Player$Type): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $EnchantingApparatusTile$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "excludeJei"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "asRecipe"(): $JsonElement
public "consumesSource"(): boolean
public static "doItemsMatch"(arg0: $List$Type<($ItemStack$Type)>, arg1: $List$Type<($Ingredient$Type)>): boolean
public "getSourceCost"(): integer
public "doesReagentMatch"(arg0: $ItemStack$Type): boolean
public "getToastSymbol"(): $ItemStack
public "getRemainingItems"(arg0: $EnchantingApparatusTile$Type): $NonNullList<($ItemStack)>
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
get "sourceCost"(): integer
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
export type $EnchantingApparatusRecipe$Type = ($EnchantingApparatusRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantingApparatusRecipe_ = $EnchantingApparatusRecipe$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$WarpScroll" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WarpScroll extends $ModItem {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WarpScroll$Type = ($WarpScroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WarpScroll_ = $WarpScroll$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractAugment" {
import {$Glyph, $Glyph$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$Glyph"
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$ISpellModifier, $ISpellModifier$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$ISpellModifier"
import {$SpellPartConfigUtil$AugmentLimits, $SpellPartConfigUtil$AugmentLimits$Type} from "packages/com/hollingsworth/arsnouveau/common/util/$SpellPartConfigUtil$AugmentLimits"
import {$SpellStats$Builder, $SpellStats$Builder$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats$Builder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ForgeConfigSpec$BooleanValue, $ForgeConfigSpec$BooleanValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$BooleanValue"
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$SpellPartConfigUtil$ComboLimits, $SpellPartConfigUtil$ComboLimits$Type} from "packages/com/hollingsworth/arsnouveau/common/util/$SpellPartConfigUtil$ComboLimits"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ForgeConfigSpec, $ForgeConfigSpec$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SpellSchool, $SpellSchool$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellSchool"
import {$SpellPartConfigUtil$AugmentCosts, $SpellPartConfigUtil$AugmentCosts$Type} from "packages/com/hollingsworth/arsnouveau/common/util/$SpellPartConfigUtil$AugmentCosts"

export class $AbstractAugment extends $AbstractSpellPart implements $ISpellModifier {
 "name": string
 "glyphItem": $Glyph
 "spellSchools": $List<($SpellSchool)>
 "compatibleAugments": $Set<($AbstractAugment)>
 "invalidCombinations": $SpellPartConfigUtil$ComboLimits
 "CONFIG": $ForgeConfigSpec
 "COST": $ForgeConfigSpec$IntValue
 "ENABLED": $ForgeConfigSpec$BooleanValue
 "STARTER_SPELL": $ForgeConfigSpec$BooleanValue
 "PER_SPELL_LIMIT": $ForgeConfigSpec$IntValue
 "GLYPH_TIER": $ForgeConfigSpec$IntValue
 "augmentLimits": $SpellPartConfigUtil$AugmentLimits
 "augmentCosts": $SpellPartConfigUtil$AugmentCosts

constructor(arg0: string, arg1: string)
constructor(arg0: $ResourceLocation$Type, arg1: string)

public "getTypeIndex"(): integer
public "applyModifiers"(arg0: $SpellStats$Builder$Type, arg1: $AbstractSpellPart$Type, arg2: $HitResult$Type, arg3: $Level$Type, arg4: $LivingEntity$Type, arg5: $SpellContext$Type): $SpellStats$Builder
/**
 * 
 * @deprecated
 */
public "applyModifiers"(arg0: $SpellStats$Builder$Type, arg1: $AbstractSpellPart$Type): $SpellStats$Builder
public "getCostForPart"(arg0: $AbstractSpellPart$Type): integer
public "getCompatibleAugments"(): $Set<($AbstractAugment)>
get "typeIndex"(): integer
get "compatibleAugments"(): $Set<($AbstractAugment)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAugment$Type = ($AbstractAugment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractAugment_ = $AbstractAugment$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/mixin/$LivingAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LivingAccessor {

 "callGetJumpPower"(): float

(): float
}

export namespace $LivingAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingAccessor$Type = ($LivingAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingAccessor_ = $LivingAccessor$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$VolcanicSourcelinkBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$SourcelinkBlock, $SourcelinkBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$SourcelinkBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $VolcanicSourcelinkBlock extends $SourcelinkBlock {
static "shape": $VoxelShape
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VolcanicSourcelinkBlock$Type = ($VolcanicSourcelinkBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VolcanicSourcelinkBlock_ = $VolcanicSourcelinkBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/crafting/recipes/$PotionFlaskRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $PotionFlaskRecipe extends $ShapelessRecipe {
readonly "group": string
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $ItemStack$Type, arg3: $NonNullList$Type<($Ingredient$Type)>)

public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionFlaskRecipe$Type = ($PotionFlaskRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionFlaskRecipe_ = $PotionFlaskRecipe$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/recipe/$SummonRitualRecipe$WeightedMobType" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Weight, $Weight$Type} from "packages/net/minecraft/util/random/$Weight"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$WeightedEntry, $WeightedEntry$Type} from "packages/net/minecraft/util/random/$WeightedEntry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$WeightedEntry$Wrapper, $WeightedEntry$Wrapper$Type} from "packages/net/minecraft/util/random/$WeightedEntry$Wrapper"

export class $SummonRitualRecipe$WeightedMobType extends $Record implements $WeightedEntry {

constructor(arg0: $ResourceLocation$Type)
constructor(mob: $ResourceLocation$Type, weight: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "weight"(): integer
public "toJson"(): $JsonObject
public static "fromJson"(arg0: $JsonObject$Type): $SummonRitualRecipe$WeightedMobType
public "getWeight"(): $Weight
public "mob"(): $ResourceLocation
public static "wrap"<T>(arg0: T, arg1: integer): $WeightedEntry$Wrapper<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonRitualRecipe$WeightedMobType$Type = ($SummonRitualRecipe$WeightedMobType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SummonRitualRecipe$WeightedMobType_ = $SummonRitualRecipe$WeightedMobType$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/client/$IVariantTextureProvider" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IVariantTextureProvider<T> {

/**
 * 
 * @deprecated
 */
 "getTexture"(arg0: $LivingEntity$Type): $ResourceLocation
 "getTexture"(arg0: T): $ResourceLocation
}

export namespace $IVariantTextureProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariantTextureProvider$Type<T> = ($IVariantTextureProvider<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariantTextureProvider_<T> = $IVariantTextureProvider$Type<(T)>;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/recipe/$SummonRitualRecipe$MobSource" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $SummonRitualRecipe$MobSource extends $Enum<($SummonRitualRecipe$MobSource)> {
static readonly "CURRENT_BIOME": $SummonRitualRecipe$MobSource
static readonly "MOB_LIST": $SummonRitualRecipe$MobSource


public static "values"(): ($SummonRitualRecipe$MobSource)[]
public static "valueOf"(arg0: string): $SummonRitualRecipe$MobSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonRitualRecipe$MobSource$Type = (("mob_list") | ("current_biome")) | ($SummonRitualRecipe$MobSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SummonRitualRecipe$MobSource_ = $SummonRitualRecipe$MobSource$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats$Builder" {
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SpellStats, $SpellStats$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AbstractAugment, $AbstractAugment$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractAugment"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $SpellStats$Builder {

constructor()

public "build"(): $SpellStats
public "build"(arg0: $AbstractSpellPart$Type, arg1: $HitResult$Type, arg2: $Level$Type, arg3: $LivingEntity$Type, arg4: $SpellContext$Type): $SpellStats
public "addItem"(arg0: $ItemStack$Type): $SpellStats$Builder
public "addAmplification"(arg0: double): $SpellStats$Builder
public "addAOE"(arg0: double): $SpellStats$Builder
public "randomize"(): $SpellStats$Builder
public "addAugment"(arg0: $AbstractAugment$Type): $SpellStats$Builder
public "setItems"(arg0: $List$Type<($ItemStack$Type)>): $SpellStats$Builder
public "setAOE"(arg0: double): $SpellStats$Builder
public "setAmplification"(arg0: double): $SpellStats$Builder
public "setDamageModifier"(arg0: double): $SpellStats$Builder
public "addDamageModifier"(arg0: double): $SpellStats$Builder
public "setSensitive"(): $SpellStats$Builder
public "addDurationModifier"(arg0: double): $SpellStats$Builder
public "addAccelerationModifier"(arg0: float): $SpellStats$Builder
/**
 * 
 * @deprecated
 */
public "setDurationModifier"(arg0: double): $SpellStats$Builder
public "setAccelerationModifier"(arg0: float): $SpellStats$Builder
public "addItemsFromEntity"(arg0: $LivingEntity$Type): $SpellStats$Builder
public "setAugments"(arg0: $List$Type<($AbstractAugment$Type)>): $SpellStats$Builder
set "items"(value: $List$Type<($ItemStack$Type)>)
set "aOE"(value: double)
set "amplification"(value: double)
set "damageModifier"(value: double)
set "durationModifier"(value: double)
set "accelerationModifier"(value: float)
set "augments"(value: $List$Type<($AbstractAugment$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellStats$Builder$Type = ($SpellStats$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellStats$Builder_ = $SpellStats$Builder$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/item/$ISpellHotkeyListener" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ISpellHotkeyListener {

 "onPreviousKeyPressed"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): void
 "onOpenBookMenuKeyPressed"(arg0: $ItemStack$Type, arg1: $Player$Type): void
/**
 * 
 * @deprecated
 */
 "canQuickCast"(): boolean
 "onQuickCast"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type, arg2: $InteractionHand$Type, arg3: integer): void
 "onNextKeyPressed"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): void
}

export namespace $ISpellHotkeyListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpellHotkeyListener$Type = ($ISpellHotkeyListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISpellHotkeyListener_ = $ISpellHotkeyListener$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/ritual/$RitualContext" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $RitualContext {
 "progress": integer
 "isDone": boolean
 "isStarted": boolean
 "needsSourceToRun": boolean
 "consumedItems": $List<($ItemStack)>

constructor()

public "write"(arg0: $CompoundTag$Type): void
public static "read"(arg0: $CompoundTag$Type): $RitualContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualContext$Type = ($RitualContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RitualContext_ = $RitualContext$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/sound/$SpellSound" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SpellSound {

constructor(arg0: $ResourceLocation$Type, arg1: $SoundEvent$Type, arg2: $Component$Type)
constructor(arg0: $SoundEvent$Type, arg1: $Component$Type)

public "setSoundEvent"(arg0: $SoundEvent$Type): void
public "getSoundName"(): $Component
public "setSoundName"(arg0: $Component$Type): void
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getId"(): $ResourceLocation
public "setId"(arg0: $ResourceLocation$Type): void
public "serialize"(): $CompoundTag
public "getSoundEvent"(): $SoundEvent
public static "fromTag"(arg0: $CompoundTag$Type): $SpellSound
public "getTexturePath"(): $ResourceLocation
set "soundEvent"(value: $SoundEvent$Type)
get "soundName"(): $Component
set "soundName"(value: $Component$Type)
get "id"(): $ResourceLocation
set "id"(value: $ResourceLocation$Type)
get "soundEvent"(): $SoundEvent
get "texturePath"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellSound$Type = ($SpellSound);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellSound_ = $SpellSound$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/itemscrolls/$DenyItemScroll" {
import {$ItemScroll, $ItemScroll$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ItemScroll"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemScroll$SortPref, $ItemScroll$SortPref$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ItemScroll$SortPref"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DenyItemScroll extends $ItemScroll {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
constructor(arg0: $Item$Properties$Type)

public "getSortPref"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $IItemHandler$Type): $ItemScroll$SortPref
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DenyItemScroll$Type = ($DenyItemScroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DenyItemScroll_ = $DenyItemScroll$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/item/$ICasterTool" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$IDisplayMana, $IDisplayMana$Type} from "packages/com/hollingsworth/arsnouveau/api/client/$IDisplayMana"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IScribeable, $IScribeable$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$IScribeable"
import {$ISpellCasterProvider, $ISpellCasterProvider$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$ISpellCasterProvider"
import {$Spell, $Spell$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$Spell"
import {$ISpellHotkeyListener, $ISpellHotkeyListener$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$ISpellHotkeyListener"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ISpellCaster, $ISpellCaster$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$ISpellCaster"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ICasterTool extends $IScribeable, $IDisplayMana, $ISpellHotkeyListener, $ISpellCasterProvider {

 "isScribedSpellValid"(arg0: $ISpellCaster$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: $Spell$Type): boolean
 "onScribe"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $InteractionHand$Type, arg4: $ItemStack$Type): boolean
 "setSpell"(arg0: $ISpellCaster$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: $Spell$Type): boolean
 "sendSetMessage"(arg0: $Player$Type): void
 "shouldDisplay"(arg0: $ItemStack$Type): boolean
 "getInformation"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
 "sendInvalidMessage"(arg0: $Player$Type): void
 "getSpellCaster"(arg0: $CompoundTag$Type): $ISpellCaster
 "getSpellCaster"(): $ISpellCaster
 "getSpellCaster"(arg0: $ItemStack$Type): $ISpellCaster
 "onPreviousKeyPressed"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): void
 "onOpenBookMenuKeyPressed"(arg0: $ItemStack$Type, arg1: $Player$Type): void
/**
 * 
 * @deprecated
 */
 "canQuickCast"(): boolean
 "onQuickCast"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type, arg2: $InteractionHand$Type, arg3: integer): void
 "onNextKeyPressed"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): void
}

export namespace $ICasterTool {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICasterTool$Type = ($ICasterTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICasterTool_ = $ICasterTool$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/potions/$BounceEffect" {
import {$LivingFallEvent, $LivingFallEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingFallEvent"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $BounceEffect extends $MobEffect {

constructor()

public static "onFall"(arg0: $LivingFallEvent$Type): void
public static "onFlyWallDamage"(arg0: $LivingHurtEvent$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BounceEffect$Type = ($BounceEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BounceEffect_ = $BounceEffect$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/source/$AbstractSourceMachine" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ParticleColor, $ParticleColor$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$ParticleColor"
import {$ISourceTile, $ISourceTile$Type} from "packages/com/hollingsworth/arsnouveau/api/source/$ISourceTile"
import {$IWololoable, $IWololoable$Type} from "packages/com/hollingsworth/arsnouveau/api/util/$IWololoable"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RegistryWrapper, $RegistryWrapper$Type} from "packages/com/hollingsworth/arsnouveau/common/util/$RegistryWrapper"
import {$ModdedTile, $ModdedTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$ModdedTile"

export class $AbstractSourceMachine extends $ModdedTile implements $ISourceTile, $IWololoable {
static "SOURCE_TAG": string
static "MAX_SOURCE_TAG": string
static "COLOR_TAG": string
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $RegistryWrapper$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getSource"(): integer
public "setColor"(arg0: $ParticleColor$Type): void
public "setSource"(arg0: integer): integer
public "removeSource"(arg0: integer): integer
public "getColor"(): $ParticleColor
public "addSource"(arg0: integer): integer
public "m_183515_"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "setMaxSource"(arg0: integer): void
public "transferSource"(arg0: $ISourceTile$Type, arg1: $ISourceTile$Type): integer
public "transferSource"(arg0: $ISourceTile$Type, arg1: $ISourceTile$Type, arg2: integer): integer
public "canAcceptSource"(arg0: integer): boolean
public "canAcceptSource"(): boolean
public "getTransferRate"(arg0: $ISourceTile$Type, arg1: $ISourceTile$Type): integer
public "getTransferRate"(arg0: $ISourceTile$Type, arg1: $ISourceTile$Type, arg2: integer): integer
public "getMaxSource"(): integer
public "getTransferRate"(): integer
get "source"(): integer
set "color"(value: $ParticleColor$Type)
set "source"(value: integer)
get "color"(): $ParticleColor
set "maxSource"(value: integer)
get "maxSource"(): integer
get "transferRate"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSourceMachine$Type = ($AbstractSourceMachine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSourceMachine_ = $AbstractSourceMachine$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/event/timed/$IRewindable" {
import {$RewindEntityData, $RewindEntityData$Type} from "packages/com/hollingsworth/arsnouveau/common/spell/rewind/$RewindEntityData"
import {$Stack, $Stack$Type} from "packages/java/util/$Stack"

export interface $IRewindable {

 "getMotions"(): $Stack<($RewindEntityData)>
 "isRewinding"(): boolean
 "setRewinding"(arg0: boolean): void
}

export namespace $IRewindable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRewindable$Type = ($IRewindable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRewindable_ = $IRewindable$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/potions/$FlightEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $FlightEffect extends $MobEffect {

constructor()

public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "getFlightDuration"(arg0: $LivingEntity$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlightEffect$Type = ($FlightEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlightEffect_ = $FlightEffect$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/summon_charms/$WixieCharm" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$SummoningTile, $SummoningTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$SummoningTile"
import {$AbstractSummonCharm, $AbstractSummonCharm$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$AbstractSummonCharm"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WixieCharm extends $AbstractSummonCharm {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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

public "useOnBlock"(arg0: $UseOnContext$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $InteractionResult
public "useOnSummonTile"(arg0: $UseOnContext$Type, arg1: $Level$Type, arg2: $SummoningTile$Type, arg3: $BlockPos$Type): $InteractionResult
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WixieCharm$Type = ($WixieCharm);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WixieCharm_ = $WixieCharm$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$CasterTome" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ICasterTool, $ICasterTool$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$ICasterTool"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Spell, $Spell$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$Spell"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$IManaDiscountEquipment, $IManaDiscountEquipment$Type} from "packages/com/hollingsworth/arsnouveau/api/mana/$IManaDiscountEquipment"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ISpellCaster, $ISpellCaster$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$ISpellCaster"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CasterTome extends $ModItem implements $ICasterTool, $IManaDiscountEquipment {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
constructor()

public "getManaDiscount"(arg0: $ItemStack$Type, arg1: $Spell$Type): integer
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "onScribe"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $InteractionHand$Type, arg4: $ItemStack$Type): boolean
public "getSpellCaster"(arg0: $ItemStack$Type): $ISpellCaster
public "isScribedSpellValid"(arg0: $ISpellCaster$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: $Spell$Type): boolean
public "setSpell"(arg0: $ISpellCaster$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: $Spell$Type): boolean
public "sendSetMessage"(arg0: $Player$Type): void
public "shouldDisplay"(arg0: $ItemStack$Type): boolean
public "getInformation"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "sendInvalidMessage"(arg0: $Player$Type): void
public "getSpellCaster"(arg0: $CompoundTag$Type): $ISpellCaster
public "getSpellCaster"(): $ISpellCaster
public "getManaDiscount"(arg0: $ItemStack$Type): integer
public "onPreviousKeyPressed"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): void
public "onOpenBookMenuKeyPressed"(arg0: $ItemStack$Type, arg1: $Player$Type): void
/**
 * 
 * @deprecated
 */
public "canQuickCast"(): boolean
public "onQuickCast"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type, arg2: $InteractionHand$Type, arg3: integer): void
public "onNextKeyPressed"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): void
get "spellCaster"(): $ISpellCaster
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CasterTome$Type = ($CasterTome);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CasterTome_ = $CasterTome$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/mixin/structure/$StructureTemplateAccessor" {
import {$StructureTemplate$StructureEntityInfo, $StructureTemplate$StructureEntityInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureEntityInfo"
import {$StructureTemplate$Palette, $StructureTemplate$Palette$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$Palette"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $StructureTemplateAccessor {

 "getEntityInfoList"(): $List<($StructureTemplate$StructureEntityInfo)>
 "getPalettes"(): $List<($StructureTemplate$Palette)>
}

export namespace $StructureTemplateAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTemplateAccessor$Type = ($StructureTemplateAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureTemplateAccessor_ = $StructureTemplateAccessor$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$StableWarpScroll" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StableWarpScroll extends $ModItem {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StableWarpScroll$Type = ($StableWarpScroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StableWarpScroll_ = $StableWarpScroll$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$MagelightTorch" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$TickableModBlock, $TickableModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$TickableModBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $MagelightTorch extends $TickableModBlock {
static readonly "FLOOR": $BooleanProperty
static readonly "ROOF": $BooleanProperty
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagelightTorch$Type = ($MagelightTorch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagelightTorch_ = $MagelightTorch$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/crafting/recipes/$GlyphRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$GlyphRecipe, $GlyphRecipe$Type} from "packages/com/hollingsworth/arsnouveau/common/crafting/recipes/$GlyphRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $GlyphRecipe$Serializer implements $RecipeSerializer<($GlyphRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $GlyphRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $GlyphRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $GlyphRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $GlyphRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlyphRecipe$Serializer$Type = ($GlyphRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlyphRecipe$Serializer_ = $GlyphRecipe$Serializer$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/perk/$PerkSlot" {
import {$ConcurrentHashMap, $ConcurrentHashMap$Type} from "packages/java/util/concurrent/$ConcurrentHashMap"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $PerkSlot {
static "PERK_SLOTS": $ConcurrentHashMap<($ResourceLocation), ($PerkSlot)>
static readonly "ONE": $PerkSlot
static readonly "TWO": $PerkSlot
static readonly "THREE": $PerkSlot
readonly "id": $ResourceLocation
readonly "value": integer

constructor(arg0: $ResourceLocation$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PerkSlot$Type = ($PerkSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PerkSlot_ = $PerkSlot$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$FlaskCannon" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$IRadialProvider, $IRadialProvider$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$IRadialProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FlaskCannon extends $ModItem implements $IRadialProvider, $GeoItem {
 "factory": $AnimatableInstanceCache
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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

public "forKey"(): integer
public "onRadialKeyPressed"(arg0: $ItemStack$Type, arg1: $Player$Type): void
public "getThrownStack"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type): $ItemStack
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public static "getId"(arg0: $ItemStack$Type): long
public "getTick"(arg0: any): double
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "isPerspectiveAware"(): boolean
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public "getBoneResetTime"(): double
public "shouldPlayAnimsWhileGamePaused"(): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlaskCannon$Type = ($FlaskCannon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlaskCannon_ = $FlaskCannon$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$SpellBow" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ICasterTool, $ICasterTool$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$ICasterTool"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Spell, $Spell$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$Spell"
import {$IManaDiscountEquipment, $IManaDiscountEquipment$Type} from "packages/com/hollingsworth/arsnouveau/api/mana/$IManaDiscountEquipment"
import {$BowItem, $BowItem$Type} from "packages/net/minecraft/world/item/$BowItem"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AbstractArrow, $AbstractArrow$Type} from "packages/net/minecraft/world/entity/projectile/$AbstractArrow"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$ISpellCaster, $ISpellCaster$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$ISpellCaster"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$EntitySpellArrow, $EntitySpellArrow$Type} from "packages/com/hollingsworth/arsnouveau/common/entity/$EntitySpellArrow"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpellBow extends $BowItem implements $GeoItem, $ICasterTool, $IManaDiscountEquipment {
 "factory": $AnimatableInstanceCache
static readonly "MAX_DRAW_DURATION": integer
static readonly "DEFAULT_RANGE": integer
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
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
constructor()

public "getManaDiscount"(arg0: $ItemStack$Type, arg1: $Spell$Type): integer
public "getAllSupportedProjectiles"(): $Predicate<($ItemStack)>
public "findAmmo"(arg0: $Player$Type, arg1: $ItemStack$Type): $ItemStack
public "canPlayerCastSpell"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
public "addArrow"(arg0: $AbstractArrow$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: boolean, arg4: $Player$Type): void
public "buildSpellArrow"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ISpellCaster$Type, arg3: boolean, arg4: $ItemStack$Type): $EntitySpellArrow
public "customArrow"(arg0: $AbstractArrow$Type): $AbstractArrow
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "isScribedSpellValid"(arg0: $ISpellCaster$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: $Spell$Type): boolean
public "setSpell"(arg0: $ISpellCaster$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: $Spell$Type): boolean
public "sendInvalidMessage"(arg0: $Player$Type): void
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public static "getId"(arg0: $ItemStack$Type): long
public "getTick"(arg0: any): double
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "isPerspectiveAware"(): boolean
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "onScribe"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $InteractionHand$Type, arg4: $ItemStack$Type): boolean
public "sendSetMessage"(arg0: $Player$Type): void
public "shouldDisplay"(arg0: $ItemStack$Type): boolean
public "getInformation"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getSpellCaster"(arg0: $CompoundTag$Type): $ISpellCaster
public "getSpellCaster"(): $ISpellCaster
public "getSpellCaster"(arg0: $ItemStack$Type): $ISpellCaster
public "getManaDiscount"(arg0: $ItemStack$Type): integer
public "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public "onPreviousKeyPressed"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): void
public "onOpenBookMenuKeyPressed"(arg0: $ItemStack$Type, arg1: $Player$Type): void
/**
 * 
 * @deprecated
 */
public "canQuickCast"(): boolean
public "onQuickCast"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type, arg2: $InteractionHand$Type, arg3: integer): void
public "onNextKeyPressed"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): void
public "getBoneResetTime"(): double
public "shouldPlayAnimsWhileGamePaused"(): boolean
get "allSupportedProjectiles"(): $Predicate<($ItemStack)>
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "spellCaster"(): $ISpellCaster
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellBow$Type = ($SpellBow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellBow_ = $SpellBow$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/spell/$SpellSchool" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$Set, $Set$Type} from "packages/java/util/$Set"

export class $SpellSchool {

constructor(arg0: string)

public "getId"(): string
public "addSpellPart"(arg0: $AbstractSpellPart$Type): boolean
public "getTextComponent"(): $Component
public "getSpellParts"(): $Set<($AbstractSpellPart)>
public "setSubSchools"(arg0: $Set$Type<($SpellSchool$Type)>): void
public "withSubSchool"(arg0: $SpellSchool$Type): $SpellSchool
public "isPartOfSchool"(arg0: $AbstractSpellPart$Type): boolean
public "getSubSchools"(): $Set<($SpellSchool)>
public "setSpellParts"(arg0: $Set$Type<($AbstractSpellPart$Type)>): void
get "id"(): string
get "textComponent"(): $Component
get "spellParts"(): $Set<($AbstractSpellPart)>
set "subSchools"(value: $Set$Type<($SpellSchool$Type)>)
get "subSchools"(): $Set<($SpellSchool)>
set "spellParts"(value: $Set$Type<($AbstractSpellPart$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellSchool$Type = ($SpellSchool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellSchool_ = $SpellSchool$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/tile/$ModdedTile" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RegistryWrapper, $RegistryWrapper$Type} from "packages/com/hollingsworth/arsnouveau/common/util/$RegistryWrapper"

export class $ModdedTile extends $BlockEntity {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $RegistryWrapper$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getY"(): double
public "updateBlock"(): boolean
public "getZ"(): double
public "m_183515_"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "getX"(): double
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
get "y"(): double
get "z"(): double
get "updateTag"(): $CompoundTag
get "x"(): double
get "updatePacket"(): $ClientboundBlockEntityDataPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModdedTile$Type = ($ModdedTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModdedTile_ = $ModdedTile$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$ArchwoodChest" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ChestType, $ChestType$Type} from "packages/net/minecraft/world/level/block/state/properties/$ChestType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ChestBlock, $ChestBlock$Type} from "packages/net/minecraft/world/level/block/$ChestBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ArchwoodChest extends $ChestBlock {
static readonly "FACING": $DirectionProperty
static readonly "TYPE": $EnumProperty<($ChestType)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "EVENT_SET_OPEN_COUNT": integer
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchwoodChest$Type = ($ArchwoodChest);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchwoodChest_ = $ArchwoodChest$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/recipe/$BuddingConversionRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BuddingConversionRecipe, $BuddingConversionRecipe$Type} from "packages/com/hollingsworth/arsnouveau/api/recipe/$BuddingConversionRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $BuddingConversionRecipe$Serializer implements $RecipeSerializer<($BuddingConversionRecipe)> {
static readonly "CODEC": $Codec<($BuddingConversionRecipe)>

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $BuddingConversionRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $BuddingConversionRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $BuddingConversionRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $BuddingConversionRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuddingConversionRecipe$Serializer$Type = ($BuddingConversionRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuddingConversionRecipe$Serializer_ = $BuddingConversionRecipe$Serializer$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$SpellPrismBlock" {
import {$EntityProjectileSpell, $EntityProjectileSpell$Type} from "packages/com/hollingsworth/arsnouveau/common/entity/$EntityProjectileSpell"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Position, $Position$Type} from "packages/net/minecraft/core/$Position"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$IPrismaticBlock, $IPrismaticBlock$Type} from "packages/com/hollingsworth/arsnouveau/api/block/$IPrismaticBlock"
import {$BlockSource, $BlockSource$Type} from "packages/net/minecraft/core/$BlockSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ModBlock, $ModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$ModBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SpellPrismBlock extends $ModBlock implements $IPrismaticBlock {
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
constructor()

public "onHit"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $EntityProjectileSpell$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public static "getDispensePosition"(arg0: $BlockSource$Type): $Position
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellPrismBlock$Type = ($SpellPrismBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellPrismBlock_ = $SpellPrismBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$FalseWeave" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$MirrorWeave, $MirrorWeave$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$MirrorWeave"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FalseWeave extends $MirrorWeave {
static readonly "LIGHT_LEVEL": $Property<(integer)>
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
constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FalseWeave$Type = ($FalseWeave);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FalseWeave_ = $FalseWeave$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/recipe/$ScryRitualRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ScryRitualRecipe extends $Record implements $Recipe<($Container)> {

constructor(id: $ResourceLocation$Type, augment: $TagKey$Type<($Item$Type)>, highlight: $TagKey$Type<($Block$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(arg0: $ItemStack$Type): boolean
public "id"(): $ResourceLocation
public "highlight"(): $TagKey<($Block)>
public "augment"(): $TagKey<($Item)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "asRecipe"(): $JsonElement
public "getToastSymbol"(): $ItemStack
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
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
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
export type $ScryRitualRecipe$Type = ($ScryRitualRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScryRitualRecipe_ = $ScryRitualRecipe$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$MageBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TickableModBlock, $TickableModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$TickableModBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MageBlock extends $TickableModBlock {
static readonly "TEMPORARY": $BooleanProperty
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

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "canDropFromExplosion"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): boolean
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MageBlock$Type = ($MageBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MageBlock_ = $MageBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/event/timed/$RewindEvent" {
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ITimedEvent, $ITimedEvent$Type} from "packages/com/hollingsworth/arsnouveau/api/event/$ITimedEvent"
import {$TickEvent, $TickEvent$Type} from "packages/net/minecraftforge/event/$TickEvent"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RewindEvent implements $ITimedEvent {
 "entity": $Entity
 "doneRewinding": boolean
 "rewindTicks": integer
 "ticksToRewind": integer
 "respectsGravity": boolean
 "context": $SpellContext
 "serverSide": boolean
 "startGameTime": long

constructor(arg0: $Entity$Type, arg1: long, arg2: integer, arg3: $SpellContext$Type)
constructor(arg0: $Entity$Type, arg1: long, arg2: integer)
constructor(arg0: long, arg1: integer, arg2: $SpellContext$Type)

public "stop"(): void
public "isExpired"(): boolean
public "tick"(arg0: boolean): void
public "onServerStopping"(): void
public "getID"(): string
public "serialize"(arg0: $CompoundTag$Type): $CompoundTag
public "tickEvent"(arg0: $TickEvent$Type): void
public "onPacketHandled"(): void
get "expired"(): boolean
get "iD"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewindEvent$Type = ($RewindEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RewindEvent_ = $RewindEvent$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/util/$SpellPartConfigUtil$AugmentLimits" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SpellPartConfigUtil$AugmentLimits {


public "getAugmentLimit"(arg0: $ResourceLocation$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellPartConfigUtil$AugmentLimits$Type = ($SpellPartConfigUtil$AugmentLimits);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellPartConfigUtil$AugmentLimits_ = $SpellPartConfigUtil$AugmentLimits$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/item/inv/$MultiExtractedReference" {
import {$MultiSlotReference, $MultiSlotReference$Type} from "packages/com/hollingsworth/arsnouveau/api/item/inv/$MultiSlotReference"
import {$ExtractedStack, $ExtractedStack$Type} from "packages/com/hollingsworth/arsnouveau/api/item/inv/$ExtractedStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $MultiExtractedReference extends $MultiSlotReference<($ExtractedStack)> {

constructor(arg0: $ItemStack$Type, arg1: $List$Type<($ExtractedStack$Type)>)

public "isEmpty"(): boolean
public "getExtracted"(): $ItemStack
get "empty"(): boolean
get "extracted"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiExtractedReference$Type = ($MultiExtractedReference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiExtractedReference_ = $MultiExtractedReference$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$SummonBed" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$ModBlock, $ModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$ModBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SummonBed extends $ModBlock {
static readonly "collisionShape": $VoxelShape
static readonly "shape": $VoxelShape
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

constructor()
constructor(arg0: $BlockBehaviour$Properties$Type)

public "isPowered"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
public "updateEntityAfterFallOn"(arg0: $BlockGetter$Type, arg1: $Entity$Type): void
public "fallOn"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $Entity$Type, arg4: float): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getBlockSupportShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getVisualShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonBed$Type = ($SummonBed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SummonBed_ = $SummonBed$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/item/$IScribeable" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IScribeable {

 "onScribe"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $InteractionHand$Type, arg4: $ItemStack$Type): boolean

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $InteractionHand$Type, arg4: $ItemStack$Type): boolean
}

export namespace $IScribeable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScribeable$Type = ($IScribeable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScribeable_ = $IScribeable$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/crafting/recipes/$GlyphRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ScribesTile, $ScribesTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$ScribesTile"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $GlyphRecipe implements $Recipe<($ScribesTile)> {
 "output": $ItemStack
 "inputs": $List<($Ingredient)>
 "id": $ResourceLocation
 "exp": integer

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStack$Type, arg2: $List$Type<($Ingredient$Type)>, arg3: integer)

public "matches"(arg0: $ScribesTile$Type, arg1: $Level$Type): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "withItem"(arg0: $RegistryObject$Type<(any)>): $GlyphRecipe
public "withItem"(arg0: $RegistryObject$Type<(any)>, arg1: integer): $GlyphRecipe
public "withItem"(arg0: $ItemLike$Type, arg1: integer): $GlyphRecipe
public "withItem"(arg0: $ItemLike$Type): $GlyphRecipe
public "assemble"(arg0: $ScribesTile$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "withIngredient"(arg0: $Ingredient$Type): $GlyphRecipe
public "withIngredient"(arg0: $TagKey$Type<($Item$Type)>, arg1: integer): $GlyphRecipe
public "withIngredient"(arg0: $Ingredient$Type, arg1: integer): $GlyphRecipe
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "withStack"(arg0: $ItemStack$Type, arg1: integer): $GlyphRecipe
public "withStack"(arg0: $ItemStack$Type): $GlyphRecipe
public "asRecipe"(): $JsonElement
public "getSpellPart"(): $AbstractSpellPart
public "getToastSymbol"(): $ItemStack
public "getRemainingItems"(arg0: $ScribesTile$Type): $NonNullList<($ItemStack)>
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
get "spellPart"(): $AbstractSpellPart
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
export type $GlyphRecipe$Type = ($GlyphRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlyphRecipe_ = $GlyphRecipe$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$RitualBrazierBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TickableModBlock, $TickableModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$TickableModBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $RitualBrazierBlock extends $TickableModBlock {
static "shape": $VoxelShape
static readonly "LIT": $Property<(boolean)>
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualBrazierBlock$Type = ($RitualBrazierBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RitualBrazierBlock_ = $RitualBrazierBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/recipe/$SummonRitualRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$SummonRitualRecipe$MobSource, $SummonRitualRecipe$MobSource$Type} from "packages/com/hollingsworth/arsnouveau/api/recipe/$SummonRitualRecipe$MobSource"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$SummonRitualRecipe$WeightedMobType, $SummonRitualRecipe$WeightedMobType$Type} from "packages/com/hollingsworth/arsnouveau/api/recipe/$SummonRitualRecipe$WeightedMobType"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $SummonRitualRecipe implements $Recipe<($Container)> {
readonly "id": $ResourceLocation
readonly "catalyst": $Ingredient
readonly "mobSource": $SummonRitualRecipe$MobSource
readonly "count": integer
 "mobs": $ArrayList<($SummonRitualRecipe$WeightedMobType)>
readonly "mobTypes": $List<($SummonRitualRecipe$WeightedMobType)>

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $SummonRitualRecipe$MobSource$Type, arg3: integer, arg4: $ArrayList$Type<($SummonRitualRecipe$WeightedMobType$Type)>)
constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $SummonRitualRecipe$MobSource$Type, arg3: integer)

public "matches"(arg0: $List$Type<($ItemStack$Type)>): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "asRecipe"(): $JsonElement
public "getToastSymbol"(): $ItemStack
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
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
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
export type $SummonRitualRecipe$Type = ($SummonRitualRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SummonRitualRecipe_ = $SummonRitualRecipe$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$SourceBerryBush" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BonemealableBlock, $BonemealableBlock$Type} from "packages/net/minecraft/world/level/block/$BonemealableBlock"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BushBlock, $BushBlock$Type} from "packages/net/minecraft/world/level/block/$BushBlock"

export class $SourceBerryBush extends $BushBlock implements $BonemealableBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "isValidBonemealTarget"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): boolean
public "isBonemealSuccess"(arg0: $Level$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "isRandomlyTicking"(arg0: $BlockState$Type): boolean
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getBlockPathType"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Mob$Type): $BlockPathTypes
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SourceBerryBush$Type = ($SourceBerryBush);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SourceBerryBush_ = $SourceBerryBush$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/client/particle/$SparkleParticleType" {
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$ColoredDynamicTypeData, $ColoredDynamicTypeData$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$ColoredDynamicTypeData"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $SparkleParticleType extends $ParticleType<($ColoredDynamicTypeData)> {

constructor()

public "codec"(): $Codec<($ColoredDynamicTypeData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SparkleParticleType$Type = ($SparkleParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SparkleParticleType_ = $SparkleParticleType$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/item/inv/$InteractType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $InteractType extends $Enum<($InteractType)> {
static readonly "EXTRACT": $InteractType
static readonly "INSERT": $InteractType


public static "values"(): ($InteractType)[]
public static "valueOf"(arg0: string): $InteractType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InteractType$Type = (("extract") | ("insert")) | ($InteractType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InteractType_ = $InteractType$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/familiar/$AbstractFamiliarHolder" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$IFamiliar, $IFamiliar$Type} from "packages/com/hollingsworth/arsnouveau/api/familiar/$IFamiliar"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AbstractFamiliarHolder {
 "isEntity": $Predicate<($Entity)>

constructor(arg0: string, arg1: $Predicate$Type<($Entity$Type)>)
constructor(arg0: $ResourceLocation$Type, arg1: $Predicate$Type<($Entity$Type)>)

public "getBookDescription"(): string
public "getOutputItem"(): $ItemStack
public "getLangDescription"(): $Component
public "getLangName"(): $Component
public "getSummonEntity"(arg0: $Level$Type, arg1: $CompoundTag$Type): $IFamiliar
public "getBookName"(): string
public "getRegistryName"(): $ResourceLocation
get "bookDescription"(): string
get "outputItem"(): $ItemStack
get "langDescription"(): $Component
get "langName"(): $Component
get "bookName"(): string
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractFamiliarHolder$Type = ($AbstractFamiliarHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractFamiliarHolder_ = $AbstractFamiliarHolder$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$GhostWeave" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$MirrorWeave, $MirrorWeave$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$MirrorWeave"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $GhostWeave extends $MirrorWeave {
static readonly "LIGHT_LEVEL": $Property<(integer)>
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
constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GhostWeave$Type = ($GhostWeave);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GhostWeave_ = $GhostWeave$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/util/$SpellPartConfigUtil$AugmentCosts" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SpellPartConfigUtil$AugmentCosts {


public "getAugmentCost"(arg0: $ResourceLocation$Type, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellPartConfigUtil$AugmentCosts$Type = ($SpellPartConfigUtil$AugmentCosts);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellPartConfigUtil$AugmentCosts_ = $SpellPartConfigUtil$AugmentCosts$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/event/$FamiliarSummonEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$EntityEvent, $EntityEvent$Type} from "packages/net/minecraftforge/event/entity/$EntityEvent"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FamiliarSummonEvent extends $EntityEvent {
 "owner": $Entity

constructor()
constructor(arg0: $Entity$Type, arg1: $Entity$Type)

public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FamiliarSummonEvent$Type = ($FamiliarSummonEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FamiliarSummonEvent_ = $FamiliarSummonEvent$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/mixin/$ChatComponentAccessor" {
import {$GuiMessage, $GuiMessage$Type} from "packages/net/minecraft/client/$GuiMessage"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiMessage$Line, $GuiMessage$Line$Type} from "packages/net/minecraft/client/$GuiMessage$Line"

export interface $ChatComponentAccessor {

 "getTrimmedMessages"(): $List<($GuiMessage$Line)>
 "getRecentChat"(): $List<(string)>
 "getAllMessages"(): $List<($GuiMessage)>
}

export namespace $ChatComponentAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatComponentAccessor$Type = ($ChatComponentAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChatComponentAccessor_ = $ChatComponentAccessor$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/crafting/recipes/$DyeRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $DyeRecipe extends $ShapelessRecipe {
readonly "group": string
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $ItemStack$Type, arg3: $NonNullList$Type<($Ingredient$Type)>)

public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public static "asRecipe"(arg0: $Item$Type): $JsonElement
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyeRecipe$Type = ($DyeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DyeRecipe_ = $DyeRecipe$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/summon_charms/$BookwyrmCharm" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BookwyrmCharm extends $ModItem {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookwyrmCharm$Type = ($BookwyrmCharm);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookwyrmCharm_ = $BookwyrmCharm$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$RunicChalk" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RunicChalk extends $ModItem {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunicChalk$Type = ($RunicChalk);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RunicChalk_ = $RunicChalk$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/enchanting_apparatus/$EnchantmentRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EnchantmentRecipe, $EnchantmentRecipe$Type} from "packages/com/hollingsworth/arsnouveau/api/enchanting_apparatus/$EnchantmentRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $EnchantmentRecipe$Serializer implements $RecipeSerializer<($EnchantmentRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $EnchantmentRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $EnchantmentRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $EnchantmentRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $EnchantmentRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentRecipe$Serializer$Type = ($EnchantmentRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentRecipe$Serializer_ = $EnchantmentRecipe$Serializer$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/particle/$IParticleColor" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ParticleColor, $ParticleColor$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$ParticleColor"
import {$ITagSerializable, $ITagSerializable$Type} from "packages/com/hollingsworth/arsnouveau/api/nbt/$ITagSerializable"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IParticleColor extends $ITagSerializable, $Cloneable {

 "transition"(arg0: integer): $ParticleColor
 "getColor"(): integer
 "getRedInt"(): integer
 "getGreenInt"(): integer
 "getBlueInt"(): integer
 "getRed"(): float
 "getGreen"(): float
 "getBlue"(): float
 "getRegistryName"(): $ResourceLocation
 "serialize"(): $CompoundTag
}

export namespace $IParticleColor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IParticleColor$Type = ($IParticleColor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IParticleColor_ = $IParticleColor$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/tile/$BasicSpellTurretTile" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ITooltipProvider, $ITooltipProvider$Type} from "packages/com/hollingsworth/arsnouveau/api/client/$ITooltipProvider"
import {$TurretSpellCaster, $TurretSpellCaster$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$TurretSpellCaster"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITickable, $ITickable$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$ITickable"
import {$RegistryWrapper, $RegistryWrapper$Type} from "packages/com/hollingsworth/arsnouveau/common/util/$RegistryWrapper"
import {$ISpellCasterProvider, $ISpellCasterProvider$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$ISpellCasterProvider"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$ISpellCaster, $ISpellCaster$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$ISpellCaster"
import {$AnimationState, $AnimationState$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationState"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GeoBlockEntity, $GeoBlockEntity$Type} from "packages/software/bernie/geckolib/animatable/$GeoBlockEntity"
import {$IAnimationListener, $IAnimationListener$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$IAnimationListener"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ModdedTile, $ModdedTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$ModdedTile"
import {$PlayState, $PlayState$Type} from "packages/software/bernie/geckolib/core/object/$PlayState"

export class $BasicSpellTurretTile extends $ModdedTile implements $ITooltipProvider, $GeoBlockEntity, $IAnimationListener, $ITickable, $ISpellCasterProvider {
 "spellCaster": $TurretSpellCaster
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)
constructor(arg0: $RegistryWrapper$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "startAnimation"(arg0: integer): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "m_183515_"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "getTooltip"(arg0: $List$Type<($Component$Type)>): void
public "getSpellCaster"(): $ISpellCaster
public "getSpellCaster"(arg0: $CompoundTag$Type): $ISpellCaster
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "walkPredicate"(arg0: $AnimationState$Type<(any)>): $PlayState
public "getManaCost"(): integer
public "setAnimData"<D>(arg0: $SerializableDataTicket$Type<(D)>, arg1: D): void
public "getAnimData"<D>(arg0: $SerializableDataTicket$Type<(D)>): D
public "getTick"(arg0: any): double
public "triggerAnim"(arg0: string, arg1: string): void
public "tick"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): void
public "tick"(): void
public "getSpellCaster"(arg0: $ItemStack$Type): $ISpellCaster
public "getBoneResetTime"(): double
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "shouldPlayAnimsWhileGamePaused"(): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "spellCaster"(): $ISpellCaster
get "manaCost"(): integer
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicSpellTurretTile$Type = ($BasicSpellTurretTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicSpellTurretTile_ = $BasicSpellTurretTile$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$SpellBook" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RadialMenu, $RadialMenu$Type} from "packages/com/hollingsworth/arsnouveau/client/gui/radial_menu/$RadialMenu"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$IDyeable, $IDyeable$Type} from "packages/com/hollingsworth/arsnouveau/common/crafting/recipes/$IDyeable"
import {$ICasterTool, $ICasterTool$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$ICasterTool"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SpellTier, $SpellTier$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellTier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$RadialMenuSlot, $RadialMenuSlot$Type} from "packages/com/hollingsworth/arsnouveau/client/gui/radial_menu/$RadialMenuSlot"
import {$Spell, $Spell$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$Spell"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$ISpellCaster, $ISpellCaster$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$ISpellCaster"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$IRadialProvider, $IRadialProvider$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$IRadialProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpellBook extends $ModItem implements $GeoItem, $ICasterTool, $IDyeable, $IRadialProvider {
 "tier": $SpellTier
 "tooltip": $List<($Component)>
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $SpellTier$Type)
constructor(arg0: $Item$Properties$Type, arg1: $SpellTier$Type)

public "onRadialKeyPressed"(arg0: $ItemStack$Type, arg1: $Player$Type): void
public "getTier"(): $SpellTier
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "canBeDepleted"(): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "getRadialMenuProviderForSpellpart"(arg0: $ItemStack$Type): $RadialMenu<($AbstractSpellPart)>
public "getRadialMenuSlotsForSpellpart"(arg0: $ItemStack$Type): $List<($RadialMenuSlot<($AbstractSpellPart)>)>
public "onOpenBookMenuKeyPressed"(arg0: $ItemStack$Type, arg1: $Player$Type): void
public "canQuickCast"(): boolean
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "getSpellCaster"(): $ISpellCaster
public "getSpellCaster"(arg0: $CompoundTag$Type): $ISpellCaster
public "getSpellCaster"(arg0: $ItemStack$Type): $ISpellCaster
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public static "getId"(arg0: $ItemStack$Type): long
public "getTick"(arg0: any): double
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "isPerspectiveAware"(): boolean
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "isScribedSpellValid"(arg0: $ISpellCaster$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: $Spell$Type): boolean
public "onScribe"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $InteractionHand$Type, arg4: $ItemStack$Type): boolean
public "setSpell"(arg0: $ISpellCaster$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: $Spell$Type): boolean
public "sendSetMessage"(arg0: $Player$Type): void
public "shouldDisplay"(arg0: $ItemStack$Type): boolean
public "getInformation"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "sendInvalidMessage"(arg0: $Player$Type): void
public "onDye"(arg0: $ItemStack$Type, arg1: $DyeColor$Type): void
public "getDyeColor"(arg0: $ItemStack$Type): integer
public "forKey"(): integer
public "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public "onPreviousKeyPressed"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): void
public "onQuickCast"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type, arg2: $InteractionHand$Type, arg3: integer): void
public "onNextKeyPressed"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): void
public "getBoneResetTime"(): double
public "shouldPlayAnimsWhileGamePaused"(): boolean
get "tier"(): $SpellTier
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "spellCaster"(): $ISpellCaster
get "perspectiveAware"(): boolean
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellBook$Type = ($SpellBook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellBook_ = $SpellBook$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$ArcaneCore" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$ModBlock, $ModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$ModBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ArcaneCore extends $ModBlock implements $EntityBlock {
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArcaneCore$Type = ($ArcaneCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArcaneCore_ = $ArcaneCore$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$ScribesBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$TableBlock, $TableBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$TableBlock"
import {$ThreePartBlock, $ThreePartBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$ThreePartBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$PlayerInteractEvent$RightClickBlock, $PlayerInteractEvent$RightClickBlock$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$RightClickBlock"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $ScribesBlock extends $TableBlock {
static readonly "PART": $EnumProperty<($ThreePartBlock)>
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "rightClick"(arg0: $PlayerInteractEvent$RightClickBlock$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "tearDown"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScribesBlock$Type = ($ScribesBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScribesBlock_ = $ScribesBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$WarpScroll$WarpScrollData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemstackData, $ItemstackData$Type} from "packages/com/hollingsworth/arsnouveau/api/nbt/$ItemstackData"
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $WarpScroll$WarpScrollData extends $ItemstackData {
 "stack": $ItemStack

constructor(arg0: $ItemStack$Type)

public static "get"(arg0: $ItemStack$Type): $WarpScroll$WarpScrollData
public "copyFrom"(arg0: $WarpScroll$WarpScrollData$Type): void
public "isValid"(): boolean
public "getDimension"(): string
public "setDimension"(arg0: string): void
public "canTeleportWithDim"(arg0: string): boolean
public "canTeleportWithDim"(arg0: $Level$Type): boolean
public "setData"(arg0: $BlockPos$Type, arg1: string, arg2: $Vec2$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "setRotation"(arg0: $Vec2$Type): void
public "setPos"(arg0: $BlockPos$Type): void
public "getRotation"(): $Vec2
public "getPos"(): $BlockPos
public "getTagString"(): string
get "valid"(): boolean
get "dimension"(): string
set "dimension"(value: string)
set "rotation"(value: $Vec2$Type)
set "pos"(value: $BlockPos$Type)
get "rotation"(): $Vec2
get "pos"(): $BlockPos
get "tagString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WarpScroll$WarpScrollData$Type = ($WarpScroll$WarpScrollData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WarpScroll$WarpScrollData_ = $WarpScroll$WarpScrollData$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/enchanting_apparatus/$EnchantmentRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EnchantingApparatusTile, $EnchantingApparatusTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$EnchantingApparatusTile"
import {$EnchantingApparatusRecipe, $EnchantingApparatusRecipe$Type} from "packages/com/hollingsworth/arsnouveau/api/enchanting_apparatus/$EnchantingApparatusRecipe"

export class $EnchantmentRecipe extends $EnchantingApparatusRecipe {
 "enchantment": $Enchantment
 "enchantLevel": integer
 "reagent": $Ingredient
 "result": $ItemStack
 "pedestalItems": $List<($Ingredient)>
 "id": $ResourceLocation
 "sourceCost": integer
 "keepNbtOfReagent": boolean

constructor(arg0: $List$Type<($Ingredient$Type)>, arg1: $Enchantment$Type, arg2: integer, arg3: integer)

public "getResult"(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type, arg2: $EnchantingApparatusTile$Type): $ItemStack
public "isMatch"(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type, arg2: $EnchantingApparatusTile$Type, arg3: $Player$Type): boolean
public "assemble"(arg0: $EnchantingApparatusTile$Type, arg1: $RegistryAccess$Type): $ItemStack
public "excludeJei"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "asRecipe"(): $JsonElement
public "doesReagentMatch"(arg0: $ItemStack$Type): boolean
public "doesReagentMatch"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentRecipe$Type = ($EnchantmentRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentRecipe_ = $EnchantmentRecipe$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/recipe/$BuddingConversionRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $BuddingConversionRecipe extends $Record implements $Recipe<($Container)> {

constructor(id: $ResourceLocation$Type, input: $Block$Type, result: $Block$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(arg0: $BlockState$Type): boolean
public "result"(): $Block
public "id"(): $ResourceLocation
public "input"(): $Block
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "asRecipe"(): $JsonElement
public "getToastSymbol"(): $ItemStack
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
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
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
export type $BuddingConversionRecipe$Type = ($BuddingConversionRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuddingConversionRecipe_ = $BuddingConversionRecipe$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/client/$IDisplayMana" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IDisplayMana {

 "shouldDisplay"(arg0: $ItemStack$Type): boolean
}

export namespace $IDisplayMana {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDisplayMana$Type = ($IDisplayMana);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDisplayMana_ = $IDisplayMana$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$WhirlisprigFlower" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$SummonBlock, $SummonBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$SummonBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $WhirlisprigFlower extends $SummonBlock implements $SimpleWaterloggedBlock {
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
constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WhirlisprigFlower$Type = ($WhirlisprigFlower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WhirlisprigFlower_ = $WhirlisprigFlower$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/enchanting_apparatus/$ReactiveEnchantmentRecipe" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EnchantingApparatusTile, $EnchantingApparatusTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$EnchantingApparatusTile"
import {$EnchantmentRecipe, $EnchantmentRecipe$Type} from "packages/com/hollingsworth/arsnouveau/api/enchanting_apparatus/$EnchantmentRecipe"

export class $ReactiveEnchantmentRecipe extends $EnchantmentRecipe {
 "enchantment": $Enchantment
 "enchantLevel": integer
 "reagent": $Ingredient
 "result": $ItemStack
 "pedestalItems": $List<($Ingredient)>
 "id": $ResourceLocation
 "sourceCost": integer
 "keepNbtOfReagent": boolean

constructor(arg0: $List$Type<($Ingredient$Type)>, arg1: integer)

public static "getParchment"(arg0: $List$Type<($ItemStack$Type)>): $ItemStack
public "getResult"(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type, arg2: $EnchantingApparatusTile$Type): $ItemStack
public "isMatch"(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type, arg2: $EnchantingApparatusTile$Type, arg3: $Player$Type): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "asRecipe"(): $JsonElement
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactiveEnchantmentRecipe$Type = ($ReactiveEnchantmentRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactiveEnchantmentRecipe_ = $ReactiveEnchantmentRecipe$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/spell/wrapped_caster/$IWrappedCaster" {
import {$FilterableItemHandler, $FilterableItemHandler$Type} from "packages/com/hollingsworth/arsnouveau/api/item/inv/$FilterableItemHandler"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$SpellContext$CasterType, $SpellContext$CasterType$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext$CasterType"
import {$InventoryManager, $InventoryManager$Type} from "packages/com/hollingsworth/arsnouveau/api/item/inv/$InventoryManager"

export interface $IWrappedCaster {

 "getPosition"(): $Vec3
 "getInventory"(): $List<($FilterableItemHandler)>
 "getCasterType"(): $SpellContext$CasterType
 "getInvManager"(): $InventoryManager
 "getNearbyBlockEntity"(arg0: $Predicate$Type<($BlockEntity$Type)>): $BlockEntity
 "getFacingDirection"(): $Direction

(): $Vec3
}

export namespace $IWrappedCaster {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWrappedCaster$Type = ($IWrappedCaster);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWrappedCaster_ = $IWrappedCaster$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$SourceJar" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$SourceBlock, $SourceBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$SourceBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $SourceJar extends $SourceBlock implements $SimpleWaterloggedBlock {
static readonly "fill": $Property<(integer)>
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
constructor(arg0: $BlockBehaviour$Properties$Type, arg1: string)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
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
export type $SourceJar$Type = ($SourceJar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SourceJar_ = $SourceJar$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$ModItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModItem extends $Item {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
constructor()

public "withTooltip"(arg0: string): $ModItem
public "withTooltip"(arg0: $Component$Type): $ModItem
public "withRarity"(arg0: $Rarity$Type): $ModItem
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getRarity"(arg0: $ItemStack$Type): $Rarity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModItem$Type = ($ModItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModItem_ = $ModItem$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$DowsingRod" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DowsingRod extends $ModItem {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
constructor()

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DowsingRod$Type = ($DowsingRod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DowsingRod_ = $DowsingRod$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$ScryerCrystal" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Position, $Position$Type} from "packages/net/minecraft/core/$Position"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TickableModBlock, $TickableModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$TickableModBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockSource, $BlockSource$Type} from "packages/net/minecraft/core/$BlockSource"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ScryerCrystal extends $TickableModBlock {
static readonly "FACING": $DirectionProperty
static readonly "BEING_VIEWED": $BooleanProperty
static "SOUTH": $VoxelShape
static "NORTH": $VoxelShape
static "EAST": $VoxelShape
static "WEST": $VoxelShape
static "UP": $VoxelShape
static "DOWN": $VoxelShape
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
constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public static "getDispensePosition"(arg0: $BlockSource$Type, arg1: $Direction$Type): $Position
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScryerCrystal$Type = ($ScryerCrystal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScryerCrystal_ = $ScryerCrystal$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/item/inv/$FilterableItemHandler" {
import {$InteractType, $InteractType$Type} from "packages/com/hollingsworth/arsnouveau/api/item/inv/$InteractType"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$InteractResult, $InteractResult$Type} from "packages/com/hollingsworth/arsnouveau/api/item/inv/$InteractResult"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemScroll$SortPref, $ItemScroll$SortPref$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ItemScroll$SortPref"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FilterableItemHandler {

constructor(arg0: $IItemHandler$Type, arg1: $List$Type<($Function$Type<($ItemStack$Type), ($ItemScroll$SortPref$Type)>)>, arg2: $Supplier$Type<($BlockPos$Type)>)
constructor(arg0: $IItemHandler$Type, arg1: $List$Type<($Function$Type<($ItemStack$Type), ($ItemScroll$SortPref$Type)>)>)
constructor(arg0: $IItemHandler$Type)

public "getHandler"(): $IItemHandler
public "getFilters"(): $List<($Function<($ItemStack), ($ItemScroll$SortPref)>)>
public "addFilterScroll"(arg0: $ItemStack$Type): boolean
public "canInsert"(arg0: $ItemStack$Type): $InteractResult
public "getPos"(): $BlockPos
public "canExtract"(arg0: $ItemStack$Type): $InteractResult
public "getHighestPreference"(arg0: $ItemStack$Type): $ItemScroll$SortPref
public "canInteractFor"(arg0: $ItemStack$Type, arg1: $InteractType$Type): $InteractResult
get "handler"(): $IItemHandler
get "filters"(): $List<($Function<($ItemStack), ($ItemScroll$SortPref)>)>
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterableItemHandler$Type = ($FilterableItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterableItemHandler_ = $FilterableItemHandler$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/item/$IRadialProvider" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IRadialProvider {

 "forKey"(): integer
 "onRadialKeyPressed"(arg0: $ItemStack$Type, arg1: $Player$Type): void

(): integer
}

export namespace $IRadialProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRadialProvider$Type = ($IRadialProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRadialProvider_ = $IRadialProvider$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$MycelialSourcelinkBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$SourcelinkBlock, $SourcelinkBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$SourcelinkBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MycelialSourcelinkBlock extends $SourcelinkBlock {
static readonly "shape": $VoxelShape
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
constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MycelialSourcelinkBlock$Type = ($MycelialSourcelinkBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MycelialSourcelinkBlock_ = $MycelialSourcelinkBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/event/$ITimedEvent" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TickEvent, $TickEvent$Type} from "packages/net/minecraftforge/event/$TickEvent"

export interface $ITimedEvent {

 "getID"(): string
 "isExpired"(): boolean
 "tick"(arg0: boolean): void
 "serialize"(arg0: $CompoundTag$Type): $CompoundTag
 "tickEvent"(arg0: $TickEvent$Type): void
 "onPacketHandled"(): void
 "onServerStopping"(): void
}

export namespace $ITimedEvent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITimedEvent$Type = ($ITimedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITimedEvent_ = $ITimedEvent$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$AnnotatedCodex" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnnotatedCodex extends $ModItem {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getUnlockLevelCost"(arg0: $Collection$Type<($AbstractSpellPart$Type)>): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnotatedCodex$Type = ($AnnotatedCodex);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnotatedCodex_ = $AnnotatedCodex$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$SpellArrow" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AbstractAugment, $AbstractAugment$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractAugment"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Spell, $Spell$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$Spell"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AbstractArrow, $AbstractArrow$Type} from "packages/net/minecraft/world/entity/projectile/$AbstractArrow"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArrowItem, $ArrowItem$Type} from "packages/net/minecraft/world/item/$ArrowItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpellArrow extends $ArrowItem {
 "part": $AbstractSpellPart
 "numParts": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $AbstractAugment$Type, arg1: integer)

public "createArrow"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type): $AbstractArrow
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "modifySpell"(arg0: $Spell$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellArrow$Type = ($SpellArrow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellArrow_ = $SpellArrow$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/crafting/recipes/$CrushRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$CrushRecipe, $CrushRecipe$Type} from "packages/com/hollingsworth/arsnouveau/common/crafting/recipes/$CrushRecipe"

export class $CrushRecipe$Serializer implements $RecipeSerializer<($CrushRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $CrushRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $CrushRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $CrushRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CrushRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrushRecipe$Serializer$Type = ($CrushRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrushRecipe$Serializer_ = $CrushRecipe$Serializer$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/summon_charms/$WhirlisprigCharm" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$SummoningTile, $SummoningTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$SummoningTile"
import {$AbstractSummonCharm, $AbstractSummonCharm$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$AbstractSummonCharm"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WhirlisprigCharm extends $AbstractSummonCharm {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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

public "useOnBlock"(arg0: $UseOnContext$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $InteractionResult
public "useOnSummonTile"(arg0: $UseOnContext$Type, arg1: $Level$Type, arg2: $SummoningTile$Type, arg3: $BlockPos$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WhirlisprigCharm$Type = ($WhirlisprigCharm);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WhirlisprigCharm_ = $WhirlisprigCharm$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/camera/$ANIChunkStorageProvider" {
import {$ClientChunkCache$Storage, $ClientChunkCache$Storage$Type} from "packages/net/minecraft/client/multiplayer/$ClientChunkCache$Storage"

export interface $ANIChunkStorageProvider {

 "ANnewStorage"(arg0: integer): $ClientChunkCache$Storage
}

export namespace $ANIChunkStorageProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ANIChunkStorageProvider$Type = ($ANIChunkStorageProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ANIChunkStorageProvider_ = $ANIChunkStorageProvider$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/summon_charms/$AmethystGolemCharm" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$SummoningTile, $SummoningTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$SummoningTile"
import {$AbstractSummonCharm, $AbstractSummonCharm$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$AbstractSummonCharm"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AmethystGolemCharm extends $AbstractSummonCharm {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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

public "useOnBlock"(arg0: $UseOnContext$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $InteractionResult
public "useOnSummonTile"(arg0: $UseOnContext$Type, arg1: $Level$Type, arg2: $SummoningTile$Type, arg3: $BlockPos$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmethystGolemCharm$Type = ($AmethystGolemCharm);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmethystGolemCharm_ = $AmethystGolemCharm$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$DrygmyStone" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$SummonBlock, $SummonBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$SummonBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $DrygmyStone extends $SummonBlock implements $SimpleWaterloggedBlock {
static "shape": $VoxelShape
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrygmyStone$Type = ($DrygmyStone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrygmyStone_ = $DrygmyStone$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$EnchantingApparatusBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TickableModBlock, $TickableModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$TickableModBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $EnchantingApparatusBlock extends $TickableModBlock {
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
constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantingApparatusBlock$Type = ($EnchantingApparatusBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantingApparatusBlock_ = $EnchantingApparatusBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/client/gui/radial_menu/$RadialMenuSlot" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"

export class $RadialMenuSlot<T> extends $Record {

constructor(arg0: string, arg1: T)
constructor(slotName: string, primarySlotIcon: T, secondarySlotIcons: $List$Type<(T)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "primarySlotIcon"(): T
public "slotName"(): string
public "secondarySlotIcons"(): $List<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadialMenuSlot$Type<T> = ($RadialMenuSlot<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadialMenuSlot_<T> = $RadialMenuSlot$Type<(T)>;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/spell/$CancelReason" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $CancelReason extends $Record {
static "FILTER_FAILED": $CancelReason
static "NEW_CONTEXT": $CancelReason
static "TERMINATED": $CancelReason

constructor(id: $ResourceLocation$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CancelReason$Type = ($CancelReason);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CancelReason_ = $CancelReason$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/recipe/$DispelEntityRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$LootItemCondition, $LootItemCondition$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $DispelEntityRecipe extends $Record implements $Recipe<($Container)> {

constructor(id: $ResourceLocation$Type, entity: $EntityType$Type<(any)>, lootTable: $ResourceLocation$Type, conditions: ($LootItemCondition$Type)[])

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(arg0: $LivingEntity$Type, arg1: $Entity$Type): boolean
public "result"(arg0: $LivingEntity$Type, arg1: $Entity$Type): $List<($ItemStack)>
public "id"(): $ResourceLocation
public "entity"(): $EntityType<(any)>
public "conditions"(): ($LootItemCondition)[]
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "lootTable"(): $ResourceLocation
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "asRecipe"(): $JsonElement
public "getToastSymbol"(): $ItemStack
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
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
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
export type $DispelEntityRecipe$Type = ($DispelEntityRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DispelEntityRecipe_ = $DispelEntityRecipe$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$Debug" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Debug extends $ModItem {
static readonly "DEBUG_LOG": $Path
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Debug$Type = ($Debug);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Debug_ = $Debug$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/spell/$ILightable" {
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SpellStats, $SpellStats$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ILightable {

 "onLight"(arg0: $HitResult$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: $SpellStats$Type, arg4: $SpellContext$Type): void

(arg0: $HitResult$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: $SpellStats$Type, arg4: $SpellContext$Type): void
}

export namespace $ILightable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILightable$Type = ($ILightable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILightable_ = $ILightable$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/client/particle/$ColorPos" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ParticleColor, $ParticleColor$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$ParticleColor"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ColorPos {
readonly "color": $ParticleColor
readonly "pos": $Vec3

constructor(arg0: $Vec3$Type, arg1: $ParticleColor$Type)
constructor(arg0: $Vec3$Type)

public "toTag"(): $CompoundTag
public static "centered"(arg0: $BlockPos$Type): $ColorPos
public static "centered"(arg0: $BlockPos$Type, arg1: $ParticleColor$Type): $ColorPos
public static "fromTag"(arg0: $CompoundTag$Type): $ColorPos
public static "centeredAbove"(arg0: $BlockPos$Type): $ColorPos
public static "centeredAbove"(arg0: $BlockPos$Type, arg1: $ParticleColor$Type): $ColorPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorPos$Type = ($ColorPos);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorPos_ = $ColorPos$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/potions/$ImmolateEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $ImmolateEffect extends $MobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmolateEffect$Type = ($ImmolateEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmolateEffect_ = $ImmolateEffect$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/client/particle/$HelixParticleTypeData" {
import {$ParticleColor, $ParticleColor$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$ParticleColor"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ColorParticleTypeData, $ColorParticleTypeData$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$ColorParticleTypeData"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $HelixParticleTypeData extends $ColorParticleTypeData {
static readonly "CODEC": $Codec<($HelixParticleTypeData)>
 "color": $ParticleColor
 "disableDepthTest": boolean
 "size": float
 "alpha": float
 "age": integer

constructor(arg0: $ParticleType$Type<($HelixParticleTypeData$Type)>, arg1: $ParticleColor$Type, arg2: boolean, arg3: float, arg4: float, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float)
constructor(arg0: float, arg1: float, arg2: float, arg3: boolean, arg4: float, arg5: float, arg6: integer, arg7: float, arg8: float, arg9: float, arg10: float)
constructor(arg0: $ParticleType$Type<($HelixParticleTypeData$Type)>, arg1: $ParticleColor$Type, arg2: boolean, arg3: float, arg4: float, arg5: integer)
constructor(arg0: float, arg1: float, arg2: float, arg3: boolean, arg4: float, arg5: float, arg6: integer)
constructor(arg0: $ParticleColor$Type, arg1: boolean, arg2: float, arg3: float, arg4: integer)
constructor(arg0: $ParticleType$Type<($HelixParticleTypeData$Type)>, arg1: $ParticleColor$Type, arg2: boolean, arg3: float, arg4: float, arg5: float, arg6: float)

public "writeToString"(): string
public "writeToNetwork"(arg0: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HelixParticleTypeData$Type = ($HelixParticleTypeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HelixParticleTypeData_ = $HelixParticleTypeData$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/crafting/recipes/$CrushRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$CrushRecipe$CrushOutput, $CrushRecipe$CrushOutput$Type} from "packages/com/hollingsworth/arsnouveau/common/crafting/recipes/$CrushRecipe$CrushOutput"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $CrushRecipe implements $Recipe<($Container)> {
readonly "input": $Ingredient
readonly "outputs": $List<($CrushRecipe$CrushOutput)>
readonly "id": $ResourceLocation

constructor(arg0: string, arg1: $Ingredient$Type)
constructor(arg0: string, arg1: $Ingredient$Type, arg2: $List$Type<($CrushRecipe$CrushOutput$Type)>, arg3: boolean)
constructor(arg0: string, arg1: $Ingredient$Type, arg2: $List$Type<($CrushRecipe$CrushOutput$Type)>)
/**
 * 
 * @deprecated
 */
constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $List$Type<($CrushRecipe$CrushOutput$Type)>)
constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $List$Type<($CrushRecipe$CrushOutput$Type)>, arg3: boolean)

public "matches"(arg0: $ItemStack$Type, arg1: $Level$Type): boolean
public "shouldSkipBlockPlace"(): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "skipBlockPlace"(): $CrushRecipe
public "withItems"(arg0: $ItemStack$Type): $CrushRecipe
public "withItems"(arg0: $ItemStack$Type, arg1: float): $CrushRecipe
public "getRolledOutputs"(arg0: $RandomSource$Type): $List<($ItemStack)>
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "asRecipe"(): $JsonElement
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
export type $CrushRecipe$Type = ($CrushRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrushRecipe_ = $CrushRecipe$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/curios/$BeltOfUnstableGifts" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArsNouveauCurio, $ArsNouveauCurio$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$ArsNouveauCurio"

export class $BeltOfUnstableGifts extends $ArsNouveauCurio {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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

public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeltOfUnstableGifts$Type = ($BeltOfUnstableGifts);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeltOfUnstableGifts_ = $BeltOfUnstableGifts$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$MagicFire" {
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
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BaseFireBlock, $BaseFireBlock$Type} from "packages/net/minecraft/world/level/block/$BaseFireBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $MagicFire extends $BaseFireBlock {
static readonly "MAX_AGE": integer
static readonly "AGE": $IntegerProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "UP": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: float)

public "canCatchFire"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
public static "getState"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicFire$Type = ($MagicFire);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicFire_ = $MagicFire$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/tomes/$CasterTomeData" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$ParticleColor, $ParticleColor$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$ParticleColor"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Spell, $Spell$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$Spell"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConfiguredSpellSound, $ConfiguredSpellSound$Type} from "packages/com/hollingsworth/arsnouveau/api/sound/$ConfiguredSpellSound"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $CasterTomeData implements $Recipe<($Container)> {
 "particleColor": $ParticleColor

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $List$Type<($ResourceLocation$Type)>, arg3: $ResourceLocation$Type, arg4: string, arg5: $CompoundTag$Type, arg6: $ConfiguredSpellSound$Type)

public "toJson"(): $JsonElement
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public static "makeTome"(arg0: $Item$Type, arg1: string, arg2: $Spell$Type, arg3: string): $ItemStack
public "getToastSymbol"(): $ItemStack
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
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
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
export type $CasterTomeData$Type = ($CasterTomeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CasterTomeData_ = $CasterTomeData$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext$CasterType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SpellContext$CasterType {
static readonly "RUNE": $SpellContext$CasterType
static readonly "TURRET": $SpellContext$CasterType
static readonly "ENTITY": $SpellContext$CasterType
static readonly "OTHER": $SpellContext$CasterType
static readonly "LIVING_ENTITY": $SpellContext$CasterType
static readonly "PLAYER": $SpellContext$CasterType
 "id": string

constructor(arg0: string)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellContext$CasterType$Type = ($SpellContext$CasterType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellContext$CasterType_ = $SpellContext$CasterType$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/enchanting_apparatus/$ITextOutput" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export interface $ITextOutput {

 "getOutputComponent"(): $Component

(): $Component
}

export namespace $ITextOutput {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITextOutput$Type = ($ITextOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITextOutput_ = $ITextOutput$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/enchantment/$ReactiveEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $ReactiveEnchantment extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "isAllowedOnBooks"(): boolean
public "canEnchant"(arg0: $ItemStack$Type): boolean
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
get "maxLevel"(): integer
get "allowedOnBooks"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactiveEnchantment$Type = ($ReactiveEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactiveEnchantment_ = $ReactiveEnchantment$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/curios/$BeltOfLevitation" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArsNouveauCurio, $ArsNouveauCurio$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$ArsNouveauCurio"

export class $BeltOfLevitation extends $ArsNouveauCurio {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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

public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeltOfLevitation$Type = ($BeltOfLevitation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeltOfLevitation_ = $BeltOfLevitation$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$AgronomicSourcelinkBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$SourcelinkBlock, $SourcelinkBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$SourcelinkBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AgronomicSourcelinkBlock extends $SourcelinkBlock {
static readonly "shape": $VoxelShape
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AgronomicSourcelinkBlock$Type = ($AgronomicSourcelinkBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AgronomicSourcelinkBlock_ = $AgronomicSourcelinkBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$VitalicSourcelinkBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$SourcelinkBlock, $SourcelinkBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$SourcelinkBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $VitalicSourcelinkBlock extends $SourcelinkBlock {
static readonly "shape": $VoxelShape
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
constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VitalicSourcelinkBlock$Type = ($VitalicSourcelinkBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VitalicSourcelinkBlock_ = $VitalicSourcelinkBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/block/$IPedestalMachine" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IPedestalMachine {

 "lightPedestal"(arg0: $Level$Type): void
 "pedestalList"(arg0: $BlockPos$Type, arg1: integer, arg2: $Level$Type): $List<($BlockPos)>

(arg0: $Level$Type): void
}

export namespace $IPedestalMachine {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPedestalMachine$Type = ($IPedestalMachine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPedestalMachine_ = $IPedestalMachine$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/mixin/structure/$StructureProcessorAccessor" {
import {$StructureProcessorType, $StructureProcessorType$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureProcessorType"

export interface $StructureProcessorAccessor {

 "callGetType"(): $StructureProcessorType<(any)>

(): $StructureProcessorType<(any)>
}

export namespace $StructureProcessorAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureProcessorAccessor$Type = ($StructureProcessorAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureProcessorAccessor_ = $StructureProcessorAccessor$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$PotionDiffuserBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TickableModBlock, $TickableModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$TickableModBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PotionDiffuserBlock extends $TickableModBlock {
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionDiffuserBlock$Type = ($PotionDiffuserBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionDiffuserBlock_ = $PotionDiffuserBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$RelayCollectorBlock" {
import {$Relay, $Relay$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$Relay"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $RelayCollectorBlock extends $Relay {
static readonly "shape": $VoxelShape
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelayCollectorBlock$Type = ($RelayCollectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelayCollectorBlock_ = $RelayCollectorBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/client/particle/$ColoredDynamicTypeData" {
import {$ParticleColor, $ParticleColor$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$ParticleColor"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $ColoredDynamicTypeData implements $ParticleOptions {
 "color": $ParticleColor
static readonly "CODEC": $Codec<($ColoredDynamicTypeData)>

constructor(arg0: $ParticleType$Type<($ColoredDynamicTypeData$Type)>, arg1: $ParticleColor$Type, arg2: float, arg3: integer)
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: integer)

public "writeToString"(): string
public "writeToNetwork"(arg0: $FriendlyByteBuf$Type): void
public "getType"(): $ParticleType<(any)>
get "type"(): $ParticleType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColoredDynamicTypeData$Type = ($ColoredDynamicTypeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColoredDynamicTypeData_ = $ColoredDynamicTypeData$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$WixieCauldron" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SummonBlock, $SummonBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$SummonBlock"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $WixieCauldron extends $SummonBlock {
static readonly "FILLED": $BooleanProperty
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WixieCauldron$Type = ($WixieCauldron);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WixieCauldron_ = $WixieCauldron$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$SpellParchment" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICasterTool, $ICasterTool$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$ICasterTool"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$Spell, $Spell$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$Spell"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ISpellCaster, $ISpellCaster$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$ISpellCaster"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpellParchment extends $ModItem implements $ICasterTool {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "isScribedSpellValid"(arg0: $ISpellCaster$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: $Spell$Type): boolean
public "onScribe"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $InteractionHand$Type, arg4: $ItemStack$Type): boolean
public "setSpell"(arg0: $ISpellCaster$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: $Spell$Type): boolean
public "sendSetMessage"(arg0: $Player$Type): void
public "shouldDisplay"(arg0: $ItemStack$Type): boolean
public "getInformation"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "sendInvalidMessage"(arg0: $Player$Type): void
public "getSpellCaster"(arg0: $CompoundTag$Type): $ISpellCaster
public "getSpellCaster"(): $ISpellCaster
public "getSpellCaster"(arg0: $ItemStack$Type): $ISpellCaster
public "onPreviousKeyPressed"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): void
public "onOpenBookMenuKeyPressed"(arg0: $ItemStack$Type, arg1: $Player$Type): void
/**
 * 
 * @deprecated
 */
public "canQuickCast"(): boolean
public "onQuickCast"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type, arg2: $InteractionHand$Type, arg3: integer): void
public "onNextKeyPressed"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): void
get "spellCaster"(): $ISpellCaster
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellParchment$Type = ($SpellParchment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellParchment_ = $SpellParchment$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/entity/$EntityProjectileSpell" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$Stack, $Stack$Type} from "packages/java/util/$Stack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IEntityAdditionalSpawnData, $IEntityAdditionalSpawnData$Type} from "packages/net/minecraftforge/entity/$IEntityAdditionalSpawnData"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ClientboundAddEntityPacket, $ClientboundAddEntityPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundAddEntityPacket"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$SpellResolver, $SpellResolver$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellResolver"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$ColoredProjectile, $ColoredProjectile$Type} from "packages/com/hollingsworth/arsnouveau/common/entity/$ColoredProjectile"

export class $EntityProjectileSpell extends $ColoredProjectile implements $IEntityAdditionalSpawnData {
 "age": integer
 "spellResolver": $SpellResolver
 "pierceLeft": integer
 "numSensitive": integer
 "isNoGravity": boolean
 "canTraversePortals": boolean
 "prismRedirect": integer
static readonly "OWNER_ID": $EntityDataAccessor<(integer)>
/**
 * 
 * @deprecated
 */
 "expireTime": integer
 "hitList": $Set<($BlockPos)>
static readonly "RED": $EntityDataAccessor<(integer)>
static readonly "GREEN": $EntityDataAccessor<(integer)>
static readonly "BLUE": $EntityDataAccessor<(integer)>
static readonly "PARTICLE_TAG": $EntityDataAccessor<($CompoundTag)>
 "rainbowStartTick": integer
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

constructor(arg0: $Level$Type, arg1: double, arg2: double, arg3: double)
constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type, arg2: $SpellResolver$Type)
constructor(arg0: $Level$Type, arg1: $SpellResolver$Type)
constructor(arg0: $Level$Type, arg1: $LivingEntity$Type)
constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)
constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type, arg2: double, arg3: double, arg4: double)
constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type, arg2: $LivingEntity$Type)

public "getExpirationTime"(): integer
public "m_7378_"(arg0: $CompoundTag$Type): void
public "m_7380_"(arg0: $CompoundTag$Type): void
public "getEntityType"(): $EntityType<(any)>
public "getAddEntityPacket"(): $Packet<($ClientGamePacketListener)>
public "bounce"(arg0: $BlockHitResult$Type): void
public "setRemoved"(arg0: $Entity$RemovalReason$Type): void
public "writeSpawnData"(arg0: $FriendlyByteBuf$Type): void
public "readSpawnData"(arg0: $FriendlyByteBuf$Type): void
public "isNoGravity"(): boolean
public "transformHitResult"(arg0: $HitResult$Type): $HitResult
public "setOwner"(arg0: $Entity$Type): void
public "shoot"(arg0: double, arg1: double, arg2: double, arg3: float, arg4: float): void
public "canTraversePortals"(): boolean
public "getParticleDelay"(): integer
public "traceAnyHit"(arg0: $HitResult$Type, arg1: $Vec3$Type, arg2: $Vec3$Type): void
public "getNextHitPosition"(): $Vec3
public "canBounce"(): boolean
public "playParticles"(): void
public "tickNextPosition"(): void
public "setGravity"(arg0: boolean): $EntityProjectileSpell
public "tick"(): void
public "recreateFromPacket"(arg0: $ClientboundAddEntityPacket$Type): void
public "shoot"(arg0: $Entity$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
public "getHitResult"(): $HitResult
get "expirationTime"(): integer
get "entityType"(): $EntityType<(any)>
get "addEntityPacket"(): $Packet<($ClientGamePacketListener)>
set "removed"(value: $Entity$RemovalReason$Type)
get "noGravity"(): boolean
set "owner"(value: $Entity$Type)
get "particleDelay"(): integer
get "nextHitPosition"(): $Vec3
set "gravity"(value: boolean)
get "hitResult"(): $HitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityProjectileSpell$Type = ($EntityProjectileSpell);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityProjectileSpell_ = $EntityProjectileSpell$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$EnchantersSword" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ICasterTool, $ICasterTool$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$ICasterTool"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Spell, $Spell$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$Spell"
import {$IManaDiscountEquipment, $IManaDiscountEquipment$Type} from "packages/com/hollingsworth/arsnouveau/api/mana/$IManaDiscountEquipment"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$ISpellCaster, $ISpellCaster$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$ISpellCaster"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnchantersSword extends $SwordItem implements $ICasterTool, $GeoItem, $IManaDiscountEquipment {
 "factory": $AnimatableInstanceCache
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

constructor(arg0: $Tier$Type, arg1: integer, arg2: float)
constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public "getManaDiscount"(arg0: $ItemStack$Type, arg1: $Spell$Type): integer
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isScribedSpellValid"(arg0: $ISpellCaster$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: $Spell$Type): boolean
public "setSpell"(arg0: $ISpellCaster$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: $Spell$Type): boolean
public "sendInvalidMessage"(arg0: $Player$Type): void
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "onScribe"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $InteractionHand$Type, arg4: $ItemStack$Type): boolean
public "sendSetMessage"(arg0: $Player$Type): void
public "shouldDisplay"(arg0: $ItemStack$Type): boolean
public "getInformation"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getSpellCaster"(arg0: $CompoundTag$Type): $ISpellCaster
public "getSpellCaster"(): $ISpellCaster
public "getSpellCaster"(arg0: $ItemStack$Type): $ISpellCaster
public static "getId"(arg0: $ItemStack$Type): long
public "getTick"(arg0: any): double
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "isPerspectiveAware"(): boolean
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "getManaDiscount"(arg0: $ItemStack$Type): integer
public "onPreviousKeyPressed"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): void
public "onOpenBookMenuKeyPressed"(arg0: $ItemStack$Type, arg1: $Player$Type): void
/**
 * 
 * @deprecated
 */
public "canQuickCast"(): boolean
public "onQuickCast"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type, arg2: $InteractionHand$Type, arg3: integer): void
public "onNextKeyPressed"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): void
public "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public "getBoneResetTime"(): double
public "shouldPlayAnimsWhileGamePaused"(): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "spellCaster"(): $ISpellCaster
get "perspectiveAware"(): boolean
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantersSword$Type = ($EnchantersSword);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantersSword_ = $EnchantersSword$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/tomes/$CasterTomeData$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$CasterTomeData, $CasterTomeData$Type} from "packages/com/hollingsworth/arsnouveau/common/tomes/$CasterTomeData"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CasterTomeData$Serializer implements $RecipeSerializer<($CasterTomeData)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $CasterTomeData
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $CasterTomeData
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $CasterTomeData$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CasterTomeData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CasterTomeData$Serializer$Type = ($CasterTomeData$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CasterTomeData$Serializer_ = $CasterTomeData$Serializer$Type;
}}
declare module "packages/com/hollingsworth/ars_creo/common/block/$StarbuncleWheelTile" {
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$GeneratingKineticBlockEntity, $GeneratingKineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$GeneratingKineticBlockEntity"
import {$GeoBlockEntity, $GeoBlockEntity$Type} from "packages/software/bernie/geckolib/animatable/$GeoBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $StarbuncleWheelTile extends $GeneratingKineticBlockEntity implements $GeoBlockEntity {
 "reActivateSource": boolean
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "lazyTick"(): void
public "getGeneratedSpeed"(): float
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "setAnimData"<D>(arg0: $SerializableDataTicket$Type<(D)>, arg1: D): void
public "getAnimData"<D>(arg0: $SerializableDataTicket$Type<(D)>): D
public "getTick"(arg0: any): double
public "triggerAnim"(arg0: string, arg1: string): void
public "getBoneResetTime"(): double
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "shouldPlayAnimsWhileGamePaused"(): boolean
get "generatedSpeed"(): float
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StarbuncleWheelTile$Type = ($StarbuncleWheelTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StarbuncleWheelTile_ = $StarbuncleWheelTile$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/spell/$SpellTier" {
import {$ConcurrentHashMap, $ConcurrentHashMap$Type} from "packages/java/util/concurrent/$ConcurrentHashMap"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SpellTier {
static readonly "SPELL_TIER_MAP": $ConcurrentHashMap<(integer), ($SpellTier)>
static "ONE": $SpellTier
static "TWO": $SpellTier
static "THREE": $SpellTier
static "CREATIVE": $SpellTier
 "value": integer
 "id": $ResourceLocation

/**
 * 
 * @deprecated
 */
constructor(arg0: $ResourceLocation$Type, arg1: integer)

public static "createTier"(arg0: $ResourceLocation$Type, arg1: integer): $SpellTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellTier$Type = ($SpellTier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellTier_ = $SpellTier$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$Wand" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ICasterTool, $ICasterTool$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$ICasterTool"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Spell, $Spell$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$Spell"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$ISpellCaster, $ISpellCaster$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$ISpellCaster"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Wand extends $ModItem implements $GeoItem, $ICasterTool {
 "factory": $AnimatableInstanceCache
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
constructor()

public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isScribedSpellValid"(arg0: $ISpellCaster$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: $Spell$Type): boolean
public "setSpell"(arg0: $ISpellCaster$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: $Spell$Type): boolean
public "sendInvalidMessage"(arg0: $Player$Type): void
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public static "getId"(arg0: $ItemStack$Type): long
public "getTick"(arg0: any): double
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "isPerspectiveAware"(): boolean
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "onScribe"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $InteractionHand$Type, arg4: $ItemStack$Type): boolean
public "sendSetMessage"(arg0: $Player$Type): void
public "shouldDisplay"(arg0: $ItemStack$Type): boolean
public "getInformation"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getSpellCaster"(arg0: $CompoundTag$Type): $ISpellCaster
public "getSpellCaster"(): $ISpellCaster
public "getSpellCaster"(arg0: $ItemStack$Type): $ISpellCaster
public "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public "onPreviousKeyPressed"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): void
public "onOpenBookMenuKeyPressed"(arg0: $ItemStack$Type, arg1: $Player$Type): void
/**
 * 
 * @deprecated
 */
public "canQuickCast"(): boolean
public "onQuickCast"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type, arg2: $InteractionHand$Type, arg3: integer): void
public "onNextKeyPressed"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): void
public "getBoneResetTime"(): double
public "shouldPlayAnimsWhileGamePaused"(): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "spellCaster"(): $ISpellCaster
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Wand$Type = ($Wand);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Wand_ = $Wand$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$PortalBlock$Size" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$WarpScroll$WarpScrollData, $WarpScroll$WarpScrollData$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$WarpScroll$WarpScrollData"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PortalBlock$Size {

constructor(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Direction$Axis$Type)

public "isValid"(): boolean
public "getWidth"(): integer
public "getHeight"(): integer
public "isComplete"(): boolean
public "placePortalBlocks"(arg0: $WarpScroll$WarpScrollData$Type, arg1: string): void
public "isPortalFrame"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): boolean
get "valid"(): boolean
get "width"(): integer
get "height"(): integer
get "complete"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortalBlock$Size$Type = ($PortalBlock$Size);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortalBlock$Size_ = $PortalBlock$Size$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$SpellCrossbow" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ICasterTool, $ICasterTool$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$ICasterTool"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$CallbackInfoReturnable, $CallbackInfoReturnable$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import {$Spell, $Spell$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$Spell"
import {$IManaDiscountEquipment, $IManaDiscountEquipment$Type} from "packages/com/hollingsworth/arsnouveau/api/mana/$IManaDiscountEquipment"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$ISpellCaster, $ISpellCaster$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$ISpellCaster"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$EntitySpellArrow, $EntitySpellArrow$Type} from "packages/com/hollingsworth/arsnouveau/common/entity/$EntitySpellArrow"
import {$CrossbowItem, $CrossbowItem$Type} from "packages/net/minecraft/world/item/$CrossbowItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpellCrossbow extends $CrossbowItem implements $GeoItem, $ICasterTool, $IManaDiscountEquipment {
 "factory": $AnimatableInstanceCache
static readonly "DEFAULT_RANGE": integer
 "startSoundPlayed": boolean
 "midLoadSoundPlayed": boolean
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
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

public "getManaDiscount"(arg0: $ItemStack$Type, arg1: $Spell$Type): integer
public "getAllSupportedProjectiles"(): $Predicate<($ItemStack)>
public "buildSpellArrow"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ISpellCaster$Type): $EntitySpellArrow
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "shootStoredProjectiles"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "isScribedSpellValid"(arg0: $ISpellCaster$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: $Spell$Type): boolean
public "handler$zik001$apoth_addCharges"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $CallbackInfoReturnable$Type<(any)>): void
public "hasChargedProjectile"(arg0: $ItemStack$Type, arg1: $Item$Type): boolean
public "handler$zik001$apoth_preFired"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $CallbackInfoReturnable$Type<(any)>): void
public "setSpell"(arg0: $ISpellCaster$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: $Spell$Type): boolean
public "sendInvalidMessage"(arg0: $Player$Type): void
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "shootOne"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: $ItemStack$Type, arg5: float, arg6: boolean, arg7: float, arg8: float, arg9: float, arg10: boolean): void
public static "getId"(arg0: $ItemStack$Type): long
public "getTick"(arg0: any): double
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "isPerspectiveAware"(): boolean
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "onScribe"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $InteractionHand$Type, arg4: $ItemStack$Type): boolean
public "sendSetMessage"(arg0: $Player$Type): void
public "shouldDisplay"(arg0: $ItemStack$Type): boolean
public "getInformation"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getSpellCaster"(arg0: $CompoundTag$Type): $ISpellCaster
public "getSpellCaster"(): $ISpellCaster
public "getSpellCaster"(arg0: $ItemStack$Type): $ISpellCaster
public "getManaDiscount"(arg0: $ItemStack$Type): integer
public "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public "onPreviousKeyPressed"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): void
public "onOpenBookMenuKeyPressed"(arg0: $ItemStack$Type, arg1: $Player$Type): void
/**
 * 
 * @deprecated
 */
public "canQuickCast"(): boolean
public "onQuickCast"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type, arg2: $InteractionHand$Type, arg3: integer): void
public "onNextKeyPressed"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): void
public "getBoneResetTime"(): double
public "shouldPlayAnimsWhileGamePaused"(): boolean
get "allSupportedProjectiles"(): $Predicate<($ItemStack)>
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "spellCaster"(): $ISpellCaster
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellCrossbow$Type = ($SpellCrossbow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellCrossbow_ = $SpellCrossbow$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/enchanting_apparatus/$EnchantingApparatusRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EnchantingApparatusRecipe, $EnchantingApparatusRecipe$Type} from "packages/com/hollingsworth/arsnouveau/api/enchanting_apparatus/$EnchantingApparatusRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $EnchantingApparatusRecipe$Serializer implements $RecipeSerializer<($EnchantingApparatusRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $EnchantingApparatusRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $EnchantingApparatusRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $EnchantingApparatusRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $EnchantingApparatusRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantingApparatusRecipe$Serializer$Type = ($EnchantingApparatusRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantingApparatusRecipe$Serializer_ = $EnchantingApparatusRecipe$Serializer$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/util/$SpellPartConfigUtil$ComboLimits" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SpellPartConfigUtil$ComboLimits {

constructor(arg0: $ForgeConfigSpec$ConfigValue$Type<($List$Type<(any)>)>)

public "contains"(arg0: $ResourceLocation$Type): boolean
public "parseComboLimits"(): $Set<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellPartConfigUtil$ComboLimits$Type = ($SpellPartConfigUtil$ComboLimits);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellPartConfigUtil$ComboLimits_ = $SpellPartConfigUtil$ComboLimits$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/tile/$SingleItemTile" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$RegistryWrapper, $RegistryWrapper$Type} from "packages/com/hollingsworth/arsnouveau/common/util/$RegistryWrapper"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ModdedTile, $ModdedTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$ModdedTile"

export class $SingleItemTile extends $ModdedTile implements $Container {
 "renderEntity": $ItemEntity
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $RegistryWrapper$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getStack"(): $ItemStack
public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "setStack"(arg0: $ItemStack$Type): void
public "getMaxStackSize"(): integer
public "stillValid"(arg0: $Player$Type): boolean
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "clearContent"(): void
public "isEmpty"(): boolean
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "invalidateCaps"(): void
public "setChanged"(): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
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
get "stack"(): $ItemStack
get "containerSize"(): integer
set "stack"(value: $ItemStack$Type)
get "maxStackSize"(): integer
get "empty"(): boolean
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
export type $SingleItemTile$Type = ($SingleItemTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingleItemTile_ = $SingleItemTile$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$ImbuementBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$TickableModBlock, $TickableModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$TickableModBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ImbuementBlock extends $TickableModBlock {
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImbuementBlock$Type = ($ImbuementBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImbuementBlock_ = $ImbuementBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$SpellSensor" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$SculkSensorPhase, $SculkSensorPhase$Type} from "packages/net/minecraft/world/level/block/state/properties/$SculkSensorPhase"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TickableModBlock, $TickableModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$TickableModBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SpellSensor extends $TickableModBlock {
static readonly "PHASE": $EnumProperty<($SculkSensorPhase)>
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
constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellSensor$Type = ($SpellSensor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellSensor_ = $SpellSensor$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$Present" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Present extends $ModItem {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Present$Type = ($Present);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Present_ = $Present$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$ITickable" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ITickable {

 "tick"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): void
 "tick"(): void
}

export namespace $ITickable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITickable$Type = ($ITickable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITickable_ = $ITickable$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$AlchemistsCrown" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$IRadialProvider, $IRadialProvider$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$IRadialProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AlchemistsCrown extends $ModItem implements $IRadialProvider {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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

public "forKey"(): integer
public "onRadialKeyPressed"(arg0: $ItemStack$Type, arg1: $Player$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemistsCrown$Type = ($AlchemistsCrown);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemistsCrown_ = $AlchemistsCrown$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractCastMethod" {
import {$CastResolveType, $CastResolveType$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$CastResolveType"
import {$Glyph, $Glyph$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$Glyph"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$SpellStats, $SpellStats$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AbstractAugment, $AbstractAugment$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractAugment"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ForgeConfigSpec$BooleanValue, $ForgeConfigSpec$BooleanValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$BooleanValue"
import {$ForgeConfigSpec, $ForgeConfigSpec$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SpellSchool, $SpellSchool$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellSchool"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$SpellPartConfigUtil$AugmentCosts, $SpellPartConfigUtil$AugmentCosts$Type} from "packages/com/hollingsworth/arsnouveau/common/util/$SpellPartConfigUtil$AugmentCosts"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import {$SpellPartConfigUtil$AugmentLimits, $SpellPartConfigUtil$AugmentLimits$Type} from "packages/com/hollingsworth/arsnouveau/common/util/$SpellPartConfigUtil$AugmentLimits"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$SpellPartConfigUtil$ComboLimits, $SpellPartConfigUtil$ComboLimits$Type} from "packages/com/hollingsworth/arsnouveau/common/util/$SpellPartConfigUtil$ComboLimits"
import {$SpellResolver, $SpellResolver$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellResolver"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"

export class $AbstractCastMethod extends $AbstractSpellPart {
 "name": string
 "glyphItem": $Glyph
 "spellSchools": $List<($SpellSchool)>
 "compatibleAugments": $Set<($AbstractAugment)>
 "invalidCombinations": $SpellPartConfigUtil$ComboLimits
 "CONFIG": $ForgeConfigSpec
 "COST": $ForgeConfigSpec$IntValue
 "ENABLED": $ForgeConfigSpec$BooleanValue
 "STARTER_SPELL": $ForgeConfigSpec$BooleanValue
 "PER_SPELL_LIMIT": $ForgeConfigSpec$IntValue
 "GLYPH_TIER": $ForgeConfigSpec$IntValue
 "augmentLimits": $SpellPartConfigUtil$AugmentLimits
 "augmentCosts": $SpellPartConfigUtil$AugmentCosts

constructor(arg0: string, arg1: string)
constructor(arg0: $ResourceLocation$Type, arg1: string)

public "getTypeIndex"(): integer
public "onCast"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $Level$Type, arg3: $SpellStats$Type, arg4: $SpellContext$Type, arg5: $SpellResolver$Type): $CastResolveType
public "onCastOnBlock"(arg0: $BlockHitResult$Type, arg1: $LivingEntity$Type, arg2: $SpellStats$Type, arg3: $SpellContext$Type, arg4: $SpellResolver$Type): $CastResolveType
public "onCastOnBlock"(arg0: $UseOnContext$Type, arg1: $SpellStats$Type, arg2: $SpellContext$Type, arg3: $SpellResolver$Type): $CastResolveType
public "onCastOnEntity"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $Entity$Type, arg3: $InteractionHand$Type, arg4: $SpellStats$Type, arg5: $SpellContext$Type, arg6: $SpellResolver$Type): $CastResolveType
public "buildConfig"(arg0: $ForgeConfigSpec$Builder$Type): void
get "typeIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCastMethod$Type = ($AbstractCastMethod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCastMethod_ = $AbstractCastMethod$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/recipe/$DispelEntityRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$DispelEntityRecipe, $DispelEntityRecipe$Type} from "packages/com/hollingsworth/arsnouveau/api/recipe/$DispelEntityRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $DispelEntityRecipe$Serializer implements $RecipeSerializer<($DispelEntityRecipe)> {
static readonly "CODEC": $Codec<($DispelEntityRecipe)>

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $DispelEntityRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $DispelEntityRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $DispelEntityRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $DispelEntityRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DispelEntityRecipe$Serializer$Type = ($DispelEntityRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DispelEntityRecipe$Serializer_ = $DispelEntityRecipe$Serializer$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/recipe/$ScryRitualRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ScryRitualRecipe, $ScryRitualRecipe$Type} from "packages/com/hollingsworth/arsnouveau/api/recipe/$ScryRitualRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ScryRitualRecipe$Serializer implements $RecipeSerializer<($ScryRitualRecipe)> {
static readonly "CODEC": $Codec<($ScryRitualRecipe)>

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ScryRitualRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ScryRitualRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ScryRitualRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ScryRitualRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScryRitualRecipe$Serializer$Type = ($ScryRitualRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScryRitualRecipe$Serializer_ = $ScryRitualRecipe$Serializer$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/enchanting_apparatus/$ArmorUpgradeRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ArmorUpgradeRecipe, $ArmorUpgradeRecipe$Type} from "packages/com/hollingsworth/arsnouveau/api/enchanting_apparatus/$ArmorUpgradeRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ArmorUpgradeRecipe$Serializer implements $RecipeSerializer<($ArmorUpgradeRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ArmorUpgradeRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ArmorUpgradeRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ArmorUpgradeRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ArmorUpgradeRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorUpgradeRecipe$Serializer$Type = ($ArmorUpgradeRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmorUpgradeRecipe$Serializer_ = $ArmorUpgradeRecipe$Serializer$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/entity/$EnchantedFallingBlock" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$SpellStats, $SpellStats$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Stack, $Stack$Type} from "packages/java/util/$Stack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$GeoEntity, $GeoEntity$Type} from "packages/software/bernie/geckolib/animatable/$GeoEntity"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CrashReportCategory, $CrashReportCategory$Type} from "packages/net/minecraft/$CrashReportCategory"
import {$ClientboundAddEntityPacket, $ClientboundAddEntityPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundAddEntityPacket"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$SpellResolver, $SpellResolver$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellResolver"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$ColoredProjectile, $ColoredProjectile$Type} from "packages/com/hollingsworth/arsnouveau/common/entity/$ColoredProjectile"

export class $EnchantedFallingBlock extends $ColoredProjectile implements $GeoEntity {
 "blockState": $BlockState
 "time": integer
 "dropItem": boolean
 "cancelDrop": boolean
 "hurtEntities": boolean
 "knockback": integer
 "blockData": $CompoundTag
 "context": $SpellContext
 "baseDamage": float
 "resolver": $SpellResolver
 "spellStats": $SpellStats
static readonly "RED": $EntityDataAccessor<(integer)>
static readonly "GREEN": $EntityDataAccessor<(integer)>
static readonly "BLUE": $EntityDataAccessor<(integer)>
static readonly "PARTICLE_TAG": $EntityDataAccessor<($CompoundTag)>
 "rainbowStartTick": integer
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

constructor(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $Level$Type, arg1: double, arg2: double, arg3: double, arg4: $BlockState$Type)
constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type, arg2: double, arg3: double, arg4: double, arg5: $BlockState$Type)
constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type, arg2: double, arg3: double, arg4: double)
constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public "setStartPos"(arg0: $BlockPos$Type): void
public "m_7380_"(arg0: $CompoundTag$Type): void
public "isAttackable"(): boolean
public "causeFallDamage"(arg0: float, arg1: float, arg2: $DamageSource$Type): boolean
public static "fall"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Entity$Type, arg3: $SpellContext$Type, arg4: $SpellResolver$Type, arg5: $SpellStats$Type): $EnchantedFallingBlock
/**
 * 
 * @deprecated
 */
public static "fall"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $LivingEntity$Type, arg3: $SpellContext$Type, arg4: $SpellResolver$Type, arg5: $SpellStats$Type): $EnchantedFallingBlock
public "groundBlock"(arg0: boolean): $BlockPos
public "getEntityType"(): $EntityType<(any)>
public "callOnBrokenAfterFall"(arg0: $Block$Type, arg1: $BlockPos$Type): void
public "getStateDamageBonus"(): float
public "getBlockState"(): $BlockState
public "fillCrashReportCategory"(arg0: $CrashReportCategory$Type): void
public "canCollideWith"(arg0: $Entity$Type): boolean
public "onlyOpCanSetNbt"(): boolean
public "getAddEntityPacket"(): $Packet<($ClientGamePacketListener)>
public "load"(arg0: $CompoundTag$Type): void
public "isPickable"(): boolean
/**
 * 
 * @deprecated
 */
public static "canFall"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $LivingEntity$Type, arg3: $SpellStats$Type): boolean
public static "canFall"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Entity$Type, arg3: $SpellStats$Type): boolean
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "m_8097_"(): void
public "tick"(): void
public "setHurtsEntities"(arg0: float, arg1: integer): void
public "doPostHurtEffects"(arg0: $LivingEntity$Type): void
public "getStartPos"(): $BlockPos
public "recreateFromPacket"(arg0: $ClientboundAddEntityPacket$Type): void
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "setAnimData"<D>(arg0: $SerializableDataTicket$Type<(D)>, arg1: D): void
public "getAnimData"<D>(arg0: $SerializableDataTicket$Type<(D)>): D
public "getTick"(arg0: any): double
public "triggerAnim"(arg0: string, arg1: string): void
public "getBoneResetTime"(): double
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "shouldPlayAnimsWhileGamePaused"(): boolean
set "startPos"(value: $BlockPos$Type)
get "attackable"(): boolean
get "entityType"(): $EntityType<(any)>
get "stateDamageBonus"(): float
get "blockState"(): $BlockState
get "addEntityPacket"(): $Packet<($ClientGamePacketListener)>
get "pickable"(): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "startPos"(): $BlockPos
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantedFallingBlock$Type = ($EnchantedFallingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantedFallingBlock_ = $EnchantedFallingBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Glyph, $Glyph$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$Glyph"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import {$SpellPartConfigUtil$AugmentLimits, $SpellPartConfigUtil$AugmentLimits$Type} from "packages/com/hollingsworth/arsnouveau/common/util/$SpellPartConfigUtil$AugmentLimits"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SpellTier, $SpellTier$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellTier"
import {$AbstractAugment, $AbstractAugment$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractAugment"
import {$ForgeConfigSpec$BooleanValue, $ForgeConfigSpec$BooleanValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$BooleanValue"
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$SpellPartConfigUtil$ComboLimits, $SpellPartConfigUtil$ComboLimits$Type} from "packages/com/hollingsworth/arsnouveau/common/util/$SpellPartConfigUtil$ComboLimits"
import {$ForgeConfigSpec, $ForgeConfigSpec$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SpellSchool, $SpellSchool$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellSchool"
import {$SpellPartConfigUtil$AugmentCosts, $SpellPartConfigUtil$AugmentCosts$Type} from "packages/com/hollingsworth/arsnouveau/common/util/$SpellPartConfigUtil$AugmentCosts"

export class $AbstractSpellPart implements $Comparable<($AbstractSpellPart)> {
 "name": string
 "glyphItem": $Glyph
 "spellSchools": $List<($SpellSchool)>
 "compatibleAugments": $Set<($AbstractAugment)>
 "invalidCombinations": $SpellPartConfigUtil$ComboLimits
 "CONFIG": $ForgeConfigSpec
 "COST": $ForgeConfigSpec$IntValue
 "ENABLED": $ForgeConfigSpec$BooleanValue
 "STARTER_SPELL": $ForgeConfigSpec$BooleanValue
 "PER_SPELL_LIMIT": $ForgeConfigSpec$IntValue
 "GLYPH_TIER": $ForgeConfigSpec$IntValue
 "augmentLimits": $SpellPartConfigUtil$AugmentLimits
 "augmentCosts": $SpellPartConfigUtil$AugmentCosts

constructor(arg0: $ResourceLocation$Type, arg1: string)
constructor(arg0: string, arg1: string)

public "getName"(): string
public "compareTo"(arg0: $AbstractSpellPart$Type): integer
public "getLocaleName"(): string
public "isEnabled"(): boolean
public "getBookDescLang"(): $Component
public "defaultTier"(): $SpellTier
public "onContextCanceled"(arg0: $SpellContext$Type): void
public "getCastingCost"(): integer
public "getTypeIndex"(): integer
public "contextCanceled"(arg0: $SpellContext$Type): boolean
public "getConfigTier"(): $SpellTier
public "getLocalizationKey"(): string
public "getBookDescription"(): string
public "getAugmentLimit"(arg0: $ResourceLocation$Type): integer
public "shouldShowInUnlock"(): boolean
public "buildConfig"(arg0: $ForgeConfigSpec$Builder$Type): void
public "defaultedStarterGlyph"(): boolean
public "shouldShowInSpellBook"(): boolean
public "getGlyph"(): $Glyph
public "getRegistryName"(): $ResourceLocation
get "name"(): string
get "localeName"(): string
get "enabled"(): boolean
get "bookDescLang"(): $Component
get "castingCost"(): integer
get "typeIndex"(): integer
get "configTier"(): $SpellTier
get "localizationKey"(): string
get "bookDescription"(): string
get "glyph"(): $Glyph
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSpellPart$Type = ($AbstractSpellPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSpellPart_ = $AbstractSpellPart$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$ItemScroll$SortPref" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ItemScroll$SortPref extends $Enum<($ItemScroll$SortPref)> {
static readonly "INVALID": $ItemScroll$SortPref
static readonly "LOW": $ItemScroll$SortPref
static readonly "HIGH": $ItemScroll$SortPref
static readonly "HIGHEST": $ItemScroll$SortPref


public static "values"(): ($ItemScroll$SortPref)[]
public static "valueOf"(arg0: string): $ItemScroll$SortPref
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemScroll$SortPref$Type = (("high") | ("low") | ("highest") | ("invalid")) | ($ItemScroll$SortPref);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemScroll$SortPref_ = $ItemScroll$SortPref$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$RelaySplitter" {
import {$Relay, $Relay$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$Relay"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $RelaySplitter extends $Relay {
static readonly "shape": $VoxelShape
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelaySplitter$Type = ($RelaySplitter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelaySplitter_ = $RelaySplitter$Type;
}}
declare module "packages/com/hollingsworth/ars_creo/common/block/$StarbuncleWheelBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$IRotate$SpeedLevel, $IRotate$SpeedLevel$Type} from "packages/com/simibubi/create/content/kinetics/base/$IRotate$SpeedLevel"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StarbuncleWheelTile, $StarbuncleWheelTile$Type} from "packages/com/hollingsworth/ars_creo/common/block/$StarbuncleWheelTile"
import {$DirectionalKineticBlock, $DirectionalKineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$DirectionalKineticBlock"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $StarbuncleWheelBlock extends $DirectionalKineticBlock implements $IBE<($StarbuncleWheelTile)> {
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

public "updateAllSides"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "getParticleTargetRadius"(): float
public "getParticleInitialRadius"(): float
public "getMinimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
public "getBlockEntityClass"(): $Class<($StarbuncleWheelTile)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "hideStressImpact"(): boolean
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $StarbuncleWheelTile
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($StarbuncleWheelTile)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($StarbuncleWheelTile$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($StarbuncleWheelTile$Type), ($InteractionResult$Type)>): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "particleTargetRadius"(): float
get "particleInitialRadius"(): float
get "minimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
get "blockEntityClass"(): $Class<($StarbuncleWheelTile)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StarbuncleWheelBlock$Type = ($StarbuncleWheelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StarbuncleWheelBlock_ = $StarbuncleWheelBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$EnchantersShield" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ShieldItem, $ShieldItem$Type} from "packages/net/minecraft/world/item/$ShieldItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EnchantersShield extends $ShieldItem implements $GeoItem {
 "factory": $AnimatableInstanceCache
static readonly "EFFECTIVE_BLOCK_DELAY": integer
static readonly "MINIMUM_DURABILITY_DAMAGE": float
static readonly "TAG_BASE_COLOR": string
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
constructor(arg0: $Item$Properties$Type)

public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public static "getId"(arg0: $ItemStack$Type): long
public "getTick"(arg0: any): double
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "isPerspectiveAware"(): boolean
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
public "getBoneResetTime"(): double
public "shouldPlayAnimsWhileGamePaused"(): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantersShield$Type = ($EnchantersShield);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantersShield_ = $EnchantersShield$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/crafting/recipes/$ImbuementRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$ImbuementRecipe, $ImbuementRecipe$Type} from "packages/com/hollingsworth/arsnouveau/common/crafting/recipes/$ImbuementRecipe"

export class $ImbuementRecipe$Serializer implements $RecipeSerializer<($ImbuementRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ImbuementRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ImbuementRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ImbuementRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ImbuementRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImbuementRecipe$Serializer$Type = ($ImbuementRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImbuementRecipe$Serializer_ = $ImbuementRecipe$Serializer$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/entity/$ColoredProjectile" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ParticleColor$IntWrapper, $ParticleColor$IntWrapper$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$ParticleColor$IntWrapper"
import {$ParticleColor, $ParticleColor$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$ParticleColor"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$Stack, $Stack$Type} from "packages/java/util/$Stack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ColoredProjectile extends $Projectile {
static readonly "RED": $EntityDataAccessor<(integer)>
static readonly "GREEN": $EntityDataAccessor<(integer)>
static readonly "BLUE": $EntityDataAccessor<(integer)>
static readonly "PARTICLE_TAG": $EntityDataAccessor<($CompoundTag)>
 "rainbowStartTick": integer
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

constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type, arg2: $LivingEntity$Type)
constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type, arg2: double, arg3: double, arg4: double)
constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public "setColor"(arg0: $ParticleColor$Type): void
public "m_7380_"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "getParticleColorWrapper"(): $ParticleColor$IntWrapper
public "isRainbow"(): boolean
public "getParticleColor"(): $ParticleColor
set "color"(value: $ParticleColor$Type)
get "particleColorWrapper"(): $ParticleColor$IntWrapper
get "rainbow"(): boolean
get "particleColor"(): $ParticleColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColoredProjectile$Type = ($ColoredProjectile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColoredProjectile_ = $ColoredProjectile$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$RelayWarpBlock" {
import {$Relay, $Relay$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$Relay"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $RelayWarpBlock extends $Relay {
static readonly "shape": $VoxelShape
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
constructor(arg0: $BlockBehaviour$Properties$Type, arg1: string)
constructor(arg0: string)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelayWarpBlock$Type = ($RelayWarpBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelayWarpBlock_ = $RelayWarpBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$EarthEssence" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EarthEssence extends $ModItem {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EarthEssence$Type = ($EarthEssence);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EarthEssence_ = $EarthEssence$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$FireEssence" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FireEssence extends $ModItem {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
public "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireEssence$Type = ($FireEssence);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireEssence_ = $FireEssence$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/event/$SummonEvent$Death" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ISummon, $ISummon$Type} from "packages/com/hollingsworth/arsnouveau/api/entity/$ISummon"

export class $SummonEvent$Death extends $Event {
 "summon": $ISummon
 "source": $DamageSource
 "world": $Level
 "wasExpiration": boolean

constructor()
constructor(arg0: $Level$Type, arg1: $ISummon$Type, arg2: $DamageSource$Type, arg3: boolean)

public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonEvent$Death$Type = ($SummonEvent$Death);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SummonEvent$Death_ = $SummonEvent$Death$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$ScryersOculus" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TickableModBlock, $TickableModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$TickableModBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ScryersOculus extends $TickableModBlock {
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
constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "openMenu"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): void
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScryersOculus$Type = ($ScryersOculus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScryersOculus_ = $ScryersOculus$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$VoidPrism" {
import {$IPrismaticBlock, $IPrismaticBlock$Type} from "packages/com/hollingsworth/arsnouveau/api/block/$IPrismaticBlock"
import {$EntityProjectileSpell, $EntityProjectileSpell$Type} from "packages/com/hollingsworth/arsnouveau/common/entity/$EntityProjectileSpell"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ModBlock, $ModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$ModBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $VoidPrism extends $ModBlock implements $IPrismaticBlock {
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

public "onHit"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $EntityProjectileSpell$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidPrism$Type = ($VoidPrism);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidPrism_ = $VoidPrism$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/crafting/recipes/$CrushRecipe$CrushOutput" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $CrushRecipe$CrushOutput {
 "stack": $ItemStack
 "chance": float
 "maxRange": integer

constructor(arg0: $ItemStack$Type, arg1: float)
constructor(arg0: $ItemStack$Type, arg1: float, arg2: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrushRecipe$CrushOutput$Type = ($CrushRecipe$CrushOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrushRecipe$CrushOutput_ = $CrushRecipe$CrushOutput$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/item/inv/$ExtractedStack" {
import {$SlotReference, $SlotReference$Type} from "packages/com/hollingsworth/arsnouveau/api/item/inv/$SlotReference"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ExtractedStack extends $SlotReference {
 "stack": $ItemStack


public "isEmpty"(): boolean
public static "from"(arg0: $IItemHandler$Type, arg1: integer, arg2: integer): $ExtractedStack
public static "from"(arg0: $SlotReference$Type, arg1: integer): $ExtractedStack
public static "empty"(): $ExtractedStack
public "getStack"(): $ItemStack
public "returnOrDrop"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "replaceAndReturnOrDrop"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "returnStack"(): $ItemStack
get "stack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtractedStack$Type = ($ExtractedStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtractedStack_ = $ExtractedStack$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/item/$ArsNouveauCurio" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ICurio$SoundInfo, $ICurio$SoundInfo$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$SoundInfo"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$ICurio$DropRule, $ICurio$DropRule$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$DropRule"
import {$ICurioItem, $ICurioItem$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurioItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ArsNouveauCurio extends $ModItem implements $ICurioItem {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
constructor(arg0: $Item$Properties$Type)

public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
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
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
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
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
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
export type $ArsNouveauCurio$Type = ($ArsNouveauCurio);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArsNouveauCurio_ = $ArsNouveauCurio$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/item/$ISpellModifier" {
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$SpellStats$Builder, $SpellStats$Builder$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats$Builder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ISpellModifier {

 "applyModifiers"(arg0: $SpellStats$Builder$Type, arg1: $AbstractSpellPart$Type, arg2: $HitResult$Type, arg3: $Level$Type, arg4: $LivingEntity$Type, arg5: $SpellContext$Type): $SpellStats$Builder
}

export namespace $ISpellModifier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpellModifier$Type = ($ISpellModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISpellModifier_ = $ISpellModifier$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/itemscrolls/$MimicItemScroll" {
import {$ItemScroll, $ItemScroll$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ItemScroll"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemScroll$SortPref, $ItemScroll$SortPref$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ItemScroll$SortPref"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MimicItemScroll extends $ItemScroll {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
constructor(arg0: $Item$Properties$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getSortPref"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $IItemHandler$Type): $ItemScroll$SortPref
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MimicItemScroll$Type = ($MimicItemScroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MimicItemScroll_ = $MimicItemScroll$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$PerkItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IPerk, $IPerk$Type} from "packages/com/hollingsworth/arsnouveau/api/perk/$IPerk"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PerkItem extends $ModItem {
 "perk": $IPerk
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
constructor(arg0: $IPerk$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PerkItem$Type = ($PerkItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PerkItem_ = $PerkItem$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/enchanting_apparatus/$ArmorUpgradeRecipe" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ITextOutput, $ITextOutput$Type} from "packages/com/hollingsworth/arsnouveau/api/enchanting_apparatus/$ITextOutput"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EnchantingApparatusTile, $EnchantingApparatusTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$EnchantingApparatusTile"
import {$EnchantingApparatusRecipe, $EnchantingApparatusRecipe$Type} from "packages/com/hollingsworth/arsnouveau/api/enchanting_apparatus/$EnchantingApparatusRecipe"

export class $ArmorUpgradeRecipe extends $EnchantingApparatusRecipe implements $ITextOutput {
 "tier": integer
 "reagent": $Ingredient
 "result": $ItemStack
 "pedestalItems": $List<($Ingredient)>
 "id": $ResourceLocation
 "sourceCost": integer
 "keepNbtOfReagent": boolean

constructor(arg0: $List$Type<($Ingredient$Type)>, arg1: integer, arg2: integer)
constructor(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: integer, arg3: integer)

public "getResult"(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type, arg2: $EnchantingApparatusTile$Type): $ItemStack
public "isMatch"(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type, arg2: $EnchantingApparatusTile$Type, arg3: $Player$Type): boolean
public "excludeJei"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "asRecipe"(): $JsonElement
public "doesReagentMatch"(arg0: $ItemStack$Type): boolean
public "getOutputComponent"(): $Component
get "serializer"(): $RecipeSerializer<(any)>
get "outputComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorUpgradeRecipe$Type = ($ArmorUpgradeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmorUpgradeRecipe_ = $ArmorUpgradeRecipe$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/item/inv/$IInvProvider" {
import {$InventoryManager, $InventoryManager$Type} from "packages/com/hollingsworth/arsnouveau/api/item/inv/$InventoryManager"

export interface $IInvProvider {

 "getInventoryManager"(): $InventoryManager

(): $InventoryManager
}

export namespace $IInvProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInvProvider$Type = ($IInvProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInvProvider_ = $IInvProvider$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/block/$IPrismaticBlock" {
import {$EntityProjectileSpell, $EntityProjectileSpell$Type} from "packages/com/hollingsworth/arsnouveau/common/entity/$EntityProjectileSpell"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IPrismaticBlock {

 "onHit"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $EntityProjectileSpell$Type): void

(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $EntityProjectileSpell$Type): void
}

export namespace $IPrismaticBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPrismaticBlock$Type = ($IPrismaticBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPrismaticBlock_ = $IPrismaticBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$RuneBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TickableModBlock, $TickableModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$TickableModBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $RuneBlock extends $TickableModBlock {
static "shape": $VoxelShape
static readonly "POWERED": $BooleanProperty
static readonly "FLOOR": $BooleanProperty
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
constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneBlock$Type = ($RuneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuneBlock_ = $RuneBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$BasicSpellTurret" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Position, $Position$Type} from "packages/net/minecraft/core/$Position"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TickableModBlock, $TickableModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$TickableModBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockSource, $BlockSource$Type} from "packages/net/minecraft/core/$BlockSource"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$AbstractCastMethod, $AbstractCastMethod$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractCastMethod"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$ITurretBehavior, $ITurretBehavior$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$ITurretBehavior"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BasicSpellTurret extends $TickableModBlock implements $SimpleWaterloggedBlock {
static readonly "TRIGGERED": $BooleanProperty
static readonly "FACING": $DirectionProperty
static "TURRET_BEHAVIOR_MAP": $HashMap<($AbstractCastMethod), ($ITurretBehavior)>
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
constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public static "getDispensePosition"(arg0: $BlockSource$Type): $Position
public "shootSpell"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type): void
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicSpellTurret$Type = ($BasicSpellTurret);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicSpellTurret_ = $BasicSpellTurret$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/familiar/$IFamiliar" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$FamiliarSummonEvent, $FamiliarSummonEvent$Type} from "packages/com/hollingsworth/arsnouveau/api/event/$FamiliarSummonEvent"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IFamiliar {

 "getOwner"(): $LivingEntity
 "setOwnerID"(arg0: $UUID$Type): void
 "getThisEntity"(): $Entity
 "getOwnerServerside"(): $Entity
 "setHolderID"(arg0: $ResourceLocation$Type): void
 "onFamiliarSpawned"(arg0: $FamiliarSummonEvent$Type): void
 "getHolderID"(): $ResourceLocation
 "wantsToAttack"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type): boolean
 "getOwnerID"(): $UUID
}

export namespace $IFamiliar {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFamiliar$Type = ($IFamiliar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFamiliar_ = $IFamiliar$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/light/$LambDynamicLight" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelRenderer, $LevelRenderer$Type} from "packages/net/minecraft/client/renderer/$LevelRenderer"

export interface $LambDynamicLight {

 "lambdynlights$updateDynamicLight"(arg0: $LevelRenderer$Type): boolean
 "setDynamicLightEnabled"(arg0: boolean): void
 "shouldUpdateDynamicLight"(): boolean
 "getDynamicLightWorld"(): $Level
 "isDynamicLightEnabled"(): boolean
 "dynamicLightTick"(): void
 "getDynamicLightY"(): double
 "resetDynamicLight"(): void
 "getDynamicLightX"(): double
 "getLuminance"(): integer
 "getDynamicLightZ"(): double
 "lambdynlights$scheduleTrackedChunksRebuild"(arg0: $LevelRenderer$Type): void
}

export namespace $LambDynamicLight {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LambDynamicLight$Type = ($LambDynamicLight);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LambDynamicLight_ = $LambDynamicLight$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/item/$IWandable" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ColorPos, $ColorPos$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$ColorPos"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IWandable {

 "onFinishedConnectionFirst"(arg0: $BlockPos$Type, arg1: $Direction$Type, arg2: $LivingEntity$Type, arg3: $Player$Type): void
 "onFinishedConnectionFirst"(arg0: $BlockPos$Type, arg1: $LivingEntity$Type, arg2: $Player$Type): void
 "onWanded"(arg0: $Player$Type): void
 "getWandHighlight"(arg0: $List$Type<($ColorPos$Type)>): $List<($ColorPos)>
 "onFinishedConnectionLast"(arg0: $BlockPos$Type, arg1: $LivingEntity$Type, arg2: $Player$Type): void
 "onFinishedConnectionLast"(arg0: $BlockPos$Type, arg1: $Direction$Type, arg2: $LivingEntity$Type, arg3: $Player$Type): void
}

export namespace $IWandable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWandable$Type = ($IWandable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWandable_ = $IWandable$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/potions/$PublicEffect" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $PublicEffect extends $MobEffect {
readonly "curativeItems": $List<($ItemStack)>

constructor(arg0: $MobEffectCategory$Type, arg1: integer)
constructor(arg0: $MobEffectCategory$Type, arg1: integer, arg2: $List$Type<($ItemStack$Type)>)

public "getCurativeItems"(): $List<($ItemStack)>
get "curativeItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PublicEffect$Type = ($PublicEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PublicEffect_ = $PublicEffect$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/item/$AbstractSummonCharm" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$SummoningTile, $SummoningTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$SummoningTile"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractSummonCharm extends $ModItem {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
constructor()

public "useOnBlock"(arg0: $UseOnContext$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $InteractionResult
public "useOnSummonTile"(arg0: $UseOnContext$Type, arg1: $Level$Type, arg2: $SummoningTile$Type, arg3: $BlockPos$Type): $InteractionResult
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSummonCharm$Type = ($AbstractSummonCharm);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSummonCharm_ = $AbstractSummonCharm$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/tile/$ScribesTile" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ITooltipProvider, $ITooltipProvider$Type} from "packages/com/hollingsworth/arsnouveau/api/client/$ITooltipProvider"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$GlyphRecipe, $GlyphRecipe$Type} from "packages/com/hollingsworth/arsnouveau/common/crafting/recipes/$GlyphRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GeoBlockEntity, $GeoBlockEntity$Type} from "packages/software/bernie/geckolib/animatable/$GeoBlockEntity"
import {$IAnimationListener, $IAnimationListener$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$IAnimationListener"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$ITickable, $ITickable$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$ITickable"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ColorPos, $ColorPos$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$ColorPos"
import {$ModdedTile, $ModdedTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$ModdedTile"
import {$IWandable, $IWandable$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$IWandable"

export class $ScribesTile extends $ModdedTile implements $GeoBlockEntity, $ITickable, $Container, $ITooltipProvider, $IAnimationListener, $IWandable {
 "consumedStacks": $List<($ItemStack)>
 "recipe": $GlyphRecipe
 "crafting": boolean
 "craftingTicks": integer
 "autoYoink": boolean
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getStack"(): $ItemStack
public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "setStack"(arg0: $ItemStack$Type): void
public "tick"(): void
public "stillValid"(arg0: $Player$Type): boolean
public "startAnimation"(arg0: integer): void
public "consumeStack"(arg0: $ItemStack$Type): boolean
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "setRecipe"(arg0: $GlyphRecipe$Type, arg1: $Player$Type): void
public "getRenderBoundingBox"(): $AABB
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public static "getTotalPlayerExperience"(arg0: $Player$Type): integer
public static "getExperienceForLevel"(arg0: integer): integer
public "onWanded"(arg0: $Player$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "canConsumeItemstack"(arg0: $ItemStack$Type): boolean
public "getRemainingRequired"(): $List<($Ingredient)>
public "getTooltip"(arg0: $List$Type<($Component$Type)>): void
public "clearContent"(): void
public "isEmpty"(): boolean
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "invalidateCaps"(): void
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public static "getLevelsFromExp"(arg0: integer): integer
public "refundConsumed"(): void
public "isMasterTile"(): boolean
public "getLogicTile"(): $ScribesTile
public "takeNearby"(): void
public "setAnimData"<D>(arg0: $SerializableDataTicket$Type<(D)>, arg1: D): void
public "getAnimData"<D>(arg0: $SerializableDataTicket$Type<(D)>): D
public "getTick"(arg0: any): double
public "triggerAnim"(arg0: string, arg1: string): void
public "tick"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): void
public "setChanged"(): void
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
public "onFinishedConnectionFirst"(arg0: $BlockPos$Type, arg1: $Direction$Type, arg2: $LivingEntity$Type, arg3: $Player$Type): void
public "onFinishedConnectionFirst"(arg0: $BlockPos$Type, arg1: $LivingEntity$Type, arg2: $Player$Type): void
public "getWandHighlight"(arg0: $List$Type<($ColorPos$Type)>): $List<($ColorPos)>
public "onFinishedConnectionLast"(arg0: $BlockPos$Type, arg1: $LivingEntity$Type, arg2: $Player$Type): void
public "onFinishedConnectionLast"(arg0: $BlockPos$Type, arg1: $Direction$Type, arg2: $LivingEntity$Type, arg3: $Player$Type): void
public "getBoneResetTime"(): double
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "shouldPlayAnimsWhileGamePaused"(): boolean
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
get "stack"(): $ItemStack
get "containerSize"(): integer
set "stack"(value: $ItemStack$Type)
get "renderBoundingBox"(): $AABB
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "remainingRequired"(): $List<($Ingredient)>
get "empty"(): boolean
get "masterTile"(): boolean
get "logicTile"(): $ScribesTile
get "maxStackSize"(): integer
get "slots"(): integer
get "height"(): integer
get "mutable"(): boolean
get "width"(): integer
get "boneResetTime"(): double
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScribesTile$Type = ($ScribesTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScribesTile_ = $ScribesTile$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/curios/$JumpingRing" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArsNouveauCurio, $ArsNouveauCurio$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$ArsNouveauCurio"

export class $JumpingRing extends $ArsNouveauCurio {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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

public static "doJump"(arg0: $Player$Type): void
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JumpingRing$Type = ($JumpingRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JumpingRing_ = $JumpingRing$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/potions/$SnareEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $SnareEffect extends $MobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SnareEffect$Type = ($SnareEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SnareEffect_ = $SnareEffect$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$FormSpellArrow" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Spell, $Spell$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$Spell"
import {$SpellArrow, $SpellArrow$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$SpellArrow"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AbstractAugment, $AbstractAugment$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractAugment"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FormSpellArrow extends $SpellArrow {
 "part": $AbstractSpellPart
 "numParts": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $AbstractAugment$Type, arg1: integer)

public "modifySpell"(arg0: $Spell$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FormSpellArrow$Type = ($FormSpellArrow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FormSpellArrow_ = $FormSpellArrow$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$ItemDetector" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TickableModBlock, $TickableModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$TickableModBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ItemDetector extends $TickableModBlock {
static readonly "shape": $VoxelShape
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
constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDetector$Type = ($ItemDetector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDetector_ = $ItemDetector$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/crafting/recipes/$BookUpgradeRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BookUpgradeRecipe, $BookUpgradeRecipe$Type} from "packages/com/hollingsworth/arsnouveau/common/crafting/recipes/$BookUpgradeRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $BookUpgradeRecipe$Serializer implements $RecipeSerializer<($BookUpgradeRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $BookUpgradeRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $BookUpgradeRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $BookUpgradeRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $BookUpgradeRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookUpgradeRecipe$Serializer$Type = ($BookUpgradeRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookUpgradeRecipe$Serializer_ = $BookUpgradeRecipe$Serializer$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/nbt/$ItemstackData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AbstractData, $AbstractData$Type} from "packages/com/hollingsworth/arsnouveau/api/nbt/$AbstractData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemstackData extends $AbstractData {
 "stack": $ItemStack

constructor(arg0: $ItemStack$Type)

public "getItemTag"(arg0: $ItemStack$Type): $CompoundTag
public "writeItem"(): void
public "getTagString"(): string
get "tagString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemstackData$Type = ($ItemstackData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemstackData_ = $ItemstackData$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$JarOfLight" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $JarOfLight extends $ModItem {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "setLightExists"(arg0: $CompoundTag$Type, arg1: boolean): void
public "lightExists"(arg0: $CompoundTag$Type): boolean
public "removeLight"(arg0: $Level$Type, arg1: $CompoundTag$Type): void
public "placeLight"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $CompoundTag$Type): boolean
public "setLightLocation"(arg0: $CompoundTag$Type, arg1: $BlockPos$Type): void
public "getLightLocation"(arg0: $CompoundTag$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JarOfLight$Type = ($JarOfLight);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JarOfLight_ = $JarOfLight$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/entity/$ISummon" {
import {$EntityGetter, $EntityGetter$Type} from "packages/net/minecraft/world/level/$EntityGetter"
import {$OwnableEntity, $OwnableEntity$Type} from "packages/net/minecraft/world/entity/$OwnableEntity"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ISummon extends $OwnableEntity {

 "setOwnerID"(arg0: $UUID$Type): void
 "getLivingEntity"(): $LivingEntity
 "setTicksLeft"(arg0: integer): void
 "getOwnerAlt"(): $LivingEntity
 "readOwner"(arg0: $ServerLevel$Type, arg1: $CompoundTag$Type): $Entity
 "writeOwner"(arg0: $CompoundTag$Type): void
 "onSummonDeath"(arg0: $Level$Type, arg1: $DamageSource$Type, arg2: boolean): void
 "getTicksLeft"(): integer
 "getOwner"(): $LivingEntity
 "getOwnerUUID"(): $UUID
 "level"(): $EntityGetter
}

export namespace $ISummon {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISummon$Type = ($ISummon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISummon_ = $ISummon$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/enchanting_apparatus/$IEnchantingRecipe" {
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
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnchantingApparatusTile, $EnchantingApparatusTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$EnchantingApparatusTile"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $IEnchantingRecipe extends $Recipe<($EnchantingApparatusTile)> {

 "getResult"(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type, arg2: $EnchantingApparatusTile$Type): $ItemStack
 "isMatch"(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type, arg2: $EnchantingApparatusTile$Type, arg3: $Player$Type): boolean
 "consumesSource"(): boolean
 "getSourceCost"(): integer
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "getId"(): $ResourceLocation
 "getToastSymbol"(): $ItemStack
 "getSerializer"(): $RecipeSerializer<(any)>
 "getRemainingItems"(arg0: $EnchantingApparatusTile$Type): $NonNullList<($ItemStack)>
 "getIngredients"(): $NonNullList<($Ingredient)>
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "showNotification"(): boolean
 "isIncomplete"(): boolean
 "assemble"(arg0: $EnchantingApparatusTile$Type, arg1: $RegistryAccess$Type): $ItemStack
 "matches"(arg0: $EnchantingApparatusTile$Type, arg1: $Level$Type): boolean
 "isSpecial"(): boolean
 "getType"(): $ResourceLocation
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "getOrCreateId"(): $ResourceLocation
 "getSchema"(): $RecipeSchema
 "setGroup"(group: string): void
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "getGroup"(): string
 "getMod"(): string
}

export namespace $IEnchantingRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnchantingRecipe$Type = ($IEnchantingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnchantingRecipe_ = $IEnchantingRecipe$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/world/feature/$SingleBlockFeature" {
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$ChunkGenerator, $ChunkGenerator$Type} from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
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

export class $SingleBlockFeature extends $Feature<($BlockStateConfiguration)> {
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

constructor(arg0: $Codec$Type<($BlockStateConfiguration$Type)>)

public "place"(arg0: $BlockStateConfiguration$Type, arg1: $WorldGenLevel$Type, arg2: $ChunkGenerator$Type, arg3: $RandomSource$Type, arg4: $BlockPos$Type): boolean
public "onStatePlace"(arg0: $WorldGenLevel$Type, arg1: $ChunkGenerator$Type, arg2: $RandomSource$Type, arg3: $BlockPos$Type, arg4: $BlockStateConfiguration$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleBlockFeature$Type = ($SingleBlockFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingleBlockFeature_ = $SingleBlockFeature$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$RelayDepositBlock" {
import {$Relay, $Relay$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$Relay"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $RelayDepositBlock extends $Relay {
static readonly "shape": $VoxelShape
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

constructor(arg0: string)
constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelayDepositBlock$Type = ($RelayDepositBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelayDepositBlock_ = $RelayDepositBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$MirrorWeave" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
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
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$ModBlock, $ModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$ModBlock"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $MirrorWeave extends $ModBlock implements $EntityBlock {
static readonly "LIGHT_LEVEL": $Property<(integer)>
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
constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setMimicState"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getInteractionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isCollisionShapeFullBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MirrorWeave$Type = ($MirrorWeave);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MirrorWeave_ = $MirrorWeave$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$ITickableBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export interface $ITickableBlock extends $EntityBlock {

 "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
 "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener

(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}

export namespace $ITickableBlock {
function createTickerHelper<E, A>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITickableBlock$Type = ($ITickableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITickableBlock_ = $ITickableBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$SconceBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TickableModBlock, $TickableModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$TickableModBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SconceBlock extends $TickableModBlock {
static readonly "FACING": $DirectionProperty
static readonly "LIGHT_LEVEL": $Property<(integer)>
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SconceBlock$Type = ($SconceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SconceBlock_ = $SconceBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/potions/$MagicFindEffect" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $MagicFindEffect extends $MobEffect {

constructor()

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicFindEffect$Type = ($MagicFindEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicFindEffect_ = $MagicFindEffect$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$BrazierRelay" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TickableModBlock, $TickableModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$TickableModBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BrazierRelay extends $TickableModBlock {
static "shape": $VoxelShape
static readonly "LIT": $Property<(boolean)>
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrazierRelay$Type = ($BrazierRelay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrazierRelay_ = $BrazierRelay$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/crafting/recipes/$DyeRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$DyeRecipe, $DyeRecipe$Type} from "packages/com/hollingsworth/arsnouveau/common/crafting/recipes/$DyeRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $DyeRecipe$Serializer implements $RecipeSerializer<($DyeRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $DyeRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $DyeRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $DyeRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $DyeRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyeRecipe$Serializer$Type = ($DyeRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DyeRecipe$Serializer_ = $DyeRecipe$Serializer$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$AlchemicalSourcelinkBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$SourcelinkBlock, $SourcelinkBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$SourcelinkBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AlchemicalSourcelinkBlock extends $SourcelinkBlock {
static readonly "shape": $VoxelShape
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
constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemicalSourcelinkBlock$Type = ($AlchemicalSourcelinkBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemicalSourcelinkBlock_ = $AlchemicalSourcelinkBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$PortalBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$PortalBlock$Size, $PortalBlock$Size$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$PortalBlock$Size"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TickableModBlock, $TickableModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$TickableModBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$WarpScroll$WarpScrollData, $WarpScroll$WarpScrollData$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$WarpScroll$WarpScrollData"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $PortalBlock extends $TickableModBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
static readonly "ALTERNATE": $BooleanProperty
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

public "setType"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: boolean): void
public "trySpawnPortal"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $WarpScroll$WarpScrollData$Type, arg3: string): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "trySpawnHorizontalPortal"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $WarpScroll$WarpScrollData$Type, arg3: string): boolean
public "trySpawnVerticalPortal"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $WarpScroll$WarpScrollData$Type, arg3: string): boolean
public "onProjectileHit"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockHitResult$Type, arg3: $Projectile$Type): void
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "isPortal"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): $PortalBlock$Size
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortalBlock$Type = ($PortalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortalBlock_ = $PortalBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/spell/$ISpellCaster" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ParticleColor, $ParticleColor$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$ParticleColor"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"
import {$Spell, $Spell$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$Spell"
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$SpellResolver, $SpellResolver$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellResolver"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ConfiguredSpellSound, $ConfiguredSpellSound$Type} from "packages/com/hollingsworth/arsnouveau/api/sound/$ConfiguredSpellSound"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ISpellCaster {

 "setColor"(arg0: $ParticleColor$Type): void
 "setColor"(arg0: $ParticleColor$Type, arg1: integer): void
 "getSpells"(): $Map<(integer), ($Spell)>
 "copyFromCaster"(arg0: $ISpellCaster$Type): void
 "getTagID"(): $ResourceLocation
 "getSpellResolver"(arg0: $SpellContext$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $SpellResolver
 "getCurrentSlot"(): integer
 "setCurrentSlot"(arg0: integer): void
 "getColor"(): $ParticleColor
 "getColor"(arg0: integer): $ParticleColor
 "getSpellName"(): string
 "getSpellName"(arg0: integer): string
 "modifySpellBeforeCasting"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $InteractionHand$Type, arg3: $Spell$Type): $Spell
 "setSound"(arg0: $ConfiguredSpellSound$Type, arg1: integer): void
 "setSound"(arg0: $ConfiguredSpellSound$Type): void
 "playSound"(arg0: $BlockPos$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: $ConfiguredSpellSound$Type, arg4: $SoundSource$Type): void
 "castSpell"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $InteractionHand$Type, arg3: $Component$Type, arg4: $Spell$Type): $InteractionResultHolder<($ItemStack)>
 "castSpell"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $InteractionHand$Type, arg3: $Component$Type): $InteractionResultHolder<($ItemStack)>
 "setFlavorText"(arg0: string): void
 "setSpellName"(arg0: string): void
 "setSpellName"(arg0: string, arg1: integer): void
 "getFlavorText"(): string
 "getMaxSlots"(): integer
 "getCurrentSound"(): $ConfiguredSpellSound
 "setHiddenRecipe"(arg0: string): void
 "setSpellHidden"(arg0: boolean): void
 "setSpell"(arg0: $Spell$Type, arg1: integer): void
 "setSpell"(arg0: $Spell$Type): void
 "setNextSlot"(): void
 "isSpellHidden"(): boolean
 "setPreviousSlot"(): void
 "getHiddenRecipe"(): string
 "getSound"(arg0: integer): $ConfiguredSpellSound
 "getSpell"(): $Spell
 "getSpell"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $InteractionHand$Type, arg3: $ISpellCaster$Type): $Spell
 "getSpell"(arg0: integer): $Spell
}

export namespace $ISpellCaster {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpellCaster$Type = ($ISpellCaster);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISpellCaster_ = $ISpellCaster$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/client/particle/$LineParticleType" {
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$ColoredDynamicTypeData, $ColoredDynamicTypeData$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$ColoredDynamicTypeData"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $LineParticleType extends $ParticleType<($ColoredDynamicTypeData)> {

constructor()

public "codec"(): $Codec<($ColoredDynamicTypeData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LineParticleType$Type = ($LineParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LineParticleType_ = $LineParticleType$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$CraftingLecternBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TickableModBlock, $TickableModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$TickableModBlock"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $CraftingLecternBlock extends $TickableModBlock {
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

public "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingLecternBlock$Type = ($CraftingLecternBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingLecternBlock_ = $CraftingLecternBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$StarbuncleShard" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StarbuncleShard extends $ModItem {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StarbuncleShard$Type = ($StarbuncleShard);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StarbuncleShard_ = $StarbuncleShard$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/event/$SpellCastEvent" {
import {$Spell, $Spell$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$Spell"
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$LivingEvent, $LivingEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export class $SpellCastEvent extends $LivingEvent {
 "spell": $Spell
 "context": $SpellContext

constructor()
constructor(arg0: $Spell$Type, arg1: $SpellContext$Type)

public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "getWorld"(): $Level
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
get "world"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellCastEvent$Type = ($SpellCastEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellCastEvent_ = $SpellCastEvent$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/perk/$IPerk" {
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$Type} from "packages/com/google/common/collect/$ImmutableMultimap$Builder"
import {$PerkSlot, $PerkSlot$Type} from "packages/com/hollingsworth/arsnouveau/api/perk/$PerkSlot"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IPerk {

 "getName"(): string
 "getModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type, arg2: integer): $Multimap<($Attribute), ($AttributeModifier)>
 "attributeBuilder"(): $ImmutableMultimap$Builder<($Attribute), ($AttributeModifier)>
 "minimumSlot"(): $PerkSlot
 "validForSlot"(arg0: $PerkSlot$Type, arg1: $ItemStack$Type, arg2: $Player$Type): boolean
 "getLangDescription"(): string
 "getLangName"(): string
 "getDescriptionKey"(): string
 "getRegistryName"(): $ResourceLocation

(): string
}

export namespace $IPerk {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPerk$Type = ($IPerk);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPerk_ = $IPerk$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/tile/$RotatingTurretTile" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TurretSpellCaster, $TurretSpellCaster$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$TurretSpellCaster"
import {$BasicSpellTurretTile, $BasicSpellTurretTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$BasicSpellTurretTile"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ColorPos, $ColorPos$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$ColorPos"
import {$IWandable, $IWandable$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$IWandable"

export class $RotatingTurretTile extends $BasicSpellTurretTile implements $IWandable {
 "rotationX": float
 "rotationY": float
 "neededRotationX": float
 "neededRotationY": float
 "clientNeededX": float
 "clientNeededY": float
 "spellCaster": $TurretSpellCaster
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "aim"(arg0: $BlockPos$Type, arg1: $Player$Type): void
public "tick"(): void
public "onFinishedConnectionFirst"(arg0: $BlockPos$Type, arg1: $LivingEntity$Type, arg2: $Player$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public static "angleBetween"(arg0: $Vec3$Type, arg1: $Vec3$Type): double
public "getRotationY"(): float
public "getRotationX"(): float
public "setRotationX"(arg0: float): void
public "getShootAngle"(): $Vec3
public "setRotationY"(arg0: float): void
public "onFinishedConnectionFirst"(arg0: $BlockPos$Type, arg1: $Direction$Type, arg2: $LivingEntity$Type, arg3: $Player$Type): void
public "onWanded"(arg0: $Player$Type): void
public "getWandHighlight"(arg0: $List$Type<($ColorPos$Type)>): $List<($ColorPos)>
public "onFinishedConnectionLast"(arg0: $BlockPos$Type, arg1: $LivingEntity$Type, arg2: $Player$Type): void
public "onFinishedConnectionLast"(arg0: $BlockPos$Type, arg1: $Direction$Type, arg2: $LivingEntity$Type, arg3: $Player$Type): void
get "rotationY"(): float
get "rotationX"(): float
set "rotationX"(value: float)
get "shootAngle"(): $Vec3
set "rotationY"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotatingTurretTile$Type = ($RotatingTurretTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotatingTurretTile_ = $RotatingTurretTile$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/curios/$ShapersFocus" {
import {$EnchantedFallingBlock, $EnchantedFallingBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/entity/$EnchantedFallingBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SpellStats$Builder, $SpellStats$Builder$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats$Builder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISpellModifierItem, $ISpellModifierItem$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$ISpellModifierItem"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ArsNouveauCurio, $ArsNouveauCurio$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$ArsNouveauCurio"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SpellResolver, $SpellResolver$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellResolver"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ShapersFocus extends $ArsNouveauCurio implements $ISpellModifierItem {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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

public "applyItemModifiers"(arg0: $ItemStack$Type, arg1: $SpellStats$Builder$Type, arg2: $AbstractSpellPart$Type, arg3: $HitResult$Type, arg4: $Level$Type, arg5: $LivingEntity$Type, arg6: $SpellContext$Type): $SpellStats$Builder
public static "tryPropagateEntitySpell"(arg0: $EnchantedFallingBlock$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: $SpellContext$Type, arg4: $SpellResolver$Type): $SpellContext
/**
 * 
 * @deprecated
 */
public static "tryPropagateEntitySpell"(arg0: $EnchantedFallingBlock$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: $SpellContext$Type, arg4: $SpellResolver$Type): void
/**
 * 
 * @deprecated
 */
public static "tryPropagateBlockSpell"(arg0: $BlockHitResult$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: $SpellContext$Type, arg4: $SpellResolver$Type): void
public static "tryPropagateBlockSpell"(arg0: $BlockHitResult$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: $SpellContext$Type, arg4: $SpellResolver$Type): $SpellContext
public "applyModifiers"(arg0: $SpellStats$Builder$Type, arg1: $AbstractSpellPart$Type, arg2: $HitResult$Type, arg3: $Level$Type, arg4: $LivingEntity$Type, arg5: $SpellContext$Type): $SpellStats$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapersFocus$Type = ($ShapersFocus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapersFocus_ = $ShapersFocus$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/setup/registry/$RecipeRegistry$ModRecipeType" {
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $RecipeRegistry$ModRecipeType<T extends $Recipe<(any)>> implements $RecipeType<(T)> {


public "toString"(): string
public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$Type): $RecipeType<(T)>
public static "register"<T extends $Recipe<(any)>>(arg0: string): $RecipeType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeRegistry$ModRecipeType$Type<T> = ($RecipeRegistry$ModRecipeType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeRegistry$ModRecipeType_<T> = $RecipeRegistry$ModRecipeType$Type<(T)>;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$RitualTablet" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$AbstractRitual, $AbstractRitual$Type} from "packages/com/hollingsworth/arsnouveau/api/ritual/$AbstractRitual"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RitualTablet extends $ModItem {
 "ritual": $AbstractRitual
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
constructor(arg0: $AbstractRitual$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualTablet$Type = ($RitualTablet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RitualTablet_ = $RitualTablet$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$ModBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $ModBlock extends $Block {
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
constructor()

public static "defaultProperties"(): $BlockBehaviour$Properties
public "shouldDisplayFluidOverlay"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModBlock$Type = ($ModBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModBlock_ = $ModBlock$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/client/particle/$GlowParticleType" {
import {$ColorParticleTypeData, $ColorParticleTypeData$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$ColorParticleTypeData"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $GlowParticleType extends $ParticleType<($ColorParticleTypeData)> {

constructor()

public "codec"(): $Codec<($ColorParticleTypeData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlowParticleType$Type = ($GlowParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlowParticleType_ = $GlowParticleType$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AbstractAugment, $AbstractAugment$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractAugment"

export class $SpellStats {


public "getDamageModifier"(): double
public "getBuffCount"(arg0: $AbstractAugment$Type): integer
public "getAccMultiplier"(): float
public "getAmpMultiplier"(): double
public "hasBuff"(arg0: $AbstractAugment$Type): boolean
public "getAoeMultiplier"(): double
public "setAmpMultiplier"(arg0: double): void
public "isRandomized"(): boolean
public "getDurationInTicks"(): integer
public "setDamageModifier"(arg0: double): void
public "isSensitive"(): boolean
public "getDurationMultiplier"(): double
public "addTooltip"(arg0: $List$Type<($Component$Type)>): $List<($Component)>
public "setDurationMultiplier"(arg0: double): void
public "setAccMultiplier"(arg0: float): void
public "setModifierItems"(arg0: $List$Type<($ItemStack$Type)>): void
public "getModifierItems"(): $List<($ItemStack)>
public "getAugments"(): $List<($AbstractAugment)>
public "setAugments"(arg0: $List$Type<($AbstractAugment$Type)>): void
get "damageModifier"(): double
get "accMultiplier"(): float
get "ampMultiplier"(): double
get "aoeMultiplier"(): double
set "ampMultiplier"(value: double)
get "randomized"(): boolean
get "durationInTicks"(): integer
set "damageModifier"(value: double)
get "sensitive"(): boolean
get "durationMultiplier"(): double
set "durationMultiplier"(value: double)
set "accMultiplier"(value: float)
set "modifierItems"(value: $List$Type<($ItemStack$Type)>)
get "modifierItems"(): $List<($ItemStack)>
get "augments"(): $List<($AbstractAugment)>
set "augments"(value: $List$Type<($AbstractAugment$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellStats$Type = ($SpellStats);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellStats_ = $SpellStats$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$ArchfruitPod" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$SpellStats, $SpellStats$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ILightable, $ILightable$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$ILightable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$CocoaBlock, $CocoaBlock$Type} from "packages/net/minecraft/world/level/block/$CocoaBlock"

export class $ArchfruitPod extends $CocoaBlock implements $ILightable {
 "surviveTag": $TagKey<($Block)>
/**
 * 
 * @deprecated
 */
 "surviveBlock": $Supplier<($Block)>
static readonly "MAX_AGE": integer
static readonly "AGE": $IntegerProperty
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
constructor(arg0: $TagKey$Type<($Block$Type)>)
/**
 * 
 * @deprecated
 */
constructor(arg0: $Supplier$Type<($Block$Type)>)

public "onLight"(arg0: $HitResult$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: $SpellStats$Type, arg4: $SpellContext$Type): void
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchfruitPod$Type = ($ArchfruitPod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchfruitPod_ = $ArchfruitPod$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/client/gui/radial_menu/$RadialMenu" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$SecondaryIconPosition, $SecondaryIconPosition$Type} from "packages/com/hollingsworth/arsnouveau/client/gui/radial_menu/$SecondaryIconPosition"
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"
import {$DrawCallback, $DrawCallback$Type} from "packages/com/hollingsworth/arsnouveau/client/gui/radial_menu/$DrawCallback"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$RadialMenuSlot, $RadialMenuSlot$Type} from "packages/com/hollingsworth/arsnouveau/client/gui/radial_menu/$RadialMenuSlot"

export class $RadialMenu<T> {

constructor(arg0: $IntConsumer$Type, arg1: $List$Type<($RadialMenuSlot$Type<(T)>)>, arg2: $DrawCallback$Type<(T)>, arg3: integer)
constructor(arg0: $IntConsumer$Type, arg1: $List$Type<($RadialMenuSlot$Type<(T)>)>, arg2: $SecondaryIconPosition$Type, arg3: $DrawCallback$Type<(T)>, arg4: integer)

public "getOffset"(): integer
public "setCurrentSlot"(arg0: integer): void
public "drawIcon"(arg0: T, arg1: $GuiGraphics$Type, arg2: integer, arg3: integer, arg4: integer): void
public "getSecondaryIconStartingPosition"(): $SecondaryIconPosition
public "isShowMoreSecondaryItems"(): boolean
public "getRadialMenuSlots"(): $List<($RadialMenuSlot<(T)>)>
get "offset"(): integer
set "currentSlot"(value: integer)
get "secondaryIconStartingPosition"(): $SecondaryIconPosition
get "showMoreSecondaryItems"(): boolean
get "radialMenuSlots"(): $List<($RadialMenuSlot<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadialMenu$Type<T> = ($RadialMenu<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadialMenu_<T> = $RadialMenu$Type<(T)>;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/item/inv/$InventoryManager" {
import {$InteractType, $InteractType$Type} from "packages/com/hollingsworth/arsnouveau/api/item/inv/$InteractType"
import {$ToIntFunction, $ToIntFunction$Type} from "packages/java/util/function/$ToIntFunction"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ExtractedStack, $ExtractedStack$Type} from "packages/com/hollingsworth/arsnouveau/api/item/inv/$ExtractedStack"
import {$SlotReference, $SlotReference$Type} from "packages/com/hollingsworth/arsnouveau/api/item/inv/$SlotReference"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MultiExtractedReference, $MultiExtractedReference$Type} from "packages/com/hollingsworth/arsnouveau/api/item/inv/$MultiExtractedReference"
import {$IWrappedCaster, $IWrappedCaster$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/wrapped_caster/$IWrappedCaster"
import {$FilterableItemHandler, $FilterableItemHandler$Type} from "packages/com/hollingsworth/arsnouveau/api/item/inv/$FilterableItemHandler"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MultiInsertReference, $MultiInsertReference$Type} from "packages/com/hollingsworth/arsnouveau/api/item/inv/$MultiInsertReference"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $InventoryManager {

constructor(arg0: $IWrappedCaster$Type)
constructor(arg0: $List$Type<($FilterableItemHandler$Type)>)
constructor()

public "getInventory"(): $List<($FilterableItemHandler)>
public "findItem"(arg0: $Predicate$Type<($ItemStack$Type)>, arg1: $InteractType$Type): $SlotReference
public "findItem"(arg0: $FilterableItemHandler$Type, arg1: $Predicate$Type<($ItemStack$Type)>, arg2: $InteractType$Type): $SlotReference
public "extractRandomItem"(arg0: $Predicate$Type<($ItemStack$Type)>, arg1: integer): $ExtractedStack
public "extractRandomItem"(arg0: $FilterableItemHandler$Type, arg1: $Predicate$Type<($ItemStack$Type)>, arg2: integer): $ExtractedStack
public "insertStack"(arg0: $ItemStack$Type): $ItemStack
public "extractSlotMax"(arg0: integer): $InventoryManager
public "insertOrDrop"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "extractByAmount"(arg0: $ToIntFunction$Type<($ItemStack$Type)>): $ExtractedStack
public static "fromTile"(arg0: $BlockEntity$Type): $InventoryManager
public "insertStackWithReference"(arg0: $ItemStack$Type): $MultiInsertReference
public "extractItem"(arg0: $Predicate$Type<($ItemStack$Type)>, arg1: integer): $ExtractedStack
public "extractItem"(arg0: $FilterableItemHandler$Type, arg1: $Predicate$Type<($ItemStack$Type)>, arg2: integer): $ExtractedStack
public "extractItemFromAll"(arg0: $ItemStack$Type, arg1: integer, arg2: boolean): $MultiExtractedReference
public "insertSlotMax"(arg0: integer): $InventoryManager
public "highestPrefInventory"(arg0: $List$Type<($FilterableItemHandler$Type)>, arg1: $Predicate$Type<($ItemStack$Type)>, arg2: $InteractType$Type): $FilterableItemHandler
public "extractAllFromHandler"(arg0: $FilterableItemHandler$Type, arg1: $ItemStack$Type, arg2: integer): $MultiExtractedReference
public "preferredForStack"(arg0: $ItemStack$Type, arg1: boolean): $List<($FilterableItemHandler)>
public "findItemR"(arg0: $FilterableItemHandler$Type, arg1: $Predicate$Type<($ItemStack$Type)>, arg2: $InteractType$Type): $SlotReference
public "addFilterable"(arg0: $FilterableItemHandler$Type): boolean
public "findItems"(arg0: $FilterableItemHandler$Type, arg1: $Predicate$Type<($ItemStack$Type)>, arg2: $InteractType$Type, arg3: integer): $List<($SlotReference)>
get "inventory"(): $List<($FilterableItemHandler)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryManager$Type = ($InventoryManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryManager_ = $InventoryManager$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/enchantment/$ManaBoost" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $ManaBoost extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "getMinCost"(arg0: integer): integer
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManaBoost$Type = ($ManaBoost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ManaBoost_ = $ManaBoost$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$PotionJar" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
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
import {$ModBlock, $ModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$ModBlock"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $PotionJar extends $ModBlock implements $SimpleWaterloggedBlock, $EntityBlock {
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
constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionJar$Type = ($PotionJar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionJar_ = $PotionJar$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/spell/$SpellCaster" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ParticleColor, $ParticleColor$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$ParticleColor"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"
import {$Spell, $Spell$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$Spell"
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ISpellCaster, $ISpellCaster$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$ISpellCaster"
import {$SpellResolver, $SpellResolver$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellResolver"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ConfiguredSpellSound, $ConfiguredSpellSound$Type} from "packages/com/hollingsworth/arsnouveau/api/sound/$ConfiguredSpellSound"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SpellCaster implements $ISpellCaster {
 "stack": $ItemStack
 "flavorText": string
 "isHidden": boolean
 "hiddenText": string

constructor(arg0: $ItemStack$Type)
constructor(arg0: $CompoundTag$Type)

public "setColor"(arg0: $ParticleColor$Type, arg1: integer): void
public "setColor"(arg0: $ParticleColor$Type): void
public "getSpells"(): $Map<(integer), ($Spell)>
public "getTagID"(): $ResourceLocation
public "writeTag"(arg0: $CompoundTag$Type): $CompoundTag
public "getCurrentSlot"(): integer
public "setCurrentSlot"(arg0: integer): void
public "getColor"(): $ParticleColor
public "getColor"(arg0: integer): $ParticleColor
public "getSpellName"(): string
public "getSpellName"(arg0: integer): string
public "setSound"(arg0: $ConfiguredSpellSound$Type, arg1: integer): void
public "setSound"(arg0: $ConfiguredSpellSound$Type): void
public "writeItem"(arg0: $ItemStack$Type): void
public "setFlavorText"(arg0: string): void
public "setSpellName"(arg0: string): void
public "setSpellName"(arg0: string, arg1: integer): void
public "getFlavorText"(): string
public "getMaxSlots"(): integer
public "setHiddenRecipe"(arg0: string): void
public "setSpellHidden"(arg0: boolean): void
public "setSpell"(arg0: $Spell$Type): void
public "setSpell"(arg0: $Spell$Type, arg1: integer): void
public "isSpellHidden"(): boolean
public "getHiddenRecipe"(): string
public "getSound"(arg0: integer): $ConfiguredSpellSound
public "getSpell"(arg0: integer): $Spell
public "getSpell"(): $Spell
public "serializeOnTag"(arg0: $CompoundTag$Type): void
public "copyFromCaster"(arg0: $ISpellCaster$Type): void
public "getSpellResolver"(arg0: $SpellContext$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $SpellResolver
public "modifySpellBeforeCasting"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $InteractionHand$Type, arg3: $Spell$Type): $Spell
public "playSound"(arg0: $BlockPos$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: $ConfiguredSpellSound$Type, arg4: $SoundSource$Type): void
public "castSpell"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $InteractionHand$Type, arg3: $Component$Type, arg4: $Spell$Type): $InteractionResultHolder<($ItemStack)>
public "castSpell"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $InteractionHand$Type, arg3: $Component$Type): $InteractionResultHolder<($ItemStack)>
public "getCurrentSound"(): $ConfiguredSpellSound
public "setNextSlot"(): void
public "setPreviousSlot"(): void
public "getSpell"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $InteractionHand$Type, arg3: $ISpellCaster$Type): $Spell
set "color"(value: $ParticleColor$Type)
get "spells"(): $Map<(integer), ($Spell)>
get "tagID"(): $ResourceLocation
get "currentSlot"(): integer
set "currentSlot"(value: integer)
get "color"(): $ParticleColor
get "spellName"(): string
set "sound"(value: $ConfiguredSpellSound$Type)
set "flavorText"(value: string)
set "spellName"(value: string)
get "flavorText"(): string
get "maxSlots"(): integer
set "hiddenRecipe"(value: string)
set "spellHidden"(value: boolean)
set "spell"(value: $Spell$Type)
get "spellHidden"(): boolean
get "hiddenRecipe"(): string
get "spell"(): $Spell
get "currentSound"(): $ConfiguredSpellSound
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellCaster$Type = ($SpellCaster);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellCaster_ = $SpellCaster$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/ritual/$AbstractRitual" {
import {$RitualBrazierTile, $RitualBrazierTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$RitualBrazierTile"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ParticleColor, $ParticleColor$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$ParticleColor"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$RitualContext, $RitualContext$Type} from "packages/com/hollingsworth/arsnouveau/api/ritual/$RitualContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AbstractRitual {
 "tile": $RitualBrazierTile
 "rand": $RandomSource

constructor()

public "getName"(): string
public "write"(arg0: $CompoundTag$Type): void
public "getContext"(): $RitualContext
public "read"(arg0: $CompoundTag$Type): void
public "getDescription"(): string
public "getProgress"(): integer
public "isDone"(): boolean
public "isRunning"(): boolean
public "setContext"(arg0: $RitualContext$Type): void
/**
 * 
 * @deprecated
 */
public "onStart"(): void
public "onStart"(arg0: $Player$Type): void
public "getFormattedConsumedItems"(): $List<(string)>
public "getParticleIntensity"(): integer
public "getLangDescription"(): string
public "getLangName"(): string
public "getDescriptionKey"(): string
public "canStart"(arg0: $Player$Type): boolean
/**
 * 
 * @deprecated
 */
public "canStart"(): boolean
public "onItemConsumed"(arg0: $ItemStack$Type): void
public "setFinished"(): void
public "tryTick"(arg0: $RitualBrazierTile$Type): void
public "setNeedsSource"(arg0: boolean): void
public "getConsumedItems"(): $List<($ItemStack)>
public "canConsumeItem"(arg0: $ItemStack$Type): boolean
public "didConsumeItem"(arg0: $ItemLike$Type): boolean
public "incrementProgress"(): void
public "onEnd"(): void
public "itemConsumedCount"(arg0: $Predicate$Type<($ItemStack$Type)>): integer
public "getOuterColor"(): $ParticleColor
public "onStatusChanged"(arg0: boolean): void
public "needsSourceNow"(): boolean
public "onDestroy"(): void
public "takeSourceNow"(): boolean
/**
 * 
 * @deprecated
 */
public "canBeTraded"(): boolean
public "getCenterColor"(): $ParticleColor
public "getWorld"(): $Level
public "getPos"(): $BlockPos
public "getRegistryName"(): $ResourceLocation
public "consumesSource"(): boolean
public "getSourceCost"(): integer
get "name"(): string
get "context"(): $RitualContext
get "description"(): string
get "progress"(): integer
get "done"(): boolean
get "running"(): boolean
set "context"(value: $RitualContext$Type)
get "formattedConsumedItems"(): $List<(string)>
get "particleIntensity"(): integer
get "langDescription"(): string
get "langName"(): string
get "descriptionKey"(): string
set "needsSource"(value: boolean)
get "consumedItems"(): $List<($ItemStack)>
get "outerColor"(): $ParticleColor
get "centerColor"(): $ParticleColor
get "world"(): $Level
get "pos"(): $BlockPos
get "registryName"(): $ResourceLocation
get "sourceCost"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractRitual$Type = ($AbstractRitual);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractRitual_ = $AbstractRitual$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/crafting/recipes/$IDyeable" {
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IDyeable {

 "onDye"(arg0: $ItemStack$Type, arg1: $DyeColor$Type): void
 "getDyeColor"(arg0: $ItemStack$Type): integer
}

export namespace $IDyeable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDyeable$Type = ($IDyeable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDyeable_ = $IDyeable$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$TimerSpellTurret" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BasicSpellTurret, $BasicSpellTurret$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$BasicSpellTurret"
import {$AbstractCastMethod, $AbstractCastMethod$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractCastMethod"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$ITurretBehavior, $ITurretBehavior$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$ITurretBehavior"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $TimerSpellTurret extends $BasicSpellTurret {
static readonly "TRIGGERED": $BooleanProperty
static readonly "FACING": $DirectionProperty
static "TURRET_BEHAVIOR_MAP": $HashMap<($AbstractCastMethod), ($ITurretBehavior)>
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
constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimerSpellTurret$Type = ($TimerSpellTurret);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimerSpellTurret_ = $TimerSpellTurret$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/api/item/$ICosmeticItem" {
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ICosmeticItem {

 "getTransformType"(): $ItemDisplayContext
 "getScaling"(): $Vec3
 "getScaling"(arg0: $LivingEntity$Type): $Vec3
 "getTranslations"(arg0: $LivingEntity$Type): $Vec3
 "getTranslations"(): $Vec3
 "canWear"(arg0: $LivingEntity$Type): boolean
 "getBone"(): string
}

export namespace $ICosmeticItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICosmeticItem$Type = ($ICosmeticItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICosmeticItem_ = $ICosmeticItem$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$ArcanePedestal" {
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
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
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
import {$ModBlock, $ModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$ModBlock"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ArcanePedestal extends $ModBlock implements $EntityBlock, $SimpleWaterloggedBlock {
static readonly "shape": $VoxelShape
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
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
export type $ArcanePedestal$Type = ($ArcanePedestal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArcanePedestal_ = $ArcanePedestal$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/tile/$IAnimationListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IAnimationListener {

 "startAnimation"(arg0: integer): void

(arg0: integer): void
}

export namespace $IAnimationListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAnimationListener$Type = ($IAnimationListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAnimationListener_ = $IAnimationListener$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/items/$ManipulationEssence" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$ModItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ManipulationEssence extends $ModItem {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManipulationEssence$Type = ($ManipulationEssence);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ManipulationEssence_ = $ManipulationEssence$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$EnchantedSpellTurret" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BasicSpellTurret, $BasicSpellTurret$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$BasicSpellTurret"
import {$AbstractCastMethod, $AbstractCastMethod$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractCastMethod"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$ITurretBehavior, $ITurretBehavior$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$ITurretBehavior"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $EnchantedSpellTurret extends $BasicSpellTurret {
static readonly "TRIGGERED": $BooleanProperty
static readonly "FACING": $DirectionProperty
static "TURRET_BEHAVIOR_MAP": $HashMap<($AbstractCastMethod), ($ITurretBehavior)>
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantedSpellTurret$Type = ($EnchantedSpellTurret);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantedSpellTurret_ = $EnchantedSpellTurret$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$CreativeSourceJar" {
import {$SourceJar, $SourceJar$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$SourceJar"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $CreativeSourceJar extends $SourceJar {
static readonly "fill": $Property<(integer)>
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeSourceJar$Type = ($CreativeSourceJar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeSourceJar_ = $CreativeSourceJar$Type;
}}
declare module "packages/com/hollingsworth/arsnouveau/common/block/$MagicLeaves" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$LeavesBlock, $LeavesBlock$Type} from "packages/net/minecraft/world/level/block/$LeavesBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $MagicLeaves extends $LeavesBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicLeaves$Type = ($MagicLeaves);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicLeaves_ = $MagicLeaves$Type;
}}
