<?php
require get_theme_file_path('./inc/search-routes.php');
function reg_tag() {
  register_taxonomy_for_object_type('post_tag', 'keto');
  register_taxonomy_for_object_type('post_tag', 'drink');
}
add_action('init', 'reg_tag');

function pageHeader($page){ ?>
  <div class="page__header">
    <h1 class="page__header--title">
      <?php echo $page['title']; ?>
    </h1>
    <br>
    <small class="page__header--sub-title">
      <?php echo $page['subTitle']; ?>
    </small>
  </div>
<?php }

function archiveLink($archive){ ?>
    <div class="archive-link--container right-align">
        <a class="archive-link" href="<?php echo get_post_type_archive_link($archive); ?>"> 
          See all <?php echo get_post_type();?> recipes
        </a>
    </div>
<?php }
function navbar(){?>
    <nav class="nav-menu">
          <ul class="nav-menu__wrapper">
            <a href="<?php echo get_post_type_archive_link('recipe');?>" class="nav-menu__item">
              <li>Normal Recipes</li>
            </a>
            <a href="<?php echo get_post_type_archive_link('keto');?>" class="nav-menu__item">
              <li>Keto Recipes</li>
            </a>
            <a href="<?php echo get_post_type_archive_link('low-carb');?>" class="nav-menu__item">
              <li>Low Carb Recipes</li>
            </a>
            <a href="<?php echo get_post_type_archive_link('drink');?>" class="nav-menu__item">
              <li>Drink recipes</li>
            </a>
            <a href="<?php echo get_post_type_archive_link('dessert');?>" class="nav-menu__item">
              <li>Dessert recipes</li>
            </a>
            <a href="<?php echo site_url('/')?>" class="nav-menu__item">
              <li>Home</li>
            </a>
          </ul>
        </nav>
<?php };
function facts(){ 
  $Type = get_field('type');
  $Calories = get_field('calories');
  $Calories_From_Fat = get_field('calories_from_fat');
  $Cholesterol = get_field('cholesterol');
  $Fat = get_field('fat');
  $Saturated_Fat = get_field('saturated_fat');
  $Sodium = get_field('sodium');
  $Potassium = get_field('potassium');
  $Carbohoydrates = get_field('carbohoydrates');
  $Fiber = get_field('fiber');
  $Sugar = get_field('sugar');
  $Protein = get_field('protein');
  $Calcium = get_field('calcium');
$Iron = get_field('iron');
  ?>
  <div class="single-recipe--facts__3">  
    <div class="single-recipe--fact-item">
        <p>Type:</p>
        <p><?php if($Type){echo $Type;}else{echo "No type selected";} ?></p>
    </div>
    <div class="single-recipe--fact-item">
        <h3>Carbs:</h3>
        <h3><?php if($Carbohoydrates){echo $Carbohoydrates;}else{echo "Not set";} ?></h3>
    </div>
    <div class="single-recipe--fact-item">
        <h3>Calories:</h3>
        <h3><?php if($Calories){echo $Calories;}else{echo "Not set";} ?></h3>
    </div>
    <div class="single-recipe--fact-item">
        <h3>Fat:</h3>
        <h3><?php if($Fat){echo $Fat;}else{echo "Not set";} ?></h3>
    </div>
    <div class="single-recipe--fact-item">
        <h3>Saturated Fat:</h3>
        <h3><?php if($Saturated_Fat){echo $Saturated_Fat;}else{echo "Not set";} ?></h3>
    </div>
    <div class="single-recipe--fact-item">
        <h3>Sodium:</h3>
        <h3><?php if($Sodium){echo $Sodium;}else{echo "Not set";} ?></h3>
    </div>
    <div class="single-recipe--fact-item">
        <h3>Potassium:</h3>
        <h3><?php if($Potassium){echo $Potassium;}else{echo "Not set";} ?></h3>
    </div>
    <div class="single-recipe--fact-item">
        <h3>Fiber:</h3>
        <h3><?php if($Fiber){echo $Fiber.'g';}else{echo "Not set";} ?></h3>
    </div>
    <div class="single-recipe--fact-item">
        <h3>Suger:</h3>
        <h3><?php if($Sugar){echo $Sugar.'g';}else{echo "Not set";} ?></h3>
    </div>
    <div class="single-recipe--fact-item">
        <h3>Protien:</h3>
        <h3><?php if($Protien){echo $Protien.'g';}else{echo "Not set";} ?></h3>
    </div>
    <div class="single-recipe--fact-item">
        <h3>Calcium:</h3>
        <h3><?php if($Calcium){echo $Calcium.'g';}else{echo "Not set";} ?></h3>
    </div>
    <div class="single-recipe--fact-item">
        <h3>Iron:</h3>
        <h3><?php if($Iron){echo $Iron.'mg';}else{echo "Not set";} ?></h3>
    </div>
  </div>
<?php }


function main_theme_files(){
    wp_enqueue_style('icons', get_theme_file_uri('/css/icons/styles.css'));
    wp_enqueue_script('Barba-core', 'https://unpkg.com/@barba/core', NULL, '1.0', true);
    wp_enqueue_script('GSAP-core', get_theme_file_uri('/js/gsap/gsap.min.js'), NULL, '1.0', true);
    
    
    if (strstr($_SERVER['SERVER_NAME'], 'localhost')) {
        wp_enqueue_script('main-js', 'http://localhost:3000/bundled.js', NULL, '1.0', true);
      } else {
        
        wp_enqueue_script('main-js', get_theme_file_uri('/bundled-assets/scripts.f0100511ae8ed1bd8430.js'), NULL, filemtime(), true);
        wp_enqueue_style('our-main-styles', get_theme_file_uri('/bundled-assets/styles.f0100511ae8ed1bd8430.css'), filemtime());
      }
    //runs regardless of environment
    wp_localize_script( 'main-js', 'mainData', array(
      'root_url'=> get_site_url(),
      
    ));
}
add_action('wp_enqueue_scripts', 'main_theme_files');



function foodeezFeatures(){
  register_nav_menu('headerMenuLocation', 'Header Menu Loaction');
  register_nav_menu('footerMenuLocation', 'Footer menu');
  add_image_size('contentLandscape', 1366, 350, true);
}
add_action('after_setup_theme', 'foodeezFeatures');