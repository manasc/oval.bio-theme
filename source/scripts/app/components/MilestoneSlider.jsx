import React, { useState } from "react";

import { Slider } from "@fluentui/react";
import NumberFormat from "react-number-format";

function MilestoneSlider(props) {
    const [inputValue, setInputValue] = useState(0);
    const [value1, setValue1] = useState(25);
    const [value2, setValue2] = useState(10);
    const [value3, setValue3] = useState(100);

    const calcVal = (sliderVal) => {
        const defaultVal1 = 25;
        const defaultVal2 = 10;
        const defaultVal3 = 100;

        let val1 = 0;
        let val2 = 0;
        let val3 = 0;

        switch (true) {
            case sliderVal === 0:
                val1 = defaultVal1;
                val2 = defaultVal2;
                val3 = defaultVal3;
                break;
            case sliderVal < 50:
                val1 = defaultVal1 + sliderVal * 1.0625;
                val2 = defaultVal2 + sliderVal;
                val3 = sliderVal * 0.25;
                break;
            case sliderVal < 75:
                val1 = defaultVal1 + sliderVal * 1.005;
                val2 = defaultVal2 + sliderVal;
                val3 = sliderVal * 0.5;
                break;
            case sliderVal < 100:
            default:
                val1 = defaultVal1 + sliderVal * 1.00025;
                val2 = defaultVal2 + sliderVal;
                val3 = sliderVal * 0.1;
                break;
        }

        setValue1(val1 < 100 ? Math.floor(val1) : 100);
        setValue2(val2 < 100 ? Math.floor(val2) : 100);
        setValue3(val3 < 100 ? Math.floor(val3) : 100);
    };

    return (
        <div className="h-full w-full bg-gray-200 flex items-center justify-center">
            <div className="container">
                <div className="flex -mx-4">
                    <div className="flex-1">
                        <div className="w-full px-4 max-w-md">
                            <p className="font-bold">Milestones</p>
                            <p>
                                We have our milestones laid for the next few years. Move the slider
                                below to see how you can be rewarded for being an early-adopter.
                            </p>

                            <h2 className="text-4xl mt-10">
                                <NumberFormat
                                    value={Math.floor(Math.pow(inputValue, 3.5))}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                            </h2>
                        </div>
                    </div>
                    <div className="flex-none px-4 max-w-5xl w-full mb-4">
                        <div className="bg-gray-400 rounded w-full mb-3 overflow-hidden">
                            <div
                                className="h-12 bg-ovalGreen relative"
                                style={{
                                    width: value1 + "%",
                                    transitionDuration: "200ms",
                                }}
                            >
                                <div
                                    className="absolute right-0"
                                    style={{ top: "50%", transform: "translate(-50%, -50%)" }}
                                >
                                    {value1 + "%"}
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-400 rounded w-full mb-10 overflow-hidden">
                            <div
                                className="h-24 bg-ovalGreen relative"
                                style={{
                                    width: value2 + "%",
                                    transitionDuration: "200ms",
                                }}
                            >
                                <div
                                    className="absolute right-0"
                                    style={{ top: "50%", transform: "translate(-50%, -50%)" }}
                                >
                                    {value2 + "%"}
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-400 rounded w-full mb-3 overflow-hidden">
                            <div
                                className="h-6 bg-ovalGreen relative"
                                style={{
                                    width: value3 + "%",
                                    transitionDuration: "200ms",
                                }}
                            >
                                <div
                                    className="absolute right-0"
                                    style={{ top: "50%", transform: "translate(-50%, -50%)" }}
                                >
                                    {value3 + "%"}
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="max-w-lg">
                                <Slider
                                    label="Your Investment"
                                    min={0}
                                    max={100}
                                    value={inputValue}
                                    onChange={(value) => {
                                        setInputValue(value);
                                        calcVal(value);
                                    }}
                                    // showValue
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MilestoneSlider;
