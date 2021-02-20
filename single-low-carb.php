<?php 
    get_header();
    echo "single-low-carb";
?>
<div class="single-recipe"  >
    <div class="single-recipe__wrapper" data-barba="container" data-barba-namespace="archive" >
        
        <div class="single-recipe__img" style="background-image: linear-gradient(to left bottom, rgba(27, 67,50, .2), rgba(82, 183, 136, 1)),url('<?php echo get_field('image');?>');">
            <div class="single-recipe__content">
                    <h1 class="single-recipe--title"><?php the_title();?></h1>
                    <div class="single-recipe--facts__3">
                            <p>Type: <?php echo get_field('type');?></p>
                            <h3>Carbs:<?php echo get_field('carbohydrates');?></h3>
                            <h3>Calories: <?php echo get_field('calories');?></h3>
                    </div>
            </div>
        </div>
        
        <div id="<?php echo the_ID();?>" class="single-recipe__information" >
            <div class="single-recipe__information--item">
            
                <div class="single--ingrediants">
                    <h2 class="single-recipe__information--headline">ingrediants</h2>
                    <!-- <ul class="single--ingrediants">
                        <li><?php// the_content();?></li>
                    </ul> -->
                    
                    <div class="single--ingrediants">
                        <?php the_content();?>
                    </div>
                </div>
                <div class="single--instructions">
                    <h2 class="single-recipe__information--headline">Instructions</h2>
                    <p>
                        <?php echo the_field('instructions');?>
                    </p>
                    
                </div>
            
            
            </div>
                
        </div>
        
    </div>
</div>

<?php 
    
    get_footer();
?>
