import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { PageNav } from '../ui/PageNav';
import { ShipItem } from './ShipItem';
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
    </>
  );
}
export default ShipList;
