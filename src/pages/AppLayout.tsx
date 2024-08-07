import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/useReduxHooks';
import Footer from '../ui/Footer';
import { Header } from '../ui/Header';
import { PageNav } from '../ui/PageNav';

export function AppLayout() {
    const isAuth = useAppSelector(store => store.users.isAuth);

    return isAuth ? (
        <div className='font-spaceMono'>
            <Header />
            <PageNav />
            <Outlet />
            <Footer />
        </div>
    ) : (
        <Navigate to={'/login'} />
    );
}
