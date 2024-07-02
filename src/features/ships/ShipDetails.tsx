import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { BackButton } from '../ui/BackButton';
import { findShip, findShipImage } from './shipsSlice';

const URL = `https://swapi.dev/api/starships/`;
const IMAGE_URL = 'https://starwars-visualguide.com/assets/img/starships/';

export function ShipDetails() {
  const dispatch = useAppDispatch();
  const { isLoading, ship, image } = useAppSelector((store) => store.ships);
  const { id } = useParams();

  useEffect(() => {
    dispatch(findShip(`${URL}${id}`));
    dispatch(findShipImage(`${IMAGE_URL}${id}.jpg`));
  }, [dispatch, id]);

  return (
    <div>
      {/* <img src={`${IMAGE_URL}${id}.jpg`} /> */}
      <img src={image} />
      <div>{isLoading ? 'Loading...' : <h1>{ship?.name}</h1>}</div>
      <BackButton>Back</BackButton>
    </div>
  );
}
