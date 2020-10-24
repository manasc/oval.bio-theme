import React, { useState } from "react";

function HeroSection() {
    return (
        <section className="section h-screen overflow-hidden">
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
                                <h1 className="text-5xl mb-2 text-ovalGreen">
                                    Business Philosophy
                                </h1>
                                <p>
                                    Saepe temporibus voluptas iure est beatae. Ut consequuntur
                                    necessitatibus amet tempora et rem voluptates fuga soluta.
                                    Blanditiis autem similique fuga et tempora. Fugit consequatur et
                                    reiciendis laboriosam laudantium iure quas. Quis dolores ipsa
                                    eum est ea corrupti sunt assumenda eaque.
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
