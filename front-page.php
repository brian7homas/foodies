<?php 
    get_header();
?>
<div class="hero"  >
    <div class="hero__wrapper" data-barba="container" data-barba-namespace="page" >
        <?php 
            $recipeTypeKeto = new WP_Query( array(
                'posts_per_page' => 2,
                'post_type' => 'keto',
                
            ));
            $recipeTypeLowCarb = new WP_Query( array(
                'posts_per_page' => 2,
                'post_type' => 'low-carb',
                
            ));
            $recipeTypeNormal = new WP_Query( array(
                'posts_per_page' => 2,
                'post_type' => 'recipe',
                
            ));
            $recipeTypeDrinks = new WP_Query( array(
                'posts_per_page' => 2,
                'post_type' => 'drinks',
                
            ));
            
            while($recipeTypeNormal->have_posts()){
                $recipeTypeNormal->the_post();
                echo the_title();
                echo the_field('type');
                
            }
            while($recipeTypeKeto->have_posts()){
                $recipeTypeKeto->the_post();
                echo the_title();
                echo the_field('type');
            }
            while($recipeTypeLowCarb->have_posts()){
                $recipeTypeLowCarb->the_post();
                echo the_title();
                echo the_field('type');
            }
            while($recipeTypeDrinks->have_posts()){
                $recipeTypeDrinks->the_post();
                echo the_title();
                echo the_field('type');
            }
        ?>
    </div>
</div>

<?php 
    
    get_footer();
?>