<?php get_header() ?>
<div class="hero-banner py-0 md:py-5">
    <div class="container mx-auto">
        <div class="px-10 md:px-24 py-32 w-full rounded-none md:rounded-md overflow-hidden relative bg-cover bg-center bg-no-repeat flex flex-wrap items-center justify-start" style="background-image:url(<?php echo get_fake_images()[24]->urls->full ?>)">
            <div class="bg-black opacity-50 absolute top-0 left-0 h-full w-full"></div>
            <div class="relative content max-w-sm">
                <h1 class="text-4xl text-white font-light leading-tight mb-3">Buy now and invest in your future.</h1>
                <p class="mb-8 text-lg text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus a amet volutpat vel.</p>
                <a class="button">All Products</a>
            </div>
        </div>
    </div>
</div>
<?php get_template_part('source/blocks/icons') ?>

<?php
$query_args = [
    'post_type' => ['post'],
    'posts_per_page' => -1
];

$query = new WP_Query($query_args);

$all_posts = $query->posts;
?>

<div>
    <div class="container px-2 mx-auto">
        <h1 class="text-4xl mb-8">Blog News</h1>
        <div class="pb-10 relative">
            <div class="label inline-block"><span class="label-text"><i class="fas fa-map-pin mr-1"></i>Featured</span></div>
            <div class="blog-items flex flex-wrap -mx-px">
                <div class="hidden md:block w-full md:w-3/4 px-px">
                    <div class="blog-item relative mb-5 md:mb-0 w-full h-full flex flex-wrap bg-cover bg-center bg-no-repeat" style="background-image:url(<?php echo get_the_post_thumbnail_url($all_posts[0]->ID) ?>)">
                        <div class="main-everything absolute p-5 md:p-10 top-0 left-0 content h-full w-full flex flex-col items-start justify-end">
                            <h1 class="main-title text-xl md:text-4xl text-white font-light leading-tight mb-3 w-full capitalize pr-20">
                                <?php echo $all_posts[0]->post_title ?>
                            </h1>
                            <div class="flex flex-wrap mb-2 md:mb-4 main-labels">
                                <!-- <?php
                                        $tags = get_the_tags($all_posts[$z]->ID);
                                        ?>

                                <?php if (!empty($tags)) : ?>
                                    <?php foreach (get_the_tags($all_posts[0]->ID) as $key => $post_tag) : ?>
                                        <?php if ($key < 5) : ?>
                                            <div class="main-label label label-blue mr-2" style="transition-delay: <?php echo $key * 100 ?>ms"><span class="label-text"><?php echo $post_tag->name ?></span></div>
                                        <?php endif; ?>
                                    <?php endforeach; ?>
                                <?php endif; ?> -->
                            </div>

                            <div class="hidden md:block">
                                <a href="<?php echo get_permalink($all_posts[0]->ID) ?>" class="button inline-block">Read More <i class="fas fa-arrow-right"></i></a>
                            </div>

                            <div class="block md:hidden">
                                <div class="label rounded inline-block"><span class="label-text inline-block leading-none">Read More<i class="fas fa-arrow-right ml-1"></i></span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full md:w-1/4 px-px -my-px">
                    <?php for ($z = 1; $z <= 3; $z++) : ?>
                        <a href="<?php echo get_permalink($all_posts[$z]->ID) ?>" class="blog-item cursor-pointer w-full mb-0 md:py-px flex flex-wrap">
                            <div class="image-box product-box overflow-hidden relative w-full">
                                <div class="image absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat bg-gray-200" style="background-image:url(<?php echo get_the_post_thumbnail_url($all_posts[$z]->ID) ?>)"></div>
                                <div class="main-everything absolute flex flex-col justify-end top-0 left-0 w-full h-full" style="background-color: rgba(0,0,0,0.5)">
                                    <div class="p-4">
                                        <!-- <div class="label label-blue inline-block md:hidden"><span class="label-text"><?php echo get_the_category($all_posts[$z]->ID)[0]->name ?></span></div> -->
                                        <div class="main-title title text-base leading-tight text-white mb-2"><?php echo $all_posts[$z]->post_title ?></div>
                                        <div class="flex flex-wrap mb-2 main-labels">
                                            <!-- <?php
                                                    $tags = get_the_tags($all_posts[$z]->ID);
                                                    ?>
                                            <?php if (!empty($tags)) : ?>
                                                <?php foreach ($tags as $key => $post_tag) : ?>
                                                    <?php if ($key < 3) : ?>
                                                        <div class="main-label label label-blue mr-2" style="transition-delay: <?php echo $key * 100 ?>ms"><span class="label-text"><?php echo $post_tag->name ?></span></div>
                                                    <?php endif; ?>
                                                <?php endforeach; ?>
                                            <?php endif; ?> -->
                                        </div>

                                        <div class="meta text-xs font-bold uppercase tracking-wider text-ovalGreen"><?php echo date('M j', strtotime($all_posts[$z]->post_date)) ?></div>
                                    </div>
                                </div>

                                <div class="absolute top-0 right-0 flex">
                                    <div class="label label-blue"><span class="label-text"><i class="fas fa-map-pin"></i></div>
                                    <div class="label"><span class="label-text"><?php echo get_the_category($all_posts[$z]->ID)[0]->name ?></span></div>
                                </div>
                            </div>
                        </a>
                    <?php endfor; ?>
                </div>
            </div>
        </div>
        <div class="cta max-w-lg">
            <p class="mb-4">Learn more about Repellendus atque animi et aut ut accusantium. Ad neque cupiditate. Voluptates dolorum dolores omnis ipsam. Reprehenderit eius explicabo culpa. Cumque a aut velit et aut assumenda.</p>
            <a href="<?php echo get_permalink(get_page_by_path("all-blogs")->ID) ?>" class="button dark">
                All Blogs
                <i class="fas fa-arrow-circle-right"></i>
            </a>
        </div>
    </div>
</div>
<?php get_template_part('source/blocks/product-grid') ?>
<?php get_footer() ?>