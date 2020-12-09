import React, { useState } from "react";

// section
import HeroSection from "../sections/HeroSection";
import MiroBoardSection from "../sections/MiroBoardSection";
import BuiltForChange from "../sections/BuiltForChange";
import FivePillars from "../sections/FivePillars";
import PodIntro from "../sections/PodIntro";
import MoreThanOval from "../sections/MoreThanOval";
import DiagramSection from "../sections/DiagramSection";
import Milestones from "../sections/Milestones";

function ManifestoPage() {
    return (
        <main>
            <HeroSection />
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
