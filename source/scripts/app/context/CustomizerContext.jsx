import React from "react";

export const CustomizerContext = React.createContext();

class ContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        images: [
          "https://source.unsplash.com/random/800x601/?nature",
          "https://source.unsplash.com/random/800x601/?work",
          "https://source.unsplash.com/random/800x601/?camera",
          "https://source.unsplash.com/random/800x601/?green",
        ],
        packSizes: [
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
        ],
      },
      chosenImage: "https://source.unsplash.com/random/800x601/?nature",
      chosenPackSize: 1,
      subscription: true,
      renewal: 30,
    };

    // this.updateChosenImage = this.updateChosenImage.bind(this);
    //   updatePackSize: function (val) {
    //     return new Promise((resolve) => {
    //       this.setState({ packSize: val });

    //       resolve();
    //     });
    //   },
    //   updateSubscription: function (val) {
    //     return new Promise((resolve) => {
    //       this.setState({ subscription: val });

    //       resolve();
    //     });
    //   },
    //   updateRenewal: function (val) {
    //     return new Promise((resolve) => {
    //       this.setState({ renewal: val });

    //       resolve();
    //     });
    //   },
    // }}
  }

  render() {
    return (
      <CustomizerContext.Provider
        value={{
          state: this.state,
          updateChosenImage: (val) => {
            this.setState({ chosenImage: val });
          },
          updatePackSize: (val) => {
            this.setState({ chosenPackSize: val });
          },
          updateRenewal: (val) => {
            this.setState({ renewal: val });
          },
          updateSubscription: (val) => {
            this.setState({ subscription: val });
          },
        }}
      >
        {this.props.children}
      </CustomizerContext.Provider>
    );
  }
}

export default ContextProvider;
