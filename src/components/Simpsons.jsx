import React, { Component } from "react";
import Character from "./Character";

class Simpsons extends Component {
  state = {};
  render() {
    const { simpsons } = this.props;

    return (
      <>
        {simpsons.map((item) => {
          return (
            <Character
            // for the key, the data may contain duplicates so you may have to make the key more unique
              key={item.id}
              item={item}
              onDelete={this.props.onDelete}
            />
          );
        
        })}
  
      </>
      // <ol>
      //   {simpsons.map((item) => {
      //     return <li key={item.quote}>{item.character}</li>;
      //   })}
      // </ol>
    );
  }
}

export default Simpsons;
