import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/sw logo.png';
import { useAppSelector } from '../../hooks/useReduxHooks';
import {logout} from '../users/usersSlice'

export function Header() {
    const { isAuth } = useAppSelector(store => store.users);
    const dispatch = useDispatch();

    return (
        <header className='navbar bg-base-98 pt-10'>
            <div className='navbar-start'></div>
            <div className='navbar-center'></div>
            <img
                src={logo}
                alt='Star Wars logo'
                className='h-28'
            />
            <div className='navbar-end'>
                {isAuth ? (
                    <button onClick={()=>dispatch(logout())}>Logout</button>
                ) : (
                    <>
                        <button className='btn btn-ghost '>
                            <Link to='/login'>Sign In</Link>
                        </button>
                        <button className='btn btn-ghost '>
                            <div className='indicator'>
                                <Link to='/register'>Register</Link>
                            </div>
                        </button>
                    </>
                )}
            </div>
        </header>
    );
}
