import React, { useState } from "react";

function MiroBoard() {
    return (
        <section className="section h-screen overflow-hidden">
            <div className="h-full flex flex-col">
                <div className="flex-1 bg-gray-200 relative flex items-center justify-center">
                    <h1 className="text-5xl">Miro Board</h1>
                    <div className="label absolute bottom-0 left-0">
                        <div className="label-text">The 5 Pillars of Longevity</div>
                    </div>
                </div>
                <div className="flex-none">
                    <div className="container flex py-5 items-center flex-wrap">
                        <div className="flex-1 flex items-center">
                            <div className="w-full max-w-xl p-8">
                                <div className="text-3xl">Why should people care?</div>
                                <p>
                                    We are making life extension technologies attainable for all who
                                    want them. People may fear that as technology advances and “life
                                    extension” becomes attainable, only the rich or privileged will
                                    be able to utilize it. We are dedicated to not let that happen
                                    by developing life extension technologies in the most replicable
                                    way possible.
                                </p>
                                <p className="mt-5">
                                    <a className="button mr-1">Hello</a>
                                    <a href="#" className="button">
                                        Goodbye
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="flex-none bg-ovalGreen">
                            <div className="w-full max-w-lg p-8">
                                <p>
                                    There is no silver bullet for life extension, instead it will
                                    require an orchestra of technologies working in concert to
                                    achieve the desired result. We want to be the conductor in this
                                    symphony. Our baton to achieve this is the life extension pod.
                                </p>
                                <p className="mt-5">
                                    <span className="label-text text-sm">Mike Kiamanesh</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MiroBoard;
