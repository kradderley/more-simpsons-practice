import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";

class Character extends Component {
  state = { like: false };

  onLikeToggle = () => {
    this.setState({ like: !this.state.like });
  };

  render() {
    const { character, quote, image, characterDirection, id } = this.props.item;
    const { like } = this.state;

    if (characterDirection === "Left") {
      return (
        <>
          <div className="characterContainer">
            <Name
              character={character}
              onLikeToggle={this.onLikeToggle}
              like={like}
            />
            <Image image={image} like={like} />
            <Quote quote={quote} />
            <Delete
              onDelete={this.props.onDelete}
              character={character}
              quote={quote}
              id={id}
            />
          </div>
        </>
      );
    }

    return (
      <>
        <div className="characterContainer">
          <Name
            character={character}
            onLikeToggle={this.onLikeToggle}
            like={like}
          />
          <Quote quote={quote} />
          <Image image={image} like={like} />

          <Delete
            onDelete={this.props.onDelete}
            character={character}
            quote={quote}
            id={id}
          />
        </div>
      </>
    );
  }
}

export default Character;
