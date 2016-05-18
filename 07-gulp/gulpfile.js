const gulp = require("gulp");
const babel = require("gulp-babel");
const rimraf = require("gulp-rimraf");
const less = require("gulp-less");
const runSequence = require("run-sequence");

const SRC_PATH = "./src";
const ASSETS_PATH = "./assets";

gulp.task("default", ["build"]);

gulp.task("build", ["clean"], (cb) => {
    runSequence(
        ["copyImage", "buildLess", "buildJs"],
        cb
    );
});

gulp.task("clean", () => {
    return gulp.src(ASSETS_PATH)
            .pipe(rimraf());;
});

gulp.task("copyImage", () => {
    return gulp.src(`${SRC_PATH}/res/images/**/*.*`)
            .pipe(gulp.dest(`${ASSETS_PATH}/res/images`));
});

gulp.task("buildLess", () => {
    return gulp.src(`${SRC_PATH}/res/index.less`)
            .pipe(less())
            .pipe(gulp.dest(`${ASSETS_PATH}/res/`));
});

gulp.task("buildJs", () => {
    return gulp.src(`${SRC_PATH}/**/*.js`)
            .pipe(babel({
                "presets": ["es2015"]
            }))
            .pipe(gulp.dest(`${ASSETS_PATH}`));
});
