<?php $compArticle = $args["fields"]["articles"]; ?>

<section>
    <div class="subtitle">Competitive Comparison</div>

    <?php if (!empty($compArticle)) :  ?>
        <div class="cover absolute top-0 left-0 w-full h-full z-10 rounded overflow-hidden bg-white-gradient">
            <div class="w-full absolute bottom-0 py-12 px-5">
                <div class="flex flex-wrap items-center justify-center -mx-4">
                    <div class="message px-4">
                        <p>The full article is available on our Blogs.</p>
                    </div>
                    <div class="cta flex-none px-4">
                        <div class="button">
                            Full Article
                            <i class="button-icon fas fa-glasses"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-wrap -mx-2 relative overflow-hidden" style="max-height: 400px;">
            <?php if (has_post_thumbnail($compArticle->ID)) : ?>
                <div class="w-full md:w-1/2 px-2">
                    <div class="bg-gray-500 bg-cover bg-center bg-no-repeat" style="padding-top: 100%; background-image: <?php echo get_the_post_thumbnail_url($compArticle->ID); ?>"></div>
                </div>
            <?php endif; ?>
            <div class="w-full md:w-1/2 px-2">
                <div class="anchor-content">
                    <h1 class="text-3xl mb-5 leading-snug"><?php echo $compArticle->post_title ?></h1>
                    <?php echo $compArticle->post_content ?>
                </div>
            </div>
        </div>
    <?php endif; ?>
</section>