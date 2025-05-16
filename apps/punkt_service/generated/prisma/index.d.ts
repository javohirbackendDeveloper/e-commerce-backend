
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
 * Model Punkt
 * 
 */
export type Punkt = $Result.DefaultSelection<Prisma.$PunktPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Punkts
 * const punkts = await prisma.punkt.findMany()
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
   * // Fetch zero or more Punkts
   * const punkts = await prisma.punkt.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.punkt`: Exposes CRUD operations for the **Punkt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Punkts
    * const punkts = await prisma.punkt.findMany()
    * ```
    */
  get punkt(): Prisma.PunktDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Punkt: 'Punkt'
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
      modelProps: "punkt"
      txIsolationLevel: never
    }
    model: {
      Punkt: {
        payload: Prisma.$PunktPayload<ExtArgs>
        fields: Prisma.PunktFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PunktFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PunktPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PunktFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PunktPayload>
          }
          findFirst: {
            args: Prisma.PunktFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PunktPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PunktFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PunktPayload>
          }
          findMany: {
            args: Prisma.PunktFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PunktPayload>[]
          }
          create: {
            args: Prisma.PunktCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PunktPayload>
          }
          createMany: {
            args: Prisma.PunktCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PunktDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PunktPayload>
          }
          update: {
            args: Prisma.PunktUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PunktPayload>
          }
          deleteMany: {
            args: Prisma.PunktDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PunktUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PunktUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PunktPayload>
          }
          aggregate: {
            args: Prisma.PunktAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePunkt>
          }
          groupBy: {
            args: Prisma.PunktGroupByArgs<ExtArgs>
            result: $Utils.Optional<PunktGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PunktFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PunktAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PunktCountArgs<ExtArgs>
            result: $Utils.Optional<PunktCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    punkt?: PunktOmit
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
   * Models
   */

  /**
   * Model Punkt
   */

  export type AggregatePunkt = {
    _count: PunktCountAggregateOutputType | null
    _avg: PunktAvgAggregateOutputType | null
    _sum: PunktSumAggregateOutputType | null
    _min: PunktMinAggregateOutputType | null
    _max: PunktMaxAggregateOutputType | null
  }

  export type PunktAvgAggregateOutputType = {
    locationLongitude: number | null
    locationLatitude: number | null
  }

  export type PunktSumAggregateOutputType = {
    locationLongitude: number | null
    locationLatitude: number | null
  }

  export type PunktMinAggregateOutputType = {
    id: string | null
    canTryOn: boolean | null
    name: string | null
    isActive: boolean | null
    locationText: string | null
    locationLongitude: number | null
    locationLatitude: number | null
    region: string | null
    city: string | null
    punktAdminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PunktMaxAggregateOutputType = {
    id: string | null
    canTryOn: boolean | null
    name: string | null
    isActive: boolean | null
    locationText: string | null
    locationLongitude: number | null
    locationLatitude: number | null
    region: string | null
    city: string | null
    punktAdminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PunktCountAggregateOutputType = {
    id: number
    workingHours: number
    canTryOn: number
    name: number
    isActive: number
    locationText: number
    locationLongitude: number
    locationLatitude: number
    region: number
    city: number
    punktAdminId: number
    couriers: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PunktAvgAggregateInputType = {
    locationLongitude?: true
    locationLatitude?: true
  }

  export type PunktSumAggregateInputType = {
    locationLongitude?: true
    locationLatitude?: true
  }

  export type PunktMinAggregateInputType = {
    id?: true
    canTryOn?: true
    name?: true
    isActive?: true
    locationText?: true
    locationLongitude?: true
    locationLatitude?: true
    region?: true
    city?: true
    punktAdminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PunktMaxAggregateInputType = {
    id?: true
    canTryOn?: true
    name?: true
    isActive?: true
    locationText?: true
    locationLongitude?: true
    locationLatitude?: true
    region?: true
    city?: true
    punktAdminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PunktCountAggregateInputType = {
    id?: true
    workingHours?: true
    canTryOn?: true
    name?: true
    isActive?: true
    locationText?: true
    locationLongitude?: true
    locationLatitude?: true
    region?: true
    city?: true
    punktAdminId?: true
    couriers?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PunktAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Punkt to aggregate.
     */
    where?: PunktWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Punkts to fetch.
     */
    orderBy?: PunktOrderByWithRelationInput | PunktOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PunktWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Punkts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Punkts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Punkts
    **/
    _count?: true | PunktCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PunktAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PunktSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PunktMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PunktMaxAggregateInputType
  }

  export type GetPunktAggregateType<T extends PunktAggregateArgs> = {
        [P in keyof T & keyof AggregatePunkt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePunkt[P]>
      : GetScalarType<T[P], AggregatePunkt[P]>
  }




  export type PunktGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PunktWhereInput
    orderBy?: PunktOrderByWithAggregationInput | PunktOrderByWithAggregationInput[]
    by: PunktScalarFieldEnum[] | PunktScalarFieldEnum
    having?: PunktScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PunktCountAggregateInputType | true
    _avg?: PunktAvgAggregateInputType
    _sum?: PunktSumAggregateInputType
    _min?: PunktMinAggregateInputType
    _max?: PunktMaxAggregateInputType
  }

  export type PunktGroupByOutputType = {
    id: string
    workingHours: JsonValue
    canTryOn: boolean
    name: string
    isActive: boolean
    locationText: string
    locationLongitude: number
    locationLatitude: number
    region: string
    city: string
    punktAdminId: string
    couriers: string[]
    createdAt: Date
    updatedAt: Date
    _count: PunktCountAggregateOutputType | null
    _avg: PunktAvgAggregateOutputType | null
    _sum: PunktSumAggregateOutputType | null
    _min: PunktMinAggregateOutputType | null
    _max: PunktMaxAggregateOutputType | null
  }

  type GetPunktGroupByPayload<T extends PunktGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PunktGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PunktGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PunktGroupByOutputType[P]>
            : GetScalarType<T[P], PunktGroupByOutputType[P]>
        }
      >
    >


  export type PunktSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workingHours?: boolean
    canTryOn?: boolean
    name?: boolean
    isActive?: boolean
    locationText?: boolean
    locationLongitude?: boolean
    locationLatitude?: boolean
    region?: boolean
    city?: boolean
    punktAdminId?: boolean
    couriers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["punkt"]>



  export type PunktSelectScalar = {
    id?: boolean
    workingHours?: boolean
    canTryOn?: boolean
    name?: boolean
    isActive?: boolean
    locationText?: boolean
    locationLongitude?: boolean
    locationLatitude?: boolean
    region?: boolean
    city?: boolean
    punktAdminId?: boolean
    couriers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PunktOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workingHours" | "canTryOn" | "name" | "isActive" | "locationText" | "locationLongitude" | "locationLatitude" | "region" | "city" | "punktAdminId" | "couriers" | "createdAt" | "updatedAt", ExtArgs["result"]["punkt"]>

  export type $PunktPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Punkt"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workingHours: Prisma.JsonValue
      canTryOn: boolean
      name: string
      isActive: boolean
      locationText: string
      locationLongitude: number
      locationLatitude: number
      region: string
      city: string
      punktAdminId: string
      couriers: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["punkt"]>
    composites: {}
  }

  type PunktGetPayload<S extends boolean | null | undefined | PunktDefaultArgs> = $Result.GetResult<Prisma.$PunktPayload, S>

  type PunktCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PunktFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PunktCountAggregateInputType | true
    }

  export interface PunktDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Punkt'], meta: { name: 'Punkt' } }
    /**
     * Find zero or one Punkt that matches the filter.
     * @param {PunktFindUniqueArgs} args - Arguments to find a Punkt
     * @example
     * // Get one Punkt
     * const punkt = await prisma.punkt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PunktFindUniqueArgs>(args: SelectSubset<T, PunktFindUniqueArgs<ExtArgs>>): Prisma__PunktClient<$Result.GetResult<Prisma.$PunktPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Punkt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PunktFindUniqueOrThrowArgs} args - Arguments to find a Punkt
     * @example
     * // Get one Punkt
     * const punkt = await prisma.punkt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PunktFindUniqueOrThrowArgs>(args: SelectSubset<T, PunktFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PunktClient<$Result.GetResult<Prisma.$PunktPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Punkt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PunktFindFirstArgs} args - Arguments to find a Punkt
     * @example
     * // Get one Punkt
     * const punkt = await prisma.punkt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PunktFindFirstArgs>(args?: SelectSubset<T, PunktFindFirstArgs<ExtArgs>>): Prisma__PunktClient<$Result.GetResult<Prisma.$PunktPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Punkt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PunktFindFirstOrThrowArgs} args - Arguments to find a Punkt
     * @example
     * // Get one Punkt
     * const punkt = await prisma.punkt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PunktFindFirstOrThrowArgs>(args?: SelectSubset<T, PunktFindFirstOrThrowArgs<ExtArgs>>): Prisma__PunktClient<$Result.GetResult<Prisma.$PunktPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Punkts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PunktFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Punkts
     * const punkts = await prisma.punkt.findMany()
     * 
     * // Get first 10 Punkts
     * const punkts = await prisma.punkt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const punktWithIdOnly = await prisma.punkt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PunktFindManyArgs>(args?: SelectSubset<T, PunktFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PunktPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Punkt.
     * @param {PunktCreateArgs} args - Arguments to create a Punkt.
     * @example
     * // Create one Punkt
     * const Punkt = await prisma.punkt.create({
     *   data: {
     *     // ... data to create a Punkt
     *   }
     * })
     * 
     */
    create<T extends PunktCreateArgs>(args: SelectSubset<T, PunktCreateArgs<ExtArgs>>): Prisma__PunktClient<$Result.GetResult<Prisma.$PunktPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Punkts.
     * @param {PunktCreateManyArgs} args - Arguments to create many Punkts.
     * @example
     * // Create many Punkts
     * const punkt = await prisma.punkt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PunktCreateManyArgs>(args?: SelectSubset<T, PunktCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Punkt.
     * @param {PunktDeleteArgs} args - Arguments to delete one Punkt.
     * @example
     * // Delete one Punkt
     * const Punkt = await prisma.punkt.delete({
     *   where: {
     *     // ... filter to delete one Punkt
     *   }
     * })
     * 
     */
    delete<T extends PunktDeleteArgs>(args: SelectSubset<T, PunktDeleteArgs<ExtArgs>>): Prisma__PunktClient<$Result.GetResult<Prisma.$PunktPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Punkt.
     * @param {PunktUpdateArgs} args - Arguments to update one Punkt.
     * @example
     * // Update one Punkt
     * const punkt = await prisma.punkt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PunktUpdateArgs>(args: SelectSubset<T, PunktUpdateArgs<ExtArgs>>): Prisma__PunktClient<$Result.GetResult<Prisma.$PunktPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Punkts.
     * @param {PunktDeleteManyArgs} args - Arguments to filter Punkts to delete.
     * @example
     * // Delete a few Punkts
     * const { count } = await prisma.punkt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PunktDeleteManyArgs>(args?: SelectSubset<T, PunktDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Punkts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PunktUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Punkts
     * const punkt = await prisma.punkt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PunktUpdateManyArgs>(args: SelectSubset<T, PunktUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Punkt.
     * @param {PunktUpsertArgs} args - Arguments to update or create a Punkt.
     * @example
     * // Update or create a Punkt
     * const punkt = await prisma.punkt.upsert({
     *   create: {
     *     // ... data to create a Punkt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Punkt we want to update
     *   }
     * })
     */
    upsert<T extends PunktUpsertArgs>(args: SelectSubset<T, PunktUpsertArgs<ExtArgs>>): Prisma__PunktClient<$Result.GetResult<Prisma.$PunktPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Punkts that matches the filter.
     * @param {PunktFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const punkt = await prisma.punkt.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PunktFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Punkt.
     * @param {PunktAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const punkt = await prisma.punkt.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PunktAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Punkts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PunktCountArgs} args - Arguments to filter Punkts to count.
     * @example
     * // Count the number of Punkts
     * const count = await prisma.punkt.count({
     *   where: {
     *     // ... the filter for the Punkts we want to count
     *   }
     * })
    **/
    count<T extends PunktCountArgs>(
      args?: Subset<T, PunktCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PunktCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Punkt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PunktAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PunktAggregateArgs>(args: Subset<T, PunktAggregateArgs>): Prisma.PrismaPromise<GetPunktAggregateType<T>>

    /**
     * Group by Punkt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PunktGroupByArgs} args - Group by arguments.
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
      T extends PunktGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PunktGroupByArgs['orderBy'] }
        : { orderBy?: PunktGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PunktGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPunktGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Punkt model
   */
  readonly fields: PunktFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Punkt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PunktClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Punkt model
   */
  interface PunktFieldRefs {
    readonly id: FieldRef<"Punkt", 'String'>
    readonly workingHours: FieldRef<"Punkt", 'Json'>
    readonly canTryOn: FieldRef<"Punkt", 'Boolean'>
    readonly name: FieldRef<"Punkt", 'String'>
    readonly isActive: FieldRef<"Punkt", 'Boolean'>
    readonly locationText: FieldRef<"Punkt", 'String'>
    readonly locationLongitude: FieldRef<"Punkt", 'Float'>
    readonly locationLatitude: FieldRef<"Punkt", 'Float'>
    readonly region: FieldRef<"Punkt", 'String'>
    readonly city: FieldRef<"Punkt", 'String'>
    readonly punktAdminId: FieldRef<"Punkt", 'String'>
    readonly couriers: FieldRef<"Punkt", 'String[]'>
    readonly createdAt: FieldRef<"Punkt", 'DateTime'>
    readonly updatedAt: FieldRef<"Punkt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Punkt findUnique
   */
  export type PunktFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Punkt
     */
    select?: PunktSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Punkt
     */
    omit?: PunktOmit<ExtArgs> | null
    /**
     * Filter, which Punkt to fetch.
     */
    where: PunktWhereUniqueInput
  }

  /**
   * Punkt findUniqueOrThrow
   */
  export type PunktFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Punkt
     */
    select?: PunktSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Punkt
     */
    omit?: PunktOmit<ExtArgs> | null
    /**
     * Filter, which Punkt to fetch.
     */
    where: PunktWhereUniqueInput
  }

  /**
   * Punkt findFirst
   */
  export type PunktFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Punkt
     */
    select?: PunktSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Punkt
     */
    omit?: PunktOmit<ExtArgs> | null
    /**
     * Filter, which Punkt to fetch.
     */
    where?: PunktWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Punkts to fetch.
     */
    orderBy?: PunktOrderByWithRelationInput | PunktOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Punkts.
     */
    cursor?: PunktWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Punkts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Punkts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Punkts.
     */
    distinct?: PunktScalarFieldEnum | PunktScalarFieldEnum[]
  }

  /**
   * Punkt findFirstOrThrow
   */
  export type PunktFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Punkt
     */
    select?: PunktSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Punkt
     */
    omit?: PunktOmit<ExtArgs> | null
    /**
     * Filter, which Punkt to fetch.
     */
    where?: PunktWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Punkts to fetch.
     */
    orderBy?: PunktOrderByWithRelationInput | PunktOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Punkts.
     */
    cursor?: PunktWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Punkts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Punkts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Punkts.
     */
    distinct?: PunktScalarFieldEnum | PunktScalarFieldEnum[]
  }

  /**
   * Punkt findMany
   */
  export type PunktFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Punkt
     */
    select?: PunktSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Punkt
     */
    omit?: PunktOmit<ExtArgs> | null
    /**
     * Filter, which Punkts to fetch.
     */
    where?: PunktWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Punkts to fetch.
     */
    orderBy?: PunktOrderByWithRelationInput | PunktOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Punkts.
     */
    cursor?: PunktWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Punkts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Punkts.
     */
    skip?: number
    distinct?: PunktScalarFieldEnum | PunktScalarFieldEnum[]
  }

  /**
   * Punkt create
   */
  export type PunktCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Punkt
     */
    select?: PunktSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Punkt
     */
    omit?: PunktOmit<ExtArgs> | null
    /**
     * The data needed to create a Punkt.
     */
    data: XOR<PunktCreateInput, PunktUncheckedCreateInput>
  }

  /**
   * Punkt createMany
   */
  export type PunktCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Punkts.
     */
    data: PunktCreateManyInput | PunktCreateManyInput[]
  }

  /**
   * Punkt update
   */
  export type PunktUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Punkt
     */
    select?: PunktSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Punkt
     */
    omit?: PunktOmit<ExtArgs> | null
    /**
     * The data needed to update a Punkt.
     */
    data: XOR<PunktUpdateInput, PunktUncheckedUpdateInput>
    /**
     * Choose, which Punkt to update.
     */
    where: PunktWhereUniqueInput
  }

  /**
   * Punkt updateMany
   */
  export type PunktUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Punkts.
     */
    data: XOR<PunktUpdateManyMutationInput, PunktUncheckedUpdateManyInput>
    /**
     * Filter which Punkts to update
     */
    where?: PunktWhereInput
    /**
     * Limit how many Punkts to update.
     */
    limit?: number
  }

  /**
   * Punkt upsert
   */
  export type PunktUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Punkt
     */
    select?: PunktSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Punkt
     */
    omit?: PunktOmit<ExtArgs> | null
    /**
     * The filter to search for the Punkt to update in case it exists.
     */
    where: PunktWhereUniqueInput
    /**
     * In case the Punkt found by the `where` argument doesn't exist, create a new Punkt with this data.
     */
    create: XOR<PunktCreateInput, PunktUncheckedCreateInput>
    /**
     * In case the Punkt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PunktUpdateInput, PunktUncheckedUpdateInput>
  }

  /**
   * Punkt delete
   */
  export type PunktDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Punkt
     */
    select?: PunktSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Punkt
     */
    omit?: PunktOmit<ExtArgs> | null
    /**
     * Filter which Punkt to delete.
     */
    where: PunktWhereUniqueInput
  }

  /**
   * Punkt deleteMany
   */
  export type PunktDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Punkts to delete
     */
    where?: PunktWhereInput
    /**
     * Limit how many Punkts to delete.
     */
    limit?: number
  }

  /**
   * Punkt findRaw
   */
  export type PunktFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Punkt aggregateRaw
   */
  export type PunktAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Punkt without action
   */
  export type PunktDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Punkt
     */
    select?: PunktSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Punkt
     */
    omit?: PunktOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const PunktScalarFieldEnum: {
    id: 'id',
    workingHours: 'workingHours',
    canTryOn: 'canTryOn',
    name: 'name',
    isActive: 'isActive',
    locationText: 'locationText',
    locationLongitude: 'locationLongitude',
    locationLatitude: 'locationLatitude',
    region: 'region',
    city: 'city',
    punktAdminId: 'punktAdminId',
    couriers: 'couriers',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PunktScalarFieldEnum = (typeof PunktScalarFieldEnum)[keyof typeof PunktScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type PunktWhereInput = {
    AND?: PunktWhereInput | PunktWhereInput[]
    OR?: PunktWhereInput[]
    NOT?: PunktWhereInput | PunktWhereInput[]
    id?: StringFilter<"Punkt"> | string
    workingHours?: JsonFilter<"Punkt">
    canTryOn?: BoolFilter<"Punkt"> | boolean
    name?: StringFilter<"Punkt"> | string
    isActive?: BoolFilter<"Punkt"> | boolean
    locationText?: StringFilter<"Punkt"> | string
    locationLongitude?: FloatFilter<"Punkt"> | number
    locationLatitude?: FloatFilter<"Punkt"> | number
    region?: StringFilter<"Punkt"> | string
    city?: StringFilter<"Punkt"> | string
    punktAdminId?: StringFilter<"Punkt"> | string
    couriers?: StringNullableListFilter<"Punkt">
    createdAt?: DateTimeFilter<"Punkt"> | Date | string
    updatedAt?: DateTimeFilter<"Punkt"> | Date | string
  }

  export type PunktOrderByWithRelationInput = {
    id?: SortOrder
    workingHours?: SortOrder
    canTryOn?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    locationText?: SortOrder
    locationLongitude?: SortOrder
    locationLatitude?: SortOrder
    region?: SortOrder
    city?: SortOrder
    punktAdminId?: SortOrder
    couriers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PunktWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PunktWhereInput | PunktWhereInput[]
    OR?: PunktWhereInput[]
    NOT?: PunktWhereInput | PunktWhereInput[]
    workingHours?: JsonFilter<"Punkt">
    canTryOn?: BoolFilter<"Punkt"> | boolean
    name?: StringFilter<"Punkt"> | string
    isActive?: BoolFilter<"Punkt"> | boolean
    locationText?: StringFilter<"Punkt"> | string
    locationLongitude?: FloatFilter<"Punkt"> | number
    locationLatitude?: FloatFilter<"Punkt"> | number
    region?: StringFilter<"Punkt"> | string
    city?: StringFilter<"Punkt"> | string
    punktAdminId?: StringFilter<"Punkt"> | string
    couriers?: StringNullableListFilter<"Punkt">
    createdAt?: DateTimeFilter<"Punkt"> | Date | string
    updatedAt?: DateTimeFilter<"Punkt"> | Date | string
  }, "id">

  export type PunktOrderByWithAggregationInput = {
    id?: SortOrder
    workingHours?: SortOrder
    canTryOn?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    locationText?: SortOrder
    locationLongitude?: SortOrder
    locationLatitude?: SortOrder
    region?: SortOrder
    city?: SortOrder
    punktAdminId?: SortOrder
    couriers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PunktCountOrderByAggregateInput
    _avg?: PunktAvgOrderByAggregateInput
    _max?: PunktMaxOrderByAggregateInput
    _min?: PunktMinOrderByAggregateInput
    _sum?: PunktSumOrderByAggregateInput
  }

  export type PunktScalarWhereWithAggregatesInput = {
    AND?: PunktScalarWhereWithAggregatesInput | PunktScalarWhereWithAggregatesInput[]
    OR?: PunktScalarWhereWithAggregatesInput[]
    NOT?: PunktScalarWhereWithAggregatesInput | PunktScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Punkt"> | string
    workingHours?: JsonWithAggregatesFilter<"Punkt">
    canTryOn?: BoolWithAggregatesFilter<"Punkt"> | boolean
    name?: StringWithAggregatesFilter<"Punkt"> | string
    isActive?: BoolWithAggregatesFilter<"Punkt"> | boolean
    locationText?: StringWithAggregatesFilter<"Punkt"> | string
    locationLongitude?: FloatWithAggregatesFilter<"Punkt"> | number
    locationLatitude?: FloatWithAggregatesFilter<"Punkt"> | number
    region?: StringWithAggregatesFilter<"Punkt"> | string
    city?: StringWithAggregatesFilter<"Punkt"> | string
    punktAdminId?: StringWithAggregatesFilter<"Punkt"> | string
    couriers?: StringNullableListFilter<"Punkt">
    createdAt?: DateTimeWithAggregatesFilter<"Punkt"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Punkt"> | Date | string
  }

  export type PunktCreateInput = {
    id?: string
    workingHours: InputJsonValue
    canTryOn?: boolean
    name: string
    isActive?: boolean
    locationText: string
    locationLongitude: number
    locationLatitude: number
    region: string
    city: string
    punktAdminId: string
    couriers?: PunktCreatecouriersInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PunktUncheckedCreateInput = {
    id?: string
    workingHours: InputJsonValue
    canTryOn?: boolean
    name: string
    isActive?: boolean
    locationText: string
    locationLongitude: number
    locationLatitude: number
    region: string
    city: string
    punktAdminId: string
    couriers?: PunktCreatecouriersInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PunktUpdateInput = {
    workingHours?: InputJsonValue | InputJsonValue
    canTryOn?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    locationText?: StringFieldUpdateOperationsInput | string
    locationLongitude?: FloatFieldUpdateOperationsInput | number
    locationLatitude?: FloatFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    punktAdminId?: StringFieldUpdateOperationsInput | string
    couriers?: PunktUpdatecouriersInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PunktUncheckedUpdateInput = {
    workingHours?: InputJsonValue | InputJsonValue
    canTryOn?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    locationText?: StringFieldUpdateOperationsInput | string
    locationLongitude?: FloatFieldUpdateOperationsInput | number
    locationLatitude?: FloatFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    punktAdminId?: StringFieldUpdateOperationsInput | string
    couriers?: PunktUpdatecouriersInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PunktCreateManyInput = {
    id?: string
    workingHours: InputJsonValue
    canTryOn?: boolean
    name: string
    isActive?: boolean
    locationText: string
    locationLongitude: number
    locationLatitude: number
    region: string
    city: string
    punktAdminId: string
    couriers?: PunktCreatecouriersInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PunktUpdateManyMutationInput = {
    workingHours?: InputJsonValue | InputJsonValue
    canTryOn?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    locationText?: StringFieldUpdateOperationsInput | string
    locationLongitude?: FloatFieldUpdateOperationsInput | number
    locationLatitude?: FloatFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    punktAdminId?: StringFieldUpdateOperationsInput | string
    couriers?: PunktUpdatecouriersInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PunktUncheckedUpdateManyInput = {
    workingHours?: InputJsonValue | InputJsonValue
    canTryOn?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    locationText?: StringFieldUpdateOperationsInput | string
    locationLongitude?: FloatFieldUpdateOperationsInput | number
    locationLatitude?: FloatFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    punktAdminId?: StringFieldUpdateOperationsInput | string
    couriers?: PunktUpdatecouriersInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type PunktCountOrderByAggregateInput = {
    id?: SortOrder
    workingHours?: SortOrder
    canTryOn?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    locationText?: SortOrder
    locationLongitude?: SortOrder
    locationLatitude?: SortOrder
    region?: SortOrder
    city?: SortOrder
    punktAdminId?: SortOrder
    couriers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PunktAvgOrderByAggregateInput = {
    locationLongitude?: SortOrder
    locationLatitude?: SortOrder
  }

  export type PunktMaxOrderByAggregateInput = {
    id?: SortOrder
    canTryOn?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    locationText?: SortOrder
    locationLongitude?: SortOrder
    locationLatitude?: SortOrder
    region?: SortOrder
    city?: SortOrder
    punktAdminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PunktMinOrderByAggregateInput = {
    id?: SortOrder
    canTryOn?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    locationText?: SortOrder
    locationLongitude?: SortOrder
    locationLatitude?: SortOrder
    region?: SortOrder
    city?: SortOrder
    punktAdminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PunktSumOrderByAggregateInput = {
    locationLongitude?: SortOrder
    locationLatitude?: SortOrder
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type PunktCreatecouriersInput = {
    set: string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PunktUpdatecouriersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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