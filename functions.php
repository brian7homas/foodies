<?php

function main_theme_files(){
    wp_enqueue_script('GSAP-draggable', get_theme_file_uri('/js/modules/Draggable.min.js'), NULL, '1.0', true);
    if (strstr($_SERVER['SERVER_NAME'], 'localhost')) {
        //echo "f-u.local";
        wp_enqueue_script('main-js', 'http://localhost:3000/bundled.js', NULL, '1.0', true);
      } else {
        //echo "not f-u.local";
        wp_enqueue_script('our-vendors-js', get_theme_file_uri('/bundled-assets/undefined'), NULL, '1.1', true);
        wp_enqueue_script('main-js', get_theme_file_uri('/bundled-assets/scripts.dc243c5c8e9de063b9ec.js'), NULL, '1.0', true);
        wp_enqueue_style('our-main-styles', get_theme_file_uri('/bundled-assets/styles.dc243c5c8e9de063b9ec.css'));
      }
}


add_action('wp_enqueue_scripts', 'main_theme_files');



function foodeez_features(){
  register_nav_menu('headerMenuLocation', 'Header Menu Loaction');
  register_nav_menu('footerMenuLocation', 'Footer menu');
}
add_action('after_setup_theme', 'foodeez_features');