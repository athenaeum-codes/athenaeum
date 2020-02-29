import ansi from 'ansi-colors';
import * as gulp from 'gulp';
import { series, task, watch } from 'gulp';
import ts from 'gulp-typescript';
import nodemon from 'nodemon';

let log = require('fancy-log');

const tsProject = ts.createProject('tsconfig.json');

nodemon({
  ext: 'js json',
  script: 'dist/index.js'
});

task('build', () => {
  return tsProject.src()
    .pipe(tsProject())
    .pipe(gulp.dest('dist'));
});

// Watch for any changes in TypeScript source/test files and builds if changes
task('shallow watch', function () {
  return watch(['src/**/*.ts', 'test/**/*.ts'])
    .on('change', file => {
      gulp
        .src(file)
        .pipe(tsProject())
        .pipe(gulp.dest('dist'));
    });
});

task('watch', () => {
  return watch(['src/**/*.ts', 'test/**/*.ts'], gulp.task('build'));
});

// Start livereload server. Nodemon watches for changes on the index.js file
task('nodemon', function (cb) {
  nodemon.on('start', function () {
    log(ansi.cyan('Started server'));
  }).on('quit', function () {
    log.warn('Quit server');
    process.exit();
  }).on('restart', function (files: string[]) {
    // Changelog
    log(ansi.cyan('Restarting server...'));
    log(`Modified file${files.length === 1 ? '' : 's'}: ${files.length === 1 ? ansi.magenta(files[0]) : '' }`);
    files.slice(1).map(file => log(`\t${ansi.magenta(file)}`));
  });
  cb();
});

exports.serve = series('build', 'nodemon', 'watch');
exports.default = series('build', 'nodemon', 'shallow watch');