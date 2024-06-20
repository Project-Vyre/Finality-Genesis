declare module "packages/someassemblyrequired/mixin/$FoodPropertiesMixin" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export interface $FoodPropertiesMixin {

 "getEffectSuppliers"(): $List<($Pair<($Supplier<($MobEffectInstance)>), (float)>)>

(): $List<($Pair<($Supplier<($MobEffectInstance)>), (float)>)>
}

export namespace $FoodPropertiesMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodPropertiesMixin$Type = ($FoodPropertiesMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodPropertiesMixin_ = $FoodPropertiesMixin$Type;
}}
