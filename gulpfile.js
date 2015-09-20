var gulp = require('gulp');
var	concat = require('gulp-concat');
var	uglify = require('gulp-uglify');

gulp.task('scripts', function(){

	return gulp.src([
		'app/lib/angular/angular.js',
		'app/lib/angular/angular-route.js',
		'app/lib/angular/angular-ui-router.min.js',
		'app/lib/angular/angular-resource.min.js',
		'app/lib/jquery/jquery.min.js',
		'app/js/app.js',
		'app/modules/hotels/hotelModule.js',
		'app/modules/hotels/js/*.js',
		'app/modules/images/imageModule.js',
		'app/modules/images/js/*.js'

	])
	.pipe(concat('app.js'))
	.pipe(gulp.dest('app/dist/scripts/'));
});

gulp.task('styles', function(){

	return gulp.src([
		'app/css/reset.css',
		'app/css/bootstrap.min.css',
		'app/css/app.css',
		'app/modules/hotels/css/hotels.css',
		'app/modules/images/css/images.css'

	])
	.pipe(concat('app.css'))
	.pipe(gulp.dest('app/dist/css/'));
});

gulp.task('watch', function(){
	gulp.watch('app/**/*.js', ['scripts']);
	gulp.watch('app/**/*.css', ['styles']);
});


gulp.task('default', ['scripts', 'styles']);