import React, { useState } from "react";

function HeroSection() {
    const bgImages = [
        {
            url: "/wp-content/themes/oval.bio/source/images/pod/pod1.jpg",
            color: "red",
        },
        {
            url: "/wp-content/themes/oval.bio/source/images/pod/pod2.jpg",
            color: "blue",
        },
        {
            url: "/wp-content/themes/oval.bio/source/images/pod/pod3.jpg",
            color: "green",
        },
    ];

    return (
        <section className="h-screen overflow-hidden">
            <div className="h-full flex items-end relative">
                <div className="absolute top-0 left-0 w-full h-full flex">
                    {bgImages.map((img, i) => (
                        <div
                            key={i}
                            className={"h-full w-1/3 bg-cover bg-center bg-no-repeat " + "bg-" + img.color + "-500"}
                            style={{ backgroundImage: "url(" + img.url + ")" }}
                        />
                    ))}
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75"></div>
                <div className="container relative">
                    <div className="pb-24 relative">
                        <div className="max-w-5xl mx-auto relative">
                            <div className="max-w-lg pt-8 border-t-2 border-white text-white">
                                <h1 className="text-5xl mb-2 text-ovalGreen">The Pod</h1>
                                <p>
                                    The human biosensor interface. The pod is the integration of several therapies and diagnostics tools
                                    that measure the therapies effects to build a profile of the user. This helps us learn their stresses
                                    and positive life choices, recognize early warning signs, learn what choices impact their health and
                                    better tailor the life-extension therapies to the user.
                                </p>
                                <p className="mt-4">
                                    <span className="label-text text-sm text-white">Our Mission</span>
                                </p>
                                <div className="moving-mouse-holder">
                                    <div className="mouse">
                                        <div className="mouse-button">&nbsp;</div>
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

export default HeroSection;
