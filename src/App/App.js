import React, { Component } from 'react';

import BrowserOnly from 'react-browser-only';

import Radium from 'radium';
import useSheet from 'react-jss';

import cssModulesTheme from './themes/css-modules.css';
import objectTheme from './themes/object.js';
import reactStyleTheme from './themes/react-style.js';
import radiumTheme from './themes/radium.js';
import reactJssTheme from './themes/react-jss.js';

import ThemedComponent from './ThemedComponent';
const RadiumThemedComponent = Radium(ThemedComponent);
const JssThemedComponent = useSheet(ThemedComponent, reactJssTheme);

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

        <h2>React JSS</h2>
        <BrowserOnly>
          {() => <JssThemedComponent />}
        </BrowserOnly>
      </div>
    );
  }

};
