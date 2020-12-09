import React, { useReducer } from "react";
import { TooltipHost } from "@fluentui/react";

const initState = [
    {
        name: "Diagnostics & Data",
        available: false,
        selected: false,
        icon: "wp-content/themes/oval.bio/source/images/icons/AntiInflammatory.svg",
        description:
            "It is debatable if what is delivered by the pod in the form of hydrogen gas, oxygen saturation, and electron donation in the first gen should be considered nutrition under the 5 pillars system. However it is certain that the pod will be able to pickup and change readings based on your nutrition. So when you eat poorly or better the pod will overtime pickup those changes and help display how your diet is affecting you. In future generation when performing senescent cell removal and we are filtering your blood, we can get very detailed data and really display to the user what is in the blood and how their diet and stress is affecting them, what they need to eat more of.",
        content:
            "Eius optio eos itaque qui aut repudiandae iusto. Et quo temporibus nisi cumque quia assumenda sit. Aliquid perspiciatis quibusdam quod. Quisquam repellat aut.",
    },
    {
        name: "LifeStyle",
        available: false,
        selected: true,
        icon: "wp-content/themes/oval.bio/source/images/icons/PainRelief.svg",
        description:
            "This is clear our first gen therapies are red light, nanobubbles, hydrogen and oxygen gas. A therapy we are still working to determine how to incorporate into the pod is electron donation.",
        content:
            "Animi ullam temporibus. Modi debitis quia ad culpa deserunt suscipit quibusdam. Nam ut velit optio ducimus aut provident. Quidem ratione vitae autem debitis iure rem porro. Voluptatibus omnis harum iusto cupiditate qui modi enim modi est. Eligendi tempore ipsum itaque id.",
    },
    {
        name: "Nutrition",
        available: false,
        selected: false,
        icon: "wp-content/themes/oval.bio/source/images/icons/NanoBubbles.svg",
        description:
            "As seen above the pod is laden with various diagnostics to measure and track the bodies various functions. This lets us get the most complete picture of a persons health compared to anything else available. Further by doing it regularly we can build a timeline and map of what is normal for that person.",
        content:
            "Eligendi sint ut sint est quae enim nobis repellendus totam. Non nulla animi qui ratione. Eius modi rerum ut est ex. Enim sequi libero sed.",
    },
    {
        name: "Recovery",
        available: true,
        selected: false,
        icon: "wp-content/themes/oval.bio/source/images/icons/Electrons.svg",
        description:
            "Though the pod has a lot going on with water filling and red lights shining, repeated deep breathing to get lung capacity data, we want the situation to be pleasant and users experience it as a way to recover and reset, similar to a nap. This is why we use blackout goggles and use of scents and sounds designed to put on at ease. We are able to measure stress levels in the individual though the use of the galvanic skin response and heart rate variability and other diagnostics such as impedance pneumography which measures breathing rate. Having access to these real-time readings we can determine what scents and sounds are the most soothing for each person and thus tailor the experience to them.",
        content: "Ut ut est vel qui tempora. Et unde et dolorum commodi voluptates laborum consectetur non.",
    },
    {
        name: "Therapies",
        available: true,
        selected: false,
        icon: "wp-content/themes/oval.bio/source/images/icons/Electrons.svg",
        description: "The pod similarly can help display the results of lifestyle changes",
        content:
            "Provident aspernatur soluta. Voluptatem minus adipisci minus eos. Sed quia ullam cupiditate porro quae enim minima asperiores in. Assumenda quia quod sequi delectus dolores.",
    },
];

const reducer = (state, action) => {
    const newState = state;

    switch (action.type) {
        case "toggleIcon":
            newState[action.payload].selected = !state[action.payload].selected;
            return [...newState];
    }
};

function LifeExtensionSection({ data }) {
    const [icons, dispatch] = useReducer(reducer, initState);

    return (
        <section className="content-box life-extension-box">
            <div className="mb-10">
                <h1 className="subtitle text-center">5 Pillars of Life Extension</h1>
            </div>
            <div className="mb-10">
                <div className="flex-1 flex flex-wrap">
                    {icons &&
                        icons.map((icon, i) => (
                            <div
                                key={i}
                                className="pillar relative w-1/2 md:w-1/5 px-10 py-5"
                                onClick={() => {
                                    console.log(i);
                                    dispatch({ type: "toggleIcon", payload: i });
                                }}
                            >
                                <div
                                    className={
                                        "rounded-full w-full mx-auto cursor-pointer " +
                                        (icon.available ? "bg-ovalGreen hover:bg-ovalGreenDark" : "bg-gray-300 hover:bg-gray-400")
                                    }
                                    style={{ paddingTop: "100%" }}
                                ></div>
                                <p className="text-center text-sm mt-4">
                                    {icon.name}
                                    <TooltipHost content={icon.description}>
                                        <i className="far fa-question-circle cursor-pointer ml-1"></i>{" "}
                                    </TooltipHost>
                                </p>
                                {icon.available && (
                                    <div
                                        className="phase-view-icon h-8 w-8 flex items-center justify-center border border-gray-300 bg-white shadow rounded-full absolute right-0 top-0 mr-10 mt-10"
                                        style={{
                                            transitionDuration: "300ms",
                                            transform: icon.selected ? "translateY(0)" : "translateY(5px)",
                                            visibility: icon.selected ? "visible" : "hidden",
                                            opacity: icon.selected ? 1 : 0,
                                        }}
                                    >
                                        <i className="fas fa-eye text-gray-400"></i>
                                    </div>
                                )}
                            </div>
                        ))}
                </div>
            </div>

            <div className="accordion-box mt-10">
                <div className="accordion">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-wrap justify-center -mx-4">
                            {/* first column */}
                            <div className="w-full md:w-1/2 px-4">
                                {icons &&
                                    icons.map(
                                        (icon, i) =>
                                            icon.available && (
                                                <div
                                                    key={i}
                                                    className={
                                                        "pillar-details accordion-item accordion-item-has-icon " +
                                                        (icon.selected && "active")
                                                    }
                                                    onClick={() => {
                                                        console.log(i);
                                                        dispatch({ type: "toggleIcon", payload: i });
                                                    }}
                                                >
                                                    <div className="accordion-item-header">
                                                        <div className="accordion-item-question">
                                                            <div className="accordion-item-icon">
                                                                <i className="fas fa-plus-circle"></i>
                                                            </div>
                                                            {icon.name}
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item-content" style={{ maxHeight: icon.selected ? 500 : 0 }}>
                                                        <div className="accordion-item-answer">{icon.description}</div>
                                                    </div>
                                                </div>
                                            )
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LifeExtensionSection;
