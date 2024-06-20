declare module "packages/ky/someone/mods/gag/effect/$RepellingEffect" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$MobSpawnType, $MobSpawnType$Type} from "packages/net/minecraft/world/entity/$MobSpawnType"
import {$BaseSpawner, $BaseSpawner$Type} from "packages/net/minecraft/world/level/$BaseSpawner"
import {$EventResult, $EventResult$Type} from "packages/dev/architectury/event/$EventResult"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $RepellingEffect extends $MobEffect {

constructor()

public static "applyRepel"(entity: $LivingEntity$Type, level: $LevelAccessor$Type, x: double, y: double, z: double, type: $MobSpawnType$Type, spawner: $BaseSpawner$Type): $EventResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepellingEffect$Type = ($RepellingEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RepellingEffect_ = $RepellingEffect$Type;
}}
declare module "packages/ky/someone/mods/gag/item/$TemporalPouchItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$GAGItem, $GAGItem$Type} from "packages/ky/someone/mods/gag/item/$GAGItem"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TemporalPouchItem extends $GAGItem {
static readonly "GRAINS_NBT_KEY": string
static readonly "TIAB_STORED_KEY": string
static readonly "DO_NOT_ACCELERATE": $TagKey<($BlockEntityType<(any)>)>
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

public "grainsRequired"(level: integer): integer
public static "setStoredGrains"(stack: $ItemStack$Type, time: integer): void
public static "getStoredGrains"(stack: $ItemStack$Type): integer
public "getTimeForDisplay"(stack: $ItemStack$Type): $MutableComponent
public "verifyTagAfterLoad"(tag: $CompoundTag$Type): void
public "useOn"(ctx: $UseOnContext$Type): $InteractionResult
public "inventoryTick"(stack: $ItemStack$Type, level: $Level$Type, entity: $Entity$Type, itemSlot: integer, isSelected: boolean): void
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "shouldBob"(oldStack: $ItemStack$Type, newStack: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporalPouchItem$Type = ($TemporalPouchItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemporalPouchItem_ = $TemporalPouchItem$Type;
}}
declare module "packages/ky/someone/mods/gag/item/$ItemWithSubsets" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ItemWithSubsets {

 "getAdditionalSubItems"(): $Collection<($ItemStack)>
}

export namespace $ItemWithSubsets {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemWithSubsets$Type = ($ItemWithSubsets);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemWithSubsets_ = $ItemWithSubsets$Type;
}}
declare module "packages/ky/someone/mods/gag/item/$HearthstoneItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$GAGItem, $GAGItem$Type} from "packages/ky/someone/mods/gag/item/$GAGItem"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$TeleportPos, $TeleportPos$Type} from "packages/ky/someone/mods/gag/misc/$TeleportPos"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HearthstoneItem extends $GAGItem {
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
constructor(durability: integer)

public "getUsingTooltip"(player: $Player$Type, stack: $ItemStack$Type, useTicks: integer): $List<($Component)>
public "getHoldingTooltip"(player: $Player$Type, stack: $ItemStack$Type): $List<($Component)>
public "onUseTick"(level: $Level$Type, entity: $LivingEntity$Type, stack: $ItemStack$Type, ticks: integer): void
public "finishUsingItem"(stack: $ItemStack$Type, level: $Level$Type, entity: $LivingEntity$Type): $ItemStack
public "use"(level: $Level$Type, player: $Player$Type, interactionHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "getEnchantmentValue"(): integer
public "getUseDuration"(stack: $ItemStack$Type): integer
public "getUseAnimation"(itemStack: $ItemStack$Type): $UseAnim
public "getTeleportPos"(player: $Player$Type, stack: $ItemStack$Type): $TeleportPos
public "getTargetText"(player: $Player$Type, stack: $ItemStack$Type): $Component
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HearthstoneItem$Type = ($HearthstoneItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HearthstoneItem_ = $HearthstoneItem$Type;
}}
declare module "packages/ky/someone/mods/gag/item/$RepellingItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$GAGItem, $GAGItem$Type} from "packages/ky/someone/mods/gag/item/$GAGItem"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RepellingItem extends $GAGItem {
readonly "duration": integer
readonly "amplifier": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type, duration: integer, amplifier: integer, addExtraTooltip: boolean)

public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepellingItem$Type = ($RepellingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RepellingItem_ = $RepellingItem$Type;
}}
declare module "packages/ky/someone/mods/gag/item/$LabelingToolItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$GAGItem, $GAGItem$Type} from "packages/ky/someone/mods/gag/item/$GAGItem"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LabelingToolItem extends $GAGItem implements $MenuProvider {
static readonly "TITLE": $Component
static readonly "XP_COST": integer
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

public "createMenu"(i: integer, inventory: $Inventory$Type, player: $Player$Type): $AbstractContainerMenu
public "getDisplayName"(): $Component
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LabelingToolItem$Type = ($LabelingToolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LabelingToolItem_ = $LabelingToolItem$Type;
}}
declare module "packages/ky/someone/mods/gag/block/$NoSolicitorsSign" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
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
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$EventResult, $EventResult$Type} from "packages/dev/architectury/event/$EventResult"

export class $NoSolicitorsSign extends $Block {
static readonly "FACING": $DirectionProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "SILENT": $BooleanProperty
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

public static "blockWandererSpawn"(serverLevel: $ServerLevel$Type, pos: $BlockPos$Type): boolean
public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $LivingEntity$Type, stack: $ItemStack$Type): void
public "appendHoverText"(stack: $ItemStack$Type, level: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, bl: boolean): void
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, newState: $BlockState$Type, level: $LevelAccessor$Type, pos: $BlockPos$Type, newPos: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hitResult: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "canSurvive"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, ctx: $CollisionContext$Type): $VoxelShape
public static "notBuyingYourStuff"(entity: $Entity$Type, level: $Level$Type): $EventResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoSolicitorsSign$Type = ($NoSolicitorsSign);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoSolicitorsSign_ = $NoSolicitorsSign$Type;
}}
declare module "packages/ky/someone/mods/gag/item/$GAGItem" {
import {$ItemWithSubsets, $ItemWithSubsets$Type} from "packages/ky/someone/mods/gag/item/$ItemWithSubsets"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GAGItem extends $Item implements $ItemWithSubsets {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "allowNbtUpdateAnimation"(player: $Player$Type, hand: $InteractionHand$Type, oldStack: $ItemStack$Type, newStack: $ItemStack$Type): boolean
public "shouldDamage"(player: $Player$Type, stack: $ItemStack$Type): boolean
public "getUsingTooltip"(player: $Player$Type, stack: $ItemStack$Type, useTicks: integer): $List<($Component)>
public "getHoldingTooltip"(player: $Player$Type, stack: $ItemStack$Type): $List<($Component)>
public "shouldCauseReequipAnimation"(oldStack: $ItemStack$Type, newStack: $ItemStack$Type, slotChanged: boolean): boolean
public "shouldBob"(oldStack: $ItemStack$Type, newStack: $ItemStack$Type): boolean
public "getAdditionalSubItems"(): $Collection<($ItemStack)>
get "additionalSubItems"(): $Collection<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GAGItem$Type = ($GAGItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GAGItem_ = $GAGItem$Type;
}}
declare module "packages/ky/someone/mods/gag/item/$PigmentJarItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Pigment, $Pigment$Type} from "packages/ky/someone/mods/gag/misc/$Pigment"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$GAGItem, $GAGItem$Type} from "packages/ky/someone/mods/gag/item/$GAGItem"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PigmentJarItem extends $GAGItem {
static readonly "PIGMENT_NBT_KEY": string
static readonly "COLOR_NBT_KEY": string
static readonly "AMOUNT_NBT_KEY": string
static readonly "MAX_AMOUNT": integer
static readonly "DYE_AMOUNT": integer
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

public static "isEmpty"(stack: $ItemStack$Type): boolean
public "getAdditionalSubItems"(): $Collection<($ItemStack)>
public static "getRgbColor"(stack: $ItemStack$Type): integer
public static "isNonEmptyJar"(stack: $ItemStack$Type): boolean
public static "getPigment"(stack: $ItemStack$Type): $Pigment
public static "getColorAmount"(stack: $ItemStack$Type): integer
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, list: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
public "getName"(stack: $ItemStack$Type): $Component
get "additionalSubItems"(): $Collection<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PigmentJarItem$Type = ($PigmentJarItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PigmentJarItem_ = $PigmentJarItem$Type;
}}
declare module "packages/ky/someone/mods/gag/misc/$TeleportPos" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $TeleportPos extends $Record {

constructor(level: $ResourceLocation$Type, pos: $Vec3$Type, yaw: float)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "pos"(): $Vec3
public "level"(): $ResourceLocation
public "getLevel"(server: $MinecraftServer$Type): $ServerLevel
public "yaw"(): float
public static "fromNbt"(nbt: $CompoundTag$Type): $TeleportPos
public "toNbt"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeleportPos$Type = ($TeleportPos);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeleportPos_ = $TeleportPos$Type;
}}
declare module "packages/ky/someone/mods/gag/item/$EnergizedHearthstoneItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LightningBolt, $LightningBolt$Type} from "packages/net/minecraft/world/entity/$LightningBolt"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$TeleportPos, $TeleportPos$Type} from "packages/ky/someone/mods/gag/misc/$TeleportPos"
import {$HearthstoneItem, $HearthstoneItem$Type} from "packages/ky/someone/mods/gag/item/$HearthstoneItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EnergizedHearthstoneItem extends $HearthstoneItem {
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

public "isBound"(stack: $ItemStack$Type): boolean
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "getUseDuration"(stack: $ItemStack$Type): integer
public static "lightningStrike"(bolt: $LightningBolt$Type, level: $Level$Type, pos: $Vec3$Type, toStrike: $List$Type<($Entity$Type)>): void
public "getTeleportPos"(player: $Player$Type, stack: $ItemStack$Type): $TeleportPos
public "getTargetText"(player: $Player$Type, stack: $ItemStack$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergizedHearthstoneItem$Type = ($EnergizedHearthstoneItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergizedHearthstoneItem_ = $EnergizedHearthstoneItem$Type;
}}
declare module "packages/ky/someone/mods/gag/item/$DynamiteItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DynamiteItem$EntityFactory, $DynamiteItem$EntityFactory$Type} from "packages/ky/someone/mods/gag/item/$DynamiteItem$EntityFactory"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AbstractDynamiteEntity, $AbstractDynamiteEntity$Type} from "packages/ky/someone/mods/gag/entity/$AbstractDynamiteEntity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$GAGItem, $GAGItem$Type} from "packages/ky/someone/mods/gag/item/$GAGItem"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DynamiteItem<T extends $AbstractDynamiteEntity> extends $GAGItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type, factory: $DynamiteItem$EntityFactory$Type, infoTooltip: $List$Type<($Component$Type)>, throwSpeed: double)

public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamiteItem$Type<T> = ($DynamiteItem<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamiteItem_<T> = $DynamiteItem$Type<(T)>;
}}
declare module "packages/ky/someone/mods/gag/misc/$Pigment" {
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $Pigment {
static readonly "EMPTY": $Pigment


public "equals"(other: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "hex"(): string
public "color"(): integer
public "mix"(other: $Pigment$Type): $Pigment
public "amount"(): integer
public "withAmount"(amount: integer): $Pigment
public static "forLeather"(dye: $DyeColor$Type): $Pigment
public "rgb"(): integer
public static "ofRgb"(color: integer, amount: integer): $Pigment
public static "forText"(dye: $DyeColor$Type): $Pigment
public "asJar"(): $ItemStack
public "hsb"(): (float)[]
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pigment$Type = ($Pigment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pigment_ = $Pigment$Type;
}}
declare module "packages/ky/someone/mods/gag/item/$EscapeRopeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$GAGItem, $GAGItem$Type} from "packages/ky/someone/mods/gag/item/$GAGItem"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EscapeRopeItem extends $GAGItem {
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

public "finishUsingItem"(stack: $ItemStack$Type, level: $Level$Type, entity: $LivingEntity$Type): $ItemStack
public "use"(level: $Level$Type, player: $Player$Type, interactionHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "getEnchantmentValue"(): integer
public "getUseDuration"(stack: $ItemStack$Type): integer
public "getUseAnimation"(itemStack: $ItemStack$Type): $UseAnim
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EscapeRopeItem$Type = ($EscapeRopeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EscapeRopeItem_ = $EscapeRopeItem$Type;
}}
declare module "packages/ky/someone/mods/gag/item/$DynamiteItem$EntityFactory" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AbstractDynamiteEntity, $AbstractDynamiteEntity$Type} from "packages/ky/someone/mods/gag/entity/$AbstractDynamiteEntity"

export interface $DynamiteItem$EntityFactory {

 "create"(arg0: $Player$Type, arg1: $Level$Type): $AbstractDynamiteEntity

(arg0: $Player$Type, arg1: $Level$Type): $AbstractDynamiteEntity
}

export namespace $DynamiteItem$EntityFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamiteItem$EntityFactory$Type = ($DynamiteItem$EntityFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamiteItem$EntityFactory_ = $DynamiteItem$EntityFactory$Type;
}}
declare module "packages/ky/someone/mods/gag/entity/$AbstractDynamiteEntity" {
import {$ThrowableItemProjectile, $ThrowableItemProjectile$Type} from "packages/net/minecraft/world/entity/projectile/$ThrowableItemProjectile"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Stack, $Stack$Type} from "packages/java/util/$Stack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AbstractDynamiteEntity extends $ThrowableItemProjectile {
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

constructor(type: $EntityType$Type<(any)>, owner: $LivingEntity$Type, level: $Level$Type)
constructor(type: $EntityType$Type<(any)>, x: double, y: double, z: double, level: $Level$Type)
constructor(type: $EntityType$Type<(any)>, level: $Level$Type)

public "detonate"(arg0: $Vec3$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractDynamiteEntity$Type = ($AbstractDynamiteEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractDynamiteEntity_ = $AbstractDynamiteEntity$Type;
}}
