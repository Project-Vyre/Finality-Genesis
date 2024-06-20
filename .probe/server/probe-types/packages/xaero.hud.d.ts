declare module "packages/xaero/hud/module/$ModuleManager" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$HudModule, $HudModule$Type} from "packages/xaero/hud/module/$HudModule"

export class $ModuleManager {

constructor()

public "get"(arg0: $ResourceLocation$Type): $HudModule<(any)>
public "register"(arg0: $HudModule$Type<(any)>): void
public "getModules"(): $Iterable<($HudModule<(any)>)>
get "modules"(): $Iterable<($HudModule<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleManager$Type = ($ModuleManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleManager_ = $ModuleManager$Type;
}}
declare module "packages/xaero/hud/render/module/$ModuleRenderContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ModuleRenderContext {
 "x": integer
 "y": integer
 "w": integer
 "h": integer
 "flippedVertically": boolean
 "flippedHorizontally": boolean
readonly "screenWidth": integer
readonly "screenHeight": integer
readonly "screenScale": double

constructor(arg0: integer, arg1: integer, arg2: double)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleRenderContext$Type = ($ModuleRenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleRenderContext_ = $ModuleRenderContext$Type;
}}
declare module "packages/xaero/hud/event/$HudEventHandler" {
import {$Hud, $Hud$Type} from "packages/xaero/hud/$Hud"

export class $HudEventHandler {

constructor()

public "handleRenderGameOverlayEventPost"(): void
public "setHud"(arg0: $Hud$Type): void
set "hud"(value: $Hud$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HudEventHandler$Type = ($HudEventHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HudEventHandler_ = $HudEventHandler$Type;
}}
declare module "packages/xaero/hud/preset/$HudPreset" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $HudPreset {


public "getName"(): $Component
public "apply"(): void
public "getId"(): $ResourceLocation
public "cancel"(): void
public "confirm"(): void
public "applyAndConfirm"(): void
get "name"(): $Component
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HudPreset$Type = ($HudPreset);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HudPreset_ = $HudPreset$Type;
}}
declare module "packages/xaero/hud/module/$ModuleTransform" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ModuleTransform {
 "x": integer
 "y": integer
 "centered": boolean
 "fromRight": boolean
 "fromBottom": boolean
 "flippedHor": boolean
 "flippedVer": boolean
 "fromOldSystem": boolean

constructor()

public "copy"(): $ModuleTransform
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleTransform$Type = ($ModuleTransform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleTransform_ = $ModuleTransform$Type;
}}
declare module "packages/xaero/hud/minimap/$Minimap" {
import {$InfoDisplayManager, $InfoDisplayManager$Type} from "packages/xaero/common/minimap/info/$InfoDisplayManager"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$MinimapSafeModeRenderer, $MinimapSafeModeRenderer$Type} from "packages/xaero/common/minimap/render/$MinimapSafeModeRenderer"
import {$MinimapFBORenderer, $MinimapFBORenderer$Type} from "packages/xaero/common/minimap/render/$MinimapFBORenderer"
import {$InfoDisplayRenderer, $InfoDisplayRenderer$Type} from "packages/xaero/common/minimap/info/render/$InfoDisplayRenderer"
import {$InfoDisplayIO, $InfoDisplayIO$Type} from "packages/xaero/common/minimap/info/$InfoDisplayIO"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$MinimapElementOverMapRendererHandler, $MinimapElementOverMapRendererHandler$Type} from "packages/xaero/common/minimap/element/render/over/$MinimapElementOverMapRendererHandler"
import {$WaypointsIngameRenderer, $WaypointsIngameRenderer$Type} from "packages/xaero/common/minimap/waypoints/render/$WaypointsIngameRenderer"
import {$CompassRenderer, $CompassRenderer$Type} from "packages/xaero/common/minimap/waypoints/render/$CompassRenderer"
import {$WaypointsGuiRenderer, $WaypointsGuiRenderer$Type} from "packages/xaero/common/minimap/waypoints/render/$WaypointsGuiRenderer"

export class $Minimap {

constructor(arg0: $IXaeroMinimap$Type)

public "getWaypointsGuiRenderer"(): $WaypointsGuiRenderer
public "getMinimapFBORenderer"(): $MinimapFBORenderer
public "getWaypointsIngameRenderer"(): $WaypointsIngameRenderer
public "getInfoDisplayRenderer"(): $InfoDisplayRenderer
public "getMinimapSafeModeRenderer"(): $MinimapSafeModeRenderer
public "setCrashedWith"(arg0: $Throwable$Type): void
public "getCrashedWith"(): $Throwable
public "checkCrashes"(): void
public "getCompassRenderer"(): $CompassRenderer
public "getInfoDisplayIO"(): $InfoDisplayIO
public "usingFBO"(): boolean
public "getOverMapRendererHandler"(): $MinimapElementOverMapRendererHandler
public "getInfoDisplayManager"(): $InfoDisplayManager
get "waypointsGuiRenderer"(): $WaypointsGuiRenderer
get "minimapFBORenderer"(): $MinimapFBORenderer
get "waypointsIngameRenderer"(): $WaypointsIngameRenderer
get "infoDisplayRenderer"(): $InfoDisplayRenderer
get "minimapSafeModeRenderer"(): $MinimapSafeModeRenderer
set "crashedWith"(value: $Throwable$Type)
get "crashedWith"(): $Throwable
get "compassRenderer"(): $CompassRenderer
get "infoDisplayIO"(): $InfoDisplayIO
get "overMapRendererHandler"(): $MinimapElementOverMapRendererHandler
get "infoDisplayManager"(): $InfoDisplayManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Minimap$Type = ($Minimap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Minimap_ = $Minimap$Type;
}}
declare module "packages/xaero/hud/pushbox/$PushboxHandler" {
import {$PushboxHandler$State, $PushboxHandler$State$Type} from "packages/xaero/hud/pushbox/$PushboxHandler$State"
import {$PushboxManager, $PushboxManager$Type} from "packages/xaero/hud/pushbox/$PushboxManager"

export class $PushboxHandler {

constructor()

public "applyScreenEdges"(arg0: $PushboxHandler$State$Type, arg1: integer, arg2: integer, arg3: double): void
public "applyPushboxes"(arg0: $PushboxManager$Type, arg1: $PushboxHandler$State$Type, arg2: integer, arg3: integer, arg4: double): void
public "postUpdateAll"(arg0: $PushboxManager$Type): void
public "updateAll"(arg0: $PushboxManager$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PushboxHandler$Type = ($PushboxHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PushboxHandler_ = $PushboxHandler$Type;
}}
declare module "packages/xaero/hud/pushbox/$PushboxHandler$State" {
import {$ModuleSession, $ModuleSession$Type} from "packages/xaero/hud/module/$ModuleSession"

export class $PushboxHandler$State {
 "x": integer
 "y": integer
 "w": integer
 "h": integer

constructor()

public "resetForModule"(arg0: $ModuleSession$Type<(any)>, arg1: integer, arg2: integer, arg3: double): $PushboxHandler$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PushboxHandler$State$Type = ($PushboxHandler$State);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PushboxHandler$State_ = $PushboxHandler$State$Type;
}}
declare module "packages/xaero/hud/$HudSession" {
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$MultiTextureRenderTypeRendererProvider, $MultiTextureRenderTypeRendererProvider$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider"
import {$HudMod, $HudMod$Type} from "packages/xaero/common/$HudMod"
import {$ClientPacketListener, $ClientPacketListener$Type} from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"

export class $HudSession {

constructor(arg0: $HudMod$Type)

public "init"(arg0: $ClientPacketListener$Type): void
public "getMultiTextureRenderTypeRenderers"(): $MultiTextureRenderTypeRendererProvider
public static "getCurrentSession"(): $HudSession
public "tryCleanup"(): void
public static "getForPlayer"(arg0: $LocalPlayer$Type): $HudSession
public "getHudMod"(): $HudMod
get "multiTextureRenderTypeRenderers"(): $MultiTextureRenderTypeRendererProvider
get "currentSession"(): $HudSession
get "hudMod"(): $HudMod
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HudSession$Type = ($HudSession);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HudSession_ = $HudSession$Type;
}}
declare module "packages/xaero/hud/io/$HudIO" {
import {$PrintWriter, $PrintWriter$Type} from "packages/java/io/$PrintWriter"

export class $HudIO {
static readonly "SEPARATOR": string
static readonly "MODULE_LINE_PREFIX": string


public "load"(arg0: string): boolean
public "save"(arg0: $PrintWriter$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HudIO$Type = ($HudIO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HudIO_ = $HudIO$Type;
}}
declare module "packages/xaero/hud/module/$ModuleSession" {
import {$HudMod, $HudMod$Type} from "packages/xaero/common/$HudMod"
import {$HudModule, $HudModule$Type} from "packages/xaero/hud/module/$HudModule"

export class $ModuleSession<MS extends $ModuleSession<(MS)>> {

constructor(arg0: $HudMod$Type, arg1: $HudModule$Type<(MS)>)

public "isCentered"(): boolean
public "onPostGameOverlay"(): void
public "prePotentialRender"(): void
public "getEffectiveX"(arg0: integer, arg1: double): integer
public "getEffectiveY"(arg0: integer, arg1: double): integer
public "isFlippedHor"(): boolean
public "isFlippedVer"(): boolean
public "shouldFlipHorizontally"(arg0: integer, arg1: double): boolean
public "shouldFlipVertically"(arg0: integer, arg1: double): boolean
public "getModule"(): $HudModule<(MS)>
public "close"(): void
public "isActive"(): boolean
public "getWidth"(arg0: double): integer
public "getHeight"(arg0: double): integer
get "centered"(): boolean
get "flippedHor"(): boolean
get "flippedVer"(): boolean
get "module"(): $HudModule<(MS)>
get "active"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleSession$Type<MS> = ($ModuleSession<(MS)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleSession_<MS> = $ModuleSession$Type<(MS)>;
}}
declare module "packages/xaero/hud/module/$ModuleSessionHandler" {
import {$ModuleManager, $ModuleManager$Type} from "packages/xaero/hud/module/$ModuleManager"
import {$HudMod, $HudMod$Type} from "packages/xaero/common/$HudMod"

export class $ModuleSessionHandler {

constructor(arg0: $ModuleManager$Type)

public "resetSessions"(arg0: $HudMod$Type): void
public "closeSessions"(arg0: $HudMod$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleSessionHandler$Type = ($ModuleSessionHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleSessionHandler_ = $ModuleSessionHandler$Type;
}}
declare module "packages/xaero/hud/preset/$HudPresetManager" {
import {$HudPreset, $HudPreset$Type} from "packages/xaero/hud/preset/$HudPreset"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $HudPresetManager {

constructor()

public "register"(arg0: $HudPreset$Type): void
public "getPresets"(): $Iterable<($HudPreset)>
get "presets"(): $Iterable<($HudPreset)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HudPresetManager$Type = ($HudPresetManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HudPresetManager_ = $HudPresetManager$Type;
}}
declare module "packages/xaero/hud/module/$HudModule" {
import {$ModuleSession, $ModuleSession$Type} from "packages/xaero/hud/module/$ModuleSession"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$PushboxHandler$State, $PushboxHandler$State$Type} from "packages/xaero/hud/pushbox/$PushboxHandler$State"
import {$HudMod, $HudMod$Type} from "packages/xaero/common/$HudMod"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ModuleTransform, $ModuleTransform$Type} from "packages/xaero/hud/module/$ModuleTransform"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$IModuleRenderer, $IModuleRenderer$Type} from "packages/xaero/hud/render/module/$IModuleRenderer"

export class $HudModule<MS extends $ModuleSession<(MS)>> {

constructor(arg0: $ResourceLocation$Type, arg1: $Component$Type, arg2: $BiFunction$Type<($HudMod$Type), ($HudModule$Type<(MS)>), (MS)>, arg3: $Supplier$Type<($IModuleRenderer$Type<(MS)>)>, arg4: $Function$Type<($Screen$Type), ($Screen$Type)>)

public "getConfirmedTransform"(): $ModuleTransform
public "getPushState"(): $PushboxHandler$State
public "getUsedTransform"(): $ModuleTransform
public "cancelTransform"(): void
public "confirmTransform"(): void
public "getUnconfirmedTransform"(): $ModuleTransform
public "getConfigScreenFactory"(): $Function<($Screen), ($Screen)>
public "getId"(): $ResourceLocation
public "isActive"(): boolean
public "getDisplayName"(): $Component
public "setActive"(arg0: boolean): void
public "setTransform"(arg0: $ModuleTransform$Type): void
public "getRenderer"(): $IModuleRenderer<(MS)>
public "getCurrentSession"(): MS
get "confirmedTransform"(): $ModuleTransform
get "pushState"(): $PushboxHandler$State
get "usedTransform"(): $ModuleTransform
get "unconfirmedTransform"(): $ModuleTransform
get "configScreenFactory"(): $Function<($Screen), ($Screen)>
get "id"(): $ResourceLocation
get "active"(): boolean
get "displayName"(): $Component
set "active"(value: boolean)
set "transform"(value: $ModuleTransform$Type)
get "renderer"(): $IModuleRenderer<(MS)>
get "currentSession"(): MS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HudModule$Type<MS> = ($HudModule<(MS)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HudModule_<MS> = $HudModule$Type<(MS)>;
}}
declare module "packages/xaero/hud/compat/$OldSystemCompatibility" {
import {$ModuleSession, $ModuleSession$Type} from "packages/xaero/hud/module/$ModuleSession"
import {$ModuleRenderContext, $ModuleRenderContext$Type} from "packages/xaero/hud/render/module/$ModuleRenderContext"
import {$ModuleTransform, $ModuleTransform$Type} from "packages/xaero/hud/module/$ModuleTransform"

export class $OldSystemCompatibility {

constructor()

public "convertTransform"(arg0: $ModuleTransform$Type, arg1: $ModuleSession$Type<(any)>, arg2: $ModuleRenderContext$Type): void
public "loadOldTransform"(arg0: (string)[]): $ModuleTransform
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OldSystemCompatibility$Type = ($OldSystemCompatibility);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OldSystemCompatibility_ = $OldSystemCompatibility$Type;
}}
declare module "packages/xaero/hud/pushbox/$PushboxManager" {
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$PushBox, $PushBox$Type} from "packages/xaero/hud/pushbox/$PushBox"

export class $PushboxManager {

constructor()

public "add"(arg0: $PushBox$Type): void
public "getAll"(): $Iterable<($PushBox)>
get "all"(): $Iterable<($PushBox)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PushboxManager$Type = ($PushboxManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PushboxManager_ = $PushboxManager$Type;
}}
declare module "packages/xaero/hud/render/$HudRenderer" {
import {$PushboxHandler, $PushboxHandler$Type} from "packages/xaero/hud/pushbox/$PushboxHandler"
import {$CustomVertexConsumers, $CustomVertexConsumers$Type} from "packages/xaero/common/graphics/$CustomVertexConsumers"
import {$Hud, $Hud$Type} from "packages/xaero/hud/$Hud"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $HudRenderer {

constructor(arg0: $PushboxHandler$Type)

public "getPushboxHandler"(): $PushboxHandler
public "getCustomVertexConsumers"(): $CustomVertexConsumers
public "render"(arg0: $Hud$Type, arg1: $GuiGraphics$Type, arg2: float): void
get "pushboxHandler"(): $PushboxHandler
get "customVertexConsumers"(): $CustomVertexConsumers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HudRenderer$Type = ($HudRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HudRenderer_ = $HudRenderer$Type;
}}
declare module "packages/xaero/hud/pushbox/$PushBox" {
import {$PushboxHandler$State, $PushboxHandler$State$Type} from "packages/xaero/hud/pushbox/$PushboxHandler$State"

export class $PushBox {

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: float, arg5: float, arg6: integer)

public "getAnchorY"(): float
public "getH"(arg0: integer, arg1: integer): integer
public "getAnchorX"(): float
public "getVerticalBias"(): integer
public "update"(): void
public "isActive"(): boolean
public "push"(arg0: $PushboxHandler$State$Type, arg1: integer, arg2: integer): void
public "getY"(arg0: integer, arg1: integer): integer
public "getW"(arg0: integer, arg1: integer): integer
public "setActive"(arg0: boolean): void
public "getX"(arg0: integer, arg1: integer): integer
public "postUpdate"(): void
get "anchorY"(): float
get "anchorX"(): float
get "verticalBias"(): integer
get "active"(): boolean
set "active"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PushBox$Type = ($PushBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PushBox_ = $PushBox$Type;
}}
declare module "packages/xaero/hud/render/module/$IModuleRenderer" {
import {$ModuleSession, $ModuleSession$Type} from "packages/xaero/hud/module/$ModuleSession"
import {$ModuleRenderContext, $ModuleRenderContext$Type} from "packages/xaero/hud/render/module/$ModuleRenderContext"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IModuleRenderer<MS extends $ModuleSession<(MS)>> {

 "render"(arg0: MS, arg1: $ModuleRenderContext$Type, arg2: $GuiGraphics$Type, arg3: float): void

(arg0: MS, arg1: $ModuleRenderContext$Type, arg2: $GuiGraphics$Type, arg3: float): void
}

export namespace $IModuleRenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModuleRenderer$Type<MS> = ($IModuleRenderer<(MS)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModuleRenderer_<MS> = $IModuleRenderer$Type<(MS)>;
}}
declare module "packages/xaero/hud/$Hud" {
import {$ModuleManager, $ModuleManager$Type} from "packages/xaero/hud/module/$ModuleManager"
import {$ModuleSessionHandler, $ModuleSessionHandler$Type} from "packages/xaero/hud/module/$ModuleSessionHandler"
import {$HudEventHandler, $HudEventHandler$Type} from "packages/xaero/hud/event/$HudEventHandler"
import {$PushboxManager, $PushboxManager$Type} from "packages/xaero/hud/pushbox/$PushboxManager"
import {$HudPresetManager, $HudPresetManager$Type} from "packages/xaero/hud/preset/$HudPresetManager"
import {$OldSystemCompatibility, $OldSystemCompatibility$Type} from "packages/xaero/hud/compat/$OldSystemCompatibility"

export class $Hud {

constructor(arg0: $ModuleManager$Type, arg1: $PushboxManager$Type, arg2: $HudPresetManager$Type, arg3: $HudEventHandler$Type, arg4: $ModuleSessionHandler$Type, arg5: $OldSystemCompatibility$Type)

public "getOldSystemCompatibility"(): $OldSystemCompatibility
public "getPresetManager"(): $HudPresetManager
public "getModuleManager"(): $ModuleManager
public "getPushboxManager"(): $PushboxManager
public "getSessionHandler"(): $ModuleSessionHandler
public "getEventHandler"(): $HudEventHandler
get "oldSystemCompatibility"(): $OldSystemCompatibility
get "presetManager"(): $HudPresetManager
get "moduleManager"(): $ModuleManager
get "pushboxManager"(): $PushboxManager
get "sessionHandler"(): $ModuleSessionHandler
get "eventHandler"(): $HudEventHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Hud$Type = ($Hud);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Hud_ = $Hud$Type;
}}
