import React, { useState } from "react";

function PodIntro() {
    return (
        <section className="section h-screen overflow-hidden">
            <div className="h-full flex flex-col">
                <div className="flex-1 bg-gray-200 relative flex items-center justify-center">
                    <h1 className="text-5xl">Pod Render</h1>
                    <div className="label absolute bottom-0 left-0">
                        <div className="label-text">Pod Render</div>
                    </div>
                </div>
                <div className="flex-none">
                    <div className="container flex py-5 items-center flex-wrap">
                        <div className="flex-1 flex items-center">
                            <div className="w-full max-w-xl p-8">
                                <div className="text-3xl">What exactly is the pod?</div>
                                <p>
                                    The pod is the integration of several therapies and diagnostics
                                    tools that measure the effects of the therapies to build a
                                    profile of the user. This helps us learn their stresses and
                                    positive life choices, recognize early warning signs, learn what
                                    choices impact their health and better tailor the life-extension
                                    therapies to the user.{" "}
                                </p>
                                <p className="mt-5">
                                    <a className="button">Hello</a>
                                    <a href="#" className="button">
                                        Goodbye
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="flex-none bg-ovalGreen">
                            <div className="w-full max-w-lg p-8">
                                <p className="label-text text-sm mb-2">Note:</p>
                                <p>
                                    There is no silver bullet for life extension, instead it will
                                    require an orchestra of technologies working in concert to
                                    achieve the desired result. We want to be the conductor in this
                                    symphony. Our baton to achieve this is the life extension pod.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PodIntro;
