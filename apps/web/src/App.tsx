import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { HomePage } from './pages/HomePage';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <AppProvider>
          <HomePage />
        </AppProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
