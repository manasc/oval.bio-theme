<section>
    <div class="container mx-auto flex flex-wrap">
        <div class="w-full md:w-1/2 mb-5">
            <div class="text-sm font-mono mb-2">All Styles</div>
            <div class="labels flex flex-wrap -mx-1">
                <a class="button mr-1 capitalize">Button</a>
                <a class="button simple mr-1 capitalize">Button</a>
                <a class="button white mr-1 capitalize">Button</a>
            </div>
        </div>
        <div class="w-full md:w-1/2 mb-5">
            <div class="text-sm font-mono mb-2">Button Choices</div>
            <div class="labels flex flex-wrap -mx-1">
                <?php foreach ($arr as $label) : ?>
                    <a class="button-input mr-1 capitalize"><?= $label ?></a>
                <?php endforeach ?>
            </div>
        </div>
        <div class="w-full mb-5">
            <div class="text-sm font-mono mb-2">Button Choices</div>
            <div class="chooser flex"></div>
        </div>
    </div>
</section>