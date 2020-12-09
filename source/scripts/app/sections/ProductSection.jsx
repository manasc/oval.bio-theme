import React, { useRef, useEffect, useState } from "react";
import { Tooltip } from "react-tippy";
import Drift from "drift-zoom";

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

    const [chosenImage, setChosenImage] = useState(0);
    const [chosenPackSize, setChosenPackSize] = useState(0);
    const [subscription, setSubscription] = useState(true);

    const galleryBox = useRef(null);

    const imageDisplay = (key) => {
        // get numeric distance between chosenImage
        const distance = Math.abs(chosenImage - key) * 100;

        if (key < chosenImage) {
            return -1 * distance + "%";
        } else if (key > chosenImage) {
            return distance + "%";
        } else {
            return "0";
        }
    };

    useEffect(() => {
        if (galleryBox) {
            const zoomBoxes = galleryBox.current.querySelectorAll("[data-zoom]");

            zoomBoxes.forEach((box) => {
                new Drift(box, {
                    paneContainer: box.querySelector(".image-zoom"),
                    inlinePane: false,
                });
            });
        }
    }, [galleryBox]);

    return (
        <div className="py-5 md:py-10 max-w-5xl mx-auto">
            <div className="flex flex-wrap mx-0 md:-mx-5">
                <div className="w-full md:w-2/3 px-5">
                    <div ref={galleryBox} className="nmr-image-gallery-box">
                        <div className="nmr-image-gallery relative overflow-hidden rounded border">
                            <div className="square-image"></div>
                            {productData.images.map((image, i) => {
                                console.log(image);
                                if (i < 5)
                                    return (
                                        <div
                                            data-zoom={image.src}
                                            key={i}
                                            className="absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat"
                                            style={{
                                                backgroundImage: "url(" + image.src + ")",
                                                transitionDuration: "400ms",
                                                transform: "translateX(" + imageDisplay(i) + ")",
                                            }}
                                        >
                                            <div className="image-zoom absolute top-0 left-0 w-full h-full bg-white"></div>
                                        </div>
                                    );
                            })}
                        </div>
                        <div className="nmr-image-gallery-nav">
                            <div className="flex flex-wrap -mx-px my-px py-px">
                                {productData.images.map(
                                    (image, i) =>
                                        i < 5 && (
                                            <div
                                                key={i}
                                                className={"w-1/5 px-px py-px nmr-image " + (chosenImage === i && "active")}
                                                style={{ transitionDuration: "200ms" }}
                                                onClick={() => setChosenImage(i)}
                                            >
                                                <div
                                                    className="square-image nmr-lazyload"
                                                    style={{ backgroundImage: "url(" + image.src + ")" }}
                                                />
                                            </div>
                                        )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-5">
                    <div className="py-5">
                        <div className="hidden md:block title font-bold text-3xl mb-1">{productData.name}</div>
                        <div className="labels mb-2">
                            {productData.categories.map((cat, i) => (
                                <div key={i} className="label">
                                    <span className="label-text">{cat.name}</span>
                                </div>
                            ))}
                        </div>
                        <div
                            className="hidden md:block desc text-sm font-light leading-tight"
                            dangerouslySetInnerHTML={{ __html: productData.description }}
                        />
                        <div className="options my-5">
                            <div className="font-bold text-xs tracking-wider uppercase text-gray-800 mb-2">Choose pack size:</div>
                            <div className="pack-options">
                                {packSizes.map((size, i) => (
                                    <label key={i} className={"pack-option mr-4"} onClick={() => setChosenPackSize(i)}>
                                        <input type="radio" name="pack-size" value={i} defaultChecked={i === chosenPackSize} />
                                        <div className="pack-option-box">
                                            <div className="pack-option-number">{size.quantity}</div>
                                            <div className="pack-option-text">Pack</div>
                                        </div>
                                        <div className="pack-option-box-meta">${size.cost}/Patch</div>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="options my-10">
                            <div className="font-bold text-xs tracking-wider uppercase text-gray-800 mb-2">
                                {subscription ? (
                                    <span className="subscription-meta">
                                        You're <span className="text-ovalGreenDark">saving 20%</span>
                                    </span>
                                ) : (
                                    <span className="subscription-meta">
                                        Subscribe and save <span className="text-ovalGreenDark">20% more.</span>
                                    </span>
                                )}
                            </div>
                            <div className="block sub-options">
                                <label onClick={() => setSubscription(false)} className="sub-option">
                                    <input type="radio" name="subscription" defaultChecked={!subscription} />
                                    <div className="sub-option-box" style={{ transitionDuration: "200ms" }}>
                                        One-Time
                                    </div>
                                </label>
                                <label onClick={() => setSubscription(true)} className="sub-option">
                                    <input type="radio" name="subscription" defaultChecked={subscription} />
                                    <div className="sub-option-box" style={{ transitionDuration: "200ms" }}>
                                        Subscription
                                    </div>
                                </label>

                                <div className="text-2xs text-gray-500 italic leading-snug max-w-3xs mt-2">
                                    Renews every 30 days. Subscribe and{" "}
                                    <span id="points" className="text-ovalGreen font-bold mr-1">
                                        save 20%
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="options my-10">
                            <div className="label-text text-sm mb-2">{subscription && "Subscription"} Total</div>
                            <div className="title text-4xl leading-none">
                                <div className="relative flex items-start font-normal tracking-tight">
                                    <span id="price" className={"text-gray-400 inline-block " + (subscription && "line-through")}>
                                        <span id="priceValue">
                                            ${packSizes[chosenPackSize].quantity * packSizes[chosenPackSize].cost}.00
                                        </span>
                                    </span>
                                    {subscription && (
                                        <span id="subPrice" className="ml-2 text-ovalGreen relative inline-block">
                                            <span id="subPriceValue">
                                                ${Math.floor(packSizes[chosenPackSize].quantity * packSizes[chosenPackSize].cost * 0.6)}.00
                                            </span>
                                            <div className="relative block text-2xs text-gray-600 uppercase text-right tracking-normal">
                                                per month
                                            </div>
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="mb-3 text-xs leading-snug max-w-2xs italic">
                                Purchase this product now and earn{" "}
                                <span id="points" className="text-ovalGreen font-bold mr-1">
                                    40 points toward the Pod
                                </span>
                                <i className="fas fa-question-circle cursor-pointer"></i>
                            </div>
                            <a className="button waves-effect w-full">
                                <span className="label-text">Purchase</span>
                            </a>
                            <div className="mt-3 text-xs leading-snug max-w-2xs italic">30 day guarantee. Cancel Anytime.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductSection;
