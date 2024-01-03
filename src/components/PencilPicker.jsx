import React, { Component } from "react";
import Pencil from "../classes/Pencil";

export default class PencilPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPencil: new Pencil("graphite"),
    };
  }

  handlePencilChange = (event) => {
    if (event.target.value === "graphite") {
      this.setState({ selectedPencil: new Pencil(event.target.value) });
    } else {
      const color = event.target.value.split("-")[1];
      this.setState({ selectedPencil: new Pencil("colored", color) });
    }
  };

  render() {
    return (
      <div>
        <label>
          Choose a pencil type:
          <select
            value={this.state.selectedPencil}
            onChange={this.handlePencilChange}
          >
            <option value="graphite">Graphite</option>
            <option value="coloured-Red" className="red">
              Red Colored Pencil
            </option>
            <option value="coloured-Blue" className="blue">
              Blue Colored Pencil
            </option>
            <option value="coloured-Green" className="green">
              Green Colored Pencil
            </option>
          </select>
        </label>
        <br />
        <div>Pencil Type: {this.state.selectedPencil.getDescription()}</div>
        Maximum of: {this.state.selectedPencil.getMaxTextCount()} characters
      </div>
    );
  }
}
