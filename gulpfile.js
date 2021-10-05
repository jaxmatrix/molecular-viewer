var gulp = require('gulp');
var webserver = require('gulp-webserver');
var shell = require('gulp-shell');

gulp.task('webserver', function() {
    return gulp.src('app')
    
    .pipe(webserver({
        host: '0.0.0.0',
        livereload: true,
        port:8080,
        // directoryListing: true,
        open: true,
        fallback: 'index.html'
    }));

    // .pipe(shell(([ 
    // 'ws -d app/'
    // ])))

});