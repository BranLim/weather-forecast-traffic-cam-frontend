import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Home } from './views/Home';

function App() {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
}

export default App;
