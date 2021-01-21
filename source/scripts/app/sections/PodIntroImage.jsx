import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import useWindowSize from "../hooks/useWindowSize";

function PodIntro() {
    const bgImage = "/wp-content/themes/oval.bio/source/images/pod/pod2.jpg";

    return (
        <section className="h-screen overflow-hidden">
            <div className="h-full w-full bg-gray-200 relative">
                <div
                    id="podIntroThrees"
                    className="absolute h-full w-full top-0 left-0 bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${bgImage})` }}
                ></div>
                <div className="label absolute bottom-0 left-0">
                    <div className="label-text">Pod Render</div>
                </div>
                <div className="absolute top-0 left-0 p-5">
                    <div className="w-full max-w-lg p-8">
                        <div className="text-3xl">What exactly is the pod?</div>
                        <p>
                            The pod is the integration of several <strong>therapies</strong> and <strong>diagnostics tools</strong>
                            that measure the effects of the therapies to build a profile of the user. This helps us learn their stresses and
                            positive life choices, recognize early warning signs, learn what choices impact their health and better tailor
                            the <strong>life-extension therapies</strong> to the user.{" "}
                        </p>
                        <div className="mt-5 bg-ovalGreen">
                            <div className="w-full max-w-lg p-5 text-base">
                                <p>
                                    There is no silver bullet for life extension, instead it will require an orchestra of technologies
                                    working in concert to achieve the desired result. We want to be the conductor in this symphony. Our
                                    baton to achieve this is the life extension pod.
                                </p>
                                <p className="mt-3">
                                    <span className="label-text text-sm">Mike Kiamanesh</span>
                                </p>
                            </div>
                        </div>
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
