import React from 'react';

import Message from './components/Message';

function App({ name }) {
  const value = 'World';
  return (
    <div>
      Hello {name || value}, here's your message: <Message />
    </div>
  );
}

export default App;
