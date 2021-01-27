<?php

/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package oval.bio
 */

get_header();
?>

<main id="primary" class="site-main">

    <?php
        $header = get_field('header');
        $title = $header['title'] ?: 'Meet the team.';
        $introduction = $header['introduction'] ?: 'Breaking preconceived notions of what capitalism and free market economics are in the pursuit of providing extensive transparent access to functional life extension technology';
        $metaText = $header['metaText'] ?: 'Our Mission';

        // repeater
        $profiles = get_field('profiles');
        $leftOver = 30 - count($profiles);
    ?>

    <div class="pt-20 pb-32 bg-gray-400">
        <div class="container px-2 py-16 mx-auto">
            <div class="max-w-lg">
                <h3 class="text-5xl mb-4"><?php echo $title ?></h3>
                <div class="text-lg mb-3"><?php echo $introduction ?></div>
                <small class="label-text text-sm text-ovalGreenDark"><?php echo $metaText ?></small>
            </div>
        </div>
    </div>
    <div class="relative">
        <div class="cover absolute bottom-0 left-0 w-full h-screen z-10 rounded overflow-hidden bg-white-gradient">
            <div class="w-full absolute bottom-0 py-12 px-5">
                <div class="flex flex-wrap items-center justify-center -mx-4">
                    <div class="message px-4">
                        <p>Join us in our pursuit of the future.</p>
                    </div>
                    <div class="cta flex-none mt-3 md:mt-0 px-4">
                        <a href={article.link} class="button">
                            Contact Us
                            <i class="button-icon fas fa-paper-plane ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container px-2 -mt-20 mx-auto">
            <div class="pb-10 relative">
                <div class="flex flex-wrap -mx-2">
                    <?php foreach ($profiles as $i => $p) : ?>
                        <div class="px-2 w-full md:w-1/3 lg:w-1/4 mb-5">
                            <div class=" bg-gray-500 mb-1 rounded bg-cover bg-center bg-no-repeat" style="padding-top: 140%; background-image:url(<?php echo $p["image"]["url"] ?>)"></div>
                            <div class="text-lg mb-1"><?php echo $p["title"] ?></div>
                            <div class="label-text text-sm"><?php echo $p["full_name"] ?></div>
                        </div>
                    <?php endforeach ?>
                    <?php foreach (range(0, 6) as $n) : ?>
                        <div class="px-2 w-1/4 mb-5">
                            <div class=" bg-gray-500 mb-1 rounded flex items-center justify-center relative" style="padding-top: 140%">
                                <i class="fas fa-user-plus absolute block opacity-25 text-4xl" style="top:50%; left: 50%; transform: translate(-50%, -50%)"></i>
                            </div>
                            <div class="text-lg mb-1">No Title</div>
                            <div class="label-text text-sm">No Name</div>
                        </div>
                    <?php endforeach ?>
                </div>
            </div>
        </div>
    </div>

</main><!-- #main -->

<?php
get_sidebar();
get_footer();
