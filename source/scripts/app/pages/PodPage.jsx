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

function ManifestoPage() {
    return (
        <React.Fragment>
            <HeroSection2 />
            <PodIntro />
            <MoreThanOval2 />
            <BuiltForChange />
            <Therapeutics />
            <Diagnostics />
            <Synergies />
            <FivePillars />
        </React.Fragment>
    );
}

export default ManifestoPage;
