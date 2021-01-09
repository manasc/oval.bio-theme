import React, { useEffect, useRef } from "react";
import G6 from "@antv/g6";

const renderCanvas = () => {
    const canvas = useRef(null);

    const data = {
        // The array of nodes
        nodes: [
            { id: "ovalBioMission", label: "oval.bio Mission" },
            { id: "extremeTransparency", label: "Extreme Transparency" },
            { id: "lifeExtensionPod", label: "Life Extension Pod" },
            { id: "therapies", label: "Therapies" },
            { id: "diagnostics", label: "Diagnostics" },
            { id: "buildTimeline", label: "Build a total timeline map of the user" },
            { id: "testEfficacy", label: "Test efficacy of treatments" },
            { id: "fullyAuditable", label: "fully auditable at any time by anyone" },
            { id: "selfRegulate", label: "Self regulate" },
            { id: "takeMoney", label: "Take money out of the equation" },
            { id: "equityIs", label: "Equity is free and given away with purchases" },
            { id: "takeMoney", label: "Take money out of the equation" },
            { id: "productsDerived", label: "Products derived from pursuit of building the pod" },
            { id: "totallyOpen", label: "Totally open source, so anyone can replicate or add to" },
            { id: "only1", label: "Only 1 class of share, each worth one 1 vote" },
            { id: "allCustomers", label: "All customers are voting partners" },
            { id: "justFocus", label: "Just focus on the mission" },
            { id: "risingTide", label: "Rising tide IP policy" },
            {
                id: "provideDetailed",
                label: "Provide detailed instructions and create educational component to bring on more contributors",
            },
            { id: "globalEffort", label: "Global effort for global community" },
        ],
        edges: [
            { source: "ovalBioMission", target: "lifeExtensionPod" },
            { source: "ovalBioMission", target: "extremeTransparency" },
            { source: "lifeExtensionPod", target: "therapies" },
            { source: "lifeExtensionPod", target: "diagnostics" },
            { source: "diagnostics", target: "buildTimeline" },
            { source: "diagnostics", target: "testEfficacy" },
            { source: "therapies", target: "buildTimeline" },
            { source: "therapies", target: "testEfficacy" },
            { source: "testEfficacy", target: "fullyAuditable" },
            { source: "extremeTransparency", target: "fullyAuditable" },
            { source: "fullyAuditable", target: "selfRegulate" },
            { source: "takeMoney", target: "selfRegulate" },
            { source: "takeMoney", target: "justFocus" },
            { source: "extremeTransparency", target: "takeMoney" },
            { source: "equityIs", target: "takeMoney" },
            { source: "risingTide", target: "takeMoney" },
            { source: "allCustomers", target: "justFocus" },
            { source: "only1", target: "allCustomers" },
            { source: "equityIs", target: "only1" },
            { source: "productsDerived", target: "equityIs" },
            { source: "lifeExtensionPod", target: "equityIs" },
            { source: "risingTide", target: "justFocus" },
            { source: "globalEffort", target: "justFocus" },
            { source: "risingTide", target: "globalEffort" },
            { source: "provideDetailed", target: "globalEffort" },
            { source: "totallyOpen", target: "provideDetailed" },
            { source: "totallyOpen", target: "risingTide" },
            { source: "productsDerived", target: "totallyOpen" },
            { source: "lifeExtensionPod", target: "totallyOpen" },
            { source: "lifeExtensionPod", target: "totallyOpen" },
            { source: "extremeTransparency", target: "totallyOpen" },
        ],
    };

    useEffect(() => {
        const graph = new G6.Graph({
            container: canvas.current, // String | HTMLElement, required, the id of DOM element or an HTML node
            width: canvas.current.clientWidth,
            height: canvas.current.clientHeight,
            animate: true,
            modes: {
                default: ["drag-canvas", "drag-node"],
                edit: ["click-select"],
            },
            layout: {
                type: "force",
                center: [canvas.current.clientWidth / 2, canvas.current.clientHeight / 2], // The center of the graph by default
                linkDistance: 200, // Edge length
                nodeStrength: 30,
                preventOverlap: true,
            },
            defaultNode: {
                type: "rect",
                color: "#5B8FF9",
                style: {
                    lineWidth: 2,
                    fill: "#C6E5FF",
                },
            },
            defaultEdge: {
                type: "cubic",
                size: 2,
                style: {
                    endArrow: true,
                },
                color: "#38b795",
            },
        });

        graph.data(data);
        graph.render();
    }, [canvas]);

    return (
        <div className="flex-1 bg-gray-200 relative flex items-center justify-center">
            <div className="absolute h-full w-full top-0 left-0" ref={canvas}></div>
            <div className="label absolute bottom-0 left-0">
                <div className="label-text">The 5 Pillars of Longevity</div>
            </div>
        </div>
    );
};

function MiroBoardSection() {
    return (
        <section className="h-screen overflow-hidden">
            <div className="h-full flex flex-col">
                {renderCanvas()}
                <div className="flex-none">
                    <div className="container flex py-5 items-center flex-wrap">
                        <div className="flex-1 flex items-center">
                            <div className="w-full max-w-xl p-8">
                                <div className="text-3xl">Why should people care?</div>
                                <p>
                                    We are making life extension technologies attainable for all who want them. People may fear that as
                                    technology advances and “life extension” becomes attainable, only the rich or privileged will be able to
                                    utilize it. We are dedicated to not let that happen by developing life extension technologies in the
                                    most replicable way possible.
                                </p>
                                {/* <p className="mt-5">
                                    <a className="button mr-1">Hello</a>
                                    <a href="#" className="button">
                                        Goodbye
                                    </a>
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MiroBoardSection;
