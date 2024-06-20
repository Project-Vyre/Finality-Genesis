declare module "packages/com/cerbon/better_beacons/mixin/accessor/$BeaconBlockEntityAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$BeaconBlockEntity$BeaconBeamSection, $BeaconBlockEntity$BeaconBeamSection$Type} from "packages/net/minecraft/world/level/block/entity/$BeaconBlockEntity$BeaconBeamSection"

export interface $BeaconBlockEntityAccessor {

 "checkingBeamSections"(): $List<($BeaconBlockEntity$BeaconBeamSection)>
 "setLastCheckY"(arg0: integer): void
}

export namespace $BeaconBlockEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeaconBlockEntityAccessor$Type = ($BeaconBlockEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeaconBlockEntityAccessor_ = $BeaconBlockEntityAccessor$Type;
}}
declare module "packages/com/cerbon/better_beacons/effect/custom/$PatrolBaneEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $PatrolBaneEffect extends $MobEffect {

constructor(mobEffectCategory: $MobEffectCategory$Type, i: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatrolBaneEffect$Type = ($PatrolBaneEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatrolBaneEffect_ = $PatrolBaneEffect$Type;
}}
declare module "packages/com/cerbon/better_beacons/effect/custom/$PhantomBaneEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $PhantomBaneEffect extends $MobEffect {

constructor(mobEffectCategory: $MobEffectCategory$Type, i: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhantomBaneEffect$Type = ($PhantomBaneEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhantomBaneEffect_ = $PhantomBaneEffect$Type;
}}
declare module "packages/com/cerbon/better_beacons/mixin/accessor/$BeaconBeamSectionAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BeaconBeamSectionAccessor {

 "setHeight"(arg0: integer): void

(arg0: integer): void
}

export namespace $BeaconBeamSectionAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeaconBeamSectionAccessor$Type = ($BeaconBeamSectionAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeaconBeamSectionAccessor_ = $BeaconBeamSectionAccessor$Type;
}}
declare module "packages/com/cerbon/better_beacons/effect/custom/$LongReachEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $LongReachEffect extends $MobEffect {

constructor(mobEffectCategory: $MobEffectCategory$Type, i: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongReachEffect$Type = ($LongReachEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongReachEffect_ = $LongReachEffect$Type;
}}
declare module "packages/com/cerbon/better_beacons/util/mixin/$IBeaconBlockEntityMixin" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export interface $IBeaconBlockEntityMixin {

 "bb_getTertiaryEffect"(): $MobEffect
 "bb_setPrimaryEffectAmplifier"(arg0: integer): void
 "bb_getPrimaryEffectAmplifier"(): integer
 "bb_getPaymentItem"(): string
}

export namespace $IBeaconBlockEntityMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBeaconBlockEntityMixin$Type = ($IBeaconBlockEntityMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBeaconBlockEntityMixin_ = $IBeaconBlockEntityMixin$Type;
}}
