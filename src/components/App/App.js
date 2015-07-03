import React, { Component } from 'react';
import Radium from 'radium';

import ThemedComponent from './components/ThemedComponent/ThemedComponent';

import cssModule from './styles/css-module.css';
import object from './styles/object.js';
import reactStyle from './styles/react-style.js';
import radiumTheme from './styles/radium.js';

const RadiumThemedComponent = ThemedComponent.decorateWith(Radium);

export default class App extends Component {

  render() {
    return (
      <div>
        <h1>React Themeable Experiment</h1>

        <h2>CSS Modules</h2>
        <ThemedComponent theme={cssModule} />

        <h2>Plain Object</h2>
        <ThemedComponent theme={object} />

        <h2>React Style</h2>
        <ThemedComponent theme={reactStyle} />

        <h2>Radium</h2>
        <RadiumThemedComponent theme={radiumTheme} />
      </div>
    );
  }

};
