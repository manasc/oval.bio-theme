import React from "react";

const HowItWorksSection = () => {
    // useEffect(() => {
    //     if (data.instructional_video) {
    //         const ytId = YouTubeGetID(data.instructional_video);
    //     }
    // }, [input]);

    const data = {
        instructions: [
            {
                name: "Title",
                description:
                    "Quisquam dolores sunt deserunt laudantium cumque totam officiis eligendi. Iure velit unde consequatur nihil. Non aut sunt dolorem amet provident odio optio. Id quisquam vel voluptatem ipsa.",
                image: { url: "" },
            },
            {
                name: "Title 2",
                description:
                    "Dolorum nostrum ut nulla vero voluptates vitae. Animi aut mollitia ea in quis nemo nihil. Illo eaque itaque aut nesciunt ut. Qui in sint itaque incidunt fugit dolor dolorem debitis eius. Commodi dolore dolorum. Soluta alias ducimus earum similique rem magni aut.",
                image: { url: "" },
            },
            {
                name: "Title 3",
                description:
                    "Enim reprehenderit iste est illum ut aliquam repudiandae voluptas dicta. Quam aut incidunt harum aspernatur. Rem voluptatem doloribus consequatur. Doloremque qui quidem. Ex autem harum accusamus voluptas sapiente repudiandae quam.",
                image: { url: "" },
            },
        ],
    };

    return (
        <section className="content-box">
            <h1 className="subtitle md:text-center">Directions for Use</h1>
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
                <div key={i} className="flex flex-wrap">
                    <div className={"w-full lg:w-1/2 flex items-center justify-center " + (i % 2 ? "order-1 md:order-2" : "order-1 md:order-1")}>
                        <div className="content md:px-10 py-10 w-full">
                            <div className="content flex-1 px-2">
                                <div className="text-2xl mb-2 font-normal">{instruction.name}</div>
                                <div className="text-lg" dangerouslySetInnerHTML={{ __html: instruction.description }}></div>
                            </div>
                        </div>
                    </div>
                    <div className={"w-full lg:w-1/2 " + (i % 2 ? "order-1 md:order-1" : "order-1 md:order-2")}>
                        <div
                            className="bg-gray-200 h-64 lg:h-full bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: "url(" + instruction.image.url + ")" }}
                        >
                            <div className="w-full" style={{ paddingTop: "100%" }}></div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default HowItWorksSection;
