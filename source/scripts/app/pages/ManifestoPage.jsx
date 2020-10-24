import React, { useState } from "react";

// section
import HeroSection from "../sections/HeroSection";
import MiroBoard from "../sections/MiroBoard";
import BuiltForChange from "../sections/BuiltForChange";
import FivePillars from "../sections/FivePillars";
import PodIntro from "../sections/PodIntro";
import MoreThanOval from "../sections/MoreThanOval";
import DiagramSection from "../sections/DiagramSection";
import VideoSection from "../sections/VideoSection";

function ManifestoPage(props) {
    return (
        <main>
            <HeroSection />
            <MiroBoard />
            <BuiltForChange />
            <FivePillars />
            <PodIntro />
            <MoreThanOval />
            <DiagramSection />
            <VideoSection />
        </main>
    );
}

export default ManifestoPage;
