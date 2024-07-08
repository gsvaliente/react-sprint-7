import { Navigate, Outlet } from 'react-router-dom';
import { Header } from '../features/ui/Header';
import { PageNav } from '../features/ui/PageNav';
import { useAppSelector } from '../hooks/useReduxHooks';

export function AppLayout() {
    const isAuth = useAppSelector(store => store.users.isAuth);
    return isAuth ? (
        <div className='font-spaceMono'>
            <Header />
            <PageNav />
            <Outlet />
        </div>
    ) : (
        <Navigate to={'/login'} />
    );
    // return (
    //     <div className='font-spaceMono'>
    //         <Header />
    //         <PageNav />
    //         <Outlet />
    //     </div>
    // );
}
