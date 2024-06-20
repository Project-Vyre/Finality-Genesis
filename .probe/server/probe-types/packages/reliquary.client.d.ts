declare module "packages/reliquary/client/particle/$ColorParticleData" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $ColorParticleData implements $ParticleOptions {


public "writeToString"(): string
public "writeToNetwork"(arg0: $FriendlyByteBuf$Type): void
public "getRed"(): float
public "getGreen"(): float
public "getBlue"(): float
public "getType"(): $ParticleType<(any)>
get "red"(): float
get "green"(): float
get "blue"(): float
get "type"(): $ParticleType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorParticleData$Type = ($ColorParticleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorParticleData_ = $ColorParticleData$Type;
}}
declare module "packages/reliquary/client/particle/$CauldronBubbleParticleType" {
import {$BubbleColorParticleData, $BubbleColorParticleData$Type} from "packages/reliquary/client/particle/$BubbleColorParticleData"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $CauldronBubbleParticleType extends $ParticleType<($BubbleColorParticleData)> {

constructor()

public "codec"(): $Codec<($BubbleColorParticleData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CauldronBubbleParticleType$Type = ($CauldronBubbleParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CauldronBubbleParticleType_ = $CauldronBubbleParticleType$Type;
}}
declare module "packages/reliquary/client/particle/$CauldronSteamParticleType" {
import {$SteamColorParticleData, $SteamColorParticleData$Type} from "packages/reliquary/client/particle/$SteamColorParticleData"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $CauldronSteamParticleType extends $ParticleType<($SteamColorParticleData)> {

constructor()

public "codec"(): $Codec<($SteamColorParticleData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CauldronSteamParticleType$Type = ($CauldronSteamParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CauldronSteamParticleType_ = $CauldronSteamParticleType$Type;
}}
declare module "packages/reliquary/client/particle/$BubbleColorParticleData" {
import {$ColorParticleData, $ColorParticleData$Type} from "packages/reliquary/client/particle/$ColorParticleData"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$ParticleOptions$Deserializer, $ParticleOptions$Deserializer$Type} from "packages/net/minecraft/core/particles/$ParticleOptions$Deserializer"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $BubbleColorParticleData extends $ColorParticleData {
static readonly "CODEC": $Codec<($BubbleColorParticleData)>
static readonly "DESERIALIZER": $ParticleOptions$Deserializer<($BubbleColorParticleData)>

constructor(arg0: float, arg1: float, arg2: float)

public "getType"(): $ParticleType<(any)>
get "type"(): $ParticleType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BubbleColorParticleData$Type = ($BubbleColorParticleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BubbleColorParticleData_ = $BubbleColorParticleData$Type;
}}
declare module "packages/reliquary/client/particle/$SteamColorParticleData" {
import {$ColorParticleData, $ColorParticleData$Type} from "packages/reliquary/client/particle/$ColorParticleData"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$ParticleOptions$Deserializer, $ParticleOptions$Deserializer$Type} from "packages/net/minecraft/core/particles/$ParticleOptions$Deserializer"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $SteamColorParticleData extends $ColorParticleData {
static readonly "CODEC": $Codec<($SteamColorParticleData)>
static readonly "DESERIALIZER": $ParticleOptions$Deserializer<($SteamColorParticleData)>

constructor(arg0: float, arg1: float, arg2: float)

public "getType"(): $ParticleType<(any)>
get "type"(): $ParticleType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SteamColorParticleData$Type = ($SteamColorParticleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SteamColorParticleData_ = $SteamColorParticleData$Type;
}}
