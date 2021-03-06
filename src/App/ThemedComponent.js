import React, { Component, PropTypes } from 'react';
import themeable from 'react-themeable';

class ThemedComponent extends Component {

  static propTypes = {
    theme: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ])
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
    const style = themeable(this.props.theme);

    const hover = (name) => {
      return {
        onMouseOver: () => this.setState({ [name]: true }),
        onMouseOut: () => this.setState({ [name]: false })
      };
    };

    return (
      <div>
        <div {...style(1, 'foo', this.state.foo && 'foo_hover')} {...hover('foo')}>Foo</div>
        <div {...style(2, 'bar', this.state.bar && 'bar_hover')} {...hover('bar')}>Bar</div>
        <div {...style(3, 'baz', this.state.baz && 'baz_hover')} {...hover('baz')}>Baz</div>
      </div>
    );
  }

};

export default ThemedComponent;
