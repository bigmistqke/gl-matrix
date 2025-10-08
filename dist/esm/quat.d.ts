import type { ArrayType, Mat2, Mat2d, Mat3, Mat4, Quat, Quat2, Vec2, Vec3, Vec4, ReadonlyMat2, ReadonlyMat2d, ReadonlyMat3, ReadonlyMat4, ReadonlyQuat, ReadonlyQuat2, ReadonlyVec2, ReadonlyVec3, ReadonlyVec4, ReturnType } from "./types.js";

/**
 * Quaternion in the format XYZW
 * @module quat
 */
/**
 * Creates a new identity quat
 *
 * @returns {ReturnType.Quat<ArrayType>} a new quaternion
 */
export function create(): ReturnType.Quat<ArrayType>;
/**
 * Set a quat to the identity quaternion
 *
 * @template {Quat} T
 * @param {T} out the receiving quaternion
 * @returns {ReturnType.Quat<T>} out
 */
export function identity<T_1 extends Quat>(out: T_1): ReturnType.Quat<T_1>;
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @template {Quat} T
 * @param {T} out the receiving quaternion
 * @param {ReadonlyVec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {ReturnType.Quat<T>} out
 **/
export function setAxisAngle<T_1 extends Quat>(out: T_1, axis: ReadonlyVec3, rad: number): ReturnType.Quat<T_1>;
/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {Vec3} out_axis  Vector receiving the axis of rotation
 * @param  {ReadonlyQuat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */
export function getAxisAngle(out_axis: Vec3, q: ReadonlyQuat): number;
/**
 * Gets the angular distance between two unit quaternions
 *
 * @param  {ReadonlyQuat} a     Origin unit quaternion
 * @param  {ReadonlyQuat} b     Destination unit quaternion
 * @return {Number}     Angle, in radians, between the two quaternions
 */
export function getAngle(a: ReadonlyQuat, b: ReadonlyQuat): number;
/**
 * Multiplies two quat's
 *
 * @template {Quat} T
 * @param {T} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {ReturnType.Quat<T>} out
 */
export function multiply<T_1 extends Quat>(out: T_1, a: ReadonlyQuat, b: ReadonlyQuat): ReturnType.Quat<T_1>;
/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @template {Quat} T
 * @param {T} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {ReturnType.Quat<T>} out
 */
export function rotateX<T_1 extends Quat>(out: T_1, a: ReadonlyQuat, rad: number): ReturnType.Quat<T_1>;
/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @template {Quat} T
 * @param {T} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {ReturnType.Quat<T>} out
 */
export function rotateY<T_1 extends Quat>(out: T_1, a: ReadonlyQuat, rad: number): ReturnType.Quat<T_1>;
/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @template {Quat} T
 * @param {T} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {ReturnType.Quat<T>} out
 */
export function rotateZ<T_1 extends Quat>(out: T_1, a: ReadonlyQuat, rad: number): ReturnType.Quat<T_1>;
/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @template {Quat} T
 * @param {T} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate W component of
 * @returns {ReturnType.Quat<T>} out
 */
export function calculateW<T_1 extends Quat>(out: T_1, a: ReadonlyQuat): ReturnType.Quat<T_1>;
/**
 * Calculate the exponential of a unit quaternion.
 *
 * @template {Quat} T
 * @param {T} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {ReturnType.Quat<T>} out
 */
export function exp<T_1 extends Quat>(out: T_1, a: ReadonlyQuat): ReturnType.Quat<T_1>;
/**
 * Calculate the natural logarithm of a unit quaternion.
 *
 * @template {Quat} T
 * @param {T} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {ReturnType.Quat<T>} out
 */
export function ln<T_1 extends Quat>(out: T_1, a: ReadonlyQuat): ReturnType.Quat<T_1>;
/**
 * Calculate the scalar power of a unit quaternion.
 *
 * @template {Quat} T
 * @param {T} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @param {Number} b amount to scale the quaternion by
 * @returns {ReturnType.Quat<T>} out
 */
export function pow<T_1 extends Quat>(out: T_1, a: ReadonlyQuat, b: number): ReturnType.Quat<T_1>;
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @template {Quat} T
 * @param {T} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {ReturnType.Quat<T>} out
 */
export function slerp<T_1 extends Quat>(out: T_1, a: ReadonlyQuat, b: ReadonlyQuat, t: number): ReturnType.Quat<T_1>;
/**
 * Generates a random unit quaternion
 *
 * @template {Quat} T
 * @param {T} out the receiving quaternion
 * @returns {ReturnType.Quat<T>} out
 */
export function random<T_1 extends Quat>(out: T_1): ReturnType.Quat<T_1>;
/**
 * Calculates the inverse of a quat
 *
 * @template {Quat} T
 * @param {T} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate inverse of
 * @returns {ReturnType.Quat<T>} out
 */
export function invert<T_1 extends Quat>(out: T_1, a: ReadonlyQuat): ReturnType.Quat<T_1>;
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @template {Quat} T
 * @param {T} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate conjugate of
 * @returns {ReturnType.Quat<T>} out
 */
export function conjugate<T_1 extends Quat>(out: T_1, a: ReadonlyQuat): ReturnType.Quat<T_1>;
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @template {Quat} T
 * @param {T} out the receiving quaternion
 * @param {ReadonlyMat3} m rotation matrix
 * @returns {ReturnType.Quat<T>} out
 * @function
 */
export function fromMat3<T_1 extends Quat>(out: T_1, m: ReadonlyMat3): ReturnType.Quat<T_1>;
/**
 * Creates a quaternion from the given euler angle x, y, z using the provided intrinsic order for the conversion.
 *
 * @template {Quat} T
 * @param {T} out the receiving quaternion
 * @param {Number} x Angle to rotate around X axis in degrees.
 * @param {Number} y Angle to rotate around Y axis in degrees.
 * @param {Number} z Angle to rotate around Z axis in degrees.
 * @param {'xyz'|'xzy'|'yxz'|'yzx'|'zxy'|'zyx'} order Intrinsic order for conversion, default is zyx.
 * @returns {ReturnType.Quat<T>} out
 * @function
 */
export function fromEuler<T_1 extends Quat>(out: T_1, x: number, y: number, z: number, order?: "xyz" | "xzy" | "yxz" | "yzx" | "zxy" | "zyx"): ReturnType.Quat<T_1>;
/**
 * Returns a string representation of a quaternion
 *
 * @param {ReadonlyQuat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
export function str(a: ReadonlyQuat): string;
/**
 * Returns whether or not the quaternions point approximately to the same direction.
 *
 * Both quaternions are assumed to be unit length.
 *
 * @param {ReadonlyQuat} a The first unit quaternion.
 * @param {ReadonlyQuat} b The second unit quaternion.
 * @returns {Boolean} True if the quaternions are equal, false otherwise.
 */
export function equals(a: ReadonlyQuat, b: ReadonlyQuat): boolean;
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {ReadonlyQuat} a quaternion to clone
 * @returns {ReturnType.Quat<ArrayType>} a new quaternion
 * @function
 */
export const clone: typeof vec4.clone;
/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {ReturnType.Quat<ArrayType>} a new quaternion
 * @function
 */
export const fromValues: typeof vec4.fromValues;
/**
 * Copy the values from one quat to another
 *
 * @template {Quat} T
 * @param {T} out the receiving quaternion
 * @param {ReadonlyQuat} a the source quaternion
 * @returns {ReturnType.Quat<T>} out
 * @function
 */
export const copy: typeof vec4.copy;
/**
 * Set the components of a quat to the given values
 *
 * @template {Quat} T
 * @param {T} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {ReturnType.Quat<T>} out
 * @function
 */
export const set: typeof vec4.set;
/**
 * Adds two quat's
 *
 * @template {Quat} T
 * @param {T} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {ReturnType.Quat<T>} out
 * @function
 */
export const add: typeof vec4.add;
/**
 * Multiplies two quat's
 *
 * @template {Quat} T
 * @param {T} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {ReturnType.Quat<T>} out
 */
export function mul<T_1 extends Quat>(out: T_1, a: ReadonlyQuat, b: ReadonlyQuat): ReturnType.Quat<T_1>;
/**
 * Scales a quat by a scalar number
 *
 * @template {Quat} T
 * @param {T} out the receiving vector
 * @param {ReadonlyQuat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {ReturnType.Quat<T>} out
 * @function
 */
export const scale: typeof vec4.scale;
/**
 * Calculates the dot product of two quat's
 *
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
export const dot: typeof vec4.dot;
/**
 * Performs a linear interpolation between two quat's
 *
 * @template {Quat} T
 * @param {T} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {ReturnType.Quat<T>} out
 * @function
 */
export const lerp: typeof vec4.lerp;
/**
 * Calculates the length of a quat
 *
 * @param {ReadonlyQuat} a vector to calculate length of
 * @returns {Number} length of a
 */
export const length: typeof vec4.length;
/**
 * Alias for {@link quat.length}
 * @function
 */
export const len: typeof vec4.length;
/**
 * Calculates the squared length of a quat
 *
 * @param {ReadonlyQuat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
export const squaredLength: typeof vec4.squaredLength;
/**
 * Alias for {@link quat.squaredLength}
 * @function
 */
export const sqrLen: typeof vec4.squaredLength;
/**
 * Normalize a quat
 *
 * @template {Quat} T
 * @param {T} out the receiving quaternion
 * @param {ReadonlyQuat} a quaternion to normalize
 * @returns {ReturnType.Quat<T>} out
 * @function
 */
export const normalize: typeof vec4.normalize;
/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyQuat} a The first quaternion.
 * @param {ReadonlyQuat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
export const exactEquals: typeof vec4.exactEquals;
export function rotationTo(out: any, a: any, b: any): any;
export function sqlerp(out: any, a: any, b: any, c: any, d: any, t: any): any;
export function setAxes(out: any, view: any, right: any, up: any): any;
import * as vec4 from "./vec4.js";
