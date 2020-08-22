<!-- **General -->
<?php
$productTabBoxes = [
    "general" => [
        "title" => "General Information",
        "active" => true,
        "modules" => [
            [
                "active" => true,
                "title" => "Key Benefits",
                "module" => "key-benefits"
            ],
            [
                "active" => true,
                "title" => "Nutrition & Ingredients",
                "module" => "nutrition-and-ingredients"
            ],
            [
                "active" => true,
                "title" => "Components",
                "module" => "components"
            ],
            [
                "active" => true,
                "title" => "FAQ",
                "module" => "faq"
            ],
        ],
    ],
    "product-state" => [
        "title" => "Product Information",
        "active" => true,
        "modules" => [
            [
                "active" => true,
                "title" => "Pipeline (Phases)",
                "module" => "pipeline"
            ],
            [
                "active" => true,
                "title" => "Research & Development",
                "module" => "research-and-development"
            ],
            [
                "active" => true,
                "title" => "Tests & Experiments",
                "module" => "tests-and-experiments"
            ],
            [
                "active" => true,
                "title" => "Clinical Trials",
                "module" => "clinical-trials"
            ],
        ],
    ],
    "user-info" => [
        "title" => "User Information",
        "active" => true,
        "modules" => [
            [
                "active" => true,
                "title" => "How it Works",
                "module" => "how-it-works"
            ],
            [
                "active" => true,
                "title" => "Life Extension",
                "module" => "life-extension"
            ],
            [
                "active" => true,
                "title" => "Directions For Use",
                "module" => "directions-for-use"
            ],
            [
                "active" => true,
                "title" => "Instructables",
                "module" => "instructables"
            ],
            [
                "active" => true,
                "title" => "Side Effects",
                "module" => "side-effects"
            ],
        ],
    ],
    "business-info" => [
        "title" => "Business Information",
        "active" => true,
        "modules" => [
            [
                "active" => true,
                "title" => "Cost of Goods",
                "module" => "cost-of-goods"
            ],
            [
                "active" => true,
                "title" => "Quality Control",
                "module" => "quality-control"
            ],
            [
                "active" => true,
                "title" => "Manufacturing Challenges",
                "module" => "manufacturing-challenges"
            ],
            [
                "active" => true,
                "title" => "Competitive Comparison",
                "module" => "competitive-comparison"
            ],
        ],
    ],
    "upcoming-info" => [
        "title" => "Upcoming Info",
        "active" => true,
        "modules" => [
            [
                "active" => true,
                "title" => "Future of Product",
                "module" => "future-of-product"
            ],
            [
                "active" => true,
                "title" => "Important Dates",
                "module" => "important-dates"
            ],
            [
                "active" => true,
                "title" => "Opportunities",
                "module" => "opportunities"
            ],
        ],
    ],
];
?>


<?php foreach ($productTabBoxes as $key => $tabBox) : ?>
    <?php if ($tabBox['active']) : ?>
        <div class="tabs-section">
            <div class="container tabs-section-container">

                <?php
                // filter tabs
                $modules = array_filter($tabBox["modules"], function ($tab) {
                    return $tab["active"];
                });

                // re-index tabs
                $modArr = array_values($modules);
                ?>

                <div class="tabs">
                    <?php foreach ($modArr as $i => $tab) : ?>
                        <?php if ($tab["active"]) : ?>
                            <div key="<?php echo $i ?>" class="tab <?php echo $i === 0 ? "active" : "dead" ?>">
                                <?php echo $tab["title"] ?>
                            </div>
                        <?php endif; ?>
                    <?php endforeach; ?>
                </div>
                <div class="tabs-box">
                    <?php foreach ($modArr as $i => $tab) : ?>
                        <?php if ($tab["active"]) : ?>
                            <div key="<?php echo $i ?>" class="tabs-box-content <?php echo $i === 0 ? "active" : "dead" ?>">
                                <?php get_template_part("template-parts/module", $tab["module"]); ?>
                            </div>
                        <?php endif; ?>
                    <?php endforeach; ?>
                </div>
                <div class="tabs-meta">
                    <div class="tabs-section-title"><?php echo $tabBox['title'] ?></div>
                </div>
            </div>
        </div>
    <?php endif; ?>
<?php endforeach; ?>