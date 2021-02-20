<?php 
    get_header();
?>
<div class="single-recipe"  >
    <div class="single-recipe__wrapper" data-barba="container" data-barba-namespace="archive" >

        
        
        <div class="single-recipe__img" style="background-image: linear-gradient(to left bottom, rgba(27, 67,50, .2), rgba(82, 183, 136, 1)),url('<?php echo get_field('image');?>');">
        
            <div class="single-recipe__content">
                    <h1 class="single-recipe--title"><?php the_title();?></h1>
                    <div class="single-recipe__container flex-container">
                        <div class="single-recipe--facts__3">
                                <p>Type: <?php echo get_field('type');?></p>
                                <h3>Carbs:<?php echo get_field('carbohydrates');?></h3>
                                <h3>Calories: <?php echo get_field('calories');?></h3>
                        </div>
                        <div class="single--ingrediants">
                            <ul class="single--ingrediants__ul">
                                <?php 
                                    $ing = get_field('ingrediants');
                                    $pieces = explode(" ", $ing);
                                    foreach($pieces as $piece=>$value){ ?>
                                        <li class="single--ingrediants__li"><?php echo $pieces[$piece];?></li>
                                    <?php } ?>
                            </ul>
                        </div>            
                    </div>
                    
            </div>
        </div>
        
        <div id="<?php echo the_ID();?>" class="single-recipe__information" >
            <div class="single-recipe__information--item">
            
                
                <div class="single--instructions">
                    <h2 class="single-recipe__information--headline">Instructions</h2>
                    <div class="center">
                        ><?php
                            the_post_thumbnail('contentLandscape');
                            the_content(); 
                        ?>
                    </div>
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
