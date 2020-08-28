<section>
    <div class="subtitle">Quality Control</div>
    <div class="flex flex-wrap -mx-5 relative overflow-hidden">
        <?php if (!empty($args["fields"]["image"])) : ?>
            <div class="w-full md:w-1/2 px-5">
                <div class="bg-gray-300 bg-cover bg-center" style="padding-top: 100%; background-image: url(<?php echo $args["fields"]["image"]["url"] ?>)"></div>
            </div>
            <div class="anchor-content w-full md:w-1/2 px-5">
                <?php echo $args["fields"]["description"] ?>
            </div>
        <?php else : ?>
            <div class="anchor-content columned w-full">
                <?php echo $args["fields"]["description"] ?>
            </div>
        <?php endif; ?>
    </div>
</section>