import React, { useState } from "react";
import Truncate from "react-truncate";

function KeyBenefitsSection({ data }) {
    const [showOverlay, setShowOverlay] = useState(false);
    const [chosenDisplay, setChosenDisplay] = useState(0);

    const overlayDisplay = (key) => {
        // get numeric distance between chosenImage
        const distance = Math.abs(chosenDisplay - key) * 100;

        if (key < chosenDisplay) {
            return `calc(-${distance}% - 25px)`;
        } else if (key > chosenDisplay) {
            return `calc(${distance}% + 25px)`;
        } else {
            return "0";
        }
    };

    const next = () => {
        if (chosenDisplay < data.benefits.length - 1) {
            setChosenDisplay(chosenDisplay + 1);
        }
    };

    const prev = () => {
        if (chosenDisplay > 0) {
            setChosenDisplay(chosenDisplay - 1);
        }
    };

    return (
        <div className="content-box">
            <div className="max-w-lg mx-auto mb-10">
                <h1 className="subtitle text-center mb-2">Key Benefits</h1>
                <p className="text-xl text-center">
                    Check out our quick tid-bits about this product. Click on a Key Benefit to see more details
                </p>
            </div>
            <div className="max-w-6xl mx-auto mb-10">
                <div className="flex flex-wrap -m-2">
                    {data.benefits.map((benefit, i) => (
                        <div key={i} className="w-1/3 p-2">
                            <div
                                className="nmr-info-block-trigger content flex relative rounded overflow-hidden w-full h-full bg-gray-100 hover:bg-gray-200 border border-gray-400 shadow cursor-pointer"
                                onClick={() => {
                                    setShowOverlay(true);
                                    setChosenDisplay(i);
                                }}
                            >
                                <div className="flex-1 p-5">
                                    <div className="text-2xl mb-2">{benefit.title.replace(/(<([^>]+)>)/gi, "")}</div>
                                    <div className="text-base">
                                        <Truncate lines={2} ellipsis="...">
                                            {benefit.summary.replace(/(<([^>]+)>)/gi, "")}
                                        </Truncate>
                                    </div>
                                </div>
                                <div className="w-24 flex-none relative">
                                    <div
                                        className="absolute top-0 right-0 h-32 w-32 rounded-full overflow-hidden bg-ovalGreen"
                                        style={{ transform: "translate(25%, -25%)" }}
                                    >
                                        <div
                                            className="bg-gray-200 h-64 lg:h-full bg-cover bg-center bg-no-repeat"
                                            style={{ backgroundImage: "url(" + benefit.images.url + ")" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="meta mt-10 max-w-3xl mx-auto">
                <div className="tab-content text-lg" dangerouslySetInnerHTML={{ __html: data.description }} />
            </div>

            <div
                className={"nmr-info-gallery-box overlay fixed top-0 left-0 h-full w-full z-50 flex items-center justify-center"}
                style={{
                    transitionDuration: "300ms",
                    opacity: showOverlay ? 1 : 0,
                    visibility: showOverlay ? "visible" : "hidden",
                }}
            >
                <div
                    className="background absolute top-0 left-0 w-full h-full z-0 bg-gray-900 opacity-75"
                    onClick={() => setShowOverlay(false)}
                ></div>
                {data.benefits.map((benefit, i) => (
                    <div
                        key={i}
                        className="nmr-info-block shadow-xl absolute w-full max-w-xl rounded overflow-hidden bg-white p-8 pb-32 cursor-pointer"
                        style={{
                            transitionDuration: "500ms",
                            transform: `translateX(${overlayDisplay(i)}) translateY(${chosenDisplay === i ? -5 : 0}px) scale(${
                                chosenDisplay === i ? 1 : 0.9
                            })`,
                        }}
                        onClick={() => setChosenDisplay(i)}
                    >
                        <div
                            className="absolute bottom-0 right-0 h-64 w-64 opacity-50 overflow-hidden rounded-full"
                            style={{ transform: "translate(-10%, 60%)" }}
                        >
                            <div
                                className="h-64 lg:h-full bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: "url(" + benefit.images.url + ")" }}
                            ></div>
                        </div>
                        <h1 className="text-2xl mb-5">{benefit.title}</h1>
                        <hr className="mb-5" />
                        <div dangerouslySetInnerHTML={{ __html: benefit.summary }}></div>
                    </div>
                ))}

                {/* controls */}
                <div className="flex items-center justify-center -mx-1 absolute bottom-0" style={{ transform: "translateY(-150px)" }}>
                    <div
                        onClick={prev}
                        className={
                            "label-text cursor-pointer text-ovalGreenDark hover:text-white text-xs px-1 mr-2 " +
                            (chosenDisplay === 0 && "invisible")
                        }
                    >
                        <i className="fas fa-caret-left mr-2"></i> Prev
                    </div>
                    {data.benefits.map((benefit, i) => {
                        return (
                            <div key={i} className="px-1">
                                <div className={"h-2 w-2 " + (i === chosenDisplay ? "bg-ovalGreenDark" : "bg-gray-500")}></div>
                            </div>
                        );
                    })}
                    <div
                        onClick={next}
                        className={
                            "label-text cursor-pointer text-ovalGreenDark hover:text-white text-xs px-1 ml-2 " +
                            (chosenDisplay === data.benefits.length - 1 && "invisible")
                        }
                    >
                        Next <i className="fas fa-caret-right ml-2"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KeyBenefitsSection;
