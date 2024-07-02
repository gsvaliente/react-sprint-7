import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ShipDetails } from './features/ships/ShipDetails';
import ShipList from './features/ships/ShipList';
import { Homepage } from './pages/Homepage';
import { PageNotFound } from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<Homepage />}
        />
        <Route
          path='spaceships'
          element={<ShipList />}
        />
        <Route
          path='spaceships/:id'
          element={<ShipDetails />}
        />
        <Route
          path='*'
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
