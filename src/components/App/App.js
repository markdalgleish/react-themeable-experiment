import React, { Component } from 'react';

import StyledComponent from './components/StyledComponent/StyledComponent';

import cssModule from './styles/css-module.css';
import object from './styles/object.js';
import reactStyle from './styles/react-style.js';

export default class App extends Component {

  render() {
    return (
      <div>
        <h1>React Stylable Experiment</h1>

        <h2>CSS Modules</h2>
        <StyledComponent styles={cssModule} />

        <h2>Plain Object</h2>
        <StyledComponent styles={object} />

        <h2>React Style</h2>
        <StyledComponent styles={reactStyle} />
      </div>
    );
  }

};
