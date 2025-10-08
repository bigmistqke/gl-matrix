import type { ArrayType, Mat2, Mat2d, Mat3, Mat4, Quat, Quat2, Vec2, Vec3, Vec4, ReadonlyMat2, ReadonlyMat2d, ReadonlyMat3, ReadonlyMat4, ReadonlyQuat, ReadonlyQuat2, ReadonlyVec2, ReadonlyVec3, ReadonlyVec4, ReturnType } from "./types.js";

/**
 * 3x3 Matrix
 * @module mat3
 */
/**
 * Creates a new identity mat3
 *
 * @returns {ArrayType} a new 3x3 matrix
 */
export function create(): ArrayType;
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @template {Mat3} T
 * @param {T} out the receiving 3x3 matrix
 * @param {ReadonlyMat4} a   the source 4x4 matrix
 * @returns {ReturnType.Mat3<T>} out
 */
export function fromMat4<T extends Mat3>(out: T, a: ReadonlyMat4): ReturnType.Mat3<T>;
/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat3} a matrix to clone
 * @returns {ArrayType} a new 3x3 matrix
 */
export function clone(a: ReadonlyMat3): ArrayType;
/**
 * Copy the values from one mat3 to another
 *
 * @template {Mat3} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {ReturnType.Mat3<T>} out
 */
export function copy<T extends Mat3>(out: T, a: ReadonlyMat3): ReturnType.Mat3<T>;
/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {ArrayType} A new mat3
 */
export function fromValues(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): ArrayType;
/**
 * Set the components of a mat3 to the given values
 *
 * @template {Mat3} T
 * @param {T} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {ReturnType.Mat3<T>} out
 */
export function set<T extends Mat3>(out: T, m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): ReturnType.Mat3<T>;
/**
 * Set a mat3 to the identity matrix
 *
 * @template {Mat3} T
 * @param {T} out the receiving matrix
 * @returns {ReturnType.Mat3<T>} out
 */
export function identity<T extends Mat3>(out: T): ReturnType.Mat3<T>;
/**
 * Transpose the values of a mat3
 *
 * @template {Mat3} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {ReturnType.Mat3<T>} out
 */
export function transpose<T extends Mat3>(out: T, a: ReadonlyMat3): ReturnType.Mat3<T>;
/**
 * Inverts a mat3
 *
 * @template {Mat3} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {ReturnType.Mat3<T> | null} out, or null if source matrix is not invertible
 */
export function invert<T extends Mat3>(out: T, a: ReadonlyMat3): ReturnType.Mat3<T> | null;
/**
 * Calculates the adjugate of a mat3
 *
 * @template {Mat3} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {ReturnType.Mat3<T>} out
 */
export function adjoint<T extends Mat3>(out: T, a: ReadonlyMat3): ReturnType.Mat3<T>;
/**
 * Calculates the determinant of a mat3
 *
 * @param {ReadonlyMat3} a the source matrix
 * @returns {Number} determinant of a
 */
export function determinant(a: ReadonlyMat3): number;
/**
 * Multiplies two mat3's
 *
 * @template {Mat3} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {ReturnType.Mat3<T>} out
 */
export function multiply<T extends Mat3>(out: T, a: ReadonlyMat3, b: ReadonlyMat3): ReturnType.Mat3<T>;
/**
 * Translate a mat3 by the given vector
 *
 * @template {Mat3} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to translate
 * @param {ReadonlyVec2} v vector to translate by
 * @returns {ReturnType.Mat3<T>} out
 */
export function translate<T extends Mat3>(out: T, a: ReadonlyMat3, v: ReadonlyVec2): ReturnType.Mat3<T>;
/**
 * Rotates a mat3 by the given angle
 *
 * @template {Mat3} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {ReturnType.Mat3<T>} out
 */
export function rotate<T extends Mat3>(out: T, a: ReadonlyMat3, rad: number): ReturnType.Mat3<T>;
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @template {Mat3} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to scale
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {ReturnType.Mat3<T>} out
 **/
export function scale<T extends Mat3>(out: T, a: ReadonlyMat3, v: ReadonlyVec2): ReturnType.Mat3<T>;
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @template {Mat3} T
 * @param {T} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {ReturnType.Mat3<T>} out
 */
export function fromTranslation<T extends Mat3>(out: T, v: ReadonlyVec2): ReturnType.Mat3<T>;
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @template {Mat3} T
 * @param {T} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {ReturnType.Mat3<T>} out
 */
export function fromRotation<T extends Mat3>(out: T, rad: number): ReturnType.Mat3<T>;
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @template {Mat3} T
 * @param {T} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {ReturnType.Mat3<T>} out
 */
export function fromScaling<T extends Mat3>(out: T, v: ReadonlyVec2): ReturnType.Mat3<T>;
/**
 * Copies the values from a mat2d into a mat3
 *
 * @template {Mat3} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to copy
 * @returns {ReturnType.Mat3<T>} out
 **/
export function fromMat2d<T extends Mat3>(out: T, a: ReadonlyMat2d): ReturnType.Mat3<T>;
/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @template {Mat3} T
 * @param {T} out mat3 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {ReturnType.Mat3<T>} out
 */
export function fromQuat<T extends Mat3>(out: T, q: ReadonlyQuat): ReturnType.Mat3<T>;
/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @template {Mat3} T
 * @param {T} out mat3 receiving operation result
 * @param {ReadonlyMat4} a Mat4 to derive the normal matrix from
 *
 * @returns {ReturnType.Mat3<T>} out
 */
export function normalFromMat4<T extends Mat3>(out: T, a: ReadonlyMat4): ReturnType.Mat3<T>;
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @template {Mat3} T
 * @param {T} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {ReturnType.Mat3<T>} out
 */
export function projection<T extends Mat3>(out: T, width: number, height: number): ReturnType.Mat3<T>;
/**
 * Returns a string representation of a mat3
 *
 * @param {ReadonlyMat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
export function str(a: ReadonlyMat3): string;
/**
 * Returns Frobenius norm of a mat3
 *
 * @param {ReadonlyMat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
export function frob(a: ReadonlyMat3): number;
/**
 * Adds two mat3's
 *
 * @template {Mat3} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {ReturnType.Mat3<T>} out
 */
export function add<T extends Mat3>(out: T, a: ReadonlyMat3, b: ReadonlyMat3): ReturnType.Mat3<T>;
/**
 * Subtracts matrix b from matrix a
 *
 * @template {Mat3} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {ReturnType.Mat3<T>} out
 */
export function subtract<T extends Mat3>(out: T, a: ReadonlyMat3, b: ReadonlyMat3): ReturnType.Mat3<T>;
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @template {Mat3} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {ReturnType.Mat3<T>} out
 */
export function multiplyScalar<T extends Mat3>(out: T, a: ReadonlyMat3, b: number): ReturnType.Mat3<T>;
/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @template {Mat3} T
 * @param {T} out the receiving vector
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {ReturnType.Mat3<T>} out
 */
export function multiplyScalarAndAdd<T extends Mat3>(out: T, a: ReadonlyMat3, b: ReadonlyMat3, scale: number): ReturnType.Mat3<T>;
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
export function exactEquals(a: ReadonlyMat3, b: ReadonlyMat3): boolean;
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
export function equals(a: ReadonlyMat3, b: ReadonlyMat3): boolean;
/**
 * Multiplies two mat3's
 *
 * @template {Mat3} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {ReturnType.Mat3<T>} out
 */
export function mul<T extends Mat3>(out: T, a: ReadonlyMat3, b: ReadonlyMat3): ReturnType.Mat3<T>;
/**
 * Subtracts matrix b from matrix a
 *
 * @template {Mat3} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {ReturnType.Mat3<T>} out
 */
export function sub<T extends Mat3>(out: T, a: ReadonlyMat3, b: ReadonlyMat3): ReturnType.Mat3<T>;
