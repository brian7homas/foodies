<?php 
    get_header();
?>

<div class="page">
    <div class="page__wrapper" data-barba="container" data-barba-namespace="archive">
        <div class="page__header">
            <h1>Low carb Recipes</h1>
        </div>
        <div class="recipe-archive"  >
            <div class="recipe-archive__wrapper" data-barba="container" data-barba-namespace="archive" >
                    <?php 
                        while(have_posts()): 
                            the_post();
                        ?>
                        <a href="<?php the_permalink()?>">
                            <div id="<?php echo the_ID();?>" class="recipe-archive__item" style="background-image: linear-gradient(to left bottom, rgba(27, 67,50, .2), rgba(82, 183, 136, 1)),url('<?php echo get_field('image');?>');">
                                <h1 class="recipe-item__title" >
                                    <?php echo the_title();?>
                                </h1>
                                <h2 class="recipe-item__type" >
                                    <p>Type: </p><?php echo get_field('type');?>
                                </h2>
                                <h4 class="recipe-item__calories" >
                                    <p>Cals: </p><?php echo get_field('calories');?>
                                </h4>
                                <h4 class="recipe-item__carbs" >
                                    <p>Carbs: </p><?php echo get_field('carbohoydrates');?>
                                </h4>
                            </div>
                        </a>
                        <?php 
                            endwhile;  
                        ?>
            </div>
            
        </div>
    </div>
</div>


<?php 
    
    get_footer();
?>
