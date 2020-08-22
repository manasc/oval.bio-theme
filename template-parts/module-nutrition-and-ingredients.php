<!-- Nutrition & Ingredients -->
<?php
$ingredientsArr = [
    [
        "name" => "five-spice powder",
        "image" => "http://lorempixel.com/640/480/technics",
        "description" => "Quae dicta nostrum. Harum molestiae qui. Deleniti odit quia sit illo esse placeat."
    ], [
        "name" => "garlic",
        "image" => "http://lorempixel.com/640/480/animals",
        "description" => "Quae dicta nostrum. Harum molestiae qui. Deleniti odit quia sit illo esse placeat."
    ], [
        "name" => "pico de gallo",
        "image" => "http://lorempixel.com/640/480/technics",
        "description" => "Quae dicta nostrum. Harum molestiae qui. Deleniti odit quia sit illo esse placeat."
    ], [
        "name" => "barley sugar",
        "image" => "http://lorempixel.com/640/480/technics",
        "description" => "Quae dicta nostrum. Harum molestiae qui. Deleniti odit quia sit illo esse placeat."
    ]
];
$ingredientsList = [
    "cocoa powder",
    "pumpkin seeds",
    "peanut butter",
    "sushi",
    "tofu",
    "rice wine",
    "water",
    "squash",
    "ham",
    "bagels",
];
?>
<section>
    <div class="flex flex-wrap -mx-10">
        <div class="px-10 w-full md:w-1/2">
            <h1 class="tab-box-title">Nutrition & Ingredients</h1>
            <div class="text-lg">
                <p class="mb-5">Est quo omnis. Quis tenetur architecto quidem aliquid sed. Ex est enim quos accusantium non doloremque atque ut.</p>
                <p class="mb-5">Impedit eligendi aut debitis. Magni soluta et officia mollitia natus. Porro iste et inventore.</p>
                <p class="mb-5">
                    Dolorem blanditiis adipisci recusandae pariatur ipsam. Vero qui totam placeat id et sunt mollitia est aut. Qui molestiae expedita consequatur excepturi deserunt. Harum quis quia odio rerum sed laboriosam.
                </p>
            </div>
        </div>
        <div class="px-10 w-full md:w-1/2 ">
            <div class="mb-5">
                <div class="labels">
                    <div class="label">
                        <span class="label-text">Main Ingredients</span>
                    </div>
                </div>

                <div class="content-box">
                    <?php foreach ($ingredientsArr as $i => $ingredient) : ?>

                        <div class="ingredient flex flex-wrap -mx-2 mb-4">
                            <div class="number flex-none pl-2">
                                <div class="round-full w-5 h-5 bg-ovalGreen text-xs flex items-center justify-center"><?php echo $i + 1 ?></div>
                            </div>
                            <div class="image-box bg-cover hidden md:block w-1/3 pr-2">
                                <div class="w-full bg-cover bg-center bg-no-repeat" style="padding-top: 100%; background-image: url(<?php echo $ingredient['image'] ?>)"></div>
                            </div>
                            <div class="content flex-1 px-2 py-0 md:py-2 text-sm">
                                <p class="mb-1"><strong><?php echo $ingredient['name'] ?></strong></p>
                                <p class="text-sm"><?php echo $ingredient['description'] ?></p>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
            <div class="mb-5">
                <div class="labels">
                    <div class="label">
                        <span class="label-text">Other Ingredients</span>
                    </div>
                </div>

                <div class="content-box">
                    <?php echo join(", ", $ingredientsList) ?>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="flex flex-wrap">
            <div class="w-full md:w-1/2 flex items-center justify-center">
                <div class="content max-w-lg px-5 py-10">
                    <h1 class="text-2xl mb-2 font-light">Key Benefit 2</h1>
                    <p>Molestiae et perferendis deserunt et voluptatum incidunt omnis. Aliquam velit qui et porro ullam. Eos amet fugit consequatur. Sed sint pariatur quidem rem autem inventore.</p>
                </div>
            </div>
            <div class="w-full md:w-1/2">
                <div class="bg-gray-200" style="padding-top:75%"></div>
            </div>
        </div> -->
</section>