import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";

export default {
  input: "index.html",
  output: {
    dir: "dist",
    format: "es"
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    copy({
      targets: [
        { src: "index.html", dest: "dist" },
        { src: "src/**/*", dest: "dist/src" }
      ]
    })
  ]
};
