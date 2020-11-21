<section class="content-box">
    <div class="subtitle text-center">Help Needed</div>
    <div class="flex flex-wrap -mx-3">
        <?php if (!empty($args["fields"]["technologies"])) : ?>
            <?php foreach ($args["fields"]["technologies"] as $i => $need) : ?>
                <div class="w-full md:w-1/2 px-3 mb-6">
                    <!-- <div class="labels">
                        <div class="label">Opp <?= $i + 1 ?></div>
                    </div> -->
                    <div class="content-box-secondary h-full flex flex-col">
                        <h3 class="font-light text-xl mb-3"><?= $need["title"] ?></h3>
                        <hr class="divider mb-3">
                        <div class="tab-content flex-1"><?= $need["description"] ?></div>
                        <div class="buttons">
                            <a href="<?= $need["url"] ?>" class="button">
                                Apply
                                <i class="button-icon fas fa-arrow-circle-right"></i>
                            </a>
                        </div>
                    </div>
                </div>

            <?php endforeach; ?>
        <?php endif; ?>
    </div>
</section>