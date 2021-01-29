import React, { useState } from "react";

// section
import MiroBoardSection from "../sections/MiroBoardSection";
import BuiltForChange from "../sections/BuiltForChange";
import SpinoffTechnologies from "../sections/SpinoffTechnologies";
import FivePillars from "../sections/FivePillars";
import PodIntro from "../sections/PodIntro";
import MoreThanOval from "../sections/MoreThanOval";
import DiagramSection from "../sections/DiagramSection";
import Milestones from "../sections/Milestones";
import WordCloudSection from "../sections/WordCloudSection";
import TextSlider from "../sections/TextSlider";
import TableOfContents from "../sections/TableOfContents";
import LazyLoad from "react-lazyload";

import { Link, Element } from "react-scroll";
import AnchorLinksNav from "../components/AnchorLinksNav";

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
            return {
                title: "Table of Contents",
                description:
                    "We are making life extension technologies attainable for all with the self awareness to want them – People fear as technology advances and life extension becomes a real thing, that only the rich or privileged will be able to utilize it, the Jeff Bezos, or Nicole Kidman, or Kevin Durant. We are dedicated to focusing our efforts on not letting that happen, we want our hairstylist, mechanic, Costco greeter and others to have the same access. We will do this by developing our own and implementing others life extension technologies, in the most replicable way possible. So someone in Dhaka, Kiev, Shanghai or Buenos Aires can both see how we built and tested our technology but also to contribute to the movement. Below we outline how we will achieve this.",
                links: [
                    ...sections.map((section) => ({ name: section.title, link: section.slug })),
                    {
                        name: "Other Information",
                        link: "other-information",
                    },
                ],
            };
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
        id: 29252,
        title: "Built for Change",
        slug: "built-for-change",
        component: (props) => <BuiltForChange {...props} />,
        props: () => {},
    },
    {
        id: 29252,
        title: "Spinoff Technologies",
        slug: "spinoff-technologies",
        component: (props) => <SpinoffTechnologies {...props} />,
        props: () => {},
    },
    // {
    //     id: 92778,
    //     title: "5 Pillars",
    //     slug: "five-pillars",
    //     component: (props) => <FivePillars {...props} />,
    //     props: () => {},
    // },
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
        <div className="w-full">
            <AnchorLinksNav
                sections={[
                    ...sections.map(({ title, slug }) => {
                        return { title, slug };
                    }),
                    {
                        title: "Other Information",
                        slug: "other-information",
                    },
                ]}
            />
            {sections.length > 0 &&
                sections.map((section) => (
                    <Element key={section.slug} className="min-h-full" name={section.slug}>
                        <LazyLoad once>{section.component(section.props())}</LazyLoad>
                    </Element>
                ))}
        </div>
    );
}

export default ManifestoPage;
