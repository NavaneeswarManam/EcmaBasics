import gulp from "gulp";
import sourcemaps from "gulp-sourcemaps";
import sequence from "gulp-sequence";
import rollupConfig from "./rollup.config.js";
import rename from "gulp-rename";


gulp.task('default',sequence("build","minify"));

gulp.task("build", () => {
  return gulp
    .src("./src/index.js")
    .pipe(sourcemaps.init())
    .pipe(rollupConfig(false))
    .pipe(
      rename({
        basename: "",
        prefix: "ecma",
        suffix: "",
        extname: ".js"
      })
    )
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest('dist'));
});

gulp.task("minify", () => {
  return gulp
    .src("./src/index.js")
    .pipe(rollupConfig(true))
    .pipe(
      rename({
        basename: "",
        prefix: "ecma",
        suffix: ".min",
        extname: ".js"
      })
    )
    .pipe(gulp.dest('dist'));
});
