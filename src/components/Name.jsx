import React, { Component } from "react";

class Name extends Component {

  render() {
    const { like, character, onLikeToggle } = this.props;

    return (
      <>
        <h1>{character}</h1>
        <div>
          <button onClick={onLikeToggle}>{like ? "Not Liked" : "Like"}</button>
        </div>
      </>
    );
  }
}

export default Name;
