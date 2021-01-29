import React, { useRef, useEffect } from "react";
import G6 from "@antv/g6";

// const items = [

//     {
//         name: "Pacemaker",
//         description: "",
//         size: 32,
//         color: "blue",
//         position: [-100, -100],
//     },
//     {
//         name: "Solar panel",
//         description: "",
//         size: 24,
//         color: "blue",
//         position: [130, -120],
//     },
//     {
//         name: "Oxidation indicator",
//         description: "",
//         size: 32,
//         color: "green",
//         position: [20, 130],
//     },
//     {
//         name: "Spirometer",
//         description: "",
//         size: 32,
//         color: "red",
//         position: [200, -100],
//     },
//     {
//         name: "Red light panel",
//         description: "",
//         size: 48,
//         color: "blue",
//         position: [120, 100],
//     },
//     {
//         name: "Nanoamp and volt sensors",
//         description: "",
//         size: 48,
//         color: "blue",
//         position: [120, 100],
//     },
//     {
//         name: "Bactories",
//         description: "",
//         size: 40,
//         color: "green",
//         position: [-120, 120],
//     },
// ];
// const nasaItems = [
//     {
//         name: "Pacemaker",
//         description: "",
//         size: 32,
//         color: "blue",
//         position: [-100, -100],
//     },
//     {
//         name: "Solar panel",
//         description: "",
//         size: 24,
//         color: "blue",
//         position: [130, -120],
//     },
//     {
//         name: "Oxidation indicator",
//         description: "",
//         size: 32,
//         color: "green",
//         position: [20, 130],
//     },
//     {
//         name: "Spirometer",
//         description: "",
//         size: 32,
//         color: "red",
//         position: [200, -100],
//     },
//     {
//         name: "Red light panel",
//         description: "",
//         size: 48,
//         color: "blue",
//         position: [120, 100],
//     },
//     {
//         name: "Nanoamp and volt sensors",
//         description: "",
//         size: 48,
//         color: "blue",
//         position: [120, 100],
//     },
//     {
//         name: "Bactories",
//         description: "",
//         size: 40,
//         color: "green",
//         position: [-120, 120],
//     },
// ];

const renderCanvas = (label, bgColor) => {
    const canvas = useRef(null);

    const data = {
        // The array of nodes
        nodes: [
            { id: "node0", size: 60 },
            { id: "node1", size: 40, isLeaf: true },
            { id: "node2", size: 40, isLeaf: true },
            { id: "node3", size: 40, isLeaf: true },
            { id: "node4", size: 40, isLeaf: true },
            { id: "node5", size: 40, isLeaf: true },
            { id: "node6", size: 40, isLeaf: true },
            { id: "node7", size: 40, isLeaf: true },
            { id: "node8", size: 40, isLeaf: true },
            { id: "node9", size: 40, isLeaf: true },
            { id: "node10", size: 40, isLeaf: true },
            { id: "node11", size: 40, isLeaf: true },
            { id: "node12", size: 40, isLeaf: true },
        ],
        edges: [
            { target: "node1", source: "node0" },
            { target: "node2", source: "node0" },
            { target: "node3", source: "node0" },
            { target: "node4", source: "node0" },
            { target: "node5", source: "node0" },
            { target: "node6", source: "node0" },
            { target: "node7", source: "node0" },
            { target: "node8", source: "node0" },
            { target: "node9", source: "node0" },
            { target: "node10", source: "node0" },
            { target: "node11", source: "node0" },
            { target: "node12", source: "node0" },
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

function SpinoffTechnologies() {
    return (
        <section className="min-h-screen overflow-hidden">
            <div className="min-h-screen flex">
                <div className="w-full max-w-lg flex-none flex flex-col">
                    <div className="flex-1 p-10 overflow-y-scroll">
                        <div className="text-3xl mb-5">Spinoff Technologies</div>
                        <p className="text-base mb-5">
                            There is a term – NASA spinoff technologies, these are products and services commercialized that utilize
                            something developed at or for NASA. Though we are many orders of magnitude smaller right now and our products
                            nor us have had anywhere as much impact on society, we have also developed multiple technologies, products and
                            even business models in our pursuit of making the life extension pod a reality while staying true to our
                            mission.
                        </p>
                    </div>
                </div>
                {renderCanvas("nasa")}
                {renderCanvas("oval.bio")}
            </div>
        </section>
    );
}

export default SpinoffTechnologies;
