import React, { useState } from "react";

function BuiltForChange() {
    return (
        <section className="section h-screen overflow-hidden">
            <div className="h-full flex">
                <div className="flex-1 bg-gray-200"></div>
                <div className="w-full max-w-lg flex-none flex flex-col">
                    <div className="flex-1 p-10">
                        <div className="text-3xl">Built for change.</div>
                        <p className="text-sm">
                            The NASA Apollo program is our role model. Most people associate the
                            Apollo program with the Apollo 11 mission, which landed the first humans
                            on the moon, and brought them back safely.
                        </p>
                        <p className="text-sm">The Apollo program had the following goals:</p>
                        <ol className="tex-sm">
                            <li>
                                Establishing the technology to meet other national interests in
                                space.
                            </li>
                            <li>Achieving preeminence in space for the United States.</li>
                            <li>Carrying out a program of scientific exploration of the Moon.</li>
                            <li>Developing human capability to work in the lunar environment.</li>
                        </ol>
                        <p className="text-sm">
                            At oval.bio, we want people to associate life extension pods with us.
                            We’ll achieve that through the following company initiatives:
                        </p>
                        <ol className="tex-sm">
                            <li>
                                Create and utilize technologies which can have an impact on
                                functionally extending the human lifespan.
                            </li>
                            <li>
                                Give transparent access to these technologies to as many humans as
                                possible.
                            </li>
                            <li>
                                Test and quantify efficacy recognizing that not all people respond
                                the same to the same technology.
                            </li>
                            <li>Stay true to the mission.</li>
                        </ol>
                    </div>
                    <div className="bg-ovalGreen flex-none p-10">
                        <p>
                            Just as NASA used the mission of getting humans to the moon and
                            returning them as their core, we have our mission. NASA used the Saturn
                            rockets as the main vehicle to achieve that, our rocket equivalent is
                            the pod.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BuiltForChange;
