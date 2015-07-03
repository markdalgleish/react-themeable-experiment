import React, { Component, PropTypes } from 'react';
import themeable from 'react-themeable';

@themeable
class ThemedComponent extends Component {

  static propTypes = {
    theme: PropTypes.func.isRequired
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
    const { theme } = this.props;

    const hover = (name) => {
      return {
        onMouseOver: () => this.setState({ [name]: true }),
        onMouseOut: () => this.setState({ [name]: false })
      };
    };

    return (
      <div>

        <div {...theme('foo', this.state.foo && 'foo_hover')} {...hover('foo')}>Foo</div>
        <div {...theme('bar', this.state.bar && 'bar_hover')} {...hover('bar')}>Bar</div>
        <div {...theme('baz', this.state.baz && 'baz_hover')} {...hover('baz')}>Baz</div>
      </div>
    );
  }

};

export default ThemedComponent;
