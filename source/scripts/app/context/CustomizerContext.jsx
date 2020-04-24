import React from "react";

export const CustomizerContext = React.createContext();

class ContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        images: [
          "https://images.unsplash.com/photo-1546667882-3ea72f6e2714?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDYyMn0",
          "https://images.unsplash.com/photo-1547700920-d144230de2c6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDYyMn0",
          "https://images.unsplash.com/photo-1584863431255-3997371dcc01?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDYyMn0",
          "https://images.unsplash.com/photo-1533012562945-b003ce1d3269?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDYyMn0"
        ],
        packSizes: [
          {
            quantity: 1,
            cost: 5
          },
          {
            quantity: 5,
            cost: 4
          },
          {
            quantity: 10,
            cost: 3
          }
        ]
      },
      chosenImage: null,
      chosenPackSize: 1,
      subscription: true,
      renewal: 30
    };

    this.state.chosenImage = this.state.options.images[0];
  }

  render() {
    return (
      <CustomizerContext.Provider
        value={{
          state: this.state,
          updateChosenImage: val => {
            this.setState({ chosenImage: val });
          },
          updatePackSize: val => {
            this.setState({ chosenPackSize: val });
          },
          updateRenewal: val => {
            this.setState({ renewal: val });
          },
          updateSubscription: val => {
            this.setState({ subscription: val });
          }
        }}
      >
        {this.props.children}
      </CustomizerContext.Provider>
    );
  }
}

export default ContextProvider;
