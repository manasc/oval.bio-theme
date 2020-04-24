import React from "react";
import ContextProvider, {
  CustomizerContext
} from "../context/CustomizerContext";
import { Tooltip } from "react-tippy";

class Customizer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ContextProvider>
        <div className="container max-w-4xl mx-auto">
          <div className="flex flex-wrap mx-0 md:-mx-5">
            <div className="w-full md:w-3/5 px-5">
              <div className="customizer-product-box">
                <CustomizerContext.Consumer>
                  {context => {
                    const { options, chosenImage } = context.state;
                    const { updateChosenImage } = context;

                    return (
                      <React.Fragment>
                        <div
                          id="display-image"
                          className="square-image mb-px md:mb-2"
                          style={{
                            backgroundImage: "url(" + chosenImage + ")"
                          }}
                        />
                        <div id="other-images" className="flex flex-wrap -mx-1">
                          {options.images.map((imageURL, i) => {
                            return (
                              <div
                                className="w-1/4 px-px md:px-1"
                                key={i}
                                onClick={() => {
                                  updateChosenImage(imageURL);
                                }}
                              >
                                <div
                                  className={
                                    chosenImage == imageURL
                                      ? "square-image cursor-pointer shadow-md border border-red-700"
                                      : "square-image cursor-pointer shadow-md border hover:opacity-75"
                                  }
                                  style={{
                                    backgroundImage: "url(" + imageURL + ")"
                                  }}
                                />
                              </div>
                            );
                          })}
                        </div>
                      </React.Fragment>
                    );
                  }}
                </CustomizerContext.Consumer>
              </div>
            </div>
            <div className="w-full md:w-2/5 px-5">
              <div className="py-5">
                <div className="hidden md:block title font-bold text-3xl">Heliopatch</div>
                <div className="hidden md:block desc text-sm font-light leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis magnam laborum, quas voluptates sapiente est
                  aspernatur itaque quod, voluptatibus iusto nulla illum. Qui,
                  explicabo quasi consectetur tenetur reprehenderit aliquam
                  temporibus.
                </div>
                <div className="options my-5">
                  <div className="font-bold text-base mb-2">
                    Choose pack size:
                  </div>
                  <div className="flex">
                    <CustomizerContext.Consumer>
                      {context => {
                        const { chosenPackSize, options } = context.state;
                        const { updatePackSize } = context;

                        return options.packSizes.map(size => (
                          <label
                            key={size.quantity}
                            className={
                              "pack-option mr-3 " +
                              (size.quantity == chosenPackSize ? "active" : "")
                            }
                            onClick={() => {
                              updatePackSize(size.quantity);
                            }}
                          >
                            <div className="pack-option-box">
                              <div className="pack-option-number">
                                {size.quantity}{" "}
                              </div>
                              <div className="pack-option-text">Pack</div>
                            </div>
                            <div className="pack-option-meta">
                              ${size.cost}/Patch
                            </div>
                            <input type="radio" name="pack-size" value="1" />
                          </label>
                        ));
                      }}
                    </CustomizerContext.Consumer>
                  </div>
                </div>
                <div className="options my-5">
                  <div className="text-sm mb-2">
                    Subscribe and Save{" "}
                    <span className="text-ovalGreen font-bold">save 20%</span>{" "}
                    more:
                  </div>
                  <div className="flex">
                    <CustomizerContext.Consumer>
                      {context => {
                        const { subscription } = context.state;
                        const { updateSubscription } = context;

                        return (
                          <React.Fragment>
                            <label
                              onClick={() => {
                                updateSubscription(false);
                              }}
                              className={!subscription ? "active" : ""}
                            >
                              <div className="button-input">
                                <span className="label-text">One Day</span>
                              </div>
                              <input type="radio" name="subscription" />
                            </label>
                            <label
                              onClick={() => {
                                updateSubscription(true);
                              }}
                              className={subscription ? "active" : ""}
                            >
                              <div className="button-input">
                                <span className="label-text">Subscription</span>
                              </div>
                              <input type="radio" name="subscription" />
                            </label>
                          </React.Fragment>
                        );
                      }}
                    </CustomizerContext.Consumer>
                  </div>
                </div>
                <div className="options mt-5 mb-10">
                  <CustomizerContext.Consumer>
                    {context => {
                      const { subscription, renewal } = context.state;
                      const { updateRenewal } = context;

                      if (subscription) {
                        return (
                          <React.Fragment>
                            <div className="text-sm mb-2">
                              Choose a renewal frequency
                            </div>
                            <div className="flex">
                              <label
                                onClick={() => {
                                  updateRenewal(30);
                                }}
                                className={renewal == 30 ? "active" : ""}
                              >
                                <div className="button-input">
                                  <span className="label-text">30-Day</span>
                                </div>
                                <input type="radio" name="renewal" />
                              </label>
                              <label
                                onClick={() => {
                                  updateRenewal(60);
                                }}
                                className={renewal == 60 ? "active" : ""}
                              >
                                <div className="button-input">
                                  <span className="label-text">60-Day</span>
                                </div>
                                <input type="radio" name="renewal" />
                              </label>
                            </div>
                          </React.Fragment>
                        );
                      }
                    }}
                  </CustomizerContext.Consumer>
                </div>
                <div className="options my-5">
                  <div className="font-bold text-base">Total</div>
                  <CustomizerContext.Consumer>
                    {context => {
                      const { subscription } = context.state;

                      if (subscription) {
                        return (
                          <div className="title font-bold text-3xl">
                            <span className="line-through text-gray-400">
                              $30.00
                            </span>
                            <span className="ml-2 text-ovalGreen">$24.00</span>
                          </div>
                        );
                      } else {
                        return (
                          <div className="title font-bold text-3xl">
                            <span className="text-ovalGreen">$30.00</span>
                          </div>
                        );
                      }
                    }}
                  </CustomizerContext.Consumer>
                </div>
                <div className="options my-5">
                  {/* <!-- TODO: popup prompting to read further info if necessary --> */}
                  <div className="mb-2 text-sm leading-snug">
                    Purchase this product now and earn{" "}
                    <span className="text-ovalGreen font-bold mr-2">
                      40 points toward the Pod
                    </span>
                    <Tooltip title="How does this work?" size="small">
                      <i className="fas fa-question-circle cursor-pointer" />
                    </Tooltip>
                  </div>
                </div>
                <a className="button w-full">Purchase</a>
              </div>
            </div>
          </div>
        </div>
      </ContextProvider>
    );
  }
}

export default Customizer;
