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

<section>
    <h1 class="text-3xl mb-8 font-light">Key Benefits</h1>
    <div class="mb-10">
        <div class="labels">
            <div class="label">
                <span class="label-text">Bullets</span>
            </div>
        </div>
        <div class="content-box">
            <div class="flex-1 flex flex-wrap -mx-5">
                <?php foreach ($icons as $icon) : ?>
                    <div class="w-1/2 md:w-1/4 p-5">
                        <img class="h-48 w-auto mx-auto" src="<?php echo $icon['icon'] ?>" />
                        <p class="text-center text-base mt-4"><?php echo $icon['name'] ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
    <div class="mb-10">
        <div class="labels">
            <div class="label">
                <span class="label-text">Step-by-step</span>
            </div>
        </div>
        <div class="content-box">
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/2">
                    <div class="bg-gray-200" style="padding-top:75%"></div>
                </div>
                <div class="w-full md:w-1/2 flex items-center justify-center">
                    <div class="content max-w-lg px-5 py-10">
                        <h1 class="text-2xl mb-2 font-light">Key Benefit 1</h1>
                        <p>Dolor cum iusto rem rerum dicta deserunt excepturi harum. Ipsam natus perferendis. Dolor deserunt dolor voluptatem doloribus saepe natus vitae reprehenderit nihil.</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/2 flex items-center justify-center">
                    <div class="content max-w-lg px-5 py-10">
                        <h1 class="text-2xl mb-2 font-light">Key Benefit 2</h1>
                        <p>Molestiae et perferendis deserunt et voluptatum incidunt omnis. Aliquam velit qui et porro ullam. Eos amet fugit consequatur. Sed sint pariatur quidem rem autem inventore.</p>
                    </div>
                </div>
                <div class="w-full md:w-1/2">
                    <div class="bg-gray-200" style="padding-top:75%"></div>
                </div>
            </div>
        </div>
    </div>
</section>