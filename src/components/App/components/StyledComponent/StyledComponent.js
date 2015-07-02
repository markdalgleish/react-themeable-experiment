import React, { Component } from 'react';

const stylable = ComposedComponent => class StylableComponent extends Component {

  style(key) {
    const style = this.props.styles[key]

    return typeof style === 'string' ?
      { className: style } :
      { style: style };
  }

  render() {
    return <ComposedComponent {...this.props} style={::this.style} />
  }

};

@stylable
class StyledComponent extends Component {

  render() {
    const { style } = this.props;

    return (
      <div>
        <div {...style('foo')}>Foo</div>
        <div {...style('bar')}>Bar</div>
        <div {...style('baz')}>Baz</div>
      </div>
    );
  }

};

export default StyledComponent;
