var gulp = require('gulp'),
  gutil = require('gulp-util'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  stylus = require('gulp-stylus'),
  jade = require('gulp-jade'),
  coffee = require('gulp-coffee');


var stylusSources = [
  'components/stylus/style.styl'
]

var jadeSources = [
  'components/jade/html/*.jade'

]

var jsSources = [
  'components/scripts/jquery-1.11.1.min.js',
  'components/scripts/modernizr-2.8.3-respond-1.4.2.min.js'
]





/*===============*\
    Stylus task
\*===============*/

gulp.task('css', function() {
  gulp.src(stylusSources)
    .pipe(stylus({
      compress: true
    }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('css'));
});




/*===============*\
    Jade task
\*===============*/

gulp.task('html', function() {
  gulp.src(jadeSources)
    .pipe(jade({
      pretty : true
    }))
    .pipe(gulp.dest('./'));
});




/*===============*\
    Js task
\*===============*/

gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(uglify())
    .pipe(concat('script.js'))
    .pipe(gulp.dest('js'));
});





/*======================*\
    Watching All tasks
\*======================*/

gulp.task('watch', function() {
  gulp.watch(stylusSources, ['css']);
  gulp.watch(jadeSources, ['html']);
  gulp.watch(jsSources, ['js']);
});


/*======================*\
    Execute Task
\*======================*/

gulp.task('default',
  ['css', 'html', 'js', 'watch']);
