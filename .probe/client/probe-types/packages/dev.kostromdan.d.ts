declare module "packages/dev/kostromdan/mods/netjs/bindings/$NetJSWrapper" {
import {$NetJSICallback, $NetJSICallback$Type} from "packages/dev/kostromdan/mods/netjs/callbacks/$NetJSICallback"
import {$AbstractNetJSTask, $AbstractNetJSTask$Type} from "packages/dev/kostromdan/mods/netjs/tasks/$AbstractNetJSTask"

export interface $NetJSWrapper {

}

export namespace $NetJSWrapper {
function getGists(id: string, c: $NetJSICallback$Type): void
function getGists(id: string, is_async: boolean, c: $NetJSICallback$Type): void
function getPasteBin(id: string, c: $NetJSICallback$Type): void
function getPasteBin(id: string, is_async: boolean, c: $NetJSICallback$Type): void
function getResult(task: $AbstractNetJSTask$Type, id: string, is_async: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetJSWrapper$Type = ($NetJSWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetJSWrapper_ = $NetJSWrapper$Type;
}}
declare module "packages/dev/kostromdan/mods/netjs/tasks/$AbstractNetJSTask" {
import {$NetJSResultMap, $NetJSResultMap$Type} from "packages/dev/kostromdan/mods/netjs/results/$NetJSResultMap"
import {$Exception, $Exception$Type} from "packages/java/lang/$Exception"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$TrustAllCertificates, $TrustAllCertificates$Type} from "packages/dev/kostromdan/mods/netjs/utils/$TrustAllCertificates"

export class $AbstractNetJSTask extends $TrustAllCertificates implements $Runnable {
 "id": string
 "result": $NetJSResultMap<(string), (any)>

constructor(id: string)

public "exception"(err: $Exception$Type): void
public "getException"(): $Exception
public "success"(): void
public "callback"(): void
public "isSuccess"(): boolean
public "run"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractNetJSTask$Type = ($AbstractNetJSTask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractNetJSTask_ = $AbstractNetJSTask$Type;
}}
declare module "packages/dev/kostromdan/mods/netjs/utils/$TrustAllCertificates" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $TrustAllCertificates {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrustAllCertificates$Type = ($TrustAllCertificates);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrustAllCertificates_ = $TrustAllCertificates$Type;
}}
declare module "packages/dev/kostromdan/mods/netjs/results/$NetJSResultMap" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$LinkedHashMap, $LinkedHashMap$Type} from "packages/java/util/$LinkedHashMap"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Exception, $Exception$Type} from "packages/java/lang/$Exception"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $NetJSResultMap<K, V> extends $LinkedHashMap<(K), (V)> {

constructor(task_class: $Class$Type<(any)>)

public "getException"(): $Exception
public "getRaw"(): string
public "isSuccess"(): boolean
public "parseRawToJson"(): $Map<(any), (any)>
public "remove"(arg0: any): V
public "remove"(arg0: any, arg1: any): boolean
public "put"(arg0: K, arg1: V): V
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(K), (V)>
public "isEmpty"(): boolean
public "replace"(arg0: K, arg1: V): V
public "replace"(arg0: K, arg1: V, arg2: V): boolean
public "size"(): integer
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
public "merge"(arg0: K, arg1: V, arg2: $BiFunction$Type<(any), (any), (any)>): V
public "putAll"(arg0: $Map$Type<(any), (any)>): void
public "putIfAbsent"(arg0: K, arg1: V): V
public "compute"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public "containsKey"(arg0: any): boolean
public "computeIfAbsent"(arg0: K, arg1: $Function$Type<(any), (any)>): V
public "computeIfPresent"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(K), (V)>
get "exception"(): $Exception
get "raw"(): string
get "success"(): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetJSResultMap$Type<K, V> = ($NetJSResultMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetJSResultMap_<K, V> = $NetJSResultMap$Type<(K), (V)>;
}}
declare module "packages/dev/kostromdan/mods/netjs/callbacks/$NetJSICallback" {
import {$NetJSResultMap, $NetJSResultMap$Type} from "packages/dev/kostromdan/mods/netjs/results/$NetJSResultMap"

export interface $NetJSICallback {

 "onCallback"(arg0: $NetJSResultMap$Type<(string), (any)>): void

(arg0: $NetJSResultMap$Type<(string), (any)>): void
}

export namespace $NetJSICallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetJSICallback$Type = ($NetJSICallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetJSICallback_ = $NetJSICallback$Type;
}}
