<!-- Nutrition & components -->
<?php
$componentsArr;
$componentsList = [];

// filter array
$componentsArr = array_values(array_filter($args['fields']['components'], function ($component) {
    return !empty($component["image"]) && !empty($component["description"]);
}));
$arrCount = count($componentsArr) - 1;

$componentsList = array_values(array_filter($args['fields']['components'], function ($component) {
    return empty($component["image"]) || empty($component["description"]);
}));
$listCount = count($componentsArr) - 1;

?>
<section>
    <div class="flex flex-wrap -mx-10">
        <div class="px-10 w-full md:w-1/2">
            <h1 class="tab-box-title">Components</h1>
            <div class="text-lg">
                <?php echo $args["fields"]["components_introduction"] ?>
            </div>
        </div>
        <div class="px-10 w-full md:w-1/2 ">
            <div class="mb-5">
                <div class="labels">
                    <div class="label">
                        <span class="label-text">Main components</span>
                    </div>
                </div>

                <div class="content-box">
                    <?php foreach ($componentsArr as $i => $component) : ?>

                        <div class="ingredient flex flex-wrap -mx-2 mb-4">
                            <div class="number flex-none pl-2">
                                <div class="round-full w-5 h-5 bg-ovalGreen text-xs flex items-center justify-center"><?php echo $i + 1 ?></div>
                            </div>
                            <div class="image-box bg-cover hidden md:block w-1/3 pr-2">
                                <div class="w-full bg-cover bg-center bg-no-repeat" style="padding-top: 100%; background-image: url(<?php echo $component["image"]["url"] ?>)"></div>
                            </div>
                            <div class="content flex-1 px-2 py-0 md:py-2 text-sm">
                                <p class="mb-1"><strong><?php echo $component['component'] ?></strong></p>
                                <p class="text-sm"><?php echo $component['description'] ?></p>
                            </div>
                        </div>

                    <?php endforeach; ?>
                </div>
            </div>
            <div class="mb-5">
                <div class="labels">
                    <div class="label">
                        <span class="label-text">Other components</span>
                    </div>
                </div>

                <div class="content-box">
                    <?php foreach ($componentsList as $key => $component) : ?>
                        <span>
                            <?php echo $component["component"] . ", " ?>
                        </span>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</section>