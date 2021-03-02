<?php 
    get_header();
    
?>

<div class="page" data-barba="container" data-barba-namespace="archive">
    <div class="page__wrapper" >
        <?php echo pageHeader(array(
            'title' => 'Normal',
            'subTitle' => 'Recipes that dont require any "special" ingrediants.'
        )); ?>
            <div class="recipe-archive"  >
            <div class="recipe-archive__wrapper"  >
                
                    <?php 
                        while(have_posts()): 
                            the_post();
                        ?>
                        <a href="<?php the_permalink()?>">
                            <div id="<?php echo the_ID();?>" class="recipe-archive__item" style="background-repeat:no-repeat;background-image: linear-gradient(to left bottom, rgba(27, 67,50, .2), rgba(82, 183, 136, 1)),url('<?php echo get_field('image')['sizes']['thumbnail'];?>');" >
                                <h1 class="recipe-item__title" >
                                    <?php echo the_title();?>
                                </h1>
                                <h2 class="recipe-item__type" >
                                    <p class="recipe-item__type">Type: </p><?php echo get_field('type');?>
                                </h2>
                                <h4 class="recipe-item__calories" >
                                    <p class="recipe-item__calories">Cals: </p><?php echo get_field('calories');?>
                                </h4>
                                <h4 class="recipe-item__carbs" >
                                    <p class="recipe-item__carbs">Carbs: </p><?php echo get_field('carbohoydrates');?>
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
