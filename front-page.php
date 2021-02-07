<?php
$id=get_the_ID();
get_header();
?>


<div class="hero" >

    <div class="hero__wrapper" data-barba="container" data-barba-namespace="hero">
        <p>Home</p>
        <!-- <nav class="nav-menu">
          <ul class="nav-menu__wrapper">
            <a href="<?php echo site_url('/recipes')?>" class="nav-menu__item">
              <li>All Recipes</li>
            </a>
            <a href="<?php echo site_url('/keto-recipes')?>" class="nav-menu__item">
              <li>Keto Recipes</li>
            </a>
            <a href="<?php echo site_url('/low-carb-recipes')?>" class="nav-menu__item">
              <li>Low Carb Recipes</li>
            </a>
          </ul>
        </nav> -->
    </div>
</div>


<?php
get_footer();


?>