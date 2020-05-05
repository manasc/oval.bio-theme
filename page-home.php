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
<?php get_template_part('source/blocks/product-grid') ?>
<?php get_footer() ?>