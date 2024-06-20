declare module "packages/nonamecrackers2/endertrigon/mixin/$IMixinEnderDragon" {
import {$EnderDragonPart, $EnderDragonPart$Type} from "packages/net/minecraft/world/entity/boss/$EnderDragonPart"

export interface $IMixinEnderDragon {

 "callTickPart"(arg0: $EnderDragonPart$Type, arg1: double, arg2: double, arg3: double): void
 "callGetHeadYOffset"(): float
}

export namespace $IMixinEnderDragon {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinEnderDragon$Type = ($IMixinEnderDragon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinEnderDragon_ = $IMixinEnderDragon$Type;
}}
declare module "packages/nonamecrackers2/endertrigon/common/util/$EnderDragonExtension" {
import {$EnderDragonHead, $EnderDragonHead$Type} from "packages/nonamecrackers2/endertrigon/common/entity/boss/enderdragon/$EnderDragonHead"

export interface $EnderDragonExtension {

 "getOtherHeads"(): ($EnderDragonHead)[]

(): ($EnderDragonHead)[]
}

export namespace $EnderDragonExtension {
const SECOND_HEAD: integer
const THIRD_HEAD: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderDragonExtension$Type = ($EnderDragonExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderDragonExtension_ = $EnderDragonExtension$Type;
}}
declare module "packages/nonamecrackers2/endertrigon/common/util/$DragonStrafeExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DragonStrafeExtension {

 "setTimesStrafing"(arg0: integer): void
 "getTimesStrafing"(): integer
 "countStrafe"(): void
}

export namespace $DragonStrafeExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragonStrafeExtension$Type = ($DragonStrafeExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragonStrafeExtension_ = $DragonStrafeExtension$Type;
}}
declare module "packages/nonamecrackers2/endertrigon/common/entity/boss/enderdragon/$EnderDragonHead" {
import {$EnderDragon, $EnderDragon$Type} from "packages/net/minecraft/world/entity/boss/enderdragon/$EnderDragon"
import {$EnderDragonPart, $EnderDragonPart$Type} from "packages/net/minecraft/world/entity/boss/$EnderDragonPart"

export class $EnderDragonHead {
readonly "dragon": $EnderDragon
readonly "head": $EnderDragonPart
readonly "neck": $EnderDragonPart

constructor(arg0: $EnderDragon$Type, arg1: $EnderDragonPart$Type, arg2: $EnderDragonPart$Type, arg3: float, arg4: float, arg5: float, arg6: float, arg7: integer)

public "tick"(): void
public "getLatencyOffset"(): integer
public "getRenderYRotOffset"(): float
public "getRenderXRotOffset"(): float
get "latencyOffset"(): integer
get "renderYRotOffset"(): float
get "renderXRotOffset"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderDragonHead$Type = ($EnderDragonHead);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderDragonHead_ = $EnderDragonHead$Type;
}}
declare module "packages/nonamecrackers2/endertrigon/common/item/$DragonHornItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Instrument, $Instrument$Type} from "packages/net/minecraft/world/item/$Instrument"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$InstrumentItem, $InstrumentItem$Type} from "packages/net/minecraft/world/item/$InstrumentItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DragonHornItem extends $InstrumentItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $TagKey$Type<($Instrument$Type)>)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragonHornItem$Type = ($DragonHornItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragonHornItem_ = $DragonHornItem$Type;
}}
declare module "packages/nonamecrackers2/endertrigon/mixin/$IMixinEnderDragonPhase" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinEnderDragonPhase {

}

export namespace $IMixinEnderDragonPhase {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinEnderDragonPhase$Type = ($IMixinEnderDragonPhase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinEnderDragonPhase_ = $IMixinEnderDragonPhase$Type;
}}
declare module "packages/nonamecrackers2/endertrigon/common/block/$BabyDragonEgg" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FallingBlockEntity, $FallingBlockEntity$Type} from "packages/net/minecraft/world/entity/item/$FallingBlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$DragonEggBlock, $DragonEggBlock$Type} from "packages/net/minecraft/world/level/block/$DragonEggBlock"

export class $BabyDragonEgg extends $DragonEggBlock implements $EntityBlock {
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

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "onLand"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type, arg4: $FallingBlockEntity$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BabyDragonEgg$Type = ($BabyDragonEgg);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BabyDragonEgg_ = $BabyDragonEgg$Type;
}}
