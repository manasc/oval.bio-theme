<?php
$phases = [
    [
        "current" => true,
        "name" => "Research",
        "description" => ""
    ],
    [
        "current" => true,
        "name" => "Phase 1",
        "description" => ""
    ],
    [
        "current" => true,
        "name" => "Phase 2",
        "description" => ""
    ],
    [
        "current" => true,
        "name" => "Phase 3",
        "description" => ""
    ],
    [
        "current" => false,
        "name" => "Phase 4",
        "description" => ""
    ]
]
?>

<section>
    <h1 class="tab-box-title">Product Pipeline</h1>

    <!-- Product Pipeline -->
    <div class="labels">
        <div class="label">
            <span class="label-text">Current Standing</span>
        </div>
    </div>
    <div class="content-box-px-none">
        <div class="wrapper flex items-center py-8 relative">
            <?php foreach ($phases as $key => $phase) : ?>
                <div class="phase w-1/5 border-r">
                    <div class="phase-text h-32 relative">
                        <div class="label leading-none absolute right-0 bottom-0">
                            <span class="label-text"><?php echo $phase["name"] ?></span>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>

            <!-- phase style -->
            <div class="phase-full border-b w-full absolute"></div>
            <div class="phase-current bg-ovalGreen h-2 rounded-r-full w-2/5 absolute"></div>
        </div>
    </div>
    <div class="meta mt-16 max-w-md">
        <div class="label-text mb-3">Why do I need to use this?</div>
        <p>Ipsum ad consequatur hic fugit sed consequuntur debitis et non. Ut assumenda vero rerum dolor. Distinctio sint et pariatur consequatur. Dolor itaque doloremque ipsam beatae eos cumque.</p>
        <div class="cta mt-5">
            <a href="" class="button">
                Read More
                <i class="button-icon fas fa-arrow-circle-right"></i>
            </a>
        </div>
    </div>
</section>