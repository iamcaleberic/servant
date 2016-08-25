var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    uglify= require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr') ,
    server = lr();

var jsSources = ['components/scripts/scriptOne.js',
                 'components/scripts/scriptTwo.js'
                ];

var sassSources = [
    'components/sass/*.scss'
];

gulp.task('js', function(){
    gulp.src(jsSources)
    .pipe(uglify())
    .pipe(concat('script.js'))
    .pipe(gulp.dest('js'))
    .pipe(livereload());
});

gulp.task('html', function(){
    gulp.src('*.html')
        .pipe(livereload());
})

gulp.task('sass', function() {
  gulp.src(sassSources)
     return sass(sassSources ,{style: 'expanded', lineNumbers: true} )
    .pipe(concat('style.css'))
    .pipe(gulp.dest('style'))
    .pipe(livereload());
});

gulp.task('watch', function(){
    gulp.watch(jsSources, ['js']);
    gulp.watch(sassSources,['sass']);
    gulp.watch('*.html',['html'] )
});

gulp.task('default', [ 'html','sass', 'js', 'watch']);
    