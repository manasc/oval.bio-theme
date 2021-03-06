<?php
$therapeutics = [
    "current" => [
        "title" => "Current",
        "items" => [
            [
                "title" => "Red Light",
                "description" => "Cupiditate mollitia eum est ut explicabo necessitatibus. Possimus qui et porro nulla. Beatae ut magnam et labore et exercitationem incidunt alias. Veniam impedit facilis qui consequatur rerum quidem deserunt. Consequatur vero quos ipsam.",
                "marker" => [36, 82],
                "link" => [
                    "text" => "",
                    "url" => ""
                ]
            ],
            [
                "title" => "Total System Oxygen",
                "description" => "Cupiditate mollitia eum est ut explicabo necessitatibus. Possimus qui et porro nulla. Beatae ut magnam et labore et exercitationem incidunt alias. Veniam impedit facilis qui consequatur rerum quidem deserunt. Consequatur vero quos ipsam.",
                "marker" => [31, 71],
                "link" => [
                    "text" => "",
                    "url" => ""
                ]
            ],
            [
                "title" => "Hydrogen Therapy",
                "description" => "Cupiditate mollitia eum est ut explicabo necessitatibus. Possimus qui et porro nulla. Beatae ut magnam et labore et exercitationem incidunt alias. Veniam impedit facilis qui consequatur rerum quidem deserunt. Consequatur vero quos ipsam.",
                "marker" => [41, 84],
                "link" => [
                    "text" => "",
                    "url" => ""
                ]
            ],
            [
                "title" => "Electron Therapy",
                "description" => "Cupiditate mollitia eum est ut explicabo necessitatibus. Possimus qui et porro nulla. Beatae ut magnam et labore et exercitationem incidunt alias. Veniam impedit facilis qui consequatur rerum quidem deserunt. Consequatur vero quos ipsam.",
                "marker" => [38, 6],
                "link" => [
                    "text" => "",
                    "url" => ""
                ]
            ],

        ]
    ],
    "upcoming" => [
        "title" => "Upcoming",
        "items" => [
            [
                "title" => "Hydrogen Therapy",
                "description" => "Cupiditate mollitia eum est ut explicabo necessitatibus. Possimus qui et porro nulla. Beatae ut magnam et labore et exercitationem incidunt alias. Veniam impedit facilis qui consequatur rerum quidem deserunt. Consequatur vero quos ipsam.",
                "marker" => [78, 30],
                "link" => [
                    "text" => "",
                    "url" => ""
                ]
            ],
            [
                "title" => "Electron Donation",
                "description" => "Cupiditate mollitia eum est ut explicabo necessitatibus. Possimus qui et porro nulla. Beatae ut magnam et labore et exercitationem incidunt alias. Veniam impedit facilis qui consequatur rerum quidem deserunt. Consequatur vero quos ipsam.",
                "marker" => [42, 15],
                "link" => [
                    "text" => "",
                    "url" => ""
                ]
            ],
        ]
    ]
];
?>

<section class="flex relative w-screen h-screen">
    <div class="px-10 py-16 w-1/4">
        <div class="mb-5">
            <h1 class="text-3xl">Therapeutics</h1>
        </div>
        <div class="accordion accordion-small h-full">

            <?php foreach ($therapeutics as $key => $therapeuticsStuff) : ?>

                <div class="mb-5">

                    <div class="label-text text-xs text-gray-600 mb-2">
                        <?php echo $therapeuticsStuff["title"] ?> <a href="#"><i class="ml-1 fas fa-question-circle"></i></a>
                    </div>

                    <div class="w-full">
                        <?php foreach ($therapeuticsStuff["items"] as $key => $therapeutic) : ?>
                            <div class="accordion-item cursor-pointer w-full">
                                <div class="accordion-item-header">
                                    <h6 class="font-medium"><?php echo $therapeutic["title"] ?></h6>
                                </div>
                                <div class="accordion-item-content">
                                    <div class="accordion-item-answer">
                                        <p><?php echo $therapeutic["description"] ?></p>
                                        <a class="mt-4 inline-block text-ovalGreenDark label-text text-xs" href="">Read More <i class="ml-1 fas fa-caret-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>

                </div>

            <?php endforeach; ?>

        </div>
    </div>
    <div class="w-3/4">
        <div class="bg-gray-400 relative w-full h-full">
            <div class="annotations">
                <div class="annotations-label">
                    <div class="annotations-label-text">Pod Render</div>
                </div>
                <div class="annotations-image nmr-lazyload" data-bg="<?php echo get_template_directory_uri() ?>/source/images/test/example.png"></div>
                <?php foreach ($therapeutics['current']['items'] as $key => $therapeutic) : ?>
                    <div class="annotation-box" style="left:<?php echo $therapeutic['marker'][0] ?>%; top:<?php echo $therapeutic['marker'][1] ?>%;">
                        <div class="annotation-marker"></div>
                        <div class="annotation-content-box">
                            <div class="annotation-content">
                                <div class="annotation-text"><?php echo $therapeutic["title"] ?></div>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
                <?php foreach ($therapeutics['upcoming']['items'] as $key => $therapeutic) : ?>
                    <div class="annotation-box" style="left:<?php echo $therapeutic['marker'][0] ?>%; top:<?php echo $therapeutic['marker'][1] ?>%;">
                        <div class="annotation-marker"></div>
                        <div class="annotation-content-box">
                            <div class="annotation-content">
                                <div class="annotation-text"><?php echo $therapeutic["title"] ?></div>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>