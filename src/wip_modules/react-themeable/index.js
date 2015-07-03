import React, { Component, PropTypes } from 'react';
import assign from 'lodash.assign';

const truthy = x => x;

const makeClass = (ComposedComponent, decorator) => {
  if (decorator) {
    ComposedComponent = decorator(ComposedComponent);
  }

  return class ThemeableComponent extends Component {

    static propTypes = {
      theme: PropTypes.object
    }

    theme(...keys) {
      const styles = keys
        .filter(truthy)
        .map(key => this.props.theme[key])
        .filter(truthy);

      return typeof styles[0] === 'string' ?
        { className: styles.join(' ') } :
        { style: assign({}, ...styles) };
    }

    render() {
      return <ComposedComponent {...this.props} theme={::this.theme} />
    }

  };
};

export default ComposedComponent => {
  let ThemeableComponent = makeClass(ComposedComponent);
  ThemeableComponent.decorateWith = decorator => makeClass(ComposedComponent, decorator);
  return ThemeableComponent;
}
