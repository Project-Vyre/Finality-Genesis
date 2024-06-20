declare module "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable" {
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"

export interface $GeoAnimatable {

 "getTick"(arg0: any): double
 "getBoneResetTime"(): double
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
 "animatableCacheOverride"(): $AnimatableInstanceCache
 "shouldPlayAnimsWhileGamePaused"(): boolean
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
}

export namespace $GeoAnimatable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoAnimatable$Type = ($GeoAnimatable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoAnimatable_ = $GeoAnimatable$Type;
}}
declare module "packages/software/bernie/geckolib/core/animation/$AnimationController$AnimationStateHandler" {
import {$AnimationState, $AnimationState$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationState"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$PlayState, $PlayState$Type} from "packages/software/bernie/geckolib/core/object/$PlayState"

export interface $AnimationController$AnimationStateHandler<A extends $GeoAnimatable> {

 "handle"(arg0: $AnimationState$Type<(A)>): $PlayState

(arg0: $AnimationState$Type<(A)>): $PlayState
}

export namespace $AnimationController$AnimationStateHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$AnimationStateHandler$Type<A> = ($AnimationController$AnimationStateHandler<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationController$AnimationStateHandler_<A> = $AnimationController$AnimationStateHandler$Type<(A)>;
}}
declare module "packages/software/bernie/geckolib/core/keyframe/event/$CustomInstructionKeyframeEvent" {
import {$AnimationController, $AnimationController$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController"
import {$CustomInstructionKeyframeData, $CustomInstructionKeyframeData$Type} from "packages/software/bernie/geckolib/core/keyframe/event/data/$CustomInstructionKeyframeData"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$KeyFrameEvent, $KeyFrameEvent$Type} from "packages/software/bernie/geckolib/core/keyframe/event/$KeyFrameEvent"

export class $CustomInstructionKeyframeEvent<T extends $GeoAnimatable> extends $KeyFrameEvent<(T), ($CustomInstructionKeyframeData)> {

constructor(arg0: T, arg1: double, arg2: $AnimationController$Type<(T)>, arg3: $CustomInstructionKeyframeData$Type)

public "getKeyframeData"(): $CustomInstructionKeyframeData
get "keyframeData"(): $CustomInstructionKeyframeData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomInstructionKeyframeEvent$Type<T> = ($CustomInstructionKeyframeEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomInstructionKeyframeEvent_<T> = $CustomInstructionKeyframeEvent$Type<(T)>;
}}
declare module "packages/software/bernie/geckolib/core/keyframe/$BoneAnimation" {
import {$KeyframeStack, $KeyframeStack$Type} from "packages/software/bernie/geckolib/core/keyframe/$KeyframeStack"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Keyframe, $Keyframe$Type} from "packages/software/bernie/geckolib/core/keyframe/$Keyframe"
import {$IValue, $IValue$Type} from "packages/com/eliotlash/mclib/math/$IValue"

export class $BoneAnimation extends $Record {

constructor(boneName: string, rotationKeyFrames: $KeyframeStack$Type<($Keyframe$Type<($IValue$Type)>)>, positionKeyFrames: $KeyframeStack$Type<($Keyframe$Type<($IValue$Type)>)>, scaleKeyFrames: $KeyframeStack$Type<($Keyframe$Type<($IValue$Type)>)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "scaleKeyFrames"(): $KeyframeStack<($Keyframe<($IValue)>)>
public "boneName"(): string
public "rotationKeyFrames"(): $KeyframeStack<($Keyframe<($IValue)>)>
public "positionKeyFrames"(): $KeyframeStack<($Keyframe<($IValue)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoneAnimation$Type = ($BoneAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoneAnimation_ = $BoneAnimation$Type;
}}
declare module "packages/software/bernie/geckolib/core/keyframe/event/$KeyFrameEvent" {
import {$KeyFrameData, $KeyFrameData$Type} from "packages/software/bernie/geckolib/core/keyframe/event/data/$KeyFrameData"
import {$AnimationController, $AnimationController$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"

export class $KeyFrameEvent<T extends $GeoAnimatable, E extends $KeyFrameData> {

constructor(arg0: T, arg1: double, arg2: $AnimationController$Type<(T)>, arg3: E)

public "getController"(): $AnimationController<(T)>
public "getKeyframeData"(): E
public "getAnimationTick"(): double
public "getAnimatable"(): T
get "controller"(): $AnimationController<(T)>
get "keyframeData"(): E
get "animationTick"(): double
get "animatable"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyFrameEvent$Type<T, E> = ($KeyFrameEvent<(T), (E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyFrameEvent_<T, E> = $KeyFrameEvent$Type<(T), (E)>;
}}
declare module "packages/software/bernie/geckolib/core/animation/$Animation$LoopType" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$AnimationController, $AnimationController$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Animation, $Animation$Type} from "packages/software/bernie/geckolib/core/animation/$Animation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $Animation$LoopType {

 "shouldPlayAgain"(arg0: $GeoAnimatable$Type, arg1: $AnimationController$Type<(any)>, arg2: $Animation$Type): boolean

(arg0: string, arg1: $Animation$LoopType$Type): $Animation$LoopType
}

export namespace $Animation$LoopType {
const LOOP_TYPES: $Map<(string), ($Animation$LoopType)>
const DEFAULT: $Animation$LoopType
const PLAY_ONCE: $Animation$LoopType
const HOLD_ON_LAST_FRAME: $Animation$LoopType
const LOOP: $Animation$LoopType
function register(arg0: string, arg1: $Animation$LoopType$Type): $Animation$LoopType
function fromString(arg0: string): $Animation$LoopType
function fromJson(arg0: $JsonElement$Type): $Animation$LoopType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$LoopType$Type = ($Animation$LoopType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animation$LoopType_ = $Animation$LoopType$Type;
}}
declare module "packages/software/bernie/geckolib/core/animatable/model/$CoreGeoModel" {
import {$CoreBakedGeoModel, $CoreBakedGeoModel$Type} from "packages/software/bernie/geckolib/core/animatable/model/$CoreBakedGeoModel"
import {$AnimationState, $AnimationState$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationState"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Animation, $Animation$Type} from "packages/software/bernie/geckolib/core/animation/$Animation"
import {$AnimationProcessor, $AnimationProcessor$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationProcessor"

export interface $CoreGeoModel<E extends $GeoAnimatable> {

 "getAnimation"(arg0: E, arg1: string): $Animation
 "getBone"(arg0: string): $Optional<(any)>
 "getAnimationProcessor"(): $AnimationProcessor<(E)>
 "setCustomAnimations"(arg0: E, arg1: long, arg2: $AnimationState$Type<(E)>): void
 "getBakedGeoModel"(arg0: string): $CoreBakedGeoModel
 "handleAnimations"(arg0: E, arg1: long, arg2: $AnimationState$Type<(E)>): void
 "applyMolangQueries"(arg0: E, arg1: double): void
}

export namespace $CoreGeoModel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoreGeoModel$Type<E> = ($CoreGeoModel<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoreGeoModel_<E> = $CoreGeoModel$Type<(E)>;
}}
declare module "packages/software/bernie/geckolib/model/$GeoModel" {
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CoreGeoModel, $CoreGeoModel$Type} from "packages/software/bernie/geckolib/core/animatable/model/$CoreGeoModel"
import {$GeoBone, $GeoBone$Type} from "packages/software/bernie/geckolib/cache/object/$GeoBone"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$AnimationProcessor, $AnimationProcessor$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationProcessor"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$DataTicket, $DataTicket$Type} from "packages/software/bernie/geckolib/core/object/$DataTicket"
import {$AnimationState, $AnimationState$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationState"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Animation, $Animation$Type} from "packages/software/bernie/geckolib/core/animation/$Animation"
import {$BakedGeoModel, $BakedGeoModel$Type} from "packages/software/bernie/geckolib/cache/object/$BakedGeoModel"

export class $GeoModel<T extends $GeoAnimatable> implements $CoreGeoModel<(T)> {

constructor()

public "getAnimation"(arg0: T, arg1: string): $Animation
public "getBone"(arg0: string): $Optional<($GeoBone)>
public "getRenderType"(arg0: T, arg1: $ResourceLocation$Type): $RenderType
public "getAnimationProcessor"(): $AnimationProcessor<(T)>
public "getAnimationResource"(arg0: T): $ResourceLocation
public "addAdditionalStateData"(arg0: T, arg1: long, arg2: $BiConsumer$Type<($DataTicket$Type<(T)>), (T)>): void
public "getModelResource"(arg0: T): $ResourceLocation
public "getTextureResource"(arg0: T): $ResourceLocation
public "getBakedGeoModel"(arg0: string): $BakedGeoModel
public "crashIfBoneMissing"(): boolean
public "getBakedModel"(arg0: $ResourceLocation$Type): $BakedGeoModel
public "handleAnimations"(arg0: T, arg1: long, arg2: $AnimationState$Type<(T)>): void
public "applyMolangQueries"(arg0: T, arg1: double): void
public "setCustomAnimations"(arg0: T, arg1: long, arg2: $AnimationState$Type<(T)>): void
get "animationProcessor"(): $AnimationProcessor<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoModel$Type<T> = ($GeoModel<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoModel_<T> = $GeoModel$Type<(T)>;
}}
declare module "packages/software/bernie/geckolib/core/animation/$AnimationController$SoundKeyframeHandler" {
import {$SoundKeyframeEvent, $SoundKeyframeEvent$Type} from "packages/software/bernie/geckolib/core/keyframe/event/$SoundKeyframeEvent"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"

export interface $AnimationController$SoundKeyframeHandler<A extends $GeoAnimatable> {

 "handle"(arg0: $SoundKeyframeEvent$Type<(A)>): void

(arg0: $SoundKeyframeEvent$Type<(A)>): void
}

export namespace $AnimationController$SoundKeyframeHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$SoundKeyframeHandler$Type<A> = ($AnimationController$SoundKeyframeHandler<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationController$SoundKeyframeHandler_<A> = $AnimationController$SoundKeyframeHandler$Type<(A)>;
}}
declare module "packages/software/bernie/geckolib/cache/object/$GeoVertex" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"

export class $GeoVertex extends $Record {

constructor(arg0: double, arg1: double, arg2: double)
constructor(position: $Vector3f$Type, texU: float, texV: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "position"(): $Vector3f
public "texU"(): float
public "texV"(): float
public "withUVs"(arg0: float, arg1: float): $GeoVertex
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoVertex$Type = ($GeoVertex);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoVertex_ = $GeoVertex$Type;
}}
declare module "packages/software/bernie/geckolib/core/keyframe/$KeyframeStack" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Keyframe, $Keyframe$Type} from "packages/software/bernie/geckolib/core/keyframe/$Keyframe"

export class $KeyframeStack<T extends $Keyframe<(any)>> extends $Record {

constructor()
constructor(xKeyframes: $List$Type<(T)>, yKeyframes: $List$Type<(T)>, zKeyframes: $List$Type<(T)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "from"<F extends $Keyframe<(any)>>(arg0: $KeyframeStack$Type<(F)>): $KeyframeStack<(F)>
public "yKeyframes"(): $List<(T)>
public "xKeyframes"(): $List<(T)>
public "zKeyframes"(): $List<(T)>
public "getLastKeyframeTime"(): double
get "lastKeyframeTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyframeStack$Type<T> = ($KeyframeStack<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyframeStack_<T> = $KeyframeStack$Type<(T)>;
}}
declare module "packages/software/bernie/geckolib/network/$SerializableDataTicket" {
import {$DataTicket, $DataTicket$Type} from "packages/software/bernie/geckolib/core/object/$DataTicket"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SerializableDataTicket<D> extends $DataTicket<(D)> {

constructor(arg0: string, arg1: $Class$Type<(any)>)

public "decode"(arg0: $FriendlyByteBuf$Type): D
public "encode"(arg0: D, arg1: $FriendlyByteBuf$Type): void
public static "ofString"(arg0: $ResourceLocation$Type): $SerializableDataTicket<(string)>
public static "ofDouble"(arg0: $ResourceLocation$Type): $SerializableDataTicket<(double)>
public static "ofFloat"(arg0: $ResourceLocation$Type): $SerializableDataTicket<(float)>
public static "ofBoolean"(arg0: $ResourceLocation$Type): $SerializableDataTicket<(boolean)>
public static "ofEnum"<E extends $Enum<(E)>>(arg0: $ResourceLocation$Type, arg1: $Class$Type<(E)>): $SerializableDataTicket<(E)>
public static "ofInt"(arg0: $ResourceLocation$Type): $SerializableDataTicket<(integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializableDataTicket$Type<D> = ($SerializableDataTicket<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerializableDataTicket_<D> = $SerializableDataTicket$Type<(D)>;
}}
declare module "packages/software/bernie/geckolib/core/animation/$AnimationController$ParticleKeyframeHandler" {
import {$ParticleKeyframeEvent, $ParticleKeyframeEvent$Type} from "packages/software/bernie/geckolib/core/keyframe/event/$ParticleKeyframeEvent"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"

export interface $AnimationController$ParticleKeyframeHandler<A extends $GeoAnimatable> {

 "handle"(arg0: $ParticleKeyframeEvent$Type<(A)>): void

(arg0: $ParticleKeyframeEvent$Type<(A)>): void
}

export namespace $AnimationController$ParticleKeyframeHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$ParticleKeyframeHandler$Type<A> = ($AnimationController$ParticleKeyframeHandler<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationController$ParticleKeyframeHandler_<A> = $AnimationController$ParticleKeyframeHandler$Type<(A)>;
}}
declare module "packages/software/bernie/geckolib/loading/json/raw/$ModelProperties" {
import {$JsonDeserializer, $JsonDeserializer$Type} from "packages/com/google/gson/$JsonDeserializer"
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $ModelProperties extends $Record {

constructor(animationArmsDown: boolean, animationArmsOutFront: boolean, animationDontShowArmor: boolean, animationInvertedCrouch: boolean, animationNoHeadBob: boolean, animationSingleArmAnimation: boolean, animationSingleLegAnimation: boolean, animationStationaryLegs: boolean, animationStatueOfLibertyArms: boolean, animationUpsideDown: boolean, identifier: string, preserveModelPose: boolean, textureHeight: double, textureWidth: double, visibleBoundsHeight: double, visibleBoundsOffset: (double)[], visibleBoundsWidth: double)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "animationStatueOfLibertyArms"(): boolean
public "animationStationaryLegs"(): boolean
public "animationUpsideDown"(): boolean
public "visibleBoundsOffset"(): (double)[]
public "visibleBoundsHeight"(): double
public "animationArmsOutFront"(): boolean
public "animationDontShowArmor"(): boolean
public "animationInvertedCrouch"(): boolean
public "animationSingleArmAnimation"(): boolean
public "animationSingleLegAnimation"(): boolean
public "identifier"(): string
public static "deserializer"(): $JsonDeserializer<($ModelProperties)>
public "textureWidth"(): double
public "textureHeight"(): double
public "preserveModelPose"(): boolean
public "visibleBoundsWidth"(): double
public "animationArmsDown"(): boolean
public "animationNoHeadBob"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelProperties$Type = ($ModelProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelProperties_ = $ModelProperties$Type;
}}
declare module "packages/software/bernie/geckolib/core/animation/$AnimationProcessor" {
import {$CoreBakedGeoModel, $CoreBakedGeoModel$Type} from "packages/software/bernie/geckolib/core/animatable/model/$CoreBakedGeoModel"
import {$AnimatableManager, $AnimatableManager$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager"
import {$AnimationState, $AnimationState$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationState"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$CoreGeoBone, $CoreGeoBone$Type} from "packages/software/bernie/geckolib/core/animatable/model/$CoreGeoBone"
import {$CoreGeoModel, $CoreGeoModel$Type} from "packages/software/bernie/geckolib/core/animatable/model/$CoreGeoModel"
import {$RawAnimation, $RawAnimation$Type} from "packages/software/bernie/geckolib/core/animation/$RawAnimation"
import {$Queue, $Queue$Type} from "packages/java/util/$Queue"
import {$AnimationProcessor$QueuedAnimation, $AnimationProcessor$QueuedAnimation$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationProcessor$QueuedAnimation"

export class $AnimationProcessor<T extends $GeoAnimatable> {
 "reloadAnimations": boolean

constructor(arg0: $CoreGeoModel$Type<(T)>)

public "registerGeoBone"(arg0: $CoreGeoBone$Type): void
public "getBone"(arg0: string): $CoreGeoBone
public "setActiveModel"(arg0: $CoreBakedGeoModel$Type): void
public "tickAnimation"(arg0: T, arg1: $CoreGeoModel$Type<(T)>, arg2: $AnimatableManager$Type<(T)>, arg3: double, arg4: $AnimationState$Type<(T)>, arg5: boolean): void
public "preAnimationSetup"(arg0: T, arg1: double): void
public "getRegisteredBones"(): $Collection<($CoreGeoBone)>
public "buildAnimationQueue"(arg0: T, arg1: $RawAnimation$Type): $Queue<($AnimationProcessor$QueuedAnimation)>
set "activeModel"(value: $CoreBakedGeoModel$Type)
get "registeredBones"(): $Collection<($CoreGeoBone)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationProcessor$Type<T> = ($AnimationProcessor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationProcessor_<T> = $AnimationProcessor$Type<(T)>;
}}
declare module "packages/software/bernie/geckolib/core/animation/$AnimationController$CustomKeyframeHandler" {
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$CustomInstructionKeyframeEvent, $CustomInstructionKeyframeEvent$Type} from "packages/software/bernie/geckolib/core/keyframe/event/$CustomInstructionKeyframeEvent"

export interface $AnimationController$CustomKeyframeHandler<A extends $GeoAnimatable> {

 "handle"(arg0: $CustomInstructionKeyframeEvent$Type<(A)>): void

(arg0: $CustomInstructionKeyframeEvent$Type<(A)>): void
}

export namespace $AnimationController$CustomKeyframeHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$CustomKeyframeHandler$Type<A> = ($AnimationController$CustomKeyframeHandler<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationController$CustomKeyframeHandler_<A> = $AnimationController$CustomKeyframeHandler$Type<(A)>;
}}
declare module "packages/software/bernie/geckolib/core/keyframe/$BoneAnimationQueue" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Keyframe, $Keyframe$Type} from "packages/software/bernie/geckolib/core/keyframe/$Keyframe"
import {$CoreGeoBone, $CoreGeoBone$Type} from "packages/software/bernie/geckolib/core/animatable/model/$CoreGeoBone"
import {$BoneSnapshot, $BoneSnapshot$Type} from "packages/software/bernie/geckolib/core/state/$BoneSnapshot"
import {$AnimationPointQueue, $AnimationPointQueue$Type} from "packages/software/bernie/geckolib/core/keyframe/$AnimationPointQueue"
import {$AnimationPoint, $AnimationPoint$Type} from "packages/software/bernie/geckolib/core/keyframe/$AnimationPoint"

export class $BoneAnimationQueue extends $Record {

constructor(arg0: $CoreGeoBone$Type)
constructor(bone: $CoreGeoBone$Type, rotationXQueue: $AnimationPointQueue$Type, rotationYQueue: $AnimationPointQueue$Type, rotationZQueue: $AnimationPointQueue$Type, positionXQueue: $AnimationPointQueue$Type, positionYQueue: $AnimationPointQueue$Type, positionZQueue: $AnimationPointQueue$Type, scaleXQueue: $AnimationPointQueue$Type, scaleYQueue: $AnimationPointQueue$Type, scaleZQueue: $AnimationPointQueue$Type)

public "positionZQueue"(): $AnimationPointQueue
public "scaleXQueue"(): $AnimationPointQueue
public "rotationYQueue"(): $AnimationPointQueue
public "rotationXQueue"(): $AnimationPointQueue
public "positionXQueue"(): $AnimationPointQueue
public "rotationZQueue"(): $AnimationPointQueue
public "positionYQueue"(): $AnimationPointQueue
public "scaleZQueue"(): $AnimationPointQueue
public "scaleYQueue"(): $AnimationPointQueue
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "addNextRotation"(arg0: $Keyframe$Type<(any)>, arg1: double, arg2: double, arg3: $BoneSnapshot$Type, arg4: $BoneSnapshot$Type, arg5: $AnimationPoint$Type, arg6: $AnimationPoint$Type, arg7: $AnimationPoint$Type): void
public "addNextPosition"(arg0: $Keyframe$Type<(any)>, arg1: double, arg2: double, arg3: $BoneSnapshot$Type, arg4: $AnimationPoint$Type, arg5: $AnimationPoint$Type, arg6: $AnimationPoint$Type): void
public "addNextScale"(arg0: $Keyframe$Type<(any)>, arg1: double, arg2: double, arg3: $BoneSnapshot$Type, arg4: $AnimationPoint$Type, arg5: $AnimationPoint$Type, arg6: $AnimationPoint$Type): void
public "addScales"(arg0: $AnimationPoint$Type, arg1: $AnimationPoint$Type, arg2: $AnimationPoint$Type): void
public "addPositions"(arg0: $AnimationPoint$Type, arg1: $AnimationPoint$Type, arg2: $AnimationPoint$Type): void
public "addRotations"(arg0: $AnimationPoint$Type, arg1: $AnimationPoint$Type, arg2: $AnimationPoint$Type): void
public "bone"(): $CoreGeoBone
public "addRotationZPoint"(arg0: $Keyframe$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addPosZPoint"(arg0: $Keyframe$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addScaleYPoint"(arg0: $Keyframe$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addPosYPoint"(arg0: $Keyframe$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addScaleXPoint"(arg0: $Keyframe$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addScaleZPoint"(arg0: $Keyframe$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addPosXPoint"(arg0: $Keyframe$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addRotationYPoint"(arg0: $Keyframe$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addRotationXPoint"(arg0: $Keyframe$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoneAnimationQueue$Type = ($BoneAnimationQueue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoneAnimationQueue_ = $BoneAnimationQueue$Type;
}}
declare module "packages/software/bernie/geckolib/cache/object/$BakedGeoModel" {
import {$CoreBakedGeoModel, $CoreBakedGeoModel$Type} from "packages/software/bernie/geckolib/core/animatable/model/$CoreBakedGeoModel"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ModelProperties, $ModelProperties$Type} from "packages/software/bernie/geckolib/loading/json/raw/$ModelProperties"
import {$CoreGeoBone, $CoreGeoBone$Type} from "packages/software/bernie/geckolib/core/animatable/model/$CoreGeoBone"
import {$GeoBone, $GeoBone$Type} from "packages/software/bernie/geckolib/cache/object/$GeoBone"

export class $BakedGeoModel extends $Record implements $CoreBakedGeoModel {

constructor(topLevelBones: $List$Type<($GeoBone$Type)>, properties: $ModelProperties$Type)

public "getBones"(): $List<(any)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "properties"(): $ModelProperties
public "getBone"(arg0: string): $Optional<($GeoBone)>
public "topLevelBones"(): $List<($GeoBone)>
public "searchForChildBone"(arg0: $CoreGeoBone$Type, arg1: string): $CoreGeoBone
get "bones"(): $List<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedGeoModel$Type = ($BakedGeoModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BakedGeoModel_ = $BakedGeoModel$Type;
}}
declare module "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar" {
import {$AnimationController, $AnimationController$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController"

export class $AnimatableManager$ControllerRegistrar {

constructor()

public "add"(...arg0: ($AnimationController$Type<(any)>)[]): $AnimatableManager$ControllerRegistrar
public "remove"(arg0: string): $AnimatableManager$ControllerRegistrar
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableManager$ControllerRegistrar$Type = ($AnimatableManager$ControllerRegistrar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableManager$ControllerRegistrar_ = $AnimatableManager$ControllerRegistrar$Type;
}}
declare module "packages/software/bernie/geckolib/core/animation/$AnimationProcessor$QueuedAnimation" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Animation$LoopType, $Animation$LoopType$Type} from "packages/software/bernie/geckolib/core/animation/$Animation$LoopType"
import {$Animation, $Animation$Type} from "packages/software/bernie/geckolib/core/animation/$Animation"

export class $AnimationProcessor$QueuedAnimation extends $Record {

constructor(animation: $Animation$Type, loopType: $Animation$LoopType$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "loopType"(): $Animation$LoopType
public "animation"(): $Animation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationProcessor$QueuedAnimation$Type = ($AnimationProcessor$QueuedAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationProcessor$QueuedAnimation_ = $AnimationProcessor$QueuedAnimation$Type;
}}
declare module "packages/software/bernie/geckolib/animatable/$SingletonGeoAnimatable" {
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $SingletonGeoAnimatable extends $GeoAnimatable {

 "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
 "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
 "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
 "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
 "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
 "animatableCacheOverride"(): $AnimatableInstanceCache
 "getTick"(arg0: any): double
 "getBoneResetTime"(): double
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
 "shouldPlayAnimsWhileGamePaused"(): boolean
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
}

export namespace $SingletonGeoAnimatable {
function registerSyncedAnimatable(arg0: $GeoAnimatable$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingletonGeoAnimatable$Type = ($SingletonGeoAnimatable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingletonGeoAnimatable_ = $SingletonGeoAnimatable$Type;
}}
declare module "packages/software/bernie/geckolib/core/animatable/model/$CoreGeoBone" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$BoneSnapshot, $BoneSnapshot$Type} from "packages/software/bernie/geckolib/core/state/$BoneSnapshot"

export interface $CoreGeoBone {

 "getName"(): string
 "isHidden"(): boolean
 "getParent"(): $CoreGeoBone
 "setPivotY"(arg0: float): void
 "getPivotX"(): float
 "setPivotX"(arg0: float): void
 "resetStateChanges"(): void
 "getInitialSnapshot"(): $BoneSnapshot
 "setRotX"(arg0: float): void
 "getPivotZ"(): float
 "getRotZ"(): float
 "setScaleY"(arg0: float): void
 "setHidden"(arg0: boolean): void
 "isHidingChildren"(): boolean
 "setScaleZ"(arg0: float): void
 "hasRotationChanged"(): boolean
 "getPivotY"(): float
 "setRotZ"(arg0: float): void
 "hasPositionChanged"(): boolean
 "getScaleZ"(): float
 "getRotY"(): float
 "setScaleX"(arg0: float): void
 "setPivotZ"(arg0: float): void
 "hasScaleChanged"(): boolean
 "getRotX"(): float
 "setRotY"(arg0: float): void
 "markScaleAsChanged"(): void
 "setChildrenHidden"(arg0: boolean): void
 "updateScale"(arg0: float, arg1: float, arg2: float): void
 "saveSnapshot"(): $BoneSnapshot
 "getScaleX"(): float
 "getScaleY"(): float
 "updatePosition"(arg0: float, arg1: float, arg2: float): void
 "getPosZ"(): float
 "setPosZ"(arg0: float): void
 "saveInitialSnapshot"(): void
 "markRotationAsChanged"(): void
 "markPositionAsChanged"(): void
 "getPosY"(): float
 "getPosX"(): float
 "setPosX"(arg0: float): void
 "setPosY"(arg0: float): void
 "updateRotation"(arg0: float, arg1: float, arg2: float): void
 "updatePivot"(arg0: float, arg1: float, arg2: float): void
 "getChildBones"(): $List<(any)>
}

export namespace $CoreGeoBone {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoreGeoBone$Type = ($CoreGeoBone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoreGeoBone_ = $CoreGeoBone$Type;
}}
declare module "packages/software/bernie/geckolib/core/animatable/model/$CoreBakedGeoModel" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$CoreGeoBone, $CoreGeoBone$Type} from "packages/software/bernie/geckolib/core/animatable/model/$CoreGeoBone"

export interface $CoreBakedGeoModel {

 "getBones"(): $List<(any)>
 "searchForChildBone"(arg0: $CoreGeoBone$Type, arg1: string): $CoreGeoBone
 "getBone"(arg0: string): $Optional<(any)>
}

export namespace $CoreBakedGeoModel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoreBakedGeoModel$Type = ($CoreBakedGeoModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoreBakedGeoModel_ = $CoreBakedGeoModel$Type;
}}
declare module "packages/software/bernie/geckolib/core/animation/$EasingType" {
import {$Double2DoubleFunction, $Double2DoubleFunction$Type} from "packages/it/unimi/dsi/fastutil/doubles/$Double2DoubleFunction"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$AnimationPoint, $AnimationPoint$Type} from "packages/software/bernie/geckolib/core/keyframe/$AnimationPoint"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $EasingType {

 "buildTransformer"(arg0: double): $Double2DoubleFunction
 "apply"(arg0: $AnimationPoint$Type, arg1: double, arg2: double): double
 "apply"(arg0: $AnimationPoint$Type): double

(arg0: $Double2DoubleFunction$Type): $Double2DoubleFunction
}

export namespace $EasingType {
const EASING_TYPES: $Map<(string), ($EasingType)>
const LINEAR: $EasingType
const STEP: $EasingType
const EASE_IN_SINE: $EasingType
const EASE_OUT_SINE: $EasingType
const EASE_IN_OUT_SINE: $EasingType
const EASE_IN_QUAD: $EasingType
const EASE_OUT_QUAD: $EasingType
const EASE_IN_OUT_QUAD: $EasingType
const EASE_IN_CUBIC: $EasingType
const EASE_OUT_CUBIC: $EasingType
const EASE_IN_OUT_CUBIC: $EasingType
const EASE_IN_QUART: $EasingType
const EASE_OUT_QUART: $EasingType
const EASE_IN_OUT_QUART: $EasingType
const EASE_IN_QUINT: $EasingType
const EASE_OUT_QUINT: $EasingType
const EASE_IN_OUT_QUINT: $EasingType
const EASE_IN_EXPO: $EasingType
const EASE_OUT_EXPO: $EasingType
const EASE_IN_OUT_EXPO: $EasingType
const EASE_IN_CIRC: $EasingType
const EASE_OUT_CIRC: $EasingType
const EASE_IN_OUT_CIRC: $EasingType
const EASE_IN_BACK: $EasingType
const EASE_OUT_BACK: $EasingType
const EASE_IN_OUT_BACK: $EasingType
const EASE_IN_ELASTIC: $EasingType
const EASE_OUT_ELASTIC: $EasingType
const EASE_IN_OUT_ELASTIC: $EasingType
const EASE_IN_BOUNCE: $EasingType
const EASE_OUT_BOUNCE: $EasingType
const EASE_IN_OUT_BOUNCE: $EasingType
const CATMULLROM: $EasingType
function easeInOut(arg0: $Double2DoubleFunction$Type): $Double2DoubleFunction
function easeIn(arg0: $Double2DoubleFunction$Type): $Double2DoubleFunction
function easeOut(arg0: $Double2DoubleFunction$Type): $Double2DoubleFunction
function catmullRom(arg0: double): double
function cubic(arg0: double): double
function elastic(arg0: double): $Double2DoubleFunction
function stepPositive(arg0: $Double2DoubleFunction$Type): $Double2DoubleFunction
function stepNonNegative(arg0: $Double2DoubleFunction$Type): $Double2DoubleFunction
function lerpWithOverride(arg0: $AnimationPoint$Type, arg1: $EasingType$Type): double
function pow(arg0: double): $Double2DoubleFunction
function exp(arg0: double): double
function register(arg0: string, arg1: $EasingType$Type): $EasingType
function step(arg0: double): $Double2DoubleFunction
function back(arg0: double): $Double2DoubleFunction
function fromString(arg0: string): $EasingType
function fromJson(arg0: $JsonElement$Type): $EasingType
function quadratic(arg0: double): double
function bounce(arg0: double): $Double2DoubleFunction
function linear(arg0: double): double
function linear(arg0: $Double2DoubleFunction$Type): $Double2DoubleFunction
function circle(arg0: double): double
function sine(arg0: double): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasingType$Type = ($EasingType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasingType_ = $EasingType$Type;
}}
declare module "packages/software/bernie/geckolib/core/animation/$RawAnimation$Stage" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Animation$LoopType, $Animation$LoopType$Type} from "packages/software/bernie/geckolib/core/animation/$Animation$LoopType"

export class $RawAnimation$Stage extends $Record {

constructor(arg0: string, arg1: $Animation$LoopType$Type)
constructor(animationName: string, loopType: $Animation$LoopType$Type, additionalTicks: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "loopType"(): $Animation$LoopType
public "animationName"(): string
public "additionalTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawAnimation$Stage$Type = ($RawAnimation$Stage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RawAnimation$Stage_ = $RawAnimation$Stage$Type;
}}
declare module "packages/software/bernie/geckolib/cache/object/$GeoBone" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$GeoCube, $GeoCube$Type} from "packages/software/bernie/geckolib/cache/object/$GeoCube"
import {$CoreGeoBone, $CoreGeoBone$Type} from "packages/software/bernie/geckolib/core/animatable/model/$CoreGeoBone"
import {$BoneSnapshot, $BoneSnapshot$Type} from "packages/software/bernie/geckolib/core/state/$BoneSnapshot"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"

export class $GeoBone implements $CoreGeoBone {

constructor(arg0: $GeoBone$Type, arg1: string, arg2: boolean, arg3: double, arg4: boolean, arg5: boolean)

public "getName"(): string
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isHidden"(): boolean
public "setPivotY"(arg0: float): void
public "getPivotX"(): float
public "setPivotX"(arg0: float): void
public "resetStateChanges"(): void
public "getInitialSnapshot"(): $BoneSnapshot
public "setRotX"(arg0: float): void
public "getPivotZ"(): float
public "getRotZ"(): float
public "setScaleY"(arg0: float): void
public "setHidden"(arg0: boolean): void
public "isHidingChildren"(): boolean
public "setScaleZ"(arg0: float): void
public "hasRotationChanged"(): boolean
public "getPivotY"(): float
public "setRotZ"(arg0: float): void
public "hasPositionChanged"(): boolean
public "getScaleZ"(): float
public "getRotY"(): float
public "setScaleX"(arg0: float): void
public "setPivotZ"(arg0: float): void
public "hasScaleChanged"(): boolean
public "getRotX"(): float
public "setRotY"(arg0: float): void
public "markScaleAsChanged"(): void
public "setChildrenHidden"(arg0: boolean): void
public "setModelPosition"(arg0: $Vector3d$Type): void
public "getModelPosition"(): $Vector3d
public "shouldNeverRender"(): boolean
public "isTrackingMatrices"(): boolean
public "getReset"(): boolean
public "getLocalPosition"(): $Vector3d
public "getWorldPosition"(): $Vector3d
public "getPositionVector"(): $Vector3d
public "getRotationVector"(): $Vector3d
public "getScaleVector"(): $Vector3d
public "getScaleX"(): float
public "getScaleY"(): float
public "getPosZ"(): float
public "setPosZ"(arg0: float): void
public "getLocalSpaceMatrix"(): $Matrix4f
public "saveInitialSnapshot"(): void
public "getWorldSpaceMatrix"(): $Matrix4f
public "getWorldSpaceNormal"(): $Matrix3f
public "setTrackingMatrices"(arg0: boolean): void
public "addRotationOffsetFromBone"(arg0: $GeoBone$Type): void
public "setModelSpaceMatrix"(arg0: $Matrix4f$Type): void
public "setWorldSpaceMatrix"(arg0: $Matrix4f$Type): void
public "setLocalSpaceMatrix"(arg0: $Matrix4f$Type): void
public "markRotationAsChanged"(): void
public "setWorldSpaceNormal"(arg0: $Matrix3f$Type): void
public "getModelRotationMatrix"(): $Matrix4f
public "markPositionAsChanged"(): void
public "getModelSpaceMatrix"(): $Matrix4f
public "getPosY"(): float
public "getPosX"(): float
public "getMirror"(): boolean
public "setPosX"(arg0: float): void
public "setPosY"(arg0: float): void
public "getChildBones"(): $List<($GeoBone)>
public "getCubes"(): $List<($GeoCube)>
public "getInflate"(): double
public "updateScale"(arg0: float, arg1: float, arg2: float): void
public "saveSnapshot"(): $BoneSnapshot
public "updatePosition"(arg0: float, arg1: float, arg2: float): void
public "updateRotation"(arg0: float, arg1: float, arg2: float): void
public "updatePivot"(arg0: float, arg1: float, arg2: float): void
get "name"(): string
get "hidden"(): boolean
set "pivotY"(value: float)
get "pivotX"(): float
set "pivotX"(value: float)
get "initialSnapshot"(): $BoneSnapshot
set "rotX"(value: float)
get "pivotZ"(): float
get "rotZ"(): float
set "scaleY"(value: float)
set "hidden"(value: boolean)
get "hidingChildren"(): boolean
set "scaleZ"(value: float)
get "pivotY"(): float
set "rotZ"(value: float)
get "scaleZ"(): float
get "rotY"(): float
set "scaleX"(value: float)
set "pivotZ"(value: float)
get "rotX"(): float
set "rotY"(value: float)
set "childrenHidden"(value: boolean)
set "modelPosition"(value: $Vector3d$Type)
get "modelPosition"(): $Vector3d
get "trackingMatrices"(): boolean
get "reset"(): boolean
get "localPosition"(): $Vector3d
get "worldPosition"(): $Vector3d
get "positionVector"(): $Vector3d
get "rotationVector"(): $Vector3d
get "scaleVector"(): $Vector3d
get "scaleX"(): float
get "scaleY"(): float
get "posZ"(): float
set "posZ"(value: float)
get "localSpaceMatrix"(): $Matrix4f
get "worldSpaceMatrix"(): $Matrix4f
get "worldSpaceNormal"(): $Matrix3f
set "trackingMatrices"(value: boolean)
set "modelSpaceMatrix"(value: $Matrix4f$Type)
set "worldSpaceMatrix"(value: $Matrix4f$Type)
set "localSpaceMatrix"(value: $Matrix4f$Type)
set "worldSpaceNormal"(value: $Matrix3f$Type)
get "modelRotationMatrix"(): $Matrix4f
get "modelSpaceMatrix"(): $Matrix4f
get "posY"(): float
get "posX"(): float
get "mirror"(): boolean
set "posX"(value: float)
set "posY"(value: float)
get "childBones"(): $List<($GeoBone)>
get "cubes"(): $List<($GeoCube)>
get "inflate"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoBone$Type = ($GeoBone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoBone_ = $GeoBone$Type;
}}
declare module "packages/software/bernie/geckolib/core/animation/$AnimationController$State" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AnimationController$State extends $Enum<($AnimationController$State)> {
static readonly "RUNNING": $AnimationController$State
static readonly "TRANSITIONING": $AnimationController$State
static readonly "PAUSED": $AnimationController$State
static readonly "STOPPED": $AnimationController$State


public static "values"(): ($AnimationController$State)[]
public static "valueOf"(arg0: string): $AnimationController$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$State$Type = (("running") | ("paused") | ("stopped") | ("transitioning")) | ($AnimationController$State);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationController$State_ = $AnimationController$State$Type;
}}
declare module "packages/software/bernie/geckolib/core/animation/$AnimationController" {
import {$EasingType, $EasingType$Type} from "packages/software/bernie/geckolib/core/animation/$EasingType"
import {$AnimationController$State, $AnimationController$State$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController$State"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$AnimationController$CustomKeyframeHandler, $AnimationController$CustomKeyframeHandler$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController$CustomKeyframeHandler"
import {$BoneSnapshot, $BoneSnapshot$Type} from "packages/software/bernie/geckolib/core/state/$BoneSnapshot"
import {$CoreGeoModel, $CoreGeoModel$Type} from "packages/software/bernie/geckolib/core/animatable/model/$CoreGeoModel"
import {$RawAnimation, $RawAnimation$Type} from "packages/software/bernie/geckolib/core/animation/$RawAnimation"
import {$AnimationController$AnimationStateHandler, $AnimationController$AnimationStateHandler$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController$AnimationStateHandler"
import {$AnimationProcessor$QueuedAnimation, $AnimationProcessor$QueuedAnimation$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationProcessor$QueuedAnimation"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$AnimationController$ParticleKeyframeHandler, $AnimationController$ParticleKeyframeHandler$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController$ParticleKeyframeHandler"
import {$AnimationState, $AnimationState$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationState"
import {$AnimationController$SoundKeyframeHandler, $AnimationController$SoundKeyframeHandler$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController$SoundKeyframeHandler"
import {$CoreGeoBone, $CoreGeoBone$Type} from "packages/software/bernie/geckolib/core/animatable/model/$CoreGeoBone"
import {$BoneAnimationQueue, $BoneAnimationQueue$Type} from "packages/software/bernie/geckolib/core/keyframe/$BoneAnimationQueue"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnimationController<T extends $GeoAnimatable> {

constructor(arg0: T, arg1: $AnimationController$AnimationStateHandler$Type<(T)>)
constructor(arg0: T, arg1: string, arg2: integer, arg3: $AnimationController$AnimationStateHandler$Type<(T)>)
constructor(arg0: T, arg1: string, arg2: $AnimationController$AnimationStateHandler$Type<(T)>)
constructor(arg0: T, arg1: integer, arg2: $AnimationController$AnimationStateHandler$Type<(T)>)

public "getName"(): string
public "stop"(): void
public "process"(arg0: $CoreGeoModel$Type<(T)>, arg1: $AnimationState$Type<(T)>, arg2: $Map$Type<(string), ($CoreGeoBone$Type)>, arg3: $Map$Type<(string), ($BoneSnapshot$Type)>, arg4: double, arg5: boolean): void
public "getCurrentAnimation"(): $AnimationProcessor$QueuedAnimation
public "triggerableAnim"(arg0: string, arg1: $RawAnimation$Type): $AnimationController<(T)>
public "getAnimationState"(): $AnimationController$State
public "getAnimationSpeed"(): double
public "setAnimation"(arg0: $RawAnimation$Type): void
public "setAnimationSpeed"(arg0: double): $AnimationController<(T)>
public "tryTriggerAnimation"(arg0: string): boolean
public "forceAnimationReset"(): void
public "transitionLength"(arg0: integer): $AnimationController<(T)>
public "setCustomInstructionKeyframeHandler"(arg0: $AnimationController$CustomKeyframeHandler$Type<(T)>): $AnimationController<(T)>
public "isPlayingTriggeredAnimation"(): boolean
public "setParticleKeyframeHandler"(arg0: $AnimationController$ParticleKeyframeHandler$Type<(T)>): $AnimationController<(T)>
public "setSoundKeyframeHandler"(arg0: $AnimationController$SoundKeyframeHandler$Type<(T)>): $AnimationController<(T)>
public "receiveTriggeredAnimations"(): $AnimationController<(T)>
/**
 * 
 * @deprecated
 */
public "setTransitionLength"(arg0: integer): void
public "getBoneAnimationQueues"(): $Map<(string), ($BoneAnimationQueue)>
public "setAnimationSpeedHandler"(arg0: $Function$Type<(T), (double)>): $AnimationController<(T)>
public "setOverrideEasingType"(arg0: $EasingType$Type): $AnimationController<(T)>
public "setOverrideEasingTypeFunction"(arg0: $Function$Type<(T), ($EasingType$Type)>): $AnimationController<(T)>
public "hasAnimationFinished"(): boolean
public "getCurrentRawAnimation"(): $RawAnimation
get "name"(): string
get "currentAnimation"(): $AnimationProcessor$QueuedAnimation
get "animationState"(): $AnimationController$State
get "animationSpeed"(): double
set "animation"(value: $RawAnimation$Type)
set "animationSpeed"(value: double)
set "customInstructionKeyframeHandler"(value: $AnimationController$CustomKeyframeHandler$Type<(T)>)
get "playingTriggeredAnimation"(): boolean
set "particleKeyframeHandler"(value: $AnimationController$ParticleKeyframeHandler$Type<(T)>)
set "soundKeyframeHandler"(value: $AnimationController$SoundKeyframeHandler$Type<(T)>)
get "boneAnimationQueues"(): $Map<(string), ($BoneAnimationQueue)>
set "animationSpeedHandler"(value: $Function$Type<(T), (double)>)
set "overrideEasingType"(value: $EasingType$Type)
set "overrideEasingTypeFunction"(value: $Function$Type<(T), ($EasingType$Type)>)
get "currentRawAnimation"(): $RawAnimation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$Type<T> = ($AnimationController<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationController_<T> = $AnimationController$Type<(T)>;
}}
declare module "packages/software/bernie/geckolib/cache/object/$GeoCube" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$GeoQuad, $GeoQuad$Type} from "packages/software/bernie/geckolib/cache/object/$GeoQuad"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export class $GeoCube extends $Record {

constructor(quads: ($GeoQuad$Type)[], pivot: $Vec3$Type, rotation: $Vec3$Type, size: $Vec3$Type, inflate: double, mirror: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "inflate"(): double
public "size"(): $Vec3
public "pivot"(): $Vec3
public "quads"(): ($GeoQuad)[]
public "mirror"(): boolean
public "rotation"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoCube$Type = ($GeoCube);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoCube_ = $GeoCube$Type;
}}
declare module "packages/software/bernie/geckolib/core/keyframe/event/data/$CustomInstructionKeyframeData" {
import {$KeyFrameData, $KeyFrameData$Type} from "packages/software/bernie/geckolib/core/keyframe/event/data/$KeyFrameData"

export class $CustomInstructionKeyframeData extends $KeyFrameData {

constructor(arg0: double, arg1: string)

public "hashCode"(): integer
public "getInstructions"(): string
get "instructions"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomInstructionKeyframeData$Type = ($CustomInstructionKeyframeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomInstructionKeyframeData_ = $CustomInstructionKeyframeData$Type;
}}
declare module "packages/software/bernie/geckolib/core/animation/$Animation" {
import {$BoneAnimation, $BoneAnimation$Type} from "packages/software/bernie/geckolib/core/keyframe/$BoneAnimation"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Animation$LoopType, $Animation$LoopType$Type} from "packages/software/bernie/geckolib/core/animation/$Animation$LoopType"
import {$Animation$Keyframes, $Animation$Keyframes$Type} from "packages/software/bernie/geckolib/core/animation/$Animation$Keyframes"

export class $Animation extends $Record {

constructor(name: string, length: double, loopType: $Animation$LoopType$Type, boneAnimations: ($BoneAnimation$Type)[], keyFrames: $Animation$Keyframes$Type)

public "name"(): string
public "equals"(arg0: any): boolean
public "length"(): double
public "toString"(): string
public "hashCode"(): integer
public "loopType"(): $Animation$LoopType
public "boneAnimations"(): ($BoneAnimation)[]
public "keyFrames"(): $Animation$Keyframes
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$Type = ($Animation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animation_ = $Animation$Type;
}}
declare module "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache" {
import {$DataTicket, $DataTicket$Type} from "packages/software/bernie/geckolib/core/object/$DataTicket"
import {$AnimatableManager, $AnimatableManager$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"

export class $AnimatableInstanceCache {

constructor(arg0: $GeoAnimatable$Type)

public "getDataPoint"<D>(arg0: long, arg1: $DataTicket$Type<(D)>): D
public "getManagerForId"<T extends $GeoAnimatable>(arg0: long): $AnimatableManager<(T)>
public "addDataPoint"<D>(arg0: long, arg1: $DataTicket$Type<(D)>, arg2: D): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableInstanceCache$Type = ($AnimatableInstanceCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableInstanceCache_ = $AnimatableInstanceCache$Type;
}}
declare module "packages/software/bernie/geckolib/core/keyframe/event/data/$ParticleKeyframeData" {
import {$KeyFrameData, $KeyFrameData$Type} from "packages/software/bernie/geckolib/core/keyframe/event/data/$KeyFrameData"

export class $ParticleKeyframeData extends $KeyFrameData {

constructor(arg0: double, arg1: string, arg2: string, arg3: string)

public "hashCode"(): integer
public "script"(): string
public "getLocator"(): string
public "getEffect"(): string
get "locator"(): string
get "effect"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleKeyframeData$Type = ($ParticleKeyframeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleKeyframeData_ = $ParticleKeyframeData$Type;
}}
declare module "packages/software/bernie/geckolib/core/keyframe/$AnimationPointQueue" {
import {$LinkedList, $LinkedList$Type} from "packages/java/util/$LinkedList"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ListIterator, $ListIterator$Type} from "packages/java/util/$ListIterator"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$AnimationPoint, $AnimationPoint$Type} from "packages/software/bernie/geckolib/core/keyframe/$AnimationPoint"

export class $AnimationPointQueue extends $LinkedList<($AnimationPoint)> {

constructor()

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $List<(E)>
public "isEmpty"(): boolean
public "subList"(arg0: integer, arg1: integer): $List<(E)>
public "iterator"(): $Iterator<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "listIterator"(): $ListIterator<(E)>
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationPointQueue$Type = ($AnimationPointQueue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationPointQueue_ = $AnimationPointQueue$Type;
}}
declare module "packages/software/bernie/geckolib/animatable/$GeoBlockEntity" {
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"

export interface $GeoBlockEntity extends $GeoAnimatable {

 "setAnimData"<D>(arg0: $SerializableDataTicket$Type<(D)>, arg1: D): void
 "getAnimData"<D>(arg0: $SerializableDataTicket$Type<(D)>): D
 "getTick"(arg0: any): double
 "triggerAnim"(arg0: string, arg1: string): void
 "getBoneResetTime"(): double
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
 "animatableCacheOverride"(): $AnimatableInstanceCache
 "shouldPlayAnimsWhileGamePaused"(): boolean
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
}

export namespace $GeoBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoBlockEntity$Type = ($GeoBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoBlockEntity_ = $GeoBlockEntity$Type;
}}
declare module "packages/software/bernie/geckolib/core/keyframe/event/data/$SoundKeyframeData" {
import {$KeyFrameData, $KeyFrameData$Type} from "packages/software/bernie/geckolib/core/keyframe/event/data/$KeyFrameData"

export class $SoundKeyframeData extends $KeyFrameData {

constructor(arg0: double, arg1: string)

public "hashCode"(): integer
public "getSound"(): string
get "sound"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundKeyframeData$Type = ($SoundKeyframeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundKeyframeData_ = $SoundKeyframeData$Type;
}}
declare module "packages/software/bernie/geckolib/core/keyframe/$AnimationPoint" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Keyframe, $Keyframe$Type} from "packages/software/bernie/geckolib/core/keyframe/$Keyframe"

export class $AnimationPoint extends $Record {

constructor(keyFrame: $Keyframe$Type<(any)>, currentTick: double, transitionLength: double, animationStartValue: double, animationEndValue: double)

public "animationEndValue"(): double
public "keyFrame"(): $Keyframe<(any)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "transitionLength"(): double
public "currentTick"(): double
public "animationStartValue"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationPoint$Type = ($AnimationPoint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationPoint_ = $AnimationPoint$Type;
}}
declare module "packages/software/bernie/geckolib/core/animation/$RawAnimation" {
import {$Animation$LoopType, $Animation$LoopType$Type} from "packages/software/bernie/geckolib/core/animation/$Animation$LoopType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RawAnimation$Stage, $RawAnimation$Stage$Type} from "packages/software/bernie/geckolib/core/animation/$RawAnimation$Stage"

export class $RawAnimation {


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"(arg0: $RawAnimation$Type): $RawAnimation
public static "begin"(): $RawAnimation
public "then"(arg0: string, arg1: $Animation$LoopType$Type): $RawAnimation
public "thenPlay"(arg0: string): $RawAnimation
public "thenLoop"(arg0: string): $RawAnimation
public "getAnimationStages"(): $List<($RawAnimation$Stage)>
public "thenWait"(arg0: integer): $RawAnimation
public "thenPlayXTimes"(arg0: string, arg1: integer): $RawAnimation
public "thenPlayAndHold"(arg0: string): $RawAnimation
get "animationStages"(): $List<($RawAnimation$Stage)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawAnimation$Type = ($RawAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RawAnimation_ = $RawAnimation$Type;
}}
declare module "packages/software/bernie/geckolib/core/keyframe/event/$ParticleKeyframeEvent" {
import {$AnimationController, $AnimationController$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController"
import {$ParticleKeyframeData, $ParticleKeyframeData$Type} from "packages/software/bernie/geckolib/core/keyframe/event/data/$ParticleKeyframeData"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$KeyFrameEvent, $KeyFrameEvent$Type} from "packages/software/bernie/geckolib/core/keyframe/event/$KeyFrameEvent"

export class $ParticleKeyframeEvent<T extends $GeoAnimatable> extends $KeyFrameEvent<(T), ($ParticleKeyframeData)> {

constructor(arg0: T, arg1: double, arg2: $AnimationController$Type<(T)>, arg3: $ParticleKeyframeData$Type)

public "getKeyframeData"(): $ParticleKeyframeData
get "keyframeData"(): $ParticleKeyframeData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleKeyframeEvent$Type<T> = ($ParticleKeyframeEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleKeyframeEvent_<T> = $ParticleKeyframeEvent$Type<(T)>;
}}
declare module "packages/software/bernie/geckolib/animatable/$GeoEntity" {
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"

export interface $GeoEntity extends $GeoAnimatable {

 "setAnimData"<D>(arg0: $SerializableDataTicket$Type<(D)>, arg1: D): void
 "getAnimData"<D>(arg0: $SerializableDataTicket$Type<(D)>): D
 "getTick"(arg0: any): double
 "triggerAnim"(arg0: string, arg1: string): void
 "getBoneResetTime"(): double
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
 "animatableCacheOverride"(): $AnimatableInstanceCache
 "shouldPlayAnimsWhileGamePaused"(): boolean
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
}

export namespace $GeoEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoEntity$Type = ($GeoEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoEntity_ = $GeoEntity$Type;
}}
declare module "packages/software/bernie/geckolib/cache/object/$GeoQuad" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$GeoVertex, $GeoVertex$Type} from "packages/software/bernie/geckolib/cache/object/$GeoVertex"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export class $GeoQuad extends $Record {

constructor(vertices: ($GeoVertex$Type)[], normal: $Vector3f$Type, direction: $Direction$Type)

public "direction"(): $Direction
public static "build"(arg0: ($GeoVertex$Type)[], arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: boolean, arg8: $Direction$Type): $GeoQuad
public static "build"(arg0: ($GeoVertex$Type)[], arg1: (double)[], arg2: (double)[], arg3: float, arg4: float, arg5: boolean, arg6: $Direction$Type): $GeoQuad
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "normal"(): $Vector3f
public "vertices"(): ($GeoVertex)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoQuad$Type = ($GeoQuad);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoQuad_ = $GeoQuad$Type;
}}
declare module "packages/software/bernie/geckolib/core/keyframe/event/$SoundKeyframeEvent" {
import {$SoundKeyframeData, $SoundKeyframeData$Type} from "packages/software/bernie/geckolib/core/keyframe/event/data/$SoundKeyframeData"
import {$AnimationController, $AnimationController$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$KeyFrameEvent, $KeyFrameEvent$Type} from "packages/software/bernie/geckolib/core/keyframe/event/$KeyFrameEvent"

export class $SoundKeyframeEvent<T extends $GeoAnimatable> extends $KeyFrameEvent<(T), ($SoundKeyframeData)> {

constructor(arg0: T, arg1: double, arg2: $AnimationController$Type<(T)>, arg3: $SoundKeyframeData$Type)

public "getKeyframeData"(): $SoundKeyframeData
get "keyframeData"(): $SoundKeyframeData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundKeyframeEvent$Type<T> = ($SoundKeyframeEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundKeyframeEvent_<T> = $SoundKeyframeEvent$Type<(T)>;
}}
declare module "packages/software/bernie/geckolib/core/animation/$AnimationState" {
import {$DataTicket, $DataTicket$Type} from "packages/software/bernie/geckolib/core/object/$DataTicket"
import {$AnimationController, $AnimationController$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$RawAnimation, $RawAnimation$Type} from "packages/software/bernie/geckolib/core/animation/$RawAnimation"
import {$PlayState, $PlayState$Type} from "packages/software/bernie/geckolib/core/object/$PlayState"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnimationState<T extends $GeoAnimatable> {
 "animationTick": double

constructor(arg0: T, arg1: float, arg2: float, arg3: float, arg4: boolean)

public "withController"(arg0: $AnimationController$Type<(T)>): $AnimationState<(T)>
public "isCurrentAnimationStage"(arg0: string): boolean
public "resetCurrentAnimation"(): void
public "getData"<D>(arg0: $DataTicket$Type<(D)>): D
public "isMoving"(): boolean
public "setData"<D>(arg0: $DataTicket$Type<(D)>, arg1: D): void
public "getPartialTick"(): float
public "getController"(): $AnimationController<(T)>
public "setAnimation"(arg0: $RawAnimation$Type): void
public "getLimbSwingAmount"(): float
public "getExtraData"(): $Map<($DataTicket<(any)>), (any)>
public "getAnimationTick"(): double
public "getAnimatable"(): T
public "setAndContinue"(arg0: $RawAnimation$Type): $PlayState
public "isCurrentAnimation"(arg0: $RawAnimation$Type): boolean
public "getLimbSwing"(): float
public "setControllerSpeed"(arg0: float): void
get "moving"(): boolean
get "partialTick"(): float
get "controller"(): $AnimationController<(T)>
set "animation"(value: $RawAnimation$Type)
get "limbSwingAmount"(): float
get "extraData"(): $Map<($DataTicket<(any)>), (any)>
get "animationTick"(): double
get "animatable"(): T
set "andContinue"(value: $RawAnimation$Type)
get "limbSwing"(): float
set "controllerSpeed"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationState$Type<T> = ($AnimationState<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationState_<T> = $AnimationState$Type<(T)>;
}}
declare module "packages/software/bernie/geckolib/core/state/$BoneSnapshot" {
import {$CoreGeoBone, $CoreGeoBone$Type} from "packages/software/bernie/geckolib/core/animatable/model/$CoreGeoBone"

export class $BoneSnapshot {

constructor(arg0: $CoreGeoBone$Type)

public "stopRotAnim"(arg0: double): void
public "updateOffset"(arg0: float, arg1: float, arg2: float): void
public "stopScaleAnim"(arg0: double): void
public "stopPosAnim"(arg0: double): void
public "startScaleAnim"(): void
public "startPosAnim"(): void
public "startRotAnim"(): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copy"(arg0: $BoneSnapshot$Type): $BoneSnapshot
public "getRotZ"(): float
public "getScaleZ"(): float
public "getRotY"(): float
public "getRotX"(): float
public "updateScale"(arg0: float, arg1: float, arg2: float): void
public "getBone"(): $CoreGeoBone
public "getScaleX"(): float
public "getScaleY"(): float
public "getOffsetX"(): float
public "getOffsetY"(): float
public "updateRotation"(arg0: float, arg1: float, arg2: float): void
public "getOffsetZ"(): float
public "getLastResetScaleTick"(): double
public "isScaleAnimInProgress"(): boolean
public "isPosAnimInProgress"(): boolean
public "getLastResetRotationTick"(): double
public "isRotAnimInProgress"(): boolean
public "getLastResetPositionTick"(): double
get "rotZ"(): float
get "scaleZ"(): float
get "rotY"(): float
get "rotX"(): float
get "bone"(): $CoreGeoBone
get "scaleX"(): float
get "scaleY"(): float
get "offsetX"(): float
get "offsetY"(): float
get "offsetZ"(): float
get "lastResetScaleTick"(): double
get "scaleAnimInProgress"(): boolean
get "posAnimInProgress"(): boolean
get "lastResetRotationTick"(): double
get "rotAnimInProgress"(): boolean
get "lastResetPositionTick"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoneSnapshot$Type = ($BoneSnapshot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoneSnapshot_ = $BoneSnapshot$Type;
}}
declare module "packages/software/bernie/geckolib/animatable/$GeoItem" {
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$SingletonGeoAnimatable, $SingletonGeoAnimatable$Type} from "packages/software/bernie/geckolib/animatable/$SingletonGeoAnimatable"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $GeoItem extends $SingletonGeoAnimatable {

 "getTick"(arg0: any): double
 "isPerspectiveAware"(): boolean
 "animatableCacheOverride"(): $AnimatableInstanceCache
 "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
 "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
 "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
 "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
 "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
 "getBoneResetTime"(): double
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
 "shouldPlayAnimsWhileGamePaused"(): boolean
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
}

export namespace $GeoItem {
const ID_NBT_KEY: string
function getId(arg0: $ItemStack$Type): long
function getOrAssignId(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
function registerSyncedAnimatable(arg0: $GeoAnimatable$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoItem$Type = ($GeoItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoItem_ = $GeoItem$Type;
}}
declare module "packages/software/bernie/geckolib/core/object/$DataTicket" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DataTicket<D> {

constructor(arg0: string, arg1: $Class$Type<(any)>)

public "hashCode"(): integer
public "id"(): string
public "getData"<D>(arg0: $Map$Type<(any), (any)>): D
public "objectType"(): $Class<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataTicket$Type<D> = ($DataTicket<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataTicket_<D> = $DataTicket$Type<(D)>;
}}
declare module "packages/software/bernie/geckolib/core/keyframe/event/data/$KeyFrameData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $KeyFrameData {

constructor(arg0: double)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getStartTick"(): double
get "startTick"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyFrameData$Type = ($KeyFrameData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyFrameData_ = $KeyFrameData$Type;
}}
declare module "packages/software/bernie/geckolib/core/object/$PlayState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PlayState extends $Enum<($PlayState)> {
static readonly "CONTINUE": $PlayState
static readonly "STOP": $PlayState


public static "values"(): ($PlayState)[]
public static "valueOf"(arg0: string): $PlayState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayState$Type = (("stop") | ("continue")) | ($PlayState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayState_ = $PlayState$Type;
}}
declare module "packages/software/bernie/geckolib/core/keyframe/$Keyframe" {
import {$EasingType, $EasingType$Type} from "packages/software/bernie/geckolib/core/animation/$EasingType"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IValue, $IValue$Type} from "packages/com/eliotlash/mclib/math/$IValue"

export class $Keyframe<T extends $IValue> extends $Record {

constructor(length: double, startValue: T, endValue: T, easingType: $EasingType$Type, easingArgs: $List$Type<(T)>)
constructor(arg0: double, arg1: T, arg2: T, arg3: $EasingType$Type)
constructor(arg0: double, arg1: T, arg2: T)

public "equals"(arg0: any): boolean
public "length"(): double
public "toString"(): string
public "hashCode"(): integer
public "endValue"(): T
public "startValue"(): T
public "easingType"(): $EasingType
public "easingArgs"(): $List<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Keyframe$Type<T> = ($Keyframe<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Keyframe_<T> = $Keyframe$Type<(T)>;
}}
declare module "packages/software/bernie/geckolib/core/animation/$Animation$Keyframes" {
import {$SoundKeyframeData, $SoundKeyframeData$Type} from "packages/software/bernie/geckolib/core/keyframe/event/data/$SoundKeyframeData"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$CustomInstructionKeyframeData, $CustomInstructionKeyframeData$Type} from "packages/software/bernie/geckolib/core/keyframe/event/data/$CustomInstructionKeyframeData"
import {$ParticleKeyframeData, $ParticleKeyframeData$Type} from "packages/software/bernie/geckolib/core/keyframe/event/data/$ParticleKeyframeData"

export class $Animation$Keyframes extends $Record {

constructor(sounds: ($SoundKeyframeData$Type)[], particles: ($ParticleKeyframeData$Type)[], customInstructions: ($CustomInstructionKeyframeData$Type)[])

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "particles"(): ($ParticleKeyframeData)[]
public "sounds"(): ($SoundKeyframeData)[]
public "customInstructions"(): ($CustomInstructionKeyframeData)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$Keyframes$Type = ($Animation$Keyframes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animation$Keyframes_ = $Animation$Keyframes$Type;
}}
declare module "packages/software/bernie/geckolib/core/animation/$AnimatableManager" {
import {$DataTicket, $DataTicket$Type} from "packages/software/bernie/geckolib/core/object/$DataTicket"
import {$AnimationController, $AnimationController$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$BoneSnapshot, $BoneSnapshot$Type} from "packages/software/bernie/geckolib/core/state/$BoneSnapshot"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnimatableManager<T extends $GeoAnimatable> {

constructor(arg0: $GeoAnimatable$Type)

public "getData"<D>(arg0: $DataTicket$Type<(D)>): D
public "setData"<D>(arg0: $DataTicket$Type<(D)>, arg1: D): void
public "removeController"(arg0: string): void
public "tryTriggerAnimation"(arg0: string, arg1: string): void
public "tryTriggerAnimation"(arg0: string): void
public "getLastUpdateTime"(): double
public "updatedAt"(arg0: double): void
public "getFirstTickTime"(): double
public "isFirstTick"(): boolean
public "startedAt"(arg0: double): void
public "getAnimationControllers"(): $Map<(string), ($AnimationController<(T)>)>
public "getBoneSnapshotCollection"(): $Map<(string), ($BoneSnapshot)>
public "clearSnapshotCache"(): void
public "addController"(arg0: $AnimationController$Type<(any)>): void
get "lastUpdateTime"(): double
get "firstTickTime"(): double
get "firstTick"(): boolean
get "animationControllers"(): $Map<(string), ($AnimationController<(T)>)>
get "boneSnapshotCollection"(): $Map<(string), ($BoneSnapshot)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableManager$Type<T> = ($AnimatableManager<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableManager_<T> = $AnimatableManager$Type<(T)>;
}}
