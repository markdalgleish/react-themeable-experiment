import React from 'react';

import App from './components/App/App';

if (typeof document !== 'undefined') {
  React.render(<App />, document.getElementById('outlet'));
}

export default App;
