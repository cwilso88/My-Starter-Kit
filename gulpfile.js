var gulp = require('gulp');


gulp.task('printName', function(){
    console.log('My name is Chasity')
})
gulp.task('printAge', function(){
    console.log('I am 31 years young')
})
gulp.task('default', ['printAge', 'printName'])