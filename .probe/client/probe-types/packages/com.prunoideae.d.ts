declare module "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityFluid$CustomTankBuilderItemStack" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$IFluidHandlerItem, $IFluidHandlerItem$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandlerItem"
import {$ToIntFunction, $ToIntFunction$Type} from "packages/java/util/function/$ToIntFunction"
import {$CapabilityFluid$FluidIOItemStack, $CapabilityFluid$FluidIOItemStack$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityFluid$FluidIOItemStack"
import {$CapabilityBuilderForge, $CapabilityBuilderForge$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityBuilderForge"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidStackJS, $FluidStackJS$Type} from "packages/dev/latvian/mods/kubejs/fluid/$FluidStackJS"

export class $CapabilityFluid$CustomTankBuilderItemStack extends $CapabilityBuilderForge<($ItemStack), ($IFluidHandlerItem)> {

constructor()

public "withCapacity"(capacity: integer): $CapabilityFluid$CustomTankBuilderItemStack
public "getCapacity"(getCapacity: $ToIntFunction$Type<($ItemStack$Type)>): $CapabilityFluid$CustomTankBuilderItemStack
public "onFill"(onFill: $CapabilityFluid$FluidIOItemStack$Type): $CapabilityFluid$CustomTankBuilderItemStack
public "onDrain"(onDrain: $CapabilityFluid$FluidIOItemStack$Type): $CapabilityFluid$CustomTankBuilderItemStack
public "isFluidGood"(isFluidGood: $BiPredicate$Type<($ItemStack$Type), ($FluidStackJS$Type)>): $CapabilityFluid$CustomTankBuilderItemStack
public "acceptFluid"(fluid: $Fluid$Type): $CapabilityFluid$CustomTankBuilderItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityFluid$CustomTankBuilderItemStack$Type = ($CapabilityFluid$CustomTankBuilderItemStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityFluid$CustomTankBuilderItemStack_ = $CapabilityFluid$CustomTankBuilderItemStack$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityForgeEnergy$ItemStorageBuilder" {
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"
import {$CapabilityBuilderForge, $CapabilityBuilderForge$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityBuilderForge"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $CapabilityForgeEnergy$ItemStorageBuilder extends $CapabilityBuilderForge<($ItemStack), ($IEnergyStorage)> {

constructor(capacity: integer, canExtract: boolean, canReceive: boolean)

public "getCapability"(instance: $ItemStack$Type): $IEnergyStorage
public "receiveRate"(receiveRate: integer): $CapabilityForgeEnergy$ItemStorageBuilder
public "extractRate"(extractRate: integer): $CapabilityForgeEnergy$ItemStorageBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityForgeEnergy$ItemStorageBuilder$Type = ($CapabilityForgeEnergy$ItemStorageBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityForgeEnergy$ItemStorageBuilder_ = $CapabilityForgeEnergy$ItemStorageBuilder$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/capabilities/forge/mods/curios/$CapabilityCurios$ShouldDrop" {
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $CapabilityCurios$ShouldDrop {

 "test"(arg0: $ItemStack$Type, arg1: $SlotContext$Type, arg2: $DamageSource$Type, arg3: integer, arg4: boolean): boolean

(arg0: $ItemStack$Type, arg1: $SlotContext$Type, arg2: $DamageSource$Type, arg3: integer, arg4: boolean): boolean
}

export namespace $CapabilityCurios$ShouldDrop {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityCurios$ShouldDrop$Type = ($CapabilityCurios$ShouldDrop);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityCurios$ShouldDrop_ = $CapabilityCurios$ShouldDrop$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityFluid$FluidIOItemStack" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidStackJS, $FluidStackJS$Type} from "packages/dev/latvian/mods/kubejs/fluid/$FluidStackJS"

export interface $CapabilityFluid$FluidIOItemStack {

 "transfer"(arg0: $ItemStack$Type, arg1: $FluidStackJS$Type, arg2: boolean): integer

(arg0: $ItemStack$Type, arg1: $FluidStackJS$Type, arg2: boolean): integer
}

export namespace $CapabilityFluid$FluidIOItemStack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityFluid$FluidIOItemStack$Type = ($CapabilityFluid$FluidIOItemStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityFluid$FluidIOItemStack_ = $CapabilityFluid$FluidIOItemStack$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/events/$BlockEntityCapEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$CapabilityBuilder, $CapabilityBuilder$Type} from "packages/com/prunoideae/powerfuljs/$CapabilityBuilder"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"

export class $BlockEntityCapEventJS extends $EventJS {

constructor()

public "attach"(entityType: $BlockEntityType$Type<(any)>, builder: $CapabilityBuilder$Type<($BlockEntity$Type), (any), (any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityCapEventJS$Type = ($BlockEntityCapEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityCapEventJS_ = $BlockEntityCapEventJS$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityItem$ExtractItem" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $CapabilityItem$ExtractItem {

 "extract"(arg0: $BlockEntity$Type, arg1: integer, arg2: integer, arg3: boolean): $ItemStack

(arg0: $BlockEntity$Type, arg1: integer, arg2: integer, arg3: boolean): $ItemStack
}

export namespace $CapabilityItem$ExtractItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityItem$ExtractItem$Type = ($CapabilityItem$ExtractItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityItem$ExtractItem_ = $CapabilityItem$ExtractItem$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/capabilities/forge/mods/curios/$CapabilityCurios$AttributeModificationContext" {
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $CapabilityCurios$AttributeModificationContext {

constructor(stack: $ItemStack$Type, context: $SlotContext$Type, uuid: $UUID$Type, modifiers: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>)

public "remove"(attribute: $Attribute$Type, identifier: string): $CapabilityCurios$AttributeModificationContext
public "getContext"(): $SlotContext
public "getStack"(): $ItemStack
public "modify"(attribute: $Attribute$Type, identifier: string, amount: double, operation: $AttributeModifier$Operation$Type): $CapabilityCurios$AttributeModificationContext
public "getUUID"(): $UUID
get "context"(): $SlotContext
get "stack"(): $ItemStack
get "uUID"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityCurios$AttributeModificationContext$Type = ($CapabilityCurios$AttributeModificationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityCurios$AttributeModificationContext_ = $CapabilityCurios$AttributeModificationContext$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityFluid" {
import {$CapabilityFluid$CustomTankBuilderItemStack, $CapabilityFluid$CustomTankBuilderItemStack$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityFluid$CustomTankBuilderItemStack"
import {$CapabilityFluid$CustomTankBuilderBlockEntity, $CapabilityFluid$CustomTankBuilderBlockEntity$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityFluid$CustomTankBuilderBlockEntity"
import {$CapabilityFluid$NormalTankBuilderItemStack, $CapabilityFluid$NormalTankBuilderItemStack$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityFluid$NormalTankBuilderItemStack"

export class $CapabilityFluid {

constructor()

public "customBlockEntity"(): $CapabilityFluid$CustomTankBuilderBlockEntity
public "customItemStack"(): $CapabilityFluid$CustomTankBuilderItemStack
public "itemStack"(capacity: integer): $CapabilityFluid$NormalTankBuilderItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityFluid$Type = ($CapabilityFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityFluid_ = $CapabilityFluid$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/capabilities/forge/mods/curios/$CapabilityCurios$ItemStackBuilder" {
import {$ICurio, $ICurio$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio"
import {$CapabilityCurios$AttributeModificationContext, $CapabilityCurios$AttributeModificationContext$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/mods/curios/$CapabilityCurios$AttributeModificationContext"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$CapabilityCurios$EquipCallback, $CapabilityCurios$EquipCallback$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/mods/curios/$CapabilityCurios$EquipCallback"
import {$CapabilityBuilderForge, $CapabilityBuilderForge$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityBuilderForge"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$CapabilityCurios$ShouldDrop, $CapabilityCurios$ShouldDrop$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/mods/curios/$CapabilityCurios$ShouldDrop"

export class $CapabilityCurios$ItemStackBuilder extends $CapabilityBuilderForge<($ItemStack), ($ICurio)> {

constructor()

public "dynamicAttribute"(context: $Consumer$Type<($CapabilityCurios$AttributeModificationContext$Type)>): $CapabilityCurios$ItemStackBuilder
public "canEquip"(canEquip: $BiPredicate$Type<($ItemStack$Type), ($SlotContext$Type)>): $CapabilityCurios$ItemStackBuilder
public "onEquip"(onEquip: $CapabilityCurios$EquipCallback$Type): $CapabilityCurios$ItemStackBuilder
public "curioTick"(curioTick: $BiConsumer$Type<($ItemStack$Type), ($SlotContext$Type)>): $CapabilityCurios$ItemStackBuilder
public "canUnequip"(canUnequip: $BiPredicate$Type<($ItemStack$Type), ($SlotContext$Type)>): $CapabilityCurios$ItemStackBuilder
public "getDropRule"(getDropRule: $CapabilityCurios$ShouldDrop$Type): $CapabilityCurios$ItemStackBuilder
public "onUnequip"(onUnequip: $CapabilityCurios$EquipCallback$Type): $CapabilityCurios$ItemStackBuilder
public "getCapability"(instance: $ItemStack$Type): $ICurio
public "modifyAttribute"(attribute: $ResourceLocation$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$Type): $CapabilityCurios$ItemStackBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityCurios$ItemStackBuilder$Type = ($CapabilityCurios$ItemStackBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityCurios$ItemStackBuilder_ = $CapabilityCurios$ItemStackBuilder$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityItem" {
import {$CapabilityItem$BlockEntityBuilder, $CapabilityItem$BlockEntityBuilder$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityItem$BlockEntityBuilder"

export class $CapabilityItem {

constructor()

public "blockEntity"(): $CapabilityItem$BlockEntityBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityItem$Type = ($CapabilityItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityItem_ = $CapabilityItem$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityForgeEnergy$BlockEntityBuilder" {
import {$ToIntFunction, $ToIntFunction$Type} from "packages/java/util/function/$ToIntFunction"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"
import {$CapabilityBuilderForge, $CapabilityBuilderForge$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityBuilderForge"
import {$CapabilityForgeEnergy$EnergyIOBlockEntity, $CapabilityForgeEnergy$EnergyIOBlockEntity$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityForgeEnergy$EnergyIOBlockEntity"

export class $CapabilityForgeEnergy$BlockEntityBuilder extends $CapabilityBuilderForge<($BlockEntity), ($IEnergyStorage)> {

constructor()

public "withCapacity"(capacity: integer): $CapabilityForgeEnergy$BlockEntityBuilder
public "getMaxEnergyStored"(getMaxEnergyStored: $ToIntFunction$Type<($BlockEntity$Type)>): $CapabilityForgeEnergy$BlockEntityBuilder
public "getEnergyStored"(getEnergyStored: $ToIntFunction$Type<($BlockEntity$Type)>): $CapabilityForgeEnergy$BlockEntityBuilder
public "canReceive"(canReceive: $Predicate$Type<($BlockEntity$Type)>): $CapabilityForgeEnergy$BlockEntityBuilder
public "receiveEnergy"(receiveEnergy: $CapabilityForgeEnergy$EnergyIOBlockEntity$Type): $CapabilityForgeEnergy$BlockEntityBuilder
public "canExtract"(canExtract: $Predicate$Type<($BlockEntity$Type)>): $CapabilityForgeEnergy$BlockEntityBuilder
public "extractEnergy"(extractEnergy: $CapabilityForgeEnergy$EnergyIOBlockEntity$Type): $CapabilityForgeEnergy$BlockEntityBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityForgeEnergy$BlockEntityBuilder$Type = ($CapabilityForgeEnergy$BlockEntityBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityForgeEnergy$BlockEntityBuilder_ = $CapabilityForgeEnergy$BlockEntityBuilder$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityItem$InsertItem" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $CapabilityItem$InsertItem {

 "insert"(arg0: $BlockEntity$Type, arg1: integer, arg2: $ItemStack$Type, arg3: boolean): $ItemStack

(arg0: $BlockEntity$Type, arg1: integer, arg2: $ItemStack$Type, arg3: boolean): $ItemStack
}

export namespace $CapabilityItem$InsertItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityItem$InsertItem$Type = ($CapabilityItem$InsertItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityItem$InsertItem_ = $CapabilityItem$InsertItem$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityFluid$CustomTankBuilderBlockEntity" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$CapabilityFluid$FluidIOBlockEntity, $CapabilityFluid$FluidIOBlockEntity$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityFluid$FluidIOBlockEntity"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$ToIntFunction, $ToIntFunction$Type} from "packages/java/util/function/$ToIntFunction"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$CapabilityBuilderForge, $CapabilityBuilderForge$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityBuilderForge"
import {$FluidStackJS, $FluidStackJS$Type} from "packages/dev/latvian/mods/kubejs/fluid/$FluidStackJS"

export class $CapabilityFluid$CustomTankBuilderBlockEntity extends $CapabilityBuilderForge<($BlockEntity), ($IFluidHandler)> {

constructor()

public "getCapacity"(getCapacity: $ToIntFunction$Type<($BlockEntity$Type)>): $CapabilityFluid$CustomTankBuilderBlockEntity
public "getFluid"(getFluid: $Function$Type<($BlockEntity$Type), ($FluidStackJS$Type)>): $CapabilityFluid$CustomTankBuilderBlockEntity
public "getCapability"(instance: $BlockEntity$Type): $IFluidHandler
public "onFill"(onFill: $CapabilityFluid$FluidIOBlockEntity$Type): $CapabilityFluid$CustomTankBuilderBlockEntity
public "onDrain"(onDrain: $CapabilityFluid$FluidIOBlockEntity$Type): $CapabilityFluid$CustomTankBuilderBlockEntity
public "isFluidGood"(isFluidGood: $BiPredicate$Type<($BlockEntity$Type), ($FluidStackJS$Type)>): $CapabilityFluid$CustomTankBuilderBlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityFluid$CustomTankBuilderBlockEntity$Type = ($CapabilityFluid$CustomTankBuilderBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityFluid$CustomTankBuilderBlockEntity_ = $CapabilityFluid$CustomTankBuilderBlockEntity$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityForgeEnergy" {
import {$CapabilityForgeEnergy$BlockEntityBuilder, $CapabilityForgeEnergy$BlockEntityBuilder$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityForgeEnergy$BlockEntityBuilder"
import {$CapabilityForgeEnergy$ItemStorageBuilder, $CapabilityForgeEnergy$ItemStorageBuilder$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityForgeEnergy$ItemStorageBuilder"
import {$CapabilityForgeEnergy$ItemStackBuilder, $CapabilityForgeEnergy$ItemStackBuilder$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityForgeEnergy$ItemStackBuilder"

export class $CapabilityForgeEnergy {

constructor()

public "normalItemStack"(capacity: integer, canExtract: boolean, canReceive: boolean): $CapabilityForgeEnergy$ItemStorageBuilder
public "customBlockEntity"(): $CapabilityForgeEnergy$BlockEntityBuilder
public "customItemStack"(): $CapabilityForgeEnergy$ItemStackBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityForgeEnergy$Type = ($CapabilityForgeEnergy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityForgeEnergy_ = $CapabilityForgeEnergy$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityBuilderForge" {
import {$CapabilityProvider, $CapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$CapabilityProvider"
import {$CapabilityBuilder, $CapabilityBuilder$Type} from "packages/com/prunoideae/powerfuljs/$CapabilityBuilder"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $CapabilityBuilderForge<I extends $CapabilityProvider<(I)>, T> extends $CapabilityBuilder<(I), (T), ($Capability<(T)>)> {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityBuilderForge$Type<I, T> = ($CapabilityBuilderForge<(I), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityBuilderForge_<I, T> = $CapabilityBuilderForge$Type<(I), (T)>;
}}
declare module "packages/com/prunoideae/powerfuljs/capabilities/forge/mods/curios/$RegisterCuriosRendererEventJS" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RendererCurios$RenderContext, $RendererCurios$RenderContext$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/mods/curios/$RendererCurios$RenderContext"

export class $RegisterCuriosRendererEventJS extends $EventJS {

constructor()

public "register"(item: $Item$Type, renderer: $Consumer$Type<($RendererCurios$RenderContext$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterCuriosRendererEventJS$Type = ($RegisterCuriosRendererEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegisterCuriosRendererEventJS_ = $RegisterCuriosRendererEventJS$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/capabilities/forge/mods/curios/$RendererCurios$RenderContext" {
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$RenderLayerParent, $RenderLayerParent$Type} from "packages/net/minecraft/client/renderer/entity/$RenderLayerParent"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $RendererCurios$RenderContext {
readonly "stack": $ItemStack
readonly "slotContext": $SlotContext
readonly "matrixStack": $PoseStack
readonly "renderLayerParent": $RenderLayerParent<($LivingEntity), ($EntityModel<($LivingEntity)>)>
readonly "renderTypeBuffer": $MultiBufferSource
readonly "light": integer
readonly "limbSwing": float
readonly "limbSwingAmount": float
readonly "partialTicks": float
readonly "ageInTicks": float
readonly "netHeadYaw": float
readonly "netHeadPitch": float

constructor(stack: $ItemStack$Type, slotContext: $SlotContext$Type, matrixStack: $PoseStack$Type, renderLayerParent: $RenderLayerParent$Type<($LivingEntity$Type), ($EntityModel$Type<($LivingEntity$Type)>)>, renderTypeBuffer: $MultiBufferSource$Type, light: integer, limbSwing: float, limbSwingAmount: float, partialTicks: float, ageInTicks: float, netHeadYaw: float, netHeadPitch: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RendererCurios$RenderContext$Type = ($RendererCurios$RenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RendererCurios$RenderContext_ = $RendererCurios$RenderContext$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityForgeEnergy$EnergyIOBlockEntity" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"

export interface $CapabilityForgeEnergy$EnergyIOBlockEntity {

 "transfer"(arg0: $BlockEntity$Type, arg1: integer, arg2: boolean): integer

(arg0: $BlockEntity$Type, arg1: integer, arg2: boolean): integer
}

export namespace $CapabilityForgeEnergy$EnergyIOBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityForgeEnergy$EnergyIOBlockEntity$Type = ($CapabilityForgeEnergy$EnergyIOBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityForgeEnergy$EnergyIOBlockEntity_ = $CapabilityForgeEnergy$EnergyIOBlockEntity$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/capabilities/forge/mods/curios/$CapabilityCurios$EquipCallback" {
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $CapabilityCurios$EquipCallback {

 "changed"(arg0: $ItemStack$Type, arg1: $SlotContext$Type, arg2: $ItemStack$Type): void

(arg0: $ItemStack$Type, arg1: $SlotContext$Type, arg2: $ItemStack$Type): void
}

export namespace $CapabilityCurios$EquipCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityCurios$EquipCallback$Type = ($CapabilityCurios$EquipCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityCurios$EquipCallback_ = $CapabilityCurios$EquipCallback$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityFluid$NormalTankBuilderItemStack" {
import {$IFluidHandlerItem, $IFluidHandlerItem$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandlerItem"
import {$CapabilityBuilderForge, $CapabilityBuilderForge$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityBuilderForge"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $CapabilityFluid$NormalTankBuilderItemStack extends $CapabilityBuilderForge<($ItemStack), ($IFluidHandlerItem)> {


public "getCapability"(instance: $ItemStack$Type): $IFluidHandlerItem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityFluid$NormalTankBuilderItemStack$Type = ($CapabilityFluid$NormalTankBuilderItemStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityFluid$NormalTankBuilderItemStack_ = $CapabilityFluid$NormalTankBuilderItemStack$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/events/forge/$DynamicItemStackEventJS" {
import {$DynamicAttachEventJS, $DynamicAttachEventJS$Type} from "packages/com/prunoideae/powerfuljs/events/forge/$DynamicAttachEventJS"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$CapabilityBuilderForge, $CapabilityBuilderForge$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityBuilderForge"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $DynamicItemStackEventJS extends $DynamicAttachEventJS<($ItemStack)> {

constructor()

public "add"(predicate: $Predicate$Type<($ItemStack$Type)>, provider: $CapabilityBuilderForge$Type<($ItemStack$Type), (any)>): $DynamicAttachEventJS<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicItemStackEventJS$Type = ($DynamicItemStackEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicItemStackEventJS_ = $DynamicItemStackEventJS$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/events/forge/$DynamicBEEventJS" {
import {$DynamicAttachEventJS, $DynamicAttachEventJS$Type} from "packages/com/prunoideae/powerfuljs/events/forge/$DynamicAttachEventJS"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$CapabilityBuilderForge, $CapabilityBuilderForge$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityBuilderForge"

export class $DynamicBEEventJS extends $DynamicAttachEventJS<($BlockEntity)> {

constructor()

public "add"(predicate: $Predicate$Type<($BlockEntity$Type)>, provider: $CapabilityBuilderForge$Type<($BlockEntity$Type), (any)>): $DynamicAttachEventJS<($BlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicBEEventJS$Type = ($DynamicBEEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicBEEventJS_ = $DynamicBEEventJS$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/$CapabilityBuilder" {
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export class $CapabilityBuilder<I, T, K> {

constructor()

public "availableOn"(isAvailable: $BiPredicate$Type<(I), ($Direction$Type)>): $CapabilityBuilder<(I), (T), (K)>
public "side"(direction: $Direction$Type): $CapabilityBuilder<(I), (T), (K)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityBuilder$Type<I, T, K> = ($CapabilityBuilder<(I), (T), (K)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityBuilder_<I, T, K> = $CapabilityBuilder$Type<(I), (T), (K)>;
}}
declare module "packages/com/prunoideae/powerfuljs/capabilities/forge/mods/curios/$CapabilitiesCurios" {
import {$CapabilityCurios, $CapabilityCurios$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/mods/curios/$CapabilityCurios"

export interface $CapabilitiesCurios {

}

export namespace $CapabilitiesCurios {
const CURIOS: $CapabilityCurios
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilitiesCurios$Type = ($CapabilitiesCurios);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilitiesCurios_ = $CapabilitiesCurios$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilitiesForge" {
import {$CapabilityItem, $CapabilityItem$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityItem"
import {$CapabilityForgeEnergy, $CapabilityForgeEnergy$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityForgeEnergy"
import {$CapabilityFluid, $CapabilityFluid$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityFluid"

export interface $CapabilitiesForge {

}

export namespace $CapabilitiesForge {
const ENERGY: $CapabilityForgeEnergy
const FLUID: $CapabilityFluid
const ITEM: $CapabilityItem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilitiesForge$Type = ($CapabilitiesForge);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilitiesForge_ = $CapabilitiesForge$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/capabilities/forge/mods/curios/$CapabilityCurios" {
import {$CapabilityCurios$ItemStackBuilder, $CapabilityCurios$ItemStackBuilder$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/mods/curios/$CapabilityCurios$ItemStackBuilder"

export class $CapabilityCurios {

constructor()

public "itemStack"(): $CapabilityCurios$ItemStackBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityCurios$Type = ($CapabilityCurios);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityCurios_ = $CapabilityCurios$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/events/forge/$DynamicEntityEventJS" {
import {$DynamicAttachEventJS, $DynamicAttachEventJS$Type} from "packages/com/prunoideae/powerfuljs/events/forge/$DynamicAttachEventJS"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$CapabilityBuilderForge, $CapabilityBuilderForge$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityBuilderForge"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $DynamicEntityEventJS extends $DynamicAttachEventJS<($Entity)> {

constructor()

public "add"(predicate: $Predicate$Type<($Entity$Type)>, provider: $CapabilityBuilderForge$Type<($Entity$Type), (any)>): $DynamicAttachEventJS<($Entity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicEntityEventJS$Type = ($DynamicEntityEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicEntityEventJS_ = $DynamicEntityEventJS$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityItem$BlockEntityBuilder" {
import {$CapabilityItem$IsItemValid, $CapabilityItem$IsItemValid$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityItem$IsItemValid"
import {$CapabilityItem$InsertItem, $CapabilityItem$InsertItem$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityItem$InsertItem"
import {$ToIntFunction, $ToIntFunction$Type} from "packages/java/util/function/$ToIntFunction"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$CapabilityBuilderForge, $CapabilityBuilderForge$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityBuilderForge"
import {$CapabilityItem$ExtractItem, $CapabilityItem$ExtractItem$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityItem$ExtractItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$ToIntBiFunction, $ToIntBiFunction$Type} from "packages/java/util/function/$ToIntBiFunction"

export class $CapabilityItem$BlockEntityBuilder extends $CapabilityBuilderForge<($BlockEntity), ($IItemHandler)> {

constructor()

public "getSlots"(getSlots: $ToIntFunction$Type<($BlockEntity$Type)>): $CapabilityItem$BlockEntityBuilder
public "getStackInSlot"(getStackInSlot: $BiFunction$Type<($BlockEntity$Type), (integer), ($ItemStack$Type)>): $CapabilityItem$BlockEntityBuilder
public "getSlotLimit"(getSlotLimit: $ToIntBiFunction$Type<($BlockEntity$Type), (integer)>): $CapabilityItem$BlockEntityBuilder
public "insertItem"(insertItem: $CapabilityItem$InsertItem$Type): $CapabilityItem$BlockEntityBuilder
public "extractItem"(extractItem: $CapabilityItem$ExtractItem$Type): $CapabilityItem$BlockEntityBuilder
public "isItemValid"(isItemValid: $CapabilityItem$IsItemValid$Type): $CapabilityItem$BlockEntityBuilder
public "getCapability"(instance: $BlockEntity$Type): $IItemHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityItem$BlockEntityBuilder$Type = ($CapabilityItem$BlockEntityBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityItem$BlockEntityBuilder_ = $CapabilityItem$BlockEntityBuilder$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/events/$EntityCapEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$CapabilityBuilder, $CapabilityBuilder$Type} from "packages/com/prunoideae/powerfuljs/$CapabilityBuilder"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityCapEventJS extends $EventJS {

constructor()

public "attach"(entityType: $EntityType$Type<(any)>, capabilityBuilder: $CapabilityBuilder$Type<($Entity$Type), (any), (any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityCapEventJS$Type = ($EntityCapEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityCapEventJS_ = $EntityCapEventJS$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityItem$IsItemValid" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $CapabilityItem$IsItemValid {

 "isValid"(arg0: $BlockEntity$Type, arg1: integer, arg2: $ItemStack$Type): boolean

(arg0: $BlockEntity$Type, arg1: integer, arg2: $ItemStack$Type): boolean
}

export namespace $CapabilityItem$IsItemValid {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityItem$IsItemValid$Type = ($CapabilityItem$IsItemValid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityItem$IsItemValid_ = $CapabilityItem$IsItemValid$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityForgeEnergy$ItemStackBuilder" {
import {$ToIntFunction, $ToIntFunction$Type} from "packages/java/util/function/$ToIntFunction"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"
import {$CapabilityBuilderForge, $CapabilityBuilderForge$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityBuilderForge"
import {$CapabilityForgeEnergy$EnergyIOItemStack, $CapabilityForgeEnergy$EnergyIOItemStack$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityForgeEnergy$EnergyIOItemStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $CapabilityForgeEnergy$ItemStackBuilder extends $CapabilityBuilderForge<($ItemStack), ($IEnergyStorage)> {

constructor()

public "withCapacity"(capacity: integer): $CapabilityForgeEnergy$ItemStackBuilder
public "getMaxEnergyStored"(getMaxEnergyStored: $ToIntFunction$Type<($ItemStack$Type)>): $CapabilityForgeEnergy$ItemStackBuilder
public "getEnergyStored"(getEnergyStored: $ToIntFunction$Type<($ItemStack$Type)>): $CapabilityForgeEnergy$ItemStackBuilder
public "canReceive"(canReceive: $Predicate$Type<($ItemStack$Type)>): $CapabilityForgeEnergy$ItemStackBuilder
public "receiveEnergy"(receiveEnergy: $CapabilityForgeEnergy$EnergyIOItemStack$Type): $CapabilityForgeEnergy$ItemStackBuilder
public "canExtract"(canExtract: $Predicate$Type<($ItemStack$Type)>): $CapabilityForgeEnergy$ItemStackBuilder
public "extractEnergy"(extractEnergy: $CapabilityForgeEnergy$EnergyIOItemStack$Type): $CapabilityForgeEnergy$ItemStackBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityForgeEnergy$ItemStackBuilder$Type = ($CapabilityForgeEnergy$ItemStackBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityForgeEnergy$ItemStackBuilder_ = $CapabilityForgeEnergy$ItemStackBuilder$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/events/forge/$DynamicAttachEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$CapabilityProvider, $CapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$CapabilityProvider"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$CapabilityBuilderForge, $CapabilityBuilderForge$Type} from "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityBuilderForge"

export class $DynamicAttachEventJS<T extends $CapabilityProvider<(T)>> extends $EventJS {

constructor()

public "add"(arg0: $Predicate$Type<(T)>, arg1: $CapabilityBuilderForge$Type<(T), (any)>): $DynamicAttachEventJS<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicAttachEventJS$Type<T> = ($DynamicAttachEventJS<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicAttachEventJS_<T> = $DynamicAttachEventJS$Type<(T)>;
}}
declare module "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityForgeEnergy$EnergyIOItemStack" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $CapabilityForgeEnergy$EnergyIOItemStack {

 "transfer"(arg0: $ItemStack$Type, arg1: integer, arg2: boolean): integer

(arg0: $ItemStack$Type, arg1: integer, arg2: boolean): integer
}

export namespace $CapabilityForgeEnergy$EnergyIOItemStack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityForgeEnergy$EnergyIOItemStack$Type = ($CapabilityForgeEnergy$EnergyIOItemStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityForgeEnergy$EnergyIOItemStack_ = $CapabilityForgeEnergy$EnergyIOItemStack$Type;
}}
declare module "packages/com/prunoideae/powerfuljs/capabilities/forge/$CapabilityFluid$FluidIOBlockEntity" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$FluidStackJS, $FluidStackJS$Type} from "packages/dev/latvian/mods/kubejs/fluid/$FluidStackJS"

export interface $CapabilityFluid$FluidIOBlockEntity {

 "transfer"(arg0: $BlockEntity$Type, arg1: $FluidStackJS$Type, arg2: boolean): integer

(arg0: $BlockEntity$Type, arg1: $FluidStackJS$Type, arg2: boolean): integer
}

export namespace $CapabilityFluid$FluidIOBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityFluid$FluidIOBlockEntity$Type = ($CapabilityFluid$FluidIOBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityFluid$FluidIOBlockEntity_ = $CapabilityFluid$FluidIOBlockEntity$Type;
}}
