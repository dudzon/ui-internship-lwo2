/* eslint-disable no-undef */
const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const paths = {
  styles: {
    src: 'js_tasks/Axit/scss/*.scss',
    dest: 'js_tasks/Axit/css/',
  },
  html: {
    src: 'js_tasks/Axit/*.html',
  },
};
function style() {
  return (
    gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .on('error', sass.logError)
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream())
  );
}

function watch() {
  browserSync.init({
    watch: true,
    server: {
      baseDir: './js_tasks/Axit',
    },
  });
  gulp.watch(paths.styles.src, style);
}

exports.style = style;
exports.watch = watch;

