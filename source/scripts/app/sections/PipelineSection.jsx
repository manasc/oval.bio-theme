import React, { useState, useEffect } from "react";
import AccordionItem from "./AccordionItem";

function PipelineSection({ data }) {
    const { phases } = data;
    const [newArr, setNewArr] = useState([]);
    const [currentPhase, setCurrentPhase] = useState(0);

    const labelClass = (key) => {
        let labelClass = "label label-disabled opacity-75 hover:opacity-100";

        if (key < currentPhase) {
            labelClass = "label opacity-50 hover:opacity-100";
        } else if (key === currentPhase) {
            labelClass = "label";
        } else {
            labelClass = "label label-disabled opacity-75 hover:opacity-100";
        }

        return labelClass;
    };

    useEffect(() => {
        const tempNewArr = phases.map((phase, i) => {
            phase.current_phase && setCurrentPhase(i);
            phase["selected"] = false;
            return { ...phase };
        });
        setNewArr(tempNewArr);
        console.log(tempNewArr);
    }, [phases]);

    return (
        <section className="content-box phase-box">
            <h1 className="subtitle text-center">Product Pipeline</h1>
            <div className="wrapper flex items-center py-8 relative">
                {phases.map((phase, i) => (
                    <div key={i} className={"phase w-1/" + phases.length + " border-r border-gray-400"}>
                        <div className="phase-text h-32 relative">
                            <div className={labelClass(i) + " leading-none absolute right-0 bottom-0 cursor-pointer"}>
                                <div
                                    className="phase-view-icon invisible absolute left-0 pr-3 opacity-25"
                                    style={{ top: "50%", transform: "translate(-100%, -50%)" }}
                                >
                                    <i className="fas fa-eye"></i>
                                </div>
                                <span className="label-text">{phase.name}</span>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="phase-full border-b border-gray-400 w-full absolute"></div>
                <div
                    className="phase-current bg-ovalGreen h-2 rounded-r-full absolute"
                    style={{ transitionDuration: "200ms", width: currentPhase > 0 && ((currentPhase + 1) / phases.length) * 100 + "%" }}
                ></div>
            </div>
            <div className="labels my-2">
                <div className="text-xs italic">Click on a phase to see details.</div>
            </div>
            <div className="accordion-box mt-20">
                <div className="accordion">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full md:w-1/2 px-4">
                                <div className="react-accordion-box">
                                    <div className="react-accordion">
                                        {newArr.length > 0 &&
                                            newArr.map(
                                                (phase, i) =>
                                                    i < newArr.length / 2 && (
                                                        <AccordionItem
                                                            key={i}
                                                            defaultOpen={phase.selected}
                                                            title={phase.name}
                                                            description={phase.description}
                                                        />
                                                    )
                                            )}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-4">
                                <div className="react-accordion-box">
                                    <div className="react-accordion">
                                        {newArr.length > 0 &&
                                            newArr.map(
                                                (phase, i) =>
                                                    i >= newArr.length / 2 && (
                                                        <AccordionItem
                                                            key={i}
                                                            defaultOpen={phase.selected}
                                                            title={phase.name}
                                                            description={phase.description}
                                                        />
                                                    )
                                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PipelineSection;
