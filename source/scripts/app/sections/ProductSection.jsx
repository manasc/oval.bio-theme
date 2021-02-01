import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Drift from "drift-zoom";

import Alert from "../components/Alert";

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

function VariantSelector({ attributes, onChange }) {
    const [chosenOption, setChosenOption] = useState(attributes.terms[0].slug);

    useEffect(() => {
        onChange(chosenOption);
    }, [chosenOption]);

    // name, terms, has_variations

    const type = {
        "Pack Size": (
            <div className="pack-options">
                {attributes.terms.map(({ name, slug }, i) => (
                    <label key={i} className={"pack-option mr-4"} onClick={() => setChosenOption(slug)}>
                        <input onChange={onChange} name={attributes.name} type="radio" value={slug} checked={slug === chosenOption} />
                        <div className="pack-option-box">
                            <div className="pack-option-number">{name}</div>
                        </div>
                    </label>
                ))}
            </div>
        ),
        Color: (
            <div className="flex -mx-1">
                {attributes.terms.map(({ name, slug }, i) => (
                    <label key={i} className="px-1 cursor-pointer" onClick={() => setChosenOption(name)} style={{ marginRight: 0 }}>
                        <input
                            type="radio"
                            onChange={onChange}
                            name={attributes.name}
                            value={name}
                            className="hidden"
                            checked={name === chosenOption}
                        />
                        <div
                            className={
                                "h-8 w-8 shadow rounded bg-" +
                                name.toLowerCase() +
                                (name === "Black" || name === "White" ? "" : "-500") +
                                " " +
                                (chosenOption === name && "border-2 border-ovalGreenDark")
                            }
                        />
                    </label>
                ))}
            </div>
        ),
        default: (
            <div className="relative inline-block w-full text-gray-700">
                <select
                    className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none"
                    placeholder="Regular input"
                    name={attributes.name}
                    onChange={(e) => setChosenOption(e.target.value)}
                >
                    {attributes.terms.map(({ name, slug }, i) => (
                        <option key={i} value={name}>
                            {name}
                        </option>
                    ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                        ></path>
                    </svg>
                </div>
            </div>
        ),
    };

    return (
        attributes.has_variations && (
            <div className="options my-8">
                <div className="font-bold text-xs tracking-wider uppercase text-gray-800 mb-2">Choose {attributes.name}:</div>
                {type[attributes.name] || type["default"]}
            </div>
        )
    );
}

function ProductSection({ productId, productData, nonceId }) {
    const [showAlert, setShowAlert] = useState(false);
    const [addItemStatus, setAddItemStatus] = useState("success");
    const [alertText, setAlertText] = useState("This is the alert.");
    const [chosenImage, setChosenImage] = useState(0);
    const [chosenPackSize, setChosenPackSize] = useState(0);
    const [subscription, setSubscription] = useState(true);

    const getVariantID = (formInputs, fieldKeys, variations) => {
        // loop through variants
        console.log(formInputs, fieldKeys, variations);

        // create object
        const currentVariant = [];

        fieldKeys.forEach((f) =>
            currentVariant.push({
                name: f,
                value: formInputs[f].value,
            })
        );
        
        // formInputs
        const variant = variations.find((v) => JSON.stringify(v.attributes) === JSON.stringify(currentVariant));

        return variant;
    };

    const addProduct = (e) => {
        e.preventDefault();
        console.log(productData.has_variations);

        const fieldKeys = productData.attributes.map((attr) => attr.name);
        const variant = getVariantID(document.forms.productSection.elements, fieldKeys, productData.variations);

        // console.log(variantId);
        let data;

        if (productData.has_options) {
            data = {
                variation: variant.attributes,
                quantity: 10,
            };
        } else {
            data = {
                id: productId,
                quantity: 10,
            };
        }

        axios({
            method: "post",
            url: "/wp-json/wc/store/cart/add-item",
            data,
            headers: {
                "X-WC-Store-API-Nonce": nonceId,
            },
        })
            .then((res) => {
                console.log(res);
                setShowAlert(true);
                setAddItemStatus("success");
                setAlertText(productData.name + " has been added to your cart!");
            })
            .catch((err, msg) => {
                setShowAlert(true);
                setAddItemStatus("error");
                setAlertText(err.response.data.message);
            })
            .then(() => {
                setTimeout(() => {
                    setShowAlert(false);
                }, 6000);
            });
    };

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
        <div className="pb-5 md:py-8">
            {showAlert && <Alert text={alertText} status={addItemStatus} showAlertFunc={setShowAlert} />}
            <div className="flex flex-wrap mx-0 md:-mx-5">
                <div className="w-full md:w-2/3 px-5">
                    <div ref={galleryBox} className="nmr-image-gallery-box">
                        <div className="nmr-image-gallery relative overflow-hidden rounded border">
                            <div className="square-image"></div>
                            {productData.images.map((image, i) => {
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
                                            <div className="image-zoom absolute top-0 left-0 w-full h-full"></div>
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
                        <div
                            className="hidden md:block desc text-sm font-light leading-tight my-2"
                            dangerouslySetInnerHTML={{ __html: productData.description }}
                        />
                        <form form id="productSection" onSubmit={addProduct}>
                            <div className="flex flex-wrap my-2">
                                {productData.categories &&
                                    productData.categories.length > 0 &&
                                    productData.categories.map((cat) => (
                                        <div id={cat.slug} key={cat.name} className="text-2xs px-2 py-1 uppercase bg-ovalGreen mr-1 mb-1">
                                            <span className="label-text text-2xs">{cat.name}</span>
                                        </div>
                                    ))}
                                {productData.tags &&
                                    productData.tags.length > 0 &&
                                    productData.tags.map((tag) => (
                                        <div
                                            id={tag.slug}
                                            key={tag.name}
                                            className="text-2xs px-2 py-1 uppercase bg-slateBlueLight mr-1 mb-1"
                                        >
                                            <span className="label-text text-2xs">{tag.name}</span>
                                        </div>
                                    ))}
                            </div>
                            {productData.attributes.map((attribute, i) => (
                                <VariantSelector key={i} attributes={attribute} onChange={(e) => console.log(e)} />
                            ))}
                            <div className="options my-10">
                                <div className="font-bold text-xs tracking-wider uppercase text-gray-800 mb-2">Subscription</div>
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
                                </div>
                                <div className="font-bold text-2xs tracking-wider text-gray-800 mb-2">
                                    {subscription ? (
                                        <span>
                                            You're <span className="text-ovalGreenDark">saving 20%</span>
                                        </span>
                                    ) : (
                                        <span>
                                            Subscribe and save <span className="text-ovalGreenDark">20% more.</span>
                                        </span>
                                    )}
                                    <span>Renews every 30 days.</span>
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
                                                    ${Math.floor(packSizes[chosenPackSize].quantity * packSizes[chosenPackSize].cost * 0.6)}
                                                    .00
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
                                <button type="submit" className="button waves-effect w-full">
                                    <span className="label-text">Purchase</span>
                                </button>
                                <div className="mt-3 text-xs leading-snug max-w-2xs italic">30 day guarantee. Cancel Anytime.</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductSection;
