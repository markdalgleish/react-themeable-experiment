import assign from 'lodash.assign';

const truthy = x => x;

export default theme => (...names) => {
  const styles = names
    .filter(truthy)
    .map(name => theme[name])
    .filter(truthy);

  return typeof styles[0] === 'string' ?
    { className: styles.join(' ') } :
    { style: assign({}, ...styles) };
};
