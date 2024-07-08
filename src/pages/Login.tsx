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
        <div>
            <Header />
            <PageNav />
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Enter Email</label>
                    <input
                        type='text'
                        placeholder='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Enter Password</label>
                    <input
                        type='password'
                        placeholder='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <button disabled={isLoading}>Sign In</button>
            </form>
            <Link to='/register'>I do not have an account, Register here</Link>
        </div>
    );
}
