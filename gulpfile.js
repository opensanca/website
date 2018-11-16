const gulpStatic = require('gulp-static-gen');

gulpStatic({
    css: {
      input: './src/sass/main.sass',
      output: './dist/assets/css',
      watch: './src/sass/**/*',
    },
    hbs: {
      multiple: [{
        data: require('./src/data.json'),
        input: './src/templates/index.hbs',
        output: {
          name: 'index.html',
          dir: './dist',
        }
      }],
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
    },{
      input: './src/_github-challenge-opensanca.opensanca.com.br.txt',
      output: './dist'
    },{
      input: './src/google311ad56e2894319a.html',
      output: './dist'
    }],
    server: {
      indexPath: '/index.html'
    }
});
