declare module "packages/net/creeperhost/polylib/mixins/$AccessorMultiBufferSource" {
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $AccessorMultiBufferSource {

 "getFixedBuffers"(): $Map<($RenderType), ($BufferBuilder)>
 "getFallbackBuffer"(): $BufferBuilder
}

export namespace $AccessorMultiBufferSource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMultiBufferSource$Type = ($AccessorMultiBufferSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorMultiBufferSource_ = $AccessorMultiBufferSource$Type;
}}
