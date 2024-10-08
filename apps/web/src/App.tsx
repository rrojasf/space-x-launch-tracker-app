import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Layout } from "./components/Layouts/Default/Layout";
import { AppProvider } from "./context/AppContext";
import FavoritesPage from "./pages/FavoritesPage";
import { HomePage } from "./pages/HomePage";
import LaunchesPage from "./pages/LaunchesPage";

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
                  <Route path="/favorites" element={<FavoritesPage />} />
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
