import React, { Component } from "react";

class Delete extends Component {
  state = {};

  onClick = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    return (
      <>
        <div>
          <button onClick={this.onClick}>Delete</button>
        </div>
      </>
    );
  }
}

export default Delete;
