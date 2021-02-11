<?php
require get_theme_file_path('./inc/search-routes.php');


function navbar(){?>
    <nav class="nav-menu">
          <ul class="nav-menu__wrapper">
            <a href="<?php echo get_post_type_archive_link('recipe');?>" class="nav-menu__item">
              <li>All Recipes</li>
            </a>
            <a href="<?php echo site_url('/keto-recipes')?>" class="nav-menu__item">
              <li>Keto Recipes</li>
            </a>
            <a href="<?php echo site_url('/low-carb-recipes')?>" class="nav-menu__item">
              <li>Low Carb Recipes</li>
            </a>
            <a href="<?php echo site_url('/home')?>" class="nav-menu__item">
              <li>Home</li>
            </a>
          </ul>
        </nav>
<?php };



function main_theme_files(){
    wp_enqueue_style('icons', get_theme_file_uri('/css/icons/styles.css'));
    wp_enqueue_script('Barba-core', 'https://unpkg.com/@barba/core', NULL, '1.0', true);
    wp_enqueue_script('GSAP-core', get_theme_file_uri('/js/gsap/gsap.min.js'), NULL, '1.0', true);
    wp_enqueue_script('GSAP-draggable', get_theme_file_uri('/js/modules/Draggable.min.js'), NULL, '1.0', true);
    
    
    if (strstr($_SERVER['SERVER_NAME'], 'localhost')) {
        //echo "f-u.local";
        wp_enqueue_script('main-js', 'http://localhost:3000/bundled.js', NULL, '1.0', true);
      } else {
        //echo "not f-u.local";
        wp_enqueue_script('our-vendors-js', get_theme_file_uri('/bundled-assets/undefined'), NULL, '1.1', true);
        wp_enqueue_script('main-js', get_theme_file_uri('/bundled-assets/scripts.36a526e806c3dec83fcd.js'), NULL, '1.0', true);
        wp_enqueue_style('our-main-styles', get_theme_file_uri('/bundled-assets/styles.36a526e806c3dec83fcd.css'));
      }
    //runs regardless of environment
    wp_localize_script( 'main-js', 'mainData', array(
      'root_url'=> get_site_url(),
      
    ));
}
add_action('wp_enqueue_scripts', 'main_theme_files');



function foodeez_features(){
  register_nav_menu('headerMenuLocation', 'Header Menu Loaction');
  register_nav_menu('footerMenuLocation', 'Footer menu');
}
add_action('after_setup_theme', 'foodeez_features');