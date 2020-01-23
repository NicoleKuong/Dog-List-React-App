import React, { Component } from "react";
import DogsList from "./DogsList";

//with lifecycle hooks and state:
export default class DogsListContainer extends Component {
  state = {
    dogBreeds: null
  };
  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then(data => {
        const breeds = Object.keys(data.message);
        this.updateBreeds(breeds);
      })
      .catch(console.error);
  }

  updateBreeds(breeds) {
    this.setState({ dogBreeds: breeds });
    // console.log(this.state.dogBreeds);
  }

  render() {
    console.log(this.props);
    return <DogsList dogBreeds={this.state.dogBreeds} />;
  }
}
