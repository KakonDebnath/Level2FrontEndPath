// rollup.config.mjs

import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/main.js",
  output: {
    file: "public/bundle.js",
    format: "esm",
  },
  plugins: [nodeResolve({ extensions: [".js", ".jsx"] }), commonjs()],
};

// rollup -c or rollup -c -w
// For bundle with roll up configuration file use  rollup -c
// For bundle with roll up configuration file and watch mode use  rollup -c -w
