import React, { Component, PropTypes } from 'react';
import assign from 'lodash.assign';

export default ComposedComponent => class StylableComponent extends Component {

  static propTypes = {
    styles: PropTypes.object
  }

  style(...keys) {
    const styles = keys
      .filter(x => x)
      .map(key => this.props.styles[key]);

    return typeof styles[0] === 'string' ?
      { className: styles.join(' ') } :
      { style: assign({}, ...styles) };
  }

  render() {
    return <ComposedComponent {...this.props} style={::this.style} />
  }

};
