<section class="content-box">
    <div class="max-w-lg mx-auto mb-10">
        <h1 class="subtitle text-center mb-2">Key Benefits</h1>
        <p class="text-xl text-center">Check out our quick tid-bits about this product. Click on a Key Benefit to see more details</p>
    </div>
    <!-- information -->
    <div class="max-w-6xl mx-auto mb-10">
        <div class="flex flex-wrap -m-3">
            <?php foreach ($args["fields"]["benefits"] as $key => $benefit) : ?>
                <div class="w-1/3 p-3">
                    <div class="nmr-info-block-trigger content flex relative rounded overflow-hidden w-full bg-gray-200 hover:bg-gray-300 border border-gray-400 shadow cursor-pointer">
                        <div class="flex-1 p-5">
                            <div class="text-2xl mb-2"><?= $benefit['title'] ?></div>
                            <div class="text-base"><?= substr($benefit['summary'], 0, 50) ?>...</div>

                        </div>
                        <div class="w-24 flex-none relative">
                            <div class="absolute top-0 right-0 h-32 w-32 rounded-full overflow-hidden bg-ovalGreen" style="transform: translate(25%, -25%)">
                                <div class="bg-gray-200 h-64 lg:h-full bg-cover bg-center bg-no-repeat" style="background-image:url(<?= $benefit["images"]["title"] ?>)"></div>
                            </div>
                        </div>
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

    <div class="nmr-info-gallery-box overlay invisible opacity-0 fixed top-0 left-0 h-full w-full z-50 flex items-center justify-center">
        <div class="background absolute top-0 left-0 w-full h-full z-0 bg-gray-900 opacity-75"></div>
        <div class="nmr-info-gallery relative z-10 w-full p-5">
            <?php foreach ($args["fields"]["benefits"] as $key => $benefit) : ?>
                <div class="nmr-info-block shadow-xl relative w-full max-w-xl rounded overflow-hidden bg-white p-8 pb-32">
                    <div class="absolute bottom-0 right-0 h-64 w-64 opacity-50" style="transform: translate(-10%, 60%)">
                        <div class="h-64 lg:h-full bg-cover bg-center bg-no-repeat" style="background-image:url(<?= $benefit["images"]["title"] ?>)"></div>
                    </div>
                    <h1 class="text-2xl mb-5"><?= $benefit['title'] ?></h1>
                    <hr class="mb-5">
                    <p><?= $benefit['summary'] ?></p>
                </div>
            <?php endforeach ?>
        </div>
    </div>
</section>