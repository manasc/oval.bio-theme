import React from "react";

import MilestoneSlider from "../components/MilestoneSlider";

function VideoSection() {
    return (
        <section className="section h-screen overflow-hidden">
            <div className="h-full flex flex-col">
                <div className="flex-1 .bg-gray-200 relative flex items-center justify-center">
                    <MilestoneSlider />
                    {/* <h1 className="text-5xl">Milestones Slider</h1> */}
                    {/* <div className="absolute right-0 bottom-0 max-w-md p-10 bg-white">
                        <div className="label-text text-sm mb-5">Milestones</div>
                        <p>
                            When we hit $500,000 in sales, we’ll begin building real time open
                            books, updated daily and a revenue tracker showing number of sales made
                            for each product and returns, how much people are getting paid, and
                            other expenses. Initial rewards numbers are 40 points per dollar spent
                            for the first $1.25mm in net sales (excludes shipping and taxes) =
                            40,000,000 points.
                        </p>
                    </div> */}
                    <div className="label absolute bottom-0 left-0">
                        <div className="label-text">Milestones</div>
                    </div>
                </div>
                <div className="flex-none">
                    <div className="container">
                        <div className="flex-1 flex items-center">
                            <div className="w-full max-w-xl p-8">
                                <div className="text-3xl">So, why should you care?</div>
                                <p>
                                    Our company ledgers are open, and once we achieve a $500k in
                                    sales milestone we will begin the process of creating a system
                                    on the website that updates the ledger showing each product’s
                                    sales and our costs with only a 24-hour delay.
                                </p>
                                <p className="mt-4">
                                    <a className="button mr-2">Hello</a>
                                    <a href="#" className="button">
                                        Goodbye
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VideoSection;
