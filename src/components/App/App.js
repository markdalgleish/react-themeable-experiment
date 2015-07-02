import React, { Component } from 'react';

import StyledComponent from './components/StyledComponent/StyledComponent';

import cssModulesStyles from './styles/css-modules.css';

export default class App extends Component {

  render() {
    return (
      <div>
        <StyledComponent classes={cssModulesStyles} />
      </div>
    );
  }

};
