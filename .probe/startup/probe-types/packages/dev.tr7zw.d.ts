declare module "packages/dev/tr7zw/notenoughanimations/access/$PlayerData" {
import {$DataHolder, $DataHolder$Type} from "packages/dev/tr7zw/notenoughanimations/versionless/animations/$DataHolder"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"

export interface $PlayerData {

 "getData"<T>(arg0: $DataHolder$Type<(T)>, arg1: $Supplier$Type<(T)>): T
 "setItemSwapAnimationTimer"(arg0: integer): void
 "getLastAnimationSwapTick"(): integer
 "isBodyRotationDisabled"(): boolean
 "getItemSwapAnimationTimer"(): integer
 "setLastAnimationSwapTick"(arg0: integer): void
 "isUpdated"(arg0: integer): integer
 "getSideSword"(): $ItemStack
 "setSideSword"(arg0: $ItemStack$Type): void
 "setUpdated"(arg0: integer): void
 "setPoseOverwrite"(arg0: $Pose$Type): void
 "getPoseOverwrite"(): $Pose
 "getLastRotations"(): (float)[]
 "getLastHeldItems"(): ($ItemStack)[]
 "disableBodyRotation"(arg0: boolean): void
}

export namespace $PlayerData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerData$Type = ($PlayerData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerData_ = $PlayerData$Type;
}}
declare module "packages/dev/tr7zw/notenoughanimations/versionless/animations/$DataHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DataHolder<T> {

}

export namespace $DataHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataHolder$Type<T> = ($DataHolder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataHolder_<T> = $DataHolder$Type<(T)>;
}}
