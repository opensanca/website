const gulpStatic = require('gulp-static-gen');

gulpStatic({
    css: {
      input: './src/sass/mains.sass',
      output: './dist/assets/css',
      watch: './src/sass/**/*',
    },
    hbs: {
      input: './src/templates/index.hbs',
      output: {
        name: 'index.html',
        dir: './dist'
      },
      batch : ['./src/templates/partials'],
      watch : './src/templates/**/*',
    },
    img: {
      input: './src/img/**/*',
      output: './dist/assets/img',
      config: {
          interlaced: true,
          progressive: true,
          optimizationLevel: 5,
          svgoPlugins: [{removeViewBox: true}]
      }
    },
    scripts: {
      input: './src/js/index.js',
      output: './dist/assets/js/',
      watch: './src/js/**/*',
    },
    move: [{
        input: './src/css/**/*',
        output: './dist/assets/css'
    },{
      input: './src/fonts/**/*',
      output: './dist/assets/fonts'
    },{
      input: './src/js/**/*',
      output: './dist/assets/js'
    },{
      input: './src/CNAME',
      output: './dist'
    }],
    server: {
      indexPath: '/index.html'
    }
});