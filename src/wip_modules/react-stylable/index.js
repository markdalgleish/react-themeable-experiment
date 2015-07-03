import React, { Component, PropTypes } from 'react';

export default ComposedComponent => class StylableComponent extends Component {

  static propTypes = {
    styles: PropTypes.object
  }

  style(key) {
    const style = this.props.styles[key];

    return typeof style === 'string' ?
      { className: style } :
      { style: style };
  }

  render() {
    return <ComposedComponent {...this.props} style={::this.style} />
  }

};
