import React, { Component } from 'react';

export default class StyledComponent extends Component {

  render() {
    return (
      <div>
        <div className={this.props.classes.foo}>Foo</div>
        <div className={this.props.classes.bar}>Bar</div>
        <div className={this.props.classes.baz}>Baz</div>
      </div>
    );
  }

};
