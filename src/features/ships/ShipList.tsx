import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { Loader } from '../../ui/Loader';
import { clearMovies } from '../movies/moviesSlice';
import { clearPilots } from '../pilots/pilotsSlice';
import { ShipItem } from './ShipItem';
import { ShipsState, clearShip } from './shipsSlice';
import { findShips, loadMore } from './shipsThunks';

const API_URL = 'https://swapi.dev/api/starships/?page=';

function ShipList() {
    const dispatch = useAppDispatch();
    const { shipList, isLoading, isError, page }: ShipsState = useAppSelector(
        store => store.ships
    );

    function handleLoadMore() {
        if (isError) return;
        dispatch(loadMore(`${API_URL}${page + 1}`));
    }

    useEffect(() => {
        if (shipList.length === 0) {
            dispatch(findShips(`${API_URL}${page}`));
        }
    }, [dispatch, page, shipList]);

    useEffect(() => {
        // if (shipList.length <= 0) return;
        dispatch(clearPilots());
        dispatch(clearShip());
        dispatch(clearMovies());
    }, [dispatch, shipList]);

    return (
        <div className='mt-5'>
            <ul className='align-center justify-center flex flex-col items-center space-y-5'>
                {/* {isError && <p>{isError}</p>} */}
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
            {!isLoading && page <= 3 && (
                <div className='join my-5 flex justify-center text-center align-middle'>
                    <button onClick={handleLoadMore}>load more</button>
                </div>
            )}
        </div>
    );
}
export default ShipList;
