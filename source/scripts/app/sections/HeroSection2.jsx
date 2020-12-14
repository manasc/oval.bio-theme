import React, { useState } from "react";

function HeroSection() {
    return (
        <section className="h-full overflow-hidden">
            <div className="h-full flex items-end relative">
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)",
                    }}
                ></div>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75"></div>
                <div className="container relative">
                    <div className="pb-24 relative">
                        <div className="max-w-5xl mx-auto relative">
                            <div className="max-w-lg pt-8 border-t-2 border-white text-white">
                                <h1 className="text-5xl mb-2 text-ovalGreen">The Pod</h1>
                                <p>
                                    The human biosensor interface. The pod is the integration of
                                    several therapies and diagnostics tools that measure the
                                    therapies effects to build a profile of the user. This helps us
                                    learn their stresses and positive life choices, recognize early
                                    warning signs, learn what choices impact their health and better
                                    tailor the life-extension therapies to the user.
                                </p>
                                <p className="mt-4">
                                    <span className="label-text text-sm text-white">
                                        Our Mission
                                    </span>
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
