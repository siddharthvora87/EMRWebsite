import React, { Component } from "react";
import MenuBar from "./MenuBar";
import Projects from './Projects';
import PropTypes from 'prop-types';
import '../css/App.css';
import logo from './close.png';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
 
library.add(fab, faCheckSquare, faCoffee)

// ...later
class App extends Component {

  render() {
    let styles={
      paddingTop:50,
      paddingBottom:200
    }
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
