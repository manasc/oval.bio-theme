import React from "react";

class Vision extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: {
        tab: "tab cursor-pointer w-full md:w-1/6 text-center py-3 leading-none",
        tabText: "text-xs lg:text-sm font-bold uppercase tracking-wider",
      },
      styles: {
        positions: [
          { transform: "translate(2em,2em)" },
          { transform: "translate(20em,6em)" },
          { transform: "translate(4em,10em)" },
          { transform: "translate(5em,2em)" },
          { transform: "translate(6em,5em)" },
          { transform: "translate(7em,2em)" },
        ],
      },
      selectedTab: "LunaPatch",
      detailPosition: 0,
      products: [
        "LunaPatch",
        "HelioPatch",
        "Hydrogen Water",
        "Noomino",
        "Balding Grey",
        "Bactose",
      ],
      el: null,
    };

    // refs
    this.visionHero = React.createRef();

    // bind state
    this.updateSelected = this.updateSelected.bind(this);
    this.changeActiveText = this.changeActiveText.bind(this);
  }

  changeActiveText(i) {
    const { detailPosition } = this.state;
    let str;

    if (i < parseInt(detailPosition)) str = "translateY(-110%)";
    if (i == parseInt(detailPosition)) str = "translateY(0)";
    if (i > parseInt(detailPosition)) str = "translateY(110%)";

    return str;
  }

  updateSelected() {
    const product = event.target.getAttribute("data-product");
    const index = event.target.getAttribute("data-index");

    this.setState(() => ({
      selectedTab: product,
      detailPosition: index,
    }));
  }

  componentDidMount() {
    // var slider = setInterval(() => {
    //   console.log("It's goiiiiing");
    //   // this.state.selectedTab;
    //   // find index of current product in product arr
    //   // set "selectedTab" to next one in arr
    // }, 1000);

    // console.log(this.visionHero.current);

    // this.visionHero.current.addEventListener("mouseover", () => {
    //   console.log("Stufffffff");
    //   clearInterval(slider);
    // });
  }

  render() {
    const { updateSelected, changeActiveText } = this;
    const {
      products,
      styles,
      detailPosition,
      classes,
      selectedTab,
    } = this.state;
    return (
      <div ref={this.visionHero} className="p-0 md:p-5">
        <div className="flex flex-wrap rounded-none md:rounded-md overflow-hidden">
          <div className="p-0 md:px-24 md:py-48 bg-ovalGreen w-full relative">
            <div className="content p-5 md:p-0 max-w-sm">
              <h1 className="text-slide-animation text-4xl h-16 text-white font-light mb-3">
                {products.map((product, i) => (
                  <span
                    className="text"
                    key={product}
                    style={{ transform: changeActiveText(i) }}
                  >
                    {product}
                  </span>
                ))}
              </h1>
              <p className="mb-8 text-lg text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
                a amet volutpat vel.
              </p>
              <a className="button white">All Products</a>
            </div>
            <div className="picture w-full block md:w-3/5 h-64 md:h-full relative md:absolute top-0 right-0 overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat absolute top-0 right-0"
                style={{
                  backgroundImage:
                    "url(https://dev.oval.bio/app/themes/oval.bio-theme/source/images/Pod.png)",
                }}
              />
              <div
                className="h-32 w-32 rounded-full absolute bg-white shadow top-0 left-0"
                style={{
                  ...styles.positions[detailPosition],
                  transitionDuration: "300ms",
                }}
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-start w-full">
            {products.map((product, i) => (
              <div
                onClick={updateSelected}
                className={
                  classes.tab +
                  " " +
                  (selectedTab == product
                    ? "bg-ovalGreen"
                    : "bg-gray-800  hover:bg-gray-700")
                }
                key={product}
                data-product={product}
                data-index={i}
              >
                <span
                  className={
                    classes.tabText +
                    " " +
                    (selectedTab == product ? "text-gray-800" : "text-white")
                  }
                >
                  {product}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Vision;
