import React, { useState } from "react";

function AccordionItem({ data }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            onClick={() => setOpen(!open)}
            className={"react-accordion-item react-accordion-item-has-icon " + (open && "active")}
        >
            <div className="react-accordion-item-header">
                <div className="react-accordion-item-question">
                    <div className="react-accordion-item-icon">
                        <i className="fas fa-plus-circle"></i>
                    </div>
                    <div className="label-text">{data.title}</div>
                </div>
            </div>
            <div
                className="react-accordion-item-content"
                style={{ maxHeight: open ? "1000px" : "0px", transitionDuration: 200 }}
            >
                <p className="react-accordion-item-answer">{data.description}</p>
            </div>
        </div>
    );
}

function DiagramSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const valuesArr = [
        {
            name: "Transparency",
            style: { top: "50%", left: "50%", transform: "translate(-50%,-90%)" },
            intro:
                "We leverage our extreme transparency to act as a self-regulating force. There is nothing we keep proprietary (except our brand names) or secret. Everyone can see how we get the data we do from our diagnostics, how people respond to the therapies and how every dollar is spent as well as clearly seeing where components and Ingredients are sourced from. Being auditable at any time anyone can call us out on inaccuracies so that we can fix and improve. Safety and fraud concerns are addressed through this extreme transparency, this is how we self-regulate.",
            content: [
                {
                    title: "Clarity",
                    description:
                        "Transparency means giving anyone the ability to see our finances in as much detail as possible. All our products, for example, have a section that breaks down cost of goods, allowing customers to see behind the scenes, or to see what our daily sales for each product are and how every dollar is spent.",
                },
                {
                    title: "Trust & Vulnerability",
                    description:
                        "This endeavor is not meant to be about any individual or resource guarding through patents and copyright.. It Is about letting anyone audit our technology, our business practices and benefit from our data. Revealing our suppliers and partners is meant to allow others to know honestly how they can achieve what we have.",
                },
                {
                    title: "Self Regulation",
                    description:
                        "We leverage our extreme transparency to act as a self-regulating force. There is nothing we keep proprietary (except our brand names) or secret. Everyone can see how we get the data we do from our diagnostics, how people respond to the therapies and how every dollar is spent as well as clearly seeing where components and Ingredients are sourced from. Being auditable at any time anyone can call us out on inaccuracies so that we can fix and improve. Safety and fraud concerns are addressed through this extreme transparency, this is how we self-regulate.",
                },
                {
                    title: "Privacy",
                    description:
                        "We leverage our extreme transparency to act as a self-regulating force. There is nothing we keep proprietary (except our brand names) or secret. Everyone can see how we get the data we do from our diagnostics, how people respond to the therapies and how every dollar is spent as well as clearly seeing where components and Ingredients are sourced from. Being auditable at any time anyone can call us out on inaccuracies so that we can fix and improve. Safety and fraud concerns are addressed through this extreme transparency, this is how we self-regulate.",
                },
            ],
            end:
                "This is in contrast to a company like apple that makes upgrading a device impossible by welding and gluing parts in, or car makers like Mercedes who make getting an oil change a major ordeal. Modularity means letting consumers buy parts from third parties who are developing on our platform if they think it is better for them. It means building something that entices others to make components for it. This builds community, keeps the consumer empowered and creates a platform.",
        },
        {
            name: "Modularity",
            style: { top: "50%", left: "50%", transform: "translate(-10%, -20%)" },
            intro: "",
            content: [
                {
                    title: "Efficiency",
                    description:
                        "Modularity means being able to upgrade a component of a larger product, such as on the pod being able to upgrade the nanobubble system or add a new diagnostic without needing to get a whole new pod.",
                },
                {
                    title: "Sustainability",
                    description:
                        "Modularity means reducing the waste and transportation needs of our products, only sending what is needed instead of a whole new unit. Reducing carbon footprint and unnecessary waste.",
                },
                {
                    title: "Cooperation",
                    description:
                        "Modularity means team building where other groups and companies can create and sell their own components for the pods. It also means giving owners the ability fix or replace parts of their devices by themselves or to have a contractor do it for them easily and at low cost.",
                },
            ],
            end: "",
        },
        {
            name: "Access",
            style: { top: "50%", left: "50%", transform: "translate(-90%,-20%)" },
            intro:
                "Giving anyone the opportunity to become a part of our Syndicate, by getting equity through purchasing a product.",
            content: [
                {
                    title: "Rising Tide Empowerment",
                    description:
                        "The more people who can benefit from this pursuit the better civilization will be for everyone. Copy, use, sell anything and everything we have created with no royalty expectation, except our brand names.",
                },
                {
                    title: "Share equality",
                    description:
                        "Share equality:1 point = 1 share = 1 vote. We will have rewards and points system based on how many dollars someone spends on the site (buying one of our CPG products or a pod), thenthe process will begin where they will be changed to a crypto coin when we hit a to be determined sales milestone ($1 million), which then will allow holders to place votes and transfer their coins to others. Read more about shared equality here (anchor to Shared Equality Section). ",
                },
                {
                    title: "Milestones",
                    description:
                        "Starting with an MVP, we will then build and integrate more features at the corporate level as we achieve higher sales.",
                },
                {
                    title: "Share the data",
                    description:
                        "We will make available scrubbed data that has as much information about users of the pods and our products without providing any way for someone to identify the user. This is so that anyone can access the data and use it for their product and research, to better serve society.",
                },
                {
                    title: "Education through replication",
                    description:
                        "By providing full details on how to build our products and technology anyone who aspires to can use the guides to learn and Improve those skills.",
                },
            ],
            end:
                "User privacy is of major importance to us, maybe even more important than to many users. We will never sell user information, and will continually expend resources to further encrypt and anonymize all data gathered, so society can benefit from it while maintaining 100% secure user privacy. This is why one of our early milestones is to even anonymize regular product purchases and instead tie it to an encrypted account when we setup our token system for equity distribution.",
        },
    ];

    return (
        <section className="h-full overflow-hidden">
            <div className="h-full flex flex-wrap md:flex-no-wrap relative">
                <div className="flex-1 flex flex-col items-center justify-center relative bg-gray-200">
                    <div className="w-full max-w-xl relative mx-auto">
                        <div className="w-full" style={{ paddingTop: "100%" }}></div>
                        {valuesArr.map((value, i) => (
                            <div
                                key={i}
                                className={
                                    "cursor-pointer w-full max-w-2xs xl:max-w-xs absolute " +
                                    (currentIndex === i ? "z-20" : "z-0")
                                }
                                style={value.style}
                                onClick={() => setCurrentIndex(i)}
                            >
                                <div
                                    className="absolute label-text text-sm"
                                    style={{
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                    }}
                                >
                                    {value.name}
                                </div>
                                <div
                                    className={
                                        "rounded-full w-full " +
                                        (currentIndex === i
                                            ? "bg-ovalGreen shadow-xl"
                                            : "bg-gray-500 opacity-25 hover:opacity-100")
                                    }
                                    style={{ paddingTop: "100%", transitionDuration: "200ms" }}
                                ></div>
                                <div
                                    className="rounded-full border-gray-800 absolute"
                                    style={{
                                        borderWidth: currentIndex === i ? 30 : 0,
                                        width: currentIndex === i ? "90%" : 0,
                                        height: currentIndex === i ? "90%" : 0,
                                        opacity: 0.1,
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        transitionDuration: "200ms",
                                    }}
                                ></div>
                                <div
                                    className="rounded-full border-gray-800 absolute"
                                    style={{
                                        borderWidth: currentIndex === i ? 3 : 0,
                                        width: currentIndex === i ? "68%" : 0,
                                        height: currentIndex === i ? "68%" : 0,
                                        opacity: 0.1,
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        transitionDuration: "300ms",
                                    }}
                                ></div>
                                <div
                                    className="rounded-full border-gray-800 absolute"
                                    style={{
                                        borderWidth: currentIndex === i ? 5 : 0,
                                        width: currentIndex === i ? "60%" : 0,
                                        height: currentIndex === i ? "60%" : 0,
                                        opacity: 0.1,
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        transitionDuration: "300ms",
                                    }}
                                ></div>
                            </div>
                        ))}
                    </div>
                    <div className="max-w-lg mt-2 mx-auto">
                        We want to be the most transparent company in the world and we will do that
                        through practicing clarity, embracing vulnerability to achieve the ability
                        to regulate ourselves.
                    </div>
                </div>
                <div className="w-full max-w-lg flex-none overflow-y-scroll">
                    <div className="px-10 py-16">
                        <h2 className="text-4xl mb-4">Everything we do, we believe in.</h2>
                        {valuesArr[currentIndex].intro && (
                            <p className="mb-2">{valuesArr[currentIndex].intro}</p>
                        )}
                        {valuesArr[currentIndex] && (
                            <section className="react-accordion-box " style={{ columnCount: 1 }}>
                                <div className="react-accordion accordion-small">
                                    {valuesArr[currentIndex].content.map((data, i) => (
                                        <AccordionItem key={i} data={data} />
                                    ))}
                                </div>
                            </section>
                        )}
                        {valuesArr[currentIndex].end && (
                            <p className="mt-2">{valuesArr[currentIndex].end}</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DiagramSection;
