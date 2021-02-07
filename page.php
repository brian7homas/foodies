<?php 
get_header();
?>

<div class="page"  >
    <div class="page__wrapper" data-barba="container" data-barba-namespace="page" >
        <p>page</p>
        <!-- <nav class="nav-menu">
            <ul class="nav-menu__wrapper">
                <a href="<?php echo site_url('/keto-recipes')?>" class="nav-menu__item">
                <li>Keto Recipes</li>
                </a>
                <a href="<?php echo site_url('/low-carb-recipes')?>" class="nav-menu__item">
                <li>Low Carb Recipes</li>
                </a>
                <a href="<?php echo site_url('/')?>" class="nav-menu__item">
                <li>Home</li>
                </a>
            </ul>
        </nav> -->
        <?php
            while(have_posts()){
                $is_parant = wp_get_post_parent_id( get_the_ID() );
                if($is_parant != 0){
                    echo "this is not a parant page";
                    
                }else{
                    echo "this is a parent page";
                }
                
                the_post();
                echo the_title();
                echo the_content();
            }
        ?>
    </div>
</div>

<?php 
get_footer();
?>
