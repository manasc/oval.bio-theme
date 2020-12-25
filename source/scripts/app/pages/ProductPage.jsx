import React, { useEffect, useState } from "react";
import axios from "axios";

// section
import ProductSection from "../sections/ProductSection";

import KeyBenefitsSection from "../sections/KeyBenefitsSection";
import HowItWorksSection from "../sections/HowItWorksSection";
import DirectionsForUseSection from "../sections/DirectionsForUseSection";
import LifeExtensionSection from "../sections/LifeExtensionSection";
import NutritionIngredientsSection from "../sections/NutritionIngredientsSection";
import ComponentsSection from "../sections/ComponentsSection";
import FaqSection from "../sections/FaqSection";
import TextSection from "../sections/TextSection";
import CardPostingSection from "../sections/CardPostingSection";
import PipelineSection from "../sections/PipelineSection";
import CostOfGoodsSection from "../sections/CostOfGoodsSection";

import ChosenArticlesSection from "../sections/ChosenArticlesSection";
import ArticleTeaserSection from "../sections/ArticleTeaserSection";

function ProductPage({ productId }) {
    const [productData, setProductData] = useState("");
    const [productMeta, setProductMeta] = useState("");

    const marginBottom = "md:mb-5";

    useEffect(() => {
        console.log(productId);

        // get product information
        axios
            .get("/wp-json/wc/store/products/" + productId)
            .then((res) => setProductData(res.data))
            .catch((err) => console.log(err))
            .finally(() => console.log(productData));

        axios
            .get("/wp-json/acf/v3/product/" + productId)
            .then((res) => setProductMeta(res.data.acf))
            .catch((err) => console.log(err))
            .finally(() => console.log(productMeta));
    }, []);

    useEffect(() => {
        console.log(productData, productMeta);
    }, [productData, productMeta]);

    return (
        <React.Fragment>
            {productData && <ProductSection productData={productData} />}
            {productMeta && (
                <div className="mx-auto max-w-6xl md:px-3">
                    {productMeta["key_benefits"] && (
                        <div className={marginBottom}>
                            <KeyBenefitsSection data={productMeta["key_benefits"]} />
                        </div>
                    )}

                    {productMeta["how_it_works"] && (
                        <div className={marginBottom}>
                            <HowItWorksSection data={productMeta["how_it_works"]} />
                        </div>
                    )}

                    <div className={marginBottom}>
                        <LifeExtensionSection />
                    </div>

                    {productMeta["nutrition_ingredients"] && (
                        <div className={marginBottom}>
                            <NutritionIngredientsSection data={productMeta["nutrition_ingredients"]} />
                        </div>
                    )}

                    {productMeta["components"] && (
                        <div className={marginBottom}>
                            <ComponentsSection data={productMeta["components"]} />
                        </div>
                    )}

                    {productMeta["cost_of_goods"] && (
                        <div className={marginBottom}>
                            <CostOfGoodsSection data={productMeta["cost_of_goods"]} />
                        </div>
                    )}

                    {productMeta["future_of_product"] && (
                        <div className={marginBottom}>
                            <ChosenArticlesSection
                                sectionTitle="Product Future"
                                articles={productMeta["future_of_product"].articles || []}
                            />
                        </div>
                    )}

                    {productMeta["pipeline"] && (
                        <div className={marginBottom}>
                            <PipelineSection data={productMeta["pipeline"]} />
                        </div>
                    )}

                    {productMeta["directions_for_use"] && (
                        <div className={marginBottom}>
                            <DirectionsForUseSection data={productMeta["directions_for_use"]} />
                        </div>
                    )}

                    {productMeta["side_effects"] && (
                        <div className={marginBottom}>
                            <TextSection title="Side Effects" description={productMeta["side_effects"].risks_concerns} />
                        </div>
                    )}

                    {productMeta["faq"] && (
                        <div className={marginBottom}>
                            <FaqSection data={productMeta["faq"]} />
                        </div>
                    )}

                    {productMeta["competitive_comparison"] && (
                        <div className={marginBottom}>
                            <ArticleTeaserSection
                                sectionTitle="Competitive Comparison"
                                articleId={productMeta["competitive_comparison"].articles.ID}
                            />
                        </div>
                    )}

                    {productMeta["experiments"] && (
                        <div className={marginBottom}>
                            <ChosenArticlesSection
                                sectionTitle="Tests & Experiments"
                                articles={productMeta["experiments"].articles || []}
                            />
                        </div>
                    )}

                    {/* clinical trials */}
                    {productMeta["clinical_trials"] && (
                        <div className={marginBottom}>
                            <ChosenArticlesSection
                                sectionTitle="Clinical Trials"
                                articles={productMeta["clinical_trials"].trial_articles || []}
                            />
                        </div>
                    )}

                    {productMeta["research_and_development"] && (
                        <div className={marginBottom}>
                            <ChosenArticlesSection
                                sectionTitle="Research & Development"
                                articles={productMeta["research_and_development"].articles || []}
                            />
                        </div>
                    )}

                    {productMeta["intsructables"] &&
                        productMeta["intsructables"].articles.map((article, i) => (
                            <div key={i} className={marginBottom}>
                                <ArticleTeaserSection sectionTitle="Instructable" articleId={article.ID} />
                            </div>
                        ))}

                    {productMeta["quality_control"] && (
                        <div className={marginBottom}>
                            <TextSection title="Quality Control" description={productMeta["quality_control"].description} />
                        </div>
                    )}

                    {productMeta["manufacturing_challenges"] && (
                        <div className={marginBottom}>
                            <TextSection
                                title="Manufacturing Challenges"
                                description={productMeta["manufacturing_challenges"].description}
                            />
                        </div>
                    )}

                    {productMeta["help_needed"] && (
                        <div className={marginBottom}>
                            <CardPostingSection title="Help Needed" cards={productMeta["help_needed"].technologies} />
                        </div>
                    )}

                    {productMeta["opportunities"] && (
                        <div className={marginBottom}>
                            <CardPostingSection title="Opportunities" cards={productMeta["opportunities"].opportunity} />
                        </div>
                    )}

                    {/* <QualityControlSection data={productMeta["quality_control"]} /> */}
                    {/* 
                        <InstructableSection data={productMeta["instructable"]} />
                    */}
                </div>
            )}
        </React.Fragment>
    );
}

export default ProductPage;
