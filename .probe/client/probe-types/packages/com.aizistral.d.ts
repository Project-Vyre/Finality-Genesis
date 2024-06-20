declare module "packages/com/aizistral/enigmaticlegacy/items/$RelicOfTesting" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$IHidden, $IHidden$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$IHidden"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RelicOfTesting extends $ItemBase implements $IHidden {
 "lootRandomizer": $Random
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getCreativeTab"(): $CreativeModeTab
get "creativeTab"(): $CreativeModeTab
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelicOfTesting$Type = ($RelicOfTesting);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelicOfTesting_ = $RelicOfTesting$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$LoreInscriber" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Vanishable, $Vanishable$Type} from "packages/net/minecraft/world/item/$Vanishable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LoreInscriber extends $ItemBase implements $Vanishable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoreInscriber$Type = ($LoreInscriber);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoreInscriber_ = $LoreInscriber$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$UltimatePotionBase" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$IAdvancedPotionItem$PotionType, $IAdvancedPotionItem$PotionType$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$IAdvancedPotionItem$PotionType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IAdvancedPotionItem, $IAdvancedPotionItem$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$IAdvancedPotionItem"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UltimatePotionBase extends $ItemBase implements $IAdvancedPotionItem {
 "potionType": $IAdvancedPotionItem$PotionType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Rarity$Type, arg1: $IAdvancedPotionItem$PotionType$Type)

public "getDefaultInstance"(): $ItemStack
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getDescriptionId"(arg0: $ItemStack$Type): string
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getPotionType"(): $IAdvancedPotionItem$PotionType
public "getCreativeTab"(): $CreativeModeTab
public "getCreativeTabStacks"(): $List<($ItemStack)>
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
get "defaultInstance"(): $ItemStack
get "potionType"(): $IAdvancedPotionItem$PotionType
get "creativeTab"(): $CreativeModeTab
get "creativeTabStacks"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UltimatePotionBase$Type = ($UltimatePotionBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UltimatePotionBase_ = $UltimatePotionBase$Type;
}}
declare module "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$StringParameter" {
import {$Omniconfig$GenericParameter, $Omniconfig$GenericParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$GenericParameter"

export class $Omniconfig$StringParameter extends $Omniconfig$GenericParameter {

constructor(arg0: string)

public "toString"(): string
public "getValue"(): string
public "setValue"(arg0: string): void
public "getDefaultValue"(): string
public "valueToString"(): string
public "parseFromString"(arg0: string): void
public "getValidValues"(): (string)[]
public "setDefaultValue"(arg0: string): void
public "setValidValues"(...arg0: (string)[]): void
get "value"(): string
set "value"(value: string)
get "defaultValue"(): string
get "validValues"(): (string)[]
set "defaultValue"(value: string)
set "validValues"(value: (string)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Omniconfig$StringParameter$Type = ($Omniconfig$StringParameter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Omniconfig$StringParameter_ = $Omniconfig$StringParameter$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$EnigmaticEye" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemBaseCurio, $ItemBaseCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseCurio"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EnigmaticEye extends $ItemBaseCurio {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "canEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "registerVariants"(): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "activateWithAnimation"(arg0: $ItemStack$Type): void
public "setDormant"(arg0: $ItemStack$Type, arg1: boolean): void
public "isDormant"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnigmaticEye$Type = ($EnigmaticEye);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnigmaticEye_ = $EnigmaticEye$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/api/items/$ICreativeTabMember" {
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ICreativeTabMember {

 "getCreativeTab"(): $CreativeModeTab
 "getCreativeTabStacks"(): $List<($ItemStack)>

(): $CreativeModeTab
}

export namespace $ICreativeTabMember {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICreativeTabMember$Type = ($ICreativeTabMember);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICreativeTabMember_ = $ICreativeTabMember$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$SoulCompass" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICursed, $ICursed$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICursed"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SoulCompass extends $ItemBase implements $ICursed {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "setNearestCrystal"(arg0: $BlockPos$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "registerVariants"(): void
public "getAngle"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): float
set "nearestCrystal"(value: $BlockPos$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulCompass$Type = ($SoulCompass);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulCompass_ = $SoulCompass$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$GolemHeart" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Omniconfig$IntParameter, $Omniconfig$IntParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$IntParameter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemSpellstoneCurio, $ItemSpellstoneCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemSpellstoneCurio"
import {$Omniconfig$DoubleParameter, $Omniconfig$DoubleParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$DoubleParameter"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Omniconfig$BooleanParameter, $Omniconfig$BooleanParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$BooleanParameter"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Omniconfig$PerhapsParameter, $Omniconfig$PerhapsParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$PerhapsParameter"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$DamageType, $DamageType$Type} from "packages/net/minecraft/world/damagesource/$DamageType"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$ISpellstone, $ISpellstone$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ISpellstone"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GolemHeart extends $ItemSpellstoneCurio implements $ISpellstone {
static readonly "EXCLUDED_ARMOR": $List<($Item)>
static "spellstoneCooldown": $Omniconfig$IntParameter
static "defaultArmorBonus": $Omniconfig$DoubleParameter
static "superArmorBonus": $Omniconfig$DoubleParameter
static "superArmorToughnessBonus": $Omniconfig$DoubleParameter
static "knockbackResistance": $Omniconfig$PerhapsParameter
static "meleeResistance": $Omniconfig$PerhapsParameter
static "explosionResistance": $Omniconfig$PerhapsParameter
static "vulnerabilityModifier": $Omniconfig$DoubleParameter
 "model": any
 "attributesDefault": $Multimap<($Attribute), ($AttributeModifier)>
 "attributesNoArmor": $Multimap<($Attribute), ($AttributeModifier)>
static "multiequip": $Omniconfig$BooleanParameter
static "reducedCooldowns": $Predicate<($Player)>
 "immunityList": $List<($ResourceKey<($DamageType)>)>
 "resistanceList": $HashMap<($ResourceKey<($DamageType)>), ($Supplier<(float)>)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "onUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
public static "buildArmorExclusions"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GolemHeart$Type = ($GolemHeart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GolemHeart_ = $GolemHeart$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$TheInfinitum" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Omniconfig$DoubleParameter, $Omniconfig$DoubleParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$DoubleParameter"
import {$TheAcknowledgment, $TheAcknowledgment$Type} from "packages/com/aizistral/enigmaticlegacy/items/$TheAcknowledgment"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Omniconfig$PerhapsParameter, $Omniconfig$PerhapsParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$PerhapsParameter"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IEldritch, $IEldritch$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$IEldritch"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TheInfinitum extends $TheAcknowledgment implements $IEldritch {
static "attackDamage": $Omniconfig$DoubleParameter
static "attackSpeed": $Omniconfig$DoubleParameter
static "bossDamageBonus": $Omniconfig$PerhapsParameter
static "knockbackBonus": $Omniconfig$PerhapsParameter
static "lifestealBonus": $Omniconfig$PerhapsParameter
static "undeadProbability": $Omniconfig$PerhapsParameter
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TheInfinitum$Type = ($TheInfinitum);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TheInfinitum_ = $TheInfinitum$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$ThiccScroll" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ThiccScroll extends $ItemBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThiccScroll$Type = ($ThiccScroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThiccScroll_ = $ThiccScroll$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/api/items/$IAdvancedPotionItem$PotionType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IAdvancedPotionItem$PotionType extends $Enum<($IAdvancedPotionItem$PotionType)> {
static readonly "COMMON": $IAdvancedPotionItem$PotionType
static readonly "ULTIMATE": $IAdvancedPotionItem$PotionType


public static "values"(): ($IAdvancedPotionItem$PotionType)[]
public static "valueOf"(arg0: string): $IAdvancedPotionItem$PotionType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAdvancedPotionItem$PotionType$Type = (("common") | ("ultimate")) | ($IAdvancedPotionItem$PotionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAdvancedPotionItem$PotionType_ = $IAdvancedPotionItem$PotionType$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$LootGenerator" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$Vanishable, $Vanishable$Type} from "packages/net/minecraft/world/item/$Vanishable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LootGenerator extends $ItemBase implements $Vanishable {
 "lootRandomizer": $Random
 "lootList": $List<($ResourceLocation)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootGenerator$Type = ($LootGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootGenerator_ = $LootGenerator$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$AstralDust" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AstralDust extends $ItemBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AstralDust$Type = ($AstralDust);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AstralDust_ = $AstralDust$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$ForbiddenAxe" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Omniconfig$PerhapsParameter, $Omniconfig$PerhapsParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$PerhapsParameter"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ForbiddenAxe extends $SwordItem {
static "beheadingBase": $Omniconfig$PerhapsParameter
static "beheadingBonus": $Omniconfig$PerhapsParameter
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "isCorrectToolForDrops"(arg0: $BlockState$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForbiddenAxe$Type = ($ForbiddenAxe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForbiddenAxe_ = $ForbiddenAxe$Type;
}}
declare module "packages/com/aizistral/etherium/items/$EtheriumArmor" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$ICreativeTabMember, $ICreativeTabMember$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICreativeTabMember"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EtheriumArmor extends $ArmorItem implements $ICreativeTabMember {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $ArmorItem$Type$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public static "hasFullSet"(arg0: $Player$Type): boolean
public "getCreativeTab"(): $CreativeModeTab
public static "hasShield"(arg0: $Player$Type): boolean
public "getCreativeTabStacks"(): $List<($ItemStack)>
public static "get"(arg0: $ItemStack$Type): $Equipable
get "creativeTab"(): $CreativeModeTab
get "creativeTabStacks"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtheriumArmor$Type = ($EtheriumArmor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EtheriumArmor_ = $EtheriumArmor$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$OceanStone" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Omniconfig$IntParameter, $Omniconfig$IntParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$IntParameter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemSpellstoneCurio, $ItemSpellstoneCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemSpellstoneCurio"
import {$Omniconfig$DoubleParameter, $Omniconfig$DoubleParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$DoubleParameter"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Omniconfig$BooleanParameter, $Omniconfig$BooleanParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$BooleanParameter"
import {$Omniconfig$PerhapsParameter, $Omniconfig$PerhapsParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$PerhapsParameter"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$DamageType, $DamageType$Type} from "packages/net/minecraft/world/damagesource/$DamageType"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$ISpellstone, $ISpellstone$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ISpellstone"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $OceanStone extends $ItemSpellstoneCurio implements $ISpellstone {
static "spellstoneCooldown": $Omniconfig$IntParameter
static "swimminSpeedBoost": $Omniconfig$PerhapsParameter
static "underwaterCreaturesResistance": $Omniconfig$PerhapsParameter
static "xpCostModifier": $Omniconfig$DoubleParameter
static "preventOxygenBarRender": $Omniconfig$BooleanParameter
readonly "xpCostBase": integer
readonly "nightVisionDuration": integer
static "multiequip": $Omniconfig$BooleanParameter
static "reducedCooldowns": $Predicate<($Player)>
 "immunityList": $List<($ResourceKey<($DamageType)>)>
 "resistanceList": $HashMap<($ResourceKey<($DamageType)>), ($Supplier<(float)>)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getCooldown"(arg0: $Player$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "onUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
public "getAttributesTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "triggerActiveAbility"(arg0: $Level$Type, arg1: $ServerPlayer$Type, arg2: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OceanStone$Type = ($OceanStone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OceanStone_ = $OceanStone$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$MegaSponge" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Omniconfig$IntParameter, $Omniconfig$IntParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$IntParameter"
import {$Vanishable, $Vanishable$Type} from "packages/net/minecraft/world/item/$Vanishable"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemBaseCurio, $ItemBaseCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseCurio"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MegaSponge extends $ItemBaseCurio implements $Vanishable {
static "radius": $Omniconfig$IntParameter
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "absorbWaterBlock"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $Level$Type): void
public "getCollidedWater"(arg0: $TagKey$Type<($Fluid$Type)>, arg1: $Player$Type): $BlockPos
public "getNearbyWater"(arg0: $Level$Type, arg1: $BlockPos$Type): $List<($BlockPos)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MegaSponge$Type = ($MegaSponge);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MegaSponge_ = $MegaSponge$Type;
}}
declare module "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$EnumParameter" {
import {$Omniconfig$GenericParameter, $Omniconfig$GenericParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$GenericParameter"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Omniconfig$EnumParameter<T extends $Enum<(T)>> extends $Omniconfig$GenericParameter {

constructor(arg0: T)

public "toString"(): string
public "getValue"(): T
public "setValue"(arg0: T): void
public "getDefaultValue"(): T
public "valueToString"(): string
public "parseFromString"(arg0: string): void
public "getValidValues"(): (T)[]
public "setDefaultValue"(arg0: T): void
public "setValidValues"(...arg0: (T)[]): void
get "value"(): T
set "value"(value: T)
get "defaultValue"(): T
get "validValues"(): (T)[]
set "defaultValue"(value: T)
set "validValues"(value: (T)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Omniconfig$EnumParameter$Type<T> = ($Omniconfig$EnumParameter<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Omniconfig$EnumParameter_<T> = $Omniconfig$EnumParameter$Type<(T)>;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$MiningCharm" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Omniconfig$DoubleParameter, $Omniconfig$DoubleParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$DoubleParameter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Omniconfig$BooleanParameter, $Omniconfig$BooleanParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$BooleanParameter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Omniconfig$PerhapsParameter, $Omniconfig$PerhapsParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$PerhapsParameter"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemBaseCurio, $ItemBaseCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseCurio"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MiningCharm extends $ItemBaseCurio {
static "breakSpeedBonus": $Omniconfig$PerhapsParameter
static "reachDistanceBonus": $Omniconfig$DoubleParameter
static "enableNightVision": $Omniconfig$BooleanParameter
readonly "nightVisionDuration": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getFortuneLevel"(arg0: $SlotContext$Type, arg1: $LootContext$Type, arg2: $ItemStack$Type): integer
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "removeNightVisionEffect"(arg0: $Player$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MiningCharm$Type = ($MiningCharm);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MiningCharm_ = $MiningCharm$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/api/items/$IPermanentCrystal" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPermanentCrystal {

}

export namespace $IPermanentCrystal {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPermanentCrystal$Type = ($IPermanentCrystal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPermanentCrystal_ = $IPermanentCrystal$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$AstralFruit" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICursed, $ICursed$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICursed"
import {$ItemBaseFood, $ItemBaseFood$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseFood"
import {$Vanishable, $Vanishable$Type} from "packages/net/minecraft/world/item/$Vanishable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AstralFruit extends $ItemBaseFood implements $ICursed, $Vanishable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "canEat"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "onConsumed"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AstralFruit$Type = ($AstralFruit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AstralFruit_ = $AstralFruit$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$CursedRing" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Omniconfig$IntParameter, $Omniconfig$IntParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$IntParameter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemBaseCurio, $ItemBaseCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseCurio"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Omniconfig$DoubleParameter, $Omniconfig$DoubleParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$DoubleParameter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Omniconfig$BooleanParameter, $Omniconfig$BooleanParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$BooleanParameter"
import {$Omniconfig$PerhapsParameter, $Omniconfig$PerhapsParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$PerhapsParameter"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$ICurio$DropRule, $ICurio$DropRule$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$DropRule"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CursedRing extends $ItemBaseCurio {
static "painMultiplier": $Omniconfig$PerhapsParameter
static "monsterDamageDebuff": $Omniconfig$PerhapsParameter
static "armorDebuff": $Omniconfig$PerhapsParameter
static "experienceBonus": $Omniconfig$PerhapsParameter
static "fortuneBonus": $Omniconfig$IntParameter
static "lootingBonus": $Omniconfig$IntParameter
static "enchantingBonus": $Omniconfig$IntParameter
static "knockbackDebuff": $Omniconfig$PerhapsParameter
static "neutralAngerRange": $Omniconfig$DoubleParameter
static "neutralXRayRange": $Omniconfig$DoubleParameter
static "endermenRandomportRange": $Omniconfig$DoubleParameter
static "endermenRandomportFrequency": $Omniconfig$DoubleParameter
static "saveTheBees": $Omniconfig$BooleanParameter
static "enableSpecialDrops": $Omniconfig$BooleanParameter
static "enableLore": $Omniconfig$BooleanParameter
static "concealAbilities": $Omniconfig$BooleanParameter
static "disableInsomnia": $Omniconfig$BooleanParameter
static "ultraHardcore": $Omniconfig$BooleanParameter
static "autoEquip": $Omniconfig$BooleanParameter
static readonly "neutralAngerBlacklist": $List<($ResourceLocation)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getAngerRange"(): double
public "getLootingLevel"(arg0: $SlotContext$Type, arg1: $DamageSource$Type, arg2: $LivingEntity$Type, arg3: integer, arg4: $ItemStack$Type): integer
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getFortuneLevel"(arg0: $SlotContext$Type, arg1: $LootContext$Type, arg2: $ItemStack$Type): integer
public "onEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "canUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "getDropRule"(arg0: $SlotContext$Type, arg1: $DamageSource$Type, arg2: integer, arg3: boolean, arg4: $ItemStack$Type): $ICurio$DropRule
public "onUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
public "getAttributesTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "isItemDeathPersistent"(arg0: $ItemStack$Type): boolean
get "angerRange"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CursedRing$Type = ($CursedRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CursedRing_ = $CursedRing$Type;
}}
declare module "packages/com/aizistral/etherium/items/$EtheriumShovel" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemEtheriumTool, $ItemEtheriumTool$Type} from "packages/com/aizistral/etherium/items/generic/$ItemEtheriumTool"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EtheriumShovel extends $ItemEtheriumTool {
 "effectiveTags": $Set<($TagKey<($Block)>)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtheriumShovel$Type = ($EtheriumShovel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EtheriumShovel_ = $EtheriumShovel$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$RecallPotion" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemBasePotion, $ItemBasePotion$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBasePotion"

export class $RecallPotion extends $ItemBasePotion {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onConsumed"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): void
public "canDrink"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecallPotion$Type = ($RecallPotion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecallPotion_ = $RecallPotion$Type;
}}
declare module "packages/com/aizistral/etherium/blocks/$BlockEtherium" {
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $BlockEtherium extends $Block {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
 "isRandomlyTicking": boolean
 "properties": $BlockBehaviour$Properties

constructor()

public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEtherium$Type = ($BlockEtherium);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEtherium_ = $BlockEtherium$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/api/items/$IAdvancedPotionItem" {
import {$IAdvancedPotionItem$PotionType, $IAdvancedPotionItem$PotionType$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$IAdvancedPotionItem$PotionType"

export interface $IAdvancedPotionItem {

 "getPotionType"(): $IAdvancedPotionItem$PotionType

(): $IAdvancedPotionItem$PotionType
}

export namespace $IAdvancedPotionItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAdvancedPotionItem$Type = ($IAdvancedPotionItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAdvancedPotionItem_ = $IAdvancedPotionItem$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseTool" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DiggerItem, $DiggerItem$Type} from "packages/net/minecraft/world/item/$DiggerItem"
import {$ICreativeTabMember, $ICreativeTabMember$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICreativeTabMember"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBaseTool extends $DiggerItem implements $ICreativeTabMember {
 "toolActions": $Set<($ToolAction)>
 "effectiveTags": $Set<($TagKey<($Block)>)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()
constructor(arg0: $Tier$Type)
constructor(arg0: float, arg1: float, arg2: $Tier$Type, arg3: $Item$Properties$Type, arg4: $Set$Type<($TagKey$Type<($Block$Type)>)>)

public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "getCreativeTab"(): $CreativeModeTab
public static "getDefaultProperties"(): $Item$Properties
public "getCreativeTabStacks"(): $List<($ItemStack)>
get "creativeTab"(): $CreativeModeTab
get "defaultProperties"(): $Item$Properties
get "creativeTabStacks"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBaseTool$Type = ($ItemBaseTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBaseTool_ = $ItemBaseTool$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$PetGuidebook" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Vanishable, $Vanishable$Type} from "packages/net/minecraft/world/item/$Vanishable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PetGuidebook extends $ItemBase implements $Vanishable {
static readonly "animalExclusionList": $List<($ResourceLocation)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "isTamableAnimal"(arg0: $LivingEntity$Type): boolean
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
public "isProtectedAnimal"(arg0: $LivingEntity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PetGuidebook$Type = ($PetGuidebook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PetGuidebook_ = $PetGuidebook$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$TwistedMirror" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICursed, $ICursed$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICursed"
import {$Vanishable, $Vanishable$Type} from "packages/net/minecraft/world/item/$Vanishable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TwistedMirror extends $ItemBase implements $ICursed, $Vanishable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TwistedMirror$Type = ($TwistedMirror);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TwistedMirror_ = $TwistedMirror$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$XPScroll" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Omniconfig$DoubleParameter, $Omniconfig$DoubleParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$DoubleParameter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemBaseCurio, $ItemBaseCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseCurio"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $XPScroll extends $ItemBaseCurio {
static "xpCollectionRange": $Omniconfig$DoubleParameter
readonly "xpPortion": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "trigger"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $Player$Type, arg3: $InteractionHand$Type, arg4: boolean): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XPScroll$Type = ($XPScroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $XPScroll_ = $XPScroll$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/api/quack/$IProperShieldUser" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IProperShieldUser {

 "isActuallyReallyBlocking"(): boolean

(): boolean
}

export namespace $IProperShieldUser {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IProperShieldUser$Type = ($IProperShieldUser);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IProperShieldUser_ = $IProperShieldUser$Type;
}}
declare module "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$IntParameter" {
import {$Omniconfig$GenericParameter, $Omniconfig$GenericParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$GenericParameter"

export class $Omniconfig$IntParameter extends $Omniconfig$GenericParameter {

constructor(arg0: integer)

public "toString"(): string
public "getValue"(): integer
public "setValue"(arg0: integer): void
public "getDefaultValue"(): integer
public "getMinValue"(): integer
public "getMaxValue"(): integer
public "valueToString"(): string
public "parseFromString"(arg0: string): void
public "setDefaultValue"(arg0: integer): void
public "setMinValue"(arg0: integer): void
public "setMaxValue"(arg0: integer): void
get "value"(): integer
set "value"(value: integer)
get "defaultValue"(): integer
get "minValue"(): integer
get "maxValue"(): integer
set "defaultValue"(value: integer)
set "minValue"(value: integer)
set "maxValue"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Omniconfig$IntParameter$Type = ($Omniconfig$IntParameter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Omniconfig$IntParameter_ = $Omniconfig$IntParameter$Type;
}}
declare module "packages/com/aizistral/etherium/items/$EtheriumSword" {
import {$CooldownMap, $CooldownMap$Type} from "packages/com/aizistral/enigmaticlegacy/objects/$CooldownMap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ICreativeTabMember, $ICreativeTabMember$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICreativeTabMember"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IEtheriumTool, $IEtheriumTool$Type} from "packages/com/aizistral/etherium/core/$IEtheriumTool"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IEtheriumConfig, $IEtheriumConfig$Type} from "packages/com/aizistral/etherium/core/$IEtheriumConfig"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EtheriumSword extends $SwordItem implements $IEtheriumTool, $ICreativeTabMember {
 "etheriumSwordCooldowns": $CooldownMap
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getCreativeTab"(): $CreativeModeTab
public "getConfig"(): $IEtheriumConfig
public "areaEffectsAllowed"(arg0: $ItemStack$Type): boolean
public "toggleAreaEffects"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "enableAreaEffects"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "areaEffectsEnabled"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
public "disableAreaEffects"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "getCreativeTabStacks"(): $List<($ItemStack)>
get "creativeTab"(): $CreativeModeTab
get "config"(): $IEtheriumConfig
get "creativeTabStacks"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtheriumSword$Type = ($EtheriumSword);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EtheriumSword_ = $EtheriumSword$Type;
}}
declare module "packages/com/aizistral/omniconfig/$Property$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Property$Type extends $Enum<($Property$Type)> {
static readonly "STRING": $Property$Type
static readonly "INTEGER": $Property$Type
static readonly "BOOLEAN": $Property$Type
static readonly "DOUBLE": $Property$Type
static readonly "COLOR": $Property$Type
static readonly "MOD_ID": $Property$Type


public static "values"(): ($Property$Type)[]
public static "valueOf"(arg0: string): $Property$Type
public "getID"(): character
public static "tryParse"(arg0: character): $Property$Type
get "iD"(): character
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Property$Type$Type = (("boolean") | ("mod_id") | ("string") | ("color") | ("double") | ("integer")) | ($Property$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Property$Type_ = $Property$Type$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ICreativeTabMember, $ICreativeTabMember$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICreativeTabMember"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ClipContext$Fluid, $ClipContext$Fluid$Type} from "packages/net/minecraft/world/level/$ClipContext$Fluid"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBase extends $Item implements $ICreativeTabMember {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()
constructor(arg0: $Item$Properties$Type)

public "onCraftedBy"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "setPlaceholder"(): $Item
public "getCreativeTab"(): $CreativeModeTab
public "isPlaceholder"(): boolean
public static "rayTrace"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ClipContext$Fluid$Type): $BlockHitResult
public static "getDefaultProperties"(): $Item$Properties
public "getCreativeTabStacks"(): $List<($ItemStack)>
get "creativeTab"(): $CreativeModeTab
get "placeholder"(): boolean
get "defaultProperties"(): $Item$Properties
get "creativeTabStacks"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBase$Type = ($ItemBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBase_ = $ItemBase$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/crafting/$CursedShapedRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $CursedShapedRecipe extends $ShapedRecipe {
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: integer, arg4: integer, arg5: $NonNullList$Type<($Ingredient$Type)>, arg6: $ItemStack$Type)

public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CursedShapedRecipe$Type = ($CursedShapedRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CursedShapedRecipe_ = $CursedShapedRecipe$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$EndAnchor" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$GenericBlockItem, $GenericBlockItem$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$GenericBlockItem"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Omniconfig$BooleanParameter, $Omniconfig$BooleanParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$BooleanParameter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Omniconfig$PerhapsParameter, $Omniconfig$PerhapsParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$PerhapsParameter"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AnchorSearchResult, $AnchorSearchResult$Type} from "packages/com/aizistral/enigmaticlegacy/objects/$AnchorSearchResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EndAnchor extends $GenericBlockItem {
static "endExclusiveMode": $Omniconfig$BooleanParameter
static "chargeSaveChance": $Omniconfig$PerhapsParameter
static readonly "DIMENSION_BLACKLIST": $List<($ResourceLocation)>
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public static "findEndAnchor"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: float, arg3: boolean, arg4: boolean): $AnchorSearchResult
public static "useEndAnchor"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public static "findAndUseEndAnchor"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: float, arg3: boolean, arg4: boolean): $AnchorSearchResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndAnchor$Type = ($EndAnchor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndAnchor_ = $EndAnchor$Type;
}}
declare module "packages/com/aizistral/etherium/items/$EtheriumScythe" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ICreativeTabMember, $ICreativeTabMember$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICreativeTabMember"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IEtheriumTool, $IEtheriumTool$Type} from "packages/com/aizistral/etherium/core/$IEtheriumTool"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IEtheriumConfig, $IEtheriumConfig$Type} from "packages/com/aizistral/etherium/core/$IEtheriumConfig"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EtheriumScythe extends $SwordItem implements $IEtheriumTool, $ICreativeTabMember {
 "effectiveTags": $Set<($TagKey<($Block)>)>
 "effectiveBlocks": $Set<($Block)>
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "getCreativeTab"(): $CreativeModeTab
public "getConfig"(): $IEtheriumConfig
public "areaEffectsAllowed"(arg0: $ItemStack$Type): boolean
public "toggleAreaEffects"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "enableAreaEffects"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "areaEffectsEnabled"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
public "disableAreaEffects"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "getCreativeTabStacks"(): $List<($ItemStack)>
get "creativeTab"(): $CreativeModeTab
get "config"(): $IEtheriumConfig
get "creativeTabStacks"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtheriumScythe$Type = ($EtheriumScythe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EtheriumScythe_ = $EtheriumScythe$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$CosmicScroll" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$Omniconfig$IntParameter, $Omniconfig$IntParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$IntParameter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemBaseCurio, $ItemBaseCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseCurio"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$IHidden, $IHidden$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$IHidden"
import {$PlayerEvent$PlayerLoggedInEvent, $PlayerEvent$PlayerLoggedInEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerEvent$PlayerLoggedInEvent"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemTooltipEvent, $ItemTooltipEvent$Type} from "packages/net/minecraftforge/event/entity/player/$ItemTooltipEvent"
import {$Omniconfig$PerhapsParameter, $Omniconfig$PerhapsParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$PerhapsParameter"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CosmicScroll extends $ItemBaseCurio implements $IHidden {
static "unchosenDamageBonus": $Omniconfig$PerhapsParameter
static "unchosenKnockbackBonus": $Omniconfig$PerhapsParameter
static "etheriumShieldThreshold": $Omniconfig$PerhapsParameter
static "deathProtectionCooldown": $Omniconfig$IntParameter
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "onPlayerJoin"(arg0: $PlayerEvent$PlayerLoggedInEvent$Type): void
public "onLivingDeath"(arg0: $LivingDeathEvent$Type): void
public "setCooldown"(arg0: $ItemStack$Type, arg1: integer): void
public "getCooldown"(arg0: $ItemStack$Type): integer
public "hasCooldown"(arg0: $ItemStack$Type): boolean
public static "handleConfig"(arg0: $OmniconfigWrapper$Type): void
public "onTooltip"(arg0: $ItemTooltipEvent$Type): void
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getCreativeTab"(): $CreativeModeTab
public "onEntityHurt"(arg0: $LivingHurtEvent$Type): void
public "getAttributesTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
get "creativeTab"(): $CreativeModeTab
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmicScroll$Type = ($CosmicScroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmicScroll_ = $CosmicScroll$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$Insignia" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemBaseCurio, $ItemBaseCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseCurio"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Insignia extends $ItemBaseCurio {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "canSeeTrueName"(arg0: $Player$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "getCustomName"(arg0: $ItemStack$Type): $Optional<($Component)>
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Insignia$Type = ($Insignia);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Insignia_ = $Insignia$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$LoreFragment" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LoreFragment extends $ItemBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoreFragment$Type = ($LoreFragment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoreFragment_ = $LoreFragment$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/api/quack/$IAbyssalHeartBearer" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $IAbyssalHeartBearer {

 "dropAbyssalHeart"(arg0: $Player$Type): void

(arg0: $Player$Type): void
}

export namespace $IAbyssalHeartBearer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAbyssalHeartBearer$Type = ($IAbyssalHeartBearer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAbyssalHeartBearer_ = $IAbyssalHeartBearer$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$QuotePlayer" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IHidden, $IHidden$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$IHidden"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $QuotePlayer extends $ItemBase implements $IHidden {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuotePlayer$Type = ($QuotePlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuotePlayer_ = $QuotePlayer$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$HunterGuidebook" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Omniconfig$IntParameter, $Omniconfig$IntParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$IntParameter"
import {$Vanishable, $Vanishable$Type} from "packages/net/minecraft/world/item/$Vanishable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Omniconfig$PerhapsParameter, $Omniconfig$PerhapsParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$PerhapsParameter"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HunterGuidebook extends $ItemBase implements $Vanishable {
static "effectiveDistance": $Omniconfig$IntParameter
static "synergyDamageReduction": $Omniconfig$PerhapsParameter
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HunterGuidebook$Type = ($HunterGuidebook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HunterGuidebook_ = $HunterGuidebook$Type;
}}
declare module "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$GenericParameter" {
import {$Configuration, $Configuration$Type} from "packages/com/aizistral/omniconfig/$Configuration"

export class $Omniconfig$GenericParameter {

constructor()

public "invoke"(arg0: $Configuration$Type): $Omniconfig$GenericParameter
public "getName"(): string
public "setName"(arg0: string): void
public "getId"(): string
public "isSynchronized"(): boolean
public "getComment"(): string
public "setComment"(arg0: string): void
public "getCategory"(): string
public "setCategory"(arg0: string): void
public "valueToString"(): string
public "parseFromString"(arg0: string): void
public "isClientOnly"(): boolean
public "setClientOnly"(arg0: boolean): void
public "setSynchronized"(arg0: boolean): void
get "name"(): string
set "name"(value: string)
get "id"(): string
get "synchronized"(): boolean
get "comment"(): string
set "comment"(value: string)
get "category"(): string
set "category"(value: string)
get "clientOnly"(): boolean
set "clientOnly"(value: boolean)
set "synchronized"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Omniconfig$GenericParameter$Type = ($Omniconfig$GenericParameter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Omniconfig$GenericParameter_ = $Omniconfig$GenericParameter$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$EnderSlayer" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICursed, $ICursed$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICursed"
import {$Omniconfig$DoubleParameter, $Omniconfig$DoubleParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$DoubleParameter"
import {$Omniconfig$IntParameter, $Omniconfig$IntParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$IntParameter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Omniconfig$PerhapsParameter, $Omniconfig$PerhapsParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$PerhapsParameter"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnderSlayer extends $SwordItem implements $ICursed {
static readonly "endDwellers": $List<($ResourceLocation)>
static "attackDamage": $Omniconfig$IntParameter
static "attackSpeed": $Omniconfig$DoubleParameter
static "endDamageBonus": $Omniconfig$PerhapsParameter
static "endKnockbackBonus": $Omniconfig$PerhapsParameter
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "isEndDweller"(arg0: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderSlayer$Type = ($EnderSlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderSlayer_ = $EnderSlayer$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$ForbiddenFruit" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Omniconfig$DoubleParameter, $Omniconfig$DoubleParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$DoubleParameter"
import {$Vanishable, $Vanishable$Type} from "packages/net/minecraft/world/item/$Vanishable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Omniconfig$BooleanParameter, $Omniconfig$BooleanParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$BooleanParameter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Omniconfig$PerhapsParameter, $Omniconfig$PerhapsParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$PerhapsParameter"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ForbiddenFruit extends $ItemBase implements $Vanishable {
static readonly "consumedFruitTag": string
static "regenerationSubtraction": $Omniconfig$PerhapsParameter
static "debuffDurationMultiplier": $Omniconfig$DoubleParameter
static "renderHungerBar": $Omniconfig$BooleanParameter
static "replaceHungerBar": $Omniconfig$BooleanParameter
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "canEat"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): boolean
public "haveConsumedFruit"(arg0: $Player$Type): boolean
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "defineConsumedFruit"(arg0: $Player$Type, arg1: boolean): void
public "onConsumed"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForbiddenFruit$Type = ($ForbiddenFruit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForbiddenFruit_ = $ForbiddenFruit$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/crafting/$BlessedShapedRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$BlessedShapedRecipe, $BlessedShapedRecipe$Type} from "packages/com/aizistral/enigmaticlegacy/crafting/$BlessedShapedRecipe"

export class $BlessedShapedRecipe$Serializer implements $RecipeSerializer<($BlessedShapedRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $BlessedShapedRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $BlessedShapedRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $BlessedShapedRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $BlessedShapedRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlessedShapedRecipe$Serializer$Type = ($BlessedShapedRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlessedShapedRecipe$Serializer_ = $BlessedShapedRecipe$Serializer$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$DesolationRing" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemBaseCurio, $ItemBaseCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseCurio"
import {$ICurio$DropRule, $ICurio$DropRule$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$DropRule"
import {$IEldritch, $IEldritch$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$IEldritch"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DesolationRing extends $ItemBaseCurio implements $IEldritch {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "canUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "getDropRule"(arg0: $SlotContext$Type, arg1: $DamageSource$Type, arg2: integer, arg3: boolean, arg4: $ItemStack$Type): $ICurio$DropRule
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DesolationRing$Type = ($DesolationRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DesolationRing_ = $DesolationRing$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$EyeOfNebula" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemSpellstoneCurio, $ItemSpellstoneCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemSpellstoneCurio"
import {$Omniconfig$DoubleParameter, $Omniconfig$DoubleParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$DoubleParameter"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Omniconfig$IntParameter, $Omniconfig$IntParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$IntParameter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Omniconfig$BooleanParameter, $Omniconfig$BooleanParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$BooleanParameter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Omniconfig$PerhapsParameter, $Omniconfig$PerhapsParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$PerhapsParameter"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DamageType, $DamageType$Type} from "packages/net/minecraft/world/damagesource/$DamageType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$ISpellstone, $ISpellstone$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ISpellstone"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EyeOfNebula extends $ItemSpellstoneCurio implements $ISpellstone {
static "spellstoneCooldown": $Omniconfig$IntParameter
static "dodgeProbability": $Omniconfig$PerhapsParameter
static "dodgeRange": $Omniconfig$DoubleParameter
static "phaseRange": $Omniconfig$DoubleParameter
static "magicResistance": $Omniconfig$PerhapsParameter
static "magicBoost": $Omniconfig$PerhapsParameter
static "attackEmpower": $Omniconfig$PerhapsParameter
static "multiequip": $Omniconfig$BooleanParameter
static "reducedCooldowns": $Predicate<($Player)>
 "immunityList": $List<($ResourceKey<($DamageType)>)>
 "resistanceList": $HashMap<($ResourceKey<($DamageType)>), ($Supplier<(float)>)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getCooldown"(arg0: $Player$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
public "triggerActiveAbility"(arg0: $Level$Type, arg1: $ServerPlayer$Type, arg2: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EyeOfNebula$Type = ($EyeOfNebula);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EyeOfNebula_ = $EyeOfNebula$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$AngelBlessing" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Omniconfig$IntParameter, $Omniconfig$IntParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$IntParameter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemSpellstoneCurio, $ItemSpellstoneCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemSpellstoneCurio"
import {$Omniconfig$DoubleParameter, $Omniconfig$DoubleParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$DoubleParameter"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Omniconfig$BooleanParameter, $Omniconfig$BooleanParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$BooleanParameter"
import {$Omniconfig$PerhapsParameter, $Omniconfig$PerhapsParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$PerhapsParameter"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$DamageType, $DamageType$Type} from "packages/net/minecraft/world/damagesource/$DamageType"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AngelBlessing extends $ItemSpellstoneCurio {
static "spellstoneCooldown": $Omniconfig$IntParameter
static "accelerationModifier": $Omniconfig$DoubleParameter
static "accelerationModifierElytra": $Omniconfig$DoubleParameter
static "deflectChance": $Omniconfig$PerhapsParameter
static "multiequip": $Omniconfig$BooleanParameter
static "reducedCooldowns": $Predicate<($Player)>
 "immunityList": $List<($ResourceKey<($DamageType)>)>
 "resistanceList": $HashMap<($ResourceKey<($DamageType)>), ($Supplier<(float)>)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "redirect"(arg0: $LivingEntity$Type, arg1: $Entity$Type): void
public "getCooldown"(arg0: $Player$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
public "triggerActiveAbility"(arg0: $Level$Type, arg1: $ServerPlayer$Type, arg2: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AngelBlessing$Type = ($AngelBlessing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AngelBlessing_ = $AngelBlessing$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$AbyssalHeart" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IEldritch, $IEldritch$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$IEldritch"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbyssalHeart extends $ItemBase implements $IEldritch {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbyssalHeart$Type = ($AbyssalHeart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbyssalHeart_ = $AbyssalHeart$Type;
}}
declare module "packages/com/aizistral/omniconfig/$Property" {
import {$Property$Type, $Property$Type$Type} from "packages/com/aizistral/omniconfig/$Property$Type"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"

export class $Property {
 "comment": string
 "initialized": boolean

constructor(arg0: string, arg1: (string)[], arg2: $Property$Type$Type, arg3: string)
constructor(arg0: string, arg1: (string)[], arg2: $Property$Type$Type)
constructor(arg0: string, arg1: string, arg2: $Property$Type$Type)
constructor(arg0: string, arg1: string, arg2: $Property$Type$Type, arg3: boolean)
constructor(arg0: string, arg1: string, arg2: $Property$Type$Type, arg3: (string)[])
constructor(arg0: string, arg1: string, arg2: $Property$Type$Type, arg3: string)
constructor(arg0: string, arg1: string, arg2: $Property$Type$Type, arg3: (string)[], arg4: string)
constructor(arg0: string, arg1: string, arg2: $Property$Type$Type, arg3: boolean, arg4: string)

public "getName"(): string
public "getBoolean"(arg0: boolean): boolean
public "getBoolean"(): boolean
public "getInt"(arg0: integer): integer
public "getInt"(): integer
public "getDouble"(arg0: double): double
public "getDouble"(): double
public "getDefault"(): string
public "set"(arg0: (double)[]): void
public "set"(arg0: integer): void
public "set"(arg0: boolean): void
public "set"(arg0: double): void
public "set"(arg0: string): void
public "set"(arg0: (string)[]): void
public "set"(arg0: (boolean)[]): void
public "set"(arg0: (integer)[]): void
public "setName"(arg0: string): void
public "setValue"(arg0: string): $Property
public "setValue"(arg0: double): $Property
public "setValue"(arg0: boolean): $Property
public "setValue"(arg0: integer): $Property
public "getType"(): $Property$Type
public "isDefault"(): boolean
public "isIntValue"(): boolean
public "getString"(): string
public "getDefaults"(): (string)[]
public "getValidationPattern"(): $Pattern
public "getMinValue"(): string
public "getMaxValue"(): string
public "setToDefault"(): $Property
public "setValues"(arg0: (integer)[]): $Property
public "setValues"(arg0: (double)[]): $Property
public "setValues"(arg0: (string)[]): $Property
public "setValues"(arg0: (boolean)[]): $Property
public "wasRead"(): boolean
public "getBooleanList"(): (boolean)[]
public "getLanguageKey"(): string
public "getIntList"(): (integer)[]
public "getValidValues"(): (string)[]
public "getDoubleList"(): (double)[]
public "getMaxListLength"(): integer
public "setMaxListLength"(arg0: integer): $Property
public "setDefaultValues"(arg0: (boolean)[]): $Property
public "setDefaultValues"(arg0: (integer)[]): $Property
public "setDefaultValues"(arg0: (string)[]): $Property
public "setDefaultValues"(arg0: (double)[]): $Property
public "isBooleanValue"(): boolean
public "isBooleanList"(): boolean
public "isListLengthFixed"(): boolean
public "setDefaultValue"(arg0: string): $Property
public "setDefaultValue"(arg0: integer): $Property
public "setDefaultValue"(arg0: double): $Property
public "setDefaultValue"(arg0: boolean): $Property
public "setMinValue"(arg0: double): $Property
public "setMinValue"(arg0: integer): $Property
public "setMaxValue"(arg0: double): $Property
public "setMaxValue"(arg0: integer): $Property
public "isDoubleList"(): boolean
public "isDoubleValue"(): boolean
public "setValidValues"(arg0: (string)[]): $Property
public "isIntList"(): boolean
public "requiresMcRestart"(): boolean
public "setLanguageKey"(arg0: string): $Property
public "getStringList"(): (string)[]
public "setIsListLengthFixed"(arg0: boolean): $Property
public "setRequiresWorldRestart"(arg0: boolean): $Property
public "setValidationPattern"(arg0: $Pattern$Type): $Property
public "setRequiresMcRestart"(arg0: boolean): $Property
public "requiresWorldRestart"(): boolean
public "hasChanged"(): boolean
public "showInGui"(): boolean
public "setShowInGui"(arg0: boolean): $Property
public "isList"(): boolean
public "setAllowReload"(arg0: boolean): void
public "isReloadAllowed"(): boolean
get "name"(): string
get "boolean"(): boolean
get "int"(): integer
get "double"(): double
get "default"(): string
set "name"(value: string)
set "value"(value: string)
set "value"(value: double)
set "value"(value: boolean)
set "value"(value: integer)
get "type"(): $Property$Type
get "default"(): boolean
get "intValue"(): boolean
get "string"(): string
get "defaults"(): (string)[]
get "validationPattern"(): $Pattern
get "minValue"(): string
get "maxValue"(): string
set "values"(value: (integer)[])
set "values"(value: (double)[])
set "values"(value: (string)[])
set "values"(value: (boolean)[])
get "booleanList"(): (boolean)[]
get "languageKey"(): string
get "intList"(): (integer)[]
get "validValues"(): (string)[]
get "doubleList"(): (double)[]
get "maxListLength"(): integer
set "maxListLength"(value: integer)
set "defaultValues"(value: (boolean)[])
set "defaultValues"(value: (integer)[])
set "defaultValues"(value: (string)[])
set "defaultValues"(value: (double)[])
get "booleanValue"(): boolean
get "booleanList"(): boolean
get "listLengthFixed"(): boolean
set "defaultValue"(value: string)
set "defaultValue"(value: integer)
set "defaultValue"(value: double)
set "defaultValue"(value: boolean)
set "minValue"(value: double)
set "minValue"(value: integer)
set "maxValue"(value: double)
set "maxValue"(value: integer)
get "doubleList"(): boolean
get "doubleValue"(): boolean
set "validValues"(value: (string)[])
get "intList"(): boolean
set "languageKey"(value: string)
get "stringList"(): (string)[]
set "validationPattern"(value: $Pattern$Type)
get "list"(): boolean
set "allowReload"(value: boolean)
get "reloadAllowed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Property$Type = ($Property);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Property_ = $Property$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/enchantments/$NemesisCurse" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $NemesisCurse extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor(...arg0: ($EquipmentSlot$Type)[])

public "getMaxLevel"(): integer
public "isDiscoverable"(): boolean
public "isTreasureOnly"(): boolean
public "isAllowedOnBooks"(): boolean
public "getMinLevel"(): integer
public "canEnchant"(arg0: $ItemStack$Type): boolean
public "getMinCost"(arg0: integer): integer
public "isCurse"(): boolean
public "getMaxCost"(arg0: integer): integer
get "maxLevel"(): integer
get "discoverable"(): boolean
get "treasureOnly"(): boolean
get "allowedOnBooks"(): boolean
get "minLevel"(): integer
get "curse"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NemesisCurse$Type = ($NemesisCurse);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NemesisCurse_ = $NemesisCurse$Type;
}}
declare module "packages/com/aizistral/etherium/items/$EtheriumOre" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICreativeTabMember, $ICreativeTabMember$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICreativeTabMember"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EtheriumOre extends $Item implements $ICreativeTabMember {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getCreativeTab"(): $CreativeModeTab
public "getCreativeTabStacks"(): $List<($ItemStack)>
get "creativeTab"(): $CreativeModeTab
get "creativeTabStacks"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtheriumOre$Type = ($EtheriumOre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EtheriumOre_ = $EtheriumOre$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/blocks/$BlockEndAnchor" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$CollisionGetter, $CollisionGetter$Type} from "packages/net/minecraft/world/level/$CollisionGetter"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BlockEndAnchor extends $BaseEntityBlock {
static readonly "MIN_CHARGES": integer
static readonly "MAX_CHARGES": integer
static readonly "CHARGE": $IntegerProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
 "isRandomlyTicking": boolean
 "properties": $BlockBehaviour$Properties

constructor()

public static "charge"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public static "getScaledChargeLevel"(arg0: $BlockState$Type, arg1: integer): integer
public static "findStandUpPosition"(arg0: $EntityType$Type<(any)>, arg1: $CollisionGetter$Type, arg2: $BlockPos$Type): $Optional<($Vec3)>
public static "canSetSpawn"(arg0: $Level$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEndAnchor$Type = ($BlockEndAnchor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEndAnchor_ = $BlockEndAnchor$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$MagnetRing" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Omniconfig$IntParameter, $Omniconfig$IntParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$IntParameter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Omniconfig$BooleanParameter, $Omniconfig$BooleanParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$BooleanParameter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemBaseCurio, $ItemBaseCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseCurio"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MagnetRing extends $ItemBaseCurio {
static readonly "disabledMagnetTag": string
static "range": $Omniconfig$IntParameter
static "invertShift": $Omniconfig$BooleanParameter
static "inventoryButtonEnabled": $Omniconfig$BooleanParameter
static "buttonOffsetX": $Omniconfig$IntParameter
static "buttonOffsetY": $Omniconfig$IntParameter
static "buttonOffsetXCreative": $Omniconfig$IntParameter
static "buttonOffsetYCreative": $Omniconfig$IntParameter
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)
constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
public "hasMagnetEffectsDisabled"(arg0: $Player$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagnetRing$Type = ($MagnetRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagnetRing_ = $MagnetRing$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/api/items/$IEldritch" {
import {$ICursed, $ICursed$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICursed"

export interface $IEldritch extends $ICursed {

}

export namespace $IEldritch {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEldritch$Type = ($IEldritch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEldritch_ = $IEldritch$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/enchantments/$SorrowCurse" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $SorrowCurse extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor(...arg0: ($EquipmentSlot$Type)[])

public "maybeApplyDebuff"(arg0: $Player$Type, arg1: float): void
public "getMaxLevel"(): integer
public "isDiscoverable"(): boolean
public "isTreasureOnly"(): boolean
public "isAllowedOnBooks"(): boolean
public "getMinLevel"(): integer
public "canEnchant"(arg0: $ItemStack$Type): boolean
public "getMinCost"(arg0: integer): integer
public "isCurse"(): boolean
public "getMaxCost"(arg0: integer): integer
get "maxLevel"(): integer
get "discoverable"(): boolean
get "treasureOnly"(): boolean
get "allowedOnBooks"(): boolean
get "minLevel"(): integer
get "curse"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SorrowCurse$Type = ($SorrowCurse);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SorrowCurse_ = $SorrowCurse$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$TwistedHeart" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICursed, $ICursed$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICursed"
import {$Vanishable, $Vanishable$Type} from "packages/net/minecraft/world/item/$Vanishable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TwistedHeart extends $ItemBase implements $ICursed, $Vanishable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TwistedHeart$Type = ($TwistedHeart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TwistedHeart_ = $TwistedHeart$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$UltimatePotionSplash" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$IAdvancedPotionItem$PotionType, $IAdvancedPotionItem$PotionType$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$IAdvancedPotionItem$PotionType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IAdvancedPotionItem, $IAdvancedPotionItem$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$IAdvancedPotionItem"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UltimatePotionSplash extends $ItemBase implements $IAdvancedPotionItem {
 "potionType": $IAdvancedPotionItem$PotionType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Rarity$Type, arg1: $IAdvancedPotionItem$PotionType$Type)

public "getDefaultInstance"(): $ItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getDescriptionId"(arg0: $ItemStack$Type): string
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getPotionType"(): $IAdvancedPotionItem$PotionType
public "getCreativeTab"(): $CreativeModeTab
public "getCreativeTabStacks"(): $List<($ItemStack)>
get "defaultInstance"(): $ItemStack
get "potionType"(): $IAdvancedPotionItem$PotionType
get "creativeTab"(): $CreativeModeTab
get "creativeTabStacks"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UltimatePotionSplash$Type = ($UltimatePotionSplash);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UltimatePotionSplash_ = $UltimatePotionSplash$Type;
}}
declare module "packages/com/aizistral/etherium/items/generic/$ItemEtheriumTool" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DiggerItem, $DiggerItem$Type} from "packages/net/minecraft/world/item/$DiggerItem"
import {$ICreativeTabMember, $ICreativeTabMember$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICreativeTabMember"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IEtheriumConfig, $IEtheriumConfig$Type} from "packages/com/aizistral/etherium/core/$IEtheriumConfig"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$IEtheriumTool, $IEtheriumTool$Type} from "packages/com/aizistral/etherium/core/$IEtheriumTool"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemEtheriumTool extends $DiggerItem implements $IEtheriumTool, $ICreativeTabMember {
 "effectiveTags": $Set<($TagKey<($Block)>)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: float, arg1: float, arg2: $TagKey$Type<($Block$Type)>, arg3: $Item$Properties$Type)

public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "getCreativeTab"(): $CreativeModeTab
public "getConfig"(): $IEtheriumConfig
public "areaEffectsAllowed"(arg0: $ItemStack$Type): boolean
public "toggleAreaEffects"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "enableAreaEffects"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "areaEffectsEnabled"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
public "disableAreaEffects"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "getCreativeTabStacks"(): $List<($ItemStack)>
get "creativeTab"(): $CreativeModeTab
get "config"(): $IEtheriumConfig
get "creativeTabStacks"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEtheriumTool$Type = ($ItemEtheriumTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEtheriumTool_ = $ItemEtheriumTool$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$IchorBottle" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemBasePotion, $ItemBasePotion$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBasePotion"

export class $IchorBottle extends $ItemBasePotion {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "onConsumed"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): void
public "canDrink"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IchorBottle$Type = ($IchorBottle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IchorBottle_ = $IchorBottle$Type;
}}
declare module "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper" {
import {$Omniconfig$StringParameter, $Omniconfig$StringParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$StringParameter"
import {$Omniconfig$GenericParameter, $Omniconfig$GenericParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$GenericParameter"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Omniconfig$DoubleParameter, $Omniconfig$DoubleParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$DoubleParameter"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Omniconfig$IntParameter, $Omniconfig$IntParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$IntParameter"
import {$Omniconfig$BooleanParameter, $Omniconfig$BooleanParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$BooleanParameter"
import {$Configuration$SidedConfigType, $Configuration$SidedConfigType$Type} from "packages/com/aizistral/omniconfig/$Configuration$SidedConfigType"
import {$Omniconfig$EnumParameter, $Omniconfig$EnumParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$EnumParameter"
import {$Omniconfig$PerhapsParameter, $Omniconfig$PerhapsParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$PerhapsParameter"
import {$Configuration$VersioningPolicy, $Configuration$VersioningPolicy$Type} from "packages/com/aizistral/omniconfig/$Configuration$VersioningPolicy"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$File, $File$Type} from "packages/java/io/$File"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Configuration, $Configuration$Type} from "packages/com/aizistral/omniconfig/$Configuration"

export class $OmniconfigWrapper {
static readonly "wrapperRegistry": $Map<(string), ($OmniconfigWrapper)>
static "onRemoteServer": boolean
readonly "config": $Configuration
readonly "invokationMap": $Map<(string), ($Omniconfig$GenericParameter)>


public "build"(): $Configuration
public "sync"(arg0: boolean): $OmniconfigWrapper
public "sync"(): $OmniconfigWrapper
public "min"(arg0: double): $OmniconfigWrapper
public "max"(arg0: double): $OmniconfigWrapper
public "getBoolean"(arg0: string, arg1: boolean): $Omniconfig$BooleanParameter
public "getInt"(arg0: string, arg1: integer): $Omniconfig$IntParameter
public "getDouble"(arg0: string, arg1: double): $Omniconfig$DoubleParameter
public "comment"(arg0: string): $OmniconfigWrapper
public "getString"(arg0: string, arg1: string, ...arg2: (string)[]): $Omniconfig$StringParameter
public "getString"(arg0: string, arg1: string): $Omniconfig$StringParameter
public "getEnum"<V extends $Enum<(V)>>(arg0: string, arg1: V, ...arg2: (V)[]): $Omniconfig$EnumParameter<(V)>
public "getEnum"<V extends $Enum<(V)>>(arg0: string, arg1: V): $Omniconfig$EnumParameter<(V)>
public "isClientOnly"(): boolean
public "minMax"(arg0: double): $OmniconfigWrapper
public "clientOnly"(arg0: boolean): $OmniconfigWrapper
public "clientOnly"(): $OmniconfigWrapper
public "pushPrefix"(arg0: string): $OmniconfigWrapper
public "popPrefix"(): $OmniconfigWrapper
public "isInvokationDeferred"(): boolean
public "pushGenericOverloadingAction"(): $OmniconfigWrapper
public "pushOverloadingAction"(arg0: $Consumer$Type<($Configuration$Type)>): $OmniconfigWrapper
public static "syncWrapperToPlayer"(arg0: $OmniconfigWrapper$Type, arg1: $ServerPlayer$Type): boolean
public "isForceSynchronized"(): boolean
public "retrieveInvocationList"(): $Collection<($Omniconfig$GenericParameter)>
public "pushVersioningPolicy"(arg0: $Configuration$VersioningPolicy$Type): $OmniconfigWrapper
public "pushTerminateNonInvokedKeys"(arg0: boolean): $OmniconfigWrapper
public "pushBeholderAttachment"(): $OmniconfigWrapper
public "loadConfigFile"(): $OmniconfigWrapper
public "pushCategory"(arg0: string): $OmniconfigWrapper
public "pushCategory"(arg0: string, arg1: string): $OmniconfigWrapper
public "pushSidedType"(arg0: $Configuration$SidedConfigType$Type): $OmniconfigWrapper
public "forceSynchronized"(arg0: boolean): void
public static "setupBuilder"(arg0: string): $OmniconfigWrapper
public static "setupBuilder"(arg0: string, arg1: boolean, arg2: string): $OmniconfigWrapper
public static "setupBuilder"(arg0: string, arg1: string): $OmniconfigWrapper
public static "setupBuilder"(arg0: $File$Type, arg1: string): $OmniconfigWrapper
public static "setupBuilder"(arg0: $File$Type): $OmniconfigWrapper
public static "setupBuilder"(arg0: $File$Type, arg1: boolean, arg2: string): $OmniconfigWrapper
public static "setupBuilder"(arg0: $Configuration$Type): $OmniconfigWrapper
public "popCategory"(): $OmniconfigWrapper
public "setReloadable"(): $OmniconfigWrapper
public "deferInvocation"(arg0: boolean): void
public "getCurrentCategory"(): string
public static "syncAllToPlayer"(arg0: $ServerPlayer$Type): boolean
public "setDefaultMax"(arg0: double): void
public "setDefaultMin"(arg0: double): void
public "nosync"(): $OmniconfigWrapper
public "getPerhaps"(arg0: string, arg1: integer): $Omniconfig$PerhapsParameter
get "invokationDeferred"(): boolean
set "upBuilder"(value: string)
set "upBuilder"(value: $File$Type)
set "upBuilder"(value: $Configuration$Type)
get "currentCategory"(): string
set "defaultMax"(value: double)
set "defaultMin"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OmniconfigWrapper$Type = ($OmniconfigWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OmniconfigWrapper_ = $OmniconfigWrapper$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseFood" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBaseFood extends $ItemBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()
constructor(arg0: $Item$Properties$Type, arg1: $FoodProperties$Type)

public "canEat"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): boolean
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "onConsumed"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBaseFood$Type = ($ItemBaseFood);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBaseFood_ = $ItemBaseFood$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$Infinimeal" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Vanishable, $Vanishable$Type} from "packages/net/minecraft/world/item/$Vanishable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Infinimeal extends $ItemBase implements $Vanishable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Infinimeal$Type = ($Infinimeal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Infinimeal_ = $Infinimeal$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$RedemptionPotion" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemBasePotion, $ItemBasePotion$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBasePotion"

export class $RedemptionPotion extends $ItemBasePotion {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onConsumed"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): void
public "canDrink"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedemptionPotion$Type = ($RedemptionPotion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedemptionPotion_ = $RedemptionPotion$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$SuperMagnetRing" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MagnetRing, $MagnetRing$Type} from "packages/com/aizistral/enigmaticlegacy/items/$MagnetRing"
import {$Omniconfig$IntParameter, $Omniconfig$IntParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$IntParameter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Omniconfig$BooleanParameter, $Omniconfig$BooleanParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$BooleanParameter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SuperMagnetRing extends $MagnetRing {
static "range": $Omniconfig$IntParameter
static "soundEnabled": $Omniconfig$BooleanParameter
static readonly "disabledMagnetTag": string
static "invertShift": $Omniconfig$BooleanParameter
static "inventoryButtonEnabled": $Omniconfig$BooleanParameter
static "buttonOffsetX": $Omniconfig$IntParameter
static "buttonOffsetY": $Omniconfig$IntParameter
static "buttonOffsetXCreative": $Omniconfig$IntParameter
static "buttonOffsetYCreative": $Omniconfig$IntParameter
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuperMagnetRing$Type = ($SuperMagnetRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SuperMagnetRing_ = $SuperMagnetRing$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$SoulDust" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICursed, $ICursed$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICursed"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SoulDust extends $ItemBase implements $ICursed {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulDust$Type = ($SoulDust);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulDust_ = $SoulDust$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$EnchanterPearl" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICursed, $ICursed$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICursed"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemBaseCurio, $ItemBaseCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseCurio"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnchanterPearl extends $ItemBaseCurio implements $ICursed {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "isPresent"(arg0: $Player$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "getAttributesTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchanterPearl$Type = ($EnchanterPearl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchanterPearl_ = $EnchanterPearl$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/enchantments/$SlayerEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $SlayerEnchantment extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor(...arg0: ($EquipmentSlot$Type)[])

public "getMaxLevel"(): integer
public "isDiscoverable"(): boolean
public "isAllowedOnBooks"(): boolean
public "canEnchant"(arg0: $ItemStack$Type): boolean
public "getMinCost"(arg0: integer): integer
public "m_5975_"(arg0: $Enchantment$Type): boolean
public "getMaxCost"(arg0: integer): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "bonusDamageByCreature"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: integer): float
get "maxLevel"(): integer
get "discoverable"(): boolean
get "allowedOnBooks"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlayerEnchantment$Type = ($SlayerEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlayerEnchantment_ = $SlayerEnchantment$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$GuardianHeart" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICursed, $ICursed$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICursed"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Omniconfig$IntParameter, $Omniconfig$IntParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$IntParameter"
import {$Vanishable, $Vanishable$Type} from "packages/net/minecraft/world/item/$Vanishable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $GuardianHeart extends $ItemBase implements $ICursed, $Vanishable {
static readonly "excludedMobs": $List<($Class<(any)>)>
static "abilityRange": $Omniconfig$IntParameter
static "enrageRange": $Omniconfig$IntParameter
static "abilityCooldown": $Omniconfig$IntParameter
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuardianHeart$Type = ($GuardianHeart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuardianHeart_ = $GuardianHeart$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/generic/$GenericBlockItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ICreativeTabMember, $ICreativeTabMember$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICreativeTabMember"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GenericBlockItem extends $BlockItem implements $ICreativeTabMember {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type, arg2: $Supplier$Type<($CreativeModeTab$Type)>)
constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)
constructor(arg0: $Block$Type)

public "getCreativeTab"(): $CreativeModeTab
public static "getDefaultProperties"(): $Item$Properties
public "getCreativeTabStacks"(): $List<($ItemStack)>
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "creativeTab"(): $CreativeModeTab
get "defaultProperties"(): $Item$Properties
get "creativeTabStacks"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericBlockItem$Type = ($GenericBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericBlockItem_ = $GenericBlockItem$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/api/items/$ICursed" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICursed {

}

export namespace $ICursed {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICursed$Type = ($ICursed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICursed_ = $ICursed$Type;
}}
declare module "packages/com/aizistral/etherium/items/$EtheriumIngot" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICreativeTabMember, $ICreativeTabMember$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICreativeTabMember"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EtheriumIngot extends $Item implements $ICreativeTabMember {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getCreativeTab"(): $CreativeModeTab
public "getCreativeTabStacks"(): $List<($ItemStack)>
get "creativeTab"(): $CreativeModeTab
get "creativeTabStacks"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtheriumIngot$Type = ($EtheriumIngot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EtheriumIngot_ = $EtheriumIngot$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$EvilIngot" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICursed, $ICursed$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICursed"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EvilIngot extends $ItemBase implements $ICursed {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canBeHurtBy"(arg0: $DamageSource$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EvilIngot$Type = ($EvilIngot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EvilIngot_ = $EvilIngot$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$CurseTransposer" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICursed, $ICursed$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICursed"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentTransposer, $EnchantmentTransposer$Type} from "packages/com/aizistral/enigmaticlegacy/items/$EnchantmentTransposer"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurseTransposer extends $EnchantmentTransposer implements $ICursed {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canTranspose"(arg0: $Enchantment$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurseTransposer$Type = ($CurseTransposer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurseTransposer_ = $CurseTransposer$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$RevelationTome$TomeType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RevelationTome$TomeType extends $Enum<($RevelationTome$TomeType)> {
static readonly "OVERWORLD": $RevelationTome$TomeType
static readonly "NETHER": $RevelationTome$TomeType
static readonly "END": $RevelationTome$TomeType
static readonly "GENERIC": $RevelationTome$TomeType
readonly "typeName": string


public static "values"(): ($RevelationTome$TomeType)[]
public static "valueOf"(arg0: string): $RevelationTome$TomeType
public static "resolveType"(arg0: string): $RevelationTome$TomeType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RevelationTome$TomeType$Type = (("nether") | ("end") | ("overworld") | ("generic")) | ($RevelationTome$TomeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RevelationTome$TomeType_ = $RevelationTome$TomeType$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$HeavenScroll" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Omniconfig$DoubleParameter, $Omniconfig$DoubleParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$DoubleParameter"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemBaseCurio, $ItemBaseCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseCurio"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HeavenScroll extends $ItemBaseCurio {
static "xpCostModifier": $Omniconfig$DoubleParameter
 "flyMap": $Map<($Player), (integer)>
readonly "baseXpConsumptionProbability": double
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)
constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "onUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeavenScroll$Type = ($HeavenScroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeavenScroll_ = $HeavenScroll$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/effects/$MoltenHeartEffect" {
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$Omniconfig$DoubleParameter, $Omniconfig$DoubleParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$DoubleParameter"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $MoltenHeartEffect extends $MobEffect {
static "lavafogDensity": $Omniconfig$DoubleParameter

constructor()

public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "providesImmunity"(arg0: $DamageSource$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoltenHeartEffect$Type = ($MoltenHeartEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoltenHeartEffect_ = $MoltenHeartEffect$Type;
}}
declare module "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$PerhapsParameter" {
import {$Omniconfig$GenericParameter, $Omniconfig$GenericParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$GenericParameter"
import {$Perhaps, $Perhaps$Type} from "packages/com/aizistral/enigmaticlegacy/objects/$Perhaps"

export class $Omniconfig$PerhapsParameter extends $Omniconfig$GenericParameter {

constructor(arg0: integer)

public "toString"(): string
public "getValue"(): $Perhaps
public "setValue"(arg0: integer): void
public "getDefaultValue"(): $Perhaps
public "getMinValue"(): integer
public "getMaxValue"(): integer
public "valueToString"(): string
public "parseFromString"(arg0: string): void
public "setDefaultValue"(arg0: integer): void
public "setMinValue"(arg0: integer): void
public "setMaxValue"(arg0: integer): void
get "value"(): $Perhaps
set "value"(value: integer)
get "defaultValue"(): $Perhaps
get "minValue"(): integer
get "maxValue"(): integer
set "defaultValue"(value: integer)
set "minValue"(value: integer)
set "maxValue"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Omniconfig$PerhapsParameter$Type = ($Omniconfig$PerhapsParameter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Omniconfig$PerhapsParameter_ = $Omniconfig$PerhapsParameter$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$EldritchAmulet" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Omniconfig$DoubleParameter, $Omniconfig$DoubleParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$DoubleParameter"
import {$AscensionAmulet, $AscensionAmulet$Type} from "packages/com/aizistral/enigmaticlegacy/items/$AscensionAmulet"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Omniconfig$BooleanParameter, $Omniconfig$BooleanParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$BooleanParameter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IEldritch, $IEldritch$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$IEldritch"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EldritchAmulet extends $AscensionAmulet implements $IEldritch {
static "damageBonus": $Omniconfig$DoubleParameter
static "vesselEnabled": $Omniconfig$BooleanParameter
static "ownerOnlyVessel": $Omniconfig$BooleanParameter
static "seededColorGen": $Omniconfig$BooleanParameter
static "multiequip": $Omniconfig$BooleanParameter
static "savedXPFraction": $Omniconfig$DoubleParameter
static readonly "amuletColorTag": string
static readonly "amuletInscriptionTag": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "reclaimInventory"(arg0: $ServerPlayer$Type, arg1: $ServerPlayer$Type): boolean
public "storeInventory"(arg0: $ServerPlayer$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getCreativeTabStacks"(): $List<($ItemStack)>
public "getAttributesTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
get "creativeTabStacks"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EldritchAmulet$Type = ($EldritchAmulet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EldritchAmulet_ = $EldritchAmulet$Type;
}}
declare module "packages/com/aizistral/omniconfig/$Configuration$SidedConfigType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Dist, $Dist$Type} from "packages/net/minecraftforge/api/distmarker/$Dist"

export class $Configuration$SidedConfigType extends $Enum<($Configuration$SidedConfigType)> {
static readonly "CLIENT": $Configuration$SidedConfigType
static readonly "SERVER": $Configuration$SidedConfigType
static readonly "COMMON": $Configuration$SidedConfigType


public static "values"(): ($Configuration$SidedConfigType)[]
public static "valueOf"(arg0: string): $Configuration$SidedConfigType
public "getDist"(): $Dist
public "isSided"(): boolean
get "dist"(): $Dist
get "sided"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Configuration$SidedConfigType$Type = (("server") | ("common") | ("client")) | ($Configuration$SidedConfigType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Configuration$SidedConfigType_ = $Configuration$SidedConfigType$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$UnwitnessedAmulet" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemBaseCurio, $ItemBaseCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseCurio"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UnwitnessedAmulet extends $ItemBaseCurio {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "getAttributesTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnwitnessedAmulet$Type = ($UnwitnessedAmulet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnwitnessedAmulet_ = $UnwitnessedAmulet$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$TheAcknowledgment" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Vanishable, $Vanishable$Type} from "packages/net/minecraft/world/item/$Vanishable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TheAcknowledgment extends $ItemBase implements $Vanishable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public static "isOpen"(): boolean
public static "getTitle"(arg0: $ItemStack$Type): $Component
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "getEnchantmentValue"(arg0: $ItemStack$Type): integer
public static "getEdition"(): $Component
get "open"(): boolean
get "edition"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TheAcknowledgment$Type = ($TheAcknowledgment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TheAcknowledgment_ = $TheAcknowledgment$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$BlazingCore" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemSpellstoneCurio, $ItemSpellstoneCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemSpellstoneCurio"
import {$Omniconfig$DoubleParameter, $Omniconfig$DoubleParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$DoubleParameter"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Omniconfig$IntParameter, $Omniconfig$IntParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$IntParameter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Omniconfig$BooleanParameter, $Omniconfig$BooleanParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$BooleanParameter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DamageType, $DamageType$Type} from "packages/net/minecraft/world/damagesource/$DamageType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$ISpellstone, $ISpellstone$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ISpellstone"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlazingCore extends $ItemSpellstoneCurio implements $ISpellstone {
static "spellstoneCooldown": $Omniconfig$IntParameter
static "damageFeedback": $Omniconfig$DoubleParameter
static "ignitionFeedback": $Omniconfig$IntParameter
static "lavafogDensity": $Omniconfig$DoubleParameter
static "traitorBar": $Omniconfig$BooleanParameter
 "nemesisList": $List<($ResourceKey<($DamageType)>)>
static "multiequip": $Omniconfig$BooleanParameter
static "reducedCooldowns": $Predicate<($Player)>
 "immunityList": $List<($ResourceKey<($DamageType)>)>
 "resistanceList": $HashMap<($ResourceKey<($DamageType)>), ($Supplier<(float)>)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazingCore$Type = ($BlazingCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlazingCore_ = $BlazingCore$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/blocks/$BlockCosmicCake" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$CakeBlock, $CakeBlock$Type} from "packages/net/minecraft/world/level/block/$CakeBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockCosmicCake extends $CakeBlock {
static readonly "MAX_BITES": integer
static readonly "BITES": $IntegerProperty
static readonly "FULL_CAKE_SIGNAL": integer
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
 "isRandomlyTicking": boolean
 "properties": $BlockBehaviour$Properties

constructor()

public "isRandomlyTicking"(arg0: $BlockState$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCosmicCake$Type = ($BlockCosmicCake);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCosmicCake_ = $BlockCosmicCake$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/effects/$BlazingStrengthEffect" {
import {$AttackDamageMobEffect, $AttackDamageMobEffect$Type} from "packages/net/minecraft/world/effect/$AttackDamageMobEffect"

export class $BlazingStrengthEffect extends $AttackDamageMobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazingStrengthEffect$Type = ($BlazingStrengthEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlazingStrengthEffect_ = $BlazingStrengthEffect$Type;
}}
declare module "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$DoubleParameter" {
import {$Omniconfig$GenericParameter, $Omniconfig$GenericParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$GenericParameter"

export class $Omniconfig$DoubleParameter extends $Omniconfig$GenericParameter {

constructor(arg0: double)

public "toString"(): string
public "getValue"(): double
public "setValue"(arg0: double): void
public "getDefaultValue"(): double
public "getMinValue"(): double
public "getMaxValue"(): double
public "valueToString"(): string
public "parseFromString"(arg0: string): void
public "setDefaultValue"(arg0: double): void
public "setMinValue"(arg0: double): void
public "setMaxValue"(arg0: double): void
get "value"(): double
set "value"(value: double)
get "defaultValue"(): double
get "minValue"(): double
get "maxValue"(): double
set "defaultValue"(value: double)
set "minValue"(value: double)
set "maxValue"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Omniconfig$DoubleParameter$Type = ($Omniconfig$DoubleParameter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Omniconfig$DoubleParameter_ = $Omniconfig$DoubleParameter$Type;
}}
declare module "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$BooleanParameter" {
import {$Omniconfig$GenericParameter, $Omniconfig$GenericParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$GenericParameter"

export class $Omniconfig$BooleanParameter extends $Omniconfig$GenericParameter {

constructor(arg0: boolean)

public "toString"(): string
public "getValue"(): boolean
public "setValue"(arg0: boolean): void
public "getDefaultValue"(): boolean
public "valueToString"(): string
public "parseFromString"(arg0: string): void
public "setDefaultValue"(arg0: boolean): void
get "value"(): boolean
set "value"(value: boolean)
get "defaultValue"(): boolean
set "defaultValue"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Omniconfig$BooleanParameter$Type = ($Omniconfig$BooleanParameter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Omniconfig$BooleanParameter_ = $Omniconfig$BooleanParameter$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$TwistedPotion" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICursed, $ICursed$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICursed"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemBasePotion, $ItemBasePotion$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBasePotion"

export class $TwistedPotion extends $ItemBasePotion implements $ICursed {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onConsumed"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): void
public "canDrink"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TwistedPotion$Type = ($TwistedPotion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TwistedPotion_ = $TwistedPotion$Type;
}}
declare module "packages/com/aizistral/omniconfig/$Configuration" {
import {$Property, $Property$Type} from "packages/com/aizistral/omniconfig/$Property"
import {$Configuration$SidedConfigType, $Configuration$SidedConfigType$Type} from "packages/com/aizistral/omniconfig/$Configuration$SidedConfigType"
import {$Property$Type, $Property$Type$Type} from "packages/com/aizistral/omniconfig/$Property$Type"
import {$Configuration$VersioningPolicy, $Configuration$VersioningPolicy$Type} from "packages/com/aizistral/omniconfig/$Configuration$VersioningPolicy"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$File, $File$Type} from "packages/java/io/$File"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$CharMatcher, $CharMatcher$Type} from "packages/com/google/common/base/$CharMatcher"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConfigCategory, $ConfigCategory$Type} from "packages/com/aizistral/omniconfig/$ConfigCategory"

export class $Configuration {
static readonly "CATEGORY_GENERAL": string
static readonly "ALLOWED_CHARS": string
static readonly "DEFAULT_ENCODING": string
static readonly "CATEGORY_SPLITTER": string
static readonly "NEW_LINE": string
static readonly "COMMENT_SEPARATOR": string
static readonly "allowedProperties": $CharMatcher
 "isOverloading": boolean
 "defaultEncoding": string
 "isChild": boolean

constructor(arg0: $File$Type, arg1: boolean)
constructor(arg0: $File$Type, arg1: string, arg2: boolean)
constructor(arg0: $File$Type, arg1: string)
constructor(arg0: $File$Type)
constructor()

public "get"(arg0: string, arg1: string, arg2: double, arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: double, arg3: string, arg4: double, arg5: double): $Property
public "get"(arg0: string, arg1: string, arg2: (double)[]): $Property
public "get"(arg0: string, arg1: string, arg2: (double)[], arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: (double)[], arg3: string, arg4: double, arg5: double): $Property
public "get"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: $Property$Type$Type): $Property
public "get"(arg0: string, arg1: string, arg2: (integer)[], arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: (integer)[], arg3: string, arg4: integer, arg5: integer): $Property
public "get"(arg0: string, arg1: string, arg2: (integer)[], arg3: string, arg4: integer, arg5: integer, arg6: boolean, arg7: integer): $Property
public "get"(arg0: string, arg1: string, arg2: double): $Property
public "get"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: (string)[]): $Property
public "get"(arg0: string, arg1: string, arg2: (string)[]): $Property
public "get"(arg0: string, arg1: string, arg2: (string)[], arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: (string)[], arg3: string, arg4: $Pattern$Type): $Property
public "get"(arg0: string, arg1: string, arg2: (string)[], arg3: string, arg4: boolean, arg5: integer, arg6: $Pattern$Type): $Property
public "get"(arg0: string, arg1: string, arg2: (double)[], arg3: string, arg4: double, arg5: double, arg6: boolean, arg7: integer): $Property
public "get"(arg0: string, arg1: string, arg2: string): $Property
public "get"(arg0: string, arg1: string, arg2: string, arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: $Pattern$Type): $Property
public "get"(arg0: string, arg1: string, arg2: (boolean)[]): $Property
public "get"(arg0: string, arg1: string, arg2: boolean, arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: boolean): $Property
public "get"(arg0: string, arg1: string, arg2: (string)[], arg3: string, arg4: $Property$Type$Type): $Property
public "get"(arg0: string, arg1: string, arg2: (integer)[]): $Property
public "get"(arg0: string, arg1: string, arg2: integer, arg3: string, arg4: integer, arg5: integer): $Property
public "get"(arg0: string, arg1: string, arg2: integer, arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: integer): $Property
public "get"(arg0: string, arg1: string, arg2: (boolean)[], arg3: string, arg4: boolean, arg5: integer): $Property
public "get"(arg0: string, arg1: string, arg2: (boolean)[], arg3: string): $Property
public "toString"(): string
public "getBoolean"(arg0: string, arg1: string, arg2: boolean, arg3: string): boolean
public "getBoolean"(arg0: string, arg1: string, arg2: boolean, arg3: string, arg4: string): boolean
public "getInt"(arg0: string, arg1: string, arg2: integer, arg3: integer, arg4: integer, arg5: string): integer
public "getInt"(arg0: string, arg1: string, arg2: integer, arg3: integer, arg4: integer, arg5: string, arg6: string): integer
public "getDouble"(arg0: string, arg1: string, arg2: double, arg3: double, arg4: double, arg5: string, arg6: string): double
public "getDouble"(arg0: string, arg1: string, arg2: double, arg3: double, arg4: double, arg5: string): double
public "load"(): void
public "save"(): void
public "getString"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: (string)[]): string
public "getString"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: $Pattern$Type): string
public "getString"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: $Pattern$Type): string
public "getString"(arg0: string, arg1: string, arg2: string, arg3: string): string
public "getString"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string): string
public "getString"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: (string)[], arg5: string): string
public "getCategory"(arg0: string): $ConfigCategory
public "getCategoryNames"(): $Set<(string)>
public "getEnum"<V extends $Enum<(V)>>(arg0: string, arg1: string, arg2: V, arg3: string, arg4: (V)[]): V
public "hasKey"(arg0: string, arg1: string): boolean
public "hasCategory"(arg0: string): boolean
public "setCategoryComment"(arg0: string, arg1: string): $Configuration
public "removeCategory"(arg0: $ConfigCategory$Type): void
public "copyCategoryProps"(arg0: $Configuration$Type, arg1: (string)[]): void
public "renameProperty"(arg0: string, arg1: string, arg2: string): boolean
public "moveProperty"(arg0: string, arg1: string, arg2: string): boolean
public "getStringList"(arg0: string, arg1: string, arg2: (string)[], arg3: string, arg4: (string)[], arg5: string): (string)[]
public "getStringList"(arg0: string, arg1: string, arg2: (string)[], arg3: string, arg4: (string)[]): (string)[]
public "getStringList"(arg0: string, arg1: string, arg2: (string)[], arg3: string): (string)[]
public "setCategoryLanguageKey"(arg0: string, arg1: string): $Configuration
public "setCategoryPropertyOrder"(arg0: string, arg1: $List$Type<(string)>): $Configuration
public "setCategoryRequiresWorldRestart"(arg0: string, arg1: boolean): $Configuration
public "setCategoryRequiresMcRestart"(arg0: string, arg1: boolean): $Configuration
public "loadFile"(): void
public "hasChanged"(): boolean
public "getConfigFile"(): $File
public "getDefinedConfigVersion"(): string
public "terminateNonInvokedKeys"(): boolean
public "attachOverloadingAction"(arg0: $Consumer$Type<($Configuration$Type)>): void
public "setVersioningPolicy"(arg0: $Configuration$VersioningPolicy$Type): void
public "setTerminateNonInvokedKeys"(arg0: boolean): void
public "addCustomCategoryComment"(arg0: string, arg1: string): void
public "getVersioningPolicy"(): $Configuration$VersioningPolicy
public "getLoadedConfigVersion"(): string
public "attachBeholder"(): void
public "setSidedType"(arg0: $Configuration$SidedConfigType$Type): void
public "getSidedType"(): $Configuration$SidedConfigType
public "pushSynchronized"(arg0: boolean): void
public static "enableGlobalConfig"(): void
public "isFirstLoadPassed"(): boolean
public "detachBeholder"(): void
get "categoryNames"(): $Set<(string)>
get "configFile"(): $File
get "definedConfigVersion"(): string
set "versioningPolicy"(value: $Configuration$VersioningPolicy$Type)
get "versioningPolicy"(): $Configuration$VersioningPolicy
get "loadedConfigVersion"(): string
set "sidedType"(value: $Configuration$SidedConfigType$Type)
get "sidedType"(): $Configuration$SidedConfigType
get "firstLoadPassed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Configuration$Type = ($Configuration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Configuration_ = $Configuration$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBasePotion" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBasePotion extends $ItemBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()
constructor(arg0: $Item$Properties$Type)

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "onConsumed"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): void
public "canDrink"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBasePotion$Type = ($ItemBasePotion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBasePotion_ = $ItemBasePotion$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$UltimatePotionLingering" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$IAdvancedPotionItem$PotionType, $IAdvancedPotionItem$PotionType$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$IAdvancedPotionItem$PotionType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IAdvancedPotionItem, $IAdvancedPotionItem$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$IAdvancedPotionItem"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UltimatePotionLingering extends $ItemBase implements $IAdvancedPotionItem {
 "potionType": $IAdvancedPotionItem$PotionType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Rarity$Type, arg1: $IAdvancedPotionItem$PotionType$Type)

public "getDefaultInstance"(): $ItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getDescriptionId"(arg0: $ItemStack$Type): string
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getPotionType"(): $IAdvancedPotionItem$PotionType
public "getCreativeTab"(): $CreativeModeTab
public "getCreativeTabStacks"(): $List<($ItemStack)>
get "defaultInstance"(): $ItemStack
get "potionType"(): $IAdvancedPotionItem$PotionType
get "creativeTab"(): $CreativeModeTab
get "creativeTabStacks"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UltimatePotionLingering$Type = ($UltimatePotionLingering);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UltimatePotionLingering_ = $UltimatePotionLingering$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$EnigmaticAmulet" {
import {$EnigmaticAmulet$AmuletColor, $EnigmaticAmulet$AmuletColor$Type} from "packages/com/aizistral/enigmaticlegacy/items/$EnigmaticAmulet$AmuletColor"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Omniconfig$DoubleParameter, $Omniconfig$DoubleParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$DoubleParameter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Omniconfig$BooleanParameter, $Omniconfig$BooleanParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$BooleanParameter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemBaseCurio, $ItemBaseCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseCurio"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EnigmaticAmulet extends $ItemBaseCurio {
static "damageBonus": $Omniconfig$DoubleParameter
static "vesselEnabled": $Omniconfig$BooleanParameter
static "ownerOnlyVessel": $Omniconfig$BooleanParameter
static "seededColorGen": $Omniconfig$BooleanParameter
static "multiequip": $Omniconfig$BooleanParameter
static "savedXPFraction": $Omniconfig$DoubleParameter
static readonly "amuletColorTag": string
static readonly "amuletInscriptionTag": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "setColor"(arg0: $ItemStack$Type, arg1: $EnigmaticAmulet$AmuletColor$Type): $ItemStack
public "hasColor"(arg0: $Player$Type, arg1: $EnigmaticAmulet$AmuletColor$Type): boolean
public "setRandomColor"(arg0: $ItemStack$Type): $ItemStack
public "setSeededColor"(arg0: $ItemStack$Type): $ItemStack
public "setProperlyGranted"(arg0: $ItemStack$Type): $ItemStack
public "setInscription"(arg0: $ItemStack$Type, arg1: string): $ItemStack
public "isVesselEnabled"(): boolean
public "getColor"(arg0: $ItemStack$Type): $EnigmaticAmulet$AmuletColor
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "onUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
public "registerVariants"(): void
public "getCreativeTabStacks"(): $List<($ItemStack)>
public "getAttributesTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
public "isVesselOwnerOnly"(): boolean
public "getCurrentModifiers"(arg0: $ItemStack$Type, arg1: $Player$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "setPseudoRandomColor"(arg0: $ItemStack$Type): $ItemStack
set "randomColor"(value: $ItemStack$Type)
set "seededColor"(value: $ItemStack$Type)
set "properlyGranted"(value: $ItemStack$Type)
get "vesselEnabled"(): boolean
get "creativeTabStacks"(): $List<($ItemStack)>
get "vesselOwnerOnly"(): boolean
set "pseudoRandomColor"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnigmaticAmulet$Type = ($EnigmaticAmulet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnigmaticAmulet_ = $EnigmaticAmulet$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$EnchantmentTransposer" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnchantmentTransposer extends $ItemBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canTranspose"(arg0: $Enchantment$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentTransposer$Type = ($EnchantmentTransposer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentTransposer_ = $EnchantmentTransposer$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$MonsterCharm" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Omniconfig$BooleanParameter, $Omniconfig$BooleanParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$BooleanParameter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Omniconfig$PerhapsParameter, $Omniconfig$PerhapsParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$PerhapsParameter"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemBaseCurio, $ItemBaseCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseCurio"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MonsterCharm extends $ItemBaseCurio {
static "undeadDamageBonus": $Omniconfig$PerhapsParameter
static "hostileDamageBonus": $Omniconfig$PerhapsParameter
static "bonusLootingEnabled": $Omniconfig$BooleanParameter
static "doubleXPEnabled": $Omniconfig$BooleanParameter
 "bonusXPModifier": float
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getLootingLevel"(arg0: $SlotContext$Type, arg1: $DamageSource$Type, arg2: $LivingEntity$Type, arg3: integer, arg4: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MonsterCharm$Type = ($MonsterCharm);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MonsterCharm_ = $MonsterCharm$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$RevelationTome" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$RevelationTome$TomeType, $RevelationTome$TomeType$Type} from "packages/com/aizistral/enigmaticlegacy/items/$RevelationTome$TomeType"
import {$Vanishable, $Vanishable$Type} from "packages/net/minecraft/world/item/$Vanishable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RevelationTome extends $ItemBase implements $Vanishable {
static readonly "revelationPointsTag": string
static readonly "xpPointsTag": string
static readonly "formerReadersTag": string
static readonly "lastHolderTag": string
readonly "theType": $RevelationTome$TomeType
readonly "persistantPointsTag": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Rarity$Type, arg1: $RevelationTome$TomeType$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
public static "getGenericPoints"(arg0: $Player$Type): integer
public static "markRead"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public static "havePlayerRead"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
public "createTome"(arg0: integer, arg1: integer): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RevelationTome$Type = ($RevelationTome);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RevelationTome_ = $RevelationTome$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/enchantments/$SharpshooterEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $SharpshooterEnchantment extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor(...arg0: ($EquipmentSlot$Type)[])

public "getMaxLevel"(): integer
public "isDiscoverable"(): boolean
public "isTreasureOnly"(): boolean
public "isAllowedOnBooks"(): boolean
public "getMinLevel"(): integer
public "canEnchant"(arg0: $ItemStack$Type): boolean
public "isCurse"(): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
get "maxLevel"(): integer
get "discoverable"(): boolean
get "treasureOnly"(): boolean
get "allowedOnBooks"(): boolean
get "minLevel"(): integer
get "curse"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SharpshooterEnchantment$Type = ($SharpshooterEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SharpshooterEnchantment_ = $SharpshooterEnchantment$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$GoldenRing" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemBaseCurio, $ItemBaseCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseCurio"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GoldenRing extends $ItemBaseCurio {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isPiglinCurrency"(arg0: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "makesPiglinsNeutral"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "makesPiglinsNeutral"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GoldenRing$Type = ($GoldenRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GoldenRing_ = $GoldenRing$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$CosmicCake" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$GenericBlockItem, $GenericBlockItem$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$GenericBlockItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CosmicCake extends $GenericBlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmicCake$Type = ($CosmicCake);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmicCake_ = $CosmicCake$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$TheJudgement" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TheJudgement extends $ItemBase {
static readonly "ATTACK_DAMAGE": float
static readonly "ATTACK_RADIUS": double
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getDefaultAttributeModifiers"(arg0: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TheJudgement$Type = ($TheJudgement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TheJudgement_ = $TheJudgement$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/enchantments/$TorrentEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $TorrentEnchantment extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor(...arg0: ($EquipmentSlot$Type)[])

public "getMaxLevel"(): integer
public "isDiscoverable"(): boolean
public "isAllowedOnBooks"(): boolean
public "canEnchant"(arg0: $ItemStack$Type): boolean
public "getMinCost"(arg0: integer): integer
public "m_5975_"(arg0: $Enchantment$Type): boolean
public "getMaxCost"(arg0: integer): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "bonusDamageByCreature"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: integer): float
get "maxLevel"(): integer
get "discoverable"(): boolean
get "allowedOnBooks"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TorrentEnchantment$Type = ($TorrentEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TorrentEnchantment_ = $TorrentEnchantment$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$CosmicHeart" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Vanishable, $Vanishable$Type} from "packages/net/minecraft/world/item/$Vanishable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $CosmicHeart extends $ItemBase implements $Vanishable {
static "blessableHandler": $BiConsumer<($ItemStack), ($Player)>
static "tooltipHandler": $BiConsumer<($ItemStack), ($List<($Component)>)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmicHeart$Type = ($CosmicHeart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmicHeart_ = $CosmicHeart$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/api/items/$IHidden" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IHidden {

}

export namespace $IHidden {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHidden$Type = ($IHidden);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHidden_ = $IHidden$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$StorageCrystal" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Vanishable, $Vanishable$Type} from "packages/net/minecraft/world/item/$Vanishable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IPermanentCrystal, $IPermanentCrystal$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$IPermanentCrystal"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StorageCrystal extends $ItemBase implements $IPermanentCrystal, $Vanishable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "storeDropsOnCrystal"(arg0: $Collection$Type<($ItemEntity$Type)>, arg1: $Player$Type, arg2: $ItemStack$Type): $ItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "retrieveDropsFromCrystal"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $ItemStack$Type): $ItemStack
public "getCreativeTab"(): $CreativeModeTab
get "creativeTab"(): $CreativeModeTab
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageCrystal$Type = ($StorageCrystal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageCrystal_ = $StorageCrystal$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$EnigmaticAmulet$AmuletColor" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Random, $Random$Type} from "packages/java/util/$Random"

export class $EnigmaticAmulet$AmuletColor extends $Enum<($EnigmaticAmulet$AmuletColor)> {
static readonly "RED": $EnigmaticAmulet$AmuletColor
static readonly "AQUA": $EnigmaticAmulet$AmuletColor
static readonly "VIOLET": $EnigmaticAmulet$AmuletColor
static readonly "MAGENTA": $EnigmaticAmulet$AmuletColor
static readonly "GREEN": $EnigmaticAmulet$AmuletColor
static readonly "BLACK": $EnigmaticAmulet$AmuletColor
static readonly "BLUE": $EnigmaticAmulet$AmuletColor


public static "values"(): ($EnigmaticAmulet$AmuletColor)[]
public static "valueOf"(arg0: string): $EnigmaticAmulet$AmuletColor
public static "getRandomColor"(): $EnigmaticAmulet$AmuletColor
public static "getSeededColor"(arg0: $Random$Type): $EnigmaticAmulet$AmuletColor
public "getColorVar"(): float
get "randomColor"(): $EnigmaticAmulet$AmuletColor
get "colorVar"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnigmaticAmulet$AmuletColor$Type = (("red") | ("aqua") | ("magenta") | ("green") | ("blue") | ("violet") | ("black")) | ($EnigmaticAmulet$AmuletColor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnigmaticAmulet$AmuletColor_ = $EnigmaticAmulet$AmuletColor$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/enchantments/$WrathEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$MobType, $MobType$Type} from "packages/net/minecraft/world/entity/$MobType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $WrathEnchantment extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor(...arg0: ($EquipmentSlot$Type)[])

public "getMaxLevel"(): integer
public "isDiscoverable"(): boolean
public "isAllowedOnBooks"(): boolean
public "canEnchant"(arg0: $ItemStack$Type): boolean
public "getMinCost"(arg0: integer): integer
public "getDamageBonus"(arg0: integer, arg1: $MobType$Type): float
public "m_5975_"(arg0: $Enchantment$Type): boolean
public "getMaxCost"(arg0: integer): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "bonusDamageByCreature"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: integer): float
get "maxLevel"(): integer
get "discoverable"(): boolean
get "allowedOnBooks"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrathEnchantment$Type = ($WrathEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrathEnchantment_ = $WrathEnchantment$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/crafting/$CursedShapedRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CursedShapedRecipe, $CursedShapedRecipe$Type} from "packages/com/aizistral/enigmaticlegacy/crafting/$CursedShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CursedShapedRecipe$Serializer implements $RecipeSerializer<($CursedShapedRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $CursedShapedRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $CursedShapedRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $CursedShapedRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CursedShapedRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CursedShapedRecipe$Serializer$Type = ($CursedShapedRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CursedShapedRecipe$Serializer_ = $CursedShapedRecipe$Serializer$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/blocks/$BlockBigLamp" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LanternBlock, $LanternBlock$Type} from "packages/net/minecraft/world/level/block/$LanternBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BlockBigLamp extends $LanternBlock {
static readonly "HANGING": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
 "isRandomlyTicking": boolean
 "properties": $BlockBehaviour$Properties

constructor()

public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBigLamp$Type = ($BlockBigLamp);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBigLamp_ = $BlockBigLamp$Type;
}}
declare module "packages/com/aizistral/etherium/items/$EtheriumNugget" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICreativeTabMember, $ICreativeTabMember$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICreativeTabMember"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EtheriumNugget extends $Item implements $ICreativeTabMember {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getCreativeTab"(): $CreativeModeTab
public "getCreativeTabStacks"(): $List<($ItemStack)>
get "creativeTab"(): $CreativeModeTab
get "creativeTabStacks"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtheriumNugget$Type = ($EtheriumNugget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EtheriumNugget_ = $EtheriumNugget$Type;
}}
declare module "packages/com/aizistral/etherium/core/$IEtheriumConfig" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Perhaps, $Perhaps$Type} from "packages/com/aizistral/enigmaticlegacy/objects/$Perhaps"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IEtheriumConfig {

 "isStandalone"(): boolean
 "getCreativeTab"(): $CreativeModeTab
 "getShieldTriggerSound"(): $SoundEvent
 "getPickaxeMiningRadius"(): integer
 "getShovelMiningRadius"(): integer
 "disableAOEShiftInhibition"(): boolean
 "getPickaxeMiningDepth"(): integer
 "getShovelMiningDepth"(): integer
 "getScytheMiningVolume"(): integer
 "getRepairMaterial"(): $Ingredient
 "getAOEBoost"(arg0: $Player$Type): integer
 "getAOESoundOff"(): $SoundEvent
 "getShieldThreshold"(arg0: $Player$Type): $Perhaps
 "getAOESoundOn"(): $SoundEvent
 "getToolMaterial"(): $Tier
 "getArmorMaterial"(): $ArmorMaterial
 "getAxeMiningVolume"(): integer
 "getShieldReduction"(): $Perhaps
 "knockBack"(arg0: $LivingEntity$Type, arg1: float, arg2: double, arg3: double): void
 "getSwordCooldown"(): integer
 "getOwnerMod"(): string
}

export namespace $IEtheriumConfig {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEtheriumConfig$Type = ($IEtheriumConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEtheriumConfig_ = $IEtheriumConfig$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$CursedScroll" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICursed, $ICursed$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICursed"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Omniconfig$PerhapsParameter, $Omniconfig$PerhapsParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$PerhapsParameter"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemBaseCurio, $ItemBaseCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseCurio"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CursedScroll extends $ItemBaseCurio implements $ICursed {
static "damageBoost": $Omniconfig$PerhapsParameter
static "miningBoost": $Omniconfig$PerhapsParameter
static "regenBoost": $Omniconfig$PerhapsParameter
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CursedScroll$Type = ($CursedScroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CursedScroll_ = $CursedScroll$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$FabulousScroll" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Omniconfig$DoubleParameter, $Omniconfig$DoubleParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$DoubleParameter"
import {$HeavenScroll, $HeavenScroll$Type} from "packages/com/aizistral/enigmaticlegacy/items/$HeavenScroll"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FabulousScroll extends $HeavenScroll {
static "xpCostModifier": $Omniconfig$DoubleParameter
 "flyMap": $Map<($Player), (integer)>
readonly "baseXpConsumptionProbability": double
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "onUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabulousScroll$Type = ($FabulousScroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabulousScroll_ = $FabulousScroll$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$SoulCrystal" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Vanishable, $Vanishable$Type} from "packages/net/minecraft/world/item/$Vanishable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IPermanentCrystal, $IPermanentCrystal$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$IPermanentCrystal"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SoulCrystal extends $ItemBase implements $IPermanentCrystal, $Vanishable {
 "attributeDispatcher": $Map<($Player), ($Multimap<($Attribute), ($AttributeModifier)>)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getLostCrystals"(arg0: $Player$Type): integer
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "retrieveSoulFromCrystal"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
public "updatePlayerSoulMap"(arg0: $Player$Type): void
public "createCrystalFrom"(arg0: $Player$Type): $ItemStack
public "setLostCrystals"(arg0: $Player$Type, arg1: integer): void
public "getOrCreateSoulMap"(arg0: $Player$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "applyPlayerSoulMap"(arg0: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulCrystal$Type = ($SoulCrystal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulCrystal_ = $SoulCrystal$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$MendingMixture" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MendingMixture extends $ItemBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MendingMixture$Type = ($MendingMixture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MendingMixture_ = $MendingMixture$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/mixin/$AccessorAbstractArrowEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorAbstractArrowEntity {

 "clearHitEntities"(): void

(): void
}

export namespace $AccessorAbstractArrowEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorAbstractArrowEntity$Type = ($AccessorAbstractArrowEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorAbstractArrowEntity_ = $AccessorAbstractArrowEntity$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$TheTwist" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICursed, $ICursed$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICursed"
import {$Omniconfig$DoubleParameter, $Omniconfig$DoubleParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$DoubleParameter"
import {$TheAcknowledgment, $TheAcknowledgment$Type} from "packages/com/aizistral/enigmaticlegacy/items/$TheAcknowledgment"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Omniconfig$PerhapsParameter, $Omniconfig$PerhapsParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$PerhapsParameter"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TheTwist extends $TheAcknowledgment implements $ICursed {
static "attackDamage": $Omniconfig$DoubleParameter
static "attackSpeed": $Omniconfig$DoubleParameter
static "bossDamageBonus": $Omniconfig$PerhapsParameter
static "knockbackBonus": $Omniconfig$PerhapsParameter
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TheTwist$Type = ($TheTwist);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TheTwist_ = $TheTwist$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$AstralPotato" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemBaseFood, $ItemBaseFood$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseFood"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AstralPotato extends $ItemBaseFood {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "onConsumed"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AstralPotato$Type = ($AstralPotato);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AstralPotato_ = $AstralPotato$Type;
}}
declare module "packages/com/aizistral/etherium/items/$EtheriumScraps" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICreativeTabMember, $ICreativeTabMember$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICreativeTabMember"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EtheriumScraps extends $Item implements $ICreativeTabMember {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getCreativeTab"(): $CreativeModeTab
public "getCreativeTabStacks"(): $List<($ItemStack)>
get "creativeTab"(): $CreativeModeTab
get "creativeTabStacks"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtheriumScraps$Type = ($EtheriumScraps);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EtheriumScraps_ = $EtheriumScraps$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$IronRing" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ItemBaseCurio, $ItemBaseCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseCurio"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $IronRing extends $ItemBaseCurio {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IronRing$Type = ($IronRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IronRing_ = $IronRing$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$CursedStone" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICursed, $ICursed$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICursed"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CursedStone extends $ItemBase implements $ICursed {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CursedStone$Type = ($CursedStone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CursedStone_ = $CursedStone$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/crafting/$BlessedShapedRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $BlessedShapedRecipe extends $ShapedRecipe {
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: integer, arg4: integer, arg5: $NonNullList$Type<($Ingredient$Type)>, arg6: $ItemStack$Type)

public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlessedShapedRecipe$Type = ($BlessedShapedRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlessedShapedRecipe_ = $BlessedShapedRecipe$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$AscensionAmulet" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Omniconfig$DoubleParameter, $Omniconfig$DoubleParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$DoubleParameter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Omniconfig$BooleanParameter, $Omniconfig$BooleanParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$BooleanParameter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$EnigmaticAmulet, $EnigmaticAmulet$Type} from "packages/com/aizistral/enigmaticlegacy/items/$EnigmaticAmulet"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AscensionAmulet extends $EnigmaticAmulet {
static "damageBonus": $Omniconfig$DoubleParameter
static "vesselEnabled": $Omniconfig$BooleanParameter
static "ownerOnlyVessel": $Omniconfig$BooleanParameter
static "seededColorGen": $Omniconfig$BooleanParameter
static "multiequip": $Omniconfig$BooleanParameter
static "savedXPFraction": $Omniconfig$DoubleParameter
static readonly "amuletColorTag": string
static readonly "amuletInscriptionTag": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "getCreativeTabStacks"(): $List<($ItemStack)>
public "getAttributesTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
get "creativeTabStacks"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AscensionAmulet$Type = ($AscensionAmulet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AscensionAmulet_ = $AscensionAmulet$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseCurio" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ICurioItem, $ICurioItem$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurioItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Vanishable, $Vanishable$Type} from "packages/net/minecraft/world/item/$Vanishable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ICurio$SoundInfo, $ICurio$SoundInfo$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$SoundInfo"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$ICurio$DropRule, $ICurio$DropRule$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$DropRule"
import {$IBindable, $IBindable$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$IBindable"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBaseCurio extends $ItemBase implements $ICurioItem, $IBindable, $Vanishable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()
constructor(arg0: $Item$Properties$Type)

public "onCraftedBy"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "canEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "onEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "canUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "getDropRule"(arg0: $SlotContext$Type, arg1: $DamageSource$Type, arg2: integer, arg3: boolean, arg4: $ItemStack$Type): $ICurio$DropRule
public "onUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public static "getDefaultProperties"(): $Item$Properties
public "getLootingLevel"(arg0: $SlotContext$Type, arg1: $DamageSource$Type, arg2: $LivingEntity$Type, arg3: integer, arg4: $ItemStack$Type): integer
/**
 * 
 * @deprecated
 */
public "canEquip"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): boolean
public "isEnderMask"(arg0: $SlotContext$Type, arg1: $EnderMan$Type, arg2: $ItemStack$Type): boolean
public "getFortuneLevel"(arg0: $SlotContext$Type, arg1: $LootContext$Type, arg2: $ItemStack$Type): integer
/**
 * 
 * @deprecated
 */
public "onEquip"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "curioTick"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "canUnequip"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "getDropRule"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): $ICurio$DropRule
/**
 * 
 * @deprecated
 */
public "onUnequip"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "getSlotsTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
public "canSync"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "canSync"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "readSyncData"(arg0: $CompoundTag$Type, arg1: $ItemStack$Type): void
public "readSyncData"(arg0: $SlotContext$Type, arg1: $CompoundTag$Type, arg2: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "getFortuneBonus"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): integer
/**
 * 
 * @deprecated
 */
public "canRightClickEquip"(arg0: $ItemStack$Type): boolean
public "curioBreak"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "curioBreak"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): void
public "hasCurioCapability"(arg0: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "getTagsTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
public "getEquipSound"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): $ICurio$SoundInfo
/**
 * 
 * @deprecated
 */
public "writeSyncData"(arg0: $ItemStack$Type): $CompoundTag
public "writeSyncData"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): $CompoundTag
/**
 * 
 * @deprecated
 */
public "getLootingBonus"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): integer
/**
 * 
 * @deprecated
 */
public "curioAnimate"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "playRightClickEquipSound"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "showAttributesTooltip"(arg0: string, arg1: $ItemStack$Type): boolean
public "getAttributesTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
/**
 * 
 * @deprecated
 */
public "getAttributeModifiers"(arg0: string, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "makesPiglinsNeutral"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "canWalkOnPowderedSnow"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
get "defaultProperties"(): $Item$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBaseCurio$Type = ($ItemBaseCurio);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBaseCurio_ = $ItemBaseCurio$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$OblivionStone" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$Omniconfig$IntParameter, $Omniconfig$IntParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$IntParameter"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Vanishable, $Vanishable$Type} from "packages/net/minecraft/world/item/$Vanishable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $OblivionStone extends $ItemBase implements $Vanishable {
static "itemSoftcap": $Omniconfig$IntParameter
static "itemHardcap": $Omniconfig$IntParameter
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "overrideStackedOnOther"(arg0: $ItemStack$Type, arg1: $Slot$Type, arg2: $ClickAction$Type, arg3: $Player$Type): boolean
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
public static "consumeStuff"(arg0: $Player$Type, arg1: $ListTag$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OblivionStone$Type = ($OblivionStone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OblivionStone_ = $OblivionStone$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/api/items/$ISpellstone" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ISpellstone {

 "triggerActiveAbility"(arg0: $Level$Type, arg1: $ServerPlayer$Type, arg2: $ItemStack$Type): void
}

export namespace $ISpellstone {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpellstone$Type = ($ISpellstone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISpellstone_ = $ISpellstone$Type;
}}
declare module "packages/com/aizistral/omniconfig/$Configuration$VersioningPolicy" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Configuration$VersioningPolicy extends $Enum<($Configuration$VersioningPolicy)> {
static readonly "AGGRESSIVE": $Configuration$VersioningPolicy
static readonly "RESPECTFUL": $Configuration$VersioningPolicy
static readonly "NOBLE": $Configuration$VersioningPolicy
static readonly "DISMISSIVE": $Configuration$VersioningPolicy


public static "values"(): ($Configuration$VersioningPolicy)[]
public static "valueOf"(arg0: string): $Configuration$VersioningPolicy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Configuration$VersioningPolicy$Type = (("noble") | ("dismissive") | ("aggressive") | ("respectful")) | ($Configuration$VersioningPolicy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Configuration$VersioningPolicy_ = $Configuration$VersioningPolicy$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$BerserkEmblem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICursed, $ICursed$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICursed"
import {$Omniconfig$DoubleParameter, $Omniconfig$DoubleParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$DoubleParameter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemBaseCurio, $ItemBaseCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseCurio"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BerserkEmblem extends $ItemBaseCurio implements $ICursed {
static "attackDamage": $Omniconfig$DoubleParameter
static "attackSpeed": $Omniconfig$DoubleParameter
static "movementSpeed": $Omniconfig$DoubleParameter
static "damageResistance": $Omniconfig$DoubleParameter
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "onUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BerserkEmblem$Type = ($BerserkEmblem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BerserkEmblem_ = $BerserkEmblem$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/objects/$Perhaps" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Perhaps {

constructor(arg0: integer)

public "toString"(): string
public "roll"(): boolean
public "asMultiplier"(arg0: boolean): double
public "asMultiplier"(): double
public "asModifier"(): float
public "asModifier"(arg0: boolean): float
public "asModifierInverted"(): float
public "asPercentage"(): integer
public "asMultiplierInverted"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Perhaps$Type = ($Perhaps);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Perhaps_ = $Perhaps$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$InfernalShield" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICursed, $ICursed$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICursed"
import {$Vanishable, $Vanishable$Type} from "packages/net/minecraft/world/item/$Vanishable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $InfernalShield extends $ItemBase implements $ICursed, $Vanishable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "getEnchantmentValue"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfernalShield$Type = ($InfernalShield);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfernalShield_ = $InfernalShield$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$DeceptionAmulet" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemBaseCurio, $ItemBaseCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseCurio"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICursed, $ICursed$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICursed"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DeceptionAmulet extends $ItemBaseCurio implements $ICursed {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeceptionAmulet$Type = ($DeceptionAmulet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeceptionAmulet_ = $DeceptionAmulet$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/api/items/$ITaintable" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ITaintable {

 "isTainted"(arg0: $ItemStack$Type): boolean
 "handleTaintable"(arg0: $ItemStack$Type, arg1: $Player$Type): void
}

export namespace $ITaintable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITaintable$Type = ($ITaintable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITaintable_ = $ITaintable$Type;
}}
declare module "packages/com/aizistral/etherium/core/$IEtheriumTool" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IEtheriumConfig, $IEtheriumConfig$Type} from "packages/com/aizistral/etherium/core/$IEtheriumConfig"

export interface $IEtheriumTool {

 "getConfig"(): $IEtheriumConfig
 "areaEffectsAllowed"(arg0: $ItemStack$Type): boolean
 "toggleAreaEffects"(arg0: $Player$Type, arg1: $ItemStack$Type): void
 "enableAreaEffects"(arg0: $Player$Type, arg1: $ItemStack$Type): void
 "areaEffectsEnabled"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
 "disableAreaEffects"(arg0: $Player$Type, arg1: $ItemStack$Type): void
}

export namespace $IEtheriumTool {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEtheriumTool$Type = ($IEtheriumTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEtheriumTool_ = $IEtheriumTool$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$EvilEssence" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICursed, $ICursed$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICursed"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EvilEssence extends $ItemBase implements $ICursed {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canBeHurtBy"(arg0: $DamageSource$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EvilEssence$Type = ($EvilEssence);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EvilEssence_ = $EvilEssence$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$EscapeScroll" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemBaseCurio, $ItemBaseCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseCurio"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EscapeScroll extends $ItemBaseCurio {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EscapeScroll$Type = ($EscapeScroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EscapeScroll_ = $EscapeScroll$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/api/items/$IMultiblockMiningTool" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IMultiblockMiningTool {

 "areaEffectsAllowed"(arg0: $ItemStack$Type): boolean
 "toggleAreaEffects"(arg0: $Player$Type, arg1: $ItemStack$Type): void
 "enableAreaEffects"(arg0: $Player$Type, arg1: $ItemStack$Type): void
 "areaEffectsEnabled"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
 "disableAreaEffects"(arg0: $Player$Type, arg1: $ItemStack$Type): void
}

export namespace $IMultiblockMiningTool {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockMiningTool$Type = ($IMultiblockMiningTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiblockMiningTool_ = $IMultiblockMiningTool$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$AstralBreaker" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Omniconfig$IntParameter, $Omniconfig$IntParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$IntParameter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IMultiblockMiningTool, $IMultiblockMiningTool$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$IMultiblockMiningTool"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Omniconfig$BooleanParameter, $Omniconfig$BooleanParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$BooleanParameter"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemBaseTool, $ItemBaseTool$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseTool"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AstralBreaker extends $ItemBaseTool implements $IMultiblockMiningTool {
static "miningRadius": $Omniconfig$IntParameter
static "miningDepth": $Omniconfig$IntParameter
static "flameParticlesToggle": $Omniconfig$BooleanParameter
 "toolActions": $Set<($ToolAction)>
 "effectiveTags": $Set<($TagKey<($Block)>)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
public "spawnFlameParticles"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "areaEffectsAllowed"(arg0: $ItemStack$Type): boolean
public "toggleAreaEffects"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "enableAreaEffects"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "areaEffectsEnabled"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
public "disableAreaEffects"(arg0: $Player$Type, arg1: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AstralBreaker$Type = ($AstralBreaker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AstralBreaker_ = $AstralBreaker$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$ExtradimensionalEye" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Vanishable, $Vanishable$Type} from "packages/net/minecraft/world/item/$Vanishable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ExtradimensionalEye extends $ItemBase implements $Vanishable {
 "range": float
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtradimensionalEye$Type = ($ExtradimensionalEye);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtradimensionalEye_ = $ExtradimensionalEye$Type;
}}
declare module "packages/com/aizistral/etherium/items/$EtheriumAxe" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AxeItem, $AxeItem$Type} from "packages/net/minecraft/world/item/$AxeItem"
import {$ICreativeTabMember, $ICreativeTabMember$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICreativeTabMember"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IEtheriumTool, $IEtheriumTool$Type} from "packages/com/aizistral/etherium/core/$IEtheriumTool"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IEtheriumConfig, $IEtheriumConfig$Type} from "packages/com/aizistral/etherium/core/$IEtheriumConfig"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EtheriumAxe extends $AxeItem implements $IEtheriumTool, $ICreativeTabMember {
 "effectiveTags": $Set<($TagKey<($Block)>)>
static "STRIPPABLES": $Map<($Block), ($Block)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "getCreativeTab"(): $CreativeModeTab
public "getConfig"(): $IEtheriumConfig
public "areaEffectsAllowed"(arg0: $ItemStack$Type): boolean
public "toggleAreaEffects"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "enableAreaEffects"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "areaEffectsEnabled"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
public "disableAreaEffects"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "getCreativeTabStacks"(): $List<($ItemStack)>
get "creativeTab"(): $CreativeModeTab
get "config"(): $IEtheriumConfig
get "creativeTabStacks"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtheriumAxe$Type = ($EtheriumAxe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EtheriumAxe_ = $EtheriumAxe$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$EnigmaticItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemSpellstoneCurio, $ItemSpellstoneCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemSpellstoneCurio"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Omniconfig$IntParameter, $Omniconfig$IntParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$IntParameter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Omniconfig$BooleanParameter, $Omniconfig$BooleanParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$BooleanParameter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DamageType, $DamageType$Type} from "packages/net/minecraft/world/damagesource/$DamageType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$ISpellstone, $ISpellstone$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ISpellstone"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnigmaticItem extends $ItemSpellstoneCurio implements $ISpellstone {
static "spellstoneCooldown": $Omniconfig$IntParameter
 "flightMap": $Map<($Player), (boolean)>
static "multiequip": $Omniconfig$BooleanParameter
static "reducedCooldowns": $Predicate<($Player)>
 "immunityList": $List<($ResourceKey<($DamageType)>)>
 "resistanceList": $HashMap<($ResourceKey<($DamageType)>), ($Supplier<(float)>)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
public "triggerActiveAbility"(arg0: $Level$Type, arg1: $ServerPlayer$Type, arg2: $ItemStack$Type): void
public "handleEnigmaticFlight"(arg0: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnigmaticItem$Type = ($EnigmaticItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnigmaticItem_ = $EnigmaticItem$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/api/items/$IBindable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBindable {

}

export namespace $IBindable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBindable$Type = ($IBindable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBindable_ = $IBindable$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/blocks/$BlockAstralDust" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BlockAstralDust extends $Block {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
 "isRandomlyTicking": boolean
 "properties": $BlockBehaviour$Properties

constructor()

public "shouldDisplayFluidOverlay"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type): boolean
public "hasDynamicShape"(): boolean
public "useShapeForLightOcclusion"(arg0: $BlockState$Type): boolean
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAstralDust$Type = ($BlockAstralDust);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAstralDust_ = $BlockAstralDust$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/objects/$AnchorSearchResult" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export class $AnchorSearchResult extends $Record {

constructor(location: $Optional$Type<($Vec3$Type)>, found: boolean, spentCharge: boolean)

public "found"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "location"(): $Optional<($Vec3)>
public "spentCharge"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnchorSearchResult$Type = ($AnchorSearchResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnchorSearchResult_ = $AnchorSearchResult$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$EnigmaticElytra" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ICurio$SoundInfo, $ICurio$SoundInfo$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$SoundInfo"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$TickEvent$PlayerTickEvent, $TickEvent$PlayerTickEvent$Type} from "packages/net/minecraftforge/event/$TickEvent$PlayerTickEvent"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemBaseCurio, $ItemBaseCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseCurio"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IBindable, $IBindable$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$IBindable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnigmaticElytra extends $ItemBaseCurio implements $IBindable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "canElytraFly"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getEquipSound"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): $ICurio$SoundInfo
public "elytraFlightTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): boolean
public "getEquipmentSlot"(arg0: $ItemStack$Type): $EquipmentSlot
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "onPlayerTick"(arg0: $TickEvent$PlayerTickEvent$Type): void
public "onPlayerTickClient"(arg0: $TickEvent$PlayerTickEvent$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnigmaticElytra$Type = ($EnigmaticElytra);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnigmaticElytra_ = $EnigmaticElytra$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemSpellstoneCurio" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Omniconfig$BooleanParameter, $Omniconfig$BooleanParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$BooleanParameter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$ItemBaseCurio, $ItemBaseCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseCurio"
import {$DamageType, $DamageType$Type} from "packages/net/minecraft/world/damagesource/$DamageType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$ISpellstone, $ISpellstone$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ISpellstone"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSpellstoneCurio extends $ItemBaseCurio implements $ISpellstone {
static "multiequip": $Omniconfig$BooleanParameter
static "reducedCooldowns": $Predicate<($Player)>
 "immunityList": $List<($ResourceKey<($DamageType)>)>
 "resistanceList": $HashMap<($ResourceKey<($DamageType)>), ($Supplier<(float)>)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)
constructor()

public "getCooldown"(arg0: $Player$Type): integer
public "canEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
public static "getDefaultProperties"(): $Item$Properties
public "getResistanceModifier"(arg0: string): $Supplier<(float)>
public "isImmuneTo"(arg0: string): boolean
public "isResistantTo"(arg0: string): boolean
public "triggerActiveAbility"(arg0: $Level$Type, arg1: $ServerPlayer$Type, arg2: $ItemStack$Type): void
get "defaultProperties"(): $Item$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSpellstoneCurio$Type = ($ItemSpellstoneCurio);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSpellstoneCurio_ = $ItemSpellstoneCurio$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/objects/$CooldownMap" {
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $CooldownMap extends $HashMap<($LivingEntity), (integer)> {

constructor()

public "tick"(arg0: $LivingEntity$Type): void
public "getCooldown"(arg0: $LivingEntity$Type): integer
public "hasCooldown"(arg0: $LivingEntity$Type): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CooldownMap$Type = ($CooldownMap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CooldownMap_ = $CooldownMap$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/enchantments/$EternalBindingCurse" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $EternalBindingCurse extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor(...arg0: ($EquipmentSlot$Type)[])

public "getMaxLevel"(): integer
public "isDiscoverable"(): boolean
public "isTreasureOnly"(): boolean
public "isAllowedOnBooks"(): boolean
public "getMinLevel"(): integer
public "canEnchant"(arg0: $ItemStack$Type): boolean
public "getMinCost"(arg0: integer): integer
public "isCurse"(): boolean
public "getMaxCost"(arg0: integer): integer
get "maxLevel"(): integer
get "discoverable"(): boolean
get "treasureOnly"(): boolean
get "allowedOnBooks"(): boolean
get "minLevel"(): integer
get "curse"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EternalBindingCurse$Type = ($EternalBindingCurse);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EternalBindingCurse_ = $EternalBindingCurse$Type;
}}
declare module "packages/com/aizistral/omniconfig/$ConfigCategory" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Property, $Property$Type} from "packages/com/aizistral/omniconfig/$Property"
import {$BufferedWriter, $BufferedWriter$Type} from "packages/java/io/$BufferedWriter"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConfigCategory implements $Map<(string), ($Property)> {
readonly "parent": $ConfigCategory
 "initialized": boolean

constructor(arg0: string)
constructor(arg0: string, arg1: $ConfigCategory$Type)

public "getName"(): string
public "get"(arg0: string): $Property
public "put"(arg0: string, arg1: $Property$Type): $Property
public "equals"(arg0: any): boolean
public "values"(): $Collection<($Property)>
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "entrySet"(): $Set<($Map$Entry<(string), ($Property)>)>
public "putAll"(arg0: $Map$Type<(any), (any)>): void
public "write"(arg0: $BufferedWriter$Type, arg1: integer): void
public "containsKey"(arg0: any): boolean
public "containsKey"(arg0: string): boolean
public "keySet"(): $Set<(string)>
public "containsValue"(arg0: any): boolean
public "getComment"(): string
public "setComment"(arg0: string): void
public "getChildren"(): $Set<($ConfigCategory)>
public "removeChild"(arg0: $ConfigCategory$Type): void
public "getValues"(): $Map<(string), ($Property)>
public "isChild"(): boolean
public static "getQualifiedName"(arg0: string, arg1: $ConfigCategory$Type): string
public "getQualifiedName"(): string
public "setPropertyOrder"(arg0: $List$Type<(string)>): $ConfigCategory
public "requiresMcRestart"(): boolean
public "setLanguageKey"(arg0: string): $ConfigCategory
public "setRequiresWorldRestart"(arg0: boolean): $ConfigCategory
public "setRequiresMcRestart"(arg0: boolean): $ConfigCategory
public "requiresWorldRestart"(): boolean
public "hasChanged"(): boolean
public "getOrderedValues"(): $List<($Property)>
public "showInGui"(): boolean
public "getFirstParent"(): $ConfigCategory
public "setShowInGui"(arg0: boolean): $ConfigCategory
public "getPropertyOrder"(): $List<(string)>
public "getLanguagekey"(): string
public "remove"(arg0: any, arg1: any): boolean
public "hashCode"(): integer
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(string), ($Property)>
public "replace"(arg0: string, arg1: $Property$Type): $Property
public "replace"(arg0: string, arg1: $Property$Type, arg2: $Property$Type): boolean
public "replaceAll"(arg0: $BiFunction$Type<(any), (any), (any)>): void
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type, arg6: string, arg7: $Property$Type, arg8: string, arg9: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type, arg6: string, arg7: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type, arg6: string, arg7: $Property$Type, arg8: string, arg9: $Property$Type, arg10: string, arg11: $Property$Type, arg12: string, arg13: $Property$Type, arg14: string, arg15: $Property$Type, arg16: string, arg17: $Property$Type, arg18: string, arg19: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type, arg6: string, arg7: $Property$Type, arg8: string, arg9: $Property$Type, arg10: string, arg11: $Property$Type, arg12: string, arg13: $Property$Type, arg14: string, arg15: $Property$Type, arg16: string, arg17: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type, arg6: string, arg7: $Property$Type, arg8: string, arg9: $Property$Type, arg10: string, arg11: $Property$Type, arg12: string, arg13: $Property$Type, arg14: string, arg15: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type, arg6: string, arg7: $Property$Type, arg8: string, arg9: $Property$Type, arg10: string, arg11: $Property$Type, arg12: string, arg13: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type, arg6: string, arg7: $Property$Type, arg8: string, arg9: $Property$Type, arg10: string, arg11: $Property$Type): $Map<(string), ($Property)>
public "merge"(arg0: string, arg1: $Property$Type, arg2: $BiFunction$Type<(any), (any), (any)>): $Property
public "putIfAbsent"(arg0: string, arg1: $Property$Type): $Property
public "compute"(arg0: string, arg1: $BiFunction$Type<(any), (any), (any)>): $Property
public static "entry"<K, V>(arg0: string, arg1: $Property$Type): $Map$Entry<(string), ($Property)>
public "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
public "computeIfAbsent"(arg0: string, arg1: $Function$Type<(any), (any)>): $Property
public "getOrDefault"(arg0: any, arg1: $Property$Type): $Property
public "computeIfPresent"(arg0: string, arg1: $BiFunction$Type<(any), (any), (any)>): $Property
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(string), ($Property)>
[index: string | number]: $Property
get "name"(): string
get "empty"(): boolean
get "comment"(): string
set "comment"(value: string)
get "children"(): $Set<($ConfigCategory)>
get "child"(): boolean
get "qualifiedName"(): string
set "propertyOrder"(value: $List$Type<(string)>)
set "languageKey"(value: string)
get "orderedValues"(): $List<($Property)>
get "firstParent"(): $ConfigCategory
get "propertyOrder"(): $List<(string)>
get "languagekey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigCategory$Type = ($ConfigCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigCategory_ = $ConfigCategory$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/enchantments/$CeaselessEnchantment" {
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Omniconfig$BooleanParameter, $Omniconfig$BooleanParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$BooleanParameter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $CeaselessEnchantment extends $Enchantment {
static "allowNoArrow": $Omniconfig$BooleanParameter
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor(...arg0: ($EquipmentSlot$Type)[])

public "getMaxLevel"(): integer
public "isDiscoverable"(): boolean
public "isTreasureOnly"(): boolean
public "isAllowedOnBooks"(): boolean
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
public "getMinLevel"(): integer
public "canEnchant"(arg0: $ItemStack$Type): boolean
public "isCurse"(): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
get "maxLevel"(): integer
get "discoverable"(): boolean
get "treasureOnly"(): boolean
get "allowedOnBooks"(): boolean
get "minLevel"(): integer
get "curse"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CeaselessEnchantment$Type = ($CeaselessEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CeaselessEnchantment_ = $CeaselessEnchantment$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$UnholyGrail" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Vanishable, $Vanishable$Type} from "packages/net/minecraft/world/item/$Vanishable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UnholyGrail extends $ItemBase implements $Vanishable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnholyGrail$Type = ($UnholyGrail);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnholyGrail_ = $UnholyGrail$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$TheCube" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemSpellstoneCurio, $ItemSpellstoneCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemSpellstoneCurio"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Omniconfig$BooleanParameter, $Omniconfig$BooleanParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$BooleanParameter"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$DamageType, $DamageType$Type} from "packages/net/minecraft/world/damagesource/$DamageType"
import {$ISpellstone, $ISpellstone$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ISpellstone"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TheCube extends $ItemSpellstoneCurio implements $ISpellstone {
static "multiequip": $Omniconfig$BooleanParameter
static "reducedCooldowns": $Predicate<($Player)>
 "immunityList": $List<($ResourceKey<($DamageType)>)>
 "resistanceList": $HashMap<($ResourceKey<($DamageType)>), ($Supplier<(float)>)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getCooldown"(arg0: $Player$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getFortuneLevel"(arg0: $SlotContext$Type, arg1: $LootContext$Type, arg2: $ItemStack$Type): integer
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "onUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public "clearLocationCache"(): void
public "getAttributesTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "triggerActiveAbility"(arg0: $Level$Type, arg1: $ServerPlayer$Type, arg2: $ItemStack$Type): void
public "getCurrentModifiers"(arg0: $Player$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getDamageLimit"(arg0: $Player$Type): float
public "applyRandomEffect"(arg0: $LivingEntity$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TheCube$Type = ($TheCube);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TheCube_ = $TheCube$Type;
}}
declare module "packages/com/aizistral/etherium/items/$EnderRod" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICreativeTabMember, $ICreativeTabMember$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICreativeTabMember"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnderRod extends $Item implements $ICreativeTabMember {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getCreativeTab"(): $CreativeModeTab
public "getCreativeTabStacks"(): $List<($ItemStack)>
get "creativeTab"(): $CreativeModeTab
get "creativeTabStacks"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderRod$Type = ($EnderRod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderRod_ = $EnderRod$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$EnderRing" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Omniconfig$IntParameter, $Omniconfig$IntParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$IntParameter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Omniconfig$BooleanParameter, $Omniconfig$BooleanParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$BooleanParameter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemBaseCurio, $ItemBaseCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseCurio"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnderRing extends $ItemBaseCurio {
static "inventoryButtonEnabled": $Omniconfig$BooleanParameter
static "buttonOffsetX": $Omniconfig$IntParameter
static "buttonOffsetY": $Omniconfig$IntParameter
static "buttonOffsetXCreative": $Omniconfig$IntParameter
static "buttonOffsetYCreative": $Omniconfig$IntParameter
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderRing$Type = ($EnderRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderRing_ = $EnderRing$Type;
}}
declare module "packages/com/aizistral/etherium/items/$EtheriumPickaxe" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemEtheriumTool, $ItemEtheriumTool$Type} from "packages/com/aizistral/etherium/items/generic/$ItemEtheriumTool"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EtheriumPickaxe extends $ItemEtheriumTool {
 "effectiveTags": $Set<($TagKey<($Block)>)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtheriumPickaxe$Type = ($EtheriumPickaxe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EtheriumPickaxe_ = $EtheriumPickaxe$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$EarthHeart" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Vanishable, $Vanishable$Type} from "packages/net/minecraft/world/item/$Vanishable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ITaintable, $ITaintable$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ITaintable"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EarthHeart extends $ItemBase implements $ITaintable, $Vanishable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isTainted"(arg0: $ItemStack$Type): boolean
public "handleTaintable"(arg0: $ItemStack$Type, arg1: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EarthHeart$Type = ($EarthHeart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EarthHeart_ = $EarthHeart$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$AvariceScroll" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICursed, $ICursed$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ICursed"
import {$Omniconfig$IntParameter, $Omniconfig$IntParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$IntParameter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemBaseCurio, $ItemBaseCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBaseCurio"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AvariceScroll extends $ItemBaseCurio implements $ICursed {
static "emeraldChance": $Omniconfig$IntParameter
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "getFortuneLevel"(arg0: $SlotContext$Type, arg1: $LootContext$Type, arg2: $ItemStack$Type): integer
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
public "makesPiglinsNeutral"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "makesPiglinsNeutral"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AvariceScroll$Type = ($AvariceScroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AvariceScroll_ = $AvariceScroll$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/blocks/$BlockMassiveLamp" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BlockMassiveLamp extends $Block {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
 "isRandomlyTicking": boolean
 "properties": $BlockBehaviour$Properties

constructor()

public "shouldDisplayFluidOverlay"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type): boolean
public "hasDynamicShape"(): boolean
public "useShapeForLightOcclusion"(arg0: $BlockState$Type): boolean
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMassiveLamp$Type = ($BlockMassiveLamp);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMassiveLamp_ = $BlockMassiveLamp$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$VoidPearl" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemSpellstoneCurio, $ItemSpellstoneCurio$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemSpellstoneCurio"
import {$Omniconfig$DoubleParameter, $Omniconfig$DoubleParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$DoubleParameter"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Omniconfig$IntParameter, $Omniconfig$IntParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$IntParameter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Omniconfig$BooleanParameter, $Omniconfig$BooleanParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$BooleanParameter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Omniconfig$PerhapsParameter, $Omniconfig$PerhapsParameter$Type} from "packages/com/aizistral/omniconfig/wrappers/$Omniconfig$PerhapsParameter"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DamageType, $DamageType$Type} from "packages/net/minecraft/world/damagesource/$DamageType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$OmniconfigWrapper, $OmniconfigWrapper$Type} from "packages/com/aizistral/omniconfig/wrappers/$OmniconfigWrapper"
import {$ISpellstone, $ISpellstone$Type} from "packages/com/aizistral/enigmaticlegacy/api/items/$ISpellstone"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VoidPearl extends $ItemSpellstoneCurio implements $ISpellstone {
static "spellstoneCooldown": $Omniconfig$IntParameter
static "baseDarknessDamage": $Omniconfig$DoubleParameter
static "regenerationDemodifier": $Omniconfig$DoubleParameter
static "shadowRange": $Omniconfig$DoubleParameter
static "undeadProbability": $Omniconfig$PerhapsParameter
static "witheringTime": $Omniconfig$IntParameter
static "witheringLevel": $Omniconfig$IntParameter
 "healList": $List<($ResourceKey<($DamageType)>)>
static "multiequip": $Omniconfig$BooleanParameter
static "reducedCooldowns": $Predicate<($Player)>
 "immunityList": $List<($ResourceKey<($DamageType)>)>
 "resistanceList": $HashMap<($ResourceKey<($DamageType)>), ($Supplier<(float)>)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public static "onConfig"(arg0: $OmniconfigWrapper$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidPearl$Type = ($VoidPearl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidPearl_ = $VoidPearl$Type;
}}
declare module "packages/com/aizistral/enigmaticlegacy/items/$DarkestScroll" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBase, $ItemBase$Type} from "packages/com/aizistral/enigmaticlegacy/items/generic/$ItemBase"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DarkestScroll extends $ItemBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DarkestScroll$Type = ($DarkestScroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DarkestScroll_ = $DarkestScroll$Type;
}}
