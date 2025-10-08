import type { ArrayType, Mat2, Mat2d, Mat3, Mat4, Quat, Quat2, Vec2, Vec3, Vec4, ReadonlyMat2, ReadonlyMat2d, ReadonlyMat3, ReadonlyMat4, ReadonlyQuat, ReadonlyQuat2, ReadonlyVec2, ReadonlyVec3, ReadonlyVec4, ReturnType } from "./types.js";

/**
 * 2x3 Matrix
 * @module mat2d
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, b,
 *  c, d,
 *  tx, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, b, 0,
 *  c, d, 0,
 *  tx, ty, 1]
 * </pre>
 * The last column is ignored so the array is shorter and operations are faster.
 */
/**
 * Creates a new identity mat2d
 *
 * @returns {ArrayType} a new 2x3 matrix
 */
export function create(): ArrayType;
/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {ReadonlyMat2d} a matrix to clone
 * @returns {ArrayType} a new 2x3 matrix
 */
export function clone(a: ReadonlyMat2d): ArrayType;
/**
 * Copy the values from one mat2d to another
 *
 * @template {Mat2d} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {ReturnType.Mat2d<T>} out
 */
export function copy<T extends Mat2d>(out: T, a: ReadonlyMat2d): ReturnType.Mat2d<T>;
/**
 * Set a mat2d to the identity matrix
 *
 * @template {Mat2d} T
 * @param {T} out the receiving matrix
 * @returns {ReturnType.Mat2d<T>} out
 */
export function identity<T extends Mat2d>(out: T): ReturnType.Mat2d<T>;
/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {ArrayType} A new mat2d
 */
export function fromValues(a: number, b: number, c: number, d: number, tx: number, ty: number): ArrayType;
/**
 * Set the components of a mat2d to the given values
 *
 * @template {Mat2d} T
 * @param {T} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {ReturnType.Mat2d<T>} out
 */
export function set<T extends Mat2d>(out: T, a: number, b: number, c: number, d: number, tx: number, ty: number): ReturnType.Mat2d<T>;
/**
 * Inverts a mat2d
 *
 * @template {Mat2d} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {ReturnType.Mat2d<T> | null} out, or null if source matrix is not invertible
 */
export function invert<T extends Mat2d>(out: T, a: ReadonlyMat2d): ReturnType.Mat2d<T> | null;
/**
 * Calculates the determinant of a mat2d
 *
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {Number} determinant of a
 */
export function determinant(a: ReadonlyMat2d): number;
/**
 * Multiplies two mat2d's
 *
 * @template {Mat2d} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {ReturnType.Mat2d<T>} out
 */
export function multiply<T extends Mat2d>(out: T, a: ReadonlyMat2d, b: ReadonlyMat2d): ReturnType.Mat2d<T>;
/**
 * Rotates a mat2d by the given angle
 *
 * @template {Mat2d} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {ReturnType.Mat2d<T>} out
 */
export function rotate<T extends Mat2d>(out: T, a: ReadonlyMat2d, rad: number): ReturnType.Mat2d<T>;
/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @template {Mat2d} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to translate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {ReturnType.Mat2d<T>} out
 **/
export function scale<T extends Mat2d>(out: T, a: ReadonlyMat2d, v: ReadonlyVec2): ReturnType.Mat2d<T>;
/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @template {Mat2d} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to translate
 * @param {ReadonlyVec2} v the vec2 to translate the matrix by
 * @returns {ReturnType.Mat2d<T>} out
 **/
export function translate<T extends Mat2d>(out: T, a: ReadonlyMat2d, v: ReadonlyVec2): ReturnType.Mat2d<T>;
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @template {Mat2d} T
 * @param {T} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {ReturnType.Mat2d<T>} out
 */
export function fromRotation<T extends Mat2d>(out: T, rad: number): ReturnType.Mat2d<T>;
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @template {Mat2d} T
 * @param {T} out mat2d receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {ReturnType.Mat2d<T>} out
 */
export function fromScaling<T extends Mat2d>(out: T, v: ReadonlyVec2): ReturnType.Mat2d<T>;
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @template {Mat2d} T
 * @param {T} out mat2d receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {ReturnType.Mat2d<T>} out
 */
export function fromTranslation<T extends Mat2d>(out: T, v: ReadonlyVec2): ReturnType.Mat2d<T>;
/**
 * Returns a string representation of a mat2d
 *
 * @param {ReadonlyMat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
export function str(a: ReadonlyMat2d): string;
/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {ReadonlyMat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
export function frob(a: ReadonlyMat2d): number;
/**
 * Adds two mat2d's
 *
 * @template {Mat2d} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {ReturnType.Mat2d<T>} out
 */
export function add<T extends Mat2d>(out: T, a: ReadonlyMat2d, b: ReadonlyMat2d): ReturnType.Mat2d<T>;
/**
 * Subtracts matrix b from matrix a
 *
 * @template {Mat2d} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {ReturnType.Mat2d<T>} out
 */
export function subtract<T extends Mat2d>(out: T, a: ReadonlyMat2d, b: ReadonlyMat2d): ReturnType.Mat2d<T>;
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @template {Mat2d} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {ReturnType.Mat2d<T>} out
 */
export function multiplyScalar<T extends Mat2d>(out: T, a: ReadonlyMat2d, b: number): ReturnType.Mat2d<T>;
/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @template {Mat2d} T
 * @param {T} out the receiving vector
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {ReturnType.Mat2d<T>} out
 */
export function multiplyScalarAndAdd<T extends Mat2d>(out: T, a: ReadonlyMat2d, b: ReadonlyMat2d, scale: number): ReturnType.Mat2d<T>;
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat2d} a The first matrix.
 * @param {ReadonlyMat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
export function exactEquals(a: ReadonlyMat2d, b: ReadonlyMat2d): boolean;
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat2d} a The first matrix.
 * @param {ReadonlyMat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
export function equals(a: ReadonlyMat2d, b: ReadonlyMat2d): boolean;
/**
 * Multiplies two mat2d's
 *
 * @template {Mat2d} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {ReturnType.Mat2d<T>} out
 */
export function mul<T extends Mat2d>(out: T, a: ReadonlyMat2d, b: ReadonlyMat2d): ReturnType.Mat2d<T>;
/**
 * Subtracts matrix b from matrix a
 *
 * @template {Mat2d} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {ReturnType.Mat2d<T>} out
 */
export function sub<T extends Mat2d>(out: T, a: ReadonlyMat2d, b: ReadonlyMat2d): ReturnType.Mat2d<T>;
