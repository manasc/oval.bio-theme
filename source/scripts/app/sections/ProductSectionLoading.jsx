import React, { useEffect, useState } from "react";
import { Tooltip } from "react-tippy";
import { Shimmer, ShimmerElementsGroup, ShimmerElementType } from "office-ui-fabric-react/lib/Shimmer";

function ProductSection({ productData }) {
    console.log(productData);

    const packSizes = [
        {
            quantity: 1,
            cost: 5,
        },
        {
            quantity: 5,
            cost: 4,
        },
        {
            quantity: 10,
            cost: 3,
        },
    ];

    const [chosenImage, setChosenImage] = useState(1);
    const [chosenPackSize, setChosenPackSize] = useState(1);
    const [subscription, setSubscription] = useState(true);

    return (
        <div className="py-5 md:py-10 max-w-5xl mx-auto">
            <div className="flex flex-wrap mx-0 md:-mx-5">
                <div className="w-full md:w-2/3 px-5">
                    <div>
                        Hello
                        <ShimmerElementsGroup
                            width={"90px"}
                            shimmerElements={[
                                { type: ShimmerElementType.line, height: 80, width: 80 },
                                { type: ShimmerElementType.gap, width: 10, height: 80 },
                            ]}
                        />
                        <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
                            <ShimmerElementsGroup
                                shimmerElements={[
                                    { type: ShimmerElementType.circle, height: 40 },
                                    { type: ShimmerElementType.gap, width: 10, height: 40 },
                                ]}
                            />
                            <ShimmerElementsGroup
                                flexWrap
                                width={"calc(100% - 50px)"}
                                shimmerElements={[
                                    { type: ShimmerElementType.line, width: "90%", height: 10 },
                                    { type: ShimmerElementType.gap, width: "10%", height: 20 },
                                    { type: ShimmerElementType.line, width: "100%", height: 10 },
                                ]}
                            />
                            <ShimmerElementsGroup
                                flexWrap
                                width={"100%"}
                                shimmerElements={[
                                    { type: ShimmerElementType.line, width: "80%", height: 10, verticalAlign: "bottom" },
                                    { type: ShimmerElementType.gap, width: "20%", height: 20 },
                                    { type: ShimmerElementType.line, width: "40%", height: 10, verticalAlign: "bottom" },
                                    { type: ShimmerElementType.gap, width: "2%", height: 20 },
                                    { type: ShimmerElementType.line, width: "58%", height: 10, verticalAlign: "bottom" },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductSection;
