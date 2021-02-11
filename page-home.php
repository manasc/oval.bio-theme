<?php get_header() ?>
<div class="hero-banner mt-5 py-12">
    <div class="container mx-auto">
        <div class="flex flex-wrap justify-center -mx-2">
            <div class="w-full md:w-2/5 px-2 py-20">
                <div class="relative content text-center md:text-left max-w-md mx-auto">
                    <h1 class="text-xl font-light leading-tight mb-3">Breaking preconceived notions of what capitalism and free market economics are in the pursuit of providing extensive, ultra-transparent access to functional life extension technology.</h1>
                    <p class="label-text text-xs mt-4">
                        <span class="text-ovalGreenDark">Oval.bio</span>
                        Mission Statement
                    </p>
                    <!-- <a class="button">All Products</a> -->
                </div>
            </div>
            <div class="w-full md:w-3/5 px-2">
                <div class="w-full rounded-none md:rounded overflow-hidden relative bg-cover bg-center bg-no-repeat flex flex-wrap items-center justify-start h-full bg-white shadow" style="min-height: 300px">
                    <iframe width="100%" height="100%" src="https://miro.com/app/live-embed/o9J_lZgZqQU=/?moveToViewport=-1162,-375,1461,936" frameBorder="0" scrolling="no" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </div>
</div>

<?php
$quickLinks = [
    [
        "name" => "Our Manifesto",
        "image" => get_template_directory_uri() . "/source/images/saturnv.jpg",
        "url" => get_permalink(get_page_by_path("manifesto"))
    ],
    [
        "name" => "Life Extension Pod",
        "image" => get_template_directory_uri() . "/source/images/pod/pod4.jpg",
        "url" => get_permalink(get_page_by_path("pod"))
    ],
]
?>

<div class="mb-10">
    <div class="container">
        <div class="flex -mx-px">
            <?php foreach ($quickLinks as $i => $link) : ?>
                <div class="w-full md:w-1/2 px-px">
                    <a href="<?php echo $link["url"] ?>" class="product-box block cursor-pointer relative">
                        <div class="cover-image" style="background-image:url(<?php echo $link["image"] ?>)"></div>
                        <div class="cover"></div>
                        <div class="absolute content p-5 h-full w-full">
                            <div class="absolute w-full" style="top: 50%; left: 50%; transform: translate(-50%, -50%)">
                                <div class="text-5xl text-center text-white leading-snug"><?php echo $link["name"] ?></div>
                            </div>
                        </div>
                    </a>
                </div>
            <?php endforeach ?>
        </div>
    </div>
</div>

<?php get_template_part('source/blocks/product-grid', null, ["maxItems" => 6]) ?>


<?php
$query_args = [
    'post_type' => ['post'],
    'posts_per_page' => -1
];

$query = new WP_Query($query_args);

$all_posts = $query->posts;
?>

<div class="pb-10">
    <div class="container mx-auto">
        <h1 class="text-4xl mb-8">Blog News</h1>
        <div class="pb-10 relative">
            <div class="label inline-block"><span class="label-text"><i class="fas fa-map-pin mr-1"></i>Featured</span></div>
            <div class="blog-items flex flex-wrap -mx-px">
                <div class="hidden md:block w-full md:w-3/4 px-px">
                    <div class="blog-item relative mb-5 md:mb-0 w-full h-full flex flex-wrap bg-cover bg-center bg-no-repeat" style="background-image:url(<?= get_the_post_thumbnail_url($all_posts[0]->ID) ?>)">
                        <div class="main-everything absolute p-5 md:p-10 top-0 left-0 content h-full w-full flex flex-col items-start justify-end">
                            <h1 class="main-title text-xl md:text-4xl text-white font-light leading-tight mb-3 w-full capitalize pr-20">
                                <?= $all_posts[0]->post_title ?>
                            </h1>
                            <div class="flex flex-wrap mb-2 md:mb-4 main-labels">
                                <!-- <?php
                                        $tags = get_the_tags($all_posts[$z]->ID);
                                        ?>

                                <?php if (!empty($tags)) : ?>
                                    <?php foreach (get_the_tags($all_posts[0]->ID) as $key => $post_tag) : ?>
                                        <?php if ($key < 5) : ?>
                                            <div class="main-label label label-blue mr-2" style="transition-delay: <?= $key * 100 ?>ms"><span class="label-text"><?= $post_tag->name ?></span></div>
                                        <?php endif; ?>
                                    <?php endforeach; ?>
                                <?php endif; ?> -->
                            </div>

                            <div class="hidden md:block">
                                <a href="<?= get_permalink($all_posts[0]->ID) ?>" class="button inline-block">Read More <i class="fas fa-arrow-right"></i></a>
                            </div>

                            <div class="block md:hidden">
                                <div class="label rounded inline-block"><span class="label-text inline-block leading-none">Read More<i class="fas fa-arrow-right ml-1"></i></span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full md:w-1/4 px-px -my-px">
                    <?php for ($z = 1; $z <= 3; $z++) : ?>
                        <a href="<?= get_permalink($all_posts[$z]->ID) ?>" class="blog-item cursor-pointer w-full mb-0 md:py-px flex flex-wrap">
                            <div class="image-box product-box overflow-hidden relative w-full">
                                <div class="image absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat bg-gray-200" style="background-image:url(<?= get_the_post_thumbnail_url($all_posts[$z]->ID) ?>)"></div>
                                <div class="main-everything absolute flex flex-col justify-end top-0 left-0 w-full h-full" style="background-color: rgba(0,0,0,0.5)">
                                    <div class="p-4">
                                        <!-- <div class="label label-blue inline-block md:hidden"><span class="label-text"><?= get_the_category($all_posts[$z]->ID)[0]->name ?></span></div> -->
                                        <div class="main-title title text-base leading-tight text-white mb-2"><?= $all_posts[$z]->post_title ?></div>
                                        <div class="flex flex-wrap mb-2 main-labels">
                                            <!-- <?php
                                                    $tags = get_the_tags($all_posts[$z]->ID);
                                                    ?>
                                            <?php if (!empty($tags)) : ?>
                                                <?php foreach ($tags as $key => $post_tag) : ?>
                                                    <?php if ($key < 3) : ?>
                                                        <div class="main-label label label-blue mr-2" style="transition-delay: <?= $key * 100 ?>ms"><span class="label-text"><?= $post_tag->name ?></span></div>
                                                    <?php endif; ?>
                                                <?php endforeach; ?>
                                            <?php endif; ?> -->
                                        </div>

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
        <div class="pt-10 pb-24 flex items-center justify-center">
            <div class="text-base mr-3">
                Check our full news feed to keep up with the latest <strong class="font-brand">oval.bio</strong> news.
            </div>
            <a href="<?= get_permalink(get_page_by_path("all-blogs")->ID) ?>" class="button mr-2">
                See All Blogs
                <!-- <i class="fas fa-shopping-bag ml-2"></i> -->
            </a>
            <!-- <a href="<?php echo get_permalink(get_page_by_path("pod")) ?>"class="button">
						See the Pod
						<i class="fas fa-caret-right ml-2"></i>
					</a> -->
        </div>
    </div>
</div>

<?php get_footer() ?>