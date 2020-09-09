<section>
    <h1 class="subtitle">Key Benefits</h1>
    <div class="mb-10">
        <div class="labels">
            <div class="label">
                <span class="label-text">Bullets</span>
            </div>
        </div>
        <div class="content-box">
            <!-- <div class="w-1/2 md:w-1/4 p-5">
                    <img class="h-48 w-auto mx-auto" src="<?= $benefit['images']["url"] ?>" />
                    <p class="text-center text-base mt-4"><?= $benefit['title'] ?></p>
                </div> -->
            <div class="flex flex-wrap items-start justify-around my-4">
                <?php foreach ($args["fields"]["benefits"] as $key => $benefit) : ?>
                    <div class="w-1/2 md:w-1/6 px-2">
                        <div class="bg-contain bg-center bg-no-repeat nmr-lazyload mb-4" style="padding-top: 100%" data-bg="<?= $benefit["images"]["title"] ?>)"></div>
                        <h1 class="text-xl text-center font-light"><?= $benefit["title"] ?></h1>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
    <div class="mb-10">
        <?php foreach ($args["fields"]["benefits"] as $key => $benefit) : ?>
            <?php if (!empty($benefit["description"])) : ?>
                <div class="tab-content max-w-md mx-auto">
                    <h1 class="text-2xl font-light"><?= $benefit["title"] ?></h1>
                    <p><?= $benefit["description"] ?></p>
                </div>
            <?php endif; ?>
        <?php endforeach; ?>
        <div class="max-w-md"><?= $args["fields"]["description"] ?></div>
    </div>
</section>