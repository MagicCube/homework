const babel = require("gulp-babel");
const gulp = require("gulp");
const runSequence = require("run-sequence");
const rimraf = require("gulp-rimraf");

const SRC_PATH = "./src";
const ASSETS_PATH = "./assets";

gulp.task("default", ["build"]);

gulp.task("clean", () => {
    gulp.src([`${ASSETS_PATH}`, "./assets."])
            .pipe(rimraf());
});

gulp.task("build", ["clean"], (cb) => {
    runSequence(
        ["buildJs"],
        cb
    );
})

gulp.task("buildJs", () => {
    return gulp.src(`${SRC_PATH}/js/*.js`)
            .pipe(babel({
                "presets": ["es2015"]
            }))
            .pipe(gulp.dest(`${ASSETS_PATH}/js`));
});
