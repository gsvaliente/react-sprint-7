import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useReduxHooks';
import ErrorMessage from '../../ui/ErrorMessage';
import { Header } from '../../ui/Header';
import { PageNav } from '../../ui/PageNav';
import { loginUser } from './usersThunks';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isAuth, isLoading, error } = useAppSelector(store => store.users);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
    }

    useEffect(() => {
        if (isAuth) navigate('/');
    }, [isAuth, navigate]);

    return (
        <div className='font-spaceMono'>
            <Header />
            <PageNav />
            <div className='sm:mt-24'>
                <h2 className='text-center font-semibold text-xl my-10 uppercase'>
                    Login
                </h2>
                <div className='flex items-center justify-center uppercase flex-col'>
                    <>
                        {error && <ErrorMessage message={error} />}
                        <form onSubmit={handleSubmit}>
                            <div className='flex flex-col'>
                                <label>Enter Email</label>
                                <input
                                    className='text-sm rounded-3xl px-2.5 py-2 my-2 placeholder:text-stone-700 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-yellow-200'
                                    type='text'
                                    required
                                    placeholder='email'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label>Enter Password</label>
                                <input
                                    className='text-sm rounded-3xl px-2.5 py-2 my-2 placeholder:text-stone-700 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-yellow-200'
                                    type='password'
                                    required
                                    placeholder='password'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>

                            <button
                                className='mt-5 btn btn-wide'
                                disabled={isLoading}
                            >
                                Sign In
                            </button>
                        </form>
                    </>
                    <p className='text-xs mt-5'>
                        I do not have an account,{' '}
                        <Link
                            className='hover:text-yellow-500 transition-colors'
                            to='/register'
                        >
                            {' '}
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
