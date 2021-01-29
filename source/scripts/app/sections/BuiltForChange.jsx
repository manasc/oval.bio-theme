import React, { useEffect, useRef } from "react";

const comparisons = [
    {
        title: "Hello",
        apollo: "Establishing the technology to meet other national interests in space.",
        oval:
            "Create, utilize and commercialize technologies which can have an impact on functionally extending the healthy human lifespan globally.",
    },
    {
        title: "Hello",
        apollo: "Achieving preeminence in space for the United States.",
        oval: "Give the most transparent and replicable access to these technologies, to as many people globally as possible.",
    },
    {
        title: "Hello",
        apollo: "Carrying out a program of scientific exploration of the Moon.",
        oval: "Test and quantify efficacy recognizing that not all people respond the same to the same technology.",
    },
    {
        title: "Hello",
        apollo: "Developing human capability to work in the lunar environment.",
        oval: "Stay true to the mission.",
    },
];

function BuiltForChange() {
    return (
        <section className="min-h-screen overflow-hidden">
            <div className="min-h-screen flex">
                <div className="flex-1 relative flex flex-col items-center justify-center bg-gray-100">
                    <div className="h-full w-1 bg-gray-300 absolute"></div>
                    <div className="flex justify-center mb-10 -mx-2 relative">
                        <div className="px-2 text-center" style={{ width: 350 }}>
                            <div className="label-text">NASA</div>
                        </div>
                        <div className="w-32 px-2 text-center"></div>
                        <div className="px-2 text-center" style={{ width: 350 }}>
                            <div className="label-text">oval.bio</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center relative">
                        <div className="h-full w-1 bg-gray-300 absolute"></div>
                        {comparisons.map(({ apollo, title, oval }, i) => (
                            <div key={i} className="flex justify-center mb-5 -mx-2 relative">
                                <div style={{ width: 350 }}>
                                    <div className="border border-gray-400 bg-white rounded p-4">
                                        <p className="m-0">{apollo}</p>
                                    </div>
                                </div>
                                <div className="w-32 px-2 text-center flex justify-center">
                                    <div className="h-10 w-10 flex items-center justify-center relative">
                                        <div className="w-32 h-1 bg-ovalGreenLight absolute z-10"></div>
                                        <div className="h-10 w-10 rounded-full shadow border bg-white absolute z-10"></div>
                                        <div className="absolute z-10">{i + 1}</div>
                                    </div>
                                </div>
                                <div style={{ width: 350 }}>
                                    <div className="border border-gray-400 bg-white rounded p-4">
                                        <p className="m-0">{oval}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full max-w-lg flex-none flex flex-col">
                    <div className="flex-1 p-10 overflow-y-scroll">
                        <div className="text-3xl mb-5">Our role model – NASA</div>
                        <p className="mb-5">
                            Most people associate the Apollo program with the Apollo 11 mission, which landed the first humans on the moon,
                            and brought them back safely. This was only the visible result of what they accomplished and set out to do, NASA
                            during the Apollo era was much more than this. Similarly At oval.bio, we see the life extension pod being as
                            impactful to society and want people to directly associated life extension pods with us, while simultaneously
                            being much more than that.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BuiltForChange;
