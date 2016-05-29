const gulp = require("gulp");
const browserify = require("gulp-browserify");
const babel = require("gulp-babel");
const less = require("gulp-less");
const runSequence = require("run-sequence");
const rimraf = require("gulp-rimraf");

const SRC_PATH = "./src";
const DEST_PATH = "./public";
const ASSETS_PATH = `${DEST_PATH}/assets`;

gulp.task("default", [ "build" ]);


gulp.task("clean", () => {
    return gulp.src([`${ASSETS_PATH}/app/`, `${ASSETS_PATH}/res/`])
               .pipe(rimraf());
});

gulp.task("build", [ "clean" ], (cb) => {
    runSequence(
        "build-js",
        "build-less",
        "build-html",
        cb
    );
});

gulp.task("build-less", () => {
    return gulp.src(`${SRC_PATH}/res/index.less`)
               .pipe(less())
               .pipe(gulp.dest(`${ASSETS_PATH}/res`));
});

gulp.task("build-js", () => {
    return gulp.src(`${SRC_PATH}/app/index.js`)
               .pipe(browserify({
                   transform: [ "babelify" ]
               }))
               .pipe(gulp.dest(`${ASSETS_PATH}/app`));
});

gulp.task("build-html", () => {
        return gulp.src(`${SRC_PATH}/**/*.html`)
                   .pipe(gulp.dest(DEST_PATH));
});
