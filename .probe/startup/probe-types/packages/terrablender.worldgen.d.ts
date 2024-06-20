declare module "packages/terrablender/worldgen/$IExtendedNoiseGeneratorSettings" {
import {$RegionType, $RegionType$Type} from "packages/terrablender/api/$RegionType"

export interface $IExtendedNoiseGeneratorSettings {

 "setRegionType"(arg0: $RegionType$Type): void
 "getRegionType"(): $RegionType
}

export namespace $IExtendedNoiseGeneratorSettings {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtendedNoiseGeneratorSettings$Type = ($IExtendedNoiseGeneratorSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtendedNoiseGeneratorSettings_ = $IExtendedNoiseGeneratorSettings$Type;
}}
declare module "packages/terrablender/worldgen/$IExtendedBiomeSource" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"

export interface $IExtendedBiomeSource {

 "appendDeferredBiomesList"(arg0: $List$Type<($Holder$Type<($Biome$Type)>)>): void

(arg0: $List$Type<($Holder$Type<($Biome$Type)>)>): void
}

export namespace $IExtendedBiomeSource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtendedBiomeSource$Type = ($IExtendedBiomeSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtendedBiomeSource_ = $IExtendedBiomeSource$Type;
}}
declare module "packages/terrablender/worldgen/$IExtendedParameterList" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Climate$RTree, $Climate$RTree$Type} from "packages/net/minecraft/world/level/biome/$Climate$RTree"
import {$Climate$TargetPoint, $Climate$TargetPoint$Type} from "packages/net/minecraft/world/level/biome/$Climate$TargetPoint"
import {$RegionType, $RegionType$Type} from "packages/terrablender/api/$RegionType"

export interface $IExtendedParameterList<T> {

 "isInitialized"(): boolean
 "getTree"(arg0: integer): $Climate$RTree<(any)>
 "initializeForTerraBlender"(arg0: $RegistryAccess$Type, arg1: $RegionType$Type, arg2: long): void
 "findValuePositional"(arg0: $Climate$TargetPoint$Type, arg1: integer, arg2: integer, arg3: integer): T
 "getUniqueness"(arg0: integer, arg1: integer, arg2: integer): integer
 "getTreeCount"(): integer
}

export namespace $IExtendedParameterList {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtendedParameterList$Type<T> = ($IExtendedParameterList<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtendedParameterList_<T> = $IExtendedParameterList$Type<(T)>;
}}
