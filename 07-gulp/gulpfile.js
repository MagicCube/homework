const babel = require("gulp-babel");
const gulp = require("gulp");
const less = require("gulp-less");
const rimraf = require("gulp-rimraf");
const runSequence = require("run-sequence");

const SRC_PATH = "./src";
const DEST_PATH = "./assets";

gulp.task("default", [ "build" ]);

gulp.task("build", [ "clean" ], (cb) => {
    runSequence(
        [ "build-image", "build-js", "build-less" ],
        cb
    );
});

gulp.task("clean", () => {
    return gulp.src(`${DEST_PATH}`)
        .pipe(rimraf());
});

gulp.task("build-image", () => {
    return gulp.src([ `${SRC_PATH}/res/images/*.png`,  `${SRC_PATH}/res/images/*.jpg` ])
        .pipe(gulp.dest(`${DEST_PATH}/res/images`));
});

gulp.task("build-js", () => {
    return gulp.src([ `${SRC_PATH}/**/*.js`])
        .pipe(babel({
            presets: [ "es2015" ]
        }))
        .pipe(gulp.dest(`${DEST_PATH}`));
});

gulp.task("build-less", () => {
    return gulp.src(`${SRC_PATH}/res/index.less`)
        .pipe(less())
        .pipe(gulp.dest(`${DEST_PATH}/res`));
});
