<?php 
    get_header();
?>
<div class="hero"  >
    <div class="hero__wrapper" data-barba="container" data-barba-namespace="front-page" >
        <div class="hero__header">
            <h1>All Recipes</h1>
        </div>
        
            <?php 
                $recipeTypeKeto = new WP_Query( array(
                    'posts_per_page' => 2,
                    'post_type' => 'keto',
                    
                ));?>
            <div class="recipe-archive">
                <div class="recipe-archive__wrapper">
                    <?php
                        while($recipeTypeKeto->have_posts()){ 
                            $recipeTypeKeto->the_post();
                            // echo the_title();
                            // echo the_field('type'); ?>
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
                        <?php
                        }   ?>
                </div>
            </div>
            <?php
            $recipeTypeLowCarb = new WP_Query( array(
                'posts_per_page' => 2,
                'post_type' => 'low-carb',
            )); ?>
            <div class="recipe-archive">
                <div class="recipe-archive__wrapper">
                    <?php
                    while($recipeTypeLowCarb->have_posts()){ 
                        $recipeTypeLowCarb->the_post();
                        // echo the_title();
                        // echo the_field('type'); ?>
                        
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
                        <?php
                    } ?>
                </div>
            </div>
            <?php
            $recipeTypeNormal = new WP_Query( array(
                'posts_per_page' => 2,
                'post_type' => 'recipe',
            )); ?>
            <div class="recipe-archive">
                <div class="recipe-archive__wrapper">
                    <?php
                    while($recipeTypeNormal->have_posts()){ 
                        $recipeTypeNormal->the_post();
                        // echo the_title();
                        // echo the_field('type'); ?>    
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
                            
                        <?php
                    } ?>
                </div>
            </div>
            <?php
            $recipeTypeDrinks = new WP_Query( array(
                'posts_per_page' => 2,
                'post_type' => 'drink', 
            )); ?>
            <div class="recipe-archive">
                <div class="recipe-archive__wrapper">
                    <?php 
                    while($recipeTypeDrinks->have_posts()){ 
                        $recipeTypeDrinks->the_post();
                        // echo the_title();
                        // echo the_field('type'); ?>
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
                        <?php
                    }?>
                    </div>
            </div>
            <?php 
            
        ?>
    </div>
</div>

<?php 
    
    get_footer();
?>