<!-- **General -->
<?php
// tabs
$key_benefits = in_array("key_benefits", $args["fields"]["sections_needed"]);
$nutrition_ingredients = in_array("nutrition_ingredients", $args["fields"]["sections_needed"]);
$components = in_array("components", $args["fields"]["sections_needed"]);
$faq = in_array("faq", $args["fields"]["sections_needed"]);

$pipeline = in_array("pipeline", $args["fields"]["sections_needed"]);
$research_and_development = in_array("research_and_development", $args["fields"]["sections_needed"]);
$testing = in_array("testing", $args["fields"]["sections_needed"]);
$clinical_trials = in_array("clinical_trials", $args["fields"]["sections_needed"]);

$how_it_works = in_array("how_it_works", $args["fields"]["sections_needed"]);
$product_future = in_array("product_future", $args["fields"]["sections_needed"]);
$directions_for_use = in_array("directions_for_use", $args["fields"]["sections_needed"]);
$instructable = in_array("instructable", $args["fields"]["sections_needed"]);
$side_effects = in_array("side_effects", $args["fields"]["sections_needed"]);

$cost_of_goods = in_array("cost_of_goods", $args["fields"]["sections_needed"]);
$quality_control = in_array("quality_control", $args["fields"]["sections_needed"]);
$manufacturing_challenges = in_array("manufacturing_challenges", $args["fields"]["sections_needed"]);
$competitors = in_array("competitors", $args["fields"]["sections_needed"]);

$help_needed = in_array("help_needed", $args["fields"]["sections_needed"]);
$important_dates = in_array("important_dates", $args["fields"]["sections_needed"]);
$opportunities = in_array("opportunities", $args["fields"]["sections_needed"]);

// modules
if ($key_benefits || $nutrition_ingredients || $components || $faq) {
    $general = true;
}

if ($pipeline || $research_and_development || $testing || $clinical_trials) {
    $product_state = true;
}

if ($how_it_works || $product_future || $directions_for_use || $instructable || $side_effects) {
    $user_info = true;
}

if ($pipeline || $research_and_development || $testing || $clinical_trials) {
    $business_info = true;
}

if ($help_needed || $important_dates || $opportunities) {
    $upcoming_info = true;
}

$productTabBoxes = [
    "general" => [
        "title" => "General Information",
        "active" => $general,
        "modules" => [
            [
                "active" => $key_benefits,
                "slug" => "key_benefits",
                "title" => "Key Benefits",
                "module" => "key-benefits"
            ],
            [
                "active" => $nutrition_ingredients,
                "slug" => "nutrition_ingredients",
                "title" => "Nutrition & Ingredients",
                "module" => "nutrition-and-ingredients"
            ],
            [
                "active" => $components,
                "slug" => "components",
                "title" => "Components",
                "module" => "components"
            ],
            [
                "active" => $faq,
                "slug" => "faq",
                "title" => "FAQ",
                "module" => "faq"
            ],
        ],
    ],
    "product-state" => [
        "title" => "Product Information",
        "active" => $product_state,
        "modules" => [
            [
                "active" => $pipeline,
                "slug" => "pipeline",
                "title" => "Pipeline (Phases)",
                "module" => "pipeline"
            ],
            [
                "active" => $research_and_development,
                "slug" => "research_and_development",
                "title" => "Research & Development",
                "module" => "research-and-development"
            ],
            [
                "active" => $testing,
                "slug" => "experiments",
                "title" => "Tests & Experiments",
                "module" => "tests-and-experiments"
            ],
            [
                "active" => $clinical_trials,
                "slug" => "clinical_trials",
                "title" => "Clinical Trials",
                "module" => "clinical-trials"
            ],
        ],
    ],
    "user-info" => [
        "title" => "User Information",
        "active" => $user_info,
        "modules" => [
            [
                "active" => $how_it_works,
                "slug" => "how_it_works",
                "title" => "How it Works",
                "module" => "how-it-works"
            ],
            [
                "active" => $product_future,
                "slug" => "future_of_product",
                "title" => "Future of Product",
                "module" => "future-of-product"
            ],
            [
                "active" => $directions_for_use,
                "slug" => "directions_for_use",
                "title" => "Directions For Use",
                "module" => "directions-for-use"
            ],
            [
                "active" => $instructable,
                "slug" => "instructable",
                "title" => "Instructables",
                "module" => "instructables"
            ],
            [
                "active" => $side_effects,
                "slug" => "side_effects",
                "title" => "Side Effects",
                "module" => "side-effects"
            ],
        ],
    ],
    "business-info" => [
        "title" => "Business Information",
        "active" => $business_info,
        "modules" => [
            [
                "active" => $cost_of_goods,
                "slug" => "cost_of_goods",
                "title" => "Cost of Goods",
                "module" => "cost-of-goods"
            ],
            [
                "active" => $quality_control,
                "slug" => "quality_control",
                "title" => "Quality Control",
                "module" => "quality-control"
            ],
            [
                "active" => $manufacturing_challenges,
                "slug" => "manufacturing_challenges",
                "title" => "Manufacturing Challenges",
                "module" => "manufacturing-challenges"
            ],
            [
                "active" => $competitors,
                "slug" => "competitors",
                "title" => "Competitive Comparison",
                "module" => "competitive-comparison"
            ],
        ],
    ],
    "upcoming-info" => [
        "title" => "Upcoming Info",
        "active" => $upcoming_info,
        "modules" => [
            [
                "active" => $help_needed,
                "slug" => "help_needed",
                "title" => "Help Needed",
                "module" => "help-needed"
            ],
            [
                "active" => $important_dates,
                "slug" => "important_dates",
                "title" => "Important Dates",
                "module" => "important-dates"
            ],
            [
                "active" => $opportunities,
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