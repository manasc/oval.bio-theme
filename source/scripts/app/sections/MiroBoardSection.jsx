import React, { useEffect, useRef } from "react";
import G6 from "@antv/g6";

const renderCanvas = () => {
    const canvas = useRef(null);

    const data = {
        // The array of nodes
        nodes: [
            { id: "node0", size: 50 },
            { id: "node1", size: 30 },
            { id: "node2", size: 30 },
            { id: "node3", size: 30 },
            { id: "node4", size: 30, isLeaf: true },
            { id: "node5", size: 30, isLeaf: true },
            { id: "node6", size: 15, isLeaf: true },
            { id: "node7", size: 15, isLeaf: true },
            { id: "node8", size: 15, isLeaf: true },
            { id: "node9", size: 15, isLeaf: true },
            { id: "node10", size: 15, isLeaf: true },
            { id: "node11", size: 15, isLeaf: true },
            { id: "node12", size: 15, isLeaf: true },
            { id: "node13", size: 15, isLeaf: true },
            { id: "node14", size: 15, isLeaf: true },
            { id: "node15", size: 15, isLeaf: true },
            { id: "node16", size: 15, isLeaf: true },
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
                    return 30;
                },
                nodeStrength: (d) => {
                    if (d.isLeaf) {
                        return -50;
                    }
                    return -10;
                },
                edgeStrength: (d) => {
                    if (
                        d.source.id === "node1" ||
                        d.source.id === "node2" ||
                        d.source.id === "node3"
                    ) {
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
                                    We are making life extension technologies attainable for all who
                                    want them. People may fear that as technology advances and “life
                                    extension” becomes attainable, only the rich or privileged will
                                    be able to utilize it. We are dedicated to not let that happen
                                    by developing life extension technologies in the most replicable
                                    way possible.
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
