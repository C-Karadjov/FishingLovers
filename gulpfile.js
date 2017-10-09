const gulp = require('gulp');
const minifyCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglifyJS = require('gulp-uglify');
const pump = require('pump');
const babel = require('gulp-babel');
require ('babel-preset-env');

// copy files to dist

gulp.task('copy-html', () => {
    gulp.src('./client/index.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy-scripts', () => {
    gulp.src('./client/scripts/**/*.js')
        .pipe(gulp.dest('./dist/scripts'));
});

gulp.task('copy-templates', () => {
    gulp.src('./client/templates/**/*.mustache')
        .pipe(gulp.dest('./dist/templates'));
});

gulp.task('copy-img', () => {
    gulp.src('./client/images/**/*.png')
        .pipe(gulp.dest('./dist/images'));
});

// minify

gulp.task('min-css', () => {
    gulp.src('./client/styles/**/*.css')
        .pipe(minifyCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./dist/styles'));
});

gulp.task('min-js', (cb) => {
    pump([
            gulp.src('./dist/scripts/**/*.js'),
            uglifyJS(),
            gulp.dest('./dist/scripts')
        ],
        cb
    );
});

//compile

gulp.task('compile', () =>
    gulp.src('./dist/scripts/**/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('./dist/scripts'))
);


