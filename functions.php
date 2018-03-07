<?php
remove_action('template_redirect', 'redirect_canonical');

function remove_redirects() {
    add_rewrite_rule('^/(.+)/?', 'index.php', 'top');
}
add_action('init', 'remove_redirects');

function load_vue_scripts() {
    wp_enqueue_style('/dist/styles/app.css', get_template_directory_uri() . '/dist/styles/app.css', false, null);
    wp_enqueue_script('/dist/scripts/manifest.js', get_template_directory_uri() . '/dist/scripts/manifest.js', null, null, true);
    wp_enqueue_script('/dist/scripts/vendor.js', get_template_directory_uri() . '/dist/scripts/vendor.js', null, null, true);
    wp_enqueue_script('/dist/scripts/app.js', get_template_directory_uri() . '/dist/scripts/app.js', null, null, true);
}
add_action('wp_enqueue_scripts', 'load_vue_scripts', 100);
