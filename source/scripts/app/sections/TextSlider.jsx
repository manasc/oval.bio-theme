import React, { useState } from "react";

const slides = [
    {
        title: "Mission Statement",
        content:
            "Breaking preconceived notions of what capitalism and free market economics are in the pursuit of providing extensive, ultra-transparent access to functional life extension technology.",
    },
    {
        title: "Vision Statement",
        content:
            "A global syndicate of collaborators working to make life extension technology available for, thus creating a world where more individuals can pursue their ambitions and rising the tide for everyone.",
    },
];

function Slide({ onClick, slidePosition, classNameFunc, currentSlide, slide, index }) {
    return (
        <div
            onClick={onClick}
            className={"cursor-pointer flex-none max-w-xl w-full text-white absolute left-0 top-0 " + classNameFunc(index)}
            style={{
                transitionDuration: "500ms",
                transform: slidePosition(index),
            }}
        >
            <h1 className="text-5xl">{slide.title}</h1>
            <div
                style={{
                    transitionDuration: "300ms",
                    overflow: "hidden",
                    height: index === currentSlide ? "300px" : "1px",
                }}
            >
                <p className="text-xl opacity-50">{slide.content + (index === currentSlide ? "true" : "false")}</p>
            </div>
        </div>
    );
}

function TextSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slidePosition = (i) => {
        let px = 0;
        let py = 0;
        const multiplier = Math.abs(currentSlide - i);
        const negativeSpacing = 50;
        const spacing = 250;

        if (i < currentSlide) {
            px = `calc(-${100 * multiplier}% - ${negativeSpacing * multiplier}px)`;
            py = "40%";
        }

        if (i == currentSlide) {
            px = "0px";
            py = "0px";
        }

        if (i > currentSlide) {
            px = `calc(${100 * multiplier}% + ${spacing * multiplier}px)`;
            py = "40%";
        }

        console.log(px);
        return `translateX(calc(${px}))`;
    };

    const className = (i) => {
        let position = 0;

        if (i < currentSlide) position = "opacity-25";
        if (i == currentSlide) position = "opacity-100";
        if (i > currentSlide) position = "opacity-25";

        return position;
    };

    const labelClass = (i) => {
        let str = "";

        str += i === currentSlide ? "bg-ovalGreen hover:bg-ovalGreenDark" : "bg-gray-600 hover:bg-gray-200";

        return str;
    };

    return (
        <section className="min-h-screen sm:overflow-hidden bg-gray-900">
            <div className="flex flex-col px-5 pb-10 items-center justify-center h-full w-full">
                <div className="max-w-5xl w-full flex items-center justify-center relative h-64">
                    {slides.length > 0 &&
                        slides.map((slide, i) => (
                            <Slide
                                key={i}
                                onClick={() => setCurrentSlide(i)}
                                index={i}
                                setCurrentSlide={setCurrentSlide}
                                slidePosition={slidePosition}
                                classNameFunc={className}
                                currentSlide={currentSlide}
                                slide={slide}
                            />
                        ))}
                </div>
                <div className="max-w-5xl w-full flex items-center relative mt-5">
                    <div className="labels">
                        <div onClick={() => setCurrentSlide(0)} className={labelClass(0) + " py-1 px-2 mr-1 cursor-pointer"}>
                            <span className="label-text text-xs">Mission</span>
                        </div>
                        <div onClick={() => setCurrentSlide(1)} className={labelClass(1) + " py-1 px-2 cursor-pointer"}>
                            <span className="label-text text-xs">Vision</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TextSlider;
