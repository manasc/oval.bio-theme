<?php get_header() ?>
<div class="hero-banner p-0 md:p-5">
    <div class="px-24 py-48 w-full rounded-none md:rounded-md overflow-hidden relative bg-cover bg-center bg-no-repeat flex flex-wrap items-center justify-start" style="background-image:url(<?php echo get_fake_images()[21]->urls->full ?>)">
        <div class="bg-black opacity-50 absolute top-0 left-0 h-full w-full"></div>
        <div class="relative content max-w-sm">
            <h1 class="text-4xl text-white font-light leading-tight mb-3">Demystifying the World of Nootropics</h1>
            <p class="mb-8 text-lg text-white">What are these ‘smart drugs’ and can they really improve your mental performance?</p>
            <a class="button">All Products</a>
        </div>
    </div>
</div>

<?php $all_posts = get_fake_posts(); ?>

<div class="py-10">
    <div class="container mx-auto px-5 md:px-0">
        <h1 class="font-bold text-3xl md:text-4xl text-center">All Articles</h1>
        <div id="blog-filters" class="flex flex-wrap justify-center mb-10">
            <div class="label clickable text-2xs block mb-1 mr-1 small"><span class="label-text">#photography</span></div>
            <div class="label clickable simple text-2xs block mb-1 mr-1 small"><span class="label-text">#travel</span></div>
            <div class="label clickable simple text-2xs block mb-1 mr-1 small"><span class="label-text">#winter</span></div>
        </div>
        <div class="mx-0 md:-mx-1 grid">
            <?php foreach ($all_posts as $key => $post) : ?>
                <?php if ($key < 1) : ?>
                    <div class="grid-item grid-width-1 w-full md:w-2/3 lg:w-1/2 px-2 mb-8 bg-white">
                        <div class="overflow-hidden">
                            <img class="rounded w-full" src="<?php echo get_fake_images()[rand(1, 24)]->urls->small ?>" alt="Sunset in the mountains">
                            <div class="px-1 py-2">
                                <div class="text-2xs uppercase font-bold mb-1 leadning-none text-ovalGreen"><?php echo $post->date ?></div>
                                <div class="text-xl mb-2 capitalize"><?php echo $post->title ?></div>
                                <!-- <p class="text-gray-700 text-sm leading-snug">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p> -->
                                <div class="flex flex-wrap">
                                    <?php foreach (explode(' ', $post->tags) as $tag) : ?>
                                        <div class="label text-2xs block mb-2 small" style="margin: 0 1px 1px 0"><span class="label-text">#<?php echo $tag ?></span></div>
                                    <?php endforeach ?>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php else : ?>
                    <div class="grid-item grid-width-2 w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-8 bg-white">
                        <div class="overflow-hidden">
                            <img class="rounded w-full" src="<?php echo get_fake_images()[rand(1, 24)]->urls->small ?>" alt="Sunset in the mountains">
                            <div class="px-1 py-2">
                                <div class="text-2xs uppercase font-bold mb-1 leadning-none text-ovalGreen"><?php echo $post->date ?></div>
                                <div class="text-xl mb-2 capitalize"><?php echo $post->title ?></div>
                                <!-- <p class="text-gray-700 text-sm leading-snug">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p> -->
                                <div class="flex flex-wrap">
                                    <?php foreach (explode(' ', $post->tags) as $tag) : ?>
                                        <div class="label text-2xs block mb-2 small" style="margin: 0 1px 1px 0"><span class="label-text">#<?php echo $tag ?></span></div>
                                    <?php endforeach ?>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php endif ?>
            <?php endforeach ?>
        </div>
    </div>
</div>

<div class="py-10">
    <div class="container mx-auto flex justify-center">
        <label class="">
            <div class="button-input">Previous</div>
        </label>
        <label class="active">
            <div class="button-input">1</div>
        </label>
        <label class="">
            <div class="button-input">2</div>
        </label>
        <label class="">
            <div class="button-input">3</div>
        </label>
        <label class="">
            <div class="button-input">Next</div>
        </label>
    </div>
</div>
<?php get_footer() ?>