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
<section class="content-box">
    <div class="max-w-3xl mx-auto">
        <h1 class="subtitle text-center">Components</h1>
        <div class="anchor-content text-lg">
            <?= $args["fields"]["components_introduction"] ?>
        </div>
        <?php if (!empty($componentsArr)) : ?>
            <div class="my-10">

                <div class="labels">
                    <div class="label">
                        <span class="label-text">Main components</span>
                    </div>
                </div>

                <div class="content-box-secondary">
                    <?php foreach ($componentsArr as $i => $component) : ?>

                        <div class="ingredient flex flex-wrap -mx-2 mb-4">
                            <div class="number flex-none pl-2">
                                <div class="round-full w-5 h-5 bg-ovalGreen text-xs flex items-center justify-center"><?= $i + 1 ?></div>
                            </div>
                            <div class="image-box bg-cover hidden md:block w-1/3 pr-2">
                                <div class="w-full bg-cover bg-center bg-no-repeat" style="padding-top: 100%; background-image: url(<?= $component["image"]["url"] ?>)"></div>
                            </div>
                            <div class="content flex-1 px-2 py-0 md:py-2 text-sm">
                                <p class="mb-1"><strong><?= $component['component'] ?></strong></p>
                                <p class="text-sm"><?= $component['description'] ?></p>
                            </div>
                        </div>

                    <?php endforeach; ?>
                </div>
            </div>
        <?php endif; ?>
        <?php if (!empty($componentsList)) : ?>
            <div class="mb-5">
                <div class="labels">
                    <div class="label">
                        <span class="label-text">Other components</span>
                    </div>
                </div>

                <div class="content-box-secondary">
                    <?php foreach ($componentsList as $key => $component) : ?>
                        <span class="general-component-label" data-description="<?php echo $component['description'] ?>">
                            <?php echo !($key === count($componentsList) - 1) ? $component["component"] . ", " : $component["component"] ?>
                        </span>
                    <?php endforeach; ?>
                </div>
            </div>
        <?php endif; ?>
    </div>
</section>

<script type="text/javascript">
    function loadTippy() {
        var labels = document.querySelectorAll(".general-component-label");

        for (var i = 0; i < labels.length; i++) {
            tippy(labels[i], {
                content: labels[i].getAttribute("data-description"),
                trigger: "click",
                theme: "tomato",
                placement: 'bottom'
            })
        }
    }

    document.addEventListener("DOMContentLoaded", loadTippy);
</script>