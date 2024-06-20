declare module "packages/nonamecrackers2/crackerslib/mixin/$MixinGameRendererAccessor" {
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"

export interface $MixinGameRendererAccessor {

 "crackerslib$getFov"(arg0: $Camera$Type, arg1: float, arg2: boolean): double
 "crackerslib$getZoomX"(): float
 "crackerslib$getZoomY"(): float
 "crackerslib$getZoom"(): float
}

export namespace $MixinGameRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinGameRendererAccessor$Type = ($MixinGameRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinGameRendererAccessor_ = $MixinGameRendererAccessor$Type;
}}
declare module "packages/nonamecrackers2/crackerslib/common/command/argument/$ConfigArgument$Serializer" {
import {$ConfigArgument$Serializer$Template, $ConfigArgument$Serializer$Template$Type} from "packages/nonamecrackers2/crackerslib/common/command/argument/$ConfigArgument$Serializer$Template"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$ConfigArgument, $ConfigArgument$Type} from "packages/nonamecrackers2/crackerslib/common/command/argument/$ConfigArgument"

export class $ConfigArgument$Serializer implements $ArgumentTypeInfo<($ConfigArgument), ($ConfigArgument$Serializer$Template)> {

constructor()

public "unpack"(arg0: $ConfigArgument$Type): $ConfigArgument$Serializer$Template
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$Type): $ConfigArgument$Serializer$Template
public "serializeToJson"(arg0: $ConfigArgument$Serializer$Template$Type, arg1: $JsonObject$Type): void
public "serializeToNetwork"(arg0: $ConfigArgument$Serializer$Template$Type, arg1: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigArgument$Serializer$Type = ($ConfigArgument$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigArgument$Serializer_ = $ConfigArgument$Serializer$Type;
}}
declare module "packages/nonamecrackers2/crackerslib/common/command/argument/$ConfigArgument" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$ForgeConfigSpec$ValueSpec, $ForgeConfigSpec$ValueSpec$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ValueSpec"
import {$ForgeConfigSpec, $ForgeConfigSpec$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConfigArgument implements $ArgumentType<(string)> {

constructor(arg0: $List$Type<(string)>)

public static "get"<T>(arg0: $CommandContext$Type<($CommandSourceStack$Type)>, arg1: string, arg2: $ForgeConfigSpec$Type): $ForgeConfigSpec$ConfigValue<(T)>
public static "arg"(arg0: $Map$Type<(string), ($ForgeConfigSpec$ValueSpec$Type)>, arg1: $Class$Type<(any)>): $ConfigArgument
public static "any"(arg0: $Map$Type<(string), ($ForgeConfigSpec$ValueSpec$Type)>): $ConfigArgument
public "listSuggestions"<S>(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
public "getExamples"(): $Collection<(string)>
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigArgument$Type = ($ConfigArgument);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigArgument_ = $ConfigArgument$Type;
}}
declare module "packages/nonamecrackers2/crackerslib/mixin/$MixinBlockEntityType" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $MixinBlockEntityType {

 "crackerslib$getValidBlocks"(): $Set<($Block)>
 "crackerslib$setValidBlocks"(arg0: $Set$Type<($Block$Type)>): void
}

export namespace $MixinBlockEntityType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinBlockEntityType$Type = ($MixinBlockEntityType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinBlockEntityType_ = $MixinBlockEntityType$Type;
}}
declare module "packages/nonamecrackers2/crackerslib/common/command/argument/$ConfigArgument$Serializer$Template" {
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$ConfigArgument, $ConfigArgument$Type} from "packages/nonamecrackers2/crackerslib/common/command/argument/$ConfigArgument"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $ConfigArgument$Serializer$Template implements $ArgumentTypeInfo$Template<($ConfigArgument)> {
readonly "availableOptions": $List<(string)>


public "instantiate"(arg0: $CommandBuildContext$Type): $ConfigArgument
public "type"(): $ArgumentTypeInfo<($ConfigArgument), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigArgument$Serializer$Template$Type = ($ConfigArgument$Serializer$Template);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigArgument$Serializer$Template_ = $ConfigArgument$Serializer$Template$Type;
}}
