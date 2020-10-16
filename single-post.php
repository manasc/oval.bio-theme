<?php get_header() ?>
<?php

global $query;

while (have_posts()) :
    the_post();

    get_template_part('template-parts/content', get_post_type());

endwhile;

?>
<?php get_footer(); ?>