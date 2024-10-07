import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProvider } from './context/AppContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from './components/Layouts/Default/Layout';
import { HomePage } from './pages/HomePage';
import LaunchesPage from './pages/LaunchesPage';

// Create a client for react-query
const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
