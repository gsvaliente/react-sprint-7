import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../features/ui/Header';
import { PageNav } from '../features/ui/PageNav';
import { loginUser } from '../features/users/usersSlice';
import { useAppSelector } from '../hooks/useReduxHooks';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isAuth, isLoading } = useAppSelector(store => store.users);

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
            <h2 className='text-center font-semibold text-xl my-10 uppercase'>
                Login
            </h2>
            <div className='flex items-center justify-center uppercase flex-col'>
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
                <Link
                    className='text-xs mt-5'
                    to='/register'
                >
                    I do not have an account, Register here
                </Link>
            </div>
        </div>
    );
}
