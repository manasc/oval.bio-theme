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

// const CustomNode = () => {
//     return
// }

G6.registerNode(
    "dom-node",
    {
        draw: (cfg, group) => {
            return group.addShape("dom", {
                attrs: {
                    width: cfg.size + 20,
                    height: cfg.size + 50,
                    // DOM's html
                    html: `
                        <div style="padding: 10px">
                            <div style="border: solid 1px black; border-radius: 50px; height: ${cfg.size}px; width: ${cfg.size}px; background-image: url(${cfg.image})"></div>
                            <div style="height: 20px; margin-top: 10px; text-align: center">${cfg.label}</div>
                        </div>
                    `,
                },
                draggable: true,
            });
        },
    },
    "single-node"
);

const renderCanvas = (label, bgColor) => {
    const canvas = useRef(null);

    const data = {
        // The array of nodes
        nodes: [
            {
                id: "node0",
                label: "Pod",
                img: "https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg?max_age=31536000",
                size: [200, 200],
                clipCfg: {
                    show: true,
                    type: "circle",
                    r: 100,
                },
            },
            {
                id: "node1",
                label: "Nanoamp Circuit",
                img: "https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg?max_age=31536000",
                size: [100, 100],
                isLeaf: true,
                clipCfg: {
                    show: true,
                    type: "circle",
                    r: 50,
                },
            },
            {
                id: "node2",
                label: "Spirometer",
                img: "https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg?max_age=31536000",
                size: [100, 100],
                isLeaf: true,
                clipCfg: {
                    show: true,
                    type: "circle",
                    r: 50,
                },
            },
            {
                id: "node3",
                label: "Redlight Panel",
                img: "https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg?max_age=31536000",
                size: [100, 100],
                isLeaf: true,
                clipCfg: {
                    show: true,
                    type: "circle",
                    r: 50,
                },
            },
            {
                id: "node4",
                label: "Bactories",
                img: "https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg?max_age=31536000",
                size: [100, 100],
                isLeaf: true,
                clipCfg: {
                    show: true,
                    type: "circle",
                    r: 50,
                },
            },
        ],
        edges: [
            { target: "node1", source: "node0" },
            { target: "node2", source: "node0" },
            { target: "node3", source: "node0" },
            { target: "node4", source: "node0" },
            { target: "node5", source: "node0" },
        ],
    };

    useEffect(() => {
        const graph = new G6.Graph({
            container: canvas.current, // String | HTMLElement, required, the id of DOM element or an HTML node
            width: canvas.current.clientWidth,
            height: canvas.current.clientHeight,
            animate: true,
            // renderer: "svg",
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
                type: "image",
                style: {
                    lineWidth: 2,
                    fill: "#C6E5FF",
                },
                labelCfg: {
                    style: {
                        fontSize: 20,
                        fontWeight: 500,
                    },
                },
            },
            defaultEdge: {
                size: 1,
                color: "#4a5568",
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

const renderCanvas2 = (label, bgColor) => {
    const canvas = useRef(null);

    const data = {
        // The array of nodes
        nodes: [
            {
                id: "node0",
                label: "Apollo",
                img: "https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg?max_age=31536000",
                size: [200, 200],
                clipCfg: {
                    show: true,
                    type: "circle",
                    r: 100,
                },
            },
            {
                id: "node1",
                label: "LED Light",
                img: "https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg?max_age=31536000",
                size: [100, 100],
                isLeaf: true,
                clipCfg: {
                    show: true,
                    type: "circle",
                    r: 50,
                },
            },
            {
                id: "node2",
                label: "Spirometer",
                img: "https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg?max_age=31536000",
                size: [100, 100],
                isLeaf: true,
                clipCfg: {
                    show: true,
                    type: "circle",
                    r: 50,
                },
            },
            {
                id: "node3",
                label: "Pacemaker",
                img: "https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg?max_age=31536000",
                size: [100, 100],
                isLeaf: true,
                clipCfg: {
                    show: true,
                    type: "circle",
                    r: 50,
                },
            },
            {
                id: "node4",
                label: "Bactories",
                img: "https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg?max_age=31536000",
                size: [100, 100],
                isLeaf: true,
                clipCfg: {
                    show: true,
                    type: "circle",
                    r: 50,
                },
            },
        ],
        edges: [
            { target: "node1", source: "node0" },
            { target: "node2", source: "node0" },
            { target: "node3", source: "node0" },
            { target: "node4", source: "node0" },
            { target: "node5", source: "node0" },
        ],
    };

    useEffect(() => {
        const graph = new G6.Graph({
            container: canvas.current, // String | HTMLElement, required, the id of DOM element or an HTML node
            width: canvas.current.clientWidth,
            height: canvas.current.clientHeight,
            animate: true,
            // renderer: "svg",
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
                type: "image",
                style: {
                    lineWidth: 2,
                    fill: "#C6E5FF",
                },
                labelCfg: {
                    style: {
                        fontSize: 20,
                        fontWeight: 500,
                    },
                },
            },
            defaultEdge: {
                size: 1,
                color: "#4a5568",
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
                {renderCanvas2("nasa")}
                {renderCanvas("oval.bio")}
            </div>
        </section>
    );
}

export default SpinoffTechnologies;
