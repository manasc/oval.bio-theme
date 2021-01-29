import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";

function MilestoneSlider(props) {
    const [inputValue, setInputValue] = useState(100);

    const [investment, setInvestment] = useState(100);
    const delta = 1000;

    const [phase, setPhase] = useState(0);

    const [equity, setEquity] = useState("0%");
    const [shares, setShares] = useState(0);

    const phases = [
        { cap: 10000000, pointsPerDollar: 100 },
        { cap: 5000000, pointsPerDollar: 50 },
        { cap: 5000000, pointsPerDollar: 25 },
        { cap: 5000000, pointsPerDollar: 10 },
        { cap: 10000000, pointsPerDollar: 5 },
        { cap: 5000000, pointsPerDollar: 2 },
        { cap: 5000000, pointsPerDollar: 1 },
        { cap: 5000000, pointsPerDollar: 0.5 },
    ];

    const calcPercentage = (pointsPerDollar, investment, cap) => {
        const points = pointsPerDollar * investment;
        const percentage = ((pointsPerDollar * investment) / cap) * 100;
        return points < cap && percentage > 5 ? percentage + "%" : percentage < 5 ? "5%" : "100%";
    };

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
                                <NumberFormat value={phases[phase].cap} displayType={"text"} thousandSeparator={true} />
                                <div className="text-xs label-text max-w-2xs">Phase {phase + 1} Max Point Cap</div>
                            </h2>
                            <h2 className="text-4xl mt-5">
                                <NumberFormat
                                    value={phases[phase].pointsPerDollar * investment}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    suffix=" pts"
                                />
                                <div className="text-xs label-text max-w-2xs">{phases[phase].pointsPerDollar} Phase Points / Dollar</div>
                            </h2>
                        </div>
                        <div className="w-full max-w-sm mt-10 px-4">
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
                                    <div
                                        onClick={() => setInvestment(parseInt(investment) + delta)}
                                        className="waves-effect cursor-pointer rounded-full mb-1 bg-ovalGreen hover:bg-ovalGreenDark h-5 w-5 overflow-hidden flex items-center justify-center"
                                    >
                                        <i className="fas fa-arrow-up text-white text-xs"></i>
                                    </div>
                                    <div
                                        className="waves-effect cursor-pointer rounded-full bg-ovalGreen hover:bg-ovalGreenDark h-5 w-5 overflow-hidden flex items-center justify-center"
                                        onClick={() => investment > 10 && setInvestment(parseInt(investment) - delta)}
                                    >
                                        <i className="fas fa-arrow-down text-white text-xs"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="text-2xs mt-3 max-w-2xs">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum veritatis odit.
                            </div>
                        </div>
                    </div>
                    <div className="flex-none px-4 max-w-4xl w-full mb-4">
                        {/* equity */}

                        <div className="flex -mx-1 items-end" style={{ height: 500 }}>
                            {phases.map(({ cap, pointsPerDollar }, key) => (
                                <div
                                    key={key}
                                    onMouseOver={() => {
                                        setPhase(key);
                                    }}
                                    className="px-1 flex-1 h-full flex flex-col items-center justify-end cursor-pointer"
                                >
                                    <div
                                        className={
                                            "w-full rounded " +
                                            (calcPercentage(pointsPerDollar, investment, cap) === "100%"
                                                ? "bg-ovalGreenDark"
                                                : "bg-ovalGreen")
                                        }
                                        style={{
                                            height: calcPercentage(pointsPerDollar, investment, cap),
                                            maxHeight: "100%",
                                            transitionDuration: "200ms",
                                        }}
                                    >
                                        <div
                                            className="absolute right-0"
                                            style={{ top: "50%", transform: "translate(calc(100% + 20px), -50%)" }}
                                        >
                                            {equity}
                                        </div>
                                    </div>
                                    <div className="label-text text-xs mt-2">Phase {key + 1}</div>
                                </div>
                            ))}
                        </div>
                        <hr className="divider my-5" />
                        {/* <div className="text-2xs mt-3 mb-5 max-w-xs">
                            Percentage of equity in the company you will get. This is based on 1 billion total shares that will be
                            available.
                        </div>
                        <div className="text-2xs mt-3 max-w-xs">The weight of your points since the beginning of the company.</div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MilestoneSlider;
