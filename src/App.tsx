import React from 'react';
import Main from 'pages/main';
import { Provider } from 'Store';
import './App.css';

function App() {
  return (
    <Provider>
      <Main />
    </Provider>
  );
}

export default App;
