import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import DogsListContainer from "./components/DogsListContainer";
import DogBreedImages from "./components/DogBreedImages";

function App() {
  return (
    <div className="App">
      <main>
        <Route exact path="/" component={DogsListContainer} />
        {/* where we show the dogs list */}
        <Route path="/dog-breeds/:breed" component={DogBreedImages} />
        {/* where we show a specific dog breed */}
        {/* when we click the dog type, the url changes and it compares with the  path, 
        and the difference becomes the varible and the params takes the variable */}
      </main>
    </div>
  );
}

export default App;
