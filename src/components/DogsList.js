import React, { Component } from "react";
import { Link } from "react-router-dom";
//presentational component

export default class DogsList extends Component {
  renderDogBreed(breedName) {
    return (
      <li key={breedName}>
        <Link to={`/dog-breeds/${breedName}`}>{breedName}</Link>
      </li>
    );
  }
  render() {
    const { dogBreeds } = this.props;
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>
        {/* if state dogbreeds is null, display 'Loading' */}
        {!dogBreeds && "Loading..."}
        {dogBreeds && <ul>{dogBreeds.map(this.renderDogBreed)}</ul>}
      </div>
    );
  }
}
