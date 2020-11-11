<!-- **General -->
<?php if (!empty($args["fields"])) : ?>

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

    $general = false;
    $product_state = false;
    $user_info = false;
    $business_info = false;
    $upcoming_info = false;

    $productTabBoxes = [
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
            "slug" => "competitive_comparison",
            "title" => "Competitive Comparison",
            "module" => "competitive-comparison"
        ],
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
    ];
    ?>

    <div class="anchor-box">
        <div class="anchor-box-wrapper container nmr-container">

            <div class="mobile-anchor-button">
                <div class="mobile-anchor-button-icon">
                    <i class="fas fa-filter"></i>
                </div>
            </div>

            <!-- <div class="mobile-anchor-box">
                <div class="anchors-wrapper">
                    <h1 class="w-full text-xs label-text px-2 mb-5">
                        <span class="text-ovalGreen">#</span>Anchors
                    </h1>
                    <div class="anchors">
                        <?php
                        foreach ($productTabBoxes as $key => $tabBox) {
                            if ($tabBox["active"]) {
                                echo '<a href="#' . $tabBox["slug"] . '" class="anchor"><span class="anchor-text">' . $tabBox["title"]  . '</span></a>';
                            }
                        }
                        ?>
                    </div>
                </div>
            </div> -->


            <!-- ALL ANCHORED SECTIONS -->
            <div class="anchor-box-content">
                <div class="anchor-box-content-wrapper">
                    <div class="anchor-box-sections">
                        <?php
                        foreach ($productTabBoxes as $key => $tabBox) {

                            if ($tabBox["active"]) {

                                // echo anchor content
                                echo "<div id='" . $tabBox["slug"] . "' class='anchor-section'>";
                                get_template_part("template-parts/module", $tabBox["module"], [
                                    "fields" => $args["fields"][$tabBox["slug"]]
                                ]);
                                echo "</div>";
                            }
                        }
                        ?>
                    </div>

                    <!-- <div class="anchor-box-sidebar">
                        <div class="anchors-wrapper">
                            <div class="labels">
                                <div class="label">
                                    <span class="label-text">Anchors</span>
                                </div>
                            </div>
                            <div class="anchors">
                                <?php
                                foreach ($productTabBoxes as $key => $tabBox) {
                                    if ($tabBox["active"]) {
                                        echo '<a href="#' . $tabBox["slug"] . '" class="anchor">' . $tabBox["title"] . '</a>';
                                    }
                                }
                                ?>
                            </div>
                        </div>
                    </div> -->

                </div>
            </div>

        </div>
    </div>
<?php endif; ?>