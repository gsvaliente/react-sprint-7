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
  return <button onClick={handleClick}>{children}</button>;
}
