<?php


function typeRoutes(){
    register_rest_route('type/v1', 'search', array(
        'methods' => WP_REST_SERVER::READABLE,
        'callback' => 'typeSearchResults'
    ));
};
add_action('rest_api_init', 'typeRoutes');



function typeSearchResults($data){
    $AllTypes = new WP_Query(array(
        // 'post_type' => array( 'recipe', 'keto', 'low-carb', 'drink', 'dessert'),
        'meta_key' => 'type',
        'meta_value' => 'Breakfast',
        
        's' => sanitize_text_field($data['type'])
    ));
    $results = array(
        'breakfast'=> array(),
        'dessert'=> array(),
    );
    while($AllTypes->have_posts()){//loop thorugh query
        $AllTypes->the_post();
        
        if(get_field('type') == 'Breakfast'){
            array_push($results['breakfast'], array( // add to new array
                //'made up name' => wp function
                    'title' => get_the_title(),
                    'link' => get_the_permalink(),
                    'posts' => the_post(),
                    'type' => get_field('type')
                ));
        }
        if(get_field('type') == 'Dessert'){
            array_push($results['dessert'], array( // add to new array
                //'made up name' => wp function
                    'title' => get_the_title(),
                    'link' => get_the_permalink(),
                    'posts' => the_post()
                ));
        }
    }
    return $results;
}

function searchRoutes(){
    register_rest_route('recipe/v1', 'search', array(
        'methods' => WP_REST_SERVER::READABLE,
        'callback' => 'recipeSearchResults'
    ));
};
add_action('rest_api_init', 'searchRoutes');



function recipeSearchResults($data){
    $AllRecipes = new WP_Query(array(
        'post_type' => array('recipe', 'keto', 'low-carb', 'drink', 'dessert'),
        'meta_key' => 'type',
        'meta_value' => array('Breakfast', 'Dessert', 'Lunch', 'Dinner', 'Drink'),
        's' => sanitize_text_field($data['term'])
    ));
    
    $results = array(
        'generalInfo'=> array(),
        'normal' => array(),
        'keto' =>array(),
        'lowCarb' =>array(),
        'drinks'=>array(),
        'desserts'=>array(),
        'breakfast' => array(),
        'lunch' => array(),
        'dinner' => array()
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
                    'img' => get_field('image')['sizes']['thumbnail'],
                    'type' => get_field('type'),
                    'carbs' => get_field('carbohoydrates'),
                    'sugar' => get_field('sugar'),
                    'calories' => get_field('calories')
                ));
            if(get_field('type') == 'Breakfast'){
                array_push($results['breakfast'], array( // add to new array
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
            if(get_field('type') == 'Lunch'){
                array_push($results['lunch'], array( // add to new array
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
            if(get_field('type') == 'Dinner'){
                array_push($results['dinner'], array( // add to new array
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
        if(get_post_type() == 'keto'){
            array_push($results['keto'], array( // add to new array
                //'made up name' => wp function
                    'title' => get_the_title(),
                    'link' => get_the_permalink(),
                    'img' => get_field('image')['sizes']['thumbnail'],
                    'type' => get_field('type'),
                    'carbs' => get_field('carbohoydrates'),
                    'sugar' => get_field('sugar'),
                    'calories' => get_field('calories')
                ));
                if(get_field('type') == 'Breakfast'){
                    array_push($results['breakfast'], array( // add to new array
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
                if(get_field('type') == 'Lunch'){
                    array_push($results['lunch'], array( // add to new array
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
                if(get_field('type') == 'Dinner'){
                    array_push($results['dinner'], array( // add to new array
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
        if(get_post_type() == 'low-carb'){
            array_push($results['lowCarb'], array( // add to new array
                //'made up name' => wp function
                    'title' => get_the_title(),
                    'link' => get_the_permalink(),
                    'img' => get_field('image')['sizes']['thumbnail'],
                    'type' => get_field('type'),
                    'carbs' => get_field('carbohoydrates'),
                    'sugar' => get_field('sugar'),
                    'calories' => get_field('calories')
                ));
                if(get_field('type') == 'Breakfast'){
                    array_push($results['breakfast'], array( // add to new array
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
                if(get_field('type') == 'Lunch'){
                    array_push($results['lunch'], array( // add to new array
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
                if(get_field('type') == 'Dinner'){
                    array_push($results['dinner'], array( // add to new array
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
        if(get_post_type() == 'drink'){
            array_push($results['drinks'], array( // add to new array
                //'made up name' => wp function
                    'title' => get_the_title(),
                    'link' => get_the_permalink(),
                    'img' => get_field('image')['sizes']['thumbnail'],
                    'type' => get_field('type'),
                    'carbs' => get_field('carbohoydrates'),
                    'sugar' => get_field('sugar'),
                    'calories' => get_field('calories'),
                    'category' => 'drink'
                ));
                
        }
        if(get_post_type() == 'dessert'){
            array_push($results['desserts'], array( // add to new array
                //'made up name' => wp function
                    'title' => get_the_title(),
                    'link' => get_the_permalink(),
                    'img' => get_field('image')['sizes']['thumbnail'],
                    'type' => get_field('type'),
                    'carbs' => get_field('carbohoydrates'),
                    'sugar' => get_field('sugar'),
                    'calories' => get_field('calories'),
                    'category' => 'dessert'
                ));
                if(get_field('type') == 'Breakfast'){
                    array_push($results['breakfast'], array( // add to new array
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
                if(get_field('type') == 'Lunch'){
                    array_push($results['lunch'], array( // add to new array
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
                if(get_field('type') == 'Dinner'){
                    array_push($results['dinner'], array( // add to new array
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
    }
    return $results;
};
