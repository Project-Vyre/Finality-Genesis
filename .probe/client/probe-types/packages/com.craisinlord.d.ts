declare module "packages/com/craisinlord/integrated_api/mixins/world/$WorldGenRegionAccessor" {
import {$StructureManager, $StructureManager$Type} from "packages/net/minecraft/world/level/$StructureManager"

export interface $WorldGenRegionAccessor {

 "getStructureManager"(): $StructureManager

(): $StructureManager
}

export namespace $WorldGenRegionAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldGenRegionAccessor$Type = ($WorldGenRegionAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldGenRegionAccessor_ = $WorldGenRegionAccessor$Type;
}}
declare module "packages/com/craisinlord/integrated_api/mixins/resources/$NamespaceResourceManagerAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$FallbackResourceManager$PackEntry, $FallbackResourceManager$PackEntry$Type} from "packages/net/minecraft/server/packs/resources/$FallbackResourceManager$PackEntry"

export interface $NamespaceResourceManagerAccessor {

 "integratedapi_getFallbacks"(): $List<($FallbackResourceManager$PackEntry)>

(): $List<($FallbackResourceManager$PackEntry)>
}

export namespace $NamespaceResourceManagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NamespaceResourceManagerAccessor$Type = ($NamespaceResourceManagerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NamespaceResourceManagerAccessor_ = $NamespaceResourceManagerAccessor$Type;
}}
declare module "packages/com/craisinlord/integrated_api/mixins/resources/$ReloadableResourceManagerImplAccessor" {
import {$FallbackResourceManager, $FallbackResourceManager$Type} from "packages/net/minecraft/server/packs/resources/$FallbackResourceManager"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ReloadableResourceManagerImplAccessor {

 "integratedapi_getNamespacedManagers"(): $Map<(string), ($FallbackResourceManager)>

(): $Map<(string), ($FallbackResourceManager)>
}

export namespace $ReloadableResourceManagerImplAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReloadableResourceManagerImplAccessor$Type = ($ReloadableResourceManagerImplAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReloadableResourceManagerImplAccessor_ = $ReloadableResourceManagerImplAccessor$Type;
}}
declare module "packages/com/craisinlord/idas/state/$stateCache" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$stateRegion, $stateRegion$Type} from "packages/com/craisinlord/idas/state/$stateRegion"
import {$ConcurrentHashMap, $ConcurrentHashMap$Type} from "packages/java/util/concurrent/$ConcurrentHashMap"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $stateCache {
 "stateRegionMap": $ConcurrentHashMap<(string), ($stateRegion)>

constructor(arg0: $Path$Type)

public "isCleared"(arg0: $BlockPos$Type): boolean
public "setCleared"(arg0: $BlockPos$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $stateCache$Type = ($stateCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $stateCache_ = $stateCache$Type;
}}
declare module "packages/com/craisinlord/integrated_api/mixins/structures/$StructurePoolAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$StructurePoolElement, $StructurePoolElement$Type} from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructurePoolElement"
import {$ObjectArrayList, $ObjectArrayList$Type} from "packages/it/unimi/dsi/fastutil/objects/$ObjectArrayList"

export interface $StructurePoolAccessor {

 "integratedapi_setTemplates"(arg0: $ObjectArrayList$Type<($StructurePoolElement$Type)>): void
 "integratedapi_getRawTemplates"(): $List<($Pair<($StructurePoolElement), (integer)>)>
 "integratedapi_getTemplates"(): $ObjectArrayList<($StructurePoolElement)>
 "integratedapi_setRawTemplates"(arg0: $List$Type<($Pair$Type<($StructurePoolElement$Type), (integer)>)>): void
}

export namespace $StructurePoolAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructurePoolAccessor$Type = ($StructurePoolAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructurePoolAccessor_ = $StructurePoolAccessor$Type;
}}
declare module "packages/com/craisinlord/idas/state/$stateRegion" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $stateRegion {

constructor(arg0: $Path$Type, arg1: string)

public "reset"(): void
public "isCleared"(arg0: $BlockPos$Type): boolean
public "setCleared"(arg0: $BlockPos$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $stateRegion$Type = ($stateRegion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $stateRegion_ = $stateRegion$Type;
}}
declare module "packages/com/craisinlord/integrated_api/mixins/structures/$TemplateAccessor" {
import {$StructureTemplate$Palette, $StructureTemplate$Palette$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$Palette"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $TemplateAccessor {

 "integratedapi_getPalettes"(): $List<($StructureTemplate$Palette)>

(): $List<($StructureTemplate$Palette)>
}

export namespace $TemplateAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemplateAccessor$Type = ($TemplateAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemplateAccessor_ = $TemplateAccessor$Type;
}}
declare module "packages/com/craisinlord/integrated_api/mixins/structures/$StructurePieceAccessor" {
import {$BoundingBox, $BoundingBox$Type} from "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox"

export interface $StructurePieceAccessor {

 "setBoundingBox"(arg0: $BoundingBox$Type): void

(arg0: $BoundingBox$Type): void
}

export namespace $StructurePieceAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructurePieceAccessor$Type = ($StructurePieceAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructurePieceAccessor_ = $StructurePieceAccessor$Type;
}}
declare module "packages/com/craisinlord/integrated_api/mixins/structures/$ListPoolElementAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$StructurePoolElement, $StructurePoolElement$Type} from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructurePoolElement"

export interface $ListPoolElementAccessor {

 "integratedapi_getElements"(): $List<($StructurePoolElement)>

(): $List<($StructurePoolElement)>
}

export namespace $ListPoolElementAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListPoolElementAccessor$Type = ($ListPoolElementAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListPoolElementAccessor_ = $ListPoolElementAccessor$Type;
}}
declare module "packages/com/craisinlord/idas/state/$IStateCacheProvider" {
import {$stateCache, $stateCache$Type} from "packages/com/craisinlord/idas/state/$stateCache"

export interface $IStateCacheProvider {

 "getStateCache"(): $stateCache

(): $stateCache
}

export namespace $IStateCacheProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStateCacheProvider$Type = ($IStateCacheProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStateCacheProvider_ = $IStateCacheProvider$Type;
}}
declare module "packages/com/craisinlord/integrated_api/mixins/resources/$LootContextAccessor" {
import {$LootParams, $LootParams$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams"

export interface $LootContextAccessor {

 "getParams"(): $LootParams

(): $LootParams
}

export namespace $LootContextAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootContextAccessor$Type = ($LootContextAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootContextAccessor_ = $LootContextAccessor$Type;
}}
declare module "packages/com/craisinlord/integrated_api/mixins/structures/$StructureTemplateManagerAccessor" {
import {$ResourceManager, $ResourceManager$Type} from "packages/net/minecraft/server/packs/resources/$ResourceManager"

export interface $StructureTemplateManagerAccessor {

 "integratedapi_getResourceManager"(): $ResourceManager

(): $ResourceManager
}

export namespace $StructureTemplateManagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTemplateManagerAccessor$Type = ($StructureTemplateManagerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureTemplateManagerAccessor_ = $StructureTemplateManagerAccessor$Type;
}}
declare module "packages/com/craisinlord/integrated_api/mixins/entities/$ShulkerEntityInvoker" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export interface $ShulkerEntityInvoker {

 "integratedapi_callSetAttachFace"(arg0: $Direction$Type): void

(arg0: $Direction$Type): void
}

export namespace $ShulkerEntityInvoker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerEntityInvoker$Type = ($ShulkerEntityInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShulkerEntityInvoker_ = $ShulkerEntityInvoker$Type;
}}
declare module "packages/com/craisinlord/integrated_api/mixins/entities/$MerchantOfferAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MerchantOfferAccessor {

 "setMaxUses"(arg0: integer): void

(arg0: integer): void
}

export namespace $MerchantOfferAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MerchantOfferAccessor$Type = ($MerchantOfferAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MerchantOfferAccessor_ = $MerchantOfferAccessor$Type;
}}
declare module "packages/com/craisinlord/integrated_api/mixins/structures/$StructureProcessorAccessor" {
import {$StructureProcessorType, $StructureProcessorType$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureProcessorType"

export interface $StructureProcessorAccessor {

 "callGetType"(): $StructureProcessorType<(any)>

(): $StructureProcessorType<(any)>
}

export namespace $StructureProcessorAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureProcessorAccessor$Type = ($StructureProcessorAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureProcessorAccessor_ = $StructureProcessorAccessor$Type;
}}
declare module "packages/com/craisinlord/integrated_api/mixins/structures/$SinglePoolElementAccessor" {
import {$StructureTemplateManager, $StructureTemplateManager$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplateManager"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$StructureProcessorList, $StructureProcessorList$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureProcessorList"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$StructureTemplate, $StructureTemplate$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate"

export interface $SinglePoolElementAccessor {

 "callGetTemplate"(arg0: $StructureTemplateManager$Type): $StructureTemplate
 "integratedapi_getProcessors"(): $Holder<($StructureProcessorList)>
 "integratedapi_getTemplate"(): $Either<($ResourceLocation), ($StructureTemplate)>
}

export namespace $SinglePoolElementAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SinglePoolElementAccessor$Type = ($SinglePoolElementAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SinglePoolElementAccessor_ = $SinglePoolElementAccessor$Type;
}}
declare module "packages/com/craisinlord/integrated_api/mixins/features/$DungeonFeatureAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DungeonFeatureAccessor {

}

export namespace $DungeonFeatureAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DungeonFeatureAccessor$Type = ($DungeonFeatureAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DungeonFeatureAccessor_ = $DungeonFeatureAccessor$Type;
}}
declare module "packages/com/craisinlord/integrated_api/mixins/items/$MapItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MapItemAccessor {

}

export namespace $MapItemAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapItemAccessor$Type = ($MapItemAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapItemAccessor_ = $MapItemAccessor$Type;
}}
