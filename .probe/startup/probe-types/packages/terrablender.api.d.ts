declare module "packages/terrablender/api/$RegionType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RegionType extends $Enum<($RegionType)> {
static readonly "OVERWORLD": $RegionType
static readonly "NETHER": $RegionType


public static "values"(): ($RegionType)[]
public static "valueOf"(arg0: string): $RegionType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionType$Type = (("nether") | ("overworld")) | ($RegionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegionType_ = $RegionType$Type;
}}
