import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProvider } from './context/AppContext';
import { Layout } from './components/Layouts/Default/Layout';
import { HomePage } from './pages/HomePage';
import LaunchesPage from './pages/LaunchesPage';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <AppProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/launches" element={<LaunchesPage />} />
              </Routes>
            </Layout>
          </Router>
        </AppProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
