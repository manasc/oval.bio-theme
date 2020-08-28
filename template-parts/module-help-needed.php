<section>
    <div class="subtitle">Help Needed</div>
    <div class="flex flex-wrap -mx-3">
        <?php foreach ($args["fields"]["technologies"] as $i => $need) : ?>
            <div class="w-full md:1/2 lg:w-1/3 px-3">
                <div class="labels">
                    <div class="label">Opp <?php echo $i + 1 ?></div>
                </div>
                <div class="content-box">
                    <h3 class="font-light text-lg mb-3"><?php echo $need["title"] ?></h3>
                    <hr class="divider mb-3">
                    <div class="tab-content"><?php echo $need["description"] ?></div>
                    <div class="buttons">
                        <a href="<?php echo $need["url"] ?>" class="button">
                            Apply
                            <i class="button-icon fas fa-arrow-circle-right"></i>
                        </a>
                    </div>
                </div>
            </div>

        <?php endforeach; ?>
    </div>
</section>