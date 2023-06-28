//gulpfile.js
const gulp = require("gulp");
const minifyCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const npmDist = require("gulp-npm-dist");

const sassFiles = "scss/*.scss",
  cssDest = "assets/css/";

//compile scss into css
function style() {
  return gulp
    .src(sassFiles)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(cssDest));
}

//This is for the minify css
async function minifycss() {
  return gulp
    .src(["assets/css/*.css", "!assets/css/**/*.min.css"])
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(minifyCSS())
    .pipe(gulp.dest(cssDest));
}

// This is for the minifyjs
// async function minifyjs() {
//   return gulp
//     .src([
//       "assets/js/custom.js",
//       "assets/js/app.js",
//       "!assets/js/custom.min.js",
//       "!assets/js/app.min.js",
//     ])
//     .pipe(
//       rename({
//         suffix: ".min",
//       })
//     )
//     .pipe(uglify())
//     .pipe(gulp.dest("assets/js"));
// }

// Copy dependencies to ./public/libs/

// Copy dependencies to ./public/libs/
// gulp.task('copy:libs', function() {
//   gulp.src(npmDist(), {base:'./node_modules'})
//     .pipe(gulp.dest('./src/assets/libs'));
// });

// function copy(callback) {
//   return src(npmDist(),{base: './node_modules'})
//     .pipe(dest('./assets/libs'));
//   callback();
// }

async function copy() {
  gulp
    .src(npmDist(), {
      base: "./node_modules",
    })
    .pipe(gulp.dest("assets/libs"));
}

async function watch() {
  gulp.watch(["scss/**/*.scss"], style);
  gulp.watch(["assets/css/style.css"], minifycss);
  // gulp.watch(["assets/js/**/*.js", "!assets/js/**/*.min.js"], minifyjs);
}

gulp.task("default", watch);

exports.style = style;
exports.minifycss = minifycss;
// exports.minifyjs = minifyjs;
exports.copy = copy;
exports.watch = watch;
