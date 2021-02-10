import React, { useEffect, useState, useRef } from "react";
import Lottie from "react-lottie";

const diagnostics = require("../data/diagnostics.json");

function FivePillars() {
    const [type, setType] = useState("current");
    const [diagnostic, setDiagnostic] = useState(0);
    const stuffAnimation = useRef(null);

    return (
        <section className="flex relative w-screen h-full overflow-hidden">
            <div className="px-10 py-16 w-1/4 flex-none">
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
                                                console.log(label, diagnosticItem.name);
                                                setType(label);
                                                setDiagnostic(i);
                                            }}
                                            className="mb-2 cursor-pointer flex items-center"
                                        >
                                            <h6 className="label-text text-sm">{diagnosticItem.name} </h6>
                                            {type === label && diagnostics[type][diagnostic].name === diagnosticItem.name && (
                                                <span className="ml-2">
                                                    >>
                                                    {/* <i className="fas fa-arrow-right"></i> */}
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
                    <div className="w-full md:w-1/2 px-5">
                        {/* <h1>Hello</h1> */}
                        {/* {diagnostics[type][diagnostic].image || <div>?</div>} */}
                        <div className="w-full block bg-gray-200 rounded-full">
                            {/* <div style={{ paddingTop: "100%" }}></div> */}
                            {stuffAnimation && (
                                <Lottie
                                    ref={stuffAnimation}
                                    options={{
                                        loop: false,
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
                    </div>
                    <div className="w-full md:w-1/2 px-5">
                        <h5 className="label-text text-sm mb-2">Explanation</h5>
                        <p className="text-2xl leading-tight">{diagnostics[type][diagnostic].description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FivePillars;
