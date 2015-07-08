import React, { Component } from 'react';

export default class BrowserOnly extends Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    this.setState({ visible: true });
  }

  render() {
    return this.state.visible ?
      this.props.children() :
      null;
  }

};
