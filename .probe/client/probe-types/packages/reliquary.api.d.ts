declare module "packages/reliquary/api/$IPedestal" {
import {$FakePlayer, $FakePlayer$Type} from "packages/net/minecraftforge/common/util/$FakePlayer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IPedestal {

 "getItem"(): $ItemStack
 "getBlockPosition"(): $BlockPos
 "setItemData"(arg0: any): void
 "setItem"(arg0: $ItemStack$Type): void
 "getFakePlayer"(): $Optional<($FakePlayer)>
 "getPedestalsInRange"(arg0: $Level$Type, arg1: integer): $List<($BlockPos)>
 "addToConnectedInventory"(arg0: $Level$Type, arg1: $ItemStack$Type): integer
 "destroyItem"(): void
 "getItemData"(): any
 "switchOn"(arg0: $Level$Type, arg1: $BlockPos$Type): void
 "switchOff"(arg0: $Level$Type, arg1: $BlockPos$Type): void
 "switchedOn"(): boolean
 "fillConnectedTank"(arg0: $FluidStack$Type): integer
 "fillConnectedTank"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
 "setActionCoolDown"(arg0: integer): void
}

export namespace $IPedestal {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPedestal$Type = ($IPedestal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPedestal_ = $IPedestal$Type;
}}
declare module "packages/reliquary/api/$IPedestalActionItem" {
import {$IPedestal, $IPedestal$Type} from "packages/reliquary/api/$IPedestal"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IPedestalActionItem {

 "update"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $IPedestal$Type): void
 "stop"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $IPedestal$Type): void
 "onRemoved"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $IPedestal$Type): void
 "getRenderBoundingBoxOuterPosition"(): $Optional<($Vec3)>
}

export namespace $IPedestalActionItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPedestalActionItem$Type = ($IPedestalActionItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPedestalActionItem_ = $IPedestalActionItem$Type;
}}
