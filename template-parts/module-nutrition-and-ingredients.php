<!-- Nutrition & Ingredients -->
<?php
$ingredientsArr;
$ingredientsList = [];

// filter array
$ingredientsArr = !empty($args['fields']['ingredients']) ? array_values(array_filter($args['fields']['ingredients'], function ($ingredient) {
    return !empty($ingredient["image"]) && !empty($ingredient["description"]);
})) : false;
$arrCount = count($ingredientsArr) - 1;
$ingredientsList = !empty($args['fields']['ingredients']) ? array_values(array_filter($args['fields']['ingredients'], function ($ingredient) {
    return empty($ingredient["image"]) || empty($ingredient["description"]);
})) : false;
$listCount = count($ingredientsArr) - 1;

?>
<section>
    <div class="flex flex-wrap -mx-10">
        <div class="px-10 w-full md:w-1/2">
            <h1 class="subtitle">Nutrition & Ingredients</h1>
            <div class="anchor-content text-lg">
                <?= $args["fields"]["nutrition_explanation"] ?>
            </div>
        </div>
        <div class="px-10 w-full md:w-1/2 ">

            <?php if (!empty($ingredientsArr)) : ?>
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
                                    <div class="round-full w-5 h-5 bg-ovalGreen text-xs flex items-center justify-center"><?= $i + 1 ?></div>
                                </div>
                                <div class="image-box bg-cover hidden md:block w-1/3 pr-2">
                                    <div class="w-full bg-cover bg-center bg-no-repeat" style="padding-top: 100%; background-image: url(<?= $ingredient["image"]["url"] ?>)"></div>
                                </div>
                                <div class="content flex-1 px-2 py-0 md:py-2 text-sm">
                                    <p class="mb-1"><strong><?= $ingredient['ingredient'] ?></strong></p>
                                    <p class="text-sm"><?= $ingredient['description'] ?></p>
                                </div>
                            </div>

                        <?php endforeach; ?>
                    </div>
                </div>
            <?php endif; ?>
            <?php if (!empty($ingredientsList)) : ?>
                <div class="mb-5">
                    <div class="labels">
                        <div class="label">
                            <span class="label-text">Other Ingredients</span>
                        </div>
                    </div>

                    <div class="content-box">
                        <?php foreach ($ingredientsList as $key => $ingredient) : ?>
                            <span>
                                <?= $ingredient["ingredient"] . ", " ?>
                            </span>
                        <?php endforeach; ?>
                    </div>
                </div>
            <?php endif; ?>
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