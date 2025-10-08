import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let sourcePath = "./dist/index.d.ts";
let sourceTypingsPath = "./src/types.d.ts";
let sourceTypings = fs.readFileSync(sourceTypingsPath, "utf-8");
let typings = fs.readFileSync(sourcePath, "utf-8");
let typingsLength = typings.length;

// Process the ambient module declaration for backwards compatibility

// Remove index module at the end
typings = typings.replace(/declare module "index" {([^]+?)\n}/, "");
if (typingsLength == typings.length)
  throw new Error(
    "An index module should have been generated and then replaced"
  );

// Rename common module to glMatrix
typings = typings.replace(
  'declare module "common" {',
  "export namespace glMatrix {"
);

// Replace imports from other modules with direct references
typings = typings.replace(/import\("([^"]+?)(\.js)?"\)/g, "$1");

// Replace imports with nothing
typings = typings.replace(/ *import.+from.*;/g, "");

// Replace declare module with exports
typings = typings.replace(/declare module "([^"]+?)" {/g, "export namespace $1 {");

// Add types
typings = "\n" + sourceTypings.replace(/declare/g, "export") + "\n" + typings;

// Wrap them in a "gl-matrix module"
typings = 'declare module "gl-matrix" {\n' + typings + "\n}";

fs.writeFileSync(sourcePath, typings, "utf-8");

// Process ESM declarations
const esmDir = "./dist/esm";

// Create ESM version of types.d.ts
const esmTypesContent = sourceTypings
  .replace(/^interface /gm, "export interface ")
  .replace(/^declare namespace/gm, "export namespace")
  .replace(/^declare type/gm, "export type");

fs.writeFileSync(path.join(esmDir, "types.d.ts"), esmTypesContent, "utf-8");

// Add imports to generated .d.ts files
const dtsFiles = fs.readdirSync(esmDir).filter(f => f.endsWith(".d.ts") && f !== "types.d.ts");

for (const file of dtsFiles) {
  const filePath = path.join(esmDir, file);
  let content = fs.readFileSync(filePath, "utf-8");

  if (file === "index.d.ts") {
    // Re-export all types from types.js
    if (!content.includes('export type * from "./types.js"')) {
      content += '\nexport type * from "./types.js";\n';
    }
  } else {
    // Add ALL imports from types.d.ts
    if (!content.includes('from "./types.js"')) {
      const allImports = 'import type { ArrayType, Mat2, Mat2d, Mat3, Mat4, Quat, Quat2, Vec2, Vec3, Vec4, ReadonlyMat2, ReadonlyMat2d, ReadonlyMat3, ReadonlyMat4, ReadonlyQuat, ReadonlyQuat2, ReadonlyVec2, ReadonlyVec3, ReadonlyVec4, ReturnType, Tuple, IndexedCollection, Overrides } from "./types.js";\n\n';
      content = allImports + content;
    }
  }

  fs.writeFileSync(filePath, content, "utf-8");
}
