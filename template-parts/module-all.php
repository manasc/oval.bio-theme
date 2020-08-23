<!-- **General -->
<?php
$productTabBoxes = [
    "general" => [
        "title" => "General Information",
        "active" => true,
        "modules" => [
            [
                "active" => in_array("key_benefits", $args["fields"]["sections_needed"]),
                "slug" => "key_benefits",
                "title" => "Key Benefits",
                "module" => "key-benefits"
            ],
            [
                "active" => in_array("nutrition_ingredients", $args["fields"]["sections_needed"]),
                "slug" => "nutrition_ingredients",
                "title" => "Nutrition & Ingredients",
                "module" => "nutrition-and-ingredients"
            ],
            [
                "active" => in_array("components", $args["fields"]["sections_needed"]),
                "slug" => "components",
                "title" => "Components",
                "module" => "components"
            ],
            [
                "active" => in_array("faq", $args["fields"]["sections_needed"]),
                "slug" => "faq",
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
                "active" => in_array("pipeline", $args["fields"]["sections_needed"]),
                "slug" => "pipeline",
                "title" => "Pipeline (Phases)",
                "module" => "pipeline"
            ],
            [
                "active" => in_array("research_and_development", $args["fields"]["sections_needed"]),
                "slug" => "research_and_development",
                "title" => "Research & Development",
                "module" => "research-and-development"
            ],
            [
                "active" => in_array("testing", $args["fields"]["sections_needed"]),
                "slug" => "experiments",
                "title" => "Tests & Experiments",
                "module" => "tests-and-experiments"
            ],
            [
                "active" => in_array("clinical_trials", $args["fields"]["sections_needed"]),
                "slug" => "clinical_trials",
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
                "active" => in_array("how_it_works", $args["fields"]["sections_needed"]),
                "slug" => "how_it_works",
                "title" => "How it Works",
                "module" => "how-it-works"
            ],
            [
                "active" => in_array("product_future", $args["fields"]["sections_needed"]),
                "slug" => "future_of_product",
                "title" => "Future of Product",
                "module" => "future-of-product"
            ],
            [
                "active" => in_array("directions_for_use", $args["fields"]["sections_needed"]),
                "slug" => "directions_for_use",
                "title" => "Directions For Use",
                "module" => "directions-for-use"
            ],
            [
                "active" => in_array("instructable", $args["fields"]["sections_needed"]),
                "slug" => "instructable",
                "title" => "Instructables",
                "module" => "instructables"
            ],
            [
                "active" => in_array("side_effects", $args["fields"]["sections_needed"]),
                "slug" => "side_effects",
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
                "active" => in_array("cost_of_goods", $args["fields"]["sections_needed"]),
                "slug" => "cost_of_goods",
                "title" => "Cost of Goods",
                "module" => "cost-of-goods"
            ],
            [
                "active" => in_array("quality_control", $args["fields"]["sections_needed"]),
                "slug" => "quality_control",
                "title" => "Quality Control",
                "module" => "quality-control"
            ],
            [
                "active" => in_array("manufacturing_challenges", $args["fields"]["sections_needed"]),
                "slug" => "manufacturing_challenges",
                "title" => "Manufacturing Challenges",
                "module" => "manufacturing-challenges"
            ],
            [
                "active" => in_array("competitors", $args["fields"]["sections_needed"]),
                "slug" => "competitors",
                "title" => "Competitive Comparison",
                "module" => "competitive-comparison"
            ],
            [
                "active" => in_array("help_needed", $args["fields"]["sections_needed"]),
                "slug" => "help_needed",
                "title" => "Help Needed",
                "module" => "help-needed"
            ],
        ],
    ],
    "upcoming-info" => [
        "title" => "Upcoming Info",
        "active" => true,
        "modules" => [
            [
                "active" => in_array("important_dates", $args["fields"]["sections_needed"]),
                "slug" => "important_dates",
                "title" => "Important Dates",
                "module" => "important-dates"
            ],
            [
                "active" => in_array("opportunities", $args["fields"]["sections_needed"]),
                "slug" => "opportunities",
                "title" => "Opportunities",
                "module" => "opportunities"
            ],
        ],
    ],
];
?>

<!-- <pre><?php print_r($args["fields"]["sections_needed"]) ?></pre> -->

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
                                <?php get_template_part("template-parts/module", $tab["module"], [
                                    "fields" => $args["fields"][$tab["slug"]]
                                ]); ?>
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