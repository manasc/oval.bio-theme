import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import useWindowSize from "../hooks/useWindowSize";

function PodIntro() {
    const canvas = useRef(null);
    const windowSize = useWindowSize();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            canvas.current.clientWidth / canvas.current.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 6;
        // camera.position.x = 20;

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

        // controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.addEventListener("change", () => renderer.render(scene, camera));
        controls.minDistance = 2;
        controls.maxDistance = 10;
        controls.target.set(0, 0, -0.2);
        controls.update();
    }, []);

    return (
        <section className="section h-screen overflow-hidden">
            <div className="h-full w-full bg-gray-200 relative">
                <div
                    id="podIntroThrees"
                    className="absolute h-full w-full top-0 left-0"
                    ref={canvas}
                ></div>
                <div className="label absolute bottom-0 left-0">
                    <div className="label-text">Pod Render</div>
                </div>
                <div className="absolute top-0 left-0 p-5">
                    <div className="w-full max-w-lg p-8">
                        <div className="text-3xl">What exactly is the pod?</div>
                        <p>
                            The pod is the integration of several therapies and diagnostics tools
                            that measure the effects of the therapies to build a profile of the
                            user. This helps us learn their stresses and positive life choices,
                            recognize early warning signs, learn what choices impact their health
                            and better tailor the life-extension therapies to the user.{" "}
                        </p>
                        {/* <p className="mt-5">
                            <a className="button mr-2">Hello</a>
                            <a href="#" className="button">
                                Goodbye
                            </a>
                        </p> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PodIntro;
