import React, { useEffect } from "react";
import { Tooltip } from "react-tippy";

function NutritionIngredientSection({ data }) {
    let featuredArr = [];
    let generalArr = [];

    // filter data
    data.ingredients &&
        data.ingredients.forEach((item) => {
            item.image && item.description ? featuredArr.push(item) : generalArr.push(item);
        });

    return (
        <section className="content-box">
            <div className="max-w-3xl mx-auto">
                <h1 className="subtitle md:text-center">Nutrition & Ingredients</h1>
                <div className="anchor-content text-base" dangerouslySetInnerHTML={{ __html: data.nutrition_explanation }} />

                {featuredArr.length > 0 && (
                    <div className="my-10">
                        <div className="labels">
                            <div className="label">
                                <span className="label-text">Main Ingredients</span>
                            </div>
                        </div>

                        <div className="content-box-secondary">
                            {featuredArr.map((item, i) => (
                                <div key={i} className="ingredient flex flex-wrap -mx-2 mb-4">
                                    <div className="number flex-none pl-2">
                                        <div className="round-full w-5 h-5 bg-ovalGreen text-xs flex items-center justify-center">
                                            {i + 1}
                                        </div>
                                    </div>
                                    <div className="image-box bg-cover hidden md:block w-1/3 pr-2">
                                        <div
                                            className="w-full bg-cover bg-center bg-no-repeat"
                                            style={{ paddingTop: "100%", backgroundImage: `url(${item.image.url})` }}
                                        ></div>
                                    </div>
                                    <div className="content flex-1 px-2 py-0 md:py-2">
                                        <h5 className="font-bold">{item.ingredient}</h5>
                                        <div className="text-sm" dangerouslySetInnerHTML={{ __html: item.description }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {generalArr.length > 0 && (
                    <div className="mb-5">
                        <div className="labels">
                            <div className="label">
                                <span className="label-text">Other Ingredients</span>
                            </div>
                        </div>

                        <div className="content-box-secondary">
                            {generalArr.map((item, i) => (
                                <React.Fragment key={i}>
                                    <Tooltip title={item.description} size="small">
                                        {item.ingredient}
                                    </Tooltip>
                                    {i < generalArr.length - 1 && ", "}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default NutritionIngredientSection;
