import React, { useState } from "react";

function renderAccordion(data) {
    return (
        <section className="accordion-box " style={{ columnCount: 1 }}>
            <div className="accordion accordion-small">
                {data &&
                    data.map((value, i) => (
                        <div key={i} className="accordion-item accordion-item-has-icon">
                            <div className="accordion-item-header">
                                <div className="accordion-item-question">
                                    <div className="accordion-item-icon">
                                        <i className="fas fa-plus-circle"></i>
                                    </div>
                                    {/* {value.title} */}
                                    Accordion Title {i}
                                </div>
                            </div>
                            <div className="accordion-item-content">
                                <p className="accordion-item-answer">{value.description}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
}

function DiagramSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const valuesArr = [
        {
            name: "Transparency",
            style: { top: "50%", left: "50%", transform: "translate(-50%,-90%)" },
            content: [
                {
                    title: "Trust & Vulnerability",
                    description:
                        "Consequatur minima iure. Sed ea totam. Eveniet dicta veritatis dignissimos debitis consectetur. Sapiente voluptatibus ipsa tempora id voluptas nostrum soluta consequatur. Ea ut debitis aliquam quia. Doloribus corporis consequatur. Excepturi aut praesentium eveniet ex. Quos animi in sequi. Aperiam a perferendis pariatur facere eveniet inventore.Cumque dignissimos quia incidunt consequuntur. Ut et illo quo non nihil illum nesciunt repudiandae sed. Labore est et soluta rerum illo nesciunt eum.",
                },
                {
                    title: "Trust & Vulnerability",
                    description:
                        "Consequatur minima iure. Sed ea totam. Eveniet dicta veritatis dignissimos debitis consectetur. Sapiente voluptatibus ipsa tempora id voluptas nostrum soluta consequatur. Ea ut debitis aliquam quia. Doloribus corporis consequatur. Excepturi aut praesentium eveniet ex. Quos animi in sequi. Aperiam a perferendis pariatur facere eveniet inventore.Cumque dignissimos quia incidunt consequuntur. Ut et illo quo non nihil illum nesciunt repudiandae sed. Labore est et soluta rerum illo nesciunt eum.",
                },
                {
                    title: "Trust & Vulnerability",
                    description:
                        "Consequatur minima iure. Sed ea totam. Eveniet dicta veritatis dignissimos debitis consectetur. Sapiente voluptatibus ipsa tempora id voluptas nostrum soluta consequatur. Ea ut debitis aliquam quia. Doloribus corporis consequatur. Excepturi aut praesentium eveniet ex. Quos animi in sequi. Aperiam a perferendis pariatur facere eveniet inventore.Cumque dignissimos quia incidunt consequuntur. Ut et illo quo non nihil illum nesciunt repudiandae sed. Labore est et soluta rerum illo nesciunt eum.",
                },
            ],
        },
        {
            name: "Modularity",
            style: { top: "50%", left: "50%", transform: "translate(-10%, -20%)" },
            content: [
                {
                    title: "Trust & Vulnerability",
                    description:
                        "Consequatur minima iure. Sed ea totam. Eveniet dicta veritatis dignissimos debitis consectetur. Sapiente voluptatibus ipsa tempora id voluptas nostrum soluta consequatur. Ea ut debitis aliquam quia. Doloribus corporis consequatur. Excepturi aut praesentium eveniet ex. Quos animi in sequi. Aperiam a perferendis pariatur facere eveniet inventore.Cumque dignissimos quia incidunt consequuntur. Ut et illo quo non nihil illum nesciunt repudiandae sed. Labore est et soluta rerum illo nesciunt eum.",
                },
                {
                    title: "Trust & Vulnerability",
                    description:
                        "Consequatur minima iure. Sed ea totam. Eveniet dicta veritatis dignissimos debitis consectetur. Sapiente voluptatibus ipsa tempora id voluptas nostrum soluta consequatur. Ea ut debitis aliquam quia. Doloribus corporis consequatur. Excepturi aut praesentium eveniet ex. Quos animi in sequi. Aperiam a perferendis pariatur facere eveniet inventore.Cumque dignissimos quia incidunt consequuntur. Ut et illo quo non nihil illum nesciunt repudiandae sed. Labore est et soluta rerum illo nesciunt eum.",
                },
            ],
        },
        {
            name: "Access",
            style: { top: "50%", left: "50%", transform: "translate(-90%,-20%)" },
            content: [
                {
                    title: "Trust & Vulnerability",
                    description:
                        "Consequatur minima iure. Sed ea totam. Eveniet dicta veritatis dignissimos debitis consectetur. Sapiente voluptatibus ipsa tempora id voluptas nostrum soluta consequatur. Ea ut debitis aliquam quia. Doloribus corporis consequatur. Excepturi aut praesentium eveniet ex. Quos animi in sequi. Aperiam a perferendis pariatur facere eveniet inventore.Cumque dignissimos quia incidunt consequuntur. Ut et illo quo non nihil illum nesciunt repudiandae sed. Labore est et soluta rerum illo nesciunt eum.",
                },
                {
                    title: "Trust & Vulnerability",
                    description:
                        "Consequatur minima iure. Sed ea totam. Eveniet dicta veritatis dignissimos debitis consectetur. Sapiente voluptatibus ipsa tempora id voluptas nostrum soluta consequatur. Ea ut debitis aliquam quia. Doloribus corporis consequatur. Excepturi aut praesentium eveniet ex. Quos animi in sequi. Aperiam a perferendis pariatur facere eveniet inventore.Cumque dignissimos quia incidunt consequuntur. Ut et illo quo non nihil illum nesciunt repudiandae sed. Labore est et soluta rerum illo nesciunt eum.",
                },
                {
                    title: "Trust & Vulnerability",
                    description:
                        "Consequatur minima iure. Sed ea totam. Eveniet dicta veritatis dignissimos debitis consectetur. Sapiente voluptatibus ipsa tempora id voluptas nostrum soluta consequatur. Ea ut debitis aliquam quia. Doloribus corporis consequatur. Excepturi aut praesentium eveniet ex. Quos animi in sequi. Aperiam a perferendis pariatur facere eveniet inventore.Cumque dignissimos quia incidunt consequuntur. Ut et illo quo non nihil illum nesciunt repudiandae sed. Labore est et soluta rerum illo nesciunt eum.",
                },
                {
                    title: "Trust & Vulnerability",
                    description:
                        "Consequatur minima iure. Sed ea totam. Eveniet dicta veritatis dignissimos debitis consectetur. Sapiente voluptatibus ipsa tempora id voluptas nostrum soluta consequatur. Ea ut debitis aliquam quia. Doloribus corporis consequatur. Excepturi aut praesentium eveniet ex. Quos animi in sequi. Aperiam a perferendis pariatur facere eveniet inventore.Cumque dignissimos quia incidunt consequuntur. Ut et illo quo non nihil illum nesciunt repudiandae sed. Labore est et soluta rerum illo nesciunt eum.",
                },
                {
                    title: "Trust & Vulnerability",
                    description:
                        "Consequatur minima iure. Sed ea totam. Eveniet dicta veritatis dignissimos debitis consectetur. Sapiente voluptatibus ipsa tempora id voluptas nostrum soluta consequatur. Ea ut debitis aliquam quia. Doloribus corporis consequatur. Excepturi aut praesentium eveniet ex. Quos animi in sequi. Aperiam a perferendis pariatur facere eveniet inventore.Cumque dignissimos quia incidunt consequuntur. Ut et illo quo non nihil illum nesciunt repudiandae sed. Labore est et soluta rerum illo nesciunt eum.",
                },
            ],
        },
    ];

    return (
        <section className="section h-screen overflow-hidden">
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
                            </div>
                        ))}
                    </div>
                    <div className="max-w-lg mt-2 mx-auto">
                        We want to be the most transparent company in the world and we will do that
                        through practicing clarity, embracing vulnerability to achieve the ability
                        to regulate ourselves.
                    </div>
                </div>
                <div className="w-full max-w-lg flex-none">
                    <div className="px-10 py-16 overflow-y-scroll">
                        <h2 className="text-3xl mb-2">Everything we do, we believe in.</h2>
                        {valuesArr[currentIndex] &&
                            renderAccordion(valuesArr[currentIndex].content)}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DiagramSection;
