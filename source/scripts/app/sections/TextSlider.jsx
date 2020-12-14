import React, { useState, useEffect, useRef } from "react";

const slides = [
    {
        title: "Mission Statement",
        content:
            "Quo magnam sunt alias tempora. Laboriosam aut alias ut rerum maiores. Officia aperiam expedita voluptatem est voluptatum. Eum voluptatem est vel illo pariatur ut. Qui adipisci nihil distinctio corporis autem. Et totam qui soluta numquam cumque qui. Sint similique temporibus nostrum porro libero tenetur. Optio ex debitis voluptates. Impedit at vel adipisci.",
    },
    {
        title: "Vision Statement",
        content:
            "Quo magnam sunt alias tempora. Laboriosam aut alias ut rerum maiores. Officia aperiam expedita voluptatem est voluptatum. Eum voluptatem est vel illo pariatur ut. Qui adipisci nihil distinctio corporis autem. Et totam qui soluta numquam cumque qui. Sint similique temporibus nostrum porro libero tenetur. Optio ex debitis voluptates. Impedit at vel adipisci.",
    },
    {
        title: "Vision Statement 2",
        content:
            "Quo magnam sunt alias tempora. Laboriosam aut alias ut rerum maiores. Officia aperiam expedita voluptatem est voluptatum. Eum voluptatem est vel illo pariatur ut. Qui adipisci nihil distinctio corporis autem. Et totam qui soluta numquam cumque qui. Sint similique temporibus nostrum porro libero tenetur. Optio ex debitis voluptates. Impedit at vel adipisci.",
    },
    {
        title: "Vision Statement 5",
        content:
            "Quo magnam sunt alias tempora. Laboriosam aut alias ut rerum maiores. Officia aperiam expedita voluptatem est voluptatum. Eum voluptatem est vel illo pariatur ut. Qui adipisci nihil distinctio corporis autem. Et totam qui soluta numquam cumque qui. Sint similique temporibus nostrum porro libero tenetur. Optio ex debitis voluptates. Impedit at vel adipisci.",
    },
    {
        title: "Vision Statement 6",
        content:
            "Quo magnam sunt alias tempora. Laboriosam aut alias ut rerum maiores. Officia aperiam expedita voluptatem est voluptatum. Eum voluptatem est vel illo pariatur ut. Qui adipisci nihil distinctio corporis autem. Et totam qui soluta numquam cumque qui. Sint similique temporibus nostrum porro libero tenetur. Optio ex debitis voluptates. Impedit at vel adipisci.",
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
            <h1 className="text-4xl">{slide.title + index}</h1>
            <div
                style={{
                    transitionDuration: "300ms",
                    overflow: "hidden",
                    height: index === currentSlide ? "300px" : "1px",
                }}
            >
                <p className={"text-lg opacity-50"}>{slide.content + (index === currentSlide ? "true" : "false")}</p>
            </div>
        </div>
    );
}

function TextSlider() {
    // useEffect(() => {
    //     WordCloud();
    // }, [])

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

    return (
        <section className="h-full overflow-hidden bg-gray-900">
            <div className="flex pb-10 items-center justify-center h-full w-full">
                <div className="max-w-5xl w-full flex items-center justify-center relative h-64">
                    {slides.map((slide, i) => (
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
            </div>
        </section>
    );
}

export default TextSlider;
