import React, { Component, PropTypes } from 'react';
import assign from 'lodash.assign';

const truthy = x => x;

export default theme => (key, ...names) => {
  const styles = names
    .filter(truthy)
    .map(name => theme[name])
    .filter(truthy);

  return typeof styles[0] === 'string' ?
    { key, className: styles.join(' ') } :
    { key, style: assign({}, ...styles) };
};
