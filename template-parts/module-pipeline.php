<?php
$phases = $args["fields"]["phases"];
$phaseCount = count($phases);
$currentPhase = 0;

// find current phase
foreach ($phases as $key => $phase) {
    if ($phase["current_phase"]) {
        $currentPhase = $key;
    }
}
?>

<section class="content-box phase-box">
    <h1 class="subtitle text-center">Product Pipeline</h1>
    <div class="wrapper flex items-center py-8 relative">
        <?php foreach ($phases as $key => $phase) : ?>
            <?php
            $labelClass = "";
            if ($key < $currentPhase) {
                $labelClass = "label opacity-50 hover:opacity-100";
            } elseif ($key === $currentPhase) {
                $labelClass = "label";
            } else {
                $labelClass = "label label-disabled opacity-75 hover:opacity-100";
            }
            ?>
            <div class="phase w-1/<?= $phaseCount ?> border-r border-gray-400">
                <div data-key="<?= $key ?>" class="phase-text h-32 relative">
                    <div class="<?= $labelClass ?> leading-none absolute right-0 bottom-0 cursor-pointer">
                        <div class="phase-view-icon invisible absolute left-0 pr-3 opacity-25" style="top: 50%; transform: translate(-100%, -50%)"><i class="fas fa-eye"></i></div>
                        <span class="label-text"><?= $phase["name"] ?></span>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>

        <!-- phase style -->
        <div class="phase-full border-b border-gray-400 w-full absolute"></div>
        <div class="phase-current bg-ovalGreen h-2 rounded-r-full absolute" style="width:<?= ($currentPhase + 1) / ($phaseCount) * 100 ?>%"></div>
    </div>
    <div class="labels my-2">
        <div class="text-xs italic">Click on a phase to see details.</div>
    </div>
    <div class="meta mt-16 max-w-3xl mx-auto">
        <!-- <div class="tab-content text-lg"><?= $args["fields"]["pipeline_description"] ?></div> -->
        <div class="accordion-box">
            <div class="accordion">
                <?php foreach ($phases as $key => $phase) : ?>
                    <div data-key="<?= $key ?>" class="phase-details accordion-item accordion-item-has-icon <?= $key > $currentPhase && "hidden" ?>">
                        <div class="accordion-item-header">
                            <div class="accordion-item-question">
                                <div class="accordion-item-icon">
                                    <i class="fas fa-plus-circle"></i>
                                </div>
                                <?= $phase["name"] ?>
                            </div>
                        </div>
                        <div class="accordion-item-content">
                            <div class="accordion-item-answer"><?= $phase["description"] ?></div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>
<script type="text/javascript">
    function loadTippy() {
        var labels = document.querySelectorAll("[data-description]");

        for (var x = 0; x < labels.length; x++) {
            tippy(labels[x], {
                content: labels[x].getAttribute("data-description"),
                trigger: "click",
                theme: "tomato",
                placement: 'bottom'
            })
        }
    }

    function openItem(item) {
        const desc = item.querySelector(".accordion-item-content");
        const answer = item.querySelector(".accordion-item-answer");

        item.classList.add("active");
        desc.style.maxHeight = answer.scrollHeight + "px";
    }

    function closeItem(item) {
        const desc = item.querySelector(".accordion-item-content");

        item.classList.remove("active");
        desc.style.maxHeight = null;
    }

    document.addEventListener("DOMContentLoaded", function() {
        loadTippy()

        var phaseBox = document.querySelectorAll(".phase-box");


        phaseBox.forEach((box) => {
            // get phases

            // phase interaction
            var phases = box.querySelectorAll(".phase-text");
            var phaseDetails = box.querySelectorAll(".phase-details");

            for (var i = 0; i < phases.length; i++) {

                // phases interactions
                phases[i].addEventListener("click", function() {

                    var index = this.getAttribute("data-key");
                    var viewIcon = phases[index].querySelector(".phase-view-icon");

                    if (phaseDetails[index].classList.contains("active")) {
                        viewIcon.classList.add("invisible");
                        closeItem(phaseDetails[index]);
                    } else {
                        viewIcon.classList.remove("invisible");
                        openItem(phaseDetails[index]);
                    }
                });

                // phases interactions
                phaseDetails[i].addEventListener("click", function() {
                    var index = this.getAttribute("data-key");
                    var viewIcon = phases[index].querySelector(".phase-view-icon");

                    if (phaseDetails[index].classList.contains("active")) {
                        viewIcon.classList.add("invisible");
                    } else {
                        viewIcon.classList.remove("invisible");
                    }
                });
            }
        });

        // accordion interaction
    });
</script>