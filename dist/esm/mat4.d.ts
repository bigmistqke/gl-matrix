import type { ArrayType, Mat2, Mat2d, Mat3, Mat4, Quat, Quat2, Vec2, Vec3, Vec4, ReadonlyMat2, ReadonlyMat2d, ReadonlyMat3, ReadonlyMat4, ReadonlyQuat, ReadonlyQuat2, ReadonlyVec2, ReadonlyVec3, ReadonlyVec4, ReturnType } from "./types.js";

/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */
/**
 * Creates a new identity mat4
 *
 * @returns {ArrayType} a new 4x4 matrix
 */
export function create(): ArrayType;
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat4} a matrix to clone
 * @returns {ArrayType} a new 4x4 matrix
 */
export function clone(a: ReadonlyMat4): ArrayType;
/**
 * Copy the values from one mat4 to another
 *
 * @template {Mat4} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {ReturnType.Mat4<T>} out
 */
export function copy<T extends Mat4>(out: T, a: ReadonlyMat4): ReturnType.Mat4<T>;
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {ArrayType} A new mat4
 */
export function fromValues(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): ArrayType;
/**
 * Set the components of a mat4 to the given values
 *
 * @template {Mat4} T
 * @param {T} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {ReturnType.Mat4<T>} out
 */
export function set<T extends Mat4>(out: T, m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): ReturnType.Mat4<T>;
/**
 * Set a mat4 to the identity matrix
 *
 * @template {Mat4} T
 * @param {T} out the receiving matrix
 * @returns {ReturnType.Mat4<T>} out
 */
export function identity<T extends Mat4>(out: T): ReturnType.Mat4<T>;
/**
 * Transpose the values of a mat4
 *
 * @template {Mat4} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {ReturnType.Mat4<T>} out
 */
export function transpose<T extends Mat4>(out: T, a: ReadonlyMat4): ReturnType.Mat4<T>;
/**
 * Inverts a mat4
 *
 * @template {Mat4} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {ReturnType.Mat4<T> | null} out, or null if source matrix is not invertible
 */
export function invert<T extends Mat4>(out: T, a: ReadonlyMat4): ReturnType.Mat4<T> | null;
/**
 * Calculates the adjugate of a mat4
 *
 * @template {Mat4} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {ReturnType.Mat4<T>} out
 */
export function adjoint<T extends Mat4>(out: T, a: ReadonlyMat4): ReturnType.Mat4<T>;
/**
 * Calculates the determinant of a mat4
 *
 * @param {ReadonlyMat4} a the source matrix
 * @returns {Number} determinant of a
 */
export function determinant(a: ReadonlyMat4): number;
/**
 * Multiplies two mat4s
 *
 * @template {Mat4} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {ReturnType.Mat4<T>} out
 */
export function multiply<T extends Mat4>(out: T, a: ReadonlyMat4, b: ReadonlyMat4): ReturnType.Mat4<T>;
/**
 * Translate a mat4 by the given vector
 *
 * @template {Mat4} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {ReturnType.Mat4<T>} out
 */
export function translate<T extends Mat4>(out: T, a: ReadonlyMat4, v: ReadonlyVec3): ReturnType.Mat4<T>;
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @template {Mat4} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {ReadonlyVec3} v the vec3 to scale the matrix by
 * @returns {ReturnType.Mat4<T>} out
 **/
export function scale<T extends Mat4>(out: T, a: ReadonlyMat4, v: ReadonlyVec3): ReturnType.Mat4<T>;
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @template {Mat4} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {ReturnType.Mat4<T>} out
 */
export function rotate<T extends Mat4>(out: T, a: ReadonlyMat4, rad: number, axis: ReadonlyVec3): ReturnType.Mat4<T>;
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @template {Mat4} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {ReturnType.Mat4<T>} out
 */
export function rotateX<T extends Mat4>(out: T, a: ReadonlyMat4, rad: number): ReturnType.Mat4<T>;
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @template {Mat4} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {ReturnType.Mat4<T>} out
 */
export function rotateY<T extends Mat4>(out: T, a: ReadonlyMat4, rad: number): ReturnType.Mat4<T>;
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @template {Mat4} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {ReturnType.Mat4<T>} out
 */
export function rotateZ<T extends Mat4>(out: T, a: ReadonlyMat4, rad: number): ReturnType.Mat4<T>;
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @template {Mat4} T
 * @param {T} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Translation vector
 * @returns {ReturnType.Mat4<T>} out
 */
export function fromTranslation<T extends Mat4>(out: T, v: ReadonlyVec3): ReturnType.Mat4<T>;
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @template {Mat4} T
 * @param {T} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Scaling vector
 * @returns {ReturnType.Mat4<T>} out
 */
export function fromScaling<T extends Mat4>(out: T, v: ReadonlyVec3): ReturnType.Mat4<T>;
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @template {Mat4} T
 * @param {T} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {ReturnType.Mat4<T>} out
 */
export function fromRotation<T extends Mat4>(out: T, rad: number, axis: ReadonlyVec3): ReturnType.Mat4<T>;
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @template {Mat4} T
 * @param {T} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {ReturnType.Mat4<T>} out
 */
export function fromXRotation<T extends Mat4>(out: T, rad: number): ReturnType.Mat4<T>;
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @template {Mat4} T
 * @param {T} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {ReturnType.Mat4<T>} out
 */
export function fromYRotation<T extends Mat4>(out: T, rad: number): ReturnType.Mat4<T>;
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @template {Mat4} T
 * @param {T} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {ReturnType.Mat4<T>} out
 */
export function fromZRotation<T extends Mat4>(out: T, rad: number): ReturnType.Mat4<T>;
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *     let quatMat = mat4.create();
 *     mat4.fromQuat(quatMat, quat);
 *     mat4.multiply(dest, dest, quatMat);
 *
 * @template {Mat4} T
 * @param {T} out mat4 receiving operation result
 * @param {Quat} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @returns {ReturnType.Mat4<T>} out
 */
export function fromRotationTranslation<T extends Mat4>(out: T, q: Quat, v: ReadonlyVec3): ReturnType.Mat4<T>;
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {Mat4} out Matrix
 * @param {ReadonlyQuat2} a Dual Quaternion
 * @returns {ArrayType} mat4 receiving operation result
 */
export function fromQuat2(out: Mat4, a: ReadonlyQuat2): ArrayType;
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {Vec3} out Vector to receive translation component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {Vec3} out
 */
export function getTranslation(out: Vec3, mat: ReadonlyMat4): Vec3;
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion parameter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {Vec3} out Vector to receive scaling factor component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {Vec3} out
 */
export function getScaling(out: Vec3, mat: ReadonlyMat4): Vec3;
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {Quat} out Quaternion to receive the rotation component
 * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {Quat} out
 */
export function getRotation(out: Quat, mat: ReadonlyMat4): Quat;
/**
 * Decomposes a transformation matrix into its rotation, translation
 * and scale components. Returns only the rotation component
 *
 * @param  {Quat} out_r Quaternion to receive the rotation component
 * @param  {Vec3} out_t Vector to receive the translation vector
 * @param  {Vec3} out_s Vector to receive the scaling factor
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @returns {ArrayType} out_r
 */
export function decompose(out_r: Quat, out_t: Vec3, out_s: Vec3, mat: ReadonlyMat4): ArrayType;
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *     let quatMat = mat4.create();
 *     mat4.fromQuat(quatMat, quat);
 *     mat4.multiply(dest, dest, quatMat);
 *     mat4.scale(dest, dest, scale)
 *
 * @template {Mat4} T
 * @param {T} out mat4 receiving operation result
 * @param {Quat} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @returns {ReturnType.Mat4<T>} out
 */
export function fromRotationTranslationScale<T extends Mat4>(out: T, q: Quat, v: ReadonlyVec3, s: ReadonlyVec3): ReturnType.Mat4<T>;
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *     mat4.translate(dest, dest, origin);
 *     let quatMat = mat4.create();
 *     mat4.fromQuat(quatMat, quat);
 *     mat4.multiply(dest, dest, quatMat);
 *     mat4.scale(dest, dest, scale)
 *     mat4.translate(dest, dest, negativeOrigin);
 *
 * @template {Mat4} T
 * @param {T} out mat4 receiving operation result
 * @param {Quat} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @param {ReadonlyVec3} o The origin vector around which to scale and rotate
 * @returns {ReturnType.Mat4<T>} out
 */
export function fromRotationTranslationScaleOrigin<T extends Mat4>(out: T, q: Quat, v: ReadonlyVec3, s: ReadonlyVec3, o: ReadonlyVec3): ReturnType.Mat4<T>;
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @template {Mat4} T
 * @param {T} out mat4 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {ReturnType.Mat4<T>} out
 */
export function fromQuat<T extends Mat4>(out: T, q: ReadonlyQuat): ReturnType.Mat4<T>;
/**
 * Generates a frustum matrix with the given bounds
 *
 * @template {Mat4} T
 * @param {Mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {ReturnType.Mat4<T>} out
 */
export function frustum<T extends Mat4>(out: Mat4, left: number, right: number, bottom: number, top: number, near: number, far: number): ReturnType.Mat4<T>;
/**
 * Generates a perspective projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @template {Mat4} T
 * @param {T} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {ReturnType.Mat4<T>} out
 */
export function perspectiveNO<T extends Mat4>(out: T, fovy: number, aspect: number, near: number, far: number): ReturnType.Mat4<T>;
/**
 * Generates a perspective projection matrix suitable for WebGPU with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @template {Mat4} T
 * @param {Mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {ReturnType.Mat4<T>} out
 */
export function perspectiveZO<T extends Mat4>(out: Mat4, fovy: number, aspect: number, near: number, far: number): ReturnType.Mat4<T>;
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @template {Mat4} T
 * @param {Mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {ReturnType.Mat4<T>} out
 */
export function perspectiveFromFieldOfView<T extends Mat4>(out: Mat4, fov: any, near: number, far: number): ReturnType.Mat4<T>;
/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 *
 * @template {Mat4} T
 * @param {Mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {ReturnType.Mat4<T>} out
 */
export function orthoNO<T extends Mat4>(out: Mat4, left: number, right: number, bottom: number, top: number, near: number, far: number): ReturnType.Mat4<T>;
/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 *
 * @template {Mat4} T
 * @param {Mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {ReturnType.Mat4<T>} out
 */
export function orthoZO<T extends Mat4>(out: Mat4, left: number, right: number, bottom: number, top: number, near: number, far: number): ReturnType.Mat4<T>;
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @template {Mat4} T
 * @param {Mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {ReturnType.Mat4<T>} out
 */
export function lookAt<T extends Mat4>(out: Mat4, eye: ReadonlyVec3, center: ReadonlyVec3, up: ReadonlyVec3): ReturnType.Mat4<T>;
/**
 * Generates a matrix that makes something look at something else.
 *
 * @template {Mat4} T
 * @param {Mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} target Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {ReturnType.Mat4<T>} out
 */
export function targetTo<T extends Mat4>(out: Mat4, eye: ReadonlyVec3, target: ReadonlyVec3, up: ReadonlyVec3): ReturnType.Mat4<T>;
/**
 * Returns a string representation of a mat4
 *
 * @param {ReadonlyMat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
export function str(a: ReadonlyMat4): string;
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {ReadonlyMat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
export function frob(a: ReadonlyMat4): number;
/**
 * Adds two mat4's
 *
 * @template {Mat4} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {ReturnType.Mat4<T>} out
 */
export function add<T extends Mat4>(out: T, a: ReadonlyMat4, b: ReadonlyMat4): ReturnType.Mat4<T>;
/**
 * Subtracts matrix b from matrix a
 *
 * @template {Mat4} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {ReturnType.Mat4<T>} out
 */
export function subtract<T extends Mat4>(out: T, a: ReadonlyMat4, b: ReadonlyMat4): ReturnType.Mat4<T>;
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @template {Mat4} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {ReturnType.Mat4<T>} out
 */
export function multiplyScalar<T extends Mat4>(out: T, a: ReadonlyMat4, b: number): ReturnType.Mat4<T>;
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @template {Mat4} T
 * @param {T} out the receiving vector
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {ReturnType.Mat4<T>} out
 */
export function multiplyScalarAndAdd<T extends Mat4>(out: T, a: ReadonlyMat4, b: ReadonlyMat4, scale: number): ReturnType.Mat4<T>;
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
export function exactEquals(a: ReadonlyMat4, b: ReadonlyMat4): boolean;
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
export function equals(a: ReadonlyMat4, b: ReadonlyMat4): boolean;
/**
 * Generates a perspective projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @template {Mat4} T
 * @param {T} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {ReturnType.Mat4<T>} out
 */
export function perspective<T extends Mat4>(out: T, fovy: number, aspect: number, near: number, far: number): ReturnType.Mat4<T>;
/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 *
 * @template {Mat4} T
 * @param {Mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {ReturnType.Mat4<T>} out
 */
export function ortho<T extends Mat4>(out: Mat4, left: number, right: number, bottom: number, top: number, near: number, far: number): ReturnType.Mat4<T>;
/**
 * Multiplies two mat4s
 *
 * @template {Mat4} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {ReturnType.Mat4<T>} out
 */
export function mul<T extends Mat4>(out: T, a: ReadonlyMat4, b: ReadonlyMat4): ReturnType.Mat4<T>;
/**
 * Subtracts matrix b from matrix a
 *
 * @template {Mat4} T
 * @param {T} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {ReturnType.Mat4<T>} out
 */
export function sub<T extends Mat4>(out: T, a: ReadonlyMat4, b: ReadonlyMat4): ReturnType.Mat4<T>;
