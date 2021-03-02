<?php 
    get_header();
    $img = get_field('image');
?>
<div class="single-recipe"  data-barba="container" data-barba-namespace="single">
    <div class="single-recipe__wrapper"  >
        <div class="single-recipe__img" style="background-repeat:no-repeat;background-image: linear-gradient(to bottom, rgba(27, 67,50, .1), rgba(82, 183, 136, 1)),url('<?php echo $img['sizes']['contentLandscape'];?>');">
            <h1 class="single-recipe--title"><?php the_title();?></h1>
        </div>
        <div class="single-recipe__content">
            <div class="single-recipe__container">
                <?php facts();?>
                <div class="single--ingrediants">
                        <?php echo get_field('ingrediants');?>
                </div>            
            </div>
        </div>
        
        <div id="<?php echo the_ID();?>" class="single-recipe__information" >
            <div class="single-recipe__information--item">
                <?php archiveLink('dessert'); ?>
                <div class="single--instructions">
                    <h2 class="single-recipe__information--headline">Instructions</h2>
                    <p>
                        <?php 
                        if(get_field('instructions') != ''){
                            echo get_field('instructions');    
                        }else{
                            echo "Add Instructions";
                        }
                        ?>
                    </p>
                    
                </div>
            </div>
        </div>
    </div>
</div>

<?php 
    
    get_footer();
?>
