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
import LazyLoad from "react-lazyload";

function ManifestoPage() {
    return (
        <main>
            <LazyLoad once>
                <TextSlider />
            </LazyLoad>
            <LazyLoad once>
                <WordCloudSection />
            </LazyLoad>
            <LazyLoad once>
                <DiagramSection />
            </LazyLoad>
            <LazyLoad once>
                <FivePillars />
            </LazyLoad>
            <LazyLoad once>
                <BuiltForChange />
            </LazyLoad>
            <LazyLoad once>
                <PodIntro />
            </LazyLoad>
            <LazyLoad once>
                <MoreThanOval />
            </LazyLoad>
            <LazyLoad once>
                <MiroBoardSection />
            </LazyLoad>
            <LazyLoad once>
                <Milestones />
            </LazyLoad>
        </main>
    );
}

export default ManifestoPage;
