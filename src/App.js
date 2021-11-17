import React from "react";
import View from "./View";

const App = () => {
  return ( 
    <div onContextMenu={
      (e) => {
        e.preventDefault();
      }
    }>
      <div className="App">
        <View />
      </div>
    </div>
  );
}

export default App;
