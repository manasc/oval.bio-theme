import React, { useState } from "react";

function FivePillars() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const pillars = [
        {
            name: "Nutrition",
            description:
                "It is debatable if what is delivered by the pod in the form of hydrogen gas, oxygen saturation, and electron donation in the first gen should be considered nutrition under the 5 pillars system. However it is certain that the pod will be able to pickup and change readings based on your nutrition. So when you eat poorly or better the pod will overtime pickup those changes and help display how your diet is affecting you. In future generation when performing senescent cell removal and we are filtering your blood, we can get very detailed data and really display to the user what is in the blood and how their diet and stress is affecting them, what they need to eat more of.",
            content:
                "Quo labore dolore vel non repellendus aspernatur. Voluptates distinctio exercitationem. Ad molestias reprehenderit eos.",
            bgColor: "yellow",
            image:
                "https://images.unsplash.com/photo-1571890791812-1399692b7a7f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDYyMn0",
        },
        {
            name: "Therapies",
            description:
                "This is clear our first gen therapies are red light, nanobubbles, hydrogen and oxygen gas. A therapy we are still working to determine how to incorporate into the pod is electron donation.",
            content:
                "Tenetur quis ipsa cum fuga. Voluptate dolorem harum similique perferendis velit iste inventore eum. Veritatis corporis veniam rerum iure ad sit debitis. Necessitatibus est hic.",
            bgColor: "blue",
            image:
                "https://images.unsplash.com/photo-1559690680-e2a291aa94f5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDYyMn0",
        },
        {
            name: "Diagnostics & Data",
            description:
                "As seen above the pod is laden with various diagnostics to measure and track the bodies various functions. This lets us get the most complete picture of a persons health compared to anything else available. Further by doing it regularly we can build a timeline and map of what is normal for that person.",
            content:
                "Est iure in voluptatem eligendi. Voluptatum voluptate autem enim architecto quos et eum sit ea. Numquam excepturi tempora veritatis voluptas quidem neque quo mollitia praesentium. Qui doloribus dolor porro facilis. Est asperiores deleniti qui animi adipisci praesentium quisquam nisi sit.",
            bgColor: "red",
            image:
                "https://images.unsplash.com/photo-1506223327129-a4405640764e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDYyMn0",
        },
        {
            name: "Recovery",
            description:
                "Though the pod has a lot going on with water filling and red lights shining, repeated deep breathing to get lung capacity data, we want the situation to be pleasant and users experience it as a way to recover and reset, similar to a nap. This is why we use blackout goggles and use of scents and sounds designed to put on at ease. We are able to measure stress levels in the individual though the use of the galvanic skin response and heart rate variability and other diagnostics such as impedance pneumography which measures breathing rate. Having access to these real-time readings we can determine what scents and sounds are the most soothing for each person and thus tailor the experience to them.",
            content:
                "Facere voluptatem reiciendis autem et laudantium sit et aut quis. Velit omnis recusandae et tenetur asperiores quo placeat sit. Repellat illum quia pariatur saepe voluptatem ab nam. Iusto unde nostrum nam odio sed voluptas illo. Consequuntur est sit.",
            bgColor: "indigo",
            image:
                "https://images.unsplash.com/photo-1554977929-0ed5ce8f1509?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDYyMn0",
        },
        {
            name: "Lifestyle",
            description: 
                "The pod similarly can help display the results of lifestyle changes",
            content: "Et magnam voluptates. Placeat et et a ut a qui fugiat. Voluptatem in rem voluptate.",
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
            active: "opacity-100",
            dead: "cursor-pointer opacity-25 hover:opacity-75",
        },
    };

    // useEffect(() => {
    //     effect
    // }, [currentIndex])

    return (
        <section className="h-full overflow-hidden">
            <div className="flex h-full">
                <div className="w-full max-w-md flex-none p-10">
                    <div className="text-3xl leading-tight mb-5">
                        The <span className="text-ovalGreen">5 pillars</span> of Longevity
                    </div>
                    <p className="text-base mb-5">
                        Our products, services and blog content will revolve around 5 pillars of longevity. Each one of these pillars covers
                        a piece of the puzzle to position oneself for attaining life extension. Some of them are more abstract or less well
                        defined in importance, such as lifestyle (how much exercise or sex, size or defined quality of positive social
                        circle). We will write more content for each of these to give more details.{" "}
                    </p>
                    <p className="text-base">
                        this idea is not unique or even maybe as good as others similar concepts. So it is not something that should be
                        touted as the be all end all. Instead I want to position it as ever evolving as we become more knowledgeable and
                        growth so will the thoroughness of the pillars.
                    </p>
                    <div className="mt-4 text-lg">
                        {pillars.map((pillar, i) => (
                            <div
                                key={i}
                                className={"text-base mb-1 " + (currentIndex === i ? classes.link.active : classes.link.dead)}
                                onClick={() => setCurrentIndex(i)}
                            >
                                {pillar.name} <i className="fas fa-question-circle text-gray-500"></i>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-1 bg-gray-300 relative">
                    {pillars.map((pillar, i) => (
                        <React.Fragment key={i}>
                            <div
                                className={"image bg-cover bg-center absolute top-0 left-0 w-full h-full bg-" + pillar.bgColor + "-500"}
                                style={{
                                    backgroundImage: "url(" + pillar.image + ")",
                                    transitionDuration: "500ms",
                                    transform: currentIndex === i ? "translateX(0)" : "translateX(100%)",
                                }}
                            ></div>
                            <div
                                key={i}
                                className="absolute shadow-md max-w-md bg-white bottom-0 right-0 p-8 text-sm"
                                style={{
                                    transitionDuration: "500ms",
                                    transform: currentIndex === i ? "translateY(0)" : "translateY(100%)",
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
