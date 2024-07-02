import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShipDetails } from "./features/ships/ShipDetails";
import ShipList from "./features/ships/ShipList";
import { Homepage } from "./pages/Homepage";
import { PageNotFound } from "./pages/PageNotFound";
import { AppLayout } from "./pages/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <AppLayout>
              <Homepage />
            </AppLayout>
          }
        />
        <Route
          path="spaceships"
          element={
            <AppLayout>
              <ShipList />
            </AppLayout>
          }
        />
        <Route
          path="spaceships/:id"
          element={
            <AppLayout>
              <ShipDetails />
            </AppLayout>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
