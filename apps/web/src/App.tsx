import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ErrorBoundary from "./components/common/ErrorBoundary";
import { Layout } from "./components/Layouts/Default/Layout";
import { AppProvider } from "./context/AppContext";

// Create a client for react-query
const queryClient = new QueryClient();

const Home = lazy(() => import("./pages/HomePage"));
const Launches = lazy(() => import("./pages/LaunchesPage"));
const Favorites = lazy(() => import("./pages/FavoritesPage"));

// todo: ¿refactor creating a Providers wrapper?

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            <Router>
              <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                  <ErrorBoundary>
                    <Routes>
                      <Route path="/" Component={Home} />
                      <Route path="/launches" Component={Launches} />
                      <Route path="/favorites" Component={Favorites} />
                    </Routes>
                  </ErrorBoundary>
                </Suspense>
              </Layout>
            </Router>
          </AppProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
