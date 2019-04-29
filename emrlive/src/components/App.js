import React, { Component } from "react";
import MenuBar from "./MenuBar";
import '../css/App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab)

// ...later
class App extends Component {

  render() {
    return (
      <div>
            <div className="headermnu">
            <MenuBar />
            </div>
      </div>
	  );
  }
}
export default App;
