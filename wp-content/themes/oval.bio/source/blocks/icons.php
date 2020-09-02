<?php $icons = [
    [
        "name" => 'Anti-Inflammatory',
        "icon" => get_template_directory_uri() . "/source/images/icons/AntiInflammatory.svg",
    ],
    [
        "name" => 'Pain Relief',
        "icon" => get_template_directory_uri() . "/source/images/icons/PainRelief.svg",
    ],
    [
        "name" => 'Nano Bubbles',
        "icon" => get_template_directory_uri() . "/source/images/icons/NanoBubbles.svg",
    ],
    [
        "name" => 'Electrons',
        "icon" => get_template_directory_uri() . "/source/images/icons/Electrons.svg",
    ]
];
?>
<section class="py-10 md:py-10 my-0 md:my-20 icons border-t md:border-none">
    <div class="max-w-6xl mx-auto p-5">
        <div class="flex flex-wrap items-center">
            <div class="relative content w-full md:w-1/3 mr-10 mb-10 md:mb-0">
                <h1 class="text-2xl font-light mb-5 leading-tight">Buy now and invest in your future.</h1>
                <p class="mb-8 text-base text-slateBlue">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus a amet volutpat vel.</p>
                <a class="button">Read More</a>
            </div>
            <div class="flex-1 flex flex-wrap -mx-5">
                <?php foreach ($icons as $icon) : ?>
                    <div class="w-1/2 md:w-1/4 p-5">
                        <img class="h-32 w-auto mx-auto" src="<?= $icon['icon'] ?>" />
                        <p class="text-center text-sm mt-4"><?= $icon['name'] ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>