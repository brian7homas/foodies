<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="keywords" content="Recipes, Meal Planning, Keto, Low-carb">
    <meta name="description" content="Add and sort all of your favorite recipes">
    <?php wp_head(); ?>
  </head>
  <body data-barba="wrapper" class="header" <?php body_class(); ?>>
  
  
  <header >
    <div class="search-bar">
      <input class="search-bar__input" />
      <span class="search-bar__btn">
        <i class="icon-basic-magnifier"></i>
      </span>
    </div>
    <div class="nav-toggle">
      <button class="btn__nav">Menu</button>
    </div>
    
    <div class="header__wrapper" >
    <nav class="nav-menu">
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
            <a href="<?php echo site_url('/')?>" class="nav-menu__item">
              <li>Home</li>
            </a>
          </ul>
        </nav>
    </div>
  </header>
  