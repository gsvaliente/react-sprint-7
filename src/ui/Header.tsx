import { RiInstagramLine, RiTwitterLine, RiYoutubeLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/sw logo.png';
import { logout } from '../features/users/usersSlice';
import { useAppSelector } from '../hooks/useReduxHooks';

export function Header() {
    const { isAuth } = useAppSelector(store => store.users);
    const dispatch = useDispatch();

    return (
        <header className='navbar bg-base-98 pt-10 max-w-screen-fit flex items-center justify-around px-10'>
            <div className='navbar-start'>
                <div className='join'>
                    <button className='btn btn-ghost rounded-full join-item'>
                        <a
                            href='https://www.instagram.com/starwars/?hl=en'
                            target='_blank'
                        >
                            <RiInstagramLine size={20} />
                        </a>
                    </button>
                    <button className='btn btn-ghost join-item'>
                        <a
                            href='https://www.youtube.com/@StarWars'
                            target='_blank'
                        >
                            <RiYoutubeLine size={20} />
                        </a>
                    </button>
                    <button className='btn btn-ghost rounded-full join-item'>
                        <a
                            href='https://x.com/starwars'
                            target='_blank'
                        >
                            <RiTwitterLine size={20} />
                        </a>
                    </button>
                </div>
            </div>
            <div className='navbar-center'></div>
            <img
                src={logo}
                alt='Star Wars logo'
                className='h-28'
            />
            <div className='navbar-end'>
                {isAuth ? (
                    <button
                        className='btn btn-ghost uppercase rounded-full'
                        onClick={() => dispatch(logout())}
                    >
                        Logout
                    </button>
                ) : (
                    <>
                        <button className='btn btn-ghost uppercase '>
                            <Link to='/login'>Sign In</Link>
                        </button>
                        <button className='btn btn-ghost uppercase '>
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
