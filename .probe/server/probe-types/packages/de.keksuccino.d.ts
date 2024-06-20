declare module "packages/de/keksuccino/fancymenu/mixin/mixins/common/client/$IMixinOptions" {
import {$PlayerModelPart, $PlayerModelPart$Type} from "packages/net/minecraft/world/entity/player/$PlayerModelPart"
import {$Options$FieldAccess, $Options$FieldAccess$Type} from "packages/net/minecraft/client/$Options$FieldAccess"
import {$Set, $Set$Type} from "packages/java/util/$Set"

export interface $IMixinOptions {

 "getModelPartsFancyMenu"(): $Set<($PlayerModelPart)>
 "invokeProcessOptionsFancyMenu"(arg0: $Options$FieldAccess$Type): void
}

export namespace $IMixinOptions {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinOptions$Type = ($IMixinOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinOptions_ = $IMixinOptions$Type;
}}
declare module "packages/de/keksuccino/konkrete/mixin/client/$IMixinEditBox" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinEditBox {

 "onValueChangeKonkrete"(arg0: string): void
 "getHightlightPosKonkrete"(): integer
 "getIsEditableKonkrete"(): boolean
 "getMaxLengthKonkrete"(): integer
}

export namespace $IMixinEditBox {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinEditBox$Type = ($IMixinEditBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinEditBox_ = $IMixinEditBox$Type;
}}
declare module "packages/de/keksuccino/fancymenu/mixin/mixins/common/client/$IMixinEditBox" {
import {$FormattedCharSequence, $FormattedCharSequence$Type} from "packages/net/minecraft/util/$FormattedCharSequence"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IMixinEditBox {

 "getHintFancyMenu"(): $Component
 "getFrameFancyMenu"(): integer
 "getFormatterFancyMenu"(): $BiFunction<(string), (integer), ($FormattedCharSequence)>
 "getIsEditableFancyMenu"(): boolean
 "invokeRenderHighlightFancyMenu"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
 "setShiftPressedFancyMenu"(arg0: boolean): void
 "invokeDeleteTextFancyMenu"(arg0: integer): void
 "setDisplayPosFancyMenu"(arg0: integer): void
 "getHighlightPosFancyMenu"(): integer
 "getMaxLengthFancyMenu"(): integer
 "getTextColorFancyMenu"(): integer
 "getSuggestionFancyMenu"(): string
 "getTextColorUneditableFancyMenu"(): integer
 "getBorderedFancyMenu"(): boolean
 "getDisplayPosFancyMenu"(): integer
}

export namespace $IMixinEditBox {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinEditBox$Type = ($IMixinEditBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinEditBox_ = $IMixinEditBox$Type;
}}
declare module "packages/de/keksuccino/fancymenu/util/resource/$Resource" {
import {$Closeable, $Closeable$Type} from "packages/java/io/$Closeable"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"

export interface $Resource extends $Closeable {

 "open"(): $InputStream
 "isClosed"(): boolean
 "waitForReady"(arg0: long): void
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "isReady"(): boolean
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "close"(): void
}

export namespace $Resource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Resource$Type = ($Resource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Resource_ = $Resource$Type;
}}
declare module "packages/de/keksuccino/fancymenu/mixin/mixins/common/client/$IMixinSplashRenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinSplashRenderer {

 "getSplashFancyMenu"(): string

(): string
}

export namespace $IMixinSplashRenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinSplashRenderer$Type = ($IMixinSplashRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinSplashRenderer_ = $IMixinSplashRenderer$Type;
}}
declare module "packages/de/keksuccino/fancymenu/util/rendering/ui/widget/$CustomizableWidget" {
import {$IAudio, $IAudio$Type} from "packages/de/keksuccino/fancymenu/util/resource/resources/audio/$IAudio"
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CustomizableWidget$CustomBackgroundResetBehavior, $CustomizableWidget$CustomBackgroundResetBehavior$Type} from "packages/de/keksuccino/fancymenu/util/rendering/ui/widget/$CustomizableWidget$CustomBackgroundResetBehavior"
import {$RenderableResource, $RenderableResource$Type} from "packages/de/keksuccino/fancymenu/util/resource/$RenderableResource"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $CustomizableWidget {

 "setHiddenFancyMenu"(arg0: boolean): void
 "tickHoverOrFocusStateListenersFancyMenu"(arg0: boolean): void
 "getNineSliceCustomBackgroundBorderX_FancyMenu"(): integer
 "resetWidgetSizeAndPositionFancyMenu"(): void
 "getNineSliceCustomBackgroundBorderY_FancyMenu"(): integer
 "addHoverOrFocusStateListenerFancyMenu"(arg0: $Consumer$Type<(boolean)>): void
 "getHoverOrFocusStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
 "getResetCustomizationsListenersFancyMenu"(): $List<($Runnable)>
 "setCustomBackgroundResetBehaviorFancyMenu"(arg0: $CustomizableWidget$CustomBackgroundResetBehavior$Type): void
 "getCustomBackgroundInactiveFancyMenu"(): $RenderableResource
 "isNineSliceCustomBackgroundTexture_FancyMenu"(): boolean
 "setCustomBackgroundInactiveFancyMenu"(arg0: $RenderableResource$Type): void
 "getCustomBackgroundResetBehaviorFancyMenu"(): $CustomizableWidget$CustomBackgroundResetBehavior
 "setNineSliceCustomBackground_FancyMenu"(arg0: boolean): void
 "addResetCustomizationsListenerFancyMenu"(arg0: $Runnable$Type): void
 "tickHoverStateListenersFancyMenu"(arg0: boolean): void
 "tickFocusStateListenersFancyMenu"(arg0: boolean): void
 "resetWidgetCustomizationsFancyMenu"(): void
 "getCustomYFancyMenu"(): integer
 "getCustomBackgroundHoverFancyMenu"(): $RenderableResource
 "getCustomBackgroundNormalFancyMenu"(): $RenderableResource
 "getHoverLabelFancyMenu"(): $Component
 "getLastHoverOrFocusStateFancyMenu"(): boolean
 "setCustomHeightFancyMenu"(arg0: integer): void
 "getOriginalMessageFancyMenu"(): $Component
 "setCustomLabelFancyMenu"(arg0: $Component$Type): void
 "addFocusStateListenerFancyMenu"(arg0: $Consumer$Type<(boolean)>): void
 "setCustomBackgroundHoverFancyMenu"(arg0: $RenderableResource$Type): void
 "getLastFocusStateFancyMenu"(): boolean
 "setLastHoverStateFancyMenu"(arg0: boolean): void
 "getHoverStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
 "setCustomYFancyMenu"(arg0: integer): void
 "getCustomHeightFancyMenu"(): integer
 "getLastHoverStateFancyMenu"(): boolean
 "setLastHoverOrFocusStateFancyMenu"(arg0: boolean): void
 "setCustomClickSoundFancyMenu"(arg0: $IAudio$Type): void
 "setNineSliceBorderY_FancyMenu"(arg0: integer): void
 "setCustomBackgroundNormalFancyMenu"(arg0: $RenderableResource$Type): void
 "getCustomLabelFancyMenu"(): $Component
 "getCustomXFancyMenu"(): integer
 "getFocusStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
 "setLastFocusStateFancyMenu"(arg0: boolean): void
 "addHoverStateListenerFancyMenu"(arg0: $Consumer$Type<(boolean)>): void
 "setHoverSoundFancyMenu"(arg0: $IAudio$Type): void
 "getCustomClickSoundFancyMenu"(): $IAudio
 "renderCustomBackgroundFancyMenu"(arg0: $AbstractWidget$Type, arg1: $GuiGraphics$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
 "setNineSliceBorderX_FancyMenu"(arg0: integer): void
 "setCustomXFancyMenu"(arg0: integer): void
 "setHoverLabelFancyMenu"(arg0: $Component$Type): void
 "setCustomWidthFancyMenu"(arg0: integer): void
 "getCustomWidthFancyMenu"(): integer
 "getHoverSoundFancyMenu"(): $IAudio
 "isHiddenFancyMenu"(): boolean
}

export namespace $CustomizableWidget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomizableWidget$Type = ($CustomizableWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomizableWidget_ = $CustomizableWidget$Type;
}}
declare module "packages/de/keksuccino/fancymenu/util/rendering/ui/widget/$UniqueLabeledSwitchCycleButton" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export interface $UniqueLabeledSwitchCycleButton {

 "setLabeledSwitchComponentLabel_FancyMenu"(arg0: $Component$Type): void
 "getLabeledSwitchComponentLabel_FancyMenu"(): $Component
}

export namespace $UniqueLabeledSwitchCycleButton {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniqueLabeledSwitchCycleButton$Type = ($UniqueLabeledSwitchCycleButton);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniqueLabeledSwitchCycleButton_ = $UniqueLabeledSwitchCycleButton$Type;
}}
declare module "packages/de/keksuccino/fancymenu/util/rendering/$AspectRatio" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AspectRatio {

constructor(arg0: integer, arg1: integer)

public "getInputHeight"(): integer
public "getInputWidth"(): integer
public "getAspectRatioSizeByMinimumSize"(arg0: integer, arg1: integer): (integer)[]
public "getAspectRatioSizeByMaximumSize"(arg0: integer, arg1: integer): (integer)[]
public "getAspectRatioHeight"(arg0: integer): integer
public "getAspectRatioWidth"(arg0: integer): integer
get "inputHeight"(): integer
get "inputWidth"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AspectRatio$Type = ($AspectRatio);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AspectRatio_ = $AspectRatio$Type;
}}
declare module "packages/de/keksuccino/fancymenu/util/rendering/ui/widget/$UniqueWidget" {
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"

export interface $UniqueWidget {

 "setWidgetIdentifierFancyMenu"(arg0: string): $AbstractWidget
 "getWidgetIdentifierFancyMenu"(): string
}

export namespace $UniqueWidget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniqueWidget$Type = ($UniqueWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniqueWidget_ = $UniqueWidget$Type;
}}
declare module "packages/de/keksuccino/fancymenu/mixin/mixins/common/client/$IMixinScreen" {
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"

export interface $IMixinScreen {

 "invokeRemoveWidgetFancyMenu"(arg0: $GuiEventListener$Type): void
 "get_initialized_FancyMenu"(): boolean
 "getRenderablesFancyMenu"(): $List<($Renderable)>
 "getNarratablesFancyMenu"(): $List<($NarratableEntry)>
 "getChildrenFancyMenu"(): $List<($GuiEventListener)>
}

export namespace $IMixinScreen {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinScreen$Type = ($IMixinScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinScreen_ = $IMixinScreen$Type;
}}
declare module "packages/de/keksuccino/fancymenu/mixin/mixins/common/client/$IMixinAbstractWidget" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export interface $IMixinAbstractWidget {

 "setHeightFancyMenu"(arg0: integer): void
 "getAlphaFancyMenu"(): float
 "setMessageFieldFancyMenu"(arg0: $Component$Type): void
}

export namespace $IMixinAbstractWidget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinAbstractWidget$Type = ($IMixinAbstractWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinAbstractWidget_ = $IMixinAbstractWidget$Type;
}}
declare module "packages/de/keksuccino/fancymenu/util/resource/$RenderableResource" {
import {$Resource, $Resource$Type} from "packages/de/keksuccino/fancymenu/util/resource/$Resource"
import {$AspectRatio, $AspectRatio$Type} from "packages/de/keksuccino/fancymenu/util/rendering/$AspectRatio"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $RenderableResource extends $Resource {

 "reset"(): void
 "getAspectRatio"(): $AspectRatio
 "getWidth"(): integer
 "getHeight"(): integer
 "getResourceLocation"(): $ResourceLocation
 "open"(): $InputStream
 "isClosed"(): boolean
 "waitForReady"(arg0: long): void
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "isReady"(): boolean
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "close"(): void
}

export namespace $RenderableResource {
const MISSING_TEXTURE_LOCATION: $ResourceLocation
const FULLY_TRANSPARENT_TEXTURE: $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderableResource$Type = ($RenderableResource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderableResource_ = $RenderableResource$Type;
}}
declare module "packages/de/keksuccino/fancymenu/util/resource/resources/audio/$PlayableResourceWithAudio" {
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$PlayableResource, $PlayableResource$Type} from "packages/de/keksuccino/fancymenu/util/resource/$PlayableResource"

export interface $PlayableResourceWithAudio extends $PlayableResource {

 "getVolume"(): float
 "setVolume"(arg0: float): void
 "stop"(): void
 "play"(): void
 "isPlaying"(): boolean
 "pause"(): void
 "isPaused"(): boolean
 "open"(): $InputStream
 "isClosed"(): boolean
 "waitForReady"(arg0: long): void
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "isReady"(): boolean
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "close"(): void
}

export namespace $PlayableResourceWithAudio {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayableResourceWithAudio$Type = ($PlayableResourceWithAudio);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayableResourceWithAudio_ = $PlayableResourceWithAudio$Type;
}}
declare module "packages/de/keksuccino/melody/mixin/mixins/common/client/$IMixinSoundEngine" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinSoundEngine {

 "getLoadedMelody"(): boolean

(): boolean
}

export namespace $IMixinSoundEngine {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinSoundEngine$Type = ($IMixinSoundEngine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinSoundEngine_ = $IMixinSoundEngine$Type;
}}
declare module "packages/de/keksuccino/fancymenu/util/resource/resources/audio/$IAudio" {
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$PlayableResourceWithAudio, $PlayableResourceWithAudio$Type} from "packages/de/keksuccino/fancymenu/util/resource/resources/audio/$PlayableResourceWithAudio"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"

export interface $IAudio extends $PlayableResourceWithAudio {

 "setSoundChannel"(arg0: $SoundSource$Type): void
 "getSoundChannel"(): $SoundSource
 "play"(): void
 "getVolume"(): float
 "setVolume"(arg0: float): void
 "stop"(): void
 "isPlaying"(): boolean
 "pause"(): void
 "isPaused"(): boolean
 "open"(): $InputStream
 "isClosed"(): boolean
 "waitForReady"(arg0: long): void
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "isReady"(): boolean
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "close"(): void
}

export namespace $IAudio {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAudio$Type = ($IAudio);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAudio_ = $IAudio$Type;
}}
declare module "packages/de/keksuccino/fancymenu/util/rendering/ui/widget/$CustomizableWidget$CustomBackgroundResetBehavior" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CustomizableWidget$CustomBackgroundResetBehavior extends $Enum<($CustomizableWidget$CustomBackgroundResetBehavior)> {
static readonly "RESET_NEVER": $CustomizableWidget$CustomBackgroundResetBehavior
static readonly "RESET_ON_HOVER": $CustomizableWidget$CustomBackgroundResetBehavior
static readonly "RESET_ON_UNHOVER": $CustomizableWidget$CustomBackgroundResetBehavior
static readonly "RESET_ON_HOVER_AND_UNHOVER": $CustomizableWidget$CustomBackgroundResetBehavior


public static "values"(): ($CustomizableWidget$CustomBackgroundResetBehavior)[]
public static "valueOf"(arg0: string): $CustomizableWidget$CustomBackgroundResetBehavior
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomizableWidget$CustomBackgroundResetBehavior$Type = (("reset_on_unhover") | ("reset_on_hover_and_unhover") | ("reset_never") | ("reset_on_hover")) | ($CustomizableWidget$CustomBackgroundResetBehavior);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomizableWidget$CustomBackgroundResetBehavior_ = $CustomizableWidget$CustomBackgroundResetBehavior$Type;
}}
declare module "packages/de/keksuccino/fancymenu/util/rendering/ui/screen/$CustomizableScreen" {
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $CustomizableScreen {

 "removeOnInitChildrenFancyMenu"(): $List<($GuiEventListener)>

(): $List<($GuiEventListener)>
}

export namespace $CustomizableScreen {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomizableScreen$Type = ($CustomizableScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomizableScreen_ = $CustomizableScreen$Type;
}}
declare module "packages/de/keksuccino/konkrete/mixin/client/$IMixinScreen" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $IMixinScreen {

 "getChildrenKonkrete"(): $List<($GuiEventListener)>
 "getRenderablesKonkrete"(): $List<($Renderable)>
 "setFontKonkrete"(arg0: $Font$Type): void
}

export namespace $IMixinScreen {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinScreen$Type = ($IMixinScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinScreen_ = $IMixinScreen$Type;
}}
declare module "packages/de/keksuccino/drippyloadingscreen/mixin/mixins/common/client/$IMixinMinecraft" {
import {$FontManager, $FontManager$Type} from "packages/net/minecraft/client/gui/font/$FontManager"

export interface $IMixinMinecraft {

 "getFontManagerDrippy"(): $FontManager

(): $FontManager
}

export namespace $IMixinMinecraft {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinMinecraft$Type = ($IMixinMinecraft);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinMinecraft_ = $IMixinMinecraft$Type;
}}
declare module "packages/de/keksuccino/fancymenu/mixin/mixins/common/client/$IMixinButton" {
import {$Button$OnPress, $Button$OnPress$Type} from "packages/net/minecraft/client/gui/components/$Button$OnPress"

export interface $IMixinButton {

 "setPressActionFancyMenu"(arg0: $Button$OnPress$Type): void

(arg0: $Button$OnPress$Type): void
}

export namespace $IMixinButton {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinButton$Type = ($IMixinButton);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinButton_ = $IMixinButton$Type;
}}
declare module "packages/de/keksuccino/fancymenu/mixin/mixins/common/client/$IMixinAbstractSelectionList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinAbstractSelectionList {

 "getY1FancyMenu"(): integer
 "getY0FancyMenu"(): integer
 "getX1FancyMenu"(): integer
 "getX0FancyMenu"(): integer
 "getWidthFancyMenu"(): integer
 "getHeightFancyMenu"(): integer
}

export namespace $IMixinAbstractSelectionList {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinAbstractSelectionList$Type = ($IMixinAbstractSelectionList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinAbstractSelectionList_ = $IMixinAbstractSelectionList$Type;
}}
declare module "packages/de/keksuccino/fancymenu/mixin/mixins/common/client/$IMixinMusicManager" {
import {$SoundInstance, $SoundInstance$Type} from "packages/net/minecraft/client/resources/sounds/$SoundInstance"

export interface $IMixinMusicManager {

 "getCurrentMusic_FancyMenu"(): $SoundInstance

(): $SoundInstance
}

export namespace $IMixinMusicManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinMusicManager$Type = ($IMixinMusicManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinMusicManager_ = $IMixinMusicManager$Type;
}}
declare module "packages/de/keksuccino/fancymenu/mixin/mixins/common/client/$IMixinMinecraft" {
import {$ResourceLoadStateTracker, $ResourceLoadStateTracker$Type} from "packages/net/minecraft/client/$ResourceLoadStateTracker"

export interface $IMixinMinecraft {

 "getReloadStateTrackerFancyMenu"(): $ResourceLoadStateTracker
 "getPausePartialTickFancyMenu"(): float
 "openChatScreenFancyMenu"(arg0: string): void
}

export namespace $IMixinMinecraft {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinMinecraft$Type = ($IMixinMinecraft);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinMinecraft_ = $IMixinMinecraft$Type;
}}
declare module "packages/de/keksuccino/fancymenu/util/resource/$PlayableResource" {
import {$Resource, $Resource$Type} from "packages/de/keksuccino/fancymenu/util/resource/$Resource"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"

export interface $PlayableResource extends $Resource {

 "stop"(): void
 "play"(): void
 "isPlaying"(): boolean
 "pause"(): void
 "isPaused"(): boolean
 "open"(): $InputStream
 "isClosed"(): boolean
 "waitForReady"(arg0: long): void
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "isReady"(): boolean
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "close"(): void
}

export namespace $PlayableResource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayableResource$Type = ($PlayableResource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayableResource_ = $PlayableResource$Type;
}}
declare module "packages/de/keksuccino/melody/mixin/mixins/common/client/$IMixinSoundManager" {
import {$SoundEngine, $SoundEngine$Type} from "packages/net/minecraft/client/sounds/$SoundEngine"

export interface $IMixinSoundManager {

 "getSoundEngineMelody"(): $SoundEngine

(): $SoundEngine
}

export namespace $IMixinSoundManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinSoundManager$Type = ($IMixinSoundManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinSoundManager_ = $IMixinSoundManager$Type;
}}
