declare module "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$MoneyViewer" {
import {$IMoneyViewer, $IMoneyViewer$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$IMoneyViewer"
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"

export class $MoneyViewer implements $IMoneyViewer {

constructor()

public "flagAsKnown"(arg0: any): void
public "forgetContext"(arg0: any): void
public "hasStoredMoneyChanged"(arg0: any): boolean
public "getStoredMoney"(): $MoneyView
get "storedMoney"(): $MoneyView
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoneyViewer$Type = ($MoneyViewer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoneyViewer_ = $MoneyViewer$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$TallRotatableBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITallBlock, $ITallBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$ITallBlock"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$RotatableBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $TallRotatableBlock extends $RotatableBlock implements $ITallBlock {
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


public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getIsBottom"(arg0: $BlockState$Type): boolean
public "getOtherHeight"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockPos
public "getIsTop"(arg0: $BlockState$Type): boolean
public "isReplaceable"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TallRotatableBlock$Type = ($TallRotatableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TallRotatableBlock_ = $TallRotatableBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/interfaces/$IBookTraderBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ITraderBlock, $ITraderBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$ITraderBlock"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IBookTraderBlock extends $ITraderBlock {

 "maxRenderIndex"(): integer
 "GetBookRenderRot"(arg0: integer, arg1: $BlockState$Type): $List<($Quaternionf)>
 "GetBookRenderPos"(arg0: integer, arg1: $BlockState$Type): $Vector3f
 "GetBookRenderScale"(arg0: integer, arg1: $BlockState$Type): float
 "canBreak"(arg0: $Player$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
 "getDropBlockItem"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
 "getBlockEntity"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type): $BlockEntity
 "getCapabilityBlockEntity"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $BlockEntity
}

export namespace $IBookTraderBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBookTraderBlock$Type = ($IBookTraderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBookTraderBlock_ = $IBookTraderBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/blockentity/$EasyBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EasyBlockEntity extends $BlockEntity implements $IClientTracker {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "isClient"(): boolean
public "getUpdateTag"(): $CompoundTag
public "isServer"(): boolean
get "client"(): boolean
get "updateTag"(): $CompoundTag
get "server"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasyBlockEntity$Type = ($EasyBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasyBlockEntity_ = $EasyBlockEntity$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/$CardDisplayBlock" {
import {$ItemPositionData, $ItemPositionData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/$ItemPositionData"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$TraderBlockRotatable, $TraderBlockRotatable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockRotatable"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IItemTraderBlock, $IItemTraderBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/interfaces/$IItemTraderBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Color, $Color$Type} from "packages/io/github/lightman314/lightmanscurrency/common/core/variants/$Color"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $CardDisplayBlock extends $TraderBlockRotatable implements $IItemTraderBlock {
static readonly "TRADECOUNT": integer
static readonly "FACING": $DirectionProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: string, arg2: $Color$Type)

public "validTraderTypes"(): $List<($BlockEntityType<(any)>)>
public "traderType"(): $BlockEntityType<(any)>
public "getDescriptionId"(): string
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getItemPositionData"(): $ItemPositionData
public "getBlockEntity"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type): $BlockEntity
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "descriptionId"(): string
get "itemPositionData"(): $ItemPositionData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CardDisplayBlock$Type = ($CardDisplayBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CardDisplayBlock_ = $CardDisplayBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/client/$TradeRenderManager" {
import {$ScreenPosition, $ScreenPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DisplayEntry, $DisplayEntry$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/trade/$DisplayEntry"
import {$AlertData, $AlertData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/trade/$AlertData"
import {$TradeData, $TradeData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/$TradeData"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$DisplayData, $DisplayData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/trade/$DisplayData"
import {$EasyWidget, $EasyWidget$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/easy/$EasyWidget"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EasyGuiGraphics, $EasyGuiGraphics$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/client/rendering/$EasyGuiGraphics"

export class $TradeRenderManager<T extends $TradeData> {
readonly "trade": T


public "renderAdditional"(arg0: $EasyWidget$Type, arg1: $EasyGuiGraphics$Type, arg2: $TradeContext$Type): void
public "getAdditionalTooltips"(arg0: $TradeContext$Type, arg1: integer, arg2: integer): $List<($Component)>
public "alertPosition"(arg0: $TradeContext$Type): $ScreenPosition
public "tradeButtonWidth"(arg0: $TradeContext$Type): integer
public "arrowPosition"(arg0: $TradeContext$Type): $LazyOptional<($ScreenPosition)>
public "getInputDisplays"(arg0: $TradeContext$Type): $List<($DisplayEntry)>
public "inputDisplayArea"(arg0: $TradeContext$Type): $DisplayData
public "getAlertData"(arg0: $TradeContext$Type): $List<($AlertData)>
public "outputDisplayArea"(arg0: $TradeContext$Type): $DisplayData
public "getOutputDisplays"(arg0: $TradeContext$Type): $List<($DisplayEntry)>
public "getStockTooltip"(arg0: boolean, arg1: integer): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeRenderManager$Type<T> = ($TradeRenderManager<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeRenderManager_<T> = $TradeRenderManager$Type<(T)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/rendering/$Sprite" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $Sprite {
readonly "image": $ResourceLocation
readonly "u": integer
readonly "v": integer
readonly "width": integer
readonly "height": integer
readonly "hoverOffsetU": integer
readonly "hoverOffsetV": integer


public static "LockedSprite"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $Sprite
public static "SimpleSpriteH"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $Sprite
public static "SimpleSprite"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $Sprite
public "getU"(arg0: boolean): integer
public "getV"(arg0: boolean): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Sprite$Type = ($Sprite);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Sprite_ = $Sprite$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$IUpgradeable" {
import {$UpgradeType, $UpgradeType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeType"
import {$UpgradeItem, $UpgradeItem$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/$UpgradeItem"

export interface $IUpgradeable {

 "allowUpgrade"(arg0: $UpgradeItem$Type): boolean
 "allowUpgrade"(arg0: $UpgradeType$Type): boolean

(arg0: $UpgradeItem$Type): boolean
}

export namespace $IUpgradeable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeable$Type = ($IUpgradeable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeable_ = $IUpgradeable$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$TraderStorageClientTab" {
import {$EasyTab, $EasyTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$EasyTab"
import {$ITraderStorageMenu, $ITraderStorageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageMenu"
import {$TraderStorageTab, $TraderStorageTab$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$TraderStorageTab"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$ITraderStorageScreen, $ITraderStorageScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageScreen"

export class $TraderStorageClientTab<T extends $TraderStorageTab> extends $EasyTab {
readonly "screen": $ITraderStorageScreen
readonly "menu": $ITraderStorageMenu
readonly "commonTab": T


public "shouldRenderInventoryText"(): boolean
public "tabButtonVisible"(): boolean
public "receiveSelfMessage"(arg0: $LazyPacketData$Type): void
public "getColor"(): integer
public "receiveServerMessage"(arg0: $LazyPacketData$Type): void
public "getTradeRuleTradeIndex"(): integer
get "color"(): integer
get "tradeRuleTradeIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderStorageClientTab$Type<T> = ($TraderStorageClientTab<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderStorageClientTab_<T> = $TraderStorageClientTab$Type<(T)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/taxes/data/$TaxStats" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ITaxable, $ITaxable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/taxes/$ITaxable"
import {$TaxEntry, $TaxEntry$Type} from "packages/io/github/lightman314/lightmanscurrency/common/taxes/$TaxEntry"
import {$TaxableReference, $TaxableReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/taxes/reference/$TaxableReference"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$MoneyStorage, $MoneyStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyStorage"

export class $TaxStats {

constructor(arg0: $TaxEntry$Type)

public "getUniqueTaxableCount"(): integer
public "load"(arg0: $CompoundTag$Type): void
public "clear"(): void
public "save"(): $CompoundTag
public "OnTaxesCollected"(arg0: $ITaxable$Type, arg1: $MoneyValue$Type): void
public "markDirty"(): void
public "getMostTaxed"(): $TaxableReference
public "removeInvalidData"(): void
public "getMostTaxedCount"(): integer
public "getTotalCollected"(): $MoneyStorage
get "uniqueTaxableCount"(): integer
get "mostTaxed"(): $TaxableReference
get "mostTaxedCount"(): integer
get "totalCollected"(): $MoneyStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaxStats$Type = ($TaxStats);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaxStats_ = $TaxStats$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/tab/$ITab" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IconData, $IconData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/icon/$IconData"

export interface $ITab {

 "getColor"(): integer
 "getTooltip"(): $Component
 "getIcon"(): $IconData
}

export namespace $ITab {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITab$Type = ($ITab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITab_ = $ITab$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/text/$MultiLineTextEntry" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/net/minecraftforge/common/util/$NonNullSupplier"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $MultiLineTextEntry {

constructor(arg0: string)

public "get"(...arg0: (any)[]): $List<($Component)>
public "getKey"(arg0: integer): string
public static "message"(arg0: string, arg1: string): $MultiLineTextEntry
public "asSupplier"(...arg0: (any)[]): $NonNullSupplier<($List<($Component)>)>
public "getWithStyle"(arg0: $Consumer$Type<($MutableComponent$Type)>, ...arg1: (any)[]): $List<($Component)>
public "getWithStyle"(arg0: $ChatFormatting$Type, ...arg1: (any)[]): $List<($Component)>
public "asTooltip"(...arg0: (any)[]): $NonNullSupplier<($List<($Component)>)>
public static "tooltip"(arg0: string, arg1: string): $MultiLineTextEntry
public "tooltip"(arg0: $List$Type<($Component$Type)>, ...arg1: (any)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiLineTextEntry$Type = ($MultiLineTextEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiLineTextEntry_ = $MultiLineTextEntry$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent" {
import {$TraderData, $TraderData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$PlayerReference, $PlayerReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$PlayerReference"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$TradeData, $TradeData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/$TradeData"

export class $TradeEvent extends $Event {

constructor()

public "getContext"(): $TradeContext
public "isCancelable"(): boolean
public "getTrade"(): $TradeData
public "getTradeIndex"(): integer
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "getTrader"(): $TraderData
public "getPlayerReference"(): $PlayerReference
get "context"(): $TradeContext
get "cancelable"(): boolean
get "trade"(): $TradeData
get "tradeIndex"(): integer
get "listenerList"(): $ListenerList
get "trader"(): $TraderData
get "playerReference"(): $PlayerReference
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeEvent$Type = ($TradeEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeEvent_ = $TradeEvent$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent$PostTradeEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$TradeData, $TradeData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/$TradeData"
import {$TradeEvent, $TradeEvent$Type} from "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent"

export class $TradeEvent$PostTradeEvent extends $TradeEvent {

constructor()
constructor(arg0: $TradeData$Type, arg1: $TradeContext$Type, arg2: $MoneyValue$Type, arg3: $MoneyValue$Type)

public "clean"(): void
public "isDirty"(): boolean
public "getListenerList"(): $ListenerList
public "markDirty"(): void
public "getTaxesPaid"(): $MoneyValue
public "getPricePaid"(): $MoneyValue
get "dirty"(): boolean
get "listenerList"(): $ListenerList
get "taxesPaid"(): $MoneyValue
get "pricePaid"(): $MoneyValue
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeEvent$PostTradeEvent$Type = ($TradeEvent$PostTradeEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeEvent$PostTradeEvent_ = $TradeEvent$PostTradeEvent$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/interfaces/$IEasyScreen" {
import {$ScreenPosition, $ScreenPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"

export interface $IEasyScreen {

 "removeChild"(arg0: any): void
 "getGuiLeft"(): integer
 "getGuiTop"(): integer
 "addChild"<W>(arg0: W): W
 "blockInventoryClosing"(): boolean
 "getCorner"(): $ScreenPosition
 "getArea"(): $ScreenArea
 "getYSize"(): integer
 "getXSize"(): integer
 "getFont"(): $Font
 "getPlayer"(): $Player
}

export namespace $IEasyScreen {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEasyScreen$Type = ($IEasyScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEasyScreen_ = $IEasyScreen$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/trade/$AlertType" {
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $AlertType {
static readonly "HELPFUL": $AlertType
static readonly "NEUTRAL": $AlertType
static readonly "WARN": $AlertType
static readonly "ERROR": $AlertType
readonly "priority": integer
readonly "color": integer
readonly "format": $UnaryOperator<($Style)>

constructor(arg0: integer, arg1: integer, arg2: $ChatFormatting$Type)
constructor(arg0: integer, arg1: integer, arg2: $UnaryOperator$Type<($Style$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlertType$Type = ($AlertType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlertType_ = $AlertType$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/teams/$Team" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$StatTracker, $StatTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatTracker"
import {$BankReference, $BankReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/bank/reference/$BankReference"
import {$IBankAccount, $IBankAccount$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/bank/$IBankAccount"
import {$PlayerReference, $PlayerReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$PlayerReference"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ITeam, $ITeam$Type} from "packages/io/github/lightman314/lightmanscurrency/api/teams/$ITeam"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"

export class $Team implements $ITeam {
static readonly "MAX_NAME_LENGTH": integer


public "getOwner"(): $PlayerReference
public "getName"(): string
public static "load"(arg0: $CompoundTag$Type): $Team
public static "of"(arg0: long, arg1: $PlayerReference$Type, arg2: string): $Team
public "save"(): $CompoundTag
public "getMembers"(): $List<($PlayerReference)>
public "changeName"(arg0: $Player$Type, arg1: string): void
public "getID"(): long
public "isOwner"(arg0: $UUID$Type): boolean
public "isOwner"(arg0: $Player$Type): boolean
public "isClient"(): boolean
public "flagAsClient"(): $Team
public "getStats"(): $StatTracker
public "getBankAccount"(): $IBankAccount
public "hasBankAccount"(): boolean
public static "NextBankLimit"(arg0: integer): integer
public "HandleEditRequest"(arg0: $ServerPlayer$Type, arg1: $LazyPacketData$Type): void
public "changeAddMember"(arg0: $Player$Type, arg1: string): void
public "clearStats"(arg0: $Player$Type): void
public "changeRemoveMember"(arg0: $Player$Type, arg1: string): void
public "changeOwner"(arg0: $Player$Type, arg1: string): void
public "getAdmins"(): $List<($PlayerReference)>
public "getBankReference"(): $BankReference
public "createBankAccount"(arg0: $Player$Type): void
public "changeBankLimit"(arg0: $Player$Type, arg1: integer): void
public "getBankLimit"(): integer
public "changeAddAdmin"(arg0: $Player$Type, arg1: string): void
public static "sorterFor"(arg0: $Player$Type): $Comparator<($ITeam)>
public "canAccessBankAccount"(arg0: $Player$Type): boolean
public "markDirty"(): void
public "isMember"(arg0: $UUID$Type): boolean
public "isMember"(arg0: $Player$Type): boolean
public "isAdmin"(arg0: $Player$Type): boolean
public "isAdmin"(arg0: $UUID$Type): boolean
public "isOwner"(arg0: $PlayerReference$Type): boolean
public "getAdminsAndOwner"(): $List<($PlayerReference)>
public "getMemberCount"(): integer
public "isMember"(arg0: $PlayerReference$Type): boolean
public "isAdmin"(arg0: $PlayerReference$Type): boolean
public "getAllMembers"(): $List<($PlayerReference)>
public "isServer"(): boolean
get "owner"(): $PlayerReference
get "name"(): string
get "members"(): $List<($PlayerReference)>
get "iD"(): long
get "client"(): boolean
get "stats"(): $StatTracker
get "bankAccount"(): $IBankAccount
get "admins"(): $List<($PlayerReference)>
get "bankReference"(): $BankReference
get "bankLimit"(): integer
get "adminsAndOwner"(): $List<($PlayerReference)>
get "memberCount"(): integer
get "allMembers"(): $List<($PlayerReference)>
get "server"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Team$Type = ($Team);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Team_ = $Team$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatType" {
import {$StatType$Instance, $StatType$Instance$Type} from "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatType$Instance"
import {$StatKey, $StatKey$Type} from "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $StatType<A, B> {

constructor()

public static "register"(arg0: $StatType$Type<(any), (any)>): void
public "create"(): $StatType$Instance<(A), (B)>
public "getID"(): $ResourceLocation
public static "getID"(arg0: $ResourceLocation$Type): $StatType<(any), (any)>
public static "getTranslationKey"(arg0: string): string
public "createKey"(arg0: string): $StatKey<(A), (B)>
get "iD"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatType$Type<A, B> = ($StatType<(A), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatType_<A, B> = $StatType$Type<(A), (B)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/emergency_ejection/$IDumpable" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$OwnerData, $OwnerData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$OwnerData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $IDumpable {

 "getOwner"(): $OwnerData
 "getName"(): $MutableComponent
 "getContents"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): $List<($ItemStack)>
}

export namespace $IDumpable {
function preCollected(arg0: $List$Type<($ItemStack$Type)>, arg1: $Component$Type, arg2: $OwnerData$Type): $IDumpable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDumpable$Type = ($IDumpable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDumpable_ = $IDumpable$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/world/$WorldPosition" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$WorldArea, $WorldArea$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/world/$WorldArea"

export class $WorldPosition {
static readonly "VOID": $WorldPosition


public "equals"(arg0: any): boolean
public static "load"(arg0: $CompoundTag$Type): $WorldPosition
public static "of"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: $BlockPos$Type): $WorldPosition
public "save"(): $CompoundTag
public "isVoid"(): boolean
public "getDimension"(): $ResourceKey<($Level)>
public static "ofBE"(arg0: $BlockEntity$Type): $WorldPosition
public static "ofLevel"(arg0: $Level$Type, arg1: $BlockPos$Type): $WorldPosition
public "getArea"(arg0: integer, arg1: integer, arg2: integer): $WorldArea
public "sameDimension"(arg0: $WorldPosition$Type): boolean
public "sameDimension"(arg0: $Level$Type): boolean
public "getPos"(): $BlockPos
get "void"(): boolean
get "dimension"(): $ResourceKey<($Level)>
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldPosition$Type = ($WorldPosition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldPosition_ = $WorldPosition$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$CapacityUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeData, $UpgradeData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeData"
import {$CapacityUpgrade, $CapacityUpgrade$Type} from "packages/io/github/lightman314/lightmanscurrency/common/upgrades/types/capacity/$CapacityUpgrade"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$UpgradeItem, $UpgradeItem$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/$UpgradeItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CapacityUpgradeItem extends $UpgradeItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $CapacityUpgrade$Type, arg1: integer, arg2: $Item$Properties$Type)
constructor(arg0: $CapacityUpgrade$Type, arg1: $Supplier$Type<(integer)>, arg2: $Item$Properties$Type)

public "fillUpgradeData"(arg0: $UpgradeData$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapacityUpgradeItem$Type = ($CapacityUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapacityUpgradeItem_ = $CapacityUpgradeItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$TicketItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Color, $Color$Type} from "packages/io/github/lightman314/lightmanscurrency/common/core/variants/$Color"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TicketItem extends $Item {
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

public static "CreateExampleTicket"(arg0: $Item$Type, arg1: $Color$Type): $ItemStack
public static "GetDefaultTicketColor"(arg0: long): integer
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "GetTicketID"(arg0: $ItemStack$Type): long
public static "isTicket"(arg0: $ItemStack$Type): boolean
public static "isTicketOrPass"(arg0: $ItemStack$Type): boolean
public static "isMasterTicket"(arg0: $ItemStack$Type): boolean
public static "CreateTicket"(arg0: $Item$Type, arg1: long): $ItemStack
public static "CreateTicket"(arg0: $Item$Type, arg1: long, arg2: integer): $ItemStack
public static "CreateTicket"(arg0: $Item$Type, arg1: long, arg2: integer, arg3: integer): $ItemStack
public static "CraftTicket"(arg0: $ItemStack$Type, arg1: $Item$Type): $ItemStack
public static "GetTicketColor"(arg0: $ItemStack$Type): integer
public static "SetTicketColor"(arg0: $ItemStack$Type, arg1: integer): void
public static "SetTicketColor"(arg0: $ItemStack$Type, arg1: $Color$Type): void
public static "isPass"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TicketItem$Type = ($TicketItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TicketItem_ = $TicketItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"

export class $LazyPacketData {
static readonly "TYPE_NULL": byte
static readonly "TYPE_BOOLEAN": byte
static readonly "TYPE_INT": byte
static readonly "TYPE_LONG": byte
static readonly "TYPE_FLOAT": byte
static readonly "TYPE_DOUBLE": byte
static readonly "TYPE_STRING": byte
static readonly "TYPE_TEXT": byte
static readonly "TYPE_NBT": byte


public static "simpleTag"(arg0: string, arg1: $CompoundTag$Type): $LazyPacketData$Builder
public static "simpleString"(arg0: string, arg1: string): $LazyPacketData$Builder
public static "simpleText"(arg0: string, arg1: $Component$Type): $LazyPacketData$Builder
public static "simpleMoneyValue"(arg0: string, arg1: $MoneyValue$Type): $LazyPacketData$Builder
public "getBoolean"(arg0: string, arg1: boolean): boolean
public "getBoolean"(arg0: string): boolean
public "getInt"(arg0: string, arg1: integer): integer
public "getInt"(arg0: string): integer
public "getLong"(arg0: string): long
public "getLong"(arg0: string, arg1: long): long
public "getFloat"(arg0: string, arg1: float): float
public "getFloat"(arg0: string): float
public "getDouble"(arg0: string): double
public "getDouble"(arg0: string, arg1: double): double
public static "decode"(arg0: $FriendlyByteBuf$Type): $LazyPacketData
public "encode"(arg0: $FriendlyByteBuf$Type): void
public static "builder"(): $LazyPacketData$Builder
public "contains"(arg0: string, arg1: byte): boolean
public "contains"(arg0: string): boolean
public "getString"(arg0: string, arg1: string): string
public "getString"(arg0: string): string
public "getText"(arg0: string, arg1: $Component$Type): $Component
public "getText"(arg0: string): $Component
public "getResourceLocation"(arg0: string): $ResourceLocation
public "getResourceLocation"(arg0: string, arg1: $ResourceLocation$Type): $ResourceLocation
public "getMoneyValue"(arg0: string, arg1: $MoneyValue$Type): $MoneyValue
public "getMoneyValue"(arg0: string): $MoneyValue
public static "simpleInt"(arg0: string, arg1: integer): $LazyPacketData$Builder
public static "simpleFlag"(arg0: string): $LazyPacketData$Builder
public static "simpleLong"(arg0: string, arg1: long): $LazyPacketData$Builder
public static "simpleBoolean"(arg0: string, arg1: boolean): $LazyPacketData$Builder
public "getNBT"(arg0: string): $CompoundTag
public "getNBT"(arg0: string, arg1: $CompoundTag$Type): $CompoundTag
public static "simpleDouble"(arg0: string, arg1: double): $LazyPacketData$Builder
public "copyToBuilder"(): $LazyPacketData$Builder
public static "simpleFloat"(arg0: string, arg1: float): $LazyPacketData$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LazyPacketData$Type = ($LazyPacketData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LazyPacketData_ = $LazyPacketData$Type;
}}
declare module "packages/io/github/mortuusars/exposure/recipe/$FilmDevelopingRecipe" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AbstractNbtTransferringRecipe, $AbstractNbtTransferringRecipe$Type} from "packages/io/github/mortuusars/exposure/recipe/$AbstractNbtTransferringRecipe"

export class $FilmDevelopingRecipe extends $AbstractNbtTransferringRecipe {

constructor(id: $ResourceLocation$Type, filmIngredient: $Ingredient$Type, ingredients: $NonNullList$Type<($Ingredient$Type)>, result: $ItemStack$Type)

public "getSerializer"(): $RecipeSerializer<(any)>
public "getRemainingItems"(container: $CraftingContainer$Type): $NonNullList<($ItemStack)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilmDevelopingRecipe$Type = ($FilmDevelopingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilmDevelopingRecipe_ = $FilmDevelopingRecipe$Type;
}}
declare module "packages/io/github/mortuusars/salt/block/$SaltCauldronBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LayeredCauldronBlock, $LayeredCauldronBlock$Type} from "packages/net/minecraft/world/level/block/$LayeredCauldronBlock"
import {$Biome$Precipitation, $Biome$Precipitation$Type} from "packages/net/minecraft/world/level/biome/$Biome$Precipitation"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CauldronInteraction, $CauldronInteraction$Type} from "packages/net/minecraft/core/cauldron/$CauldronInteraction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SaltCauldronBlock extends $LayeredCauldronBlock {
static readonly "MIN_FILL_LEVEL": integer
static readonly "MAX_FILL_LEVEL": integer
static readonly "LEVEL": $IntegerProperty
static readonly "RAIN": $Predicate<($Biome$Precipitation)>
static readonly "SNOW": $Predicate<($Biome$Precipitation)>
readonly "interactions": $Map<($Item), ($CauldronInteraction)>
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

constructor(arg0: $Predicate$Type<($Biome$Precipitation$Type)>, arg1: $Map$Type<($Item$Type), ($CauldronInteraction$Type)>)

public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "handlePrecipitation"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Biome$Precipitation$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SaltCauldronBlock$Type = ($SaltCauldronBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SaltCauldronBlock_ = $SaltCauldronBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$MoneyViewer$Slave" {
import {$IMoneyViewer, $IMoneyViewer$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$IMoneyViewer"
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"

export class $MoneyViewer$Slave implements $IMoneyViewer {

constructor()

public "flagAsKnown"(arg0: any): void
public "forgetContext"(arg0: any): void
public "hasStoredMoneyChanged"(arg0: any): boolean
public "getStoredMoney"(): $MoneyView
get "storedMoney"(): $MoneyView
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoneyViewer$Slave$Type = ($MoneyViewer$Slave);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoneyViewer$Slave_ = $MoneyViewer$Slave$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$OwnerData" {
import {$Owner, $Owner$Type} from "packages/io/github/lightman314/lightmanscurrency/api/ownership/$Owner"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$PlayerReference, $PlayerReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$PlayerReference"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IOwnerData, $IOwnerData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/ownership/$IOwnerData"
import {$Team, $Team$Type} from "packages/io/github/lightman314/lightmanscurrency/common/teams/$Team"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $OwnerData implements $IOwnerData {

constructor(arg0: $IClientTracker$Type, arg1: $Consumer$Type<($OwnerData$Type)>)

/**
 * 
 * @deprecated
 */
public "SetCustomOwner"(arg0: $MutableComponent$Type): void
/**
 * 
 * @deprecated
 */
public "SetCustomOwner"(arg0: string): void
public "getName"(): $MutableComponent
public "load"(arg0: $CompoundTag$Type): void
public "save"(): $CompoundTag
public "copyFrom"(arg0: $OwnerData$Type): void
/**
 * 
 * @deprecated
 */
public "getOwnerName"(): string
/**
 * 
 * @deprecated
 */
public "getOwnerName"(arg0: boolean): string
public "flagAsClient"(): void
public "getValidOwner"(): $Owner
/**
 * 
 * @deprecated
 */
public "hasPlayer"(): boolean
public "isMember"(arg0: $PlayerReference$Type): boolean
public "isMember"(arg0: $Player$Type): boolean
/**
 * 
 * @deprecated
 */
public "SetOwner"(arg0: $Player$Type): void
/**
 * 
 * @deprecated
 */
public "SetOwner"(arg0: $PlayerReference$Type): void
/**
 * 
 * @deprecated
 */
public "SetOwner"(arg0: $Team$Type): void
public "SetOwner"(arg0: $Owner$Type): void
public "hasOwner"(): boolean
public "isAdmin"(arg0: $Player$Type): boolean
public "isAdmin"(arg0: $PlayerReference$Type): boolean
/**
 * 
 * @deprecated
 */
public "getPlayer"(): $PlayerReference
/**
 * 
 * @deprecated
 */
public "getTeam"(): $Team
public "getPlayerForContext"(): $PlayerReference
/**
 * 
 * @deprecated
 */
public "hasTeam"(): boolean
get "name"(): $MutableComponent
get "ownerName"(): string
get "validOwner"(): $Owner
get "player"(): $PlayerReference
get "team"(): $Team
get "playerForContext"(): $PlayerReference
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwnerData$Type = ($OwnerData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwnerData_ = $OwnerData$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/$TicketKioskBlock" {
import {$ItemPositionData, $ItemPositionData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/$ItemPositionData"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IItemTraderBlock, $IItemTraderBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/interfaces/$IItemTraderBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$TraderBlockTallRotatable, $TraderBlockTallRotatable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockTallRotatable"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $TicketKioskBlock extends $TraderBlockTallRotatable implements $IItemTraderBlock {
static readonly "TRADECOUNT": integer
static readonly "FACING": $DirectionProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "makeTrader"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "traderType"(): $BlockEntityType<(any)>
public "getItemPositionData"(): $ItemPositionData
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "itemPositionData"(): $ItemPositionData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TicketKioskBlock$Type = ($TicketKioskBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TicketKioskBlock_ = $TicketKioskBlock$Type;
}}
declare module "packages/io/github/mortuusars/wares/data/agreement/$DeliveryAgreement" {
import {$AgreementBuilder, $AgreementBuilder$Type} from "packages/io/github/mortuusars/wares/data/agreement/$AgreementBuilder"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RequestedItem, $RequestedItem$Type} from "packages/io/github/mortuusars/wares/data/agreement/component/$RequestedItem"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $DeliveryAgreement {
static readonly "CODEC": $Codec<($DeliveryAgreement)>
static readonly "MAX_REQUESTED_STACKS": integer
static readonly "MAX_PAYMENT_STACKS": integer
static readonly "EMPTY": $DeliveryAgreement

constructor(arg0: string, arg1: $Component$Type, arg2: $Component$Type, arg3: $Component$Type, arg4: $Component$Type, arg5: string, arg6: $List$Type<($RequestedItem$Type)>, arg7: $List$Type<($ItemStack$Type)>, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: long, arg13: boolean, arg14: boolean)

public "getDeliveryTimeOrDefault"(): integer
public "getDeliveryTime"(): integer
public "canExpire"(): boolean
public "canDeliver"(arg0: long): boolean
public "onDeliver"(): void
public "getExpireTimestamp"(): long
public "getRequested"(): $List<($RequestedItem)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "builder"(): $AgreementBuilder
public "getMessage"(): $Component
public "getId"(): string
public "isInfinite"(): boolean
public "complete"(): void
public "isCompleted"(): boolean
public "isExpired"(arg0: long): boolean
public "getSeal"(): string
public "getTitle"(): $Component
public "toItemStack"(arg0: $ItemStack$Type): boolean
public "expire"(): void
public "getPayment"(): $List<($ItemStack)>
public "getOrdered"(): integer
public "getDelivered"(): integer
public static "fromItemStack"(arg0: $ItemStack$Type): $Optional<($DeliveryAgreement)>
public "getExperience"(): integer
public "setDelivered"(arg0: integer): void
public "addDelivered"(arg0: integer): void
public "getBuyerAddress"(): $Component
public "getIsExpired"(): boolean
public "getBuyerName"(): $Component
get "deliveryTimeOrDefault"(): integer
get "deliveryTime"(): integer
get "expireTimestamp"(): long
get "requested"(): $List<($RequestedItem)>
get "empty"(): boolean
get "message"(): $Component
get "id"(): string
get "infinite"(): boolean
get "completed"(): boolean
get "seal"(): string
get "title"(): $Component
get "payment"(): $List<($ItemStack)>
get "ordered"(): integer
get "delivered"(): integer
get "experience"(): integer
set "delivered"(value: integer)
get "buyerAddress"(): $Component
get "buyerName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeliveryAgreement$Type = ($DeliveryAgreement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeliveryAgreement_ = $DeliveryAgreement$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/$TicketStationBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$RotatableBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $TicketStationBlock extends $RotatableBlock implements $EntityBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getMenuProvider"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TicketStationBlock$Type = ($TicketStationBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TicketStationBlock_ = $TicketStationBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/util/$TextRenderUtil$TextFormatting$Centering" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TextRenderUtil$TextFormatting$Centering extends $Enum<($TextRenderUtil$TextFormatting$Centering)> {
static readonly "TOP_LEFT": $TextRenderUtil$TextFormatting$Centering
static readonly "TOP_CENTER": $TextRenderUtil$TextFormatting$Centering
static readonly "TOP_RIGHT": $TextRenderUtil$TextFormatting$Centering
static readonly "MIDDLE_LEFT": $TextRenderUtil$TextFormatting$Centering
static readonly "MIDDLE_CENTER": $TextRenderUtil$TextFormatting$Centering
static readonly "MIDDLE_RIGHT": $TextRenderUtil$TextFormatting$Centering
static readonly "BOTTOM_LEFT": $TextRenderUtil$TextFormatting$Centering
static readonly "BOTTOM_CENTER": $TextRenderUtil$TextFormatting$Centering
static readonly "BOTTOM_RIGHT": $TextRenderUtil$TextFormatting$Centering


public "isCenter"(): boolean
public static "values"(): ($TextRenderUtil$TextFormatting$Centering)[]
public static "valueOf"(arg0: string): $TextRenderUtil$TextFormatting$Centering
public "isLeft"(): boolean
public "isTop"(): boolean
public "isRight"(): boolean
public "isBottom"(): boolean
public "isMiddle"(): boolean
public "makeBottom"(): $TextRenderUtil$TextFormatting$Centering
public "makeMiddle"(): $TextRenderUtil$TextFormatting$Centering
public "makeTop"(): $TextRenderUtil$TextFormatting$Centering
public "makeLeft"(): $TextRenderUtil$TextFormatting$Centering
public "makeCenter"(): $TextRenderUtil$TextFormatting$Centering
public "makeRight"(): $TextRenderUtil$TextFormatting$Centering
get "center"(): boolean
get "left"(): boolean
get "top"(): boolean
get "right"(): boolean
get "bottom"(): boolean
get "middle"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextRenderUtil$TextFormatting$Centering$Type = (("top_right") | ("top_center") | ("middle_right") | ("top_left") | ("middle_left") | ("bottom_right") | ("middle_center") | ("bottom_left") | ("bottom_center")) | ($TextRenderUtil$TextFormatting$Centering);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextRenderUtil$TextFormatting$Centering_ = $TextRenderUtil$TextFormatting$Centering$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/settings/$SettingsSubTab" {
import {$TraderSettingsTab, $TraderSettingsTab$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/traderstorage/settings/$TraderSettingsTab"
import {$EasyTab, $EasyTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$EasyTab"
import {$ITraderStorageMenu, $ITraderStorageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageMenu"
import {$TraderSettingsClientTab, $TraderSettingsClientTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/settings/$TraderSettingsClientTab"
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"
import {$ITraderStorageScreen, $ITraderStorageScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageScreen"

export class $SettingsSubTab extends $EasyTab {
readonly "parent": $TraderSettingsClientTab
readonly "commonTab": $TraderSettingsTab
readonly "screen": $ITraderStorageScreen
readonly "menu": $ITraderStorageMenu


public "removeChild"(arg0: any): void
public "shouldRenderInventoryText"(): boolean
public "addChild"<T>(arg0: T): T
public "canOpen"(): boolean
public "sendMessage"(arg0: $LazyPacketData$Builder$Type): void
public "getColor"(): integer
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SettingsSubTab$Type = ($SettingsSubTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SettingsSubTab_ = $SettingsSubTab$Type;
}}
declare module "packages/io/github/mortuusars/exposure/mixin/$LecternBlockEntityAccessor" {
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ContainerData, $ContainerData$Type} from "packages/net/minecraft/world/inventory/$ContainerData"

export interface $LecternBlockEntityAccessor {

 "getBookAccess"(): $Container
 "getDataAccess"(): $ContainerData
}

export namespace $LecternBlockEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LecternBlockEntityAccessor$Type = ($LecternBlockEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LecternBlockEntityAccessor_ = $LecternBlockEntityAccessor$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/$SlotMachineBlock" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$TraderBlockTallRotatable, $TraderBlockTallRotatable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockTallRotatable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SlotMachineBlock extends $TraderBlockTallRotatable {
static readonly "LIGHT_MODEL_LOCATION": $ResourceLocation
static readonly "SHAPE_SOUTH": $VoxelShape
static readonly "SHAPE_NORTH": $VoxelShape
static readonly "SHAPE_EAST": $VoxelShape
static readonly "SHAPE_WEST": $VoxelShape
static readonly "FACING": $DirectionProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getLightModel"(): $ResourceLocation
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "lightModel"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotMachineBlock$Type = ($SlotMachineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotMachineBlock_ = $SlotMachineBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/blocks/$TraderInterfaceBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IOwnableBlock, $IOwnableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IOwnableBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IEasyEntityBlock, $IEasyEntityBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IEasyEntityBlock"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$TraderInterfaceBlockEntity, $TraderInterfaceBlockEntity$Type} from "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/blockentity/$TraderInterfaceBlockEntity"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$RotatableBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $TraderInterfaceBlock extends $RotatableBlock implements $IEasyEntityBlock, $IOwnableBlock {
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


public "getAllowedTypes"(): $Collection<($BlockEntityType<(any)>)>
public "canBreak"(arg0: $Player$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public "getDropBlockItem"(arg0: $BlockState$Type, arg1: $TraderInterfaceBlockEntity$Type): $ItemStack
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "allowedTypes"(): $Collection<($BlockEntityType<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderInterfaceBlock$Type = ($TraderInterfaceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderInterfaceBlock_ = $TraderInterfaceBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$PlayerReference" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$JsonArray, $JsonArray$Type} from "packages/com/google/gson/$JsonArray"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PlayerReference {
static readonly "NULL": $PlayerReference
readonly "id": $UUID


public "getName"(arg0: boolean): string
public "hashCode"(): integer
public static "load"(arg0: $CompoundTag$Type): $PlayerReference
public static "load"(arg0: $JsonElement$Type): $PlayerReference
public static "of"(arg0: boolean, arg1: string): $PlayerReference
public static "of"(arg0: $Entity$Type): $PlayerReference
public static "of"(arg0: $GameProfile$Type): $PlayerReference
public static "of"(arg0: $UUID$Type, arg1: string): $PlayerReference
public static "of"(arg0: $Player$Type): $PlayerReference
public "save"(): $CompoundTag
public "is"(arg0: $UUID$Type): boolean
public "is"(arg0: $GameProfile$Type): boolean
public "is"(arg0: $PlayerReference$Type): boolean
public "is"(arg0: $Entity$Type): boolean
public "isExact"(arg0: $PlayerReference$Type): boolean
public static "removeFromList"(arg0: $List$Type<($PlayerReference$Type)>, arg1: $UUID$Type): boolean
public static "removeFromList"(arg0: $List$Type<($PlayerReference$Type)>, arg1: $PlayerReference$Type): boolean
public static "isInList"(arg0: $List$Type<($PlayerReference$Type)>, arg1: $PlayerReference$Type): boolean
public static "isInList"(arg0: $List$Type<($PlayerReference$Type)>, arg1: $Entity$Type): boolean
public static "isInList"(arg0: $List$Type<($PlayerReference$Type)>, arg1: $UUID$Type): boolean
public static "saveList"(arg0: $CompoundTag$Type, arg1: $List$Type<($PlayerReference$Type)>, arg2: string): void
public static "loadList"(arg0: $CompoundTag$Type, arg1: string): $List<($PlayerReference)>
public "getNameComponent"(arg0: boolean): $MutableComponent
public static "getPlayerID"(arg0: string): $UUID
public static "saveJsonList"(arg0: $List$Type<($PlayerReference$Type)>): $JsonArray
public "isOnline"(): boolean
public "getPlayer"(): $Player
public "copyWithName"(arg0: string): $PlayerReference
public static "getPlayerName"(arg0: $UUID$Type): string
public "saveAsJson"(): $JsonObject
get "online"(): boolean
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerReference$Type = ($PlayerReference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerReference_ = $PlayerReference$Type;
}}
declare module "packages/io/github/mortuusars/exposure/integration/kubejs/event/$FrameAddedEventJS" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FrameAddedEventJS extends $PlayerEventJS {

constructor(player: $Player$Type, cameraStack: $ItemStack$Type, frame: $CompoundTag$Type)

public "getCameraStack"(): $ItemStack
public "getFrame"(): $CompoundTag
public "getPlayer"(): $Player
get "cameraStack"(): $ItemStack
get "frame"(): $CompoundTag
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrameAddedEventJS$Type = ($FrameAddedEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrameAddedEventJS_ = $FrameAddedEventJS$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/slots/$CoinSlot" {
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$SimpleSlot, $SimpleSlot$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/slots/$SimpleSlot"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CoinSlot$ICoinSlotListener, $CoinSlot$ICoinSlotListener$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/slots/$CoinSlot$ICoinSlotListener"

export class $CoinSlot extends $SimpleSlot {
static readonly "EMPTY_COIN_SLOT": $ResourceLocation
 "active": boolean
 "locked": boolean
 "container": $Container
 "index": integer
 "x": integer
 "y": integer

constructor(arg0: $Container$Type, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: $Container$Type, arg1: integer, arg2: integer, arg3: integer, arg4: boolean)

public "addListener"(arg0: $CoinSlot$ICoinSlotListener$Type): $CoinSlot
public "setChanged"(): void
public "getNoItemIcon"(): $Pair<($ResourceLocation), ($ResourceLocation)>
public "mayPlace"(arg0: $ItemStack$Type): boolean
get "noItemIcon"(): $Pair<($ResourceLocation), ($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoinSlot$Type = ($CoinSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoinSlot_ = $CoinSlot$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$SignedAlbumItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AlbumItem, $AlbumItem$Type} from "packages/io/github/mortuusars/exposure/item/$AlbumItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SignedAlbumItem extends $AlbumItem {
static readonly "TAG_PAGES": string
static readonly "TAG_TITLE": string
static readonly "TAG_AUTHOR": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "isEditable"(): boolean
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "getName"(stack: $ItemStack$Type): $Component
public "isFoil"(stack: $ItemStack$Type): boolean
public "isRepairable"(arg0: $ItemStack$Type): boolean
get "editable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignedAlbumItem$Type = ($SignedAlbumItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignedAlbumItem_ = $SignedAlbumItem$Type;
}}
declare module "packages/io/github/mortuusars/exposure/camera/infrastructure/$ShutterSpeed" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $ShutterSpeed {
static readonly "DEFAULT": $ShutterSpeed

constructor(shutterSpeed: string)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "save"(tag: $CompoundTag$Type): $CompoundTag
public static "fromBuffer"(buffer: $FriendlyByteBuf$Type): $ShutterSpeed
public "getFormattedText"(): string
public "getTicks"(): integer
public "toBuffer"(buffer: $FriendlyByteBuf$Type): void
public "getMilliseconds"(): float
public "getStopsDifference"(relative: $ShutterSpeed$Type): float
public static "loadOrDefault"(tag: $CompoundTag$Type): $ShutterSpeed
get "formattedText"(): string
get "ticks"(): integer
get "milliseconds"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShutterSpeed$Type = ($ShutterSpeed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShutterSpeed_ = $ShutterSpeed$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValueParser" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$CommandSyntaxException, $CommandSyntaxException$Type} from "packages/com/mojang/brigadier/exceptions/$CommandSyntaxException"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$StringReader, $StringReader$Type} from "packages/com/mojang/brigadier/$StringReader"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$HolderLookup, $HolderLookup$Type} from "packages/net/minecraft/core/$HolderLookup"
import {$CommandExceptionType, $CommandExceptionType$Type} from "packages/com/mojang/brigadier/exceptions/$CommandExceptionType"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $MoneyValueParser {
readonly "prefix": string
static readonly "EXCEPTION_TYPE": $CommandExceptionType


public static "ParseConfigString"(arg0: string, arg1: $Supplier$Type<($MoneyValue$Type)>): $MoneyValue
public static "NoValueException"(arg0: $StringReader$Type): $CommandSyntaxException
public static "parse"(arg0: $StringReader$Type, arg1: boolean): $MoneyValue
public static "writeParsable"(arg0: $MoneyValue$Type): string
public static "readStringUntil"(arg0: $StringReader$Type, ...arg1: (character)[]): string
public "addExamples"(arg0: $List$Type<(string)>): void
public "listSuggestions"<S>(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type, arg2: string, arg3: $HolderLookup$Type<($Item$Type)>): $CompletableFuture<($Suggestions)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoneyValueParser$Type = ($MoneyValueParser);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoneyValueParser_ = $MoneyValueParser$Type;
}}
declare module "packages/io/github/mortuusars/salt/block/$SaltSandBlock" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$ISaltBlock, $ISaltBlock$Type} from "packages/io/github/mortuusars/salt/block/$ISaltBlock"
import {$SandBlock, $SandBlock$Type} from "packages/net/minecraft/world/level/block/$SandBlock"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SaltSandBlock extends $SandBlock implements $ISaltBlock {
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

constructor(arg0: $BlockState$Type, arg1: integer, arg2: $BlockBehaviour$Properties$Type)
constructor(arg0: integer, arg1: $BlockBehaviour$Properties$Type)

public "getDissolvedState"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $Fluid$Type): $BlockState
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "onSaltAnimateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "onSaltRandomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): boolean
public static "getFluidDrippingOn"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type): $Fluid
public static "maybeGrowCluster"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $ServerLevel$Type): void
public static "canGrowCluster"(arg0: $BlockPos$Type, arg1: $ServerLevel$Type): boolean
public static "growCluster"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $ServerLevel$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SaltSandBlock$Type = ($SaltSandBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SaltSandBlock_ = $SaltSandBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/menu/$TraderInterfaceClientTab" {
import {$TraderInterfaceTab, $TraderInterfaceTab$Type} from "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/menu/$TraderInterfaceTab"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EasyTab, $EasyTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$EasyTab"

export class $TraderInterfaceClientTab<T extends $TraderInterfaceTab> extends $EasyTab {
readonly "commonTab": T


public "tabButtonVisible"(): boolean
public "receiveSelfMessage"(arg0: $CompoundTag$Type): void
public "getColor"(): integer
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderInterfaceClientTab$Type<T> = ($TraderInterfaceClientTab<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderInterfaceClientTab_<T> = $TraderInterfaceClientTab$Type<(T)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$TradeRule, $TradeRule$Type} from "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$TradeRule"
import {$InteractionSlotData, $InteractionSlotData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$InteractionSlotData"
import {$IMoneyHolder, $IMoneyHolder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$IMoneyHolder"
import {$TaxEntry, $TaxEntry$Type} from "packages/io/github/lightman314/lightmanscurrency/common/taxes/$TaxEntry"
import {$StatKey, $StatKey$Type} from "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatKey"
import {$TraderSettingsClientTab, $TraderSettingsClientTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/settings/$TraderSettingsClientTab"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$IBankAccount, $IBankAccount$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/bank/$IBankAccount"
import {$PlayerReference, $PlayerReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$PlayerReference"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/net/minecraftforge/common/util/$NonNullSupplier"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$UpgradeType, $UpgradeType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$StatTracker, $StatTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatTracker"
import {$ITraderStorageMenu, $ITraderStorageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageMenu"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$TraderScreen, $TraderScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/$TraderScreen"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$TradeData, $TradeData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/$TradeData"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$WorldPosition, $WorldPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/world/$WorldPosition"
import {$ITaxCollector, $ITaxCollector$Type} from "packages/io/github/lightman314/lightmanscurrency/api/taxes/$ITaxCollector"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$MoneyStorage, $MoneyStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyStorage"
import {$IDumpable, $IDumpable$Type} from "packages/io/github/lightman314/lightmanscurrency/common/emergency_ejection/$IDumpable"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PermissionOption, $PermissionOption$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/permissions/$PermissionOption"
import {$Notification, $Notification$Type} from "packages/io/github/lightman314/lightmanscurrency/api/notifications/$Notification"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$OwnerData, $OwnerData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$OwnerData"
import {$UpgradeItem, $UpgradeItem$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/$UpgradeItem"
import {$MenuValidator, $MenuValidator$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$MenuValidator"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$TraderType, $TraderType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderType"
import {$TaxableReference, $TaxableReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/taxes/reference/$TaxableReference"
import {$IUpgradeable, $IUpgradeable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$IUpgradeable"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$TraderCategory, $TraderCategory$Type} from "packages/io/github/lightman314/lightmanscurrency/common/notifications/categories/$TraderCategory"
import {$SettingsSubTab, $SettingsSubTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/settings/$SettingsSubTab"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ITaxable, $ITaxable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/taxes/$ITaxable"
import {$TradeResult, $TradeResult$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeResult"
import {$TradeEvent$TradeCostEvent, $TradeEvent$TradeCostEvent$Type} from "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent$TradeCostEvent"
import {$IconData, $IconData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/icon/$IconData"
import {$ITraderSource, $ITraderSource$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$ITraderSource"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$TradeEvent$PreTradeEvent, $TradeEvent$PreTradeEvent$Type} from "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent$PreTradeEvent"
import {$TraderStorageScreen, $TraderStorageScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/$TraderStorageScreen"
import {$ITradeRuleHost, $ITradeRuleHost$Type} from "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$ITradeRuleHost"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $TraderData implements $IClientTracker, $IDumpable, $IUpgradeable, $ITraderSource, $ITradeRuleHost, $ITaxable {
static readonly "GLOBAL_TRADE_LIMIT": integer
readonly "type": $TraderType<(any)>
readonly "statTracker": $StatTracker


public "getOwner"(): $OwnerData
public "getName"(): $MutableComponent
public "getReference"(): $TaxableReference
public "load"(arg0: $CompoundTag$Type): void
public "save"(): $CompoundTag
public "move"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getRules"(): $List<($TradeRule)>
public "getID"(): long
public "setID"(arg0: long): void
/**
 * 
 * @deprecated
 */
public "openStorageMenu"(arg0: $Player$Type): void
public "openStorageMenu"(arg0: $Player$Type, arg1: $MenuValidator$Type): void
/**
 * 
 * @deprecated
 */
public "openTraderMenu"(arg0: $Player$Type): void
public "openTraderMenu"(arg0: $Player$Type, arg1: $MenuValidator$Type): void
public "TryExecuteTrade"(arg0: $TradeContext$Type, arg1: integer): $TradeResult
public "hasPermission"(arg0: $PlayerReference$Type, arg1: string): boolean
public "hasPermission"(arg0: $Player$Type, arg1: string): boolean
public "getLevel"(): $ResourceKey<($Level)>
public "getContents"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): $List<($ItemStack)>
public "loadFromJson"(arg0: $JsonObject$Type): void
public "isClient"(): boolean
public "getNotifications"(): $List<($Notification)>
public "getTitle"(): $MutableComponent
public "getWorldPosition"(): $WorldPosition
public "flagAsClient"(): void
public "setCreative"(arg0: $Player$Type, arg1: boolean): void
public static "Deserialize"(arg0: boolean, arg1: $CompoundTag$Type): $TraderData
public static "Deserialize"(arg0: $JsonObject$Type): $TraderData
public "getPersistentID"(): string
public "loadPersistentData"(arg0: $CompoundTag$Type): void
public "allowMarkingDirty"(): $TraderData
public "makePersistent"(arg0: long, arg1: string): void
public "OnRegisteredToOffice"(): void
public "getStoredMoney"(): $IMoneyHolder
public "showOnTerminal"(): boolean
public "savePersistentData"(): $CompoundTag
public "shouldRemove"(arg0: $MinecraftServer$Type): boolean
public "isCreative"(): boolean
public "hasCustomName"(): boolean
public "getAllies"(): $List<($PlayerReference)>
public "getPermissionLevel"(arg0: $PlayerReference$Type, arg1: string): integer
public "getPermissionLevel"(arg0: $Player$Type, arg1: string): integer
public "canShowOnTerminal"(): boolean
public "getLinkedToBank"(): boolean
public "getBankAccount"(): $IBankAccount
public "addStoredMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
public "getApplicableTaxes"(): $List<($ITaxCollector)>
public "removeStoredMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
public "CollectStoredMoney"(arg0: $Player$Type): void
public "payTaxesOn"(arg0: $MoneyValue$Type): $MoneyValue
public "getTradeCount"(): integer
public "canLinkBankAccount"(): boolean
public "PardonTaxEntry"(arg0: $TaxEntry$Type): void
public "hasValidTrade"(): boolean
public "setLinkedToBank"(arg0: $Player$Type, arg1: boolean): void
public "getTradeStock"(arg0: integer): integer
public "anyTradeHasStock"(): boolean
public "hasBankAccount"(): boolean
public "getMaxTradeCount"(): integer
public "canEditTradeCount"(): boolean
public "getTradeData"(): $List<(any)>
public "getPossibleTaxes"(): $List<($ITaxCollector)>
public "saveLevelData"(arg0: $CompoundTag$Type): void
public "canMakePersistent"(): boolean
public "getMenuDataWriter"(): $Consumer<($FriendlyByteBuf)>
public "saveToJson"(arg0: string, arg1: string): $JsonObject
public "markTradesDirty"(): void
public "markStatsDirty"(): void
public "getUsers"(): $List<($Player)>
public "getUserCount"(): integer
public "getTrade"(arg0: integer): $TradeData
public "runPostTradeEvent"(arg0: $TradeData$Type, arg1: $TradeContext$Type, arg2: $MoneyValue$Type, arg3: $MoneyValue$Type): void
public "userClose"(arg0: $Player$Type): void
public "indexOfTrade"(arg0: $TradeData$Type): integer
public "runPreTradeEvent"(arg0: $TradeData$Type, arg1: $TradeContext$Type): $TradeEvent$PreTradeEvent
public "userOpen"(arg0: $Player$Type): void
public "updateUserCount"(arg0: integer): void
public "runTradeCostEvent"(arg0: $TradeData$Type, arg1: $TradeContext$Type): $TradeEvent$TradeCostEvent
public "isMoneyRelevant"(): boolean
public "isTrader"(): boolean
public "canMoneyBeRelevant"(): boolean
public "removeTrade"(arg0: $Player$Type): void
public "incrementStat"<T>(arg0: $StatKey$Type<(any), (T)>, arg1: T): void
public "isTrade"(): boolean
public "initStorageTabs"(arg0: $ITraderStorageMenu$Type): void
public "getSettingsTabs"(arg0: $TraderSettingsClientTab$Type): $List<($SettingsSubTab)>
public "pushNotification"(arg0: $NonNullSupplier$Type<($Notification$Type)>): void
public "onScreenInit"(arg0: $TraderScreen$Type, arg1: $Consumer$Type<(any)>): void
public "isSingleTrader"(): boolean
public "getTerminalInfo"(arg0: $Player$Type): $List<($Component)>
public "getTraders"(): $List<($TraderData)>
public "setCustomName"(arg0: $Player$Type, arg1: string): void
public "getUpgrades"(): $Container
public "setAlwaysShowOnTerminal"(): void
public "pushLocalNotification"(arg0: $Notification$Type): void
public "notificationsEnabled"(): boolean
public "ShouldIgnoreTaxEntry"(arg0: $ITaxCollector$Type): boolean
public "addInteractionSlots"(arg0: $List$Type<($InteractionSlotData$Type)>): void
public "getStorageDisplayFilter"(arg0: $ITraderStorageMenu$Type): $Function<($TradeData), (boolean)>
public "handleSettingsChange"(arg0: $Player$Type, arg1: $LazyPacketData$Type): void
public "ShouldIgnoreAllTaxes"(): boolean
public "FlagTaxEntryToIgnore"(arg0: $TaxEntry$Type, arg1: $Player$Type): void
public "getTotalTaxPercentage"(): integer
public "exceedsAcceptableTaxRate"(): boolean
public "getAcceptableTaxRate"(): integer
public "markTradeRulesDirty"(): void
public static "getTraderMenuProvider"(arg0: $BlockPos$Type, arg1: $MenuValidator$Type): $MenuProvider
public "ShouldIgnoreTaxEntryOnly"(arg0: $ITaxCollector$Type): boolean
public "getAllyPermissionLevel"(arg0: string): integer
public "notificationsToChat"(): boolean
public "teamNotificationLevel"(): integer
public "getInternalStoredMoney"(): $MoneyStorage
public "setAllyPermissionLevel"(arg0: $Player$Type, arg1: string, arg2: integer): void
public "getTerminalTextColor"(): integer
public "getNotificationCategory"(): $TraderCategory
public "onStorageScreenInit"(arg0: $TraderStorageScreen$Type, arg1: $Consumer$Type<(any)>): void
public "getPermissionOptions"(): $List<($PermissionOption)>
public "getCustomName"(): string
public "getIcon"(): $IconData
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "allowUpgrade"(arg0: $UpgradeType$Type): boolean
public "addTrade"(arg0: $Player$Type): void
public "getPos"(): $BlockPos
public "isPersistent"(): boolean
public "shouldAlwaysShowOnTerminal"(): boolean
public "isServer"(): boolean
public static "preCollected"(arg0: $List$Type<($ItemStack$Type)>, arg1: $Component$Type, arg2: $OwnerData$Type): $IDumpable
public "allowUpgrade"(arg0: $UpgradeItem$Type): boolean
public "getSingleTrader"(): $TraderData
public static "UniversalTraderSource"(arg0: boolean): $Supplier<($ITraderSource)>
public "getRuleOfType"(arg0: $ResourceLocation$Type): $TradeRule
public "allowTradeRule"(arg0: $TradeRule$Type): boolean
public "validateRuleStates"(): void
public "HandleRuleUpdate"(arg0: $ResourceLocation$Type, arg1: $LazyPacketData$Type): void
get "owner"(): $OwnerData
get "name"(): $MutableComponent
get "reference"(): $TaxableReference
get "rules"(): $List<($TradeRule)>
get "iD"(): long
set "iD"(value: long)
get "level"(): $ResourceKey<($Level)>
get "client"(): boolean
get "notifications"(): $List<($Notification)>
get "title"(): $MutableComponent
get "worldPosition"(): $WorldPosition
get "persistentID"(): string
get "storedMoney"(): $IMoneyHolder
get "creative"(): boolean
get "allies"(): $List<($PlayerReference)>
get "linkedToBank"(): boolean
get "bankAccount"(): $IBankAccount
get "applicableTaxes"(): $List<($ITaxCollector)>
get "tradeCount"(): integer
get "maxTradeCount"(): integer
get "tradeData"(): $List<(any)>
get "possibleTaxes"(): $List<($ITaxCollector)>
get "menuDataWriter"(): $Consumer<($FriendlyByteBuf)>
get "users"(): $List<($Player)>
get "userCount"(): integer
get "moneyRelevant"(): boolean
get "trader"(): boolean
get "trade"(): boolean
get "singleTrader"(): boolean
get "traders"(): $List<($TraderData)>
get "upgrades"(): $Container
get "totalTaxPercentage"(): integer
get "acceptableTaxRate"(): integer
get "internalStoredMoney"(): $MoneyStorage
get "terminalTextColor"(): integer
get "notificationCategory"(): $TraderCategory
get "permissionOptions"(): $List<($PermissionOption)>
get "customName"(): string
get "icon"(): $IconData
get "pos"(): $BlockPos
get "persistent"(): boolean
get "server"(): boolean
get "singleTrader"(): $TraderData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderData$Type = ($TraderData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderData_ = $TraderData$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/teams/$ITeam" {
import {$IBankAccount, $IBankAccount$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/bank/$IBankAccount"
import {$PlayerReference, $PlayerReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$PlayerReference"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$StatTracker, $StatTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatTracker"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $ITeam extends $IClientTracker {

 "getOwner"(): $PlayerReference
 "getName"(): string
 "getMembers"(): $List<($PlayerReference)>
 "getID"(): long
 "isOwner"(arg0: $UUID$Type): boolean
 "isOwner"(arg0: $PlayerReference$Type): boolean
 "isOwner"(arg0: $Player$Type): boolean
 "getStats"(): $StatTracker
 "getBankAccount"(): $IBankAccount
 "hasBankAccount"(): boolean
 "getAdmins"(): $List<($PlayerReference)>
 "getAdminsAndOwner"(): $List<($PlayerReference)>
 "getMemberCount"(): integer
 "canAccessBankAccount"(arg0: $Player$Type): boolean
 "isMember"(arg0: $UUID$Type): boolean
 "isMember"(arg0: $Player$Type): boolean
 "isMember"(arg0: $PlayerReference$Type): boolean
 "isAdmin"(arg0: $UUID$Type): boolean
 "isAdmin"(arg0: $Player$Type): boolean
 "isAdmin"(arg0: $PlayerReference$Type): boolean
 "getAllMembers"(): $List<($PlayerReference)>
 "isClient"(): boolean
 "isServer"(): boolean
}

export namespace $ITeam {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITeam$Type = ($ITeam);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITeam_ = $ITeam$Type;
}}
declare module "packages/io/github/mortuusars/sootychimneys/$SootyChimneys$Chimney" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ChimneyBlock, $ChimneyBlock$Type} from "packages/io/github/mortuusars/sootychimneys/block/$ChimneyBlock"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Smoke, $Smoke$Type} from "packages/io/github/mortuusars/sootychimneys/core/$Smoke"

export class $SootyChimneys$Chimney extends $Enum<($SootyChimneys$Chimney)> {
static readonly "BRICK": $SootyChimneys$Chimney
static readonly "COBBLESTONE": $SootyChimneys$Chimney
static readonly "STONE_BRICK": $SootyChimneys$Chimney
static readonly "MUD_BRICK": $SootyChimneys$Chimney
static readonly "IRON": $SootyChimneys$Chimney
static readonly "COPPER": $SootyChimneys$Chimney
static readonly "TERRACOTTA": $SootyChimneys$Chimney


public static "values"(): ($SootyChimneys$Chimney)[]
public static "valueOf"(arg0: string): $SootyChimneys$Chimney
public "getCleanItem"(): $Item
public "getDirtyItem"(): $Item
public "typeId"(): string
public "getDefaultScrapeChance"(): float
public "getDirtyBlock"(): $ChimneyBlock
public "getCleanBlock"(): $ChimneyBlock
public "getDirtyId"(): string
public "getStackedShape"(): $VoxelShape
public "getSmoke"(): $Smoke
public "getDefaultShape"(): $VoxelShape
public "getCleanId"(): string
get "cleanItem"(): $Item
get "dirtyItem"(): $Item
get "defaultScrapeChance"(): float
get "dirtyBlock"(): $ChimneyBlock
get "cleanBlock"(): $ChimneyBlock
get "dirtyId"(): string
get "stackedShape"(): $VoxelShape
get "smoke"(): $Smoke
get "defaultShape"(): $VoxelShape
get "cleanId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SootyChimneys$Chimney$Type = (("cobblestone") | ("terracotta") | ("iron") | ("copper") | ("stone_brick") | ("brick") | ("mud_brick")) | ($SootyChimneys$Chimney);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SootyChimneys$Chimney_ = $SootyChimneys$Chimney$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/comparison/$ProductComparisonResult" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ProductComparisonResult {


public "ProductQuantityDifference"(): integer
public "SameProductQuantity"(): boolean
public static "CompareTwoItems"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type, arg4: boolean): $List<($ProductComparisonResult)>
public static "CompareTwoItems"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type): $List<($ProductComparisonResult)>
public "SameProductNBT"(): boolean
public "SameProductType"(): boolean
public "Identical"(): boolean
public static "CreateRaw"(arg0: boolean, arg1: boolean, arg2: integer): $ProductComparisonResult
public static "CompareFluid"(arg0: $FluidStack$Type, arg1: $FluidStack$Type): $ProductComparisonResult
public static "CompareItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): $ProductComparisonResult
public static "CompareItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ProductComparisonResult
public static "CompareEnergy"(arg0: integer, arg1: integer): $ProductComparisonResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProductComparisonResult$Type = ($ProductComparisonResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProductComparisonResult_ = $ProductComparisonResult$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView$Builder" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IMoneyViewer, $IMoneyViewer$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$IMoneyViewer"
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"

export class $MoneyView$Builder {


public "build"(): $MoneyView
public "add"(arg0: $MoneyValue$Type): $MoneyView$Builder
public "add"(arg0: $Collection$Type<($MoneyValue$Type)>): $MoneyView$Builder
public "merge"(arg0: $IMoneyViewer$Type): $MoneyView$Builder
public "merge"(arg0: $MoneyView$Builder$Type): $MoneyView$Builder
public "merge"(arg0: $MoneyView$Type): $MoneyView$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoneyView$Builder$Type = ($MoneyView$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoneyView$Builder_ = $MoneyView$Builder$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/$IServerTicker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IServerTicker {

 "serverTick"(): void

(): void
}

export namespace $IServerTicker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerTicker$Type = ($IServerTicker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerTicker_ = $IServerTicker$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/mixin/$AbstractContainerMenuAccessor" {
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"

export interface $AbstractContainerMenuAccessor {

 "addCustomSlot"(arg0: $Slot$Type): $Slot

(arg0: $Slot$Type): $Slot
}

export namespace $AbstractContainerMenuAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerMenuAccessor$Type = ($AbstractContainerMenuAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerMenuAccessor_ = $AbstractContainerMenuAccessor$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$PhotographItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PhotographItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "setId"(stack: $ItemStack$Type, id: string): void
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "overrideOtherStackedOnMe"(stack: $ItemStack$Type, other: $ItemStack$Type, slot: $Slot$Type, action: $ClickAction$Type, player: $Player$Type, access: $SlotAccess$Type): boolean
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "getTooltipImage"(stack: $ItemStack$Type): $Optional<($TooltipComponent)>
public "getIdOrTexture"(stack: $ItemStack$Type): $Either<(string), ($ResourceLocation)>
public "setTexture"(stack: $ItemStack$Type, resourceLocation: $ResourceLocation$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhotographItem$Type = ($PhotographItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhotographItem_ = $PhotographItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/crafting/$MasterTicketRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$TicketStationRecipe, $TicketStationRecipe$Type} from "packages/io/github/lightman314/lightmanscurrency/common/crafting/$TicketStationRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $MasterTicketRecipe implements $TicketStationRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $Item$Type)

public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredient"(): $Ingredient
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "consumeModifier"(): boolean
public "peekAtResult"(arg0: $Container$Type): $ItemStack
public "jeiModifierList"(): $List<($ItemStack)>
public "validModifier"(arg0: $ItemStack$Type): boolean
public "validIngredient"(arg0: $ItemStack$Type): boolean
public "exampleResult"(): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public static "exampleTicketList"(arg0: $RegistryObject$Type<(any)>): $List<($ItemStack)>
public static "exampleTicketList"(arg0: $Item$Type): $List<($ItemStack)>
public static "exampleTicketList"(arg0: $Ingredient$Type): $List<($ItemStack)>
public static "exampleModifierList"(arg0: $TagKey$Type<($Item$Type)>, ...arg1: ($Item$Type)[]): $List<($ItemStack)>
public "getToastSymbol"(): $ItemStack
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "getType"(): $ResourceLocation
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "getOrCreateId"(): $ResourceLocation
public "getSchema"(): $RecipeSchema
public "setGroup"(group: string): void
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "getGroup"(): string
public "getMod"(): string
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "ingredient"(): $Ingredient
get "toastSymbol"(): $ItemStack
get "ingredients"(): $NonNullList<($Ingredient)>
get "incomplete"(): boolean
get "special"(): boolean
get "type"(): $ResourceLocation
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
set "group"(value: string)
get "group"(): string
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MasterTicketRecipe$Type = ($MasterTicketRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MasterTicketRecipe_ = $MasterTicketRecipe$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent$PreTradeEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AlertData, $AlertData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/trade/$AlertData"
import {$TradeData, $TradeData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/$TradeData"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$TradeEvent, $TradeEvent$Type} from "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent"

export class $TradeEvent$PreTradeEvent extends $TradeEvent {

constructor()
constructor(arg0: $TradeData$Type, arg1: $TradeContext$Type)

public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "addWarning"(arg0: $MutableComponent$Type): void
public "addAlert"(arg0: $AlertData$Type, arg1: boolean): void
public "addError"(arg0: $MutableComponent$Type): void
public "getAlertInfo"(): $List<($AlertData)>
public "addNeutral"(arg0: $MutableComponent$Type): void
public "addHelpful"(arg0: $MutableComponent$Type): void
public "addDenial"(arg0: $MutableComponent$Type): void
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
get "alertInfo"(): $List<($AlertData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeEvent$PreTradeEvent$Type = ($TradeEvent$PreTradeEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeEvent$PreTradeEvent_ = $TradeEvent$PreTradeEvent$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/trade_rules/$TradeRulesClientSubTab" {
import {$EasyTab, $EasyTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$EasyTab"
import {$TradeRulesTab, $TradeRulesTab$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/traderstorage/trade_rules/$TradeRulesTab"
import {$TradeRule, $TradeRule$Type} from "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$TradeRule"
import {$ITraderStorageMenu, $ITraderStorageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageMenu"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TradeRulesClientTab, $TradeRulesClientTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/trade_rules/$TradeRulesClientTab"
import {$ITraderStorageScreen, $ITraderStorageScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageScreen"

export class $TradeRulesClientSubTab extends $EasyTab {
readonly "parent": $TradeRulesClientTab<(any)>
readonly "commonTab": $TradeRulesTab
readonly "screen": $ITraderStorageScreen
readonly "menu": $ITraderStorageMenu


public "removeChild"(arg0: any): void
public "addChild"<T>(arg0: T): T
public "getColor"(): integer
public "isVisible"(): boolean
public "getFilteredRules"(): $List<($TradeRule)>
public "getTradeRules"(): $List<($TradeRule)>
get "color"(): integer
get "visible"(): boolean
get "filteredRules"(): $List<($TradeRule)>
get "tradeRules"(): $List<($TradeRule)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeRulesClientSubTab$Type = ($TradeRulesClientSubTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeRulesClientSubTab_ = $TradeRulesClientSubTab$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/crafting/$CoinMintRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CoinMintRecipe, $CoinMintRecipe$Type} from "packages/io/github/lightman314/lightmanscurrency/common/crafting/$CoinMintRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CoinMintRecipe$Serializer implements $RecipeSerializer<($CoinMintRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $CoinMintRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $CoinMintRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $CoinMintRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CoinMintRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoinMintRecipe$Serializer$Type = ($CoinMintRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoinMintRecipe$Serializer_ = $CoinMintRecipe$Serializer$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/blockentity/$TraderInterfaceBlockEntity$InteractionType" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TraderInterfaceBlockEntity$InteractionType extends $Enum<($TraderInterfaceBlockEntity$InteractionType)> {
static readonly "RESTOCK_AND_DRAIN": $TraderInterfaceBlockEntity$InteractionType
static readonly "RESTOCK": $TraderInterfaceBlockEntity$InteractionType
static readonly "DRAIN": $TraderInterfaceBlockEntity$InteractionType
static readonly "TRADE": $TraderInterfaceBlockEntity$InteractionType
readonly "requiresPermissions": boolean
readonly "restocks": boolean
readonly "drains": boolean
readonly "trades": boolean
readonly "index": integer


public static "values"(): ($TraderInterfaceBlockEntity$InteractionType)[]
public static "valueOf"(arg0: string): $TraderInterfaceBlockEntity$InteractionType
public static "size"(): integer
public static "fromIndex"(arg0: integer): $TraderInterfaceBlockEntity$InteractionType
public "getDisplayText"(): $Component
get "displayText"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderInterfaceBlockEntity$InteractionType$Type = (("trade") | ("restock_and_drain") | ("restock") | ("drain")) | ($TraderInterfaceBlockEntity$InteractionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderInterfaceBlockEntity$InteractionType_ = $TraderInterfaceBlockEntity$InteractionType$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$ITradeRuleHost" {
import {$TradeRule, $TradeRule$Type} from "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$TradeRule"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ITradeRuleHost {

 "getRules"(): $List<($TradeRule)>
 "isMoneyRelevant"(): boolean
 "isTrader"(): boolean
 "canMoneyBeRelevant"(): boolean
 "isTrade"(): boolean
 "getRuleOfType"(arg0: $ResourceLocation$Type): $TradeRule
 "allowTradeRule"(arg0: $TradeRule$Type): boolean
 "validateRuleStates"(): void
 "HandleRuleUpdate"(arg0: $ResourceLocation$Type, arg1: $LazyPacketData$Type): void
 "markTradeRulesDirty"(): void
}

export namespace $ITradeRuleHost {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITradeRuleHost$Type = ($ITradeRuleHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITradeRuleHost_ = $ITradeRuleHost$Type;
}}
declare module "packages/io/github/mortuusars/scholar/item/$ColoredWritableBookItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IColoredBook, $IColoredBook$Type} from "packages/io/github/mortuusars/scholar/item/$IColoredBook"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$WritableBookItem, $WritableBookItem$Type} from "packages/net/minecraft/world/item/$WritableBookItem"

export class $ColoredWritableBookItem extends $WritableBookItem implements $IColoredBook {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(color: $DyeColor$Type, properties: $Item$Properties$Type)

public "createWrittenBook"(writableBook: $ItemStack$Type): $ItemStack
public "getColor"(): $DyeColor
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColoredWritableBookItem$Type = ($ColoredWritableBookItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColoredWritableBookItem_ = $ColoredWritableBookItem$Type;
}}
declare module "packages/io/github/mortuusars/wares/item/$CardboardBoxItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CardboardBoxItem extends $BlockItem {
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CardboardBoxItem$Type = ($CardboardBoxItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CardboardBoxItem_ = $CardboardBoxItem$Type;
}}
declare module "packages/io/github/mortuusars/salt/block/$SaltBlock" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$ISaltBlock, $ISaltBlock$Type} from "packages/io/github/mortuusars/salt/block/$ISaltBlock"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SaltBlock extends $Block implements $ISaltBlock {
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

constructor(arg0: $BlockState$Type, arg1: $BlockBehaviour$Properties$Type)
constructor(arg0: $BlockBehaviour$Properties$Type)

public "getDissolvedState"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $Fluid$Type): $BlockState
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "onSaltAnimateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "onSaltRandomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): boolean
public static "getFluidDrippingOn"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type): $Fluid
public static "maybeGrowCluster"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $ServerLevel$Type): void
public static "canGrowCluster"(arg0: $BlockPos$Type, arg1: $ServerLevel$Type): boolean
public static "growCluster"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $ServerLevel$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SaltBlock$Type = ($SaltBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SaltBlock_ = $SaltBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext$Builder" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$IMoneyHandler, $IMoneyHandler$Type} from "packages/io/github/lightman314/lightmanscurrency/api/capability/money/$IMoneyHandler"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"
import {$IMoneyHolder, $IMoneyHolder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$IMoneyHolder"
import {$InteractionSlot, $InteractionSlot$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/slots/$InteractionSlot"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$BankReference, $BankReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/bank/reference/$BankReference"
import {$MoneyStorage, $MoneyStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyStorage"

export class $TradeContext$Builder {


public "withItemHandler"(arg0: $IItemHandler$Type): $TradeContext$Builder
public "withCoinSlots"(arg0: $Container$Type): $TradeContext$Builder
public "withStoredCoins"(arg0: $MoneyStorage$Type): $TradeContext$Builder
public "build"(): $TradeContext
public "withInteractionSlot"(arg0: $InteractionSlot$Type): $TradeContext$Builder
public "withBankAccount"(arg0: $BankReference$Type): $TradeContext$Builder
public "withEnergyHandler"(arg0: $IEnergyStorage$Type): $TradeContext$Builder
public "withMoneyHolder"(arg0: $IMoneyHolder$Type): $TradeContext$Builder
public "withMoneyHandler"(arg0: $IMoneyHandler$Type, arg1: $Component$Type, arg2: integer): $TradeContext$Builder
public "withFluidHandler"(arg0: $IFluidHandler$Type): $TradeContext$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeContext$Builder$Type = ($TradeContext$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeContext$Builder_ = $TradeContext$Builder$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/traderinterface/handlers/$SidedHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TraderInterfaceBlockEntity, $TraderInterfaceBlockEntity$Type} from "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/blockentity/$TraderInterfaceBlockEntity"

export class $SidedHandler<H> {

constructor()

public "load"(arg0: $CompoundTag$Type): void
public "getParent"(): $TraderInterfaceBlockEntity
public "save"(): $CompoundTag
public "getType"(): $ResourceLocation
public "setParent"(arg0: $TraderInterfaceBlockEntity$Type): void
public "getHandler"(arg0: $Direction$Type): H
public "getTag"(): string
public "sendMessage"(arg0: $CompoundTag$Type): void
public "markDirty"(): void
public "receiveMessage"(arg0: $CompoundTag$Type): void
get "parent"(): $TraderInterfaceBlockEntity
get "type"(): $ResourceLocation
set "parent"(value: $TraderInterfaceBlockEntity$Type)
get "tag"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SidedHandler$Type<H> = ($SidedHandler<(H)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SidedHandler_<H> = $SidedHandler$Type<(H)>;
}}
declare module "packages/io/github/mortuusars/exposure/item/$IFilmItem" {
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FilmType, $FilmType$Type} from "packages/io/github/mortuusars/exposure/camera/infrastructure/$FilmType"

export interface $IFilmItem {

 "getType"(): $FilmType
 "getDefaultFrameSize"(): integer
 "getDefaultMaxFrameCount"(filmStack: $ItemStack$Type): integer
 "getExposedFramesCount"(stack: $ItemStack$Type): integer
 "getMaxFrameCount"(filmStack: $ItemStack$Type): integer
 "getFrameSize"(filmStack: $ItemStack$Type): integer
 "hasExposedFrame"(filmStack: $ItemStack$Type, index: integer): boolean
 "getExposedFrames"(filmStack: $ItemStack$Type): $ListTag

(): $FilmType
}

export namespace $IFilmItem {
const FRAME_COUNT_TAG: string
const FRAME_SIZE_TAG: string
const FRAMES_TAG: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFilmItem$Type = ($IFilmItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFilmItem_ = $IFilmItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/easy/$EasyWidget" {
import {$ScreenPosition, $ScreenPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition"
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$WidgetAddon, $WidgetAddon$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$WidgetAddon"
import {$SoundManager, $SoundManager$Type} from "packages/net/minecraft/client/sounds/$SoundManager"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"

export class $EasyWidget extends $AbstractWidget {
static readonly "WIDGETS_LOCATION": $ResourceLocation
static readonly "ACCESSIBILITY_TEXTURE": $ResourceLocation
 "height": integer
 "x": integer
 "y": integer
 "active": boolean
 "visible": boolean
static readonly "UNSET_FG_COLOR": integer


public "hideFromMouse"(): boolean
public "setSize"(arg0: integer, arg1: integer): void
public "getPosition"(): $ScreenPosition
public "getHeight"(): integer
public "playDownSound"(arg0: $SoundManager$Type): void
public "setWidth"(arg0: integer): void
public "setHeight"(arg0: integer): void
public "setY"(arg0: integer): void
public "setX"(arg0: integer): void
public "setActive"(arg0: boolean): void
public "isMouseOver"(arg0: $ScreenPosition$Type): boolean
public "setVisible"(arg0: boolean): void
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "isMouseOver"(arg0: double, arg1: double): boolean
public "isActive"(): boolean
public "setPosition"(arg0: $ScreenPosition$Type): void
public "isVisible"(): boolean
public "getArea"(): $ScreenArea
public "addAddons"(arg0: $Consumer$Type<($WidgetAddon$Type)>): void
public "removeAddons"(arg0: $Consumer$Type<($WidgetAddon$Type)>): void
public "withAddons"(...arg0: ($WidgetAddon$Type)[]): any
public "getX"(): integer
public "getY"(): integer
public "getWidth"(): integer
public "setPosition"(arg0: integer, arg1: integer): void
get "position"(): $ScreenPosition
get "height"(): integer
set "width"(value: integer)
set "height"(value: integer)
set "y"(value: integer)
set "x"(value: integer)
set "active"(value: boolean)
set "visible"(value: boolean)
get "active"(): boolean
set "position"(value: $ScreenPosition$Type)
get "visible"(): boolean
get "area"(): $ScreenArea
get "x"(): integer
get "y"(): integer
get "width"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasyWidget$Type = ($EasyWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasyWidget_ = $EasyWidget$Type;
}}
declare module "packages/io/github/mortuusars/salt/crafting/recipe/$SaltingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$SaltingRecipe, $SaltingRecipe$Type} from "packages/io/github/mortuusars/salt/crafting/recipe/$SaltingRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SaltingRecipe$Serializer implements $RecipeSerializer<($SaltingRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $SaltingRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $SaltingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $SaltingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $SaltingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SaltingRecipe$Serializer$Type = ($SaltingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SaltingRecipe$Serializer_ = $SaltingRecipe$Serializer$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/$DisplayCaseBlock" {
import {$ItemPositionData, $ItemPositionData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/$ItemPositionData"
import {$TraderBlockBase, $TraderBlockBase$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockBase"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IItemTraderBlock, $IItemTraderBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/interfaces/$IItemTraderBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $DisplayCaseBlock extends $TraderBlockBase implements $IItemTraderBlock {
static readonly "TRADECOUNT": integer
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "validTraderTypes"(): $List<($BlockEntityType<(any)>)>
public "traderType"(): $BlockEntityType<(any)>
public "getItemPositionData"(): $ItemPositionData
get "itemPositionData"(): $ItemPositionData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayCaseBlock$Type = ($DisplayCaseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayCaseBlock_ = $DisplayCaseBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$TradeRule" {
import {$TradeRuleType, $TradeRuleType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/rules/$TradeRuleType"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$TradeEvent$PostTradeEvent, $TradeEvent$PostTradeEvent$Type} from "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent$PostTradeEvent"
import {$IRuleLoadListener, $IRuleLoadListener$Type} from "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$IRuleLoadListener"
import {$TradeRulesClientSubTab, $TradeRulesClientSubTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/trade_rules/$TradeRulesClientSubTab"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$JsonArray, $JsonArray$Type} from "packages/com/google/gson/$JsonArray"
import {$TradeEvent$TradeCostEvent, $TradeEvent$TradeCostEvent$Type} from "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent$TradeCostEvent"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$TradeRulesClientTab, $TradeRulesClientTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/trade_rules/$TradeRulesClientTab"
import {$TradeEvent$PreTradeEvent, $TradeEvent$PreTradeEvent$Type} from "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent$PreTradeEvent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ITradeRuleHost, $ITradeRuleHost$Type} from "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$ITradeRuleHost"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"

export class $TradeRule {
readonly "type": $TradeRuleType<(any)>


public "getName"(): $MutableComponent
public "load"(arg0: $CompoundTag$Type): void
public "save"(): $CompoundTag
public "isActive"(): boolean
public static "addIgnoreMissing"(arg0: string): void
public static "addLoadListener"(arg0: $IRuleLoadListener$Type): void
public "loadFromJson"(arg0: $JsonObject$Type): void
public static "getRule"(arg0: $ResourceLocation$Type, arg1: $List$Type<($TradeRule$Type)>): $TradeRule
public "setActive"(arg0: boolean): void
public static "Deserialize"(arg0: $CompoundTag$Type): $TradeRule
public static "Deserialize"(arg0: $JsonObject$Type): $TradeRule
public "loadPersistentData"(arg0: $CompoundTag$Type): void
public static "loadPersistentData"(arg0: $CompoundTag$Type, arg1: $List$Type<($TradeRule$Type)>, arg2: string): void
public "savePersistentData"(): $CompoundTag
public static "savePersistentData"(arg0: $CompoundTag$Type, arg1: $List$Type<($TradeRule$Type)>, arg2: string): boolean
public static "saveRules"(arg0: $CompoundTag$Type, arg1: $List$Type<($TradeRule$Type)>, arg2: string): void
public "saveToJson"(arg0: $JsonObject$Type): $JsonObject
public static "saveRulesToJson"(arg0: $List$Type<($TradeRule$Type)>): $JsonArray
public "afterTrade"(arg0: $TradeEvent$PostTradeEvent$Type): void
public "tradeCost"(arg0: $TradeEvent$TradeCostEvent$Type): void
public "beforeTrade"(arg0: $TradeEvent$PreTradeEvent$Type): void
public static "GetTradeRule"(arg0: $List$Type<($TradeRule$Type)>, arg1: $ResourceLocation$Type): $TradeRule
public static "Parse"(arg0: $JsonArray$Type, arg1: $ITradeRuleHost$Type): $List<($TradeRule)>
public static "ValidateTradeRuleList"(arg0: $List$Type<($TradeRule$Type)>, arg1: $ITradeRuleHost$Type): boolean
public "receiveUpdateMessage"(arg0: $LazyPacketData$Type): void
public static "ValidateTradeRuleActiveStates"(arg0: $List$Type<($TradeRule$Type)>): boolean
public static "translationKeyOfType"(arg0: $ResourceLocation$Type): string
public static "loadRules"(arg0: $CompoundTag$Type, arg1: string, arg2: $ITradeRuleHost$Type): $List<($TradeRule)>
public static "nameOfType"(arg0: $ResourceLocation$Type): $MutableComponent
public static "HasTradeRule"(arg0: $List$Type<($TradeRule$Type)>, arg1: $ResourceLocation$Type): boolean
public static "CreateRule"(arg0: $ResourceLocation$Type): $TradeRule
public "canActivate"(): boolean
public "createTab"(arg0: $TradeRulesClientTab$Type<(any)>): $TradeRulesClientSubTab
public static "CreateRuleMessage"(): $CompoundTag
public static "isCreateMessage"(arg0: $CompoundTag$Type): boolean
public static "isRemoveMessage"(arg0: $CompoundTag$Type): boolean
public static "RemoveRuleMessage"(): $CompoundTag
get "name"(): $MutableComponent
get "active"(): boolean
set "active"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeRule$Type = ($TradeRule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeRule_ = $TradeRule$Type;
}}
declare module "packages/io/github/mortuusars/exposure/recipe/$FilmDevelopingRecipe$Serializer" {
import {$FilmDevelopingRecipe, $FilmDevelopingRecipe$Type} from "packages/io/github/mortuusars/exposure/recipe/$FilmDevelopingRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $FilmDevelopingRecipe$Serializer implements $RecipeSerializer<($FilmDevelopingRecipe)> {

constructor()

public "fromJson"(recipeId: $ResourceLocation$Type, serializedRecipe: $JsonObject$Type): $FilmDevelopingRecipe
public "fromNetwork"(recipeId: $ResourceLocation$Type, buffer: $FriendlyByteBuf$Type): $FilmDevelopingRecipe
public "toNetwork"(buffer: $FriendlyByteBuf$Type, recipe: $FilmDevelopingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $FilmDevelopingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilmDevelopingRecipe$Serializer$Type = ($FilmDevelopingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilmDevelopingRecipe$Serializer_ = $FilmDevelopingRecipe$Serializer$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$DevelopedFilmItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IFilmItem, $IFilmItem$Type} from "packages/io/github/mortuusars/exposure/item/$IFilmItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FilmType, $FilmType$Type} from "packages/io/github/mortuusars/exposure/camera/infrastructure/$FilmType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DevelopedFilmItem extends $Item implements $IFilmItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(type: $FilmType$Type, properties: $Item$Properties$Type)

public "getType"(): $FilmType
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "getDefaultFrameSize"(): integer
public "getDefaultMaxFrameCount"(filmStack: $ItemStack$Type): integer
public "getExposedFramesCount"(stack: $ItemStack$Type): integer
public "getMaxFrameCount"(filmStack: $ItemStack$Type): integer
public "getFrameSize"(filmStack: $ItemStack$Type): integer
public "hasExposedFrame"(filmStack: $ItemStack$Type, index: integer): boolean
public "getExposedFrames"(filmStack: $ItemStack$Type): $ListTag
get "type"(): $FilmType
get "defaultFrameSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DevelopedFilmItem$Type = ($DevelopedFilmItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DevelopedFilmItem_ = $DevelopedFilmItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/slots/easy/$EasyMultiBGSlot" {
import {$EasySlot, $EasySlot$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/slots/easy/$EasySlot"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $EasyMultiBGSlot extends $EasySlot {
static readonly "EMPTY_SLOT_BG": $ResourceLocation
static readonly "BACKGROUND": $Pair<($ResourceLocation), ($ResourceLocation)>
 "active": boolean
 "locked": boolean
 "container": $Container
 "index": integer
 "x": integer
 "y": integer

constructor(arg0: $Container$Type, arg1: integer, arg2: integer, arg3: integer)

public "getNoItemIcon"(): $Pair<($ResourceLocation), ($ResourceLocation)>
get "noItemIcon"(): $Pair<($ResourceLocation), ($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasyMultiBGSlot$Type = ($EasyMultiBGSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasyMultiBGSlot_ = $EasyMultiBGSlot$Type;
}}
declare module "packages/io/github/mortuusars/chalk/core/$MarkSymbol$OrientationBehavior" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $MarkSymbol$OrientationBehavior extends $Enum<($MarkSymbol$OrientationBehavior)> {
static readonly "FIXED": $MarkSymbol$OrientationBehavior
static readonly "FULL": $MarkSymbol$OrientationBehavior
static readonly "CARDINAL": $MarkSymbol$OrientationBehavior
static readonly "UP_DOWN_CARDINAL": $MarkSymbol$OrientationBehavior


public static "values"(): ($MarkSymbol$OrientationBehavior)[]
public static "valueOf"(arg0: string): $MarkSymbol$OrientationBehavior
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MarkSymbol$OrientationBehavior$Type = (("up_down_cardinal") | ("fixed") | ("cardinal") | ("full")) | ($MarkSymbol$OrientationBehavior);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MarkSymbol$OrientationBehavior_ = $MarkSymbol$OrientationBehavior$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/text/$TextEntry" {
import {$TradeRuleType, $TradeRuleType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/rules/$TradeRuleType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StatKey, $StatKey$Type} from "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatKey"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$NotificationType, $NotificationType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/notifications/$NotificationType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$IconData, $IconData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/icon/$IconData"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $TextEntry {

constructor(arg0: $Supplier$Type<(string)>)
constructor(arg0: string)

public static "command"(arg0: string, arg1: string): $TextEntry
public "get"(...arg0: (any)[]): $MutableComponent
public "getKey"(): string
public static "message"(arg0: string, arg1: string): $TextEntry
public static "argument"(arg0: string): $TextEntry
public static "block"(arg0: $RegistryObject$Type<(any)>): $TextEntry
public static "item"(arg0: $RegistryObject$Type<(any)>): $TextEntry
public static "chain"(arg0: string): $TextEntry
public static "permission"(arg0: string): $TextEntry
public static "description"(arg0: $TextEntry$Type): $TextEntry
public static "extend"(arg0: $TextEntry$Type, arg1: string): $TextEntry
public static "initial"(arg0: $TextEntry$Type): $TextEntry
public static "profession"(arg0: $RegistryObject$Type<(any)>): $TextEntry
public static "enchantment"(arg0: $RegistryObject$Type<(any)>): $TextEntry
public static "button"(arg0: string, arg1: string): $TextEntry
public static "notification"(arg0: $ResourceLocation$Type): $TextEntry
public static "notification"(arg0: $NotificationType$Type<(any)>, arg1: string): $TextEntry
public static "notification"(arg0: $NotificationType$Type<(any)>): $TextEntry
public static "notification"(arg0: $ResourceLocation$Type, arg1: string): $TextEntry
public static "sound"(arg0: string, arg1: string): $TextEntry
public static "gui"(arg0: string, arg1: string): $TextEntry
public static "widget"(arg0: string, arg1: string): $TextEntry
public static "creativeTab"(arg0: string, arg1: string): $TextEntry
public static "gamerule"(arg0: string): $TextEntry
public static "keyBind"(arg0: string, arg1: string): $TextEntry
public static "plural"(arg0: $TextEntry$Type): $TextEntry
public static "tradeRule"(arg0: $TradeRuleType$Type<(any)>): $TextEntry
public static "tradeRuleMessage"(arg0: $TradeRuleType$Type<(any)>, arg1: string): $TextEntry
public static "chainDisplay"(arg0: string): $TextEntry
public static "chainDisplayWordy"(arg0: string): $TextEntry
public static "blurb"(arg0: string, arg1: string): $TextEntry
public static "resourcePack"(arg0: string, arg1: string): $TextEntry
public static "curiosSlot"(arg0: string): $TextEntry
public static "jeiInfo"(arg0: string, arg1: string): $TextEntry
public "getAsList"(...arg0: (any)[]): $List<($Component)>
public static "lcStat"(arg0: $StatKey$Type<(any), (any)>): $TextEntry
public "icon"(...arg0: (any)[]): $IconData
public "getWithStyle"(...arg0: ($ChatFormatting$Type)[]): $MutableComponent
public "tooltip"(arg0: $List$Type<($Component$Type)>, ...arg1: (any)[]): void
public static "tooltip"(arg0: string, arg1: string): $TextEntry
get "key"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextEntry$Type = ($TextEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextEntry_ = $TextEntry$Type;
}}
declare module "packages/io/github/mortuusars/salt/crafting/recipe/$SaltingRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$CustomRecipe, $CustomRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CustomRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SaltingRecipe extends $CustomRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $NonNullList$Type<($Ingredient$Type)>)

public "getFoodIngredient"(): $Ingredient
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
get "foodIngredient"(): $Ingredient
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SaltingRecipe$Type = ($SaltingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SaltingRecipe_ = $SaltingRecipe$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/reference/$AuctionStandBlock" {
import {$EasyBlock, $EasyBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/common/blocks/$EasyBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$IEasyEntityBlock, $IEasyEntityBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IEasyEntityBlock"

export class $AuctionStandBlock extends $EasyBlock implements $IEasyEntityBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getAllowedTypes"(): $Collection<($BlockEntityType<(any)>)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "allowedTypes"(): $Collection<($BlockEntityType<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AuctionStandBlock$Type = ($AuctionStandBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AuctionStandBlock_ = $AuctionStandBlock$Type;
}}
declare module "packages/io/github/mortuusars/exposure/camera/$AttachmentSound" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $AttachmentSound {
static readonly "NONE": $AttachmentSound
static readonly "FILM": $AttachmentSound
static readonly "FLASH": $AttachmentSound
static readonly "LENS": $AttachmentSound
static readonly "FILTER": $AttachmentSound

constructor(inserted: $Supplier$Type<($SoundEvent$Type)>, insertedVolume: float, insertedPitch: float)
constructor(inserted: $Supplier$Type<($SoundEvent$Type)>, insertedVolume: float, insertedPitch: float, removed: $Supplier$Type<($SoundEvent$Type)>, removedVolume: float, removedPitch: float)

public "getInserted"(): $Supplier<($SoundEvent)>
public "getInsertedVolume"(): float
public "getRemovedVolume"(): float
public "getRemovedPitch"(): float
public "getInsertedPitch"(): float
public "getRemoved"(): $Supplier<($SoundEvent)>
public "playOnePerPlayer"(player: $Player$Type, isRemoved: boolean): void
get "inserted"(): $Supplier<($SoundEvent)>
get "insertedVolume"(): float
get "removedVolume"(): float
get "removedPitch"(): float
get "insertedPitch"(): float
get "removed"(): $Supplier<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentSound$Type = ($AttachmentSound);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentSound_ = $AttachmentSound$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/$CoinJarBlock" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IEasyEntityBlock, $IEasyEntityBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IEasyEntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$RotatableBlock"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $CoinJarBlock extends $RotatableBlock implements $IEasyEntityBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)
constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $VoxelShape$Type)

public "getAllowedTypes"(): $Collection<($BlockEntityType<(any)>)>
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "allowedTypes"(): $Collection<($BlockEntityType<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoinJarBlock$Type = ($CoinJarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoinJarBlock_ = $CoinJarBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/tradeinterface/$ItemTraderInterfaceBlock" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TraderInterfaceBlock, $TraderInterfaceBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/blocks/$TraderInterfaceBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $ItemTraderInterfaceBlock extends $TraderInterfaceBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTraderInterfaceBlock$Type = ($ItemTraderInterfaceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTraderInterfaceBlock_ = $ItemTraderInterfaceBlock$Type;
}}
declare module "packages/io/github/mortuusars/salt/item/$SaltItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SaltItem extends $Item {
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

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SaltItem$Type = ($SaltItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SaltItem_ = $SaltItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/notifications/$NotificationCategoryType" {
import {$NonNullFunction, $NonNullFunction$Type} from "packages/net/minecraftforge/common/util/$NonNullFunction"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$NotificationCategory, $NotificationCategory$Type} from "packages/io/github/lightman314/lightmanscurrency/api/notifications/$NotificationCategory"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $NotificationCategoryType<T extends $NotificationCategory> {
readonly "type": $ResourceLocation

constructor(arg0: $ResourceLocation$Type, arg1: $NonNullFunction$Type<($CompoundTag$Type), (T)>)

public "toString"(): string
public "load"(arg0: $CompoundTag$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NotificationCategoryType$Type<T> = ($NotificationCategoryType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NotificationCategoryType_<T> = $NotificationCategoryType$Type<(T)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/world/$WorldArea" {
import {$WorldPosition, $WorldPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/world/$WorldPosition"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $WorldArea {
static readonly "VOID": $WorldArea
static readonly "INFINITE_VOID": $WorldArea


public static "of"(arg0: $WorldPosition$Type, arg1: integer, arg2: integer, arg3: integer): $WorldArea
public static "of"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer, arg3: integer, arg4: integer): $WorldArea
public "isVoid"(): boolean
public static "ofInfiniteRange"(arg0: $WorldPosition$Type): $WorldArea
public "getCenter"(): $WorldPosition
public "isInfiniteRange"(): boolean
public "isInArea"(arg0: $WorldPosition$Type): boolean
public "isInArea"(arg0: $BlockPos$Type): boolean
public "getCorner1"(): $BlockPos
public "getCorner2"(): $BlockPos
get "void"(): boolean
get "center"(): $WorldPosition
get "infiniteRange"(): boolean
get "corner1"(): $BlockPos
get "corner2"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldArea$Type = ($WorldArea);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldArea_ = $WorldArea$Type;
}}
declare module "packages/io/github/mortuusars/wares/item/$DeliveryAgreementItem$AgreementError" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $DeliveryAgreementItem$AgreementError extends $Enum<($DeliveryAgreementItem$AgreementError)> {
static readonly "NO_TAG": $DeliveryAgreementItem$AgreementError
static readonly "EMPTY": $DeliveryAgreementItem$AgreementError
static readonly "DAMAGED": $DeliveryAgreementItem$AgreementError


public static "values"(): ($DeliveryAgreementItem$AgreementError)[]
public static "valueOf"(arg0: string): $DeliveryAgreementItem$AgreementError
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeliveryAgreementItem$AgreementError$Type = (("no_tag") | ("damaged") | ("empty")) | ($DeliveryAgreementItem$AgreementError);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeliveryAgreementItem$AgreementError_ = $DeliveryAgreementItem$AgreementError$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/util/$ItemRequirement" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $ItemRequirement implements $Predicate<($ItemStack)> {
static readonly "NULL": $ItemRequirement
readonly "filter": $Predicate<($ItemStack)>
readonly "count": integer


public static "getRandomItemsMatchingRequirements"(arg0: $IItemHandler$Type, arg1: $ItemRequirement$Type, arg2: $ItemRequirement$Type): $List<($ItemStack)>
public "test"(arg0: $ItemStack$Type): boolean
public static "of"(arg0: $Item$Type, arg1: integer): $ItemRequirement
public static "of"(arg0: $Predicate$Type<($ItemStack$Type)>, arg1: integer): $ItemRequirement
public static "of"(arg0: $ItemStack$Type): $ItemRequirement
public "merge"(arg0: $ItemRequirement$Type): $ItemRequirement
public "isNull"(): boolean
public static "getRandomItem"(arg0: $List$Type<($ItemStack$Type)>, arg1: integer): $ItemStack
public static "ofItemNoNBT"(arg0: $ItemStack$Type): $ItemRequirement
public static "getFirstItemsMatchingRequirements"(arg0: $Container$Type, ...arg1: ($ItemRequirement$Type)[]): $List<($ItemStack)>
public static "getFirstItemsMatchingRequirements"(arg0: $IItemHandler$Type, ...arg1: ($ItemRequirement$Type)[]): $List<($ItemStack)>
public static "getValidItems"(arg0: $IItemHandler$Type, arg1: $ItemRequirement$Type): $List<($ItemStack)>
public static "isNotInList"(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type): boolean
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
get "null"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRequirement$Type = ($ItemRequirement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemRequirement_ = $ItemRequirement$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/$CoinMintBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IEasyEntityBlock, $IEasyEntityBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IEasyEntityBlock"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$RotatableBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $CoinMintBlock extends $RotatableBlock implements $IEasyEntityBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getAllowedTypes"(): $Collection<($BlockEntityType<(any)>)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "allowedTypes"(): $Collection<($BlockEntityType<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoinMintBlock$Type = ($CoinMintBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoinMintBlock_ = $CoinMintBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$PortableATMItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$TooltipItem, $TooltipItem$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/$TooltipItem"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PortableATMItem extends $TooltipItem {
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

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public static "getMenuProvider"(): $MenuProvider
get "menuProvider"(): $MenuProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableATMItem$Type = ($PortableATMItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortableATMItem_ = $PortableATMItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/bank/reference/$BankReference" {
import {$IBankAccount, $IBankAccount$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/bank/$IBankAccount"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IMoneyHolder, $IMoneyHolder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$IMoneyHolder"
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"
import {$MoneyHolder$Slave, $MoneyHolder$Slave$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$MoneyHolder$Slave"

export class $BankReference extends $MoneyHolder$Slave implements $IClientTracker {


public "get"(): $IBankAccount
public static "load"(arg0: $CompoundTag$Type): $BankReference
public static "decode"(arg0: $FriendlyByteBuf$Type): $BankReference
public "encode"(arg0: $FriendlyByteBuf$Type): void
public "save"(): $CompoundTag
public "isClient"(): boolean
public "flagAsClient"(arg0: boolean): $BankReference
public "flagAsClient"(): $BankReference
public "canPersist"(arg0: $Player$Type): boolean
public "allowedAccess"(arg0: $Player$Type): boolean
public "isServer"(): boolean
public static "sortPayFirst"(arg0: $List$Type<($IMoneyHolder$Type)>): void
public static "sortTakeFirst"(arg0: $List$Type<($IMoneyHolder$Type)>): void
public static "defaultTooltipFormat"(arg0: $List$Type<($Component$Type)>, arg1: $Component$Type, arg2: $MoneyView$Type): void
get "client"(): boolean
get "server"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BankReference$Type = ($BankReference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BankReference_ = $BankReference$Type;
}}
declare module "packages/io/github/mortuusars/exposure/recipe/$PhotographCopyingRecipe" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AbstractNbtTransferringRecipe, $AbstractNbtTransferringRecipe$Type} from "packages/io/github/mortuusars/exposure/recipe/$AbstractNbtTransferringRecipe"

export class $PhotographCopyingRecipe extends $AbstractNbtTransferringRecipe {

constructor(id: $ResourceLocation$Type, transferIngredient: $Ingredient$Type, ingredients: $NonNullList$Type<($Ingredient$Type)>, result: $ItemStack$Type)

public "getSerializer"(): $RecipeSerializer<(any)>
public "getRemainingItems"(pInv: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "transferNbt"(photographStack: $ItemStack$Type, recipeResultStack: $ItemStack$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhotographCopyingRecipe$Type = ($PhotographCopyingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhotographCopyingRecipe_ = $PhotographCopyingRecipe$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$IMoneyHolder" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IMoneyHandler, $IMoneyHandler$Type} from "packages/io/github/lightman314/lightmanscurrency/api/capability/money/$IMoneyHandler"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"

export interface $IMoneyHolder extends $IMoneyHandler {

 "priority"(): integer
 "formatTooltip"(arg0: $List$Type<($Component$Type)>): void
 "inversePriority"(): integer
 "getTooltipTitle"(): $Component
 "isMoneyTypeValid"(arg0: $MoneyValue$Type): boolean
 "insertMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
 "extractMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
 "flagAsKnown"(arg0: any): void
 "forgetContext"(arg0: any): void
 "hasStoredMoneyChanged"(arg0: any): boolean
 "getStoredMoney"(): $MoneyView
}

export namespace $IMoneyHolder {
function sortPayFirst(arg0: $List$Type<($IMoneyHolder$Type)>): void
function sortTakeFirst(arg0: $List$Type<($IMoneyHolder$Type)>): void
function defaultTooltipFormat(arg0: $List$Type<($Component$Type)>, arg1: $Component$Type, arg2: $MoneyView$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMoneyHolder$Type = ($IMoneyHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMoneyHolder_ = $IMoneyHolder$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/enchantments/$WalletEnchantment" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $WalletEnchantment extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory


public "addWalletTooltips"(arg0: $List$Type<($Component$Type)>, arg1: integer, arg2: $ItemStack$Type): void
public static "addWalletEnchantmentTooltips"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WalletEnchantment$Type = ($WalletEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WalletEnchantment_ = $WalletEnchantment$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/core/variants/$Color" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $Color extends $Enum<($Color)> {
static readonly "WHITE": $Color
static readonly "LIGHT_GRAY": $Color
static readonly "GRAY": $Color
static readonly "BLACK": $Color
static readonly "BROWN": $Color
static readonly "RED": $Color
static readonly "ORANGE": $Color
static readonly "YELLOW": $Color
static readonly "LIME": $Color
static readonly "GREEN": $Color
static readonly "CYAN": $Color
static readonly "LIGHT_BLUE": $Color
static readonly "BLUE": $Color
static readonly "PURPLE": $Color
static readonly "MAGENTA": $Color
static readonly "PINK": $Color
readonly "sortIndex": integer
readonly "hexColor": integer
readonly "mapColor": $MapColor
readonly "dyeTag": $TagKey<($Item)>


public static "values"(): ($Color)[]
public static "valueOf"(arg0: string): $Color
public static "getFromIndex"(arg0: long): $Color
public static "sortByColor"(arg0: $Color$Type, arg1: $Color$Type): integer
public "getComponent"(): $MutableComponent
public static "getFromPrettyName"(arg0: string): $Color
public "getPrettyName"(): string
public "getResourceSafeName"(): string
get "component"(): $MutableComponent
get "prettyName"(): string
get "resourceSafeName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Color$Type = (("magenta") | ("pink") | ("green") | ("light_gray") | ("lime") | ("black") | ("yellow") | ("light_blue") | ("brown") | ("cyan") | ("red") | ("orange") | ("gray") | ("white") | ("blue") | ("purple")) | ($Color);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Color_ = $Color$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$MenuValidator" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$MenuValidatorType, $MenuValidatorType$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$MenuValidatorType"

export class $MenuValidator {
readonly "type": $MenuValidatorType


public static "load"(arg0: $CompoundTag$Type): $MenuValidator
public static "decode"(arg0: $FriendlyByteBuf$Type): $MenuValidator
public "encode"(arg0: $FriendlyByteBuf$Type): void
public "save"(): void
public "stillValid"(arg0: $Player$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuValidator$Type = ($MenuValidator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuValidator_ = $MenuValidator$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/$VendingMachineLargeBlock" {
import {$ItemPositionData, $ItemPositionData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/$ItemPositionData"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IItemTraderBlock, $IItemTraderBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/interfaces/$IItemTraderBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$TraderBlockTallWideRotatable, $TraderBlockTallWideRotatable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockTallWideRotatable"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $VendingMachineLargeBlock extends $TraderBlockTallWideRotatable implements $IItemTraderBlock {
static readonly "TRADECOUNT": integer
static readonly "FACING": $DirectionProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "makeTrader"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "traderType"(): $BlockEntityType<(any)>
public "getItemPositionData"(): $ItemPositionData
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "itemPositionData"(): $ItemPositionData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VendingMachineLargeBlock$Type = ($VendingMachineLargeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VendingMachineLargeBlock_ = $VendingMachineLargeBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/commands/arguments/$TraderArgument$Info$Template" {
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$TraderArgument, $TraderArgument$Type} from "packages/io/github/lightman314/lightmanscurrency/common/commands/arguments/$TraderArgument"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $TraderArgument$Info$Template implements $ArgumentTypeInfo$Template<($TraderArgument)> {


public "instantiate"(arg0: $CommandBuildContext$Type): $TraderArgument
public "type"(): $ArgumentTypeInfo<($TraderArgument), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderArgument$Info$Template$Type = ($TraderArgument$Info$Template);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderArgument$Info$Template_ = $TraderArgument$Info$Template$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/icon/$IconData" {
import {$ScreenPosition, $ScreenPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Sprite, $Sprite$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/rendering/$Sprite"
import {$EasyGuiGraphics, $EasyGuiGraphics$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/client/rendering/$EasyGuiGraphics"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"

export class $IconData {
static readonly "BLANK": $IconData

constructor()

public static "of"(arg0: $ItemStack$Type): $IconData
public static "of"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer): $IconData
public static "of"(arg0: $Sprite$Type): $IconData
public static "of"(arg0: $Component$Type): $IconData
public static "of"(arg0: $Component$Type, arg1: integer): $IconData
public static "of"(...arg0: ($IconData$Type)[]): $IconData
public static "of"(arg0: $ItemLike$Type): $IconData
public static "of"(arg0: $ItemStack$Type, arg1: string): $IconData
public static "of"(arg0: $RegistryObject$Type<(any)>): $IconData
public static "of"(arg0: $RegistryObject$Type<(any)>, arg1: string): $IconData
public static "of"(arg0: $ItemLike$Type, arg1: string): $IconData
public "render"(arg0: $EasyGuiGraphics$Type, arg1: integer, arg2: integer): void
public "render"(arg0: $EasyGuiGraphics$Type, arg1: $ScreenPosition$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IconData$Type = ($IconData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IconData_ = $IconData$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/$TraderStorageMenu" {
import {$TraderData, $TraderData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData"
import {$IMoneyCollectionMenu, $IMoneyCollectionMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/$IMoneyCollectionMenu"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$ITraderStorageMenu, $ITraderStorageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageMenu"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MenuValidator, $MenuValidator$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$MenuValidator"
import {$CoinSlot, $CoinSlot$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/slots/$CoinSlot"
import {$LazyMessageMenu, $LazyMessageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/$LazyMessageMenu"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TraderStorageTab, $TraderStorageTab$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$TraderStorageTab"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$IValidatedMenu, $IValidatedMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$IValidatedMenu"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TraderStorageMenu extends $LazyMessageMenu implements $IValidatedMenu, $ITraderStorageMenu, $IMoneyCollectionMenu {
static readonly "SLOT_OFFSET": integer
readonly "player": $Player
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_HEADER_END": integer
static readonly "CARRIED_SLOT_SIZE": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "slots": $NonNullList<($Slot)>
 "remoteSlots": $NonNullList<($ItemStack)>
 "containerId": integer

constructor(arg0: integer, arg1: $Inventory$Type, arg2: long, arg3: $MenuValidator$Type)

public "HandleMessage"(arg0: $LazyPacketData$Type): void
public "getCoinSlots"(): $List<($CoinSlot)>
public "clearContainer"(arg0: $Container$Type): void
public "getCurrentTabIndex"(): integer
public "getAllTabs"(): $Map<(integer), ($TraderStorageTab)>
public "validateCoinSlots"(): void
public "SetCoinSlotsActive"(arg0: boolean): void
public "getCurrentTab"(): $TraderStorageTab
public "AddCoins"(): void
public "HasCoinsToAdd"(): boolean
public "getContext"(): $TradeContext
public "addListener"(arg0: $Consumer$Type<($LazyPacketData$Type)>): void
public "createCoinSlotActiveMessage"(arg0: boolean, arg1: $LazyPacketData$Builder$Type): $LazyPacketData$Builder
public "createTabChangeMessage"(arg0: integer): $LazyPacketData$Builder
public "createTabChangeMessage"(arg0: integer, arg1: $LazyPacketData$Builder$Type): $LazyPacketData$Builder
public "areCoinSlotsVisible"(): boolean
public "removed"(arg0: $Player$Type): void
public "getValidator"(): $MenuValidator
public "getPermissionLevel"(arg0: string): integer
public "CollectStoredMoney"(): void
public "clearTab"(arg0: integer): void
public "setTab"(arg0: integer, arg1: $TraderStorageTab$Type): void
public "quickMoveStack"(arg0: $Player$Type, arg1: integer): $ItemStack
public "setHeldItem"(arg0: $ItemStack$Type): void
public "getHeldItem"(): $ItemStack
public "getTrader"(): $TraderData
public "changeTab"(arg0: integer, arg1: $LazyPacketData$Builder$Type): void
public "changeTab"(arg0: integer): void
public "getPlayer"(): $Player
public "SendMessage"(arg0: $LazyPacketData$Builder$Type): void
public "hasPermission"(arg0: string): boolean
public "isClient"(): boolean
get "coinSlots"(): $List<($CoinSlot)>
get "currentTabIndex"(): integer
get "allTabs"(): $Map<(integer), ($TraderStorageTab)>
get "currentTab"(): $TraderStorageTab
get "context"(): $TradeContext
get "validator"(): $MenuValidator
set "heldItem"(value: $ItemStack$Type)
get "heldItem"(): $ItemStack
get "trader"(): $TraderData
get "player"(): $Player
get "client"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderStorageMenu$Type = ($TraderStorageMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderStorageMenu_ = $TraderStorageMenu$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/ownership/$OwnerType" {
import {$Owner, $Owner$Type} from "packages/io/github/lightman314/lightmanscurrency/api/ownership/$Owner"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $OwnerType {


public "load"(arg0: $CompoundTag$Type): $Owner
public static "create"(arg0: $ResourceLocation$Type, arg1: $Function$Type<($CompoundTag$Type), ($Owner$Type)>): $OwnerType
public "getID"(): $ResourceLocation
get "iD"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwnerType$Type = ($OwnerType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwnerType_ = $OwnerType$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$AlbumPage" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $AlbumPage {
static readonly "PHOTOGRAPH_TAG": string
static readonly "NOTE_TAG": string
static readonly "NOTE_COMPONENT_TAG": string

constructor(photographStack: $ItemStack$Type, note: $Either$Type<(string), ($Component$Type)>)

public "equals"(obj: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "signed"(photographStack: $ItemStack$Type, note: $Component$Type): $AlbumPage
public "setNote"(note: $Either$Type<(string), ($Component$Type)>): void
public "getNote"(): $Either<(string), ($Component)>
public "isEditable"(): boolean
public "toTag"(tag: $CompoundTag$Type): $CompoundTag
public "getPhotographStack"(): $ItemStack
public "setPhotographStack"(photographStack: $ItemStack$Type): $ItemStack
public static "editable"(photographStack: $ItemStack$Type, note: string): $AlbumPage
public static "fromTag"(tag: $CompoundTag$Type, editable: boolean): $AlbumPage
public "toSigned"(): $AlbumPage
get "empty"(): boolean
set "note"(value: $Either$Type<(string), ($Component$Type)>)
get "note"(): $Either<(string), ($Component)>
get "photographStack"(): $ItemStack
set "photographStack"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlbumPage$Type = ($AlbumPage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlbumPage_ = $AlbumPage$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$MagnetUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeData, $UpgradeData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeData"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$UpgradeItem, $UpgradeItem$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/$UpgradeItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MagnetUpgradeItem extends $UpgradeItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Supplier$Type<(integer)>, arg1: $Item$Properties$Type)

public "fillUpgradeData"(arg0: $UpgradeData$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagnetUpgradeItem$Type = ($MagnetUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagnetUpgradeItem_ = $MagnetUpgradeItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/blockentity/$TraderInterfaceBlockEntity$ActiveMode" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$TraderInterfaceBlockEntity, $TraderInterfaceBlockEntity$Type} from "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/blockentity/$TraderInterfaceBlockEntity"

export class $TraderInterfaceBlockEntity$ActiveMode extends $Enum<($TraderInterfaceBlockEntity$ActiveMode)> {
static readonly "DISABLED": $TraderInterfaceBlockEntity$ActiveMode
static readonly "REDSTONE_OFF": $TraderInterfaceBlockEntity$ActiveMode
static readonly "REDSTONE_ONLY": $TraderInterfaceBlockEntity$ActiveMode
static readonly "ALWAYS_ON": $TraderInterfaceBlockEntity$ActiveMode
readonly "index": integer


public static "values"(): ($TraderInterfaceBlockEntity$ActiveMode)[]
public static "valueOf"(arg0: string): $TraderInterfaceBlockEntity$ActiveMode
public static "fromIndex"(arg0: integer): $TraderInterfaceBlockEntity$ActiveMode
public "isActive"(arg0: $TraderInterfaceBlockEntity$Type): boolean
public "getNext"(): $TraderInterfaceBlockEntity$ActiveMode
public "getDisplayText"(): $Component
get "next"(): $TraderInterfaceBlockEntity$ActiveMode
get "displayText"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderInterfaceBlockEntity$ActiveMode$Type = (("redstone_off") | ("always_on") | ("disabled") | ("redstone_only")) | ($TraderInterfaceBlockEntity$ActiveMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderInterfaceBlockEntity$ActiveMode_ = $TraderInterfaceBlockEntity$ActiveMode$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"

export class $LazyPacketData$Builder {


public "setMoneyValue"(arg0: string, arg1: $MoneyValue$Type): $LazyPacketData$Builder
public "build"(): $LazyPacketData
public "setBoolean"(arg0: string, arg1: boolean): $LazyPacketData$Builder
public "setInt"(arg0: string, arg1: integer): $LazyPacketData$Builder
public "setLong"(arg0: string, arg1: long): $LazyPacketData$Builder
public "setFloat"(arg0: string, arg1: float): $LazyPacketData$Builder
public "setDouble"(arg0: string, arg1: double): $LazyPacketData$Builder
public "setText"(arg0: string, arg1: $Component$Type): $LazyPacketData$Builder
public "setString"(arg0: string, arg1: string): $LazyPacketData$Builder
public "setResourceLocation"(arg0: string, arg1: $ResourceLocation$Type): $LazyPacketData$Builder
public "setCompound"(arg0: string, arg1: $CompoundTag$Type): $LazyPacketData$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LazyPacketData$Builder$Type = ($LazyPacketData$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LazyPacketData$Builder_ = $LazyPacketData$Builder$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition" {
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$IEasyScreen, $IEasyScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/interfaces/$IEasyScreen"
import {$AbstractContainerScreen, $AbstractContainerScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"

export class $ScreenPosition {
static readonly "ZERO": $ScreenPosition
readonly "x": integer
readonly "y": integer


public "toString"(): string
public static "of"(arg0: integer, arg1: integer): $ScreenPosition
public static "of"(arg0: double, arg1: double): $ScreenPosition
public static "of"(arg0: $ScreenPosition$Type, arg1: integer, arg2: integer): $ScreenPosition
public static "of"(arg0: $IEasyScreen$Type, arg1: integer, arg2: integer): $ScreenPosition
public "offset"(arg0: $ScreenPosition$Type): $ScreenPosition
public "offset"(arg0: integer, arg1: integer): $ScreenPosition
public "offset"(arg0: $AbstractWidget$Type): $ScreenPosition
public "offset"(arg0: $IEasyScreen$Type): $ScreenPosition
public static "ofOptional"(arg0: integer, arg1: integer): $LazyOptional<($ScreenPosition)>
public "offsetScreen"(arg0: $AbstractContainerScreen$Type<(any)>): $ScreenPosition
public static "getScreenCorner"(arg0: $AbstractContainerScreen$Type<(any)>): $ScreenPosition
public "asArea"(arg0: integer, arg1: integer): $ScreenArea
public "isMouseInArea"(arg0: double, arg1: double, arg2: integer, arg3: integer): boolean
public "isMouseInArea"(arg0: $ScreenPosition$Type, arg1: integer, arg2: integer): boolean
public "isMouseInArea"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
public "setPosition"(arg0: $AbstractWidget$Type): void
set "position"(value: $AbstractWidget$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenPosition$Type = ($ScreenPosition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenPosition_ = $ScreenPosition$Type;
}}
declare module "packages/io/github/mortuusars/chalk/core/$Mark" {
import {$MarkSymbol, $MarkSymbol$Type} from "packages/io/github/mortuusars/chalk/core/$MarkSymbol"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SymbolOrientation, $SymbolOrientation$Type} from "packages/io/github/mortuusars/chalk/core/$SymbolOrientation"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $Mark {
readonly "facing": $Direction
readonly "color": integer
readonly "symbol": $MarkSymbol
readonly "orientation": $SymbolOrientation
readonly "glowing": boolean

constructor(arg0: $Direction$Type, arg1: integer, arg2: $MarkSymbol$Type, arg3: $SymbolOrientation$Type, arg4: boolean)

public static "fromBuffer"(arg0: $FriendlyByteBuf$Type): $Mark
public "toBuffer"(arg0: $FriendlyByteBuf$Type): void
public "createBlockState"(arg0: $ItemStack$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mark$Type = ($Mark);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mark_ = $Mark$Type;
}}
declare module "packages/io/github/mortuusars/sootychimneys/recipe/ingredient/$ChanceResult" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $ChanceResult {
static readonly "CODEC": $Codec<($ChanceResult)>
static readonly "EMPTY": $ChanceResult

constructor(arg0: $ItemStack$Type, arg1: float)

public "getStack"(): $ItemStack
public "toJson"(): $JsonElement
public static "fromJson"(arg0: $JsonElement$Type): $ChanceResult
public static "fromBuffer"(arg0: $FriendlyByteBuf$Type): $ChanceResult
public "rollOutput"(arg0: $RandomSource$Type): $ItemStack
public "toBuffer"(arg0: $FriendlyByteBuf$Type): void
public "getChance"(): float
get "stack"(): $ItemStack
get "chance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChanceResult$Type = ($ChanceResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChanceResult_ = $ChanceResult$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/$CashRegisterBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$RotatableBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $CashRegisterBlock extends $RotatableBlock implements $EntityBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)
constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $VoxelShape$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CashRegisterBlock$Type = ($CashRegisterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CashRegisterBlock_ = $CashRegisterBlock$Type;
}}
declare module "packages/io/github/mortuusars/exposure/util/$ItemAndStack" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemAndStack<T extends $Item> {

constructor(stack: $ItemStack$Type)

public "toString"(): string
public "getStack"(): $ItemStack
public "getItem"(): T
get "stack"(): $ItemStack
get "item"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAndStack$Type<T> = ($ItemAndStack<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemAndStack_<T> = $ItemAndStack$Type<(T)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/$LazyMessageMenu" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"
import {$EasyMenu, $EasyMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$EasyMenu"

export class $LazyMessageMenu extends $EasyMenu {
readonly "player": $Player
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_HEADER_END": integer
static readonly "CARRIED_SLOT_SIZE": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "slots": $NonNullList<($Slot)>
 "remoteSlots": $NonNullList<($ItemStack)>
 "containerId": integer


public "SendMessageToServer"(arg0: $LazyPacketData$Builder$Type): void
public "SendMessage"(arg0: $LazyPacketData$Builder$Type): void
public "HandleMessage"(arg0: $LazyPacketData$Type): void
public "SendMessageToClient"(arg0: $LazyPacketData$Builder$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LazyMessageMenu$Type = ($LazyMessageMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LazyMessageMenu_ = $LazyMessageMenu$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/util/$TextRenderUtil$TextFormatting" {
import {$TextRenderUtil$TextFormatting$Centering, $TextRenderUtil$TextFormatting$Centering$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$TextRenderUtil$TextFormatting$Centering"

export class $TextRenderUtil$TextFormatting {


public "centering"(): $TextRenderUtil$TextFormatting$Centering
public static "create"(): $TextRenderUtil$TextFormatting
public "color"(arg0: integer): $TextRenderUtil$TextFormatting
public "color"(): integer
public "middle"(): $TextRenderUtil$TextFormatting
public "centered"(): $TextRenderUtil$TextFormatting
public "topEdge"(): $TextRenderUtil$TextFormatting
public "leftEdge"(): $TextRenderUtil$TextFormatting
public "rightEdge"(): $TextRenderUtil$TextFormatting
public "bottomEdge"(): $TextRenderUtil$TextFormatting
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextRenderUtil$TextFormatting$Type = ($TextRenderUtil$TextFormatting);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextRenderUtil$TextFormatting_ = $TextRenderUtil$TextFormatting$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/blockentity/$TraderInterfaceBlockEntity" {
import {$TraderData, $TraderData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IServerTicker, $IServerTicker$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/$IServerTicker"
import {$OwnerData, $OwnerData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$OwnerData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$UpgradeItem, $UpgradeItem$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/$UpgradeItem"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BankReference, $BankReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/bank/reference/$BankReference"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$IBankAccount, $IBankAccount$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/bank/$IBankAccount"
import {$TraderInterfaceBlockEntity$ActiveMode, $TraderInterfaceBlockEntity$ActiveMode$Type} from "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/blockentity/$TraderInterfaceBlockEntity$ActiveMode"
import {$TraderInterfaceMenu, $TraderInterfaceMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/$TraderInterfaceMenu"
import {$PlayerReference, $PlayerReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$PlayerReference"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeable, $IUpgradeable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$IUpgradeable"
import {$UpgradeType, $UpgradeType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeType"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$EasyBlockEntity, $EasyBlockEntity$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blockentity/$EasyBlockEntity"
import {$TraderInterfaceBlockEntity$InteractionType, $TraderInterfaceBlockEntity$InteractionType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/blockentity/$TraderInterfaceBlockEntity$InteractionType"
import {$TradeResult, $TradeResult$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeResult"
import {$SidedHandler, $SidedHandler$Type} from "packages/io/github/lightman314/lightmanscurrency/common/traderinterface/handlers/$SidedHandler"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$TradeData, $TradeData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/$TradeData"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$IDumpable, $IDumpable$Type} from "packages/io/github/lightman314/lightmanscurrency/common/emergency_ejection/$IDumpable"

export class $TraderInterfaceBlockEntity extends $EasyBlockEntity implements $IUpgradeable, $IDumpable, $IServerTicker {
static readonly "INTERACTION_DELAY": integer
readonly "owner": $OwnerData
 "blockState": $BlockState


public "getOwner"(): $OwnerData
public "canAccess"(arg0: $Player$Type): boolean
public "isActive"(): boolean
public "setMode"(arg0: $TraderInterfaceBlockEntity$ActiveMode$Type): void
public "getMode"(): $TraderInterfaceBlockEntity$ActiveMode
public "initOwner"(arg0: $Entity$Type): void
public "flagAsRemovable"(): void
public "allowRemoval"(): boolean
public "isOwner"(arg0: $Player$Type): boolean
public "getOwnerName"(): $MutableComponent
public "getContents"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): $List<($ItemStack)>
public "getBankAccount"(): $IBankAccount
public "getTradeIndex"(): integer
public "load"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "serverTick"(): void
public "getTrader"(): $TraderData
public "getCapability"<C>(arg0: $Capability$Type<(C)>, arg1: $Direction$Type): $LazyOptional<(C)>
public "allowUpgrade"(arg0: $UpgradeType$Type): boolean
public "setModeDirty"(): void
public "getReferencedTrade"(): $TradeData
public "getInteractionType"(): $TraderInterfaceBlockEntity$InteractionType
public "getTrueTrade"(): $TradeData
public "setTradeIndex"(arg0: integer): void
public "acceptTradeChanges"(): void
public "isOnlineMode"(): boolean
public "setOnlineModeDirty"(): void
public "setTrader"(arg0: long): void
public "setOnlineMode"(arg0: boolean): void
public "setInteractionType"(arg0: $TraderInterfaceBlockEntity$InteractionType$Type): void
public "hasTrader"(): boolean
public "getTradeContext"(): $TradeContext
public "sendHandlerMessage"(arg0: $ResourceLocation$Type, arg1: $CompoundTag$Type): void
public "setHandlerDirty"(arg0: $SidedHandler$Type<(any)>): void
public "interactWithTrader"(): $TradeResult
public "setLastResultDirty"(): void
public "validTrader"(): boolean
public "onlineCheck"(): boolean
public "initMenuTabs"(arg0: $TraderInterfaceMenu$Type): void
public "validTraderType"(arg0: $TraderData$Type): boolean
public "validTrade"(): boolean
public "openMenu"(arg0: $Player$Type): void
public "getUpgradeInventory"(): $Container
public "getReferencedPlayer"(): $PlayerReference
public "getBlacklistedInteractions"(): $List<($TraderInterfaceBlockEntity$InteractionType)>
public "getAccountReference"(): $BankReference
public "setInteractionDirty"(): void
public "hasTraderPermissions"(arg0: $TraderData$Type): boolean
public "setUpgradeSlotsDirty"(): void
public "setTradeReferenceDirty"(): void
public "receiveHandlerMessage"(arg0: $ResourceLocation$Type, arg1: $Player$Type, arg2: $CompoundTag$Type): void
public "mostRecentTradeResult"(): $TradeResult
public "allowUpgrade"(arg0: $UpgradeItem$Type): boolean
public "getName"(): $MutableComponent
public static "preCollected"(arg0: $List$Type<($ItemStack$Type)>, arg1: $Component$Type, arg2: $OwnerData$Type): $IDumpable
get "owner"(): $OwnerData
get "active"(): boolean
set "mode"(value: $TraderInterfaceBlockEntity$ActiveMode$Type)
get "mode"(): $TraderInterfaceBlockEntity$ActiveMode
get "ownerName"(): $MutableComponent
get "bankAccount"(): $IBankAccount
get "tradeIndex"(): integer
get "updateTag"(): $CompoundTag
get "trader"(): $TraderData
get "referencedTrade"(): $TradeData
get "interactionType"(): $TraderInterfaceBlockEntity$InteractionType
get "trueTrade"(): $TradeData
set "tradeIndex"(value: integer)
get "onlineMode"(): boolean
set "trader"(value: long)
set "onlineMode"(value: boolean)
set "interactionType"(value: $TraderInterfaceBlockEntity$InteractionType$Type)
get "tradeContext"(): $TradeContext
set "handlerDirty"(value: $SidedHandler$Type<(any)>)
get "upgradeInventory"(): $Container
get "referencedPlayer"(): $PlayerReference
get "blacklistedInteractions"(): $List<($TraderInterfaceBlockEntity$InteractionType)>
get "accountReference"(): $BankReference
get "name"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderInterfaceBlockEntity$Type = ($TraderInterfaceBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderInterfaceBlockEntity_ = $TraderInterfaceBlockEntity$Type;
}}
declare module "packages/io/github/mortuusars/wares/item/$SealedDeliveryAgreementItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SealedDeliveryAgreementItem extends $Item {
static readonly "DAMAGED_TAG": string
static readonly "UNOPENABLE_TAG": string
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

public "inspect"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "getEatingSound"(): $SoundEvent
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
get "eatingSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SealedDeliveryAgreementItem$Type = ($SealedDeliveryAgreementItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SealedDeliveryAgreementItem_ = $SealedDeliveryAgreementItem$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$ChromaticSheetItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChromaticSheetItem extends $Item {
static readonly "EXPOSURES_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "finalize"(level: $Level$Type, stack: $ItemStack$Type): $ItemStack
public "use"(level: $Level$Type, player: $Player$Type, usedHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "addExposure"(stack: $ItemStack$Type, frame: $CompoundTag$Type): void
public "getExposures"(stack: $ItemStack$Type): $List<($CompoundTag)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChromaticSheetItem$Type = ($ChromaticSheetItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChromaticSheetItem_ = $ChromaticSheetItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/settings/$TraderSettingsClientTab" {
import {$TraderSettingsTab, $TraderSettingsTab$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/traderstorage/settings/$TraderSettingsTab"
import {$ITraderStorageMenu, $ITraderStorageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageMenu"
import {$TraderStorageTab, $TraderStorageTab$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$TraderStorageTab"
import {$EasyGuiGraphics, $EasyGuiGraphics$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/client/rendering/$EasyGuiGraphics"
import {$TraderStorageClientTab, $TraderStorageClientTab$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$TraderStorageClientTab"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$IconData, $IconData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/icon/$IconData"
import {$ITraderStorageScreen, $ITraderStorageScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageScreen"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"

export class $TraderSettingsClientTab extends $TraderStorageClientTab<($TraderSettingsTab)> {
readonly "screen": $ITraderStorageScreen
readonly "menu": $ITraderStorageMenu
readonly "commonTab": T

constructor(arg0: any, arg1: $TraderSettingsTab$Type)

public "initialize"(arg0: $ScreenArea$Type, arg1: boolean): void
public "closeAction"(): void
public "shouldRenderInventoryText"(): boolean
public "tick"(): void
public "openTab"(arg0: integer): void
public "blockInventoryClosing"(): boolean
public "getTooltip"(): $MutableComponent
public "getIcon"(): $IconData
public "renderBG"(arg0: $EasyGuiGraphics$Type): void
public "renderAfterWidgets"(arg0: $EasyGuiGraphics$Type): void
public "refreshTabs"(): void
get "tooltip"(): $MutableComponent
get "icon"(): $IconData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderSettingsClientTab$Type = ($TraderSettingsClientTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderSettingsClientTab_ = $TraderSettingsClientTab$Type;
}}
declare module "packages/io/github/mortuusars/scholar/item/$IColoredBook" {
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"

export interface $IColoredBook {

 "getColor"(): $DyeColor

(): $DyeColor
}

export namespace $IColoredBook {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IColoredBook$Type = ($IColoredBook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IColoredBook_ = $IColoredBook$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$RotatableBlock" {
import {$EasyBlock, $EasyBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/common/blocks/$EasyBlock"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$IRotatableBlock, $IRotatableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IRotatableBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $RotatableBlock extends $EasyBlock implements $IRotatableBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Function$Type<($Direction$Type), ($VoxelShape$Type)>)
constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $VoxelShape$Type)
constructor(arg0: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public "getFacing"(arg0: $BlockState$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotatableBlock$Type = ($RotatableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotatableBlock_ = $RotatableBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/traderstorage/settings/$TraderSettingsTab" {
import {$TraderStorageMenu, $TraderStorageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/$TraderStorageMenu"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ITraderStorageMenu, $ITraderStorageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageMenu"
import {$TraderStorageTab, $TraderStorageTab$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$TraderStorageTab"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"

export class $TraderSettingsTab extends $TraderStorageTab {
static readonly "TAB_TRADE_BASIC": integer
static readonly "TAB_TRADE_STORAGE": integer
static readonly "TAB_TRADE_ADVANCED": integer
static readonly "TAB_TRADE_MISC": integer
static readonly "TAB_TRADER_LOGS": integer
static readonly "TAB_TRADER_SETTINGS": integer
static readonly "TAB_TRADER_STATS": integer
static readonly "TAB_TAX_INFO": integer
static readonly "TAB_RULES_TRADER": integer
static readonly "TAB_RULES_TRADE": integer
readonly "menu": $ITraderStorageMenu

constructor(arg0: $TraderStorageMenu$Type)

public "addStorageMenuSlots"(arg0: $Function$Type<($Slot$Type), ($Slot$Type)>): void
public "canOpen"(arg0: $Player$Type): boolean
public "onTabClose"(): void
public "onTabOpen"(): void
public "createClientTab"(arg0: any): any
public "receiveMessage"(arg0: $LazyPacketData$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderSettingsTab$Type = ($TraderSettingsTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderSettingsTab_ = $TraderSettingsTab$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/enchantments/$MoneyMendingEnchantment" {
import {$IMoneyHandler, $IMoneyHandler$Type} from "packages/io/github/lightman314/lightmanscurrency/api/capability/money/$IMoneyHandler"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $MoneyMendingEnchantment extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor(arg0: $Enchantment$Rarity$Type, ...arg1: ($EquipmentSlot$Type)[])

public static "runEntityTick"(arg0: $LivingEntity$Type, arg1: $IMoneyHandler$Type): void
public "getMaxLevel"(): integer
public "isTreasureOnly"(): boolean
public static "getRepairCost"(arg0: $ItemStack$Type): $MoneyValue
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
get "maxLevel"(): integer
get "treasureOnly"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoneyMendingEnchantment$Type = ($MoneyMendingEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoneyMendingEnchantment_ = $MoneyMendingEnchantment$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$CoinJarItem$Colored" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$CoinJarItem, $CoinJarItem$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/$CoinJarItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$DyeableLeatherItem, $DyeableLeatherItem$Type} from "packages/net/minecraft/world/item/$DyeableLeatherItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CoinJarItem$Colored extends $CoinJarItem implements $DyeableLeatherItem {
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "getColor"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public "hasCustomColor"(arg0: $ItemStack$Type): boolean
public "clearColor"(arg0: $ItemStack$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoinJarItem$Colored$Type = ($CoinJarItem$Colored);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoinJarItem$Colored_ = $CoinJarItem$Colored$Type;
}}
declare module "packages/io/github/mortuusars/salt/world/feature/configurations/$MineralDepositConfiguration" {
import {$MineralDepositConfiguration$DepositBlockStateInfo, $MineralDepositConfiguration$DepositBlockStateInfo$Type} from "packages/io/github/mortuusars/salt/world/feature/configurations/$MineralDepositConfiguration$DepositBlockStateInfo"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BlockStateProvider, $BlockStateProvider$Type} from "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$BlockStateProvider"
import {$ConfiguredFeature, $ConfiguredFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RuleTest, $RuleTest$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$RuleTest"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$FeatureConfiguration, $FeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$FeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $MineralDepositConfiguration extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($MineralDepositConfiguration)>

constructor(mainStateInfos: $List$Type<($MineralDepositConfiguration$DepositBlockStateInfo$Type)>, clusterStateInfo: $MineralDepositConfiguration$DepositBlockStateInfo$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getSize"(): integer
public static "blockStateInfo"(arg0: $BlockStateProvider$Type, arg1: $RuleTest$Type): $MineralDepositConfiguration$DepositBlockStateInfo
public "mainStateInfos"(): $List<($MineralDepositConfiguration$DepositBlockStateInfo)>
public "clusterStateInfo"(): $MineralDepositConfiguration$DepositBlockStateInfo
public "getClusterChance"(): float
public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "size"(): integer
get "clusterChance"(): float
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MineralDepositConfiguration$Type = ($MineralDepositConfiguration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MineralDepositConfiguration_ = $MineralDepositConfiguration$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderType" {
import {$TraderData, $TraderData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/net/minecraftforge/common/util/$NonNullSupplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $TraderType<T extends $TraderData> {
readonly "type": $ResourceLocation

constructor(arg0: $ResourceLocation$Type, arg1: $NonNullSupplier$Type<(T)>)

public "toString"(): string
public "load"(arg0: boolean, arg1: $CompoundTag$Type): T
public "create"(): T
public "loadFromJson"(arg0: $JsonObject$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderType$Type<T> = ($TraderType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderType_<T> = $TraderType$Type<(T)>;
}}
declare module "packages/io/github/mortuusars/exposure/recipe/$AbstractNbtTransferringRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$CustomRecipe, $CustomRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CustomRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AbstractNbtTransferringRecipe extends $CustomRecipe {

constructor(id: $ResourceLocation$Type, transferIngredient: $Ingredient$Type, ingredients: $NonNullList$Type<($Ingredient$Type)>, result: $ItemStack$Type)

public "matches"(container: $CraftingContainer$Type, level: $Level$Type): boolean
public "getResult"(): $ItemStack
public "getResultItem"(registryAccess: $RegistryAccess$Type): $ItemStack
public "assemble"(container: $CraftingContainer$Type, registryAccess: $RegistryAccess$Type): $ItemStack
public "getTransferIngredient"(): $Ingredient
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(width: integer, height: integer): boolean
public "transferNbt"(transferIngredientStack: $ItemStack$Type, recipeResultStack: $ItemStack$Type): $ItemStack
get "result"(): $ItemStack
get "transferIngredient"(): $Ingredient
get "ingredients"(): $NonNullList<($Ingredient)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractNbtTransferringRecipe$Type = ($AbstractNbtTransferringRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractNbtTransferringRecipe_ = $AbstractNbtTransferringRecipe$Type;
}}
declare module "packages/io/github/mortuusars/scholar/item/$ColoredWrittenBookItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$WrittenBookItem, $WrittenBookItem$Type} from "packages/net/minecraft/world/item/$WrittenBookItem"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IColoredBook, $IColoredBook$Type} from "packages/io/github/mortuusars/scholar/item/$IColoredBook"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ColoredWrittenBookItem extends $WrittenBookItem implements $IColoredBook {
static readonly "TITLE_LENGTH": integer
static readonly "TITLE_MAX_LENGTH": integer
static readonly "PAGE_EDIT_LENGTH": integer
static readonly "PAGE_LENGTH": integer
static readonly "MAX_PAGES": integer
static readonly "MAX_GENERATION": integer
static readonly "TAG_TITLE": string
static readonly "TAG_FILTERED_TITLE": string
static readonly "TAG_AUTHOR": string
static readonly "TAG_PAGES": string
static readonly "TAG_FILTERED_PAGES": string
static readonly "TAG_GENERATION": string
static readonly "TAG_RESOLVED": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(color: $DyeColor$Type, properties: $Item$Properties$Type)

public "getColor"(): $DyeColor
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColoredWrittenBookItem$Type = ($ColoredWrittenBookItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColoredWrittenBookItem_ = $ColoredWrittenBookItem$Type;
}}
declare module "packages/io/github/mortuusars/chalk/block/$ChalkMarkBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SymbolOrientation, $SymbolOrientation$Type} from "packages/io/github/mortuusars/chalk/core/$SymbolOrientation"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MarkSymbol, $MarkSymbol$Type} from "packages/io/github/mortuusars/chalk/core/$MarkSymbol"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $ChalkMarkBlock extends $Block {
static readonly "FACING": $DirectionProperty
static readonly "SYMBOL": $EnumProperty<($MarkSymbol)>
static readonly "ORIENTATION": $EnumProperty<($SymbolOrientation)>
static readonly "GLOWING": $BooleanProperty
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

constructor(arg0: $DyeColor$Type, arg1: $BlockBehaviour$Properties$Type)

public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getLightEmission"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "getColor"(): $DyeColor
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getVisualShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChalkMarkBlock$Type = ($ChalkMarkBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChalkMarkBlock_ = $ChalkMarkBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$MoneyHolder" {
import {$IMoneyHandler, $IMoneyHandler$Type} from "packages/io/github/lightman314/lightmanscurrency/api/capability/money/$IMoneyHandler"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MoneyHandler, $MoneyHandler$Type} from "packages/io/github/lightman314/lightmanscurrency/api/capability/money/$MoneyHandler"
import {$IMoneyHolder, $IMoneyHolder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$IMoneyHolder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"

export class $MoneyHolder extends $MoneyHandler implements $IMoneyHolder {
static readonly "EMPTY": $IMoneyHolder

constructor()

public static "createFromHandler"(arg0: $IMoneyHandler$Type, arg1: $Component$Type, arg2: integer): $IMoneyHolder
public "priority"(): integer
public static "sortPayFirst"(arg0: $List$Type<($IMoneyHolder$Type)>): void
public static "sortTakeFirst"(arg0: $List$Type<($IMoneyHolder$Type)>): void
public "formatTooltip"(arg0: $List$Type<($Component$Type)>): void
public "inversePriority"(): integer
public "getTooltipTitle"(): $Component
public static "defaultTooltipFormat"(arg0: $List$Type<($Component$Type)>, arg1: $Component$Type, arg2: $MoneyView$Type): void
get "tooltipTitle"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoneyHolder$Type = ($MoneyHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoneyHolder_ = $MoneyHolder$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/$IEasyTickable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEasyTickable {

 "tick"(): void

(): void
}

export namespace $IEasyTickable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEasyTickable$Type = ($IEasyTickable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEasyTickable_ = $IEasyTickable$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$CoinJarItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CoinJarItem extends $BlockItem {
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

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
export type $CoinJarItem$Type = ($CoinJarItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoinJarItem_ = $CoinJarItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/loot/glm/$CoinsInChestsModifier" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Dynamic, $Dynamic$Type} from "packages/com/mojang/serialization/$Dynamic"
import {$ObjectArrayList, $ObjectArrayList$Type} from "packages/it/unimi/dsi/fastutil/objects/$ObjectArrayList"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$IGlobalLootModifier, $IGlobalLootModifier$Type} from "packages/net/minecraftforge/common/loot/$IGlobalLootModifier"

export class $CoinsInChestsModifier implements $IGlobalLootModifier {


public "apply"(arg0: $ObjectArrayList$Type<($ItemStack$Type)>, arg1: $LootContext$Type): $ObjectArrayList<($ItemStack)>
public "codec"(): $Codec<(any)>
public static "getJson"<U>(arg0: $Dynamic$Type<(any)>): $JsonElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoinsInChestsModifier$Type = ($CoinsInChestsModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoinsInChestsModifier_ = $CoinsInChestsModifier$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/capability/money/$IMoneyHandler" {
import {$IMoneyViewer, $IMoneyViewer$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$IMoneyViewer"
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"

export interface $IMoneyHandler extends $IMoneyViewer {

 "isMoneyTypeValid"(arg0: $MoneyValue$Type): boolean
 "insertMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
 "extractMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
 "flagAsKnown"(arg0: any): void
 "forgetContext"(arg0: any): void
 "hasStoredMoneyChanged"(arg0: any): boolean
 "getStoredMoney"(): $MoneyView
}

export namespace $IMoneyHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMoneyHandler$Type = ($IMoneyHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMoneyHandler_ = $IMoneyHandler$Type;
}}
declare module "packages/io/github/mortuusars/scholar/recipe/$NbtTransferringRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$NbtTransferringRecipe, $NbtTransferringRecipe$Type} from "packages/io/github/mortuusars/scholar/recipe/$NbtTransferringRecipe"

export class $NbtTransferringRecipe$Serializer implements $RecipeSerializer<($NbtTransferringRecipe)> {

constructor()

public "fromJson"(recipeId: $ResourceLocation$Type, serializedRecipe: $JsonObject$Type): $NbtTransferringRecipe
public "fromNetwork"(recipeId: $ResourceLocation$Type, buffer: $FriendlyByteBuf$Type): $NbtTransferringRecipe
public "toNetwork"(buffer: $FriendlyByteBuf$Type, recipe: $NbtTransferringRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $NbtTransferringRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NbtTransferringRecipe$Serializer$Type = ($NbtTransferringRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NbtTransferringRecipe$Serializer_ = $NbtTransferringRecipe$Serializer$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/taxes/$ITaxable" {
import {$Notification, $Notification$Type} from "packages/io/github/lightman314/lightmanscurrency/api/notifications/$Notification"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$TaxableReference, $TaxableReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/taxes/reference/$TaxableReference"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/net/minecraftforge/common/util/$NonNullSupplier"
import {$WorldPosition, $WorldPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/world/$WorldPosition"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $ITaxable extends $IClientTracker {

 "getName"(): $MutableComponent
 "getReference"(): $TaxableReference
 "getWorldPosition"(): $WorldPosition
 "pushNotification"(arg0: $NonNullSupplier$Type<($Notification$Type)>): void
 "isClient"(): boolean
 "isServer"(): boolean
}

export namespace $ITaxable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITaxable$Type = ($ITaxable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITaxable_ = $ITaxable$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/$InteractionSlotData" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $InteractionSlotData {
static readonly "FLUID_TYPE": string
static readonly "ENERGY_TYPE": string
readonly "type": string


public static "hasInteractionSlot"(arg0: $List$Type<($InteractionSlotData$Type)>, arg1: string): boolean
public "emptySlotBG"(): $Pair<($ResourceLocation), ($ResourceLocation)>
public static "allowItemInSlot"(arg0: $List$Type<($InteractionSlotData$Type)>, arg1: $ItemStack$Type): boolean
public "allowItemInSlot"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InteractionSlotData$Type = ($InteractionSlotData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InteractionSlotData_ = $InteractionSlotData$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/$CoinBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FallingBlockEntity, $FallingBlockEntity$Type} from "packages/net/minecraft/world/entity/item/$FallingBlockEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$FallingBlock, $FallingBlock$Type} from "packages/net/minecraft/world/level/block/$FallingBlock"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CoinBlock extends $FallingBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Item$Type)>)

public "onLand"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type, arg4: $FallingBlockEntity$Type): void
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoinBlock$Type = ($CoinBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoinBlock_ = $CoinBlock$Type;
}}
declare module "packages/io/github/mortuusars/salt/block/$SaltClusterBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ISaltBlock, $ISaltBlock$Type} from "packages/io/github/mortuusars/salt/block/$ISaltBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $SaltClusterBlock extends $Block implements $ISaltBlock {
static readonly "FACING": $DirectionProperty
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

constructor(arg0: integer, arg1: integer, arg2: $BlockBehaviour$Properties$Type)

public "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
public "getDissolvedState"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $Fluid$Type): $BlockState
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "onProjectileHit"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockHitResult$Type, arg3: $Projectile$Type): void
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "onSaltAnimateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "onSaltRandomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): boolean
public static "getFluidDrippingOn"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type): $Fluid
public static "maybeGrowCluster"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $ServerLevel$Type): void
public static "canGrowCluster"(arg0: $BlockPos$Type, arg1: $ServerLevel$Type): boolean
public static "growCluster"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $ServerLevel$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SaltClusterBlock$Type = ($SaltClusterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SaltClusterBlock_ = $SaltClusterBlock$Type;
}}
declare module "packages/io/github/mortuusars/sootychimneys/recipe/$SootScrapingRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ChanceResult, $ChanceResult$Type} from "packages/io/github/mortuusars/sootychimneys/recipe/ingredient/$ChanceResult"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $SootScrapingRecipe implements $Recipe<($Container)> {
static readonly "MAX_RESULTS": integer

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $Ingredient$Type, arg3: $NonNullList$Type<($ChanceResult$Type)>)

public "getResultChimney"(): $ItemStack
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getTool"(): $Ingredient
public "getResults"(): $List<($ChanceResult)>
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "getIngredientChimney"(): $Ingredient
public "getToastSymbol"(): $ItemStack
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "isIncomplete"(): boolean
public "getType"(): $ResourceLocation
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "getOrCreateId"(): $ResourceLocation
public "getSchema"(): $RecipeSchema
public "setGroup"(group: string): void
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "getGroup"(): string
public "getMod"(): string
get "resultChimney"(): $ItemStack
get "tool"(): $Ingredient
get "results"(): $List<($ChanceResult)>
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "special"(): boolean
get "ingredientChimney"(): $Ingredient
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "type"(): $ResourceLocation
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
set "group"(value: string)
get "group"(): string
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SootScrapingRecipe$Type = ($SootScrapingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SootScrapingRecipe_ = $SootScrapingRecipe$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeType" {
import {$UpgradeData, $UpgradeData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeData"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"

export class $UpgradeType {

constructor()

public "getTooltip"(arg0: $UpgradeData$Type): $List<($Component)>
public static "hasUpgrade"(arg0: $UpgradeType$Type, arg1: $Container$Type): boolean
public "getDefaultData"(): $UpgradeData
public "clearDataFromStack"(arg0: $CompoundTag$Type): boolean
public "getPossibleTargets"(): $List<($Component)>
public "addTarget"(arg0: $Component$Type): void
public "addTarget"(arg0: $RegistryObject$Type<(any)>): void
public "addTarget"(arg0: $ItemLike$Type): void
get "defaultData"(): $UpgradeData
get "possibleTargets"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeType$Type = ($UpgradeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeType_ = $UpgradeType$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$ITallBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ITallBlock {

 "getIsBottom"(arg0: $BlockState$Type): boolean
 "getOtherHeight"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockPos
 "getIsTop"(arg0: $BlockState$Type): boolean
 "isReplaceable"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
}

export namespace $ITallBlock {
const ISBOTTOM: $BooleanProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITallBlock$Type = ($ITallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITallBlock_ = $ITallBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/$TraderInterfaceScreen" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$EasyMenuScreen, $EasyMenuScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$EasyMenuScreen"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"
import {$AbstractContainerScreen, $AbstractContainerScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$TraderInterfaceMenu, $TraderInterfaceMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/$TraderInterfaceMenu"
import {$TraderInterfaceClientTab, $TraderInterfaceClientTab$Type} from "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/menu/$TraderInterfaceClientTab"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export class $TraderInterfaceScreen extends $EasyMenuScreen<($TraderInterfaceMenu)> {
static readonly "GUI_TEXTURE": $ResourceLocation
static readonly "WIDTH": integer
static readonly "HEIGHT": integer
static readonly "INVENTORY_LOCATION": $ResourceLocation
static readonly "SLOT_ITEM_BLIT_OFFSET": integer
 "imageWidth": integer
 "imageHeight": integer
 "hoveredSlot": $Slot
 "clickedSlot": $Slot
 "snapbackEnd": $Slot
 "leftPos": integer
 "topPos": integer
 "isSplittingStack": boolean
 "draggingItem": $ItemStack
 "snapbackStartX": integer
 "snapbackStartY": integer
 "snapbackTime": long
 "snapbackItem": $ItemStack
 "quickCraftingType": integer
 "quickCraftingRemainder": integer
static "BACKGROUND_LOCATION": $ResourceLocation
 "title": $Component
readonly "children": $List<($GuiEventListener)>
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font

constructor(arg0: $TraderInterfaceMenu$Type, arg1: $Inventory$Type, arg2: $Component$Type)

public "initialize"(arg0: $ScreenArea$Type): void
public "currentTab"(): $TraderInterfaceClientTab<(any)>
public "blockInventoryClosing"(): boolean
public "screenTick"(): void
public "changeTab"(arg0: integer): void
public "changeTab"(arg0: integer, arg1: boolean, arg2: $CompoundTag$Type): void
public static "draw"(arg0: $AbstractContainerScreen$Type<(any)>, arg1: $GuiGraphics$Type, arg2: $List$Type<($Component$Type)>, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderInterfaceScreen$Type = ($TraderInterfaceScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderInterfaceScreen_ = $TraderInterfaceScreen$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/$TraderMenu" {
import {$TraderData, $TraderData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData"
import {$IMoneyCollectionMenu, $IMoneyCollectionMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/$IMoneyCollectionMenu"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$InteractionSlot, $InteractionSlot$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/slots/$InteractionSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MenuValidator, $MenuValidator$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$MenuValidator"
import {$ITraderSource, $ITraderSource$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$ITraderSource"
import {$EasyMenu, $EasyMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$EasyMenu"
import {$ITraderMenu, $ITraderMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/customer/$ITraderMenu"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IValidatedMenu, $IValidatedMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$IValidatedMenu"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export class $TraderMenu extends $EasyMenu implements $IValidatedMenu, $ITraderMenu, $IMoneyCollectionMenu {
static readonly "SLOT_OFFSET": integer
readonly "player": $Player
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_HEADER_END": integer
static readonly "CARRIED_SLOT_SIZE": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "slots": $NonNullList<($Slot)>
 "remoteSlots": $NonNullList<($ItemStack)>
 "containerId": integer

constructor(arg0: integer, arg1: $Inventory$Type, arg2: long, arg3: $MenuValidator$Type)

public "getTraderSource"(): $ITraderSource
public "getCoinSlots"(): $List<($Slot)>
public "getContext"(arg0: $TraderData$Type): $TradeContext
public "removed"(arg0: $Player$Type): void
public "getSlots"(): $List<($Slot)>
public "getValidator"(): $MenuValidator
public "getInteractionSlot"(): $InteractionSlot
public "CollectStoredMoney"(): void
public "ExecuteTrade"(arg0: integer, arg1: integer): void
public "isSingleTrader"(): boolean
public "getSingleTrader"(): $TraderData
public "quickMoveStack"(arg0: $Player$Type, arg1: integer): $ItemStack
public "setHeldItem"(arg0: $ItemStack$Type): void
public "getHeldItem"(): $ItemStack
public "getPlayer"(): $Player
get "traderSource"(): $ITraderSource
get "coinSlots"(): $List<($Slot)>
get "slots"(): $List<($Slot)>
get "validator"(): $MenuValidator
get "interactionSlot"(): $InteractionSlot
get "singleTrader"(): boolean
get "singleTrader"(): $TraderData
set "heldItem"(value: $ItemStack$Type)
get "heldItem"(): $ItemStack
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderMenu$Type = ($TraderMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderMenu_ = $TraderMenu$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$LCUpgradeSmithingTemplateItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MultiLineTextEntry, $MultiLineTextEntry$Type} from "packages/io/github/lightman314/lightmanscurrency/common/text/$MultiLineTextEntry"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LCUpgradeSmithingTemplateItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $MultiLineTextEntry$Type, arg1: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LCUpgradeSmithingTemplateItem$Type = ($LCUpgradeSmithingTemplateItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LCUpgradeSmithingTemplateItem_ = $LCUpgradeSmithingTemplateItem$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$StackedPhotographsItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PhotographItem, $PhotographItem$Type} from "packages/io/github/mortuusars/exposure/item/$PhotographItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$ItemAndStack, $ItemAndStack$Type} from "packages/io/github/mortuusars/exposure/util/$ItemAndStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StackedPhotographsItem extends $Item {
static readonly "PHOTOGRAPHS_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "overrideOtherStackedOnMe"(stack: $ItemStack$Type, other: $ItemStack$Type, slot: $Slot$Type, action: $ClickAction$Type, player: $Player$Type, access: $SlotAccess$Type): boolean
public "overrideStackedOnOther"(stack: $ItemStack$Type, slot: $Slot$Type, action: $ClickAction$Type, player: $Player$Type): boolean
public "getTooltipImage"(stack: $ItemStack$Type): $Optional<($TooltipComponent)>
public "getFirstIdOrTexture"(stack: $ItemStack$Type): $Either<(string), ($ResourceLocation)>
public "removeBottomPhotograph"(stack: $ItemStack$Type): $ItemAndStack<($PhotographItem)>
public static "playAddSoundClientside"(player: $Player$Type): void
public "getPhotographsCount"(stack: $ItemStack$Type): integer
public "addPhotographToBottom"(stack: $ItemStack$Type, photographStack: $ItemStack$Type): void
public "removeTopPhotograph"(stack: $ItemStack$Type): $ItemAndStack<($PhotographItem)>
public static "playRemoveSoundClientside"(player: $Player$Type): void
public "addPhotographOnTop"(stack: $ItemStack$Type, photographStack: $ItemStack$Type): void
public "getStackLimit"(): integer
public "getPhotographs"(stack: $ItemStack$Type): $List<($ItemAndStack<($PhotographItem)>)>
public "getPhotographs"(stack: $ItemStack$Type, limit: integer): $List<($ItemAndStack<($PhotographItem)>)>
public "getTopPhotographs"(stack: $ItemStack$Type, count: integer): $List<($Either<(string), ($ResourceLocation)>)>
public "canAddPhotograph"(stack: $ItemStack$Type): boolean
public "addPhotograph"(stack: $ItemStack$Type, photographStack: $ItemStack$Type, index: integer): void
public "removePhotograph"(stack: $ItemStack$Type, index: integer): $ItemAndStack<($PhotographItem)>
public "cyclePhotographs"(stack: $ItemStack$Type, player: $Player$Type): boolean
get "stackLimit"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StackedPhotographsItem$Type = ($StackedPhotographsItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StackedPhotographsItem_ = $StackedPhotographsItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/menu/$TraderInterfaceTab" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$TraderInterfaceMenu, $TraderInterfaceMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/$TraderInterfaceMenu"
import {$TraderInterfaceClientTab, $TraderInterfaceClientTab$Type} from "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/menu/$TraderInterfaceClientTab"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TraderInterfaceScreen, $TraderInterfaceScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/$TraderInterfaceScreen"

export class $TraderInterfaceTab {
static readonly "TAB_INFO": integer
static readonly "TAB_STORAGE": integer
static readonly "TAB_TRADER_SELECT": integer
static readonly "TAB_TRADE_SELECT": integer
static readonly "TAB_OWNERSHIP": integer
readonly "menu": $TraderInterfaceMenu


public "addStorageMenuSlots"(arg0: $Function$Type<($Slot$Type), ($Slot$Type)>): void
public "canOpen"(arg0: $Player$Type): boolean
public "onTabClose"(): void
public "onMenuClose"(): void
public "onTabOpen"(): void
public "createClientTab"(arg0: $TraderInterfaceScreen$Type): $TraderInterfaceClientTab<(any)>
public "quickMoveStack"(arg0: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "receiveMessage"(arg0: $CompoundTag$Type): void
public "handleMessage"(arg0: $LazyPacketData$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderInterfaceTab$Type = ($TraderInterfaceTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderInterfaceTab_ = $TraderInterfaceTab$Type;
}}
declare module "packages/io/github/mortuusars/monobank/content/effect/$ThiefEffect" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$Duration, $Duration$Type} from "packages/java/time/$Duration"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $ThiefEffect extends $MobEffect {
static readonly "MAX_AREA_SIZE": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public static "createInstance"(arg0: $Duration$Type): $MobEffectInstance
public static "createInstance"(arg0: $Duration$Type, arg1: integer): $MobEffectInstance
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "getCurativeItems"(): $List<($ItemStack)>
public static "getBaseDurationSeconds"(): integer
get "curativeItems"(): $List<($ItemStack)>
get "baseDurationSeconds"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThiefEffect$Type = ($ThiefEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThiefEffect_ = $ThiefEffect$Type;
}}
declare module "packages/io/github/mortuusars/exposure/camera/infrastructure/$FilmType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FilmType extends $Enum<($FilmType)> implements $StringRepresentable {
static readonly "BLACK_AND_WHITE": $FilmType
static readonly "COLOR": $FilmType
static readonly "CODEC": $StringRepresentable$EnumCodec<($FilmType)>
readonly "frameR": integer
readonly "frameG": integer
readonly "frameB": integer
readonly "filmR": float
readonly "filmG": float
readonly "filmB": float
readonly "filmA": float


public static "values"(): ($FilmType)[]
public static "valueOf"(name: string): $FilmType
public "createDevelopedItemStack"(): $ItemStack
public "getSerializedName"(): string
public static "byName"(name: string): $FilmType
public "createItemStack"(): $ItemStack
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilmType$Type = (("color") | ("black_and_white")) | ($FilmType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilmType_ = $FilmType$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/upgrades/types/capacity/$CapacityUpgrade" {
import {$UpgradeType, $UpgradeType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeType"

export class $CapacityUpgrade extends $UpgradeType {
static "CAPACITY": string

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapacityUpgrade$Type = ($CapacityUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapacityUpgrade_ = $CapacityUpgrade$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$IMoneyViewer" {
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"

export interface $IMoneyViewer {

 "flagAsKnown"(arg0: any): void
 "forgetContext"(arg0: any): void
 "hasStoredMoneyChanged"(arg0: any): boolean
 "getStoredMoney"(): $MoneyView
}

export namespace $IMoneyViewer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMoneyViewer$Type = ($IMoneyViewer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMoneyViewer_ = $IMoneyViewer$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/taxes/$TaxEntry" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Notification, $Notification$Type} from "packages/io/github/lightman314/lightmanscurrency/api/notifications/$Notification"
import {$TaxStats, $TaxStats$Type} from "packages/io/github/lightman314/lightmanscurrency/common/taxes/data/$TaxStats"
import {$ITaxable, $ITaxable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/taxes/$ITaxable"
import {$OwnerData, $OwnerData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$OwnerData"
import {$MenuValidator, $MenuValidator$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$MenuValidator"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$WorldArea, $WorldArea$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/world/$WorldArea"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$IBankAccount, $IBankAccount$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/bank/$IBankAccount"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TaxableReference, $TaxableReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/taxes/reference/$TaxableReference"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/net/minecraftforge/common/util/$NonNullSupplier"
import {$WorldPosition, $WorldPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/world/$WorldPosition"
import {$ITaxCollector, $ITaxCollector$Type} from "packages/io/github/lightman314/lightmanscurrency/api/taxes/$ITaxCollector"
import {$MoneyStorage, $MoneyStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyStorage"

export class $TaxEntry implements $ITaxCollector {
readonly "stats": $TaxStats

constructor()
constructor(arg0: long, arg1: $BlockEntity$Type, arg2: $Player$Type)

public "getOwner"(): $OwnerData
public "unlock"(): $TaxEntry
public "getName"(): $MutableComponent
public "load"(arg0: $CompoundTag$Type): void
public "setName"(arg0: string): void
public "save"(): $CompoundTag
public "canAccess"(arg0: $Player$Type): boolean
public "isActive"(): boolean
public "getID"(): long
public "isServerEntry"(): boolean
public "setHeight"(arg0: integer): void
public "moveCenter"(arg0: $WorldPosition$Type): void
public "markCenterDirty"(): void
public static "minVertOffset"(): integer
public "getVertOffset"(): integer
public static "minRadius"(): integer
public "setRadius"(arg0: integer): void
public "markAreaDirty"(): void
public "getCenter"(): $WorldPosition
public "isInfiniteRange"(): boolean
public "AcceptTaxable"(arg0: $ITaxable$Type): void
public "forcesAcceptance"(): boolean
public "setRenderMode"(arg0: integer): void
public "setVertOffset"(arg0: integer): void
public "markNameDirty"(): void
public "ShouldTax"(arg0: $ITaxable$Type): boolean
public "IsInArea"(arg0: $ITaxable$Type): boolean
public "clearStoredMoney"(): void
public "setTaxRate"(arg0: integer): void
public "markBankStateDirty"(): void
public "getRenderColor"(arg0: $Player$Type): integer
public "isLinkedToBank"(): boolean
public "getAcceptedEntries"(): $List<($TaxableReference)>
public "markOwnerDirty"(): void
public "setForceAcceptance"(arg0: boolean): void
public "setInfiniteRange"(arg0: boolean): void
public "getHeight"(): integer
public static "maxVertOffset"(): integer
public static "maxRadius"(): integer
public static "maxTaxRate"(): integer
public "setActive"(arg0: boolean, arg1: $Player$Type): void
public "isClient"(): boolean
public "getNotifications"(): $List<($Notification)>
public "flagAsClient"(): $TaxEntry
public "getRadius"(): integer
public "getStoredMoney"(): $MoneyStorage
public "TaxableWasRemoved"(arg0: $ITaxable$Type): void
public "hasCustomName"(): boolean
public "getBankAccount"(): $IBankAccount
public "depositMoney"(arg0: $MoneyValue$Type): void
public "setLinkedToBank"(arg0: boolean): void
public "getTaxRate"(): integer
public "markStatsDirty"(): void
public "PushNotification"(arg0: $NonNullSupplier$Type<($Notification$Type)>): void
public "shouldRender"(arg0: $Player$Type): boolean
public "markStoredMoneyDirty"(): void
public "markNotificationsDirty"(): void
public "markAdminStateDirty"(): void
public "markActiveStateDirty"(): void
public "markTaxPercentageDirty"(): void
public "markRenderModeDirty"(): void
public "markAcceptedEntriesDirty"(): void
public static "maxHeight"(): integer
public "CalculateAndPayTaxes"(arg0: $ITaxable$Type, arg1: $MoneyValue$Type): $MoneyValue
public static "minHeight"(): integer
public "getCustomName"(): string
public "getArea"(): $WorldArea
public "getRenderMode"(): integer
public "openMenu"(arg0: $Player$Type, arg1: $MenuValidator$Type): void
public "isServer"(): boolean
get "owner"(): $OwnerData
get "name"(): $MutableComponent
set "name"(value: string)
get "active"(): boolean
get "iD"(): long
get "serverEntry"(): boolean
set "height"(value: integer)
get "vertOffset"(): integer
set "radius"(value: integer)
get "center"(): $WorldPosition
get "infiniteRange"(): boolean
set "renderMode"(value: integer)
set "vertOffset"(value: integer)
set "taxRate"(value: integer)
get "linkedToBank"(): boolean
get "acceptedEntries"(): $List<($TaxableReference)>
set "forceAcceptance"(value: boolean)
set "infiniteRange"(value: boolean)
get "height"(): integer
get "client"(): boolean
get "notifications"(): $List<($Notification)>
get "radius"(): integer
get "storedMoney"(): $MoneyStorage
get "bankAccount"(): $IBankAccount
set "linkedToBank"(value: boolean)
get "taxRate"(): integer
get "customName"(): string
get "area"(): $WorldArea
get "renderMode"(): integer
get "server"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaxEntry$Type = ($TaxEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaxEntry_ = $TaxEntry$Type;
}}
declare module "packages/io/github/mortuusars/wares/block/$PackageBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $PackageBlock extends $BaseEntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "SHAPE_X": $VoxelShape
static readonly "SHAPE_Y": $VoxelShape
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackageBlock$Type = ($PackageBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PackageBlock_ = $PackageBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/interfaces/$IPreRender" {
import {$EasyGuiGraphics, $EasyGuiGraphics$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/client/rendering/$EasyGuiGraphics"

export interface $IPreRender {

 "preRender"(arg0: $EasyGuiGraphics$Type): void

(arg0: $EasyGuiGraphics$Type): void
}

export namespace $IPreRender {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPreRender$Type = ($IPreRender);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPreRender_ = $IPreRender$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/crafting/$TicketStationRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $TicketStationRecipe extends $Recipe<($Container)> {

 "getIngredient"(): $Ingredient
 "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
 "consumeModifier"(): boolean
 "peekAtResult"(arg0: $Container$Type): $ItemStack
 "jeiModifierList"(): $List<($ItemStack)>
 "validModifier"(arg0: $ItemStack$Type): boolean
 "validIngredient"(arg0: $ItemStack$Type): boolean
 "exampleResult"(): $ItemStack
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "getId"(): $ResourceLocation
 "getToastSymbol"(): $ItemStack
 "getSerializer"(): $RecipeSerializer<(any)>
 "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
 "getIngredients"(): $NonNullList<($Ingredient)>
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "showNotification"(): boolean
 "isIncomplete"(): boolean
 "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
 "isSpecial"(): boolean
 "getType"(): $ResourceLocation
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "getOrCreateId"(): $ResourceLocation
 "getSchema"(): $RecipeSchema
 "setGroup"(group: string): void
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "getGroup"(): string
 "getMod"(): string
}

export namespace $TicketStationRecipe {
function exampleTicketList(arg0: $RegistryObject$Type<(any)>): $List<($ItemStack)>
function exampleTicketList(arg0: $Item$Type): $List<($ItemStack)>
function exampleTicketList(arg0: $Ingredient$Type): $List<($ItemStack)>
function exampleModifierList(arg0: $TagKey$Type<($Item$Type)>, ...arg1: ($Item$Type)[]): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TicketStationRecipe$Type = ($TicketStationRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TicketStationRecipe_ = $TicketStationRecipe$Type;
}}
declare module "packages/io/github/mortuusars/salt/world/feature/configurations/$MineralDepositConfiguration$DepositBlockStateInfo" {
import {$BlockStateProvider, $BlockStateProvider$Type} from "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$BlockStateProvider"
import {$RuleTest, $RuleTest$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$RuleTest"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $MineralDepositConfiguration$DepositBlockStateInfo {
static readonly "CODEC": $Codec<($MineralDepositConfiguration$DepositBlockStateInfo)>
readonly "blockStateProvider": $BlockStateProvider
readonly "ruleTest": $RuleTest


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MineralDepositConfiguration$DepositBlockStateInfo$Type = ($MineralDepositConfiguration$DepositBlockStateInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MineralDepositConfiguration$DepositBlockStateInfo_ = $MineralDepositConfiguration$DepositBlockStateInfo$Type;
}}
declare module "packages/io/github/mortuusars/exposure/camera/infrastructure/$FlashMode" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $FlashMode extends $Enum<($FlashMode)> implements $StringRepresentable {
static readonly "OFF": $FlashMode
static readonly "ON": $FlashMode
static readonly "AUTO": $FlashMode


public static "values"(): ($FlashMode)[]
public static "valueOf"(name: string): $FlashMode
public "getId"(): string
public static "fromBuffer"(buffer: $FriendlyByteBuf$Type): $FlashMode
public "translate"(): $Component
public "toBuffer"(buffer: $FriendlyByteBuf$Type): void
public "getSerializedName"(): string
public static "byIdOrOff"(id: string): $FlashMode
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "id"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlashMode$Type = (("auto") | ("off") | ("on")) | ($FlashMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlashMode_ = $FlashMode$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/$ITraderSource" {
import {$TraderData, $TraderData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export interface $ITraderSource {

 "isSingleTrader"(): boolean
 "getSingleTrader"(): $TraderData
 "getTraders"(): $List<($TraderData)>
}

export namespace $ITraderSource {
const CLIENT_TRADER_SOURCE: $ITraderSource
const SERVER_TRADER_SOURCE: $ITraderSource
function UniversalTraderSource(arg0: boolean): $Supplier<($ITraderSource)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITraderSource$Type = ($ITraderSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITraderSource_ = $ITraderSource$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/$VendingMachineBlock" {
import {$ItemPositionData, $ItemPositionData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/$ItemPositionData"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IItemTraderBlock, $IItemTraderBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/interfaces/$IItemTraderBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$TraderBlockTallRotatable, $TraderBlockTallRotatable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockTallRotatable"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $VendingMachineBlock extends $TraderBlockTallRotatable implements $IItemTraderBlock {
static readonly "TRADECOUNT": integer
static readonly "TYPE": $ResourceLocation
static readonly "FACING": $DirectionProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "makeTrader"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "traderType"(): $BlockEntityType<(any)>
public "getItemPositionData"(): $ItemPositionData
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "itemPositionData"(): $ItemPositionData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VendingMachineBlock$Type = ($VendingMachineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VendingMachineBlock_ = $VendingMachineBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/client/rendering/$EasyGuiGraphics" {
import {$FormattedCharSequence, $FormattedCharSequence$Type} from "packages/net/minecraft/util/$FormattedCharSequence"
import {$ScreenPosition, $ScreenPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition"
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Sprite, $Sprite$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/rendering/$Sprite"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$ScreenEvent$Render, $ScreenEvent$Render$Type} from "packages/net/minecraftforge/client/event/$ScreenEvent$Render"
import {$ContainerScreenEvent$Render, $ContainerScreenEvent$Render$Type} from "packages/net/minecraftforge/client/event/$ContainerScreenEvent$Render"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$IEasyScreen, $IEasyScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/interfaces/$IEasyScreen"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"

export class $EasyGuiGraphics {
readonly "font": $Font
readonly "mousePos": $ScreenPosition
readonly "partialTicks": float


public "blitSpriteFadeHoriz"(arg0: $Sprite$Type, arg1: integer, arg2: integer, arg3: float, arg4: boolean): void
public "blitSpriteFadeHoriz"(arg0: $Sprite$Type, arg1: $ScreenPosition$Type, arg2: float): void
public "blitSpriteFadeHoriz"(arg0: $Sprite$Type, arg1: integer, arg2: integer, arg3: float): void
public "blitSpriteFadeHoriz"(arg0: $Sprite$Type, arg1: $ScreenPosition$Type, arg2: float, arg3: boolean): void
public "blitBackgroundOfSize"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
public "renderButtonBG"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: float, arg5: integer, arg6: integer): void
public "renderButtonBG"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: float, arg5: integer): void
public "drawShadowed"(arg0: string, arg1: integer, arg2: integer, arg3: integer): void
public "drawShadowed"(arg0: string, arg1: $ScreenPosition$Type, arg2: integer): void
public "drawShadowed"(arg0: $Component$Type, arg1: integer, arg2: integer, arg3: integer): void
public "drawShadowed"(arg0: $Component$Type, arg1: $ScreenPosition$Type, arg2: integer): void
public "drawShadowed"(arg0: $FormattedCharSequence$Type, arg1: integer, arg2: integer, arg3: integer): void
public "drawShadowed"(arg0: $FormattedCharSequence$Type, arg1: $ScreenPosition$Type, arg2: integer): void
public "blitSprite"(arg0: $Sprite$Type, arg1: $ScreenPosition$Type): void
public "blitSprite"(arg0: $Sprite$Type, arg1: integer, arg2: integer): void
public "blitSprite"(arg0: $Sprite$Type, arg1: integer, arg2: integer, arg3: boolean): void
public "blitSprite"(arg0: $Sprite$Type, arg1: $ScreenPosition$Type, arg2: boolean): void
public "fill"(arg0: $ScreenArea$Type, arg1: integer): void
public "fill"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "fill"(arg0: $ScreenPosition$Type, arg1: integer, arg2: integer, arg3: integer): void
public static "create"(arg0: $ScreenEvent$Render$Type): $EasyGuiGraphics
public static "create"(arg0: $ContainerScreenEvent$Render$Type): $EasyGuiGraphics
public static "create"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): $EasyGuiGraphics
public static "create"(arg0: $GuiGraphics$Type, arg1: $Font$Type, arg2: integer, arg3: integer, arg4: float): $EasyGuiGraphics
public "setColor"(arg0: $Vector4f$Type): void
public "setColor"(arg0: integer, arg1: float): void
public "setColor"(arg0: integer): void
public "setColor"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "setColor"(arg0: float, arg1: float, arg2: float): void
public "renderItem"(arg0: $ItemStack$Type, arg1: $ScreenPosition$Type): void
public "renderItem"(arg0: $ItemStack$Type, arg1: $ScreenPosition$Type, arg2: string): void
public "renderItem"(arg0: $ItemStack$Type, arg1: integer, arg2: integer): void
public "renderItem"(arg0: $ItemStack$Type, arg1: integer, arg2: integer, arg3: string): void
public "renderSlotBackground"(arg0: $Pair$Type<($ResourceLocation$Type), ($ResourceLocation$Type)>, arg1: $ScreenPosition$Type): void
public "renderSlotBackground"(arg0: $Pair$Type<($ResourceLocation$Type), ($ResourceLocation$Type)>, arg1: integer, arg2: integer): void
public "resetColor"(): void
public "blit"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public "blit"(arg0: $ResourceLocation$Type, arg1: $ScreenPosition$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "renderSlotHighlight"(arg0: integer, arg1: integer): void
public "renderSlotHighlight"(arg0: $ScreenPosition$Type): void
public "renderComponentTooltip"(arg0: $List$Type<($Component$Type)>, arg1: integer, arg2: integer): void
public "renderComponentTooltip"(arg0: $List$Type<($Component$Type)>): void
public "pushPose"(): $EasyGuiGraphics
public "popPose"(): void
public "renderNormalBackground"(arg0: $ResourceLocation$Type, arg1: $IEasyScreen$Type): void
public "getGui"(): $GuiGraphics
public "getPose"(): $PoseStack
public "pushOffset"(arg0: $ScreenPosition$Type): $EasyGuiGraphics
public "pushOffset"(arg0: $AbstractWidget$Type): $EasyGuiGraphics
public "popOffset"(): $EasyGuiGraphics
public "drawString"(arg0: string, arg1: $ScreenPosition$Type, arg2: integer): void
public "drawString"(arg0: string, arg1: integer, arg2: integer, arg3: integer): void
public "drawString"(arg0: $Component$Type, arg1: integer, arg2: integer, arg3: integer): void
public "drawString"(arg0: $FormattedCharSequence$Type, arg1: $ScreenPosition$Type, arg2: integer): void
public "drawString"(arg0: $Component$Type, arg1: $ScreenPosition$Type, arg2: integer): void
public "drawString"(arg0: $FormattedCharSequence$Type, arg1: integer, arg2: integer, arg3: integer): void
public "renderTooltip"(arg0: $List$Type<($FormattedCharSequence$Type)>, arg1: integer, arg2: integer): void
public "renderTooltip"(arg0: $ItemStack$Type, arg1: integer, arg2: integer): void
public "renderTooltip"(arg0: $Component$Type, arg1: integer, arg2: integer): void
public "renderTooltip"(arg0: $List$Type<($FormattedCharSequence$Type)>): void
public "renderTooltip"(arg0: $ItemStack$Type): void
public "renderTooltip"(arg0: $Component$Type): void
public "TranslateToForeground"(): void
public "drawWordWrap"(arg0: string, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "drawWordWrap"(arg0: $Component$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "pushOffsetZero"(): $EasyGuiGraphics
set "color"(value: $Vector4f$Type)
set "color"(value: integer)
get "gui"(): $GuiGraphics
get "pose"(): $PoseStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasyGuiGraphics$Type = ($EasyGuiGraphics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasyGuiGraphics_ = $EasyGuiGraphics$Type;
}}
declare module "packages/io/github/mortuusars/wares/data/agreement/$AgreementType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $AgreementType extends $Enum<($AgreementType)> implements $StringRepresentable {
static readonly "NONE": $AgreementType
static readonly "SEALED": $AgreementType
static readonly "REGULAR": $AgreementType
static readonly "COMPLETED": $AgreementType
static readonly "EXPIRED": $AgreementType


public static "values"(): ($AgreementType)[]
public static "valueOf"(arg0: string): $AgreementType
public "getSerializedName"(): string
public static "fromItemStack"(arg0: $ItemStack$Type): $AgreementType
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AgreementType$Type = (("expired") | ("sealed") | ("none") | ("completed") | ("regular")) | ($AgreementType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AgreementType_ = $AgreementType$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/trader/$TraderClientTab" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$EasyTab, $EasyTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$EasyTab"
import {$IconData, $IconData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/icon/$IconData"

export class $TraderClientTab extends $EasyTab {


public "getColor"(): integer
public "getTooltip"(): $Component
public "getIcon"(): $IconData
get "color"(): integer
get "tooltip"(): $Component
get "icon"(): $IconData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderClientTab$Type = ($TraderClientTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderClientTab_ = $TraderClientTab$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/$TradeDirection" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $TradeDirection extends $Enum<($TradeDirection)> {
static readonly "SALE": $TradeDirection
static readonly "PURCHASE": $TradeDirection
static readonly "BARTER": $TradeDirection
static readonly "OTHER": $TradeDirection
readonly "index": integer


public "getName"(): $MutableComponent
public static "values"(): ($TradeDirection)[]
public static "valueOf"(arg0: string): $TradeDirection
public static "fromIndex"(arg0: integer): $TradeDirection
public "getActionPhrase"(): $MutableComponent
get "name"(): $MutableComponent
get "actionPhrase"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeDirection$Type = (("sale") | ("other") | ("purchase") | ("barter")) | ($TradeDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeDirection_ = $TradeDirection$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IEasyEntityBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export interface $IEasyEntityBlock extends $EntityBlock {

 "getAllowedTypes"(): $Collection<($BlockEntityType<(any)>)>
 "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
 "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}

export namespace $IEasyEntityBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEasyEntityBlock$Type = ($IEasyEntityBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEasyEntityBlock_ = $IEasyEntityBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/crafting/$CoinMintRecipe$MintType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CoinMintRecipe$MintType extends $Enum<($CoinMintRecipe$MintType)> {
static readonly "MINT": $CoinMintRecipe$MintType
static readonly "MELT": $CoinMintRecipe$MintType
static readonly "OTHER": $CoinMintRecipe$MintType


public static "values"(): ($CoinMintRecipe$MintType)[]
public static "valueOf"(arg0: string): $CoinMintRecipe$MintType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoinMintRecipe$MintType$Type = (("mint") | ("other") | ("melt")) | ($CoinMintRecipe$MintType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoinMintRecipe$MintType_ = $CoinMintRecipe$MintType$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/capability/wallet/$IWalletHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IMoneyHandler, $IMoneyHandler$Type} from "packages/io/github/lightman314/lightmanscurrency/api/capability/money/$IMoneyHandler"
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IWalletHandler extends $IMoneyHandler {

 "load"(arg0: $CompoundTag$Type): void
 "clean"(): void
 "save"(): $CompoundTag
 "visible"(): boolean
 "isDirty"(): boolean
 "entity"(): $LivingEntity
 "tick"(): void
 "setVisible"(arg0: boolean): void
 "setWallet"(arg0: $ItemStack$Type): void
 "syncWallet"(arg0: $ItemStack$Type): void
 "getWallet"(): $ItemStack
 "isMoneyTypeValid"(arg0: $MoneyValue$Type): boolean
 "insertMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
 "extractMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
 "flagAsKnown"(arg0: any): void
 "forgetContext"(arg0: any): void
 "hasStoredMoneyChanged"(arg0: any): boolean
 "getStoredMoney"(): $MoneyView
}

export namespace $IWalletHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWalletHandler$Type = ($IWalletHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWalletHandler_ = $IWalletHandler$Type;
}}
declare module "packages/io/github/mortuusars/chalk/core/$SymbolOrientation" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $SymbolOrientation extends $Enum<($SymbolOrientation)> implements $StringRepresentable {
static readonly "CENTER": $SymbolOrientation
static readonly "NORTH": $SymbolOrientation
static readonly "NORTHEAST": $SymbolOrientation
static readonly "EAST": $SymbolOrientation
static readonly "SOUTHEAST": $SymbolOrientation
static readonly "SOUTH": $SymbolOrientation
static readonly "SOUTHWEST": $SymbolOrientation
static readonly "WEST": $SymbolOrientation
static readonly "NORTHWEST": $SymbolOrientation


public static "values"(): ($SymbolOrientation)[]
public static "valueOf"(arg0: string): $SymbolOrientation
public "rotate"(arg0: $Rotation$Type): $SymbolOrientation
public "getSerializedName"(): string
public "getRotation"(): integer
public static "fromRotation"(arg0: integer): $SymbolOrientation
public static "fromClickLocationAll"(arg0: $Vec3$Type, arg1: $Direction$Type): $SymbolOrientation
public static "fromClickLocationCardinal"(arg0: $Vec3$Type, arg1: $Direction$Type): $SymbolOrientation
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
get "rotation"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SymbolOrientation$Type = (("southwest") | ("east") | ("south") | ("center") | ("north") | ("northwest") | ("west") | ("northeast") | ("southeast")) | ($SymbolOrientation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SymbolOrientation_ = $SymbolOrientation$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/notifications/$NotificationCategory" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ITab, $ITab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/tab/$ITab"
import {$NotificationCategoryType, $NotificationCategoryType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/notifications/$NotificationCategoryType"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$IconData, $IconData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/icon/$IconData"

export class $NotificationCategory implements $ITab {
static readonly "GENERAL_TYPE": $NotificationCategoryType<(any)>
static readonly "GENERAL": $NotificationCategory

constructor()

public "getName"(): $MutableComponent
public "matches"(arg0: $NotificationCategory$Type): boolean
public "save"(): $CompoundTag
public "getColor"(): integer
public "getTooltip"(): $MutableComponent
public "notGeneral"(): boolean
public "getIcon"(): $IconData
get "name"(): $MutableComponent
get "color"(): integer
get "tooltip"(): $MutableComponent
get "icon"(): $IconData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NotificationCategory$Type = ($NotificationCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NotificationCategory_ = $NotificationCategory$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/$TradeData" {
import {$TraderData, $TraderData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TradeEvent$PostTradeEvent, $TradeEvent$PostTradeEvent$Type} from "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent$PostTradeEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TradeRenderManager, $TradeRenderManager$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/client/$TradeRenderManager"
import {$TradeRule, $TradeRule$Type} from "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$TradeRule"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TradeEvent$TradeCostEvent, $TradeEvent$TradeCostEvent$Type} from "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent$TradeCostEvent"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$TradeDirection, $TradeDirection$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/$TradeDirection"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$TradeComparisonResult, $TradeComparisonResult$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/comparison/$TradeComparisonResult"
import {$TradeEvent$PreTradeEvent, $TradeEvent$PreTradeEvent$Type} from "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent$PreTradeEvent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BasicTradeEditTab, $BasicTradeEditTab$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/traderstorage/trades_basic/$BasicTradeEditTab"
import {$ITradeRuleHost, $ITradeRuleHost$Type} from "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$ITradeRuleHost"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"

export class $TradeData implements $ITradeRuleHost {
static readonly "DEFAULT_KEY": string


public "compare"(arg0: $TradeData$Type): $TradeComparisonResult
public "getRules"(): $List<($TradeRule)>
public "isValid"(): boolean
public "afterTrade"(arg0: $TradeEvent$PostTradeEvent$Type): void
public "tradeCost"(arg0: $TradeEvent$TradeCostEvent$Type): void
public "beforeTrade"(arg0: $TradeEvent$PreTradeEvent$Type): void
public "isTrader"(): boolean
public "isTrade"(): boolean
public "getAsNBT"(): $CompoundTag
public "OnOutputDisplayInteraction"(arg0: $BasicTradeEditTab$Type, arg1: $Consumer$Type<($LazyPacketData$Builder$Type)>, arg2: integer, arg3: integer, arg4: $ItemStack$Type): void
public "GetDifferenceWarnings"(arg0: $TradeComparisonResult$Type): $List<($Component)>
public "OnInputDisplayInteraction"(arg0: $BasicTradeEditTab$Type, arg1: $Consumer$Type<($LazyPacketData$Builder$Type)>, arg2: integer, arg3: integer, arg4: $ItemStack$Type): void
public "getRelevantInventorySlots"(arg0: $TradeContext$Type, arg1: $List$Type<($Slot$Type)>): $List<(integer)>
public "markTradeRulesDirty"(): void
public "setCost"(arg0: $MoneyValue$Type): void
public "getCost"(): $MoneyValue
public "getCost"(arg0: $TradeContext$Type): $MoneyValue
public "hasStock"(arg0: $TradeContext$Type): boolean
public "getCostWithTaxes"(arg0: $TradeContext$Type): $MoneyValue
public "getCostWithTaxes"(arg0: $TraderData$Type): $MoneyValue
public "validCost"(): boolean
public "getStock"(arg0: $TradeContext$Type): integer
public "outOfStock"(arg0: $TradeContext$Type): boolean
public "stockCountOfCost"(arg0: $TraderData$Type): integer
public "stockCountOfCost"(arg0: $TradeContext$Type): integer
public "getButtonRenderer"(): $TradeRenderManager<(any)>
public "setRules"(arg0: $List$Type<($TradeRule$Type)>): void
public "OnInteraction"(arg0: $BasicTradeEditTab$Type, arg1: $Consumer$Type<($LazyPacketData$Builder$Type)>, arg2: integer, arg3: integer, arg4: integer, arg5: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "onInteraction"(arg0: $BasicTradeEditTab$Type, arg1: $Consumer$Type<($CompoundTag$Type)>, arg2: integer, arg3: integer, arg4: integer, arg5: $ItemStack$Type): void
public "getTradeDirection"(): $TradeDirection
public "AcceptableDifferences"(arg0: $TradeComparisonResult$Type): boolean
public "isMoneyRelevant"(): boolean
public "canMoneyBeRelevant"(): boolean
public "getRuleOfType"(arg0: $ResourceLocation$Type): $TradeRule
public "allowTradeRule"(arg0: $TradeRule$Type): boolean
public "validateRuleStates"(): void
public "HandleRuleUpdate"(arg0: $ResourceLocation$Type, arg1: $LazyPacketData$Type): void
get "rules"(): $List<($TradeRule)>
get "valid"(): boolean
get "trader"(): boolean
get "trade"(): boolean
get "asNBT"(): $CompoundTag
set "cost"(value: $MoneyValue$Type)
get "cost"(): $MoneyValue
get "buttonRenderer"(): $TradeRenderManager<(any)>
set "rules"(value: $List$Type<($TradeRule$Type)>)
get "tradeDirection"(): $TradeDirection
get "moneyRelevant"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeData$Type = ($TradeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeData_ = $TradeData$Type;
}}
declare module "packages/io/github/mortuusars/exposure/recipe/$PhotographAgingRecipe" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AbstractNbtTransferringRecipe, $AbstractNbtTransferringRecipe$Type} from "packages/io/github/mortuusars/exposure/recipe/$AbstractNbtTransferringRecipe"

export class $PhotographAgingRecipe extends $AbstractNbtTransferringRecipe {

constructor(id: $ResourceLocation$Type, transferIngredient: $Ingredient$Type, ingredients: $NonNullList$Type<($Ingredient$Type)>, result: $ItemStack$Type)

public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhotographAgingRecipe$Type = ($PhotographAgingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhotographAgingRecipe_ = $PhotographAgingRecipe$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeResult" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $TradeResult extends $Enum<($TradeResult)> {
static readonly "SUCCESS": $TradeResult
static readonly "FAIL_OUT_OF_STOCK": $TradeResult
static readonly "FAIL_CANNOT_AFFORD": $TradeResult
static readonly "FAIL_NO_OUTPUT_SPACE": $TradeResult
static readonly "FAIL_NO_INPUT_SPACE": $TradeResult
static readonly "FAIL_TRADE_RULE_DENIAL": $TradeResult
static readonly "FAIL_TAX_EXCEEDED_LIMIT": $TradeResult
static readonly "FAIL_INVALID_TRADE": $TradeResult
static readonly "FAIL_NOT_SUPPORTED": $TradeResult
static readonly "FAIL_NULL": $TradeResult
static readonly "ALL_WITH_MESSAGES": ($TradeResult)[]


public static "values"(): ($TradeResult)[]
public static "valueOf"(arg0: string): $TradeResult
public "getMessage"(): $MutableComponent
public "hasMessage"(): boolean
public "isSuccess"(): boolean
get "message"(): $MutableComponent
get "success"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeResult$Type = (("fail_out_of_stock") | ("fail_invalid_trade") | ("success") | ("fail_no_input_space") | ("fail_not_supported") | ("fail_null") | ("fail_no_output_space") | ("fail_trade_rule_denial") | ("fail_tax_exceeded_limit") | ("fail_cannot_afford")) | ($TradeResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeResult_ = $TradeResult$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea" {
import {$ScreenPosition, $ScreenPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition"

export class $ScreenArea {
readonly "x": integer
readonly "y": integer
readonly "pos": $ScreenPosition
readonly "width": integer
readonly "height": integer


public static "of"(arg0: $ScreenPosition$Type, arg1: integer, arg2: integer): $ScreenArea
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $ScreenArea
public "isMouseInArea"(arg0: double, arg1: double): boolean
public "isMouseInArea"(arg0: integer, arg1: integer): boolean
public "isMouseInArea"(arg0: $ScreenPosition$Type): boolean
public "atPosition"(arg0: $ScreenPosition$Type): $ScreenArea
public "atPosition"(arg0: integer, arg1: integer): $ScreenArea
public "ofSize"(arg0: integer, arg1: integer): $ScreenArea
public "offsetPosition"(arg0: $ScreenPosition$Type): $ScreenArea
public "offsetPosition"(arg0: integer, arg1: integer): $ScreenArea
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenArea$Type = ($ScreenArea);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenArea_ = $ScreenArea$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/rules/$TradeRuleType" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$TradeRule, $TradeRule$Type} from "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$TradeRule"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/net/minecraftforge/common/util/$NonNullSupplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $TradeRuleType<T extends $TradeRule> {
readonly "type": $ResourceLocation

constructor(arg0: $ResourceLocation$Type, arg1: $NonNullSupplier$Type<(T)>)

public "toString"(): string
public "load"(arg0: $CompoundTag$Type): T
public "createNew"(): T
public "loadFromJson"(arg0: $JsonObject$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeRuleType$Type<T> = ($TradeRuleType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeRuleType_<T> = $TradeRuleType$Type<(T)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IRotatableBlock" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export interface $IRotatableBlock {

 "getFacing"(arg0: $BlockState$Type): $Direction
}

export namespace $IRotatableBlock {
const FACING: $DirectionProperty
function getRightPos(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
function getLeftVect(arg0: $Direction$Type): $Vector3f
function getBackwardVect(arg0: $Direction$Type): $Vector3f
function getOffsetVect(arg0: $Direction$Type): $Vector3f
function getActualSide(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
function getRelativeSide(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
function getBackwardPos(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
function getRightVect(arg0: $Direction$Type): $Vector3f
function getForwardPos(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
function getForwardVect(arg0: $Direction$Type): $Vector3f
function getLeftPos(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRotatableBlock$Type = ($IRotatableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRotatableBlock_ = $IRotatableBlock$Type;
}}
declare module "packages/io/github/mortuusars/sootychimneys/block/$ChimneyBlock$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ChimneyBlock$Type extends $Enum<($ChimneyBlock$Type)> {
static readonly "CLEAN": $ChimneyBlock$Type
static readonly "DIRTY": $ChimneyBlock$Type


public static "values"(): ($ChimneyBlock$Type)[]
public static "valueOf"(arg0: string): $ChimneyBlock$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChimneyBlock$Type$Type = (("dirty") | ("clean")) | ($ChimneyBlock$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChimneyBlock$Type_ = $ChimneyBlock$Type$Type;
}}
declare module "packages/io/github/mortuusars/chalk/utils/$MarkDrawingContext" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MarkSymbol, $MarkSymbol$Type} from "packages/io/github/mortuusars/chalk/core/$MarkSymbol"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$SymbolOrientation, $SymbolOrientation$Type} from "packages/io/github/mortuusars/chalk/core/$SymbolOrientation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Mark, $Mark$Type} from "packages/io/github/mortuusars/chalk/core/$Mark"

export class $MarkDrawingContext {

constructor(arg0: $Player$Type, arg1: $BlockHitResult$Type, arg2: $InteractionHand$Type)

public "draw"(arg0: $Mark$Type): boolean
public "getInitialOrientation"(): $SymbolOrientation
public "getPlayer"(): $Player
public "canDraw"(): boolean
public "createRegularMark"(arg0: integer, arg1: boolean): $Mark
public "hasExistingMark"(): boolean
public "createMark"(arg0: integer, arg1: $MarkSymbol$Type, arg2: boolean): $Mark
public "openSymbolSelectionScreen"(): void
public "shouldMarkReplaceAnother"(arg0: $Mark$Type): boolean
public "getMarkFacing"(): $Direction
public static "clearStoredContext"(): void
public static "storeContext"(arg0: $MarkDrawingContext$Type): void
public "getDrawingHand"(): $InteractionHand
public static "getStoredContext"(): $MarkDrawingContext
public "getMarkBlockPos"(): $BlockPos
get "initialOrientation"(): $SymbolOrientation
get "player"(): $Player
get "markFacing"(): $Direction
get "drawingHand"(): $InteractionHand
get "storedContext"(): $MarkDrawingContext
get "markBlockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MarkDrawingContext$Type = ($MarkDrawingContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MarkDrawingContext_ = $MarkDrawingContext$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/customer/$ITraderScreen" {
import {$ITraderMenu, $ITraderMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/customer/$ITraderMenu"
import {$ScreenPosition, $ScreenPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$IEasyScreen, $IEasyScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/interfaces/$IEasyScreen"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TraderClientTab, $TraderClientTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/trader/$TraderClientTab"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"

export interface $ITraderScreen extends $IEasyScreen {

 "closeTab"(): void
 "setTab"(arg0: $TraderClientTab$Type): void
 "getMenu"(): $ITraderMenu
 "removeChild"(arg0: any): void
 "getGuiLeft"(): integer
 "getGuiTop"(): integer
 "addChild"<W>(arg0: W): W
 "blockInventoryClosing"(): boolean
 "getCorner"(): $ScreenPosition
 "getArea"(): $ScreenArea
 "getYSize"(): integer
 "getXSize"(): integer
 "getFont"(): $Font
 "getPlayer"(): $Player
}

export namespace $ITraderScreen {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITraderScreen$Type = ($ITraderScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITraderScreen_ = $ITraderScreen$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$MoneyHolder$Slave" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IMoneyHolder, $IMoneyHolder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$IMoneyHolder"
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"
import {$MoneyViewer$Slave, $MoneyViewer$Slave$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$MoneyViewer$Slave"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"

export class $MoneyHolder$Slave extends $MoneyViewer$Slave implements $IMoneyHolder {

constructor()

public "isMoneyTypeValid"(arg0: $MoneyValue$Type): boolean
public "formatTooltip"(arg0: $List$Type<($Component$Type)>): void
public "insertMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
public "getTooltipTitle"(): $Component
public "extractMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
public "priority"(): integer
public static "sortPayFirst"(arg0: $List$Type<($IMoneyHolder$Type)>): void
public static "sortTakeFirst"(arg0: $List$Type<($IMoneyHolder$Type)>): void
public "inversePriority"(): integer
public static "defaultTooltipFormat"(arg0: $List$Type<($Component$Type)>, arg1: $Component$Type, arg2: $MoneyView$Type): void
get "tooltipTitle"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoneyHolder$Slave$Type = ($MoneyHolder$Slave);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoneyHolder$Slave_ = $MoneyHolder$Slave$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/crafting/$WalletUpgradeRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$WalletUpgradeRecipe, $WalletUpgradeRecipe$Type} from "packages/io/github/lightman314/lightmanscurrency/common/crafting/$WalletUpgradeRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $WalletUpgradeRecipe$Serializer implements $RecipeSerializer<($WalletUpgradeRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $WalletUpgradeRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $WalletUpgradeRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $WalletUpgradeRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $WalletUpgradeRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WalletUpgradeRecipe$Serializer$Type = ($WalletUpgradeRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WalletUpgradeRecipe$Serializer_ = $WalletUpgradeRecipe$Serializer$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/$FreezerBlock" {
import {$ItemPositionData, $ItemPositionData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/$ItemPositionData"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IItemTraderBlock, $IItemTraderBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/interfaces/$IItemTraderBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Color, $Color$Type} from "packages/io/github/lightman314/lightmanscurrency/common/core/variants/$Color"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$TraderBlockTallRotatable, $TraderBlockTallRotatable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockTallRotatable"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $FreezerBlock extends $TraderBlockTallRotatable implements $IItemTraderBlock {
static readonly "TRADECOUNT": integer
static readonly "SHAPE_SOUTH": $VoxelShape
static readonly "SHAPE_NORTH": $VoxelShape
static readonly "SHAPE_EAST": $VoxelShape
static readonly "SHAPE_WEST": $VoxelShape
static readonly "FACING": $DirectionProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $ResourceLocation$Type)

public static "GenerateDoorModel"(arg0: $Color$Type): $ResourceLocation
public static "GenerateDoorModel"(arg0: string, arg1: $Color$Type): $ResourceLocation
public "makeTrader"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "traderType"(): $BlockEntityType<(any)>
public "getDoorModel"(): $ResourceLocation
public "getItemPositionData"(): $ItemPositionData
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "doorModel"(): $ResourceLocation
get "itemPositionData"(): $ItemPositionData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FreezerBlock$Type = ($FreezerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FreezerBlock_ = $FreezerBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/capability/money/$MoneyHandler" {
import {$IMoneyHandler, $IMoneyHandler$Type} from "packages/io/github/lightman314/lightmanscurrency/api/capability/money/$IMoneyHandler"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$MoneyViewer, $MoneyViewer$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$MoneyViewer"

export class $MoneyHandler extends $MoneyViewer implements $IMoneyHandler {

constructor()

public static "combine"(arg0: $List$Type<($IMoneyHandler$Type)>): $IMoneyHandler
public "isMoneyTypeValid"(arg0: $MoneyValue$Type): boolean
public "insertMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
public "extractMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoneyHandler$Type = ($MoneyHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoneyHandler_ = $MoneyHandler$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageMenu" {
import {$TraderData, $TraderData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$TraderStorageTab, $TraderStorageTab$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$TraderStorageTab"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"

export interface $ITraderStorageMenu extends $IClientTracker {

 "SendMessage"(arg0: $LazyPacketData$Builder$Type): void
 "clearContainer"(arg0: $Container$Type): void
 "SetCoinSlotsActive"(arg0: boolean): void
 "getContext"(): $TradeContext
 "hasPermission"(arg0: string): boolean
 "createTabChangeMessage"(arg0: integer, arg1: $LazyPacketData$Builder$Type): $LazyPacketData$Builder
 "createTabChangeMessage"(arg0: integer): $LazyPacketData$Builder
 "getPermissionLevel"(arg0: string): integer
 "clearTab"(arg0: integer): void
 "setTab"(arg0: integer, arg1: $TraderStorageTab$Type): void
 "setHeldItem"(arg0: $ItemStack$Type): void
 "getHeldItem"(): $ItemStack
 "getTrader"(): $TraderData
 "changeTab"(arg0: integer, arg1: $LazyPacketData$Builder$Type): void
 "changeTab"(arg0: integer): void
 "getPlayer"(): $Player
 "isClient"(): boolean
 "isServer"(): boolean
}

export namespace $ITraderStorageMenu {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITraderStorageMenu$Type = ($ITraderStorageMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITraderStorageMenu_ = $ITraderStorageMenu$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/$TraderScreen" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$EasyMenuScreen, $EasyMenuScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$EasyMenuScreen"
import {$LazyWidgetPositioner, $LazyWidgetPositioner$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/util/$LazyWidgetPositioner"
import {$TraderMenu, $TraderMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/$TraderMenu"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ITraderScreen, $ITraderScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/customer/$ITraderScreen"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"
import {$AbstractContainerScreen, $AbstractContainerScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$TraderClientTab, $TraderClientTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/trader/$TraderClientTab"

export class $TraderScreen extends $EasyMenuScreen<($TraderMenu)> implements $ITraderScreen {
static readonly "GUI_TEXTURE": $ResourceLocation
static readonly "WIDTH": integer
static readonly "HEIGHT": integer
readonly "leftEdgePositioner": $LazyWidgetPositioner
static readonly "INVENTORY_LOCATION": $ResourceLocation
static readonly "SLOT_ITEM_BLIT_OFFSET": integer
 "imageWidth": integer
 "imageHeight": integer
 "hoveredSlot": $Slot
 "clickedSlot": $Slot
 "snapbackEnd": $Slot
 "leftPos": integer
 "topPos": integer
 "isSplittingStack": boolean
 "draggingItem": $ItemStack
 "snapbackStartX": integer
 "snapbackStartY": integer
 "snapbackTime": long
 "snapbackItem": $ItemStack
 "quickCraftingType": integer
 "quickCraftingRemainder": integer
static "BACKGROUND_LOCATION": $ResourceLocation
 "title": $Component
readonly "children": $List<($GuiEventListener)>
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font

constructor(arg0: $TraderMenu$Type, arg1: $Inventory$Type, arg2: $Component$Type)

public "closeTab"(): void
public "initialize"(arg0: $ScreenArea$Type): void
public "setTab"(arg0: $TraderClientTab$Type): void
public "blockInventoryClosing"(): boolean
public static "draw"(arg0: $AbstractContainerScreen$Type<(any)>, arg1: $GuiGraphics$Type, arg2: $List$Type<($Component$Type)>, arg3: integer): void
set "tab"(value: $TraderClientTab$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderScreen$Type = ($TraderScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderScreen_ = $TraderScreen$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/crafting/$TicketRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$TicketStationRecipe, $TicketStationRecipe$Type} from "packages/io/github/lightman314/lightmanscurrency/common/crafting/$TicketStationRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $TicketRecipe implements $TicketStationRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $Ingredient$Type, arg3: $Item$Type)

public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredient"(): $Ingredient
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "consumeModifier"(): boolean
public "peekAtResult"(arg0: $Container$Type): $ItemStack
public "jeiModifierList"(): $List<($ItemStack)>
public "validModifier"(arg0: $ItemStack$Type): boolean
public "validIngredient"(arg0: $ItemStack$Type): boolean
public "exampleResult"(): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public static "exampleTicketList"(arg0: $RegistryObject$Type<(any)>): $List<($ItemStack)>
public static "exampleTicketList"(arg0: $Item$Type): $List<($ItemStack)>
public static "exampleTicketList"(arg0: $Ingredient$Type): $List<($ItemStack)>
public static "exampleModifierList"(arg0: $TagKey$Type<($Item$Type)>, ...arg1: ($Item$Type)[]): $List<($ItemStack)>
public "getToastSymbol"(): $ItemStack
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "getType"(): $ResourceLocation
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "getOrCreateId"(): $ResourceLocation
public "getSchema"(): $RecipeSchema
public "setGroup"(group: string): void
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "getGroup"(): string
public "getMod"(): string
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "ingredient"(): $Ingredient
get "toastSymbol"(): $ItemStack
get "ingredients"(): $NonNullList<($Ingredient)>
get "incomplete"(): boolean
get "special"(): boolean
get "type"(): $ResourceLocation
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
set "group"(value: string)
get "group"(): string
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TicketRecipe$Type = ($TicketRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TicketRecipe_ = $TicketRecipe$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/ownership/$IOwnerData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IOwnerData {

}

export namespace $IOwnerData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOwnerData$Type = ($IOwnerData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOwnerData_ = $IOwnerData$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/interfaces/$IItemTraderBlock" {
import {$ItemPositionData, $ItemPositionData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/$ItemPositionData"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ITraderBlock, $ITraderBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$ITraderBlock"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IItemTraderBlock extends $ITraderBlock {

 "getItemPositionData"(): $ItemPositionData
 "canBreak"(arg0: $Player$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
 "getDropBlockItem"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
 "getBlockEntity"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type): $BlockEntity
 "getCapabilityBlockEntity"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $BlockEntity

(): $ItemPositionData
}

export namespace $IItemTraderBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemTraderBlock$Type = ($IItemTraderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemTraderBlock_ = $IItemTraderBlock$Type;
}}
declare module "packages/io/github/mortuusars/sootychimneys/block/$ChimneyBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$ChimneyBlock$Type, $ChimneyBlock$Type$Type} from "packages/io/github/mortuusars/sootychimneys/block/$ChimneyBlock$Type"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$SootyChimneys$Chimney, $SootyChimneys$Chimney$Type} from "packages/io/github/mortuusars/sootychimneys/$SootyChimneys$Chimney"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$Smoke, $Smoke$Type} from "packages/io/github/mortuusars/sootychimneys/core/$Smoke"

export class $ChimneyBlock extends $Block implements $EntityBlock {
static readonly "LIT": $BooleanProperty
static readonly "BLOCKED": $BooleanProperty
static readonly "STACKED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $SootyChimneys$Chimney$Type, arg2: $ChimneyBlock$Type$Type)

public "getType"(): $ChimneyBlock$Type
public "getVariant"(): $SootyChimneys$Chimney
public "isDirty"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "getToolModifiedState"(arg0: $BlockState$Type, arg1: $UseOnContext$Type, arg2: $ToolAction$Type, arg3: boolean): $BlockState
public "isRandomlyTicking"(arg0: $BlockState$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "spawnSootScrapingItems"(arg0: $Vector3f$Type, arg1: $ServerLevel$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "getParticle"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $ParticleOptions
public "emitParticle"(arg0: $Level$Type, arg1: double, arg2: double, arg3: double, arg4: $ParticleOptions$Type): void
public "spawnSootParticles"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: boolean): void
public "getSmokeProperties"(): $Smoke
public "shouldEmitSmoke"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
public "isClean"(): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "type"(): $ChimneyBlock$Type
get "variant"(): $SootyChimneys$Chimney
get "dirty"(): boolean
get "smokeProperties"(): $Smoke
get "clean"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChimneyBlock$Type = ($ChimneyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChimneyBlock_ = $ChimneyBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IOwnableBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IOwnableBlock {

 "canBreak"(arg0: $Player$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean

(arg0: $Player$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
}

export namespace $IOwnableBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOwnableBlock$Type = ($IOwnableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOwnableBlock_ = $IOwnableBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/ownership/$Owner" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$PlayerReference, $PlayerReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$PlayerReference"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/net/minecraftforge/common/util/$NonNullSupplier"
import {$StatKey, $StatKey$Type} from "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatKey"
import {$OwnerType, $OwnerType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/ownership/$OwnerType"
import {$BankReference, $BankReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/bank/reference/$BankReference"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $Owner implements $IClientTracker {
static readonly "NULL": $Owner
static readonly "NULL_TYPE": $OwnerType

constructor()

public "getName"(): $MutableComponent
public "equals"(arg0: any): boolean
public static "load"(arg0: $CompoundTag$Type): $Owner
public "matches"(arg0: $Owner$Type): boolean
public "save"(): $CompoundTag
public "getType"(): $OwnerType
public "isNull"(): boolean
public "isClient"(): boolean
public "flagAsClient"(arg0: boolean): void
public "flagAsClient"(): $Owner
public "asBankReference"(): $BankReference
public "incrementStat"<T>(arg0: $StatKey$Type<(any), (T)>, arg1: T): void
public "pushNotification"(arg0: $NonNullSupplier$Type<(any)>, arg1: integer, arg2: boolean): void
public static "getOwnerLevelBlurb"(arg0: integer): $MutableComponent
public "alwaysValid"(): boolean
public "asPlayerReference"(): $PlayerReference
public "getCommandLabel"(): $MutableComponent
public "stillValid"(): boolean
public "isMember"(arg0: $PlayerReference$Type): boolean
public "isAdmin"(arg0: $PlayerReference$Type): boolean
public "isOnline"(): boolean
public "hasNotificationLevels"(): boolean
public "isServer"(): boolean
get "name"(): $MutableComponent
get "type"(): $OwnerType
get "null"(): boolean
get "client"(): boolean
get "commandLabel"(): $MutableComponent
get "online"(): boolean
get "server"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Owner$Type = ($Owner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Owner_ = $Owner$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$AlbumItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IForgeItem, $IForgeItem$Type} from "packages/net/minecraftforge/common/extensions/$IForgeItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AlbumPage, $AlbumPage$Type} from "packages/io/github/mortuusars/exposure/item/$AlbumPage"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AlbumItem extends $Item implements $IForgeItem {
static readonly "TAG_PAGES": string
static readonly "TAG_TITLE": string
static readonly "TAG_AUTHOR": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "sign"(album: $ItemStack$Type, title: string, author: string): $ItemStack
public "open"(player: $ServerPlayer$Type, albumStack: $ItemStack$Type, editable: boolean): void
public "isEditable"(): boolean
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "use"(level: $Level$Type, player: $Player$Type, usedHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "getPages"(albumStack: $ItemStack$Type): $List<($AlbumPage)>
public "addPage"(albumStack: $ItemStack$Type, page: $AlbumPage$Type, index: integer): void
public "addPage"(albumStack: $ItemStack$Type, page: $AlbumPage$Type): void
public "getPhotographsCount"(albumStack: $ItemStack$Type): integer
public "shouldPlayEquipAnimation"(oldStack: $ItemStack$Type, newStack: $ItemStack$Type): boolean
public "shouldCauseReequipAnimation"(oldStack: $ItemStack$Type, newStack: $ItemStack$Type, slotChanged: boolean): boolean
public "getPage"(albumStack: $ItemStack$Type, index: integer): $Optional<($AlbumPage)>
public "setPage"(albumStack: $ItemStack$Type, page: $AlbumPage$Type, index: integer): void
public "getMaxPages"(): integer
public "createEmptyPage"(): $AlbumPage
public "isRepairable"(arg0: $ItemStack$Type): boolean
get "editable"(): boolean
get "maxPages"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlbumItem$Type = ($AlbumItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlbumItem_ = $AlbumItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatType$Instance" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$StatTracker, $StatTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatTracker"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $StatType$Instance<A, B> implements $IClientTracker {


public "getInfoText"(arg0: string): $MutableComponent
public "add"(arg0: B): void
public "get"(): A
public "load"(arg0: $CompoundTag$Type): void
public "clear"(): void
public "save"(): $CompoundTag
public "setParent"(arg0: $StatTracker$Type): void
public "isClient"(): boolean
public "getDisplay"(): any
public "isServer"(): boolean
set "parent"(value: $StatTracker$Type)
get "client"(): boolean
get "display"(): any
get "server"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatType$Instance$Type<A, B> = ($StatType$Instance<(A), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatType$Instance_<A, B> = $StatType$Instance$Type<(A), (B)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/$IMoneyCollectionMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMoneyCollectionMenu {

 "CollectStoredMoney"(): void

(): void
}

export namespace $IMoneyCollectionMenu {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMoneyCollectionMenu$Type = ($IMoneyCollectionMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMoneyCollectionMenu_ = $IMoneyCollectionMenu$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$CustomBlockModelItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CustomBlockModelItem extends $BlockItem {
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomBlockModelItem$Type = ($CustomBlockModelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomBlockModelItem_ = $CustomBlockModelItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/traderstorage/trades_basic/$BasicTradeEditTab" {
import {$TraderStorageMenu, $TraderStorageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/$TraderStorageMenu"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ITraderStorageMenu, $ITraderStorageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageMenu"
import {$TraderStorageTab, $TraderStorageTab$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$TraderStorageTab"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"

export class $BasicTradeEditTab extends $TraderStorageTab {
static readonly "INTERACTION_INPUT": integer
static readonly "INTERACTION_OUTPUT": integer
static readonly "INTERACTION_OTHER": integer
static readonly "TAB_TRADE_BASIC": integer
static readonly "TAB_TRADE_STORAGE": integer
static readonly "TAB_TRADE_ADVANCED": integer
static readonly "TAB_TRADE_MISC": integer
static readonly "TAB_TRADER_LOGS": integer
static readonly "TAB_TRADER_SETTINGS": integer
static readonly "TAB_TRADER_STATS": integer
static readonly "TAB_TAX_INFO": integer
static readonly "TAB_RULES_TRADER": integer
static readonly "TAB_RULES_TRADE": integer
readonly "menu": $ITraderStorageMenu

constructor(arg0: $TraderStorageMenu$Type)

public "addStorageMenuSlots"(arg0: $Function$Type<($Slot$Type), ($Slot$Type)>): void
public "canOpen"(arg0: $Player$Type): boolean
public "removeTrade"(): void
public "sendInputInteractionMessage"(arg0: integer, arg1: integer, arg2: integer, arg3: $ItemStack$Type): void
public "sendOutputInteractionMessage"(arg0: integer, arg1: integer, arg2: integer, arg3: $ItemStack$Type): void
public "setClient"(arg0: $Consumer$Type<($LazyPacketData$Builder$Type)>): void
public "onTabClose"(): void
public "onTabOpen"(): void
public "createClientTab"(arg0: any): any
public "sendOpenTabMessage"(arg0: integer, arg1: $LazyPacketData$Builder$Type): void
public "addTrade"(): void
public "receiveMessage"(arg0: $LazyPacketData$Type): void
public "sendOtherInteractionMessage"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $ItemStack$Type): void
set "client"(value: $Consumer$Type<($LazyPacketData$Builder$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicTradeEditTab$Type = ($BasicTradeEditTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicTradeEditTab_ = $BasicTradeEditTab$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext" {
import {$TraderData, $TraderData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$TradeContext$Builder, $TradeContext$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext$Builder"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/io/github/lightman314/lightmanscurrency/util/$ItemRequirement"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$PlayerReference, $PlayerReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$PlayerReference"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"

export class $TradeContext {
readonly "id": long
readonly "isStorageMode": boolean


public "collectTicket"(arg0: long): boolean
public "canFitItem"(arg0: $ItemStack$Type): boolean
public "hasPass"(arg0: long): boolean
public "getAvailableFundsDescription"(): $List<($Component)>
public static "create"(arg0: $TraderData$Type, arg1: $PlayerReference$Type): $TradeContext$Builder
public static "create"(arg0: $TraderData$Type, arg1: $Player$Type): $TradeContext$Builder
public "clearCache"(): void
public "getCollectableItems"(...arg0: ($ItemRequirement$Type)[]): $List<($ItemStack)>
public "hasItem"(arg0: $ItemStack$Type): boolean
public "putItem"(arg0: $ItemStack$Type): boolean
public "hasFluid"(arg0: $FluidStack$Type): boolean
public static "createStorageMode"(arg0: $TraderData$Type): $TradeContext
public "getAvailableFunds"(): $MoneyView
public "hasPlayer"(): boolean
public "getPayment"(arg0: $MoneyValue$Type): boolean
public "givePayment"(arg0: $MoneyValue$Type): boolean
public "hasTicket"(arg0: long): boolean
public "getTrader"(): $TraderData
public "hasPlayerReference"(): boolean
public "canFitItems"(arg0: $List$Type<($ItemStack$Type)>): boolean
public "canFitItems"(...arg0: ($ItemStack$Type)[]): boolean
public "hasFunds"(arg0: $MoneyValue$Type): boolean
public "hasItems"(...arg0: ($ItemStack$Type)[]): boolean
public "hasItems"(...arg0: ($ItemRequirement$Type)[]): boolean
public "hasItems"(arg0: $List$Type<($ItemStack$Type)>): boolean
public "hightlightItems"(arg0: $List$Type<($ItemRequirement$Type)>, arg1: $List$Type<($Slot$Type)>, arg2: $List$Type<(integer)>): void
public "drainEnergy"(arg0: integer): boolean
public "hasTrader"(): boolean
public "getPlayerReference"(): $PlayerReference
public "getPlayer"(): $Player
public "hasEnergy"(arg0: integer): boolean
public "canFitFluid"(arg0: $FluidStack$Type): boolean
public "collectItems"(arg0: $List$Type<($ItemStack$Type)>): boolean
public "collectItem"(arg0: $ItemStack$Type): boolean
public "hasPaymentMethod"(): boolean
public "drainFluid"(arg0: $FluidStack$Type): boolean
public "fillFluid"(arg0: $FluidStack$Type): boolean
public "fillEnergy"(arg0: integer): boolean
public "canFitEnergy"(arg0: integer): boolean
get "availableFundsDescription"(): $List<($Component)>
get "availableFunds"(): $MoneyView
get "trader"(): $TraderData
get "playerReference"(): $PlayerReference
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeContext$Type = ($TradeContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeContext_ = $TradeContext$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/util/$LazyWidgetPositioner" {
import {$ScreenPosition, $ScreenPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$IEasyScreen, $IEasyScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/interfaces/$IEasyScreen"
import {$IPreRender, $IPreRender$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/interfaces/$IPreRender"
import {$EasyWidget, $EasyWidget$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/easy/$EasyWidget"
import {$EasyGuiGraphics, $EasyGuiGraphics$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/client/rendering/$EasyGuiGraphics"

export class $LazyWidgetPositioner implements $IPreRender {
static readonly "MODE_TOPDOWN": $Function<($LazyWidgetPositioner), ($ScreenPosition)>
static readonly "MODE_BOTTOMUP": $Function<($LazyWidgetPositioner), ($ScreenPosition)>
readonly "widgetSize": integer


public "clear"(): void
public static "create"(arg0: $IEasyScreen$Type, arg1: $Function$Type<($LazyWidgetPositioner$Type), ($ScreenPosition$Type)>, arg2: integer, arg3: integer, arg4: integer): $LazyWidgetPositioner
public static "create"(arg0: $IEasyScreen$Type, arg1: $Function$Type<($LazyWidgetPositioner$Type), ($ScreenPosition$Type)>, arg2: $ScreenPosition$Type, arg3: integer): $LazyWidgetPositioner
public "startPos"(): $ScreenPosition
public "addWidgets"(...arg0: ($EasyWidget$Type)[]): void
public "addWidget"(arg0: $EasyWidget$Type): void
public "preRender"(arg0: $EasyGuiGraphics$Type): void
public "getPositionIndex"(): integer
get "positionIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LazyWidgetPositioner$Type = ($LazyWidgetPositioner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LazyWidgetPositioner_ = $LazyWidgetPositioner$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/traderstorage/trade_rules/$TradeRulesTab" {
import {$TradeRuleType, $TradeRuleType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/rules/$TradeRuleType"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ITraderStorageMenu, $ITraderStorageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageMenu"
import {$ITradeRuleHost, $ITradeRuleHost$Type} from "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$ITradeRuleHost"
import {$TraderStorageTab, $TraderStorageTab$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$TraderStorageTab"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"

export class $TradeRulesTab extends $TraderStorageTab {
static readonly "TAB_TRADE_BASIC": integer
static readonly "TAB_TRADE_STORAGE": integer
static readonly "TAB_TRADE_ADVANCED": integer
static readonly "TAB_TRADE_MISC": integer
static readonly "TAB_TRADER_LOGS": integer
static readonly "TAB_TRADER_SETTINGS": integer
static readonly "TAB_TRADER_STATS": integer
static readonly "TAB_TAX_INFO": integer
static readonly "TAB_RULES_TRADER": integer
static readonly "TAB_RULES_TRADE": integer
readonly "menu": $ITraderStorageMenu


public "getHost"(): $ITradeRuleHost
public "addStorageMenuSlots"(arg0: $Function$Type<($Slot$Type), ($Slot$Type)>): void
public "goBack"(): void
public "canOpen"(arg0: $Player$Type): boolean
public "onTabClose"(): void
public "onTabOpen"(): void
public "receiveMessage"(arg0: $LazyPacketData$Type): void
public "EditTradeRule"(arg0: $ResourceLocation$Type, arg1: $LazyPacketData$Builder$Type): void
public "EditTradeRule"(arg0: $TradeRuleType$Type<(any)>, arg1: $LazyPacketData$Builder$Type): void
get "host"(): $ITradeRuleHost
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeRulesTab$Type = ($TradeRulesTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeRulesTab_ = $TradeRulesTab$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/enchantments/$CoinMagnetEnchantment" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$WalletEnchantment, $WalletEnchantment$Type} from "packages/io/github/lightman314/lightmanscurrency/common/enchantments/$WalletEnchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$IWalletHandler, $IWalletHandler$Type} from "packages/io/github/lightman314/lightmanscurrency/common/capability/wallet/$IWalletHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $CoinMagnetEnchantment extends $WalletEnchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor(arg0: $Enchantment$Rarity$Type, ...arg1: ($EquipmentSlot$Type)[])

public static "runEntityTick"(arg0: $IWalletHandler$Type, arg1: $LivingEntity$Type): void
public "addWalletTooltips"(arg0: $List$Type<($Component$Type)>, arg1: integer, arg2: $ItemStack$Type): void
public static "getCollectionRange"(arg0: integer): float
public "getMaxLevel"(): integer
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
public static "coinMagnetEntityFilter"(arg0: $Entity$Type): boolean
public static "getCollectionRangeDisplay"(arg0: integer): $Component
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoinMagnetEnchantment$Type = ($CoinMagnetEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoinMagnetEnchantment_ = $CoinMagnetEnchantment$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/crafting/$WalletUpgradeRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$CraftingRecipe, $CraftingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CraftingRecipe"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $WalletUpgradeRecipe implements $CraftingRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $ItemStack$Type, arg3: $NonNullList$Type<($Ingredient$Type)>)

public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "category"(): $CraftingBookCategory
public "getSerializer"(): $RecipeSerializer<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getToastSymbol"(): $ItemStack
public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "getType"(): $ResourceLocation
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "getOrCreateId"(): $ResourceLocation
public "getSchema"(): $RecipeSchema
public "setGroup"(group: string): void
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "getGroup"(): string
public "getMod"(): string
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "special"(): boolean
get "type"(): $ResourceLocation
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
set "group"(value: string)
get "group"(): string
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WalletUpgradeRecipe$Type = ($WalletUpgradeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WalletUpgradeRecipe_ = $WalletUpgradeRecipe$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/trade/$DisplayData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"

export class $DisplayData extends $Record {

constructor(xOffset: integer, yOffset: integer, width: integer, height: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "divide"(arg0: integer): $List<($DisplayData)>
public "width"(): integer
public "height"(): integer
public "xOffset"(): integer
public "yOffset"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayData$Type = ($DisplayData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayData_ = $DisplayData$Type;
}}
declare module "packages/io/github/mortuusars/monobank/content/monobank/$MonobankBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $MonobankBlock extends $Block implements $EntityBlock {
static readonly "FACING": $DirectionProperty
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

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "triggerEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MonobankBlock$Type = ($MonobankBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MonobankBlock_ = $MonobankBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/permissions/$PermissionOption" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$EasyGuiGraphics, $EasyGuiGraphics$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/client/rendering/$EasyGuiGraphics"
import {$SettingsSubTab, $SettingsSubTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/settings/$SettingsSubTab"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $PermissionOption {
readonly "permission": string


public "widgetWidth"(): integer
public "setValue"(arg0: boolean): void
public "setValue"(arg0: integer): void
public "render"(arg0: $EasyGuiGraphics$Type): void
public "tick"(): void
public "initWidgets"(arg0: $SettingsSubTab$Type, arg1: integer, arg2: integer, arg3: $Consumer$Type<(any)>): void
public "widgetName"(): $MutableComponent
set "value"(value: boolean)
set "value"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PermissionOption$Type = ($PermissionOption);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PermissionOption_ = $PermissionOption$Type;
}}
declare module "packages/io/github/mortuusars/exposure/camera/$AttachmentType" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AttachmentSound, $AttachmentSound$Type} from "packages/io/github/mortuusars/exposure/camera/$AttachmentSound"

export class $AttachmentType extends $Record {

constructor(id: string, slot: integer, itemPredicate: $Predicate$Type<($ItemStack$Type)>, sound: $AttachmentSound$Type)

public "slot"(): integer
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(stack: $ItemStack$Type): boolean
public "id"(): string
public "sound"(): $AttachmentSound
public "itemPredicate"(): $Predicate<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentType$Type = ($AttachmentType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentType_ = $AttachmentType$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$UpgradeItem$Simple" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$UpgradeType, $UpgradeType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeType"
import {$UpgradeItem, $UpgradeItem$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/$UpgradeItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UpgradeItem$Simple extends $UpgradeItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $UpgradeType$Type, arg1: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeItem$Simple$Type = ($UpgradeItem$Simple);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeItem$Simple_ = $UpgradeItem$Simple$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$EasyMenu" {
import {$NonNullFunction, $NonNullFunction$Type} from "packages/net/minecraftforge/common/util/$NonNullFunction"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MenuValidator, $MenuValidator$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$MenuValidator"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/net/minecraftforge/common/util/$NonNullSupplier"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EasyMenu extends $AbstractContainerMenu implements $IClientTracker {
readonly "player": $Player
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_HEADER_END": integer
static readonly "CARRIED_SLOT_SIZE": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "slots": $NonNullList<($Slot)>
 "remoteSlots": $NonNullList<($ItemStack)>
 "containerId": integer


public "addValidator"(arg0: $NonNullSupplier$Type<(boolean)>): void
public "addValidator"(arg0: $NonNullFunction$Type<($Player$Type), (boolean)>): void
public "addValidator"(arg0: $MenuValidator$Type): void
public "removeValidator"(arg0: $MenuValidator$Type): void
public static "encoder"(arg0: $MenuValidator$Type): $Consumer<($FriendlyByteBuf)>
public static "encoder"(arg0: $Consumer$Type<($FriendlyByteBuf$Type)>, arg1: $MenuValidator$Type): $Consumer<($FriendlyByteBuf)>
public static "encoder"(arg0: $BlockPos$Type, arg1: $MenuValidator$Type): $Consumer<($FriendlyByteBuf)>
public "isClient"(): boolean
public "stillValid"(arg0: $Player$Type): boolean
public static "nullEncoder"(): $Consumer<($FriendlyByteBuf)>
public "isServer"(): boolean
get "client"(): boolean
get "server"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasyMenu$Type = ($EasyMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasyMenu_ = $EasyMenu$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/slots/$CoinSlot$ICoinSlotListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CoinSlot$ICoinSlotListener {

 "onCoinSlotChanged"(): void

(): void
}

export namespace $CoinSlot$ICoinSlotListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoinSlot$ICoinSlotListener$Type = ($CoinSlot$ICoinSlotListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoinSlot$ICoinSlotListener_ = $CoinSlot$ICoinSlotListener$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatTracker" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$StatType, $StatType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatType"
import {$StatType$Instance, $StatType$Instance$Type} from "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatType$Instance"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StatKey, $StatKey$Type} from "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatKey"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $StatTracker implements $IClientTracker {

constructor(arg0: $Runnable$Type, arg1: $IClientTracker$Type)

public "getStat"(arg0: string): $StatType$Instance<(any), (any)>
public "getStat"<T>(arg0: $StatKey$Type<(T), (any)>, arg1: T): T
public "load"(arg0: $CompoundTag$Type): void
public "clear"(): void
public "save"(): $CompoundTag
public "isClient"(): boolean
public "incrementStat"<T>(arg0: $StatKey$Type<(any), (T)>, arg1: T): void
public "addStat"<A, B>(arg0: $StatKey$Type<(A), (B)>): $StatType$Instance<(A), (B)>
public "addStat"<A, B>(arg0: string, arg1: $StatType$Type<(A), (B)>): $StatType$Instance<(A), (B)>
public "addStat"<A, B>(arg0: string, arg1: $StatType$Instance$Type<(A), (B)>): $StatType$Instance<(A), (B)>
public "setChanged"(): void
public "getDisplayLines"(): $List<($MutableComponent)>
public "isServer"(): boolean
get "client"(): boolean
get "displayLines"(): $List<($MutableComponent)>
get "server"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatTracker$Type = ($StatTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatTracker_ = $StatTracker$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/slots/$SimpleSlot" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $SimpleSlot extends $Slot {
 "active": boolean
 "locked": boolean
 "container": $Container
 "index": integer
 "x": integer
 "y": integer

constructor(arg0: $Container$Type, arg1: integer, arg2: integer, arg3: integer)

public "setListener"(arg0: $Runnable$Type): void
public static "SetInactive"(arg0: $AbstractContainerMenu$Type, arg1: $Function$Type<($SimpleSlot$Type), (boolean)>): void
public static "SetInactive"(arg0: $AbstractContainerMenu$Type): void
public static "SetInactive"(arg0: $List$Type<(any)>): void
public static "Unlock"(arg0: $AbstractContainerMenu$Type): void
public static "Unlock"(arg0: $AbstractContainerMenu$Type, arg1: $Function$Type<($SimpleSlot$Type), (boolean)>): void
public static "SetLocked"(arg0: $AbstractContainerMenu$Type, arg1: boolean): void
public static "SetLocked"(arg0: $AbstractContainerMenu$Type, arg1: boolean, arg2: $Function$Type<($SimpleSlot$Type), (boolean)>): void
public static "Lock"(arg0: $AbstractContainerMenu$Type, arg1: $Function$Type<($SimpleSlot$Type), (boolean)>): void
public static "Lock"(arg0: $AbstractContainerMenu$Type): void
public "remove"(arg0: integer): $ItemStack
public "setChanged"(): void
public static "SetActive"(arg0: $List$Type<(any)>, arg1: boolean): void
public static "SetActive"(arg0: $List$Type<(any)>): void
public static "SetActive"(arg0: $AbstractContainerMenu$Type, arg1: $Function$Type<($SimpleSlot$Type), (boolean)>): void
public static "SetActive"(arg0: $AbstractContainerMenu$Type): void
public "isActive"(): boolean
public "mayPlace"(arg0: $ItemStack$Type): boolean
public "mayPickup"(arg0: $Player$Type): boolean
set "listener"(value: $Runnable$Type)
get "active"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleSlot$Type = ($SimpleSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleSlot_ = $SimpleSlot$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$MenuValidatorType" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MenuValidator, $MenuValidator$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$MenuValidator"

export class $MenuValidatorType {
readonly "type": $ResourceLocation


public "load"(arg0: $CompoundTag$Type): $MenuValidator
public "decode"(arg0: $FriendlyByteBuf$Type): $MenuValidator
public static "register"(arg0: $MenuValidatorType$Type): void
public static "getType"(arg0: $ResourceLocation$Type): $MenuValidatorType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuValidatorType$Type = ($MenuValidatorType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuValidatorType_ = $MenuValidatorType$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$EasyTab" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IEasyTickable, $IEasyTickable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/$IEasyTickable"
import {$ITab, $ITab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/tab/$ITab"
import {$EasyGuiGraphics, $EasyGuiGraphics$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/client/rendering/$EasyGuiGraphics"
import {$IconData, $IconData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/icon/$IconData"

export class $EasyTab implements $ITab, $IEasyTickable {


public "onClose"(): void
public "removeChild"(arg0: any): void
public "tick"(): void
public "addChild"<T>(arg0: T): T
public "blockInventoryClosing"(): boolean
public "renderBG"(arg0: $EasyGuiGraphics$Type): void
public "renderAfterWidgets"(arg0: $EasyGuiGraphics$Type): void
public "onOpen"(): void
public "getFont"(): $Font
public "getColor"(): integer
public "getTooltip"(): $Component
public "getIcon"(): $IconData
get "font"(): $Font
get "color"(): integer
get "tooltip"(): $Component
get "icon"(): $IconData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasyTab$Type = ($EasyTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasyTab_ = $EasyTab$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$ITraderBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IOwnableBlock, $IOwnableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IOwnableBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ICapabilityBlock, $ICapabilityBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$ICapabilityBlock"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ITraderBlock extends $IOwnableBlock, $ICapabilityBlock {

 "canBreak"(arg0: $Player$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
 "getDropBlockItem"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
 "getBlockEntity"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type): $BlockEntity
 "getCapabilityBlockEntity"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $BlockEntity

(arg0: $Player$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
}

export namespace $ITraderBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITraderBlock$Type = ($ITraderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITraderBlock_ = $ITraderBlock$Type;
}}
declare module "packages/io/github/mortuusars/exposure/recipe/$PhotographAgingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$PhotographAgingRecipe, $PhotographAgingRecipe$Type} from "packages/io/github/mortuusars/exposure/recipe/$PhotographAgingRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $PhotographAgingRecipe$Serializer implements $RecipeSerializer<($PhotographAgingRecipe)> {

constructor()

public "fromJson"(recipeId: $ResourceLocation$Type, serializedRecipe: $JsonObject$Type): $PhotographAgingRecipe
public "fromNetwork"(recipeId: $ResourceLocation$Type, buffer: $FriendlyByteBuf$Type): $PhotographAgingRecipe
public "toNetwork"(buffer: $FriendlyByteBuf$Type, recipe: $PhotographAgingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $PhotographAgingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhotographAgingRecipe$Serializer$Type = ($PhotographAgingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhotographAgingRecipe$Serializer_ = $PhotographAgingRecipe$Serializer$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/crafting/$TicketRecipe$Serializer" {
import {$TicketRecipe, $TicketRecipe$Type} from "packages/io/github/lightman314/lightmanscurrency/common/crafting/$TicketRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $TicketRecipe$Serializer implements $RecipeSerializer<($TicketRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $TicketRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $TicketRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $TicketRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $TicketRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TicketRecipe$Serializer$Type = ($TicketRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TicketRecipe$Serializer_ = $TicketRecipe$Serializer$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$MoneyView$Builder, $MoneyView$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView$Builder"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $MoneyView {


public "valueOf"(arg0: string): $MoneyValue
public "isEmpty"(): boolean
public static "builder"(): $MoneyView$Builder
public static "empty"(): $MoneyView
public "containsValue"(arg0: $MoneyValue$Type): boolean
public "getString"(): string
public "allValues"(): $List<($MoneyValue)>
public "capValue"(arg0: $MoneyValue$Type): $MoneyValue
public "getRandomValueText"(): $MutableComponent
public "getRandomValueText"(arg0: $MutableComponent$Type): $MutableComponent
public "getRandomValueText"(arg0: string): $MutableComponent
public "getRandomValue"(): $MoneyValue
get "string"(): string
get "randomValueText"(): $MutableComponent
get "randomValue"(): $MoneyValue
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoneyView$Type = ($MoneyView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoneyView_ = $MoneyView$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/$CoinChestBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IOwnableBlock, $IOwnableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IOwnableBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$IEasyEntityBlock, $IEasyEntityBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IEasyEntityBlock"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$RotatableBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $CoinChestBlock extends $RotatableBlock implements $IEasyEntityBlock, $IOwnableBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getAllowedTypes"(): $Collection<($BlockEntityType<(any)>)>
public "canBreak"(arg0: $Player$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "triggerEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "allowedTypes"(): $Collection<($BlockEntityType<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoinChestBlock$Type = ($CoinChestBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoinChestBlock_ = $CoinChestBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/types/$IPlayerMoneyHandler" {
import {$IMoneyHandler, $IMoneyHandler$Type} from "packages/io/github/lightman314/lightmanscurrency/api/capability/money/$IMoneyHandler"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"

export interface $IPlayerMoneyHandler extends $IMoneyHandler {

 "updatePlayer"(arg0: $Player$Type): void
 "isMoneyTypeValid"(arg0: $MoneyValue$Type): boolean
 "insertMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
 "extractMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
 "flagAsKnown"(arg0: any): void
 "forgetContext"(arg0: any): void
 "hasStoredMoneyChanged"(arg0: any): boolean
 "getStoredMoney"(): $MoneyView
}

export namespace $IPlayerMoneyHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerMoneyHandler$Type = ($IPlayerMoneyHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerMoneyHandler_ = $IPlayerMoneyHandler$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/bank/$IBankAccount" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Notification, $Notification$Type} from "packages/io/github/lightman314/lightmanscurrency/api/notifications/$Notification"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IMoneyHolder, $IMoneyHolder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$IMoneyHolder"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/net/minecraftforge/common/util/$NonNullSupplier"
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$MoneyStorage, $MoneyStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyStorage"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IBankAccount extends $IMoneyHolder, $IClientTracker {

 "getName"(): $MutableComponent
 "getNotifications"(): $List<($Notification)>
 "getMoneyStorage"(): $MoneyStorage
 "depositMoney"(arg0: $MoneyValue$Type): void
 "withdrawMoney"(arg0: $MoneyValue$Type): $MoneyValue
 "pushNotification"(arg0: $NonNullSupplier$Type<($Notification$Type)>, arg1: boolean): void
 "pushNotification"(arg0: $NonNullSupplier$Type<($Notification$Type)>): void
 "pushLocalNotification"(arg0: $Notification$Type): void
 "getBalanceText"(): $Component
 "applyInterest"(arg0: double, arg1: $List$Type<($MoneyValue$Type)>, arg2: boolean, arg3: boolean): void
 "getNotificationLevels"(): $Map<(string), ($MoneyValue)>
 "getNotificationLevelFor"(arg0: string): $MoneyValue
 "setNotificationLevel"(arg0: string, arg1: $MoneyValue$Type): void
 "priority"(): integer
 "formatTooltip"(arg0: $List$Type<($Component$Type)>): void
 "inversePriority"(): integer
 "getTooltipTitle"(): $Component
 "isClient"(): boolean
 "isServer"(): boolean
 "isMoneyTypeValid"(arg0: $MoneyValue$Type): boolean
 "insertMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
 "extractMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
 "flagAsKnown"(arg0: any): void
 "forgetContext"(arg0: any): void
 "hasStoredMoneyChanged"(arg0: any): boolean
 "getStoredMoney"(): $MoneyView
}

export namespace $IBankAccount {
function sortPayFirst(arg0: $List$Type<($IMoneyHolder$Type)>): void
function sortTakeFirst(arg0: $List$Type<($IMoneyHolder$Type)>): void
function defaultTooltipFormat(arg0: $List$Type<($Component$Type)>, arg1: $Component$Type, arg2: $MoneyView$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBankAccount$Type = ($IBankAccount);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBankAccount_ = $IBankAccount$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/slots/$InteractionSlot" {
import {$InteractionSlotData, $InteractionSlotData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$InteractionSlotData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EasyMultiBGSlot, $EasyMultiBGSlot$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/slots/easy/$EasyMultiBGSlot"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $InteractionSlot extends $EasyMultiBGSlot {
readonly "slotData": $List<($InteractionSlotData)>
static readonly "EMPTY_SLOT_BG": $ResourceLocation
static readonly "BACKGROUND": $Pair<($ResourceLocation), ($ResourceLocation)>
 "active": boolean
 "locked": boolean
 "container": $Container
 "index": integer
 "x": integer
 "y": integer

constructor(arg0: $List$Type<($InteractionSlotData$Type)>, arg1: integer, arg2: integer)

public "isType"(arg0: string): boolean
public "isActive"(): boolean
public "mayPlace"(arg0: $ItemStack$Type): boolean
public "getMaxStackSize"(): integer
get "active"(): boolean
get "maxStackSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InteractionSlot$Type = ($InteractionSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InteractionSlot_ = $InteractionSlot$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/types/$CurrencyType" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$IPlayerMoneyHandler, $IPlayerMoneyHandler$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/types/$IPlayerMoneyHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$MoneyValueParser, $MoneyValueParser$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValueParser"
import {$IMoneyHandler, $IMoneyHandler$Type} from "packages/io/github/lightman314/lightmanscurrency/api/capability/money/$IMoneyHandler"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export class $CurrencyType {


public "getType"(): $ResourceLocation
public "sumValues"(arg0: $List$Type<($MoneyValue$Type)>): $MoneyValue
public "getInputHandlers"(arg0: $Player$Type): $List<(any)>
public "loadMoneyValue"(arg0: $CompoundTag$Type): $MoneyValue
public "loadMoneyValueJson"(arg0: $JsonObject$Type): $MoneyValue
public "getValueParser"(): $MoneyValueParser
public "createMoneyHandlerForATM"(arg0: $Player$Type, arg1: $Container$Type): $IMoneyHandler
public "createMoneyHandlerForContainer"(arg0: $Container$Type, arg1: $Consumer$Type<($ItemStack$Type)>): $IMoneyHandler
public "createMoneyHandlerForPlayer"(arg0: $Player$Type): $IPlayerMoneyHandler
get "type"(): $ResourceLocation
get "valueParser"(): $MoneyValueParser
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurrencyType$Type = ($CurrencyType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurrencyType_ = $CurrencyType$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/crafting/$MasterTicketRecipe$Serializer" {
import {$MasterTicketRecipe, $MasterTicketRecipe$Type} from "packages/io/github/lightman314/lightmanscurrency/common/crafting/$MasterTicketRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $MasterTicketRecipe$Serializer implements $RecipeSerializer<($MasterTicketRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $MasterTicketRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $MasterTicketRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $MasterTicketRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $MasterTicketRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MasterTicketRecipe$Serializer$Type = ($MasterTicketRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MasterTicketRecipe$Serializer_ = $MasterTicketRecipe$Serializer$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$UpgradeType, $UpgradeType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UpgradeData {
static readonly "EMPTY": $UpgradeData

constructor(arg0: $UpgradeType$Type)

public "getValue"(arg0: string): any
public "read"(arg0: $CompoundTag$Type): void
public "setValue"(arg0: string, arg1: any): void
public "getKeys"(): $Set<(string)>
public "getStringValue"(arg0: string): string
public "getBooleanValue"(arg0: string): boolean
public "getIntValue"(arg0: string): integer
public "writeToNBT"(): $CompoundTag
public "writeToNBT"(arg0: $UpgradeType$Type): $CompoundTag
public "getFloatValue"(arg0: string): float
public "getLongValue"(arg0: string): long
public "hasKey"(arg0: string): boolean
public "getCompoundValue"(arg0: string): $CompoundTag
public static "getModifiedEntries"(arg0: $UpgradeData$Type, arg1: $UpgradeType$Type): $Map<(string), (any)>
get "keys"(): $Set<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeData$Type = ($UpgradeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeData_ = $UpgradeData$Type;
}}
declare module "packages/io/github/mortuusars/sootychimneys/recipe/$SootScrapingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SootScrapingRecipe, $SootScrapingRecipe$Type} from "packages/io/github/mortuusars/sootychimneys/recipe/$SootScrapingRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SootScrapingRecipe$Serializer implements $RecipeSerializer<($SootScrapingRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $SootScrapingRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $SootScrapingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $SootScrapingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $SootScrapingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SootScrapingRecipe$Serializer$Type = ($SootScrapingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SootScrapingRecipe$Serializer_ = $SootScrapingRecipe$Serializer$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockTallRotatable" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$TraderBlockRotatable, $TraderBlockRotatable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockRotatable"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITallBlock, $ITallBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$ITallBlock"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $TraderBlockTallRotatable extends $TraderBlockRotatable implements $ITallBlock {
static readonly "FACING": $DirectionProperty
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


/**
 * 
 * @deprecated
 */
public "getReplacable"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): boolean
public "getBlockEntity"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getIsBottom"(arg0: $BlockState$Type): boolean
public "getOtherHeight"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockPos
public "getIsTop"(arg0: $BlockState$Type): boolean
public "isReplaceable"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderBlockTallRotatable$Type = ($TraderBlockTallRotatable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderBlockTallRotatable_ = $TraderBlockTallRotatable$Type;
}}
declare module "packages/io/github/mortuusars/scholar/recipe/$NbtTransferringRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$CustomRecipe, $CustomRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CustomRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $NbtTransferringRecipe extends $CustomRecipe {

constructor(id: $ResourceLocation$Type, transferIngredient: $Ingredient$Type, ingredients: $NonNullList$Type<($Ingredient$Type)>, result: $ItemStack$Type)

public "matches"(container: $CraftingContainer$Type, level: $Level$Type): boolean
public "getResult"(): $ItemStack
public "getResultItem"(registryAccess: $RegistryAccess$Type): $ItemStack
public "assemble"(container: $CraftingContainer$Type, registryAccess: $RegistryAccess$Type): $ItemStack
public "getTransferIngredient"(): $Ingredient
public "getSerializer"(): $RecipeSerializer<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(width: integer, height: integer): boolean
public "transferNbt"(transferIngredientStack: $ItemStack$Type, recipeResultStack: $ItemStack$Type): $ItemStack
get "result"(): $ItemStack
get "transferIngredient"(): $Ingredient
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NbtTransferringRecipe$Type = ($NbtTransferringRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NbtTransferringRecipe_ = $NbtTransferringRecipe$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageScreen" {
import {$ScreenPosition, $ScreenPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$IEasyScreen, $IEasyScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/interfaces/$IEasyScreen"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ITraderStorageMenu, $ITraderStorageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageMenu"
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"

export interface $ITraderStorageScreen extends $IEasyScreen {

 "selfMessage"(arg0: $LazyPacketData$Builder$Type): void
 "changeTab"(arg0: integer, arg1: boolean, arg2: $LazyPacketData$Builder$Type): void
 "changeTab"(arg0: integer): void
 "getMenu"(): $ITraderStorageMenu
 "removeChild"(arg0: any): void
 "getGuiLeft"(): integer
 "getGuiTop"(): integer
 "addChild"<W>(arg0: W): W
 "blockInventoryClosing"(): boolean
 "getCorner"(): $ScreenPosition
 "getArea"(): $ScreenArea
 "getYSize"(): integer
 "getXSize"(): integer
 "getFont"(): $Font
 "getPlayer"(): $Player
}

export namespace $ITraderStorageScreen {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITraderStorageScreen$Type = ($ITraderStorageScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITraderStorageScreen_ = $ITraderStorageScreen$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$IUpgradeItem" {
import {$UpgradeData, $UpgradeData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeData"
import {$IUpgradeable, $IUpgradeable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$IUpgradeable"
import {$UpgradeType, $UpgradeType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeType"

export interface $IUpgradeItem {

 "getUpgradeType"(): $UpgradeType
 "getDefaultUpgradeData"(): $UpgradeData
 "onApplied"(arg0: $IUpgradeable$Type): void
}

export namespace $IUpgradeItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeItem$Type = ($IUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeItem_ = $IUpgradeItem$Type;
}}
declare module "packages/io/github/mortuusars/exposure/camera/infrastructure/$FocalRange" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FocalRange implements $StringRepresentable {
static readonly "ALLOWED_MIN": integer
static readonly "ALLOWED_MAX": integer

constructor(min: integer, max: integer)
constructor(fixedValue: integer)

public "equals"(obj: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "min"(): integer
public "max"(): integer
public static "getDefault"(): $FocalRange
public static "parse"(value: string): $FocalRange
public static "fromJson"(json: $JsonElement$Type): $FocalRange
public "isPrime"(): boolean
public "getSerializedName"(): string
public static "fromNetwork"(buffer: $FriendlyByteBuf$Type): $FocalRange
public "toNetwork"(buffer: $FriendlyByteBuf$Type): void
public static "ofStack"(stack: $ItemStack$Type): $FocalRange
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "default"(): $FocalRange
get "prime"(): boolean
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FocalRange$Type = ($FocalRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FocalRange_ = $FocalRange$Type;
}}
declare module "packages/io/github/mortuusars/salt/block/$ISaltBlock" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ISaltBlock {

 "getDissolvedState"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $Fluid$Type): $BlockState
 "onSaltAnimateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
 "onSaltRandomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): boolean

(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $Fluid$Type): $BlockState
}

export namespace $ISaltBlock {
function getFluidDrippingOn(arg0: $ServerLevel$Type, arg1: $BlockPos$Type): $Fluid
function maybeGrowCluster(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $ServerLevel$Type): void
function canGrowCluster(arg0: $BlockPos$Type, arg1: $ServerLevel$Type): boolean
function growCluster(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $ServerLevel$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISaltBlock$Type = ($ISaltBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISaltBlock_ = $ISaltBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$EasyMenuScreen" {
import {$ScreenPosition, $ScreenPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"
import {$AbstractContainerScreen, $AbstractContainerScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$IEasyScreen, $IEasyScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/interfaces/$IEasyScreen"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"

export class $EasyMenuScreen<T extends $AbstractContainerMenu> extends $AbstractContainerScreen<(T)> implements $IEasyScreen {
static readonly "INVENTORY_LOCATION": $ResourceLocation
static readonly "SLOT_ITEM_BLIT_OFFSET": integer
 "imageWidth": integer
 "imageHeight": integer
 "hoveredSlot": $Slot
 "clickedSlot": $Slot
 "snapbackEnd": $Slot
 "leftPos": integer
 "topPos": integer
 "isSplittingStack": boolean
 "draggingItem": $ItemStack
 "snapbackStartX": integer
 "snapbackStartY": integer
 "snapbackTime": long
 "snapbackItem": $ItemStack
 "quickCraftingType": integer
 "quickCraftingRemainder": integer
static "BACKGROUND_LOCATION": $ResourceLocation
 "title": $Component
readonly "children": $List<($GuiEventListener)>
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font


public "removeChild"(arg0: any): void
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "getGuiLeft"(): integer
public "getGuiTop"(): integer
public "addChild"<W>(arg0: W): W
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "getCorner"(): $ScreenPosition
public "getArea"(): $ScreenArea
public "getYSize"(): integer
public "getXSize"(): integer
public "getFont"(): $Font
public "getPlayer"(): $Player
public "blockInventoryClosing"(): boolean
public static "draw"(arg0: $AbstractContainerScreen$Type<(any)>, arg1: $GuiGraphics$Type, arg2: $List$Type<($Component$Type)>, arg3: integer): void
get "guiLeft"(): integer
get "guiTop"(): integer
get "corner"(): $ScreenPosition
get "area"(): $ScreenArea
get "ySize"(): integer
get "xSize"(): integer
get "font"(): $Font
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasyMenuScreen$Type<T> = ($EasyMenuScreen<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasyMenuScreen_<T> = $EasyMenuScreen$Type<(T)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$IValidatedMenu" {
import {$MenuValidator, $MenuValidator$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$MenuValidator"

export interface $IValidatedMenu {

 "getValidator"(): $MenuValidator

(): $MenuValidator
}

export namespace $IValidatedMenu {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IValidatedMenu$Type = ($IValidatedMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IValidatedMenu_ = $IValidatedMenu$Type;
}}
declare module "packages/io/github/mortuusars/wares/item/$PackageItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PackageItem extends $BlockItem {
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getEatingSound"(): $SoundEvent
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "eatingSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackageItem$Type = ($PackageItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PackageItem_ = $PackageItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/$BookTraderBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$TraderBlockRotatable, $TraderBlockRotatable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockRotatable"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$IBookTraderBlock, $IBookTraderBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/interfaces/$IBookTraderBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BookTraderBlock extends $TraderBlockRotatable implements $IBookTraderBlock {
static readonly "BOOK_COUNT": integer
static readonly "FACING": $DirectionProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "maxRenderIndex"(): integer
public "GetBookRenderRot"(arg0: integer, arg1: $BlockState$Type): $List<($Quaternionf)>
public "GetBookRenderPos"(arg0: integer, arg1: $BlockState$Type): $Vector3f
public "GetBookRenderScale"(arg0: integer, arg1: $BlockState$Type): float
public "getBlockEntity"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type): $BlockEntity
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookTraderBlock$Type = ($BookTraderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookTraderBlock_ = $BookTraderBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/commands/arguments/$TraderArgument" {
import {$TraderData, $TraderData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData"
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$StringReader, $StringReader$Type} from "packages/com/mojang/brigadier/$StringReader"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $TraderArgument implements $ArgumentType<($TraderData)> {


public "parse"(arg0: $StringReader$Type): $TraderData
public static "traderWithPersistent"(): $TraderArgument
public static "getTrader"(arg0: $CommandContext$Type<($CommandSourceStack$Type)>, arg1: string): $TraderData
public static "trader"(): $TraderArgument
public "listSuggestions"<S>(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
public "getExamples"(): $Collection<(string)>
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderArgument$Type = ($TraderArgument);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderArgument_ = $TraderArgument$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatKey" {
import {$StatType, $StatType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatType"

export class $StatKey<A, B> {
readonly "key": string
readonly "type": $StatType<(A), (B)>


public static "create"<A, B>(arg0: string, arg1: $StatType$Type<(A), (B)>): $StatKey<(A), (B)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatKey$Type<A, B> = ($StatKey<(A), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatKey_<A, B> = $StatKey$Type<(A), (B)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/trade_rules/$TradeRulesClientTab" {
import {$TradeRulesTab, $TradeRulesTab$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/traderstorage/trade_rules/$TradeRulesTab"
import {$ITraderStorageMenu, $ITraderStorageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageMenu"
import {$TraderStorageTab, $TraderStorageTab$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$TraderStorageTab"
import {$EasyGuiGraphics, $EasyGuiGraphics$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/client/rendering/$EasyGuiGraphics"
import {$TraderStorageClientTab, $TraderStorageClientTab$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$TraderStorageClientTab"
import {$IconData, $IconData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/icon/$IconData"
import {$ITraderStorageScreen, $ITraderStorageScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageScreen"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"

export class $TradeRulesClientTab<T extends $TradeRulesTab> extends $TraderStorageClientTab<(T)> {
readonly "screen": $ITraderStorageScreen
readonly "menu": $ITraderStorageMenu
readonly "commonTab": T


public "initialize"(arg0: $ScreenArea$Type, arg1: boolean): void
public "closeAction"(): void
public "tick"(): void
public "openTab"(arg0: integer): void
public "blockInventoryClosing"(): boolean
public "getIcon"(): $IconData
public "renderBG"(arg0: $EasyGuiGraphics$Type): void
public "renderAfterWidgets"(arg0: $EasyGuiGraphics$Type): void
public "refreshTabs"(): void
get "icon"(): $IconData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeRulesClientTab$Type<T> = ($TradeRulesClientTab<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeRulesClientTab_<T> = $TradeRulesClientTab$Type<(T)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$ChocolateCoinItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChocolateCoinItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: float, ...arg2: ($MobEffectInstance$Type)[])
constructor(arg0: $Item$Properties$Type, ...arg1: ($MobEffectInstance$Type)[])
constructor(arg0: float, ...arg1: ($MobEffectInstance$Type)[])
constructor(...arg0: ($MobEffectInstance$Type)[])

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChocolateCoinItem$Type = ($ChocolateCoinItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChocolateCoinItem_ = $ChocolateCoinItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockRotatable" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$IRotatableBlock, $IRotatableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IRotatableBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TraderBlockBase, $TraderBlockBase$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockBase"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $TraderBlockRotatable extends $TraderBlockBase implements $IRotatableBlock {
static readonly "FACING": $DirectionProperty
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


public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public "getFacing"(arg0: $BlockState$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderBlockRotatable$Type = ($TraderBlockRotatable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderBlockRotatable_ = $TraderBlockRotatable$Type;
}}
declare module "packages/io/github/mortuusars/chalk/core/$IDrawingTool" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MarkDrawingContext, $MarkDrawingContext$Type} from "packages/io/github/mortuusars/chalk/utils/$MarkDrawingContext"
import {$Mark, $Mark$Type} from "packages/io/github/mortuusars/chalk/core/$Mark"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MarkSymbol, $MarkSymbol$Type} from "packages/io/github/mortuusars/chalk/core/$MarkSymbol"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IDrawingTool {

 "drawMark"(arg0: $MarkDrawingContext$Type, arg1: $Mark$Type): boolean
 "getMarkColorValue"(arg0: $ItemStack$Type): integer
 "getGlowing"(arg0: $ItemStack$Type): boolean
 "getMark"(arg0: $ItemStack$Type, arg1: $MarkDrawingContext$Type, arg2: $MarkSymbol$Type): $Mark
 "getMarkColor"(arg0: $ItemStack$Type): $Optional<($DyeColor)>
 "onMarkDrawn"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
 "createDrawingContext"(arg0: $UseOnContext$Type): $MarkDrawingContext
 "createDrawingContext"(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $Vec3$Type, arg3: $Direction$Type, arg4: $InteractionHand$Type): $MarkDrawingContext
}

export namespace $IDrawingTool {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawingTool$Type = ($IDrawingTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawingTool_ = $IDrawingTool$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/$ShelfBlock" {
import {$ItemPositionData, $ItemPositionData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/$ItemPositionData"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$TraderBlockRotatable, $TraderBlockRotatable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockRotatable"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IItemTraderBlock, $IItemTraderBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/interfaces/$IItemTraderBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ShelfBlock extends $TraderBlockRotatable implements $IItemTraderBlock {
static readonly "FACING": $DirectionProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)
constructor(arg0: $BlockBehaviour$Properties$Type, arg1: integer)

public "makeTrader"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "traderType"(): $BlockEntityType<(any)>
public "getItemPositionData"(): $ItemPositionData
public "getBlockEntity"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type): $BlockEntity
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "itemPositionData"(): $ItemPositionData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShelfBlock$Type = ($ShelfBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShelfBlock_ = $ShelfBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/$EasyBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $EasyBlock extends $Block {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasyBlock$Type = ($EasyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasyBlock_ = $EasyBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/$NetworkItemTraderBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$TraderBlockRotatable, $TraderBlockRotatable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockRotatable"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $NetworkItemTraderBlock extends $TraderBlockRotatable {
static readonly "TRADER_COUNT_SMALL": integer
static readonly "TRADER_COUNT_MEDIUM": integer
static readonly "TRADER_COUNT_LARGE": integer
static readonly "TRADER_COUNT_XLARGE": integer
static readonly "FACING": $DirectionProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: integer)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkItemTraderBlock$Type = ($NetworkItemTraderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkItemTraderBlock_ = $NetworkItemTraderBlock$Type;
}}
declare module "packages/io/github/mortuusars/chalk/core/$MarkSymbol" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$MarkSymbol$OrientationBehavior, $MarkSymbol$OrientationBehavior$Type} from "packages/io/github/mortuusars/chalk/core/$MarkSymbol$OrientationBehavior"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SymbolOrientation, $SymbolOrientation$Type} from "packages/io/github/mortuusars/chalk/core/$SymbolOrientation"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $MarkSymbol extends $Enum<($MarkSymbol)> implements $StringRepresentable {
static readonly "CENTER": $MarkSymbol
static readonly "ARROW": $MarkSymbol
static readonly "CROSS": $MarkSymbol
static readonly "CHECKMARK": $MarkSymbol
static readonly "SKULL": $MarkSymbol
static readonly "HOUSE": $MarkSymbol
static readonly "HEART": $MarkSymbol
static readonly "PICKAXE": $MarkSymbol


public static "values"(): ($MarkSymbol)[]
public static "valueOf"(arg0: string): $MarkSymbol
public "getSerializedName"(): string
public "getTranslationKey"(): string
public "getTextureLocation"(): $ResourceLocation
public static "byNameOrDefault"(arg0: string): $MarkSymbol
public static "getSpecialSymbols"(): $List<($MarkSymbol)>
public "getOrientationBehavior"(): $MarkSymbol$OrientationBehavior
public "getDefaultOrientation"(): $SymbolOrientation
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
get "translationKey"(): string
get "textureLocation"(): $ResourceLocation
get "specialSymbols"(): $List<($MarkSymbol)>
get "orientationBehavior"(): $MarkSymbol$OrientationBehavior
get "defaultOrientation"(): $SymbolOrientation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MarkSymbol$Type = (("arrow") | ("pickaxe") | ("center") | ("cross") | ("checkmark") | ("skull") | ("house") | ("heart")) | ($MarkSymbol);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MarkSymbol_ = $MarkSymbol$Type;
}}
declare module "packages/io/github/mortuusars/wares/block/$CardboardBoxBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $CardboardBoxBlock extends $Block {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
static readonly "BOXES": $IntegerProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CardboardBoxBlock$Type = ($CardboardBoxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CardboardBoxBlock_ = $CardboardBoxBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/$CoinpileBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$CoinBlock, $CoinBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/common/blocks/$CoinBlock"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$IRotatableBlock, $IRotatableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IRotatableBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $CoinpileBlock extends $CoinBlock implements $IRotatableBlock, $SimpleWaterloggedBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Item$Type)>)
constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Item$Type)>, arg2: $VoxelShape$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public "getFacing"(arg0: $BlockState$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoinpileBlock$Type = ($CoinpileBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoinpileBlock_ = $CoinpileBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/notifications/categories/$TraderCategory" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$NotificationCategory, $NotificationCategory$Type} from "packages/io/github/lightman314/lightmanscurrency/api/notifications/$NotificationCategory"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$NotificationCategoryType, $NotificationCategoryType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/notifications/$NotificationCategoryType"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$IconData, $IconData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/icon/$IconData"

export class $TraderCategory extends $NotificationCategory {
static readonly "TYPE": $NotificationCategoryType<($TraderCategory)>
static readonly "GENERAL_TYPE": $NotificationCategoryType<(any)>
static readonly "GENERAL": $NotificationCategory

constructor(arg0: $ItemLike$Type, arg1: $MutableComponent$Type, arg2: long)
constructor(arg0: $CompoundTag$Type)

public "getName"(): $MutableComponent
public "matches"(arg0: $NotificationCategory$Type): boolean
public "getType"(): $NotificationCategoryType<($TraderCategory)>
public "getIcon"(): $IconData
public "saveAdditional"(arg0: $CompoundTag$Type): void
get "name"(): $MutableComponent
get "type"(): $NotificationCategoryType<($TraderCategory)>
get "icon"(): $IconData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderCategory$Type = ($TraderCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderCategory_ = $TraderCategory$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/notifications/$NotificationType" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Notification, $Notification$Type} from "packages/io/github/lightman314/lightmanscurrency/api/notifications/$Notification"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/net/minecraftforge/common/util/$NonNullSupplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $NotificationType<T extends $Notification> {
readonly "type": $ResourceLocation

constructor(arg0: $ResourceLocation$Type, arg1: $NonNullSupplier$Type<(T)>)

public "toString"(): string
public "load"(arg0: $CompoundTag$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NotificationType$Type<T> = ($NotificationType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NotificationType_<T> = $NotificationType$Type<(T)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/$ArmorDisplayBlock" {
import {$ItemPositionData, $ItemPositionData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/$ItemPositionData"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemTraderBlock, $IItemTraderBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/interfaces/$IItemTraderBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$TraderBlockTallRotatable, $TraderBlockTallRotatable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockTallRotatable"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ArmorDisplayBlock extends $TraderBlockTallRotatable implements $IItemTraderBlock {
static readonly "FACING": $DirectionProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "makeTrader"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "traderType"(): $BlockEntityType<(any)>
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getItemPositionData"(): $ItemPositionData
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "itemPositionData"(): $ItemPositionData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorDisplayBlock$Type = ($ArmorDisplayBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmorDisplayBlock_ = $ArmorDisplayBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/trade/$AlertData" {
import {$TextEntry, $TextEntry$Type} from "packages/io/github/lightman314/lightmanscurrency/common/text/$TextEntry"
import {$AlertType, $AlertType$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/trade/$AlertType"
import {$EasyGuiGraphics, $EasyGuiGraphics$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/client/rendering/$EasyGuiGraphics"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $AlertData {
readonly "type": $AlertType


public static "compare"(arg0: $AlertData$Type, arg1: $AlertData$Type): integer
public static "error"(arg0: $MutableComponent$Type): $AlertData
public static "error"(arg0: $TextEntry$Type): $AlertData
public static "warn"(arg0: $TextEntry$Type): $AlertData
public static "warn"(arg0: $MutableComponent$Type): $AlertData
public "getFormattedMessage"(): $MutableComponent
public static "neutral"(arg0: $MutableComponent$Type): $AlertData
public static "neutral"(arg0: $TextEntry$Type): $AlertData
public "setShaderColor"(arg0: $EasyGuiGraphics$Type, arg1: float): void
public static "helpful"(arg0: $TextEntry$Type): $AlertData
public static "helpful"(arg0: $MutableComponent$Type): $AlertData
get "formattedMessage"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlertData$Type = ($AlertData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlertData_ = $AlertData$Type;
}}
declare module "packages/io/github/mortuusars/exposure/block/$LightroomBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $LightroomBlock extends $Block implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "LIT": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, blockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public static "getBlockTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, blockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(pContext: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlacer: $LivingEntity$Type, pStack: $ItemStack$Type): void
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, block: $Block$Type, fromPos: $BlockPos$Type, pIsMoving: boolean): void
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "use"(blockState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hitResult: $BlockHitResult$Type): $InteractionResult
public "rotate"(pState: $BlockState$Type, pRotation: $Rotation$Type): $BlockState
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
public "getAnalogOutputSignal"(blockState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type): integer
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightroomBlock$Type = ($LightroomBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightroomBlock_ = $LightroomBlock$Type;
}}
declare module "packages/io/github/mortuusars/wares/data/agreement/$AgreementBuilder" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DeliveryAgreement, $DeliveryAgreement$Type} from "packages/io/github/mortuusars/wares/data/agreement/$DeliveryAgreement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RequestedItem, $RequestedItem$Type} from "packages/io/github/mortuusars/wares/data/agreement/component/$RequestedItem"

export class $AgreementBuilder {

constructor()

public "build"(): $DeliveryAgreement
public "id"(arg0: string): $AgreementBuilder
public "message"(arg0: $Component$Type): $AgreementBuilder
public "requested"(arg0: $List$Type<($RequestedItem$Type)>): $AgreementBuilder
public "ordered"(arg0: integer): $AgreementBuilder
public "expireTime"(arg0: long): $AgreementBuilder
public "title"(arg0: $Component$Type): $AgreementBuilder
public "seal"(arg0: string): $AgreementBuilder
public "payment"(arg0: $List$Type<($ItemStack$Type)>): $AgreementBuilder
public "experience"(arg0: integer): $AgreementBuilder
public "delivered"(arg0: integer): $AgreementBuilder
public "buyerAddress"(arg0: $Component$Type): $AgreementBuilder
public "addRequestedItem"(arg0: $RequestedItem$Type): $AgreementBuilder
public "addPaymentItem"(arg0: $ItemStack$Type): $AgreementBuilder
public "buyerName"(arg0: $Component$Type): $AgreementBuilder
public "deliveryTime"(arg0: integer): $AgreementBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AgreementBuilder$Type = ($AgreementBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AgreementBuilder_ = $AgreementBuilder$Type;
}}
declare module "packages/io/github/mortuusars/monobank/content/item/$ReplacementLockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ReplacementLockItem extends $Item {
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

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReplacementLockItem$Type = ($ReplacementLockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReplacementLockItem_ = $ReplacementLockItem$Type;
}}
declare module "packages/io/github/mortuusars/scholar/mixin/$LecternBlockEntityAccessor" {
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ContainerData, $ContainerData$Type} from "packages/net/minecraft/world/inventory/$ContainerData"

export interface $LecternBlockEntityAccessor {

 "getBookAccess"(): $Container
 "getDataAccess"(): $ContainerData
}

export namespace $LecternBlockEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LecternBlockEntityAccessor$Type = ($LecternBlockEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LecternBlockEntityAccessor_ = $LecternBlockEntityAccessor$Type;
}}
declare module "packages/io/github/mortuusars/exposure/camera/infrastructure/$CompositionGuide" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $CompositionGuide {

constructor(id: string)

public "getId"(): string
public static "fromBuffer"(buffer: $FriendlyByteBuf$Type): $CompositionGuide
public "translate"(): $Component
public "toBuffer"(buffer: $FriendlyByteBuf$Type): void
get "id"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositionGuide$Type = ($CompositionGuide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompositionGuide_ = $CompositionGuide$Type;
}}
declare module "packages/io/github/mortuusars/chalk/items/$ChalkBoxItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IDrawingTool, $IDrawingTool$Type} from "packages/io/github/mortuusars/chalk/core/$IDrawingTool"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MarkSymbol, $MarkSymbol$Type} from "packages/io/github/mortuusars/chalk/core/$MarkSymbol"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$MarkDrawingContext, $MarkDrawingContext$Type} from "packages/io/github/mortuusars/chalk/utils/$MarkDrawingContext"
import {$Mark, $Mark$Type} from "packages/io/github/mortuusars/chalk/core/$Mark"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChalkBoxItem extends $Item implements $IDrawingTool {
static readonly "SELECTED_PROPERTY": $ResourceLocation
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

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isRepairable"(arg0: $ItemStack$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public static "openGUI"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "getMarkColorValue"(arg0: $ItemStack$Type): integer
public "getGlowing"(arg0: $ItemStack$Type): boolean
public "getMark"(arg0: $ItemStack$Type, arg1: $MarkDrawingContext$Type, arg2: $MarkSymbol$Type): $Mark
public "getMarkColor"(arg0: $ItemStack$Type): $Optional<($DyeColor)>
public "onMarkDrawn"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getSelectedChalkColor"(arg0: $ItemStack$Type): float
public "drawMark"(arg0: $MarkDrawingContext$Type, arg1: $Mark$Type): boolean
public "createDrawingContext"(arg0: $UseOnContext$Type): $MarkDrawingContext
public "createDrawingContext"(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $Vec3$Type, arg3: $Direction$Type, arg4: $InteractionHand$Type): $MarkDrawingContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChalkBoxItem$Type = ($ChalkBoxItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChalkBoxItem_ = $ChalkBoxItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$IRuleLoadListener" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TradeRule, $TradeRule$Type} from "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$TradeRule"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ITradeRuleHost, $ITradeRuleHost$Type} from "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$ITradeRuleHost"

export interface $IRuleLoadListener {

 "afterLoading"(arg0: $ITradeRuleHost$Type, arg1: $List$Type<($CompoundTag$Type)>, arg2: $List$Type<($TradeRule$Type)>): void
 "beforeLoading"(arg0: $ITradeRuleHost$Type, arg1: $List$Type<($CompoundTag$Type)>, arg2: $List$Type<($TradeRule$Type)>): void
}

export namespace $IRuleLoadListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRuleLoadListener$Type = ($IRuleLoadListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRuleLoadListener_ = $IRuleLoadListener$Type;
}}
declare module "packages/io/github/mortuusars/exposure/integration/kubejs/event/$ShutterOpeningEventJS" {
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ShutterOpeningEventJS extends $PlayerEventJS {

constructor(player: $Player$Type, cameraStack: $ItemStack$Type, lightLevel: integer, shouldFlashFire: boolean)

public "getLightLevel"(): integer
public "getCameraStack"(): $ItemStack
public "getPlayer"(): $Player
public "shouldFlashFire"(): boolean
get "lightLevel"(): integer
get "cameraStack"(): $ItemStack
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShutterOpeningEventJS$Type = ($ShutterOpeningEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShutterOpeningEventJS_ = $ShutterOpeningEventJS$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/trade/$DisplayEntry" {
import {$TextRenderUtil$TextFormatting, $TextRenderUtil$TextFormatting$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$TextRenderUtil$TextFormatting"
import {$ScreenPosition, $ScreenPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$DisplayData, $DisplayData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/trade/$DisplayData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EasyGuiGraphics, $EasyGuiGraphics$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/client/rendering/$EasyGuiGraphics"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"

export class $DisplayEntry {


public static "of"(arg0: $Component$Type, arg1: $TextRenderUtil$TextFormatting$Type): $DisplayEntry
public static "of"(arg0: $Pair$Type<($ResourceLocation$Type), ($ResourceLocation$Type)>, arg1: $List$Type<($Component$Type)>): $DisplayEntry
public static "of"(arg0: $Component$Type, arg1: $TextRenderUtil$TextFormatting$Type, arg2: boolean): $DisplayEntry
public static "of"(arg0: $Pair$Type<($ResourceLocation$Type), ($ResourceLocation$Type)>): $DisplayEntry
public static "of"(arg0: $ItemStack$Type, arg1: integer, arg2: $Consumer$Type<($List$Type<($Component$Type)>)>, arg3: $Pair$Type<($ResourceLocation$Type), ($ResourceLocation$Type)>, arg4: $ScreenPosition$Type): $DisplayEntry
public static "of"(arg0: $ItemStack$Type, arg1: integer, arg2: $List$Type<($Component$Type)>, arg3: $Pair$Type<($ResourceLocation$Type), ($ResourceLocation$Type)>, arg4: $ScreenPosition$Type): $DisplayEntry
public static "of"(arg0: $MoneyValue$Type, arg1: $List$Type<($Component$Type)>, arg2: boolean): $DisplayEntry
public static "of"(arg0: $MoneyValue$Type, arg1: $List$Type<($Component$Type)>): $DisplayEntry
public static "of"(arg0: $MoneyValue$Type): $DisplayEntry
public static "of"(arg0: $Component$Type, arg1: $TextRenderUtil$TextFormatting$Type, arg2: $List$Type<($Component$Type)>, arg3: boolean): $DisplayEntry
public static "of"(arg0: $Component$Type, arg1: $TextRenderUtil$TextFormatting$Type, arg2: $List$Type<($Component$Type)>): $DisplayEntry
public static "of"(arg0: $ItemStack$Type, arg1: integer): $DisplayEntry
public static "of"(arg0: $ItemStack$Type, arg1: integer, arg2: $Consumer$Type<($List$Type<($Component$Type)>)>): $DisplayEntry
public static "of"(arg0: $ItemStack$Type, arg1: integer, arg2: $List$Type<($Component$Type)>): $DisplayEntry
public static "of"(arg0: $ItemStack$Type, arg1: integer, arg2: $List$Type<($Component$Type)>, arg3: $Pair$Type<($ResourceLocation$Type), ($ResourceLocation$Type)>): $DisplayEntry
public static "of"(arg0: $ItemStack$Type, arg1: integer, arg2: $Consumer$Type<($List$Type<($Component$Type)>)>, arg3: $Pair$Type<($ResourceLocation$Type), ($ResourceLocation$Type)>): $DisplayEntry
public "render"(arg0: $EasyGuiGraphics$Type, arg1: integer, arg2: integer, arg3: $DisplayData$Type): void
public "isMouseOver"(arg0: integer, arg1: integer, arg2: $DisplayData$Type, arg3: integer, arg4: integer): boolean
public "getTooltip"(): $List<($Component)>
public "trySelfRenderTooltip"(arg0: $EasyGuiGraphics$Type): boolean
get "tooltip"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayEntry$Type = ($DisplayEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayEntry_ = $DisplayEntry$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/$TerminalBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$RotatableBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TerminalBlock extends $RotatableBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)
constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $VoxelShape$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TerminalBlock$Type = ($TerminalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TerminalBlock_ = $TerminalBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/$ItemPositionData" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemPositionData$PositionEntry, $ItemPositionData$PositionEntry$Type} from "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/$ItemPositionData$PositionEntry"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"

export class $ItemPositionData {
static readonly "EMPTY": $ItemPositionData

constructor(...arg0: ($ItemPositionData$PositionEntry$Type)[])
constructor(arg0: $List$Type<($ItemPositionData$PositionEntry$Type)>)

public "isEmpty"(): boolean
public static "parse"(arg0: $JsonObject$Type): $ItemPositionData
public "getRotation"(arg0: $BlockState$Type, arg1: integer, arg2: float): $List<($Quaternionf)>
public "getScale"(arg0: integer): float
public "getPositions"(arg0: $BlockState$Type, arg1: integer): $List<($Vector3f)>
public "getEntryCount"(): integer
get "empty"(): boolean
get "entryCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPositionData$Type = ($ItemPositionData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPositionData_ = $ItemPositionData$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/$TaxCollectorBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IOwnableBlock, $IOwnableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IOwnableBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IEasyEntityBlock, $IEasyEntityBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IEasyEntityBlock"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$RotatableBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $TaxCollectorBlock extends $RotatableBlock implements $IOwnableBlock, $IEasyEntityBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getAllowedTypes"(): $Collection<($BlockEntityType<(any)>)>
public "canBreak"(arg0: $Player$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "allowedTypes"(): $Collection<($BlockEntityType<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaxCollectorBlock$Type = ($TaxCollectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaxCollectorBlock_ = $TaxCollectorBlock$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$CameraItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FlashMode, $FlashMode$Type} from "packages/io/github/mortuusars/exposure/camera/infrastructure/$FlashMode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IForgeItem, $IForgeItem$Type} from "packages/net/minecraftforge/common/extensions/$IForgeItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ShutterSpeed, $ShutterSpeed$Type} from "packages/io/github/mortuusars/exposure/camera/infrastructure/$ShutterSpeed"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AttachmentType, $AttachmentType$Type} from "packages/io/github/mortuusars/exposure/camera/$AttachmentType"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$ItemAndStack, $ItemAndStack$Type} from "packages/io/github/mortuusars/exposure/util/$ItemAndStack"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$FilmRollItem, $FilmRollItem$Type} from "packages/io/github/mortuusars/exposure/item/$FilmRollItem"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$CompositionGuide, $CompositionGuide$Type} from "packages/io/github/mortuusars/exposure/camera/infrastructure/$CompositionGuide"
import {$FocalRange, $FocalRange$Type} from "packages/io/github/mortuusars/exposure/camera/infrastructure/$FocalRange"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CameraItem extends $Item implements $IForgeItem {
static readonly "FILM_ATTACHMENT": $AttachmentType
static readonly "FLASH_ATTACHMENT": $AttachmentType
static readonly "LENS_ATTACHMENT": $AttachmentType
static readonly "FILTER_ATTACHMENT": $AttachmentType
static readonly "ATTACHMENTS": $List<($AttachmentType)>
static readonly "SHUTTER_SPEEDS": $List<($ShutterSpeed)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "isActive"(stack: $ItemStack$Type): boolean
public "activate"(player: $Player$Type, stack: $ItemStack$Type): void
public "deactivate"(player: $Player$Type, stack: $ItemStack$Type): void
public "setActive"(stack: $ItemStack$Type, active: boolean): void
public "isBarVisible"(stack: $ItemStack$Type): boolean
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "overrideOtherStackedOnMe"(stack: $ItemStack$Type, otherStack: $ItemStack$Type, slot: $Slot$Type, action: $ClickAction$Type, player: $Player$Type, access: $SlotAccess$Type): boolean
public "getBarColor"(stack: $ItemStack$Type): integer
public "getBarWidth"(stack: $ItemStack$Type): integer
public "inventoryTick"(stack: $ItemStack$Type, level: $Level$Type, entity: $Entity$Type, slotId: integer, isSelected: boolean): void
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, components: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "onItemUseFirst"(stack: $ItemStack$Type, context: $UseOnContext$Type): $InteractionResult
public "setSelfieModeWithEffects"(player: $Player$Type, stack: $ItemStack$Type, selfie: boolean): void
public "openCameraAttachmentsMenu"(player: $Player$Type, cameraSlotIndex: integer): void
public "getAllShutterSpeeds"(cameraStack: $ItemStack$Type): $List<($ShutterSpeed)>
public "getAttachmentTypeForSlot"(cameraStack: $ItemStack$Type, slot: integer): $Optional<($AttachmentType)>
public "setCompositionGuide"(cameraStack: $ItemStack$Type, guide: $CompositionGuide$Type): void
public "getCompositionGuide"(cameraStack: $ItemStack$Type): $CompositionGuide
public "exposeFrameClientside"(player: $Player$Type, hand: $InteractionHand$Type, exposureId: string, flashHasFired: boolean, lightLevel: integer): void
public "getDefaultFocalRange"(): $FocalRange
public "spawnClientsideFlashEffects"(player: $Player$Type, cameraStack: $ItemStack$Type): void
public "getUseDuration"(stack: $ItemStack$Type): integer
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "shouldCauseReequipAnimation"(oldStack: $ItemStack$Type, newStack: $ItemStack$Type, slotChanged: boolean): boolean
public "initializeClient"(consumer: $Consumer$Type<(any)>): void
public "setTooltipRemoved"(stack: $ItemStack$Type, removed: boolean): void
public "getAttachmentTypes"(cameraStack: $ItemStack$Type): $List<($AttachmentType)>
public "getAttachment"(cameraStack: $ItemStack$Type, attachmentType: $AttachmentType$Type): $Optional<($ItemStack)>
public "setSelfieMode"(stack: $ItemStack$Type, selfie: boolean): void
public "isInSelfieMode"(stack: $ItemStack$Type): boolean
public "playCameraSound"(player: $Player$Type, originPlayer: $Player$Type, sound: $SoundEvent$Type, volume: float, pitch: float, pitchVariety: float): void
public "playCameraSound"(player: $Player$Type, sound: $SoundEvent$Type, volume: float, pitch: float): void
public "playCameraSound"(player: $Player$Type, sound: $SoundEvent$Type, volume: float, pitch: float, pitchVariety: float): void
public "isTooltipRemoved"(stack: $ItemStack$Type): boolean
public "setAttachment"(cameraStack: $ItemStack$Type, attachmentType: $AttachmentType$Type, attachmentStack: $ItemStack$Type): void
public "setShutterOpen"(level: $Level$Type, stack: $ItemStack$Type, shutterSpeed: $ShutterSpeed$Type, exposingFrame: boolean, flashHasFired: boolean): void
public "openShutter"(player: $Player$Type, level: $Level$Type, stack: $ItemStack$Type, shutterSpeed: $ShutterSpeed$Type, exposingFrame: boolean, flashHasFired: boolean): void
public "closeShutter"(player: $Player$Type, stack: $ItemStack$Type): void
public "getFilm"(cameraStack: $ItemStack$Type): $Optional<($ItemAndStack<($FilmRollItem)>)>
public "setShutterClosed"(stack: $ItemStack$Type): void
public "isShutterOpen"(stack: $ItemStack$Type): boolean
public "useCamera"(player: $Player$Type, hand: $InteractionHand$Type): $InteractionResult
public "tryUseFlash"(player: $Player$Type, cameraStack: $ItemStack$Type): boolean
public "getShutterSpeed"(cameraStack: $ItemStack$Type): $ShutterSpeed
public "addFrameData"(player: $ServerPlayer$Type, cameraStack: $ItemStack$Type, frame: $CompoundTag$Type, entitiesInFrame: $List$Type<($Entity$Type)>): void
public "addFrame"(player: $ServerPlayer$Type, cameraStack: $ItemStack$Type, hand: $InteractionHand$Type, frame: $CompoundTag$Type, entities: $List$Type<($Entity$Type)>): void
public "getFlashMode"(cameraStack: $ItemStack$Type): $FlashMode
public "addFrameToFilm"(cameraStack: $ItemStack$Type, frame: $CompoundTag$Type): void
public "setFilm"(cameraStack: $ItemStack$Type, filmStack: $ItemStack$Type): void
public "getFocalRange"(cameraStack: $ItemStack$Type): $FocalRange
public "setFlashMode"(cameraStack: $ItemStack$Type, flashMode: $FlashMode$Type): void
public "setZoom"(cameraStack: $ItemStack$Type, focalLength: double): void
public "getFocalLength"(cameraStack: $ItemStack$Type): float
public "setShutterSpeed"(cameraStack: $ItemStack$Type, shutterSpeed: $ShutterSpeed$Type): void
public "isRepairable"(arg0: $ItemStack$Type): boolean
get "defaultFocalRange"(): $FocalRange
set "shutterClosed"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CameraItem$Type = ($CameraItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CameraItem_ = $CameraItem$Type;
}}
declare module "packages/io/github/mortuusars/exposure/block/$FlashBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $FlashBlock extends $Block implements $EntityBlock, $SimpleWaterloggedBlock {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, blockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$Type, blockState: $BlockState$Type): $BlockEntity
public "propagatesSkylightDown"(blockState: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "updateShape"(pState: $BlockState$Type, pDirection: $Direction$Type, pNeighborState: $BlockState$Type, pLevel: $LevelAccessor$Type, pCurrentPos: $BlockPos$Type, pNeighborPos: $BlockPos$Type): $BlockState
public "getFluidState"(pState: $BlockState$Type): $FluidState
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "getShadeBrightness"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): float
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlashBlock$Type = ($FlashBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlashBlock_ = $FlashBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/$PaygateBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$TraderBlockRotatable, $TraderBlockRotatable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockRotatable"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $PaygateBlock extends $TraderBlockRotatable {
static readonly "POWERED": $BooleanProperty
static readonly "FACING": $DirectionProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaygateBlock$Type = ($PaygateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaygateBlock_ = $PaygateBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IClientTracker {

 "isClient"(): boolean
 "isServer"(): boolean

(): boolean
}

export namespace $IClientTracker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientTracker$Type = ($IClientTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientTracker_ = $IClientTracker$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent$TradeCostEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$TradeData, $TradeData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/$TradeData"
import {$TradeEvent, $TradeEvent$Type} from "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent"

export class $TradeEvent$TradeCostEvent extends $TradeEvent {

constructor(arg0: $TradeData$Type, arg1: $TradeContext$Type)
constructor()

public "matches"(arg0: $TradeData$Type): boolean
public "matches"(arg0: $TradeEvent$TradeCostEvent$Type): boolean
public "getListenerList"(): $ListenerList
public "getCostResultIsFree"(): boolean
public "giveDiscount"(arg0: integer): void
public "hikePrice"(arg0: integer): void
public "makeNotFree"(): void
public "forcedFree"(): boolean
public "getCostResult"(): $MoneyValue
public "setPricePercentage"(arg0: integer): void
public "makeFree"(): void
public "getBaseCost"(): $MoneyValue
public "getPricePercentage"(): integer
get "listenerList"(): $ListenerList
get "costResultIsFree"(): boolean
get "costResult"(): $MoneyValue
set "pricePercentage"(value: integer)
get "baseCost"(): $MoneyValue
get "pricePercentage"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeEvent$TradeCostEvent$Type = ($TradeEvent$TradeCostEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeEvent$TradeCostEvent_ = $TradeEvent$TradeCostEvent$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$ICapabilityBlock" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ICapabilityBlock {

 "getCapabilityBlockEntity"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $BlockEntity

(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $BlockEntity
}

export namespace $ICapabilityBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapabilityBlock$Type = ($ICapabilityBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICapabilityBlock_ = $ICapabilityBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$UpgradeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeItem, $IUpgradeItem$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$IUpgradeItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeData, $UpgradeData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeData"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeable, $IUpgradeable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$IUpgradeable"
import {$UpgradeType, $UpgradeType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UpgradeItem extends $Item implements $IUpgradeItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $UpgradeType$Type, arg1: $Item$Properties$Type)

public "getUpgradeType"(): $UpgradeType
public "getDefaultUpgradeData"(): $UpgradeData
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "getUpgradeTooltip"(arg0: $ItemStack$Type): $List<($Component)>
public static "getUpgradeTooltip"(arg0: $ItemStack$Type, arg1: boolean): $List<($Component)>
public static "getUpgradeData"(arg0: $ItemStack$Type): $UpgradeData
public static "setUpgradeData"(arg0: $ItemStack$Type, arg1: $UpgradeData$Type): void
public "addsTooltips"(): boolean
public "onApplied"(arg0: $IUpgradeable$Type): void
get "upgradeType"(): $UpgradeType
get "defaultUpgradeData"(): $UpgradeData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeItem$Type = ($UpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeItem_ = $UpgradeItem$Type;
}}
declare module "packages/io/github/mortuusars/exposure/recipe/$PhotographCopyingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$PhotographCopyingRecipe, $PhotographCopyingRecipe$Type} from "packages/io/github/mortuusars/exposure/recipe/$PhotographCopyingRecipe"

export class $PhotographCopyingRecipe$Serializer implements $RecipeSerializer<($PhotographCopyingRecipe)> {

constructor()

public "fromJson"(recipeId: $ResourceLocation$Type, serializedRecipe: $JsonObject$Type): $PhotographCopyingRecipe
public "fromNetwork"(recipeId: $ResourceLocation$Type, buffer: $FriendlyByteBuf$Type): $PhotographCopyingRecipe
public "toNetwork"(buffer: $FriendlyByteBuf$Type, recipe: $PhotographCopyingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $PhotographCopyingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhotographCopyingRecipe$Serializer$Type = ($PhotographCopyingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhotographCopyingRecipe$Serializer_ = $PhotographCopyingRecipe$Serializer$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$TooltipItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/net/minecraftforge/common/util/$NonNullSupplier"
import {$MultiLineTextEntry, $MultiLineTextEntry$Type} from "packages/io/github/lightman314/lightmanscurrency/common/text/$MultiLineTextEntry"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TooltipItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $NonNullSupplier$Type<($List$Type<($Component$Type)>)>)

public static "combine"(...arg0: ($NonNullSupplier$Type<($List$Type<($Component$Type)>)>)[]): $NonNullSupplier<($List<($Component)>)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "addTooltipAlways"(arg0: $List$Type<($Component$Type)>, arg1: $NonNullSupplier$Type<($List$Type<($Component$Type)>)>): void
public static "addTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $MultiLineTextEntry$Type): void
public static "addTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $NonNullSupplier$Type<($List$Type<($Component$Type)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipItem$Type = ($TooltipItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TooltipItem_ = $TooltipItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$SpeedUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeData, $UpgradeData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeData"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$UpgradeItem, $UpgradeItem$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/$UpgradeItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpeedUpgradeItem extends $UpgradeItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: integer, arg1: $Item$Properties$Type)

public "fillUpgradeData"(arg0: $UpgradeData$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpeedUpgradeItem$Type = ($SpeedUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpeedUpgradeItem_ = $SpeedUpgradeItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/$ATMBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$TallRotatableBlock, $TallRotatableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$TallRotatableBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ATMBlock extends $TallRotatableBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ATMBlock$Type = ($ATMBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ATMBlock_ = $ATMBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/$TraderInterfaceMenu" {
import {$TraderInterfaceTab, $TraderInterfaceTab$Type} from "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/menu/$TraderInterfaceTab"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TraderInterfaceBlockEntity, $TraderInterfaceBlockEntity$Type} from "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/blockentity/$TraderInterfaceBlockEntity"
import {$TraderInterfaceBlockEntity$ActiveMode, $TraderInterfaceBlockEntity$ActiveMode$Type} from "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/blockentity/$TraderInterfaceBlockEntity$ActiveMode"
import {$LazyMessageMenu, $LazyMessageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/$LazyMessageMenu"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TraderInterfaceMenu extends $LazyMessageMenu {
static readonly "SLOT_OFFSET": integer
readonly "player": $Player
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_HEADER_END": integer
static readonly "CARRIED_SLOT_SIZE": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "slots": $NonNullList<($Slot)>
 "remoteSlots": $NonNullList<($ItemStack)>
 "containerId": integer

constructor(arg0: integer, arg1: $Inventory$Type, arg2: $TraderInterfaceBlockEntity$Type)

public "HandleMessage"(arg0: $LazyPacketData$Type): void
public "getCurrentTabIndex"(): integer
public "getAllTabs"(): $Map<(integer), ($TraderInterfaceTab)>
public "getCurrentTab"(): $TraderInterfaceTab
public "createTabChangeMessage"(arg0: integer, arg1: $CompoundTag$Type): $CompoundTag
public "removed"(arg0: $Player$Type): void
public "setTab"(arg0: integer, arg1: $TraderInterfaceTab$Type): void
public "quickMoveStack"(arg0: $Player$Type, arg1: integer): $ItemStack
public "changeMode"(arg0: $TraderInterfaceBlockEntity$ActiveMode$Type): void
/**
 * 
 * @deprecated
 */
public "sendMessage"(arg0: $CompoundTag$Type): void
public "changeTab"(arg0: integer): void
public "setOnlineMode"(arg0: boolean): void
public "getTradeContext"(): $TradeContext
public "getBE"(): $TraderInterfaceBlockEntity
get "currentTabIndex"(): integer
get "allTabs"(): $Map<(integer), ($TraderInterfaceTab)>
get "currentTab"(): $TraderInterfaceTab
set "onlineMode"(value: boolean)
get "tradeContext"(): $TradeContext
get "bE"(): $TraderInterfaceBlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderInterfaceMenu$Type = ($TraderInterfaceMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderInterfaceMenu_ = $TraderInterfaceMenu$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$CashRegisterItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CashRegisterItem extends $BlockItem {
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
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
export type $CashRegisterItem$Type = ($CashRegisterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CashRegisterItem_ = $CashRegisterItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/taxes/reference/$TaxableReference" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ITaxable, $ITaxable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/taxes/$ITaxable"
import {$TaxReferenceType, $TaxReferenceType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/taxes/reference/$TaxReferenceType"

export class $TaxableReference {
readonly "type": $TaxReferenceType


public "getTaxable"(arg0: boolean): $ITaxable
public "equals"(arg0: any): boolean
public static "load"(arg0: $CompoundTag$Type): $TaxableReference
public "save"(): $CompoundTag
public "stillValid"(arg0: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaxableReference$Type = ($TaxableReference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaxableReference_ = $TaxableReference$Type;
}}
declare module "packages/io/github/mortuusars/salt/world/feature/$MineralDepositFeature" {
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$MineralDepositConfiguration, $MineralDepositConfiguration$Type} from "packages/io/github/mortuusars/salt/world/feature/configurations/$MineralDepositConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $MineralDepositFeature extends $Feature<($MineralDepositConfiguration)> {
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>

constructor(arg0: $Codec$Type<($MineralDepositConfiguration$Type)>)

public "place"(arg0: $FeaturePlaceContext$Type<($MineralDepositConfiguration$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MineralDepositFeature$Type = ($MineralDepositFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MineralDepositFeature_ = $MineralDepositFeature$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/crafting/$CoinMintRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$CoinMintRecipe$MintType, $CoinMintRecipe$MintType$Type} from "packages/io/github/lightman314/lightmanscurrency/common/crafting/$CoinMintRecipe$MintType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $CoinMintRecipe implements $Recipe<($Container)> {
readonly "ingredientCount": integer

constructor(arg0: $ResourceLocation$Type, arg1: $CoinMintRecipe$MintType$Type, arg2: integer, arg3: $Ingredient$Type, arg4: integer, arg5: $ItemStack$Type)

public "getDuration"(): integer
public "isValid"(): boolean
public static "readType"(arg0: string): $CoinMintRecipe$MintType
public "allowed"(): boolean
public "getOutputItem"(): $ItemStack
public "getMintType"(): $CoinMintRecipe$MintType
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredient"(): $Ingredient
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "getInternalDuration"(): integer
public "getToastSymbol"(): $ItemStack
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "getType"(): $ResourceLocation
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "getOrCreateId"(): $ResourceLocation
public "getSchema"(): $RecipeSchema
public "setGroup"(group: string): void
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "getGroup"(): string
public "getMod"(): string
get "duration"(): integer
get "valid"(): boolean
get "outputItem"(): $ItemStack
get "mintType"(): $CoinMintRecipe$MintType
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "ingredient"(): $Ingredient
get "internalDuration"(): integer
get "toastSymbol"(): $ItemStack
get "ingredients"(): $NonNullList<($Ingredient)>
get "incomplete"(): boolean
get "special"(): boolean
get "type"(): $ResourceLocation
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
set "group"(value: string)
get "group"(): string
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoinMintRecipe$Type = ($CoinMintRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoinMintRecipe_ = $CoinMintRecipe$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/$TraderStorageScreen" {
import {$TraderStorageMenu, $TraderStorageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/$TraderStorageMenu"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$EasyMenuScreen, $EasyMenuScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$EasyMenuScreen"
import {$LazyWidgetPositioner, $LazyWidgetPositioner$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/util/$LazyWidgetPositioner"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"
import {$AbstractContainerScreen, $AbstractContainerScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$TraderStorageClientTab, $TraderStorageClientTab$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$TraderStorageClientTab"
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"
import {$ITraderStorageScreen, $ITraderStorageScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageScreen"

export class $TraderStorageScreen extends $EasyMenuScreen<($TraderStorageMenu)> implements $ITraderStorageScreen {
readonly "leftEdgePositioner": $LazyWidgetPositioner
static readonly "INVENTORY_LOCATION": $ResourceLocation
static readonly "SLOT_ITEM_BLIT_OFFSET": integer
 "imageWidth": integer
 "imageHeight": integer
 "hoveredSlot": $Slot
 "clickedSlot": $Slot
 "snapbackEnd": $Slot
 "leftPos": integer
 "topPos": integer
 "isSplittingStack": boolean
 "draggingItem": $ItemStack
 "snapbackStartX": integer
 "snapbackStartY": integer
 "snapbackTime": long
 "snapbackItem": $ItemStack
 "quickCraftingType": integer
 "quickCraftingRemainder": integer
static "BACKGROUND_LOCATION": $ResourceLocation
 "title": $Component
readonly "children": $List<($GuiEventListener)>
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font

constructor(arg0: $TraderStorageMenu$Type, arg1: $Inventory$Type, arg2: $Component$Type)

public "initialize"(arg0: $ScreenArea$Type): void
public "serverMessage"(arg0: $LazyPacketData$Type): void
public "selfMessage"(arg0: $LazyPacketData$Builder$Type): void
public "currentTab"(): $TraderStorageClientTab<(any)>
public "blockInventoryClosing"(): boolean
public "screenTick"(): void
public "changeTab"(arg0: integer, arg1: boolean, arg2: $LazyPacketData$Builder$Type): void
public "changeTab"(arg0: integer): void
public static "draw"(arg0: $AbstractContainerScreen$Type<(any)>, arg1: $GuiGraphics$Type, arg2: $List$Type<($Component$Type)>, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderStorageScreen$Type = ($TraderStorageScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderStorageScreen_ = $TraderStorageScreen$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$TraderStorageTab" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ITraderStorageMenu, $ITraderStorageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageMenu"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $TraderStorageTab {
static readonly "TAB_TRADE_BASIC": integer
static readonly "TAB_TRADE_STORAGE": integer
static readonly "TAB_TRADE_ADVANCED": integer
static readonly "TAB_TRADE_MISC": integer
static readonly "TAB_TRADER_LOGS": integer
static readonly "TAB_TRADER_SETTINGS": integer
static readonly "TAB_TRADER_STATS": integer
static readonly "TAB_TAX_INFO": integer
static readonly "TAB_RULES_TRADER": integer
static readonly "TAB_RULES_TRADE": integer
readonly "menu": $ITraderStorageMenu


public "addStorageMenuSlots"(arg0: $Function$Type<($Slot$Type), ($Slot$Type)>): void
public "canOpen"(arg0: $Player$Type): boolean
public "onTabClose"(): void
public "onMenuClose"(): void
public "onTabOpen"(): void
public "createClientTab"(arg0: any): any
public "quickMoveStack"(arg0: $ItemStack$Type): boolean
public "receiveMessage"(arg0: $LazyPacketData$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderStorageTab$Type = ($TraderStorageTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderStorageTab_ = $TraderStorageTab$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$WidgetAddon" {
import {$EasyWidget, $EasyWidget$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/easy/$EasyWidget"

export class $WidgetAddon {

constructor()

public "visibleTick"(): void
public "activeTick"(): void
public "attach"(arg0: $EasyWidget$Type): void
public "renderTick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetAddon$Type = ($WidgetAddon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetAddon_ = $WidgetAddon$Type;
}}
declare module "packages/io/github/mortuusars/chalk/items/$ChalkItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IDrawingTool, $IDrawingTool$Type} from "packages/io/github/mortuusars/chalk/core/$IDrawingTool"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MarkDrawingContext, $MarkDrawingContext$Type} from "packages/io/github/mortuusars/chalk/utils/$MarkDrawingContext"
import {$Mark, $Mark$Type} from "packages/io/github/mortuusars/chalk/core/$Mark"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$MarkSymbol, $MarkSymbol$Type} from "packages/io/github/mortuusars/chalk/core/$MarkSymbol"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChalkItem extends $Item implements $IDrawingTool {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $DyeColor$Type, arg1: $Item$Properties$Type)

public "getColor"(): $DyeColor
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isRepairable"(arg0: $ItemStack$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "getMarkColorValue"(arg0: $ItemStack$Type): integer
public "getGlowing"(arg0: $ItemStack$Type): boolean
public "getMark"(arg0: $ItemStack$Type, arg1: $MarkDrawingContext$Type, arg2: $MarkSymbol$Type): $Mark
public "getMarkColor"(arg0: $ItemStack$Type): $Optional<($DyeColor)>
public static "damageAndDestroy"(arg0: $ItemStack$Type, arg1: $Player$Type): $ItemStack
public "onMarkDrawn"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "drawMark"(arg0: $MarkDrawingContext$Type, arg1: $Mark$Type): boolean
public "createDrawingContext"(arg0: $UseOnContext$Type): $MarkDrawingContext
public "createDrawingContext"(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $Vec3$Type, arg3: $Direction$Type, arg4: $InteractionHand$Type): $MarkDrawingContext
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChalkItem$Type = ($ChalkItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChalkItem_ = $ChalkItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IWideBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IWideBlock {

 "getIsLeft"(arg0: $BlockState$Type): boolean
 "getIsRight"(arg0: $BlockState$Type): boolean
 "getOtherSide"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $Direction$Type): $BlockPos
}

export namespace $IWideBlock {
const ISLEFT: $BooleanProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWideBlock$Type = ($IWideBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWideBlock_ = $IWideBlock$Type;
}}
declare module "packages/io/github/mortuusars/sootychimneys/core/$Smoke" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"

export class $Smoke {

constructor(arg0: $Vector3f$Type, arg1: $Vector3f$Type)
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float)

public "setSpeed"(arg0: float): $Smoke
public "getIntensity"(): float
public "getParticleOrigin"(): $Vector3f
public "getParticleSpread"(): $Vector3f
public "getSpeed"(): float
public "setIntensity"(arg0: float): $Smoke
set "speed"(value: float)
get "intensity"(): float
get "particleOrigin"(): $Vector3f
get "particleSpread"(): $Vector3f
get "speed"(): float
set "intensity"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Smoke$Type = ($Smoke);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Smoke_ = $Smoke$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/taxes/$ITaxCollector" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$ITaxable, $ITaxable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/taxes/$ITaxable"
import {$OwnerData, $OwnerData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$OwnerData"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$WorldArea, $WorldArea$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/world/$WorldArea"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $ITaxCollector extends $IClientTracker {

 "getOwner"(): $OwnerData
 "getName"(): $MutableComponent
 "canAccess"(arg0: $Player$Type): boolean
 "getID"(): long
 "isServerEntry"(): boolean
 "AcceptTaxable"(arg0: $ITaxable$Type): void
 "ShouldTax"(arg0: $ITaxable$Type): boolean
 "IsInArea"(arg0: $ITaxable$Type): boolean
 "TaxableWasRemoved"(arg0: $ITaxable$Type): void
 "getTaxRate"(): integer
 "CalculateAndPayTaxes"(arg0: $ITaxable$Type, arg1: $MoneyValue$Type): $MoneyValue
 "getArea"(): $WorldArea
 "isClient"(): boolean
 "isServer"(): boolean
}

export namespace $ITaxCollector {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITaxCollector$Type = ($ITaxCollector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITaxCollector_ = $ITaxCollector$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/notifications/$Notification" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$NotificationCategory, $NotificationCategory$Type} from "packages/io/github/lightman314/lightmanscurrency/api/notifications/$NotificationCategory"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $Notification implements $IClientTracker {


public "load"(arg0: $CompoundTag$Type): void
public "getMessage"(): $MutableComponent
public "save"(): $CompoundTag
public "getCount"(): integer
public "getCategory"(): $NotificationCategory
public "getTimeStamp"(): long
public "wasSeen"(): boolean
public "getGeneralMessage"(): $MutableComponent
public "hasTimeStamp"(): boolean
public "isClient"(): boolean
public "flagAsClient"(): void
public "onNewNotification"(arg0: $Notification$Type): boolean
public "setSeen"(): void
public "getTimeStampMessage"(): $Component
public "isServer"(): boolean
public "getChatMessage"(): $MutableComponent
get "message"(): $MutableComponent
get "count"(): integer
get "category"(): $NotificationCategory
get "timeStamp"(): long
get "generalMessage"(): $MutableComponent
get "client"(): boolean
get "timeStampMessage"(): $Component
get "server"(): boolean
get "chatMessage"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Notification$Type = ($Notification);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Notification_ = $Notification$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$WalletItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WalletItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: integer, arg1: integer, arg2: string, arg3: $Item$Properties$Type)

public static "isEmpty"(arg0: $ItemStack$Type): boolean
public static "getAutoExchange"(arg0: $ItemStack$Type): boolean
public static "CanPickup"(arg0: $WalletItem$Type): boolean
public static "validWalletStack"(arg0: $ItemStack$Type): boolean
public static "HasBankAccess"(arg0: $WalletItem$Type): boolean
public static "CanExchange"(arg0: $WalletItem$Type): boolean
public static "InventorySize"(arg0: $ItemStack$Type): integer
public static "InventorySize"(arg0: $WalletItem$Type): integer
public static "toggleAutoExchange"(arg0: $ItemStack$Type): void
public static "QuickCollect"(arg0: $Player$Type, arg1: $Container$Type, arg2: boolean): void
public static "getWalletInventory"(arg0: $ItemStack$Type): $SimpleContainer
public "getModelTexture"(): $ResourceLocation
public static "putWalletInventory"(arg0: $ItemStack$Type, arg1: $Container$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public static "PickupCoin"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ItemStack
public static "isWallet"(arg0: $ItemStack$Type): boolean
public static "isWallet"(arg0: $Item$Type): boolean
public "getEnchantmentValue"(arg0: $ItemStack$Type): integer
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
get "modelTexture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WalletItem$Type = ($WalletItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WalletItem_ = $WalletItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/comparison/$TradeComparisonResult" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ProductComparisonResult, $ProductComparisonResult$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/comparison/$ProductComparisonResult"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"

export class $TradeComparisonResult {

constructor()

public "isCompatible"(): boolean
public "getProductResultCount"(): integer
public "setCompatible"(): void
public "addProductResults"(arg0: $Collection$Type<(any)>): void
public "setTypeResult"(arg0: boolean): void
public "comparePrices"(arg0: $MoneyValue$Type, arg1: $MoneyValue$Type): void
public "getProductResult"(arg0: integer): $ProductComparisonResult
public "priceDifference"(): $MoneyValue
public "TypeMatches"(): boolean
public "isPriceCheaper"(): boolean
public "PriceIncompatible"(): boolean
public "PriceMatches"(): boolean
public "isPriceExpensive"(): boolean
public "ProductMatches"(): boolean
public "Identical"(): boolean
public "addProductResult"(arg0: boolean, arg1: boolean, arg2: integer): void
public "addProductResult"(arg0: $ProductComparisonResult$Type): void
get "compatible"(): boolean
get "productResultCount"(): integer
set "typeResult"(value: boolean)
get "priceCheaper"(): boolean
get "priceExpensive"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeComparisonResult$Type = ($TradeComparisonResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeComparisonResult_ = $TradeComparisonResult$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/taxes/reference/$TaxReferenceType" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TaxableReference, $TaxableReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/taxes/reference/$TaxableReference"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $TaxReferenceType {
readonly "typeID": $ResourceLocation


public "load"(arg0: $CompoundTag$Type): $TaxableReference
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaxReferenceType$Type = ($TaxReferenceType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaxReferenceType_ = $TaxReferenceType$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyStorage" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IMoneyHolder, $IMoneyHolder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$IMoneyHolder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MoneyHolder, $MoneyHolder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$MoneyHolder"
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"

export class $MoneyStorage extends $MoneyHolder {
static readonly "EMPTY": $IMoneyHolder

constructor(arg0: $Runnable$Type)
constructor(arg0: $Runnable$Type, arg1: integer)

public "priority"(): integer
public "load"(arg0: $ListTag$Type): void
public "valueOf"(arg0: string): $MoneyValue
public "clear"(): void
public "isEmpty"(): boolean
public "containsValue"(arg0: $MoneyValue$Type): boolean
public "save"(): $ListTag
public "addValue"(arg0: $MoneyValue$Type): void
public "removeValue"(arg0: $MoneyValue$Type): void
public "safeLoad"(arg0: $CompoundTag$Type, arg1: string): void
public "isMoneyTypeValid"(arg0: $MoneyValue$Type): boolean
public "insertMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
public "getTooltipTitle"(): $Component
public "hasStoredMoneyChanged"(): boolean
public "allValues"(): $List<($MoneyValue)>
public "GiveToPlayer"(arg0: $Player$Type): void
public "extractMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
public "capValue"(arg0: $MoneyValue$Type): $MoneyValue
public "getRandomValueText"(arg0: string): $Component
public "getRandomValueText"(): $Component
public "getRandomValueText"(arg0: $Component$Type): $Component
public "addValues"(arg0: $Collection$Type<($MoneyValue$Type)>): void
public "getAllValueText"(): $Component
public static "sortPayFirst"(arg0: $List$Type<($IMoneyHolder$Type)>): void
public static "sortTakeFirst"(arg0: $List$Type<($IMoneyHolder$Type)>): void
public static "defaultTooltipFormat"(arg0: $List$Type<($Component$Type)>, arg1: $Component$Type, arg2: $MoneyView$Type): void
get "empty"(): boolean
get "tooltipTitle"(): $Component
get "randomValueText"(): $Component
get "allValueText"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoneyStorage$Type = ($MoneyStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoneyStorage_ = $MoneyStorage$Type;
}}
declare module "packages/io/github/mortuusars/wares/block/$DeliveryTableBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$AgreementType, $AgreementType$Type} from "packages/io/github/mortuusars/wares/data/agreement/$AgreementType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $DeliveryTableBlock extends $BaseEntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "AGREEMENT": $EnumProperty<($AgreementType)>
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeliveryTableBlock$Type = ($DeliveryTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeliveryTableBlock_ = $DeliveryTableBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/$RotationHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $RotationHandler {
static readonly "SPINNING": string
static readonly "FACING": string
static readonly "FACING_UP": string

constructor()

public static "debugRegisteredHandlers"(): void
public static "registerRotationHandler"(arg0: string, arg1: $RotationHandler$Type): void
public static "getRotationHandler"(arg0: string): $RotationHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotationHandler$Type = ($RotationHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotationHandler_ = $RotationHandler$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockTallWideRotatable" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$IWideBlock, $IWideBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IWideBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TraderBlockTallRotatable, $TraderBlockTallRotatable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockTallRotatable"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $TraderBlockTallWideRotatable extends $TraderBlockTallRotatable implements $IWideBlock {
static readonly "FACING": $DirectionProperty
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


public "getBlockEntity"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getIsLeft"(arg0: $BlockState$Type): boolean
public "getIsRight"(arg0: $BlockState$Type): boolean
public "getOtherSide"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderBlockTallWideRotatable$Type = ($TraderBlockTallWideRotatable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderBlockTallWideRotatable_ = $TraderBlockTallWideRotatable$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DisplayEntry, $DisplayEntry$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/trade/$DisplayEntry"
import {$CurrencyType, $CurrencyType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/types/$CurrencyType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$OwnerData, $OwnerData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$OwnerData"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"

export class $MoneyValue {

constructor()

public "equals"(arg0: any): boolean
public static "load"(arg0: $CompoundTag$Type): $MoneyValue
public static "decode"(arg0: $FriendlyByteBuf$Type): $MoneyValue
public "encode"(arg0: $FriendlyByteBuf$Type): void
public "isEmpty"(): boolean
public static "empty"(): $MoneyValue
public "containsValue"(arg0: $MoneyValue$Type): boolean
public "save"(): $CompoundTag
public "isInvalid"(): boolean
public static "free"(): $MoneyValue
public "getString"(): string
public "getString"(arg0: string): string
public "getCurrency"(): $CurrencyType
public "getText"(arg0: string): $MutableComponent
public "getText"(arg0: $MutableComponent$Type): $MutableComponent
public "getText"(): $MutableComponent
public "toJson"(): $JsonObject
public "addValue"(arg0: $MoneyValue$Type): $MoneyValue
public "subtractValue"(arg0: $MoneyValue$Type): $MoneyValue
public "isValidPrice"(): boolean
public "isFree"(): boolean
public "percentageOfValue"(arg0: integer): $MoneyValue
public "percentageOfValue"(arg0: integer, arg1: boolean): $MoneyValue
public "getSmallestValue"(): $MoneyValue
public "multiplyValue"(arg0: double): $MoneyValue
public static "safeLoad"(arg0: $CompoundTag$Type, arg1: string): $MoneyValue
public static "loadFromJson"(arg0: $JsonElement$Type): $MoneyValue
public static "loadFromJson"(arg0: $JsonObject$Type): $MoneyValue
public "getDisplayEntry"(arg0: $List$Type<($Component$Type)>, arg1: boolean): $DisplayEntry
public "sameType"(arg0: $MoneyValue$Type): boolean
public "getUniqueName"(): string
public "onBlockBroken"(arg0: $Level$Type, arg1: $OwnerData$Type): $List<($ItemStack)>
public "getCoreValue"(): long
public static "generateCustomUniqueName"(arg0: $ResourceLocation$Type, arg1: string): string
get "invalid"(): boolean
get "string"(): string
get "currency"(): $CurrencyType
get "text"(): $MutableComponent
get "validPrice"(): boolean
get "smallestValue"(): $MoneyValue
get "uniqueName"(): string
get "coreValue"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoneyValue$Type = ($MoneyValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoneyValue_ = $MoneyValue$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$PortableTerminalItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$TooltipItem, $TooltipItem$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/$TooltipItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PortableTerminalItem extends $TooltipItem {
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

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableTerminalItem$Type = ($PortableTerminalItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortableTerminalItem_ = $PortableTerminalItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockBase" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$EasyBlock, $EasyBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/common/blocks/$EasyBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ITraderBlock, $ITraderBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$ITraderBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IEasyEntityBlock, $IEasyEntityBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IEasyEntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $TraderBlockBase extends $EasyBlock implements $ITraderBlock, $IEasyEntityBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)
constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $VoxelShape$Type)

public "getAllowedTypes"(): $Collection<($BlockEntityType<(any)>)>
public "setPlacedByBase"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getBlockEntity"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type): $BlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canEntityDestroy"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "playerWillDestroyBase"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "canBreak"(arg0: $Player$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public "getDropBlockItem"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getCapabilityBlockEntity"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "allowedTypes"(): $Collection<($BlockEntityType<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderBlockBase$Type = ($TraderBlockBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderBlockBase_ = $TraderBlockBase$Type;
}}
declare module "packages/io/github/mortuusars/wares/item/$DeliveryAgreementItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$DeliveryAgreement, $DeliveryAgreement$Type} from "packages/io/github/mortuusars/wares/data/agreement/$DeliveryAgreement"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$DeliveryAgreementItem$AgreementError, $DeliveryAgreementItem$AgreementError$Type} from "packages/io/github/mortuusars/wares/item/$DeliveryAgreementItem$AgreementError"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $DeliveryAgreementItem extends $Item {
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

public static "convertToExpired"(arg0: $ItemStack$Type): $ItemStack
public static "convertToCompleted"(arg0: $ItemStack$Type): $ItemStack
public "getAgreementFromStack"(arg0: $ItemStack$Type): $Either<($DeliveryAgreement), ($DeliveryAgreementItem$AgreementError)>
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeliveryAgreementItem$Type = ($DeliveryAgreementItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeliveryAgreementItem_ = $DeliveryAgreementItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/slots/easy/$EasySlot" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $EasySlot extends $Slot {
static readonly "EMPTY_SLOT_BG": $ResourceLocation
static readonly "BACKGROUND": $Pair<($ResourceLocation), ($ResourceLocation)>
 "active": boolean
 "locked": boolean
 "container": $Container
 "index": integer
 "x": integer
 "y": integer

constructor(arg0: $Container$Type, arg1: integer, arg2: integer, arg3: integer)

public static "SetInactive"(arg0: $AbstractContainerMenu$Type): void
public static "SetInactive"(arg0: $List$Type<(any)>): void
public static "SetInactive"(arg0: $AbstractContainerMenu$Type, arg1: $Function$Type<($EasySlot$Type), (boolean)>): void
public static "Unlock"(arg0: $AbstractContainerMenu$Type): void
public static "Unlock"(arg0: $AbstractContainerMenu$Type, arg1: $Function$Type<($EasySlot$Type), (boolean)>): void
public static "SetLocked"(arg0: $AbstractContainerMenu$Type, arg1: boolean): void
public static "SetLocked"(arg0: $AbstractContainerMenu$Type, arg1: boolean, arg2: $Function$Type<($EasySlot$Type), (boolean)>): void
public static "Lock"(arg0: $AbstractContainerMenu$Type): void
public static "Lock"(arg0: $AbstractContainerMenu$Type, arg1: $Function$Type<($EasySlot$Type), (boolean)>): void
public "remove"(arg0: integer): $ItemStack
public static "SetActive"(arg0: $List$Type<(any)>, arg1: boolean): void
public static "SetActive"(arg0: $List$Type<(any)>): void
public static "SetActive"(arg0: $AbstractContainerMenu$Type): void
public static "SetActive"(arg0: $AbstractContainerMenu$Type, arg1: $Function$Type<($EasySlot$Type), (boolean)>): void
public "isActive"(): boolean
public "mayPlace"(arg0: $ItemStack$Type): boolean
public "mayPickup"(arg0: $Player$Type): boolean
get "active"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasySlot$Type = ($EasySlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasySlot_ = $EasySlot$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$FilmRollItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IFilmItem, $IFilmItem$Type} from "packages/io/github/mortuusars/exposure/item/$IFilmItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FilmType, $FilmType$Type} from "packages/io/github/mortuusars/exposure/camera/infrastructure/$FilmType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FilmRollItem extends $Item implements $IFilmItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(filmType: $FilmType$Type, barColor: integer, properties: $Item$Properties$Type)

public "getType"(): $FilmType
public "isBarVisible"(stack: $ItemStack$Type): boolean
public "getBarColor"(stack: $ItemStack$Type): integer
public "getBarWidth"(stack: $ItemStack$Type): integer
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "canAddFrame"(filmStack: $ItemStack$Type): boolean
public "addFrame"(filmStack: $ItemStack$Type, frame: $CompoundTag$Type): void
public "getDefaultFrameSize"(): integer
public "getDefaultMaxFrameCount"(filmStack: $ItemStack$Type): integer
public "getExposedFramesCount"(stack: $ItemStack$Type): integer
public "getMaxFrameCount"(filmStack: $ItemStack$Type): integer
public "getFrameSize"(filmStack: $ItemStack$Type): integer
public "hasExposedFrame"(filmStack: $ItemStack$Type, index: integer): boolean
public "getExposedFrames"(filmStack: $ItemStack$Type): $ListTag
get "type"(): $FilmType
get "defaultFrameSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilmRollItem$Type = ($FilmRollItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilmRollItem_ = $FilmRollItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/$ItemPositionData$PositionEntry" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$RotationHandler, $RotationHandler$Type} from "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/$RotationHandler"

export class $ItemPositionData$PositionEntry extends $Record {

constructor(position: $Vector3f$Type, extraCount: integer, extraOffset: $Vector3f$Type, scale: float, rotationHandler: $RotationHandler$Type)

public "extraOffset"(): $Vector3f
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "scale"(): float
public "position"(): $Vector3f
public "extraCount"(): integer
public "rotationHandler"(): $RotationHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPositionData$PositionEntry$Type = ($ItemPositionData$PositionEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPositionData$PositionEntry_ = $ItemPositionData$PositionEntry$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/loot/glm/$CoinsInChestsModifier$Serializer" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$MapCodec, $MapCodec$Type} from "packages/com/mojang/serialization/$MapCodec"
import {$UnboundedMapCodec, $UnboundedMapCodec$Type} from "packages/com/mojang/serialization/codecs/$UnboundedMapCodec"
import {$MapEncoder, $MapEncoder$Type} from "packages/com/mojang/serialization/$MapEncoder"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$Encoder, $Encoder$Type} from "packages/com/mojang/serialization/$Encoder"
import {$CoinsInChestsModifier, $CoinsInChestsModifier$Type} from "packages/io/github/lightman314/lightmanscurrency/common/loot/glm/$CoinsInChestsModifier"
import {$Codec$ResultFunction, $Codec$ResultFunction$Type} from "packages/com/mojang/serialization/$Codec$ResultFunction"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Decoder, $Decoder$Type} from "packages/com/mojang/serialization/$Decoder"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Lifecycle, $Lifecycle$Type} from "packages/com/mojang/serialization/$Lifecycle"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Decoder$Boxed, $Decoder$Boxed$Type} from "packages/com/mojang/serialization/$Decoder$Boxed"
import {$MapDecoder, $MapDecoder$Type} from "packages/com/mojang/serialization/$MapDecoder"
import {$Dynamic, $Dynamic$Type} from "packages/com/mojang/serialization/$Dynamic"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$Decoder$Simple, $Decoder$Simple$Type} from "packages/com/mojang/serialization/$Decoder$Simple"
import {$SimpleMapCodec, $SimpleMapCodec$Type} from "packages/com/mojang/serialization/codecs/$SimpleMapCodec"
import {$Decoder$Terminal, $Decoder$Terminal$Type} from "packages/com/mojang/serialization/$Decoder$Terminal"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"

export class $CoinsInChestsModifier$Serializer implements $Codec<($CoinsInChestsModifier)> {

constructor()

public "decode"<T>(arg0: $DynamicOps$Type<(T)>, arg1: T): $DataResult<($Pair<($CoinsInChestsModifier), (T)>)>
public "encode"<T>(arg0: $CoinsInChestsModifier$Type, arg1: $DynamicOps$Type<(T)>, arg2: T): $DataResult<(T)>
public static "unit"<A>(arg0: $Supplier$Type<($CoinsInChestsModifier$Type)>): $Codec<($CoinsInChestsModifier)>
public static "unit"<A>(arg0: $CoinsInChestsModifier$Type): $Codec<($CoinsInChestsModifier)>
public "dispatch"<E>(arg0: string, arg1: $Function$Type<(any), (any)>, arg2: $Function$Type<(any), (any)>): $Codec<(E)>
public "dispatch"<E>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(E)>
public static "of"<A>(arg0: $Encoder$Type<($CoinsInChestsModifier$Type)>, arg1: $Decoder$Type<($CoinsInChestsModifier$Type)>): $Codec<($CoinsInChestsModifier)>
public static "of"<A>(arg0: $MapEncoder$Type<($CoinsInChestsModifier$Type)>, arg1: $MapDecoder$Type<($CoinsInChestsModifier$Type)>, arg2: $Supplier$Type<(string)>): $MapCodec<($CoinsInChestsModifier)>
public static "of"<A>(arg0: $MapEncoder$Type<($CoinsInChestsModifier$Type)>, arg1: $MapDecoder$Type<($CoinsInChestsModifier$Type)>): $MapCodec<($CoinsInChestsModifier)>
public static "of"<A>(arg0: $Encoder$Type<($CoinsInChestsModifier$Type)>, arg1: $Decoder$Type<($CoinsInChestsModifier$Type)>, arg2: string): $Codec<($CoinsInChestsModifier)>
public static "list"<E>(arg0: $Codec$Type<(E)>): $Codec<($List<(E)>)>
public "orElse"(arg0: $CoinsInChestsModifier$Type): $Codec<($CoinsInChestsModifier)>
public "orElse"(arg0: $UnaryOperator$Type<(string)>, arg1: $CoinsInChestsModifier$Type): $Codec<($CoinsInChestsModifier)>
public "orElse"(arg0: $Consumer$Type<(string)>, arg1: $CoinsInChestsModifier$Type): $Codec<($CoinsInChestsModifier)>
public static "checkRange"<N extends (number) & ($Comparable<(N)>)>(arg0: N, arg1: N): $Function<(N), ($DataResult<(N)>)>
public static "pair"<F, S>(arg0: $Codec$Type<(F)>, arg1: $Codec$Type<(S)>): $Codec<($Pair<(F), (S)>)>
public "orElseGet"(arg0: $Supplier$Type<(any)>): $Codec<($CoinsInChestsModifier)>
public "orElseGet"(arg0: $Consumer$Type<(string)>, arg1: $Supplier$Type<(any)>): $Codec<($CoinsInChestsModifier)>
public "orElseGet"(arg0: $UnaryOperator$Type<(string)>, arg1: $Supplier$Type<(any)>): $Codec<($CoinsInChestsModifier)>
public "partialDispatch"<E>(arg0: string, arg1: $Function$Type<(any), (any)>, arg2: $Function$Type<(any), (any)>): $Codec<(E)>
public "stable"(): $Codec<($CoinsInChestsModifier)>
public "flatXmap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(S)>
public "optionalFieldOf"(arg0: string, arg1: $CoinsInChestsModifier$Type, arg2: $Lifecycle$Type): $MapCodec<($CoinsInChestsModifier)>
public "optionalFieldOf"(arg0: string, arg1: $Lifecycle$Type, arg2: $CoinsInChestsModifier$Type, arg3: $Lifecycle$Type): $MapCodec<($CoinsInChestsModifier)>
public "optionalFieldOf"(arg0: string, arg1: $CoinsInChestsModifier$Type): $MapCodec<($CoinsInChestsModifier)>
public "optionalFieldOf"(arg0: string): $MapCodec<($Optional<($CoinsInChestsModifier)>)>
public static "optionalField"<F>(arg0: string, arg1: $Codec$Type<(F)>): $MapCodec<($Optional<(F)>)>
public "mapResult"(arg0: $Codec$ResultFunction$Type<($CoinsInChestsModifier$Type)>): $Codec<($CoinsInChestsModifier)>
public "xmap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(S)>
public "withLifecycle"(arg0: $Lifecycle$Type): $Codec<($CoinsInChestsModifier)>
public "deprecated"(arg0: integer): $Codec<($CoinsInChestsModifier)>
public "dispatchMap"<E>(arg0: string, arg1: $Function$Type<(any), (any)>, arg2: $Function$Type<(any), (any)>): $MapCodec<(E)>
public "dispatchMap"<E>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $MapCodec<(E)>
public "comapFlatMap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(S)>
public static "either"<F, S>(arg0: $Codec$Type<(F)>, arg1: $Codec$Type<(S)>): $Codec<($Either<(F), (S)>)>
public static "mapEither"<F, S>(arg0: $MapCodec$Type<(F)>, arg1: $MapCodec$Type<(S)>): $MapCodec<($Either<(F), (S)>)>
public static "simpleMap"<K, V>(arg0: $Codec$Type<(K)>, arg1: $Codec$Type<(V)>, arg2: $Keyable$Type): $SimpleMapCodec<(K), (V)>
public static "compoundList"<K, V>(arg0: $Codec$Type<(K)>, arg1: $Codec$Type<(V)>): $Codec<($List<($Pair<(K), (V)>)>)>
public static "unboundedMap"<K, V>(arg0: $Codec$Type<(K)>, arg1: $Codec$Type<(V)>): $UnboundedMapCodec<(K), (V)>
public "flatComapMap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(S)>
public static "mapPair"<F, S>(arg0: $MapCodec$Type<(F)>, arg1: $MapCodec$Type<(S)>): $MapCodec<($Pair<(F), (S)>)>
public static "floatRange"(arg0: float, arg1: float): $Codec<(float)>
public static "intRange"(arg0: integer, arg1: integer): $Codec<(integer)>
public static "doubleRange"(arg0: double, arg1: double): $Codec<(double)>
public "dispatchStable"<E>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(E)>
public "listOf"(): $Codec<($List<($CoinsInChestsModifier)>)>
public static "empty"<A>(): $MapEncoder<($CoinsInChestsModifier)>
public static "error"<A>(arg0: string): $Encoder<($CoinsInChestsModifier)>
public "comap"<B>(arg0: $Function$Type<(any), (any)>): $Encoder<(B)>
public "flatComap"<B>(arg0: $Function$Type<(any), (any)>): $Encoder<(B)>
public "encodeStart"<T>(arg0: $DynamicOps$Type<(T)>, arg1: $CoinsInChestsModifier$Type): $DataResult<(T)>
public "decode"<T>(arg0: $Dynamic$Type<(T)>): $DataResult<($Pair<($CoinsInChestsModifier), (T)>)>
public "map"<B>(arg0: $Function$Type<(any), (any)>): $Decoder<(B)>
public "flatMap"<B>(arg0: $Function$Type<(any), (any)>): $Decoder<(B)>
public "parse"<T>(arg0: $DynamicOps$Type<(T)>, arg1: T): $DataResult<($CoinsInChestsModifier)>
public "parse"<T>(arg0: $Dynamic$Type<(T)>): $DataResult<($CoinsInChestsModifier)>
public "boxed"(): $Decoder$Boxed<($CoinsInChestsModifier)>
public "terminal"(): $Decoder$Terminal<($CoinsInChestsModifier)>
public static "ofBoxed"<A>(arg0: $Decoder$Boxed$Type<(any)>): $Decoder<($CoinsInChestsModifier)>
public "simple"(): $Decoder$Simple<($CoinsInChestsModifier)>
public static "ofTerminal"<A>(arg0: $Decoder$Terminal$Type<(any)>): $Decoder<($CoinsInChestsModifier)>
public static "ofSimple"<A>(arg0: $Decoder$Simple$Type<(any)>): $Decoder<($CoinsInChestsModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoinsInChestsModifier$Serializer$Type = ($CoinsInChestsModifier$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoinsInChestsModifier$Serializer_ = $CoinsInChestsModifier$Serializer$Type;
}}
declare module "packages/io/github/mortuusars/wares/data/agreement/component/$RequestedItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$CompoundTagCompareBehavior, $CompoundTagCompareBehavior$Type} from "packages/io/github/mortuusars/wares/data/agreement/component/$CompoundTagCompareBehavior"

export class $RequestedItem {
static readonly "CODEC": $Codec<($RequestedItem)>
static readonly "EMPTY": $RequestedItem

constructor(arg0: $ItemStack$Type)
constructor(arg0: $Item$Type, arg1: integer)
constructor(arg0: $Either$Type<($TagKey$Type<($Item$Type)>), ($Item$Type)>, arg1: integer, arg2: $CompoundTag$Type, arg3: $CompoundTagCompareBehavior$Type)
constructor(arg0: $Either$Type<($TagKey$Type<($Item$Type)>), ($Item$Type)>, arg1: integer, arg2: $CompoundTag$Type)
constructor(arg0: $TagKey$Type<($Item$Type)>, arg1: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "matches"(arg0: $ItemStack$Type): boolean
public "getTag"(): $CompoundTag
public "getCount"(): integer
public "getStacks"(): $List<($ItemStack)>
public "getTagOrItem"(): $Either<($TagKey<($Item)>), ($Item)>
public "tagMatches"(arg0: $ItemStack$Type): boolean
public "matchesWithCount"(arg0: $ItemStack$Type): boolean
public "getTagCompareBehavior"(): $CompoundTagCompareBehavior
get "empty"(): boolean
get "tag"(): $CompoundTag
get "count"(): integer
get "stacks"(): $List<($ItemStack)>
get "tagOrItem"(): $Either<($TagKey<($Item)>), ($Item)>
get "tagCompareBehavior"(): $CompoundTagCompareBehavior
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RequestedItem$Type = ($RequestedItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RequestedItem_ = $RequestedItem$Type;
}}
declare module "packages/io/github/mortuusars/exposure/integration/kubejs/event/$ModifyFrameDataEventJS" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ModifyFrameDataEventJS extends $PlayerEventJS {

constructor(player: $Player$Type, cameraStack: $ItemStack$Type, frame: $CompoundTag$Type, entitiesInFrame: $List$Type<($Entity$Type)>)

public "getCameraStack"(): $ItemStack
public "getEntitiesInFrame"(): $List<($Entity)>
public "getFrame"(): $CompoundTag
public "getPlayer"(): $Player
get "cameraStack"(): $ItemStack
get "entitiesInFrame"(): $List<($Entity)>
get "frame"(): $CompoundTag
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifyFrameDataEventJS$Type = ($ModifyFrameDataEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifyFrameDataEventJS_ = $ModifyFrameDataEventJS$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/commands/arguments/$TraderArgument$Info" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$TraderArgument$Info$Template, $TraderArgument$Info$Template$Type} from "packages/io/github/lightman314/lightmanscurrency/common/commands/arguments/$TraderArgument$Info$Template"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$TraderArgument, $TraderArgument$Type} from "packages/io/github/lightman314/lightmanscurrency/common/commands/arguments/$TraderArgument"

export class $TraderArgument$Info implements $ArgumentTypeInfo<($TraderArgument), ($TraderArgument$Info$Template)> {

constructor()

public "unpack"(arg0: $TraderArgument$Type): $TraderArgument$Info$Template
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$Type): $TraderArgument$Info$Template
public "serializeToJson"(arg0: $TraderArgument$Info$Template$Type, arg1: $JsonObject$Type): void
public "serializeToNetwork"(arg0: $TraderArgument$Info$Template$Type, arg1: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderArgument$Info$Type = ($TraderArgument$Info);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderArgument$Info_ = $TraderArgument$Info$Type;
}}
declare module "packages/io/github/mortuusars/wares/data/agreement/component/$CompoundTagCompareBehavior" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $CompoundTagCompareBehavior extends $Enum<($CompoundTagCompareBehavior)> implements $StringRepresentable {
static readonly "IGNORE": $CompoundTagCompareBehavior
static readonly "WEAK": $CompoundTagCompareBehavior
static readonly "STRONG": $CompoundTagCompareBehavior


public static "values"(): ($CompoundTagCompareBehavior)[]
public static "valueOf"(arg0: string): $CompoundTagCompareBehavior
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompoundTagCompareBehavior$Type = (("strong") | ("ignore") | ("weak")) | ($CompoundTagCompareBehavior);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompoundTagCompareBehavior_ = $CompoundTagCompareBehavior$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/customer/$ITraderMenu" {
import {$TraderData, $TraderData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITraderSource, $ITraderSource$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$ITraderSource"

export interface $ITraderMenu extends $IClientTracker {

 "getTraderSource"(): $ITraderSource
 "getContext"(arg0: $TraderData$Type): $TradeContext
 "getSlots"(): $List<($Slot)>
 "setHeldItem"(arg0: $ItemStack$Type): void
 "getHeldItem"(): $ItemStack
 "getPlayer"(): $Player
 "isClient"(): boolean
 "isServer"(): boolean
}

export namespace $ITraderMenu {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITraderMenu$Type = ($ITraderMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITraderMenu_ = $ITraderMenu$Type;
}}
