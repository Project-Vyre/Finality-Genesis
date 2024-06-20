declare module "packages/corgitaco/corgilib/entity/$IsInsideStructureTracker$Access" {
import {$IsInsideStructureTracker, $IsInsideStructureTracker$Type} from "packages/corgitaco/corgilib/entity/$IsInsideStructureTracker"

export interface $IsInsideStructureTracker$Access {

 "getIsInsideStructureTracker"(): $IsInsideStructureTracker

(): $IsInsideStructureTracker
}

export namespace $IsInsideStructureTracker$Access {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IsInsideStructureTracker$Access$Type = ($IsInsideStructureTracker$Access);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IsInsideStructureTracker$Access_ = $IsInsideStructureTracker$Access$Type;
}}
declare module "packages/corgitaco/corgilib/world/level/$RandomTickScheduler" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $RandomTickScheduler {

 "getScheduledRandomTicks"(): $List<($BlockPos)>
 "scheduleRandomTick"(arg0: $BlockPos$Type): void
}

export namespace $RandomTickScheduler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RandomTickScheduler$Type = ($RandomTickScheduler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RandomTickScheduler_ = $RandomTickScheduler$Type;
}}
declare module "packages/corgitaco/corgilib/entity/$IsInsideStructureTracker" {
import {$IsInsideStructureTracker$IsInside, $IsInsideStructureTracker$IsInside$Type} from "packages/corgitaco/corgilib/entity/$IsInsideStructureTracker$IsInside"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $IsInsideStructureTracker {

constructor()

public "setInside"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $IsInsideStructureTracker$IsInside$Type): void
public "getTracker"(): $IsInsideStructureTracker$IsInside
get "tracker"(): $IsInsideStructureTracker$IsInside
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IsInsideStructureTracker$Type = ($IsInsideStructureTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IsInsideStructureTracker_ = $IsInsideStructureTracker$Type;
}}
declare module "packages/corgitaco/corgilib/reg/$RegistryObject" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $RegistryObject<T> extends $Supplier<(T)> {

 "get"(): T
 "getId"(): $ResourceLocation
 "getResourceKey"(): $ResourceKey<(T)>
 "asHolder"(): $Holder<(T)>
}

export namespace $RegistryObject {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryObject$Type<T> = ($RegistryObject<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryObject_<T> = $RegistryObject$Type<(T)>;
}}
declare module "packages/corgitaco/corgilib/reg/$RegistrationProvider" {
import {$RegistryObject, $RegistryObject$Type} from "packages/corgitaco/corgilib/reg/$RegistryObject"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$RegistryBuilder, $RegistryBuilder$Type} from "packages/corgitaco/corgilib/reg/registries/$RegistryBuilder"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $RegistrationProvider<T> {

 "register"<I extends T>(arg0: string, arg1: $Supplier$Type<(any)>): $RegistryObject<(I)>
 "getEntries"(): $Collection<($RegistryObject<(T)>)>
 "getModId"(): string
 "registryBuilder"(): $RegistryBuilder<(T)>
 "getRegistry"(): $Registry<(T)>
 "getRegistryKey"(): $ResourceKey<(any)>
}

export namespace $RegistrationProvider {
function get<T>(arg0: $Registry$Type<(T)>, arg1: string): $RegistrationProvider<(T)>
function get<T>(arg0: $ResourceLocation$Type, arg1: string): $RegistrationProvider<(T)>
function get<T>(arg0: $ResourceKey$Type<(any)>, arg1: string): $RegistrationProvider<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrationProvider$Type<T> = ($RegistrationProvider<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrationProvider_<T> = $RegistrationProvider$Type<(T)>;
}}
declare module "packages/corgitaco/corgilib/reg/registries/$RegistryBuilder" {
import {$RegistryFeatureType, $RegistryFeatureType$Type} from "packages/corgitaco/corgilib/reg/registries/$RegistryFeatureType"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export interface $RegistryBuilder<T> {

 "build"(): $Supplier<($Registry<(T)>)>
 "withFeature"<X>(arg0: $RegistryFeatureType$Type<(X)>, arg1: X): $RegistryBuilder<(T)>
 "withFeature"(arg0: $RegistryFeatureType$Type<(void)>): $RegistryBuilder<(T)>
 "withDefaultValue"(arg0: string, arg1: $Supplier$Type<(T)>): $RegistryBuilder<(T)>
}

export namespace $RegistryBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryBuilder$Type<T> = ($RegistryBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryBuilder_<T> = $RegistryBuilder$Type<(T)>;
}}
declare module "packages/corgitaco/corgilib/entity/$IsInsideStructureTracker$IsInside" {
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $IsInsideStructureTracker$IsInside {
static readonly "CODEC": $Codec<($IsInsideStructureTracker$IsInside)>

constructor(arg0: boolean, arg1: boolean)

public "setInsideStructurePiece"(arg0: boolean): $IsInsideStructureTracker$IsInside
public "setInsideStructure"(arg0: boolean): $IsInsideStructureTracker$IsInside
public "isInsideStructurePiece"(): boolean
public "isInsideStructure"(): boolean
set "insideStructurePiece"(value: boolean)
set "insideStructure"(value: boolean)
get "insideStructurePiece"(): boolean
get "insideStructure"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IsInsideStructureTracker$IsInside$Type = ($IsInsideStructureTracker$IsInside);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IsInsideStructureTracker$IsInside_ = $IsInsideStructureTracker$IsInside$Type;
}}
declare module "packages/corgitaco/corgilib/entity/condition/$Condition" {
import {$RegistrationProvider, $RegistrationProvider$Type} from "packages/corgitaco/corgilib/reg/$RegistrationProvider"
import {$ConditionContext, $ConditionContext$Type} from "packages/corgitaco/corgilib/entity/condition/$ConditionContext"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export interface $Condition {

 "passes"(arg0: $ConditionContext$Type): boolean
 "codec"(): $Codec<(any)>
}

export namespace $Condition {
const CODEC: $Codec<($Condition)>
const PROVIDER: $RegistrationProvider<($Codec<(any)>)>
function register(arg0: string, arg1: $Codec$Type<(any)>): void
function register(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Condition$Type = ($Condition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Condition_ = $Condition$Type;
}}
declare module "packages/corgitaco/corgilib/entity/condition/$ConditionContext" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $ConditionContext extends $Record {

constructor(arg0: $ConditionContext$Type, arg1: $LivingEntity$Type)
constructor(world: $Level$Type, entity: $LivingEntity$Type, isDeadOrDying: boolean, previousConditionsPassed: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "entity"(): $LivingEntity
public "world"(): $Level
public "isDeadOrDying"(): boolean
public "previousConditionsPassed"(): integer
get "deadOrDying"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConditionContext$Type = ($ConditionContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConditionContext_ = $ConditionContext$Type;
}}
declare module "packages/corgitaco/corgilib/reg/registries/$RegistryFeatureType" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $RegistryFeatureType<X> {
static readonly "SYNCED": $RegistryFeatureType<(void)>
static readonly "SAVED_TO_DISK": $RegistryFeatureType<(void)>
static readonly "DEFAULTED": $RegistryFeatureType<($ResourceLocation)>
static readonly "SUPPORTS_OVERRIDES": $RegistryFeatureType<(void)>


public static "getNoArgs"(arg0: $ResourceLocation$Type): $RegistryFeatureType<(void)>
public static "get"<X>(arg0: $ResourceLocation$Type, arg1: $Class$Type<(X)>): $RegistryFeatureType<(X)>
public "getId"(): $ResourceLocation
public "getArgumentType"(): $Class<(X)>
get "id"(): $ResourceLocation
get "argumentType"(): $Class<(X)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryFeatureType$Type<X> = ($RegistryFeatureType<(X)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryFeatureType_<X> = $RegistryFeatureType$Type<(X)>;
}}
