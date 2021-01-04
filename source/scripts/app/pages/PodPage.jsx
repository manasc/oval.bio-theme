import React, { useState } from "react";

// section
import HeroSection2 from "../sections/HeroSection2";
import BuiltForChange from "../sections/BuiltForChange";
import FivePillars from "../sections/FivePillars";
import PodIntro from "../sections/PodIntro";
import MoreThanOval2 from "../sections/MoreThanOval2";
import Diagnostics from "../sections/Diagnostics";
import Synergies from "../sections/Synergies";
import Therapeutics from "../sections/Therapeutics";

import LazyLoad from "react-lazyload";
import { Element } from "react-scroll";
import AnchorLinksNav from "../components/AnchorLinksNav";

const sections = [
    {
        id: 47112,
        title: "Title",
        slug: "title",
        component: (props) => <HeroSection2 {...props} />,
        props: {},
    },
    {
        id: 13916,
        title: "Pod Introduction",
        slug: "pod_introduction",
        component: (props) => <PodIntro {...props} />,
        props: {},
    },
    {
        id: 88902,
        title: "More Than Oval",
        slug: "more_than_oval",
        component: (props) => <MoreThanOval2 {...props} />,
        props: {},
    },
    {
        id: 8512,
        title: "Built For Change",
        slug: "built_for_changes",
        component: (props) => <BuiltForChange {...props} />,
        props: {},
    },
    {
        id: 95016,
        title: "Therapeutics",
        slug: "therapeutics",
        component: (props) => <Therapeutics {...props} />,
        props: {},
    },
    {
        id: 75577,
        title: "Diagnostics",
        slug: "diagnostics",
        component: (props) => <Diagnostics {...props} />,
        props: {},
    },
    {
        id: 91968,
        title: "Synergies",
        slug: "synergies",
        component: (props) => <Synergies {...props} />,
        props: {},
    },
    {
        id: 55269,
        title: "Five Pillars",
        slug: "five_pillars",
        component: (props) => <FivePillars {...props} />,
        props: {},
    },
];

function ManifestoPage() {
    return (
        <div id="pod-page-sections" className="w-full">
            <AnchorLinksNav
                sections={sections.map(({ title, slug }) => {
                    return { title, slug };
                })}
            />
            {sections.length > 0 &&
                sections.map((section) => (
                    <Element key={section.id} name={section.slug} style={{ minHeight: "calc(100vh - 60px" }}>
                        <LazyLoad once>{section.component(section.props)}</LazyLoad>
                    </Element>
                ))}
        </div>
    );
}

export default ManifestoPage;
