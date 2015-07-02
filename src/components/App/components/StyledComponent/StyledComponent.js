import React, { Component } from 'react';

const stylable = (styles) => (key) => {
  return { [typeof styles[key] === 'string' ? 'className' : 'style']: styles[key] };
};

export default class StyledComponent extends Component {

  render() {
    const style = stylable(this.props.styles);

    return (
      <div>
        <div {...style('foo')}>Foo</div>
        <div {...style('bar')}>Bar</div>
        <div {...style('baz')}>Baz</div>
      </div>
    );
  }

};
