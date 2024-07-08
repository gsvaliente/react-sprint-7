import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../features/ui/Header';
import { PageNav } from '../features/ui/PageNav';
import { createUser } from '../features/users/usersSlice';
import { useAppSelector } from '../hooks/useReduxHooks';

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

    if (isAuth) navigate('/');

    return (
        <div>
            <Header />
            <PageNav />
            <h2>Register</h2>
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
                <div>
                    <label>Confirm Password</label>
                    <input
                        type='password'
                        placeholder='password'
                        value={passwordConfirm}
                        onChange={e => setPasswordConfirm(e.target.value)}
                    />
                </div>
                {error.length > 0 && <p>{error}</p>}
                <button disabled={isLoading}>Register</button>
            </form>
            <Link to='/login'>Already have an account? Click here</Link>
        </div>
    );
}
