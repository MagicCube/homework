const gulp = require("gulp");
const less = require("gulp-less");
const babel = require("gulp-babel");
const runSequence = require("run-sequence");
const rimraf = require("gulp-rimraf");

const SRC_PATH = "./src";
const DEST_PATH = "./assets";

gulp.task("default", [ "build" ]);

gulp.task("clean", () => {
    return gulp.src(DEST_PATH)
               .pipe(rimraf());
});

gulp.task("build", [ "clean" ], (cb) => {
    runSequence(
        [ "build-js", "build-less", "build-img" ],
        cb
    );
});

gulp.task("build-less", () => {
    return gulp.src(`${SRC_PATH}/**/index.less`)
            .pipe(less())
            .pipe(gulp.dest(DEST_PATH));
});

gulp.task("build-img", () => {
    return gulp.src(`${SRC_PATH}/res/images/*.png`)
            .pipe(gulp.dest(`${DEST_PATH}/res/images`));
});

gulp.task("build-js", () => {
    return gulp.src(`${SRC_PATH}/**/*.js`)
            .pipe(babel({
                presets: ["es2015"]
            }))
            .pipe(gulp.dest(DEST_PATH));
});
