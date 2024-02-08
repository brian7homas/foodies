<?php 
    get_header();
?>
<div class="hero" data-barba="container" data-barba-namespace="front-page">
  <div class="hero__wrapper">
    <div class="hero__header">
      <h1>All Recipes</h1>
    </div>
  </div>
  <?php 
                    $recipeTypeKeto = new WP_Query( array(
                        'posts_per_page' => -1,
                        'post_type' => 'keto',
                        
                    ));?>
  <h1>Keto Recipes</h1>
  <div class="recipe-container">
    <div class="recipe-container__wrapper">
      <?php
                            while($recipeTypeKeto->have_posts()){ 
                                $recipeTypeKeto->the_post();
                                // echo the_title();
                                // echo the_field('type'); ?>
      <a href="<?php the_permalink();?>">
        <div id="<?php echo the_ID();?>" class="recipe-container__item"
          style="background-repeat: no-repeat;background-image: linear-gradient(to left bottom, rgba(27, 67,50, .2), rgba(82, 183, 136, 1)),url('<?php echo get_field('image')['sizes']['thumbnail'];?>');">
          <h1 class="recipe-container__title">
            <?php echo the_title();?>
          </h1>
          <div class="recipe-container__type">
            <h4 class="recipe-container__type--title">
              Type:
            </h4>
            <p class="recipe-container__type--value">
              <?php 
                                                    if(get_field('type') != ''){
                                                        echo get_field('type');    
                                                    }else{
                                                        echo "Add type";
                                                    }
                                                ?>
            </p>
          </div>
          <div class="recipe-container__calories">
            <h4 class="recipe-container__calories--title">
              Cals:
            </h4>
            <p class="recipe-container__calories--value">
              <?php 
                                                    if(get_field('calories') != ''){
                                                        echo get_field('calories');    
                                                    }else{
                                                        echo "Add calories";
                                                    }
                                                ?>
            </p>
          </div>
          <div class="recipe-container__carbs">
            <h4 class="recipe-container__carbs--title">Carbs: </h4>
            <p class="recipe-container__carbs--value">
              <?php 
                                                        if(get_field('carboholhydrates') != ''){
                                                            echo get_field('carboholhydrates');    
                                                        }else{
                                                            echo "Add carbs";
                                                        }
                                                    ?>
            </p>
          </div>
        </div>
      </a>
      <?php
                            }   ?>
    </div>
  </div>
  <?php
                $recipeTypeLowCarb = new WP_Query( array(
                    'posts_per_page' => -1,
                    'post_type' => 'low-carb',
                )); ?>
  <h1>Low Carb Recipes</h1>
  <div class="recipe-container">
    <div class="recipe-container__wrapper">
      <?php
                        while($recipeTypeLowCarb->have_posts()){ 
                            $recipeTypeLowCarb->the_post();
                            // echo the_title();
                            // echo the_field('type'); ?>
      <a href="<?php the_permalink(); ?>">
        <div id="<?php echo the_ID();?>" class="recipe-container__item"
          style="background-repeat: no-repeat;background-image: linear-gradient(to left bottom, rgba(27, 67,50, .2), rgba(82, 183, 136, 1)),url('<?php echo get_field('image')['sizes']['thumbnail'];?>');">
          <h1 class="recipe-container__title">
            <?php echo the_title();?>
          </h1>
          <h2 class="recipe-container__type">
            <p>Type: </p><?php echo get_field('type');?>
          </h2>
          <h4 class="recipe-container__calories">
            <p>Cals: </p><?php echo get_field('calories');?>
          </h4>
          <h4 class="recipe-container__carbs">
            <p>Carbs: </p><?php echo get_field('carbohoydrates');?>
          </h4>
        </div>
      </a>
      <?php
                        } ?>
    </div>
  </div>
  <?php
                $recipeTypeNormal = new WP_Query( array(
                    'posts_per_page' => -1,
                    'post_type' => 'recipe',
                )); ?>
  <h1>Normal Recipes</h1>
  <div class="recipe-container">
    <div class="recipe-container__wrapper">
      <?php
                        while($recipeTypeNormal->have_posts()){ 
                            $recipeTypeNormal->the_post();
                            // echo the_title();
                            // echo the_field('type'); ?>
      <a href="<?php the_permalink();?>">
        <div id="<?php echo the_ID();?>" class="recipe-container__item"
          style="background-repeat: no-repeat;background-image: linear-gradient(to left bottom, rgba(27, 67,50, .2), rgba(82, 183, 136, 1)),url('<?php echo get_field('image')['sizes']['thumbnail'];?>');">
          <h1 class="recipe-container__title">
            <?php echo the_title();?>
          </h1>
          <h2 class="recipe-container__type">
            <p>Type: </p><?php echo get_field('type');?>
          </h2>
          <h4 class="recipe-container__calories">
            <p>Cals: </p><?php echo get_field('calories');?>
          </h4>
          <h4 class="recipe-container__carbs">
            <p>Carbs: </p><?php echo get_field('carbohoydrates');?>
          </h4>
        </div>
      </a>

      <?php
                        } ?>
    </div>
  </div>
  <?php
                $recipeTypeDrinks = new WP_Query( array(
                    'posts_per_page' => -1,
                    'post_type' => 'drink', 
                )); ?>
  <h1>Drink Recipes</h1>
  <div class="recipe-container">
    <div class="recipe-container__wrapper">
      <?php 
                        while($recipeTypeDrinks->have_posts()){ 
                            $recipeTypeDrinks->the_post();
                            // echo the_title();
                            // echo the_field('type'); ?>
      <a href="<?php the_permalink(); ?>">
        <div id="<?php echo the_ID();?>" class="recipe-container__item"
          style="background-repeat: no-repeat;background-image: linear-gradient(to left bottom, rgba(27, 67,50, .2), rgba(82, 183, 136, 1)),url('<?php echo get_field('image')['sizes']['thumbnail'];?>');">
          <h1 class="recipe-container__title">
            <?php echo the_title();?>
          </h1>
          <h2 class="recipe-container__type">
            <p>Type: </p><?php echo get_field('type');?>
          </h2>
          <h4 class="recipe-container__calories">
            <p>Cals: </p><?php echo get_field('calories');?>
          </h4>
          <h4 class="recipe-container__carbs">
            <p>Carbs: </p><?php echo get_field('carbohoydrates');?>
          </h4>
        </div>
      </a>
      <?php
                        }?>
    </div>
  </div>
  <?php
                $recipeTypeDrinks = new WP_Query( array(
                    'posts_per_page' => -1,
                    'post_type' => 'dessert', 
                )); ?>
  <h1>Dessert Recipes</h1>
  <div class="recipe-container">
    <div class="recipe-container__wrapper">
      <?php 
                        while($recipeTypeDrinks->have_posts()){ 
                            $recipeTypeDrinks->the_post();
                            // echo the_title();
                            // echo the_field('type'); ?>
      <a href="<?php the_permalink(); ?>">
        <div id="<?php echo the_ID();?>" class="recipe-container__item"
          style="background-repeat: no-repeat;background-image: linear-gradient(to left bottom, rgba(27, 67,50, .2), rgba(82, 183, 136, 1)),url('<?php echo get_field('image')['sizes']['thumbnail'];?>');">
          <h1 class="recipe-container__title">
            <?php echo the_title();?>
          </h1>
          <h2 class="recipe-container__type">
            <p>Type: </p><?php echo get_field('type');?>
          </h2>
          <h4 class="recipe-container__calories">
            <p>Cals: </p><?php echo get_field('calories');?>
          </h4>
          <h4 class="recipe-container__carbs">
            <p>Carbs: </p><?php echo get_field('carbohoydrates');?>
          </h4>
        </div>
      </a>
      <?php
                        }?>
    </div>
  </div>
</div>

<?php 
    
    get_footer();
?>