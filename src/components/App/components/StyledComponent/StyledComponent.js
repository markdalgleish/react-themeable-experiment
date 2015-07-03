import React, { Component, PropTypes } from 'react';
import stylable from 'react-stylable';

@stylable
class StyledComponent extends Component {

  static propTypes = {
    style: PropTypes.func.isRequired
  }

  constructor(...args) {
    super(...args);
    this.state = {
      foo: false,
      bar: false,
      baz: false
    };
  }

  render() {
    const { style } = this.props;

    const hover = (name) => {
      return {
        onMouseOver: () => this.setState({ [name]: true }),
        onMouseOut: () => this.setState({ [name]: false })
      };
    };

    return (
      <div>

        <div {...style('foo', this.state.foo && 'foo_hover')} {...hover('foo')}>Foo</div>
        <div {...style('bar', this.state.bar && 'bar_hover')} {...hover('bar')}>Bar</div>
        <div {...style('baz', this.state.baz && 'baz_hover')} {...hover('baz')}>Baz</div>
      </div>
    );
  }

};

export default StyledComponent;
