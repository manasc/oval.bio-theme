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

function ManifestoPage() {
    return (
        <main>
            <WordCloudSection />
            <TextSlider />
            <DiagramSection />
            <FivePillars />
            <BuiltForChange />
            <PodIntro />
            <MoreThanOval />
            <MiroBoardSection />
            <Milestones />
        </main>
    );
}

export default ManifestoPage;
