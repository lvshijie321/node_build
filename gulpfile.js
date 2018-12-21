const gulp = require('gulp')
const less = require('gulp-less')
const del = require('del')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
// const babel = require('gulp-babel')
gulp.task('clean',()=> {
  del.sync(['dist'])
})
gulp.task('less', () => {
  gulp.src('src/**/*.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 5 versions', 'Firefox > 20'],
      cascade: false
    }))
    .pipe(cleanCSS()) // 压缩css
    .pipe(gulp.dest('dist'))
})
// gulp.task('js', () => {
//   console.log(1)
//   gulp.src('src/script/index.js')
//     .pipe(babel())
//     .pipe(gulp.dest('dist'))
// })
gulp.task('default', ['clean','less'/*, 'js'*/],  () => {
  console.log('done!')
});

gulp.task('watch', () => {
  var watcher = gulp.watch('src/**/*', ['default']);
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  }); 
})
