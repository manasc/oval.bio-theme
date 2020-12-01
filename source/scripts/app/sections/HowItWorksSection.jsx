import React from "react";

const HowItWorksSection = ({ data }) => {
    return (
        <section className="content-box">
            <div className="subtitle text-center">How it Works</div>
            <div className="flex flex-wrap -mx-5 relative overflow-hidden">
                {data.image && (
                    <div className="w-full md:w-1/2 px-5">
                        <div
                            className="bg-gray-300 bg-cover bg-center"
                            style={{ paddingTop: "100%", backgroundImage: `url(${data.image.url})` }}
                        ></div>
                    </div>
                )}
                <div className="tab-content w-full md:w-1/2 px-5 max-w-3xl mx-auto">
                    <div className="text-lg" dangerouslySetInnerHTML={{ __html: data.description }}></div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
