import React, { Component } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";
import Search from "./components/Search";
import "./App.css";

class App extends Component {
  state = { searchInput: "" };

  async componentDidMount() {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
    );

    // to create a unique id that works as a key
    data.forEach((element, index) => {
      element.id = index + Math.random();
    });
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

  onSearchInput = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  render() {
    const { simpsons, searchInput } = this.state;
    console.log(searchInput);

    if (!this.state.simpsons) return <Loading />;

    // calculate the data you want to show here: the filtered list should be here
    const filteredCharacter = simpsons.filter((item) => {
      console.log(item.character); 
      if (item.character.toLowerCase().includes(searchInput)) {
  
        return true;
      }
    });

    // console.log(filteredCharacter);

    return (
      <>
        <Search
          simpsons={filteredCharacter}
          onSearchInput={this.onSearchInput}
        />
        <h1>Total No. of Liked Characters: </h1>
        <Simpsons simpsons={filteredCharacter} onDelete={this.onDelete} />
      </>
    );
  }
}

export default App;
