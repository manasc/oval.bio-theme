import React, { useState } from "react";

function MoreThanOval() {
    return (
        <section className="section h-screen overflow-hidden">
            <div className="h-full flex">
                <div className="w-full max-w-lg flex-none flex flex-col">
                    <div className="flex-1 p-10">
                        <div className="text-3xl mb-5">
                            The <span className="text-ovalGreen">POD</span> is more than oval.bio
                        </div>
                        <p className="mb-5">
                            We’re breaking preconceived notions of what capitalism and free market
                            economics are in the pursuit of providing extensive, ultra-transparent
                            access to functional life extension technology. In other words, we are
                            creating an industry and being at the forefront goes hand-in-hand with
                            defining the category*. The pod is just the beginning in two very import
                            ways:
                        </p>

                        <ol className="list-disc pl-5">
                            <li className="mb-2">
                                Our research and technology used for the pod can be and will be used
                                for future products, similar to how NASA’s Apollo mission lead many
                                modern technologies spanning multiple industries.
                            </li>
                            <li className="mb-2">
                                The pod will produce millions of anonymous health-related
                                datapoints. These points can be used for research by university and
                                health research organizations around the world. We will be
                                collaborating with many organizations to process this data and, as a
                                community, develop life-extension therapies.
                            </li>
                        </ol>
                    </div>
                    <div className="flex-none bg-ovalGreen p-10">
                        <div className="label-text mb-2">Note:</div>
                        <p>
                            The pod, however, can be useful for much more than how we had initially
                            envisioned it. This is essentially a human biosensor interface. What
                            this means is that facilities can use our pods to measure the response
                            of patients to other therapies and treatments, or as a way to measure
                            them when they are submitted for review.
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
