import { Link } from 'react-router-dom';

export function Hero() {
    return (
        <div
            className='hero'
            style={{
                height: '100vh',
                backgroundImage:
                    'url(https://lumiere-a.akamaihd.net/v1/images/image_1921b77b.jpeg)',
            }}
        >
            <div className='hero-overlay bg-opacity-80'></div>
            <div className='hero-content text-neutral-content text-center'>
                <div className='max-w-md'>
                    <h1 className='mb-5 text-5xl font-bold'>
                        WELCOME TO STARSHIP FINDER
                    </h1>
                    <p className='mb-5'>
                        Here you will explore all the Starships seen in all the
                        movies. To make it even better, you will find in which
                        movies they appeared, and who where the pilots.
                    </p>
                    <Link
                        to='/spaceships'
                        className='btn bg-yellow-500 rounded-full text-stone-950 hover:bg-yellow-400 transition-all'
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
}
