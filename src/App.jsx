import React, { Component } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";
import "./App.css";

class App extends Component {
  state = {};

  async componentDidMount() {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
    );

    // to create a unique id that works as a key 
    data.forEach((element, index) => {
      element.id = index + Math.random();
    })
    this.setState({ simpsons: data });
  }

  onDelete = (id) => {
    const indexOf = this.state.simpsons.findIndex((value) => {
      return value.id === id;
    });

    const simpsons = [...this.state.simpsons];
    simpsons.splice(indexOf, 1);
    this.setState({ simpsons });
  };

  render() {
    const { simpsons } = this.state;

    if (!this.state.simpsons) return <Loading />;

    return (
      <>
        <h1>Total No. of Liked Characters: </h1>
        <Simpsons simpsons={simpsons} onDelete={this.onDelete} />
      </>
    );
  }
}

export default App;
