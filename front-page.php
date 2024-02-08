<?php get_header();?>

<?php 
  $recipeTypeKeto = new WP_Query( array(
      'posts_per_page' => 3,
      'post_type' => 'keto',
  ));
  $recipeTypeRecipe = new WP_Query( array(
    'posts_per_page' => 3,
    'post_type' => 'recipe',
  ));
  $recipeTypeDessert = new WP_Query( array(
    'posts_per_page' => 3,
    'post_type' => 'dessert',
  ));
  $recipeTypeDrink = new WP_Query( array(
    'posts_per_page' => 3,
    'post_type' => 'drink',
  ));
  $recipeTypeLowCarb = new WP_Query( array(
    'posts_per_page' => 3,
    'post_type' => 'low-carb',
  ));
  ?>
<div class="front-page" data-barba="container" data-barba-namespace="front-page">
  <div class="hero__wrapper" style="
      background-image:linear-gradient(to bottom, transparent, black), url('<?php echo get_theme_file_uri('/images/wings.jpg')?>');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center top;
      ">
    <div class="hero__header">
      <h1 class="hero__headline">Foodies</h1>
    </div>
  </div>


  <section class="about__container">
    <img class="about__image" src="<?php echo get_theme_file_uri('/images/apple-pie.jpg');?>" alt="chicken wings">
    <div class="about__text">
      <h1 class="about__header">About Foodies</h1>
      <h1 class="about__sub-header">Web app built on Wordpress by Brian Thomas</h1>
      <p class="about__content">The foodies app was built to better track what I enjoy cooking. I felt that building
        this with Wordpress would be the best way to accomplish storing food data.
        Updates are on the way including the ability to write directly to the Wordpress database from the frontend!</p>
    </div>
  </section>
  
  <section class="recipe-types__container">
    <div class="recipe-types__text">
      <h1 class="recipe-types__header">Our Recipes</h1>
      <?php recipeCardList('keto', $recipeTypeKeto) ?>
      <?php recipeCardList('recipe', $recipeTypeRecipe) ?>
      <?php recipeCardList('low-carb', $recipeTypeLowCarb) ?>
      <?php recipeCardList('drink', $recipeTypeDrink) ?>
    </div>
    <img class="recipe-types__image" src="<?php echo get_theme_file_uri('/images/cheese-cake.jpg');?>" alt="cheese cake">
  </section>
</div>
<?php get_footer();?>