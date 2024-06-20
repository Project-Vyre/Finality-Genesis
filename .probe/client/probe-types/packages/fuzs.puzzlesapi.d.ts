declare module "packages/fuzs/puzzlesapi/mixin/slotcycling/client/accessor/$ItemInHandRendererAccessor" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ItemInHandRendererAccessor {

 "puzzlesapi$setOffHandItem"(arg0: $ItemStack$Type): void
 "puzzlesapi$setMainHandItem"(arg0: $ItemStack$Type): void
}

export namespace $ItemInHandRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInHandRendererAccessor$Type = ($ItemInHandRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemInHandRendererAccessor_ = $ItemInHandRendererAccessor$Type;
}}
declare module "packages/fuzs/puzzlesapi/mixin/iteminteractions/client/accessor/$AbstractContainerMenuAccessor" {
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"

export interface $AbstractContainerMenuAccessor {

 "puzzlesapi$getMenuType"(): $MenuType<(any)>

(): $MenuType<(any)>
}

export namespace $AbstractContainerMenuAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerMenuAccessor$Type = ($AbstractContainerMenuAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerMenuAccessor_ = $AbstractContainerMenuAccessor$Type;
}}
declare module "packages/fuzs/puzzlesapi/mixin/statues/accessor/$SimpleContainerAccessor" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $SimpleContainerAccessor {

 "puzzlesapi$setItems"(arg0: $NonNullList$Type<($ItemStack$Type)>): void

(arg0: $NonNullList$Type<($ItemStack$Type)>): void
}

export namespace $SimpleContainerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleContainerAccessor$Type = ($SimpleContainerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleContainerAccessor_ = $SimpleContainerAccessor$Type;
}}
declare module "packages/fuzs/puzzlesapi/mixin/statues/accessor/$ArmorStandAccessor" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ArmorStandAccessor {

 "puzzlesapi$callReadPose"(arg0: $CompoundTag$Type): void
 "puzzlesapi$getArmorItems"(): $NonNullList<($ItemStack)>
 "puzzlesapi$getDisabledSlots"(): integer
 "puzzlesapi$getHandItems"(): $NonNullList<($ItemStack)>
 "puzzlesapi$setDisabledSlots"(arg0: integer): void
}

export namespace $ArmorStandAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorStandAccessor$Type = ($ArmorStandAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmorStandAccessor_ = $ArmorStandAccessor$Type;
}}
declare module "packages/fuzs/puzzlesapi/mixin/iteminteractions/accessor/$BundleItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BundleItemAccessor {

}

export namespace $BundleItemAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BundleItemAccessor$Type = ($BundleItemAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BundleItemAccessor_ = $BundleItemAccessor$Type;
}}
declare module "packages/fuzs/puzzlesapi/mixin/slotcycling/client/accessor/$MouseHandlerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MouseHandlerAccessor {

 "slotcycling$getAccumulatedScroll"(): double

(): double
}

export namespace $MouseHandlerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseHandlerAccessor$Type = ($MouseHandlerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseHandlerAccessor_ = $MouseHandlerAccessor$Type;
}}
declare module "packages/fuzs/puzzlesapi/mixin/iteminteractions/client/accessor/$AbstractContainerScreenAccessor" {
import {$ClickType, $ClickType$Type} from "packages/net/minecraft/world/inventory/$ClickType"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"

export interface $AbstractContainerScreenAccessor {

 "puzzlesapi$setDoubleclick"(arg0: boolean): void
 "puzzlesapi$callFindSlot"(arg0: double, arg1: double): $Slot
 "puzzlesapi$callSlotClicked"(arg0: $Slot$Type, arg1: integer, arg2: integer, arg3: $ClickType$Type): void
}

export namespace $AbstractContainerScreenAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerScreenAccessor$Type = ($AbstractContainerScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerScreenAccessor_ = $AbstractContainerScreenAccessor$Type;
}}
