import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <HomePage />
      </ChakraProvider>
    </div>
  );
}

export default App;
