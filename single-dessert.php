<?php 
    get_header();
    // var_dump(the_field('image')['sizes']['contentLandscape']);
    $img = get_field('image');
  
?>
<div class="single-recipe"  >
    <div class="single-recipe__wrapper" data-barba="container" data-barba-namespace="archive" >
        <div class="single-recipe__img" style="background-image: linear-gradient(to bottom, rgba(27, 67,50, .1), rgba(82, 183, 136, 1)),url('<?php echo $img['sizes']['contentLandscape'];?>');">
            <h1 class="single-recipe--title"><?php the_title();?></h1>
        </div>
        <div class="single-recipe__content">
                    <div class="single-recipe__container flex-container">
                        <div class="single-recipe--facts__3">
                                <div class="single-recipe--facts__3--type">
                                    <h3 class="mr-1">Type: </h3><p><?php echo get_field('type');?></p>
                                </div>
                                <div class="single-recipe--facts__3--carbs">
                                    <h3>Carbs:</h3>
                                    <p><?php echo get_field('carbohoydrates');?></p>
                                </div>
                                <div class="single-recipe--facts__3--calories">
                                    <h3>Calories: </h3><p><?php echo get_field('calories');?></p>
                                </div>
                        </div>
                        <div class="single--ingrediants">
                                <?php echo get_field('ingrediants');?>
                        </div>            
                    </div>
            </div>
        
        <div id="<?php echo the_ID();?>" class="single-recipe__information" >
            <div class="single-recipe__information--item">
                <div class="right-align">
                    <a href="<?php echo get_post_type_archive_link('keto'); ?>"> 
                        Go back
                    </a>
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


<?php 
    
    get_footer();
?>
