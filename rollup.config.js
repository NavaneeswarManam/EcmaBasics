import rollup from "gulp-better-rollup";
import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";


export default (isMifiy) => {
  return rollup(
    {
      plugins: [
        babel({
          exclude: "node_modules/**"
        }),
        isMifiy && uglify()
      ],
      context: "window",
      external: ["isomorphic-fetch", "jquery"]
    },
    {
      file: "./dist/scripts.js",
      format: "iife",
      globals: { jquery: "$" },
      sourcemap: !isMifiy,
      name: "window.EcmaSamples"
    }
  );
};
