import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopPage from "./pages/TopPage";
import LayOutMain from "./pages/LayOutMain";
import Browser from "./pages/Browser";
import Chart from "./pages/Chart";
import Artist from "./pages/Artist";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LayOutMain>
                <TopPage />
              </LayOutMain>
            }
          />
          <Route
            path="/browser"
            element={
              <LayOutMain>
                <Browser />
              </LayOutMain>
            }
          />
          <Route
            path="/charts"
            element={
              <LayOutMain>
                <Chart />
              </LayOutMain>
            }
          />
          <Route
            path="/artists"
            element={
              <LayOutMain>
                <Artist />
              </LayOutMain>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
