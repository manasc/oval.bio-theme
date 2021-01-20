import React, { useEffect, useState } from "react";
import axios from "axios";
import { Element } from "react-scroll";

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

import AnchorLinksNav from "../components/AnchorLinksNav";

function ProductPage({ productId, productData, productMeta, nonceId }) {
    const marginBottom = "md:mb-5";

    const id = productId;
    const key = nonceId;
    console.log("key", key);
    const data = JSON.parse(productData);
    const meta = JSON.parse(productMeta);

    const metaSections = [
        {
            id: 64242,
            title: "Key Benefits",
            slug: "key_benefits",
            component: (props) => <KeyBenefitsSection {...props} />,
            props: {
                data: meta.acf["key_benefits"],
            },
        },
        {
            id: 37416,
            title: "How It Works",
            slug: "how_it_works",
            component: (props) => <HowItWorksSection {...props} />,
            props: {
                data: meta.acf["how_it_works"],
            },
        },
        {
            id: 82917,
            title: "Nutrition Ingredients",
            slug: "nutrition_ingredients",
            component: (props) => <NutritionIngredientsSection {...props} />,
            props: {
                data: meta.acf["nutrition_ingredients"],
            },
        },
        {
            id: 44837,
            title: "Key Benefits",
            slug: "life_extension",
            component: (props) => <LifeExtensionSection {...props} />,
            props: {},
        },
        {
            id: 85714,
            title: "Components",
            slug: "components",
            component: (props) => <ComponentsSection {...props} />,
            props: {
                data: meta.acf["components"],
            },
        },
        {
            id: 86390,
            title: "Cost Of Goods",
            slug: "cost_of_goods",
            component: (props) => <CostOfGoodsSection {...props} />,
            props: {
                data: meta.acf["cost_of_goods"],
            },
        },
        {
            id: 52629,
            title: "Future Of Product",
            slug: "future_of_product",
            component: (props) => <ChosenArticlesSection {...props} />,
            props: {
                sectionTitle: "Product Future",
                articles: (meta.acf["future_of_product"] && meta.acf["future_of_product"].articles) || [],
            },
        },
        {
            id: 76949,
            title: "Pipeline",
            slug: "pipeline",
            component: (props) => <PipelineSection {...props} />,
            props: {
                data: meta.acf["pipeline"],
            },
        },
        {
            id: 90508,
            title: "Directions For Use",
            slug: "directions_for_use",
            component: (props) => <DirectionsForUseSection {...props} />,
            props: {
                data: meta.acf["directions_for_use"],
            },
        },
        {
            id: 59574,
            title: "Side Effects",
            slug: "side_effects",
            component: (props) => <TextSection {...props} />,
            props: {
                title: "Side Effects",
                description: meta.acf["side_effects"] && meta.acf["side_effects"].risks_concerns,
            },
        },
        {
            id: 18489,
            title: "FAQ",
            slug: "faq",
            component: (props) => <FaqSection {...props} />,
            props: {
                data: meta.acf["faq"],
            },
        },
        {
            id: 61194,
            title: "Competitive Comparison",
            slug: "competitive_comparison",
            component: (props) => <ArticleTeaserSection {...props} />,
            props: {
                sectionTitle: "Product Future",
                articleId: (meta.acf["competitive_comparison"] && meta.acf["competitive_comparison"].articles.ID) || [],
            },
        },
        {
            id: 75246,
            title: "Experiments",
            slug: "experiments",
            component: (props) => <ChosenArticlesSection {...props} />,
            props: {
                sectionTitle: "Tests & Experiments",
                articles: (meta.acf["experiments"] && meta.acf["experiments"].articles) || [],
            },
        },
        {
            id: 49325,
            title: "Clinical Trials",
            slug: "clinical_trials",
            component: (props) => <ChosenArticlesSection {...props} />,
            props: {
                sectionTitle: "Clinical Trials",
                articles: (meta.acf["clinical_trials"] && meta.acf["clinical_trials"].articles) || [],
            },
        },
        {
            id: 66022,
            title: "Research And Development",
            slug: "research_and_development",
            component: (props) => <ChosenArticlesSection {...props} />,
            props: {
                sectionTitle: "Research And Development",
                articles: (meta.acf["research_and_development"] && meta.acf["research_and_development"].articles) || [],
            },
        },
        {
            id: 92027,
            title: "Quality Control",
            slug: "quality_control",
            component: (props) => <TextSection {...props} />,
            props: {
                title: "Quality Control",
                description: (meta.acf["quality_control"] && meta.acf["quality_control"].description) || "",
            },
        },
        {
            id: 50505,
            title: "Manufacturing Challenges",
            slug: "manufacturing_challenges",
            component: (props) => <TextSection {...props} />,
            props: {
                title: "Manufacturing Challenges",
                description: (meta.acf["manufacturing_challenges"] && meta.acf["manufacturing_challenges"].description) || "",
            },
        },
        {
            id: 65379,
            title: "Help Needed",
            slug: "help_needed",
            component: (props) => <CardPostingSection {...props} />,
            props: {
                title: "Help Needed",
                cards: meta.acf["help_needed"] && meta.acf["help_needed"].technologies,
            },
        },
        {
            id: 22144,
            title: "Opportunities",
            slug: "opportunities",
            component: (props) => <CardPostingSection {...props} />,
            props: {
                title: "Opportunities",
                cards: meta.acf["opportunities"] && meta.acf["opportunities"].opportunity,
            },
        },
    ];

    return (
        <>
            <AnchorLinksNav
                sections={[
                    { title: "Product Section", slug: "product_section" },
                    ...metaSections.map(({ title, slug }) => {
                        return meta.acf[slug] ? { title, slug } : false;
                    }),
                ]}
            />
            {productData && (
                <Element name="product_section">
                    <ProductSection productId={id} productData={data} productMeta={meta.acf} nonceId={key} />
                </Element>
            )}
            {meta &&
                meta.acf &&
                metaSections.length > 0 &&
                metaSections.map(
                    ({ id, component, props, slug }) =>
                        meta.acf[slug] && (
                            <Element key={id} className="mx-auto max-w-6xl md:px-3" name={slug}>
                                <div className={marginBottom}>{component(props)}</div>
                            </Element>
                        )
                )}
        </>
    );
}

export default ProductPage;
