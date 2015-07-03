import React, { Component, PropTypes } from 'react';
import assign from 'lodash.assign';

export default ComposedComponent => class StylableComponent extends Component {

  static propTypes = {
    styles: PropTypes.object
  }

  theme(...keys) {
    const styles = keys
      .filter(x => x)
      .map(key => this.props.theme[key]);

    return typeof styles[0] === 'string' ?
      { className: styles.join(' ') } :
      { style: assign({}, ...styles) };
  }

  render() {
    return <ComposedComponent {...this.props} theme={::this.theme} />
  }

};
