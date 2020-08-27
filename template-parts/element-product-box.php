<a href="<?php the_permalink() ?>" class="product-box block cursor-pointer relative">
    <?php if (has_post_thumbnail()) : ?>
        <div class="cover-image" style="background-image:url(<?php the_post_thumbnail_url() ?>)"></div>
    <?php else : ?>
        <div class="cover-image" style="background-image:url(<?php echo get_fake_images()[0]->urls->thumb; ?>)"></div>
    <?php endif; ?>
    <div class="cover"></div>
    <div class="absolute content p-5 h-full w-full">
        <div class="title absolute">
            <div class="text-3xl md:text-3xl lg:text-4xl font-light text-white leading-snug"><?php the_title(); ?></div>
            <div class="meta text-xs lg:text-sm"><?php echo !empty($category) ? $category : get_the_terms(get_the_ID(), 'product_cat')[0]->name ?></div>
        </div>
        <!-- <?php if ($product->catalog_visibility !== "visible") : ?>
            <div class="coming-soon absolute top-0 right-0 label">
                <span class="coming-soon-text label-text">Coming Soon</span>
            </div>
        <?php endif ?> -->
    </div>
</a>