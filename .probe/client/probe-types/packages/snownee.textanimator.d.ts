declare module "packages/snownee/textanimator/effect/$EffectSettings" {
import {$TypewriterTrack, $TypewriterTrack$Type} from "packages/snownee/textanimator/typewriter/$TypewriterTrack"

export class $EffectSettings {
readonly "codepoint": integer
readonly "index": integer
readonly "isShadow": boolean
readonly "typewriterTrack": $TypewriterTrack
readonly "typingIndex": integer
 "x": float
 "y": float
 "r": float
 "g": float
 "b": float
 "a": float

constructor(arg0: integer, arg1: integer, arg2: boolean, arg3: $TypewriterTrack$Type, arg4: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectSettings$Type = ($EffectSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffectSettings_ = $EffectSettings$Type;
}}
declare module "packages/snownee/textanimator/$TypewriterMode" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$OptionEnum, $OptionEnum$Type} from "packages/net/minecraft/util/$OptionEnum"

export class $TypewriterMode extends $Enum<($TypewriterMode)> implements $OptionEnum {
static readonly "BY_CHAR": $TypewriterMode
static readonly "BY_WORD": $TypewriterMode


public static "values"(): ($TypewriterMode)[]
public static "valueOf"(arg0: string): $TypewriterMode
public "getKey"(): string
public static "byId"(arg0: integer): $TypewriterMode
public "getId"(): integer
public "getCaption"(): $Component
get "key"(): string
get "id"(): integer
get "caption"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypewriterMode$Type = (("by_char") | ("by_word")) | ($TypewriterMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypewriterMode_ = $TypewriterMode$Type;
}}
declare module "packages/snownee/textanimator/effect/$Effect" {
import {$EffectSettings, $EffectSettings$Type} from "packages/snownee/textanimator/effect/$EffectSettings"

export interface $Effect {

 "getName"(): string
 "apply"(arg0: $EffectSettings$Type): void
 "serialize"(): string
}

export namespace $Effect {
function create(arg0: (string)[], arg1: boolean): $Effect
function create(arg0: string, arg1: boolean): $Effect
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Effect$Type = ($Effect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Effect_ = $Effect$Type;
}}
declare module "packages/snownee/textanimator/$TextAnimationMode" {
import {$Effect, $Effect$Type} from "packages/snownee/textanimator/effect/$Effect"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$OptionEnum, $OptionEnum$Type} from "packages/net/minecraft/util/$OptionEnum"

export class $TextAnimationMode extends $Enum<($TextAnimationMode)> implements $OptionEnum {
static readonly "ALL": $TextAnimationMode
static readonly "NONE": $TextAnimationMode
static readonly "NO_RAINBOW": $TextAnimationMode


public static "values"(): ($TextAnimationMode)[]
public static "valueOf"(arg0: string): $TextAnimationMode
public "getKey"(): string
public static "byId"(arg0: integer): $TextAnimationMode
public "shouldApply"(arg0: $Effect$Type): boolean
public "getId"(): integer
public "getCaption"(): $Component
get "key"(): string
get "id"(): integer
get "caption"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextAnimationMode$Type = (("all") | ("no_rainbow") | ("none")) | ($TextAnimationMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextAnimationMode_ = $TextAnimationMode$Type;
}}
declare module "packages/snownee/textanimator/typewriter/$TypewriterTrack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $TypewriterTrack {
 "startedAt": long
 "changedSince": long
 "index": integer

constructor()

public "update"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypewriterTrack$Type = ($TypewriterTrack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypewriterTrack_ = $TypewriterTrack$Type;
}}
declare module "packages/snownee/textanimator/mixin/client/$FontAccess" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BakedGlyph, $BakedGlyph$Type} from "packages/net/minecraft/client/gui/font/glyphs/$BakedGlyph"
import {$FontSet, $FontSet$Type} from "packages/net/minecraft/client/gui/font/$FontSet"

export interface $FontAccess {

 "getFilterFishyGlyphs"(): boolean
 "callRenderChar"(arg0: $BakedGlyph$Type, arg1: boolean, arg2: boolean, arg3: float, arg4: float, arg5: float, arg6: $Matrix4f$Type, arg7: $VertexConsumer$Type, arg8: float, arg9: float, arg10: float, arg11: float, arg12: integer): void
 "callGetFontSet"(arg0: $ResourceLocation$Type): $FontSet
}

export namespace $FontAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FontAccess$Type = ($FontAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FontAccess_ = $FontAccess$Type;
}}
declare module "packages/snownee/textanimator/duck/$TAStyle" {
import {$Effect, $Effect$Type} from "packages/snownee/textanimator/effect/$Effect"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$TypewriterTrack, $TypewriterTrack$Type} from "packages/snownee/textanimator/typewriter/$TypewriterTrack"

export interface $TAStyle {

 "textanimator$setTypewriterIndex"(arg0: integer): void
 "textanimator$addEffect"(arg0: $Effect$Type): void
 "textanimator$setTypewriterTrack"(arg0: $TypewriterTrack$Type): void
 "textanimator$getTypewriterIndex"(): integer
 "textanimator$getEffects"(): $ImmutableList<($Effect)>
 "textanimator$setEffects"(arg0: $ImmutableList$Type<($Effect$Type)>): void
 "textanimator$getTypewriterTrack"(): $TypewriterTrack
}

export namespace $TAStyle {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TAStyle$Type = ($TAStyle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TAStyle_ = $TAStyle$Type;
}}
declare module "packages/snownee/textanimator/duck/$TAOptions" {
import {$OptionInstance, $OptionInstance$Type} from "packages/net/minecraft/client/$OptionInstance"
import {$TypewriterMode, $TypewriterMode$Type} from "packages/snownee/textanimator/$TypewriterMode"
import {$TextAnimationMode, $TextAnimationMode$Type} from "packages/snownee/textanimator/$TextAnimationMode"

export interface $TAOptions {

 "textanimator$getTextAnimation"(): $OptionInstance<($TextAnimationMode)>
 "textanimator$getTypewriterSpeed"(): $OptionInstance<(integer)>
 "textanimator$getTypewriterMode"(): $OptionInstance<($TypewriterMode)>
}

export namespace $TAOptions {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TAOptions$Type = ($TAOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TAOptions_ = $TAOptions$Type;
}}
