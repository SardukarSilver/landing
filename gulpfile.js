var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),    
    bower = require('gulp-bower'),    
    bs = require('browser-sync');

var config = {
    sassPath: './resources/sass',
    bowerDir: './bower_components'
}

gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest(config.bowerDir))
});

gulp.task('icons', function() {
    return gulp.src(config.bowerDir + '/fontawesome/fonts/**.*')
        .pipe(gulp.dest('./public/fonts'));
});

gulp.task('dev', function() {
    bs.init({
        server: {
            baseDir: "./public"
        },
        open: false,
        reloadDelay: 300,
        reloadDebounce: 300
    });

    gulp.watch("resources/sass/*.scss", ['sass']);
    gulp.watch("public/*.html").on('change', bs.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("resources/sass/*.scss")
        .pipe(sass({
            style: 'compressed',
            loadPath: [
                './resources/sass',
                config.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
                config.bowerDir + '/fontawesome/scss',
            ]
        }))
        .pipe(gulp.dest("public/css"))
        .pipe(bs.stream());
});

gulp.task('default', ['bower', 'icons', 'sass', 'dev']);
