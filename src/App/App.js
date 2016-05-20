import React, { Component } from 'react';

import BrowserOnly from 'react-browser-only';

import Radium from 'radium';
import jss from 'jss';

import cssModulesTheme from './themes/css-modules.css';
import objectTheme from './themes/object.js';
import reactStyleTheme from './themes/react-style.js';
import aphroditeTheme from './themes/aphrodite.js';
import radiumTheme from './themes/radium.js';
import jssTheme from './themes/jss.js';

const jssSheet = typeof window !== 'undefined' ?
  jss.createStyleSheet(jssTheme).attach() :
  null;

import { css } from 'aphrodite';

import ThemedComponent from './ThemedComponent';
const RadiumThemedComponent = Radium(ThemedComponent);

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

        <h2>Aphrodite</h2>
        <BrowserOnly>
          {() => <ThemedComponent theme={[ aphroditeTheme, css ]} />}
        </BrowserOnly>

        <h2>JSS</h2>
        <BrowserOnly>
          {() => <ThemedComponent theme={jssSheet.classes} />}
        </BrowserOnly>
      </div>
    );
  }

};
