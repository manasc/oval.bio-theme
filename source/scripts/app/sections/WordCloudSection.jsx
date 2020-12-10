import React, { useState, useEffect, useRef } from "react";
import WordCloud from "wordcloud";

function HeroSection() {
    const sectionRef = useRef(null);

    const wordSize = {
        title: 100,
        large: 75,
        medium: 50,
        small: 25,
    };

    const randomWords = [
        ["id", wordSize.small],
        ["voluptas", wordSize.small],
        ["et", wordSize.small],
        ["nesciunt", wordSize.small],
        ["veniam", wordSize.small],
        ["aperiam", wordSize.small],
        ["odit", wordSize.small],
        ["quo", wordSize.small],
        ["rerum", wordSize.small],
        ["sint", wordSize.small],
        ["debitis", wordSize.small],
        ["quae", wordSize.small],
        ["suscipit", wordSize.small],
        ["sint", wordSize.small],
        ["iste", wordSize.small],
        ["animi", wordSize.small],
        ["in", wordSize.small],
        ["aut", wordSize.small],
        ["inventore", wordSize.small],
        ["dolores", wordSize.small],
        ["molestiae", wordSize.small],
        ["magnam", wordSize.small],
        ["enim", wordSize.small],
        ["harum", wordSize.small],
        ["consequuntur", wordSize.small],
    ];

    useEffect(() => {
        console.log(sectionRef);
        WordCloud(sectionRef.current, {
            list: [["Our Mission", wordSize.title], ...randomWords, ...randomWords, ...randomWords, ...randomWords, ...randomWords],
            fontFamily: "Rubik",
            // fontWeight: "bold",
            color: (word) => (word === "Our Mission" ? "#77e0a1" : "#cbd5e0"),
            backgroundColor: false,
            gridSize: 20,
        });
    }, [sectionRef]);

    return (
        <section ref={sectionRef} className="section h-screen overflow-hidden bg-gray-800">
            Hello
        </section>
    );
}

export default HeroSection;
