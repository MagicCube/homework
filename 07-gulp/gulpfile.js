const babel = require("gulp-babel");
const gulp = require("gulp");
const less = require("gulp-less");
const rimraf = require("gulp-rimraf");
const runSequence = require("run-sequence");

const SRC_PATH  = "./src";
const DEST_PATH = "./assets"
const RES_PATH = SRC_PATH + "/res";

gulp.task("default", [ "build"]);

gulp.task("clean", () => {
    return gulp.src(`${DEST_PATH}`)
                .pipe(rimraf());
});

gulp.task("build", ["clean"], (cb) => {
    runSequence(
        ["build-less", "build-image", "build-js"],
        cb
    );
});

gulp.task("build-less", () => {
    return gulp.src(`${RES_PATH}/index.less`)
               .pipe(less())
               .pipe(gulp.dest(`${DEST_PATH}/res`));
});

gulp.task("build-js", () => {
    return gulp.src(`${SRC_PATH}/**/*.js`)
               .pipe(babel({
                   presets: [ "es2015" ]
               }))
               .pipe(gulp.dest(DEST_PATH));
});

gulp.task("build-image", () => {
    return gulp.src(`${RES_PATH}/images/*.png`)
               .pipe(gulp.dest(`${DEST_PATH}/res/images`));
});
