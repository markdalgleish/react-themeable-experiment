import React, { Component } from 'react';

import StyledComponent from './components/StyledComponent/StyledComponent';

import cssModule from './styles/css-module.css';
import object from './styles/object.js';

export default class App extends Component {

  render() {
    return (
      <div>
        <StyledComponent styles={cssModule} />
        <StyledComponent styles={object} />
      </div>
    );
  }

};
