"use strict";

// Load plugins
const browsersync = require("browser-sync").create();
const del = require("del");
const gulp = require("gulp");
const sass = require('gulp-sass');
const merge = require("merge-stream");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const sourcemaps = require("gulp-sourcemaps");

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./"
    },
    port: 3000
  });
  done();
}

// BrowserSync reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Clean vendor
function clean() {
  return del(["./dist/**"]);
}

// Copy static files
function main() {
  // Fonts
  var fonts = gulp
    .src("fonts/**/*")
    .pipe(gulp.dest("./dist/fonts"))

  // Index
  var index = gulp
    .src("index.html")
    .pipe(gulp.dest("./dist"))

  // Images
  var img = gulp
    .src("img/**/*")
    .pipe(gulp.dest("./dist/img"))
  return merge(img, fonts, index)
}

// Define tasks after requiring dependencies
function style() {
  // Where should gulp look for the sass files?
  // My .sass files are stored in the styles folder
  // (If you want to use scss files, simply look for *.scss files instead)
  return (
    gulp
    .src("styles/*.scss")
    // Initialize sourcemaps before compilation starts
    .pipe(sourcemaps.init())
    .pipe(sass())
    // Use sass with the files found, and log any errors    
    .on("error", sass.logError)
    // Use postcss with autoprefixer and compress the compiled file using cssnano
    .pipe(postcss([autoprefixer(), cssnano()]))
    // Now add/write the sourcemaps
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist/css"))
  );
}

// Bring third party dependencies from node_modules into vendor directory
function modules() {
  // Bootstrap
  var bootstrap = gulp.src('./node_modules/bootstrap/dist/**/*')
    .pipe(gulp.dest('./dist/vendor/bootstrap'));
  // jQuery
  var jquery = gulp.src([
      './node_modules/jquery/dist/*',
      '!./node_modules/jquery/dist/core.js'
    ])
    .pipe(gulp.dest('./dist/vendor/jquery'));
  return merge(bootstrap, jquery);
}

// Watch files
function watchFiles() {
  gulp.watch("./**/*.css", browserSyncReload);
  gulp.watch("./**/*.html", browserSyncReload);
  gulp.watch("./**/*.scss", style);
}

// Define complex tasks
const vendor = gulp.series(clean, modules, style);
const build = gulp.series(vendor, main);
const watch = gulp.series(build, gulp.parallel(watchFiles, browserSync));

// Export tasks
exports.clean = clean;
exports.style = style;
exports.vendor = vendor;
exports.build = build;
exports.watch = watch;
exports.default = build;
exports.style = style;