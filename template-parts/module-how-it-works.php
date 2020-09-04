<section>
    <div class="subtitle">How it Works</div>
    <div class="flex flex-wrap -mx-5 relative overflow-hidden">
        <?php if (!empty($args["fields"]["image"])) : ?>
            <div class="w-full md:w-1/2 px-5">

                <div class="bg-gray-300 bg-cover bg-center" style="padding-top: 100%; background-image: url(<?= $args["fields"]["image"]["url"] ?>)"></div>
            </div>
        <?php endif; ?>
        <div class="tab-content w-full md:w-1/2 px-5 max-w-md">
            <?= $args["fields"]["description"] ?>
        </div>
    </div>
</section>