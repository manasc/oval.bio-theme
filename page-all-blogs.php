<?php get_header() ?>
<?php

$all_blogs = new WP_Query([
    'post_type' => ['post'],
    'posts_per_page' => -1
]);

$all_posts = $all_blogs->posts;

?>

<div>
    <div class="container mx-auto">
        <div class="py-10 relative">
            <div class="label inline-block"><span class="label-text"><i class="fas fa-map-pin mr-1"></i>Featured</span></div>
            <div class="blog-items flex flex-wrap -mx-px">
                <div class="hidden md:block w-full md:w-3/4 px-px">
                    <div onclick="goToLink()" class="blog-item cursor-pointer relative mb-5 md:mb-0 w-full h-full flex flex-wrap bg-cover bg-center bg-no-repeat nmr-lazyload" data-bg="<?= get_the_post_thumbnail_url($all_posts[0]->ID, "large") ?>">
                        <div class="main-everything absolute p-5 md:p-10 top-0 left-0 content h-full w-full flex flex-col items-start justify-end">
                            <h1 class="main-title text-xl md:text-4xl text-white font-light leading-tight mb-3 w-full capitalize pr-20">
                                <?= $all_posts[0]->post_title ?>
                            </h1>

                            <div class="hidden md:block">
                                <a href="<?= get_permalink($all_posts[0]->ID) ?>" class="button inline-block">Read More <i class="fas fa-arrow-right"></i></a>
                            </div>

                            <div class="block md:hidden">
                                <div class="label rounded inline-block"><span class="label-text inline-block leading-none">Read More<i class="fas fa-arrow-right ml-1"></i></span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <script>
                    function goToLink() {
                        location.href = '<?php echo get_permalink($all_posts[0]->ID) ?>'
                    }
                </script>

                <div class="w-full md:w-1/4 px-px -my-px">
                    <?php for ($z = 1; $z <= 3; $z++) : ?>
                        <a href="<?= get_permalink($all_posts[$z]->ID) ?>" class="blog-item cursor-pointer w-full mb-0 md:py-px flex flex-wrap">
                            <div class="image-box product-box overflow-hidden relative w-full">
                                <div class="image absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat bg-gray-200 nmr-lazyload" data-bg="<?= get_the_post_thumbnail_url($all_posts[$z]->ID, "shop_single") ?>"></div>
                                <div class="main-everything absolute flex flex-col justify-end top-0 left-0 w-full h-full" style="background-color: rgba(0,0,0,0.5)">
                                    <div class="p-4">
                                        <div class="main-title title text-base leading-tight text-white mb-2"><?= $all_posts[$z]->post_title ?></div>
                                        <div class="meta text-xs font-bold uppercase tracking-wider text-ovalGreen"><?= date('M j', strtotime($all_posts[$z]->post_date)) ?></div>
                                    </div>
                                </div>

                                <div class="absolute top-0 right-0 flex">
                                    <div class="label label-blue"><span class="label-text"><i class="fas fa-map-pin"></i></div>
                                    <div class="label"><span class="label-text"><?= get_the_category($all_posts[$z]->ID)[0]->name ?></span></div>
                                </div>
                            </div>
                        </a>
                    <?php endfor; ?>
                </div>
            </div>
        </div>
    </div>
</div>

<?php $tags = get_tags(array('hide_empty' => true)) ?>
<?php $cats = get_categories(array('hide_empty' => true)) ?>
<div class="pb-10">
    <div class="container mx-auto relative">
        <h1 class="text-3xl">All Articles</h1>
        <hr class="mb-10">
        <!-- <p class="mb-2">Categories:</p> -->
        <div class="filter-box">
            <div class="filters">
                <div class="filter filter-cat" data-filter="*">All</div>
                <?php foreach ($cats as $key => $cat) : ?>
                    <div class="filter filter-cat" data-filter=".<?= $cat->slug ?>"><?= $cat->name ?></div>
                <?php endforeach; ?>
                <div id="openTags">Filters <i class="filter-icon fas fa-caret-down"></i></div>
                <div id="tagsBox" class="flex">
                    <div class="left-border w-2 bg-ovalGreen"></div>
                    <div class="flex flex-wrap bg-gray-100 py-4 px-5">
                        <?php foreach ($tags as $key => $tag) : ?>
                            <div class="filter filter-tag <?= $key > 20 ? "dead" : "" ?>" data-filter=".<?= $tag->slug ?>"><?= $tag->name ?></div>
                        <?php endforeach; ?>
                        <!-- <div class="label simple clickable inline-block"><span class="label-text">Hello</span></div> -->
                        <a class="filter active showMoreFilters alive">Show More <i class="filter-icon fas fa-plus-circle"></i></a>
                    </div>
                </div>
            </div>
            <div class="filter-grid">
                <?php if ($all_blogs->have_posts()) : ?>
                    <?php while ($all_blogs->have_posts()) : $all_blogs->the_post(); ?>

                        <?php
                        $post_cats = get_the_category();
                        $post_tags = get_the_tags();

                        $cats_list = "";
                        $tags_list = "";

                        if (!empty($post_cats)) {
                            foreach ($post_cats as $cat) {
                                $cats_list .= "$cat->slug ";
                            }
                        }

                        if (!empty($post_tags)) {
                            foreach ($post_tags as $tag) {
                                $tags_list .= "$tag->slug ";
                            }
                        }

                        ?>
                        <div class="filter-grid-item filter-grid-regular <?= "$cats_list $tags_list" ?>">
                            <?php get_template_part("template-parts/element", "post-block") ?>
                        </div>
                    <?php endwhile; ?>
                <?php endif; ?>

            </div>
        </div>
    </div>
</div>
<?php get_footer() ?>