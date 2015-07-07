import React, { Component } from 'react';
import Radium from 'radium';

import ThemedComponent from './ThemedComponent';
const RadiumThemedComponent = Radium(ThemedComponent);

import cssModulesTheme from './themes/css-modules.css';
import objectTheme from './themes/object.js';
import reactStyleTheme from './themes/react-style.js';
import radiumTheme from './themes/radium.js';

export default class App extends Component {

  render() {
    return (
      <div>
        <h1>React Themeable Experiment</h1>

        <h2>CSS Modules</h2>
        <ThemedComponent theme={cssModulesTheme} />

        <h2>Plain Object</h2>
        <ThemedComponent theme={objectTheme} />

        <h2>React Style</h2>
        <ThemedComponent theme={reactStyleTheme} />

        <h2>Radium</h2>
        <RadiumThemedComponent theme={radiumTheme} />
      </div>
    );
  }

};
