import React from "react";
import Chooser from "./Chooser";
import CustomizerContext from "../context/CustomizerContext";

class Choices extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenValue: 1,
    };

    this.updateState = this.updateState.bind(this);
    this.childClickEvent = this.childClickEvent.bind(this);
  }

  updateState(val) {
    this.setState({ chosenValue: val });
  }
  childClickEvent(event, val) {
    event.preventDefault();
    this.updateState(val);
  }

  render() {
    return (
      <React.Fragment>
        <Chooser
          row
          action={this.childClickEvent}
          chosenValue={this.state.chosenValue}
          inputName="test-model"
        >
          <div value="1" className="button-input">
            Pack Size 1
          </div>
          <div value="5" className="button-input">
            Pack Size 5
          </div>
          <div value="3" className="button-input">
            Pack Size 10
          </div>
        </Chooser>
        <pre>{JSON.stringify(this.state)}</pre>
      </React.Fragment>
    );
  }
}

// declare context type
Choices.contextType = CustomizerContext;

export default Choices;
