import React, { useState, useEffect, useRef } from "react";
import WordCloud from "wordcloud";

function HeroSection() {
    const sectionRef = useRef(null);

    const wordSize = {
        title: 100,
        large: 55,
        medium: 30,
        small: 15,
    };

    const randomWords = [
        ["id", wordSize.small],
        ["voluptas", wordSize.small],
        ["et", wordSize.small],
        ["nesciunt", wordSize.small],
        ["veniam", wordSize.medium],
        ["aperiam", wordSize.small],
        ["odit", wordSize.medium],
        ["quo", wordSize.small],
        ["rerum", wordSize.small],
        ["sint", wordSize.medium],
        ["debitis", wordSize.medium],
        ["quae", wordSize.small],
        ["suscipit", wordSize.small],
        ["sint", wordSize.medium],
        ["iste", wordSize.small],
        ["animi", wordSize.medium],
        ["in", wordSize.small],
        ["aut", wordSize.small],
        ["inventore", wordSize.small],
        ["dolores", wordSize.medium],
        ["molestiae", wordSize.small],
        ["magnam", wordSize.small],
        ["enim", wordSize.small],
        ["harum", wordSize.small],
        ["consequuntur", wordSize.small],
    ];

    useEffect(() => {
        console.log(sectionRef);
        WordCloud(sectionRef.current, {
            list: [
                ["Our Mission", wordSize.title],
                ...randomWords,
                ...randomWords,
                ...randomWords,
                ...randomWords,
                ...randomWords,
                ...randomWords,
                ...randomWords,
                ...randomWords,
            ],
            fontFamily: "Rubik",
            weightFactor: 1.5,
            color: (word) => (word === "Our Mission" ? "#77e0a1" : "rgba(225,225,225, 0.2)"),
            backgroundColor: false,
            gridSize: 20,
        });
    }, [sectionRef]);

    return (
        <section ref={sectionRef} className="h-full overflow-hidden bg-gray-800">
            Hello
        </section>
    );
}

export default HeroSection;
