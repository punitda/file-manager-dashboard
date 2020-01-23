import React from 'react';
import logo from './logo.svg';

const App: React.FC = () => {
  return (
    <div className="text-center">
      <header className="bg-gray-700 min-h-screen flex flex-col items-center justify-center text-2xl text-gray-100">
        <img src={logo} className="app-logo pointer-events-none" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="text-blue-500 hover:text-blue-600"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
