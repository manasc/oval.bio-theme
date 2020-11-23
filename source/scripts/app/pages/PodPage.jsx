import React, { useState } from "react";

// section
import HeroSection2 from "../sections/HeroSection2";
import MiroBoardSection from "../sections/MiroBoardSection";
import BuiltForChange from "../sections/BuiltForChange";
import FivePillars from "../sections/FivePillars";
import PodIntro from "../sections/PodIntro";
import MoreThanOval from "../sections/MoreThanOval";
import Diagnostics from "../sections/Diagnostics";
import Synergies from "../sections/Synergies";
import Therapeutics from "../sections/Therapeutics";
import VideoSection from "../sections/VideoSection";

import ReactIScroll from "react-iscroll";
import IScroll from "iscroll/build/iscroll";

function ManifestoPage() {
    return (
        <React.Fragment>
            <HeroSection2 />
            <PodIntro />
            <MoreThanOval />
            <BuiltForChange />

            {/* Therapeutics */}
            <Therapeutics />

            {/* Diagnostics */}
            <Diagnostics />

            {/* Diagnostic Synergy Explained */}
            {/* Synergies of Therapeutics */}
            <Synergies />

            {/* <DiagramSection /> */}
            {/* <MiroBoardSection /> */}
            {/* <VideoSection /> */}
            <FivePillars />
        </React.Fragment>
    );
}

export default ManifestoPage;
