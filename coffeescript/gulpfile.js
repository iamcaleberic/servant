var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    uglify= require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr') ,
    server = lr();

var jsSources = ['components/lib/jquery/jquery.min.js',
                 'components/lib/semantic/semantic.min.js',
                 'components/scripts/*.js'
                ];

var sassSources = [
    'components/sass/*.scss'
];

var coffeeSources = [
    'components/coffee/*.coffee'
] 

gulp.task('coffee' , function(){
    gulp.src(coffeeSources)
     .pipe(coffee({bare: true }))
        .on('error', gutil.log)
    .pipe(gulp.dest('components/scripts'))
    .pipe(livereload());

});

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
    gulp.watch('*.html',['html'] );
    gulp.watch(coffeeSources ,['coffee'])
});

gulp.task('default', [ 'html', 'sass', 'coffee', 'js', 'watch']);
    