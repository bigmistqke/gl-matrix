import type { ArrayType, Mat2, Mat2d, Mat3, Mat4, Quat, Quat2, Vec2, Vec3, Vec4, ReadonlyMat2, ReadonlyMat2d, ReadonlyMat3, ReadonlyMat4, ReadonlyQuat, ReadonlyQuat2, ReadonlyVec2, ReadonlyVec3, ReadonlyVec4, ReturnType } from "./types.js";

/**
 * 3 Dimensional Vector
 * @module vec3
 */
/**
 * Creates a new, empty vec3
 *
 * @returns {ArrayType} a new 3D vector
 */
export function create(): ArrayType;
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {ReadonlyVec3} a vector to clone
 * @returns {ArrayType} a new 3D vector
 */
export function clone(a: ReadonlyVec3): ArrayType;
/**
 * Calculates the length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate length of
 * @returns {Number} length of a
 */
export function length(a: ReadonlyVec3): number;
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {ArrayType} a new 3D vector
 */
export function fromValues(x: number, y: number, z: number): ArrayType;
/**
 * Copy the values from one vec3 to another
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec3} a the source vector
 * @returns {ReturnType.Vec3<T>} out
 */
export function copy<T extends Vec3>(out: T, a: ReadonlyVec3): ReturnType.Vec3<T>;
/**
 * Set the components of a vec3 to the given values
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {ReturnType.Vec3<T>} out
 */
export function set<T extends Vec3>(out: T, x: number, y: number, z: number): ReturnType.Vec3<T>;
/**
 * Adds two vec3's
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {ReturnType.Vec3<T>} out
 */
export function add<T extends Vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3): ReturnType.Vec3<T>;
/**
 * Subtracts vector b from vector a
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {ReturnType.Vec3<T>} out
 */
export function subtract<T extends Vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3): ReturnType.Vec3<T>;
/**
 * Multiplies two vec3's
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {ReturnType.Vec3<T>} out
 */
export function multiply<T extends Vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3): ReturnType.Vec3<T>;
/**
 * Divides two vec3's
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {ReturnType.Vec3<T>} out
 */
export function divide<T extends Vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3): ReturnType.Vec3<T>;
/**
 * Math.ceil the components of a vec3
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec3} a vector to ceil
 * @returns {ReturnType.Vec3<T>} out
 */
export function ceil<T extends Vec3>(out: T, a: ReadonlyVec3): ReturnType.Vec3<T>;
/**
 * Math.floor the components of a vec3
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec3} a vector to floor
 * @returns {ReturnType.Vec3<T>} out
 */
export function floor<T extends Vec3>(out: T, a: ReadonlyVec3): ReturnType.Vec3<T>;
/**
 * Returns the minimum of two vec3's
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {ReturnType.Vec3<T>} out
 */
export function min<T extends Vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3): ReturnType.Vec3<T>;
/**
 * Returns the maximum of two vec3's
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {ReturnType.Vec3<T>} out
 */
export function max<T extends Vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3): ReturnType.Vec3<T>;
/**
 * symmetric round the components of a vec3
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec3} a vector to round
 * @returns {ReturnType.Vec3<T>} out
 */
export function round<T extends Vec3>(out: T, a: ReadonlyVec3): ReturnType.Vec3<T>;
/**
 * Scales a vec3 by a scalar number
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {ReturnType.Vec3<T>} out
 */
export function scale<T extends Vec3>(out: T, a: ReadonlyVec3, b: number): ReturnType.Vec3<T>;
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {ReturnType.Vec3<T>} out
 */
export function scaleAndAdd<T extends Vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3, scale: number): ReturnType.Vec3<T>;
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} distance between a and b
 */
export function distance(a: ReadonlyVec3, b: ReadonlyVec3): number;
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
export function squaredDistance(a: ReadonlyVec3, b: ReadonlyVec3): number;
/**
 * Calculates the squared length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
export function squaredLength(a: ReadonlyVec3): number;
/**
 * Negates the components of a vec3
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec3} a vector to negate
 * @returns {ReturnType.Vec3<T>} out
 */
export function negate<T extends Vec3>(out: T, a: ReadonlyVec3): ReturnType.Vec3<T>;
/**
 * Returns the inverse of the components of a vec3
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec3} a vector to invert
 * @returns {ReturnType.Vec3<T>} out
 */
export function inverse<T extends Vec3>(out: T, a: ReadonlyVec3): ReturnType.Vec3<T>;
/**
 * Normalize a vec3
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec3} a vector to normalize
 * @returns {ReturnType.Vec3<T>} out
 */
export function normalize<T extends Vec3>(out: T, a: ReadonlyVec3): ReturnType.Vec3<T>;
/**
 * Calculates the dot product of two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} dot product of a and b
 */
export function dot(a: ReadonlyVec3, b: ReadonlyVec3): number;
/**
 * Computes the cross product of two vec3's
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {ReturnType.Vec3<T>} out
 */
export function cross<T extends Vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3): ReturnType.Vec3<T>;
/**
 * Performs a linear interpolation between two vec3's
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {ReturnType.Vec3<T>} out
 */
export function lerp<T extends Vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3, t: number): ReturnType.Vec3<T>;
/**
 * Performs a spherical linear interpolation between two vec3's
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {ReturnType.Vec3<T>} out
 */
export function slerp<T extends Vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3, t: number): ReturnType.Vec3<T>;
/**
 * Performs a hermite interpolation with two control points
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {ReturnType.Vec3<T>} out
 */
export function hermite<T extends Vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3, c: ReadonlyVec3, d: ReadonlyVec3, t: number): ReturnType.Vec3<T>;
/**
 * Performs a bezier interpolation with two control points
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {ReturnType.Vec3<T>} out
 */
export function bezier<T extends Vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3, c: ReadonlyVec3, d: ReadonlyVec3, t: number): ReturnType.Vec3<T>;
/**
 * Generates a random vector with the given scale
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If omitted, a unit vector will be returned
 * @returns {ReturnType.Vec3<T>} out
 */
export function random<T extends Vec3>(out: T, scale?: number): ReturnType.Vec3<T>;
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {ReturnType.Vec3<T>} out
 */
export function transformMat4<T extends Vec3>(out: T, a: ReadonlyVec3, m: ReadonlyMat4): ReturnType.Vec3<T>;
/**
 * Transforms the vec3 with a mat3.
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat3} m the 3x3 matrix to transform with
 * @returns {ReturnType.Vec3<T>} out
 */
export function transformMat3<T extends Vec3>(out: T, a: ReadonlyVec3, m: ReadonlyMat3): ReturnType.Vec3<T>;
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyQuat} q normalized quaternion to transform with
 * @returns {ReturnType.Vec3<T>} out
 */
export function transformQuat<T extends Vec3>(out: T, a: ReadonlyVec3, q: ReadonlyQuat): ReturnType.Vec3<T>;
/**
 * Rotate a 3D vector around the x-axis
 * @template {Vec3} T
 * @param {T} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {ReturnType.Vec3<T>} out
 */
export function rotateX<T extends Vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3, rad: number): ReturnType.Vec3<T>;
/**
 * Rotate a 3D vector around the y-axis
 * @template {Vec3} T
 * @param {T} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {ReturnType.Vec3<T>} out
 */
export function rotateY<T extends Vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3, rad: number): ReturnType.Vec3<T>;
/**
 * Rotate a 3D vector around the z-axis
 * @template {Vec3} T
 * @param {T} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {ReturnType.Vec3<T>} out
 */
export function rotateZ<T extends Vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3, rad: number): ReturnType.Vec3<T>;
/**
 * Get the angle between two 3D vectors
 * @param {ReadonlyVec3} a The first operand
 * @param {ReadonlyVec3} b The second operand
 * @returns {Number} The angle in radians
 */
export function angle(a: ReadonlyVec3, b: ReadonlyVec3): number;
/**
 * Set the components of a vec3 to zero
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @returns {ReturnType.Vec3<T>} out
 */
export function zero<T extends Vec3>(out: T): ReturnType.Vec3<T>;
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
export function str(a: ReadonlyVec3): string;
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
export function exactEquals(a: ReadonlyVec3, b: ReadonlyVec3): boolean;
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
export function equals(a: ReadonlyVec3, b: ReadonlyVec3): boolean;
/**
 * Subtracts vector b from vector a
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {ReturnType.Vec3<T>} out
 */
export function sub<T extends Vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3): ReturnType.Vec3<T>;
/**
 * Multiplies two vec3's
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {ReturnType.Vec3<T>} out
 */
export function mul<T extends Vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3): ReturnType.Vec3<T>;
/**
 * Divides two vec3's
 *
 * @template {Vec3} T
 * @param {T} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {ReturnType.Vec3<T>} out
 */
export function div<T extends Vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3): ReturnType.Vec3<T>;
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} distance between a and b
 */
export function dist(a: ReadonlyVec3, b: ReadonlyVec3): number;
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
export function sqrDist(a: ReadonlyVec3, b: ReadonlyVec3): number;
/**
 * Calculates the length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate length of
 * @returns {Number} length of a
 */
export function len(a: ReadonlyVec3): number;
/**
 * Calculates the squared length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
export function sqrLen(a: ReadonlyVec3): number;
export function forEach(a: any, stride: any, offset: any, count: any, fn: any, arg: any): any;
