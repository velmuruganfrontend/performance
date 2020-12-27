// Gulp Plugin
var gulp = require('gulp');

// Less
var less = require('gulp-less');

// SCSS
var scss = require('gulp-sass');

// Auto Prefixer Plugin
var autoprefixer = require('gulp-autoprefixer');

// CSS Minify Plugin
var cleanCSS = require('gulp-clean-css');

// JS Minification Plugin
var uglify = require('gulp-uglify');

// JS Minification Error Catch
var gutil = require('gulp-util');

// SASS to CSS
gulp.task('scss', function(){
    return gulp.src('./static/static/website/version/styles/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('./static/static/website/version/styles'));
});

// LESS to CSS
gulp.task('less', function () {
    return gulp.src('./static/static/website/version/styles/*.less')
    .pipe(less())
    .pipe(gulp.dest('./static/static/website/version/styles'));
});

// CSS Autoprefixer & Clean CSS
gulp.task('clean-css', function(){
    return gulp.src('./static/static/website/version/styles/**/*.css')
    .pipe(autoprefixer({
        browsers: ['last 5 versions'],
        cascade: false
    }))
    .pipe(cleanCSS({
        compatibility: 'ie8'
    }))
    .pipe(gulp.dest('./static/static/website/version/styles'));
});

// JS Minification
gulp.task('uglify', function() {
    gulp.src('./static/static/website/version/scripts/**/*.js')
    .pipe(uglify())
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(gulp.dest('./static/static/website/version/scripts'))
});

// Default Task
gulp.task('default', ['scss','less'], function(){
    gulp.watch("./static/static/website/version/styles/**/*.scss", ['scss']);
    gulp.watch("./static/static/website/version/styles/**/*.less", ['less']);
});
// Minify CSS and JS this task will run build time only.
gulp.task('build', ['clean-css','uglify']);