<?php get_header() ?>
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
        <div class="py-10 relative">
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
    </div>
</div>

<?php $tags = get_tags(array('hide_empty' => true)) ?>
<?php $cats = get_categories(array('hide_empty' => true)) ?>
<div class="pb-10">
    <div class="container px-2 mx-auto relative">
        <h1 class="text-3xl">All Articles</h1>
        <hr class="mb-10">
        <p class="mb-2">Categories:</p>
        <div class="filters">
            <div class="filter filter-cat" data-filter="all">All</div>
            <?php foreach ($cats as $key => $cat) : ?>
                <div class="filter filter-cat" data-filter=".<?php echo $cat->slug ?>"><?php echo $cat->name ?></div>
            <?php endforeach; ?>
            <div id="openTags" class="filter filter-tag">Filters <i class="filter-icon fas fa-caret-down"></i></div>
            <div id="tagsBox" class="flex">
                <div class="left-border w-2 bg-ovalGreen"></div>
                <div class="filters bg-gray-100 py-4 px-5">
                    <?php foreach ($tags as $key => $tag) : ?>
                        <div class="filter filter-tag <?php echo $key > 20 ? "dead" : "" ?>" data-filter=".<?php echo $tag->slug ?>"><?php echo $tag->name ?></div>
                    <?php endforeach; ?>
                    <!-- <div class="label simple clickable inline-block"><span class="label-text">Hello</span></div> -->
                    <a class="filter active showMoreFilters alive">Show More <i class="filter-icon fas fa-plus-circle"></i></a>
                </div>
            </div>
        </div>
    </div>
    <div class="container px-2 mx-auto">
        <div class="py-5 w-full relative">
            <div class="blog-items mixer flex flex-wrap -mx-px">
                <?php for ($x = 0; $x < count($all_posts); $x++) : ?>

                    <?php
                    $post_tags = get_the_tags($all_posts[$x]->ID)
                    ?>
                    <a href="<?php echo get_permalink($all_posts[$x]->ID) ?>" class="blog-item block cursor-pointer w-full sm:w-1/2 md:w-1/3 px-px py-0 md:py-px flex flex-wrap <?php echo get_the_category($all_posts[$x]->ID)[0]->slug ?> <?php foreach ($post_tags as $post_tag) : echo $post_tag->slug . ' ';
                                                                                                                                                                                                                                            endforeach; ?>">
                        <div class="hidden md:block image-box product-box overflow-hidden relative w-full">
                            <div class="image absolute w-full h-full top-0 left-0 bg-gray-200 bg-cover bg-center bg-no-repeat" style="background-image:url(<?php echo get_the_post_thumbnail_url($all_posts[$x]->ID) ?>)"></div>

                            <div class="main-everything absolute flex flex-col justify-end top-0 left-0 w-full h-full" style="background-color: rgba(0,0,0,0.5)">
                                <div class="p-5">
                                    <!-- <div class="label label-blue inline-block md:hidden"><span class="label-text"><?php echo get_the_category($all_posts[$x]->ID)[0]->name ?></span></div> -->
                                    <div class="main-title title text-lg leading-tight text-white mb-2 capitalize"><?php echo $all_posts[$x]->post_title ?></div>
                                    <div class="flex flex-wrap main-labels">
                                        <!-- <?php if (!empty($post_tags)) : ?>
                                            <?php foreach ($post_tags as $key => $post_tag) : ?>
                                                <?php if ($key < 3) : ?>
                                                    <div class="main-label label label-blue mr-2" style="transition-delay: <?php echo $key * 100 ?>ms"><span class="label-text"><?php echo $post_tag->name ?></span></div>
                                                <?php endif; ?>
                                            <?php endforeach; ?>
                                        <?php endif; ?> -->
                                    </div>
                                    <div class="meta text-xs font-bold uppercase tracking-wider text-ovalGreen"><?php echo date('M j', strtotime($all_posts[$x]->post_date)) ?></div>
                                </div>

                            </div>
                            <div class="label hidden md:block absolute top-0 right-0"><span class="label-text"><?php echo get_the_category($all_posts[$x]->ID)[0]->name ?></span></span></div>
                        </div>
                        <div class="block md:hidden p-3 cursor-pointer hover:bg-gray-300 w-full">
                            <div class="flex items-center">
                                <div class="w-1/3">
                                    <div class="h-24 w-full bg-gray-400 bg-cover bg-center bg-no-repeat bg-gray-200" style="background-image:url(<?php echo get_the_post_thumbnail_url($all_posts[$x]->ID) ?>)"></div>
                                </div>
                                <div class="w-2/3 pl-4">
                                    <h6 class="text-lg mb-2 leading-tight"><?php echo $all_posts[$x]->post_title ?></h6>
                                    <div class="label inline-block"><span class="label-text inline-block leading-none"><?php echo get_the_category($all_posts[$x]->ID)[0]->name ?></span></div>
                                    <div class="label label-blue inline-block"><span class="label-text inline-block leading-none"><?php echo date('M j', strtotime($all_posts[$x]->post_date)) ?></span></div>
                                </div>
                            </div>
                        </div>
                    </a>
                <?php endfor ?>
            </div>
        </div>
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/mixitup/3.3.1/mixitup.min.js"></script>

<script type="text/javascript">
    var mixer = mixitup('.mixer', {
        selectors: {
            target: '.blog-item'
        }
    });
</script>

<style type="text/css">
    /* .main-labels {
        overflow: hidden;
    }

    .main-title {
        transform: translateY(100%)
    }

    .main-title,
    .main-labels {
        transition-duration: 300ms;
    }

    .main-labels .main-label {
        transition-duration: 300ms;
        transform: translateY(200%)
    }

    .main-title {}

    .main-everything:hover .main-label {
        transform: translateY(0);
    }

    .main-everything:hover .main-title {
        transform: translateY(0);
    } */
</style>
<?php get_footer() ?>