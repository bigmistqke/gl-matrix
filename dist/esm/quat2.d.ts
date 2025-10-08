import type { ArrayType, Mat2, Mat2d, Mat3, Mat4, Quat, Quat2, Vec2, Vec3, Vec4, ReadonlyMat2, ReadonlyMat2d, ReadonlyMat3, ReadonlyMat4, ReadonlyQuat, ReadonlyQuat2, ReadonlyVec2, ReadonlyVec3, ReadonlyVec4, ReturnType } from "./types.js";

/**
 * Dual Quaternion<br>
 * Format: [real, dual]<br>
 * Quaternion format: XYZW<br>
 * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
 * @module quat2
 */
/**
 * Creates a new identity dual quat
 *
 * @returns {ArrayType} a new dual quaternion [real -> rotation, dual -> translation]
 */
export function create(): ArrayType;
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {ReadonlyQuat2} a dual quaternion to clone
 * @returns {ArrayType} new dual quaternion
 * @function
 */
export function clone(a: ReadonlyQuat2): ArrayType;
/**
 * Creates a new dual quat initialized with the given values
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {ArrayType} new dual quaternion
 * @function
 */
export function fromValues(x1: number, y1: number, z1: number, w1: number, x2: number, y2: number, z2: number, w2: number): ArrayType;
/**
 * Creates a new dual quat from the given values (quat and translation)
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component (translation)
 * @param {Number} y2 Y component (translation)
 * @param {Number} z2 Z component (translation)
 * @returns {ArrayType} new dual quaternion
 * @function
 */
export function fromRotationTranslationValues(x1: number, y1: number, z1: number, w1: number, x2: number, y2: number, z2: number): ArrayType;
/**
 * Creates a dual quat from a quaternion and a translation
 *
 * @template {Quat2} T
 * @param {T} out dual quaternion receiving operation result
 * @param {ReadonlyQuat} q a normalized quaternion
 * @param {ReadonlyVec3} t translation vector
 * @returns {ReturnType.Quat2<T>} dual quaternion receiving operation result
 * @function
 */
export function fromRotationTranslation<T_1 extends Quat2>(out: T_1, q: ReadonlyQuat, t: ReadonlyVec3): ReturnType.Quat2<T_1>;
/**
 * Creates a dual quat from a translation
 *
 * @template {Quat2} T
 * @param {T} out dual quaternion receiving operation result
 * @param {ReadonlyVec3} t translation vector
 * @returns {ReturnType.Quat2<T>} dual quaternion receiving operation result
 * @function
 */
export function fromTranslation<T_1 extends Quat2>(out: T_1, t: ReadonlyVec3): ReturnType.Quat2<T_1>;
/**
 * Creates a dual quat from a quaternion
 *
 * @template {Quat2} T
 * @param {T} out dual quaternion receiving operation result
 * @param {ReadonlyQuat} q the quaternion
 * @returns {ReturnType.Quat2<T>} dual quaternion receiving operation result
 * @function
 */
export function fromRotation<T_1 extends Quat2>(out: T_1, q: ReadonlyQuat): ReturnType.Quat2<T_1>;
/**
 * Creates a new dual quat from a matrix (4x4)
 *
 * @template {Quat2} T
 * @param {T} out the dual quaternion
 * @param {ReadonlyMat4} a the matrix
 * @returns {ReturnType.Quat2<T>} dual quat receiving operation result
 * @function
 */
export function fromMat4<T_1 extends Quat2>(out: T_1, a: ReadonlyMat4): ReturnType.Quat2<T_1>;
/**
 * Copy the values from one dual quat to another
 *
 * @template {Quat2} T
 * @param {T} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the source dual quaternion
 * @returns {ReturnType.Quat2<T>} out
 * @function
 */
export function copy<T_1 extends Quat2>(out: T_1, a: ReadonlyQuat2): ReturnType.Quat2<T_1>;
/**
 * Set a dual quat to the identity dual quaternion
 *
 * @template {Quat2} T
 * @param {T} out the receiving quaternion
 * @returns {ReturnType.Quat2<T>} out
 */
export function identity<T_1 extends Quat2>(out: T_1): ReturnType.Quat2<T_1>;
/**
 * Set the components of a dual quat to the given values
 *
 * @template {Quat2} T
 * @param {T} out the receiving quaternion
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {ReturnType.Quat2<T>} out
 * @function
 */
export function set<T_1 extends Quat2>(out: T_1, x1: number, y1: number, z1: number, w1: number, x2: number, y2: number, z2: number, w2: number): ReturnType.Quat2<T_1>;
/**
 * Gets the dual part of a dual quat
 * @param  {Quat} out dual part
 * @param  {ReadonlyQuat2} a Dual Quaternion
 * @return {Quat} dual part
 */
export function getDual(out: Quat, a: ReadonlyQuat2): Quat;
/**
 * Set the dual component of a dual quat to the given quaternion
 *
 * @template {Quat2} T
 * @param {T} out the receiving quaternion
 * @param {ReadonlyQuat} q a quaternion representing the dual part
 * @returns {ReturnType.Quat2<T>} out
 * @function
 */
export function setDual<T_1 extends Quat2>(out: T_1, q: ReadonlyQuat): ReturnType.Quat2<T_1>;
/**
 * Gets the translation of a normalized dual quat
 * @param  {Vec3} out translation
 * @param  {ReadonlyQuat2} a Dual Quaternion to be decomposed
 * @return {Vec3} translation
 */
export function getTranslation(out: Vec3, a: ReadonlyQuat2): Vec3;
/**
 * Translates a dual quat by the given vector
 *
 * @template {Quat2} T
 * @param {T} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {ReturnType.Quat2<T>} out
 */
export function translate<T_1 extends Quat2>(out: T_1, a: ReadonlyQuat2, v: ReadonlyVec3): ReturnType.Quat2<T_1>;
/**
 * Rotates a dual quat around the X axis
 *
 * @template {Quat2} T
 * @param {T} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {ReturnType.Quat2<T>} out
 */
export function rotateX<T_1 extends Quat2>(out: T_1, a: ReadonlyQuat2, rad: number): ReturnType.Quat2<T_1>;
/**
 * Rotates a dual quat around the Y axis
 *
 * @template {Quat2} T
 * @param {T} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {ReturnType.Quat2<T>} out
 */
export function rotateY<T_1 extends Quat2>(out: T_1, a: ReadonlyQuat2, rad: number): ReturnType.Quat2<T_1>;
/**
 * Rotates a dual quat around the Z axis
 *
 * @template {Quat2} T
 * @param {T} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {ReturnType.Quat2<T>} out
 */
export function rotateZ<T_1 extends Quat2>(out: T_1, a: ReadonlyQuat2, rad: number): ReturnType.Quat2<T_1>;
/**
 * Rotates a dual quat by a given quaternion (a * q)
 *
 * @template {Quat2} T
 * @param {T} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {ReadonlyQuat} q quaternion to rotate by
 * @returns {ReturnType.Quat2<T>} out
 */
export function rotateByQuatAppend<T_1 extends Quat2>(out: T_1, a: ReadonlyQuat2, q: ReadonlyQuat): ReturnType.Quat2<T_1>;
/**
 * Rotates a dual quat by a given quaternion (q * a)
 *
 * @template {Quat2} T
 * @param {T} out the receiving dual quaternion
 * @param {ReadonlyQuat} q quaternion to rotate by
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @returns {ReturnType.Quat2<T>} out
 */
export function rotateByQuatPrepend<T_1 extends Quat2>(out: T_1, q: ReadonlyQuat, a: ReadonlyQuat2): ReturnType.Quat2<T_1>;
/**
 * Rotates a dual quat around a given axis. Does the normalisation automatically
 *
 * @template {Quat2} T
 * @param {T} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @param {Number} rad how far the rotation should be
 * @returns {ReturnType.Quat2<T>} out
 */
export function rotateAroundAxis<T_1 extends Quat2>(out: T_1, a: ReadonlyQuat2, axis: ReadonlyVec3, rad: number): ReturnType.Quat2<T_1>;
/**
 * Adds two dual quat's
 *
 * @template {Quat2} T
 * @param {T} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {ReturnType.Quat2<T>} out
 * @function
 */
export function add<T_1 extends Quat2>(out: T_1, a: ReadonlyQuat2, b: ReadonlyQuat2): ReturnType.Quat2<T_1>;
/**
 * Multiplies two dual quat's
 *
 * @template {Quat2} T
 * @param {T} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {ReturnType.Quat2<T>} out
 */
export function multiply<T_1 extends Quat2>(out: T_1, a: ReadonlyQuat2, b: ReadonlyQuat2): ReturnType.Quat2<T_1>;
/**
 * Scales a dual quat by a scalar number
 *
 * @template {Quat2} T
 * @param {T} out the receiving dual quat
 * @param {ReadonlyQuat2} a the dual quat to scale
 * @param {Number} b amount to scale the dual quat by
 * @returns {ReturnType.Quat2<T>} out
 * @function
 */
export function scale<T_1 extends Quat2>(out: T_1, a: ReadonlyQuat2, b: number): ReturnType.Quat2<T_1>;
/**
 * Performs a linear interpolation between two dual quats's
 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
 *
 * @template {Quat2} T
 * @param {T} out the receiving dual quat
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {ReturnType.Quat2<T>} out
 */
export function lerp<T_1 extends Quat2>(out: T_1, a: ReadonlyQuat2, b: ReadonlyQuat2, t: number): ReturnType.Quat2<T_1>;
/**
 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
 *
 * @template {Quat2} T
 * @param {T} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a dual quat to calculate inverse of
 * @returns {ReturnType.Quat2<T>} out
 */
export function invert<T_1 extends Quat2>(out: T_1, a: ReadonlyQuat2): ReturnType.Quat2<T_1>;
/**
 * Calculates the conjugate of a dual quat
 * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
 *
 * @template {Quat2} T
 * @param {T} out the receiving quaternion
 * @param {ReadonlyQuat2} a quat to calculate conjugate of
 * @returns {ReturnType.Quat2<T>} out
 */
export function conjugate<T_1 extends Quat2>(out: T_1, a: ReadonlyQuat2): ReturnType.Quat2<T_1>;
/**
 * Normalize a dual quat
 *
 * @template {Quat2} T
 * @param {T} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a dual quaternion to normalize
 * @returns {ReturnType.Quat2<T>} out
 * @function
 */
export function normalize<T_1 extends Quat2>(out: T_1, a: ReadonlyQuat2): ReturnType.Quat2<T_1>;
/**
 * Returns a string representation of a dual quaternion
 *
 * @param {ReadonlyQuat2} a dual quaternion to represent as a string
 * @returns {String} string representation of the dual quat
 */
export function str(a: ReadonlyQuat2): string;
/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyQuat2} a the first dual quaternion.
 * @param {ReadonlyQuat2} b the second dual quaternion.
 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
 */
export function exactEquals(a: ReadonlyQuat2, b: ReadonlyQuat2): boolean;
/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param {ReadonlyQuat2} a the first dual quat.
 * @param {ReadonlyQuat2} b the second dual quat.
 * @returns {Boolean} true if the dual quats are equal, false otherwise.
 */
export function equals(a: ReadonlyQuat2, b: ReadonlyQuat2): boolean;
/**
 * Gets the real part of a dual quat
 * @param  {Quat} out real part
 * @param  {ReadonlyQuat2} a Dual Quaternion
 * @return {Quat} real part
 */
export const getReal: typeof import("./vec4.js").copy;
/**
 * Set the real component of a dual quat to the given quaternion
 *
 * @template {Quat2} T
 * @param {T} out the receiving quaternion
 * @param {ReadonlyQuat} q a quaternion representing the real part
 * @returns {ReturnType.Quat2<T>} out
 * @function
 */
export const setReal: typeof import("./vec4.js").copy;
/**
 * Multiplies two dual quat's
 *
 * @template {Quat2} T
 * @param {T} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {ReturnType.Quat2<T>} out
 */
export function mul<T_1 extends Quat2>(out: T_1, a: ReadonlyQuat2, b: ReadonlyQuat2): ReturnType.Quat2<T_1>;
/**
 * Calculates the dot product of two dual quat's (The dot product of the real parts)
 *
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
export const dot: typeof import("./vec4.js").dot;
/**
 * Calculates the length of a dual quat
 *
 * @param {ReadonlyQuat2} a dual quat to calculate length of
 * @returns {Number} length of a
 * @function
 */
export const length: typeof import("./vec4.js").length;
/**
 * Alias for {@link quat2.length}
 * @function
 */
export const len: typeof import("./vec4.js").length;
/**
 * Calculates the squared length of a dual quat
 *
 * @param {ReadonlyQuat2} a dual quat to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
export const squaredLength: typeof import("./vec4.js").squaredLength;
/**
 * Alias for {@link quat2.squaredLength}
 * @function
 */
export const sqrLen: typeof import("./vec4.js").squaredLength;
