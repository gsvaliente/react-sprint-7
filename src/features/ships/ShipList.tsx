import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { Loader } from '../../ui/Loader';
import { ShipItem } from './ShipItem';
import {
    ShipsState,
    findShips,
    loadMore,
    nextPage,
    prevPage,
} from './shipsSlice';

const API_URL = 'https://swapi.dev/api/starships/?page=';

function ShipList() {
    const dispatch = useAppDispatch();
    const { shipList, isLoading, isError, page }: ShipsState = useAppSelector(
        shop => shop.ships
    );

    useEffect(() => {
        // dispatch(findShips(`${API_URL}${page}`));
        dispatch(findShips(`${API_URL}1`));
    }, [dispatch]);

    return (
        <div className='mt-5'>
            <ul className='align-center justify-center flex flex-col items-center space-y-5'>
                {isError && <p>{isError}</p>}
                {isLoading ? (
                    <Loader />
                ) : (
                    shipList?.map(ship => (
                        <ShipItem
                            key={ship.name}
                            ship={ship}
                        />
                    ))
                )}
            </ul>
            {!isLoading && (
                <div className='join my-5 flex justify-center text-center align-middle'>
                    {page > 1 && (
                        <button
                            className='btn join-item btn-sm'
                            onClick={() => dispatch(prevPage())}
                        >
                            «
                        </button>
                    )}
                    <button className='btn join-item btn-sm'>
                        Page {page}
                    </button>
                    {page < 4 && (
                        <button
                            className='btn join-item btn-sm '
                            onClick={() => dispatch(nextPage())}
                        >
                            »
                        </button>
                    )}
                    <button
                        onClick={() => dispatch(loadMore(`${API_URL}${page}`))}
                    >
                        load more
                    </button>
                </div>
            )}
        </div>
    );
}
export default ShipList;
