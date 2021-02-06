<?php 
get_header();
?>
<div class="page"  data-barba="container" data-barba-namespace="recipes">
    <div class="hero__wrapper" >
        <h1>page.php</h1>
        <?php
            while(have_posts()){
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
