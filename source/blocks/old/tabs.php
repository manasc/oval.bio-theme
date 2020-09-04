<section>
    <div class="container mx-auto flex flex-wrap">
        <?php $products = [
            [
                "name" => "LunaPatch",
                "selected" => false
            ],
            [
                "name" => "HelioPatch",
                "selected" => true
            ],
            [
                "name" => "Hydrogen Water",
                "selected" => false
            ],
            [
                "name" => "Noomino",
                "selected" => false
            ],
            [
                "name" => "Balding Grey",
                "selected" => false
            ],
            [
                "name" => "Bactose",
                "selected" => false
            ]
        ] ?>
        <div class="flex flex-wrap justify-start w-full">
            <?php foreach ($products as $product) : ?>
                <?php if ($product["selected"] == false) : ?>
                    <div class="cursor-pointer bg-gray-800 hover:bg-gray-700 w-1/6 text-center py-3 leading-none">
                        <span class="text-white text-xs lg:text-sm font-bold uppercase tracking-wider"><?= $product["name"] ?></span>
                    </div>
                <?php else : ?>
                    <div class="bg-ovalGreen w-1/6 text-center py-3 leading-none">
                        <span class="text-gray-800 text-xs lg:text-sm font-bold uppercase tracking-wider"><?= $product["name"] ?></span>
                    </div>
                <?php endif ?>
            <?php endforeach ?>
        </div>
    </div>
</section>