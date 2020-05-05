<?php get_header(); ?>
<div class="container mx-auto">
    <section id="vision"></section>
</div>
<?php get_template_part('source/blocks/icons', NULL) ?>
<?php get_template_part('source/blocks/product-grid', NULL) ?>

<div id="tabs"></div>
<?php $products = [
    [
        "name" => "LunaPatch",
        "type" => "Women's Period Relief",
        "phase" => 1,
    ],
    [
        "name" => "HelioPatch",
        "type" => "Pain Releif",
        "phase" => 4,
    ],
    [
        "name" => "Hydrogen Water",
        "type" => "Nutrients",
        "phase" => 2,
    ],
    [
        "name" => "Noomino",
        "type" => "Nootropic",
        "phase" => 3,
    ],
    [
        "name" => "Balding Grey",
        "type" => "Hair Restoration",
        "phase" => 1,
    ],
    [
        "name" => "Bactose",
        "type" => "Probiotic",
        "phase" => 5,
    ],
] ?>
<div class="bg-gray-700 px-5 py-10">
    <div class="container mx-auto py-12">
        <div class="max-w-md">
            <div class="text-4xl text-ovalGreen font-light mb-5">Product Phases</div>
            <p class="text-sm text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum velit vitae, earum corporis molestias quidem praesentium quasi tempore tenetur asperiores minima facilis, voluptate esse accusamus veniam quas est ipsum.</p>
        </div>
    </div>
    <?php foreach ($products as $i => $product) : ?>
        <div class="container py-10 mx-auto md:border border-gray-600 md:-mb-px overflow-hidden md:px-5">
            <div class="wrapper flex flex-wrap items-center -mx-10">
                <div class="product flex items-center mb-5 md:mb-0 w-full md:w-3/12 px-10">
                    <div class="flex-none pr-5">
                        <div class="h-12 w-12 bg-white rounded-full"></div>
                    </div>
                    <div class="flex-1">
                        <h2 class="text-2xl leading-none text-ovalGreen text-white mr-3"><?php echo $product["name"] ?></h2>
                        <div class="label plain"><span class="label-text text-2xs" style="color: white;"><?php echo $product["type"] ?></span></div>
                    </div>
                </div>
                <div class="product-timeline px-5 flex-1">
                    <div class="relative flex items-center">
                        <div class="phase w-1/5 md:border-l border-gray-600">
                            <div class="phase-text px-3 md:px-2 pt-12">
                                <div class="label plain leading-none"><span class="label-text text-2xs" style="color: rgba(255,255,255, <?php echo (1 <= $product['phase']) ? '1' : '0.25' ?>);">R<span class="hidden md:inline">esearch</span></span></div>
                            </div>
                        </div>
                        <div class="phase w-1/5 border-l border-gray-600">
                            <div class="phase-text px-3 md:px-2 pt-12">
                                <div class="label plain leading-none"><span class="label-text text-2xs" style="color: rgba(255,255,255, <?php echo (2 <= $product['phase']) ? '1' : '0.25' ?>);">P<span class="hidden md:inline">hase </span>1</span></div>
                            </div>
                        </div>
                        <div class="phase w-1/5 border-l border-gray-600">
                            <div class="phase-text px-3 md:px-2 pt-12">
                                <div class="label plain leading-none"><span class="label-text text-2xs" style="color: rgba(255,255,255, <?php echo (3 <= $product['phase']) ? '1' : '0.25' ?>);">P<span class="hidden md:inline">hase </span>2</span></div>
                            </div>
                        </div>
                        <div class="phase w-1/5 border-l border-gray-600">
                            <div class="phase-text px-3 md:px-2 pt-12">
                                <div class="label plain leading-none"><span class="label-text text-2xs" style="color: rgba(255,255,255, <?php echo (4 <= $product['phase']) ? '1' : '0.25' ?>);">P<span class="hidden md:inline">hase </span>3</span></div>
                            </div>
                        </div>
                        <div class="phase w-1/5 border-l border-gray-600">
                            <div class="phase-text px-3 md:px-2 pt-12">
                                <div class="label plain leading-none"><span class="label-text text-2xs" style="color: rgba(255,255,255, <?php echo (5 <= $product['phase']) ? '1' : '0.25' ?>);">P<span class="hidden md:inline">hase </span>4</span></div>
                            </div>
                        </div>

                        <!-- phase style -->
                        <div class="phase-full border-b border-gray-600 w-full absolute"></div>
                        <div class="phase-current bg-slateBlue h-2 absolute" style="width: <?php echo $product['phase'] * 20 ?>%"></div>
                    </div>
                </div>
            </div>
        </div>
    <?php endforeach; ?>
</div>
<?php get_footer() ?>