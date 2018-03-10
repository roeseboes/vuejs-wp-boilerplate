<?php status_header(200); ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>
<body>

  <div id="content">
        <?php
        if ( have_posts() ) :

            if ( is_home() && ! is_front_page() ) {
                echo '<h1>' . single_post_title( '', false ) . '</h1>';
            }

            while ( have_posts() ) : the_post();

                if ( is_singular() ) {
                    the_title( '<h1>', '</h1>' );
                } else {
                    the_title( '<h2><a href="' . esc_url( get_permalink() ) . '">', '</a></h2>' );
                }

                the_content();

            endwhile;

        endif;
        ?>
    </div>

  <div id="page"></div>

  <?php wp_footer(); ?>
</body>
</html>
