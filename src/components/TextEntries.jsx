import React, { Component } from "react";

class TextEntries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      newEntryText: "",
    };
  }

  handleInputChange = (event) => {
    const { value } = event.target;
    const maxLength = 50;

    const trimmedValue = value.trim();

    if (trimmedValue.length <= maxLength) {
      this.setState({ newEntryText: value });
    }
  };

  addEntry = () => {
    if (
      this.state.newEntryText.trim() !== "" &&
      this.state.entries.length < 5
    ) {
      this.setState((prevState) => ({
        entries: [...prevState.entries, this.state.newEntryText],
        newEntryText: "",
      }));
    }
  };

  editEntry = (index) => {
    const updatedText = prompt("Edit entry:", this.state.entries[index]);
    if (updatedText !== null) {
      const updatedEntries = [...this.state.entries];
      updatedEntries[index] = updatedText;
      this.setState({ entries: updatedEntries });
    }
  };

  deleteEntry = (index) => {
    const updatedEntries = this.state.entries.filter((_, i) => i !== index);
    this.setState({ entries: updatedEntries });
  };

  render() {
    const isMaxReached = this.state.entries.length >= 5;
    return (
      <div>
        <ul>
          {this.state.entries.map((entry, index) => (
            <li key={index}>
              {entry}{" "}
              <button onClick={() => this.editEntry(index)}>Edit</button>
              <button onClick={() => this.deleteEntry(index)}>Delete</button>
            </li>
          ))}
        </ul>

        <input
          type="text"
          value={this.state.newEntryText}
          onChange={this.handleInputChange}
          disabled={isMaxReached}
        />
        <button onClick={this.addEntry} disabled={isMaxReached}>
          Add Entry
        </button>
        {isMaxReached && <p>Maximum limit reached!</p>}
      </div>
    );
  }
}

export default TextEntries;
