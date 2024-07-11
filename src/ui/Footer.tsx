import React from 'react';
import { RiInstagramLine, RiTwitterLine, RiYoutubeLine } from 'react-icons/ri';

const Footer: React.FC = () => {
    return (
        <footer className='flex flex-col items-center justify-center border-t mt-5 lowercase text-sm bg-stone-900 border-stone-500'>
            <h2 className='pt-5'>more from star wars:</h2>
            <div className='join transition-all'>
                <button className='btn btn-ghost rounded-full join-item'>
                    <a
                        href='https://www.instagram.com/starwars/?hl=en'
                        target='_blank'
                    >
                        <RiInstagramLine size={15} />
                    </a>
                </button>
                <button className='btn btn-ghost join-item'>
                    <a
                        href='https://www.youtube.com/@StarWars'
                        target='_blank'
                    >
                        <RiYoutubeLine size={15} />
                    </a>
                </button>
                <button className='btn btn-ghost rounded-full join-item'>
                    <a
                        href='https://x.com/starwars'
                        target='_blank'
                    >
                        <RiTwitterLine size={15} />
                    </a>
                </button>
            </div>
        </footer>
    );
};

export default Footer;
