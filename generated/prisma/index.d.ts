
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model ImagesVideos
 * 
 */
export type ImagesVideos = $Result.DefaultSelection<Prisma.$ImagesVideosPayload>
/**
 * Model RenderQueue
 * 
 */
export type RenderQueue = $Result.DefaultSelection<Prisma.$RenderQueuePayload>
/**
 * Model ProviderLogs
 * 
 */
export type ProviderLogs = $Result.DefaultSelection<Prisma.$ProviderLogsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RenderQueueStatus: {
  DONE: 'DONE',
  ERROR: 'ERROR',
  PROCESSING: 'PROCESSING',
  READY: 'READY',
  WAITING: 'WAITING'
};

export type RenderQueueStatus = (typeof RenderQueueStatus)[keyof typeof RenderQueueStatus]


export const RenderQueuePriority: {
  HIGHEST: 'HIGHEST',
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW'
};

export type RenderQueuePriority = (typeof RenderQueuePriority)[keyof typeof RenderQueuePriority]


export const ProviderProcessingStage: {
  RENDER_PROCESS: 'RENDER_PROCESS'
};

export type ProviderProcessingStage = (typeof ProviderProcessingStage)[keyof typeof ProviderProcessingStage]


export const ProviderEntityType: {
  POSTGRESQL: 'POSTGRESQL',
  RENDER_SERVICE: 'RENDER_SERVICE'
};

export type ProviderEntityType = (typeof ProviderEntityType)[keyof typeof ProviderEntityType]


export const ProviderOperationStatus: {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
};

export type ProviderOperationStatus = (typeof ProviderOperationStatus)[keyof typeof ProviderOperationStatus]

}

export type RenderQueueStatus = $Enums.RenderQueueStatus

export const RenderQueueStatus: typeof $Enums.RenderQueueStatus

export type RenderQueuePriority = $Enums.RenderQueuePriority

export const RenderQueuePriority: typeof $Enums.RenderQueuePriority

export type ProviderProcessingStage = $Enums.ProviderProcessingStage

export const ProviderProcessingStage: typeof $Enums.ProviderProcessingStage

export type ProviderEntityType = $Enums.ProviderEntityType

export const ProviderEntityType: typeof $Enums.ProviderEntityType

export type ProviderOperationStatus = $Enums.ProviderOperationStatus

export const ProviderOperationStatus: typeof $Enums.ProviderOperationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Videos
 * const videos = await prisma.video.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Videos
   * const videos = await prisma.video.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imagesVideos`: Exposes CRUD operations for the **ImagesVideos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImagesVideos
    * const imagesVideos = await prisma.imagesVideos.findMany()
    * ```
    */
  get imagesVideos(): Prisma.ImagesVideosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.renderQueue`: Exposes CRUD operations for the **RenderQueue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RenderQueues
    * const renderQueues = await prisma.renderQueue.findMany()
    * ```
    */
  get renderQueue(): Prisma.RenderQueueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.providerLogs`: Exposes CRUD operations for the **ProviderLogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProviderLogs
    * const providerLogs = await prisma.providerLogs.findMany()
    * ```
    */
  get providerLogs(): Prisma.ProviderLogsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Video: 'Video',
    Image: 'Image',
    ImagesVideos: 'ImagesVideos',
    RenderQueue: 'RenderQueue',
    ProviderLogs: 'ProviderLogs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "video" | "image" | "imagesVideos" | "renderQueue" | "providerLogs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      ImagesVideos: {
        payload: Prisma.$ImagesVideosPayload<ExtArgs>
        fields: Prisma.ImagesVideosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImagesVideosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesVideosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImagesVideosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesVideosPayload>
          }
          findFirst: {
            args: Prisma.ImagesVideosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesVideosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImagesVideosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesVideosPayload>
          }
          findMany: {
            args: Prisma.ImagesVideosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesVideosPayload>[]
          }
          create: {
            args: Prisma.ImagesVideosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesVideosPayload>
          }
          createMany: {
            args: Prisma.ImagesVideosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImagesVideosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesVideosPayload>[]
          }
          delete: {
            args: Prisma.ImagesVideosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesVideosPayload>
          }
          update: {
            args: Prisma.ImagesVideosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesVideosPayload>
          }
          deleteMany: {
            args: Prisma.ImagesVideosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImagesVideosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImagesVideosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesVideosPayload>[]
          }
          upsert: {
            args: Prisma.ImagesVideosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesVideosPayload>
          }
          aggregate: {
            args: Prisma.ImagesVideosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImagesVideos>
          }
          groupBy: {
            args: Prisma.ImagesVideosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImagesVideosGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImagesVideosCountArgs<ExtArgs>
            result: $Utils.Optional<ImagesVideosCountAggregateOutputType> | number
          }
        }
      }
      RenderQueue: {
        payload: Prisma.$RenderQueuePayload<ExtArgs>
        fields: Prisma.RenderQueueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RenderQueueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderQueuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RenderQueueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderQueuePayload>
          }
          findFirst: {
            args: Prisma.RenderQueueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderQueuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RenderQueueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderQueuePayload>
          }
          findMany: {
            args: Prisma.RenderQueueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderQueuePayload>[]
          }
          create: {
            args: Prisma.RenderQueueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderQueuePayload>
          }
          createMany: {
            args: Prisma.RenderQueueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RenderQueueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderQueuePayload>[]
          }
          delete: {
            args: Prisma.RenderQueueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderQueuePayload>
          }
          update: {
            args: Prisma.RenderQueueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderQueuePayload>
          }
          deleteMany: {
            args: Prisma.RenderQueueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RenderQueueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RenderQueueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderQueuePayload>[]
          }
          upsert: {
            args: Prisma.RenderQueueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderQueuePayload>
          }
          aggregate: {
            args: Prisma.RenderQueueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRenderQueue>
          }
          groupBy: {
            args: Prisma.RenderQueueGroupByArgs<ExtArgs>
            result: $Utils.Optional<RenderQueueGroupByOutputType>[]
          }
          count: {
            args: Prisma.RenderQueueCountArgs<ExtArgs>
            result: $Utils.Optional<RenderQueueCountAggregateOutputType> | number
          }
        }
      }
      ProviderLogs: {
        payload: Prisma.$ProviderLogsPayload<ExtArgs>
        fields: Prisma.ProviderLogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderLogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderLogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderLogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderLogsPayload>
          }
          findFirst: {
            args: Prisma.ProviderLogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderLogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderLogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderLogsPayload>
          }
          findMany: {
            args: Prisma.ProviderLogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderLogsPayload>[]
          }
          create: {
            args: Prisma.ProviderLogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderLogsPayload>
          }
          createMany: {
            args: Prisma.ProviderLogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderLogsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderLogsPayload>[]
          }
          delete: {
            args: Prisma.ProviderLogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderLogsPayload>
          }
          update: {
            args: Prisma.ProviderLogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderLogsPayload>
          }
          deleteMany: {
            args: Prisma.ProviderLogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderLogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProviderLogsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderLogsPayload>[]
          }
          upsert: {
            args: Prisma.ProviderLogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderLogsPayload>
          }
          aggregate: {
            args: Prisma.ProviderLogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProviderLogs>
          }
          groupBy: {
            args: Prisma.ProviderLogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderLogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderLogsCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderLogsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    video?: VideoOmit
    image?: ImageOmit
    imagesVideos?: ImagesVideosOmit
    renderQueue?: RenderQueueOmit
    providerLogs?: ProviderLogsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type VideoCountOutputType
   */

  export type VideoCountOutputType = {
    renderQueues: number
    media: number
  }

  export type VideoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    renderQueues?: boolean | VideoCountOutputTypeCountRenderQueuesArgs
    media?: boolean | VideoCountOutputTypeCountMediaArgs
  }

  // Custom InputTypes
  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCountOutputType
     */
    select?: VideoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountRenderQueuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RenderQueueWhereInput
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagesVideosWhereInput
  }


  /**
   * Count Type ImageCountOutputType
   */

  export type ImageCountOutputType = {
    media: number
  }

  export type ImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | ImageCountOutputTypeCountMediaArgs
  }

  // Custom InputTypes
  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     */
    select?: ImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagesVideosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    url: string | null
  }

  export type VideoMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    url: string | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    url: number
    subtitles: number
    _all: number
  }


  export type VideoMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    url?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    url?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    url?: true
    subtitles?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    url: string
    subtitles: JsonValue | null
    _count: VideoCountAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
    subtitles?: boolean
    renderQueues?: boolean | Video$renderQueuesArgs<ExtArgs>
    media?: boolean | Video$mediaArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
    subtitles?: boolean
  }, ExtArgs["result"]["video"]>

  export type VideoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
    subtitles?: boolean
  }, ExtArgs["result"]["video"]>

  export type VideoSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
    subtitles?: boolean
  }

  export type VideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "url" | "subtitles", ExtArgs["result"]["video"]>
  export type VideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    renderQueues?: boolean | Video$renderQueuesArgs<ExtArgs>
    media?: boolean | Video$mediaArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VideoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VideoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {
      renderQueues: Prisma.$RenderQueuePayload<ExtArgs>[]
      media: Prisma.$ImagesVideosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      url: string
      subtitles: Prisma.JsonValue | null
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videos and returns the data saved in the database.
     * @param {VideoCreateManyAndReturnArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos and returns the data updated in the database.
     * @param {VideoUpdateManyAndReturnArgs} args - Arguments to update many Videos.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VideoUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    renderQueues<T extends Video$renderQueuesArgs<ExtArgs> = {}>(args?: Subset<T, Video$renderQueuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenderQueuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    media<T extends Video$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Video$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesVideosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Video model
   */
  interface VideoFieldRefs {
    readonly id: FieldRef<"Video", 'String'>
    readonly createdAt: FieldRef<"Video", 'DateTime'>
    readonly updatedAt: FieldRef<"Video", 'DateTime'>
    readonly url: FieldRef<"Video", 'String'>
    readonly subtitles: FieldRef<"Video", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Video createManyAndReturn
   */
  export type VideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video updateManyAndReturn
   */
  export type VideoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to delete.
     */
    limit?: number
  }

  /**
   * Video.renderQueues
   */
  export type Video$renderQueuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderQueue
     */
    select?: RenderQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderQueue
     */
    omit?: RenderQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderQueueInclude<ExtArgs> | null
    where?: RenderQueueWhereInput
    orderBy?: RenderQueueOrderByWithRelationInput | RenderQueueOrderByWithRelationInput[]
    cursor?: RenderQueueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RenderQueueScalarFieldEnum | RenderQueueScalarFieldEnum[]
  }

  /**
   * Video.media
   */
  export type Video$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagesVideos
     */
    select?: ImagesVideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagesVideos
     */
    omit?: ImagesVideosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesVideosInclude<ExtArgs> | null
    where?: ImagesVideosWhereInput
    orderBy?: ImagesVideosOrderByWithRelationInput | ImagesVideosOrderByWithRelationInput[]
    cursor?: ImagesVideosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImagesVideosScalarFieldEnum | ImagesVideosScalarFieldEnum[]
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    url: string | null
  }

  export type ImageMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    url: string | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    url: number
    _all: number
  }


  export type ImageMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    url?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    url?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    url?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    url: string
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
    media?: boolean | Image$mediaArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "url", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | Image$mediaArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      media: Prisma.$ImagesVideosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      url: string
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    media<T extends Image$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Image$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesVideosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'String'>
    readonly createdAt: FieldRef<"Image", 'DateTime'>
    readonly updatedAt: FieldRef<"Image", 'DateTime'>
    readonly url: FieldRef<"Image", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image.media
   */
  export type Image$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagesVideos
     */
    select?: ImagesVideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagesVideos
     */
    omit?: ImagesVideosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesVideosInclude<ExtArgs> | null
    where?: ImagesVideosWhereInput
    orderBy?: ImagesVideosOrderByWithRelationInput | ImagesVideosOrderByWithRelationInput[]
    cursor?: ImagesVideosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImagesVideosScalarFieldEnum | ImagesVideosScalarFieldEnum[]
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model ImagesVideos
   */

  export type AggregateImagesVideos = {
    _count: ImagesVideosCountAggregateOutputType | null
    _min: ImagesVideosMinAggregateOutputType | null
    _max: ImagesVideosMaxAggregateOutputType | null
  }

  export type ImagesVideosMinAggregateOutputType = {
    imageId: string | null
    videoId: string | null
    createdAt: Date | null
  }

  export type ImagesVideosMaxAggregateOutputType = {
    imageId: string | null
    videoId: string | null
    createdAt: Date | null
  }

  export type ImagesVideosCountAggregateOutputType = {
    imageId: number
    videoId: number
    createdAt: number
    _all: number
  }


  export type ImagesVideosMinAggregateInputType = {
    imageId?: true
    videoId?: true
    createdAt?: true
  }

  export type ImagesVideosMaxAggregateInputType = {
    imageId?: true
    videoId?: true
    createdAt?: true
  }

  export type ImagesVideosCountAggregateInputType = {
    imageId?: true
    videoId?: true
    createdAt?: true
    _all?: true
  }

  export type ImagesVideosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImagesVideos to aggregate.
     */
    where?: ImagesVideosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagesVideos to fetch.
     */
    orderBy?: ImagesVideosOrderByWithRelationInput | ImagesVideosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImagesVideosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagesVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagesVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImagesVideos
    **/
    _count?: true | ImagesVideosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagesVideosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagesVideosMaxAggregateInputType
  }

  export type GetImagesVideosAggregateType<T extends ImagesVideosAggregateArgs> = {
        [P in keyof T & keyof AggregateImagesVideos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImagesVideos[P]>
      : GetScalarType<T[P], AggregateImagesVideos[P]>
  }




  export type ImagesVideosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagesVideosWhereInput
    orderBy?: ImagesVideosOrderByWithAggregationInput | ImagesVideosOrderByWithAggregationInput[]
    by: ImagesVideosScalarFieldEnum[] | ImagesVideosScalarFieldEnum
    having?: ImagesVideosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagesVideosCountAggregateInputType | true
    _min?: ImagesVideosMinAggregateInputType
    _max?: ImagesVideosMaxAggregateInputType
  }

  export type ImagesVideosGroupByOutputType = {
    imageId: string
    videoId: string
    createdAt: Date
    _count: ImagesVideosCountAggregateOutputType | null
    _min: ImagesVideosMinAggregateOutputType | null
    _max: ImagesVideosMaxAggregateOutputType | null
  }

  type GetImagesVideosGroupByPayload<T extends ImagesVideosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagesVideosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagesVideosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagesVideosGroupByOutputType[P]>
            : GetScalarType<T[P], ImagesVideosGroupByOutputType[P]>
        }
      >
    >


  export type ImagesVideosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    imageId?: boolean
    videoId?: boolean
    createdAt?: boolean
    image?: boolean | ImageDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imagesVideos"]>

  export type ImagesVideosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    imageId?: boolean
    videoId?: boolean
    createdAt?: boolean
    image?: boolean | ImageDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imagesVideos"]>

  export type ImagesVideosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    imageId?: boolean
    videoId?: boolean
    createdAt?: boolean
    image?: boolean | ImageDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imagesVideos"]>

  export type ImagesVideosSelectScalar = {
    imageId?: boolean
    videoId?: boolean
    createdAt?: boolean
  }

  export type ImagesVideosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"imageId" | "videoId" | "createdAt", ExtArgs["result"]["imagesVideos"]>
  export type ImagesVideosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | ImageDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type ImagesVideosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | ImageDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type ImagesVideosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | ImageDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }

  export type $ImagesVideosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImagesVideos"
    objects: {
      image: Prisma.$ImagePayload<ExtArgs>
      video: Prisma.$VideoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      imageId: string
      videoId: string
      createdAt: Date
    }, ExtArgs["result"]["imagesVideos"]>
    composites: {}
  }

  type ImagesVideosGetPayload<S extends boolean | null | undefined | ImagesVideosDefaultArgs> = $Result.GetResult<Prisma.$ImagesVideosPayload, S>

  type ImagesVideosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImagesVideosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImagesVideosCountAggregateInputType | true
    }

  export interface ImagesVideosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImagesVideos'], meta: { name: 'ImagesVideos' } }
    /**
     * Find zero or one ImagesVideos that matches the filter.
     * @param {ImagesVideosFindUniqueArgs} args - Arguments to find a ImagesVideos
     * @example
     * // Get one ImagesVideos
     * const imagesVideos = await prisma.imagesVideos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImagesVideosFindUniqueArgs>(args: SelectSubset<T, ImagesVideosFindUniqueArgs<ExtArgs>>): Prisma__ImagesVideosClient<$Result.GetResult<Prisma.$ImagesVideosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImagesVideos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImagesVideosFindUniqueOrThrowArgs} args - Arguments to find a ImagesVideos
     * @example
     * // Get one ImagesVideos
     * const imagesVideos = await prisma.imagesVideos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImagesVideosFindUniqueOrThrowArgs>(args: SelectSubset<T, ImagesVideosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImagesVideosClient<$Result.GetResult<Prisma.$ImagesVideosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImagesVideos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesVideosFindFirstArgs} args - Arguments to find a ImagesVideos
     * @example
     * // Get one ImagesVideos
     * const imagesVideos = await prisma.imagesVideos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImagesVideosFindFirstArgs>(args?: SelectSubset<T, ImagesVideosFindFirstArgs<ExtArgs>>): Prisma__ImagesVideosClient<$Result.GetResult<Prisma.$ImagesVideosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImagesVideos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesVideosFindFirstOrThrowArgs} args - Arguments to find a ImagesVideos
     * @example
     * // Get one ImagesVideos
     * const imagesVideos = await prisma.imagesVideos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImagesVideosFindFirstOrThrowArgs>(args?: SelectSubset<T, ImagesVideosFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImagesVideosClient<$Result.GetResult<Prisma.$ImagesVideosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImagesVideos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesVideosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImagesVideos
     * const imagesVideos = await prisma.imagesVideos.findMany()
     * 
     * // Get first 10 ImagesVideos
     * const imagesVideos = await prisma.imagesVideos.findMany({ take: 10 })
     * 
     * // Only select the `imageId`
     * const imagesVideosWithImageIdOnly = await prisma.imagesVideos.findMany({ select: { imageId: true } })
     * 
     */
    findMany<T extends ImagesVideosFindManyArgs>(args?: SelectSubset<T, ImagesVideosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesVideosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImagesVideos.
     * @param {ImagesVideosCreateArgs} args - Arguments to create a ImagesVideos.
     * @example
     * // Create one ImagesVideos
     * const ImagesVideos = await prisma.imagesVideos.create({
     *   data: {
     *     // ... data to create a ImagesVideos
     *   }
     * })
     * 
     */
    create<T extends ImagesVideosCreateArgs>(args: SelectSubset<T, ImagesVideosCreateArgs<ExtArgs>>): Prisma__ImagesVideosClient<$Result.GetResult<Prisma.$ImagesVideosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImagesVideos.
     * @param {ImagesVideosCreateManyArgs} args - Arguments to create many ImagesVideos.
     * @example
     * // Create many ImagesVideos
     * const imagesVideos = await prisma.imagesVideos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImagesVideosCreateManyArgs>(args?: SelectSubset<T, ImagesVideosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImagesVideos and returns the data saved in the database.
     * @param {ImagesVideosCreateManyAndReturnArgs} args - Arguments to create many ImagesVideos.
     * @example
     * // Create many ImagesVideos
     * const imagesVideos = await prisma.imagesVideos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImagesVideos and only return the `imageId`
     * const imagesVideosWithImageIdOnly = await prisma.imagesVideos.createManyAndReturn({
     *   select: { imageId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImagesVideosCreateManyAndReturnArgs>(args?: SelectSubset<T, ImagesVideosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesVideosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImagesVideos.
     * @param {ImagesVideosDeleteArgs} args - Arguments to delete one ImagesVideos.
     * @example
     * // Delete one ImagesVideos
     * const ImagesVideos = await prisma.imagesVideos.delete({
     *   where: {
     *     // ... filter to delete one ImagesVideos
     *   }
     * })
     * 
     */
    delete<T extends ImagesVideosDeleteArgs>(args: SelectSubset<T, ImagesVideosDeleteArgs<ExtArgs>>): Prisma__ImagesVideosClient<$Result.GetResult<Prisma.$ImagesVideosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImagesVideos.
     * @param {ImagesVideosUpdateArgs} args - Arguments to update one ImagesVideos.
     * @example
     * // Update one ImagesVideos
     * const imagesVideos = await prisma.imagesVideos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImagesVideosUpdateArgs>(args: SelectSubset<T, ImagesVideosUpdateArgs<ExtArgs>>): Prisma__ImagesVideosClient<$Result.GetResult<Prisma.$ImagesVideosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImagesVideos.
     * @param {ImagesVideosDeleteManyArgs} args - Arguments to filter ImagesVideos to delete.
     * @example
     * // Delete a few ImagesVideos
     * const { count } = await prisma.imagesVideos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImagesVideosDeleteManyArgs>(args?: SelectSubset<T, ImagesVideosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImagesVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesVideosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImagesVideos
     * const imagesVideos = await prisma.imagesVideos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImagesVideosUpdateManyArgs>(args: SelectSubset<T, ImagesVideosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImagesVideos and returns the data updated in the database.
     * @param {ImagesVideosUpdateManyAndReturnArgs} args - Arguments to update many ImagesVideos.
     * @example
     * // Update many ImagesVideos
     * const imagesVideos = await prisma.imagesVideos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImagesVideos and only return the `imageId`
     * const imagesVideosWithImageIdOnly = await prisma.imagesVideos.updateManyAndReturn({
     *   select: { imageId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImagesVideosUpdateManyAndReturnArgs>(args: SelectSubset<T, ImagesVideosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesVideosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImagesVideos.
     * @param {ImagesVideosUpsertArgs} args - Arguments to update or create a ImagesVideos.
     * @example
     * // Update or create a ImagesVideos
     * const imagesVideos = await prisma.imagesVideos.upsert({
     *   create: {
     *     // ... data to create a ImagesVideos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImagesVideos we want to update
     *   }
     * })
     */
    upsert<T extends ImagesVideosUpsertArgs>(args: SelectSubset<T, ImagesVideosUpsertArgs<ExtArgs>>): Prisma__ImagesVideosClient<$Result.GetResult<Prisma.$ImagesVideosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImagesVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesVideosCountArgs} args - Arguments to filter ImagesVideos to count.
     * @example
     * // Count the number of ImagesVideos
     * const count = await prisma.imagesVideos.count({
     *   where: {
     *     // ... the filter for the ImagesVideos we want to count
     *   }
     * })
    **/
    count<T extends ImagesVideosCountArgs>(
      args?: Subset<T, ImagesVideosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagesVideosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImagesVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesVideosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImagesVideosAggregateArgs>(args: Subset<T, ImagesVideosAggregateArgs>): Prisma.PrismaPromise<GetImagesVideosAggregateType<T>>

    /**
     * Group by ImagesVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesVideosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImagesVideosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImagesVideosGroupByArgs['orderBy'] }
        : { orderBy?: ImagesVideosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImagesVideosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagesVideosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImagesVideos model
   */
  readonly fields: ImagesVideosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImagesVideos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImagesVideosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    image<T extends ImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImageDefaultArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ImagesVideos model
   */
  interface ImagesVideosFieldRefs {
    readonly imageId: FieldRef<"ImagesVideos", 'String'>
    readonly videoId: FieldRef<"ImagesVideos", 'String'>
    readonly createdAt: FieldRef<"ImagesVideos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ImagesVideos findUnique
   */
  export type ImagesVideosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagesVideos
     */
    select?: ImagesVideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagesVideos
     */
    omit?: ImagesVideosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesVideosInclude<ExtArgs> | null
    /**
     * Filter, which ImagesVideos to fetch.
     */
    where: ImagesVideosWhereUniqueInput
  }

  /**
   * ImagesVideos findUniqueOrThrow
   */
  export type ImagesVideosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagesVideos
     */
    select?: ImagesVideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagesVideos
     */
    omit?: ImagesVideosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesVideosInclude<ExtArgs> | null
    /**
     * Filter, which ImagesVideos to fetch.
     */
    where: ImagesVideosWhereUniqueInput
  }

  /**
   * ImagesVideos findFirst
   */
  export type ImagesVideosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagesVideos
     */
    select?: ImagesVideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagesVideos
     */
    omit?: ImagesVideosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesVideosInclude<ExtArgs> | null
    /**
     * Filter, which ImagesVideos to fetch.
     */
    where?: ImagesVideosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagesVideos to fetch.
     */
    orderBy?: ImagesVideosOrderByWithRelationInput | ImagesVideosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImagesVideos.
     */
    cursor?: ImagesVideosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagesVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagesVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImagesVideos.
     */
    distinct?: ImagesVideosScalarFieldEnum | ImagesVideosScalarFieldEnum[]
  }

  /**
   * ImagesVideos findFirstOrThrow
   */
  export type ImagesVideosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagesVideos
     */
    select?: ImagesVideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagesVideos
     */
    omit?: ImagesVideosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesVideosInclude<ExtArgs> | null
    /**
     * Filter, which ImagesVideos to fetch.
     */
    where?: ImagesVideosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagesVideos to fetch.
     */
    orderBy?: ImagesVideosOrderByWithRelationInput | ImagesVideosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImagesVideos.
     */
    cursor?: ImagesVideosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagesVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagesVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImagesVideos.
     */
    distinct?: ImagesVideosScalarFieldEnum | ImagesVideosScalarFieldEnum[]
  }

  /**
   * ImagesVideos findMany
   */
  export type ImagesVideosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagesVideos
     */
    select?: ImagesVideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagesVideos
     */
    omit?: ImagesVideosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesVideosInclude<ExtArgs> | null
    /**
     * Filter, which ImagesVideos to fetch.
     */
    where?: ImagesVideosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagesVideos to fetch.
     */
    orderBy?: ImagesVideosOrderByWithRelationInput | ImagesVideosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImagesVideos.
     */
    cursor?: ImagesVideosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagesVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagesVideos.
     */
    skip?: number
    distinct?: ImagesVideosScalarFieldEnum | ImagesVideosScalarFieldEnum[]
  }

  /**
   * ImagesVideos create
   */
  export type ImagesVideosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagesVideos
     */
    select?: ImagesVideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagesVideos
     */
    omit?: ImagesVideosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesVideosInclude<ExtArgs> | null
    /**
     * The data needed to create a ImagesVideos.
     */
    data: XOR<ImagesVideosCreateInput, ImagesVideosUncheckedCreateInput>
  }

  /**
   * ImagesVideos createMany
   */
  export type ImagesVideosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImagesVideos.
     */
    data: ImagesVideosCreateManyInput | ImagesVideosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImagesVideos createManyAndReturn
   */
  export type ImagesVideosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagesVideos
     */
    select?: ImagesVideosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImagesVideos
     */
    omit?: ImagesVideosOmit<ExtArgs> | null
    /**
     * The data used to create many ImagesVideos.
     */
    data: ImagesVideosCreateManyInput | ImagesVideosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesVideosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImagesVideos update
   */
  export type ImagesVideosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagesVideos
     */
    select?: ImagesVideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagesVideos
     */
    omit?: ImagesVideosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesVideosInclude<ExtArgs> | null
    /**
     * The data needed to update a ImagesVideos.
     */
    data: XOR<ImagesVideosUpdateInput, ImagesVideosUncheckedUpdateInput>
    /**
     * Choose, which ImagesVideos to update.
     */
    where: ImagesVideosWhereUniqueInput
  }

  /**
   * ImagesVideos updateMany
   */
  export type ImagesVideosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImagesVideos.
     */
    data: XOR<ImagesVideosUpdateManyMutationInput, ImagesVideosUncheckedUpdateManyInput>
    /**
     * Filter which ImagesVideos to update
     */
    where?: ImagesVideosWhereInput
    /**
     * Limit how many ImagesVideos to update.
     */
    limit?: number
  }

  /**
   * ImagesVideos updateManyAndReturn
   */
  export type ImagesVideosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagesVideos
     */
    select?: ImagesVideosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImagesVideos
     */
    omit?: ImagesVideosOmit<ExtArgs> | null
    /**
     * The data used to update ImagesVideos.
     */
    data: XOR<ImagesVideosUpdateManyMutationInput, ImagesVideosUncheckedUpdateManyInput>
    /**
     * Filter which ImagesVideos to update
     */
    where?: ImagesVideosWhereInput
    /**
     * Limit how many ImagesVideos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesVideosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImagesVideos upsert
   */
  export type ImagesVideosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagesVideos
     */
    select?: ImagesVideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagesVideos
     */
    omit?: ImagesVideosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesVideosInclude<ExtArgs> | null
    /**
     * The filter to search for the ImagesVideos to update in case it exists.
     */
    where: ImagesVideosWhereUniqueInput
    /**
     * In case the ImagesVideos found by the `where` argument doesn't exist, create a new ImagesVideos with this data.
     */
    create: XOR<ImagesVideosCreateInput, ImagesVideosUncheckedCreateInput>
    /**
     * In case the ImagesVideos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImagesVideosUpdateInput, ImagesVideosUncheckedUpdateInput>
  }

  /**
   * ImagesVideos delete
   */
  export type ImagesVideosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagesVideos
     */
    select?: ImagesVideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagesVideos
     */
    omit?: ImagesVideosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesVideosInclude<ExtArgs> | null
    /**
     * Filter which ImagesVideos to delete.
     */
    where: ImagesVideosWhereUniqueInput
  }

  /**
   * ImagesVideos deleteMany
   */
  export type ImagesVideosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImagesVideos to delete
     */
    where?: ImagesVideosWhereInput
    /**
     * Limit how many ImagesVideos to delete.
     */
    limit?: number
  }

  /**
   * ImagesVideos without action
   */
  export type ImagesVideosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagesVideos
     */
    select?: ImagesVideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagesVideos
     */
    omit?: ImagesVideosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesVideosInclude<ExtArgs> | null
  }


  /**
   * Model RenderQueue
   */

  export type AggregateRenderQueue = {
    _count: RenderQueueCountAggregateOutputType | null
    _min: RenderQueueMinAggregateOutputType | null
    _max: RenderQueueMaxAggregateOutputType | null
  }

  export type RenderQueueMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    priority: $Enums.RenderQueuePriority | null
    setUpScriptId: string | null
    templateId: string | null
    status: $Enums.RenderQueueStatus | null
    errorText: string | null
    doneAt: Date | null
    videoId: string | null
  }

  export type RenderQueueMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    priority: $Enums.RenderQueuePriority | null
    setUpScriptId: string | null
    templateId: string | null
    status: $Enums.RenderQueueStatus | null
    errorText: string | null
    doneAt: Date | null
    videoId: string | null
  }

  export type RenderQueueCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    priority: number
    setUpScriptId: number
    templateId: number
    status: number
    errorText: number
    doneAt: number
    videoId: number
    _all: number
  }


  export type RenderQueueMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    priority?: true
    setUpScriptId?: true
    templateId?: true
    status?: true
    errorText?: true
    doneAt?: true
    videoId?: true
  }

  export type RenderQueueMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    priority?: true
    setUpScriptId?: true
    templateId?: true
    status?: true
    errorText?: true
    doneAt?: true
    videoId?: true
  }

  export type RenderQueueCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    priority?: true
    setUpScriptId?: true
    templateId?: true
    status?: true
    errorText?: true
    doneAt?: true
    videoId?: true
    _all?: true
  }

  export type RenderQueueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RenderQueue to aggregate.
     */
    where?: RenderQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RenderQueues to fetch.
     */
    orderBy?: RenderQueueOrderByWithRelationInput | RenderQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RenderQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RenderQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RenderQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RenderQueues
    **/
    _count?: true | RenderQueueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RenderQueueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RenderQueueMaxAggregateInputType
  }

  export type GetRenderQueueAggregateType<T extends RenderQueueAggregateArgs> = {
        [P in keyof T & keyof AggregateRenderQueue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRenderQueue[P]>
      : GetScalarType<T[P], AggregateRenderQueue[P]>
  }




  export type RenderQueueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RenderQueueWhereInput
    orderBy?: RenderQueueOrderByWithAggregationInput | RenderQueueOrderByWithAggregationInput[]
    by: RenderQueueScalarFieldEnum[] | RenderQueueScalarFieldEnum
    having?: RenderQueueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RenderQueueCountAggregateInputType | true
    _min?: RenderQueueMinAggregateInputType
    _max?: RenderQueueMaxAggregateInputType
  }

  export type RenderQueueGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    priority: $Enums.RenderQueuePriority
    setUpScriptId: string | null
    templateId: string
    status: $Enums.RenderQueueStatus
    errorText: string | null
    doneAt: Date | null
    videoId: string
    _count: RenderQueueCountAggregateOutputType | null
    _min: RenderQueueMinAggregateOutputType | null
    _max: RenderQueueMaxAggregateOutputType | null
  }

  type GetRenderQueueGroupByPayload<T extends RenderQueueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RenderQueueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RenderQueueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RenderQueueGroupByOutputType[P]>
            : GetScalarType<T[P], RenderQueueGroupByOutputType[P]>
        }
      >
    >


  export type RenderQueueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    priority?: boolean
    setUpScriptId?: boolean
    templateId?: boolean
    status?: boolean
    errorText?: boolean
    doneAt?: boolean
    videoId?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["renderQueue"]>

  export type RenderQueueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    priority?: boolean
    setUpScriptId?: boolean
    templateId?: boolean
    status?: boolean
    errorText?: boolean
    doneAt?: boolean
    videoId?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["renderQueue"]>

  export type RenderQueueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    priority?: boolean
    setUpScriptId?: boolean
    templateId?: boolean
    status?: boolean
    errorText?: boolean
    doneAt?: boolean
    videoId?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["renderQueue"]>

  export type RenderQueueSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    priority?: boolean
    setUpScriptId?: boolean
    templateId?: boolean
    status?: boolean
    errorText?: boolean
    doneAt?: boolean
    videoId?: boolean
  }

  export type RenderQueueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "priority" | "setUpScriptId" | "templateId" | "status" | "errorText" | "doneAt" | "videoId", ExtArgs["result"]["renderQueue"]>
  export type RenderQueueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type RenderQueueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type RenderQueueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }

  export type $RenderQueuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RenderQueue"
    objects: {
      video: Prisma.$VideoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      priority: $Enums.RenderQueuePriority
      setUpScriptId: string | null
      templateId: string
      status: $Enums.RenderQueueStatus
      errorText: string | null
      doneAt: Date | null
      videoId: string
    }, ExtArgs["result"]["renderQueue"]>
    composites: {}
  }

  type RenderQueueGetPayload<S extends boolean | null | undefined | RenderQueueDefaultArgs> = $Result.GetResult<Prisma.$RenderQueuePayload, S>

  type RenderQueueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RenderQueueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RenderQueueCountAggregateInputType | true
    }

  export interface RenderQueueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RenderQueue'], meta: { name: 'RenderQueue' } }
    /**
     * Find zero or one RenderQueue that matches the filter.
     * @param {RenderQueueFindUniqueArgs} args - Arguments to find a RenderQueue
     * @example
     * // Get one RenderQueue
     * const renderQueue = await prisma.renderQueue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RenderQueueFindUniqueArgs>(args: SelectSubset<T, RenderQueueFindUniqueArgs<ExtArgs>>): Prisma__RenderQueueClient<$Result.GetResult<Prisma.$RenderQueuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RenderQueue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RenderQueueFindUniqueOrThrowArgs} args - Arguments to find a RenderQueue
     * @example
     * // Get one RenderQueue
     * const renderQueue = await prisma.renderQueue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RenderQueueFindUniqueOrThrowArgs>(args: SelectSubset<T, RenderQueueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RenderQueueClient<$Result.GetResult<Prisma.$RenderQueuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RenderQueue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderQueueFindFirstArgs} args - Arguments to find a RenderQueue
     * @example
     * // Get one RenderQueue
     * const renderQueue = await prisma.renderQueue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RenderQueueFindFirstArgs>(args?: SelectSubset<T, RenderQueueFindFirstArgs<ExtArgs>>): Prisma__RenderQueueClient<$Result.GetResult<Prisma.$RenderQueuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RenderQueue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderQueueFindFirstOrThrowArgs} args - Arguments to find a RenderQueue
     * @example
     * // Get one RenderQueue
     * const renderQueue = await prisma.renderQueue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RenderQueueFindFirstOrThrowArgs>(args?: SelectSubset<T, RenderQueueFindFirstOrThrowArgs<ExtArgs>>): Prisma__RenderQueueClient<$Result.GetResult<Prisma.$RenderQueuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RenderQueues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderQueueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RenderQueues
     * const renderQueues = await prisma.renderQueue.findMany()
     * 
     * // Get first 10 RenderQueues
     * const renderQueues = await prisma.renderQueue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const renderQueueWithIdOnly = await prisma.renderQueue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RenderQueueFindManyArgs>(args?: SelectSubset<T, RenderQueueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenderQueuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RenderQueue.
     * @param {RenderQueueCreateArgs} args - Arguments to create a RenderQueue.
     * @example
     * // Create one RenderQueue
     * const RenderQueue = await prisma.renderQueue.create({
     *   data: {
     *     // ... data to create a RenderQueue
     *   }
     * })
     * 
     */
    create<T extends RenderQueueCreateArgs>(args: SelectSubset<T, RenderQueueCreateArgs<ExtArgs>>): Prisma__RenderQueueClient<$Result.GetResult<Prisma.$RenderQueuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RenderQueues.
     * @param {RenderQueueCreateManyArgs} args - Arguments to create many RenderQueues.
     * @example
     * // Create many RenderQueues
     * const renderQueue = await prisma.renderQueue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RenderQueueCreateManyArgs>(args?: SelectSubset<T, RenderQueueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RenderQueues and returns the data saved in the database.
     * @param {RenderQueueCreateManyAndReturnArgs} args - Arguments to create many RenderQueues.
     * @example
     * // Create many RenderQueues
     * const renderQueue = await prisma.renderQueue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RenderQueues and only return the `id`
     * const renderQueueWithIdOnly = await prisma.renderQueue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RenderQueueCreateManyAndReturnArgs>(args?: SelectSubset<T, RenderQueueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenderQueuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RenderQueue.
     * @param {RenderQueueDeleteArgs} args - Arguments to delete one RenderQueue.
     * @example
     * // Delete one RenderQueue
     * const RenderQueue = await prisma.renderQueue.delete({
     *   where: {
     *     // ... filter to delete one RenderQueue
     *   }
     * })
     * 
     */
    delete<T extends RenderQueueDeleteArgs>(args: SelectSubset<T, RenderQueueDeleteArgs<ExtArgs>>): Prisma__RenderQueueClient<$Result.GetResult<Prisma.$RenderQueuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RenderQueue.
     * @param {RenderQueueUpdateArgs} args - Arguments to update one RenderQueue.
     * @example
     * // Update one RenderQueue
     * const renderQueue = await prisma.renderQueue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RenderQueueUpdateArgs>(args: SelectSubset<T, RenderQueueUpdateArgs<ExtArgs>>): Prisma__RenderQueueClient<$Result.GetResult<Prisma.$RenderQueuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RenderQueues.
     * @param {RenderQueueDeleteManyArgs} args - Arguments to filter RenderQueues to delete.
     * @example
     * // Delete a few RenderQueues
     * const { count } = await prisma.renderQueue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RenderQueueDeleteManyArgs>(args?: SelectSubset<T, RenderQueueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RenderQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderQueueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RenderQueues
     * const renderQueue = await prisma.renderQueue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RenderQueueUpdateManyArgs>(args: SelectSubset<T, RenderQueueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RenderQueues and returns the data updated in the database.
     * @param {RenderQueueUpdateManyAndReturnArgs} args - Arguments to update many RenderQueues.
     * @example
     * // Update many RenderQueues
     * const renderQueue = await prisma.renderQueue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RenderQueues and only return the `id`
     * const renderQueueWithIdOnly = await prisma.renderQueue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RenderQueueUpdateManyAndReturnArgs>(args: SelectSubset<T, RenderQueueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenderQueuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RenderQueue.
     * @param {RenderQueueUpsertArgs} args - Arguments to update or create a RenderQueue.
     * @example
     * // Update or create a RenderQueue
     * const renderQueue = await prisma.renderQueue.upsert({
     *   create: {
     *     // ... data to create a RenderQueue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RenderQueue we want to update
     *   }
     * })
     */
    upsert<T extends RenderQueueUpsertArgs>(args: SelectSubset<T, RenderQueueUpsertArgs<ExtArgs>>): Prisma__RenderQueueClient<$Result.GetResult<Prisma.$RenderQueuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RenderQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderQueueCountArgs} args - Arguments to filter RenderQueues to count.
     * @example
     * // Count the number of RenderQueues
     * const count = await prisma.renderQueue.count({
     *   where: {
     *     // ... the filter for the RenderQueues we want to count
     *   }
     * })
    **/
    count<T extends RenderQueueCountArgs>(
      args?: Subset<T, RenderQueueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RenderQueueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RenderQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderQueueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RenderQueueAggregateArgs>(args: Subset<T, RenderQueueAggregateArgs>): Prisma.PrismaPromise<GetRenderQueueAggregateType<T>>

    /**
     * Group by RenderQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderQueueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RenderQueueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RenderQueueGroupByArgs['orderBy'] }
        : { orderBy?: RenderQueueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RenderQueueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRenderQueueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RenderQueue model
   */
  readonly fields: RenderQueueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RenderQueue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RenderQueueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RenderQueue model
   */
  interface RenderQueueFieldRefs {
    readonly id: FieldRef<"RenderQueue", 'String'>
    readonly createdAt: FieldRef<"RenderQueue", 'DateTime'>
    readonly updatedAt: FieldRef<"RenderQueue", 'DateTime'>
    readonly priority: FieldRef<"RenderQueue", 'RenderQueuePriority'>
    readonly setUpScriptId: FieldRef<"RenderQueue", 'String'>
    readonly templateId: FieldRef<"RenderQueue", 'String'>
    readonly status: FieldRef<"RenderQueue", 'RenderQueueStatus'>
    readonly errorText: FieldRef<"RenderQueue", 'String'>
    readonly doneAt: FieldRef<"RenderQueue", 'DateTime'>
    readonly videoId: FieldRef<"RenderQueue", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RenderQueue findUnique
   */
  export type RenderQueueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderQueue
     */
    select?: RenderQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderQueue
     */
    omit?: RenderQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderQueueInclude<ExtArgs> | null
    /**
     * Filter, which RenderQueue to fetch.
     */
    where: RenderQueueWhereUniqueInput
  }

  /**
   * RenderQueue findUniqueOrThrow
   */
  export type RenderQueueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderQueue
     */
    select?: RenderQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderQueue
     */
    omit?: RenderQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderQueueInclude<ExtArgs> | null
    /**
     * Filter, which RenderQueue to fetch.
     */
    where: RenderQueueWhereUniqueInput
  }

  /**
   * RenderQueue findFirst
   */
  export type RenderQueueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderQueue
     */
    select?: RenderQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderQueue
     */
    omit?: RenderQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderQueueInclude<ExtArgs> | null
    /**
     * Filter, which RenderQueue to fetch.
     */
    where?: RenderQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RenderQueues to fetch.
     */
    orderBy?: RenderQueueOrderByWithRelationInput | RenderQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RenderQueues.
     */
    cursor?: RenderQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RenderQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RenderQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RenderQueues.
     */
    distinct?: RenderQueueScalarFieldEnum | RenderQueueScalarFieldEnum[]
  }

  /**
   * RenderQueue findFirstOrThrow
   */
  export type RenderQueueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderQueue
     */
    select?: RenderQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderQueue
     */
    omit?: RenderQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderQueueInclude<ExtArgs> | null
    /**
     * Filter, which RenderQueue to fetch.
     */
    where?: RenderQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RenderQueues to fetch.
     */
    orderBy?: RenderQueueOrderByWithRelationInput | RenderQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RenderQueues.
     */
    cursor?: RenderQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RenderQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RenderQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RenderQueues.
     */
    distinct?: RenderQueueScalarFieldEnum | RenderQueueScalarFieldEnum[]
  }

  /**
   * RenderQueue findMany
   */
  export type RenderQueueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderQueue
     */
    select?: RenderQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderQueue
     */
    omit?: RenderQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderQueueInclude<ExtArgs> | null
    /**
     * Filter, which RenderQueues to fetch.
     */
    where?: RenderQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RenderQueues to fetch.
     */
    orderBy?: RenderQueueOrderByWithRelationInput | RenderQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RenderQueues.
     */
    cursor?: RenderQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RenderQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RenderQueues.
     */
    skip?: number
    distinct?: RenderQueueScalarFieldEnum | RenderQueueScalarFieldEnum[]
  }

  /**
   * RenderQueue create
   */
  export type RenderQueueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderQueue
     */
    select?: RenderQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderQueue
     */
    omit?: RenderQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderQueueInclude<ExtArgs> | null
    /**
     * The data needed to create a RenderQueue.
     */
    data: XOR<RenderQueueCreateInput, RenderQueueUncheckedCreateInput>
  }

  /**
   * RenderQueue createMany
   */
  export type RenderQueueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RenderQueues.
     */
    data: RenderQueueCreateManyInput | RenderQueueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RenderQueue createManyAndReturn
   */
  export type RenderQueueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderQueue
     */
    select?: RenderQueueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RenderQueue
     */
    omit?: RenderQueueOmit<ExtArgs> | null
    /**
     * The data used to create many RenderQueues.
     */
    data: RenderQueueCreateManyInput | RenderQueueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderQueueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RenderQueue update
   */
  export type RenderQueueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderQueue
     */
    select?: RenderQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderQueue
     */
    omit?: RenderQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderQueueInclude<ExtArgs> | null
    /**
     * The data needed to update a RenderQueue.
     */
    data: XOR<RenderQueueUpdateInput, RenderQueueUncheckedUpdateInput>
    /**
     * Choose, which RenderQueue to update.
     */
    where: RenderQueueWhereUniqueInput
  }

  /**
   * RenderQueue updateMany
   */
  export type RenderQueueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RenderQueues.
     */
    data: XOR<RenderQueueUpdateManyMutationInput, RenderQueueUncheckedUpdateManyInput>
    /**
     * Filter which RenderQueues to update
     */
    where?: RenderQueueWhereInput
    /**
     * Limit how many RenderQueues to update.
     */
    limit?: number
  }

  /**
   * RenderQueue updateManyAndReturn
   */
  export type RenderQueueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderQueue
     */
    select?: RenderQueueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RenderQueue
     */
    omit?: RenderQueueOmit<ExtArgs> | null
    /**
     * The data used to update RenderQueues.
     */
    data: XOR<RenderQueueUpdateManyMutationInput, RenderQueueUncheckedUpdateManyInput>
    /**
     * Filter which RenderQueues to update
     */
    where?: RenderQueueWhereInput
    /**
     * Limit how many RenderQueues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderQueueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RenderQueue upsert
   */
  export type RenderQueueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderQueue
     */
    select?: RenderQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderQueue
     */
    omit?: RenderQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderQueueInclude<ExtArgs> | null
    /**
     * The filter to search for the RenderQueue to update in case it exists.
     */
    where: RenderQueueWhereUniqueInput
    /**
     * In case the RenderQueue found by the `where` argument doesn't exist, create a new RenderQueue with this data.
     */
    create: XOR<RenderQueueCreateInput, RenderQueueUncheckedCreateInput>
    /**
     * In case the RenderQueue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RenderQueueUpdateInput, RenderQueueUncheckedUpdateInput>
  }

  /**
   * RenderQueue delete
   */
  export type RenderQueueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderQueue
     */
    select?: RenderQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderQueue
     */
    omit?: RenderQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderQueueInclude<ExtArgs> | null
    /**
     * Filter which RenderQueue to delete.
     */
    where: RenderQueueWhereUniqueInput
  }

  /**
   * RenderQueue deleteMany
   */
  export type RenderQueueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RenderQueues to delete
     */
    where?: RenderQueueWhereInput
    /**
     * Limit how many RenderQueues to delete.
     */
    limit?: number
  }

  /**
   * RenderQueue without action
   */
  export type RenderQueueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderQueue
     */
    select?: RenderQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderQueue
     */
    omit?: RenderQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderQueueInclude<ExtArgs> | null
  }


  /**
   * Model ProviderLogs
   */

  export type AggregateProviderLogs = {
    _count: ProviderLogsCountAggregateOutputType | null
    _min: ProviderLogsMinAggregateOutputType | null
    _max: ProviderLogsMaxAggregateOutputType | null
  }

  export type ProviderLogsMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    stage: $Enums.ProviderProcessingStage | null
    entityType: $Enums.ProviderEntityType | null
    status: $Enums.ProviderOperationStatus | null
    message: string | null
  }

  export type ProviderLogsMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    stage: $Enums.ProviderProcessingStage | null
    entityType: $Enums.ProviderEntityType | null
    status: $Enums.ProviderOperationStatus | null
    message: string | null
  }

  export type ProviderLogsCountAggregateOutputType = {
    id: number
    createdAt: number
    stage: number
    entityType: number
    status: number
    message: number
    data: number
    _all: number
  }


  export type ProviderLogsMinAggregateInputType = {
    id?: true
    createdAt?: true
    stage?: true
    entityType?: true
    status?: true
    message?: true
  }

  export type ProviderLogsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    stage?: true
    entityType?: true
    status?: true
    message?: true
  }

  export type ProviderLogsCountAggregateInputType = {
    id?: true
    createdAt?: true
    stage?: true
    entityType?: true
    status?: true
    message?: true
    data?: true
    _all?: true
  }

  export type ProviderLogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderLogs to aggregate.
     */
    where?: ProviderLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderLogs to fetch.
     */
    orderBy?: ProviderLogsOrderByWithRelationInput | ProviderLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProviderLogs
    **/
    _count?: true | ProviderLogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderLogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderLogsMaxAggregateInputType
  }

  export type GetProviderLogsAggregateType<T extends ProviderLogsAggregateArgs> = {
        [P in keyof T & keyof AggregateProviderLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderLogs[P]>
      : GetScalarType<T[P], AggregateProviderLogs[P]>
  }




  export type ProviderLogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderLogsWhereInput
    orderBy?: ProviderLogsOrderByWithAggregationInput | ProviderLogsOrderByWithAggregationInput[]
    by: ProviderLogsScalarFieldEnum[] | ProviderLogsScalarFieldEnum
    having?: ProviderLogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderLogsCountAggregateInputType | true
    _min?: ProviderLogsMinAggregateInputType
    _max?: ProviderLogsMaxAggregateInputType
  }

  export type ProviderLogsGroupByOutputType = {
    id: string
    createdAt: Date
    stage: $Enums.ProviderProcessingStage
    entityType: $Enums.ProviderEntityType
    status: $Enums.ProviderOperationStatus
    message: string
    data: JsonValue | null
    _count: ProviderLogsCountAggregateOutputType | null
    _min: ProviderLogsMinAggregateOutputType | null
    _max: ProviderLogsMaxAggregateOutputType | null
  }

  type GetProviderLogsGroupByPayload<T extends ProviderLogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderLogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderLogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderLogsGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderLogsGroupByOutputType[P]>
        }
      >
    >


  export type ProviderLogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    stage?: boolean
    entityType?: boolean
    status?: boolean
    message?: boolean
    data?: boolean
  }, ExtArgs["result"]["providerLogs"]>

  export type ProviderLogsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    stage?: boolean
    entityType?: boolean
    status?: boolean
    message?: boolean
    data?: boolean
  }, ExtArgs["result"]["providerLogs"]>

  export type ProviderLogsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    stage?: boolean
    entityType?: boolean
    status?: boolean
    message?: boolean
    data?: boolean
  }, ExtArgs["result"]["providerLogs"]>

  export type ProviderLogsSelectScalar = {
    id?: boolean
    createdAt?: boolean
    stage?: boolean
    entityType?: boolean
    status?: boolean
    message?: boolean
    data?: boolean
  }

  export type ProviderLogsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "stage" | "entityType" | "status" | "message" | "data", ExtArgs["result"]["providerLogs"]>

  export type $ProviderLogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProviderLogs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      stage: $Enums.ProviderProcessingStage
      entityType: $Enums.ProviderEntityType
      status: $Enums.ProviderOperationStatus
      message: string
      data: Prisma.JsonValue | null
    }, ExtArgs["result"]["providerLogs"]>
    composites: {}
  }

  type ProviderLogsGetPayload<S extends boolean | null | undefined | ProviderLogsDefaultArgs> = $Result.GetResult<Prisma.$ProviderLogsPayload, S>

  type ProviderLogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProviderLogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderLogsCountAggregateInputType | true
    }

  export interface ProviderLogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProviderLogs'], meta: { name: 'ProviderLogs' } }
    /**
     * Find zero or one ProviderLogs that matches the filter.
     * @param {ProviderLogsFindUniqueArgs} args - Arguments to find a ProviderLogs
     * @example
     * // Get one ProviderLogs
     * const providerLogs = await prisma.providerLogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderLogsFindUniqueArgs>(args: SelectSubset<T, ProviderLogsFindUniqueArgs<ExtArgs>>): Prisma__ProviderLogsClient<$Result.GetResult<Prisma.$ProviderLogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProviderLogs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderLogsFindUniqueOrThrowArgs} args - Arguments to find a ProviderLogs
     * @example
     * // Get one ProviderLogs
     * const providerLogs = await prisma.providerLogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderLogsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderLogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderLogsClient<$Result.GetResult<Prisma.$ProviderLogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderLogsFindFirstArgs} args - Arguments to find a ProviderLogs
     * @example
     * // Get one ProviderLogs
     * const providerLogs = await prisma.providerLogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderLogsFindFirstArgs>(args?: SelectSubset<T, ProviderLogsFindFirstArgs<ExtArgs>>): Prisma__ProviderLogsClient<$Result.GetResult<Prisma.$ProviderLogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderLogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderLogsFindFirstOrThrowArgs} args - Arguments to find a ProviderLogs
     * @example
     * // Get one ProviderLogs
     * const providerLogs = await prisma.providerLogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderLogsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderLogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderLogsClient<$Result.GetResult<Prisma.$ProviderLogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProviderLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderLogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderLogs
     * const providerLogs = await prisma.providerLogs.findMany()
     * 
     * // Get first 10 ProviderLogs
     * const providerLogs = await prisma.providerLogs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerLogsWithIdOnly = await prisma.providerLogs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderLogsFindManyArgs>(args?: SelectSubset<T, ProviderLogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProviderLogs.
     * @param {ProviderLogsCreateArgs} args - Arguments to create a ProviderLogs.
     * @example
     * // Create one ProviderLogs
     * const ProviderLogs = await prisma.providerLogs.create({
     *   data: {
     *     // ... data to create a ProviderLogs
     *   }
     * })
     * 
     */
    create<T extends ProviderLogsCreateArgs>(args: SelectSubset<T, ProviderLogsCreateArgs<ExtArgs>>): Prisma__ProviderLogsClient<$Result.GetResult<Prisma.$ProviderLogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProviderLogs.
     * @param {ProviderLogsCreateManyArgs} args - Arguments to create many ProviderLogs.
     * @example
     * // Create many ProviderLogs
     * const providerLogs = await prisma.providerLogs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderLogsCreateManyArgs>(args?: SelectSubset<T, ProviderLogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProviderLogs and returns the data saved in the database.
     * @param {ProviderLogsCreateManyAndReturnArgs} args - Arguments to create many ProviderLogs.
     * @example
     * // Create many ProviderLogs
     * const providerLogs = await prisma.providerLogs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProviderLogs and only return the `id`
     * const providerLogsWithIdOnly = await prisma.providerLogs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderLogsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderLogsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderLogsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProviderLogs.
     * @param {ProviderLogsDeleteArgs} args - Arguments to delete one ProviderLogs.
     * @example
     * // Delete one ProviderLogs
     * const ProviderLogs = await prisma.providerLogs.delete({
     *   where: {
     *     // ... filter to delete one ProviderLogs
     *   }
     * })
     * 
     */
    delete<T extends ProviderLogsDeleteArgs>(args: SelectSubset<T, ProviderLogsDeleteArgs<ExtArgs>>): Prisma__ProviderLogsClient<$Result.GetResult<Prisma.$ProviderLogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProviderLogs.
     * @param {ProviderLogsUpdateArgs} args - Arguments to update one ProviderLogs.
     * @example
     * // Update one ProviderLogs
     * const providerLogs = await prisma.providerLogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderLogsUpdateArgs>(args: SelectSubset<T, ProviderLogsUpdateArgs<ExtArgs>>): Prisma__ProviderLogsClient<$Result.GetResult<Prisma.$ProviderLogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProviderLogs.
     * @param {ProviderLogsDeleteManyArgs} args - Arguments to filter ProviderLogs to delete.
     * @example
     * // Delete a few ProviderLogs
     * const { count } = await prisma.providerLogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderLogsDeleteManyArgs>(args?: SelectSubset<T, ProviderLogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderLogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderLogs
     * const providerLogs = await prisma.providerLogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderLogsUpdateManyArgs>(args: SelectSubset<T, ProviderLogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderLogs and returns the data updated in the database.
     * @param {ProviderLogsUpdateManyAndReturnArgs} args - Arguments to update many ProviderLogs.
     * @example
     * // Update many ProviderLogs
     * const providerLogs = await prisma.providerLogs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProviderLogs and only return the `id`
     * const providerLogsWithIdOnly = await prisma.providerLogs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProviderLogsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProviderLogsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderLogsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProviderLogs.
     * @param {ProviderLogsUpsertArgs} args - Arguments to update or create a ProviderLogs.
     * @example
     * // Update or create a ProviderLogs
     * const providerLogs = await prisma.providerLogs.upsert({
     *   create: {
     *     // ... data to create a ProviderLogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderLogs we want to update
     *   }
     * })
     */
    upsert<T extends ProviderLogsUpsertArgs>(args: SelectSubset<T, ProviderLogsUpsertArgs<ExtArgs>>): Prisma__ProviderLogsClient<$Result.GetResult<Prisma.$ProviderLogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProviderLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderLogsCountArgs} args - Arguments to filter ProviderLogs to count.
     * @example
     * // Count the number of ProviderLogs
     * const count = await prisma.providerLogs.count({
     *   where: {
     *     // ... the filter for the ProviderLogs we want to count
     *   }
     * })
    **/
    count<T extends ProviderLogsCountArgs>(
      args?: Subset<T, ProviderLogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderLogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProviderLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderLogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProviderLogsAggregateArgs>(args: Subset<T, ProviderLogsAggregateArgs>): Prisma.PrismaPromise<GetProviderLogsAggregateType<T>>

    /**
     * Group by ProviderLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderLogsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProviderLogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderLogsGroupByArgs['orderBy'] }
        : { orderBy?: ProviderLogsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProviderLogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProviderLogs model
   */
  readonly fields: ProviderLogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderLogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderLogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProviderLogs model
   */
  interface ProviderLogsFieldRefs {
    readonly id: FieldRef<"ProviderLogs", 'String'>
    readonly createdAt: FieldRef<"ProviderLogs", 'DateTime'>
    readonly stage: FieldRef<"ProviderLogs", 'ProviderProcessingStage'>
    readonly entityType: FieldRef<"ProviderLogs", 'ProviderEntityType'>
    readonly status: FieldRef<"ProviderLogs", 'ProviderOperationStatus'>
    readonly message: FieldRef<"ProviderLogs", 'String'>
    readonly data: FieldRef<"ProviderLogs", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * ProviderLogs findUnique
   */
  export type ProviderLogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderLogs
     */
    select?: ProviderLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderLogs
     */
    omit?: ProviderLogsOmit<ExtArgs> | null
    /**
     * Filter, which ProviderLogs to fetch.
     */
    where: ProviderLogsWhereUniqueInput
  }

  /**
   * ProviderLogs findUniqueOrThrow
   */
  export type ProviderLogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderLogs
     */
    select?: ProviderLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderLogs
     */
    omit?: ProviderLogsOmit<ExtArgs> | null
    /**
     * Filter, which ProviderLogs to fetch.
     */
    where: ProviderLogsWhereUniqueInput
  }

  /**
   * ProviderLogs findFirst
   */
  export type ProviderLogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderLogs
     */
    select?: ProviderLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderLogs
     */
    omit?: ProviderLogsOmit<ExtArgs> | null
    /**
     * Filter, which ProviderLogs to fetch.
     */
    where?: ProviderLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderLogs to fetch.
     */
    orderBy?: ProviderLogsOrderByWithRelationInput | ProviderLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderLogs.
     */
    cursor?: ProviderLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderLogs.
     */
    distinct?: ProviderLogsScalarFieldEnum | ProviderLogsScalarFieldEnum[]
  }

  /**
   * ProviderLogs findFirstOrThrow
   */
  export type ProviderLogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderLogs
     */
    select?: ProviderLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderLogs
     */
    omit?: ProviderLogsOmit<ExtArgs> | null
    /**
     * Filter, which ProviderLogs to fetch.
     */
    where?: ProviderLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderLogs to fetch.
     */
    orderBy?: ProviderLogsOrderByWithRelationInput | ProviderLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderLogs.
     */
    cursor?: ProviderLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderLogs.
     */
    distinct?: ProviderLogsScalarFieldEnum | ProviderLogsScalarFieldEnum[]
  }

  /**
   * ProviderLogs findMany
   */
  export type ProviderLogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderLogs
     */
    select?: ProviderLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderLogs
     */
    omit?: ProviderLogsOmit<ExtArgs> | null
    /**
     * Filter, which ProviderLogs to fetch.
     */
    where?: ProviderLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderLogs to fetch.
     */
    orderBy?: ProviderLogsOrderByWithRelationInput | ProviderLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProviderLogs.
     */
    cursor?: ProviderLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderLogs.
     */
    skip?: number
    distinct?: ProviderLogsScalarFieldEnum | ProviderLogsScalarFieldEnum[]
  }

  /**
   * ProviderLogs create
   */
  export type ProviderLogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderLogs
     */
    select?: ProviderLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderLogs
     */
    omit?: ProviderLogsOmit<ExtArgs> | null
    /**
     * The data needed to create a ProviderLogs.
     */
    data: XOR<ProviderLogsCreateInput, ProviderLogsUncheckedCreateInput>
  }

  /**
   * ProviderLogs createMany
   */
  export type ProviderLogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProviderLogs.
     */
    data: ProviderLogsCreateManyInput | ProviderLogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProviderLogs createManyAndReturn
   */
  export type ProviderLogsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderLogs
     */
    select?: ProviderLogsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderLogs
     */
    omit?: ProviderLogsOmit<ExtArgs> | null
    /**
     * The data used to create many ProviderLogs.
     */
    data: ProviderLogsCreateManyInput | ProviderLogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProviderLogs update
   */
  export type ProviderLogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderLogs
     */
    select?: ProviderLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderLogs
     */
    omit?: ProviderLogsOmit<ExtArgs> | null
    /**
     * The data needed to update a ProviderLogs.
     */
    data: XOR<ProviderLogsUpdateInput, ProviderLogsUncheckedUpdateInput>
    /**
     * Choose, which ProviderLogs to update.
     */
    where: ProviderLogsWhereUniqueInput
  }

  /**
   * ProviderLogs updateMany
   */
  export type ProviderLogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProviderLogs.
     */
    data: XOR<ProviderLogsUpdateManyMutationInput, ProviderLogsUncheckedUpdateManyInput>
    /**
     * Filter which ProviderLogs to update
     */
    where?: ProviderLogsWhereInput
    /**
     * Limit how many ProviderLogs to update.
     */
    limit?: number
  }

  /**
   * ProviderLogs updateManyAndReturn
   */
  export type ProviderLogsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderLogs
     */
    select?: ProviderLogsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderLogs
     */
    omit?: ProviderLogsOmit<ExtArgs> | null
    /**
     * The data used to update ProviderLogs.
     */
    data: XOR<ProviderLogsUpdateManyMutationInput, ProviderLogsUncheckedUpdateManyInput>
    /**
     * Filter which ProviderLogs to update
     */
    where?: ProviderLogsWhereInput
    /**
     * Limit how many ProviderLogs to update.
     */
    limit?: number
  }

  /**
   * ProviderLogs upsert
   */
  export type ProviderLogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderLogs
     */
    select?: ProviderLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderLogs
     */
    omit?: ProviderLogsOmit<ExtArgs> | null
    /**
     * The filter to search for the ProviderLogs to update in case it exists.
     */
    where: ProviderLogsWhereUniqueInput
    /**
     * In case the ProviderLogs found by the `where` argument doesn't exist, create a new ProviderLogs with this data.
     */
    create: XOR<ProviderLogsCreateInput, ProviderLogsUncheckedCreateInput>
    /**
     * In case the ProviderLogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderLogsUpdateInput, ProviderLogsUncheckedUpdateInput>
  }

  /**
   * ProviderLogs delete
   */
  export type ProviderLogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderLogs
     */
    select?: ProviderLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderLogs
     */
    omit?: ProviderLogsOmit<ExtArgs> | null
    /**
     * Filter which ProviderLogs to delete.
     */
    where: ProviderLogsWhereUniqueInput
  }

  /**
   * ProviderLogs deleteMany
   */
  export type ProviderLogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderLogs to delete
     */
    where?: ProviderLogsWhereInput
    /**
     * Limit how many ProviderLogs to delete.
     */
    limit?: number
  }

  /**
   * ProviderLogs without action
   */
  export type ProviderLogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderLogs
     */
    select?: ProviderLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderLogs
     */
    omit?: ProviderLogsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VideoScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    url: 'url',
    subtitles: 'subtitles'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    url: 'url'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const ImagesVideosScalarFieldEnum: {
    imageId: 'imageId',
    videoId: 'videoId',
    createdAt: 'createdAt'
  };

  export type ImagesVideosScalarFieldEnum = (typeof ImagesVideosScalarFieldEnum)[keyof typeof ImagesVideosScalarFieldEnum]


  export const RenderQueueScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    priority: 'priority',
    setUpScriptId: 'setUpScriptId',
    templateId: 'templateId',
    status: 'status',
    errorText: 'errorText',
    doneAt: 'doneAt',
    videoId: 'videoId'
  };

  export type RenderQueueScalarFieldEnum = (typeof RenderQueueScalarFieldEnum)[keyof typeof RenderQueueScalarFieldEnum]


  export const ProviderLogsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    stage: 'stage',
    entityType: 'entityType',
    status: 'status',
    message: 'message',
    data: 'data'
  };

  export type ProviderLogsScalarFieldEnum = (typeof ProviderLogsScalarFieldEnum)[keyof typeof ProviderLogsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'RenderQueuePriority'
   */
  export type EnumRenderQueuePriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RenderQueuePriority'>
    


  /**
   * Reference to a field of type 'RenderQueuePriority[]'
   */
  export type ListEnumRenderQueuePriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RenderQueuePriority[]'>
    


  /**
   * Reference to a field of type 'RenderQueueStatus'
   */
  export type EnumRenderQueueStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RenderQueueStatus'>
    


  /**
   * Reference to a field of type 'RenderQueueStatus[]'
   */
  export type ListEnumRenderQueueStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RenderQueueStatus[]'>
    


  /**
   * Reference to a field of type 'ProviderProcessingStage'
   */
  export type EnumProviderProcessingStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProviderProcessingStage'>
    


  /**
   * Reference to a field of type 'ProviderProcessingStage[]'
   */
  export type ListEnumProviderProcessingStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProviderProcessingStage[]'>
    


  /**
   * Reference to a field of type 'ProviderEntityType'
   */
  export type EnumProviderEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProviderEntityType'>
    


  /**
   * Reference to a field of type 'ProviderEntityType[]'
   */
  export type ListEnumProviderEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProviderEntityType[]'>
    


  /**
   * Reference to a field of type 'ProviderOperationStatus'
   */
  export type EnumProviderOperationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProviderOperationStatus'>
    


  /**
   * Reference to a field of type 'ProviderOperationStatus[]'
   */
  export type ListEnumProviderOperationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProviderOperationStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: UuidFilter<"Video"> | string
    createdAt?: DateTimeFilter<"Video"> | Date | string
    updatedAt?: DateTimeFilter<"Video"> | Date | string
    url?: StringFilter<"Video"> | string
    subtitles?: JsonNullableFilter<"Video">
    renderQueues?: RenderQueueListRelationFilter
    media?: ImagesVideosListRelationFilter
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    subtitles?: SortOrderInput | SortOrder
    renderQueues?: RenderQueueOrderByRelationAggregateInput
    media?: ImagesVideosOrderByRelationAggregateInput
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    createdAt?: DateTimeFilter<"Video"> | Date | string
    updatedAt?: DateTimeFilter<"Video"> | Date | string
    subtitles?: JsonNullableFilter<"Video">
    renderQueues?: RenderQueueListRelationFilter
    media?: ImagesVideosListRelationFilter
  }, "id" | "url">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    subtitles?: SortOrderInput | SortOrder
    _count?: VideoCountOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Video"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
    url?: StringWithAggregatesFilter<"Video"> | string
    subtitles?: JsonNullableWithAggregatesFilter<"Video">
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: UuidFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
    url?: StringFilter<"Image"> | string
    media?: ImagesVideosListRelationFilter
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    media?: ImagesVideosOrderByRelationAggregateInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
    media?: ImagesVideosListRelationFilter
  }, "id" | "url">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Image"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
    url?: StringWithAggregatesFilter<"Image"> | string
  }

  export type ImagesVideosWhereInput = {
    AND?: ImagesVideosWhereInput | ImagesVideosWhereInput[]
    OR?: ImagesVideosWhereInput[]
    NOT?: ImagesVideosWhereInput | ImagesVideosWhereInput[]
    imageId?: UuidFilter<"ImagesVideos"> | string
    videoId?: UuidFilter<"ImagesVideos"> | string
    createdAt?: DateTimeFilter<"ImagesVideos"> | Date | string
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }

  export type ImagesVideosOrderByWithRelationInput = {
    imageId?: SortOrder
    videoId?: SortOrder
    createdAt?: SortOrder
    image?: ImageOrderByWithRelationInput
    video?: VideoOrderByWithRelationInput
  }

  export type ImagesVideosWhereUniqueInput = Prisma.AtLeast<{
    imageId_videoId?: ImagesVideosImageIdVideoIdCompoundUniqueInput
    AND?: ImagesVideosWhereInput | ImagesVideosWhereInput[]
    OR?: ImagesVideosWhereInput[]
    NOT?: ImagesVideosWhereInput | ImagesVideosWhereInput[]
    imageId?: UuidFilter<"ImagesVideos"> | string
    videoId?: UuidFilter<"ImagesVideos"> | string
    createdAt?: DateTimeFilter<"ImagesVideos"> | Date | string
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }, "imageId_videoId">

  export type ImagesVideosOrderByWithAggregationInput = {
    imageId?: SortOrder
    videoId?: SortOrder
    createdAt?: SortOrder
    _count?: ImagesVideosCountOrderByAggregateInput
    _max?: ImagesVideosMaxOrderByAggregateInput
    _min?: ImagesVideosMinOrderByAggregateInput
  }

  export type ImagesVideosScalarWhereWithAggregatesInput = {
    AND?: ImagesVideosScalarWhereWithAggregatesInput | ImagesVideosScalarWhereWithAggregatesInput[]
    OR?: ImagesVideosScalarWhereWithAggregatesInput[]
    NOT?: ImagesVideosScalarWhereWithAggregatesInput | ImagesVideosScalarWhereWithAggregatesInput[]
    imageId?: UuidWithAggregatesFilter<"ImagesVideos"> | string
    videoId?: UuidWithAggregatesFilter<"ImagesVideos"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ImagesVideos"> | Date | string
  }

  export type RenderQueueWhereInput = {
    AND?: RenderQueueWhereInput | RenderQueueWhereInput[]
    OR?: RenderQueueWhereInput[]
    NOT?: RenderQueueWhereInput | RenderQueueWhereInput[]
    id?: UuidFilter<"RenderQueue"> | string
    createdAt?: DateTimeFilter<"RenderQueue"> | Date | string
    updatedAt?: DateTimeFilter<"RenderQueue"> | Date | string
    priority?: EnumRenderQueuePriorityFilter<"RenderQueue"> | $Enums.RenderQueuePriority
    setUpScriptId?: UuidNullableFilter<"RenderQueue"> | string | null
    templateId?: UuidFilter<"RenderQueue"> | string
    status?: EnumRenderQueueStatusFilter<"RenderQueue"> | $Enums.RenderQueueStatus
    errorText?: StringNullableFilter<"RenderQueue"> | string | null
    doneAt?: DateTimeNullableFilter<"RenderQueue"> | Date | string | null
    videoId?: UuidFilter<"RenderQueue"> | string
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }

  export type RenderQueueOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    priority?: SortOrder
    setUpScriptId?: SortOrderInput | SortOrder
    templateId?: SortOrder
    status?: SortOrder
    errorText?: SortOrderInput | SortOrder
    doneAt?: SortOrderInput | SortOrder
    videoId?: SortOrder
    video?: VideoOrderByWithRelationInput
  }

  export type RenderQueueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RenderQueueWhereInput | RenderQueueWhereInput[]
    OR?: RenderQueueWhereInput[]
    NOT?: RenderQueueWhereInput | RenderQueueWhereInput[]
    createdAt?: DateTimeFilter<"RenderQueue"> | Date | string
    updatedAt?: DateTimeFilter<"RenderQueue"> | Date | string
    priority?: EnumRenderQueuePriorityFilter<"RenderQueue"> | $Enums.RenderQueuePriority
    setUpScriptId?: UuidNullableFilter<"RenderQueue"> | string | null
    templateId?: UuidFilter<"RenderQueue"> | string
    status?: EnumRenderQueueStatusFilter<"RenderQueue"> | $Enums.RenderQueueStatus
    errorText?: StringNullableFilter<"RenderQueue"> | string | null
    doneAt?: DateTimeNullableFilter<"RenderQueue"> | Date | string | null
    videoId?: UuidFilter<"RenderQueue"> | string
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }, "id">

  export type RenderQueueOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    priority?: SortOrder
    setUpScriptId?: SortOrderInput | SortOrder
    templateId?: SortOrder
    status?: SortOrder
    errorText?: SortOrderInput | SortOrder
    doneAt?: SortOrderInput | SortOrder
    videoId?: SortOrder
    _count?: RenderQueueCountOrderByAggregateInput
    _max?: RenderQueueMaxOrderByAggregateInput
    _min?: RenderQueueMinOrderByAggregateInput
  }

  export type RenderQueueScalarWhereWithAggregatesInput = {
    AND?: RenderQueueScalarWhereWithAggregatesInput | RenderQueueScalarWhereWithAggregatesInput[]
    OR?: RenderQueueScalarWhereWithAggregatesInput[]
    NOT?: RenderQueueScalarWhereWithAggregatesInput | RenderQueueScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"RenderQueue"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RenderQueue"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RenderQueue"> | Date | string
    priority?: EnumRenderQueuePriorityWithAggregatesFilter<"RenderQueue"> | $Enums.RenderQueuePriority
    setUpScriptId?: UuidNullableWithAggregatesFilter<"RenderQueue"> | string | null
    templateId?: UuidWithAggregatesFilter<"RenderQueue"> | string
    status?: EnumRenderQueueStatusWithAggregatesFilter<"RenderQueue"> | $Enums.RenderQueueStatus
    errorText?: StringNullableWithAggregatesFilter<"RenderQueue"> | string | null
    doneAt?: DateTimeNullableWithAggregatesFilter<"RenderQueue"> | Date | string | null
    videoId?: UuidWithAggregatesFilter<"RenderQueue"> | string
  }

  export type ProviderLogsWhereInput = {
    AND?: ProviderLogsWhereInput | ProviderLogsWhereInput[]
    OR?: ProviderLogsWhereInput[]
    NOT?: ProviderLogsWhereInput | ProviderLogsWhereInput[]
    id?: UuidFilter<"ProviderLogs"> | string
    createdAt?: DateTimeFilter<"ProviderLogs"> | Date | string
    stage?: EnumProviderProcessingStageFilter<"ProviderLogs"> | $Enums.ProviderProcessingStage
    entityType?: EnumProviderEntityTypeFilter<"ProviderLogs"> | $Enums.ProviderEntityType
    status?: EnumProviderOperationStatusFilter<"ProviderLogs"> | $Enums.ProviderOperationStatus
    message?: StringFilter<"ProviderLogs"> | string
    data?: JsonNullableFilter<"ProviderLogs">
  }

  export type ProviderLogsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    stage?: SortOrder
    entityType?: SortOrder
    status?: SortOrder
    message?: SortOrder
    data?: SortOrderInput | SortOrder
  }

  export type ProviderLogsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProviderLogsWhereInput | ProviderLogsWhereInput[]
    OR?: ProviderLogsWhereInput[]
    NOT?: ProviderLogsWhereInput | ProviderLogsWhereInput[]
    createdAt?: DateTimeFilter<"ProviderLogs"> | Date | string
    stage?: EnumProviderProcessingStageFilter<"ProviderLogs"> | $Enums.ProviderProcessingStage
    entityType?: EnumProviderEntityTypeFilter<"ProviderLogs"> | $Enums.ProviderEntityType
    status?: EnumProviderOperationStatusFilter<"ProviderLogs"> | $Enums.ProviderOperationStatus
    message?: StringFilter<"ProviderLogs"> | string
    data?: JsonNullableFilter<"ProviderLogs">
  }, "id">

  export type ProviderLogsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    stage?: SortOrder
    entityType?: SortOrder
    status?: SortOrder
    message?: SortOrder
    data?: SortOrderInput | SortOrder
    _count?: ProviderLogsCountOrderByAggregateInput
    _max?: ProviderLogsMaxOrderByAggregateInput
    _min?: ProviderLogsMinOrderByAggregateInput
  }

  export type ProviderLogsScalarWhereWithAggregatesInput = {
    AND?: ProviderLogsScalarWhereWithAggregatesInput | ProviderLogsScalarWhereWithAggregatesInput[]
    OR?: ProviderLogsScalarWhereWithAggregatesInput[]
    NOT?: ProviderLogsScalarWhereWithAggregatesInput | ProviderLogsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProviderLogs"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProviderLogs"> | Date | string
    stage?: EnumProviderProcessingStageWithAggregatesFilter<"ProviderLogs"> | $Enums.ProviderProcessingStage
    entityType?: EnumProviderEntityTypeWithAggregatesFilter<"ProviderLogs"> | $Enums.ProviderEntityType
    status?: EnumProviderOperationStatusWithAggregatesFilter<"ProviderLogs"> | $Enums.ProviderOperationStatus
    message?: StringWithAggregatesFilter<"ProviderLogs"> | string
    data?: JsonNullableWithAggregatesFilter<"ProviderLogs">
  }

  export type VideoCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    subtitles?: NullableJsonNullValueInput | InputJsonValue
    renderQueues?: RenderQueueCreateNestedManyWithoutVideoInput
    media?: ImagesVideosCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    subtitles?: NullableJsonNullValueInput | InputJsonValue
    renderQueues?: RenderQueueUncheckedCreateNestedManyWithoutVideoInput
    media?: ImagesVideosUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    subtitles?: NullableJsonNullValueInput | InputJsonValue
    renderQueues?: RenderQueueUpdateManyWithoutVideoNestedInput
    media?: ImagesVideosUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    subtitles?: NullableJsonNullValueInput | InputJsonValue
    renderQueues?: RenderQueueUncheckedUpdateManyWithoutVideoNestedInput
    media?: ImagesVideosUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    subtitles?: NullableJsonNullValueInput | InputJsonValue
  }

  export type VideoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    subtitles?: NullableJsonNullValueInput | InputJsonValue
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    subtitles?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ImageCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    media?: ImagesVideosCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    media?: ImagesVideosUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    media?: ImagesVideosUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    media?: ImagesVideosUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
  }

  export type ImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesVideosCreateInput = {
    createdAt?: Date | string
    image: ImageCreateNestedOneWithoutMediaInput
    video: VideoCreateNestedOneWithoutMediaInput
  }

  export type ImagesVideosUncheckedCreateInput = {
    imageId: string
    videoId: string
    createdAt?: Date | string
  }

  export type ImagesVideosUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImageUpdateOneRequiredWithoutMediaNestedInput
    video?: VideoUpdateOneRequiredWithoutMediaNestedInput
  }

  export type ImagesVideosUncheckedUpdateInput = {
    imageId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesVideosCreateManyInput = {
    imageId: string
    videoId: string
    createdAt?: Date | string
  }

  export type ImagesVideosUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesVideosUncheckedUpdateManyInput = {
    imageId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenderQueueCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    priority?: $Enums.RenderQueuePriority
    setUpScriptId?: string | null
    templateId: string
    status?: $Enums.RenderQueueStatus
    errorText?: string | null
    doneAt?: Date | string | null
    video: VideoCreateNestedOneWithoutRenderQueuesInput
  }

  export type RenderQueueUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    priority?: $Enums.RenderQueuePriority
    setUpScriptId?: string | null
    templateId: string
    status?: $Enums.RenderQueueStatus
    errorText?: string | null
    doneAt?: Date | string | null
    videoId: string
  }

  export type RenderQueueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: EnumRenderQueuePriorityFieldUpdateOperationsInput | $Enums.RenderQueuePriority
    setUpScriptId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: StringFieldUpdateOperationsInput | string
    status?: EnumRenderQueueStatusFieldUpdateOperationsInput | $Enums.RenderQueueStatus
    errorText?: NullableStringFieldUpdateOperationsInput | string | null
    doneAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    video?: VideoUpdateOneRequiredWithoutRenderQueuesNestedInput
  }

  export type RenderQueueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: EnumRenderQueuePriorityFieldUpdateOperationsInput | $Enums.RenderQueuePriority
    setUpScriptId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: StringFieldUpdateOperationsInput | string
    status?: EnumRenderQueueStatusFieldUpdateOperationsInput | $Enums.RenderQueueStatus
    errorText?: NullableStringFieldUpdateOperationsInput | string | null
    doneAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type RenderQueueCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    priority?: $Enums.RenderQueuePriority
    setUpScriptId?: string | null
    templateId: string
    status?: $Enums.RenderQueueStatus
    errorText?: string | null
    doneAt?: Date | string | null
    videoId: string
  }

  export type RenderQueueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: EnumRenderQueuePriorityFieldUpdateOperationsInput | $Enums.RenderQueuePriority
    setUpScriptId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: StringFieldUpdateOperationsInput | string
    status?: EnumRenderQueueStatusFieldUpdateOperationsInput | $Enums.RenderQueueStatus
    errorText?: NullableStringFieldUpdateOperationsInput | string | null
    doneAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RenderQueueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: EnumRenderQueuePriorityFieldUpdateOperationsInput | $Enums.RenderQueuePriority
    setUpScriptId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: StringFieldUpdateOperationsInput | string
    status?: EnumRenderQueueStatusFieldUpdateOperationsInput | $Enums.RenderQueueStatus
    errorText?: NullableStringFieldUpdateOperationsInput | string | null
    doneAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderLogsCreateInput = {
    id?: string
    createdAt?: Date | string
    stage: $Enums.ProviderProcessingStage
    entityType: $Enums.ProviderEntityType
    status: $Enums.ProviderOperationStatus
    message: string
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProviderLogsUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    stage: $Enums.ProviderProcessingStage
    entityType: $Enums.ProviderEntityType
    status: $Enums.ProviderOperationStatus
    message: string
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProviderLogsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stage?: EnumProviderProcessingStageFieldUpdateOperationsInput | $Enums.ProviderProcessingStage
    entityType?: EnumProviderEntityTypeFieldUpdateOperationsInput | $Enums.ProviderEntityType
    status?: EnumProviderOperationStatusFieldUpdateOperationsInput | $Enums.ProviderOperationStatus
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProviderLogsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stage?: EnumProviderProcessingStageFieldUpdateOperationsInput | $Enums.ProviderProcessingStage
    entityType?: EnumProviderEntityTypeFieldUpdateOperationsInput | $Enums.ProviderEntityType
    status?: EnumProviderOperationStatusFieldUpdateOperationsInput | $Enums.ProviderOperationStatus
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProviderLogsCreateManyInput = {
    id?: string
    createdAt?: Date | string
    stage: $Enums.ProviderProcessingStage
    entityType: $Enums.ProviderEntityType
    status: $Enums.ProviderOperationStatus
    message: string
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProviderLogsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stage?: EnumProviderProcessingStageFieldUpdateOperationsInput | $Enums.ProviderProcessingStage
    entityType?: EnumProviderEntityTypeFieldUpdateOperationsInput | $Enums.ProviderEntityType
    status?: EnumProviderOperationStatusFieldUpdateOperationsInput | $Enums.ProviderOperationStatus
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProviderLogsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stage?: EnumProviderProcessingStageFieldUpdateOperationsInput | $Enums.ProviderProcessingStage
    entityType?: EnumProviderEntityTypeFieldUpdateOperationsInput | $Enums.ProviderEntityType
    status?: EnumProviderOperationStatusFieldUpdateOperationsInput | $Enums.ProviderOperationStatus
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RenderQueueListRelationFilter = {
    every?: RenderQueueWhereInput
    some?: RenderQueueWhereInput
    none?: RenderQueueWhereInput
  }

  export type ImagesVideosListRelationFilter = {
    every?: ImagesVideosWhereInput
    some?: ImagesVideosWhereInput
    none?: ImagesVideosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RenderQueueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImagesVideosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    subtitles?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
  }

  export type ImageScalarRelationFilter = {
    is?: ImageWhereInput
    isNot?: ImageWhereInput
  }

  export type VideoScalarRelationFilter = {
    is?: VideoWhereInput
    isNot?: VideoWhereInput
  }

  export type ImagesVideosImageIdVideoIdCompoundUniqueInput = {
    imageId: string
    videoId: string
  }

  export type ImagesVideosCountOrderByAggregateInput = {
    imageId?: SortOrder
    videoId?: SortOrder
    createdAt?: SortOrder
  }

  export type ImagesVideosMaxOrderByAggregateInput = {
    imageId?: SortOrder
    videoId?: SortOrder
    createdAt?: SortOrder
  }

  export type ImagesVideosMinOrderByAggregateInput = {
    imageId?: SortOrder
    videoId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumRenderQueuePriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.RenderQueuePriority | EnumRenderQueuePriorityFieldRefInput<$PrismaModel>
    in?: $Enums.RenderQueuePriority[] | ListEnumRenderQueuePriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.RenderQueuePriority[] | ListEnumRenderQueuePriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumRenderQueuePriorityFilter<$PrismaModel> | $Enums.RenderQueuePriority
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRenderQueueStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RenderQueueStatus | EnumRenderQueueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RenderQueueStatus[] | ListEnumRenderQueueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RenderQueueStatus[] | ListEnumRenderQueueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRenderQueueStatusFilter<$PrismaModel> | $Enums.RenderQueueStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RenderQueueCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    priority?: SortOrder
    setUpScriptId?: SortOrder
    templateId?: SortOrder
    status?: SortOrder
    errorText?: SortOrder
    doneAt?: SortOrder
    videoId?: SortOrder
  }

  export type RenderQueueMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    priority?: SortOrder
    setUpScriptId?: SortOrder
    templateId?: SortOrder
    status?: SortOrder
    errorText?: SortOrder
    doneAt?: SortOrder
    videoId?: SortOrder
  }

  export type RenderQueueMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    priority?: SortOrder
    setUpScriptId?: SortOrder
    templateId?: SortOrder
    status?: SortOrder
    errorText?: SortOrder
    doneAt?: SortOrder
    videoId?: SortOrder
  }

  export type EnumRenderQueuePriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RenderQueuePriority | EnumRenderQueuePriorityFieldRefInput<$PrismaModel>
    in?: $Enums.RenderQueuePriority[] | ListEnumRenderQueuePriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.RenderQueuePriority[] | ListEnumRenderQueuePriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumRenderQueuePriorityWithAggregatesFilter<$PrismaModel> | $Enums.RenderQueuePriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRenderQueuePriorityFilter<$PrismaModel>
    _max?: NestedEnumRenderQueuePriorityFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRenderQueueStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RenderQueueStatus | EnumRenderQueueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RenderQueueStatus[] | ListEnumRenderQueueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RenderQueueStatus[] | ListEnumRenderQueueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRenderQueueStatusWithAggregatesFilter<$PrismaModel> | $Enums.RenderQueueStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRenderQueueStatusFilter<$PrismaModel>
    _max?: NestedEnumRenderQueueStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumProviderProcessingStageFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderProcessingStage | EnumProviderProcessingStageFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderProcessingStage[] | ListEnumProviderProcessingStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProviderProcessingStage[] | ListEnumProviderProcessingStageFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderProcessingStageFilter<$PrismaModel> | $Enums.ProviderProcessingStage
  }

  export type EnumProviderEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderEntityType | EnumProviderEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderEntityType[] | ListEnumProviderEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProviderEntityType[] | ListEnumProviderEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderEntityTypeFilter<$PrismaModel> | $Enums.ProviderEntityType
  }

  export type EnumProviderOperationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderOperationStatus | EnumProviderOperationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderOperationStatus[] | ListEnumProviderOperationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProviderOperationStatus[] | ListEnumProviderOperationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderOperationStatusFilter<$PrismaModel> | $Enums.ProviderOperationStatus
  }

  export type ProviderLogsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    stage?: SortOrder
    entityType?: SortOrder
    status?: SortOrder
    message?: SortOrder
    data?: SortOrder
  }

  export type ProviderLogsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    stage?: SortOrder
    entityType?: SortOrder
    status?: SortOrder
    message?: SortOrder
  }

  export type ProviderLogsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    stage?: SortOrder
    entityType?: SortOrder
    status?: SortOrder
    message?: SortOrder
  }

  export type EnumProviderProcessingStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderProcessingStage | EnumProviderProcessingStageFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderProcessingStage[] | ListEnumProviderProcessingStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProviderProcessingStage[] | ListEnumProviderProcessingStageFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderProcessingStageWithAggregatesFilter<$PrismaModel> | $Enums.ProviderProcessingStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderProcessingStageFilter<$PrismaModel>
    _max?: NestedEnumProviderProcessingStageFilter<$PrismaModel>
  }

  export type EnumProviderEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderEntityType | EnumProviderEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderEntityType[] | ListEnumProviderEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProviderEntityType[] | ListEnumProviderEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProviderEntityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderEntityTypeFilter<$PrismaModel>
    _max?: NestedEnumProviderEntityTypeFilter<$PrismaModel>
  }

  export type EnumProviderOperationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderOperationStatus | EnumProviderOperationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderOperationStatus[] | ListEnumProviderOperationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProviderOperationStatus[] | ListEnumProviderOperationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderOperationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProviderOperationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderOperationStatusFilter<$PrismaModel>
    _max?: NestedEnumProviderOperationStatusFilter<$PrismaModel>
  }

  export type RenderQueueCreateNestedManyWithoutVideoInput = {
    create?: XOR<RenderQueueCreateWithoutVideoInput, RenderQueueUncheckedCreateWithoutVideoInput> | RenderQueueCreateWithoutVideoInput[] | RenderQueueUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: RenderQueueCreateOrConnectWithoutVideoInput | RenderQueueCreateOrConnectWithoutVideoInput[]
    createMany?: RenderQueueCreateManyVideoInputEnvelope
    connect?: RenderQueueWhereUniqueInput | RenderQueueWhereUniqueInput[]
  }

  export type ImagesVideosCreateNestedManyWithoutVideoInput = {
    create?: XOR<ImagesVideosCreateWithoutVideoInput, ImagesVideosUncheckedCreateWithoutVideoInput> | ImagesVideosCreateWithoutVideoInput[] | ImagesVideosUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: ImagesVideosCreateOrConnectWithoutVideoInput | ImagesVideosCreateOrConnectWithoutVideoInput[]
    createMany?: ImagesVideosCreateManyVideoInputEnvelope
    connect?: ImagesVideosWhereUniqueInput | ImagesVideosWhereUniqueInput[]
  }

  export type RenderQueueUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<RenderQueueCreateWithoutVideoInput, RenderQueueUncheckedCreateWithoutVideoInput> | RenderQueueCreateWithoutVideoInput[] | RenderQueueUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: RenderQueueCreateOrConnectWithoutVideoInput | RenderQueueCreateOrConnectWithoutVideoInput[]
    createMany?: RenderQueueCreateManyVideoInputEnvelope
    connect?: RenderQueueWhereUniqueInput | RenderQueueWhereUniqueInput[]
  }

  export type ImagesVideosUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<ImagesVideosCreateWithoutVideoInput, ImagesVideosUncheckedCreateWithoutVideoInput> | ImagesVideosCreateWithoutVideoInput[] | ImagesVideosUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: ImagesVideosCreateOrConnectWithoutVideoInput | ImagesVideosCreateOrConnectWithoutVideoInput[]
    createMany?: ImagesVideosCreateManyVideoInputEnvelope
    connect?: ImagesVideosWhereUniqueInput | ImagesVideosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RenderQueueUpdateManyWithoutVideoNestedInput = {
    create?: XOR<RenderQueueCreateWithoutVideoInput, RenderQueueUncheckedCreateWithoutVideoInput> | RenderQueueCreateWithoutVideoInput[] | RenderQueueUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: RenderQueueCreateOrConnectWithoutVideoInput | RenderQueueCreateOrConnectWithoutVideoInput[]
    upsert?: RenderQueueUpsertWithWhereUniqueWithoutVideoInput | RenderQueueUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: RenderQueueCreateManyVideoInputEnvelope
    set?: RenderQueueWhereUniqueInput | RenderQueueWhereUniqueInput[]
    disconnect?: RenderQueueWhereUniqueInput | RenderQueueWhereUniqueInput[]
    delete?: RenderQueueWhereUniqueInput | RenderQueueWhereUniqueInput[]
    connect?: RenderQueueWhereUniqueInput | RenderQueueWhereUniqueInput[]
    update?: RenderQueueUpdateWithWhereUniqueWithoutVideoInput | RenderQueueUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: RenderQueueUpdateManyWithWhereWithoutVideoInput | RenderQueueUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: RenderQueueScalarWhereInput | RenderQueueScalarWhereInput[]
  }

  export type ImagesVideosUpdateManyWithoutVideoNestedInput = {
    create?: XOR<ImagesVideosCreateWithoutVideoInput, ImagesVideosUncheckedCreateWithoutVideoInput> | ImagesVideosCreateWithoutVideoInput[] | ImagesVideosUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: ImagesVideosCreateOrConnectWithoutVideoInput | ImagesVideosCreateOrConnectWithoutVideoInput[]
    upsert?: ImagesVideosUpsertWithWhereUniqueWithoutVideoInput | ImagesVideosUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: ImagesVideosCreateManyVideoInputEnvelope
    set?: ImagesVideosWhereUniqueInput | ImagesVideosWhereUniqueInput[]
    disconnect?: ImagesVideosWhereUniqueInput | ImagesVideosWhereUniqueInput[]
    delete?: ImagesVideosWhereUniqueInput | ImagesVideosWhereUniqueInput[]
    connect?: ImagesVideosWhereUniqueInput | ImagesVideosWhereUniqueInput[]
    update?: ImagesVideosUpdateWithWhereUniqueWithoutVideoInput | ImagesVideosUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: ImagesVideosUpdateManyWithWhereWithoutVideoInput | ImagesVideosUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: ImagesVideosScalarWhereInput | ImagesVideosScalarWhereInput[]
  }

  export type RenderQueueUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<RenderQueueCreateWithoutVideoInput, RenderQueueUncheckedCreateWithoutVideoInput> | RenderQueueCreateWithoutVideoInput[] | RenderQueueUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: RenderQueueCreateOrConnectWithoutVideoInput | RenderQueueCreateOrConnectWithoutVideoInput[]
    upsert?: RenderQueueUpsertWithWhereUniqueWithoutVideoInput | RenderQueueUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: RenderQueueCreateManyVideoInputEnvelope
    set?: RenderQueueWhereUniqueInput | RenderQueueWhereUniqueInput[]
    disconnect?: RenderQueueWhereUniqueInput | RenderQueueWhereUniqueInput[]
    delete?: RenderQueueWhereUniqueInput | RenderQueueWhereUniqueInput[]
    connect?: RenderQueueWhereUniqueInput | RenderQueueWhereUniqueInput[]
    update?: RenderQueueUpdateWithWhereUniqueWithoutVideoInput | RenderQueueUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: RenderQueueUpdateManyWithWhereWithoutVideoInput | RenderQueueUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: RenderQueueScalarWhereInput | RenderQueueScalarWhereInput[]
  }

  export type ImagesVideosUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<ImagesVideosCreateWithoutVideoInput, ImagesVideosUncheckedCreateWithoutVideoInput> | ImagesVideosCreateWithoutVideoInput[] | ImagesVideosUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: ImagesVideosCreateOrConnectWithoutVideoInput | ImagesVideosCreateOrConnectWithoutVideoInput[]
    upsert?: ImagesVideosUpsertWithWhereUniqueWithoutVideoInput | ImagesVideosUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: ImagesVideosCreateManyVideoInputEnvelope
    set?: ImagesVideosWhereUniqueInput | ImagesVideosWhereUniqueInput[]
    disconnect?: ImagesVideosWhereUniqueInput | ImagesVideosWhereUniqueInput[]
    delete?: ImagesVideosWhereUniqueInput | ImagesVideosWhereUniqueInput[]
    connect?: ImagesVideosWhereUniqueInput | ImagesVideosWhereUniqueInput[]
    update?: ImagesVideosUpdateWithWhereUniqueWithoutVideoInput | ImagesVideosUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: ImagesVideosUpdateManyWithWhereWithoutVideoInput | ImagesVideosUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: ImagesVideosScalarWhereInput | ImagesVideosScalarWhereInput[]
  }

  export type ImagesVideosCreateNestedManyWithoutImageInput = {
    create?: XOR<ImagesVideosCreateWithoutImageInput, ImagesVideosUncheckedCreateWithoutImageInput> | ImagesVideosCreateWithoutImageInput[] | ImagesVideosUncheckedCreateWithoutImageInput[]
    connectOrCreate?: ImagesVideosCreateOrConnectWithoutImageInput | ImagesVideosCreateOrConnectWithoutImageInput[]
    createMany?: ImagesVideosCreateManyImageInputEnvelope
    connect?: ImagesVideosWhereUniqueInput | ImagesVideosWhereUniqueInput[]
  }

  export type ImagesVideosUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<ImagesVideosCreateWithoutImageInput, ImagesVideosUncheckedCreateWithoutImageInput> | ImagesVideosCreateWithoutImageInput[] | ImagesVideosUncheckedCreateWithoutImageInput[]
    connectOrCreate?: ImagesVideosCreateOrConnectWithoutImageInput | ImagesVideosCreateOrConnectWithoutImageInput[]
    createMany?: ImagesVideosCreateManyImageInputEnvelope
    connect?: ImagesVideosWhereUniqueInput | ImagesVideosWhereUniqueInput[]
  }

  export type ImagesVideosUpdateManyWithoutImageNestedInput = {
    create?: XOR<ImagesVideosCreateWithoutImageInput, ImagesVideosUncheckedCreateWithoutImageInput> | ImagesVideosCreateWithoutImageInput[] | ImagesVideosUncheckedCreateWithoutImageInput[]
    connectOrCreate?: ImagesVideosCreateOrConnectWithoutImageInput | ImagesVideosCreateOrConnectWithoutImageInput[]
    upsert?: ImagesVideosUpsertWithWhereUniqueWithoutImageInput | ImagesVideosUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: ImagesVideosCreateManyImageInputEnvelope
    set?: ImagesVideosWhereUniqueInput | ImagesVideosWhereUniqueInput[]
    disconnect?: ImagesVideosWhereUniqueInput | ImagesVideosWhereUniqueInput[]
    delete?: ImagesVideosWhereUniqueInput | ImagesVideosWhereUniqueInput[]
    connect?: ImagesVideosWhereUniqueInput | ImagesVideosWhereUniqueInput[]
    update?: ImagesVideosUpdateWithWhereUniqueWithoutImageInput | ImagesVideosUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: ImagesVideosUpdateManyWithWhereWithoutImageInput | ImagesVideosUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: ImagesVideosScalarWhereInput | ImagesVideosScalarWhereInput[]
  }

  export type ImagesVideosUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<ImagesVideosCreateWithoutImageInput, ImagesVideosUncheckedCreateWithoutImageInput> | ImagesVideosCreateWithoutImageInput[] | ImagesVideosUncheckedCreateWithoutImageInput[]
    connectOrCreate?: ImagesVideosCreateOrConnectWithoutImageInput | ImagesVideosCreateOrConnectWithoutImageInput[]
    upsert?: ImagesVideosUpsertWithWhereUniqueWithoutImageInput | ImagesVideosUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: ImagesVideosCreateManyImageInputEnvelope
    set?: ImagesVideosWhereUniqueInput | ImagesVideosWhereUniqueInput[]
    disconnect?: ImagesVideosWhereUniqueInput | ImagesVideosWhereUniqueInput[]
    delete?: ImagesVideosWhereUniqueInput | ImagesVideosWhereUniqueInput[]
    connect?: ImagesVideosWhereUniqueInput | ImagesVideosWhereUniqueInput[]
    update?: ImagesVideosUpdateWithWhereUniqueWithoutImageInput | ImagesVideosUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: ImagesVideosUpdateManyWithWhereWithoutImageInput | ImagesVideosUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: ImagesVideosScalarWhereInput | ImagesVideosScalarWhereInput[]
  }

  export type ImageCreateNestedOneWithoutMediaInput = {
    create?: XOR<ImageCreateWithoutMediaInput, ImageUncheckedCreateWithoutMediaInput>
    connectOrCreate?: ImageCreateOrConnectWithoutMediaInput
    connect?: ImageWhereUniqueInput
  }

  export type VideoCreateNestedOneWithoutMediaInput = {
    create?: XOR<VideoCreateWithoutMediaInput, VideoUncheckedCreateWithoutMediaInput>
    connectOrCreate?: VideoCreateOrConnectWithoutMediaInput
    connect?: VideoWhereUniqueInput
  }

  export type ImageUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<ImageCreateWithoutMediaInput, ImageUncheckedCreateWithoutMediaInput>
    connectOrCreate?: ImageCreateOrConnectWithoutMediaInput
    upsert?: ImageUpsertWithoutMediaInput
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutMediaInput, ImageUpdateWithoutMediaInput>, ImageUncheckedUpdateWithoutMediaInput>
  }

  export type VideoUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<VideoCreateWithoutMediaInput, VideoUncheckedCreateWithoutMediaInput>
    connectOrCreate?: VideoCreateOrConnectWithoutMediaInput
    upsert?: VideoUpsertWithoutMediaInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutMediaInput, VideoUpdateWithoutMediaInput>, VideoUncheckedUpdateWithoutMediaInput>
  }

  export type VideoCreateNestedOneWithoutRenderQueuesInput = {
    create?: XOR<VideoCreateWithoutRenderQueuesInput, VideoUncheckedCreateWithoutRenderQueuesInput>
    connectOrCreate?: VideoCreateOrConnectWithoutRenderQueuesInput
    connect?: VideoWhereUniqueInput
  }

  export type EnumRenderQueuePriorityFieldUpdateOperationsInput = {
    set?: $Enums.RenderQueuePriority
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRenderQueueStatusFieldUpdateOperationsInput = {
    set?: $Enums.RenderQueueStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type VideoUpdateOneRequiredWithoutRenderQueuesNestedInput = {
    create?: XOR<VideoCreateWithoutRenderQueuesInput, VideoUncheckedCreateWithoutRenderQueuesInput>
    connectOrCreate?: VideoCreateOrConnectWithoutRenderQueuesInput
    upsert?: VideoUpsertWithoutRenderQueuesInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutRenderQueuesInput, VideoUpdateWithoutRenderQueuesInput>, VideoUncheckedUpdateWithoutRenderQueuesInput>
  }

  export type EnumProviderProcessingStageFieldUpdateOperationsInput = {
    set?: $Enums.ProviderProcessingStage
  }

  export type EnumProviderEntityTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProviderEntityType
  }

  export type EnumProviderOperationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProviderOperationStatus
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumRenderQueuePriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.RenderQueuePriority | EnumRenderQueuePriorityFieldRefInput<$PrismaModel>
    in?: $Enums.RenderQueuePriority[] | ListEnumRenderQueuePriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.RenderQueuePriority[] | ListEnumRenderQueuePriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumRenderQueuePriorityFilter<$PrismaModel> | $Enums.RenderQueuePriority
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRenderQueueStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RenderQueueStatus | EnumRenderQueueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RenderQueueStatus[] | ListEnumRenderQueueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RenderQueueStatus[] | ListEnumRenderQueueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRenderQueueStatusFilter<$PrismaModel> | $Enums.RenderQueueStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRenderQueuePriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RenderQueuePriority | EnumRenderQueuePriorityFieldRefInput<$PrismaModel>
    in?: $Enums.RenderQueuePriority[] | ListEnumRenderQueuePriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.RenderQueuePriority[] | ListEnumRenderQueuePriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumRenderQueuePriorityWithAggregatesFilter<$PrismaModel> | $Enums.RenderQueuePriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRenderQueuePriorityFilter<$PrismaModel>
    _max?: NestedEnumRenderQueuePriorityFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumRenderQueueStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RenderQueueStatus | EnumRenderQueueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RenderQueueStatus[] | ListEnumRenderQueueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RenderQueueStatus[] | ListEnumRenderQueueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRenderQueueStatusWithAggregatesFilter<$PrismaModel> | $Enums.RenderQueueStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRenderQueueStatusFilter<$PrismaModel>
    _max?: NestedEnumRenderQueueStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumProviderProcessingStageFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderProcessingStage | EnumProviderProcessingStageFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderProcessingStage[] | ListEnumProviderProcessingStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProviderProcessingStage[] | ListEnumProviderProcessingStageFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderProcessingStageFilter<$PrismaModel> | $Enums.ProviderProcessingStage
  }

  export type NestedEnumProviderEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderEntityType | EnumProviderEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderEntityType[] | ListEnumProviderEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProviderEntityType[] | ListEnumProviderEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderEntityTypeFilter<$PrismaModel> | $Enums.ProviderEntityType
  }

  export type NestedEnumProviderOperationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderOperationStatus | EnumProviderOperationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderOperationStatus[] | ListEnumProviderOperationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProviderOperationStatus[] | ListEnumProviderOperationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderOperationStatusFilter<$PrismaModel> | $Enums.ProviderOperationStatus
  }

  export type NestedEnumProviderProcessingStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderProcessingStage | EnumProviderProcessingStageFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderProcessingStage[] | ListEnumProviderProcessingStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProviderProcessingStage[] | ListEnumProviderProcessingStageFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderProcessingStageWithAggregatesFilter<$PrismaModel> | $Enums.ProviderProcessingStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderProcessingStageFilter<$PrismaModel>
    _max?: NestedEnumProviderProcessingStageFilter<$PrismaModel>
  }

  export type NestedEnumProviderEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderEntityType | EnumProviderEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderEntityType[] | ListEnumProviderEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProviderEntityType[] | ListEnumProviderEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProviderEntityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderEntityTypeFilter<$PrismaModel>
    _max?: NestedEnumProviderEntityTypeFilter<$PrismaModel>
  }

  export type NestedEnumProviderOperationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderOperationStatus | EnumProviderOperationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderOperationStatus[] | ListEnumProviderOperationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProviderOperationStatus[] | ListEnumProviderOperationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderOperationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProviderOperationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderOperationStatusFilter<$PrismaModel>
    _max?: NestedEnumProviderOperationStatusFilter<$PrismaModel>
  }

  export type RenderQueueCreateWithoutVideoInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    priority?: $Enums.RenderQueuePriority
    setUpScriptId?: string | null
    templateId: string
    status?: $Enums.RenderQueueStatus
    errorText?: string | null
    doneAt?: Date | string | null
  }

  export type RenderQueueUncheckedCreateWithoutVideoInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    priority?: $Enums.RenderQueuePriority
    setUpScriptId?: string | null
    templateId: string
    status?: $Enums.RenderQueueStatus
    errorText?: string | null
    doneAt?: Date | string | null
  }

  export type RenderQueueCreateOrConnectWithoutVideoInput = {
    where: RenderQueueWhereUniqueInput
    create: XOR<RenderQueueCreateWithoutVideoInput, RenderQueueUncheckedCreateWithoutVideoInput>
  }

  export type RenderQueueCreateManyVideoInputEnvelope = {
    data: RenderQueueCreateManyVideoInput | RenderQueueCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type ImagesVideosCreateWithoutVideoInput = {
    createdAt?: Date | string
    image: ImageCreateNestedOneWithoutMediaInput
  }

  export type ImagesVideosUncheckedCreateWithoutVideoInput = {
    imageId: string
    createdAt?: Date | string
  }

  export type ImagesVideosCreateOrConnectWithoutVideoInput = {
    where: ImagesVideosWhereUniqueInput
    create: XOR<ImagesVideosCreateWithoutVideoInput, ImagesVideosUncheckedCreateWithoutVideoInput>
  }

  export type ImagesVideosCreateManyVideoInputEnvelope = {
    data: ImagesVideosCreateManyVideoInput | ImagesVideosCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type RenderQueueUpsertWithWhereUniqueWithoutVideoInput = {
    where: RenderQueueWhereUniqueInput
    update: XOR<RenderQueueUpdateWithoutVideoInput, RenderQueueUncheckedUpdateWithoutVideoInput>
    create: XOR<RenderQueueCreateWithoutVideoInput, RenderQueueUncheckedCreateWithoutVideoInput>
  }

  export type RenderQueueUpdateWithWhereUniqueWithoutVideoInput = {
    where: RenderQueueWhereUniqueInput
    data: XOR<RenderQueueUpdateWithoutVideoInput, RenderQueueUncheckedUpdateWithoutVideoInput>
  }

  export type RenderQueueUpdateManyWithWhereWithoutVideoInput = {
    where: RenderQueueScalarWhereInput
    data: XOR<RenderQueueUpdateManyMutationInput, RenderQueueUncheckedUpdateManyWithoutVideoInput>
  }

  export type RenderQueueScalarWhereInput = {
    AND?: RenderQueueScalarWhereInput | RenderQueueScalarWhereInput[]
    OR?: RenderQueueScalarWhereInput[]
    NOT?: RenderQueueScalarWhereInput | RenderQueueScalarWhereInput[]
    id?: UuidFilter<"RenderQueue"> | string
    createdAt?: DateTimeFilter<"RenderQueue"> | Date | string
    updatedAt?: DateTimeFilter<"RenderQueue"> | Date | string
    priority?: EnumRenderQueuePriorityFilter<"RenderQueue"> | $Enums.RenderQueuePriority
    setUpScriptId?: UuidNullableFilter<"RenderQueue"> | string | null
    templateId?: UuidFilter<"RenderQueue"> | string
    status?: EnumRenderQueueStatusFilter<"RenderQueue"> | $Enums.RenderQueueStatus
    errorText?: StringNullableFilter<"RenderQueue"> | string | null
    doneAt?: DateTimeNullableFilter<"RenderQueue"> | Date | string | null
    videoId?: UuidFilter<"RenderQueue"> | string
  }

  export type ImagesVideosUpsertWithWhereUniqueWithoutVideoInput = {
    where: ImagesVideosWhereUniqueInput
    update: XOR<ImagesVideosUpdateWithoutVideoInput, ImagesVideosUncheckedUpdateWithoutVideoInput>
    create: XOR<ImagesVideosCreateWithoutVideoInput, ImagesVideosUncheckedCreateWithoutVideoInput>
  }

  export type ImagesVideosUpdateWithWhereUniqueWithoutVideoInput = {
    where: ImagesVideosWhereUniqueInput
    data: XOR<ImagesVideosUpdateWithoutVideoInput, ImagesVideosUncheckedUpdateWithoutVideoInput>
  }

  export type ImagesVideosUpdateManyWithWhereWithoutVideoInput = {
    where: ImagesVideosScalarWhereInput
    data: XOR<ImagesVideosUpdateManyMutationInput, ImagesVideosUncheckedUpdateManyWithoutVideoInput>
  }

  export type ImagesVideosScalarWhereInput = {
    AND?: ImagesVideosScalarWhereInput | ImagesVideosScalarWhereInput[]
    OR?: ImagesVideosScalarWhereInput[]
    NOT?: ImagesVideosScalarWhereInput | ImagesVideosScalarWhereInput[]
    imageId?: UuidFilter<"ImagesVideos"> | string
    videoId?: UuidFilter<"ImagesVideos"> | string
    createdAt?: DateTimeFilter<"ImagesVideos"> | Date | string
  }

  export type ImagesVideosCreateWithoutImageInput = {
    createdAt?: Date | string
    video: VideoCreateNestedOneWithoutMediaInput
  }

  export type ImagesVideosUncheckedCreateWithoutImageInput = {
    videoId: string
    createdAt?: Date | string
  }

  export type ImagesVideosCreateOrConnectWithoutImageInput = {
    where: ImagesVideosWhereUniqueInput
    create: XOR<ImagesVideosCreateWithoutImageInput, ImagesVideosUncheckedCreateWithoutImageInput>
  }

  export type ImagesVideosCreateManyImageInputEnvelope = {
    data: ImagesVideosCreateManyImageInput | ImagesVideosCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type ImagesVideosUpsertWithWhereUniqueWithoutImageInput = {
    where: ImagesVideosWhereUniqueInput
    update: XOR<ImagesVideosUpdateWithoutImageInput, ImagesVideosUncheckedUpdateWithoutImageInput>
    create: XOR<ImagesVideosCreateWithoutImageInput, ImagesVideosUncheckedCreateWithoutImageInput>
  }

  export type ImagesVideosUpdateWithWhereUniqueWithoutImageInput = {
    where: ImagesVideosWhereUniqueInput
    data: XOR<ImagesVideosUpdateWithoutImageInput, ImagesVideosUncheckedUpdateWithoutImageInput>
  }

  export type ImagesVideosUpdateManyWithWhereWithoutImageInput = {
    where: ImagesVideosScalarWhereInput
    data: XOR<ImagesVideosUpdateManyMutationInput, ImagesVideosUncheckedUpdateManyWithoutImageInput>
  }

  export type ImageCreateWithoutMediaInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
  }

  export type ImageUncheckedCreateWithoutMediaInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
  }

  export type ImageCreateOrConnectWithoutMediaInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutMediaInput, ImageUncheckedCreateWithoutMediaInput>
  }

  export type VideoCreateWithoutMediaInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    subtitles?: NullableJsonNullValueInput | InputJsonValue
    renderQueues?: RenderQueueCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutMediaInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    subtitles?: NullableJsonNullValueInput | InputJsonValue
    renderQueues?: RenderQueueUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutMediaInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutMediaInput, VideoUncheckedCreateWithoutMediaInput>
  }

  export type ImageUpsertWithoutMediaInput = {
    update: XOR<ImageUpdateWithoutMediaInput, ImageUncheckedUpdateWithoutMediaInput>
    create: XOR<ImageCreateWithoutMediaInput, ImageUncheckedCreateWithoutMediaInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutMediaInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutMediaInput, ImageUncheckedUpdateWithoutMediaInput>
  }

  export type ImageUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ImageUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type VideoUpsertWithoutMediaInput = {
    update: XOR<VideoUpdateWithoutMediaInput, VideoUncheckedUpdateWithoutMediaInput>
    create: XOR<VideoCreateWithoutMediaInput, VideoUncheckedCreateWithoutMediaInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutMediaInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutMediaInput, VideoUncheckedUpdateWithoutMediaInput>
  }

  export type VideoUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    subtitles?: NullableJsonNullValueInput | InputJsonValue
    renderQueues?: RenderQueueUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    subtitles?: NullableJsonNullValueInput | InputJsonValue
    renderQueues?: RenderQueueUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoCreateWithoutRenderQueuesInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    subtitles?: NullableJsonNullValueInput | InputJsonValue
    media?: ImagesVideosCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutRenderQueuesInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    subtitles?: NullableJsonNullValueInput | InputJsonValue
    media?: ImagesVideosUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutRenderQueuesInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutRenderQueuesInput, VideoUncheckedCreateWithoutRenderQueuesInput>
  }

  export type VideoUpsertWithoutRenderQueuesInput = {
    update: XOR<VideoUpdateWithoutRenderQueuesInput, VideoUncheckedUpdateWithoutRenderQueuesInput>
    create: XOR<VideoCreateWithoutRenderQueuesInput, VideoUncheckedCreateWithoutRenderQueuesInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutRenderQueuesInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutRenderQueuesInput, VideoUncheckedUpdateWithoutRenderQueuesInput>
  }

  export type VideoUpdateWithoutRenderQueuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    subtitles?: NullableJsonNullValueInput | InputJsonValue
    media?: ImagesVideosUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutRenderQueuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    subtitles?: NullableJsonNullValueInput | InputJsonValue
    media?: ImagesVideosUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type RenderQueueCreateManyVideoInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    priority?: $Enums.RenderQueuePriority
    setUpScriptId?: string | null
    templateId: string
    status?: $Enums.RenderQueueStatus
    errorText?: string | null
    doneAt?: Date | string | null
  }

  export type ImagesVideosCreateManyVideoInput = {
    imageId: string
    createdAt?: Date | string
  }

  export type RenderQueueUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: EnumRenderQueuePriorityFieldUpdateOperationsInput | $Enums.RenderQueuePriority
    setUpScriptId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: StringFieldUpdateOperationsInput | string
    status?: EnumRenderQueueStatusFieldUpdateOperationsInput | $Enums.RenderQueueStatus
    errorText?: NullableStringFieldUpdateOperationsInput | string | null
    doneAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RenderQueueUncheckedUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: EnumRenderQueuePriorityFieldUpdateOperationsInput | $Enums.RenderQueuePriority
    setUpScriptId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: StringFieldUpdateOperationsInput | string
    status?: EnumRenderQueueStatusFieldUpdateOperationsInput | $Enums.RenderQueueStatus
    errorText?: NullableStringFieldUpdateOperationsInput | string | null
    doneAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RenderQueueUncheckedUpdateManyWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: EnumRenderQueuePriorityFieldUpdateOperationsInput | $Enums.RenderQueuePriority
    setUpScriptId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: StringFieldUpdateOperationsInput | string
    status?: EnumRenderQueueStatusFieldUpdateOperationsInput | $Enums.RenderQueueStatus
    errorText?: NullableStringFieldUpdateOperationsInput | string | null
    doneAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ImagesVideosUpdateWithoutVideoInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImageUpdateOneRequiredWithoutMediaNestedInput
  }

  export type ImagesVideosUncheckedUpdateWithoutVideoInput = {
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesVideosUncheckedUpdateManyWithoutVideoInput = {
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesVideosCreateManyImageInput = {
    videoId: string
    createdAt?: Date | string
  }

  export type ImagesVideosUpdateWithoutImageInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutMediaNestedInput
  }

  export type ImagesVideosUncheckedUpdateWithoutImageInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesVideosUncheckedUpdateManyWithoutImageInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}