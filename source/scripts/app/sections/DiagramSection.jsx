import React from "react";

function DiagramSection() {
    return (
        <section className="section h-screen overflow-hidden">
            <div className="h-full flex flex-wrap md:flex-no-wrap relative">
                <div className="flex-1 flex flex-col items-center justify-center relative bg-gray-200">
                    <div className="w-full max-w-xl sm:relative mx-auto">
                        <div className="" style={{ paddingTop: "100%" }}></div>
                        <div
                            className="w-full max-w-2xs xl:max-w-xs absolute z-20"
                            style={{ top: "50%", left: "50%", transform: "translate(-50%,-90%)" }}
                        >
                            <div
                                className="absolute label-text text-sm"
                                style={{
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                }}
                            >
                                Transparency
                            </div>
                            <div
                                className="rounded-full bg-ovalGreen shadow-xl"
                                style={{ paddingTop: "100%" }}
                            ></div>
                        </div>
                        <div
                            className="w-full max-w-2xs xl:max-w-xs absolute z-0 hover:z-20"
                            style={{ top: "50%", left: "50%", transform: "translate(-10%, -20%)" }}
                        >
                            <div
                                className="absolute label-text text-sm"
                                style={{
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                }}
                            >
                                Modularity
                            </div>
                            <div
                                className="cursor-pointer rounded-full bg-gray-500 opacity-25 hover:opacity-100"
                                style={{ paddingTop: "100%" }}
                            ></div>
                        </div>
                        <div
                            className="w-full max-w-2xs xl:max-w-xs absolute z-0 hover:z-20"
                            style={{ top: "50%", left: "50%", transform: "translate(-90%,-20%)" }}
                        >
                            <div
                                className="absolute label-text text-sm"
                                style={{
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                }}
                            >
                                Access
                            </div>
                            <div
                                className="cursor-pointer rounded-full bg-gray-500 opacity-25 hover:opacity-100"
                                style={{ paddingTop: "100%" }}
                            ></div>
                        </div>
                    </div>
                    <div className="max-w-lg mt-2 mx-auto">
                        We want to be the most transparent company in the world and we will do that
                        through practicing clarity, embracing vulnerability to achieve the ability
                        to regulate ourselves.
                    </div>
                </div>
                <div className="w-full max-w-lg flex-none">
                    <div className="px-10 py-16 overflow-y-scroll">
                        <h2 className="text-3xl mb-2">Everything we do, we believe in.</h2>
                        <section className="accordion-box " style={{ columnCount: 1 }}>
                            <div className="accordion accordion-small">
                                <div className="accordion-item accordion-item-has-icon">
                                    <div className="accordion-item-header">
                                        <div className="accordion-item-question">
                                            <div className="accordion-item-icon">
                                                <i className="fas fa-plus-circle"></i>
                                            </div>
                                            Trust and Vulnerability
                                        </div>
                                    </div>
                                    <div className="accordion-item-content">
                                        <p className="accordion-item-answer">
                                            This endeavor is not meant to be about any individual or
                                            resource guarding through patents and copyright.. It Is
                                            about letting anyone audit our technology, our business
                                            practices and benefit from our data. Revealing our
                                            suppliers and partners is meant to allow others to know
                                            honestly how they can achieve what we have
                                        </p>
                                    </div>
                                </div>
                                <div className="accordion-item accordion-item-has-icon">
                                    <div className="accordion-item-header">
                                        <div className="accordion-item-question">
                                            <div className="accordion-item-icon">
                                                <i className="fas fa-plus-circle"></i>
                                            </div>
                                            Trust and Vulnerability
                                        </div>
                                    </div>
                                    <div className="accordion-item-content">
                                        <p className="accordion-item-answer">
                                            This endeavor is not meant to be about any individual or
                                            resource guarding through patents and copyright.. It Is
                                            about letting anyone audit our technology, our business
                                            practices and benefit from our data. Revealing our
                                            suppliers and partners is meant to allow others to know
                                            honestly how they can achieve what we have
                                        </p>
                                    </div>
                                </div>
                                <div className="accordion-item accordion-item-has-icon">
                                    <div className="accordion-item-header">
                                        <div className="accordion-item-question">
                                            <div className="accordion-item-icon">
                                                <i className="fas fa-plus-circle"></i>
                                            </div>
                                            Trust and Vulnerability
                                        </div>
                                    </div>
                                    <div className="accordion-item-content">
                                        <p className="accordion-item-answer">
                                            This endeavor is not meant to be about any individual or
                                            resource guarding through patents and copyright.. It Is
                                            about letting anyone audit our technology, our business
                                            practices and benefit from our data. Revealing our
                                            suppliers and partners is meant to allow others to know
                                            honestly how they can achieve what we have
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DiagramSection;
