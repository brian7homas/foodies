<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="keywords" content="Recipes, Meal Planning, Keto, Low-carb">
    <meta name="description" content="Add and sort all of your favorite recipes">
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
  <header class="header">
    <div class="header__wrapper">
        <nav class="nav-menu">
          <ul class="nav-menu__wrapper">
            <li class="nav-menu__item"><a>All Recipes</a><li>
            <li class="nav-menu__item"><a>Keto Recipes</a><li>
            <li class="nav-menu__item"><a>Normal Recipes</a><li>
            <li class="nav-menu__item"><a>Low Carb Recipes</a><li>
          </ul>
        </nav>
    </div>
  </header>