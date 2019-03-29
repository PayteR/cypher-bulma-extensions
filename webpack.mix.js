const mix = require('laravel-mix');

mix.sass('bulma_scss/_all.scss', 'public/dist')
  .browserSync({
    proxy: 'http://127.0.0.1:19011',
    files: ["public/**/*"],
    port: 19013,
    ui: {
      port: 19014
    },
    watch: true
  });
