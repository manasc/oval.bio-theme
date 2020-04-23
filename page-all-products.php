<?php get_header(); ?>
<section id="vision"></section>
<?php get_template_part('source/blocks/_icons', NULL) ?>
<?php get_template_part('source/blocks/_product-grid', NULL) ?>

<div id="tabs"></div>
<?php $products = [
    [
        "name" => "LunaPatch",
        "phase" => 1,
    ],
    [
        "name" => "HelioPatch",
        "phase" => 4,
    ],
    [
        "name" => "Hydrogen Water",
        "phase" => 2,
    ],
    [
        "name" => "Noomino",
        "phase" => 3,
    ],
    [
        "name" => "Balding Grey",
        "phase" => 1,
    ],
    [
        "name" => "Bactose",
        "phase" => 5,
    ],
] ?>
<div class="bg-gray-800 py-24">
    <div class="container mx-auto py-12">
        <div class="max-w-md">
            <div class="text-3xl text-ovalGreen font-light mb-5">Product Phases</div>
            <p class="text-sm text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum velit vitae, earum corporis molestias quidem praesentium quasi tempore tenetur asperiores minima facilis, voluptate esse accusamus veniam quas est ipsum.</p>
        </div>
    </div>
    <?php foreach ($products as $product) : ?>
        <div class="container py-10 bg-gray-800 mx-auto">
            <div class="wrapper flex items-center -mx-10">
                <div class="product w-3/12 px-10">
                    <h2 class="text-2xl leading-none text-ovalGreen text-white"><?php echo $product["name"] ?></h2>
                    <div class="label plain"><span class="label-text" style="color: white;">Pain Relief</span></div>
                </div>
                <div class="product-timeline flex-1">
                    <div class="relative flex items-center">
                        <div class="phase w-1/5 border-l border-gray-600">
                            <div class="phase-text px-2 pt-12">
                                <div class="label plain leading-none"><span class="label-text" style="color: rgba(255,255,255, 0.25);">Research</span></div>
                            </div>
                        </div>
                        <div class="phase w-1/5 border-l border-gray-600">
                            <div class="phase-text px-2 pt-12">
                                <div class="label plain leading-none"><span class="label-text" style="color: rgba(255,255,255, 0.25);">Phase 1</span></div>
                            </div>
                        </div>
                        <div class="phase w-1/5 border-l border-gray-600">
                            <div class="phase-text px-2 pt-12">
                                <div class="label plain leading-none"><span class="label-text" style="color: rgba(255,255,255, 0.25);">Phase 2</span></div>
                            </div>
                        </div>
                        <div class="phase w-1/5 border-l border-gray-600">
                            <div class="phase-text px-2 pt-12">
                                <div class="label plain leading-none"><span class="label-text" style="color: rgba(255,255,255, 0.25);">Phase 3</span></div>
                            </div>
                        </div>
                        <div class="phase w-1/5 border-l border-gray-600">
                            <div class="phase-text px-2 pt-12">
                                <div class="label plain leading-none"><span class="label-text" style="color: rgba(255,255,255, 0.25);">Phase 4</span></div>
                            </div>
                        </div>

                        <!-- phase style -->
                        <div class="phase-full border-b border-gray-600 w-full absolute"></div>
                        <div class="phase-current bg-ovalGreen h-2 rounded-r-full w-<?php echo $product['phase'] ?>/5 absolute"></div>
                    </div>
                </div>
            </div>
        </div>
    <?php endforeach; ?>
</div>
<?php get_footer() ?>