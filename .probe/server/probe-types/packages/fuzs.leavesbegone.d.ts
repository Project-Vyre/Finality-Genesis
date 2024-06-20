declare module "packages/fuzs/leavesbegone/server/level/$RandomBlockTickerLevel" {
import {$LevelTicks, $LevelTicks$Type} from "packages/net/minecraft/world/ticks/$LevelTicks"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $RandomBlockTickerLevel {

 "leavesbegone$getRandomBlockTicks"(): $LevelTicks<($Block)>

(): $LevelTicks<($Block)>
}

export namespace $RandomBlockTickerLevel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RandomBlockTickerLevel$Type = ($RandomBlockTickerLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RandomBlockTickerLevel_ = $RandomBlockTickerLevel$Type;
}}
declare module "packages/fuzs/leavesbegone/world/level/chunk/$RandomBlockTickerChunk" {
import {$LevelChunkTicks, $LevelChunkTicks$Type} from "packages/net/minecraft/world/ticks/$LevelChunkTicks"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $RandomBlockTickerChunk {

 "leavesbegone$getRandomBlockTicks"(): $LevelChunkTicks<($Block)>
 "leavesbegone$setRandomBlockTicks"(arg0: $LevelChunkTicks$Type<($Block$Type)>): void
}

export namespace $RandomBlockTickerChunk {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RandomBlockTickerChunk$Type = ($RandomBlockTickerChunk);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RandomBlockTickerChunk_ = $RandomBlockTickerChunk$Type;
}}
