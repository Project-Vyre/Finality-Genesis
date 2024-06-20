declare module "packages/com/bawnorton/neruina/mixin/accessor/$WorldChunkAccessor" {
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $WorldChunkAccessor {

 "invokeRemoveBlockEntityTicker"(arg0: $BlockPos$Type): void

(arg0: $BlockPos$Type): void
}

export namespace $WorldChunkAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldChunkAccessor$Type = ($WorldChunkAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldChunkAccessor_ = $WorldChunkAccessor$Type;
}}
declare module "packages/com/bawnorton/neruina/extend/$Errorable" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"

export interface $Errorable {

 "neruina$clearErrored"(): void
 "neruina$getTickingEntryId"(): $UUID
 "neruina$setTickingEntryId"(arg0: $UUID$Type): void
 "neruina$setErrored"(): void
 "neruina$isErrored"(): boolean
}

export namespace $Errorable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Errorable$Type = ($Errorable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Errorable_ = $Errorable$Type;
}}
declare module "packages/com/bawnorton/neruina/extend/$CrashReportSectionExtender" {
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"

export interface $CrashReportSectionExtender {

 "neruin$setStacktrace"(arg0: $Throwable$Type): void

(arg0: $Throwable$Type): void
}

export namespace $CrashReportSectionExtender {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrashReportSectionExtender$Type = ($CrashReportSectionExtender);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrashReportSectionExtender_ = $CrashReportSectionExtender$Type;
}}
declare module "packages/com/bawnorton/neruina/extend/$ErrorableBlockState" {
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ErrorableBlockState {

 "neruina$clearErrored"(arg0: $BlockPos$Type): void
 "neruina$setErrored"(arg0: $BlockPos$Type): void
 "neruina$isErrored"(arg0: $BlockPos$Type): boolean
}

export namespace $ErrorableBlockState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ErrorableBlockState$Type = ($ErrorableBlockState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ErrorableBlockState_ = $ErrorableBlockState$Type;
}}
