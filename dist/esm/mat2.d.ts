import type { ArrayType, Mat2, Mat2d, Mat3, Mat4, Quat, Quat2, Vec2, Vec3, Vec4, ReadonlyMat2, ReadonlyMat2d, ReadonlyMat3, ReadonlyMat4, ReadonlyQuat, ReadonlyQuat2, ReadonlyVec2, ReadonlyVec3, ReadonlyVec4, ReturnType } from "./types.js";

/**
 * 2x2 Matrix
 * @module mat2
 */
/**
 * Creates a new identity mat2
 *
 * @returns {ArrayType} a new 2x2 matrix
 */
export function create(): ArrayType;
/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat2} a matrix to clone
 * @returns {ArrayType} a new 2x2 matrix
 */
export function clone(a: ReadonlyMat2): ArrayType;
/**
 * Copy the values from one mat2 to another
 *
 * @template {Mat2} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {ReturnType.Mat2<T>} out
 */
export function copy<T extends Mat2>(out: T, a: ReadonlyMat2): ReturnType.Mat2<T>;
/**
 * Set a mat2 to the identity matrix
 *
 * @template {Mat2} T
 * @param {T} out the receiving matrix
 * @returns {ReturnType.Mat2<T>} out
 */
export function identity<T extends Mat2>(out: T): ReturnType.Mat2<T>;
/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {ArrayType} out A new 2x2 matrix
 */
export function fromValues(m00: number, m01: number, m10: number, m11: number): ArrayType;
/**
 * Set the components of a mat2 to the given values
 *
 * @template {Mat2} T
 * @param {T} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {ReturnType.Mat2<T>} out
 */
export function set<T extends Mat2>(out: T, m00: number, m01: number, m10: number, m11: number): ReturnType.Mat2<T>;
/**
 * Transpose the values of a mat2
 *
 * @template {Mat2} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {ReturnType.Mat2<T>} out
 */
export function transpose<T extends Mat2>(out: T, a: ReadonlyMat2): ReturnType.Mat2<T>;
/**
 * Inverts a mat2
 *
 * @template {Mat2} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {ReturnType.Mat2<T> | null} out, or null if source matrix is not invertible
 */
export function invert<T extends Mat2>(out: T, a: ReadonlyMat2): ReturnType.Mat2<T> | null;
/**
 * Calculates the adjugate of a mat2
 *
 * @template {Mat2} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {ReturnType.Mat2<T>} out
 */
export function adjoint<T extends Mat2>(out: T, a: ReadonlyMat2): ReturnType.Mat2<T>;
/**
 * Calculates the determinant of a mat2
 *
 * @param {ReadonlyMat2} a the source matrix
 * @returns {Number} determinant of a
 */
export function determinant(a: ReadonlyMat2): number;
/**
 * Multiplies two mat2's
 *
 * @template {Mat2} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {ReturnType.Mat2<T>} out
 */
export function multiply<T extends Mat2>(out: T, a: ReadonlyMat2, b: ReadonlyMat2): ReturnType.Mat2<T>;
/**
 * Rotates a mat2 by the given angle
 *
 * @template {Mat2} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {ReturnType.Mat2<T>} out
 */
export function rotate<T extends Mat2>(out: T, a: ReadonlyMat2, rad: number): ReturnType.Mat2<T>;
/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @template {Mat2} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {ReturnType.Mat2<T>} out
 **/
export function scale<T extends Mat2>(out: T, a: ReadonlyMat2, v: ReadonlyVec2): ReturnType.Mat2<T>;
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @template {Mat2} T
 * @param {T} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {ReturnType.Mat2<T>} out
 */
export function fromRotation<T extends Mat2>(out: T, rad: number): ReturnType.Mat2<T>;
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @template {Mat2} T
 * @param {T} out mat2 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {ReturnType.Mat2<T>} out
 */
export function fromScaling<T extends Mat2>(out: T, v: ReadonlyVec2): ReturnType.Mat2<T>;
/**
 * Returns a string representation of a mat2
 *
 * @param {ReadonlyMat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
export function str(a: ReadonlyMat2): string;
/**
 * Returns Frobenius norm of a mat2
 *
 * @param {ReadonlyMat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
export function frob(a: ReadonlyMat2): number;
/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {ReadonlyMat2} L the lower triangular matrix
 * @param {ReadonlyMat2} D the diagonal matrix
 * @param {ReadonlyMat2} U the upper triangular matrix
 * @param {ReadonlyMat2} a the input matrix to factorize
 */
export function LDU(L: ReadonlyMat2, D: ReadonlyMat2, U: ReadonlyMat2, a: ReadonlyMat2): ReadonlyMat2[];
/**
 * Adds two mat2's
 *
 * @template {Mat2} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {ReturnType.Mat2<T>} out
 */
export function add<T extends Mat2>(out: T, a: ReadonlyMat2, b: ReadonlyMat2): ReturnType.Mat2<T>;
/**
 * Subtracts matrix b from matrix a
 *
 * @template {Mat2} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {ReturnType.Mat2<T>} out
 */
export function subtract<T extends Mat2>(out: T, a: ReadonlyMat2, b: ReadonlyMat2): ReturnType.Mat2<T>;
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat2} a The first matrix.
 * @param {ReadonlyMat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
export function exactEquals(a: ReadonlyMat2, b: ReadonlyMat2): boolean;
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat2} a The first matrix.
 * @param {ReadonlyMat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
export function equals(a: ReadonlyMat2, b: ReadonlyMat2): boolean;
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @template {Mat2} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {ReturnType.Mat2<T>} out
 */
export function multiplyScalar<T extends Mat2>(out: T, a: ReadonlyMat2, b: number): ReturnType.Mat2<T>;
/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @template {Mat2} T
 * @param {T} out the receiving vector
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {ReturnType.Mat2<T>} out
 */
export function multiplyScalarAndAdd<T extends Mat2>(out: T, a: ReadonlyMat2, b: ReadonlyMat2, scale: number): ReturnType.Mat2<T>;
/**
 * Multiplies two mat2's
 *
 * @template {Mat2} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {ReturnType.Mat2<T>} out
 */
export function mul<T extends Mat2>(out: T, a: ReadonlyMat2, b: ReadonlyMat2): ReturnType.Mat2<T>;
/**
 * Subtracts matrix b from matrix a
 *
 * @template {Mat2} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {ReturnType.Mat2<T>} out
 */
export function sub<T extends Mat2>(out: T, a: ReadonlyMat2, b: ReadonlyMat2): ReturnType.Mat2<T>;
