const runSequence = require("run-sequence");
const gulp = require("gulp");
const babel = require("gulp-babel");
const less = require("gulp-less");
const rimraf = require("gulp-rimraf");

const SRC_DIR = "./src";
const DEST_DIR = "./assets";

gulp.task("default", [ "build" ]);

gulp.task("clean", () => {
    gulp.src(DEST_DIR)
        .pipe(rimraf());
});

gulp.task("build", [ "clean" ], (cb) => {
    runSequence(
        [ "build-js", "build-less", "build-image" ],
        cb
    );
});

gulp.task("build-js", () => {
    return gulp.src(`${SRC_DIR}/**/*.js`)
        .pipe(babel({
            presets: [ "es2015" ]
        }))
        .pipe(gulp.dest(DEST_DIR));
});

gulp.task("build-less", () => {
    return gulp.src(`${SRC_DIR}/res/index.less`)
        .pipe(less())
        .pipe(gulp.dest(`${DEST_DIR}/res`));
});

gulp.task("build-image", () => {
    return gulp.src(`${SRC_DIR}/res/images/*`)
        .pipe(gulp.dest(`${DEST_DIR}/res/images`));
});
