import React from 'react';

function App({ name }) {
  const value = 'World';
  return <div>Hello {name || value}</div>;
}

export default App;
