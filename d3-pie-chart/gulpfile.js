const browserify = require("gulp-browserify");
// const babel = require("gulp-babel");
const concat = require("gulp-concat");
const gulp = require("gulp");
const less = require("gulp-less");
const runSequence = require("run-sequence");
const rimraf = require("gulp-rimraf");

const SRC_PATH = "./src";
const DEST_PATH = "./public";
const ASSTES_PATH = `${DEST_PATH}/assets`;

gulp.task("default", ["build"]);

gulp.task("build", ["clean"], (cb) => {
    runSequence(
        "build-vendor",
        "build-js",
        "build-less",
        "build-html",
        // "server:start",
        cb
    );
});

gulp.task("clean", () => {
    return gulp.src(DEST_PATH)
        .pipe(rimraf());
});

gulp.task("build-less", () => {
    return gulp.src(`${SRC_PATH}/**/*.less`)
        .pipe(less())
        .pipe(gulp.dest(ASSTES_PATH));
});

gulp.task("build-vendor", () => {
    return gulp.src([
        `${SRC_PATH}/d3/d3.js`
    ]).pipe(concat("vendor.js"))
    .pipe(gulp.dest(ASSTES_PATH));
});

gulp.task("build-js", () => {
    const chain = gulp.src(`${SRC_PATH}/app/index.js`)
       .pipe(browserify({
           transform: [ "babelify" ]
       }));
    return chain.pipe(gulp.dest(`${ASSTES_PATH}/app`));
});

gulp.task("build-html", () => {
    return gulp.src(`${SRC_PATH}/*.html`)
                .pipe(gulp.dest(DEST_PATH));
});

gulp.task("server:start", () => {
    require("./index.js");
});



gulp.task("dev", (cb) => {
    runSequence(
        "build",
        "watch-js",
        "watch-less",
        "watch-html",
        "server:start",
        cb
    );
});

gulp.task("watch-js", () => {
    gulp.watch(`${SRC_PATH}/app/*.js`, ["build-js"]);
});

gulp.task("watch-less", () => {
    gulp.watch(`${SRC_PATH}/**/*.less`, ["build-less"]);
});

gulp.task("watch-html", () =>　{
    gulp.watch(`${SRC_PATH}/*.html`, ["build-html"]);
});
