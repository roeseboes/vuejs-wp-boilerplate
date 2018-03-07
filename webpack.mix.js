const mix = require('laravel-mix');
mix.setPublicPath('dist')
  .js('src/app.js', 'scripts/')
  .extract([
    'axios',
    'babel-polyfill',
    'vue',
    'vuex',
    'vuex-localstorage'
  ])
  .sass('src/styles/master.scss', 'styles/')
  .copyDirectory('src/assets', 'dist/assets')
  .options({
    processCssUrls: false,
    uglify: true
  })
  .version();
