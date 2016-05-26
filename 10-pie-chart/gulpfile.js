const browserify = require("gulp-browserify");
const concat = require("gulp-concat");
const gulp = require("gulp");
const hash = require("gulp-hash");
const less = require("gulp-less");
const revReplace = require("gulp-rev-replace");
const rimraf = require("gulp-rimraf");
const runSequence = require("run-sequence");
const uglify = require("gulp-uglify");

let   DEV_MODE = false;
const SRC_PATH = "./src";
const DEST_PATH = "./public";
const ASSETS_PATH = `${DEST_PATH}/assets`;

gulp.task("default", [ "build" ]);

gulp.task("clean", () => {
    return gulp.src(DEST_PATH)
               .pipe(rimraf());
});

gulp.task("build", [ "clean" ], (cb) => {
    runSequence(
        "build-vendor",
        "build-js",
        "build-less",
        "build-html",
        cb
    );
});

gulp.task("build-vendor", () => {
    return gulp.src([
        "./node_modules/d3/d3.js",
    ]).pipe(uglify())
      .pipe(concat("vendor.js"))
      .pipe(hash())
      .pipe(gulp.dest(ASSETS_PATH))
      .pipe(hash.manifest("manifest.json", true))
      .pipe(gulp.dest(ASSETS_PATH));
});

gulp.task("build-js", () => {
    // Use Browserify to solve the module dependencies.
    // Use Babel(here we use babelify which is a babel transform for Browserify)
    // to transform ES6 code to ES5.
    // Only use index.js as the entry point.
    const chain = gulp.src(`${SRC_PATH}/app/index.js`)
        .pipe(browserify({
            transform: [ "babelify" ]
        }));

    if (DEV_MODE)
    {
        return chain.pipe(gulp.dest(`${ASSETS_PATH}/app`));
    }
    else
    {
        return chain.pipe(uglify())
                    .pipe(hash())
                    .pipe(gulp.dest(`${ASSETS_PATH}/app`))
                    .pipe(hash.manifest("manifest.json", true))
                    .pipe(gulp.dest(ASSETS_PATH));
    }
});

gulp.task("build-less", () => {
    const chain = gulp.src(`${SRC_PATH}/app/res/index.less`)
                      .pipe(less());
    if (DEV_MODE)
    {
        return chain.pipe(gulp.dest(`${ASSETS_PATH}/res`));
    }
    else
    {
        chain.pipe(hash())
             .pipe(gulp.dest(`${ASSETS_PATH}/res`))
             .pipe(hash.manifest("manifest.json", true))
             .pipe(gulp.dest(ASSETS_PATH));
    }
});

gulp.task("build-html", () => {
    const manifest = gulp.src(`${ASSETS_PATH}/manifest.json`);
    return gulp.src(`${SRC_PATH}/**/*.html`)
               .pipe(revReplace({ manifest }))
               .pipe(gulp.dest(DEST_PATH))
});







/*********************************/
/* DEVELOPMENT MODE              */
/*********************************/
gulp.task("dev", cb => {
    DEV_MODE = true;
    runSequence(
        "build",
        "watch-js",
        "watch-less",
        "server:start",
        cb
    );
});

gulp.task("watch-js", () => {
    gulp.watch(`${SRC_PATH}/app/**/*.js`, [ "build-js" ]);
});

gulp.task("watch-less", () => {
    gulp.watch(`${SRC_PATH}/app/res/*.less`, [ "build-less" ]);
});

gulp.task("server:start", () => {
    require("./index");
});
