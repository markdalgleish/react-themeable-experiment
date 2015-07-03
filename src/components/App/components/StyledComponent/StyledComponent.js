import React, { Component, PropTypes } from 'react';
import stylable from 'react-stylable';

@stylable
class StyledComponent extends Component {

  static propTypes = {
    style: PropTypes.func.isRequired
  }

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
