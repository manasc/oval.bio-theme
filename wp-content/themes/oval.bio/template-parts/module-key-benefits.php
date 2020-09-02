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
            <?php foreach ($args["fields"]["benefits"] as $key => $benefit) : ?>
                <div class="flex flex-wrap -mx-5 items-center my-4">
                    <div class="w-full md:w-1/2 px-5 <?= $key % 2 ? "order-1" : "order-2" ?>">
                        <div class="<?= $benefit["images"]["subtype"] == "svg+xml" ? "bg-contain" : "bg-cover" ?> bg-center bg-no-repeat" style="padding-top: 60%; background-image: url(<?= $benefit["images"]["title"] ?>)"></div>
                    </div>
                    <div class="w-full md:w-1/2 px-5 <?= $key % 2 ? "order-2" : "order-1" ?>">
                        <div class="tab-content max-w-md mx-auto">
                            <h1 class="text-2xl font-light"><?= $benefit["title"] ?></h1>
                            <p><?= $benefit["description"] ?></p>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
    <div class="mb-10">
        <div class="max-w-md"><?= $args["fields"]["description"] ?></div>
    </div>
</section>