<section>
    <h1 class="subtitle">Research & Development</h1>

    <div class="labels">
        <div class="label">
            <span class="label-text">Articles</span>
        </div>
    </div>
    <div class="content-box">
        <div class="blog-items flex flex-wrap items-start -mx-2">

            <?php foreach ($args["fields"]["articles"] as $key => $article) : ?>


                <a href="<?php echo get_permalink($article->ID) ?>" class="blog-item block cursor-pointer mb-5 md:mb-0 w-full md:w-1/4 px-2 flex flex-wrap items-center">
                    <div class="image-box product-box overflow-hidden relative w-1/3 md:w-full">
                        <div class="image absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat" style="background-image:url(<?php echo get_the_post_thumbnail_url($article->ID) ?>)"></div>
                        <div class="label hidden md:block absolute top-0 right-0"><span class="label-text">Excercise</span></div>
                    </div>
                    <div class="content w-2/3 md:w-full pl-2 md:pl-0">
                        <div class="label inline-block md:hidden"><span class="label-text">Excercise</span></div>
                        <div class="title text-lg leading-snug mt-2 mb-3 pr-1"><?php echo $article->post_title ?></div>
                        <div class="meta text-xs font-bold uppercase tracking-wider text-ovalGreen"><?php echo get_the_date("M j", $article->ID) ?></div>
                    </div>
                </a>

            <?php endforeach; ?>
        </div>
    </div>
    <div class="meta py-10 max-w-md">
        <div class="label-text mb-3">Why do I need to use this?</div>
        <p>Ipsum ad consequatur hic fugit sed consequuntur debitis et non. Ut assumenda vero rerum dolor. Distinctio sint et pariatur consequatur. Dolor itaque doloremque ipsam beatae eos cumque.</p>
        <div class="cta mt-5">
            <a href="" class="button">
                Read More
                <i class="button-icon fas fa-arrow-circle-right"></i>
            </a>
        </div>
    </div>
</section>