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

import ReactFullpage from "@fullpage/react-fullpage";

function ManifestoPage() {
    return (
        <ReactFullpage
            licenseKey="E70AAD3B-F4774CC5-864728AE-C7DBB3D8"
            scrollingSpeed={1000}
            navigation={true}
            render={({ state, fullpageApi }) => (
                <ReactFullpage.Wrapper>
                    <div className="section h-full">
                        <LazyLoad once>
                            <TextSlider />
                        </LazyLoad>
                    </div>

                    <div className="section h-full">
                        <LazyLoad once>
                            <TableOfContents
                                title="Table of Contents"
                                description="Ad totam voluptatibus facere voluptatem voluptas. Voluptatum quod quia qui qui repellat sed. Architecto impedit quisquam qui dolores repellendus consectetur. Quis nemo hic officia doloremque. Distinctio quia neque modi. Rerum perferendis ipsa similique beatae et et quas. Pariatur consectetur repudiandae quis nostrum. Sequi repellat qui doloribus molestias possimus adipisci. Laboriosam eius nihil ut sit assumenda placeat facere id. Iure maxime ut quam alias nostrum quisquam molestiae. Id esse aliquid natus at doloribus ducimus. Asperiores ad minus numquam et qui praesentium quos facere vel. Beatae eum dolores eos alias. Ullam qui ut ipsam minima accusamus. Culpa dicta quis porro voluptas quia praesentium quia. Dolorum voluptas esse repellat eos dolorem."
                                links={[
                                    { name: "Word Cloud Section", hash: "wordcloudsection" },
                                    { name: "Our Valus", hash: "wordcloudsection" },
                                    { name: "Five Pillars", hash: "wordcloudsection" },
                                    { name: "Build for Change", hash: "wordcloudsection" },
                                    { name: "What is the pod?", hash: "wordcloudsection" },
                                    { name: "More than Oval.Bio", hash: "wordcloudsection" },
                                    { name: "What does this matter?", hash: "wordcloudsection" },
                                    { name: "Milestones", hash: "wordcloudsection" },
                                ]}
                            />
                        </LazyLoad>
                    </div>

                    <div className="section h-full">
                        <LazyLoad once>
                            <WordCloudSection />
                        </LazyLoad>
                    </div>

                    <div className="section h-full">
                        <LazyLoad once>
                            <DiagramSection />
                        </LazyLoad>
                    </div>

                    <div className="section h-full">
                        <LazyLoad once>
                            <FivePillars />
                        </LazyLoad>
                    </div>

                    <div className="section h-full">
                        <LazyLoad once>
                            <BuiltForChange />
                        </LazyLoad>
                    </div>

                    <div className="section h-full">
                        <LazyLoad once>
                            <PodIntro />
                        </LazyLoad>
                    </div>

                    <div className="section h-full">
                        <LazyLoad once>
                            <MoreThanOval />
                        </LazyLoad>
                    </div>

                    <div className="section h-full">
                        <LazyLoad once>
                            <MiroBoardSection />
                        </LazyLoad>
                    </div>

                    <div className="section h-full">
                        <LazyLoad once>
                            <Milestones />
                        </LazyLoad>
                    </div>
                </ReactFullpage.Wrapper>
            )}
        />
    );
}

export default ManifestoPage;
