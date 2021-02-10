<?php 
    get_header();
?>
<div class="recipe-archive"  >
    <div class="recipe-archive__wrapper" data-barba="container" data-barba-namespace="arvhive" >
            <?php 
                while(have_posts()): 
                    the_post();
                ?>
                <div class="recipe-archive__item" style="background-image: linear-gradient(to left bottom, rgba(27, 67,50, .1), rgba(82, 183, 136, 1)),url('<?php echo get_field('image');?>');">
                    <!-- <h1 class="recipe-item__ingrediants"><?php// echo the_content(); ?></h1> -->
                    <!-- <p class="recipe-item__instructions" ><?php //echo get_field('instructions');?></p> -->
                    
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
                <?php 
                    endwhile;  
                ?>
    </div>
    <?php navbar();?>    
</div>


<?php 
    get_footer();
?>