<?php 
get_header();
?>
<div class="page"  data-barba="container" data-barba-namespace="recipes">
    <div class="page__wrapper" >
        <h1><?php echo wp_get_post_parent_id( get_the_ID() ) ?></h1>
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
