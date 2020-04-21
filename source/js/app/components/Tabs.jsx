import React from "react";
import PropTypes from "prop-types";

// import ProductTimeline from "./ProductTimeline";

class Vision extends React.Component {
  constructor(props) {
    super(props);

    const content = JSON.parse(props.content);

    this.state = {
      classes: {
        tab: {
          default:
            "tab cursor-pointer leading-none rounded-t border border-b-0 text-xs font-bold uppercase tracking-wider px-5 py-3 -mr-px relative",
          dead:
            "bg-transparent text-gray-500 border-gray-300 hover:text-gray-700 relative z-0",
          active: "bg-white border-gray-500 text-gray-800 z-10",
        },
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
      selectedTab: content[0].name,
      detailPosition: 0,
      content: content,
    };

    // bind state
    this.updateSelected = this.updateSelected.bind(this);
    // this.changeActiveText = this.changeActiveText.bind(this);
  }

  // changeActiveText(i) {
  //   const { detailPosition } = this.state;
  //   let str;

  //   if (i < parseInt(detailPosition)) str = "translateY(-110%)";
  //   if (i == parseInt(detailPosition)) str = "translateY(0)";
  //   if (i > parseInt(detailPosition)) str = "translateY(110%)";

  //   return str;
  // }

  updateSelected() {
    const product = event.target.getAttribute("data-product");
    const index = event.target.getAttribute("data-index");

    this.setState(() => ({
      selectedTab: product,
      detailPosition: index,
      active: false,
    }));
  }

  componentDidMount() {
    this.setState({ active: true });
  }
  render() {
    const { updateSelected } = this;
    const { content, classes, selectedTab } = this.state;

    return (
      <div className="py-24">
        <div className="container mx-auto flex flex-wrap overflow-hidden">
          <div className="px-2 relative flex flex-wrap justify-start w-full z-20 -mb-px">
            {content.map(({ name }, i) => (
              <div
                onClick={updateSelected}
                className={
                  classes.tab.default +
                  " " +
                  (selectedTab == name ? classes.tab.active : classes.tab.dead)
                }
                key={i}
                data-product={name}
                data-index={i}
              >
                {name}
              </div>
            ))}
          </div>
          <div className="p-0 md:py-10 md:pl-10 border border-gray-500 rounded-md bg-white w-full relative flex items-center">
            {content.map(({ name, description, cta }, i) => {
              return (
                <div
                  key={i}
                  className={
                    "content p-5 " + (selectedTab == name ? "block" : "hidden")
                  }
                >
                  <h1 className="text-slide-animation text-4xl h-16 text-gray-800 font-light mb-3">
                    {name}
                  </h1>
                  <p
                    className="mb-8 text-lg text-gray-700"
                    style={{ columnCount: 2 }}
                  >
                    {description}
                  </p>
                  {cta ? <a className="button">Read More</a> : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

Vision.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Vision;
