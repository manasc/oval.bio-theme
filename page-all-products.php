<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- compiles minified -->
    <link rel="stylesheet" href="../../dist/app.css?v=<?php echo date('s') ?>">
    <!-- end: compiled minified -->

    <!-- icons -->
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    <title>Oval.Bio</title>
</head>

<body>
    <?php include "../../blocks/_navbar.php";?>
    <section id="vision"></section>
    <!-- <section class="bg-ovalGreen">
        <div class="container mx-auto">
            <div class="px-24 py-48 w-full relative flex flex-wrap justify-center">
                <div class="content max-w-3xl">
                    <h1 class="text-4xl text-gray-800 font-light mb-10 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                    <p class="text-center">
                        <a class="button white">All Products</a>

                    </p>
                </div>
            </div>
        </div>
    </section> -->

    <?php
    	include "../../blocks/_icons.php";
    	include "../../blocks/_product-grid.php";
    ?>

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
    ]?>
    <div class="bg-gray-800 py-24">
        <div class="container mx-auto py-12">
            <div class="max-w-md">
                <div class="text-3xl text-ovalGreen font-light mb-5">Product Phases</div>
                <p class="text-sm text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum velit vitae, earum corporis molestias quidem praesentium quasi tempore tenetur asperiores minima facilis, voluptate esse accusamus veniam quas est ipsum.</p>
            </div>
        </div>
        <?php foreach ($products as $product): ?>
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
        <?php endforeach;?>
    </div>

    <?php
    	include "../../blocks/_footer.php"
    ?>

    <script src="../../dist/app.js?v=<?php echo date('s') ?>"></script>
</body>

</html>