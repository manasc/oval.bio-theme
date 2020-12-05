import React, { useState } from "react";

function MoreThanOval() {
    return (
        <section className="section h-screen overflow-hidden">
            <div className="h-full flex">
                <div className="w-full max-w-lg flex-none flex flex-col">
                    <div className="flex-1 p-10 overflow-y-scroll max-h-screen">
                        <div className="text-3xl mb-5">Modular and Open Source</div>
                        <p className="mb-5">
                            Like a car or smartphone, it is meant to have constant upgrades and additions. Unlike almost all other things,
                            we are designing the pod from the ground up to be as modular and open source as it possibly can, so that others
                            can build their own or improve on our designs and technology, in a belief that a rising tide lifts all boats.
                        </p>
                        <p className="mb-5">
                            The pod at its core is a machine designed to be upgradable that is made to combine various therapies and many
                            health diagnostics to both physically confer benefit to the user and measure dozens of the users health readings
                            during every treatment session to ultimately create a baseline and then a detailed timeline map of the user and
                            correlate event and life decisions/events (diet, exercise, traumatic events) to how they are represented in the
                            data.
                        </p>
                        <p className="mb-5">
                            The first pods will not have all the diagnostics or therapies that we plan for the first gen to have, as such we
                            have designed the pod to let the user upgrade and swap out parts with as much ease as possible. So as the new
                            diagnostics and therapies are made we can ship them to the pod owners and have them easily integrate them into
                            their existing pod. This is part of the reason modularity is so important to us.
                        </p>
                    </div>
                    <div className="flex-none bg-ovalGreen p-10">
                        <p className="text-sm">
                            We do fully expect however that this first gen pod will in whole be made obsolete within a few short years, as
                            we gain capital, build our team and learn more as we focus with the community on how to improve it. We expect
                            our second generation pod to have more staying power and be the one that gets mass adoption. This is why we are
                            rewarding the early adopters with larger equity stakes for buying our early pods.
                        </p>
                    </div>
                </div>
                <div className="flex-1 bg-ovalGreen pr-16 pb-16">
                    <div className="bg-gray-100 w-full h-full flex items-center justify-center">
                        <h1 className="text-xl">Image</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MoreThanOval;
