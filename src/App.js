import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import TopPage from "./pages/TopPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <TopPage />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
