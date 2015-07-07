var gulp = require('gulp');
var deploy = require('gulp-gh-pages');

var options = {branch: 'master'};

gulp.task('deploy', function() {
  return gulp.src('./build/**/*')
    .pipe(deploy(options))
});
