// Test gulpfile
//console.log("Gulpfile just run !");

// const --> ES2015
// require() --> CommonJS
const gulp = require("gulp");
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const pump = require('pump');

gulp.task('compilar-estilos', function () {
  return gulp.src('./src/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('comprimir-js', function (cb) {
  pump([
        gulp.src('src/js/*.js'),
        uglify(),
        gulp.dest('dist/js')
    ],
    cb
  );
});

// Default task for Gulp
gulp.task("default", () => {
    console.log("Gulpfile just run !");
});
