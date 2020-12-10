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

function TextSlider() {
    // useEffect(() => {
    //     WordCloud();
    // }, [])

    const [currentSlide, setCurrentSlide] = useState(0);

    const slidePosition = (i) => {
        let position = 0;

        if (i < currentSlide) position = -100 * i + "%";
        if (i == currentSlide) position = "0px";
        if (i > currentSlide) position = 100 * i + "%";

        return `translateX(${position})`;
    };

    const className = (i) => {
        let position = 0;

        if (i < currentSlide) position = "opacity-25";
        if (i == currentSlide) position = "opacity-100";
        if (i > currentSlide) position = 100 * i + "opacity-25";

        return position;
    };

    return (
        <section className="section h-screen overflow-hidden bg-gray-900">
            <div className="flex pb-10 items-center justify-center h-full w-full">
                <div className="max-w-5xl w-full flex relative h-64">
                    {slides.map((slide, i) => (
                        <div
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            className={"cursor-pointer flex-none max-w-xl w-full text-white absolute left-0 top-0 " + className(i)}
                            style={{
                                transitionDuration: "500ms",
                                transform: slidePosition(i),
                            }}
                        >
                            <h1 className="text-4xl">{slide.title + i}</h1>
                            <p className="text-lg opacity-50">{slide.content}</p>
                        </div>
                    ))}
                </div>
                {/* <h1 className="text-4xl text-white">Current Slide: {currentSlide}</h1> */}
            </div>
        </section>
    );
}

export default TextSlider;
