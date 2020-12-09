import React, { useState, useEffect } from "react";
import AccordionItem from "./AccordionItem";
import { TooltipHost } from "@fluentui/react";

function PipelineSection({ data }) {
    const { phases } = data;
    const [newArr, setNewArr] = useState([]);
    const [currentPhase, setCurrentPhase] = useState(0);
    const [lastChosen, setLastChosen] = useState(currentPhase);

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
    }, [phases]);

    return (
        <section className="content-box phase-box">
            <h1 className="subtitle text-center">Product Pipeline</h1>
            <div className="wrapper flex items-center py-8 relative">
                {phases.map((phase, i) => (
                    <div
                        key={i}
                        onClick={() => {
                            setLastChosen(i);
                            if (i <= currentPhase) {
                                const arr = newArr;

                                arr[i].selected = !arr[i].selected;
                                setNewArr([...arr]);
                            }
                        }}
                        className={"phase w-1/" + phases.length + " border-r border-gray-400"}
                    >
                        <div className="phase-text h-32 relative">
                            <div className={labelClass(i) + " leading-none absolute right-0 bottom-0 cursor-pointer"}>
                                <div
                                    className="phase-view-icon invisible absolute left-0 pr-3 opacity-25"
                                    style={{ top: "50%", transform: "translate(-100%, -50%)" }}
                                >
                                    <i className="fas fa-eye"></i>
                                </div>
                                <TooltipHost content={i > currentPhase ? phase.description : ""}>
                                    <span className="label-text">{phase.name}</span>
                                </TooltipHost>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="phase-full border-b border-gray-400 w-full absolute"></div>
                <div
                    className="phase-current bg-ovalGreen h-2 rounded-r-full absolute"
                    style={{ transitionDuration: "200ms", width: currentPhase > 0 && ((currentPhase + 1) / phases.length) * 100 + "%" }}
                ></div>
                <div
                    className={
                        "phase-current opacity-50 h-2 rounded-r-full absolute " +
                        (lastChosen <= currentPhase ? "bg-gray-600" : "bg-ovalGreenDark")
                    }
                    style={{ transitionDuration: "200ms", width: ((lastChosen + 1) / phases.length) * 100 + "%" }}
                ></div>
            </div>
            <div className="labels my-2">
                <div className="text-xs italic">Click on a phase to see details.</div>
            </div>
            {newArr.length > 0 && (
                <div className="mx-auto mt-20 w-full max-w-2xl px-4">
                    <div className="react-accordion-box">
                        <div className="react-accordion">
                            {newArr.map(
                                (phase, i) =>
                                    i <= currentPhase && (
                                        <AccordionItem
                                            onClick={() => {
                                                setLastChosen(i);
                                                if (i <= currentPhase) {
                                                    const arr = newArr;

                                                    arr[i].selected = !arr[i].selected;
                                                    setNewArr([...arr]);
                                                }
                                            }}
                                            key={i}
                                            open={phase.selected}
                                            title={phase.name}
                                            description={phase.description}
                                        />
                                    )
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default PipelineSection;
