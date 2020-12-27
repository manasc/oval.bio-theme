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

import { Link, Element } from "react-scroll";

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
        title: "5 Pillars",
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
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={"w-full"}>
            <div
                className="fixed h-full z-50 right-0 top-0 border py-1 bg-white shadow-xl"
                style={{
                    transitionDuration: "200ms",
                    transform: menuOpen ? "translateX(0)" : "translateX(100%)",
                }}
            >
                <nav className="mt-20">
                    <div
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="h-10 w-10 mt-24 absolute cursor-pointer bottom-0 mb-24 left-0 bg-white hover:bg-gray-200 border border-r-0 rounded-l flex items-center justify-center"
                        style={{ transform: "translateX(-100%)" }}
                    >
                        <i
                            className="fas fa-plus text-gray-500"
                            style={{ transitionDuration: "200ms", transform: menuOpen ? "rotate(0deg)" : "rotate(45deg)" }}
                        ></i>
                    </div>

                    <div className="text-xs tracking-widest label-text block py-px px-3 md:px-5 mb-5">Page Sections</div>
                    {sections.length > 0 &&
                        sections.map((section) => (
                            <Link
                                key={section.id}
                                to={section.slug}
                                className="text-xs md:text-base md:tracking-wider cursor-pointer block py-1 px-3 md:px-5 bg-white hover:bg-gray-100"
                                activeClass="cursor-auto bg-gray-300 hover:bg-gray-300"
                                smooth={true}
                                spy={true}
                            >
                                {section.title}
                            </Link>
                        ))}
                </nav>
            </div>
            <div
                onClick={() => setMenuOpen(false)}
                className="fixed h-full w-full bg-gray-900 z-40"
                style={{ transitionDuration: "200ms", visibility: menuOpen ? "visible" : "hidden", opacity: menuOpen ? ".7" : "0" }}
            ></div>
            {sections.length > 0 &&
                sections.map((section) => (
                    <Element key={section.id} className="min-h-screen" name={section.slug}>
                        <LazyLoad once>{section.component(section.props())}</LazyLoad>
                    </Element>
                ))}
        </div>
    );
}

export default ManifestoPage;
