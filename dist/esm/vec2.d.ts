import type { ArrayType, Mat2, Mat2d, Mat3, Mat4, Quat, Quat2, Vec2, Vec3, Vec4, ReadonlyMat2, ReadonlyMat2d, ReadonlyMat3, ReadonlyMat4, ReadonlyQuat, ReadonlyQuat2, ReadonlyVec2, ReadonlyVec3, ReadonlyVec4, ReturnType } from "./types.js";

/**
 * 2 Dimensional Vector
 * @module vec2
 */
/**
 * Creates a new, empty vec2
 *
 * @returns {ArrayType} a new 2D vector
 */
export function create(): ArrayType;
/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {ReadonlyVec2} a vector to clone
 * @returns {ArrayType} a new 2D vector
 */
export function clone(a: ReadonlyVec2): ArrayType;
/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {ArrayType} a new 2D vector
 */
export function fromValues(x: number, y: number): ArrayType;
/**
 * Copy the values from one vec2 to another
 *
 * @template {Vec2} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec2} a the source vector
 * @returns {ReturnType.Vec2<T>} out
 */
export function copy<T extends Vec2>(out: T, a: ReadonlyVec2): ReturnType.Vec2<T>;
/**
 * Set the components of a vec2 to the given values
 *
 * @template {Vec2} T
 * @param {T} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {ReturnType.Vec2<T>} out
 */
export function set<T extends Vec2>(out: T, x: number, y: number): ReturnType.Vec2<T>;
/**
 * Adds two vec2's
 *
 * @template {Vec2} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {ReturnType.Vec2<T>} out
 */
export function add<T extends Vec2>(out: T, a: ReadonlyVec2, b: ReadonlyVec2): ReturnType.Vec2<T>;
/**
 * Subtracts vector b from vector a
 *
 * @template {Vec2} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {ReturnType.Vec2<T>} out
 */
export function subtract<T extends Vec2>(out: T, a: ReadonlyVec2, b: ReadonlyVec2): ReturnType.Vec2<T>;
/**
 * Multiplies two vec2's
 *
 * @template {Vec2} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {ReturnType.Vec2<T>} out
 */
export function multiply<T extends Vec2>(out: T, a: ReadonlyVec2, b: ReadonlyVec2): ReturnType.Vec2<T>;
/**
 * Divides two vec2's
 *
 * @template {Vec2} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {ReturnType.Vec2<T>} out
 */
export function divide<T extends Vec2>(out: T, a: ReadonlyVec2, b: ReadonlyVec2): ReturnType.Vec2<T>;
/**
 * Math.ceil the components of a vec2
 *
 * @template {Vec2} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec2} a vector to ceil
 * @returns {ReturnType.Vec2<T>} out
 */
export function ceil<T extends Vec2>(out: T, a: ReadonlyVec2): ReturnType.Vec2<T>;
/**
 * Math.floor the components of a vec2
 *
 * @template {Vec2} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec2} a vector to floor
 * @returns {ReturnType.Vec2<T>} out
 */
export function floor<T extends Vec2>(out: T, a: ReadonlyVec2): ReturnType.Vec2<T>;
/**
 * Returns the minimum of two vec2's
 *
 * @template {Vec2} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {ReturnType.Vec2<T>} out
 */
export function min<T extends Vec2>(out: T, a: ReadonlyVec2, b: ReadonlyVec2): ReturnType.Vec2<T>;
/**
 * Returns the maximum of two vec2's
 *
 * @template {Vec2} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {ReturnType.Vec2<T>} out
 */
export function max<T extends Vec2>(out: T, a: ReadonlyVec2, b: ReadonlyVec2): ReturnType.Vec2<T>;
/**
 * symmetric round the components of a vec2
 *
 * @template {Vec2} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec2} a vector to round
 * @returns {ReturnType.Vec2<T>} out
 */
export function round<T extends Vec2>(out: T, a: ReadonlyVec2): ReturnType.Vec2<T>;
/**
 * Scales a vec2 by a scalar number
 *
 * @template {Vec2} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {ReturnType.Vec2<T>} out
 */
export function scale<T extends Vec2>(out: T, a: ReadonlyVec2, b: number): ReturnType.Vec2<T>;
/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @template {Vec2} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {ReturnType.Vec2<T>} out
 */
export function scaleAndAdd<T extends Vec2>(out: T, a: ReadonlyVec2, b: ReadonlyVec2, scale: number): ReturnType.Vec2<T>;
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} distance between a and b
 */
export function distance(a: ReadonlyVec2, b: ReadonlyVec2): number;
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
export function squaredDistance(a: ReadonlyVec2, b: ReadonlyVec2): number;
/**
 * Calculates the length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate length of
 * @returns {Number} length of a
 */
export function length(a: ReadonlyVec2): number;
/**
 * Calculates the squared length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
export function squaredLength(a: ReadonlyVec2): number;
/**
 * Negates the components of a vec2
 *
 * @template {Vec2} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec2} a vector to negate
 * @returns {ReturnType.Vec2<T>} out
 */
export function negate<T extends Vec2>(out: T, a: ReadonlyVec2): ReturnType.Vec2<T>;
/**
 * Returns the inverse of the components of a vec2
 *
 * @template {Vec2} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec2} a vector to invert
 * @returns {ReturnType.Vec2<T>} out
 */
export function inverse<T extends Vec2>(out: T, a: ReadonlyVec2): ReturnType.Vec2<T>;
/**
 * Normalize a vec2
 *
 * @template {Vec2} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec2} a vector to normalize
 * @returns {ReturnType.Vec2<T>} out
 */
export function normalize<T extends Vec2>(out: T, a: ReadonlyVec2): ReturnType.Vec2<T>;
/**
 * Calculates the dot product of two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} dot product of a and b
 */
export function dot(a: ReadonlyVec2, b: ReadonlyVec2): number;
/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {ReturnType.Vec2<T>} out
 */
export function cross<T extends Vec3>(out: T, a: ReadonlyVec2, b: ReadonlyVec2): ReturnType.Vec2<T>;
/**
 * Performs a linear interpolation between two vec2's
 *
 * @template {Vec2} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {ReturnType.Vec2<T>} out
 */
export function lerp<T extends Vec2>(out: T, a: ReadonlyVec2, b: ReadonlyVec2, t: number): ReturnType.Vec2<T>;
/**
 * Generates a random vector with the given scale
 *
 * @template {Vec2} T
 * @param {T} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If omitted, a unit vector will be returned
 * @returns {ReturnType.Vec2<T>} out
 */
export function random<T extends Vec2>(out: T, scale?: number): ReturnType.Vec2<T>;
/**
 * Transforms the vec2 with a mat2
 *
 * @template {Vec2} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2} m matrix to transform with
 * @returns {ReturnType.Vec2<T>} out
 */
export function transformMat2<T extends Vec2>(out: T, a: ReadonlyVec2, m: ReadonlyMat2): ReturnType.Vec2<T>;
/**
 * Transforms the vec2 with a mat2d
 *
 * @template {Vec2} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2d} m matrix to transform with
 * @returns {ReturnType.Vec2<T>} out
 */
export function transformMat2d<T extends Vec2>(out: T, a: ReadonlyVec2, m: ReadonlyMat2d): ReturnType.Vec2<T>;
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @template {Vec2} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat3} m matrix to transform with
 * @returns {ReturnType.Vec2<T>} out
 */
export function transformMat3<T extends Vec2>(out: T, a: ReadonlyVec2, m: ReadonlyMat3): ReturnType.Vec2<T>;
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @template {Vec2} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {ReturnType.Vec2<T>} out
 */
export function transformMat4<T extends Vec2>(out: T, a: ReadonlyVec2, m: ReadonlyMat4): ReturnType.Vec2<T>;
/**
 * Rotate a 2D vector
 * @template {Vec2} T
 * @param {T} out The receiving vec2
 * @param {ReadonlyVec2} a The vec2 point to rotate
 * @param {ReadonlyVec2} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {ReturnType.Vec2<T>} out
 */
export function rotate<T extends Vec2>(out: T, a: ReadonlyVec2, b: ReadonlyVec2, rad: number): ReturnType.Vec2<T>;
/**
 * Get the smallest angle between two 2D vectors
 * @param {ReadonlyVec2} a The first operand
 * @param {ReadonlyVec2} b The second operand
 * @returns {Number} The angle in radians
 */
export function angle(a: ReadonlyVec2, b: ReadonlyVec2): number;
/**
 * Get the signed angle in the interval [-pi,pi] between two 2D vectors (positive if `a` is to the right of `b`)
 *
 * @param {ReadonlyVec2} a The first vector
 * @param {ReadonlyVec2} b The second vector
 * @returns {number} The signed angle in radians
 */
export function signedAngle(a: ReadonlyVec2, b: ReadonlyVec2): number;
/**
 * Set the components of a vec2 to zero
 *
 * @template {Vec2} T
 * @param {T} out the receiving vector
 * @returns {ReturnType.Vec2<T>} out
 */
export function zero<T extends Vec2>(out: T): ReturnType.Vec2<T>;
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
export function str(a: ReadonlyVec2): string;
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
export function exactEquals(a: ReadonlyVec2, b: ReadonlyVec2): boolean;
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
export function equals(a: ReadonlyVec2, b: ReadonlyVec2): boolean;
/**
 * Calculates the length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate length of
 * @returns {Number} length of a
 */
export function len(a: ReadonlyVec2): number;
/**
 * Subtracts vector b from vector a
 *
 * @template {Vec2} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {ReturnType.Vec2<T>} out
 */
export function sub<T extends Vec2>(out: T, a: ReadonlyVec2, b: ReadonlyVec2): ReturnType.Vec2<T>;
/**
 * Multiplies two vec2's
 *
 * @template {Vec2} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {ReturnType.Vec2<T>} out
 */
export function mul<T extends Vec2>(out: T, a: ReadonlyVec2, b: ReadonlyVec2): ReturnType.Vec2<T>;
/**
 * Divides two vec2's
 *
 * @template {Vec2} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {ReturnType.Vec2<T>} out
 */
export function div<T extends Vec2>(out: T, a: ReadonlyVec2, b: ReadonlyVec2): ReturnType.Vec2<T>;
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} distance between a and b
 */
export function dist(a: ReadonlyVec2, b: ReadonlyVec2): number;
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
export function sqrDist(a: ReadonlyVec2, b: ReadonlyVec2): number;
/**
 * Calculates the squared length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
export function sqrLen(a: ReadonlyVec2): number;
export function forEach(a: any, stride: any, offset: any, count: any, fn: any, arg: any): any;
