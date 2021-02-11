<?php

function searchRoutes(){
    register_rest_route('recipe/v1', 'search', array(
        'methods' => WP_REST_SERVER::READABLE,
        'callback' => 'recipeSearchResults'
    ));
};

add_action('rest_api_init', 'searchRoutes');

function recipeSearchResults($data){
    $AllRecipes = new WP_Query(array(
        'post_type' => array('page', 'post', 'recipe', 'keto', 'low-carb', 'drink'),
        's' => sanitize_text_field($data['term'])
    ));
    
    $results = array(
        'generalInfo'=> array(),
        'normal' => array(),
        'keto' =>array(),
        'low-carb' =>array(),
        'drinks'=>array()
    ); //new array
    
    
    while($AllRecipes->have_posts()){//loop thorugh query
        $AllRecipes->the_post();
        
        if(get_post_type() == 'post' OR get_post_type() == 'page'){
            array_push($results['generalInfo'], array( // add to new array
                //'made up name' => wp function
                    'title' => get_the_title(),
                    'link' => get_the_permalink(),
                    'posts' => the_post()
                ));
        }
        if(get_post_type() == 'recipe'){
            array_push($results['normal'], array( // add to new array
                //'made up name' => wp function
                    'title' => get_the_title(),
                    'link' => get_the_permalink(),
                    'img' => get_field('image'),
                    'type' => get_field('type'),
                    'carbs' => get_field('carbohoydrates'),
                    'sugar' => get_field('sugar'),
                    'calories' => get_field('calories')
                ));
        }
        if(get_post_type() == 'keto'){
            array_push($results['keto'], array( // add to new array
                //'made up name' => wp function
                    'title' => get_the_title(),
                    'link' => get_the_permalink(),
                    'img' => get_field('image'),
                    'type' => get_field('type'),
                    'carbs' => get_field('carbohoydrates'),
                    'sugar' => get_field('sugar'),
                    'calories' => get_field('calories')
                ));
        }
        if(get_post_type() == 'low-carb'){
            array_push($results['low-carb'], array( // add to new array
                //'made up name' => wp function
                    'title' => get_the_title(),
                    'link' => get_the_permalink(),
                    'img' => get_field('image'),
                    'type' => get_field('type'),
                    'carbs' => get_field('carbohoydrates'),
                    'sugar' => get_field('sugar'),
                    'calories' => get_field('calories')
                ));
        }
        if(get_post_type() == 'drink'){
            array_push($results['drinks'], array( // add to new array
                //'made up name' => wp function
                    'title' => get_the_title(),
                    'link' => get_the_permalink(),
                    'img' => get_field('image'),
                    'type' => get_field('type'),
                    'carbs' => get_field('carbohoydrates'),
                    'sugar' => get_field('sugar'),
                    'calories' => get_field('calories')
                ));
        }
    }
    return $results;
};