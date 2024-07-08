import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
    children: ReactNode;
}

export function BackButton({ children }: BackButtonProps) {
    const navigate = useNavigate();

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        navigate(-1);
    }
    return (
        <button
            className='text-yellow-300 border-2 px-4 py-2 border-yellow-300 rounded-lg hover:bg-yellow-200 hover:text-black'
            onClick={handleClick}
        >
            {children}
        </button>
    );
}
