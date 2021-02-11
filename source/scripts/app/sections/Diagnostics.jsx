import React, { useEffect, useState, useRef } from "react";
import Lottie from "react-lottie";

const diagnostics = require("../data/diagnostics.json");

function FivePillars() {
    const [type, setType] = useState("current");
    const [diagnostic, setDiagnostic] = useState(0);
    const stuffAnimation = useRef(null);

    return (
        <section className="flex bg-gray-100 relative w-screen overflow-hidden">
            <div className="px-10 py-16 flex-none" style={{ width: 400 }}>
                <div className="mb-5">
                    <h1 className="text-3xl">Diagnostics</h1>
                </div>
                <div className="accordion accordion-small h-full">
                    {Object.keys(diagnostics).map((label, i) => {
                        return (
                            <div key={i} className="mb-5">
                                <div className="label-text text-xs text-gray-600 mb-2">
                                    {label}
                                    {/* <a href="#">
                                        <i className="ml-1 fas fa-question-circle"></i>
                                    </a> */}
                                </div>

                                <div className="w-full">
                                    {diagnostics[label].map((diagnosticItem, i) => (
                                        <div
                                            key={i}
                                            onClick={() => {
                                                setType(label);
                                                setDiagnostic(i);
                                            }}
                                            className="mb-2 cursor-pointer flex items-center h-4"
                                        >
                                            <h6 className="label-text h-4 text-sm flex items-center">{diagnosticItem.name} </h6>
                                            {type === label && diagnostics[type][diagnostic].name === diagnosticItem.name && (
                                                <span className="ml-2 h-4 text-ovalGreen flex items-center">
                                                    <i className="fas fa-caret-right"></i>
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="flex flex-1 pr-10 py-16">
                <div className="flex flex-wrap w-full justify-start -mx-5">
                    <div className="w-full md:w-3/5 px-5">
                        <h5 className="label-text text-sm mb-2">Explanation</h5>
                        <p className="text-2xl leading-snug text-gray-900">{diagnostics[type][diagnostic].description}</p>
                    </div>
                    <div className="w-full md:w-2/5 px-5">
                        <div className="w-full flex items-center justify-center bg-gray-200 rounded-full">
                            {/* <div style={{ paddingTop: "100%" }}></div> */}
                            {stuffAnimation && (
                                <Lottie
                                    ref={stuffAnimation}
                                    options={{
                                        loop: true,
                                        autoplay: true,
                                        animationData: diagnostics[type][diagnostic].image
                                            ? require("../lottie/diagnostics/" + diagnostics[type][diagnostic].image)
                                            : "",
                                    }}
                                    height={"auto"}
                                    width={"100%"}
                                />
                            )}
                        </div>
                        {/* <h1>Hello</h1> */}
                        {/* {diagnostics[type][diagnostic].image || <div>?</div>} */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FivePillars;
