import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import { Slider, Tooltip } from "@fluentui/react";

function MilestoneSlider(props) {
    const [inputValue, setInputValue] = useState(100);

    const [investment, setInvestment] = useState(100);

    const [phase, setPhase] = useState(0);

    const [equity, setEquity] = useState("0%");
    const [shares, setShares] = useState(0);
    const [pointPercent, setPointPercent] = useState("100%");

    const [value1, setValue1] = useState(25);
    const [value2, setValue2] = useState(10);
    const [value3, setValue3] = useState(100);

    const totalEquity = 1000000000;

    const phases = [
        { cap: 1250000, points: 60 },
        { cap: 2500000, points: 30 },
        { cap: 5000000, points: 10 },
        { cap: 10000000, points: 5 },
        { cap: 50000000, points: 2 },
        { cap: 100000000, points: 1 },
        { cap: 100000000, points: 0 },
    ];

    const calcPoints = () => {
        // get investment
        // get phase
        setShares(investment * phases[phase].points);
        setEquity(((shares / totalEquity) * 100).toFixed(5) + "%");

        // get point value
        setPointPercent(Math.floor((phases[phase].points / phases[0].points) * 100) + "%");
    };

    useEffect(() => {
        calcPoints();
    }, [phase, investment]);

    return (
        <div className="h-full w-full bg-gray-200 flex items-center justify-center">
            <div className="container">
                <div className="flex -mx-4">
                    <div className="flex-1">
                        <div className="w-full px-4 max-w-md">
                            <p className="font-bold">Milestones</p>
                            <p>
                                We have our milestones laid for the next few years. Move the slider below to see how you can be rewarded for
                                being an early-adopter.
                            </p>

                            <h2 className="text-5xl mt-5">
                                <NumberFormat value={phases[phase].cap} displayType={"text"} thousandSeparator={true} prefix={"$"} />
                                <div className="text-xs label-text max-w-2xs">Phase Cap</div>
                            </h2>
                            <h2 className="text-4xl mt-5">
                                <NumberFormat value={shares} displayType={"text"} thousandSeparator={true} suffix=" points" />
                                <div className="text-xs label-text max-w-2xs">{phases[phase].points} Phase Points / Dollar</div>
                            </h2>
                        </div>
                    </div>
                    <div className="flex-none px-4 max-w-5xl w-full mb-4">
                        {/* equity */}
                        <div className="bg-ovalGreenDark rounded w-full overflow-hidden">
                            <div
                                className="h-24 bg-ovalGreen relative"
                                style={{
                                    width: equity,
                                    maxWidth: "100%",
                                    transitionDuration: "200ms",
                                }}
                            >
                                <div className="absolute right-0" style={{ top: "50%", transform: "translate(calc(100% + 20px), -50%)" }}>
                                    {equity}
                                </div>
                            </div>
                        </div>
                        <div className="text-2xs mt-3 mb-5 max-w-xs">
                            Percentage of equity in the company you will get. This is based on 1 billion total shares that will be
                            available.
                        </div>

                        {/* points weight */}
                        <div className="bg-gray-600 rounded w-full mb-3 overflow-hidden">
                            <div
                                className="h-6 bg-ovalGreen relative"
                                style={{
                                    width: pointPercent,
                                    maxWidth: "100%",
                                    transitionDuration: "200ms",
                                }}
                            >
                                <div className="absolute right-0" style={{ top: "50%", transform: "translate(-50%, -50%)" }}>
                                    {pointPercent}
                                </div>
                            </div>
                        </div>
                        <div className="text-2xs mt-3 max-w-xs">The weight of your points since the beginning of the company.</div>
                        <hr className="divider my-5" />

                        <div className="flex flex-wrap -mx-2">
                            <div className="w-full max-w-sm px-2">
                                <div className="text-sm mb-2 font-bold">Your Investment</div>
                                <div className="flex -mx-1">
                                    <div className="px-1 flex items-center relative">
                                        <div className="text-xl font-normal absolute left-0 pl-4">$</div>
                                        <input
                                            type="number"
                                            className="text-xl bg-transparent border-2 border-gray-500 active:border-ovalGreenDark pl-6 pr-2 rounded h-12"
                                            value={investment}
                                            onChange={(e) => setInvestment(e.target.value)}
                                        />
                                    </div>
                                    <div className="px-1 flex flex-col justify-center">
                                        <Tooltip title="+100" size="small" position="right">
                                            <div
                                                onClick={() => setInvestment(parseInt(investment) + 100)}
                                                className="waves-effect cursor-pointer rounded-full mb-1 bg-ovalGreen hover:bg-ovalGreenDark h-5 w-5 overflow-hidden flex items-center justify-center"
                                            >
                                                <i className="fas fa-arrow-up text-white text-xs"></i>
                                            </div>
                                        </Tooltip>
                                        <Tooltip title="-100" size="small" position="right">
                                            <div
                                                className="waves-effect cursor-pointer rounded-full bg-ovalGreen hover:bg-ovalGreenDark h-5 w-5 overflow-hidden flex items-center justify-center"
                                                onClick={() => investment > 10 && setInvestment(parseInt(investment) - 100)}
                                            >
                                                <i className="fas fa-arrow-down text-white text-xs"></i>
                                            </div>
                                        </Tooltip>
                                    </div>
                                </div>
                                <div className="text-2xs mt-3 max-w-2xs">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum veritatis odit.
                                </div>
                            </div>
                            <div className="w-full max-w-sm px-2">
                                <Slider
                                    className="mb-2"
                                    label={<strong className="text-sm font-brand font-bold">Phase</strong>}
                                    min={1}
                                    step={1}
                                    max={7}
                                    value={phase + 1}
                                    onChange={(value) => setPhase(value - 1)}
                                />
                                <div className="text-2xs max-w-2xs">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum veritatis odit.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MilestoneSlider;
