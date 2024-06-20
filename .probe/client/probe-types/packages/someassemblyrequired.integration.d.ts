declare module "packages/someassemblyrequired/integration/create/recipe/$SandwichFluidSpoutingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$SandwichFluidSpoutingRecipe, $SandwichFluidSpoutingRecipe$Type} from "packages/someassemblyrequired/integration/create/recipe/$SandwichFluidSpoutingRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SandwichFluidSpoutingRecipe$Serializer implements $RecipeSerializer<($SandwichFluidSpoutingRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $SandwichFluidSpoutingRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $SandwichFluidSpoutingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $SandwichFluidSpoutingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $SandwichFluidSpoutingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SandwichFluidSpoutingRecipe$Serializer$Type = ($SandwichFluidSpoutingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SandwichFluidSpoutingRecipe$Serializer_ = $SandwichFluidSpoutingRecipe$Serializer$Type;
}}
declare module "packages/someassemblyrequired/integration/create/recipe/$SandwichFluidSpoutingRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$FluidIngredient, $FluidIngredient$Type} from "packages/com/simibubi/create/foundation/fluid/$FluidIngredient"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SandwichSpoutingRecipe, $SandwichSpoutingRecipe$Type} from "packages/someassemblyrequired/recipe/$SandwichSpoutingRecipe"

export class $SandwichFluidSpoutingRecipe extends $SandwichSpoutingRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $FluidIngredient$Type, arg2: $ItemStack$Type)

public "getAmountRequired"(arg0: $FluidStack$Type): integer
public "matches"(arg0: $FluidStack$Type): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $FluidStack$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "getIngredient"(): $FluidIngredient
get "serializer"(): $RecipeSerializer<(any)>
get "ingredient"(): $FluidIngredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SandwichFluidSpoutingRecipe$Type = ($SandwichFluidSpoutingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SandwichFluidSpoutingRecipe_ = $SandwichFluidSpoutingRecipe$Type;
}}
declare module "packages/someassemblyrequired/integration/create/recipe/$SandwichPotionSpoutingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$SandwichPotionSpoutingRecipe, $SandwichPotionSpoutingRecipe$Type} from "packages/someassemblyrequired/integration/create/recipe/$SandwichPotionSpoutingRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SandwichPotionSpoutingRecipe$Serializer implements $RecipeSerializer<($SandwichPotionSpoutingRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $SandwichPotionSpoutingRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $SandwichPotionSpoutingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $SandwichPotionSpoutingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $SandwichPotionSpoutingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SandwichPotionSpoutingRecipe$Serializer$Type = ($SandwichPotionSpoutingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SandwichPotionSpoutingRecipe$Serializer_ = $SandwichPotionSpoutingRecipe$Serializer$Type;
}}
declare module "packages/someassemblyrequired/integration/create/recipe/$SandwichPotionSpoutingRecipe" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SandwichSpoutingRecipe, $SandwichSpoutingRecipe$Type} from "packages/someassemblyrequired/recipe/$SandwichSpoutingRecipe"

export class $SandwichPotionSpoutingRecipe extends $SandwichSpoutingRecipe {

constructor(arg0: $ResourceLocation$Type)

public "getAmountRequired"(arg0: $FluidStack$Type): integer
public "matches"(arg0: $FluidStack$Type): boolean
public "assemble"(arg0: $FluidStack$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SandwichPotionSpoutingRecipe$Type = ($SandwichPotionSpoutingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SandwichPotionSpoutingRecipe_ = $SandwichPotionSpoutingRecipe$Type;
}}
