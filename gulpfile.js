var gulp = require('gulp');
var	concat = require('gulp-concat');
var	uglify = require('gulp-uglify');

gulp.task('scripts', function(){

	return gulp.src([
		'app/lib/angular/angular.js',
		'app/lib/angular/angular-route.js',
		'app/lib/angular/angular-ui-router.min.js',
		'app/modules/hotels/hotelModule.js',
		'app/modules/hotels/js/controllers.js'

	])
	.pipe(concat('app.js'))
	.pipe(gulp.dest('app/dist/scripts/'));
});

gulp.task('styles', function(){

	return gulp.src([
		'app/css/reset.css',
		'app/css/bootstrap.min.css',
		'app/css/app.css',
		'app/modules/hotels/css/hotels.css'

	])
	.pipe(concat('app.css'))
	.pipe(gulp.dest('app/dist/css/'));
});

gulp.task('watch', function(){
	gulp.watch('app/**/*.js', ['scripts']);
	gulp.watch('app/**/*.css', ['styles']);
});


gulp.task('default', ['scripts', 'styles']);