<?php get_header() ?>
<?php $all_posts = get_fake_posts($limit = 19); ?>

<div class="hero-banner">
    <div class="container px-5 mx-auto">
        <div class="flex flex-wrap rounded-md overflow-hidden">
            <div class="w-full md:w-3/4 bg-cover bg-no-repeat bg-center relative bg-gray-200" style="background-image:url(<?php echo get_the_post_thumbnail_url($all_posts[0]->ID) ?>)">
                <div class="bg-black opacity-50 absolute top-0 left-0 h-full w-full"></div>
                <!-- <div class="label hidden md:block absolute top-0 left-0"><span class="label-text leading-none"><?php echo get_the_category($all_posts[0]->ID)[0]->name ?></span></div> -->
                <div class="absolute top-0 right-0 flex">
                    <div class="label label-blue"><span class="label-text"><?php echo get_the_category($all_posts[4]->ID)[0]->name ?></span></div>
                    <div class="label" style="background-color: #ecc94b; border-color: #ecc94b"><span class="label-text"><i class="fas fa-star mr-1"></i>Featured</div>
                </div>
                <div class="main-everything absolute p-10 top-0 left-0 content h-full w-full flex flex-col items-start justify-end">
                    <h1 class="main-title text-4xl text-white font-light leading-tight mb-3 truncate"><?php echo $all_posts[0]->post_title ?></h1>
                    <div class="flex flex-wrap mb-4 main-labels">
                        <?php foreach (get_the_tags($all_posts[0]->ID) as $key => $post_tag) : ?>
                            <?php if ($key < 5) : ?>
                                <div class="main-label label label-blue mr-2" style="transition-delay: <?php echo $key * 100 ?>ms"><span class="label-text"><?php echo $post_tag->name ?></span></div>
                            <?php endif; ?>
                        <?php endforeach; ?>
                    </div>
                    <div>
                        <a class="button inline-block">Read More</a>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/4 bg-gray-200">
                <?php for ($i = 0; $i < 5; $i++) : ?>
                    <div class="p-3 <?php echo ($i == 0) ? 'bg-gray-700 text-white' : 'cursor-pointer hover:bg-gray-300' ?> <?php echo ($i < 4) ? 'border-b' : '' ?> <?php echo ($i > 0) ? '-mt-px' : '' ?>">
                        <div class="flex items-center">
                            <div class="w-1/3">
                                <div class="h-24 w-full bg-gray-400 bg-cover bg-center bg-no-repeat bg-gray-200" style="background-image:url(<?php echo get_the_post_thumbnail_url($all_posts[$i]->ID) ?>)"></div>
                            </div>
                            <div class="w-2/3 pl-4">
                                <h6 class="text-lg mb-2 truncate"><?php echo $all_posts[$i]->post_title ?></h6>
                                <div class="label inline-block"><span class="label-text inline-block leading-none"><?php echo get_the_category($all_posts[$i]->ID)[0]->name ?></span></div>
                                <div class="label label-blue inline-block"><span class="label-text inline-block leading-none">MK</span></div>
                            </div>
                        </div>
                    </div>
                <?php endfor ?>
            </div>
        </div>
    </div>
</div>

<div>
    <div class="container px-5 mx-auto">
        <div class="py-10 relative">
            <div class="label inline-block"><span class="label-text"><i class="fas fa-map-pin mr-1"></i>Pinned</span></div>
            <div class="blog-items flex flex-wrap -mx-1">
                <div class="w-full md:w-3/4 px-1">
                    <div class="blog-item cursor-pointer mb-5 md:mb-0 w-full flex flex-wrap">
                        <div class="image-box product-box overflow-hidden relative w-1/3 md:w-full">
                            <div class="image absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat bg-gray-200" style="background-image:url(<?php echo get_the_post_thumbnail_url($all_posts[4]->ID) ?>)"></div>
                            <div class="absolute top-0 right-0 flex">
                                <div class="label"><span class="label-text"><i class="fas fa-map-pin"></i></div>
                                <div class="label label-blue"><span class="label-text"><?php echo get_the_category($all_posts[4]->ID)[0]->name ?></span></div>
                            </div>
                        </div>
                        <!-- <div class="content w-2/3 md:w-full pl-2 md:pl-0">
                            <div class="label inline-block md:hidden"><span class="label-text"><?php echo get_the_category($all_posts[4]->ID)[0]->name ?></span></div>
                            <div class="title text-lg leading-snug mt-2 mb-3"><?php echo $all_posts[4]->post_title ?></div>
                            <div class="meta text-xs font-bold uppercase tracking-wider text-ovalGreen"><?php echo date('M j', strtotime($all_posts[4]->post_date)) ?></div>
                        </div> -->
                    </div>
                </div>

                <div class="w-full md:w-1/4 px-1">
                    <div class="blog-item cursor-pointer w-full mb-2 flex flex-wrap">
                        <div class="image-box product-box overflow-hidden relative w-1/3 md:w-full">
                            <div class="image absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat bg-gray-200" style="background-image:url(<?php echo get_the_post_thumbnail_url($all_posts[5]->ID) ?>)"></div>
                            <div class="absolute top-0 right-0 flex">
                                <div class="label"><span class="label-text"><i class="fas fa-map-pin"></i></div>
                                <div class="label label-blue"><span class="label-text"><?php echo get_the_category($all_posts[5]->ID)[0]->name ?></span></div>
                            </div>
                        </div>
                        <!-- <div class="content w-2/3 md:w-full pl-2 md:pl-0">
                            <div class="label inline-block md:hidden"><span class="label-text"><?php echo get_the_category($all_posts[5]->ID)[0]->name ?></span></div>
                            <div class="title text-lg leading-snug mt-2 mb-3"><?php echo $all_posts[5]->post_title ?></div>
                            <div class="meta text-xs font-bold uppercase tracking-wider text-ovalGreen"><?php echo date('M j', strtotime($all_posts[5]->post_date)) ?></div>
                        </div> -->
                    </div>
                    <div class="blog-item cursor-pointer w-full mb-2 flex flex-wrap">
                        <div class="image-box product-box overflow-hidden relative w-1/3 md:w-full">
                            <div class="image absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat bg-gray-200" style="background-image:url(<?php echo get_the_post_thumbnail_url($all_posts[6]->ID) ?>)"></div>
                            <div class="absolute top-0 right-0 flex">
                                <div class="label"><span class="label-text"><i class="fas fa-map-pin"></i></div>
                                <div class="label label-blue"><span class="label-text"><?php echo get_the_category($all_posts[6]->ID)[0]->name ?></span></div>
                            </div>
                        </div>
                        <!-- <div class="content w-2/3 md:w-full pl-2 md:pl-0">
                            <div class="label inline-block md:hidden"><span class="label-text"><?php echo get_the_category($all_posts[6]->ID)[0]->name ?></span></div>
                            <div class="title text-lg leading-snug mt-2 mb-3"><?php echo $all_posts[6]->post_title ?></div>
                            <div class="meta text-xs font-bold uppercase tracking-wider text-ovalGreen"><?php echo date('M j', strtotime($all_posts[6]->post_date)) ?></div>
                        </div> -->
                    </div>
                    <div class="blog-item cursor-pointer w-full flex flex-wrap">
                        <div class="image-box product-box overflow-hidden relative w-1/3 md:w-full">
                            <div class="image absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat bg-gray-200" style="background-image:url(<?php echo get_the_post_thumbnail_url($all_posts[7]->ID) ?>)"></div>
                            <div class="absolute top-0 right-0 flex">
                                <div class="label"><span class="label-text"><i class="fas fa-map-pin"></i></div>
                                <div class="label label-blue"><span class="label-text"><?php echo get_the_category($all_posts[7]->ID)[0]->name ?></span></div>
                            </div>
                        </div>
                        <!-- <div class="content w-2/3 md:w-full pl-2 md:pl-0">
                            <div class="label inline-block md:hidden"><span class="label-text"><?php echo get_the_category($all_posts[7]->ID)[0]->name ?></span></div>
                            <div class="title text-lg leading-snug mt-2 mb-3"><?php echo $all_posts[7]->post_title ?></div>
                            <div class="meta text-xs font-bold uppercase tracking-wider text-ovalGreen"><?php echo date('M j', strtotime($all_posts[7]->post_date)) ?></div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php $tags = get_tags(array('hide_empty' => true)) ?>
<?php $cats = get_categories(array('hide_empty' => true)) ?>
<div>
    <div class="container px-5 mx-auto">
        <h1 class="text-3xl">All Aritcles</h1>
        <hr class="mb-10">
        <p class="mb-2">CategoriesF:</p>
        <div class="filters">
            <div class="label clickable inline-block mb-1" data-filter="all"><span class="label-text">All</span></div>
            <?php foreach ($cats as $key => $cat) : ?>
                <div class="label label-blue clickable inline-block mb-1" data-filter=".<?php echo $cat->slug ?>"><span class="label-text"><?php echo $cat->name ?></span></div>
                <?php endforeach; ?>
            </div>
            <p class="my-2">Tags:</p>
        <div class="filters">

            <?php foreach ($tags as $key => $tag) : ?>
                <div class="label clickable inline-block mb-1" data-filter=".<?php echo $tag->slug ?>"><span class="label-text"><?php echo $tag->name ?></span></div>
            <?php endforeach; ?>
            <!-- <div class="label simple clickable inline-block"><span class="label-text">Hello</span></div> -->
        </div>
    </div>
    <div class="container px-5 mx-auto">
        <div class="py-10 w-full relative">
            <div class="blog-items mixer flex flex-wrap -mx-2">
                <?php for ($x = 8; $x < count($all_posts); $x++) : ?>

                    <?php
                    $post_tags = get_the_tags($all_posts[$x]->ID)
                    ?>
                    <div class="blog-item cursor-pointer w-full sm:w-1/2 md:w-1/3 px-2 mb-4 flex flex-wrap <?php echo get_the_category($all_posts[$x]->ID)[0]->slug ?> <?php foreach ($post_tags as $post_tag) : echo $post_tag->slug . ' ';
                                                                                                                                                                        endforeach; ?>">
                        <div class="image-box product-box overflow-hidden relative w-1/3 md:w-full">
                            <div class="image absolute w-full h-full top-0 left-0 bg-gray-200 bg-cover bg-center bg-no-repeat" style="background-image:url(<?php echo get_the_post_thumbnail_url($all_posts[$x]->ID) ?>)"></div>
                            <div class="label label-blue hidden md:block absolute top-0 right-0"><span class="label-text"><?php echo get_the_category($all_posts[$x]->ID)[0]->name ?></span></span></div>
                        </div>
                        <div class="content w-2/3 md:w-full pl-2 md:pl-0">
                            <div class="label label-blue inline-block md:hidden"><span class="label-text"><?php echo get_the_category($all_posts[$x]->ID)[0]->name ?></span></div>
                            <div class="title text-lg leading-snug mt-2 mb-3"><?php echo $all_posts[$x]->post_title ?></div>
                            <div class="meta text-xs font-bold uppercase tracking-wider text-ovalGreen"><?php echo date('M j', strtotime($all_posts[$x]->post_date)) ?></div>
                        </div>
                    </div>
                <?php endfor ?>
            </div>
        </div>
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/mixitup/3.3.1/mixitup.min.js"></script>
<!-- <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script> -->
<script type="text/javascript">
    var mixer = mixitup('.mixer', {
        selectors: {
            target: '.blog-item'
        }
    });
</script>
<style type="text/css">
    .main-labels {
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
    }
</style>
<?php get_footer() ?>