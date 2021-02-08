<?php 
    get_header();
?>
<div class="recipe-archive"  >
    <div class="recipe-archive__wrapper" data-barba="container" data-barba-namespace="arvhive" >
            <?php 
                while(have_posts()): 
                    the_post();
                ?>
                <div class="recipe-archive__item">
                    
                    <h1 class="recipe-item__ingrediants"><?php echo the_content(); ?></h1>
                    <img class="recipe-item__img" src="<?php echo get_field('image');?>"/>
                    <p class="recipe-item__instructions" ><?php echo get_field('instructions');?></p>
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