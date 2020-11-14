<?php
$phases = $args["fields"]["phases"];
$phaseCount = count($phases);
$currentPhase = 0;

// find current phase
?>

<section>
    <h1 class="subtitle text-center">Product Pipeline</h1>

    <!-- Product Pipeline -->
    <div class="labels">
        <div class="label">
            <span class="label-text">Current Standing</span>
        </div>
    </div>
    <div class="content-box-px-none">
        <div class="wrapper flex items-center py-8 relative">
            <?php foreach ($phases as $key => $phase) : ?>
                <div class="phase w-1/<?= $phaseCount ?> border-r border-gray-400">
                    <div class="phase-text h-32 relative">
                        <div data-description="<strong><?php echo $phase["name"] ?></strong><br><?php echo $phase["description"] ?>" class="label leading-none absolute right-0 bottom-0 cursor-pointer">
                            <span class="label-text"><?= $phase["name"] ?></span>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>

            <!-- phase style -->
            <div class="phase-full border-b border-gray-400 w-full absolute"></div>
            <div class="phase-current bg-ovalGreen h-2 rounded-r-full absolute" style="width:<?= $currentPhase / ($phaseCount) * 100 ?>%"></div>
        </div>
    </div>
    <div class="labels my-2">
        <div class="text-xs italic">Click on a phase information</div>
    </div>
    <div class="meta mt-16 max-w-3xl mx-auto">
        <div class="tab-content text-lg"><?= $args["fields"]["pipeline_description"] ?></div>
    </div>
</section>
<script type="text/javascript">
    function loadTippy() {
        var labels = document.querySelectorAll(".phase-text .label");

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