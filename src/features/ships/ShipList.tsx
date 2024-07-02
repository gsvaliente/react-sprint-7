import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ShipsState, findShips } from './shipsSlice';

const API_URL = 'https://swapi.dev/api/starships/?page=1';

function ShipList() {
  const dispatch = useDispatch();
  const { shipList, isLoading, isError }: ShipsState = useSelector(
    (store) => store.ships
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
