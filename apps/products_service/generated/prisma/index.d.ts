
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
 * Model Comments
 * 
 */
export type Comments = $Result.DefaultSelection<Prisma.$CommentsPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductImage
 * 
 */
export type ProductImage = $Result.DefaultSelection<Prisma.$ProductImagePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model LikedProduct
 * 
 */
export type LikedProduct = $Result.DefaultSelection<Prisma.$LikedProductPayload>
/**
 * Model Brand
 * 
 */
export type Brand = $Result.DefaultSelection<Prisma.$BrandPayload>
/**
 * Model BrandCategory
 * 
 */
export type BrandCategory = $Result.DefaultSelection<Prisma.$BrandCategoryPayload>
/**
 * Model FilterType
 * 
 */
export type FilterType = $Result.DefaultSelection<Prisma.$FilterTypePayload>
/**
 * Model FilterValues
 * 
 */
export type FilterValues = $Result.DefaultSelection<Prisma.$FilterValuesPayload>
/**
 * Model FilterCategory
 * 
 */
export type FilterCategory = $Result.DefaultSelection<Prisma.$FilterCategoryPayload>
/**
 * Model Coupon
 * 
 */
export type Coupon = $Result.DefaultSelection<Prisma.$CouponPayload>
/**
 * Model Poster
 * 
 */
export type Poster = $Result.DefaultSelection<Prisma.$PosterPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProductStatus: {
  FAOL: 'FAOL',
  NOFAOL: 'NOFAOL',
  TUGAGAN: 'TUGAGAN'
};

export type ProductStatus = (typeof ProductStatus)[keyof typeof ProductStatus]


export const InputType: {
  CHECKBOX: 'CHECKBOX',
  SELECT: 'SELECT',
  RANGE: 'RANGE'
};

export type InputType = (typeof InputType)[keyof typeof InputType]


export const TypeOfFilter: {
  GENERAL: 'GENERAL',
  SPECIFIC: 'SPECIFIC'
};

export type TypeOfFilter = (typeof TypeOfFilter)[keyof typeof TypeOfFilter]


export const CouponStatus: {
  FAOL: 'FAOL',
  NOFAOL: 'NOFAOL'
};

export type CouponStatus = (typeof CouponStatus)[keyof typeof CouponStatus]

}

export type ProductStatus = $Enums.ProductStatus

export const ProductStatus: typeof $Enums.ProductStatus

export type InputType = $Enums.InputType

export const InputType: typeof $Enums.InputType

export type TypeOfFilter = $Enums.TypeOfFilter

export const TypeOfFilter: typeof $Enums.TypeOfFilter

export type CouponStatus = $Enums.CouponStatus

export const CouponStatus: typeof $Enums.CouponStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Comments
 * const comments = await prisma.comments.findMany()
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
   * // Fetch zero or more Comments
   * const comments = await prisma.comments.findMany()
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
   * `prisma.comments`: Exposes CRUD operations for the **Comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.CommentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productImage`: Exposes CRUD operations for the **ProductImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductImages
    * const productImages = await prisma.productImage.findMany()
    * ```
    */
  get productImage(): Prisma.ProductImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.likedProduct`: Exposes CRUD operations for the **LikedProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LikedProducts
    * const likedProducts = await prisma.likedProduct.findMany()
    * ```
    */
  get likedProduct(): Prisma.LikedProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brand`: Exposes CRUD operations for the **Brand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brand.findMany()
    * ```
    */
  get brand(): Prisma.BrandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brandCategory`: Exposes CRUD operations for the **BrandCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BrandCategories
    * const brandCategories = await prisma.brandCategory.findMany()
    * ```
    */
  get brandCategory(): Prisma.BrandCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.filterType`: Exposes CRUD operations for the **FilterType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FilterTypes
    * const filterTypes = await prisma.filterType.findMany()
    * ```
    */
  get filterType(): Prisma.FilterTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.filterValues`: Exposes CRUD operations for the **FilterValues** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FilterValues
    * const filterValues = await prisma.filterValues.findMany()
    * ```
    */
  get filterValues(): Prisma.FilterValuesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.filterCategory`: Exposes CRUD operations for the **FilterCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FilterCategories
    * const filterCategories = await prisma.filterCategory.findMany()
    * ```
    */
  get filterCategory(): Prisma.FilterCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coupon`: Exposes CRUD operations for the **Coupon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coupons
    * const coupons = await prisma.coupon.findMany()
    * ```
    */
  get coupon(): Prisma.CouponDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.poster`: Exposes CRUD operations for the **Poster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posters
    * const posters = await prisma.poster.findMany()
    * ```
    */
  get poster(): Prisma.PosterDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Comments: 'Comments',
    Product: 'Product',
    ProductImage: 'ProductImage',
    Category: 'Category',
    LikedProduct: 'LikedProduct',
    Brand: 'Brand',
    BrandCategory: 'BrandCategory',
    FilterType: 'FilterType',
    FilterValues: 'FilterValues',
    FilterCategory: 'FilterCategory',
    Coupon: 'Coupon',
    Poster: 'Poster'
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
      modelProps: "comments" | "product" | "productImage" | "category" | "likedProduct" | "brand" | "brandCategory" | "filterType" | "filterValues" | "filterCategory" | "coupon" | "poster"
      txIsolationLevel: never
    }
    model: {
      Comments: {
        payload: Prisma.$CommentsPayload<ExtArgs>
        fields: Prisma.CommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findFirst: {
            args: Prisma.CommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findMany: {
            args: Prisma.CommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          create: {
            args: Prisma.CommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          createMany: {
            args: Prisma.CommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          update: {
            args: Prisma.CommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          deleteMany: {
            args: Prisma.CommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.CommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CommentsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CommentsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CommentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProductFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProductAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductImage: {
        payload: Prisma.$ProductImagePayload<ExtArgs>
        fields: Prisma.ProductImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findFirst: {
            args: Prisma.ProductImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findMany: {
            args: Prisma.ProductImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          create: {
            args: Prisma.ProductImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          createMany: {
            args: Prisma.ProductImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          update: {
            args: Prisma.ProductImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          deleteMany: {
            args: Prisma.ProductImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          aggregate: {
            args: Prisma.ProductImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductImage>
          }
          groupBy: {
            args: Prisma.ProductImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductImageGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProductImageFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProductImageAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProductImageCountArgs<ExtArgs>
            result: $Utils.Optional<ProductImageCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CategoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CategoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      LikedProduct: {
        payload: Prisma.$LikedProductPayload<ExtArgs>
        fields: Prisma.LikedProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikedProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikedProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedProductPayload>
          }
          findFirst: {
            args: Prisma.LikedProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikedProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedProductPayload>
          }
          findMany: {
            args: Prisma.LikedProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedProductPayload>[]
          }
          create: {
            args: Prisma.LikedProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedProductPayload>
          }
          createMany: {
            args: Prisma.LikedProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LikedProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedProductPayload>
          }
          update: {
            args: Prisma.LikedProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedProductPayload>
          }
          deleteMany: {
            args: Prisma.LikedProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikedProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LikedProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedProductPayload>
          }
          aggregate: {
            args: Prisma.LikedProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikedProduct>
          }
          groupBy: {
            args: Prisma.LikedProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikedProductGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LikedProductFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.LikedProductAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.LikedProductCountArgs<ExtArgs>
            result: $Utils.Optional<LikedProductCountAggregateOutputType> | number
          }
        }
      }
      Brand: {
        payload: Prisma.$BrandPayload<ExtArgs>
        fields: Prisma.BrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findFirst: {
            args: Prisma.BrandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findMany: {
            args: Prisma.BrandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          create: {
            args: Prisma.BrandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          createMany: {
            args: Prisma.BrandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BrandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          update: {
            args: Prisma.BrandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          deleteMany: {
            args: Prisma.BrandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BrandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          aggregate: {
            args: Prisma.BrandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrand>
          }
          groupBy: {
            args: Prisma.BrandGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.BrandFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.BrandAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.BrandCountArgs<ExtArgs>
            result: $Utils.Optional<BrandCountAggregateOutputType> | number
          }
        }
      }
      BrandCategory: {
        payload: Prisma.$BrandCategoryPayload<ExtArgs>
        fields: Prisma.BrandCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandCategoryPayload>
          }
          findFirst: {
            args: Prisma.BrandCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandCategoryPayload>
          }
          findMany: {
            args: Prisma.BrandCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandCategoryPayload>[]
          }
          create: {
            args: Prisma.BrandCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandCategoryPayload>
          }
          createMany: {
            args: Prisma.BrandCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BrandCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandCategoryPayload>
          }
          update: {
            args: Prisma.BrandCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandCategoryPayload>
          }
          deleteMany: {
            args: Prisma.BrandCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BrandCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandCategoryPayload>
          }
          aggregate: {
            args: Prisma.BrandCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrandCategory>
          }
          groupBy: {
            args: Prisma.BrandCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandCategoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.BrandCategoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.BrandCategoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.BrandCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<BrandCategoryCountAggregateOutputType> | number
          }
        }
      }
      FilterType: {
        payload: Prisma.$FilterTypePayload<ExtArgs>
        fields: Prisma.FilterTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilterTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilterTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterTypePayload>
          }
          findFirst: {
            args: Prisma.FilterTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilterTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterTypePayload>
          }
          findMany: {
            args: Prisma.FilterTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterTypePayload>[]
          }
          create: {
            args: Prisma.FilterTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterTypePayload>
          }
          createMany: {
            args: Prisma.FilterTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FilterTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterTypePayload>
          }
          update: {
            args: Prisma.FilterTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterTypePayload>
          }
          deleteMany: {
            args: Prisma.FilterTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FilterTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FilterTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterTypePayload>
          }
          aggregate: {
            args: Prisma.FilterTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilterType>
          }
          groupBy: {
            args: Prisma.FilterTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilterTypeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FilterTypeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FilterTypeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FilterTypeCountArgs<ExtArgs>
            result: $Utils.Optional<FilterTypeCountAggregateOutputType> | number
          }
        }
      }
      FilterValues: {
        payload: Prisma.$FilterValuesPayload<ExtArgs>
        fields: Prisma.FilterValuesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilterValuesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterValuesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilterValuesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterValuesPayload>
          }
          findFirst: {
            args: Prisma.FilterValuesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterValuesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilterValuesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterValuesPayload>
          }
          findMany: {
            args: Prisma.FilterValuesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterValuesPayload>[]
          }
          create: {
            args: Prisma.FilterValuesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterValuesPayload>
          }
          createMany: {
            args: Prisma.FilterValuesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FilterValuesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterValuesPayload>
          }
          update: {
            args: Prisma.FilterValuesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterValuesPayload>
          }
          deleteMany: {
            args: Prisma.FilterValuesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FilterValuesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FilterValuesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterValuesPayload>
          }
          aggregate: {
            args: Prisma.FilterValuesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilterValues>
          }
          groupBy: {
            args: Prisma.FilterValuesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilterValuesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FilterValuesFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FilterValuesAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FilterValuesCountArgs<ExtArgs>
            result: $Utils.Optional<FilterValuesCountAggregateOutputType> | number
          }
        }
      }
      FilterCategory: {
        payload: Prisma.$FilterCategoryPayload<ExtArgs>
        fields: Prisma.FilterCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilterCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilterCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterCategoryPayload>
          }
          findFirst: {
            args: Prisma.FilterCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilterCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterCategoryPayload>
          }
          findMany: {
            args: Prisma.FilterCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterCategoryPayload>[]
          }
          create: {
            args: Prisma.FilterCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterCategoryPayload>
          }
          createMany: {
            args: Prisma.FilterCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FilterCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterCategoryPayload>
          }
          update: {
            args: Prisma.FilterCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterCategoryPayload>
          }
          deleteMany: {
            args: Prisma.FilterCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FilterCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FilterCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterCategoryPayload>
          }
          aggregate: {
            args: Prisma.FilterCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilterCategory>
          }
          groupBy: {
            args: Prisma.FilterCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilterCategoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FilterCategoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FilterCategoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FilterCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<FilterCategoryCountAggregateOutputType> | number
          }
        }
      }
      Coupon: {
        payload: Prisma.$CouponPayload<ExtArgs>
        fields: Prisma.CouponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CouponFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CouponFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          findFirst: {
            args: Prisma.CouponFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CouponFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          findMany: {
            args: Prisma.CouponFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>[]
          }
          create: {
            args: Prisma.CouponCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          createMany: {
            args: Prisma.CouponCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CouponDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          update: {
            args: Prisma.CouponUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          deleteMany: {
            args: Prisma.CouponDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CouponUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CouponUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          aggregate: {
            args: Prisma.CouponAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoupon>
          }
          groupBy: {
            args: Prisma.CouponGroupByArgs<ExtArgs>
            result: $Utils.Optional<CouponGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CouponFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CouponAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CouponCountArgs<ExtArgs>
            result: $Utils.Optional<CouponCountAggregateOutputType> | number
          }
        }
      }
      Poster: {
        payload: Prisma.$PosterPayload<ExtArgs>
        fields: Prisma.PosterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PosterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PosterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosterPayload>
          }
          findFirst: {
            args: Prisma.PosterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PosterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosterPayload>
          }
          findMany: {
            args: Prisma.PosterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosterPayload>[]
          }
          create: {
            args: Prisma.PosterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosterPayload>
          }
          createMany: {
            args: Prisma.PosterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PosterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosterPayload>
          }
          update: {
            args: Prisma.PosterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosterPayload>
          }
          deleteMany: {
            args: Prisma.PosterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PosterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PosterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosterPayload>
          }
          aggregate: {
            args: Prisma.PosterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoster>
          }
          groupBy: {
            args: Prisma.PosterGroupByArgs<ExtArgs>
            result: $Utils.Optional<PosterGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PosterFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PosterAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PosterCountArgs<ExtArgs>
            result: $Utils.Optional<PosterCountAggregateOutputType> | number
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
    comments?: CommentsOmit
    product?: ProductOmit
    productImage?: ProductImageOmit
    category?: CategoryOmit
    likedProduct?: LikedProductOmit
    brand?: BrandOmit
    brandCategory?: BrandCategoryOmit
    filterType?: FilterTypeOmit
    filterValues?: FilterValuesOmit
    filterCategory?: FilterCategoryOmit
    coupon?: CouponOmit
    poster?: PosterOmit
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
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    product_images: number
    comments: number
    likes: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_images?: boolean | ProductCountOutputTypeCountProduct_imagesArgs
    comments?: boolean | ProductCountOutputTypeCountCommentsArgs
    likes?: boolean | ProductCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProduct_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedProductWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    product: number
    brand: number
    filter: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | CategoryCountOutputTypeCountProductArgs
    brand?: boolean | CategoryCountOutputTypeCountBrandArgs
    filter?: boolean | CategoryCountOutputTypeCountFilterArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountBrandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandCategoryWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountFilterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilterCategoryWhereInput
  }


  /**
   * Count Type BrandCountOutputType
   */

  export type BrandCountOutputType = {
    categories: number
    product: number
  }

  export type BrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | BrandCountOutputTypeCountCategoriesArgs
    product?: boolean | BrandCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCountOutputType
     */
    select?: BrandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandCategoryWhereInput
  }

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type FilterTypeCountOutputType
   */

  export type FilterTypeCountOutputType = {
    filterCategory: number
    values: number
  }

  export type FilterTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filterCategory?: boolean | FilterTypeCountOutputTypeCountFilterCategoryArgs
    values?: boolean | FilterTypeCountOutputTypeCountValuesArgs
  }

  // Custom InputTypes
  /**
   * FilterTypeCountOutputType without action
   */
  export type FilterTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterTypeCountOutputType
     */
    select?: FilterTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FilterTypeCountOutputType without action
   */
  export type FilterTypeCountOutputTypeCountFilterCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilterCategoryWhereInput
  }

  /**
   * FilterTypeCountOutputType without action
   */
  export type FilterTypeCountOutputTypeCountValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilterValuesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    stars: number | null
  }

  export type CommentsSumAggregateOutputType = {
    stars: number | null
  }

  export type CommentsMinAggregateOutputType = {
    id: string | null
    title: string | null
    sent_person: string | null
    image: string | null
    stars: number | null
    replyMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
    productId: string | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    sent_person: string | null
    image: string | null
    stars: number | null
    replyMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
    productId: string | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    title: number
    sent_person: number
    image: number
    stars: number
    replyMessage: number
    createdAt: number
    updatedAt: number
    productId: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    stars?: true
  }

  export type CommentsSumAggregateInputType = {
    stars?: true
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    title?: true
    sent_person?: true
    image?: true
    stars?: true
    replyMessage?: true
    createdAt?: true
    updatedAt?: true
    productId?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    title?: true
    sent_person?: true
    image?: true
    stars?: true
    replyMessage?: true
    createdAt?: true
    updatedAt?: true
    productId?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    title?: true
    sent_person?: true
    image?: true
    stars?: true
    replyMessage?: true
    createdAt?: true
    updatedAt?: true
    productId?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to aggregate.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type CommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithAggregationInput | CommentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: CommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: string
    title: string
    sent_person: string
    image: string | null
    stars: number
    replyMessage: string | null
    createdAt: Date
    updatedAt: Date
    productId: string
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends CommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type CommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    sent_person?: boolean
    image?: boolean
    stars?: boolean
    replyMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>



  export type CommentsSelectScalar = {
    id?: boolean
    title?: boolean
    sent_person?: boolean
    image?: boolean
    stars?: boolean
    replyMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productId?: boolean
  }

  export type CommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "sent_person" | "image" | "stars" | "replyMessage" | "createdAt" | "updatedAt" | "productId", ExtArgs["result"]["comments"]>
  export type CommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $CommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comments"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      sent_person: string
      image: string | null
      stars: number
      replyMessage: string | null
      createdAt: Date
      updatedAt: Date
      productId: string
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type CommentsGetPayload<S extends boolean | null | undefined | CommentsDefaultArgs> = $Result.GetResult<Prisma.$CommentsPayload, S>

  type CommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface CommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comments'], meta: { name: 'Comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {CommentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentsFindUniqueArgs>(args: SelectSubset<T, CommentsFindUniqueArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentsFindFirstArgs>(args?: SelectSubset<T, CommentsFindFirstArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentsFindManyArgs>(args?: SelectSubset<T, CommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {CommentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends CommentsCreateArgs>(args: SelectSubset<T, CommentsCreateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentsCreateManyArgs>(args?: SelectSubset<T, CommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comments.
     * @param {CommentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends CommentsDeleteArgs>(args: SelectSubset<T, CommentsDeleteArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {CommentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentsUpdateArgs>(args: SelectSubset<T, CommentsUpdateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentsDeleteManyArgs>(args?: SelectSubset<T, CommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentsUpdateManyArgs>(args: SelectSubset<T, CommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comments.
     * @param {CommentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends CommentsUpsertArgs>(args: SelectSubset<T, CommentsUpsertArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * @param {CommentsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const comments = await prisma.comments.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CommentsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Comments.
     * @param {CommentsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const comments = await prisma.comments.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CommentsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentsCountArgs>(
      args?: Subset<T, CommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsGroupByArgs} args - Group by arguments.
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
      T extends CommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentsGroupByArgs['orderBy'] }
        : { orderBy?: CommentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comments model
   */
  readonly fields: CommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comments model
   */
  interface CommentsFieldRefs {
    readonly id: FieldRef<"Comments", 'String'>
    readonly title: FieldRef<"Comments", 'String'>
    readonly sent_person: FieldRef<"Comments", 'String'>
    readonly image: FieldRef<"Comments", 'String'>
    readonly stars: FieldRef<"Comments", 'Int'>
    readonly replyMessage: FieldRef<"Comments", 'String'>
    readonly createdAt: FieldRef<"Comments", 'DateTime'>
    readonly updatedAt: FieldRef<"Comments", 'DateTime'>
    readonly productId: FieldRef<"Comments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comments findUnique
   */
  export type CommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findUniqueOrThrow
   */
  export type CommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findFirst
   */
  export type CommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findFirstOrThrow
   */
  export type CommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findMany
   */
  export type CommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments create
   */
  export type CommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Comments.
     */
    data: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
  }

  /**
   * Comments createMany
   */
  export type CommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
  }

  /**
   * Comments update
   */
  export type CommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Comments.
     */
    data: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
    /**
     * Choose, which Comments to update.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments updateMany
   */
  export type CommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comments upsert
   */
  export type CommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Comments to update in case it exists.
     */
    where: CommentsWhereUniqueInput
    /**
     * In case the Comments found by the `where` argument doesn't exist, create a new Comments with this data.
     */
    create: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
    /**
     * In case the Comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
  }

  /**
   * Comments delete
   */
  export type CommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter which Comments to delete.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments deleteMany
   */
  export type CommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comments findRaw
   */
  export type CommentsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Comments aggregateRaw
   */
  export type CommentsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Comments without action
   */
  export type CommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    oldPrice: number | null
    price: number | null
    quantity: number | null
  }

  export type ProductSumAggregateOutputType = {
    oldPrice: number | null
    price: number | null
    quantity: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    product_name: string | null
    description: string | null
    oldPrice: number | null
    price: number | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: string | null
    brandId: string | null
    product_status: $Enums.ProductStatus | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    product_name: string | null
    description: string | null
    oldPrice: number | null
    price: number | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: string | null
    brandId: string | null
    product_status: $Enums.ProductStatus | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    product_name: number
    description: number
    oldPrice: number
    price: number
    quantity: number
    color: number
    filters: number
    ordered: number
    createdAt: number
    updatedAt: number
    categoryId: number
    brandId: number
    product_status: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    oldPrice?: true
    price?: true
    quantity?: true
  }

  export type ProductSumAggregateInputType = {
    oldPrice?: true
    price?: true
    quantity?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    product_name?: true
    description?: true
    oldPrice?: true
    price?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
    brandId?: true
    product_status?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    product_name?: true
    description?: true
    oldPrice?: true
    price?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
    brandId?: true
    product_status?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    product_name?: true
    description?: true
    oldPrice?: true
    price?: true
    quantity?: true
    color?: true
    filters?: true
    ordered?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
    brandId?: true
    product_status?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    product_name: string
    description: string
    oldPrice: number
    price: number
    quantity: number
    color: string[]
    filters: JsonValue
    ordered: string[]
    createdAt: Date
    updatedAt: Date
    categoryId: string
    brandId: string
    product_status: $Enums.ProductStatus
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_name?: boolean
    description?: boolean
    oldPrice?: boolean
    price?: boolean
    quantity?: boolean
    color?: boolean
    filters?: boolean
    ordered?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    brandId?: boolean
    product_status?: boolean
    product_images?: boolean | Product$product_imagesArgs<ExtArgs>
    comments?: boolean | Product$commentsArgs<ExtArgs>
    likes?: boolean | Product$likesArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type ProductSelectScalar = {
    id?: boolean
    product_name?: boolean
    description?: boolean
    oldPrice?: boolean
    price?: boolean
    quantity?: boolean
    color?: boolean
    filters?: boolean
    ordered?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    brandId?: boolean
    product_status?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_name" | "description" | "oldPrice" | "price" | "quantity" | "color" | "filters" | "ordered" | "createdAt" | "updatedAt" | "categoryId" | "brandId" | "product_status", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_images?: boolean | Product$product_imagesArgs<ExtArgs>
    comments?: boolean | Product$commentsArgs<ExtArgs>
    likes?: boolean | Product$likesArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      product_images: Prisma.$ProductImagePayload<ExtArgs>[]
      comments: Prisma.$CommentsPayload<ExtArgs>[]
      likes: Prisma.$LikedProductPayload<ExtArgs>[]
      category: Prisma.$CategoryPayload<ExtArgs>
      brand: Prisma.$BrandPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      product_name: string
      description: string
      oldPrice: number
      price: number
      quantity: number
      color: string[]
      filters: Prisma.JsonValue
      ordered: string[]
      createdAt: Date
      updatedAt: Date
      categoryId: string
      brandId: string
      product_status: $Enums.ProductStatus
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * @param {ProductFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const product = await prisma.product.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProductFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Product.
     * @param {ProductAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const product = await prisma.product.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProductAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product_images<T extends Product$product_imagesArgs<ExtArgs> = {}>(args?: Subset<T, Product$product_imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Product$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Product$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Product$likesArgs<ExtArgs> = {}>(args?: Subset<T, Product$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    brand<T extends BrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandDefaultArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly product_name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly oldPrice: FieldRef<"Product", 'Float'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly quantity: FieldRef<"Product", 'Int'>
    readonly color: FieldRef<"Product", 'String[]'>
    readonly filters: FieldRef<"Product", 'Json'>
    readonly ordered: FieldRef<"Product", 'String[]'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
    readonly categoryId: FieldRef<"Product", 'String'>
    readonly brandId: FieldRef<"Product", 'String'>
    readonly product_status: FieldRef<"Product", 'ProductStatus'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product findRaw
   */
  export type ProductFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Product aggregateRaw
   */
  export type ProductAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Product.product_images
   */
  export type Product$product_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    cursor?: ProductImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * Product.comments
   */
  export type Product$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Product.likes
   */
  export type Product$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedProduct
     */
    select?: LikedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedProduct
     */
    omit?: LikedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedProductInclude<ExtArgs> | null
    where?: LikedProductWhereInput
    orderBy?: LikedProductOrderByWithRelationInput | LikedProductOrderByWithRelationInput[]
    cursor?: LikedProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedProductScalarFieldEnum | LikedProductScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductImage
   */

  export type AggregateProductImage = {
    _count: ProductImageCountAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  export type ProductImageMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    productId: string | null
  }

  export type ProductImageMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    productId: string | null
  }

  export type ProductImageCountAggregateOutputType = {
    id: number
    imageUrl: number
    productId: number
    _all: number
  }


  export type ProductImageMinAggregateInputType = {
    id?: true
    imageUrl?: true
    productId?: true
  }

  export type ProductImageMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    productId?: true
  }

  export type ProductImageCountAggregateInputType = {
    id?: true
    imageUrl?: true
    productId?: true
    _all?: true
  }

  export type ProductImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImage to aggregate.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductImages
    **/
    _count?: true | ProductImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductImageMaxAggregateInputType
  }

  export type GetProductImageAggregateType<T extends ProductImageAggregateArgs> = {
        [P in keyof T & keyof AggregateProductImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductImage[P]>
      : GetScalarType<T[P], AggregateProductImage[P]>
  }




  export type ProductImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithAggregationInput | ProductImageOrderByWithAggregationInput[]
    by: ProductImageScalarFieldEnum[] | ProductImageScalarFieldEnum
    having?: ProductImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductImageCountAggregateInputType | true
    _min?: ProductImageMinAggregateInputType
    _max?: ProductImageMaxAggregateInputType
  }

  export type ProductImageGroupByOutputType = {
    id: string
    imageUrl: string
    productId: string
    _count: ProductImageCountAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  type GetProductImageGroupByPayload<T extends ProductImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
            : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
        }
      >
    >


  export type ProductImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>



  export type ProductImageSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    productId?: boolean
  }

  export type ProductImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "productId", ExtArgs["result"]["productImage"]>
  export type ProductImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductImage"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string
      productId: string
    }, ExtArgs["result"]["productImage"]>
    composites: {}
  }

  type ProductImageGetPayload<S extends boolean | null | undefined | ProductImageDefaultArgs> = $Result.GetResult<Prisma.$ProductImagePayload, S>

  type ProductImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductImageCountAggregateInputType | true
    }

  export interface ProductImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductImage'], meta: { name: 'ProductImage' } }
    /**
     * Find zero or one ProductImage that matches the filter.
     * @param {ProductImageFindUniqueArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductImageFindUniqueArgs>(args: SelectSubset<T, ProductImageFindUniqueArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductImageFindUniqueOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductImageFindFirstArgs>(args?: SelectSubset<T, ProductImageFindFirstArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductImages
     * const productImages = await prisma.productImage.findMany()
     * 
     * // Get first 10 ProductImages
     * const productImages = await prisma.productImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productImageWithIdOnly = await prisma.productImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductImageFindManyArgs>(args?: SelectSubset<T, ProductImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductImage.
     * @param {ProductImageCreateArgs} args - Arguments to create a ProductImage.
     * @example
     * // Create one ProductImage
     * const ProductImage = await prisma.productImage.create({
     *   data: {
     *     // ... data to create a ProductImage
     *   }
     * })
     * 
     */
    create<T extends ProductImageCreateArgs>(args: SelectSubset<T, ProductImageCreateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductImages.
     * @param {ProductImageCreateManyArgs} args - Arguments to create many ProductImages.
     * @example
     * // Create many ProductImages
     * const productImage = await prisma.productImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductImageCreateManyArgs>(args?: SelectSubset<T, ProductImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductImage.
     * @param {ProductImageDeleteArgs} args - Arguments to delete one ProductImage.
     * @example
     * // Delete one ProductImage
     * const ProductImage = await prisma.productImage.delete({
     *   where: {
     *     // ... filter to delete one ProductImage
     *   }
     * })
     * 
     */
    delete<T extends ProductImageDeleteArgs>(args: SelectSubset<T, ProductImageDeleteArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductImage.
     * @param {ProductImageUpdateArgs} args - Arguments to update one ProductImage.
     * @example
     * // Update one ProductImage
     * const productImage = await prisma.productImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductImageUpdateArgs>(args: SelectSubset<T, ProductImageUpdateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductImages.
     * @param {ProductImageDeleteManyArgs} args - Arguments to filter ProductImages to delete.
     * @example
     * // Delete a few ProductImages
     * const { count } = await prisma.productImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductImageDeleteManyArgs>(args?: SelectSubset<T, ProductImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductImages
     * const productImage = await prisma.productImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductImageUpdateManyArgs>(args: SelectSubset<T, ProductImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductImage.
     * @param {ProductImageUpsertArgs} args - Arguments to update or create a ProductImage.
     * @example
     * // Update or create a ProductImage
     * const productImage = await prisma.productImage.upsert({
     *   create: {
     *     // ... data to create a ProductImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductImage we want to update
     *   }
     * })
     */
    upsert<T extends ProductImageUpsertArgs>(args: SelectSubset<T, ProductImageUpsertArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductImages that matches the filter.
     * @param {ProductImageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const productImage = await prisma.productImage.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProductImageFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ProductImage.
     * @param {ProductImageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const productImage = await prisma.productImage.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProductImageAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageCountArgs} args - Arguments to filter ProductImages to count.
     * @example
     * // Count the number of ProductImages
     * const count = await prisma.productImage.count({
     *   where: {
     *     // ... the filter for the ProductImages we want to count
     *   }
     * })
    **/
    count<T extends ProductImageCountArgs>(
      args?: Subset<T, ProductImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductImageAggregateArgs>(args: Subset<T, ProductImageAggregateArgs>): Prisma.PrismaPromise<GetProductImageAggregateType<T>>

    /**
     * Group by ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageGroupByArgs} args - Group by arguments.
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
      T extends ProductImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductImageGroupByArgs['orderBy'] }
        : { orderBy?: ProductImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductImage model
   */
  readonly fields: ProductImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductImage model
   */
  interface ProductImageFieldRefs {
    readonly id: FieldRef<"ProductImage", 'String'>
    readonly imageUrl: FieldRef<"ProductImage", 'String'>
    readonly productId: FieldRef<"ProductImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductImage findUnique
   */
  export type ProductImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findUniqueOrThrow
   */
  export type ProductImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findFirst
   */
  export type ProductImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findFirstOrThrow
   */
  export type ProductImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findMany
   */
  export type ProductImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage create
   */
  export type ProductImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductImage.
     */
    data: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
  }

  /**
   * ProductImage createMany
   */
  export type ProductImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImageCreateManyInput | ProductImageCreateManyInput[]
  }

  /**
   * ProductImage update
   */
  export type ProductImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductImage.
     */
    data: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
    /**
     * Choose, which ProductImage to update.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage updateMany
   */
  export type ProductImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductImages.
     */
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to update.
     */
    limit?: number
  }

  /**
   * ProductImage upsert
   */
  export type ProductImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductImage to update in case it exists.
     */
    where: ProductImageWhereUniqueInput
    /**
     * In case the ProductImage found by the `where` argument doesn't exist, create a new ProductImage with this data.
     */
    create: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
    /**
     * In case the ProductImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
  }

  /**
   * ProductImage delete
   */
  export type ProductImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter which ProductImage to delete.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage deleteMany
   */
  export type ProductImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImages to delete
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to delete.
     */
    limit?: number
  }

  /**
   * ProductImage findRaw
   */
  export type ProductImageFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ProductImage aggregateRaw
   */
  export type ProductImageAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ProductImage without action
   */
  export type ProductImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    children: number | null
  }

  export type CategorySumAggregateOutputType = {
    children: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    parentId: string | null
    icon: string | null
    title: string | null
    children: number | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    parentId: string | null
    icon: string | null
    title: string | null
    children: number | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    parentId: number
    icon: number
    title: number
    children: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    children?: true
  }

  export type CategorySumAggregateInputType = {
    children?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    parentId?: true
    icon?: true
    title?: true
    children?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    parentId?: true
    icon?: true
    title?: true
    children?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    parentId?: true
    icon?: true
    title?: true
    children?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    parentId: string | null
    icon: string | null
    title: string
    children: number
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentId?: boolean
    icon?: boolean
    title?: boolean
    children?: boolean
    product?: boolean | Category$productArgs<ExtArgs>
    brand?: boolean | Category$brandArgs<ExtArgs>
    filter?: boolean | Category$filterArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    parentId?: boolean
    icon?: boolean
    title?: boolean
    children?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "parentId" | "icon" | "title" | "children", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | Category$productArgs<ExtArgs>
    brand?: boolean | Category$brandArgs<ExtArgs>
    filter?: boolean | Category$filterArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>[]
      brand: Prisma.$BrandCategoryPayload<ExtArgs>[]
      filter: Prisma.$FilterCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      parentId: string | null
      icon: string | null
      title: string
      children: number
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * @param {CategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const category = await prisma.category.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CategoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Category.
     * @param {CategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const category = await prisma.category.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CategoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends Category$productArgs<ExtArgs> = {}>(args?: Subset<T, Category$productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    brand<T extends Category$brandArgs<ExtArgs> = {}>(args?: Subset<T, Category$brandArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    filter<T extends Category$filterArgs<ExtArgs> = {}>(args?: Subset<T, Category$filterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilterCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly parentId: FieldRef<"Category", 'String'>
    readonly icon: FieldRef<"Category", 'String'>
    readonly title: FieldRef<"Category", 'String'>
    readonly children: FieldRef<"Category", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category findRaw
   */
  export type CategoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Category aggregateRaw
   */
  export type CategoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Category.product
   */
  export type Category$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category.brand
   */
  export type Category$brandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCategory
     */
    select?: BrandCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandCategory
     */
    omit?: BrandCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandCategoryInclude<ExtArgs> | null
    where?: BrandCategoryWhereInput
    orderBy?: BrandCategoryOrderByWithRelationInput | BrandCategoryOrderByWithRelationInput[]
    cursor?: BrandCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BrandCategoryScalarFieldEnum | BrandCategoryScalarFieldEnum[]
  }

  /**
   * Category.filter
   */
  export type Category$filterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterCategory
     */
    select?: FilterCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterCategory
     */
    omit?: FilterCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterCategoryInclude<ExtArgs> | null
    where?: FilterCategoryWhereInput
    orderBy?: FilterCategoryOrderByWithRelationInput | FilterCategoryOrderByWithRelationInput[]
    cursor?: FilterCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilterCategoryScalarFieldEnum | FilterCategoryScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model LikedProduct
   */

  export type AggregateLikedProduct = {
    _count: LikedProductCountAggregateOutputType | null
    _min: LikedProductMinAggregateOutputType | null
    _max: LikedProductMaxAggregateOutputType | null
  }

  export type LikedProductMinAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    createdAt: Date | null
  }

  export type LikedProductMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    createdAt: Date | null
  }

  export type LikedProductCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    createdAt: number
    _all: number
  }


  export type LikedProductMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    createdAt?: true
  }

  export type LikedProductMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    createdAt?: true
  }

  export type LikedProductCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    createdAt?: true
    _all?: true
  }

  export type LikedProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedProduct to aggregate.
     */
    where?: LikedProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedProducts to fetch.
     */
    orderBy?: LikedProductOrderByWithRelationInput | LikedProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikedProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LikedProducts
    **/
    _count?: true | LikedProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikedProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikedProductMaxAggregateInputType
  }

  export type GetLikedProductAggregateType<T extends LikedProductAggregateArgs> = {
        [P in keyof T & keyof AggregateLikedProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikedProduct[P]>
      : GetScalarType<T[P], AggregateLikedProduct[P]>
  }




  export type LikedProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedProductWhereInput
    orderBy?: LikedProductOrderByWithAggregationInput | LikedProductOrderByWithAggregationInput[]
    by: LikedProductScalarFieldEnum[] | LikedProductScalarFieldEnum
    having?: LikedProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikedProductCountAggregateInputType | true
    _min?: LikedProductMinAggregateInputType
    _max?: LikedProductMaxAggregateInputType
  }

  export type LikedProductGroupByOutputType = {
    id: string
    userId: string | null
    productId: string
    createdAt: Date
    _count: LikedProductCountAggregateOutputType | null
    _min: LikedProductMinAggregateOutputType | null
    _max: LikedProductMaxAggregateOutputType | null
  }

  type GetLikedProductGroupByPayload<T extends LikedProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikedProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikedProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikedProductGroupByOutputType[P]>
            : GetScalarType<T[P], LikedProductGroupByOutputType[P]>
        }
      >
    >


  export type LikedProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedProduct"]>



  export type LikedProductSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    createdAt?: boolean
  }

  export type LikedProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "productId" | "createdAt", ExtArgs["result"]["likedProduct"]>
  export type LikedProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $LikedProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LikedProduct"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      productId: string
      createdAt: Date
    }, ExtArgs["result"]["likedProduct"]>
    composites: {}
  }

  type LikedProductGetPayload<S extends boolean | null | undefined | LikedProductDefaultArgs> = $Result.GetResult<Prisma.$LikedProductPayload, S>

  type LikedProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikedProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikedProductCountAggregateInputType | true
    }

  export interface LikedProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LikedProduct'], meta: { name: 'LikedProduct' } }
    /**
     * Find zero or one LikedProduct that matches the filter.
     * @param {LikedProductFindUniqueArgs} args - Arguments to find a LikedProduct
     * @example
     * // Get one LikedProduct
     * const likedProduct = await prisma.likedProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikedProductFindUniqueArgs>(args: SelectSubset<T, LikedProductFindUniqueArgs<ExtArgs>>): Prisma__LikedProductClient<$Result.GetResult<Prisma.$LikedProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LikedProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikedProductFindUniqueOrThrowArgs} args - Arguments to find a LikedProduct
     * @example
     * // Get one LikedProduct
     * const likedProduct = await prisma.likedProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikedProductFindUniqueOrThrowArgs>(args: SelectSubset<T, LikedProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikedProductClient<$Result.GetResult<Prisma.$LikedProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LikedProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedProductFindFirstArgs} args - Arguments to find a LikedProduct
     * @example
     * // Get one LikedProduct
     * const likedProduct = await prisma.likedProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikedProductFindFirstArgs>(args?: SelectSubset<T, LikedProductFindFirstArgs<ExtArgs>>): Prisma__LikedProductClient<$Result.GetResult<Prisma.$LikedProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LikedProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedProductFindFirstOrThrowArgs} args - Arguments to find a LikedProduct
     * @example
     * // Get one LikedProduct
     * const likedProduct = await prisma.likedProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikedProductFindFirstOrThrowArgs>(args?: SelectSubset<T, LikedProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikedProductClient<$Result.GetResult<Prisma.$LikedProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LikedProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LikedProducts
     * const likedProducts = await prisma.likedProduct.findMany()
     * 
     * // Get first 10 LikedProducts
     * const likedProducts = await prisma.likedProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likedProductWithIdOnly = await prisma.likedProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikedProductFindManyArgs>(args?: SelectSubset<T, LikedProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LikedProduct.
     * @param {LikedProductCreateArgs} args - Arguments to create a LikedProduct.
     * @example
     * // Create one LikedProduct
     * const LikedProduct = await prisma.likedProduct.create({
     *   data: {
     *     // ... data to create a LikedProduct
     *   }
     * })
     * 
     */
    create<T extends LikedProductCreateArgs>(args: SelectSubset<T, LikedProductCreateArgs<ExtArgs>>): Prisma__LikedProductClient<$Result.GetResult<Prisma.$LikedProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LikedProducts.
     * @param {LikedProductCreateManyArgs} args - Arguments to create many LikedProducts.
     * @example
     * // Create many LikedProducts
     * const likedProduct = await prisma.likedProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikedProductCreateManyArgs>(args?: SelectSubset<T, LikedProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LikedProduct.
     * @param {LikedProductDeleteArgs} args - Arguments to delete one LikedProduct.
     * @example
     * // Delete one LikedProduct
     * const LikedProduct = await prisma.likedProduct.delete({
     *   where: {
     *     // ... filter to delete one LikedProduct
     *   }
     * })
     * 
     */
    delete<T extends LikedProductDeleteArgs>(args: SelectSubset<T, LikedProductDeleteArgs<ExtArgs>>): Prisma__LikedProductClient<$Result.GetResult<Prisma.$LikedProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LikedProduct.
     * @param {LikedProductUpdateArgs} args - Arguments to update one LikedProduct.
     * @example
     * // Update one LikedProduct
     * const likedProduct = await prisma.likedProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikedProductUpdateArgs>(args: SelectSubset<T, LikedProductUpdateArgs<ExtArgs>>): Prisma__LikedProductClient<$Result.GetResult<Prisma.$LikedProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LikedProducts.
     * @param {LikedProductDeleteManyArgs} args - Arguments to filter LikedProducts to delete.
     * @example
     * // Delete a few LikedProducts
     * const { count } = await prisma.likedProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikedProductDeleteManyArgs>(args?: SelectSubset<T, LikedProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikedProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LikedProducts
     * const likedProduct = await prisma.likedProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikedProductUpdateManyArgs>(args: SelectSubset<T, LikedProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LikedProduct.
     * @param {LikedProductUpsertArgs} args - Arguments to update or create a LikedProduct.
     * @example
     * // Update or create a LikedProduct
     * const likedProduct = await prisma.likedProduct.upsert({
     *   create: {
     *     // ... data to create a LikedProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LikedProduct we want to update
     *   }
     * })
     */
    upsert<T extends LikedProductUpsertArgs>(args: SelectSubset<T, LikedProductUpsertArgs<ExtArgs>>): Prisma__LikedProductClient<$Result.GetResult<Prisma.$LikedProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LikedProducts that matches the filter.
     * @param {LikedProductFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const likedProduct = await prisma.likedProduct.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: LikedProductFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a LikedProduct.
     * @param {LikedProductAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const likedProduct = await prisma.likedProduct.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: LikedProductAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of LikedProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedProductCountArgs} args - Arguments to filter LikedProducts to count.
     * @example
     * // Count the number of LikedProducts
     * const count = await prisma.likedProduct.count({
     *   where: {
     *     // ... the filter for the LikedProducts we want to count
     *   }
     * })
    **/
    count<T extends LikedProductCountArgs>(
      args?: Subset<T, LikedProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikedProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LikedProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikedProductAggregateArgs>(args: Subset<T, LikedProductAggregateArgs>): Prisma.PrismaPromise<GetLikedProductAggregateType<T>>

    /**
     * Group by LikedProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedProductGroupByArgs} args - Group by arguments.
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
      T extends LikedProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikedProductGroupByArgs['orderBy'] }
        : { orderBy?: LikedProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LikedProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikedProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LikedProduct model
   */
  readonly fields: LikedProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LikedProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikedProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LikedProduct model
   */
  interface LikedProductFieldRefs {
    readonly id: FieldRef<"LikedProduct", 'String'>
    readonly userId: FieldRef<"LikedProduct", 'String'>
    readonly productId: FieldRef<"LikedProduct", 'String'>
    readonly createdAt: FieldRef<"LikedProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LikedProduct findUnique
   */
  export type LikedProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedProduct
     */
    select?: LikedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedProduct
     */
    omit?: LikedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedProductInclude<ExtArgs> | null
    /**
     * Filter, which LikedProduct to fetch.
     */
    where: LikedProductWhereUniqueInput
  }

  /**
   * LikedProduct findUniqueOrThrow
   */
  export type LikedProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedProduct
     */
    select?: LikedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedProduct
     */
    omit?: LikedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedProductInclude<ExtArgs> | null
    /**
     * Filter, which LikedProduct to fetch.
     */
    where: LikedProductWhereUniqueInput
  }

  /**
   * LikedProduct findFirst
   */
  export type LikedProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedProduct
     */
    select?: LikedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedProduct
     */
    omit?: LikedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedProductInclude<ExtArgs> | null
    /**
     * Filter, which LikedProduct to fetch.
     */
    where?: LikedProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedProducts to fetch.
     */
    orderBy?: LikedProductOrderByWithRelationInput | LikedProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedProducts.
     */
    cursor?: LikedProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedProducts.
     */
    distinct?: LikedProductScalarFieldEnum | LikedProductScalarFieldEnum[]
  }

  /**
   * LikedProduct findFirstOrThrow
   */
  export type LikedProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedProduct
     */
    select?: LikedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedProduct
     */
    omit?: LikedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedProductInclude<ExtArgs> | null
    /**
     * Filter, which LikedProduct to fetch.
     */
    where?: LikedProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedProducts to fetch.
     */
    orderBy?: LikedProductOrderByWithRelationInput | LikedProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedProducts.
     */
    cursor?: LikedProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedProducts.
     */
    distinct?: LikedProductScalarFieldEnum | LikedProductScalarFieldEnum[]
  }

  /**
   * LikedProduct findMany
   */
  export type LikedProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedProduct
     */
    select?: LikedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedProduct
     */
    omit?: LikedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedProductInclude<ExtArgs> | null
    /**
     * Filter, which LikedProducts to fetch.
     */
    where?: LikedProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedProducts to fetch.
     */
    orderBy?: LikedProductOrderByWithRelationInput | LikedProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LikedProducts.
     */
    cursor?: LikedProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedProducts.
     */
    skip?: number
    distinct?: LikedProductScalarFieldEnum | LikedProductScalarFieldEnum[]
  }

  /**
   * LikedProduct create
   */
  export type LikedProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedProduct
     */
    select?: LikedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedProduct
     */
    omit?: LikedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedProductInclude<ExtArgs> | null
    /**
     * The data needed to create a LikedProduct.
     */
    data: XOR<LikedProductCreateInput, LikedProductUncheckedCreateInput>
  }

  /**
   * LikedProduct createMany
   */
  export type LikedProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LikedProducts.
     */
    data: LikedProductCreateManyInput | LikedProductCreateManyInput[]
  }

  /**
   * LikedProduct update
   */
  export type LikedProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedProduct
     */
    select?: LikedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedProduct
     */
    omit?: LikedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedProductInclude<ExtArgs> | null
    /**
     * The data needed to update a LikedProduct.
     */
    data: XOR<LikedProductUpdateInput, LikedProductUncheckedUpdateInput>
    /**
     * Choose, which LikedProduct to update.
     */
    where: LikedProductWhereUniqueInput
  }

  /**
   * LikedProduct updateMany
   */
  export type LikedProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LikedProducts.
     */
    data: XOR<LikedProductUpdateManyMutationInput, LikedProductUncheckedUpdateManyInput>
    /**
     * Filter which LikedProducts to update
     */
    where?: LikedProductWhereInput
    /**
     * Limit how many LikedProducts to update.
     */
    limit?: number
  }

  /**
   * LikedProduct upsert
   */
  export type LikedProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedProduct
     */
    select?: LikedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedProduct
     */
    omit?: LikedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedProductInclude<ExtArgs> | null
    /**
     * The filter to search for the LikedProduct to update in case it exists.
     */
    where: LikedProductWhereUniqueInput
    /**
     * In case the LikedProduct found by the `where` argument doesn't exist, create a new LikedProduct with this data.
     */
    create: XOR<LikedProductCreateInput, LikedProductUncheckedCreateInput>
    /**
     * In case the LikedProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikedProductUpdateInput, LikedProductUncheckedUpdateInput>
  }

  /**
   * LikedProduct delete
   */
  export type LikedProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedProduct
     */
    select?: LikedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedProduct
     */
    omit?: LikedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedProductInclude<ExtArgs> | null
    /**
     * Filter which LikedProduct to delete.
     */
    where: LikedProductWhereUniqueInput
  }

  /**
   * LikedProduct deleteMany
   */
  export type LikedProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedProducts to delete
     */
    where?: LikedProductWhereInput
    /**
     * Limit how many LikedProducts to delete.
     */
    limit?: number
  }

  /**
   * LikedProduct findRaw
   */
  export type LikedProductFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * LikedProduct aggregateRaw
   */
  export type LikedProductAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * LikedProduct without action
   */
  export type LikedProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedProduct
     */
    select?: LikedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedProduct
     */
    omit?: LikedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedProductInclude<ExtArgs> | null
  }


  /**
   * Model Brand
   */

  export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  export type BrandMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type BrandMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type BrandCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type BrandMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type BrandMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type BrandCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type BrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brand to aggregate.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandMaxAggregateInputType
  }

  export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
        [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrand[P]>
      : GetScalarType<T[P], AggregateBrand[P]>
  }




  export type BrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithAggregationInput | BrandOrderByWithAggregationInput[]
    by: BrandScalarFieldEnum[] | BrandScalarFieldEnum
    having?: BrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandCountAggregateInputType | true
    _min?: BrandMinAggregateInputType
    _max?: BrandMaxAggregateInputType
  }

  export type BrandGroupByOutputType = {
    id: string
    name: string
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandGroupByOutputType[P]>
            : GetScalarType<T[P], BrandGroupByOutputType[P]>
        }
      >
    >


  export type BrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categories?: boolean | Brand$categoriesArgs<ExtArgs>
    product?: boolean | Brand$productArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brand"]>



  export type BrandSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type BrandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["brand"]>
  export type BrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | Brand$categoriesArgs<ExtArgs>
    product?: boolean | Brand$productArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brand"
    objects: {
      categories: Prisma.$BrandCategoryPayload<ExtArgs>[]
      product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["brand"]>
    composites: {}
  }

  type BrandGetPayload<S extends boolean | null | undefined | BrandDefaultArgs> = $Result.GetResult<Prisma.$BrandPayload, S>

  type BrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandCountAggregateInputType | true
    }

  export interface BrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brand'], meta: { name: 'Brand' } }
    /**
     * Find zero or one Brand that matches the filter.
     * @param {BrandFindUniqueArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandFindUniqueArgs>(args: SelectSubset<T, BrandFindUniqueArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandFindUniqueOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandFindFirstArgs>(args?: SelectSubset<T, BrandFindFirstArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brand.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandWithIdOnly = await prisma.brand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrandFindManyArgs>(args?: SelectSubset<T, BrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brand.
     * @param {BrandCreateArgs} args - Arguments to create a Brand.
     * @example
     * // Create one Brand
     * const Brand = await prisma.brand.create({
     *   data: {
     *     // ... data to create a Brand
     *   }
     * })
     * 
     */
    create<T extends BrandCreateArgs>(args: SelectSubset<T, BrandCreateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brands.
     * @param {BrandCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandCreateManyArgs>(args?: SelectSubset<T, BrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Brand.
     * @param {BrandDeleteArgs} args - Arguments to delete one Brand.
     * @example
     * // Delete one Brand
     * const Brand = await prisma.brand.delete({
     *   where: {
     *     // ... filter to delete one Brand
     *   }
     * })
     * 
     */
    delete<T extends BrandDeleteArgs>(args: SelectSubset<T, BrandDeleteArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brand.
     * @param {BrandUpdateArgs} args - Arguments to update one Brand.
     * @example
     * // Update one Brand
     * const brand = await prisma.brand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandUpdateArgs>(args: SelectSubset<T, BrandUpdateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brands.
     * @param {BrandDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandDeleteManyArgs>(args?: SelectSubset<T, BrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandUpdateManyArgs>(args: SelectSubset<T, BrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Brand.
     * @param {BrandUpsertArgs} args - Arguments to update or create a Brand.
     * @example
     * // Update or create a Brand
     * const brand = await prisma.brand.upsert({
     *   create: {
     *     // ... data to create a Brand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brand we want to update
     *   }
     * })
     */
    upsert<T extends BrandUpsertArgs>(args: SelectSubset<T, BrandUpsertArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * @param {BrandFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const brand = await prisma.brand.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: BrandFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Brand.
     * @param {BrandAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const brand = await prisma.brand.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: BrandAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brand.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandCountArgs>(
      args?: Subset<T, BrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrandAggregateArgs>(args: Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>

    /**
     * Group by Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandGroupByArgs} args - Group by arguments.
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
      T extends BrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandGroupByArgs['orderBy'] }
        : { orderBy?: BrandGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brand model
   */
  readonly fields: BrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends Brand$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Brand$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    product<T extends Brand$productArgs<ExtArgs> = {}>(args?: Subset<T, Brand$productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Brand model
   */
  interface BrandFieldRefs {
    readonly id: FieldRef<"Brand", 'String'>
    readonly name: FieldRef<"Brand", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Brand findUnique
   */
  export type BrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findUniqueOrThrow
   */
  export type BrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findFirst
   */
  export type BrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findFirstOrThrow
   */
  export type BrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findMany
   */
  export type BrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand create
   */
  export type BrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to create a Brand.
     */
    data: XOR<BrandCreateInput, BrandUncheckedCreateInput>
  }

  /**
   * Brand createMany
   */
  export type BrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
  }

  /**
   * Brand update
   */
  export type BrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to update a Brand.
     */
    data: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
    /**
     * Choose, which Brand to update.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand updateMany
   */
  export type BrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand upsert
   */
  export type BrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The filter to search for the Brand to update in case it exists.
     */
    where: BrandWhereUniqueInput
    /**
     * In case the Brand found by the `where` argument doesn't exist, create a new Brand with this data.
     */
    create: XOR<BrandCreateInput, BrandUncheckedCreateInput>
    /**
     * In case the Brand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
  }

  /**
   * Brand delete
   */
  export type BrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter which Brand to delete.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand deleteMany
   */
  export type BrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to delete.
     */
    limit?: number
  }

  /**
   * Brand findRaw
   */
  export type BrandFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Brand aggregateRaw
   */
  export type BrandAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Brand.categories
   */
  export type Brand$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCategory
     */
    select?: BrandCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandCategory
     */
    omit?: BrandCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandCategoryInclude<ExtArgs> | null
    where?: BrandCategoryWhereInput
    orderBy?: BrandCategoryOrderByWithRelationInput | BrandCategoryOrderByWithRelationInput[]
    cursor?: BrandCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BrandCategoryScalarFieldEnum | BrandCategoryScalarFieldEnum[]
  }

  /**
   * Brand.product
   */
  export type Brand$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Brand without action
   */
  export type BrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
  }


  /**
   * Model BrandCategory
   */

  export type AggregateBrandCategory = {
    _count: BrandCategoryCountAggregateOutputType | null
    _min: BrandCategoryMinAggregateOutputType | null
    _max: BrandCategoryMaxAggregateOutputType | null
  }

  export type BrandCategoryMinAggregateOutputType = {
    id: string | null
    brandId: string | null
    categoryId: string | null
  }

  export type BrandCategoryMaxAggregateOutputType = {
    id: string | null
    brandId: string | null
    categoryId: string | null
  }

  export type BrandCategoryCountAggregateOutputType = {
    id: number
    brandId: number
    categoryId: number
    _all: number
  }


  export type BrandCategoryMinAggregateInputType = {
    id?: true
    brandId?: true
    categoryId?: true
  }

  export type BrandCategoryMaxAggregateInputType = {
    id?: true
    brandId?: true
    categoryId?: true
  }

  export type BrandCategoryCountAggregateInputType = {
    id?: true
    brandId?: true
    categoryId?: true
    _all?: true
  }

  export type BrandCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrandCategory to aggregate.
     */
    where?: BrandCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandCategories to fetch.
     */
    orderBy?: BrandCategoryOrderByWithRelationInput | BrandCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BrandCategories
    **/
    _count?: true | BrandCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandCategoryMaxAggregateInputType
  }

  export type GetBrandCategoryAggregateType<T extends BrandCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBrandCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrandCategory[P]>
      : GetScalarType<T[P], AggregateBrandCategory[P]>
  }




  export type BrandCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandCategoryWhereInput
    orderBy?: BrandCategoryOrderByWithAggregationInput | BrandCategoryOrderByWithAggregationInput[]
    by: BrandCategoryScalarFieldEnum[] | BrandCategoryScalarFieldEnum
    having?: BrandCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandCategoryCountAggregateInputType | true
    _min?: BrandCategoryMinAggregateInputType
    _max?: BrandCategoryMaxAggregateInputType
  }

  export type BrandCategoryGroupByOutputType = {
    id: string
    brandId: string
    categoryId: string
    _count: BrandCategoryCountAggregateOutputType | null
    _min: BrandCategoryMinAggregateOutputType | null
    _max: BrandCategoryMaxAggregateOutputType | null
  }

  type GetBrandCategoryGroupByPayload<T extends BrandCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], BrandCategoryGroupByOutputType[P]>
        }
      >
    >


  export type BrandCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandId?: boolean
    categoryId?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brandCategory"]>



  export type BrandCategorySelectScalar = {
    id?: boolean
    brandId?: boolean
    categoryId?: boolean
  }

  export type BrandCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "brandId" | "categoryId", ExtArgs["result"]["brandCategory"]>
  export type BrandCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $BrandCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BrandCategory"
    objects: {
      brand: Prisma.$BrandPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      brandId: string
      categoryId: string
    }, ExtArgs["result"]["brandCategory"]>
    composites: {}
  }

  type BrandCategoryGetPayload<S extends boolean | null | undefined | BrandCategoryDefaultArgs> = $Result.GetResult<Prisma.$BrandCategoryPayload, S>

  type BrandCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrandCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandCategoryCountAggregateInputType | true
    }

  export interface BrandCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BrandCategory'], meta: { name: 'BrandCategory' } }
    /**
     * Find zero or one BrandCategory that matches the filter.
     * @param {BrandCategoryFindUniqueArgs} args - Arguments to find a BrandCategory
     * @example
     * // Get one BrandCategory
     * const brandCategory = await prisma.brandCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandCategoryFindUniqueArgs>(args: SelectSubset<T, BrandCategoryFindUniqueArgs<ExtArgs>>): Prisma__BrandCategoryClient<$Result.GetResult<Prisma.$BrandCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BrandCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandCategoryFindUniqueOrThrowArgs} args - Arguments to find a BrandCategory
     * @example
     * // Get one BrandCategory
     * const brandCategory = await prisma.brandCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandCategoryClient<$Result.GetResult<Prisma.$BrandCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BrandCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCategoryFindFirstArgs} args - Arguments to find a BrandCategory
     * @example
     * // Get one BrandCategory
     * const brandCategory = await prisma.brandCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandCategoryFindFirstArgs>(args?: SelectSubset<T, BrandCategoryFindFirstArgs<ExtArgs>>): Prisma__BrandCategoryClient<$Result.GetResult<Prisma.$BrandCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BrandCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCategoryFindFirstOrThrowArgs} args - Arguments to find a BrandCategory
     * @example
     * // Get one BrandCategory
     * const brandCategory = await prisma.brandCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandCategoryClient<$Result.GetResult<Prisma.$BrandCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BrandCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BrandCategories
     * const brandCategories = await prisma.brandCategory.findMany()
     * 
     * // Get first 10 BrandCategories
     * const brandCategories = await prisma.brandCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandCategoryWithIdOnly = await prisma.brandCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrandCategoryFindManyArgs>(args?: SelectSubset<T, BrandCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BrandCategory.
     * @param {BrandCategoryCreateArgs} args - Arguments to create a BrandCategory.
     * @example
     * // Create one BrandCategory
     * const BrandCategory = await prisma.brandCategory.create({
     *   data: {
     *     // ... data to create a BrandCategory
     *   }
     * })
     * 
     */
    create<T extends BrandCategoryCreateArgs>(args: SelectSubset<T, BrandCategoryCreateArgs<ExtArgs>>): Prisma__BrandCategoryClient<$Result.GetResult<Prisma.$BrandCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BrandCategories.
     * @param {BrandCategoryCreateManyArgs} args - Arguments to create many BrandCategories.
     * @example
     * // Create many BrandCategories
     * const brandCategory = await prisma.brandCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandCategoryCreateManyArgs>(args?: SelectSubset<T, BrandCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BrandCategory.
     * @param {BrandCategoryDeleteArgs} args - Arguments to delete one BrandCategory.
     * @example
     * // Delete one BrandCategory
     * const BrandCategory = await prisma.brandCategory.delete({
     *   where: {
     *     // ... filter to delete one BrandCategory
     *   }
     * })
     * 
     */
    delete<T extends BrandCategoryDeleteArgs>(args: SelectSubset<T, BrandCategoryDeleteArgs<ExtArgs>>): Prisma__BrandCategoryClient<$Result.GetResult<Prisma.$BrandCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BrandCategory.
     * @param {BrandCategoryUpdateArgs} args - Arguments to update one BrandCategory.
     * @example
     * // Update one BrandCategory
     * const brandCategory = await prisma.brandCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandCategoryUpdateArgs>(args: SelectSubset<T, BrandCategoryUpdateArgs<ExtArgs>>): Prisma__BrandCategoryClient<$Result.GetResult<Prisma.$BrandCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BrandCategories.
     * @param {BrandCategoryDeleteManyArgs} args - Arguments to filter BrandCategories to delete.
     * @example
     * // Delete a few BrandCategories
     * const { count } = await prisma.brandCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandCategoryDeleteManyArgs>(args?: SelectSubset<T, BrandCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BrandCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BrandCategories
     * const brandCategory = await prisma.brandCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandCategoryUpdateManyArgs>(args: SelectSubset<T, BrandCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BrandCategory.
     * @param {BrandCategoryUpsertArgs} args - Arguments to update or create a BrandCategory.
     * @example
     * // Update or create a BrandCategory
     * const brandCategory = await prisma.brandCategory.upsert({
     *   create: {
     *     // ... data to create a BrandCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BrandCategory we want to update
     *   }
     * })
     */
    upsert<T extends BrandCategoryUpsertArgs>(args: SelectSubset<T, BrandCategoryUpsertArgs<ExtArgs>>): Prisma__BrandCategoryClient<$Result.GetResult<Prisma.$BrandCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BrandCategories that matches the filter.
     * @param {BrandCategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const brandCategory = await prisma.brandCategory.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: BrandCategoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a BrandCategory.
     * @param {BrandCategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const brandCategory = await prisma.brandCategory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: BrandCategoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of BrandCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCategoryCountArgs} args - Arguments to filter BrandCategories to count.
     * @example
     * // Count the number of BrandCategories
     * const count = await prisma.brandCategory.count({
     *   where: {
     *     // ... the filter for the BrandCategories we want to count
     *   }
     * })
    **/
    count<T extends BrandCategoryCountArgs>(
      args?: Subset<T, BrandCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BrandCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrandCategoryAggregateArgs>(args: Subset<T, BrandCategoryAggregateArgs>): Prisma.PrismaPromise<GetBrandCategoryAggregateType<T>>

    /**
     * Group by BrandCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCategoryGroupByArgs} args - Group by arguments.
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
      T extends BrandCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandCategoryGroupByArgs['orderBy'] }
        : { orderBy?: BrandCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrandCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BrandCategory model
   */
  readonly fields: BrandCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BrandCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brand<T extends BrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandDefaultArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BrandCategory model
   */
  interface BrandCategoryFieldRefs {
    readonly id: FieldRef<"BrandCategory", 'String'>
    readonly brandId: FieldRef<"BrandCategory", 'String'>
    readonly categoryId: FieldRef<"BrandCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BrandCategory findUnique
   */
  export type BrandCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCategory
     */
    select?: BrandCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandCategory
     */
    omit?: BrandCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BrandCategory to fetch.
     */
    where: BrandCategoryWhereUniqueInput
  }

  /**
   * BrandCategory findUniqueOrThrow
   */
  export type BrandCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCategory
     */
    select?: BrandCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandCategory
     */
    omit?: BrandCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BrandCategory to fetch.
     */
    where: BrandCategoryWhereUniqueInput
  }

  /**
   * BrandCategory findFirst
   */
  export type BrandCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCategory
     */
    select?: BrandCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandCategory
     */
    omit?: BrandCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BrandCategory to fetch.
     */
    where?: BrandCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandCategories to fetch.
     */
    orderBy?: BrandCategoryOrderByWithRelationInput | BrandCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrandCategories.
     */
    cursor?: BrandCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrandCategories.
     */
    distinct?: BrandCategoryScalarFieldEnum | BrandCategoryScalarFieldEnum[]
  }

  /**
   * BrandCategory findFirstOrThrow
   */
  export type BrandCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCategory
     */
    select?: BrandCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandCategory
     */
    omit?: BrandCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BrandCategory to fetch.
     */
    where?: BrandCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandCategories to fetch.
     */
    orderBy?: BrandCategoryOrderByWithRelationInput | BrandCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrandCategories.
     */
    cursor?: BrandCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrandCategories.
     */
    distinct?: BrandCategoryScalarFieldEnum | BrandCategoryScalarFieldEnum[]
  }

  /**
   * BrandCategory findMany
   */
  export type BrandCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCategory
     */
    select?: BrandCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandCategory
     */
    omit?: BrandCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BrandCategories to fetch.
     */
    where?: BrandCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandCategories to fetch.
     */
    orderBy?: BrandCategoryOrderByWithRelationInput | BrandCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BrandCategories.
     */
    cursor?: BrandCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandCategories.
     */
    skip?: number
    distinct?: BrandCategoryScalarFieldEnum | BrandCategoryScalarFieldEnum[]
  }

  /**
   * BrandCategory create
   */
  export type BrandCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCategory
     */
    select?: BrandCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandCategory
     */
    omit?: BrandCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a BrandCategory.
     */
    data: XOR<BrandCategoryCreateInput, BrandCategoryUncheckedCreateInput>
  }

  /**
   * BrandCategory createMany
   */
  export type BrandCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BrandCategories.
     */
    data: BrandCategoryCreateManyInput | BrandCategoryCreateManyInput[]
  }

  /**
   * BrandCategory update
   */
  export type BrandCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCategory
     */
    select?: BrandCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandCategory
     */
    omit?: BrandCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a BrandCategory.
     */
    data: XOR<BrandCategoryUpdateInput, BrandCategoryUncheckedUpdateInput>
    /**
     * Choose, which BrandCategory to update.
     */
    where: BrandCategoryWhereUniqueInput
  }

  /**
   * BrandCategory updateMany
   */
  export type BrandCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BrandCategories.
     */
    data: XOR<BrandCategoryUpdateManyMutationInput, BrandCategoryUncheckedUpdateManyInput>
    /**
     * Filter which BrandCategories to update
     */
    where?: BrandCategoryWhereInput
    /**
     * Limit how many BrandCategories to update.
     */
    limit?: number
  }

  /**
   * BrandCategory upsert
   */
  export type BrandCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCategory
     */
    select?: BrandCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandCategory
     */
    omit?: BrandCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the BrandCategory to update in case it exists.
     */
    where: BrandCategoryWhereUniqueInput
    /**
     * In case the BrandCategory found by the `where` argument doesn't exist, create a new BrandCategory with this data.
     */
    create: XOR<BrandCategoryCreateInput, BrandCategoryUncheckedCreateInput>
    /**
     * In case the BrandCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandCategoryUpdateInput, BrandCategoryUncheckedUpdateInput>
  }

  /**
   * BrandCategory delete
   */
  export type BrandCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCategory
     */
    select?: BrandCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandCategory
     */
    omit?: BrandCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandCategoryInclude<ExtArgs> | null
    /**
     * Filter which BrandCategory to delete.
     */
    where: BrandCategoryWhereUniqueInput
  }

  /**
   * BrandCategory deleteMany
   */
  export type BrandCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrandCategories to delete
     */
    where?: BrandCategoryWhereInput
    /**
     * Limit how many BrandCategories to delete.
     */
    limit?: number
  }

  /**
   * BrandCategory findRaw
   */
  export type BrandCategoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * BrandCategory aggregateRaw
   */
  export type BrandCategoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * BrandCategory without action
   */
  export type BrandCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCategory
     */
    select?: BrandCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandCategory
     */
    omit?: BrandCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandCategoryInclude<ExtArgs> | null
  }


  /**
   * Model FilterType
   */

  export type AggregateFilterType = {
    _count: FilterTypeCountAggregateOutputType | null
    _min: FilterTypeMinAggregateOutputType | null
    _max: FilterTypeMaxAggregateOutputType | null
  }

  export type FilterTypeMinAggregateOutputType = {
    id: string | null
    title: string | null
    inputType: $Enums.InputType | null
    type: $Enums.TypeOfFilter | null
  }

  export type FilterTypeMaxAggregateOutputType = {
    id: string | null
    title: string | null
    inputType: $Enums.InputType | null
    type: $Enums.TypeOfFilter | null
  }

  export type FilterTypeCountAggregateOutputType = {
    id: number
    title: number
    inputType: number
    type: number
    _all: number
  }


  export type FilterTypeMinAggregateInputType = {
    id?: true
    title?: true
    inputType?: true
    type?: true
  }

  export type FilterTypeMaxAggregateInputType = {
    id?: true
    title?: true
    inputType?: true
    type?: true
  }

  export type FilterTypeCountAggregateInputType = {
    id?: true
    title?: true
    inputType?: true
    type?: true
    _all?: true
  }

  export type FilterTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FilterType to aggregate.
     */
    where?: FilterTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilterTypes to fetch.
     */
    orderBy?: FilterTypeOrderByWithRelationInput | FilterTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilterTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilterTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilterTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FilterTypes
    **/
    _count?: true | FilterTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilterTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilterTypeMaxAggregateInputType
  }

  export type GetFilterTypeAggregateType<T extends FilterTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateFilterType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilterType[P]>
      : GetScalarType<T[P], AggregateFilterType[P]>
  }




  export type FilterTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilterTypeWhereInput
    orderBy?: FilterTypeOrderByWithAggregationInput | FilterTypeOrderByWithAggregationInput[]
    by: FilterTypeScalarFieldEnum[] | FilterTypeScalarFieldEnum
    having?: FilterTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilterTypeCountAggregateInputType | true
    _min?: FilterTypeMinAggregateInputType
    _max?: FilterTypeMaxAggregateInputType
  }

  export type FilterTypeGroupByOutputType = {
    id: string
    title: string
    inputType: $Enums.InputType
    type: $Enums.TypeOfFilter
    _count: FilterTypeCountAggregateOutputType | null
    _min: FilterTypeMinAggregateOutputType | null
    _max: FilterTypeMaxAggregateOutputType | null
  }

  type GetFilterTypeGroupByPayload<T extends FilterTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilterTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilterTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilterTypeGroupByOutputType[P]>
            : GetScalarType<T[P], FilterTypeGroupByOutputType[P]>
        }
      >
    >


  export type FilterTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    inputType?: boolean
    type?: boolean
    filterCategory?: boolean | FilterType$filterCategoryArgs<ExtArgs>
    values?: boolean | FilterType$valuesArgs<ExtArgs>
    _count?: boolean | FilterTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["filterType"]>



  export type FilterTypeSelectScalar = {
    id?: boolean
    title?: boolean
    inputType?: boolean
    type?: boolean
  }

  export type FilterTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "inputType" | "type", ExtArgs["result"]["filterType"]>
  export type FilterTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filterCategory?: boolean | FilterType$filterCategoryArgs<ExtArgs>
    values?: boolean | FilterType$valuesArgs<ExtArgs>
    _count?: boolean | FilterTypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FilterTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FilterType"
    objects: {
      filterCategory: Prisma.$FilterCategoryPayload<ExtArgs>[]
      values: Prisma.$FilterValuesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      inputType: $Enums.InputType
      type: $Enums.TypeOfFilter
    }, ExtArgs["result"]["filterType"]>
    composites: {}
  }

  type FilterTypeGetPayload<S extends boolean | null | undefined | FilterTypeDefaultArgs> = $Result.GetResult<Prisma.$FilterTypePayload, S>

  type FilterTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FilterTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilterTypeCountAggregateInputType | true
    }

  export interface FilterTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FilterType'], meta: { name: 'FilterType' } }
    /**
     * Find zero or one FilterType that matches the filter.
     * @param {FilterTypeFindUniqueArgs} args - Arguments to find a FilterType
     * @example
     * // Get one FilterType
     * const filterType = await prisma.filterType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilterTypeFindUniqueArgs>(args: SelectSubset<T, FilterTypeFindUniqueArgs<ExtArgs>>): Prisma__FilterTypeClient<$Result.GetResult<Prisma.$FilterTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FilterType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilterTypeFindUniqueOrThrowArgs} args - Arguments to find a FilterType
     * @example
     * // Get one FilterType
     * const filterType = await prisma.filterType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilterTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, FilterTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FilterTypeClient<$Result.GetResult<Prisma.$FilterTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FilterType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterTypeFindFirstArgs} args - Arguments to find a FilterType
     * @example
     * // Get one FilterType
     * const filterType = await prisma.filterType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilterTypeFindFirstArgs>(args?: SelectSubset<T, FilterTypeFindFirstArgs<ExtArgs>>): Prisma__FilterTypeClient<$Result.GetResult<Prisma.$FilterTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FilterType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterTypeFindFirstOrThrowArgs} args - Arguments to find a FilterType
     * @example
     * // Get one FilterType
     * const filterType = await prisma.filterType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilterTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, FilterTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__FilterTypeClient<$Result.GetResult<Prisma.$FilterTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FilterTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FilterTypes
     * const filterTypes = await prisma.filterType.findMany()
     * 
     * // Get first 10 FilterTypes
     * const filterTypes = await prisma.filterType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filterTypeWithIdOnly = await prisma.filterType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FilterTypeFindManyArgs>(args?: SelectSubset<T, FilterTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilterTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FilterType.
     * @param {FilterTypeCreateArgs} args - Arguments to create a FilterType.
     * @example
     * // Create one FilterType
     * const FilterType = await prisma.filterType.create({
     *   data: {
     *     // ... data to create a FilterType
     *   }
     * })
     * 
     */
    create<T extends FilterTypeCreateArgs>(args: SelectSubset<T, FilterTypeCreateArgs<ExtArgs>>): Prisma__FilterTypeClient<$Result.GetResult<Prisma.$FilterTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FilterTypes.
     * @param {FilterTypeCreateManyArgs} args - Arguments to create many FilterTypes.
     * @example
     * // Create many FilterTypes
     * const filterType = await prisma.filterType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FilterTypeCreateManyArgs>(args?: SelectSubset<T, FilterTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FilterType.
     * @param {FilterTypeDeleteArgs} args - Arguments to delete one FilterType.
     * @example
     * // Delete one FilterType
     * const FilterType = await prisma.filterType.delete({
     *   where: {
     *     // ... filter to delete one FilterType
     *   }
     * })
     * 
     */
    delete<T extends FilterTypeDeleteArgs>(args: SelectSubset<T, FilterTypeDeleteArgs<ExtArgs>>): Prisma__FilterTypeClient<$Result.GetResult<Prisma.$FilterTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FilterType.
     * @param {FilterTypeUpdateArgs} args - Arguments to update one FilterType.
     * @example
     * // Update one FilterType
     * const filterType = await prisma.filterType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FilterTypeUpdateArgs>(args: SelectSubset<T, FilterTypeUpdateArgs<ExtArgs>>): Prisma__FilterTypeClient<$Result.GetResult<Prisma.$FilterTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FilterTypes.
     * @param {FilterTypeDeleteManyArgs} args - Arguments to filter FilterTypes to delete.
     * @example
     * // Delete a few FilterTypes
     * const { count } = await prisma.filterType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FilterTypeDeleteManyArgs>(args?: SelectSubset<T, FilterTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FilterTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FilterTypes
     * const filterType = await prisma.filterType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FilterTypeUpdateManyArgs>(args: SelectSubset<T, FilterTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FilterType.
     * @param {FilterTypeUpsertArgs} args - Arguments to update or create a FilterType.
     * @example
     * // Update or create a FilterType
     * const filterType = await prisma.filterType.upsert({
     *   create: {
     *     // ... data to create a FilterType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FilterType we want to update
     *   }
     * })
     */
    upsert<T extends FilterTypeUpsertArgs>(args: SelectSubset<T, FilterTypeUpsertArgs<ExtArgs>>): Prisma__FilterTypeClient<$Result.GetResult<Prisma.$FilterTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FilterTypes that matches the filter.
     * @param {FilterTypeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const filterType = await prisma.filterType.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FilterTypeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a FilterType.
     * @param {FilterTypeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const filterType = await prisma.filterType.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FilterTypeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of FilterTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterTypeCountArgs} args - Arguments to filter FilterTypes to count.
     * @example
     * // Count the number of FilterTypes
     * const count = await prisma.filterType.count({
     *   where: {
     *     // ... the filter for the FilterTypes we want to count
     *   }
     * })
    **/
    count<T extends FilterTypeCountArgs>(
      args?: Subset<T, FilterTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilterTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FilterType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FilterTypeAggregateArgs>(args: Subset<T, FilterTypeAggregateArgs>): Prisma.PrismaPromise<GetFilterTypeAggregateType<T>>

    /**
     * Group by FilterType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterTypeGroupByArgs} args - Group by arguments.
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
      T extends FilterTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilterTypeGroupByArgs['orderBy'] }
        : { orderBy?: FilterTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FilterTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilterTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FilterType model
   */
  readonly fields: FilterTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FilterType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilterTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    filterCategory<T extends FilterType$filterCategoryArgs<ExtArgs> = {}>(args?: Subset<T, FilterType$filterCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilterCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    values<T extends FilterType$valuesArgs<ExtArgs> = {}>(args?: Subset<T, FilterType$valuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilterValuesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FilterType model
   */
  interface FilterTypeFieldRefs {
    readonly id: FieldRef<"FilterType", 'String'>
    readonly title: FieldRef<"FilterType", 'String'>
    readonly inputType: FieldRef<"FilterType", 'InputType'>
    readonly type: FieldRef<"FilterType", 'TypeOfFilter'>
  }
    

  // Custom InputTypes
  /**
   * FilterType findUnique
   */
  export type FilterTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterType
     */
    select?: FilterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterType
     */
    omit?: FilterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterTypeInclude<ExtArgs> | null
    /**
     * Filter, which FilterType to fetch.
     */
    where: FilterTypeWhereUniqueInput
  }

  /**
   * FilterType findUniqueOrThrow
   */
  export type FilterTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterType
     */
    select?: FilterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterType
     */
    omit?: FilterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterTypeInclude<ExtArgs> | null
    /**
     * Filter, which FilterType to fetch.
     */
    where: FilterTypeWhereUniqueInput
  }

  /**
   * FilterType findFirst
   */
  export type FilterTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterType
     */
    select?: FilterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterType
     */
    omit?: FilterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterTypeInclude<ExtArgs> | null
    /**
     * Filter, which FilterType to fetch.
     */
    where?: FilterTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilterTypes to fetch.
     */
    orderBy?: FilterTypeOrderByWithRelationInput | FilterTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilterTypes.
     */
    cursor?: FilterTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilterTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilterTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilterTypes.
     */
    distinct?: FilterTypeScalarFieldEnum | FilterTypeScalarFieldEnum[]
  }

  /**
   * FilterType findFirstOrThrow
   */
  export type FilterTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterType
     */
    select?: FilterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterType
     */
    omit?: FilterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterTypeInclude<ExtArgs> | null
    /**
     * Filter, which FilterType to fetch.
     */
    where?: FilterTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilterTypes to fetch.
     */
    orderBy?: FilterTypeOrderByWithRelationInput | FilterTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilterTypes.
     */
    cursor?: FilterTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilterTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilterTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilterTypes.
     */
    distinct?: FilterTypeScalarFieldEnum | FilterTypeScalarFieldEnum[]
  }

  /**
   * FilterType findMany
   */
  export type FilterTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterType
     */
    select?: FilterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterType
     */
    omit?: FilterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterTypeInclude<ExtArgs> | null
    /**
     * Filter, which FilterTypes to fetch.
     */
    where?: FilterTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilterTypes to fetch.
     */
    orderBy?: FilterTypeOrderByWithRelationInput | FilterTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FilterTypes.
     */
    cursor?: FilterTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilterTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilterTypes.
     */
    skip?: number
    distinct?: FilterTypeScalarFieldEnum | FilterTypeScalarFieldEnum[]
  }

  /**
   * FilterType create
   */
  export type FilterTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterType
     */
    select?: FilterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterType
     */
    omit?: FilterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a FilterType.
     */
    data: XOR<FilterTypeCreateInput, FilterTypeUncheckedCreateInput>
  }

  /**
   * FilterType createMany
   */
  export type FilterTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FilterTypes.
     */
    data: FilterTypeCreateManyInput | FilterTypeCreateManyInput[]
  }

  /**
   * FilterType update
   */
  export type FilterTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterType
     */
    select?: FilterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterType
     */
    omit?: FilterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a FilterType.
     */
    data: XOR<FilterTypeUpdateInput, FilterTypeUncheckedUpdateInput>
    /**
     * Choose, which FilterType to update.
     */
    where: FilterTypeWhereUniqueInput
  }

  /**
   * FilterType updateMany
   */
  export type FilterTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FilterTypes.
     */
    data: XOR<FilterTypeUpdateManyMutationInput, FilterTypeUncheckedUpdateManyInput>
    /**
     * Filter which FilterTypes to update
     */
    where?: FilterTypeWhereInput
    /**
     * Limit how many FilterTypes to update.
     */
    limit?: number
  }

  /**
   * FilterType upsert
   */
  export type FilterTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterType
     */
    select?: FilterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterType
     */
    omit?: FilterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the FilterType to update in case it exists.
     */
    where: FilterTypeWhereUniqueInput
    /**
     * In case the FilterType found by the `where` argument doesn't exist, create a new FilterType with this data.
     */
    create: XOR<FilterTypeCreateInput, FilterTypeUncheckedCreateInput>
    /**
     * In case the FilterType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilterTypeUpdateInput, FilterTypeUncheckedUpdateInput>
  }

  /**
   * FilterType delete
   */
  export type FilterTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterType
     */
    select?: FilterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterType
     */
    omit?: FilterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterTypeInclude<ExtArgs> | null
    /**
     * Filter which FilterType to delete.
     */
    where: FilterTypeWhereUniqueInput
  }

  /**
   * FilterType deleteMany
   */
  export type FilterTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FilterTypes to delete
     */
    where?: FilterTypeWhereInput
    /**
     * Limit how many FilterTypes to delete.
     */
    limit?: number
  }

  /**
   * FilterType findRaw
   */
  export type FilterTypeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * FilterType aggregateRaw
   */
  export type FilterTypeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * FilterType.filterCategory
   */
  export type FilterType$filterCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterCategory
     */
    select?: FilterCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterCategory
     */
    omit?: FilterCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterCategoryInclude<ExtArgs> | null
    where?: FilterCategoryWhereInput
    orderBy?: FilterCategoryOrderByWithRelationInput | FilterCategoryOrderByWithRelationInput[]
    cursor?: FilterCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilterCategoryScalarFieldEnum | FilterCategoryScalarFieldEnum[]
  }

  /**
   * FilterType.values
   */
  export type FilterType$valuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterValues
     */
    select?: FilterValuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterValues
     */
    omit?: FilterValuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterValuesInclude<ExtArgs> | null
    where?: FilterValuesWhereInput
    orderBy?: FilterValuesOrderByWithRelationInput | FilterValuesOrderByWithRelationInput[]
    cursor?: FilterValuesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilterValuesScalarFieldEnum | FilterValuesScalarFieldEnum[]
  }

  /**
   * FilterType without action
   */
  export type FilterTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterType
     */
    select?: FilterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterType
     */
    omit?: FilterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterTypeInclude<ExtArgs> | null
  }


  /**
   * Model FilterValues
   */

  export type AggregateFilterValues = {
    _count: FilterValuesCountAggregateOutputType | null
    _min: FilterValuesMinAggregateOutputType | null
    _max: FilterValuesMaxAggregateOutputType | null
  }

  export type FilterValuesMinAggregateOutputType = {
    id: string | null
    value: string | null
    filterId: string | null
  }

  export type FilterValuesMaxAggregateOutputType = {
    id: string | null
    value: string | null
    filterId: string | null
  }

  export type FilterValuesCountAggregateOutputType = {
    id: number
    value: number
    filterId: number
    _all: number
  }


  export type FilterValuesMinAggregateInputType = {
    id?: true
    value?: true
    filterId?: true
  }

  export type FilterValuesMaxAggregateInputType = {
    id?: true
    value?: true
    filterId?: true
  }

  export type FilterValuesCountAggregateInputType = {
    id?: true
    value?: true
    filterId?: true
    _all?: true
  }

  export type FilterValuesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FilterValues to aggregate.
     */
    where?: FilterValuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilterValues to fetch.
     */
    orderBy?: FilterValuesOrderByWithRelationInput | FilterValuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilterValuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilterValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilterValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FilterValues
    **/
    _count?: true | FilterValuesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilterValuesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilterValuesMaxAggregateInputType
  }

  export type GetFilterValuesAggregateType<T extends FilterValuesAggregateArgs> = {
        [P in keyof T & keyof AggregateFilterValues]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilterValues[P]>
      : GetScalarType<T[P], AggregateFilterValues[P]>
  }




  export type FilterValuesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilterValuesWhereInput
    orderBy?: FilterValuesOrderByWithAggregationInput | FilterValuesOrderByWithAggregationInput[]
    by: FilterValuesScalarFieldEnum[] | FilterValuesScalarFieldEnum
    having?: FilterValuesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilterValuesCountAggregateInputType | true
    _min?: FilterValuesMinAggregateInputType
    _max?: FilterValuesMaxAggregateInputType
  }

  export type FilterValuesGroupByOutputType = {
    id: string
    value: string
    filterId: string
    _count: FilterValuesCountAggregateOutputType | null
    _min: FilterValuesMinAggregateOutputType | null
    _max: FilterValuesMaxAggregateOutputType | null
  }

  type GetFilterValuesGroupByPayload<T extends FilterValuesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilterValuesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilterValuesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilterValuesGroupByOutputType[P]>
            : GetScalarType<T[P], FilterValuesGroupByOutputType[P]>
        }
      >
    >


  export type FilterValuesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    filterId?: boolean
    filter?: boolean | FilterTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["filterValues"]>



  export type FilterValuesSelectScalar = {
    id?: boolean
    value?: boolean
    filterId?: boolean
  }

  export type FilterValuesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "filterId", ExtArgs["result"]["filterValues"]>
  export type FilterValuesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filter?: boolean | FilterTypeDefaultArgs<ExtArgs>
  }

  export type $FilterValuesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FilterValues"
    objects: {
      filter: Prisma.$FilterTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      value: string
      filterId: string
    }, ExtArgs["result"]["filterValues"]>
    composites: {}
  }

  type FilterValuesGetPayload<S extends boolean | null | undefined | FilterValuesDefaultArgs> = $Result.GetResult<Prisma.$FilterValuesPayload, S>

  type FilterValuesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FilterValuesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilterValuesCountAggregateInputType | true
    }

  export interface FilterValuesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FilterValues'], meta: { name: 'FilterValues' } }
    /**
     * Find zero or one FilterValues that matches the filter.
     * @param {FilterValuesFindUniqueArgs} args - Arguments to find a FilterValues
     * @example
     * // Get one FilterValues
     * const filterValues = await prisma.filterValues.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilterValuesFindUniqueArgs>(args: SelectSubset<T, FilterValuesFindUniqueArgs<ExtArgs>>): Prisma__FilterValuesClient<$Result.GetResult<Prisma.$FilterValuesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FilterValues that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilterValuesFindUniqueOrThrowArgs} args - Arguments to find a FilterValues
     * @example
     * // Get one FilterValues
     * const filterValues = await prisma.filterValues.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilterValuesFindUniqueOrThrowArgs>(args: SelectSubset<T, FilterValuesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FilterValuesClient<$Result.GetResult<Prisma.$FilterValuesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FilterValues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterValuesFindFirstArgs} args - Arguments to find a FilterValues
     * @example
     * // Get one FilterValues
     * const filterValues = await prisma.filterValues.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilterValuesFindFirstArgs>(args?: SelectSubset<T, FilterValuesFindFirstArgs<ExtArgs>>): Prisma__FilterValuesClient<$Result.GetResult<Prisma.$FilterValuesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FilterValues that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterValuesFindFirstOrThrowArgs} args - Arguments to find a FilterValues
     * @example
     * // Get one FilterValues
     * const filterValues = await prisma.filterValues.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilterValuesFindFirstOrThrowArgs>(args?: SelectSubset<T, FilterValuesFindFirstOrThrowArgs<ExtArgs>>): Prisma__FilterValuesClient<$Result.GetResult<Prisma.$FilterValuesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FilterValues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterValuesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FilterValues
     * const filterValues = await prisma.filterValues.findMany()
     * 
     * // Get first 10 FilterValues
     * const filterValues = await prisma.filterValues.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filterValuesWithIdOnly = await prisma.filterValues.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FilterValuesFindManyArgs>(args?: SelectSubset<T, FilterValuesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilterValuesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FilterValues.
     * @param {FilterValuesCreateArgs} args - Arguments to create a FilterValues.
     * @example
     * // Create one FilterValues
     * const FilterValues = await prisma.filterValues.create({
     *   data: {
     *     // ... data to create a FilterValues
     *   }
     * })
     * 
     */
    create<T extends FilterValuesCreateArgs>(args: SelectSubset<T, FilterValuesCreateArgs<ExtArgs>>): Prisma__FilterValuesClient<$Result.GetResult<Prisma.$FilterValuesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FilterValues.
     * @param {FilterValuesCreateManyArgs} args - Arguments to create many FilterValues.
     * @example
     * // Create many FilterValues
     * const filterValues = await prisma.filterValues.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FilterValuesCreateManyArgs>(args?: SelectSubset<T, FilterValuesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FilterValues.
     * @param {FilterValuesDeleteArgs} args - Arguments to delete one FilterValues.
     * @example
     * // Delete one FilterValues
     * const FilterValues = await prisma.filterValues.delete({
     *   where: {
     *     // ... filter to delete one FilterValues
     *   }
     * })
     * 
     */
    delete<T extends FilterValuesDeleteArgs>(args: SelectSubset<T, FilterValuesDeleteArgs<ExtArgs>>): Prisma__FilterValuesClient<$Result.GetResult<Prisma.$FilterValuesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FilterValues.
     * @param {FilterValuesUpdateArgs} args - Arguments to update one FilterValues.
     * @example
     * // Update one FilterValues
     * const filterValues = await prisma.filterValues.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FilterValuesUpdateArgs>(args: SelectSubset<T, FilterValuesUpdateArgs<ExtArgs>>): Prisma__FilterValuesClient<$Result.GetResult<Prisma.$FilterValuesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FilterValues.
     * @param {FilterValuesDeleteManyArgs} args - Arguments to filter FilterValues to delete.
     * @example
     * // Delete a few FilterValues
     * const { count } = await prisma.filterValues.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FilterValuesDeleteManyArgs>(args?: SelectSubset<T, FilterValuesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FilterValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterValuesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FilterValues
     * const filterValues = await prisma.filterValues.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FilterValuesUpdateManyArgs>(args: SelectSubset<T, FilterValuesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FilterValues.
     * @param {FilterValuesUpsertArgs} args - Arguments to update or create a FilterValues.
     * @example
     * // Update or create a FilterValues
     * const filterValues = await prisma.filterValues.upsert({
     *   create: {
     *     // ... data to create a FilterValues
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FilterValues we want to update
     *   }
     * })
     */
    upsert<T extends FilterValuesUpsertArgs>(args: SelectSubset<T, FilterValuesUpsertArgs<ExtArgs>>): Prisma__FilterValuesClient<$Result.GetResult<Prisma.$FilterValuesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FilterValues that matches the filter.
     * @param {FilterValuesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const filterValues = await prisma.filterValues.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FilterValuesFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a FilterValues.
     * @param {FilterValuesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const filterValues = await prisma.filterValues.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FilterValuesAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of FilterValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterValuesCountArgs} args - Arguments to filter FilterValues to count.
     * @example
     * // Count the number of FilterValues
     * const count = await prisma.filterValues.count({
     *   where: {
     *     // ... the filter for the FilterValues we want to count
     *   }
     * })
    **/
    count<T extends FilterValuesCountArgs>(
      args?: Subset<T, FilterValuesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilterValuesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FilterValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterValuesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FilterValuesAggregateArgs>(args: Subset<T, FilterValuesAggregateArgs>): Prisma.PrismaPromise<GetFilterValuesAggregateType<T>>

    /**
     * Group by FilterValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterValuesGroupByArgs} args - Group by arguments.
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
      T extends FilterValuesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilterValuesGroupByArgs['orderBy'] }
        : { orderBy?: FilterValuesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FilterValuesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilterValuesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FilterValues model
   */
  readonly fields: FilterValuesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FilterValues.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilterValuesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    filter<T extends FilterTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FilterTypeDefaultArgs<ExtArgs>>): Prisma__FilterTypeClient<$Result.GetResult<Prisma.$FilterTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FilterValues model
   */
  interface FilterValuesFieldRefs {
    readonly id: FieldRef<"FilterValues", 'String'>
    readonly value: FieldRef<"FilterValues", 'String'>
    readonly filterId: FieldRef<"FilterValues", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FilterValues findUnique
   */
  export type FilterValuesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterValues
     */
    select?: FilterValuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterValues
     */
    omit?: FilterValuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterValuesInclude<ExtArgs> | null
    /**
     * Filter, which FilterValues to fetch.
     */
    where: FilterValuesWhereUniqueInput
  }

  /**
   * FilterValues findUniqueOrThrow
   */
  export type FilterValuesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterValues
     */
    select?: FilterValuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterValues
     */
    omit?: FilterValuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterValuesInclude<ExtArgs> | null
    /**
     * Filter, which FilterValues to fetch.
     */
    where: FilterValuesWhereUniqueInput
  }

  /**
   * FilterValues findFirst
   */
  export type FilterValuesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterValues
     */
    select?: FilterValuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterValues
     */
    omit?: FilterValuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterValuesInclude<ExtArgs> | null
    /**
     * Filter, which FilterValues to fetch.
     */
    where?: FilterValuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilterValues to fetch.
     */
    orderBy?: FilterValuesOrderByWithRelationInput | FilterValuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilterValues.
     */
    cursor?: FilterValuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilterValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilterValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilterValues.
     */
    distinct?: FilterValuesScalarFieldEnum | FilterValuesScalarFieldEnum[]
  }

  /**
   * FilterValues findFirstOrThrow
   */
  export type FilterValuesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterValues
     */
    select?: FilterValuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterValues
     */
    omit?: FilterValuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterValuesInclude<ExtArgs> | null
    /**
     * Filter, which FilterValues to fetch.
     */
    where?: FilterValuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilterValues to fetch.
     */
    orderBy?: FilterValuesOrderByWithRelationInput | FilterValuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilterValues.
     */
    cursor?: FilterValuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilterValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilterValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilterValues.
     */
    distinct?: FilterValuesScalarFieldEnum | FilterValuesScalarFieldEnum[]
  }

  /**
   * FilterValues findMany
   */
  export type FilterValuesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterValues
     */
    select?: FilterValuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterValues
     */
    omit?: FilterValuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterValuesInclude<ExtArgs> | null
    /**
     * Filter, which FilterValues to fetch.
     */
    where?: FilterValuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilterValues to fetch.
     */
    orderBy?: FilterValuesOrderByWithRelationInput | FilterValuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FilterValues.
     */
    cursor?: FilterValuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilterValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilterValues.
     */
    skip?: number
    distinct?: FilterValuesScalarFieldEnum | FilterValuesScalarFieldEnum[]
  }

  /**
   * FilterValues create
   */
  export type FilterValuesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterValues
     */
    select?: FilterValuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterValues
     */
    omit?: FilterValuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterValuesInclude<ExtArgs> | null
    /**
     * The data needed to create a FilterValues.
     */
    data: XOR<FilterValuesCreateInput, FilterValuesUncheckedCreateInput>
  }

  /**
   * FilterValues createMany
   */
  export type FilterValuesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FilterValues.
     */
    data: FilterValuesCreateManyInput | FilterValuesCreateManyInput[]
  }

  /**
   * FilterValues update
   */
  export type FilterValuesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterValues
     */
    select?: FilterValuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterValues
     */
    omit?: FilterValuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterValuesInclude<ExtArgs> | null
    /**
     * The data needed to update a FilterValues.
     */
    data: XOR<FilterValuesUpdateInput, FilterValuesUncheckedUpdateInput>
    /**
     * Choose, which FilterValues to update.
     */
    where: FilterValuesWhereUniqueInput
  }

  /**
   * FilterValues updateMany
   */
  export type FilterValuesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FilterValues.
     */
    data: XOR<FilterValuesUpdateManyMutationInput, FilterValuesUncheckedUpdateManyInput>
    /**
     * Filter which FilterValues to update
     */
    where?: FilterValuesWhereInput
    /**
     * Limit how many FilterValues to update.
     */
    limit?: number
  }

  /**
   * FilterValues upsert
   */
  export type FilterValuesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterValues
     */
    select?: FilterValuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterValues
     */
    omit?: FilterValuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterValuesInclude<ExtArgs> | null
    /**
     * The filter to search for the FilterValues to update in case it exists.
     */
    where: FilterValuesWhereUniqueInput
    /**
     * In case the FilterValues found by the `where` argument doesn't exist, create a new FilterValues with this data.
     */
    create: XOR<FilterValuesCreateInput, FilterValuesUncheckedCreateInput>
    /**
     * In case the FilterValues was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilterValuesUpdateInput, FilterValuesUncheckedUpdateInput>
  }

  /**
   * FilterValues delete
   */
  export type FilterValuesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterValues
     */
    select?: FilterValuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterValues
     */
    omit?: FilterValuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterValuesInclude<ExtArgs> | null
    /**
     * Filter which FilterValues to delete.
     */
    where: FilterValuesWhereUniqueInput
  }

  /**
   * FilterValues deleteMany
   */
  export type FilterValuesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FilterValues to delete
     */
    where?: FilterValuesWhereInput
    /**
     * Limit how many FilterValues to delete.
     */
    limit?: number
  }

  /**
   * FilterValues findRaw
   */
  export type FilterValuesFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * FilterValues aggregateRaw
   */
  export type FilterValuesAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * FilterValues without action
   */
  export type FilterValuesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterValues
     */
    select?: FilterValuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterValues
     */
    omit?: FilterValuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterValuesInclude<ExtArgs> | null
  }


  /**
   * Model FilterCategory
   */

  export type AggregateFilterCategory = {
    _count: FilterCategoryCountAggregateOutputType | null
    _min: FilterCategoryMinAggregateOutputType | null
    _max: FilterCategoryMaxAggregateOutputType | null
  }

  export type FilterCategoryMinAggregateOutputType = {
    id: string | null
    categoryId: string | null
    filterId: string | null
  }

  export type FilterCategoryMaxAggregateOutputType = {
    id: string | null
    categoryId: string | null
    filterId: string | null
  }

  export type FilterCategoryCountAggregateOutputType = {
    id: number
    categoryId: number
    filterId: number
    _all: number
  }


  export type FilterCategoryMinAggregateInputType = {
    id?: true
    categoryId?: true
    filterId?: true
  }

  export type FilterCategoryMaxAggregateInputType = {
    id?: true
    categoryId?: true
    filterId?: true
  }

  export type FilterCategoryCountAggregateInputType = {
    id?: true
    categoryId?: true
    filterId?: true
    _all?: true
  }

  export type FilterCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FilterCategory to aggregate.
     */
    where?: FilterCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilterCategories to fetch.
     */
    orderBy?: FilterCategoryOrderByWithRelationInput | FilterCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilterCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilterCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilterCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FilterCategories
    **/
    _count?: true | FilterCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilterCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilterCategoryMaxAggregateInputType
  }

  export type GetFilterCategoryAggregateType<T extends FilterCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateFilterCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilterCategory[P]>
      : GetScalarType<T[P], AggregateFilterCategory[P]>
  }




  export type FilterCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilterCategoryWhereInput
    orderBy?: FilterCategoryOrderByWithAggregationInput | FilterCategoryOrderByWithAggregationInput[]
    by: FilterCategoryScalarFieldEnum[] | FilterCategoryScalarFieldEnum
    having?: FilterCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilterCategoryCountAggregateInputType | true
    _min?: FilterCategoryMinAggregateInputType
    _max?: FilterCategoryMaxAggregateInputType
  }

  export type FilterCategoryGroupByOutputType = {
    id: string
    categoryId: string
    filterId: string
    _count: FilterCategoryCountAggregateOutputType | null
    _min: FilterCategoryMinAggregateOutputType | null
    _max: FilterCategoryMaxAggregateOutputType | null
  }

  type GetFilterCategoryGroupByPayload<T extends FilterCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilterCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilterCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilterCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], FilterCategoryGroupByOutputType[P]>
        }
      >
    >


  export type FilterCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    filterId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    filter?: boolean | FilterTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["filterCategory"]>



  export type FilterCategorySelectScalar = {
    id?: boolean
    categoryId?: boolean
    filterId?: boolean
  }

  export type FilterCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryId" | "filterId", ExtArgs["result"]["filterCategory"]>
  export type FilterCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    filter?: boolean | FilterTypeDefaultArgs<ExtArgs>
  }

  export type $FilterCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FilterCategory"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      filter: Prisma.$FilterTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      categoryId: string
      filterId: string
    }, ExtArgs["result"]["filterCategory"]>
    composites: {}
  }

  type FilterCategoryGetPayload<S extends boolean | null | undefined | FilterCategoryDefaultArgs> = $Result.GetResult<Prisma.$FilterCategoryPayload, S>

  type FilterCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FilterCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilterCategoryCountAggregateInputType | true
    }

  export interface FilterCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FilterCategory'], meta: { name: 'FilterCategory' } }
    /**
     * Find zero or one FilterCategory that matches the filter.
     * @param {FilterCategoryFindUniqueArgs} args - Arguments to find a FilterCategory
     * @example
     * // Get one FilterCategory
     * const filterCategory = await prisma.filterCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilterCategoryFindUniqueArgs>(args: SelectSubset<T, FilterCategoryFindUniqueArgs<ExtArgs>>): Prisma__FilterCategoryClient<$Result.GetResult<Prisma.$FilterCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FilterCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilterCategoryFindUniqueOrThrowArgs} args - Arguments to find a FilterCategory
     * @example
     * // Get one FilterCategory
     * const filterCategory = await prisma.filterCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilterCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, FilterCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FilterCategoryClient<$Result.GetResult<Prisma.$FilterCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FilterCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterCategoryFindFirstArgs} args - Arguments to find a FilterCategory
     * @example
     * // Get one FilterCategory
     * const filterCategory = await prisma.filterCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilterCategoryFindFirstArgs>(args?: SelectSubset<T, FilterCategoryFindFirstArgs<ExtArgs>>): Prisma__FilterCategoryClient<$Result.GetResult<Prisma.$FilterCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FilterCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterCategoryFindFirstOrThrowArgs} args - Arguments to find a FilterCategory
     * @example
     * // Get one FilterCategory
     * const filterCategory = await prisma.filterCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilterCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, FilterCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__FilterCategoryClient<$Result.GetResult<Prisma.$FilterCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FilterCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FilterCategories
     * const filterCategories = await prisma.filterCategory.findMany()
     * 
     * // Get first 10 FilterCategories
     * const filterCategories = await prisma.filterCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filterCategoryWithIdOnly = await prisma.filterCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FilterCategoryFindManyArgs>(args?: SelectSubset<T, FilterCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilterCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FilterCategory.
     * @param {FilterCategoryCreateArgs} args - Arguments to create a FilterCategory.
     * @example
     * // Create one FilterCategory
     * const FilterCategory = await prisma.filterCategory.create({
     *   data: {
     *     // ... data to create a FilterCategory
     *   }
     * })
     * 
     */
    create<T extends FilterCategoryCreateArgs>(args: SelectSubset<T, FilterCategoryCreateArgs<ExtArgs>>): Prisma__FilterCategoryClient<$Result.GetResult<Prisma.$FilterCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FilterCategories.
     * @param {FilterCategoryCreateManyArgs} args - Arguments to create many FilterCategories.
     * @example
     * // Create many FilterCategories
     * const filterCategory = await prisma.filterCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FilterCategoryCreateManyArgs>(args?: SelectSubset<T, FilterCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FilterCategory.
     * @param {FilterCategoryDeleteArgs} args - Arguments to delete one FilterCategory.
     * @example
     * // Delete one FilterCategory
     * const FilterCategory = await prisma.filterCategory.delete({
     *   where: {
     *     // ... filter to delete one FilterCategory
     *   }
     * })
     * 
     */
    delete<T extends FilterCategoryDeleteArgs>(args: SelectSubset<T, FilterCategoryDeleteArgs<ExtArgs>>): Prisma__FilterCategoryClient<$Result.GetResult<Prisma.$FilterCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FilterCategory.
     * @param {FilterCategoryUpdateArgs} args - Arguments to update one FilterCategory.
     * @example
     * // Update one FilterCategory
     * const filterCategory = await prisma.filterCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FilterCategoryUpdateArgs>(args: SelectSubset<T, FilterCategoryUpdateArgs<ExtArgs>>): Prisma__FilterCategoryClient<$Result.GetResult<Prisma.$FilterCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FilterCategories.
     * @param {FilterCategoryDeleteManyArgs} args - Arguments to filter FilterCategories to delete.
     * @example
     * // Delete a few FilterCategories
     * const { count } = await prisma.filterCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FilterCategoryDeleteManyArgs>(args?: SelectSubset<T, FilterCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FilterCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FilterCategories
     * const filterCategory = await prisma.filterCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FilterCategoryUpdateManyArgs>(args: SelectSubset<T, FilterCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FilterCategory.
     * @param {FilterCategoryUpsertArgs} args - Arguments to update or create a FilterCategory.
     * @example
     * // Update or create a FilterCategory
     * const filterCategory = await prisma.filterCategory.upsert({
     *   create: {
     *     // ... data to create a FilterCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FilterCategory we want to update
     *   }
     * })
     */
    upsert<T extends FilterCategoryUpsertArgs>(args: SelectSubset<T, FilterCategoryUpsertArgs<ExtArgs>>): Prisma__FilterCategoryClient<$Result.GetResult<Prisma.$FilterCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FilterCategories that matches the filter.
     * @param {FilterCategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const filterCategory = await prisma.filterCategory.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FilterCategoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a FilterCategory.
     * @param {FilterCategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const filterCategory = await prisma.filterCategory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FilterCategoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of FilterCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterCategoryCountArgs} args - Arguments to filter FilterCategories to count.
     * @example
     * // Count the number of FilterCategories
     * const count = await prisma.filterCategory.count({
     *   where: {
     *     // ... the filter for the FilterCategories we want to count
     *   }
     * })
    **/
    count<T extends FilterCategoryCountArgs>(
      args?: Subset<T, FilterCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilterCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FilterCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FilterCategoryAggregateArgs>(args: Subset<T, FilterCategoryAggregateArgs>): Prisma.PrismaPromise<GetFilterCategoryAggregateType<T>>

    /**
     * Group by FilterCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterCategoryGroupByArgs} args - Group by arguments.
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
      T extends FilterCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilterCategoryGroupByArgs['orderBy'] }
        : { orderBy?: FilterCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FilterCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilterCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FilterCategory model
   */
  readonly fields: FilterCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FilterCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilterCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    filter<T extends FilterTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FilterTypeDefaultArgs<ExtArgs>>): Prisma__FilterTypeClient<$Result.GetResult<Prisma.$FilterTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FilterCategory model
   */
  interface FilterCategoryFieldRefs {
    readonly id: FieldRef<"FilterCategory", 'String'>
    readonly categoryId: FieldRef<"FilterCategory", 'String'>
    readonly filterId: FieldRef<"FilterCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FilterCategory findUnique
   */
  export type FilterCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterCategory
     */
    select?: FilterCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterCategory
     */
    omit?: FilterCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FilterCategory to fetch.
     */
    where: FilterCategoryWhereUniqueInput
  }

  /**
   * FilterCategory findUniqueOrThrow
   */
  export type FilterCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterCategory
     */
    select?: FilterCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterCategory
     */
    omit?: FilterCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FilterCategory to fetch.
     */
    where: FilterCategoryWhereUniqueInput
  }

  /**
   * FilterCategory findFirst
   */
  export type FilterCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterCategory
     */
    select?: FilterCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterCategory
     */
    omit?: FilterCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FilterCategory to fetch.
     */
    where?: FilterCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilterCategories to fetch.
     */
    orderBy?: FilterCategoryOrderByWithRelationInput | FilterCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilterCategories.
     */
    cursor?: FilterCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilterCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilterCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilterCategories.
     */
    distinct?: FilterCategoryScalarFieldEnum | FilterCategoryScalarFieldEnum[]
  }

  /**
   * FilterCategory findFirstOrThrow
   */
  export type FilterCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterCategory
     */
    select?: FilterCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterCategory
     */
    omit?: FilterCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FilterCategory to fetch.
     */
    where?: FilterCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilterCategories to fetch.
     */
    orderBy?: FilterCategoryOrderByWithRelationInput | FilterCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilterCategories.
     */
    cursor?: FilterCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilterCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilterCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilterCategories.
     */
    distinct?: FilterCategoryScalarFieldEnum | FilterCategoryScalarFieldEnum[]
  }

  /**
   * FilterCategory findMany
   */
  export type FilterCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterCategory
     */
    select?: FilterCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterCategory
     */
    omit?: FilterCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FilterCategories to fetch.
     */
    where?: FilterCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilterCategories to fetch.
     */
    orderBy?: FilterCategoryOrderByWithRelationInput | FilterCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FilterCategories.
     */
    cursor?: FilterCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilterCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilterCategories.
     */
    skip?: number
    distinct?: FilterCategoryScalarFieldEnum | FilterCategoryScalarFieldEnum[]
  }

  /**
   * FilterCategory create
   */
  export type FilterCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterCategory
     */
    select?: FilterCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterCategory
     */
    omit?: FilterCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a FilterCategory.
     */
    data: XOR<FilterCategoryCreateInput, FilterCategoryUncheckedCreateInput>
  }

  /**
   * FilterCategory createMany
   */
  export type FilterCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FilterCategories.
     */
    data: FilterCategoryCreateManyInput | FilterCategoryCreateManyInput[]
  }

  /**
   * FilterCategory update
   */
  export type FilterCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterCategory
     */
    select?: FilterCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterCategory
     */
    omit?: FilterCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a FilterCategory.
     */
    data: XOR<FilterCategoryUpdateInput, FilterCategoryUncheckedUpdateInput>
    /**
     * Choose, which FilterCategory to update.
     */
    where: FilterCategoryWhereUniqueInput
  }

  /**
   * FilterCategory updateMany
   */
  export type FilterCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FilterCategories.
     */
    data: XOR<FilterCategoryUpdateManyMutationInput, FilterCategoryUncheckedUpdateManyInput>
    /**
     * Filter which FilterCategories to update
     */
    where?: FilterCategoryWhereInput
    /**
     * Limit how many FilterCategories to update.
     */
    limit?: number
  }

  /**
   * FilterCategory upsert
   */
  export type FilterCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterCategory
     */
    select?: FilterCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterCategory
     */
    omit?: FilterCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the FilterCategory to update in case it exists.
     */
    where: FilterCategoryWhereUniqueInput
    /**
     * In case the FilterCategory found by the `where` argument doesn't exist, create a new FilterCategory with this data.
     */
    create: XOR<FilterCategoryCreateInput, FilterCategoryUncheckedCreateInput>
    /**
     * In case the FilterCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilterCategoryUpdateInput, FilterCategoryUncheckedUpdateInput>
  }

  /**
   * FilterCategory delete
   */
  export type FilterCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterCategory
     */
    select?: FilterCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterCategory
     */
    omit?: FilterCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterCategoryInclude<ExtArgs> | null
    /**
     * Filter which FilterCategory to delete.
     */
    where: FilterCategoryWhereUniqueInput
  }

  /**
   * FilterCategory deleteMany
   */
  export type FilterCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FilterCategories to delete
     */
    where?: FilterCategoryWhereInput
    /**
     * Limit how many FilterCategories to delete.
     */
    limit?: number
  }

  /**
   * FilterCategory findRaw
   */
  export type FilterCategoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * FilterCategory aggregateRaw
   */
  export type FilterCategoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * FilterCategory without action
   */
  export type FilterCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterCategory
     */
    select?: FilterCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterCategory
     */
    omit?: FilterCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Coupon
   */

  export type AggregateCoupon = {
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  export type CouponAvgAggregateOutputType = {
    discount_value: number | null
    min_order_amount: number | null
    usage_limit: number | null
  }

  export type CouponSumAggregateOutputType = {
    discount_value: number | null
    min_order_amount: number | null
    usage_limit: number | null
  }

  export type CouponMinAggregateOutputType = {
    id: string | null
    code: string | null
    discount_value: number | null
    min_order_amount: number | null
    usage_limit: number | null
    end_date: Date | null
    status: $Enums.CouponStatus | null
  }

  export type CouponMaxAggregateOutputType = {
    id: string | null
    code: string | null
    discount_value: number | null
    min_order_amount: number | null
    usage_limit: number | null
    end_date: Date | null
    status: $Enums.CouponStatus | null
  }

  export type CouponCountAggregateOutputType = {
    id: number
    code: number
    discount_value: number
    min_order_amount: number
    usage_limit: number
    end_date: number
    status: number
    _all: number
  }


  export type CouponAvgAggregateInputType = {
    discount_value?: true
    min_order_amount?: true
    usage_limit?: true
  }

  export type CouponSumAggregateInputType = {
    discount_value?: true
    min_order_amount?: true
    usage_limit?: true
  }

  export type CouponMinAggregateInputType = {
    id?: true
    code?: true
    discount_value?: true
    min_order_amount?: true
    usage_limit?: true
    end_date?: true
    status?: true
  }

  export type CouponMaxAggregateInputType = {
    id?: true
    code?: true
    discount_value?: true
    min_order_amount?: true
    usage_limit?: true
    end_date?: true
    status?: true
  }

  export type CouponCountAggregateInputType = {
    id?: true
    code?: true
    discount_value?: true
    min_order_amount?: true
    usage_limit?: true
    end_date?: true
    status?: true
    _all?: true
  }

  export type CouponAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupon to aggregate.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coupons
    **/
    _count?: true | CouponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CouponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CouponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CouponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CouponMaxAggregateInputType
  }

  export type GetCouponAggregateType<T extends CouponAggregateArgs> = {
        [P in keyof T & keyof AggregateCoupon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoupon[P]>
      : GetScalarType<T[P], AggregateCoupon[P]>
  }




  export type CouponGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponWhereInput
    orderBy?: CouponOrderByWithAggregationInput | CouponOrderByWithAggregationInput[]
    by: CouponScalarFieldEnum[] | CouponScalarFieldEnum
    having?: CouponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CouponCountAggregateInputType | true
    _avg?: CouponAvgAggregateInputType
    _sum?: CouponSumAggregateInputType
    _min?: CouponMinAggregateInputType
    _max?: CouponMaxAggregateInputType
  }

  export type CouponGroupByOutputType = {
    id: string
    code: string
    discount_value: number
    min_order_amount: number
    usage_limit: number
    end_date: Date
    status: $Enums.CouponStatus
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  type GetCouponGroupByPayload<T extends CouponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CouponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CouponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CouponGroupByOutputType[P]>
            : GetScalarType<T[P], CouponGroupByOutputType[P]>
        }
      >
    >


  export type CouponSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    discount_value?: boolean
    min_order_amount?: boolean
    usage_limit?: boolean
    end_date?: boolean
    status?: boolean
  }, ExtArgs["result"]["coupon"]>



  export type CouponSelectScalar = {
    id?: boolean
    code?: boolean
    discount_value?: boolean
    min_order_amount?: boolean
    usage_limit?: boolean
    end_date?: boolean
    status?: boolean
  }

  export type CouponOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "discount_value" | "min_order_amount" | "usage_limit" | "end_date" | "status", ExtArgs["result"]["coupon"]>

  export type $CouponPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coupon"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      discount_value: number
      min_order_amount: number
      usage_limit: number
      end_date: Date
      status: $Enums.CouponStatus
    }, ExtArgs["result"]["coupon"]>
    composites: {}
  }

  type CouponGetPayload<S extends boolean | null | undefined | CouponDefaultArgs> = $Result.GetResult<Prisma.$CouponPayload, S>

  type CouponCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CouponFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CouponCountAggregateInputType | true
    }

  export interface CouponDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coupon'], meta: { name: 'Coupon' } }
    /**
     * Find zero or one Coupon that matches the filter.
     * @param {CouponFindUniqueArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CouponFindUniqueArgs>(args: SelectSubset<T, CouponFindUniqueArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coupon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CouponFindUniqueOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CouponFindUniqueOrThrowArgs>(args: SelectSubset<T, CouponFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coupon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CouponFindFirstArgs>(args?: SelectSubset<T, CouponFindFirstArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coupon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CouponFindFirstOrThrowArgs>(args?: SelectSubset<T, CouponFindFirstOrThrowArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coupons
     * const coupons = await prisma.coupon.findMany()
     * 
     * // Get first 10 Coupons
     * const coupons = await prisma.coupon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const couponWithIdOnly = await prisma.coupon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CouponFindManyArgs>(args?: SelectSubset<T, CouponFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coupon.
     * @param {CouponCreateArgs} args - Arguments to create a Coupon.
     * @example
     * // Create one Coupon
     * const Coupon = await prisma.coupon.create({
     *   data: {
     *     // ... data to create a Coupon
     *   }
     * })
     * 
     */
    create<T extends CouponCreateArgs>(args: SelectSubset<T, CouponCreateArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Coupons.
     * @param {CouponCreateManyArgs} args - Arguments to create many Coupons.
     * @example
     * // Create many Coupons
     * const coupon = await prisma.coupon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CouponCreateManyArgs>(args?: SelectSubset<T, CouponCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Coupon.
     * @param {CouponDeleteArgs} args - Arguments to delete one Coupon.
     * @example
     * // Delete one Coupon
     * const Coupon = await prisma.coupon.delete({
     *   where: {
     *     // ... filter to delete one Coupon
     *   }
     * })
     * 
     */
    delete<T extends CouponDeleteArgs>(args: SelectSubset<T, CouponDeleteArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coupon.
     * @param {CouponUpdateArgs} args - Arguments to update one Coupon.
     * @example
     * // Update one Coupon
     * const coupon = await prisma.coupon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CouponUpdateArgs>(args: SelectSubset<T, CouponUpdateArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Coupons.
     * @param {CouponDeleteManyArgs} args - Arguments to filter Coupons to delete.
     * @example
     * // Delete a few Coupons
     * const { count } = await prisma.coupon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CouponDeleteManyArgs>(args?: SelectSubset<T, CouponDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coupons
     * const coupon = await prisma.coupon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CouponUpdateManyArgs>(args: SelectSubset<T, CouponUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Coupon.
     * @param {CouponUpsertArgs} args - Arguments to update or create a Coupon.
     * @example
     * // Update or create a Coupon
     * const coupon = await prisma.coupon.upsert({
     *   create: {
     *     // ... data to create a Coupon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coupon we want to update
     *   }
     * })
     */
    upsert<T extends CouponUpsertArgs>(args: SelectSubset<T, CouponUpsertArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coupons that matches the filter.
     * @param {CouponFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const coupon = await prisma.coupon.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CouponFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Coupon.
     * @param {CouponAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const coupon = await prisma.coupon.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CouponAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponCountArgs} args - Arguments to filter Coupons to count.
     * @example
     * // Count the number of Coupons
     * const count = await prisma.coupon.count({
     *   where: {
     *     // ... the filter for the Coupons we want to count
     *   }
     * })
    **/
    count<T extends CouponCountArgs>(
      args?: Subset<T, CouponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CouponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CouponAggregateArgs>(args: Subset<T, CouponAggregateArgs>): Prisma.PrismaPromise<GetCouponAggregateType<T>>

    /**
     * Group by Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponGroupByArgs} args - Group by arguments.
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
      T extends CouponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CouponGroupByArgs['orderBy'] }
        : { orderBy?: CouponGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CouponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coupon model
   */
  readonly fields: CouponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coupon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CouponClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Coupon model
   */
  interface CouponFieldRefs {
    readonly id: FieldRef<"Coupon", 'String'>
    readonly code: FieldRef<"Coupon", 'String'>
    readonly discount_value: FieldRef<"Coupon", 'Float'>
    readonly min_order_amount: FieldRef<"Coupon", 'Float'>
    readonly usage_limit: FieldRef<"Coupon", 'Int'>
    readonly end_date: FieldRef<"Coupon", 'DateTime'>
    readonly status: FieldRef<"Coupon", 'CouponStatus'>
  }
    

  // Custom InputTypes
  /**
   * Coupon findUnique
   */
  export type CouponFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon findUniqueOrThrow
   */
  export type CouponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon findFirst
   */
  export type CouponFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon findFirstOrThrow
   */
  export type CouponFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon findMany
   */
  export type CouponFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Filter, which Coupons to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon create
   */
  export type CouponCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * The data needed to create a Coupon.
     */
    data: XOR<CouponCreateInput, CouponUncheckedCreateInput>
  }

  /**
   * Coupon createMany
   */
  export type CouponCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coupons.
     */
    data: CouponCreateManyInput | CouponCreateManyInput[]
  }

  /**
   * Coupon update
   */
  export type CouponUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * The data needed to update a Coupon.
     */
    data: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
    /**
     * Choose, which Coupon to update.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon updateMany
   */
  export type CouponUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coupons.
     */
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyInput>
    /**
     * Filter which Coupons to update
     */
    where?: CouponWhereInput
    /**
     * Limit how many Coupons to update.
     */
    limit?: number
  }

  /**
   * Coupon upsert
   */
  export type CouponUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * The filter to search for the Coupon to update in case it exists.
     */
    where: CouponWhereUniqueInput
    /**
     * In case the Coupon found by the `where` argument doesn't exist, create a new Coupon with this data.
     */
    create: XOR<CouponCreateInput, CouponUncheckedCreateInput>
    /**
     * In case the Coupon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
  }

  /**
   * Coupon delete
   */
  export type CouponDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Filter which Coupon to delete.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon deleteMany
   */
  export type CouponDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupons to delete
     */
    where?: CouponWhereInput
    /**
     * Limit how many Coupons to delete.
     */
    limit?: number
  }

  /**
   * Coupon findRaw
   */
  export type CouponFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Coupon aggregateRaw
   */
  export type CouponAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Coupon without action
   */
  export type CouponDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
  }


  /**
   * Model Poster
   */

  export type AggregatePoster = {
    _count: PosterCountAggregateOutputType | null
    _min: PosterMinAggregateOutputType | null
    _max: PosterMaxAggregateOutputType | null
  }

  export type PosterMinAggregateOutputType = {
    id: string | null
    title: string | null
    img: string | null
  }

  export type PosterMaxAggregateOutputType = {
    id: string | null
    title: string | null
    img: string | null
  }

  export type PosterCountAggregateOutputType = {
    id: number
    title: number
    img: number
    _all: number
  }


  export type PosterMinAggregateInputType = {
    id?: true
    title?: true
    img?: true
  }

  export type PosterMaxAggregateInputType = {
    id?: true
    title?: true
    img?: true
  }

  export type PosterCountAggregateInputType = {
    id?: true
    title?: true
    img?: true
    _all?: true
  }

  export type PosterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Poster to aggregate.
     */
    where?: PosterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posters to fetch.
     */
    orderBy?: PosterOrderByWithRelationInput | PosterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PosterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posters
    **/
    _count?: true | PosterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PosterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PosterMaxAggregateInputType
  }

  export type GetPosterAggregateType<T extends PosterAggregateArgs> = {
        [P in keyof T & keyof AggregatePoster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoster[P]>
      : GetScalarType<T[P], AggregatePoster[P]>
  }




  export type PosterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PosterWhereInput
    orderBy?: PosterOrderByWithAggregationInput | PosterOrderByWithAggregationInput[]
    by: PosterScalarFieldEnum[] | PosterScalarFieldEnum
    having?: PosterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PosterCountAggregateInputType | true
    _min?: PosterMinAggregateInputType
    _max?: PosterMaxAggregateInputType
  }

  export type PosterGroupByOutputType = {
    id: string
    title: string
    img: string
    _count: PosterCountAggregateOutputType | null
    _min: PosterMinAggregateOutputType | null
    _max: PosterMaxAggregateOutputType | null
  }

  type GetPosterGroupByPayload<T extends PosterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PosterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PosterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PosterGroupByOutputType[P]>
            : GetScalarType<T[P], PosterGroupByOutputType[P]>
        }
      >
    >


  export type PosterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    img?: boolean
  }, ExtArgs["result"]["poster"]>



  export type PosterSelectScalar = {
    id?: boolean
    title?: boolean
    img?: boolean
  }

  export type PosterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "img", ExtArgs["result"]["poster"]>

  export type $PosterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Poster"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      img: string
    }, ExtArgs["result"]["poster"]>
    composites: {}
  }

  type PosterGetPayload<S extends boolean | null | undefined | PosterDefaultArgs> = $Result.GetResult<Prisma.$PosterPayload, S>

  type PosterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PosterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PosterCountAggregateInputType | true
    }

  export interface PosterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Poster'], meta: { name: 'Poster' } }
    /**
     * Find zero or one Poster that matches the filter.
     * @param {PosterFindUniqueArgs} args - Arguments to find a Poster
     * @example
     * // Get one Poster
     * const poster = await prisma.poster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PosterFindUniqueArgs>(args: SelectSubset<T, PosterFindUniqueArgs<ExtArgs>>): Prisma__PosterClient<$Result.GetResult<Prisma.$PosterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Poster that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PosterFindUniqueOrThrowArgs} args - Arguments to find a Poster
     * @example
     * // Get one Poster
     * const poster = await prisma.poster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PosterFindUniqueOrThrowArgs>(args: SelectSubset<T, PosterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PosterClient<$Result.GetResult<Prisma.$PosterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Poster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosterFindFirstArgs} args - Arguments to find a Poster
     * @example
     * // Get one Poster
     * const poster = await prisma.poster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PosterFindFirstArgs>(args?: SelectSubset<T, PosterFindFirstArgs<ExtArgs>>): Prisma__PosterClient<$Result.GetResult<Prisma.$PosterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Poster that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosterFindFirstOrThrowArgs} args - Arguments to find a Poster
     * @example
     * // Get one Poster
     * const poster = await prisma.poster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PosterFindFirstOrThrowArgs>(args?: SelectSubset<T, PosterFindFirstOrThrowArgs<ExtArgs>>): Prisma__PosterClient<$Result.GetResult<Prisma.$PosterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posters
     * const posters = await prisma.poster.findMany()
     * 
     * // Get first 10 Posters
     * const posters = await prisma.poster.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const posterWithIdOnly = await prisma.poster.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PosterFindManyArgs>(args?: SelectSubset<T, PosterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Poster.
     * @param {PosterCreateArgs} args - Arguments to create a Poster.
     * @example
     * // Create one Poster
     * const Poster = await prisma.poster.create({
     *   data: {
     *     // ... data to create a Poster
     *   }
     * })
     * 
     */
    create<T extends PosterCreateArgs>(args: SelectSubset<T, PosterCreateArgs<ExtArgs>>): Prisma__PosterClient<$Result.GetResult<Prisma.$PosterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posters.
     * @param {PosterCreateManyArgs} args - Arguments to create many Posters.
     * @example
     * // Create many Posters
     * const poster = await prisma.poster.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PosterCreateManyArgs>(args?: SelectSubset<T, PosterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Poster.
     * @param {PosterDeleteArgs} args - Arguments to delete one Poster.
     * @example
     * // Delete one Poster
     * const Poster = await prisma.poster.delete({
     *   where: {
     *     // ... filter to delete one Poster
     *   }
     * })
     * 
     */
    delete<T extends PosterDeleteArgs>(args: SelectSubset<T, PosterDeleteArgs<ExtArgs>>): Prisma__PosterClient<$Result.GetResult<Prisma.$PosterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Poster.
     * @param {PosterUpdateArgs} args - Arguments to update one Poster.
     * @example
     * // Update one Poster
     * const poster = await prisma.poster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PosterUpdateArgs>(args: SelectSubset<T, PosterUpdateArgs<ExtArgs>>): Prisma__PosterClient<$Result.GetResult<Prisma.$PosterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posters.
     * @param {PosterDeleteManyArgs} args - Arguments to filter Posters to delete.
     * @example
     * // Delete a few Posters
     * const { count } = await prisma.poster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PosterDeleteManyArgs>(args?: SelectSubset<T, PosterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posters
     * const poster = await prisma.poster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PosterUpdateManyArgs>(args: SelectSubset<T, PosterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Poster.
     * @param {PosterUpsertArgs} args - Arguments to update or create a Poster.
     * @example
     * // Update or create a Poster
     * const poster = await prisma.poster.upsert({
     *   create: {
     *     // ... data to create a Poster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Poster we want to update
     *   }
     * })
     */
    upsert<T extends PosterUpsertArgs>(args: SelectSubset<T, PosterUpsertArgs<ExtArgs>>): Prisma__PosterClient<$Result.GetResult<Prisma.$PosterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posters that matches the filter.
     * @param {PosterFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const poster = await prisma.poster.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PosterFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Poster.
     * @param {PosterAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const poster = await prisma.poster.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PosterAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Posters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosterCountArgs} args - Arguments to filter Posters to count.
     * @example
     * // Count the number of Posters
     * const count = await prisma.poster.count({
     *   where: {
     *     // ... the filter for the Posters we want to count
     *   }
     * })
    **/
    count<T extends PosterCountArgs>(
      args?: Subset<T, PosterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PosterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Poster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PosterAggregateArgs>(args: Subset<T, PosterAggregateArgs>): Prisma.PrismaPromise<GetPosterAggregateType<T>>

    /**
     * Group by Poster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosterGroupByArgs} args - Group by arguments.
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
      T extends PosterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PosterGroupByArgs['orderBy'] }
        : { orderBy?: PosterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PosterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPosterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Poster model
   */
  readonly fields: PosterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Poster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PosterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Poster model
   */
  interface PosterFieldRefs {
    readonly id: FieldRef<"Poster", 'String'>
    readonly title: FieldRef<"Poster", 'String'>
    readonly img: FieldRef<"Poster", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Poster findUnique
   */
  export type PosterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poster
     */
    select?: PosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poster
     */
    omit?: PosterOmit<ExtArgs> | null
    /**
     * Filter, which Poster to fetch.
     */
    where: PosterWhereUniqueInput
  }

  /**
   * Poster findUniqueOrThrow
   */
  export type PosterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poster
     */
    select?: PosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poster
     */
    omit?: PosterOmit<ExtArgs> | null
    /**
     * Filter, which Poster to fetch.
     */
    where: PosterWhereUniqueInput
  }

  /**
   * Poster findFirst
   */
  export type PosterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poster
     */
    select?: PosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poster
     */
    omit?: PosterOmit<ExtArgs> | null
    /**
     * Filter, which Poster to fetch.
     */
    where?: PosterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posters to fetch.
     */
    orderBy?: PosterOrderByWithRelationInput | PosterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posters.
     */
    cursor?: PosterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posters.
     */
    distinct?: PosterScalarFieldEnum | PosterScalarFieldEnum[]
  }

  /**
   * Poster findFirstOrThrow
   */
  export type PosterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poster
     */
    select?: PosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poster
     */
    omit?: PosterOmit<ExtArgs> | null
    /**
     * Filter, which Poster to fetch.
     */
    where?: PosterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posters to fetch.
     */
    orderBy?: PosterOrderByWithRelationInput | PosterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posters.
     */
    cursor?: PosterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posters.
     */
    distinct?: PosterScalarFieldEnum | PosterScalarFieldEnum[]
  }

  /**
   * Poster findMany
   */
  export type PosterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poster
     */
    select?: PosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poster
     */
    omit?: PosterOmit<ExtArgs> | null
    /**
     * Filter, which Posters to fetch.
     */
    where?: PosterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posters to fetch.
     */
    orderBy?: PosterOrderByWithRelationInput | PosterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posters.
     */
    cursor?: PosterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posters.
     */
    skip?: number
    distinct?: PosterScalarFieldEnum | PosterScalarFieldEnum[]
  }

  /**
   * Poster create
   */
  export type PosterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poster
     */
    select?: PosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poster
     */
    omit?: PosterOmit<ExtArgs> | null
    /**
     * The data needed to create a Poster.
     */
    data: XOR<PosterCreateInput, PosterUncheckedCreateInput>
  }

  /**
   * Poster createMany
   */
  export type PosterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posters.
     */
    data: PosterCreateManyInput | PosterCreateManyInput[]
  }

  /**
   * Poster update
   */
  export type PosterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poster
     */
    select?: PosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poster
     */
    omit?: PosterOmit<ExtArgs> | null
    /**
     * The data needed to update a Poster.
     */
    data: XOR<PosterUpdateInput, PosterUncheckedUpdateInput>
    /**
     * Choose, which Poster to update.
     */
    where: PosterWhereUniqueInput
  }

  /**
   * Poster updateMany
   */
  export type PosterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posters.
     */
    data: XOR<PosterUpdateManyMutationInput, PosterUncheckedUpdateManyInput>
    /**
     * Filter which Posters to update
     */
    where?: PosterWhereInput
    /**
     * Limit how many Posters to update.
     */
    limit?: number
  }

  /**
   * Poster upsert
   */
  export type PosterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poster
     */
    select?: PosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poster
     */
    omit?: PosterOmit<ExtArgs> | null
    /**
     * The filter to search for the Poster to update in case it exists.
     */
    where: PosterWhereUniqueInput
    /**
     * In case the Poster found by the `where` argument doesn't exist, create a new Poster with this data.
     */
    create: XOR<PosterCreateInput, PosterUncheckedCreateInput>
    /**
     * In case the Poster was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PosterUpdateInput, PosterUncheckedUpdateInput>
  }

  /**
   * Poster delete
   */
  export type PosterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poster
     */
    select?: PosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poster
     */
    omit?: PosterOmit<ExtArgs> | null
    /**
     * Filter which Poster to delete.
     */
    where: PosterWhereUniqueInput
  }

  /**
   * Poster deleteMany
   */
  export type PosterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posters to delete
     */
    where?: PosterWhereInput
    /**
     * Limit how many Posters to delete.
     */
    limit?: number
  }

  /**
   * Poster findRaw
   */
  export type PosterFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Poster aggregateRaw
   */
  export type PosterAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Poster without action
   */
  export type PosterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poster
     */
    select?: PosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poster
     */
    omit?: PosterOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const CommentsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    sent_person: 'sent_person',
    image: 'image',
    stars: 'stars',
    replyMessage: 'replyMessage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    productId: 'productId'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    product_name: 'product_name',
    description: 'description',
    oldPrice: 'oldPrice',
    price: 'price',
    quantity: 'quantity',
    color: 'color',
    filters: 'filters',
    ordered: 'ordered',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    categoryId: 'categoryId',
    brandId: 'brandId',
    product_status: 'product_status'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductImageScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    productId: 'productId'
  };

  export type ProductImageScalarFieldEnum = (typeof ProductImageScalarFieldEnum)[keyof typeof ProductImageScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    parentId: 'parentId',
    icon: 'icon',
    title: 'title',
    children: 'children'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const LikedProductScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    createdAt: 'createdAt'
  };

  export type LikedProductScalarFieldEnum = (typeof LikedProductScalarFieldEnum)[keyof typeof LikedProductScalarFieldEnum]


  export const BrandScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum]


  export const BrandCategoryScalarFieldEnum: {
    id: 'id',
    brandId: 'brandId',
    categoryId: 'categoryId'
  };

  export type BrandCategoryScalarFieldEnum = (typeof BrandCategoryScalarFieldEnum)[keyof typeof BrandCategoryScalarFieldEnum]


  export const FilterTypeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    inputType: 'inputType',
    type: 'type'
  };

  export type FilterTypeScalarFieldEnum = (typeof FilterTypeScalarFieldEnum)[keyof typeof FilterTypeScalarFieldEnum]


  export const FilterValuesScalarFieldEnum: {
    id: 'id',
    value: 'value',
    filterId: 'filterId'
  };

  export type FilterValuesScalarFieldEnum = (typeof FilterValuesScalarFieldEnum)[keyof typeof FilterValuesScalarFieldEnum]


  export const FilterCategoryScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    filterId: 'filterId'
  };

  export type FilterCategoryScalarFieldEnum = (typeof FilterCategoryScalarFieldEnum)[keyof typeof FilterCategoryScalarFieldEnum]


  export const CouponScalarFieldEnum: {
    id: 'id',
    code: 'code',
    discount_value: 'discount_value',
    min_order_amount: 'min_order_amount',
    usage_limit: 'usage_limit',
    end_date: 'end_date',
    status: 'status'
  };

  export type CouponScalarFieldEnum = (typeof CouponScalarFieldEnum)[keyof typeof CouponScalarFieldEnum]


  export const PosterScalarFieldEnum: {
    id: 'id',
    title: 'title',
    img: 'img'
  };

  export type PosterScalarFieldEnum = (typeof PosterScalarFieldEnum)[keyof typeof PosterScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'ProductStatus'
   */
  export type EnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus'>
    


  /**
   * Reference to a field of type 'ProductStatus[]'
   */
  export type ListEnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus[]'>
    


  /**
   * Reference to a field of type 'InputType'
   */
  export type EnumInputTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InputType'>
    


  /**
   * Reference to a field of type 'InputType[]'
   */
  export type ListEnumInputTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InputType[]'>
    


  /**
   * Reference to a field of type 'TypeOfFilter'
   */
  export type EnumTypeOfFilterFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeOfFilter'>
    


  /**
   * Reference to a field of type 'TypeOfFilter[]'
   */
  export type ListEnumTypeOfFilterFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeOfFilter[]'>
    


  /**
   * Reference to a field of type 'CouponStatus'
   */
  export type EnumCouponStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CouponStatus'>
    


  /**
   * Reference to a field of type 'CouponStatus[]'
   */
  export type ListEnumCouponStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CouponStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type CommentsWhereInput = {
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    id?: StringFilter<"Comments"> | string
    title?: StringFilter<"Comments"> | string
    sent_person?: StringFilter<"Comments"> | string
    image?: StringNullableFilter<"Comments"> | string | null
    stars?: IntFilter<"Comments"> | number
    replyMessage?: StringNullableFilter<"Comments"> | string | null
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    updatedAt?: DateTimeFilter<"Comments"> | Date | string
    productId?: StringFilter<"Comments"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type CommentsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    sent_person?: SortOrder
    image?: SortOrder
    stars?: SortOrder
    replyMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type CommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    title?: StringFilter<"Comments"> | string
    sent_person?: StringFilter<"Comments"> | string
    image?: StringNullableFilter<"Comments"> | string | null
    stars?: IntFilter<"Comments"> | number
    replyMessage?: StringNullableFilter<"Comments"> | string | null
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    updatedAt?: DateTimeFilter<"Comments"> | Date | string
    productId?: StringFilter<"Comments"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type CommentsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    sent_person?: SortOrder
    image?: SortOrder
    stars?: SortOrder
    replyMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
    _count?: CommentsCountOrderByAggregateInput
    _avg?: CommentsAvgOrderByAggregateInput
    _max?: CommentsMaxOrderByAggregateInput
    _min?: CommentsMinOrderByAggregateInput
    _sum?: CommentsSumOrderByAggregateInput
  }

  export type CommentsScalarWhereWithAggregatesInput = {
    AND?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    OR?: CommentsScalarWhereWithAggregatesInput[]
    NOT?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comments"> | string
    title?: StringWithAggregatesFilter<"Comments"> | string
    sent_person?: StringWithAggregatesFilter<"Comments"> | string
    image?: StringNullableWithAggregatesFilter<"Comments"> | string | null
    stars?: IntWithAggregatesFilter<"Comments"> | number
    replyMessage?: StringNullableWithAggregatesFilter<"Comments"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Comments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comments"> | Date | string
    productId?: StringWithAggregatesFilter<"Comments"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    product_name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    oldPrice?: FloatFilter<"Product"> | number
    price?: FloatFilter<"Product"> | number
    quantity?: IntFilter<"Product"> | number
    color?: StringNullableListFilter<"Product">
    filters?: JsonFilter<"Product">
    ordered?: StringNullableListFilter<"Product">
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    categoryId?: StringFilter<"Product"> | string
    brandId?: StringFilter<"Product"> | string
    product_status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    product_images?: ProductImageListRelationFilter
    comments?: CommentsListRelationFilter
    likes?: LikedProductListRelationFilter
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    product_name?: SortOrder
    description?: SortOrder
    oldPrice?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    color?: SortOrder
    filters?: SortOrder
    ordered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    brandId?: SortOrder
    product_status?: SortOrder
    product_images?: ProductImageOrderByRelationAggregateInput
    comments?: CommentsOrderByRelationAggregateInput
    likes?: LikedProductOrderByRelationAggregateInput
    category?: CategoryOrderByWithRelationInput
    brand?: BrandOrderByWithRelationInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    product_name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    oldPrice?: FloatFilter<"Product"> | number
    price?: FloatFilter<"Product"> | number
    quantity?: IntFilter<"Product"> | number
    color?: StringNullableListFilter<"Product">
    filters?: JsonFilter<"Product">
    ordered?: StringNullableListFilter<"Product">
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    categoryId?: StringFilter<"Product"> | string
    brandId?: StringFilter<"Product"> | string
    product_status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    product_images?: ProductImageListRelationFilter
    comments?: CommentsListRelationFilter
    likes?: LikedProductListRelationFilter
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    product_name?: SortOrder
    description?: SortOrder
    oldPrice?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    color?: SortOrder
    filters?: SortOrder
    ordered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    brandId?: SortOrder
    product_status?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    product_name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    oldPrice?: FloatWithAggregatesFilter<"Product"> | number
    price?: FloatWithAggregatesFilter<"Product"> | number
    quantity?: IntWithAggregatesFilter<"Product"> | number
    color?: StringNullableListFilter<"Product">
    filters?: JsonWithAggregatesFilter<"Product">
    ordered?: StringNullableListFilter<"Product">
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    categoryId?: StringWithAggregatesFilter<"Product"> | string
    brandId?: StringWithAggregatesFilter<"Product"> | string
    product_status?: EnumProductStatusWithAggregatesFilter<"Product"> | $Enums.ProductStatus
  }

  export type ProductImageWhereInput = {
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    id?: StringFilter<"ProductImage"> | string
    imageUrl?: StringFilter<"ProductImage"> | string
    productId?: StringFilter<"ProductImage"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductImageOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    imageUrl?: StringFilter<"ProductImage"> | string
    productId?: StringFilter<"ProductImage"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductImageOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    productId?: SortOrder
    _count?: ProductImageCountOrderByAggregateInput
    _max?: ProductImageMaxOrderByAggregateInput
    _min?: ProductImageMinOrderByAggregateInput
  }

  export type ProductImageScalarWhereWithAggregatesInput = {
    AND?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    OR?: ProductImageScalarWhereWithAggregatesInput[]
    NOT?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductImage"> | string
    imageUrl?: StringWithAggregatesFilter<"ProductImage"> | string
    productId?: StringWithAggregatesFilter<"ProductImage"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    parentId?: StringNullableFilter<"Category"> | string | null
    icon?: StringNullableFilter<"Category"> | string | null
    title?: StringFilter<"Category"> | string
    children?: IntFilter<"Category"> | number
    product?: ProductListRelationFilter
    brand?: BrandCategoryListRelationFilter
    filter?: FilterCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    parentId?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    children?: SortOrder
    product?: ProductOrderByRelationAggregateInput
    brand?: BrandCategoryOrderByRelationAggregateInput
    filter?: FilterCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    parentId?: StringNullableFilter<"Category"> | string | null
    icon?: StringNullableFilter<"Category"> | string | null
    children?: IntFilter<"Category"> | number
    product?: ProductListRelationFilter
    brand?: BrandCategoryListRelationFilter
    filter?: FilterCategoryListRelationFilter
  }, "id" | "title">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    parentId?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    children?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    parentId?: StringNullableWithAggregatesFilter<"Category"> | string | null
    icon?: StringNullableWithAggregatesFilter<"Category"> | string | null
    title?: StringWithAggregatesFilter<"Category"> | string
    children?: IntWithAggregatesFilter<"Category"> | number
  }

  export type LikedProductWhereInput = {
    AND?: LikedProductWhereInput | LikedProductWhereInput[]
    OR?: LikedProductWhereInput[]
    NOT?: LikedProductWhereInput | LikedProductWhereInput[]
    id?: StringFilter<"LikedProduct"> | string
    userId?: StringNullableFilter<"LikedProduct"> | string | null
    productId?: StringFilter<"LikedProduct"> | string
    createdAt?: DateTimeFilter<"LikedProduct"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type LikedProductOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type LikedProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LikedProductWhereInput | LikedProductWhereInput[]
    OR?: LikedProductWhereInput[]
    NOT?: LikedProductWhereInput | LikedProductWhereInput[]
    userId?: StringNullableFilter<"LikedProduct"> | string | null
    productId?: StringFilter<"LikedProduct"> | string
    createdAt?: DateTimeFilter<"LikedProduct"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type LikedProductOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    _count?: LikedProductCountOrderByAggregateInput
    _max?: LikedProductMaxOrderByAggregateInput
    _min?: LikedProductMinOrderByAggregateInput
  }

  export type LikedProductScalarWhereWithAggregatesInput = {
    AND?: LikedProductScalarWhereWithAggregatesInput | LikedProductScalarWhereWithAggregatesInput[]
    OR?: LikedProductScalarWhereWithAggregatesInput[]
    NOT?: LikedProductScalarWhereWithAggregatesInput | LikedProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LikedProduct"> | string
    userId?: StringNullableWithAggregatesFilter<"LikedProduct"> | string | null
    productId?: StringWithAggregatesFilter<"LikedProduct"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LikedProduct"> | Date | string
  }

  export type BrandWhereInput = {
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    id?: StringFilter<"Brand"> | string
    name?: StringFilter<"Brand"> | string
    categories?: BrandCategoryListRelationFilter
    product?: ProductListRelationFilter
  }

  export type BrandOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    categories?: BrandCategoryOrderByRelationAggregateInput
    product?: ProductOrderByRelationAggregateInput
  }

  export type BrandWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    categories?: BrandCategoryListRelationFilter
    product?: ProductListRelationFilter
  }, "id" | "name">

  export type BrandOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: BrandCountOrderByAggregateInput
    _max?: BrandMaxOrderByAggregateInput
    _min?: BrandMinOrderByAggregateInput
  }

  export type BrandScalarWhereWithAggregatesInput = {
    AND?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    OR?: BrandScalarWhereWithAggregatesInput[]
    NOT?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Brand"> | string
    name?: StringWithAggregatesFilter<"Brand"> | string
  }

  export type BrandCategoryWhereInput = {
    AND?: BrandCategoryWhereInput | BrandCategoryWhereInput[]
    OR?: BrandCategoryWhereInput[]
    NOT?: BrandCategoryWhereInput | BrandCategoryWhereInput[]
    id?: StringFilter<"BrandCategory"> | string
    brandId?: StringFilter<"BrandCategory"> | string
    categoryId?: StringFilter<"BrandCategory"> | string
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type BrandCategoryOrderByWithRelationInput = {
    id?: SortOrder
    brandId?: SortOrder
    categoryId?: SortOrder
    brand?: BrandOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type BrandCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    brandId_categoryId?: BrandCategoryBrandIdCategoryIdCompoundUniqueInput
    AND?: BrandCategoryWhereInput | BrandCategoryWhereInput[]
    OR?: BrandCategoryWhereInput[]
    NOT?: BrandCategoryWhereInput | BrandCategoryWhereInput[]
    brandId?: StringFilter<"BrandCategory"> | string
    categoryId?: StringFilter<"BrandCategory"> | string
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "id" | "brandId_categoryId">

  export type BrandCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    brandId?: SortOrder
    categoryId?: SortOrder
    _count?: BrandCategoryCountOrderByAggregateInput
    _max?: BrandCategoryMaxOrderByAggregateInput
    _min?: BrandCategoryMinOrderByAggregateInput
  }

  export type BrandCategoryScalarWhereWithAggregatesInput = {
    AND?: BrandCategoryScalarWhereWithAggregatesInput | BrandCategoryScalarWhereWithAggregatesInput[]
    OR?: BrandCategoryScalarWhereWithAggregatesInput[]
    NOT?: BrandCategoryScalarWhereWithAggregatesInput | BrandCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BrandCategory"> | string
    brandId?: StringWithAggregatesFilter<"BrandCategory"> | string
    categoryId?: StringWithAggregatesFilter<"BrandCategory"> | string
  }

  export type FilterTypeWhereInput = {
    AND?: FilterTypeWhereInput | FilterTypeWhereInput[]
    OR?: FilterTypeWhereInput[]
    NOT?: FilterTypeWhereInput | FilterTypeWhereInput[]
    id?: StringFilter<"FilterType"> | string
    title?: StringFilter<"FilterType"> | string
    inputType?: EnumInputTypeFilter<"FilterType"> | $Enums.InputType
    type?: EnumTypeOfFilterFilter<"FilterType"> | $Enums.TypeOfFilter
    filterCategory?: FilterCategoryListRelationFilter
    values?: FilterValuesListRelationFilter
  }

  export type FilterTypeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    inputType?: SortOrder
    type?: SortOrder
    filterCategory?: FilterCategoryOrderByRelationAggregateInput
    values?: FilterValuesOrderByRelationAggregateInput
  }

  export type FilterTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: FilterTypeWhereInput | FilterTypeWhereInput[]
    OR?: FilterTypeWhereInput[]
    NOT?: FilterTypeWhereInput | FilterTypeWhereInput[]
    inputType?: EnumInputTypeFilter<"FilterType"> | $Enums.InputType
    type?: EnumTypeOfFilterFilter<"FilterType"> | $Enums.TypeOfFilter
    filterCategory?: FilterCategoryListRelationFilter
    values?: FilterValuesListRelationFilter
  }, "id" | "title">

  export type FilterTypeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    inputType?: SortOrder
    type?: SortOrder
    _count?: FilterTypeCountOrderByAggregateInput
    _max?: FilterTypeMaxOrderByAggregateInput
    _min?: FilterTypeMinOrderByAggregateInput
  }

  export type FilterTypeScalarWhereWithAggregatesInput = {
    AND?: FilterTypeScalarWhereWithAggregatesInput | FilterTypeScalarWhereWithAggregatesInput[]
    OR?: FilterTypeScalarWhereWithAggregatesInput[]
    NOT?: FilterTypeScalarWhereWithAggregatesInput | FilterTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FilterType"> | string
    title?: StringWithAggregatesFilter<"FilterType"> | string
    inputType?: EnumInputTypeWithAggregatesFilter<"FilterType"> | $Enums.InputType
    type?: EnumTypeOfFilterWithAggregatesFilter<"FilterType"> | $Enums.TypeOfFilter
  }

  export type FilterValuesWhereInput = {
    AND?: FilterValuesWhereInput | FilterValuesWhereInput[]
    OR?: FilterValuesWhereInput[]
    NOT?: FilterValuesWhereInput | FilterValuesWhereInput[]
    id?: StringFilter<"FilterValues"> | string
    value?: StringFilter<"FilterValues"> | string
    filterId?: StringFilter<"FilterValues"> | string
    filter?: XOR<FilterTypeScalarRelationFilter, FilterTypeWhereInput>
  }

  export type FilterValuesOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    filterId?: SortOrder
    filter?: FilterTypeOrderByWithRelationInput
  }

  export type FilterValuesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    value_filterId?: FilterValuesValueFilterIdCompoundUniqueInput
    AND?: FilterValuesWhereInput | FilterValuesWhereInput[]
    OR?: FilterValuesWhereInput[]
    NOT?: FilterValuesWhereInput | FilterValuesWhereInput[]
    value?: StringFilter<"FilterValues"> | string
    filterId?: StringFilter<"FilterValues"> | string
    filter?: XOR<FilterTypeScalarRelationFilter, FilterTypeWhereInput>
  }, "id" | "value_filterId">

  export type FilterValuesOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    filterId?: SortOrder
    _count?: FilterValuesCountOrderByAggregateInput
    _max?: FilterValuesMaxOrderByAggregateInput
    _min?: FilterValuesMinOrderByAggregateInput
  }

  export type FilterValuesScalarWhereWithAggregatesInput = {
    AND?: FilterValuesScalarWhereWithAggregatesInput | FilterValuesScalarWhereWithAggregatesInput[]
    OR?: FilterValuesScalarWhereWithAggregatesInput[]
    NOT?: FilterValuesScalarWhereWithAggregatesInput | FilterValuesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FilterValues"> | string
    value?: StringWithAggregatesFilter<"FilterValues"> | string
    filterId?: StringWithAggregatesFilter<"FilterValues"> | string
  }

  export type FilterCategoryWhereInput = {
    AND?: FilterCategoryWhereInput | FilterCategoryWhereInput[]
    OR?: FilterCategoryWhereInput[]
    NOT?: FilterCategoryWhereInput | FilterCategoryWhereInput[]
    id?: StringFilter<"FilterCategory"> | string
    categoryId?: StringFilter<"FilterCategory"> | string
    filterId?: StringFilter<"FilterCategory"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    filter?: XOR<FilterTypeScalarRelationFilter, FilterTypeWhereInput>
  }

  export type FilterCategoryOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    filterId?: SortOrder
    category?: CategoryOrderByWithRelationInput
    filter?: FilterTypeOrderByWithRelationInput
  }

  export type FilterCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    categoryId_filterId?: FilterCategoryCategoryIdFilterIdCompoundUniqueInput
    AND?: FilterCategoryWhereInput | FilterCategoryWhereInput[]
    OR?: FilterCategoryWhereInput[]
    NOT?: FilterCategoryWhereInput | FilterCategoryWhereInput[]
    categoryId?: StringFilter<"FilterCategory"> | string
    filterId?: StringFilter<"FilterCategory"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    filter?: XOR<FilterTypeScalarRelationFilter, FilterTypeWhereInput>
  }, "id" | "categoryId_filterId">

  export type FilterCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    filterId?: SortOrder
    _count?: FilterCategoryCountOrderByAggregateInput
    _max?: FilterCategoryMaxOrderByAggregateInput
    _min?: FilterCategoryMinOrderByAggregateInput
  }

  export type FilterCategoryScalarWhereWithAggregatesInput = {
    AND?: FilterCategoryScalarWhereWithAggregatesInput | FilterCategoryScalarWhereWithAggregatesInput[]
    OR?: FilterCategoryScalarWhereWithAggregatesInput[]
    NOT?: FilterCategoryScalarWhereWithAggregatesInput | FilterCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FilterCategory"> | string
    categoryId?: StringWithAggregatesFilter<"FilterCategory"> | string
    filterId?: StringWithAggregatesFilter<"FilterCategory"> | string
  }

  export type CouponWhereInput = {
    AND?: CouponWhereInput | CouponWhereInput[]
    OR?: CouponWhereInput[]
    NOT?: CouponWhereInput | CouponWhereInput[]
    id?: StringFilter<"Coupon"> | string
    code?: StringFilter<"Coupon"> | string
    discount_value?: FloatFilter<"Coupon"> | number
    min_order_amount?: FloatFilter<"Coupon"> | number
    usage_limit?: IntFilter<"Coupon"> | number
    end_date?: DateTimeFilter<"Coupon"> | Date | string
    status?: EnumCouponStatusFilter<"Coupon"> | $Enums.CouponStatus
  }

  export type CouponOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    discount_value?: SortOrder
    min_order_amount?: SortOrder
    usage_limit?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
  }

  export type CouponWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: CouponWhereInput | CouponWhereInput[]
    OR?: CouponWhereInput[]
    NOT?: CouponWhereInput | CouponWhereInput[]
    discount_value?: FloatFilter<"Coupon"> | number
    min_order_amount?: FloatFilter<"Coupon"> | number
    usage_limit?: IntFilter<"Coupon"> | number
    end_date?: DateTimeFilter<"Coupon"> | Date | string
    status?: EnumCouponStatusFilter<"Coupon"> | $Enums.CouponStatus
  }, "id" | "code">

  export type CouponOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    discount_value?: SortOrder
    min_order_amount?: SortOrder
    usage_limit?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    _count?: CouponCountOrderByAggregateInput
    _avg?: CouponAvgOrderByAggregateInput
    _max?: CouponMaxOrderByAggregateInput
    _min?: CouponMinOrderByAggregateInput
    _sum?: CouponSumOrderByAggregateInput
  }

  export type CouponScalarWhereWithAggregatesInput = {
    AND?: CouponScalarWhereWithAggregatesInput | CouponScalarWhereWithAggregatesInput[]
    OR?: CouponScalarWhereWithAggregatesInput[]
    NOT?: CouponScalarWhereWithAggregatesInput | CouponScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Coupon"> | string
    code?: StringWithAggregatesFilter<"Coupon"> | string
    discount_value?: FloatWithAggregatesFilter<"Coupon"> | number
    min_order_amount?: FloatWithAggregatesFilter<"Coupon"> | number
    usage_limit?: IntWithAggregatesFilter<"Coupon"> | number
    end_date?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
    status?: EnumCouponStatusWithAggregatesFilter<"Coupon"> | $Enums.CouponStatus
  }

  export type PosterWhereInput = {
    AND?: PosterWhereInput | PosterWhereInput[]
    OR?: PosterWhereInput[]
    NOT?: PosterWhereInput | PosterWhereInput[]
    id?: StringFilter<"Poster"> | string
    title?: StringFilter<"Poster"> | string
    img?: StringFilter<"Poster"> | string
  }

  export type PosterOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    img?: SortOrder
  }

  export type PosterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PosterWhereInput | PosterWhereInput[]
    OR?: PosterWhereInput[]
    NOT?: PosterWhereInput | PosterWhereInput[]
    title?: StringFilter<"Poster"> | string
    img?: StringFilter<"Poster"> | string
  }, "id">

  export type PosterOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    img?: SortOrder
    _count?: PosterCountOrderByAggregateInput
    _max?: PosterMaxOrderByAggregateInput
    _min?: PosterMinOrderByAggregateInput
  }

  export type PosterScalarWhereWithAggregatesInput = {
    AND?: PosterScalarWhereWithAggregatesInput | PosterScalarWhereWithAggregatesInput[]
    OR?: PosterScalarWhereWithAggregatesInput[]
    NOT?: PosterScalarWhereWithAggregatesInput | PosterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Poster"> | string
    title?: StringWithAggregatesFilter<"Poster"> | string
    img?: StringWithAggregatesFilter<"Poster"> | string
  }

  export type CommentsCreateInput = {
    id?: string
    title: string
    sent_person: string
    image?: string | null
    stars?: number
    replyMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateInput = {
    id?: string
    title: string
    sent_person: string
    image?: string | null
    stars?: number
    replyMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productId: string
  }

  export type CommentsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    sent_person?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    stars?: IntFieldUpdateOperationsInput | number
    replyMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    sent_person?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    stars?: IntFieldUpdateOperationsInput | number
    replyMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentsCreateManyInput = {
    id?: string
    title: string
    sent_person: string
    image?: string | null
    stars?: number
    replyMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productId: string
  }

  export type CommentsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    sent_person?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    stars?: IntFieldUpdateOperationsInput | number
    replyMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    sent_person?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    stars?: IntFieldUpdateOperationsInput | number
    replyMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    id?: string
    product_name: string
    description?: string
    oldPrice: number
    price: number
    quantity: number
    color?: ProductCreatecolorInput | string[]
    filters: InputJsonValue
    ordered?: ProductCreateorderedInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    product_status?: $Enums.ProductStatus
    product_images?: ProductImageCreateNestedManyWithoutProductInput
    comments?: CommentsCreateNestedManyWithoutProductInput
    likes?: LikedProductCreateNestedManyWithoutProductInput
    category: CategoryCreateNestedOneWithoutProductInput
    brand: BrandCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    product_name: string
    description?: string
    oldPrice: number
    price: number
    quantity: number
    color?: ProductCreatecolorInput | string[]
    filters: InputJsonValue
    ordered?: ProductCreateorderedInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    brandId: string
    product_status?: $Enums.ProductStatus
    product_images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    comments?: CommentsUncheckedCreateNestedManyWithoutProductInput
    likes?: LikedProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    oldPrice?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    color?: ProductUpdatecolorInput | string[]
    filters?: InputJsonValue | InputJsonValue
    ordered?: ProductUpdateorderedInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product_status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    product_images?: ProductImageUpdateManyWithoutProductNestedInput
    comments?: CommentsUpdateManyWithoutProductNestedInput
    likes?: LikedProductUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput
    brand?: BrandUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    oldPrice?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    color?: ProductUpdatecolorInput | string[]
    filters?: InputJsonValue | InputJsonValue
    ordered?: ProductUpdateorderedInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    product_status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    product_images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutProductNestedInput
    likes?: LikedProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    product_name: string
    description?: string
    oldPrice: number
    price: number
    quantity: number
    color?: ProductCreatecolorInput | string[]
    filters: InputJsonValue
    ordered?: ProductCreateorderedInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    brandId: string
    product_status?: $Enums.ProductStatus
  }

  export type ProductUpdateManyMutationInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    oldPrice?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    color?: ProductUpdatecolorInput | string[]
    filters?: InputJsonValue | InputJsonValue
    ordered?: ProductUpdateorderedInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product_status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
  }

  export type ProductUncheckedUpdateManyInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    oldPrice?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    color?: ProductUpdatecolorInput | string[]
    filters?: InputJsonValue | InputJsonValue
    ordered?: ProductUpdateorderedInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    product_status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
  }

  export type ProductImageCreateInput = {
    id?: string
    imageUrl: string
    product: ProductCreateNestedOneWithoutProduct_imagesInput
  }

  export type ProductImageUncheckedCreateInput = {
    id?: string
    imageUrl: string
    productId: string
  }

  export type ProductImageUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutProduct_imagesNestedInput
  }

  export type ProductImageUncheckedUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductImageCreateManyInput = {
    id?: string
    imageUrl: string
    productId: string
  }

  export type ProductImageUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ProductImageUncheckedUpdateManyInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    id?: string
    parentId?: string | null
    icon?: string | null
    title: string
    children?: number
    product?: ProductCreateNestedManyWithoutCategoryInput
    brand?: BrandCategoryCreateNestedManyWithoutCategoryInput
    filter?: FilterCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    parentId?: string | null
    icon?: string | null
    title: string
    children?: number
    product?: ProductUncheckedCreateNestedManyWithoutCategoryInput
    brand?: BrandCategoryUncheckedCreateNestedManyWithoutCategoryInput
    filter?: FilterCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    children?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateManyWithoutCategoryNestedInput
    brand?: BrandCategoryUpdateManyWithoutCategoryNestedInput
    filter?: FilterCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    children?: IntFieldUpdateOperationsInput | number
    product?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
    brand?: BrandCategoryUncheckedUpdateManyWithoutCategoryNestedInput
    filter?: FilterCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    parentId?: string | null
    icon?: string | null
    title: string
    children?: number
  }

  export type CategoryUpdateManyMutationInput = {
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    children?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryUncheckedUpdateManyInput = {
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    children?: IntFieldUpdateOperationsInput | number
  }

  export type LikedProductCreateInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutLikesInput
  }

  export type LikedProductUncheckedCreateInput = {
    id?: string
    userId?: string | null
    productId: string
    createdAt?: Date | string
  }

  export type LikedProductUpdateInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikedProductUncheckedUpdateInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedProductCreateManyInput = {
    id?: string
    userId?: string | null
    productId: string
    createdAt?: Date | string
  }

  export type LikedProductUpdateManyMutationInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedProductUncheckedUpdateManyInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandCreateInput = {
    id?: string
    name: string
    categories?: BrandCategoryCreateNestedManyWithoutBrandInput
    product?: ProductCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateInput = {
    id?: string
    name: string
    categories?: BrandCategoryUncheckedCreateNestedManyWithoutBrandInput
    product?: ProductUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    categories?: BrandCategoryUpdateManyWithoutBrandNestedInput
    product?: ProductUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    categories?: BrandCategoryUncheckedUpdateManyWithoutBrandNestedInput
    product?: ProductUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandCreateManyInput = {
    id?: string
    name: string
  }

  export type BrandUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BrandUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BrandCategoryCreateInput = {
    id?: string
    brand: BrandCreateNestedOneWithoutCategoriesInput
    category: CategoryCreateNestedOneWithoutBrandInput
  }

  export type BrandCategoryUncheckedCreateInput = {
    id?: string
    brandId: string
    categoryId: string
  }

  export type BrandCategoryUpdateInput = {
    brand?: BrandUpdateOneRequiredWithoutCategoriesNestedInput
    category?: CategoryUpdateOneRequiredWithoutBrandNestedInput
  }

  export type BrandCategoryUncheckedUpdateInput = {
    brandId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type BrandCategoryCreateManyInput = {
    id?: string
    brandId: string
    categoryId: string
  }

  export type BrandCategoryUpdateManyMutationInput = {

  }

  export type BrandCategoryUncheckedUpdateManyInput = {
    brandId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type FilterTypeCreateInput = {
    id?: string
    title: string
    inputType: $Enums.InputType
    type?: $Enums.TypeOfFilter
    filterCategory?: FilterCategoryCreateNestedManyWithoutFilterInput
    values?: FilterValuesCreateNestedManyWithoutFilterInput
  }

  export type FilterTypeUncheckedCreateInput = {
    id?: string
    title: string
    inputType: $Enums.InputType
    type?: $Enums.TypeOfFilter
    filterCategory?: FilterCategoryUncheckedCreateNestedManyWithoutFilterInput
    values?: FilterValuesUncheckedCreateNestedManyWithoutFilterInput
  }

  export type FilterTypeUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    inputType?: EnumInputTypeFieldUpdateOperationsInput | $Enums.InputType
    type?: EnumTypeOfFilterFieldUpdateOperationsInput | $Enums.TypeOfFilter
    filterCategory?: FilterCategoryUpdateManyWithoutFilterNestedInput
    values?: FilterValuesUpdateManyWithoutFilterNestedInput
  }

  export type FilterTypeUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    inputType?: EnumInputTypeFieldUpdateOperationsInput | $Enums.InputType
    type?: EnumTypeOfFilterFieldUpdateOperationsInput | $Enums.TypeOfFilter
    filterCategory?: FilterCategoryUncheckedUpdateManyWithoutFilterNestedInput
    values?: FilterValuesUncheckedUpdateManyWithoutFilterNestedInput
  }

  export type FilterTypeCreateManyInput = {
    id?: string
    title: string
    inputType: $Enums.InputType
    type?: $Enums.TypeOfFilter
  }

  export type FilterTypeUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    inputType?: EnumInputTypeFieldUpdateOperationsInput | $Enums.InputType
    type?: EnumTypeOfFilterFieldUpdateOperationsInput | $Enums.TypeOfFilter
  }

  export type FilterTypeUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    inputType?: EnumInputTypeFieldUpdateOperationsInput | $Enums.InputType
    type?: EnumTypeOfFilterFieldUpdateOperationsInput | $Enums.TypeOfFilter
  }

  export type FilterValuesCreateInput = {
    id?: string
    value: string
    filter: FilterTypeCreateNestedOneWithoutValuesInput
  }

  export type FilterValuesUncheckedCreateInput = {
    id?: string
    value: string
    filterId: string
  }

  export type FilterValuesUpdateInput = {
    value?: StringFieldUpdateOperationsInput | string
    filter?: FilterTypeUpdateOneRequiredWithoutValuesNestedInput
  }

  export type FilterValuesUncheckedUpdateInput = {
    value?: StringFieldUpdateOperationsInput | string
    filterId?: StringFieldUpdateOperationsInput | string
  }

  export type FilterValuesCreateManyInput = {
    id?: string
    value: string
    filterId: string
  }

  export type FilterValuesUpdateManyMutationInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type FilterValuesUncheckedUpdateManyInput = {
    value?: StringFieldUpdateOperationsInput | string
    filterId?: StringFieldUpdateOperationsInput | string
  }

  export type FilterCategoryCreateInput = {
    id?: string
    category: CategoryCreateNestedOneWithoutFilterInput
    filter: FilterTypeCreateNestedOneWithoutFilterCategoryInput
  }

  export type FilterCategoryUncheckedCreateInput = {
    id?: string
    categoryId: string
    filterId: string
  }

  export type FilterCategoryUpdateInput = {
    category?: CategoryUpdateOneRequiredWithoutFilterNestedInput
    filter?: FilterTypeUpdateOneRequiredWithoutFilterCategoryNestedInput
  }

  export type FilterCategoryUncheckedUpdateInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    filterId?: StringFieldUpdateOperationsInput | string
  }

  export type FilterCategoryCreateManyInput = {
    id?: string
    categoryId: string
    filterId: string
  }

  export type FilterCategoryUpdateManyMutationInput = {

  }

  export type FilterCategoryUncheckedUpdateManyInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    filterId?: StringFieldUpdateOperationsInput | string
  }

  export type CouponCreateInput = {
    id?: string
    code: string
    discount_value: number
    min_order_amount: number
    usage_limit: number
    end_date: Date | string
    status?: $Enums.CouponStatus
  }

  export type CouponUncheckedCreateInput = {
    id?: string
    code: string
    discount_value: number
    min_order_amount: number
    usage_limit: number
    end_date: Date | string
    status?: $Enums.CouponStatus
  }

  export type CouponUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    discount_value?: FloatFieldUpdateOperationsInput | number
    min_order_amount?: FloatFieldUpdateOperationsInput | number
    usage_limit?: IntFieldUpdateOperationsInput | number
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCouponStatusFieldUpdateOperationsInput | $Enums.CouponStatus
  }

  export type CouponUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    discount_value?: FloatFieldUpdateOperationsInput | number
    min_order_amount?: FloatFieldUpdateOperationsInput | number
    usage_limit?: IntFieldUpdateOperationsInput | number
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCouponStatusFieldUpdateOperationsInput | $Enums.CouponStatus
  }

  export type CouponCreateManyInput = {
    id?: string
    code: string
    discount_value: number
    min_order_amount: number
    usage_limit: number
    end_date: Date | string
    status?: $Enums.CouponStatus
  }

  export type CouponUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    discount_value?: FloatFieldUpdateOperationsInput | number
    min_order_amount?: FloatFieldUpdateOperationsInput | number
    usage_limit?: IntFieldUpdateOperationsInput | number
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCouponStatusFieldUpdateOperationsInput | $Enums.CouponStatus
  }

  export type CouponUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    discount_value?: FloatFieldUpdateOperationsInput | number
    min_order_amount?: FloatFieldUpdateOperationsInput | number
    usage_limit?: IntFieldUpdateOperationsInput | number
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCouponStatusFieldUpdateOperationsInput | $Enums.CouponStatus
  }

  export type PosterCreateInput = {
    id?: string
    title: string
    img: string
  }

  export type PosterUncheckedCreateInput = {
    id?: string
    title: string
    img: string
  }

  export type PosterUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type PosterUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type PosterCreateManyInput = {
    id?: string
    title: string
    img: string
  }

  export type PosterUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type PosterUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
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
    isSet?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type CommentsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    sent_person?: SortOrder
    image?: SortOrder
    stars?: SortOrder
    replyMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
  }

  export type CommentsAvgOrderByAggregateInput = {
    stars?: SortOrder
  }

  export type CommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    sent_person?: SortOrder
    image?: SortOrder
    stars?: SortOrder
    replyMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
  }

  export type CommentsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    sent_person?: SortOrder
    image?: SortOrder
    stars?: SortOrder
    replyMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
  }

  export type CommentsSumOrderByAggregateInput = {
    stars?: SortOrder
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
    isSet?: boolean
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type EnumProductStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusFilter<$PrismaModel> | $Enums.ProductStatus
  }

  export type ProductImageListRelationFilter = {
    every?: ProductImageWhereInput
    some?: ProductImageWhereInput
    none?: ProductImageWhereInput
  }

  export type CommentsListRelationFilter = {
    every?: CommentsWhereInput
    some?: CommentsWhereInput
    none?: CommentsWhereInput
  }

  export type LikedProductListRelationFilter = {
    every?: LikedProductWhereInput
    some?: LikedProductWhereInput
    none?: LikedProductWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type BrandScalarRelationFilter = {
    is?: BrandWhereInput
    isNot?: BrandWhereInput
  }

  export type ProductImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikedProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    product_name?: SortOrder
    description?: SortOrder
    oldPrice?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    color?: SortOrder
    filters?: SortOrder
    ordered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    brandId?: SortOrder
    product_status?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    oldPrice?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    product_name?: SortOrder
    description?: SortOrder
    oldPrice?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    brandId?: SortOrder
    product_status?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    product_name?: SortOrder
    description?: SortOrder
    oldPrice?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    brandId?: SortOrder
    product_status?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    oldPrice?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
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

  export type EnumProductStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProductStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductStatusFilter<$PrismaModel>
    _max?: NestedEnumProductStatusFilter<$PrismaModel>
  }

  export type ProductImageCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    productId?: SortOrder
  }

  export type ProductImageMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    productId?: SortOrder
  }

  export type ProductImageMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    productId?: SortOrder
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type BrandCategoryListRelationFilter = {
    every?: BrandCategoryWhereInput
    some?: BrandCategoryWhereInput
    none?: BrandCategoryWhereInput
  }

  export type FilterCategoryListRelationFilter = {
    every?: FilterCategoryWhereInput
    some?: FilterCategoryWhereInput
    none?: FilterCategoryWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrandCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FilterCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    children?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    children?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    children?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    children?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    children?: SortOrder
  }

  export type LikedProductCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikedProductMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikedProductMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type BrandCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BrandMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BrandMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BrandCategoryBrandIdCategoryIdCompoundUniqueInput = {
    brandId: string
    categoryId: string
  }

  export type BrandCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    categoryId?: SortOrder
  }

  export type BrandCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    categoryId?: SortOrder
  }

  export type BrandCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    categoryId?: SortOrder
  }

  export type EnumInputTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InputType | EnumInputTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InputType[] | ListEnumInputTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InputType[] | ListEnumInputTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInputTypeFilter<$PrismaModel> | $Enums.InputType
  }

  export type EnumTypeOfFilterFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeOfFilter | EnumTypeOfFilterFieldRefInput<$PrismaModel>
    in?: $Enums.TypeOfFilter[] | ListEnumTypeOfFilterFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeOfFilter[] | ListEnumTypeOfFilterFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeOfFilterFilter<$PrismaModel> | $Enums.TypeOfFilter
  }

  export type FilterValuesListRelationFilter = {
    every?: FilterValuesWhereInput
    some?: FilterValuesWhereInput
    none?: FilterValuesWhereInput
  }

  export type FilterValuesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FilterTypeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    inputType?: SortOrder
    type?: SortOrder
  }

  export type FilterTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    inputType?: SortOrder
    type?: SortOrder
  }

  export type FilterTypeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    inputType?: SortOrder
    type?: SortOrder
  }

  export type EnumInputTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InputType | EnumInputTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InputType[] | ListEnumInputTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InputType[] | ListEnumInputTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInputTypeWithAggregatesFilter<$PrismaModel> | $Enums.InputType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInputTypeFilter<$PrismaModel>
    _max?: NestedEnumInputTypeFilter<$PrismaModel>
  }

  export type EnumTypeOfFilterWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeOfFilter | EnumTypeOfFilterFieldRefInput<$PrismaModel>
    in?: $Enums.TypeOfFilter[] | ListEnumTypeOfFilterFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeOfFilter[] | ListEnumTypeOfFilterFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeOfFilterWithAggregatesFilter<$PrismaModel> | $Enums.TypeOfFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeOfFilterFilter<$PrismaModel>
    _max?: NestedEnumTypeOfFilterFilter<$PrismaModel>
  }

  export type FilterTypeScalarRelationFilter = {
    is?: FilterTypeWhereInput
    isNot?: FilterTypeWhereInput
  }

  export type FilterValuesValueFilterIdCompoundUniqueInput = {
    value: string
    filterId: string
  }

  export type FilterValuesCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    filterId?: SortOrder
  }

  export type FilterValuesMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    filterId?: SortOrder
  }

  export type FilterValuesMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    filterId?: SortOrder
  }

  export type FilterCategoryCategoryIdFilterIdCompoundUniqueInput = {
    categoryId: string
    filterId: string
  }

  export type FilterCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    filterId?: SortOrder
  }

  export type FilterCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    filterId?: SortOrder
  }

  export type FilterCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    filterId?: SortOrder
  }

  export type EnumCouponStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CouponStatus | EnumCouponStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CouponStatus[] | ListEnumCouponStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CouponStatus[] | ListEnumCouponStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCouponStatusFilter<$PrismaModel> | $Enums.CouponStatus
  }

  export type CouponCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discount_value?: SortOrder
    min_order_amount?: SortOrder
    usage_limit?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
  }

  export type CouponAvgOrderByAggregateInput = {
    discount_value?: SortOrder
    min_order_amount?: SortOrder
    usage_limit?: SortOrder
  }

  export type CouponMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discount_value?: SortOrder
    min_order_amount?: SortOrder
    usage_limit?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
  }

  export type CouponMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discount_value?: SortOrder
    min_order_amount?: SortOrder
    usage_limit?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
  }

  export type CouponSumOrderByAggregateInput = {
    discount_value?: SortOrder
    min_order_amount?: SortOrder
    usage_limit?: SortOrder
  }

  export type EnumCouponStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CouponStatus | EnumCouponStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CouponStatus[] | ListEnumCouponStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CouponStatus[] | ListEnumCouponStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCouponStatusWithAggregatesFilter<$PrismaModel> | $Enums.CouponStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCouponStatusFilter<$PrismaModel>
    _max?: NestedEnumCouponStatusFilter<$PrismaModel>
  }

  export type PosterCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    img?: SortOrder
  }

  export type PosterMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    img?: SortOrder
  }

  export type PosterMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    img?: SortOrder
  }

  export type ProductCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ProductCreateWithoutCommentsInput, ProductUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCommentsInput
    connect?: ProductWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<ProductCreateWithoutCommentsInput, ProductUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCommentsInput
    upsert?: ProductUpsertWithoutCommentsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutCommentsInput, ProductUpdateWithoutCommentsInput>, ProductUncheckedUpdateWithoutCommentsInput>
  }

  export type ProductCreatecolorInput = {
    set: string[]
  }

  export type ProductCreateorderedInput = {
    set: string[]
  }

  export type ProductImageCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type CommentsCreateNestedManyWithoutProductInput = {
    create?: XOR<CommentsCreateWithoutProductInput, CommentsUncheckedCreateWithoutProductInput> | CommentsCreateWithoutProductInput[] | CommentsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutProductInput | CommentsCreateOrConnectWithoutProductInput[]
    createMany?: CommentsCreateManyProductInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type LikedProductCreateNestedManyWithoutProductInput = {
    create?: XOR<LikedProductCreateWithoutProductInput, LikedProductUncheckedCreateWithoutProductInput> | LikedProductCreateWithoutProductInput[] | LikedProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: LikedProductCreateOrConnectWithoutProductInput | LikedProductCreateOrConnectWithoutProductInput[]
    createMany?: LikedProductCreateManyProductInputEnvelope
    connect?: LikedProductWhereUniqueInput | LikedProductWhereUniqueInput[]
  }

  export type CategoryCreateNestedOneWithoutProductInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput
    connect?: CategoryWhereUniqueInput
  }

  export type BrandCreateNestedOneWithoutProductInput = {
    create?: XOR<BrandCreateWithoutProductInput, BrandUncheckedCreateWithoutProductInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductInput
    connect?: BrandWhereUniqueInput
  }

  export type ProductImageUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CommentsCreateWithoutProductInput, CommentsUncheckedCreateWithoutProductInput> | CommentsCreateWithoutProductInput[] | CommentsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutProductInput | CommentsCreateOrConnectWithoutProductInput[]
    createMany?: CommentsCreateManyProductInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type LikedProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<LikedProductCreateWithoutProductInput, LikedProductUncheckedCreateWithoutProductInput> | LikedProductCreateWithoutProductInput[] | LikedProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: LikedProductCreateOrConnectWithoutProductInput | LikedProductCreateOrConnectWithoutProductInput[]
    createMany?: LikedProductCreateManyProductInputEnvelope
    connect?: LikedProductWhereUniqueInput | LikedProductWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdatecolorInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProductUpdateorderedInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumProductStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProductStatus
  }

  export type ProductImageUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutProductInput | ProductImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutProductInput | ProductImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutProductInput | ProductImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type CommentsUpdateManyWithoutProductNestedInput = {
    create?: XOR<CommentsCreateWithoutProductInput, CommentsUncheckedCreateWithoutProductInput> | CommentsCreateWithoutProductInput[] | CommentsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutProductInput | CommentsCreateOrConnectWithoutProductInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutProductInput | CommentsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CommentsCreateManyProductInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutProductInput | CommentsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutProductInput | CommentsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type LikedProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<LikedProductCreateWithoutProductInput, LikedProductUncheckedCreateWithoutProductInput> | LikedProductCreateWithoutProductInput[] | LikedProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: LikedProductCreateOrConnectWithoutProductInput | LikedProductCreateOrConnectWithoutProductInput[]
    upsert?: LikedProductUpsertWithWhereUniqueWithoutProductInput | LikedProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: LikedProductCreateManyProductInputEnvelope
    set?: LikedProductWhereUniqueInput | LikedProductWhereUniqueInput[]
    disconnect?: LikedProductWhereUniqueInput | LikedProductWhereUniqueInput[]
    delete?: LikedProductWhereUniqueInput | LikedProductWhereUniqueInput[]
    connect?: LikedProductWhereUniqueInput | LikedProductWhereUniqueInput[]
    update?: LikedProductUpdateWithWhereUniqueWithoutProductInput | LikedProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: LikedProductUpdateManyWithWhereWithoutProductInput | LikedProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: LikedProductScalarWhereInput | LikedProductScalarWhereInput[]
  }

  export type CategoryUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput
    upsert?: CategoryUpsertWithoutProductInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductInput, CategoryUpdateWithoutProductInput>, CategoryUncheckedUpdateWithoutProductInput>
  }

  export type BrandUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<BrandCreateWithoutProductInput, BrandUncheckedCreateWithoutProductInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductInput
    upsert?: BrandUpsertWithoutProductInput
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutProductInput, BrandUpdateWithoutProductInput>, BrandUncheckedUpdateWithoutProductInput>
  }

  export type ProductImageUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutProductInput | ProductImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutProductInput | ProductImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutProductInput | ProductImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CommentsCreateWithoutProductInput, CommentsUncheckedCreateWithoutProductInput> | CommentsCreateWithoutProductInput[] | CommentsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutProductInput | CommentsCreateOrConnectWithoutProductInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutProductInput | CommentsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CommentsCreateManyProductInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutProductInput | CommentsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutProductInput | CommentsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type LikedProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<LikedProductCreateWithoutProductInput, LikedProductUncheckedCreateWithoutProductInput> | LikedProductCreateWithoutProductInput[] | LikedProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: LikedProductCreateOrConnectWithoutProductInput | LikedProductCreateOrConnectWithoutProductInput[]
    upsert?: LikedProductUpsertWithWhereUniqueWithoutProductInput | LikedProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: LikedProductCreateManyProductInputEnvelope
    set?: LikedProductWhereUniqueInput | LikedProductWhereUniqueInput[]
    disconnect?: LikedProductWhereUniqueInput | LikedProductWhereUniqueInput[]
    delete?: LikedProductWhereUniqueInput | LikedProductWhereUniqueInput[]
    connect?: LikedProductWhereUniqueInput | LikedProductWhereUniqueInput[]
    update?: LikedProductUpdateWithWhereUniqueWithoutProductInput | LikedProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: LikedProductUpdateManyWithWhereWithoutProductInput | LikedProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: LikedProductScalarWhereInput | LikedProductScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutProduct_imagesInput = {
    create?: XOR<ProductCreateWithoutProduct_imagesInput, ProductUncheckedCreateWithoutProduct_imagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProduct_imagesInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutProduct_imagesNestedInput = {
    create?: XOR<ProductCreateWithoutProduct_imagesInput, ProductUncheckedCreateWithoutProduct_imagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProduct_imagesInput
    upsert?: ProductUpsertWithoutProduct_imagesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProduct_imagesInput, ProductUpdateWithoutProduct_imagesInput>, ProductUncheckedUpdateWithoutProduct_imagesInput>
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type BrandCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BrandCategoryCreateWithoutCategoryInput, BrandCategoryUncheckedCreateWithoutCategoryInput> | BrandCategoryCreateWithoutCategoryInput[] | BrandCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BrandCategoryCreateOrConnectWithoutCategoryInput | BrandCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: BrandCategoryCreateManyCategoryInputEnvelope
    connect?: BrandCategoryWhereUniqueInput | BrandCategoryWhereUniqueInput[]
  }

  export type FilterCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FilterCategoryCreateWithoutCategoryInput, FilterCategoryUncheckedCreateWithoutCategoryInput> | FilterCategoryCreateWithoutCategoryInput[] | FilterCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FilterCategoryCreateOrConnectWithoutCategoryInput | FilterCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: FilterCategoryCreateManyCategoryInputEnvelope
    connect?: FilterCategoryWhereUniqueInput | FilterCategoryWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type BrandCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BrandCategoryCreateWithoutCategoryInput, BrandCategoryUncheckedCreateWithoutCategoryInput> | BrandCategoryCreateWithoutCategoryInput[] | BrandCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BrandCategoryCreateOrConnectWithoutCategoryInput | BrandCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: BrandCategoryCreateManyCategoryInputEnvelope
    connect?: BrandCategoryWhereUniqueInput | BrandCategoryWhereUniqueInput[]
  }

  export type FilterCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FilterCategoryCreateWithoutCategoryInput, FilterCategoryUncheckedCreateWithoutCategoryInput> | FilterCategoryCreateWithoutCategoryInput[] | FilterCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FilterCategoryCreateOrConnectWithoutCategoryInput | FilterCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: FilterCategoryCreateManyCategoryInputEnvelope
    connect?: FilterCategoryWhereUniqueInput | FilterCategoryWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type BrandCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BrandCategoryCreateWithoutCategoryInput, BrandCategoryUncheckedCreateWithoutCategoryInput> | BrandCategoryCreateWithoutCategoryInput[] | BrandCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BrandCategoryCreateOrConnectWithoutCategoryInput | BrandCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: BrandCategoryUpsertWithWhereUniqueWithoutCategoryInput | BrandCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BrandCategoryCreateManyCategoryInputEnvelope
    set?: BrandCategoryWhereUniqueInput | BrandCategoryWhereUniqueInput[]
    disconnect?: BrandCategoryWhereUniqueInput | BrandCategoryWhereUniqueInput[]
    delete?: BrandCategoryWhereUniqueInput | BrandCategoryWhereUniqueInput[]
    connect?: BrandCategoryWhereUniqueInput | BrandCategoryWhereUniqueInput[]
    update?: BrandCategoryUpdateWithWhereUniqueWithoutCategoryInput | BrandCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BrandCategoryUpdateManyWithWhereWithoutCategoryInput | BrandCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BrandCategoryScalarWhereInput | BrandCategoryScalarWhereInput[]
  }

  export type FilterCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FilterCategoryCreateWithoutCategoryInput, FilterCategoryUncheckedCreateWithoutCategoryInput> | FilterCategoryCreateWithoutCategoryInput[] | FilterCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FilterCategoryCreateOrConnectWithoutCategoryInput | FilterCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: FilterCategoryUpsertWithWhereUniqueWithoutCategoryInput | FilterCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FilterCategoryCreateManyCategoryInputEnvelope
    set?: FilterCategoryWhereUniqueInput | FilterCategoryWhereUniqueInput[]
    disconnect?: FilterCategoryWhereUniqueInput | FilterCategoryWhereUniqueInput[]
    delete?: FilterCategoryWhereUniqueInput | FilterCategoryWhereUniqueInput[]
    connect?: FilterCategoryWhereUniqueInput | FilterCategoryWhereUniqueInput[]
    update?: FilterCategoryUpdateWithWhereUniqueWithoutCategoryInput | FilterCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FilterCategoryUpdateManyWithWhereWithoutCategoryInput | FilterCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FilterCategoryScalarWhereInput | FilterCategoryScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type BrandCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BrandCategoryCreateWithoutCategoryInput, BrandCategoryUncheckedCreateWithoutCategoryInput> | BrandCategoryCreateWithoutCategoryInput[] | BrandCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BrandCategoryCreateOrConnectWithoutCategoryInput | BrandCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: BrandCategoryUpsertWithWhereUniqueWithoutCategoryInput | BrandCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BrandCategoryCreateManyCategoryInputEnvelope
    set?: BrandCategoryWhereUniqueInput | BrandCategoryWhereUniqueInput[]
    disconnect?: BrandCategoryWhereUniqueInput | BrandCategoryWhereUniqueInput[]
    delete?: BrandCategoryWhereUniqueInput | BrandCategoryWhereUniqueInput[]
    connect?: BrandCategoryWhereUniqueInput | BrandCategoryWhereUniqueInput[]
    update?: BrandCategoryUpdateWithWhereUniqueWithoutCategoryInput | BrandCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BrandCategoryUpdateManyWithWhereWithoutCategoryInput | BrandCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BrandCategoryScalarWhereInput | BrandCategoryScalarWhereInput[]
  }

  export type FilterCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FilterCategoryCreateWithoutCategoryInput, FilterCategoryUncheckedCreateWithoutCategoryInput> | FilterCategoryCreateWithoutCategoryInput[] | FilterCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FilterCategoryCreateOrConnectWithoutCategoryInput | FilterCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: FilterCategoryUpsertWithWhereUniqueWithoutCategoryInput | FilterCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FilterCategoryCreateManyCategoryInputEnvelope
    set?: FilterCategoryWhereUniqueInput | FilterCategoryWhereUniqueInput[]
    disconnect?: FilterCategoryWhereUniqueInput | FilterCategoryWhereUniqueInput[]
    delete?: FilterCategoryWhereUniqueInput | FilterCategoryWhereUniqueInput[]
    connect?: FilterCategoryWhereUniqueInput | FilterCategoryWhereUniqueInput[]
    update?: FilterCategoryUpdateWithWhereUniqueWithoutCategoryInput | FilterCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FilterCategoryUpdateManyWithWhereWithoutCategoryInput | FilterCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FilterCategoryScalarWhereInput | FilterCategoryScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutLikesInput = {
    create?: XOR<ProductCreateWithoutLikesInput, ProductUncheckedCreateWithoutLikesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutLikesInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<ProductCreateWithoutLikesInput, ProductUncheckedCreateWithoutLikesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutLikesInput
    upsert?: ProductUpsertWithoutLikesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutLikesInput, ProductUpdateWithoutLikesInput>, ProductUncheckedUpdateWithoutLikesInput>
  }

  export type BrandCategoryCreateNestedManyWithoutBrandInput = {
    create?: XOR<BrandCategoryCreateWithoutBrandInput, BrandCategoryUncheckedCreateWithoutBrandInput> | BrandCategoryCreateWithoutBrandInput[] | BrandCategoryUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: BrandCategoryCreateOrConnectWithoutBrandInput | BrandCategoryCreateOrConnectWithoutBrandInput[]
    createMany?: BrandCategoryCreateManyBrandInputEnvelope
    connect?: BrandCategoryWhereUniqueInput | BrandCategoryWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type BrandCategoryUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<BrandCategoryCreateWithoutBrandInput, BrandCategoryUncheckedCreateWithoutBrandInput> | BrandCategoryCreateWithoutBrandInput[] | BrandCategoryUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: BrandCategoryCreateOrConnectWithoutBrandInput | BrandCategoryCreateOrConnectWithoutBrandInput[]
    createMany?: BrandCategoryCreateManyBrandInputEnvelope
    connect?: BrandCategoryWhereUniqueInput | BrandCategoryWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type BrandCategoryUpdateManyWithoutBrandNestedInput = {
    create?: XOR<BrandCategoryCreateWithoutBrandInput, BrandCategoryUncheckedCreateWithoutBrandInput> | BrandCategoryCreateWithoutBrandInput[] | BrandCategoryUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: BrandCategoryCreateOrConnectWithoutBrandInput | BrandCategoryCreateOrConnectWithoutBrandInput[]
    upsert?: BrandCategoryUpsertWithWhereUniqueWithoutBrandInput | BrandCategoryUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: BrandCategoryCreateManyBrandInputEnvelope
    set?: BrandCategoryWhereUniqueInput | BrandCategoryWhereUniqueInput[]
    disconnect?: BrandCategoryWhereUniqueInput | BrandCategoryWhereUniqueInput[]
    delete?: BrandCategoryWhereUniqueInput | BrandCategoryWhereUniqueInput[]
    connect?: BrandCategoryWhereUniqueInput | BrandCategoryWhereUniqueInput[]
    update?: BrandCategoryUpdateWithWhereUniqueWithoutBrandInput | BrandCategoryUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: BrandCategoryUpdateManyWithWhereWithoutBrandInput | BrandCategoryUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: BrandCategoryScalarWhereInput | BrandCategoryScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBrandInput | ProductUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBrandInput | ProductUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBrandInput | ProductUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type BrandCategoryUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<BrandCategoryCreateWithoutBrandInput, BrandCategoryUncheckedCreateWithoutBrandInput> | BrandCategoryCreateWithoutBrandInput[] | BrandCategoryUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: BrandCategoryCreateOrConnectWithoutBrandInput | BrandCategoryCreateOrConnectWithoutBrandInput[]
    upsert?: BrandCategoryUpsertWithWhereUniqueWithoutBrandInput | BrandCategoryUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: BrandCategoryCreateManyBrandInputEnvelope
    set?: BrandCategoryWhereUniqueInput | BrandCategoryWhereUniqueInput[]
    disconnect?: BrandCategoryWhereUniqueInput | BrandCategoryWhereUniqueInput[]
    delete?: BrandCategoryWhereUniqueInput | BrandCategoryWhereUniqueInput[]
    connect?: BrandCategoryWhereUniqueInput | BrandCategoryWhereUniqueInput[]
    update?: BrandCategoryUpdateWithWhereUniqueWithoutBrandInput | BrandCategoryUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: BrandCategoryUpdateManyWithWhereWithoutBrandInput | BrandCategoryUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: BrandCategoryScalarWhereInput | BrandCategoryScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBrandInput | ProductUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBrandInput | ProductUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBrandInput | ProductUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type BrandCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<BrandCreateWithoutCategoriesInput, BrandUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: BrandCreateOrConnectWithoutCategoriesInput
    connect?: BrandWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutBrandInput = {
    create?: XOR<CategoryCreateWithoutBrandInput, CategoryUncheckedCreateWithoutBrandInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBrandInput
    connect?: CategoryWhereUniqueInput
  }

  export type BrandUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<BrandCreateWithoutCategoriesInput, BrandUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: BrandCreateOrConnectWithoutCategoriesInput
    upsert?: BrandUpsertWithoutCategoriesInput
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutCategoriesInput, BrandUpdateWithoutCategoriesInput>, BrandUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategoryUpdateOneRequiredWithoutBrandNestedInput = {
    create?: XOR<CategoryCreateWithoutBrandInput, CategoryUncheckedCreateWithoutBrandInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBrandInput
    upsert?: CategoryUpsertWithoutBrandInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutBrandInput, CategoryUpdateWithoutBrandInput>, CategoryUncheckedUpdateWithoutBrandInput>
  }

  export type FilterCategoryCreateNestedManyWithoutFilterInput = {
    create?: XOR<FilterCategoryCreateWithoutFilterInput, FilterCategoryUncheckedCreateWithoutFilterInput> | FilterCategoryCreateWithoutFilterInput[] | FilterCategoryUncheckedCreateWithoutFilterInput[]
    connectOrCreate?: FilterCategoryCreateOrConnectWithoutFilterInput | FilterCategoryCreateOrConnectWithoutFilterInput[]
    createMany?: FilterCategoryCreateManyFilterInputEnvelope
    connect?: FilterCategoryWhereUniqueInput | FilterCategoryWhereUniqueInput[]
  }

  export type FilterValuesCreateNestedManyWithoutFilterInput = {
    create?: XOR<FilterValuesCreateWithoutFilterInput, FilterValuesUncheckedCreateWithoutFilterInput> | FilterValuesCreateWithoutFilterInput[] | FilterValuesUncheckedCreateWithoutFilterInput[]
    connectOrCreate?: FilterValuesCreateOrConnectWithoutFilterInput | FilterValuesCreateOrConnectWithoutFilterInput[]
    createMany?: FilterValuesCreateManyFilterInputEnvelope
    connect?: FilterValuesWhereUniqueInput | FilterValuesWhereUniqueInput[]
  }

  export type FilterCategoryUncheckedCreateNestedManyWithoutFilterInput = {
    create?: XOR<FilterCategoryCreateWithoutFilterInput, FilterCategoryUncheckedCreateWithoutFilterInput> | FilterCategoryCreateWithoutFilterInput[] | FilterCategoryUncheckedCreateWithoutFilterInput[]
    connectOrCreate?: FilterCategoryCreateOrConnectWithoutFilterInput | FilterCategoryCreateOrConnectWithoutFilterInput[]
    createMany?: FilterCategoryCreateManyFilterInputEnvelope
    connect?: FilterCategoryWhereUniqueInput | FilterCategoryWhereUniqueInput[]
  }

  export type FilterValuesUncheckedCreateNestedManyWithoutFilterInput = {
    create?: XOR<FilterValuesCreateWithoutFilterInput, FilterValuesUncheckedCreateWithoutFilterInput> | FilterValuesCreateWithoutFilterInput[] | FilterValuesUncheckedCreateWithoutFilterInput[]
    connectOrCreate?: FilterValuesCreateOrConnectWithoutFilterInput | FilterValuesCreateOrConnectWithoutFilterInput[]
    createMany?: FilterValuesCreateManyFilterInputEnvelope
    connect?: FilterValuesWhereUniqueInput | FilterValuesWhereUniqueInput[]
  }

  export type EnumInputTypeFieldUpdateOperationsInput = {
    set?: $Enums.InputType
  }

  export type EnumTypeOfFilterFieldUpdateOperationsInput = {
    set?: $Enums.TypeOfFilter
  }

  export type FilterCategoryUpdateManyWithoutFilterNestedInput = {
    create?: XOR<FilterCategoryCreateWithoutFilterInput, FilterCategoryUncheckedCreateWithoutFilterInput> | FilterCategoryCreateWithoutFilterInput[] | FilterCategoryUncheckedCreateWithoutFilterInput[]
    connectOrCreate?: FilterCategoryCreateOrConnectWithoutFilterInput | FilterCategoryCreateOrConnectWithoutFilterInput[]
    upsert?: FilterCategoryUpsertWithWhereUniqueWithoutFilterInput | FilterCategoryUpsertWithWhereUniqueWithoutFilterInput[]
    createMany?: FilterCategoryCreateManyFilterInputEnvelope
    set?: FilterCategoryWhereUniqueInput | FilterCategoryWhereUniqueInput[]
    disconnect?: FilterCategoryWhereUniqueInput | FilterCategoryWhereUniqueInput[]
    delete?: FilterCategoryWhereUniqueInput | FilterCategoryWhereUniqueInput[]
    connect?: FilterCategoryWhereUniqueInput | FilterCategoryWhereUniqueInput[]
    update?: FilterCategoryUpdateWithWhereUniqueWithoutFilterInput | FilterCategoryUpdateWithWhereUniqueWithoutFilterInput[]
    updateMany?: FilterCategoryUpdateManyWithWhereWithoutFilterInput | FilterCategoryUpdateManyWithWhereWithoutFilterInput[]
    deleteMany?: FilterCategoryScalarWhereInput | FilterCategoryScalarWhereInput[]
  }

  export type FilterValuesUpdateManyWithoutFilterNestedInput = {
    create?: XOR<FilterValuesCreateWithoutFilterInput, FilterValuesUncheckedCreateWithoutFilterInput> | FilterValuesCreateWithoutFilterInput[] | FilterValuesUncheckedCreateWithoutFilterInput[]
    connectOrCreate?: FilterValuesCreateOrConnectWithoutFilterInput | FilterValuesCreateOrConnectWithoutFilterInput[]
    upsert?: FilterValuesUpsertWithWhereUniqueWithoutFilterInput | FilterValuesUpsertWithWhereUniqueWithoutFilterInput[]
    createMany?: FilterValuesCreateManyFilterInputEnvelope
    set?: FilterValuesWhereUniqueInput | FilterValuesWhereUniqueInput[]
    disconnect?: FilterValuesWhereUniqueInput | FilterValuesWhereUniqueInput[]
    delete?: FilterValuesWhereUniqueInput | FilterValuesWhereUniqueInput[]
    connect?: FilterValuesWhereUniqueInput | FilterValuesWhereUniqueInput[]
    update?: FilterValuesUpdateWithWhereUniqueWithoutFilterInput | FilterValuesUpdateWithWhereUniqueWithoutFilterInput[]
    updateMany?: FilterValuesUpdateManyWithWhereWithoutFilterInput | FilterValuesUpdateManyWithWhereWithoutFilterInput[]
    deleteMany?: FilterValuesScalarWhereInput | FilterValuesScalarWhereInput[]
  }

  export type FilterCategoryUncheckedUpdateManyWithoutFilterNestedInput = {
    create?: XOR<FilterCategoryCreateWithoutFilterInput, FilterCategoryUncheckedCreateWithoutFilterInput> | FilterCategoryCreateWithoutFilterInput[] | FilterCategoryUncheckedCreateWithoutFilterInput[]
    connectOrCreate?: FilterCategoryCreateOrConnectWithoutFilterInput | FilterCategoryCreateOrConnectWithoutFilterInput[]
    upsert?: FilterCategoryUpsertWithWhereUniqueWithoutFilterInput | FilterCategoryUpsertWithWhereUniqueWithoutFilterInput[]
    createMany?: FilterCategoryCreateManyFilterInputEnvelope
    set?: FilterCategoryWhereUniqueInput | FilterCategoryWhereUniqueInput[]
    disconnect?: FilterCategoryWhereUniqueInput | FilterCategoryWhereUniqueInput[]
    delete?: FilterCategoryWhereUniqueInput | FilterCategoryWhereUniqueInput[]
    connect?: FilterCategoryWhereUniqueInput | FilterCategoryWhereUniqueInput[]
    update?: FilterCategoryUpdateWithWhereUniqueWithoutFilterInput | FilterCategoryUpdateWithWhereUniqueWithoutFilterInput[]
    updateMany?: FilterCategoryUpdateManyWithWhereWithoutFilterInput | FilterCategoryUpdateManyWithWhereWithoutFilterInput[]
    deleteMany?: FilterCategoryScalarWhereInput | FilterCategoryScalarWhereInput[]
  }

  export type FilterValuesUncheckedUpdateManyWithoutFilterNestedInput = {
    create?: XOR<FilterValuesCreateWithoutFilterInput, FilterValuesUncheckedCreateWithoutFilterInput> | FilterValuesCreateWithoutFilterInput[] | FilterValuesUncheckedCreateWithoutFilterInput[]
    connectOrCreate?: FilterValuesCreateOrConnectWithoutFilterInput | FilterValuesCreateOrConnectWithoutFilterInput[]
    upsert?: FilterValuesUpsertWithWhereUniqueWithoutFilterInput | FilterValuesUpsertWithWhereUniqueWithoutFilterInput[]
    createMany?: FilterValuesCreateManyFilterInputEnvelope
    set?: FilterValuesWhereUniqueInput | FilterValuesWhereUniqueInput[]
    disconnect?: FilterValuesWhereUniqueInput | FilterValuesWhereUniqueInput[]
    delete?: FilterValuesWhereUniqueInput | FilterValuesWhereUniqueInput[]
    connect?: FilterValuesWhereUniqueInput | FilterValuesWhereUniqueInput[]
    update?: FilterValuesUpdateWithWhereUniqueWithoutFilterInput | FilterValuesUpdateWithWhereUniqueWithoutFilterInput[]
    updateMany?: FilterValuesUpdateManyWithWhereWithoutFilterInput | FilterValuesUpdateManyWithWhereWithoutFilterInput[]
    deleteMany?: FilterValuesScalarWhereInput | FilterValuesScalarWhereInput[]
  }

  export type FilterTypeCreateNestedOneWithoutValuesInput = {
    create?: XOR<FilterTypeCreateWithoutValuesInput, FilterTypeUncheckedCreateWithoutValuesInput>
    connectOrCreate?: FilterTypeCreateOrConnectWithoutValuesInput
    connect?: FilterTypeWhereUniqueInput
  }

  export type FilterTypeUpdateOneRequiredWithoutValuesNestedInput = {
    create?: XOR<FilterTypeCreateWithoutValuesInput, FilterTypeUncheckedCreateWithoutValuesInput>
    connectOrCreate?: FilterTypeCreateOrConnectWithoutValuesInput
    upsert?: FilterTypeUpsertWithoutValuesInput
    connect?: FilterTypeWhereUniqueInput
    update?: XOR<XOR<FilterTypeUpdateToOneWithWhereWithoutValuesInput, FilterTypeUpdateWithoutValuesInput>, FilterTypeUncheckedUpdateWithoutValuesInput>
  }

  export type CategoryCreateNestedOneWithoutFilterInput = {
    create?: XOR<CategoryCreateWithoutFilterInput, CategoryUncheckedCreateWithoutFilterInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutFilterInput
    connect?: CategoryWhereUniqueInput
  }

  export type FilterTypeCreateNestedOneWithoutFilterCategoryInput = {
    create?: XOR<FilterTypeCreateWithoutFilterCategoryInput, FilterTypeUncheckedCreateWithoutFilterCategoryInput>
    connectOrCreate?: FilterTypeCreateOrConnectWithoutFilterCategoryInput
    connect?: FilterTypeWhereUniqueInput
  }

  export type CategoryUpdateOneRequiredWithoutFilterNestedInput = {
    create?: XOR<CategoryCreateWithoutFilterInput, CategoryUncheckedCreateWithoutFilterInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutFilterInput
    upsert?: CategoryUpsertWithoutFilterInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutFilterInput, CategoryUpdateWithoutFilterInput>, CategoryUncheckedUpdateWithoutFilterInput>
  }

  export type FilterTypeUpdateOneRequiredWithoutFilterCategoryNestedInput = {
    create?: XOR<FilterTypeCreateWithoutFilterCategoryInput, FilterTypeUncheckedCreateWithoutFilterCategoryInput>
    connectOrCreate?: FilterTypeCreateOrConnectWithoutFilterCategoryInput
    upsert?: FilterTypeUpsertWithoutFilterCategoryInput
    connect?: FilterTypeWhereUniqueInput
    update?: XOR<XOR<FilterTypeUpdateToOneWithWhereWithoutFilterCategoryInput, FilterTypeUpdateWithoutFilterCategoryInput>, FilterTypeUncheckedUpdateWithoutFilterCategoryInput>
  }

  export type EnumCouponStatusFieldUpdateOperationsInput = {
    set?: $Enums.CouponStatus
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type NestedEnumProductStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusFilter<$PrismaModel> | $Enums.ProductStatus
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

  export type NestedEnumProductStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProductStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductStatusFilter<$PrismaModel>
    _max?: NestedEnumProductStatusFilter<$PrismaModel>
  }

  export type NestedEnumInputTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InputType | EnumInputTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InputType[] | ListEnumInputTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InputType[] | ListEnumInputTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInputTypeFilter<$PrismaModel> | $Enums.InputType
  }

  export type NestedEnumTypeOfFilterFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeOfFilter | EnumTypeOfFilterFieldRefInput<$PrismaModel>
    in?: $Enums.TypeOfFilter[] | ListEnumTypeOfFilterFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeOfFilter[] | ListEnumTypeOfFilterFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeOfFilterFilter<$PrismaModel> | $Enums.TypeOfFilter
  }

  export type NestedEnumInputTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InputType | EnumInputTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InputType[] | ListEnumInputTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InputType[] | ListEnumInputTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInputTypeWithAggregatesFilter<$PrismaModel> | $Enums.InputType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInputTypeFilter<$PrismaModel>
    _max?: NestedEnumInputTypeFilter<$PrismaModel>
  }

  export type NestedEnumTypeOfFilterWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeOfFilter | EnumTypeOfFilterFieldRefInput<$PrismaModel>
    in?: $Enums.TypeOfFilter[] | ListEnumTypeOfFilterFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeOfFilter[] | ListEnumTypeOfFilterFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeOfFilterWithAggregatesFilter<$PrismaModel> | $Enums.TypeOfFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeOfFilterFilter<$PrismaModel>
    _max?: NestedEnumTypeOfFilterFilter<$PrismaModel>
  }

  export type NestedEnumCouponStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CouponStatus | EnumCouponStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CouponStatus[] | ListEnumCouponStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CouponStatus[] | ListEnumCouponStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCouponStatusFilter<$PrismaModel> | $Enums.CouponStatus
  }

  export type NestedEnumCouponStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CouponStatus | EnumCouponStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CouponStatus[] | ListEnumCouponStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CouponStatus[] | ListEnumCouponStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCouponStatusWithAggregatesFilter<$PrismaModel> | $Enums.CouponStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCouponStatusFilter<$PrismaModel>
    _max?: NestedEnumCouponStatusFilter<$PrismaModel>
  }

  export type ProductCreateWithoutCommentsInput = {
    id?: string
    product_name: string
    description?: string
    oldPrice: number
    price: number
    quantity: number
    color?: ProductCreatecolorInput | string[]
    filters: InputJsonValue
    ordered?: ProductCreateorderedInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    product_status?: $Enums.ProductStatus
    product_images?: ProductImageCreateNestedManyWithoutProductInput
    likes?: LikedProductCreateNestedManyWithoutProductInput
    category: CategoryCreateNestedOneWithoutProductInput
    brand: BrandCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCommentsInput = {
    id?: string
    product_name: string
    description?: string
    oldPrice: number
    price: number
    quantity: number
    color?: ProductCreatecolorInput | string[]
    filters: InputJsonValue
    ordered?: ProductCreateorderedInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    brandId: string
    product_status?: $Enums.ProductStatus
    product_images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    likes?: LikedProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCommentsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCommentsInput, ProductUncheckedCreateWithoutCommentsInput>
  }

  export type ProductUpsertWithoutCommentsInput = {
    update: XOR<ProductUpdateWithoutCommentsInput, ProductUncheckedUpdateWithoutCommentsInput>
    create: XOR<ProductCreateWithoutCommentsInput, ProductUncheckedCreateWithoutCommentsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutCommentsInput, ProductUncheckedUpdateWithoutCommentsInput>
  }

  export type ProductUpdateWithoutCommentsInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    oldPrice?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    color?: ProductUpdatecolorInput | string[]
    filters?: InputJsonValue | InputJsonValue
    ordered?: ProductUpdateorderedInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product_status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    product_images?: ProductImageUpdateManyWithoutProductNestedInput
    likes?: LikedProductUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput
    brand?: BrandUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCommentsInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    oldPrice?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    color?: ProductUpdatecolorInput | string[]
    filters?: InputJsonValue | InputJsonValue
    ordered?: ProductUpdateorderedInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    product_status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    product_images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    likes?: LikedProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductImageCreateWithoutProductInput = {
    id?: string
    imageUrl: string
  }

  export type ProductImageUncheckedCreateWithoutProductInput = {
    id?: string
    imageUrl: string
  }

  export type ProductImageCreateOrConnectWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    create: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput>
  }

  export type ProductImageCreateManyProductInputEnvelope = {
    data: ProductImageCreateManyProductInput | ProductImageCreateManyProductInput[]
  }

  export type CommentsCreateWithoutProductInput = {
    id?: string
    title: string
    sent_person: string
    image?: string | null
    stars?: number
    replyMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentsUncheckedCreateWithoutProductInput = {
    id?: string
    title: string
    sent_person: string
    image?: string | null
    stars?: number
    replyMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentsCreateOrConnectWithoutProductInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutProductInput, CommentsUncheckedCreateWithoutProductInput>
  }

  export type CommentsCreateManyProductInputEnvelope = {
    data: CommentsCreateManyProductInput | CommentsCreateManyProductInput[]
  }

  export type LikedProductCreateWithoutProductInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
  }

  export type LikedProductUncheckedCreateWithoutProductInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
  }

  export type LikedProductCreateOrConnectWithoutProductInput = {
    where: LikedProductWhereUniqueInput
    create: XOR<LikedProductCreateWithoutProductInput, LikedProductUncheckedCreateWithoutProductInput>
  }

  export type LikedProductCreateManyProductInputEnvelope = {
    data: LikedProductCreateManyProductInput | LikedProductCreateManyProductInput[]
  }

  export type CategoryCreateWithoutProductInput = {
    id?: string
    parentId?: string | null
    icon?: string | null
    title: string
    children?: number
    brand?: BrandCategoryCreateNestedManyWithoutCategoryInput
    filter?: FilterCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutProductInput = {
    id?: string
    parentId?: string | null
    icon?: string | null
    title: string
    children?: number
    brand?: BrandCategoryUncheckedCreateNestedManyWithoutCategoryInput
    filter?: FilterCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutProductInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
  }

  export type BrandCreateWithoutProductInput = {
    id?: string
    name: string
    categories?: BrandCategoryCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateWithoutProductInput = {
    id?: string
    name: string
    categories?: BrandCategoryUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandCreateOrConnectWithoutProductInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutProductInput, BrandUncheckedCreateWithoutProductInput>
  }

  export type ProductImageUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    update: XOR<ProductImageUpdateWithoutProductInput, ProductImageUncheckedUpdateWithoutProductInput>
    create: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput>
  }

  export type ProductImageUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    data: XOR<ProductImageUpdateWithoutProductInput, ProductImageUncheckedUpdateWithoutProductInput>
  }

  export type ProductImageUpdateManyWithWhereWithoutProductInput = {
    where: ProductImageScalarWhereInput
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductImageScalarWhereInput = {
    AND?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
    OR?: ProductImageScalarWhereInput[]
    NOT?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
    id?: StringFilter<"ProductImage"> | string
    imageUrl?: StringFilter<"ProductImage"> | string
    productId?: StringFilter<"ProductImage"> | string
  }

  export type CommentsUpsertWithWhereUniqueWithoutProductInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutProductInput, CommentsUncheckedUpdateWithoutProductInput>
    create: XOR<CommentsCreateWithoutProductInput, CommentsUncheckedCreateWithoutProductInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutProductInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutProductInput, CommentsUncheckedUpdateWithoutProductInput>
  }

  export type CommentsUpdateManyWithWhereWithoutProductInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutProductInput>
  }

  export type CommentsScalarWhereInput = {
    AND?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    OR?: CommentsScalarWhereInput[]
    NOT?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    id?: StringFilter<"Comments"> | string
    title?: StringFilter<"Comments"> | string
    sent_person?: StringFilter<"Comments"> | string
    image?: StringNullableFilter<"Comments"> | string | null
    stars?: IntFilter<"Comments"> | number
    replyMessage?: StringNullableFilter<"Comments"> | string | null
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    updatedAt?: DateTimeFilter<"Comments"> | Date | string
    productId?: StringFilter<"Comments"> | string
  }

  export type LikedProductUpsertWithWhereUniqueWithoutProductInput = {
    where: LikedProductWhereUniqueInput
    update: XOR<LikedProductUpdateWithoutProductInput, LikedProductUncheckedUpdateWithoutProductInput>
    create: XOR<LikedProductCreateWithoutProductInput, LikedProductUncheckedCreateWithoutProductInput>
  }

  export type LikedProductUpdateWithWhereUniqueWithoutProductInput = {
    where: LikedProductWhereUniqueInput
    data: XOR<LikedProductUpdateWithoutProductInput, LikedProductUncheckedUpdateWithoutProductInput>
  }

  export type LikedProductUpdateManyWithWhereWithoutProductInput = {
    where: LikedProductScalarWhereInput
    data: XOR<LikedProductUpdateManyMutationInput, LikedProductUncheckedUpdateManyWithoutProductInput>
  }

  export type LikedProductScalarWhereInput = {
    AND?: LikedProductScalarWhereInput | LikedProductScalarWhereInput[]
    OR?: LikedProductScalarWhereInput[]
    NOT?: LikedProductScalarWhereInput | LikedProductScalarWhereInput[]
    id?: StringFilter<"LikedProduct"> | string
    userId?: StringNullableFilter<"LikedProduct"> | string | null
    productId?: StringFilter<"LikedProduct"> | string
    createdAt?: DateTimeFilter<"LikedProduct"> | Date | string
  }

  export type CategoryUpsertWithoutProductInput = {
    update: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
  }

  export type CategoryUpdateWithoutProductInput = {
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    children?: IntFieldUpdateOperationsInput | number
    brand?: BrandCategoryUpdateManyWithoutCategoryNestedInput
    filter?: FilterCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutProductInput = {
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    children?: IntFieldUpdateOperationsInput | number
    brand?: BrandCategoryUncheckedUpdateManyWithoutCategoryNestedInput
    filter?: FilterCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BrandUpsertWithoutProductInput = {
    update: XOR<BrandUpdateWithoutProductInput, BrandUncheckedUpdateWithoutProductInput>
    create: XOR<BrandCreateWithoutProductInput, BrandUncheckedCreateWithoutProductInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutProductInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutProductInput, BrandUncheckedUpdateWithoutProductInput>
  }

  export type BrandUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    categories?: BrandCategoryUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    categories?: BrandCategoryUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type ProductCreateWithoutProduct_imagesInput = {
    id?: string
    product_name: string
    description?: string
    oldPrice: number
    price: number
    quantity: number
    color?: ProductCreatecolorInput | string[]
    filters: InputJsonValue
    ordered?: ProductCreateorderedInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    product_status?: $Enums.ProductStatus
    comments?: CommentsCreateNestedManyWithoutProductInput
    likes?: LikedProductCreateNestedManyWithoutProductInput
    category: CategoryCreateNestedOneWithoutProductInput
    brand: BrandCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProduct_imagesInput = {
    id?: string
    product_name: string
    description?: string
    oldPrice: number
    price: number
    quantity: number
    color?: ProductCreatecolorInput | string[]
    filters: InputJsonValue
    ordered?: ProductCreateorderedInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    brandId: string
    product_status?: $Enums.ProductStatus
    comments?: CommentsUncheckedCreateNestedManyWithoutProductInput
    likes?: LikedProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProduct_imagesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProduct_imagesInput, ProductUncheckedCreateWithoutProduct_imagesInput>
  }

  export type ProductUpsertWithoutProduct_imagesInput = {
    update: XOR<ProductUpdateWithoutProduct_imagesInput, ProductUncheckedUpdateWithoutProduct_imagesInput>
    create: XOR<ProductCreateWithoutProduct_imagesInput, ProductUncheckedCreateWithoutProduct_imagesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProduct_imagesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProduct_imagesInput, ProductUncheckedUpdateWithoutProduct_imagesInput>
  }

  export type ProductUpdateWithoutProduct_imagesInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    oldPrice?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    color?: ProductUpdatecolorInput | string[]
    filters?: InputJsonValue | InputJsonValue
    ordered?: ProductUpdateorderedInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product_status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    comments?: CommentsUpdateManyWithoutProductNestedInput
    likes?: LikedProductUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput
    brand?: BrandUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProduct_imagesInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    oldPrice?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    color?: ProductUpdatecolorInput | string[]
    filters?: InputJsonValue | InputJsonValue
    ordered?: ProductUpdateorderedInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    product_status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    comments?: CommentsUncheckedUpdateManyWithoutProductNestedInput
    likes?: LikedProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    product_name: string
    description?: string
    oldPrice: number
    price: number
    quantity: number
    color?: ProductCreatecolorInput | string[]
    filters: InputJsonValue
    ordered?: ProductCreateorderedInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    product_status?: $Enums.ProductStatus
    product_images?: ProductImageCreateNestedManyWithoutProductInput
    comments?: CommentsCreateNestedManyWithoutProductInput
    likes?: LikedProductCreateNestedManyWithoutProductInput
    brand: BrandCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    product_name: string
    description?: string
    oldPrice: number
    price: number
    quantity: number
    color?: ProductCreatecolorInput | string[]
    filters: InputJsonValue
    ordered?: ProductCreateorderedInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    brandId: string
    product_status?: $Enums.ProductStatus
    product_images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    comments?: CommentsUncheckedCreateNestedManyWithoutProductInput
    likes?: LikedProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
  }

  export type BrandCategoryCreateWithoutCategoryInput = {
    id?: string
    brand: BrandCreateNestedOneWithoutCategoriesInput
  }

  export type BrandCategoryUncheckedCreateWithoutCategoryInput = {
    id?: string
    brandId: string
  }

  export type BrandCategoryCreateOrConnectWithoutCategoryInput = {
    where: BrandCategoryWhereUniqueInput
    create: XOR<BrandCategoryCreateWithoutCategoryInput, BrandCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type BrandCategoryCreateManyCategoryInputEnvelope = {
    data: BrandCategoryCreateManyCategoryInput | BrandCategoryCreateManyCategoryInput[]
  }

  export type FilterCategoryCreateWithoutCategoryInput = {
    id?: string
    filter: FilterTypeCreateNestedOneWithoutFilterCategoryInput
  }

  export type FilterCategoryUncheckedCreateWithoutCategoryInput = {
    id?: string
    filterId: string
  }

  export type FilterCategoryCreateOrConnectWithoutCategoryInput = {
    where: FilterCategoryWhereUniqueInput
    create: XOR<FilterCategoryCreateWithoutCategoryInput, FilterCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type FilterCategoryCreateManyCategoryInputEnvelope = {
    data: FilterCategoryCreateManyCategoryInput | FilterCategoryCreateManyCategoryInput[]
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    product_name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    oldPrice?: FloatFilter<"Product"> | number
    price?: FloatFilter<"Product"> | number
    quantity?: IntFilter<"Product"> | number
    color?: StringNullableListFilter<"Product">
    filters?: JsonFilter<"Product">
    ordered?: StringNullableListFilter<"Product">
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    categoryId?: StringFilter<"Product"> | string
    brandId?: StringFilter<"Product"> | string
    product_status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
  }

  export type BrandCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BrandCategoryWhereUniqueInput
    update: XOR<BrandCategoryUpdateWithoutCategoryInput, BrandCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<BrandCategoryCreateWithoutCategoryInput, BrandCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type BrandCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BrandCategoryWhereUniqueInput
    data: XOR<BrandCategoryUpdateWithoutCategoryInput, BrandCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type BrandCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: BrandCategoryScalarWhereInput
    data: XOR<BrandCategoryUpdateManyMutationInput, BrandCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BrandCategoryScalarWhereInput = {
    AND?: BrandCategoryScalarWhereInput | BrandCategoryScalarWhereInput[]
    OR?: BrandCategoryScalarWhereInput[]
    NOT?: BrandCategoryScalarWhereInput | BrandCategoryScalarWhereInput[]
    id?: StringFilter<"BrandCategory"> | string
    brandId?: StringFilter<"BrandCategory"> | string
    categoryId?: StringFilter<"BrandCategory"> | string
  }

  export type FilterCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: FilterCategoryWhereUniqueInput
    update: XOR<FilterCategoryUpdateWithoutCategoryInput, FilterCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<FilterCategoryCreateWithoutCategoryInput, FilterCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type FilterCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: FilterCategoryWhereUniqueInput
    data: XOR<FilterCategoryUpdateWithoutCategoryInput, FilterCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type FilterCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: FilterCategoryScalarWhereInput
    data: XOR<FilterCategoryUpdateManyMutationInput, FilterCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type FilterCategoryScalarWhereInput = {
    AND?: FilterCategoryScalarWhereInput | FilterCategoryScalarWhereInput[]
    OR?: FilterCategoryScalarWhereInput[]
    NOT?: FilterCategoryScalarWhereInput | FilterCategoryScalarWhereInput[]
    id?: StringFilter<"FilterCategory"> | string
    categoryId?: StringFilter<"FilterCategory"> | string
    filterId?: StringFilter<"FilterCategory"> | string
  }

  export type ProductCreateWithoutLikesInput = {
    id?: string
    product_name: string
    description?: string
    oldPrice: number
    price: number
    quantity: number
    color?: ProductCreatecolorInput | string[]
    filters: InputJsonValue
    ordered?: ProductCreateorderedInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    product_status?: $Enums.ProductStatus
    product_images?: ProductImageCreateNestedManyWithoutProductInput
    comments?: CommentsCreateNestedManyWithoutProductInput
    category: CategoryCreateNestedOneWithoutProductInput
    brand: BrandCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutLikesInput = {
    id?: string
    product_name: string
    description?: string
    oldPrice: number
    price: number
    quantity: number
    color?: ProductCreatecolorInput | string[]
    filters: InputJsonValue
    ordered?: ProductCreateorderedInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    brandId: string
    product_status?: $Enums.ProductStatus
    product_images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    comments?: CommentsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutLikesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutLikesInput, ProductUncheckedCreateWithoutLikesInput>
  }

  export type ProductUpsertWithoutLikesInput = {
    update: XOR<ProductUpdateWithoutLikesInput, ProductUncheckedUpdateWithoutLikesInput>
    create: XOR<ProductCreateWithoutLikesInput, ProductUncheckedCreateWithoutLikesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutLikesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutLikesInput, ProductUncheckedUpdateWithoutLikesInput>
  }

  export type ProductUpdateWithoutLikesInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    oldPrice?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    color?: ProductUpdatecolorInput | string[]
    filters?: InputJsonValue | InputJsonValue
    ordered?: ProductUpdateorderedInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product_status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    product_images?: ProductImageUpdateManyWithoutProductNestedInput
    comments?: CommentsUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput
    brand?: BrandUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutLikesInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    oldPrice?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    color?: ProductUpdatecolorInput | string[]
    filters?: InputJsonValue | InputJsonValue
    ordered?: ProductUpdateorderedInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    product_status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    product_images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type BrandCategoryCreateWithoutBrandInput = {
    id?: string
    category: CategoryCreateNestedOneWithoutBrandInput
  }

  export type BrandCategoryUncheckedCreateWithoutBrandInput = {
    id?: string
    categoryId: string
  }

  export type BrandCategoryCreateOrConnectWithoutBrandInput = {
    where: BrandCategoryWhereUniqueInput
    create: XOR<BrandCategoryCreateWithoutBrandInput, BrandCategoryUncheckedCreateWithoutBrandInput>
  }

  export type BrandCategoryCreateManyBrandInputEnvelope = {
    data: BrandCategoryCreateManyBrandInput | BrandCategoryCreateManyBrandInput[]
  }

  export type ProductCreateWithoutBrandInput = {
    id?: string
    product_name: string
    description?: string
    oldPrice: number
    price: number
    quantity: number
    color?: ProductCreatecolorInput | string[]
    filters: InputJsonValue
    ordered?: ProductCreateorderedInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    product_status?: $Enums.ProductStatus
    product_images?: ProductImageCreateNestedManyWithoutProductInput
    comments?: CommentsCreateNestedManyWithoutProductInput
    likes?: LikedProductCreateNestedManyWithoutProductInput
    category: CategoryCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBrandInput = {
    id?: string
    product_name: string
    description?: string
    oldPrice: number
    price: number
    quantity: number
    color?: ProductCreatecolorInput | string[]
    filters: InputJsonValue
    ordered?: ProductCreateorderedInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    product_status?: $Enums.ProductStatus
    product_images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    comments?: CommentsUncheckedCreateNestedManyWithoutProductInput
    likes?: LikedProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBrandInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductCreateManyBrandInputEnvelope = {
    data: ProductCreateManyBrandInput | ProductCreateManyBrandInput[]
  }

  export type BrandCategoryUpsertWithWhereUniqueWithoutBrandInput = {
    where: BrandCategoryWhereUniqueInput
    update: XOR<BrandCategoryUpdateWithoutBrandInput, BrandCategoryUncheckedUpdateWithoutBrandInput>
    create: XOR<BrandCategoryCreateWithoutBrandInput, BrandCategoryUncheckedCreateWithoutBrandInput>
  }

  export type BrandCategoryUpdateWithWhereUniqueWithoutBrandInput = {
    where: BrandCategoryWhereUniqueInput
    data: XOR<BrandCategoryUpdateWithoutBrandInput, BrandCategoryUncheckedUpdateWithoutBrandInput>
  }

  export type BrandCategoryUpdateManyWithWhereWithoutBrandInput = {
    where: BrandCategoryScalarWhereInput
    data: XOR<BrandCategoryUpdateManyMutationInput, BrandCategoryUncheckedUpdateManyWithoutBrandInput>
  }

  export type ProductUpsertWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
  }

  export type ProductUpdateManyWithWhereWithoutBrandInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutBrandInput>
  }

  export type BrandCreateWithoutCategoriesInput = {
    id?: string
    name: string
    product?: ProductCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateWithoutCategoriesInput = {
    id?: string
    name: string
    product?: ProductUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandCreateOrConnectWithoutCategoriesInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutCategoriesInput, BrandUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoryCreateWithoutBrandInput = {
    id?: string
    parentId?: string | null
    icon?: string | null
    title: string
    children?: number
    product?: ProductCreateNestedManyWithoutCategoryInput
    filter?: FilterCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutBrandInput = {
    id?: string
    parentId?: string | null
    icon?: string | null
    title: string
    children?: number
    product?: ProductUncheckedCreateNestedManyWithoutCategoryInput
    filter?: FilterCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutBrandInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutBrandInput, CategoryUncheckedCreateWithoutBrandInput>
  }

  export type BrandUpsertWithoutCategoriesInput = {
    update: XOR<BrandUpdateWithoutCategoriesInput, BrandUncheckedUpdateWithoutCategoriesInput>
    create: XOR<BrandCreateWithoutCategoriesInput, BrandUncheckedCreateWithoutCategoriesInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutCategoriesInput, BrandUncheckedUpdateWithoutCategoriesInput>
  }

  export type BrandUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    product?: ProductUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type CategoryUpsertWithoutBrandInput = {
    update: XOR<CategoryUpdateWithoutBrandInput, CategoryUncheckedUpdateWithoutBrandInput>
    create: XOR<CategoryCreateWithoutBrandInput, CategoryUncheckedCreateWithoutBrandInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutBrandInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutBrandInput, CategoryUncheckedUpdateWithoutBrandInput>
  }

  export type CategoryUpdateWithoutBrandInput = {
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    children?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateManyWithoutCategoryNestedInput
    filter?: FilterCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutBrandInput = {
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    children?: IntFieldUpdateOperationsInput | number
    product?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
    filter?: FilterCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type FilterCategoryCreateWithoutFilterInput = {
    id?: string
    category: CategoryCreateNestedOneWithoutFilterInput
  }

  export type FilterCategoryUncheckedCreateWithoutFilterInput = {
    id?: string
    categoryId: string
  }

  export type FilterCategoryCreateOrConnectWithoutFilterInput = {
    where: FilterCategoryWhereUniqueInput
    create: XOR<FilterCategoryCreateWithoutFilterInput, FilterCategoryUncheckedCreateWithoutFilterInput>
  }

  export type FilterCategoryCreateManyFilterInputEnvelope = {
    data: FilterCategoryCreateManyFilterInput | FilterCategoryCreateManyFilterInput[]
  }

  export type FilterValuesCreateWithoutFilterInput = {
    id?: string
    value: string
  }

  export type FilterValuesUncheckedCreateWithoutFilterInput = {
    id?: string
    value: string
  }

  export type FilterValuesCreateOrConnectWithoutFilterInput = {
    where: FilterValuesWhereUniqueInput
    create: XOR<FilterValuesCreateWithoutFilterInput, FilterValuesUncheckedCreateWithoutFilterInput>
  }

  export type FilterValuesCreateManyFilterInputEnvelope = {
    data: FilterValuesCreateManyFilterInput | FilterValuesCreateManyFilterInput[]
  }

  export type FilterCategoryUpsertWithWhereUniqueWithoutFilterInput = {
    where: FilterCategoryWhereUniqueInput
    update: XOR<FilterCategoryUpdateWithoutFilterInput, FilterCategoryUncheckedUpdateWithoutFilterInput>
    create: XOR<FilterCategoryCreateWithoutFilterInput, FilterCategoryUncheckedCreateWithoutFilterInput>
  }

  export type FilterCategoryUpdateWithWhereUniqueWithoutFilterInput = {
    where: FilterCategoryWhereUniqueInput
    data: XOR<FilterCategoryUpdateWithoutFilterInput, FilterCategoryUncheckedUpdateWithoutFilterInput>
  }

  export type FilterCategoryUpdateManyWithWhereWithoutFilterInput = {
    where: FilterCategoryScalarWhereInput
    data: XOR<FilterCategoryUpdateManyMutationInput, FilterCategoryUncheckedUpdateManyWithoutFilterInput>
  }

  export type FilterValuesUpsertWithWhereUniqueWithoutFilterInput = {
    where: FilterValuesWhereUniqueInput
    update: XOR<FilterValuesUpdateWithoutFilterInput, FilterValuesUncheckedUpdateWithoutFilterInput>
    create: XOR<FilterValuesCreateWithoutFilterInput, FilterValuesUncheckedCreateWithoutFilterInput>
  }

  export type FilterValuesUpdateWithWhereUniqueWithoutFilterInput = {
    where: FilterValuesWhereUniqueInput
    data: XOR<FilterValuesUpdateWithoutFilterInput, FilterValuesUncheckedUpdateWithoutFilterInput>
  }

  export type FilterValuesUpdateManyWithWhereWithoutFilterInput = {
    where: FilterValuesScalarWhereInput
    data: XOR<FilterValuesUpdateManyMutationInput, FilterValuesUncheckedUpdateManyWithoutFilterInput>
  }

  export type FilterValuesScalarWhereInput = {
    AND?: FilterValuesScalarWhereInput | FilterValuesScalarWhereInput[]
    OR?: FilterValuesScalarWhereInput[]
    NOT?: FilterValuesScalarWhereInput | FilterValuesScalarWhereInput[]
    id?: StringFilter<"FilterValues"> | string
    value?: StringFilter<"FilterValues"> | string
    filterId?: StringFilter<"FilterValues"> | string
  }

  export type FilterTypeCreateWithoutValuesInput = {
    id?: string
    title: string
    inputType: $Enums.InputType
    type?: $Enums.TypeOfFilter
    filterCategory?: FilterCategoryCreateNestedManyWithoutFilterInput
  }

  export type FilterTypeUncheckedCreateWithoutValuesInput = {
    id?: string
    title: string
    inputType: $Enums.InputType
    type?: $Enums.TypeOfFilter
    filterCategory?: FilterCategoryUncheckedCreateNestedManyWithoutFilterInput
  }

  export type FilterTypeCreateOrConnectWithoutValuesInput = {
    where: FilterTypeWhereUniqueInput
    create: XOR<FilterTypeCreateWithoutValuesInput, FilterTypeUncheckedCreateWithoutValuesInput>
  }

  export type FilterTypeUpsertWithoutValuesInput = {
    update: XOR<FilterTypeUpdateWithoutValuesInput, FilterTypeUncheckedUpdateWithoutValuesInput>
    create: XOR<FilterTypeCreateWithoutValuesInput, FilterTypeUncheckedCreateWithoutValuesInput>
    where?: FilterTypeWhereInput
  }

  export type FilterTypeUpdateToOneWithWhereWithoutValuesInput = {
    where?: FilterTypeWhereInput
    data: XOR<FilterTypeUpdateWithoutValuesInput, FilterTypeUncheckedUpdateWithoutValuesInput>
  }

  export type FilterTypeUpdateWithoutValuesInput = {
    title?: StringFieldUpdateOperationsInput | string
    inputType?: EnumInputTypeFieldUpdateOperationsInput | $Enums.InputType
    type?: EnumTypeOfFilterFieldUpdateOperationsInput | $Enums.TypeOfFilter
    filterCategory?: FilterCategoryUpdateManyWithoutFilterNestedInput
  }

  export type FilterTypeUncheckedUpdateWithoutValuesInput = {
    title?: StringFieldUpdateOperationsInput | string
    inputType?: EnumInputTypeFieldUpdateOperationsInput | $Enums.InputType
    type?: EnumTypeOfFilterFieldUpdateOperationsInput | $Enums.TypeOfFilter
    filterCategory?: FilterCategoryUncheckedUpdateManyWithoutFilterNestedInput
  }

  export type CategoryCreateWithoutFilterInput = {
    id?: string
    parentId?: string | null
    icon?: string | null
    title: string
    children?: number
    product?: ProductCreateNestedManyWithoutCategoryInput
    brand?: BrandCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutFilterInput = {
    id?: string
    parentId?: string | null
    icon?: string | null
    title: string
    children?: number
    product?: ProductUncheckedCreateNestedManyWithoutCategoryInput
    brand?: BrandCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutFilterInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutFilterInput, CategoryUncheckedCreateWithoutFilterInput>
  }

  export type FilterTypeCreateWithoutFilterCategoryInput = {
    id?: string
    title: string
    inputType: $Enums.InputType
    type?: $Enums.TypeOfFilter
    values?: FilterValuesCreateNestedManyWithoutFilterInput
  }

  export type FilterTypeUncheckedCreateWithoutFilterCategoryInput = {
    id?: string
    title: string
    inputType: $Enums.InputType
    type?: $Enums.TypeOfFilter
    values?: FilterValuesUncheckedCreateNestedManyWithoutFilterInput
  }

  export type FilterTypeCreateOrConnectWithoutFilterCategoryInput = {
    where: FilterTypeWhereUniqueInput
    create: XOR<FilterTypeCreateWithoutFilterCategoryInput, FilterTypeUncheckedCreateWithoutFilterCategoryInput>
  }

  export type CategoryUpsertWithoutFilterInput = {
    update: XOR<CategoryUpdateWithoutFilterInput, CategoryUncheckedUpdateWithoutFilterInput>
    create: XOR<CategoryCreateWithoutFilterInput, CategoryUncheckedCreateWithoutFilterInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutFilterInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutFilterInput, CategoryUncheckedUpdateWithoutFilterInput>
  }

  export type CategoryUpdateWithoutFilterInput = {
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    children?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateManyWithoutCategoryNestedInput
    brand?: BrandCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutFilterInput = {
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    children?: IntFieldUpdateOperationsInput | number
    product?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
    brand?: BrandCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type FilterTypeUpsertWithoutFilterCategoryInput = {
    update: XOR<FilterTypeUpdateWithoutFilterCategoryInput, FilterTypeUncheckedUpdateWithoutFilterCategoryInput>
    create: XOR<FilterTypeCreateWithoutFilterCategoryInput, FilterTypeUncheckedCreateWithoutFilterCategoryInput>
    where?: FilterTypeWhereInput
  }

  export type FilterTypeUpdateToOneWithWhereWithoutFilterCategoryInput = {
    where?: FilterTypeWhereInput
    data: XOR<FilterTypeUpdateWithoutFilterCategoryInput, FilterTypeUncheckedUpdateWithoutFilterCategoryInput>
  }

  export type FilterTypeUpdateWithoutFilterCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    inputType?: EnumInputTypeFieldUpdateOperationsInput | $Enums.InputType
    type?: EnumTypeOfFilterFieldUpdateOperationsInput | $Enums.TypeOfFilter
    values?: FilterValuesUpdateManyWithoutFilterNestedInput
  }

  export type FilterTypeUncheckedUpdateWithoutFilterCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    inputType?: EnumInputTypeFieldUpdateOperationsInput | $Enums.InputType
    type?: EnumTypeOfFilterFieldUpdateOperationsInput | $Enums.TypeOfFilter
    values?: FilterValuesUncheckedUpdateManyWithoutFilterNestedInput
  }

  export type ProductImageCreateManyProductInput = {
    id?: string
    imageUrl: string
  }

  export type CommentsCreateManyProductInput = {
    id?: string
    title: string
    sent_person: string
    image?: string | null
    stars?: number
    replyMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikedProductCreateManyProductInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
  }

  export type ProductImageUpdateWithoutProductInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ProductImageUncheckedUpdateWithoutProductInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ProductImageUncheckedUpdateManyWithoutProductInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type CommentsUpdateWithoutProductInput = {
    title?: StringFieldUpdateOperationsInput | string
    sent_person?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    stars?: IntFieldUpdateOperationsInput | number
    replyMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateWithoutProductInput = {
    title?: StringFieldUpdateOperationsInput | string
    sent_person?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    stars?: IntFieldUpdateOperationsInput | number
    replyMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateManyWithoutProductInput = {
    title?: StringFieldUpdateOperationsInput | string
    sent_person?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    stars?: IntFieldUpdateOperationsInput | number
    replyMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedProductUpdateWithoutProductInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedProductUncheckedUpdateWithoutProductInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedProductUncheckedUpdateManyWithoutProductInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    product_name: string
    description?: string
    oldPrice: number
    price: number
    quantity: number
    color?: ProductCreatecolorInput | string[]
    filters: InputJsonValue
    ordered?: ProductCreateorderedInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    brandId: string
    product_status?: $Enums.ProductStatus
  }

  export type BrandCategoryCreateManyCategoryInput = {
    id?: string
    brandId: string
  }

  export type FilterCategoryCreateManyCategoryInput = {
    id?: string
    filterId: string
  }

  export type ProductUpdateWithoutCategoryInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    oldPrice?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    color?: ProductUpdatecolorInput | string[]
    filters?: InputJsonValue | InputJsonValue
    ordered?: ProductUpdateorderedInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product_status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    product_images?: ProductImageUpdateManyWithoutProductNestedInput
    comments?: CommentsUpdateManyWithoutProductNestedInput
    likes?: LikedProductUpdateManyWithoutProductNestedInput
    brand?: BrandUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    oldPrice?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    color?: ProductUpdatecolorInput | string[]
    filters?: InputJsonValue | InputJsonValue
    ordered?: ProductUpdateorderedInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brandId?: StringFieldUpdateOperationsInput | string
    product_status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    product_images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutProductNestedInput
    likes?: LikedProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    oldPrice?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    color?: ProductUpdatecolorInput | string[]
    filters?: InputJsonValue | InputJsonValue
    ordered?: ProductUpdateorderedInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brandId?: StringFieldUpdateOperationsInput | string
    product_status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
  }

  export type BrandCategoryUpdateWithoutCategoryInput = {
    brand?: BrandUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type BrandCategoryUncheckedUpdateWithoutCategoryInput = {
    brandId?: StringFieldUpdateOperationsInput | string
  }

  export type BrandCategoryUncheckedUpdateManyWithoutCategoryInput = {
    brandId?: StringFieldUpdateOperationsInput | string
  }

  export type FilterCategoryUpdateWithoutCategoryInput = {
    filter?: FilterTypeUpdateOneRequiredWithoutFilterCategoryNestedInput
  }

  export type FilterCategoryUncheckedUpdateWithoutCategoryInput = {
    filterId?: StringFieldUpdateOperationsInput | string
  }

  export type FilterCategoryUncheckedUpdateManyWithoutCategoryInput = {
    filterId?: StringFieldUpdateOperationsInput | string
  }

  export type BrandCategoryCreateManyBrandInput = {
    id?: string
    categoryId: string
  }

  export type ProductCreateManyBrandInput = {
    id?: string
    product_name: string
    description?: string
    oldPrice: number
    price: number
    quantity: number
    color?: ProductCreatecolorInput | string[]
    filters: InputJsonValue
    ordered?: ProductCreateorderedInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    product_status?: $Enums.ProductStatus
  }

  export type BrandCategoryUpdateWithoutBrandInput = {
    category?: CategoryUpdateOneRequiredWithoutBrandNestedInput
  }

  export type BrandCategoryUncheckedUpdateWithoutBrandInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type BrandCategoryUncheckedUpdateManyWithoutBrandInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUpdateWithoutBrandInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    oldPrice?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    color?: ProductUpdatecolorInput | string[]
    filters?: InputJsonValue | InputJsonValue
    ordered?: ProductUpdateorderedInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product_status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    product_images?: ProductImageUpdateManyWithoutProductNestedInput
    comments?: CommentsUpdateManyWithoutProductNestedInput
    likes?: LikedProductUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBrandInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    oldPrice?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    color?: ProductUpdatecolorInput | string[]
    filters?: InputJsonValue | InputJsonValue
    ordered?: ProductUpdateorderedInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    product_status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    product_images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutProductNestedInput
    likes?: LikedProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutBrandInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    oldPrice?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    color?: ProductUpdatecolorInput | string[]
    filters?: InputJsonValue | InputJsonValue
    ordered?: ProductUpdateorderedInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    product_status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
  }

  export type FilterCategoryCreateManyFilterInput = {
    id?: string
    categoryId: string
  }

  export type FilterValuesCreateManyFilterInput = {
    id?: string
    value: string
  }

  export type FilterCategoryUpdateWithoutFilterInput = {
    category?: CategoryUpdateOneRequiredWithoutFilterNestedInput
  }

  export type FilterCategoryUncheckedUpdateWithoutFilterInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type FilterCategoryUncheckedUpdateManyWithoutFilterInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type FilterValuesUpdateWithoutFilterInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type FilterValuesUncheckedUpdateWithoutFilterInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type FilterValuesUncheckedUpdateManyWithoutFilterInput = {
    value?: StringFieldUpdateOperationsInput | string
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