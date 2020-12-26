import React, { useState } from "react";

// section
import MiroBoardSection from "../sections/MiroBoardSection";
import BuiltForChange from "../sections/BuiltForChange";
import FivePillars from "../sections/FivePillars";
import PodIntro from "../sections/PodIntro";
import MoreThanOval from "../sections/MoreThanOval";
import DiagramSection from "../sections/DiagramSection";
import Milestones from "../sections/Milestones";
import WordCloudSection from "../sections/WordCloudSection";
import TextSlider from "../sections/TextSlider";
import TableOfContents from "../sections/TableOfContents";
import LazyLoad from "react-lazyload";

const toc = (sections) => {
    console.log("sections", sections);

    let arr = {
        title: "Table of Contents",
        description:
            "Ad totam voluptatibus facere voluptatem voluptas. Voluptatum quod quia qui qui repellat sed. Architecto impedit quisquam qui dolores repellendus consectetur. Quis nemo hic officia doloremque. Distinctio quia neque modi. Rerum perferendis ipsa similique beatae et et quas. Pariatur consectetur repudiandae quis nostrum. Sequi repellat qui doloribus molestias possimus adipisci. Laboriosam eius nihil ut sit assumenda placeat facere id. Iure maxime ut quam alias nostrum quisquam molestiae. Id esse aliquid natus at doloribus ducimus. Asperiores ad minus numquam et qui praesentium quos facere vel. Beatae eum dolores eos alias. Ullam qui ut ipsam minima accusamus. Culpa dicta quis porro voluptas quia praesentium quia. Dolorum voluptas esse repellat eos dolorem.",
        links: [],
    };

    return sections.map((section) => arr.links.push({ name: section.title, link: section.link }));
};

const sections = [
    {
        id: 18433,
        title: "Title",
        slug: "title",
        component: (props) => <TextSlider {...props} />,
        props: () => {},
    },
    {
        id: 28056,
        title: "Table of Contents",
        slug: "table-of-contents",
        component: (props) => <TableOfContents {...props} />,
        props: () => {
            let arr = {
                title: "Table of Contents",
                description:
                    "Ad totam voluptatibus facere voluptatem voluptas. Voluptatum quod quia qui qui repellat sed. Architecto impedit quisquam qui dolores repellendus consectetur. Quis nemo hic officia doloremque. Distinctio quia neque modi. Rerum perferendis ipsa similique beatae et et quas. Pariatur consectetur repudiandae quis nostrum. Sequi repellat qui doloribus molestias possimus adipisci. Laboriosam eius nihil ut sit assumenda placeat facere id. Iure maxime ut quam alias nostrum quisquam molestiae. Id esse aliquid natus at doloribus ducimus. Asperiores ad minus numquam et qui praesentium quos facere vel. Beatae eum dolores eos alias. Ullam qui ut ipsam minima accusamus. Culpa dicta quis porro voluptas quia praesentium quia. Dolorum voluptas esse repellat eos dolorem.",
                links: [],
            };

            sections.forEach((section) => arr.links.push({ name: section.title, link: section.slug }));

            return arr;
        },
    },
    {
        id: 8795,
        title: "Our Mission",
        slug: "our-mission",
        component: (props) => <WordCloudSection {...props} />,
        props: () => {},
    },
    {
        id: 34352,
        title: "Our Values",
        slug: "our-values",
        component: (props) => <DiagramSection {...props} />,
        props: () => {},
    },
    {
        id: 92778,
        title: "Five PillarsThe Five Pillars",
        slug: "five-pillars",
        component: (props) => <FivePillars {...props} />,
        props: () => {},
    },
    {
        id: 29252,
        title: "Built for Change",
        slug: "built-for-change",
        component: (props) => <BuiltForChange {...props} />,
        props: () => {},
    },
    {
        id: 69447,
        title: "What is the pod?",
        slug: "what-is-the-pod",
        component: (props) => <PodIntro {...props} />,
        props: () => {},
    },
    {
        id: 44895,
        title: "More than Oval.Bio",
        slug: "more-than-oval",
        component: (props) => <MoreThanOval {...props} />,
        props: () => {},
    },
    {
        id: 171,
        title: "What does this matter?",
        slug: "what-do-we-matter",
        component: (props) => <MiroBoardSection {...props} />,
        props: () => {},
    },
    {
        id: 24645,
        title: "Milestones",
        slug: "milestones",
        component: (props) => <Milestones {...props} />,
        props: () => {},
    },
];

function ManifestoPage() {
    return (
        <div className={"w-full"}>
            {sections.length > 0 &&
                sections.map((section) => (
                    <div key={section.id} className="min-h-screen" id={section.slug}>
                        <LazyLoad once>{section.component(section.props())}</LazyLoad>
                    </div>
                ))}
        </div>
    );
}

export default ManifestoPage;
