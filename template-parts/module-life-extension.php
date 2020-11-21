<?php
$footer_images = get_fake_images();

$icons = [
    [
        "name" => 'Diagnostics & Data',
        "selected" => false,
        "icon" => get_template_directory_uri() . "/source/images/icons/AntiInflammatory.svg",
    ],
    [
        "name" => 'LifeStyle',
        "selected" => true,
        "icon" => get_template_directory_uri() . "/source/images/icons/PainRelief.svg",
    ],
    [
        "name" => 'Nutrition',
        "selected" => false,
        "icon" => get_template_directory_uri() . "/source/images/icons/NanoBubbles.svg",
    ],
    [
        "name" => 'Recovery',
        "selected" => false,
        "icon" => get_template_directory_uri() . "/source/images/icons/Electrons.svg",
    ],
    [
        "name" => 'Therapies',
        "selected" => true,
        "icon" => get_template_directory_uri() . "/source/images/icons/Electrons.svg",
    ]
];

$iconsCount = count($icons);

?>
<section class="content-box life-extension-box">
    <pre><?php print_r($args["fields"]) ?></pre>
    <div class="mb-10">
        <h1 class="subtitle text-center">5 Pillars of Life Extension</h1>
    </div>
    <div class="mb-10">
        <div class="flex-1 flex flex-wrap">
            <?php foreach ($icons as $key => $icon) : ?>
                <div data-key="<?= $key ?>" class="pillar relative w-1/2 md:w-1/5 px-10 py-5">
                    <div class="rounded-full w-full mx-auto cursor-pointer <?= $icon['selected'] ? "bg-ovalGreen hover:bg-ovalGreenDark" : "bg-gray-300 hover:bg-gray-400" ?> " style="padding-top: 100%;"></div>
                    <p class="text-center text-sm mt-4"><?= $icon['name'] ?></p>
                    <div class="phase-view-icon invisible h-8 w-8 flex items-center justify-center border border-gray-300 bg-white shadow rounded-full absolute right-0 top-0 mr-10 mt-10">
                        <i class="fas fa-eye text-gray-400"></i>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>

    <div class="accordion-box mt-10">
        <div class="accordion">
            <div class="max-w-5xl mx-auto">
                <div class="flex flex-wrap -mx-4">
                    <div class="w-full md:w-1/2 px-4">
                        <?php foreach ($icons as $key => $icon) : ?>
                            <?php if ($key < $iconsCount / 2) : ?>
                                <div data-key="<?= $key ?>" class="pillar-details accordion-item accordion-item-has-icon <?= $key > $currentPhase && "hidden" ?>">
                                    <div class="accordion-item-header">
                                        <div class="accordion-item-question">
                                            <div class="accordion-item-icon">
                                                <i class="fas fa-plus-circle"></i>
                                            </div>
                                            <?= $icon["name"] ?>
                                        </div>
                                    </div>
                                    <div class="accordion-item-content">
                                        <div class="accordion-item-answer">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel facere eveniet nesciunt quaerat consectetur tenetur natus tempore! Earum, iusto assumenda itaque ad, cumque, facilis at ex minima corporis est facere.</div>
                                    </div>
                                </div>
                            <?php endif; ?>
                        <?php endforeach; ?>
                    </div>
                    <div class="w-full md:w-1/2 px-2">
                        <?php foreach ($icons as $key => $icon) : ?>
                            <?php if ($key > $iconsCount / 2) : ?>
                                <div data-key="<?= $key ?>" class="pillar-details accordion-item accordion-item-has-icon <?= $key > $currentPhase && "hidden" ?>">
                                    <div class="accordion-item-header">
                                        <div class="accordion-item-question">
                                            <div class="accordion-item-icon">
                                                <i class="fas fa-plus-circle"></i>
                                            </div>
                                            <?= $icon["name"] ?>
                                        </div>
                                    </div>
                                    <div class="accordion-item-content">
                                        <div class="accordion-item-answer">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel facere eveniet nesciunt quaerat consectetur tenetur natus tempore! Earum, iusto assumenda itaque ad, cumque, facilis at ex minima corporis est facere.</div>
                                    </div>
                                </div>
                            <?php endif; ?>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<script type="text/javascript">
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

        var box = document.querySelector(".life-extension-box");
        var pillars = box.querySelectorAll(".pillar");
        var pillarDetails = box.querySelectorAll(".pillar-details");

        for (var i = 0; i < pillars.length; i++) {

            // pillars interactions
            pillars[i].addEventListener("click", function() {

                var index = this.getAttribute("data-key");
                var viewIcon = pillars[index].querySelector(".phase-view-icon");

                if (pillarDetails[index].classList.contains("active")) {
                    viewIcon.classList.add("invisible");
                    closeItem(pillarDetails[index]);
                } else {
                    viewIcon.classList.remove("invisible");
                    openItem(pillarDetails[index]);
                }
            });

            // pillars interactions
            pillarDetails[i].addEventListener("click", function() {
                var index = this.getAttribute("data-key");
                var viewIcon = pillars[index].querySelector(".phase-view-icon");

                if (pillarDetails[index].classList.contains("active")) {
                    viewIcon.classList.add("invisible");
                } else {
                    viewIcon.classList.remove("invisible");
                }
            });
        }

        // accordion interaction
    });
</script>