import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  foo: {
    color: 'red',
    ':hover': {
      fontWeight: 'bold'
    }
  },

  bar: {
    color: 'green',
    ':hover': {
      fontWeight: 'bold'
    }
  },

  baz: {
    color: 'blue',
    ':hover': {
      fontWeight: 'bold'
    }
  },
});
