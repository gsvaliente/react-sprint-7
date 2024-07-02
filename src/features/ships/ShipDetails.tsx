import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { BackButton } from '../ui/BackButton';
import { findShip } from './shipsSlice';

const URL = `https://swapi.dev/api/starships/`;

export function ShipDetails() {
  const dispatch = useAppDispatch();
  const { isLoading, ship } = useAppSelector((store) => store.ships);
  const { id } = useParams();

  console.log(ship);

  useEffect(() => {
    dispatch(findShip(`${URL}${id}`));
  }, [dispatch, id]);

  return (
    <div>
      <div>{isLoading ? 'Loading...' : <h1>{ship?.name}</h1>}</div>
      <BackButton>Back</BackButton>
    </div>
  );
}
