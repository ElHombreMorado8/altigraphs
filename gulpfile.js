const fileinclude = require('gulp-file-include');
const gulp = require('gulp');

gulp.task('fileinclude', function() {
  return gulp.src(['src/inicio.html', 'src/crear_puerto1.html', 'src/crear_puerto2.html', 'src/login.html', 'src/profile.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./public/'));
});