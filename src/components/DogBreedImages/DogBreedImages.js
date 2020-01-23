import React from "react";
import { Link } from "react-router-dom";

export default function DogBreedImages(props) {
  const { images, breed } = props;
  return (
    <div className="dog-breed-images">
      <h1>Dogs Breed Images</h1>
      {/* DogBreedImages gets a match property that is an object which contains a params property which (in our case) in turn has a breed property. */}
      This page will show images of the {breed} breed.
      <div>
        {images && images.map(url => <img src={url} alt="Dog" />)}
        {!images && "Loading..."}
      </div>
      {/* '/' - index, on which we show the dogs list) */}
      <Link to="/">Go Back to the index</Link>
    </div>
  );
}
