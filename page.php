<?php 
get_header();
?>

<div class="page"  >
    <div class="page__wrapper" data-barba="container" data-barba-namespace="page" >
            <?php 
                $recipeTypeKeto = new WP_Query( array(
                    'posts_per_page' => 2,
                    'post_type' => 'recipe',
                    
                ) );
                while($recipeTypeKeto->have_posts()){
                    $recipeTypeKeto->the_post();
                    echo the_title();
                    echo the_field('type');
                }
            ?>
    </div>
</div>

<?php 
get_footer();
?>
