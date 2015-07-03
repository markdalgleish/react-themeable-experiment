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
      fooIsHovered: false,
      barIsHovered: false,
      bazIsHovered: false
    };
  }

  set(name, value) {
    this.setState({ [`${name}IsHovered`]: value });
  }

  render() {
    const { style } = this.props;

    const hover = (name) => {
      const stateKey = `${name}IsHovered`;
      return {
        onMouseOver: () => this.setState({ [stateKey]: true }),
        onMouseOut: () => this.setState({ [stateKey]: false })
      };
    };

    return (
      <div>

        <div {...style('foo', this.state.fooIsHovered && 'foo_hover')} {...hover('foo')}>Foo</div>
        <div {...style('bar', this.state.barIsHovered && 'bar_hover')} {...hover('bar')}>Bar</div>
        <div {...style('baz', this.state.bazIsHovered && 'baz_hover')} {...hover('baz')}>Baz</div>
      </div>
    );
  }

};

export default StyledComponent;
