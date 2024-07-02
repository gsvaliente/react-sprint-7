import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { ShipsState, findShips } from './shipsSlice';

const API_URL = 'https://swapi.dev/api/starships/?page=1';

function ShipList() {
  const dispatch = useAppDispatch();
  const { shipList, isLoading, isError }: ShipsState = useAppSelector(
    (shop) => shop.ships
  );

  useEffect(() => {
    dispatch(findShips(API_URL));
  }, [dispatch]);

  return (
    <>
      <ul>
        {isError && <p>{isError}</p>}
        {isLoading
          ? 'Loading...'
          : shipList?.map((ship) => <li key={ship.name}>{ship.name}</li>)}
      </ul>
    </>
  );
}
export default ShipList;
