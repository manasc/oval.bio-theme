<?php
$phaseCount = count($args["fields"]["phases"]);
$currentPhase = 0;
?>

<section>
    <h1 class="subtitle">Product Pipeline</h1>

    <!-- Product Pipeline -->
    <div class="labels">
        <div class="label">
            <span class="label-text">Current Standing</span>
        </div>
    </div>
    <div class="content-box-px-none">
        <div class="wrapper flex items-center py-8 relative">
            <?php foreach ($args["fields"]["phases"] as $key => $phase) : ?>
                <div class="phase w-1/<?= $phaseCount ?> border-r border-gray-400">
                    <div class="phase-text h-32 relative">
                        <div class="label leading-none absolute right-0 bottom-0">
                            <span class="label-text"><?= $phase["name"] ?></span>
                        </div>
                    </div>
                </div>

                <?php
                if ($phase["current_phase"]) $currentPhase = $key;
                ?>
            <?php endforeach; ?>

            <!-- phase style -->
            <div class="phase-full border-b border-gray-400 w-full absolute"></div>
            <div class="phase-current bg-ovalGreen h-2 rounded-r-full absolute" style="width:<?= $currentPhase / ($phaseCount) * 100 ?>%"></div>
        </div>
    </div>
    <div class="meta mt-16 max-w-md">
        <div class="label-text mb-3">Why do I need to use this?</div>
        <div class="tab-content"><?= $args["fields"]["pipeline_description"] ?></div>
        <div class="cta mt-5">
            <a href="" class="button">
                Read More
                <i class="button-icon fas fa-arrow-circle-right"></i>
            </a>
        </div>
    </div>
</section>