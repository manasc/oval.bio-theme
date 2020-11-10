import React, { useState } from "react";

function FivePillars() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const pillars = [
        {
            name: "Nutrition",
            content:
                "This is clear our first gen therapies are red light, nanobubbles, hydrogen and oxygen gas. A therapy we are still working to determine howto incorporate into the pod is electron donation. Future Therapies –senescent cell filtering -similar to kidney dialysis except we will befiltering out senescent cells which are cells that are no longer able todivide or perform their primary desired functions, so they act almostparasitical taking nutrients and not contributing to the body.",
            bgColor: "yellow",
            image:
                "https://images.unsplash.com/photo-1571890791812-1399692b7a7f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDYyMn0",
        },
        {
            name: "Therapies",
            content:
                "Officia exercitationem repellat nulla quas ratione culpa qui. Sapiente asperiores nihil unde qui aut. Quia quod id officiis eos tenetur temporibus at ratione deleniti. Voluptatem consectetur ipsa delectus aspernatur temporibus earum reiciendis aut.",
            bgColor: "blue",
            image:
                "https://images.unsplash.com/photo-1559690680-e2a291aa94f5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDYyMn0",
        },
        {
            name: "Diagnostics & Data",
            content:
                "Voluptatibus ipsam nobis hic doloremque. Soluta aut assumenda. Labore et sunt quis porro.",
            bgColor: "red",
            image:
                "https://images.unsplash.com/photo-1506223327129-a4405640764e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDYyMn0",
        },
        {
            name: "Recovery",
            content:
                "Dolor ipsum reprehenderit repellendus. Sit a quisquam aliquam ipsam. Molestiae dolorum fugiat nostrum quia qui totam. Occaecati quia facilis quia quia iure sapiente. Aperiam soluta est fuga deleniti. Id ipsum eligendi qui.",
            bgColor: "indigo",
            image:
                "https://images.unsplash.com/photo-1554977929-0ed5ce8f1509?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDYyMn0",
        },
        {
            name: "Lifestyle",
            content:
                "Commodi quis laboriosam ipsam esse aliquam odit et rerum officiis. Odio enim et dolor. Exercitationem deserunt nam repudiandae. Maiores amet eos dolorem qui repellendus. Sunt ipsam sint beatae aut. Rerum sunt repellendus earum minus aut dolor assumenda omnis.",
            bgColor: "orange",
            image:
                "https://images.unsplash.com/photo-1576185368343-14037490ec63?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDYyMn0",
        },
    ];

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

    return (
        <section className="section h-screen overflow-hidden">
            <div className="flex h-full">
                <div className="w-full max-w-md flex-none p-10">
                    <div className="text-5xl leading-tight mb-5">
                        The <span className="text-ovalGreen">5 pillars</span> of Longevity
                    </div>
                    <p className="text-lg">
                        Our products, services and blog content will revolve around 5 pillars of
                        longevity. Each one of these pillars covers a piece of the puzzle to
                        position oneself for attaining life extension. Some of them are more
                        abstract or less well defined in importance, such as lifestyle (how much
                        exercise or sex, size or defined quality of positive social circle). We will
                        write more content for each of these to give more details.{" "}
                    </p>
                    <div className="mt-4">
                        {pillars.map((pillar, i) => (
                            <div
                                key={i}
                                className={
                                    currentIndex === i ? classes.link.active : classes.link.dead
                                }
                                onClick={() => setCurrentIndex(i)}
                            >
                                {pillar.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-1 bg-gray-300 relative">
                    {pillars.map((pillar, i) => (
                        <React.Fragment key={i}>
                            <div
                                className={
                                    "image bg-cover bg-center absolute top-0 left-0 w-full h-full bg-" +
                                    pillar.bgColor +
                                    "-500"
                                }
                                style={{
                                    backgroundImage: "url(" + pillar.image + ")",
                                    transitionDuration: "500ms",
                                    transform:
                                        currentIndex === i ? "translateX(0)" : "translateX(100%)",
                                }}
                            ></div>
                            <div
                                key={i}
                                className="absolute shadow-md max-w-md bg-white bottom-0 right-0 p-8 text-sm"
                                style={{
                                    transitionDuration: "500ms",
                                    transform:
                                        currentIndex === i ? "translateY(0)" : "translateY(100%)",
                                }}
                            >
                                {pillar.content}
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FivePillars;
