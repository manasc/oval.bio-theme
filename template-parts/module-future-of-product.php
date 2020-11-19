<section>
    <div class="mb-10">
        <h1 class="subtitle text-center">Product Future</h1>
    </div>
    <div class="">
        <div class="labels">
            <div class="label">
                <span class="label-text">Articles</span>
            </div>
        </div>
        <div class="content-box">
            <div class="blog-items flex flex-wrap items-start -mx-2">
                <?php foreach ($args["fields"]["articles"] as $key => $article) : ?>


                    <a href="<?= get_permalink($article->ID) ?>" class="blog-item block cursor-pointer mb-5 md:mb-0 w-full md:w-1/3 px-2 flex flex-wrap items-center">
                        <div class="image-box product-box overflow-hidden relative w-1/3 md:w-full">
                            <div class="image absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat" style="background-image:url(<?= get_the_post_thumbnail_url($article->ID) ?>)"></div>
                            <div class="label hidden md:block absolute top-0 right-0"><span class="label-text">Excercise</span></div>
                        </div>
                        <div class="content w-2/3 md:w-full pl-2 md:pl-0">
                            <div class="label inline-block md:hidden"><span class="label-text">Excercise</span></div>
                            <div class="title text-lg leading-snug mt-2 mb-3 pr-1"><?= $article->post_title ?></div>
                            <div class="meta text-xs font-bold uppercase tracking-wider text-ovalGreen"><?= get_the_date("M j", $article->ID) ?></div>
                        </div>
                    </a>

                    <?php if ($key === 2) {
                        break;
                    } ?>

                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>