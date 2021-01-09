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

    // useEffect(() => {
    //     console.log(productData, productMeta);
    // }, [productData, productMeta]);

    const metaSections = [
        {
            id: 64242,
            title: "Key Benefits",
            slug: "key_benefits",
            component: (props) => <KeyBenefitsSection {...props} />,
            props: {
                data: productMeta["key_benefits"],
            },
        },
        {
            id: 37416,
            title: "How It Works",
            slug: "how_it_works",
            component: (props) => <HowItWorksSection {...props} />,
            props: {
                data: productMeta["how_it_works"],
            },
        },
        {
            id: 82917,
            title: "Nutrition Ingredients",
            slug: "nutrition_ingredients",
            component: (props) => <NutritionIngredientsSection {...props} />,
            props: {
                data: productMeta["nutrition_ingredients"],
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
                data: productMeta["components"],
            },
        },
        {
            id: 86390,
            title: "Cost Of Goods",
            slug: "cost_of_goods",
            component: (props) => <CostOfGoodsSection {...props} />,
            props: {
                data: productMeta["cost_of_goods"],
            },
        },
        {
            id: 52629,
            title: "Future Of Product",
            slug: "future_of_product",
            component: (props) => <ChosenArticlesSection {...props} />,
            props: {
                sectionTitle: "Product Future",
                articles: (productMeta["future_of_product"] && productMeta["future_of_product"].articles) || [],
            },
        },
        {
            id: 76949,
            title: "Pipeline",
            slug: "pipeline",
            component: (props) => <PipelineSection {...props} />,
            props: {
                data: productMeta["pipeline"],
            },
        },
        {
            id: 90508,
            title: "Directions For Use",
            slug: "directions_for_use",
            component: (props) => <DirectionsForUseSection {...props} />,
            props: {
                data: productMeta["directions_for_use"],
            },
        },
        {
            id: 59574,
            title: "Side Effects",
            slug: "side_effects",
            component: (props) => <TextSection {...props} />,
            props: {
                title: "Side Effects",
                description: productMeta["side_effects"] && productMeta["side_effects"].risks_concerns,
            },
        },
        {
            id: 18489,
            title: "FAQ",
            slug: "faq",
            component: (props) => <FaqSection {...props} />,
            props: {
                data: productMeta["faq"],
            },
        },
        {
            id: 61194,
            title: "Competitive Comparison",
            slug: "competitive_comparison",
            component: (props) => <ArticleTeaserSection {...props} />,
            props: {
                sectionTitle: "Product Future",
                articleId: (productMeta["competitive_comparison"] && productMeta["competitive_comparison"].articles.ID) || [],
            },
        },
        {
            id: 75246,
            title: "Experiments",
            slug: "experiments",
            component: (props) => <ChosenArticlesSection {...props} />,
            props: {
                sectionTitle: "Tests & Experiments",
                articles: (productMeta["experiments"] && productMeta["experiments"].articles) || [],
            },
        },
        {
            id: 49325,
            title: "Clinical Trials",
            slug: "clinical_trials",
            component: (props) => <ChosenArticlesSection {...props} />,
            props: {
                sectionTitle: "Clinical Trials",
                articles: (productMeta["clinical_trials"] && productMeta["clinical_trials"].articles) || [],
            },
        },
        {
            id: 66022,
            title: "Research And Development",
            slug: "research_and_development",
            component: (props) => <ChosenArticlesSection {...props} />,
            props: {
                sectionTitle: "Research And Development",
                articles: (productMeta["research_and_development"] && productMeta["research_and_development"].articles) || [],
            },
        },
        {
            id: 92027,
            title: "Quality Control",
            slug: "quality_control",
            component: (props) => <TextSection {...props} />,
            props: {
                title: "Quality Control",
                description: (productMeta["quality_control"] && productMeta["quality_control"].description) || "",
            },
        },
        {
            id: 50505,
            title: "Manufacturing Challenges",
            slug: "manufacturing_challenges",
            component: (props) => <TextSection {...props} />,
            props: {
                title: "Manufacturing Challenges",
                description: (productMeta["manufacturing_challenges"] && productMeta["manufacturing_challenges"].description) || "",
            },
        },
        {
            id: 65379,
            title: "Help Needed",
            slug: "help_needed",
            component: (props) => <CardPostingSection {...props} />,
            props: {
                title: "Help Needed",
                cards: productMeta["help_needed"] && productMeta["help_needed"].technologies,
            },
        },
        {
            id: 22144,
            title: "Opportunities",
            slug: "opportunities",
            component: (props) => <CardPostingSection {...props} />,
            props: {
                title: "Opportunities",
                cards: productMeta["opportunities"] && productMeta["opportunities"].opportunity,
            },
        },
    ];

    return (
        <React.Fragment>
            <AnchorLinksNav
                sections={[
                    { title: "Product Section", slug: "product_section" },
                    ...metaSections.map(({ title, slug }) => {
                        return productMeta[slug] ? { title, slug } : false;
                    }),
                ]}
            />
            {productData && (
                <Element name="product_section">
                    <ProductSection productData={productData} />
                </Element>
            )}
            {productMeta &&
                metaSections.length > 0 &&
                metaSections.map(
                    ({ id, component, props, slug }) =>
                        productMeta[slug] && (
                            <Element key={id} className="mx-auto max-w-6xl md:px-3" name={slug}>
                                {/* <LazyLoad once> */}
                                <div className={marginBottom}>{component(props)}</div>
                                {/* </LazyLoad> */}
                            </Element>
                        )
                )}
        </React.Fragment>
    );
}

export default ProductPage;
