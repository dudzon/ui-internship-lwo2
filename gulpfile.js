/* eslint-disable no-undef */
const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const paths = {
  styles: {
    src: 'css_tasks/task11/scss/*.scss',
    dest: 'css_tasks/task11/css/',
  },
  html: {
    src: 'css_tasks/task11/*.html',
  },
  js: {
    src: 'css_tasks/task11/*.html',
  },
};
function style() {
  return gulp
      .src(paths.styles.src)
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'}))
      .on('error', sass.logError)
      .pipe(postcss([autoprefixer()]))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(paths.styles.dest))
      .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    watch: true,
    server: {
      baseDir: './css_tasks/task11',
    },
  });
  gulp.watch(paths.styles.src, style);
}

exports.style = style;
exports.watch = watch;
