import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { BackButton } from '../../ui/BackButton';
import { Loader } from '../../ui/Loader';
import { Title } from '../../ui/Title';
import MovieList from '../movies/MovieList';
import { findMovies } from '../movies/moviesThunks';
import PilotList from '../pilots/PilotList';
import { findPilots } from '../pilots/pilotsThunks';
import { findShip, findShipImage } from './shipsThunks';

const URL = `https://swapi.dev/api/starships/`;
const IMAGE_URL = 'https://starwars-visualguide.com/assets/img/starships/';

export function ShipDetails() {
    const dispatch = useAppDispatch();
    const { isLoading, ship, image, pilots, films } = useAppSelector(
        store => store.ships
    );
    const { isLoading: isMovieLoading } = useAppSelector(store => store.movies);
    const { isLoading: isPilotsLoading } = useAppSelector(
        store => store.pilots
    );
    const { id } = useParams();

    useEffect(() => {
        dispatch(findShip(`${URL}${id}`));
        dispatch(findShipImage(`${IMAGE_URL}${id}.jpg`));
    }, [dispatch, id]);

    useEffect(() => {
        pilots?.forEach(pilot => dispatch(findPilots(pilot)));
    }, [dispatch, pilots]);

    useEffect(() => {
        films?.forEach(film => dispatch(findMovies(film)));
    }, [dispatch, films]);

    return (
        <div className='mt-10 max-w-6xl mx-auto'>
            <div>
                <Title>starship</Title>
            </div>
            <div className='card lg:card-side bg-base-100 shadow-xl mt-10'>
                {isLoading ? (
                    <Loader />
                ) : (
                    <>
                        <figure className='w-full h-auto'>
                            <img
                                src={image}
                                alt={ship?.name}
                            />
                        </figure>
                        <div className='card-body bg-zinc-700 border-l-4 border-red-500'>
                            <div>
                                <h2 className='card-title uppercase pb-2'>
                                    {ship?.name}
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nisi, illo recusandae
                                    architecto dicta iste atque beatae tempora,
                                    quisquam dignissimos sapiente dolorum,
                                    itaque maiores commodi quidem. Ea veniam
                                    quod corrupti nam.
                                </p>
                            </div>
                            <div className='md:flex'>
                                <div className='md:w-1/2'>
                                    <p>
                                        <span className='font-bold uppercase'>
                                            Model:{' '}
                                        </span>
                                        {ship?.model}
                                    </p>
                                    <p>
                                        <span className='font-bold uppercase'>
                                            Cost in Credits:{' '}
                                        </span>
                                        {ship?.cost_in_credits}
                                    </p>
                                    <p>
                                        <span className='font-bold uppercase'>
                                            Atmospheric Speed:{' '}
                                        </span>
                                        {ship?.max_atmosphering_speed}
                                    </p>
                                </div>
                                <div className='md:w-1/2'>
                                    <p>
                                        <span className='font-bold uppercase'>
                                            Manufacturer:{' '}
                                        </span>
                                        {ship?.manufacturer}
                                    </p>
                                    <p>
                                        <span className='font-bold uppercase'>
                                            Length:{' '}
                                        </span>
                                        {ship?.length}
                                    </p>
                                    <p>
                                        <span className='font-bold uppercase'>
                                            Crew:{' '}
                                        </span>{' '}
                                        {ship?.crew}
                                    </p>
                                </div>
                            </div>
                            <div className='card-actions justify-end'>
                                <BackButton>Back</BackButton>
                            </div>
                        </div>
                    </>
                )}
            </div>
            {isPilotsLoading ? <Loader /> : <PilotList />}
            {isMovieLoading ? <Loader /> : <MovieList />}
            {/* <MovieList /> */}
        </div>
    );
}
