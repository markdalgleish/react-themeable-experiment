import themeable from 'themeable';

export default theme => (key, ...names) => {
  return { key, ...themeable(theme)(...names) };
};
