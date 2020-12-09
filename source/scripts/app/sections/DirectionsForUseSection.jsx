import React from "react";

const DirectionsForUseSection = ({ data }) => {
    // useEffect(() => {
    //     if (data.instructional_video) {
    //         const ytId = YouTubeGetID(data.instructional_video);
    //     }
    // }, [input]);

    return (
        <section className="content-box">
            <h1 className="subtitle text-center">Directions for Use</h1>
            {data.instructional_video && (
                <div className="mb-10">
                    <div className="labels">
                        <div className="label">
                            <span className="label-text">Video</span>
                        </div>
                    </div>
                    <div className="content-box-p-none">
                        <div className="bg-gray-500 relative" style={{ paddingTop: (9 / 16) * 100 + "%" }}>
                            <div className="bg-blue-500 absolute top-0 left-0 w-full h-full" id="nmr-bg-video-player"></div>
                        </div>
                    </div>
                </div>
            )}
            
            {data.instructions.map((instruction, i) => (
                <div key={i} className="flex flex-wrap mb-5">
                    <div className={"w-full lg:w-1/2 flex items-center justify-center " + (i % 2 ? "order-2" : "order-1")}>
                        <div className="content px-10 py-10 w-full">
                            <div className="flex flex-wrap w-full -mx-2 mb-5">
                                <div className="flex-none px-2">
                                    <div className="round-full w-5 h-5 bg-ovalGreen text-xs flex items-center justify-center">{i + 1}</div>
                                </div>
                                <div className="content flex-1 px-2">
                                    <div className="text-lg mb-5" dangerouslySetInnerHTML={{ __html: instruction.description }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"w-full lg:w-1/2 " + (i % 2 ? "order-1" : "order-2")}>
                        <div
                            className="bg-gray-200 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: "url(" + instruction.image.url + ")" }}
                        >
                            <div style={{ paddingTop: "100%", width: "100%" }}></div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default DirectionsForUseSection;
