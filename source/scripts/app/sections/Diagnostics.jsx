import React, { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import useWindowSize from "../hooks/useWindowSize";

function FivePillars() {
    const canvas = useRef(null);
    const windowSize = useWindowSize();

    const therapeutics = {
        current: {
            title: "Current",
            items: [
                {
                    title: "Blood Pressure Sensor",
                    description:
                        "Cupiditate mollitia eum est ut explicabo necessitatibus. Possimus qui et porro nulla. Beatae ut magnam et labore et exercitationem incidunt alias. Veniam impedit facilis qui consequatur rerum quidem deserunt. Consequatur vero quos ipsam.",
                    marker: [32, 59],
                    link: {
                        text: "",
                        url: "",
                    },
                },
                {
                    title: "Pulse Oximeter Sensor",
                    description:
                        "Cupiditate mollitia eum est ut explicabo necessitatibus. Possimus qui et porro nulla. Beatae ut magnam et labore et exercitationem incidunt alias. Veniam impedit facilis qui consequatur rerum quidem deserunt. Consequatur vero quos ipsam.",
                    marker: [85, 25],
                    link: {
                        text: "",
                        url: "",
                    },
                },
                {
                    title: "Impedance Sensor",
                    description:
                        "Cupiditate mollitia eum est ut explicabo necessitatibus. Possimus qui et porro nulla. Beatae ut magnam et labore et exercitationem incidunt alias. Veniam impedit facilis qui consequatur rerum quidem deserunt. Consequatur vero quos ipsam.",
                    marker: [64, 12],
                    link: {
                        text: "",
                        url: "",
                    },
                },
                {
                    title: "Spirometer",
                    description:
                        "Cupiditate mollitia eum est ut explicabo necessitatibus. Possimus qui et porro nulla. Beatae ut magnam et labore et exercitationem incidunt alias. Veniam impedit facilis qui consequatur rerum quidem deserunt. Consequatur vero quos ipsam.",
                    marker: [53, 41],
                    link: {
                        text: "",
                        url: "",
                    },
                },
                {
                    title: "CO2 PPM",
                    description:
                        "Cupiditate mollitia eum est ut explicabo necessitatibus. Possimus qui et porro nulla. Beatae ut magnam et labore et exercitationem incidunt alias. Veniam impedit facilis qui consequatur rerum quidem deserunt. Consequatur vero quos ipsam.",
                    marker: [78, 31],
                    link: {
                        text: "",
                        url: "",
                    },
                },
            ],
        },
        upcoming: {
            title: "Upcoming",
            items: [
                {
                    title: "Weight Scale",
                    description:
                        "Cupiditate mollitia eum est ut explicabo necessitatibus. Possimus qui et porro nulla. Beatae ut magnam et labore et exercitationem incidunt alias. Veniam impedit facilis qui consequatur rerum quidem deserunt. Consequatur vero quos ipsam.",
                    marker: [76, 17],
                    link: {
                        text: "",
                        url: "",
                    },
                },
                {
                    title: "3D Body Scan",
                    description:
                        "Cupiditate mollitia eum est ut explicabo necessitatibus. Possimus qui et porro nulla. Beatae ut magnam et labore et exercitationem incidunt alias. Veniam impedit facilis qui consequatur rerum quidem deserunt. Consequatur vero quos ipsam.",
                    marker: [15, 48],
                    link: {
                        text: "",
                        url: "",
                    },
                },
                {
                    title: "Hydrostatic Weighing",
                    description:
                        "Cupiditate mollitia eum est ut explicabo necessitatibus. Possimus qui et porro nulla. Beatae ut magnam et labore et exercitationem incidunt alias. Veniam impedit facilis qui consequatur rerum quidem deserunt. Consequatur vero quos ipsam.",
                    marker: [6, 53],
                    link: {
                        text: "",
                        url: "",
                    },
                },
                {
                    title: "Thermal Camera",
                    description:
                        "Cupiditate mollitia eum est ut explicabo necessitatibus. Possimus qui et porro nulla. Beatae ut magnam et labore et exercitationem incidunt alias. Veniam impedit facilis qui consequatur rerum quidem deserunt. Consequatur vero quos ipsam.",
                    marker: [64, 58],
                    link: {
                        text: "",
                        url: "",
                    },
                },
                {
                    title: "Collagen Sensor",
                    description:
                        "Cupiditate mollitia eum est ut explicabo necessitatibus. Possimus qui et porro nulla. Beatae ut magnam et labore et exercitationem incidunt alias. Veniam impedit facilis qui consequatur rerum quidem deserunt. Consequatur vero quos ipsam.",
                    marker: [13, 55],
                    link: {
                        text: "",
                        url: "",
                    },
                },
                {
                    title: "Infrared Temp Sensor",
                    description:
                        "Cupiditate mollitia eum est ut explicabo necessitatibus. Possimus qui et porro nulla. Beatae ut magnam et labore et exercitationem incidunt alias. Veniam impedit facilis qui consequatur rerum quidem deserunt. Consequatur vero quos ipsam.",
                    marker: [51, 68],
                    link: {
                        text: "",
                        url: "",
                    },
                },
                {
                    title: "Impedance Pneumography",
                    description:
                        "Cupiditate mollitia eum est ut explicabo necessitatibus. Possimus qui et porro nulla. Beatae ut magnam et labore et exercitationem incidunt alias. Veniam impedit facilis qui consequatur rerum quidem deserunt. Consequatur vero quos ipsam.",
                    marker: [48, 38],
                    link: {
                        text: "",
                        url: "",
                    },
                },
                {
                    title: "ECG Electrocardiogram",
                    description:
                        "Cupiditate mollitia eum est ut explicabo necessitatibus. Possimus qui et porro nulla. Beatae ut magnam et labore et exercitationem incidunt alias. Veniam impedit facilis qui consequatur rerum quidem deserunt. Consequatur vero quos ipsam.",
                    marker: [48, 54],
                    link: {
                        text: "",
                        url: "",
                    },
                },
                {
                    title: "Hydration Sensor",
                    description:
                        "Cupiditate mollitia eum est ut explicabo necessitatibus. Possimus qui et porro nulla. Beatae ut magnam et labore et exercitationem incidunt alias. Veniam impedit facilis qui consequatur rerum quidem deserunt. Consequatur vero quos ipsam.",
                    marker: [59, 2],
                    link: {
                        text: "",
                        url: "",
                    },
                },
                {
                    title: "Hydration Sensor",
                    description:
                        "Cupiditate mollitia eum est ut explicabo necessitatibus. Possimus qui et porro nulla. Beatae ut magnam et labore et exercitationem incidunt alias. Veniam impedit facilis qui consequatur rerum quidem deserunt. Consequatur vero quos ipsam.",
                    marker: [94, 33],
                    link: {
                        text: "",
                        url: "",
                    },
                },
                {
                    title: "Galvanic Skin Response Sensor",
                    description:
                        "Cupiditate mollitia eum est ut explicabo necessitatibus. Possimus qui et porro nulla. Beatae ut magnam et labore et exercitationem incidunt alias. Veniam impedit facilis qui consequatur rerum quidem deserunt. Consequatur vero quos ipsam.",
                    marker: [28, 30],
                    link: {
                        text: "",
                        url: "",
                    },
                },
            ],
        },
    };

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            canvas.current.clientWidth / canvas.current.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 2;
        camera.position.x = 3;
        camera.position.y = 2;
        camera.lookAt(0, 0);

        const hemiLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 50);
        scene.add(hemiLight);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.physicallyCorrectLights = true;
        renderer.outputEncoding = THREE.sRGBEncoding;
        // renderer.setClearColor(0xcccccc);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(canvas.current.clientWidth, canvas.current.clientHeight);
        canvas.current.appendChild(renderer.domElement);

        // add object
        // const geometry = new THREE.BoxGeometry();
        // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        // const cube = new THREE.Mesh(geometry, material);
        // scene.add(cube);

        const loader = new GLTFLoader();
        loader.load(
            "https://dev.oval.bio/wp-content/themes/ob10/source/renders/datsun/scene.gltf",
            function (gltf) {
                const box = new THREE.Box3().setFromObject(gltf.scene);
                const center = box.getCenter(new THREE.Vector3());

                gltf.scene.position.x += gltf.scene.position.x - center.x;
                gltf.scene.position.y += gltf.scene.position.y - center.y;
                gltf.scene.position.z += gltf.scene.position.z - center.z;

                scene.add(gltf.scene);
                renderer.render(scene, camera);
            },
            function (xhr) {
                console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
            },
            function (err) {
                console.log(err);
            }
        );
    }, []);

    return (
        <section className="flex relative w-screen h-full overflow-hidden">
            <div className="px-10 py-16 w-1/4">
                <div className="mb-5">
                    <h1 className="text-3xl">Diagnostics</h1>
                </div>
                <div className="accordion accordion-small h-full">
                    {Object.keys(therapeutics).map((label, i) => {
                        const therapeutic = therapeutics[label];
                        return (
                            <div key={i} className="mb-5">
                                <div className="label-text text-xs text-gray-600 mb-2">
                                    {therapeutic.title}{" "}
                                    <a href="#">
                                        <i className="ml-1 fas fa-question-circle"></i>
                                    </a>
                                </div>

                                <div className="w-full">
                                    {therapeutic.items.map((therapeuticItem, i) => (
                                        <div
                                            key={i}
                                            className="accordion-item cursor-pointer w-full"
                                        >
                                            <div className="accordion-item-header">
                                                <h6 className="font-medium">
                                                    {therapeuticItem.title}{" "}
                                                </h6>
                                            </div>
                                            <div className="accordion-item-content">
                                                <div className="accordion-item-answer">
                                                    <p>{therapeuticItem.description} </p>
                                                    <a
                                                        className="mt-4 inline-block text-ovalGreenDark label-text text-xs"
                                                        href=""
                                                    >
                                                        Read More{" "}
                                                        <i className="ml-1 fas fa-caret-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="w-3/4">
                <div className="bg-gray-400 relative w-full h-full">
                    <div
                        id="diagnosticsCanvasDisplay"
                        className="absolute top-0 left-0 w-full h-full"
                        ref={canvas}
                    ></div>
                    <div className="annotations">
                        <div className="annotations-label">
                            <div className="annotations-label-text">Pod Render</div>
                        </div>
                        <div
                            className="annotations-image nmr-lazyload"
                            data-bg="<?php echo get_template_directory_uri() ?>/source/images/test/example.png"
                        ></div>
                        {therapeutics.current.items.map((item, i) => (
                            <div
                                key={i}
                                className="annotation-box"
                                style={{ left: item.marker[i] + "%", top: item.marker[i] + "%" }}
                            >
                                <div className="annotation-marker"></div>
                                <div className="annotation-content-box">
                                    <div className="annotation-content">
                                        <div className="annotation-text">{item.title}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {therapeutics.upcoming.items.map((item, i) => (
                            <div
                                key={i}
                                className="annotation-box"
                                style={{ left: item.marker[i] + "%", top: item.marker[i] + "%" }}
                            >
                                <div className="annotation-marker"></div>
                                <div className="annotation-content-box">
                                    <div className="annotation-content">
                                        <div className="annotation-text">{item.title}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FivePillars;
