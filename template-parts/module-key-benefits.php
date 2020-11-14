<section>
    <h1 class="subtitle text-center">Key Benefits</h1>

    <!-- information -->
    <div class="mb-10">
        <!-- <div class="labels">
            <div class="label">
                <span class="label-text">Bullets</span>
            </div>
        </div> -->
        <div class="content-box">
            <?php foreach ($args["fields"]["benefits"] as $key => $benefit) : ?>
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-1/2 flex items-center justify-center order-<?= $key % 2 ? 0 : 1 ?>">
                        <div class="content px-10 py-16 w-full">
                            <div class="text-2xl mb-5"><?= $benefit['title'] ?></div>
                            <div class="text-lg mb-5"><?= $benefit['summary'] ?></div>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2 order-<?= $key % 2 ? 1 : 0 ?>">
                        <div class="bg-gray-200 h-64 lg:h-full bg-cover bg-center bg-no-repeat" style="background-image:url(<?= $benefit["images"]["title"] ?>)"></div>
                    </div>
                </div>
            <?php endforeach ?>
        </div>
    </div>

    <!-- description -->
    <div class="meta mt-10 max-w-3xl mx-auto">
        <!-- <div class="text-3xl mb-3">Why do I need to use this?</div> -->
        <?php foreach ($args["fields"]["benefits"] as $key => $benefit) : ?>
            <?php if (!empty($benefit["description"])) : ?>
                <h3 class="text-2xl font-light"><?= $benefit["title"] ?></h3>
                <div class="tab-content text-lg"><?= $benefit["description"] ?></div>
            <?php endif; ?>
        <?php endforeach; ?>
    </div>
    <div class="meta mt-10 max-w-3xl mx-auto">
        <!-- <div class="text-3xl mb-3">Why do I need to use this?</div> -->
        <div class="tab-content text-lg"><?= $args["fields"]["description"] ?></div>
    </div>
</section>