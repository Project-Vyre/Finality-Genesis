declare module "packages/org/apache/logging/log4j/spi/$StandardLevel" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $StandardLevel extends $Enum<($StandardLevel)> {
static readonly "OFF": $StandardLevel
static readonly "FATAL": $StandardLevel
static readonly "ERROR": $StandardLevel
static readonly "WARN": $StandardLevel
static readonly "INFO": $StandardLevel
static readonly "DEBUG": $StandardLevel
static readonly "TRACE": $StandardLevel
static readonly "ALL": $StandardLevel


public static "values"(): ($StandardLevel)[]
public static "valueOf"(name: string): $StandardLevel
public "intLevel"(): integer
public static "getStandardLevel"(intLevel: integer): $StandardLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StandardLevel$Type = (("all") | ("warn") | ("trace") | ("debug") | ("error") | ("off") | ("fatal") | ("info")) | ($StandardLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StandardLevel_ = $StandardLevel$Type;
}}
declare module "packages/org/apache/maven/artifact/metadata/$ArtifactMetadata" {
import {$ArtifactMetadata as $ArtifactMetadata$0, $ArtifactMetadata$Type as $ArtifactMetadata$0$Type} from "packages/org/apache/maven/repository/legacy/metadata/$ArtifactMetadata"
import {$ArtifactRepository, $ArtifactRepository$Type} from "packages/org/apache/maven/artifact/repository/$ArtifactRepository"

/**
 * 
 * @deprecated
 */
export interface $ArtifactMetadata extends $ArtifactMetadata$0 {

 "merge"(arg0: $ArtifactMetadata$Type): void
 "merge"(arg0: $ArtifactMetadata$0$Type): void
 "getKey"(): any
 "getArtifactId"(): string
 "getGroupId"(): string
 "storedInArtifactVersionDirectory"(): boolean
 "storeInLocalRepository"(arg0: $ArtifactRepository$Type, arg1: $ArtifactRepository$Type): void
 "storedInGroupDirectory"(): boolean
 "getBaseVersion"(): string
 "getLocalFilename"(arg0: $ArtifactRepository$Type): string
 "getRemoteFilename"(): string
 "extendedToString"(): string
}

export namespace $ArtifactMetadata {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactMetadata$Type = ($ArtifactMetadata);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactMetadata_ = $ArtifactMetadata$Type;
}}
declare module "packages/org/apache/logging/log4j/$LogBuilder" {
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$StackTraceElement, $StackTraceElement$Type} from "packages/java/lang/$StackTraceElement"
import {$Marker, $Marker$Type} from "packages/org/apache/logging/log4j/$Marker"
import {$Supplier, $Supplier$Type} from "packages/org/apache/logging/log4j/util/$Supplier"
import {$Message, $Message$Type} from "packages/org/apache/logging/log4j/message/$Message"

export interface $LogBuilder {

 "log"(message: string, p0: any, p1: any, p2: any, p3: any): void
 "log"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "log"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "log"(message: string, p0: any, p1: any, p2: any): void
 "log"(message: string, p0: any, p1: any): void
 "log"(message: string, p0: any): void
 "log"(): void
 "log"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "log"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "log"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "log"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "log"(message: string, ...params: ($Supplier$Type<(any)>)[]): void
 "log"(message: string, ...params: (any)[]): void
 "log"(message: string): void
 "log"(message: charseq): void
 "log"(message: any): void
 "log"(messageSupplier: $Supplier$Type<($Message$Type)>): void
 "log"(message: $Message$Type): void
 "withLocation"(): $LogBuilder
 "withLocation"(location: $StackTraceElement$Type): $LogBuilder
 "withMarker"(marker: $Marker$Type): $LogBuilder
 "withThrowable"(throwable: $Throwable$Type): $LogBuilder
}

export namespace $LogBuilder {
const NOOP: $LogBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogBuilder$Type = ($LogBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LogBuilder_ = $LogBuilder$Type;
}}
declare module "packages/org/apache/logging/log4j/message/$Message" {
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"

export interface $Message extends $Serializable {

 "getParameters"(): (any)[]
 "getFormat"(): string
 "getFormattedMessage"(): string
 "getThrowable"(): $Throwable
}

export namespace $Message {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Message$Type = ($Message);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Message_ = $Message$Type;
}}
declare module "packages/org/apache/logging/log4j/util/$TriConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TriConsumer<K, V, S> {

 "accept"(k: K, v: V, s: S): void

(k: K, v: V, s: S): void
}

export namespace $TriConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriConsumer$Type<K, V, S> = ($TriConsumer<(K), (V), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriConsumer_<K, V, S> = $TriConsumer$Type<(K), (V), (S)>;
}}
declare module "packages/org/apache/maven/artifact/resolver/filter/$ArtifactFilter" {
import {$Artifact, $Artifact$Type} from "packages/org/apache/maven/artifact/$Artifact"

export interface $ArtifactFilter {

 "include"(arg0: $Artifact$Type): boolean

(arg0: $Artifact$Type): boolean
}

export namespace $ArtifactFilter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactFilter$Type = ($ArtifactFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactFilter_ = $ArtifactFilter$Type;
}}
declare module "packages/org/apache/maven/artifact/repository/$Authentication" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Authentication {

constructor(arg0: string, arg1: string)

public "getPrivateKey"(): string
public "setPassword"(arg0: string): void
public "getPassword"(): string
public "getUsername"(): string
public "setUsername"(arg0: string): void
public "setPassphrase"(arg0: string): void
public "getPassphrase"(): string
public "setPrivateKey"(arg0: string): void
get "privateKey"(): string
set "password"(value: string)
get "password"(): string
get "username"(): string
set "username"(value: string)
set "passphrase"(value: string)
get "passphrase"(): string
set "privateKey"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Authentication$Type = ($Authentication);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Authentication_ = $Authentication$Type;
}}
declare module "packages/org/apache/maven/artifact/versioning/$VersionRange" {
import {$ArtifactVersion, $ArtifactVersion$Type} from "packages/org/apache/maven/artifact/versioning/$ArtifactVersion"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Artifact, $Artifact$Type} from "packages/org/apache/maven/artifact/$Artifact"
import {$Restriction, $Restriction$Type} from "packages/org/apache/maven/artifact/versioning/$Restriction"

export class $VersionRange {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "createFromVersionSpec"(arg0: string): $VersionRange
public "getRecommendedVersion"(): $ArtifactVersion
public "isSelectedVersionKnown"(arg0: $Artifact$Type): boolean
/**
 * 
 * @deprecated
 */
public "cloneOf"(): $VersionRange
public "getRestrictions"(): $List<($Restriction)>
public "containsVersion"(arg0: $ArtifactVersion$Type): boolean
public "restrict"(arg0: $VersionRange$Type): $VersionRange
public "hasRestrictions"(): boolean
public "getSelectedVersion"(arg0: $Artifact$Type): $ArtifactVersion
public "matchVersion"(arg0: $List$Type<($ArtifactVersion$Type)>): $ArtifactVersion
public static "createFromVersion"(arg0: string): $VersionRange
get "recommendedVersion"(): $ArtifactVersion
get "restrictions"(): $List<($Restriction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VersionRange$Type = ($VersionRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VersionRange_ = $VersionRange$Type;
}}
declare module "packages/org/apache/logging/log4j/util/$MessageSupplier" {
import {$Message, $Message$Type} from "packages/org/apache/logging/log4j/message/$Message"

export interface $MessageSupplier {

 "get"(): $Message

(): $Message
}

export namespace $MessageSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageSupplier$Type = ($MessageSupplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MessageSupplier_ = $MessageSupplier$Type;
}}
declare module "packages/org/apache/logging/log4j/message/$EntryMessage" {
import {$FlowMessage, $FlowMessage$Type} from "packages/org/apache/logging/log4j/message/$FlowMessage"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$Message, $Message$Type} from "packages/org/apache/logging/log4j/message/$Message"

export interface $EntryMessage extends $FlowMessage {

 "getMessage"(): $Message
 "getText"(): string
 "getParameters"(): (any)[]
 "getFormat"(): string
 "getFormattedMessage"(): string
 "getThrowable"(): $Throwable
}

export namespace $EntryMessage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntryMessage$Type = ($EntryMessage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntryMessage_ = $EntryMessage$Type;
}}
declare module "packages/org/apache/maven/artifact/repository/$ArtifactRepository" {
import {$ArtifactMetadata, $ArtifactMetadata$Type} from "packages/org/apache/maven/artifact/metadata/$ArtifactMetadata"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArtifactRepositoryPolicy, $ArtifactRepositoryPolicy$Type} from "packages/org/apache/maven/artifact/repository/$ArtifactRepositoryPolicy"
import {$Artifact, $Artifact$Type} from "packages/org/apache/maven/artifact/$Artifact"
import {$ArtifactRepositoryLayout, $ArtifactRepositoryLayout$Type} from "packages/org/apache/maven/artifact/repository/layout/$ArtifactRepositoryLayout"
import {$Authentication, $Authentication$Type} from "packages/org/apache/maven/artifact/repository/$Authentication"
import {$Proxy, $Proxy$Type} from "packages/org/apache/maven/repository/$Proxy"

export interface $ArtifactRepository {

 "getKey"(): string
 "find"(arg0: $Artifact$Type): $Artifact
 "getId"(): string
 "getProtocol"(): string
/**
 * 
 * @deprecated
 */
 "isBlacklisted"(): boolean
 "getUrl"(): string
 "setId"(arg0: string): void
 "getProxy"(): $Proxy
 "getReleases"(): $ArtifactRepositoryPolicy
 "getSnapshots"(): $ArtifactRepositoryPolicy
 "getLayout"(): $ArtifactRepositoryLayout
 "setLayout"(arg0: $ArtifactRepositoryLayout$Type): void
 "setProxy"(arg0: $Proxy$Type): void
 "setUrl"(arg0: string): void
 "isBlocked"(): boolean
 "setReleaseUpdatePolicy"(arg0: $ArtifactRepositoryPolicy$Type): void
 "setMirroredRepositories"(arg0: $List$Type<($ArtifactRepository$Type)>): void
 "getMirroredRepositories"(): $List<($ArtifactRepository)>
 "setSnapshotUpdatePolicy"(arg0: $ArtifactRepositoryPolicy$Type): void
 "pathOfLocalRepositoryMetadata"(arg0: $ArtifactMetadata$Type, arg1: $ArtifactRepository$Type): string
 "pathOfRemoteRepositoryMetadata"(arg0: $ArtifactMetadata$Type): string
 "isProjectAware"(): boolean
 "setAuthentication"(arg0: $Authentication$Type): void
 "getBasedir"(): string
/**
 * 
 * @deprecated
 */
 "setBlacklisted"(arg0: boolean): void
 "setBlocked"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
 "isUniqueVersion"(): boolean
 "findVersions"(arg0: $Artifact$Type): $List<(string)>
 "pathOf"(arg0: $Artifact$Type): string
 "getAuthentication"(): $Authentication
}

export namespace $ArtifactRepository {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactRepository$Type = ($ArtifactRepository);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactRepository_ = $ArtifactRepository$Type;
}}
declare module "packages/org/apache/logging/log4j/$Marker" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"

export interface $Marker extends $Serializable {

 "getName"(): string
 "remove"(marker: $Marker$Type): boolean
 "equals"(obj: any): boolean
 "hashCode"(): integer
 "isInstanceOf"(m: $Marker$Type): boolean
 "isInstanceOf"(name: string): boolean
 "addParents"(...markers: ($Marker$Type)[]): $Marker
 "getParents"(): ($Marker)[]
 "hasParents"(): boolean
 "setParents"(...markers: ($Marker$Type)[]): $Marker
}

export namespace $Marker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Marker$Type = ($Marker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Marker_ = $Marker$Type;
}}
declare module "packages/org/apache/commons/lang3/tuple/$Pair" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $Pair<L, R> implements $Map$Entry<(L), (R)>, $Comparable<($Pair<(L), (R)>)>, $Serializable {
static readonly "EMPTY_ARRAY": ($Pair<(any), (any)>)[]

constructor()

public "equals"(arg0: any): boolean
public "toString"(arg0: string): string
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $Pair$Type<(L), (R)>): integer
public "getValue"(): R
public static "of"<L, R>(arg0: $Map$Entry$Type<(L), (R)>): $Pair<(L), (R)>
public static "of"<L, R>(arg0: L, arg1: R): $Pair<(L), (R)>
public "getKey"(): L
public static "emptyArray"<L, R>(): ($Pair<(L), (R)>)[]
public "getRight"(): R
public "getLeft"(): L
public static "comparingByKey"<K extends $Comparable<(any)>, V>(): $Comparator<($Map$Entry<(L), (R)>)>
public static "comparingByKey"<K, V>(arg0: $Comparator$Type<(any)>): $Comparator<($Map$Entry<(L), (R)>)>
public static "comparingByValue"<K, V extends $Comparable<(any)>>(): $Comparator<($Map$Entry<(L), (R)>)>
public static "comparingByValue"<K, V>(arg0: $Comparator$Type<(any)>): $Comparator<($Map$Entry<(L), (R)>)>
public static "copyOf"<K, V>(arg0: $Map$Entry$Type<(any), (any)>): $Map$Entry<(L), (R)>
public "setValue"(arg0: R): R
get "value"(): R
get "key"(): L
get "right"(): R
get "left"(): L
set "value"(value: R)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$Type<L, R> = ($Pair<(L), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair_<L, R> = $Pair$Type<(L), (R)>;
}}
declare module "packages/org/apache/logging/log4j/$Level" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$StandardLevel, $StandardLevel$Type} from "packages/org/apache/logging/log4j/spi/$StandardLevel"

export class $Level implements $Comparable<($Level)>, $Serializable {
static readonly "OFF": $Level
static readonly "FATAL": $Level
static readonly "ERROR": $Level
static readonly "WARN": $Level
static readonly "INFO": $Level
static readonly "DEBUG": $Level
static readonly "TRACE": $Level
static readonly "ALL": $Level
static readonly "CATEGORY": string


public "name"(): string
public static "forName"(name: string, intValue: integer): $Level
public "equals"(other: any): boolean
public "toString"(): string
public static "values"(): ($Level)[]
public "hashCode"(): integer
public "compareTo"(other: $Level$Type): integer
public static "valueOf"<T extends $Enum<(T)>>(enumType: $Class$Type<(T)>, name: string): T
public static "valueOf"(name: string): $Level
public "getDeclaringClass"(): $Class<($Level)>
public static "getLevel"(name: string): $Level
public static "toLevel"(name: string, defaultLevel: $Level$Type): $Level
public static "toLevel"(level: string): $Level
public "intLevel"(): integer
public "isLessSpecificThan"(level: $Level$Type): boolean
public "isInRange"(minLevel: $Level$Type, maxLevel: $Level$Type): boolean
public "getStandardLevel"(): $StandardLevel
public "isMoreSpecificThan"(level: $Level$Type): boolean
get "declaringClass"(): $Class<($Level)>
get "standardLevel"(): $StandardLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Level$Type = ($Level);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Level_ = $Level$Type;
}}
declare module "packages/org/apache/maven/repository/legacy/metadata/$ArtifactMetadata" {
import {$ArtifactRepository, $ArtifactRepository$Type} from "packages/org/apache/maven/artifact/repository/$ArtifactRepository"

export interface $ArtifactMetadata {

 "merge"(arg0: $ArtifactMetadata$Type): void
 "getKey"(): any
 "getArtifactId"(): string
 "getGroupId"(): string
 "storedInArtifactVersionDirectory"(): boolean
 "storeInLocalRepository"(arg0: $ArtifactRepository$Type, arg1: $ArtifactRepository$Type): void
 "storedInGroupDirectory"(): boolean
 "getBaseVersion"(): string
 "getLocalFilename"(arg0: $ArtifactRepository$Type): string
 "getRemoteFilename"(): string
 "extendedToString"(): string
}

export namespace $ArtifactMetadata {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactMetadata$Type = ($ArtifactMetadata);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactMetadata_ = $ArtifactMetadata$Type;
}}
declare module "packages/org/apache/maven/artifact/handler/$ArtifactHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ArtifactHandler {

 "getLanguage"(): string
 "getExtension"(): string
 "getClassifier"(): string
 "getDirectory"(): string
 "isIncludesDependencies"(): boolean
 "getPackaging"(): string
 "isAddedToClasspath"(): boolean
}

export namespace $ArtifactHandler {
const ROLE: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactHandler$Type = ($ArtifactHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactHandler_ = $ArtifactHandler$Type;
}}
declare module "packages/org/apache/maven/repository/$Proxy" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Proxy {
static readonly "PROXY_SOCKS5": string
static readonly "PROXY_SOCKS4": string
static readonly "PROXY_HTTP": string

constructor()

public "getHost"(): string
public "getPort"(): integer
public "getProtocol"(): string
public "setProtocol"(arg0: string): void
public "setPort"(arg0: integer): void
public "setHost"(arg0: string): void
public "setPassword"(arg0: string): void
public "getUserName"(): string
public "getPassword"(): string
public "getNtlmDomain"(): string
public "setUserName"(arg0: string): void
public "setNonProxyHosts"(arg0: string): void
public "getNtlmHost"(): string
public "getNonProxyHosts"(): string
public "setNtlmHost"(arg0: string): void
public "setNtlmDomain"(arg0: string): void
get "host"(): string
get "port"(): integer
get "protocol"(): string
set "protocol"(value: string)
set "port"(value: integer)
set "host"(value: string)
set "password"(value: string)
get "userName"(): string
get "password"(): string
get "ntlmDomain"(): string
set "userName"(value: string)
set "nonProxyHosts"(value: string)
get "ntlmHost"(): string
get "nonProxyHosts"(): string
set "ntlmHost"(value: string)
set "ntlmDomain"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Proxy$Type = ($Proxy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Proxy_ = $Proxy$Type;
}}
declare module "packages/org/apache/commons/lang3/function/$TriFunction" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"

export interface $TriFunction<T, U, V, R> {

 "apply"(arg0: T, arg1: U, arg2: V): R
 "andThen"<W>(arg0: $Function$Type<(any), (any)>): $TriFunction<(T), (U), (V), (W)>

(arg0: T, arg1: U, arg2: V): R
}

export namespace $TriFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriFunction$Type<T, U, V, R> = ($TriFunction<(T), (U), (V), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriFunction_<T, U, V, R> = $TriFunction$Type<(T), (U), (V), (R)>;
}}
declare module "packages/org/apache/maven/artifact/$Artifact" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$VersionRange, $VersionRange$Type} from "packages/org/apache/maven/artifact/versioning/$VersionRange"
import {$ArtifactRepository, $ArtifactRepository$Type} from "packages/org/apache/maven/artifact/repository/$ArtifactRepository"
import {$ArtifactMetadata, $ArtifactMetadata$Type} from "packages/org/apache/maven/artifact/metadata/$ArtifactMetadata"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$ArtifactHandler, $ArtifactHandler$Type} from "packages/org/apache/maven/artifact/handler/$ArtifactHandler"
import {$File, $File$Type} from "packages/java/io/$File"
import {$ArtifactVersion, $ArtifactVersion$Type} from "packages/org/apache/maven/artifact/versioning/$ArtifactVersion"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArtifactFilter, $ArtifactFilter$Type} from "packages/org/apache/maven/artifact/resolver/filter/$ArtifactFilter"

export interface $Artifact extends $Comparable<($Artifact)> {

 "setScope"(arg0: string): void
 "getId"(): string
 "getType"(): string
 "isResolved"(): boolean
 "setRelease"(arg0: boolean): void
 "getFile"(): $File
 "getVersion"(): string
 "setVersion"(arg0: string): void
 "getVersionRange"(): $VersionRange
 "getScope"(): string
 "getRepository"(): $ArtifactRepository
 "isSelectedVersionKnown"(): boolean
 "getSelectedVersion"(): $ArtifactVersion
 "getClassifier"(): string
 "getArtifactId"(): string
 "getGroupId"(): string
 "getDependencyTrail"(): $List<(string)>
 "setFile"(arg0: $File$Type): void
 "isOptional"(): boolean
 "setGroupId"(arg0: string): void
 "hasClassifier"(): boolean
 "getDownloadUrl"(): string
 "setArtifactId"(arg0: string): void
 "setResolvedVersion"(arg0: string): void
 "getBaseVersion"(): string
 "setArtifactHandler"(arg0: $ArtifactHandler$Type): void
 "selectVersion"(arg0: string): void
 "isRelease"(): boolean
 "setBaseVersion"(arg0: string): void
 "setVersionRange"(arg0: $VersionRange$Type): void
 "addMetadata"(arg0: $ArtifactMetadata$Type): void
 "setDownloadUrl"(arg0: string): void
 "setResolved"(arg0: boolean): void
 "isSnapshot"(): boolean
 "updateVersion"(arg0: string, arg1: $ArtifactRepository$Type): void
 "setDependencyTrail"(arg0: $List$Type<(string)>): void
 "setOptional"(arg0: boolean): void
 "getArtifactHandler"(): $ArtifactHandler
 "getMetadataList"(): $Collection<($ArtifactMetadata)>
 "setRepository"(arg0: $ArtifactRepository$Type): void
 "getDependencyConflictId"(): string
 "setDependencyFilter"(arg0: $ArtifactFilter$Type): void
 "getDependencyFilter"(): $ArtifactFilter
 "getAvailableVersions"(): $List<($ArtifactVersion)>
 "setAvailableVersions"(arg0: $List$Type<($ArtifactVersion$Type)>): void
 "compareTo"(arg0: $Artifact$Type): integer
}

export namespace $Artifact {
const RELEASE_VERSION: string
const LATEST_VERSION: string
const SNAPSHOT_VERSION: string
const VERSION_FILE_PATTERN: $Pattern
const SCOPE_COMPILE: string
const SCOPE_COMPILE_PLUS_RUNTIME: string
const SCOPE_TEST: string
const SCOPE_RUNTIME: string
const SCOPE_RUNTIME_PLUS_SYSTEM: string
const SCOPE_PROVIDED: string
const SCOPE_SYSTEM: string
const SCOPE_IMPORT: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Artifact$Type = ($Artifact);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Artifact_ = $Artifact$Type;
}}
declare module "packages/org/apache/maven/artifact/repository/layout/$ArtifactRepositoryLayout" {
import {$ArtifactMetadata, $ArtifactMetadata$Type} from "packages/org/apache/maven/artifact/metadata/$ArtifactMetadata"
import {$ArtifactRepository, $ArtifactRepository$Type} from "packages/org/apache/maven/artifact/repository/$ArtifactRepository"
import {$Artifact, $Artifact$Type} from "packages/org/apache/maven/artifact/$Artifact"

export interface $ArtifactRepositoryLayout {

 "getId"(): string
 "pathOfLocalRepositoryMetadata"(arg0: $ArtifactMetadata$Type, arg1: $ArtifactRepository$Type): string
 "pathOfRemoteRepositoryMetadata"(arg0: $ArtifactMetadata$Type): string
 "pathOf"(arg0: $Artifact$Type): string
}

export namespace $ArtifactRepositoryLayout {
const ROLE: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactRepositoryLayout$Type = ($ArtifactRepositoryLayout);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactRepositoryLayout_ = $ArtifactRepositoryLayout$Type;
}}
declare module "packages/org/apache/commons/lang3/tuple/$MutablePair" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $MutablePair<L, R> extends $Pair<(L), (R)> {
static readonly "EMPTY_ARRAY": ($MutablePair<(any), (any)>)[]
 "left": L
 "right": R

constructor()
constructor(arg0: L, arg1: R)

public static "of"<L, R>(arg0: $Map$Entry$Type<(L), (R)>): $MutablePair<(L), (R)>
public static "of"<L, R>(arg0: L, arg1: R): $MutablePair<(L), (R)>
public "setValue"(arg0: R): R
public static "emptyArray"<L, R>(): ($MutablePair<(L), (R)>)[]
public "getRight"(): R
public "getLeft"(): L
public "setLeft"(arg0: L): void
public "setRight"(arg0: R): void
public static "comparingByKey"<K extends $Comparable<(any)>, V>(): $Comparator<($Map$Entry<(K), (V)>)>
public static "comparingByKey"<K, V>(arg0: $Comparator$Type<(any)>): $Comparator<($Map$Entry<(K), (V)>)>
public static "comparingByValue"<K, V extends $Comparable<(any)>>(): $Comparator<($Map$Entry<(K), (V)>)>
public static "comparingByValue"<K, V>(arg0: $Comparator$Type<(any)>): $Comparator<($Map$Entry<(K), (V)>)>
public static "copyOf"<K, V>(arg0: $Map$Entry$Type<(any), (any)>): $Map$Entry<(K), (V)>
set "value"(value: R)
get "right"(): R
get "left"(): L
set "left"(value: L)
set "right"(value: R)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutablePair$Type<L, R> = ($MutablePair<(L), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutablePair_<L, R> = $MutablePair$Type<(L), (R)>;
}}
declare module "packages/org/apache/logging/log4j/$Logger" {
import {$MessageSupplier, $MessageSupplier$Type} from "packages/org/apache/logging/log4j/util/$MessageSupplier"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$Marker, $Marker$Type} from "packages/org/apache/logging/log4j/$Marker"
import {$StackTraceElement, $StackTraceElement$Type} from "packages/java/lang/$StackTraceElement"
import {$Supplier, $Supplier$Type} from "packages/org/apache/logging/log4j/util/$Supplier"
import {$Message, $Message$Type} from "packages/org/apache/logging/log4j/message/$Message"
import {$LogBuilder, $LogBuilder$Type} from "packages/org/apache/logging/log4j/$LogBuilder"
import {$EntryMessage, $EntryMessage$Type} from "packages/org/apache/logging/log4j/message/$EntryMessage"
import {$MessageFactory, $MessageFactory$Type} from "packages/org/apache/logging/log4j/message/$MessageFactory"
import {$Level, $Level$Type} from "packages/org/apache/logging/log4j/$Level"

export interface $Logger {

 "getName"(): string
/**
 * 
 * @deprecated
 */
 "exit"<R>(result: R): R
/**
 * 
 * @deprecated
 */
 "exit"(): void
 "log"(level: $Level$Type, messageSupplier: $Supplier$Type<(any)>, throwable: $Throwable$Type): void
 "log"(level: $Level$Type, messageSupplier: $Supplier$Type<(any)>): void
 "log"(level: $Level$Type, message: string, throwable: $Throwable$Type): void
 "log"(level: $Level$Type, marker: $Marker$Type, message: string, p0: any): void
 "log"(level: $Level$Type, marker: $Marker$Type, message: string, p0: any, p1: any): void
 "log"(level: $Level$Type, message: any): void
 "log"(level: $Level$Type, message: any, throwable: $Throwable$Type): void
 "log"(level: $Level$Type, message: string): void
 "log"(level: $Level$Type, message: string, ...params: (any)[]): void
 "log"(level: $Level$Type, message: string, ...paramSuppliers: ($Supplier$Type<(any)>)[]): void
 "log"(level: $Level$Type, marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "log"(level: $Level$Type, marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "log"(level: $Level$Type, marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "log"(level: $Level$Type, message: string, p0: any): void
 "log"(level: $Level$Type, message: string, p0: any, p1: any): void
 "log"(level: $Level$Type, marker: $Marker$Type, message: string, p0: any, p1: any, p2: any): void
 "log"(level: $Level$Type, marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
 "log"(level: $Level$Type, marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "log"(level: $Level$Type, marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "log"(level: $Level$Type, marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "log"(level: $Level$Type, marker: $Marker$Type, message: charseq, throwable: $Throwable$Type): void
 "log"(level: $Level$Type, marker: $Marker$Type, message: any): void
 "log"(level: $Level$Type, marker: $Marker$Type, message: any, throwable: $Throwable$Type): void
 "log"(level: $Level$Type, marker: $Marker$Type, message: string, ...params: (any)[]): void
 "log"(level: $Level$Type, marker: $Marker$Type, message: string, ...paramSuppliers: ($Supplier$Type<(any)>)[]): void
 "log"(level: $Level$Type, marker: $Marker$Type, message: $Message$Type): void
 "log"(level: $Level$Type, marker: $Marker$Type, message: $Message$Type, throwable: $Throwable$Type): void
 "log"(level: $Level$Type, marker: $Marker$Type, messageSupplier: $MessageSupplier$Type): void
 "log"(level: $Level$Type, marker: $Marker$Type, messageSupplier: $MessageSupplier$Type, throwable: $Throwable$Type): void
 "log"(level: $Level$Type, marker: $Marker$Type, message: charseq): void
 "log"(level: $Level$Type, message: $Message$Type, throwable: $Throwable$Type): void
 "log"(level: $Level$Type, messageSupplier: $MessageSupplier$Type): void
 "log"(level: $Level$Type, messageSupplier: $MessageSupplier$Type, throwable: $Throwable$Type): void
 "log"(level: $Level$Type, message: charseq): void
 "log"(level: $Level$Type, message: charseq, throwable: $Throwable$Type): void
 "log"(level: $Level$Type, marker: $Marker$Type, message: string, throwable: $Throwable$Type): void
 "log"(level: $Level$Type, marker: $Marker$Type, messageSupplier: $Supplier$Type<(any)>): void
 "log"(level: $Level$Type, marker: $Marker$Type, messageSupplier: $Supplier$Type<(any)>, throwable: $Throwable$Type): void
 "log"(level: $Level$Type, message: $Message$Type): void
 "log"(level: $Level$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "log"(level: $Level$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "log"(level: $Level$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "log"(level: $Level$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "log"(level: $Level$Type, marker: $Marker$Type, message: string): void
 "log"(level: $Level$Type, message: string, p0: any, p1: any, p2: any): void
 "log"(level: $Level$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
 "log"(level: $Level$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "log"(level: $Level$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "info"(marker: $Marker$Type, messageSupplier: $MessageSupplier$Type, throwable: $Throwable$Type): void
 "info"(marker: $Marker$Type, message: charseq, throwable: $Throwable$Type): void
 "info"(marker: $Marker$Type, message: charseq): void
 "info"(marker: $Marker$Type, messageSupplier: $MessageSupplier$Type): void
 "info"(marker: $Marker$Type, message: $Message$Type, throwable: $Throwable$Type): void
 "info"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "info"(marker: $Marker$Type, message: string, ...paramSuppliers: ($Supplier$Type<(any)>)[]): void
 "info"(marker: $Marker$Type, message: string, ...params: (any)[]): void
 "info"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "info"(marker: $Marker$Type, message: string): void
 "info"(marker: $Marker$Type, message: any, throwable: $Throwable$Type): void
 "info"(marker: $Marker$Type, message: any): void
 "info"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "info"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "info"(marker: $Marker$Type, message: $Message$Type): void
 "info"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "info"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "info"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "info"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "info"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "info"(message: string, p0: any, p1: any): void
 "info"(message: string, p0: any, p1: any, p2: any): void
 "info"(message: string, p0: any, p1: any, p2: any, p3: any): void
 "info"(messageSupplier: $Supplier$Type<(any)>, throwable: $Throwable$Type): void
 "info"(messageSupplier: $Supplier$Type<(any)>): void
 "info"(message: string, throwable: $Throwable$Type): void
 "info"(message: string, ...paramSuppliers: ($Supplier$Type<(any)>)[]): void
 "info"(message: string, ...params: (any)[]): void
 "info"(message: string): void
 "info"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "info"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "info"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
 "info"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any): void
 "info"(marker: $Marker$Type, message: string, p0: any, p1: any): void
 "info"(marker: $Marker$Type, message: string, p0: any): void
 "info"(messageSupplier: $MessageSupplier$Type): void
 "info"(message: $Message$Type, throwable: $Throwable$Type): void
 "info"(message: $Message$Type): void
 "info"(marker: $Marker$Type, messageSupplier: $Supplier$Type<(any)>, throwable: $Throwable$Type): void
 "info"(marker: $Marker$Type, messageSupplier: $Supplier$Type<(any)>): void
 "info"(marker: $Marker$Type, message: string, throwable: $Throwable$Type): void
 "info"(message: any, throwable: $Throwable$Type): void
 "info"(message: any): void
 "info"(message: charseq, throwable: $Throwable$Type): void
 "info"(message: charseq): void
 "info"(messageSupplier: $MessageSupplier$Type, throwable: $Throwable$Type): void
 "info"(message: string, p0: any): void
 "info"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "printf"(level: $Level$Type, format: string, ...params: (any)[]): void
 "printf"(level: $Level$Type, marker: $Marker$Type, format: string, ...params: (any)[]): void
/**
 * 
 * @deprecated
 */
 "entry"(...params: (any)[]): void
/**
 * 
 * @deprecated
 */
 "entry"(): void
 "trace"(message: $Message$Type): void
 "trace"(message: $Message$Type, throwable: $Throwable$Type): void
 "trace"(messageSupplier: $MessageSupplier$Type): void
 "trace"(messageSupplier: $MessageSupplier$Type, throwable: $Throwable$Type): void
 "trace"(message: charseq): void
 "trace"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "trace"(marker: $Marker$Type, message: string): void
 "trace"(marker: $Marker$Type, message: string, ...params: (any)[]): void
 "trace"(marker: $Marker$Type, message: string, ...paramSuppliers: ($Supplier$Type<(any)>)[]): void
 "trace"(marker: $Marker$Type, message: string, throwable: $Throwable$Type): void
 "trace"(marker: $Marker$Type, messageSupplier: $Supplier$Type<(any)>): void
 "trace"(marker: $Marker$Type, messageSupplier: $Supplier$Type<(any)>, throwable: $Throwable$Type): void
 "trace"(message: any, throwable: $Throwable$Type): void
 "trace"(message: string): void
 "trace"(message: string, ...params: (any)[]): void
 "trace"(message: string, ...paramSuppliers: ($Supplier$Type<(any)>)[]): void
 "trace"(message: string, throwable: $Throwable$Type): void
 "trace"(messageSupplier: $Supplier$Type<(any)>): void
 "trace"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "trace"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "trace"(marker: $Marker$Type, message: string, p0: any): void
 "trace"(messageSupplier: $Supplier$Type<(any)>, throwable: $Throwable$Type): void
 "trace"(message: charseq, throwable: $Throwable$Type): void
 "trace"(message: any): void
 "trace"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "trace"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "trace"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "trace"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "trace"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "trace"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "trace"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "trace"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "trace"(message: string, p0: any, p1: any, p2: any, p3: any): void
 "trace"(message: string, p0: any, p1: any, p2: any): void
 "trace"(message: string, p0: any, p1: any): void
 "trace"(message: string, p0: any): void
 "trace"(marker: $Marker$Type, messageSupplier: $MessageSupplier$Type): void
 "trace"(marker: $Marker$Type, messageSupplier: $MessageSupplier$Type, throwable: $Throwable$Type): void
 "trace"(marker: $Marker$Type, message: charseq): void
 "trace"(marker: $Marker$Type, message: charseq, throwable: $Throwable$Type): void
 "trace"(marker: $Marker$Type, message: any): void
 "trace"(marker: $Marker$Type, message: any, throwable: $Throwable$Type): void
 "trace"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "trace"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
 "trace"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any): void
 "trace"(marker: $Marker$Type, message: $Message$Type): void
 "trace"(marker: $Marker$Type, message: $Message$Type, throwable: $Throwable$Type): void
 "trace"(marker: $Marker$Type, message: string, p0: any, p1: any): void
 "debug"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "debug"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
 "debug"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any): void
 "debug"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "debug"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "debug"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "debug"(message: string, ...paramSuppliers: ($Supplier$Type<(any)>)[]): void
 "debug"(message: string, throwable: $Throwable$Type): void
 "debug"(messageSupplier: $Supplier$Type<(any)>): void
 "debug"(messageSupplier: $Supplier$Type<(any)>, throwable: $Throwable$Type): void
 "debug"(marker: $Marker$Type, message: string, p0: any): void
 "debug"(marker: $Marker$Type, message: string, p0: any, p1: any): void
 "debug"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "debug"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "debug"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "debug"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "debug"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "debug"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "debug"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "debug"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "debug"(message: string, p0: any): void
 "debug"(message: string, p0: any, p1: any): void
 "debug"(message: string, p0: any, p1: any, p2: any): void
 "debug"(message: string, p0: any, p1: any, p2: any, p3: any): void
 "debug"(marker: $Marker$Type, message: any): void
 "debug"(marker: $Marker$Type, message: any, throwable: $Throwable$Type): void
 "debug"(marker: $Marker$Type, message: string): void
 "debug"(marker: $Marker$Type, message: string, ...params: (any)[]): void
 "debug"(marker: $Marker$Type, message: string, ...paramSuppliers: ($Supplier$Type<(any)>)[]): void
 "debug"(marker: $Marker$Type, message: string, throwable: $Throwable$Type): void
 "debug"(marker: $Marker$Type, message: $Message$Type): void
 "debug"(marker: $Marker$Type, message: $Message$Type, throwable: $Throwable$Type): void
 "debug"(marker: $Marker$Type, messageSupplier: $MessageSupplier$Type): void
 "debug"(marker: $Marker$Type, messageSupplier: $MessageSupplier$Type, throwable: $Throwable$Type): void
 "debug"(marker: $Marker$Type, message: charseq): void
 "debug"(marker: $Marker$Type, message: charseq, throwable: $Throwable$Type): void
 "debug"(message: charseq): void
 "debug"(message: charseq, throwable: $Throwable$Type): void
 "debug"(message: any): void
 "debug"(message: any, throwable: $Throwable$Type): void
 "debug"(message: string): void
 "debug"(message: string, ...params: (any)[]): void
 "debug"(marker: $Marker$Type, messageSupplier: $Supplier$Type<(any)>): void
 "debug"(marker: $Marker$Type, messageSupplier: $Supplier$Type<(any)>, throwable: $Throwable$Type): void
 "debug"(message: $Message$Type): void
 "debug"(messageSupplier: $MessageSupplier$Type, throwable: $Throwable$Type): void
 "debug"(messageSupplier: $MessageSupplier$Type): void
 "debug"(message: $Message$Type, throwable: $Throwable$Type): void
 "error"(message: $Message$Type, throwable: $Throwable$Type): void
 "error"(messageSupplier: $MessageSupplier$Type): void
 "error"(messageSupplier: $MessageSupplier$Type, throwable: $Throwable$Type): void
 "error"(message: $Message$Type): void
 "error"(marker: $Marker$Type, messageSupplier: $Supplier$Type<(any)>, throwable: $Throwable$Type): void
 "error"(marker: $Marker$Type, messageSupplier: $Supplier$Type<(any)>): void
 "error"(message: string, ...params: (any)[]): void
 "error"(message: string): void
 "error"(message: any, throwable: $Throwable$Type): void
 "error"(message: any): void
 "error"(message: charseq, throwable: $Throwable$Type): void
 "error"(message: charseq): void
 "error"(marker: $Marker$Type, message: charseq, throwable: $Throwable$Type): void
 "error"(marker: $Marker$Type, message: charseq): void
 "error"(marker: $Marker$Type, messageSupplier: $MessageSupplier$Type, throwable: $Throwable$Type): void
 "error"(marker: $Marker$Type, messageSupplier: $MessageSupplier$Type): void
 "error"(marker: $Marker$Type, message: $Message$Type, throwable: $Throwable$Type): void
 "error"(marker: $Marker$Type, message: $Message$Type): void
 "error"(marker: $Marker$Type, message: string, throwable: $Throwable$Type): void
 "error"(marker: $Marker$Type, message: string, ...paramSuppliers: ($Supplier$Type<(any)>)[]): void
 "error"(marker: $Marker$Type, message: string, ...params: (any)[]): void
 "error"(marker: $Marker$Type, message: string): void
 "error"(marker: $Marker$Type, message: any, throwable: $Throwable$Type): void
 "error"(marker: $Marker$Type, message: any): void
 "error"(message: string, p0: any, p1: any, p2: any, p3: any): void
 "error"(message: string, p0: any, p1: any, p2: any): void
 "error"(message: string, p0: any, p1: any): void
 "error"(message: string, p0: any): void
 "error"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "error"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "error"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "error"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "error"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "error"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "error"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "error"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "error"(marker: $Marker$Type, message: string, p0: any, p1: any): void
 "error"(marker: $Marker$Type, message: string, p0: any): void
 "error"(messageSupplier: $Supplier$Type<(any)>, throwable: $Throwable$Type): void
 "error"(messageSupplier: $Supplier$Type<(any)>): void
 "error"(message: string, throwable: $Throwable$Type): void
 "error"(message: string, ...paramSuppliers: ($Supplier$Type<(any)>)[]): void
 "error"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
 "error"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "error"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "error"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "error"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "error"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any): void
 "warn"(message: $Message$Type): void
 "warn"(message: $Message$Type, throwable: $Throwable$Type): void
 "warn"(messageSupplier: $MessageSupplier$Type, throwable: $Throwable$Type): void
 "warn"(messageSupplier: $MessageSupplier$Type): void
 "warn"(marker: $Marker$Type, messageSupplier: $Supplier$Type<(any)>, throwable: $Throwable$Type): void
 "warn"(marker: $Marker$Type, message: string, throwable: $Throwable$Type): void
 "warn"(marker: $Marker$Type, messageSupplier: $Supplier$Type<(any)>): void
 "warn"(message: string, ...params: (any)[]): void
 "warn"(message: string): void
 "warn"(message: any, throwable: $Throwable$Type): void
 "warn"(message: any): void
 "warn"(message: charseq, throwable: $Throwable$Type): void
 "warn"(message: charseq): void
 "warn"(marker: $Marker$Type, message: charseq): void
 "warn"(marker: $Marker$Type, messageSupplier: $MessageSupplier$Type, throwable: $Throwable$Type): void
 "warn"(marker: $Marker$Type, messageSupplier: $MessageSupplier$Type): void
 "warn"(marker: $Marker$Type, message: $Message$Type, throwable: $Throwable$Type): void
 "warn"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "warn"(marker: $Marker$Type, message: $Message$Type): void
 "warn"(marker: $Marker$Type, message: string, ...paramSuppliers: ($Supplier$Type<(any)>)[]): void
 "warn"(marker: $Marker$Type, message: string, ...params: (any)[]): void
 "warn"(marker: $Marker$Type, message: string): void
 "warn"(marker: $Marker$Type, message: any, throwable: $Throwable$Type): void
 "warn"(marker: $Marker$Type, message: any): void
 "warn"(marker: $Marker$Type, message: charseq, throwable: $Throwable$Type): void
 "warn"(message: string, p0: any, p1: any, p2: any): void
 "warn"(message: string, p0: any, p1: any): void
 "warn"(message: string, p0: any): void
 "warn"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "warn"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "warn"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "warn"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "warn"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "warn"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "warn"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "warn"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "warn"(message: string, p0: any, p1: any, p2: any, p3: any): void
 "warn"(marker: $Marker$Type, message: string, p0: any, p1: any): void
 "warn"(marker: $Marker$Type, message: string, p0: any): void
 "warn"(messageSupplier: $Supplier$Type<(any)>, throwable: $Throwable$Type): void
 "warn"(messageSupplier: $Supplier$Type<(any)>): void
 "warn"(message: string, throwable: $Throwable$Type): void
 "warn"(message: string, ...paramSuppliers: ($Supplier$Type<(any)>)[]): void
 "warn"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "warn"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "warn"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "warn"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
 "warn"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any): void
 "isEnabled"(level: $Level$Type, marker: $Marker$Type): boolean
 "isEnabled"(level: $Level$Type): boolean
 "catching"(level: $Level$Type, throwable: $Throwable$Type): void
 "catching"(throwable: $Throwable$Type): void
 "getLevel"(): $Level
 "getMessageFactory"<MF extends $MessageFactory>(): MF
 "isDebugEnabled"(): boolean
 "isDebugEnabled"(marker: $Marker$Type): boolean
 "fatal"(message: any, throwable: $Throwable$Type): void
 "fatal"(message: string): void
 "fatal"(message: string, ...params: (any)[]): void
 "fatal"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "fatal"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "fatal"(messageSupplier: $MessageSupplier$Type, throwable: $Throwable$Type): void
 "fatal"(message: charseq): void
 "fatal"(message: charseq, throwable: $Throwable$Type): void
 "fatal"(message: any): void
 "fatal"(message: string, throwable: $Throwable$Type): void
 "fatal"(messageSupplier: $Supplier$Type<(any)>): void
 "fatal"(messageSupplier: $Supplier$Type<(any)>, throwable: $Throwable$Type): void
 "fatal"(marker: $Marker$Type, message: string, p0: any): void
 "fatal"(marker: $Marker$Type, message: string, p0: any, p1: any): void
 "fatal"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "fatal"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
 "fatal"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any): void
 "fatal"(message: string, ...paramSuppliers: ($Supplier$Type<(any)>)[]): void
 "fatal"(marker: $Marker$Type, message: charseq): void
 "fatal"(marker: $Marker$Type, message: charseq, throwable: $Throwable$Type): void
 "fatal"(marker: $Marker$Type, message: any): void
 "fatal"(marker: $Marker$Type, message: any, throwable: $Throwable$Type): void
 "fatal"(marker: $Marker$Type, message: string): void
 "fatal"(marker: $Marker$Type, message: $Message$Type): void
 "fatal"(marker: $Marker$Type, message: $Message$Type, throwable: $Throwable$Type): void
 "fatal"(marker: $Marker$Type, messageSupplier: $MessageSupplier$Type): void
 "fatal"(marker: $Marker$Type, messageSupplier: $MessageSupplier$Type, throwable: $Throwable$Type): void
 "fatal"(marker: $Marker$Type, messageSupplier: $Supplier$Type<(any)>, throwable: $Throwable$Type): void
 "fatal"(message: $Message$Type): void
 "fatal"(message: $Message$Type, throwable: $Throwable$Type): void
 "fatal"(messageSupplier: $MessageSupplier$Type): void
 "fatal"(marker: $Marker$Type, message: string, ...params: (any)[]): void
 "fatal"(marker: $Marker$Type, message: string, ...paramSuppliers: ($Supplier$Type<(any)>)[]): void
 "fatal"(marker: $Marker$Type, message: string, throwable: $Throwable$Type): void
 "fatal"(marker: $Marker$Type, messageSupplier: $Supplier$Type<(any)>): void
 "fatal"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "fatal"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "fatal"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "fatal"(message: string, p0: any, p1: any, p2: any, p3: any): void
 "fatal"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "fatal"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "fatal"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "fatal"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "fatal"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "fatal"(marker: $Marker$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "fatal"(message: string, p0: any, p1: any, p2: any): void
 "fatal"(message: string, p0: any, p1: any): void
 "fatal"(message: string, p0: any): void
 "isErrorEnabled"(marker: $Marker$Type): boolean
 "isErrorEnabled"(): boolean
 "isWarnEnabled"(): boolean
 "isWarnEnabled"(marker: $Marker$Type): boolean
 "isFatalEnabled"(marker: $Marker$Type): boolean
 "isFatalEnabled"(): boolean
 "isInfoEnabled"(): boolean
 "isInfoEnabled"(marker: $Marker$Type): boolean
 "isTraceEnabled"(): boolean
 "isTraceEnabled"(marker: $Marker$Type): boolean
 "always"(): $LogBuilder
 "traceExit"<R>(format: string, result: R): R
 "traceExit"<R>(message: $Message$Type, result: R): R
 "traceExit"<R>(message: $EntryMessage$Type, result: R): R
 "traceExit"(message: $EntryMessage$Type): void
 "traceExit"(): void
 "traceExit"<R>(result: R): R
 "atError"(): $LogBuilder
 "atInfo"(): $LogBuilder
 "atTrace"(): $LogBuilder
 "logMessage"(level: $Level$Type, marker: $Marker$Type, fqcn: string, location: $StackTraceElement$Type, message: $Message$Type, throwable: $Throwable$Type): void
 "atDebug"(): $LogBuilder
 "atWarn"(): $LogBuilder
 "traceEntry"(format: string, ...params: (any)[]): $EntryMessage
 "traceEntry"(...paramSuppliers: ($Supplier$Type<(any)>)[]): $EntryMessage
 "traceEntry"(format: string, ...paramSuppliers: ($Supplier$Type<(any)>)[]): $EntryMessage
 "traceEntry"(message: $Message$Type): $EntryMessage
 "traceEntry"(): $EntryMessage
 "atFatal"(): $LogBuilder
 "throwing"<T extends $Throwable>(throwable: T): T
 "throwing"<T extends $Throwable>(level: $Level$Type, throwable: T): T
 "atLevel"(level: $Level$Type): $LogBuilder
}

export namespace $Logger {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Logger$Type = ($Logger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Logger_ = $Logger$Type;
}}
declare module "packages/org/apache/commons/lang3/tuple/$Triple" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"

export class $Triple<L, M, R> implements $Comparable<($Triple<(L), (M), (R)>)>, $Serializable {
static readonly "EMPTY_ARRAY": ($Triple<(any), (any), (any)>)[]

constructor()

public "equals"(arg0: any): boolean
public "toString"(arg0: string): string
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $Triple$Type<(L), (M), (R)>): integer
public static "of"<L, M, R>(arg0: L, arg1: M, arg2: R): $Triple<(L), (M), (R)>
public static "emptyArray"<L, M, R>(): ($Triple<(L), (M), (R)>)[]
public "getRight"(): R
public "getLeft"(): L
public "getMiddle"(): M
get "right"(): R
get "left"(): L
get "middle"(): M
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Triple$Type<L, M, R> = ($Triple<(L), (M), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Triple_<L, M, R> = $Triple$Type<(L), (M), (R)>;
}}
declare module "packages/org/apache/logging/log4j/util/$Supplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Supplier<T> {

 "get"(): T

(): T
}

export namespace $Supplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Supplier$Type<T> = ($Supplier<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Supplier_<T> = $Supplier$Type<(T)>;
}}
declare module "packages/org/apache/commons/lang3/mutable/$Mutable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Mutable<T> {

 "getValue"(): T
 "setValue"(arg0: T): void
}

export namespace $Mutable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mutable$Type<T> = ($Mutable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mutable_<T> = $Mutable$Type<(T)>;
}}
declare module "packages/org/apache/logging/log4j/message/$MessageFactory" {
import {$Message, $Message$Type} from "packages/org/apache/logging/log4j/message/$Message"

export interface $MessageFactory {

 "newMessage"(message: any): $Message
 "newMessage"(message: string): $Message
 "newMessage"(message: string, ...params: (any)[]): $Message
}

export namespace $MessageFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageFactory$Type = ($MessageFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MessageFactory_ = $MessageFactory$Type;
}}
declare module "packages/org/apache/maven/artifact/versioning/$ArtifactVersion" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"

export interface $ArtifactVersion extends $Comparable<($ArtifactVersion)> {

 "getMajorVersion"(): integer
 "getMinorVersion"(): integer
 "getIncrementalVersion"(): integer
 "parseVersion"(arg0: string): void
 "getBuildNumber"(): integer
 "getQualifier"(): string
 "compareTo"(arg0: $ArtifactVersion$Type): integer
}

export namespace $ArtifactVersion {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactVersion$Type = ($ArtifactVersion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactVersion_ = $ArtifactVersion$Type;
}}
declare module "packages/org/apache/maven/artifact/versioning/$Restriction" {
import {$ArtifactVersion, $ArtifactVersion$Type} from "packages/org/apache/maven/artifact/versioning/$ArtifactVersion"

export class $Restriction {
static readonly "EVERYTHING": $Restriction

constructor(arg0: $ArtifactVersion$Type, arg1: boolean, arg2: $ArtifactVersion$Type, arg3: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isUpperBoundInclusive"(): boolean
public "isLowerBoundInclusive"(): boolean
public "containsVersion"(arg0: $ArtifactVersion$Type): boolean
public "getLowerBound"(): $ArtifactVersion
public "getUpperBound"(): $ArtifactVersion
get "upperBoundInclusive"(): boolean
get "lowerBoundInclusive"(): boolean
get "lowerBound"(): $ArtifactVersion
get "upperBound"(): $ArtifactVersion
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Restriction$Type = ($Restriction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Restriction_ = $Restriction$Type;
}}
declare module "packages/org/apache/maven/artifact/repository/$ArtifactRepositoryPolicy" {
import {$Date, $Date$Type} from "packages/java/util/$Date"

export class $ArtifactRepositoryPolicy {
static readonly "UPDATE_POLICY_NEVER": string
static readonly "UPDATE_POLICY_ALWAYS": string
static readonly "UPDATE_POLICY_DAILY": string
static readonly "UPDATE_POLICY_INTERVAL": string
static readonly "CHECKSUM_POLICY_FAIL": string
static readonly "CHECKSUM_POLICY_WARN": string
static readonly "CHECKSUM_POLICY_IGNORE": string

constructor(arg0: boolean, arg1: string, arg2: string)
constructor(arg0: $ArtifactRepositoryPolicy$Type)
constructor()

public "toString"(): string
public "merge"(arg0: $ArtifactRepositoryPolicy$Type): void
public "isEnabled"(): boolean
public "setEnabled"(arg0: boolean): void
public "getChecksumPolicy"(): string
public "checkOutOfDate"(arg0: $Date$Type): boolean
public "getUpdatePolicy"(): string
public "setChecksumPolicy"(arg0: string): void
public "setUpdatePolicy"(arg0: string): void
get "enabled"(): boolean
set "enabled"(value: boolean)
get "checksumPolicy"(): string
get "updatePolicy"(): string
set "checksumPolicy"(value: string)
set "updatePolicy"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactRepositoryPolicy$Type = ($ArtifactRepositoryPolicy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactRepositoryPolicy_ = $ArtifactRepositoryPolicy$Type;
}}
declare module "packages/org/apache/commons/lang3/tuple/$ImmutableTriple" {
import {$Triple, $Triple$Type} from "packages/org/apache/commons/lang3/tuple/$Triple"

export class $ImmutableTriple<L, M, R> extends $Triple<(L), (M), (R)> {
static readonly "EMPTY_ARRAY": ($ImmutableTriple<(any), (any), (any)>)[]
readonly "left": L
readonly "middle": M
readonly "right": R

constructor(arg0: L, arg1: M, arg2: R)

public static "of"<L, M, R>(arg0: L, arg1: M, arg2: R): $ImmutableTriple<(L), (M), (R)>
public static "emptyArray"<L, M, R>(): ($ImmutableTriple<(L), (M), (R)>)[]
public "getRight"(): R
public "getLeft"(): L
public "getMiddle"(): M
public static "nullTriple"<L, M, R>(): $ImmutableTriple<(L), (M), (R)>
get "right"(): R
get "left"(): L
get "middle"(): M
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableTriple$Type<L, M, R> = ($ImmutableTriple<(L), (M), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableTriple_<L, M, R> = $ImmutableTriple$Type<(L), (M), (R)>;
}}
declare module "packages/org/apache/commons/lang3/mutable/$MutableInt" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Mutable, $Mutable$Type} from "packages/org/apache/commons/lang3/mutable/$Mutable"

export class $MutableInt extends number implements $Comparable<($MutableInt)>, $Mutable<(number)> {

constructor(arg0: string)
constructor(arg0: number)
constructor(arg0: integer)
constructor()

public "add"(arg0: integer): void
public "add"(arg0: number): void
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $MutableInt$Type): integer
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
public "increment"(): void
public "setValue"(arg0: integer): void
public "setValue"(arg0: number): void
public "getAndAdd"(arg0: number): integer
public "getAndAdd"(arg0: integer): integer
public "getAndIncrement"(): integer
public "getAndDecrement"(): integer
public "incrementAndGet"(): integer
public "decrementAndGet"(): integer
public "addAndGet"(arg0: integer): integer
public "addAndGet"(arg0: number): integer
public "subtract"(arg0: number): void
public "subtract"(arg0: integer): void
public "decrement"(): void
public "toInteger"(): integer
set "value"(value: integer)
set "value"(value: number)
get "andIncrement"(): integer
get "andDecrement"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableInt$Type = ($MutableInt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableInt_ = $MutableInt$Type;
}}
declare module "packages/org/apache/logging/log4j/message/$FlowMessage" {
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$Message, $Message$Type} from "packages/org/apache/logging/log4j/message/$Message"

export interface $FlowMessage extends $Message {

 "getMessage"(): $Message
 "getText"(): string
 "getParameters"(): (any)[]
 "getFormat"(): string
 "getFormattedMessage"(): string
 "getThrowable"(): $Throwable
}

export namespace $FlowMessage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlowMessage$Type = ($FlowMessage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlowMessage_ = $FlowMessage$Type;
}}
