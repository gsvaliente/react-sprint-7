import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../hooks/useReduxHooks';

export function PageNav() {
    const { pathname } = useLocation();

    const { isAuth } = useAppSelector(store => store.users);

    return (
        isAuth && (
            <div
                role='tablist'
                className='tabs-bordered tabs-sm mt-10 py-2 text-center '
            >
                <Link
                    role='tab'
                    to={'/'}
                    className={`tab text-lg hover:font-bold ${
                        pathname === '/' ? 'tab-active font-bold' : ''
                    }`}
                >
                    HOMEPAGE
                </Link>
                <Link
                    role='tab'
                    to={'/spaceships'}
                    className={`tab text-lg hover:font-bold ${
                        pathname === '/spaceships' ? 'tab-active font-bold' : ''
                    }`}
                >
                    STARSHIPS
                </Link>
            </div>
        )
    );
}
