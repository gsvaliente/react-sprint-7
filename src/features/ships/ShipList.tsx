import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { PageNav } from '../ui/PageNav';
import { ShipItem } from './ShipItem';
import { ShipsState, findShips, nextPage, prevPage } from './shipsSlice';

const API_URL = 'https://swapi.dev/api/starships/?page=';

function ShipList() {
  const dispatch = useAppDispatch();
  const { shipList, isLoading, isError, page }: ShipsState = useAppSelector(
    (shop) => shop.ships
  );

  useEffect(() => {
    dispatch(findShips(`${API_URL}${page}`));
  }, [dispatch, page]);

  return (
    <>
      <PageNav />
      <ul>
        {isError && <p>{isError}</p>}
        {isLoading
          ? 'Loading...'
          : shipList?.map((ship) => (
              <ShipItem
                key={ship.name}
                ship={ship}
              />
            ))}
      </ul>
      {page > 1 && <button onClick={() => dispatch(prevPage())}>prev</button>}
      {page < 4 && <button onClick={() => dispatch(nextPage())}>next</button>}
    </>
  );
}
export default ShipList;
