const mix = require('laravel-mix');

mix.copy('node_modules/bulma_scss/css/bulma.css', 'public/dist')
  .sass('scss/cypher-bulma-extensions.scss', 'public/dist')
  .browserSync({
    proxy: 'http://127.0.0.1:19011',
    files: ["public/**/*"],
    port: 19013,
    watch: true
  });
