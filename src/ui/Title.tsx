import { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
}

export function Title({ children }: TitleProps) {
  return (
    <>
      <hr />
      <h1 className='font-bold text-2xl py-3 uppercase'>{children}</h1>
      <hr />
    </>
  );
}
