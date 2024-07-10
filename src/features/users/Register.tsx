import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useReduxHooks';
import { Header } from '../../ui/Header';
import { PageNav } from '../../ui/PageNav';
import { createUser } from './usersThunks';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isAuth, isLoading } = useAppSelector(store => store.users);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (password !== passwordConfirm) {
            setPassword('');
            setPasswordConfirm('');
            return setError('Passwords do not match');
        } else {
            dispatch(createUser({ email, password }));
            return setError('');
        }
    }

    useEffect(() => {
        if (isAuth) navigate('/');
    }, [isAuth, navigate]);

    return (
        <div className='font-spaceMono'>
            <Header />
            <PageNav />
            <h2 className='text-center font-semibold text-xl my-10 uppercase'>
                Register
            </h2>
            <div className='flex items-center justify-center uppercase flex-col'>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <label className='ml-1.5'>Enter Email</label>
                        <input
                            className='text-sm rounded-3xl px-2.5 py-2 my-2 placeholder:text-stone-700 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-yellow-200'
                            type='text'
                            placeholder='luke@skywalker.com'
                            value={email}
                            required
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label className='ml-1.5'>Enter Password</label>
                        <input
                            className='text-sm rounded-3xl px-2.5 py-2 my-2 placeholder:text-stone-700 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-yellow-200'
                            type='password'
                            placeholder='password'
                            value={password}
                            required
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label className='ml-1.5'>Confirm Password</label>
                        <input
                            className='text-sm rounded-3xl px-2.5 py-2 my-2 placeholder:text-stone-700 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-yellow-200'
                            type='password'
                            placeholder='password'
                            value={passwordConfirm}
                            required
                            onChange={e => setPasswordConfirm(e.target.value)}
                        />
                    </div>
                    {error.length > 0 && (
                        <p className='text-xs text-red-300 rounded-full ml-2'>
                            {error}
                        </p>
                    )}
                    <button
                        className='mt-5 btn btn-wide'
                        disabled={isLoading}
                    >
                        Register
                    </button>
                </form>
                <Link
                    className='text-xs mt-5 '
                    to='/login'
                >
                    Already have an account? Click here
                </Link>
            </div>
        </div>
    );
}
