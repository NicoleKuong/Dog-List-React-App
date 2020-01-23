import React, { Component } from "react";
import DogBreedImages from "./DogBreedImages";
export default class DogBreedImagesContainer extends Component {
  state = {
    images: null
  };

  //DogBreedImagesContainer
  componentDidMount() {
    const breed = this.props.match.params.breed;
    // encodeURIComponent: When creating URIs in code using string
    // templates or string concatenation, we have to make sure that
    // the result is a valid URI. If you use a variable (like breed in
    //   the above example), it may refer to a string containing a / or a ?.
    //   Those symbols have special meaning in URIs, so they need to be
    //   escaped/encoded. That's what encodeURIComponent is for.

    fetch(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
      .then(res => res.json())
      .then(data => this.updateImages(data.message))
      .catch(console.error);
  }
  updateImages(images) {
    this.setState({
      images: images
    });
  }
  render() {
    console.log(this.props);
    // this props comes from the route
    const { breed } = this.props.match.params;
    //get the params in the props and the dog breed
    return <DogBreedImages breed={breed} images={this.state.images} />;
  }
}
