declare module "packages/net/blay09/mods/balm/mixin/$MouseHandlerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MouseHandlerAccessor {

 "getMouseX"(): double
 "getMouseY"(): double
}

export namespace $MouseHandlerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseHandlerAccessor$Type = ($MouseHandlerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseHandlerAccessor_ = $MouseHandlerAccessor$Type;
}}
declare module "packages/net/blay09/mods/balm/api/entity/$BalmEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $BalmEntity {

 "setFabricBalmData"(arg0: $CompoundTag$Type): void
 "getFabricBalmData"(): $CompoundTag
}

export namespace $BalmEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BalmEntity$Type = ($BalmEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BalmEntity_ = $BalmEntity$Type;
}}
declare module "packages/net/blay09/mods/balm/mixin/$SlotAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SlotAccessor {

 "setX"(arg0: integer): void
 "setY"(arg0: integer): void
}

export namespace $SlotAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotAccessor$Type = ($SlotAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotAccessor_ = $SlotAccessor$Type;
}}
declare module "packages/net/blay09/mods/balm/mixin/$ScreenAccessor" {
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"

export interface $ScreenAccessor {

 "balm_getNarratables"(): $List<($NarratableEntry)>
 "balm_getRenderables"(): $List<($Renderable)>
 "balm_getChildren"(): $List<($GuiEventListener)>
}

export namespace $ScreenAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenAccessor$Type = ($ScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenAccessor_ = $ScreenAccessor$Type;
}}
declare module "packages/net/blay09/mods/defaultoptions/mixin/$KeyMappingAccessor" {
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $KeyMappingAccessor {

 "setDefaultKey"(arg0: $InputConstants$Key$Type): void

(arg0: $InputConstants$Key$Type): void
}

export namespace $KeyMappingAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyMappingAccessor$Type = ($KeyMappingAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyMappingAccessor_ = $KeyMappingAccessor$Type;
}}
declare module "packages/net/blay09/mods/netherportalfix/mixin/$EntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EntityAccessor {

 "getIsInsidePortal"(): boolean

(): boolean
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccessor$Type = ($EntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityAccessor_ = $EntityAccessor$Type;
}}
declare module "packages/net/blay09/mods/balm/mixin/$KeyMappingAccessor" {
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $KeyMappingAccessor {

 "getKey"(): $InputConstants$Key

(): $InputConstants$Key
}

export namespace $KeyMappingAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyMappingAccessor$Type = ($KeyMappingAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyMappingAccessor_ = $KeyMappingAccessor$Type;
}}
declare module "packages/net/blay09/mods/defaultoptions/mixin/$ForgeKeyMappingAccessor" {
import {$KeyModifier, $KeyModifier$Type} from "packages/net/minecraftforge/client/settings/$KeyModifier"

export interface $ForgeKeyMappingAccessor {

 "setKeyModifierDefault"(arg0: $KeyModifier$Type): void

(arg0: $KeyModifier$Type): void
}

export namespace $ForgeKeyMappingAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeKeyMappingAccessor$Type = ($ForgeKeyMappingAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeKeyMappingAccessor_ = $ForgeKeyMappingAccessor$Type;
}}
declare module "packages/net/blay09/mods/kuma/mixin/$KeyMappingAccessor" {
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $KeyMappingAccessor {

 "getKey"(): $InputConstants$Key

(): $InputConstants$Key
}

export namespace $KeyMappingAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyMappingAccessor$Type = ($KeyMappingAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyMappingAccessor_ = $KeyMappingAccessor$Type;
}}
declare module "packages/net/blay09/mods/balm/mixin/$AbstractContainerScreenAccessor" {
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $AbstractContainerScreenAccessor {

 "callRenderSlot"(arg0: $GuiGraphics$Type, arg1: $Slot$Type): void
 "callIsHovering"(arg0: $Slot$Type, arg1: double, arg2: double): boolean
 "getTopPos"(): integer
 "getImageHeight"(): integer
 "getImageWidth"(): integer
 "getLeftPos"(): integer
 "getHoveredSlot"(): $Slot
}

export namespace $AbstractContainerScreenAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerScreenAccessor$Type = ($AbstractContainerScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerScreenAccessor_ = $AbstractContainerScreenAccessor$Type;
}}
declare module "packages/net/blay09/mods/netherportalfix/mixin/$LivingEntityAccessor" {
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $LivingEntityAccessor {

 "getLastPos"(): $BlockPos

(): $BlockPos
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityAccessor$Type = ($LivingEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityAccessor_ = $LivingEntityAccessor$Type;
}}
declare module "packages/net/blay09/mods/kleeslabs/mixin/$LevelRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LevelRendererAccessor {

}

export namespace $LevelRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRendererAccessor$Type = ($LevelRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelRendererAccessor_ = $LevelRendererAccessor$Type;
}}
