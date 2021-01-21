import React, { useState } from "react";

function FivePillars() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isChanging, setIsChanging] = useState(false);

    const diagnostics = [
        {
            therapies: [
                {
                    name: "Red Light Therapy",
                    image: "",
                },
                { name: "Nano Bubbles", image: "" },
            ],
            description:
                '<p class="text-sm mb-3">Being in a pod that will have water and the person submerged – allows for not just combinatory therapies but sensors as well. For example our ability to measuring body fat and muscle mass will be better than even many clinics as we can do what’s called a multi-compartment analysis.</p><p class="text-sm mb-3">As we can take the data from the 3-d body scanner, hydrostatic weighing andbioelectrical impedance. Where each of these has limitations with accuracybased on missing information that the others can help provide.</p><p className="text-sm mb-10">So the 3-d body scanner can get a measure of body volume and shape, which can be combined with the hydrostatic weighing in the pod (that is not as accurate as a real facilities hydrostatic weighing as that is difficult to do) to match each others data on body volume, with the use of our scale to get weight, while the bioelectrical impedance measures body water content and electrical resistance.</p>',
        },
        {
            therapies: [
                {
                    name: "Red Light Therapy 2",
                    image: "",
                },
                { name: "Nano Bubbles 2", image: "" },
            ],
            description:
                "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quae consectetur suscipit porro at vero eligendi ipsa eos! Nobis aperiam ipsum nam eaque cum neque accusantium laborum, illo corrupti pariatur.",
        },
        {
            therapies: [
                {
                    name: "Red Light Therapy 3",
                    image: "",
                },
                { name: "Nano Bubbles 3", image: "" },
            ],
            description:
                "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quae consectetur suscipit porro at vero eligendi ipsa eos! Nobis aperiam ipsum nam eaque cum neque accusantium laborum, illo corrupti pariatur.",
        },
    ];

    const next = () => {
        if (currentIndex < diagnostics.length - 1) {
            setIsChanging(true);
            setCurrentIndex(currentIndex + 1);

            setTimeout(() => {
                setIsChanging(false);
            }, 750);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setIsChanging(true);
            setCurrentIndex(currentIndex - 1);

            setTimeout(() => {
                setIsChanging(false);
            }, 750);
        }
    };

    const styles = {
        image: {
            active: {},
            dead: {},
        },
        note: {
            active: {},
            dead: {},
        },
        link: {
            active: {},
            dead: {},
        },
    };

    const classes = {
        image: {
            active: {},
            dead: {},
        },
        note: {
            active: {},
            dead: {},
        },
        link: {
            active: "text-base mb-2 opacity-100",
            dead: "cursor-pointer text-base mb-2 opacity-25 hover:opacity-75",
        },
    };

    // useEffect(() => {
    //     effect
    // }, [currentIndex])

    const bgVideo = "/wp-content/themes/oval.bio/source/videos/video.mp4";

    return (
        <React.Fragment>
            <section className="h-screen overflow-hidden">
                <div className="flex h-full">
                    <div className="w-full max-w-md flex-none p-10">
                        <div className="text-3xl leading-tight mb-5">Diagnostic Synergy</div>
                        <p className="text-sm mb-3">
                            One of the benefits of having a total system like ours is that we can use our 3d scanner and height measurements
                            we take of the individual to help us then determine the shape of the person about to go in the pod, doing this
                            will let us know how far the individual is from the light panels and then we can determine the exact dosing they
                            will get or duration of light therapy they will need to achieve a specific dosing, as distance from the light
                            plays a major role.
                        </p>
                        <p className="text-sm mb-3">
                            Being in a pod that will have water and the person submerged – allows for not just combinatory therapies but
                            sensors as well. For example, our ability to measuring body fat and muscle mass will be better than even many
                            clinics as we can do what’s called a multi-compartment analysis.
                        </p>
                        <p className="text-sm mb-3">
                            As we can take the data from the 3-d body scanner, hydrostatic weighing and bioelectrical impedance. Where each
                            of these has limitations with accuracy based on missing information that the others can help provide.{" "}
                        </p>
                        <p className="text-sm mb-3">
                            So the 3-d body scanner can get a measure of body volume and shape, which can be combined with the hydrostatic
                            weighing in the pod (that is not as accurate as a real facilities hydrostatic weighing as that is difficult to
                            do) to match each other’s data on body volume, with the use of our scale to get weight, while the bioelectrical
                            impedance measures body water content and electrical resistance.{" "}
                        </p>
                    </div>
                    <div className="flex-1 bg-white relative">
                        <div
                            className={"image bg-cover bg-center absolute top-0 right-0 w-full h-full flex"}
                            style={{
                                transitionDuration: "500ms",
                            }}
                        >
                            <video
                                style={{
                                    position: "relative",
                                    minHeight: 1080,
                                    minWidth: 1920,
                                    objectFit: "cover",
                                    objectPosition: "right center",
                                }}
                                autoPlay
                                loop
                                muted
                            >
                                <source src={bgVideo} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>
            <section className="h-screen overflow-hidden flex">
                <div className="flex-1 bg-gray-300 relative flex flex-col items-center justify-center">
                    <h2 className="text-4xl">Synergies of Therepeutics</h2>
                    <div className="w-64 h-64 relative my-24">
                        <div className="absolute top-0 left-0 w-64 h-64 rounded-full border border-gray-400"></div>
                        <div
                            className="absolute shadow-md top-0 left-0 w-64 h-64 rounded-full bg-ovalGreen flex items-center justify-center"
                            style={{
                                transitionDuration: "200ms",
                                transform: isChanging ? "translate(0,0)" : "translate(-30%, -15%)",
                            }}
                        >
                            <div
                                className="label-text absolute text-sm"
                                style={{
                                    transitionDuration: "200ms",
                                    opacity: isChanging ? 0 : 1,
                                    visible: isChanging ? "invisible" : "visible",
                                    transform: isChanging ? "translate(0, 0)" : "translate(150px, -120px)",
                                }}
                            >
                                {diagnostics[currentIndex] && diagnostics[currentIndex].therapies[0].name}
                            </div>
                        </div>
                        <div
                            className="absolute shadow-md top-0 left-0 w-64 h-64 rounded-full bg-ovalGreenDark flex items-center justify-center"
                            style={{
                                transitionDuration: "200ms",
                                transform: isChanging ? "translate(0,0)" : "translate(30%, 15%)",
                            }}
                        >
                            <div
                                className="label-text absolute text-sm"
                                style={{
                                    transitionDuration: "200ms",
                                    opacity: isChanging ? 0 : 1,
                                    visible: isChanging ? "invisible" : "visible",
                                    transform: isChanging ? "translate(0, 0)" : "translate(-150px, 100px)",
                                }}
                            >
                                {diagnostics[currentIndex] && diagnostics[currentIndex].therapies[1].name}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center -mx-1">
                        <div
                            onClick={prev}
                            className={
                                "label-text cursor-pointer hover:text-ovalGreenDark text-xs px-1 mr-2 " +
                                (currentIndex === 0 && "invisible")
                            }
                        >
                            <i className="fas fa-caret-left mr-2"></i> Prev
                        </div>
                        {diagnostics.map((diagnostic, i) => {
                            return (
                                <div key={i} className="px-1">
                                    <div className={"h-2 w-2 " + (i === currentIndex ? "bg-ovalGreenDark" : "bg-gray-500")}></div>
                                </div>
                            );
                        })}
                        <div
                            onClick={next}
                            className={
                                "label-text cursor-pointer hover:text-ovalGreenDark text-xs px-1 ml-2 " +
                                (currentIndex === diagnostics.length - 1 && "invisible")
                            }
                        >
                            Next <i className="fas fa-caret-right ml-2"></i>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-md flex-none p-10">
                    <div className="text-3xl leading-tight mb-5">
                        {diagnostics[currentIndex] && diagnostics[currentIndex].therapies[0].name}{" "}
                        <span className="text-ovalGreenDark">&</span>{" "}
                        {diagnostics[currentIndex] && diagnostics[currentIndex].therapies[1].name}
                    </div>

                    <div className="content relative">
                        {diagnostics.map((diagnostic, i) => (
                            <div
                                key={i}
                                className="text-sm absolute w-full top-0 left-0"
                                dangerouslySetInnerHTML={{ __html: diagnostic.description }}
                                style={{
                                    transitionDuration: "200ms",
                                    opacity: i === currentIndex ? 1 : 0,
                                    transform: i === currentIndex ? "translateY(0)" : "translateY(10px)",
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default FivePillars;
