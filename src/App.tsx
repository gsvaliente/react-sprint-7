import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ShipDetails } from './features/ships/ShipDetails';
import ShipList from './features/ships/ShipList';
import { AppLayout } from './pages/AppLayout';
import { Homepage } from './pages/Homepage';
import Login from './pages/Login';
import { PageNotFound } from './pages/PageNotFound';
import Register from './pages/Register';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<AppLayout />}
                >
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
                </Route>
                <Route
                    path='register'
                    element={<Register />}
                />
                <Route
                    path='login'
                    element={<Login />}
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
