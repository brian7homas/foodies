<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="keywords" content="Recipes, Meal Planning, Keto, Low-carb">
    <meta name="description" content="Add and sort all of your favorite recipes">
    <?php wp_head(); ?>
  </head>
  <body data-barba="wrapper"  <?php body_class(); ?>>
  
  
  <header class="header">
    <div class="header__wrapper" >
    
      <div class="search-bar">
        <input class="search-bar__input" autofocus='true'/>
          <span class="search-bar__btn">
          <i class="icon-basic-magnifier"></i>
        </span>
      </div>
      
      <div class="nav-toggle">
        <button class="btn__nav">Menu</button>
      </div>
    </div>
  </header>
  