import React, { useEffect, useRef } from "react";
import G6 from "@antv/g6";

const renderCanvas = (label, bgColor) => {
    const canvas = useRef(null);

    const data = {
        // The array of nodes
        nodes: [
            { id: "node0", size: 60 },
            { id: "node1", size: 40 },
            { id: "node2", size: 40 },
            { id: "node3", size: 40 },
            { id: "node4", size: 40, isLeaf: true },
            { id: "node5", size: 40, isLeaf: true },
            { id: "node6", size: 15, isLeaf: true },
            { id: "node7", size: 15, isLeaf: true },
            { id: "node8", size: 15, isLeaf: true },
            { id: "node9", size: 15, isLeaf: true },
            { id: "node10", size: 15, isLeaf: true },
            { id: "node11", size: 15, isLeaf: true },
            { id: "node12", size: 15, isLeaf: true },
        ],
        edges: [
            { source: "node0", target: "node1" },
            { source: "node0", target: "node2" },
            { source: "node0", target: "node3" },
            { source: "node0", target: "node4" },
            { source: "node0", target: "node5" },
            { source: "node1", target: "node6" },
            { source: "node1", target: "node7" },
            { source: "node2", target: "node8" },
            { source: "node2", target: "node9" },
            { source: "node2", target: "node10" },
            { source: "node2", target: "node11" },
            { source: "node2", target: "node12" },
            { source: "node2", target: "node13" },
            { source: "node3", target: "node14" },
            { source: "node3", target: "node15" },
            { source: "node3", target: "node16" },
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
                preventOverlap: true,
                linkDistance: (d) => {
                    if (d.source.id === "node0") {
                        return 100;
                    }
                    return 40;
                },
                nodeStrength: (d) => {
                    if (d.isLeaf) {
                        return -50;
                    }
                    return -10;
                },
                edgeStrength: (d) => {
                    if (d.source.id === "node1" || d.source.id === "node2" || d.source.id === "node3") {
                        return 0.7;
                    }
                    return 0.1;
                },
            },
            defaultNode: {
                color: "#5B8FF9",
                style: {
                    lineWidth: 2,
                    fill: "#C6E5FF",
                },
            },
            defaultEdge: {
                size: 1,
                color: "#e2e2e2",
            },
        });

        graph.data(data);
        graph.render();
    }, [canvas]);

    return (
        <div className={"flex-1 relative flex items-center justify-center " + (bgColor || "bg-gray-200")}>
            <div className="absolute h-full w-full top-0 left-0" ref={canvas}></div>
            {label && (
                <div className="label absolute top-0 left-0">
                    <div className="label-text">{label}</div>
                </div>
            )}
        </div>
    );
};

function BuiltForChange() {
    return (
        <section className="h-screen overflow-hidden">
            <div className="h-full flex">
                {renderCanvas("NASA", "bg-indigo-100")}
                {renderCanvas("OVAL.BIO", "bg-teal-100")}
                <div className="w-full max-w-lg flex-none flex flex-col">
                    <div className="flex-1 p-10 overflow-y-scroll">
                        <div className="text-3xl mb-5">Built for change.</div>
                        <p className="text-sm mb-5">
                            The NASA Apollo program is our role model. Most people associate the Apollo program with the Apollo 11 mission,
                            which landed the first humans on the moon, and brought them back safely.
                        </p>
                        <p className="text-sm mb-2">The Apollo program had the following goals:</p>
                        <ol className="text-sm mb-10 list-decimal pl-4">
                            <li className="mb-1">Establishing the technology to meet other national interests in space.</li>
                            <li className="mb-1">Achieving preeminence in space for the United States.</li>
                            <li className="mb-1">Carrying out a program of scientific exploration of the Moon.</li>
                            <li className="mb-1">Developing human capability to work in the lunar environment.</li>
                        </ol>
                        <p className="text-sm mb-2">
                            At oval.bio, we want people to associate life extension pods with us. We’ll achieve that through the following
                            company initiatives:
                        </p>
                        <ol className="text-sm list-decimal pl-4 mb-5">
                            <li className="mb-1">
                                Create and utilize technologies which can have an impact on functionally extending the human lifespan.
                            </li>
                            <li className="mb-1">Give transparent access to these technologies to as many humans as possible.</li>
                            <li className="mb-1">
                                Test and quantify efficacy recognizing that not all people respond the same to the same technology.
                            </li>
                            <li className="mb-1">Stay true to the mission.</li>
                        </ol>
                        <div className="bg-ovalGreen flex-none p-10">
                            <p>
                                Just as NASA used the mission of getting humans to the moon and returning them as their core, we have our
                                mission. NASA used the Saturn rockets as the main vehicle to achieve that, our rocket equivalent is the pod.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BuiltForChange;
