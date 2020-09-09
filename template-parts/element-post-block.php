<a href="<?php the_permalink() ?>" class="cursor-pointer block">
    <div class="hidden md:block image-box product-box overflow-hidden relative w-full">
        <div class="image absolute w-full h-full top-0 left-0 bg-gray-200 bg-cover bg-center bg-no-repeat nmr-lazyload" data-bg="<?php the_post_thumbnail_url(null, "shop_single") ?>"></div>

        <div class="main-everything absolute flex flex-col justify-end top-0 left-0 w-full h-full" style="background-color: rgba(0,0,0,0.5)">
            <div class="p-5">
                <div class="main-title title text-lg leading-tight text-white mb-2 capitalize"><?php the_title() ?></div>
                <div class="meta text-xs font-bold uppercase tracking-wider text-ovalGreen"><?php the_date() ?></div>
            </div>

        </div>
        <div class="label hidden md:block absolute top-0 right-0"><span class="label-text"><?= get_the_category()[0]->name ?></span></span></div>
    </div>
    <div class="block md:hidden p-3 cursor-pointer hover:bg-gray-300 w-full">
        <div class="flex items-center">
            <div class="w-1/3">
                <div class="h-24 w-full bg-gray-400 bg-cover bg-center bg-no-repeat bg-gray-200 nmr-lazyload" data-bg="<?= get_the_post_thumbnail_url(null, "shop_single") ?>"></div>
            </div>
            <div class="w-2/3 pl-4">
                <h6 class="text-lg mb-2 leading-tight"><?php the_title() ?></h6>
                <div class="label inline-block"><span class="label-text inline-block leading-none"><?= get_the_category()[0]->name ?></span></div>
                <div class="label label-blue inline-block"><span class="label-text inline-block leading-none"><?= get_the_date('M j') ?></span></div>
            </div>
        </div>
    </div>
</a>