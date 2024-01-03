import "./App.css";
import { Component } from "react";
import PencilPicker from "./components/PencilPicker";
import TextEntries from "./components/TextEntries";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Pencil App</h1>
        <PencilPicker />
        <TextEntries />
      </div>
    );
  }
}
