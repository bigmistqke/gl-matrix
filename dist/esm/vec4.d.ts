import type { ArrayType, Mat2, Mat2d, Mat3, Mat4, Quat, Quat2, Vec2, Vec3, Vec4, ReadonlyMat2, ReadonlyMat2d, ReadonlyMat3, ReadonlyMat4, ReadonlyQuat, ReadonlyQuat2, ReadonlyVec2, ReadonlyVec3, ReadonlyVec4, ReturnType } from "./types.js";

/**
 * 4 Dimensional Vector
 * @module vec4
*/
/**
 * Creates a new, empty vec4
 *
 * @returns {ArrayType} a new 4D vector
 */
export function create(): ArrayType;
/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {ReadonlyVec4} a vector to clone
 * @returns {ArrayType} a new 4D vector
 */
export function clone(a: ReadonlyVec4): ArrayType;
/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {ArrayType} a new 4D vector
 */
export function fromValues(x: number, y: number, z: number, w: number): ArrayType;
/**
 * Copy the values from one vec4 to another
 *
 * @template {Vec4} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec4} a the source vector
 * @returns {ReturnType.Vec4<T>} out
 */
export function copy<T extends Vec4>(out: T, a: ReadonlyVec4): ReturnType.Vec4<T>;
/**
 * Set the components of a vec4 to the given values
 *
 * @template {Vec4} T
 * @param {T} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {ReturnType.Vec4<T>} out
 */
export function set<T extends Vec4>(out: T, x: number, y: number, z: number, w: number): ReturnType.Vec4<T>;
/**
 * Adds two vec4's
 *
 * @template {Vec4} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {ReturnType.Vec4<T>} out
 */
export function add<T extends Vec4>(out: T, a: ReadonlyVec4, b: ReadonlyVec4): ReturnType.Vec4<T>;
/**
 * Subtracts vector b from vector a
 *
 * @template {Vec4} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {ReturnType.Vec4<T>} out
 */
export function subtract<T extends Vec4>(out: T, a: ReadonlyVec4, b: ReadonlyVec4): ReturnType.Vec4<T>;
/**
 * Multiplies two vec4's
 *
 * @template {Vec4} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {ReturnType.Vec4<T>} out
 */
export function multiply<T extends Vec4>(out: T, a: ReadonlyVec4, b: ReadonlyVec4): ReturnType.Vec4<T>;
/**
 * Divides two vec4's
 *
 * @template {Vec4} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {ReturnType.Vec4<T>} out
 */
export function divide<T extends Vec4>(out: T, a: ReadonlyVec4, b: ReadonlyVec4): ReturnType.Vec4<T>;
/**
 * Math.ceil the components of a vec4
 *
 * @template {Vec4} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec4} a vector to ceil
 * @returns {ReturnType.Vec4<T>} out
 */
export function ceil<T extends Vec4>(out: T, a: ReadonlyVec4): ReturnType.Vec4<T>;
/**
 * Math.floor the components of a vec4
 *
 * @template {Vec4} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec4} a vector to floor
 * @returns {ReturnType.Vec4<T>} out
 */
export function floor<T extends Vec4>(out: T, a: ReadonlyVec4): ReturnType.Vec4<T>;
/**
 * Returns the minimum of two vec4's
 *
 * @template {Vec4} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {ReturnType.Vec4<T>} out
 */
export function min<T extends Vec4>(out: T, a: ReadonlyVec4, b: ReadonlyVec4): ReturnType.Vec4<T>;
/**
 * Returns the maximum of two vec4's
 *
 * @template {Vec4} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {ReturnType.Vec4<T>} out
 */
export function max<T extends Vec4>(out: T, a: ReadonlyVec4, b: ReadonlyVec4): ReturnType.Vec4<T>;
/**
 * symmetric round the components of a vec4
 *
 * @template {Vec4} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec4} a vector to round
 * @returns {ReturnType.Vec4<T>} out
 */
export function round<T extends Vec4>(out: T, a: ReadonlyVec4): ReturnType.Vec4<T>;
/**
 * Scales a vec4 by a scalar number
 *
 * @template {Vec4} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {ReturnType.Vec4<T>} out
 */
export function scale<T extends Vec4>(out: T, a: ReadonlyVec4, b: number): ReturnType.Vec4<T>;
/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @template {Vec4} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {ReturnType.Vec4<T>} out
 */
export function scaleAndAdd<T extends Vec4>(out: T, a: ReadonlyVec4, b: ReadonlyVec4, scale: number): ReturnType.Vec4<T>;
/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} distance between a and b
 */
export function distance(a: ReadonlyVec4, b: ReadonlyVec4): number;
/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
export function squaredDistance(a: ReadonlyVec4, b: ReadonlyVec4): number;
/**
 * Calculates the length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate length of
 * @returns {Number} length of a
 */
export function length(a: ReadonlyVec4): number;
/**
 * Calculates the squared length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
export function squaredLength(a: ReadonlyVec4): number;
/**
 * Negates the components of a vec4
 *
 * @template {Vec4} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec4} a vector to negate
 * @returns {ReturnType.Vec4<T>} out
 */
export function negate<T extends Vec4>(out: T, a: ReadonlyVec4): ReturnType.Vec4<T>;
/**
 * Returns the inverse of the components of a vec4
 *
 * @template {Vec4} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec4} a vector to invert
 * @returns {ReturnType.Vec4<T>} out
 */
export function inverse<T extends Vec4>(out: T, a: ReadonlyVec4): ReturnType.Vec4<T>;
/**
 * Normalize a vec4
 *
 * @template {Vec4} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec4} a vector to normalize
 * @returns {ReturnType.Vec4<T>} out
 */
export function normalize<T extends Vec4>(out: T, a: ReadonlyVec4): ReturnType.Vec4<T>;
/**
 * Calculates the dot product of two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} dot product of a and b
 */
export function dot(a: ReadonlyVec4, b: ReadonlyVec4): number;
/**
 * Returns the cross-product of three vectors in a 4-dimensional space
 *
 * @template {Vec4} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec4} u the first vector
 * @param {ReadonlyVec4} v the second vector
 * @param {ReadonlyVec4} w the third vector
 * @returns {ReturnType.Vec4<T>} result
 */
export function cross<T extends Vec4>(out: T, u: ReadonlyVec4, v: ReadonlyVec4, w: ReadonlyVec4): ReturnType.Vec4<T>;
/**
 * Performs a linear interpolation between two vec4's
 *
 * @template {Vec4} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {ReturnType.Vec4<T>} out
 */
export function lerp<T extends Vec4>(out: T, a: ReadonlyVec4, b: ReadonlyVec4, t: number): ReturnType.Vec4<T>;
/**
 * Generates a random vector with the given scale
 *
 * @template {Vec4} T
 * @param {T} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If omitted, a unit vector will be returned
 * @returns {ReturnType.Vec4<T>} out
 */
export function random<T extends Vec4>(out: T, scale?: number): ReturnType.Vec4<T>;
/**
 * Transforms the vec4 with a mat4.
 *
 * @template {Vec4} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {ReturnType.Vec4<T>} out
 */
export function transformMat4<T extends Vec4>(out: T, a: ReadonlyVec4, m: ReadonlyMat4): ReturnType.Vec4<T>;
/**
 * Transforms the vec4 with a quat
 *
 * @template {Vec4} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyQuat} q normalized quaternion to transform with
 * @returns {ReturnType.Vec4<T>} out
 */
export function transformQuat<T extends Vec4>(out: T, a: ReadonlyVec4, q: ReadonlyQuat): ReturnType.Vec4<T>;
/**
 * Set the components of a vec4 to zero
 *
 * @template {Vec4} T
 * @param {T} out the receiving vector
 * @returns {ReturnType.Vec4<T>} out
 */
export function zero<T extends Vec4>(out: T): ReturnType.Vec4<T>;
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
export function str(a: ReadonlyVec4): string;
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
export function exactEquals(a: ReadonlyVec4, b: ReadonlyVec4): boolean;
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
export function equals(a: ReadonlyVec4, b: ReadonlyVec4): boolean;
/**
 * Subtracts vector b from vector a
 *
 * @template {Vec4} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {ReturnType.Vec4<T>} out
 */
export function sub<T extends Vec4>(out: T, a: ReadonlyVec4, b: ReadonlyVec4): ReturnType.Vec4<T>;
/**
 * Multiplies two vec4's
 *
 * @template {Vec4} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {ReturnType.Vec4<T>} out
 */
export function mul<T extends Vec4>(out: T, a: ReadonlyVec4, b: ReadonlyVec4): ReturnType.Vec4<T>;
/**
 * Divides two vec4's
 *
 * @template {Vec4} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {ReturnType.Vec4<T>} out
 */
export function div<T extends Vec4>(out: T, a: ReadonlyVec4, b: ReadonlyVec4): ReturnType.Vec4<T>;
/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} distance between a and b
 */
export function dist(a: ReadonlyVec4, b: ReadonlyVec4): number;
/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
export function sqrDist(a: ReadonlyVec4, b: ReadonlyVec4): number;
/**
 * Calculates the length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate length of
 * @returns {Number} length of a
 */
export function len(a: ReadonlyVec4): number;
/**
 * Calculates the squared length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
export function sqrLen(a: ReadonlyVec4): number;
export function forEach(a: any, stride: any, offset: any, count: any, fn: any, arg: any): any;
